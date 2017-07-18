$(function() {
			$("#datepicker").datepicker();
		})

		window.onload = function() {
			var windowScreen = document.documentElement;
			var bgb = document.querySelector("#bgb")
			var aler = document.querySelector(".aler")
			var ale = document.querySelector("#ale")
			////////////////////////
			//ale   没宽高
			bgb.style.width = windowScreen.clientWidth + "px";
			bgb.style.height = windowScreen.clientHeight + "px";
			ale.style.width = windowScreen.clientWidth;
			ale.style.height = windowScreen.clientHeight;
			ale.clientWidth = windowScreen.clientWidth;
			ale.clientHeight = windowScreen.clientHeight;
			//////////////////////////////////////////////////////////////
			var left = (windowScreen.clientWidth - aler.clientWidth) / 2 + "px"
			var top = (windowScreen.clientHeight - aler.clientHeight) / 2 + "px"
			aler.style.left = left;
			aler.style.top = top;
		}
		$("#cancel").click(function() {
			$("#ale").css("display", "none")
			$("#bgb").css("display","none")
		})
		$("#name").blur(function() {
			if($("#name").val() === "") {
				alert("请填写")
			} else {

			}
		})
		var input = document.querySelector("#age input")
		$(".add").click(function() {
			//			alert($("#age input").val())
			input.value++;
		})
		$(".minus").click(function() {
			//			var age=document.getElementById("age input")
			if(input.value < 1) {
				$(".minus").css("cursor", "default")
			} else {
				$(".minus").css("cursor", "pointer")
				input.value--;
			}
		})
		$(".aler_title").click(function(){
			$("#ale").css("display","none")
			$("#bgb").css("display","none")
		})