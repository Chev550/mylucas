/* Contact */
// form style
function onFocus(x){
	if (x.value == x.defaultValue){
		x.value = '';
		x.style.color = 'rgba(0,0,0, 0.8)';
	}
	else if (x.value != x.defaultValue){
		x.style.color = 'rgba(0,0,0, 0.8)';
	}
}
function onBlur(x){
	if (x.value == ''){
		x.value = x.defaultValue;
		x.style.color = 'rgba(0,0,0, 0.5)';
	}
	else if (x.value != ''){
		x.style.color = 'rgba(0,0,0, 0.5)';
	}
}



// Scroll to show toTop
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('#toTop').fadeIn("fast");
    } 
    else {
        $('#toTop').fadeOut("fast");
    }
});



// Hide and Show
function show(){
	$("#launchpad").show("");
}
function hide(){
	$("#launchpad").hide("");
}