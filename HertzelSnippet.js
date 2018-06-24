(function () {
	/*! seethru 4.0.0 09-06-2018 see https://github.com/m90/seeThru for details */
	!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.seeThru=t()}(this,function(){var o=function(){try{return!1===new Event("submit",{bubbles:!1}).bubbles&&!0===new Event("submit",{bubbles:!0}).bubbles}catch(e){return!1}}(),h=["mouseenter","mouseleave","click","mousedown","mouseup","mousemove","mouseover","hover","dblclick","contextmenu","focus","blur"];function r(e){return Object.prototype.toString.call(e)}function w(e,t){t.nextSibling?t.parentNode.insertBefore(e,t.nextSibling):t.parentNode.appendChild(e)}function _(e){return e.tagName?e:"[object String]"===r(e)?document.querySelector(e):e.length?e[0]:null}function e(a){a.fn&&!a.fn.seeThru&&(a.fn.seeThru=function(){var e,n=(e=arguments,[].slice.call(e)),i=n.shift();return this.each(function(){var e=this,t=a(this);if(0===n.length){if(t.data("seeThru"))return;t.data("seeThru",new s(this,i)._init())}else if("[object String]"===r(i)){if(!t.data("seeThru"))return;t.data("seeThru").ready(function(){t.data("seeThru")[i].apply(e,n),"revert"===i&&t.data("seeThru",null)})}})})}function d(o,h){var e,d,t={},s=h.mask?1:2,u={width:parseInt(h.width,10),height:parseInt(h.height,10)},n=document.createElement("canvas"),c=n.getContext("2d"),i=document.createElement("canvas"),l=i.getContext("2d"),v=window.requestAnimationFrame||function(){for(var a=0,e=["ms","moz","webkit","o"],t=0;t<e.length;t++)if(window[e[t]+"RequestAnimationFrame"])return window[e[t]+"RequestAnimationFrame"];return function(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-a)),i=window.setTimeout(function(){e(t+n)},n);return a=t+n,i}}(),a=window.cancelAnimationFrame||function(){for(var e=["ms","moz","webkit","o"],t=0;t<e.length;t++){if(window[e[t]+"CancelAnimationFrame"])return window[e[t]+"CancelAnimationFrame"];if(window[e[t]+"CancelRequestAnimationFrame"])return window[e[t]+"CancelRequestAnimationFrame"]}return function(e){clearTimeout(e)}}(),g=null,f=function(e){var t,n,i,a,r=o.currentTime;if(g!==r&&1<o.readyState){for(g=r,c.drawImage(o,0,0,u.width,u.height*s),t=c.getImageData(0,0,u.width,u.height),n=c.getImageData(0,u.height,u.width,u.height).data,h.unmult&&function(e,t){for(var n=3,i=e.data.length;n<i;n+=4)e.data[n]=t[n-1],e.data[n-3]=e.data[n-3]/(t[n-1]?t[n-1]/255:1),e.data[n-2]=e.data[n-2]/(t[n-1]?t[n-1]/255:1),e.data[n-1]=e.data[n-1]/(t[n-1]?t[n-1]/255:1)}(t,n),i=3,a=t.data.length;i<a;i+=4)t.data[i]=h.alphaMask?n[i-1]:Math.max(n[i-1],n[i-2],n[i-3]);l.putImageData(t,0,0,0,0,u.width,u.height)}e&&(d=v(function(){f(!0)}))},r=function(e){if("IMG"!==e.tagName)throw new Error("Cannot use non-image element as mask!");e.width=u.width,e.height=u.height,h.alphaMask?c.putImageData(function(e,t){var n,i=document.createElement("canvas"),a=i.getContext("2d");i.width=t.width,i.height=t.height,a.drawImage(e,0,0,t.width,t.height);for(var r=3,o=(n=a.getImageData(0,0,t.width,t.height)).data.length;r<o;r+=4)n.data[r-1]=n.data[r-2]=n.data[r-3]=n.data[r],n.data[r]=255;return n}(e,u),0,u.height):c.drawImage(e,0,u.height,u.width,u.height),e.style.display="none"};this.startRendering=function(){return f(!0),this},this.stopRendering=function(){return a(d),this},this.teardown=function(){for(var e in a(d),o.parentNode.removeChild(o.nextSibling),o.parentNode.removeChild(o.nextSibling),t)Object.prototype.hasOwnProperty.call(t,e)&&(o.style[e]=t[e]);return this},this.updateMask=function(e){return r(e),this},this.getCanvas=function(){return i},this.getPoster=function(){return e};var m=o.getBoundingClientRect();for(var p in u.height&&u.width||(o.width||o.height?o.height?o.width?(u.width=u.width||m.width,u.height=u.height||m.height/s):(u.width=u.width||m.height*(o.videoWidth/Math.floor(o.videoHeight/s)),u.height=u.height||m.height):(u.width=u.width||m.width,u.height=u.height||m.width/(o.videoWidth/Math.floor(o.videoHeight/s))):(u.width=u.width||o.videoWidth,u.height=u.height||o.videoHeight/s)),n.width=u.width,n.height=2*u.height,n.style.display="none",n.className=h.namespace+"-buffer",i.width=u.width,i.height=u.height,i.className=h.namespace+"-display",w(n,o),w(i,o),h.mask&&r(_(h.mask)),h.poster&&o.poster&&((e=document.createElement("div")).className="seeThru-poster",e.style.cssText=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n+": "+e[n]+";");return t.join("")}({width:u.width+"px",height:u.height+"px",position:"absolute",top:0,left:0,"background-size":"cover","background-position":"center","background-image":'url("'+o.poster+'")'}),w(e,o)),h.videoStyles)Object.prototype.hasOwnProperty.call(h.videoStyles,p)&&(t[p]=window.getComputedStyle(o)[p],o.style[p]=h.videoStyles[p])}function s(e,t){var n=this,i=!1,a=[],r={start:"external",end:"stop",mask:!1,alphaMask:!1,width:null,height:null,poster:!1,unmult:!1,videoStyles:{display:"none"},namespace:"seeThru"};if(t=t||{},n._video=_(e),!n._video||"VIDEO"!==n._video.tagName)throw new Error("Could not use specified source");n._options=function(e){for(var t in r)r.hasOwnProperty(t)&&(t in e||(e[t]=r[t]));return e}(t),n._init=function(){function e(){function e(){n._video.play(),n._options.poster?n._seeThru.getPoster().removeEventListener("click",e):n._seeThru.getCanvas().removeEventListener("click",e)}if(u.has(n._video))throw new Error("seeThru already initialized on passed video element!");n._seeThru=new d(n._video,n._options),"clicktoplay"===n._options.start&&(n._options.poster?n._seeThru.getPoster().addEventListener("click",e):n._seeThru.getCanvas().addEventListener("click",e)),"rewind"===n._options.end?n._video.addEventListener("ended",function(){n._video.currentTime=0,n._seeThru.getCanvas().addEventListener("click",e)}):"stop"!==n._options.end&&n._video.addEventListener("ended",function(){n._video.currentTime=0,n._video.play()}),n._options.poster&&n._video.poster&&(n._video.addEventListener("play",function(){n._seeThru.getPoster().style.display="none"}),n._video.addEventListener("pause",function(){n._seeThru.getPoster().style.display="block"})),h.forEach(function(t){n._seeThru.getCanvas().addEventListener(t,function(){var e;o?e=new Event(t):(e=document.createEvent("Event")).initEvent(t,!0,!0),n._video.dispatchEvent(e)})}),n._seeThru.startRendering(),i=!0,u.push(n._video),a.forEach(function(e){e(n,n._video,n.getCanvas())})}return 0<n._video.readyState?e():n._video.addEventListener("loadedmetadata",e),n},n.getCanvas=function(){return n._seeThru.getCanvas()},n.play=function(){return n._video.play(),n},n.pause=function(){return n._video.pause(),n},n.revert=function(){n._seeThru.teardown(),u.remove(n._video)},n.updateMask=function(e){return n._seeThru.updateMask(_(e)),n},n.ready=function(e){return i?setTimeout(function(){e(n,n._video,n.getCanvas())},0):a.push(e),n}}window.jQuery&&e(window.jQuery);var u=new function(){var n=[];this.push=function(e){return e?(n.push(e),e):null},this.has=function(t){return n.some(function(e){return e===t})},this.remove=function(t){n=n.filter(function(e){return e!==t})}};return{create:function(e,t){return new s(e,t)._init()},attach:e}});

	const VIDEO_URL = 'https://hertzelnotfound.firebaseapp.com/hertzel_not_found.mp4';

	// Video element
	let vid = document.createElement('video');
	vid.id = 'hertzelVideo';
	vid.style.display = 'none';
	vid.setAttribute('autoplay', '');
	vid.setAttribute('playsinline', '');
	let vidSrc = document.createElement('source');
	vidSrc.setAttribute('type','video/mp4');
	vid.append(vidSrc);

	window.document.body.append(vid);

	let video = document.getElementById('hertzelVideo');
	video.addEventListener('loadedmetadata', function () {
		window.hertzelNotFoundVideo = window.seeThru.create(video)
		                                    .ready(()=>{

			                                    // !!! Use this or any other condition... !!! ///

			                                    document.getElementsByTagName('html')[0].onclick = function () {
				                                    window.hertzelNotFoundVideo.play();
			                                    }

		                                    });
	});
	loadAsObjectURL(video, VIDEO_URL);


	// support for cross origin
	function loadAsObjectURL(video, url) {
		let xhr = new XMLHttpRequest();
		xhr.responseType = 'blob';
		xhr.onload = function (response) {
			return video.src = URL.createObjectURL(xhr.response);
		};
		xhr.onerror = function () {
			console.log("Couldn\'t load video");
		};
		xhr.open('GET', url, true);
		xhr.send();
		video.onload = function () { return URL.revokeObjectURL(video.src); };
	}

	// style
	let css = '.seeThru-display {position: fixed; bottom: -3px; height: 270px; left: -238px; z-index:214748364}',
		head = document.head || document.getElementsByTagName('head')[0],
		style = document.createElement('style');

	style.type = 'text/css';
	style.appendChild(document.createTextNode(css));
	head.appendChild(style);
})();