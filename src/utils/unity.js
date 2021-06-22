/*
function sendMessageToUnity(fun,m_Param='' ) {
  window.vuplex.postMessage({
    func : "ClickWebCallBack",
    FuncName: fun,
    m_Param :m_Param
  });
}
*/

// 监听unity传入的方法
if (window.vuplex) {
  addMessageListener();
} else {
  window.addEventListener('vuplexready', addMessageListener);
}

window.addEventListener("message", (event) => {
          console.log(event.data);
  });
// 收到Unity消息
function unitymessage(event) {
  console.log(event);
}

// 调戏器版本
export default function addMessageListener() { 
     try {
          window.vuplex.addEventListener('message', function(event) {
            console.log(event);
            //let res = event.data;
            //var obj = JSON.parse(res);
            //window.activepage[obj.FuncName](obj);
        });
     } catch (error) {
      console.log(error)
     } 
}
 function SendMessageToUnity(systemName, funcName, text) {
          // 改成嵌入UNITY的IFRAME
          window.frames[0].postMessage({type:"w2u", data: {sysname: systemName, func: funcName, text: text}},"*")
      }