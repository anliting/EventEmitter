import fs from'fs'
let fsp=fs.promises
;(async()=>{
    fsp.copyFile('license','dist/node/license')
    fsp.copyFile('main/EventEmitter.mjs','dist/node/EventEmitter.mjs')
    fsp.writeFile('dist/node/package.json',JSON.stringify({
        name:'@anliting/event-emitter',
        version:'1.0.0',
        main:'EventEmitter.mjs',
    }))
    let[license,code]=await Promise.all([
        fsp.readFile('license','utf8'),
        fsp.readFile('main/EventEmitter.mjs','utf8'),
    ])
    fsp.writeFile('dist/EventEmitter.mjs',`/*${license}*/${code}`)
})()
