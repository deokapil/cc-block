# cc-block
Blocks execution of scripts in HTML can be used to block third party and domain cookies

Steps to execution

1. clone the repo
2. cd cc-block
2. npm install
3. npm run build
4. python3 -m http.server (Will start simple serveror you can use any other)
5. got to url http://localhost:8000/test/abc.html


Works with
1. script with src tag.
2. can skip a script by specifing DO_NOT_BLOCK as window variable
3. Exposes library "BLK"
4. unblock all blocked scripts by calling function "BLK.unblock()"


TODO:
1. Add support for script without src tags.
2. Add CSS support 
3. Add support for blocking Iframe and banners.

