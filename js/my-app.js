// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});




// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

 var message = {
    text: "This is a test message"
    };


function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
   
}

function onDeviceReady() {
    
   function shareButton() {
    
   
       window.socialmessage.send(message);
    
  
}
}
