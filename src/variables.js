export const TYPE_ATTRIBUTE = 'javascript/blocked'

export const patterns = {
    blacklist: window.BLOCK_EM,
    whitelist: window.DO_NOT_BLOCK
}

// Backup list containing the original blacklisted script elements
export const backupScripts = {
    blacklisted: []
}