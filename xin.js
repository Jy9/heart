function xinInit(obj) {
	
	obj.time = obj.time || 200;
	var body = document.body;
	var xin = document.createElement("div");
	xin.classList.add("xin")
	body.appendChild(xin)

	if (obj.type == "touch") {
		if (document.body.ontouchstart !== undefined) {
			var status = true;
			body.ontouchmove = function() {
				if(status === false) return;
				status = false;
				createXin()
				var interVal = setInterval(function(){
					status = true
					clearInterval(interVal)
				},obj.time)
			}
		} else {
			var status = true;
			body.onmousemove = function() {
				if(status === false) return;
				status = false;
				createXin()
				var interVal = setInterval(function(){
					status = true
					clearInterval(interVal)
				},obj.time)
			}
		}
	} else {
		body.onclick = function() {
			createXin()
		}
	}

	function createXin() {
		//生成随机颜色
		var rgb = []
		for (var i = 0; i < 3; i++) {
			rgb.push(parseInt(Math.random() * 255))
		}
		rgb.push(0.6)
		
		//获取鼠标或手指位置
		var e = window.event;
		var position = []
		if (document.body.ontouchstart !== undefined) {
			var touch = event.targetTouches[0];
			position = [touch.pageX,touch.pageY]
		}else{
			position = [e.clientX,e.clientY]
		}
		var para = document.createElement("p");
		para.classList.add("xin-item")
		para.innerHTML = "❤"
		para.style.color = "rgba(" + rgb + ")"
		para.style.left = position[0] + "px"
		para.style.top = position[1] + "px"
		xin.appendChild(para)
		delXin(para)
	}

	function delXin(dom) {
		setTimeout(function() {
			xin.removeChild(dom)
		}, 800)
	}
}
