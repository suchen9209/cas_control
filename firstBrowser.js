const { BrowserWindow } = require('electron')
const path = require('path')



function showBrowser(){
    const modalPath = path.join('file://',__dirname,'index.html')
    let win = new BrowserWindow({ width: 1800, height: 1200 }) 
    win.on('close',() =>{ win = null })
    win.loadURL(modalPath)
    win.show()
}
module.exports = showBrowser