// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff',
    url: 'screens/tab1.js'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 1',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win1.add(label1);

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff',
    url: 'screens/tab1.js'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);

//
// create base UI tab and root window
//
var win3 = Titanium.UI.createWindow({  
    title:'Tab 3',
    backgroundColor:'#fff',
    url: 'screens/tab1.js'
});
var tab3 = Titanium.UI.createTab({  
    icon:'171-sun@2x.png',
    title:'Tab 3',
    window:win3
});


//
// create base UI tab and root window
//

var tab4 = Titanium.UI.createTab({  
    icon:'20-gear2@2x.png',
    title:'Tab 4',
    window:
   		Titanium.UI.createWindow({  
       		title:'Tab 4',
       		backgroundColor:'#fff',
       		url: 'screens/tab4.js'
     	})
});

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3);  
tabGroup.addTab(tab4);  


// open tab group
tabGroup.open();
