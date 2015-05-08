// inView
// 0.2
// 
function getViewportHeight() {
	if(window.innerHeight) {
		return window.innerHeight;
	}
	else if(document.body && document.body.offsetHeight) {
		return document.body.offsetHeight;
	}
	else {
		return 0;
	}
}
function inView(elem, nearThreshold) {
	var viewportHeight = getViewportHeight();
	var scrollTop = (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
	var elemTop = elem.offset().top;
	var elemHeight = elem.height();
	nearThreshold = nearThreshold || 0;
	if((scrollTop + viewportHeight + nearThreshold) > (elemTop + elemHeight)) {
		return true;
	}
	return false;
}

function loadVisibleImages() {
	jQuery('img[data-src]').each(function() {
		if(jQuery(this).is(':visible')) {
			if(inView(jQuery(this), 300)) {
				this.src = jQuery(this).attr('data-src');
			}
		}
	});
}

jQuery(window).load(function(){
    loadVisibleImages();
});

jQuery(window).scroll(function() {
	loadVisibleImages();
});
