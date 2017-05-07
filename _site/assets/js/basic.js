/* Contact */
// form style
function onFocus(x){
	if (x.value == x.defaultValue){
		x.value = '';
		x.style.color = '#303030';
	}
	else if (x.value != x.defaultValue){
		x.style.color = '#303030';
	}
}
function onBlur(x){
	if (x.value == ''){
		x.value = x.defaultValue;
		x.style.color = 'gray';
	}
	else if (x.value != ''){
		x.style.color = 'gray';
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
	$("#footer1").hide();
	$("#footer2").show();
	return false;
}
function hide(){
	$("#footer2").hide();
	$("#footer1").show();
}