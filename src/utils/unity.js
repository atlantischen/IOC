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
// if (window.vuplex) {
//   addMessageListener();
// } else {
//   window.addEventListener('vuplexready', addMessageListener);
// }

// window.addEventListener("message", (event) => {
//           console.log(event.data);
//   });
// // 收到Unity消息
// function unitymessage(event) {
//   console.log(event);
// }

// 调戏器版本
// export default function addMessageListener() { 
//      try {
//           window.vuplex.addEventListener('message', function(event) {
//             console.log(event);
//             //let res = event.data;
//             //var obj = JSON.parse(res);
//             //window.activepage[obj.FuncName](obj);
//         });
//      } catch (error) {
//       console.log(error)
//      } 
// }

export function SendMessageToUnity(action, data) {
  if (window.debug) {
    window.vuplex.postMessage(JSON.stringify({
      action,
      arg: JSON.stringify(data),
    }));
  } else {
    if (!window.iframe) {
      return this.$message.info('通讯失败！')
    }
    window.iframe.contentWindow.postMessage({
        type: "w2u",
        sysname: "System/WebEventListen",
        func: "message",
        text: JSON.stringify({
          action,
          arg: !data ? "{}" : JSON.stringify(data)
        })
      },
      '*');
  }

}