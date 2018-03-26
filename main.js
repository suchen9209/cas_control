const {app} = require('electron')
const {ipcMain,dialog} = require('electron')
const showBrowser = require('./firstBrowser')

app.on('ready',()=>{
  showBrowser()  
})