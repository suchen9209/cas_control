const {app,BrowserWindow} = require('electron');
const {ipcMain,dialog} = require('electron');
const path = require('path');
const http = require('http');

var all_data;
http.get('http://seed.fakecn.com:16443/cas/cas_data/final.json',(res)=>{
  const { statusCode } = res;
  const contentType = res.headers['content-type'];

  let error;
  if (statusCode !== 200){
    error = new Error('请求失败。\n' + `状态码：${statusCode}`);
  }else if(!/^application\/json/.test(contentType)){
    error = new Error('无效的content-type.\n' + `期望application/json 但获取的是${contentType}`);
  }
  if(error){
    console.error(error.message);
    res.resume();
    return;
  }

  res.setEncoding('utf-8');
  let rawData = '';
  res.on('data',(chunk)=>{
    rawData += chunk;
  });
  res.on('end',()=>{
    try{
      const parseData = JSON.parse(rawData);
      all_data = parseData;
    }catch (e){
      console.error(e.message);
    }
  });
}).on('error',(e) => {
  console.error(`错误：${e.message}`);
})

app.on('ready',()=>{
  const modalPath = path.join('file://',__dirname,'/html_files/index.html')
  let win = new BrowserWindow({ width: 1800, height: 1200 }) 
  win.on('close',() =>{ win = null })
  win.loadURL(modalPath)
  win.show()
})