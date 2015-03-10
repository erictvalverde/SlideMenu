var deviceWidth = (OS_IOS) ? Ti.Platform.displayCaps.platformWidth : Ti.Platform.displayCaps.platformWidth / Ti.Platform.displayCaps.logicalDensityFactor;
$.contentViewWrapper.width = deviceWidth;

var slideOpenMenu = Ti.UI.createAnimation({
	left:0,
	duration:200
});
var slideOpenContent = Ti.UI.createAnimation({
	left:250,
	duration:300
});
var slideCloseMenu = Ti.UI.createAnimation({
	left:'-250',
	duration:300
});
var slideCloseContent = Ti.UI.createAnimation({
	left:0,
	duration:200
});

//Open and close menu Btn
var menuOpened = false;

$.handleMenuSlide = function() {
	if(!menuOpened){
		$.menuView.animate(slideOpenMenu);
		$.contentViewWrapper.animate(slideOpenContent);
		$.blockContent.width = Ti.UI.FILL;
		$.blockContent.animate({opacity: 0.4});
		$.blockContent.addEventListener('click', $.handleMenuSlide);
	}else{
		$.menuView.animate(slideCloseMenu);
		$.contentViewWrapper.animate(slideCloseContent);
		$.blockContent.animate({opacity: 0}, function(){$.blockContent.width = 0;});
		$.blockContent.removeEventListener('click', $.handleMenuSlide);
	}
	menuOpened = !menuOpened;
};


// Create the menu items
var menuNodes = [
	{ id: 0, title: "Eric Valverde", action: "profile", image: "/images/SlideMenu/menu_home_icon.png" },
	{ id: 1, title: "Nav One", action: "section1", image: "" },
	{ id: 2, title: "Nav Two", action: "section2", image: "" },
	{ id: 3, title: "Nav Three", action: "section3", image: "" },
	{ id: 4, title: "Nav Four", action: "section4", image: "" },
	{ id: 5, title: "Nav Five", action: "section5", image: "" },
	{ id: 6, title: "Nav Six", action: "section6", image: "" },
	{ id: 7, title: "Nav Seven", action: "section7", image: "" },
	{ id: 7, title: "Logout", action: "logout", image: "" }
];

var items = [];

_.each(menuNodes, function(item, index){
	items.push(Widget.createController('menuItemRow', {data: item}).getView());
});

$.menuView.setData(items);

//Handle the click on each menu item
var handleMenuItemClick = function(e) {
	Ti.API.warn('Item Click: ' + JSON.stringify(e));
	var action = e.source.data.action;
	switch(action){
		case 'profile':
			Ti.API.info('Open Profile');
		break;
		case 'section1':
			Ti.API.info('section1');
		break;
		case 'section2':
			Ti.API.info('section2');
		break;
		case 'section3':
			Ti.API.info('section3');
		break;
		case 'sectio4':
			Ti.API.info('section4');
		break;
		case 'section5':
			Ti.API.info('section5');
		break;
		case 'section6':
			Ti.API.info('section6');
		break;
		case 'section7':
			Ti.API.info('section7');
		break;
		case 'logout':
			Ti.API.info('Logout');
		break;
		default:
			Ti.API.info('Do nothing');
		break;
	};
};
$.menuView.addEventListener('click', handleMenuItemClick);