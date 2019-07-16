import fs from'fs'
let fsp=fs.promises
;(async()=>{
    fsp.copyFile('license','dist/node/license')
    fsp.copyFile('main/EventEmmiter.mjs','dist/node/EventEmmiter.mjs')
    fsp.writeFile('dist/node/package.json',JSON.stringify({
        name:'@anliting/event-emmiter',
        version:'1.0.0',
        main:'EventEmmiter.mjs',
    }))
    let[license,code]=await Promise.all([
        fsp.readFile('license','utf8'),
        fsp.readFile('main/EventEmmiter.mjs','utf8'),
    ])
    fsp.writeFile('dist/EventEmmiter.mjs',`/*${license}*/${code}`)
})()
