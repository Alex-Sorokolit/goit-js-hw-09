!function(){var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};var e={};function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,o){e&&n(t.prototype,e);o&&n(t,o);return t};var o={startBtn:document.querySelector("button[data-action-start]"),stopBtn:document.querySelector("button[data-action-stop]"),clockFace:document.querySelector(".js-clockface")},c={intervalId:null,isActive:!1,start:function(){if(this.isActive)console.log("Інтервал вже був запущений");else{var t=Date.now();this.isActive=!0,console.log("Інтервал запущений"),this.intervalId=setInterval((function(){var e,n,c,a,i=r(Date.now()-t);console.log(i),n=(e=i).hours,c=e.minutes,a=e.seconds,o.clockFace.textContent="".concat(n,":").concat(c,":").concat(a)}),1e3)}},stop:function(){clearInterval(this.intervalId),this.isActive=!1,console.log(this.intervalId),console.log("Інтервал зупинений")}};function a(t){return String(t).padStart(2,"0")}function r(t){return{hours:a(Math.floor(t%864e5/36e5)),minutes:a(Math.floor(t%36e5/6e4)),seconds:a(Math.floor(t%6e4/1e3))}}o.startBtn.addEventListener("click",(function(){c.start()})),o.stopBtn.addEventListener("click",(function(){c.stop()}))}();
//# sourceMappingURL=02-timer.d1c22c60.js.map
