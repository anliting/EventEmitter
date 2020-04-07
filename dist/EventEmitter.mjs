/*© An-Li Ting (anliting.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/function EventEmmiter(){
    this._listeners={}
}
EventEmmiter.prototype._keyExist=function(key){
    return key in this._listeners
}
EventEmmiter.prototype._ensureKeyExist=function(key){
    if(!(key in this._listeners))
        this._listeners[key]=new Map
}
EventEmmiter.prototype.emit=function(key,event){
    if(!this._keyExist(key))
        return
    for(let[listener,doc]of[...this._listeners[key].entries()]){
        if(doc.once)
            this.off(key,listener)
        listener(event)
    }
}
EventEmmiter.prototype.off=function(key,listener){
    if(!this._keyExist(key))
        return
    this._listeners[key].delete(listener)
}
EventEmmiter.prototype.on=function(key,listener){
    this._ensureKeyExist(key)
    this._listeners[key].set(listener,{once:false})
}
EventEmmiter.prototype.once=function(key,listener){
    this._ensureKeyExist(key)
    this._listeners[key].set(listener,{once:true})
}
export default EventEmmiter
