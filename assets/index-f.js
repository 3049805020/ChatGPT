  //禁止F12
  
  //平台、设备和操作系统 
    // var system = {
    //   win: false,
    //   mac: false,
    //   xll: false
    // };
    // //检测平台
    // var p = navigator.platform;
    // system.win = p.indexOf("Win") == 0;
    // system.mac = p.indexOf("Mac") == 0;
    // system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
    // if (system.win || system.mac || system.xll) {
    //   window.location.href = "http://www.s1eo.com";
    // } else {
    // }
  
  
function fuckyou(){
window.location="/";
}
function click(e) {
if (document.all) {
  if (event.button==2||event.button==3) {
alert("欢迎光临，有什么需要帮忙的话，请与站长联系！谢谢您的合作！！！");
oncontextmenu='return false';
}
}
if (document.layers) {
if (e.which == 3) {
oncontextmenu='return false';
}
}
}
if (document.layers) {
fuckyou();
document.captureEvents(Event.MOUSEDOWN);
}
document.onmousedown=click;
document.oncontextmenu = new Function("return false;")
document.onkeydown =document.onkeyup = document.onkeypress=function(){ 
if(window.event.keyCode == 123) { 
fuckyou();
window.event.returnValue=false;
return(false); 
} 
}

    document.onkeydown = function(event){
      
        
        
        
        if (event.ctrlKey && window.event.keyCode==83){	//禁用ctrl + s 功能
            
            return false;
        }
        
        
        
        if (event.ctrlKey && window.event.keyCode==73){	 //ctrl + shift + i
            return false;
        }

        if (event.ctrlKey && window.event.keyCode==123){	//禁用发2 功能
           return false;
        }
        
  window.onkeydown = function (e) {
    var keyCode = e.keyCode || e.which || e.charCode;
    var ctrlKey = e.ctrlKey || e.metaKey;
    console.log(keyCode + "--" + keyCode);
    if (ctrlKey && keyCode == 85) {
      e.preventDefault();
    }
    if (arr.indexOf(keyCode) > -1) {
      e.preventDefault();
    }
  }
        
    }






((function() {
    var callbacks = [],
        timeLimit = 50,
        open = false;
    setInterval(loop, 1);
    return {
        addListener: function(fn) {
            callbacks.push(fn);
        },
        cancleListenr: function(fn) {
            callbacks = callbacks.filter(function(v) {
                return v !== fn;
            });
        }
    }

    function loop() {
        var startTime = new Date();
        debugger;
        if (new Date() - startTime > timeLimit) {
            if (!open) {
                callbacks.forEach(function(fn) {
                    fn.call(null);
                });
            }
            open = true;
            window.stop();
            alert('大佬别扒了！');
            document.body.innerHTML = "";
        } else {
            open = false;
        }
    }
})())



  
     //按键触发
document.onkeydown = function(){
    //禁止ctrl+s
  if (event.ctrlKey && window.event.keyCode==83){
  return false;
  }
  }