var slideMenu = Alloy.createWidget("SlideMenu", "widget", {});
$.mainWindow.add(slideMenu.getView());

if(OS_IOS){
	
	$.menuBtn.addEventListener('click', slideMenu.handleMenuSlide);
	$.navGroup.open();
	
}else if(OS_ANDROID){
	
	//Create the action bar on android devices
	if(OS_ANDROID){
		var actionBar;
		
		$.mainWindow.addEventListener("open", function() {
	
	        if (! $.mainWindow.activity ) {
	            Ti.API.error("Can't access action bar on a lightweight window.");
	        } else {
	            actionBar = $.mainWindow.activity.actionBar;
	            if (actionBar) {
	               actionBar.icon = '/images/menu_icon.png';
	                actionBar.onHomeIconItemSelected = function() {
	                    slideMenu.handleMenuSlide();
	                };
	            }
	        }
		    
		});
	}
	$.mainWindow.open();
}