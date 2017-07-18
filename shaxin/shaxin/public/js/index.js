$(document).ready(function() {
	$(".nav").find("li:has(ul)").children("a")
		.click(function() {
			if($(this).next("ul").is(":hidden")) {
				$(this).next("ul").slideDown("slow");
				if($(this).parent("li").siblings("li").children("ul").is(":visible")) {
					$(this).parent("li").siblings("li").find("ul").slideUp("1000");
				}
			} else {
				$(this).next("ul").slideUp("normal");
				$(this).next("ul").children("li").find("ul").fadeOut("normal");
			}
		});
	$(".nav li a").click(function() {
		if($(this).has(".onNav")) {
			$(this).addClass("onNav").parent("li").siblings("li").find("a").removeClass("onNav")
		}
	})
});

function allSelect(check_v, checkname) {
	var v_item = document.getElementsByName(check_v);
	var items = document.getElementsByName(checkname);
	for(var i = 0; i < items.length; ++i) {
		if(v_item[0].checked) {
			items[i].checked = true;
		} else {
			items[i].checked = false;
		}
	}
}

function singleSelect2parent(check_v, checkname) {
	var v_item = document.getElementsByName(check_v);
	var items = document.getElementsByName(checkname);
	var childStatus = true;
	for(var i = 0; i < items.length; ++i) {
		childStatus = (childStatus && items[i].checked);
	}
	if(childStatus) {
		v_item[0].checked = true;
	} else {
		v_item[0].checked = false;
	}
}