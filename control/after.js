const {BrowserWindow,ipcMain,ipcRenderer} = require('electron').remote
const {dialog} = require('electron').remote
const path = require('path');

const selectDriBtn = document.getElementById('after_t')

selectDriBtn.addEventListener('click', (event)=>{
    const modalPath = path.join('file://', __dirname, '../html_files/After_t.html')
    let win = new BrowserWindow({ width: 1920, height: 1080 })
    win.on('close', () => { win = null })
    win.loadURL(modalPath)
    win.show()
})

const selectDriBtnct = document.getElementById('after_ct')
selectDriBtnct.addEventListener('click', (event)=>{
    const modalPath = path.join('file://', __dirname, '../html_files/After_ct.html')
    let win = new BrowserWindow({ width: 1920, height: 1080 })
    win.on('close', () => { win = null })
    win.loadURL(modalPath)
    win.show()
})

const mvpBtn = document.getElementById('mvp')
mvpBtn.addEventListener('click', (event)=>{
    const modalPath = path.join('file://', __dirname, '../html_files/MVP.html')
    let win = new BrowserWindow({ width: 1920, height: 1080 })
    win.on('close', () => { win = null })
    win.loadURL(modalPath)
    win.show()
})

ipcMain.on('get-setting', (event, arg) => {
    console.log(arg)  // prints "ping"
    event.returnValue = mvp_id
})