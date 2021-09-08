import { backupScripts, TYPE_ATTRIBUTE } from './variables'
import { isOnBlacklist } from './checks'

export const observer = new MutationObserver(mutations => {
    for (let i = 0; i < mutations.length; i++) {
        const { addedNodes } = mutations[i];
        for(let i = 0; i < addedNodes.length; i++) {
            const node = addedNodes[i]
            // For each added script tag
            if(node.nodeType === 1 && node.tagName === 'SCRIPT') {
                const src = node.src
                const type = node.type
                console.log("trying ..."  + src)
                if(isOnBlacklist(src, type)) {
                    // remove attribute src -- copy  data-cd-src to  
                    console.log("Blocking ..."  + src)
                    backupScripts.blacklisted.push([node, node.type])
                    node.type = TYPE_ATTRIBUTE

                    const beforeScriptExecuteListener = function (event) {
                        if(node.getAttribute('type') === TYPE_ATTRIBUTE)
                            event.preventDefault()
                        node.removeEventListener('beforescriptexecute', beforeScriptExecuteListener)
                    }
                    node.addEventListener('beforescriptexecute', beforeScriptExecuteListener)
                    node.parentElement && node.parentElement.removeChild(node)
                }
            }
        }
    }
})

// Starts the monitoring
observer.observe(document.documentElement, {
    childList: true,
    subtree: true
})