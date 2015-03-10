exports.openWin = function(navGroup, winName, params) {
	
	var windowParams = params || {};
	Ti.API.info('windowParams: ' + windowParams);
	var w = Alloy.createController(winName, windowParams).getView();
	
	if (OS_ANDROID) {
		w.addEventListener('open', function(e) {
			if ( ! w.getActivity() ) {
	            Ti.API.error("Can't access action bar on a lightweight window.");
	        } else {
	            actionBar = w.activity.actionBar;
	            if ( actionBar ) {
	            	var appSection = 'food'; //winName.match(/\w*(?=\/)/); // e.g. matches 'food' in food/diary
	            	var barImage = '/images/turk-bg.png'; // default is Me sectino colour
	           
	            	switch (appSection) {
	            		case 'profile':
	            			barImage = '/images/turk-bg.png';
	            			break;
	            		case 'food':
	            			barImage = '/images/green-bg.jpg';
	            			break;
	            		case 'fitness':
	            			barImage = '/images/orange-bg.jpg';
	            			break;
	            		case 'wellbeing':
	            			barImage = '/images/blue-light-bg.jpg';
	            			break;
	            		case 'progress':
	            			barImage = '/images/blue-dark-bg.jpg';
	            			break;
	            		case 'settings':
	            			barImage = '/images/purple-bg.jpg';
	            			break;
	            		default:
	            			Ti.API.info('default: ' + appSection);
	            			break;
	            	}
	                actionBar.displayHomeAsUp = true;
	                actionBar.backgroundImage = barImage;
	                actionBar.icon = '/images/appicon.png';
	                actionBar.onHomeIconItemSelected = function() {
	                    w.close();
	                };
	            }
	            w.activity.invalidateOptionsMenu();
	        }
		});
		w.open();
		w.orientationModes = [Ti.UI.PORTRAIT];
		Ti.API.info('window is open');
		
	} else {
		Ti.API.info('navGroup: ' + navGroup);
		navGroup.openWindow(w,{animated:true});
	}
};