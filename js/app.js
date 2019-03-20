firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
  
      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";
  
      var user = firebase.auth().currentUser;
  
      if(user != null){
  
        var email_id = user.email;
        document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
  
      }
  
    } else {
      // No user is signed in.
  
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
  
    }
  });
  
  function login(){
  
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });
  
  }
  
  function logout(){
    firebase.auth().signOut();
  }
  
  /**
 * Image Framer v.1.1.
 *
 * Copyright 2019, Madhu N
 * Licensed under: MIT ( more info in the included copyright.txt )
 */

(function($){
  $.fn.extend({
      imageframer: function(options) {

          var defaults = {
              frameType: 'wood-light', // Full list of frames can be found from the website.
              frameSize: 1,           // Numbers from 1 to 4. 1 is the smallest and 4 is the largest.
              innerShadow: 1,         // Numbers from 1 to 4. 1 is the smallest / lightest and 4 is the biggest / darkest.
              disable: false,          // Enables you to disable the plugin.
              callback: function() {}
          };

          return this.each(function() {

              var obj = $(this),
                  objD = obj.data(),
                  o = $.extend(true, {}, defaults, options, objD );

          // Don't do nuffing if disable is set to true.
          // If you for example don't want to frame one specific image, you can set disable to true with data-attribute, or just disable Image Framer all together through custom options.
          if ( o.disable !== true ) {

              // A few fail-safes to make sure that we stay within the limits of the plugin.
              var fs = o.frameSize > 4 ? 4 : o.frameSize,
                  is = o.innerShadow > 4 ? 4 : o.innerShadow,
                  frameType = o.frameType.toLowerCase(),
                  frameSize = 'size' + fs;

              // Generate wrapping elements.
              obj
               .addClass('if-image')
               .wrap(
                  '<div class="if-equalizer">' +
                      '<div class="if-wrap if-'+ frameType +' if-'+ frameSize +'"></div>' +
                  '</div>'
              );

              var sifWrap = obj.parent('.if-wrap'),
                  background = [ ' background-image: url( imageframer/frames/'+ frameType + '-' + frameSize + '/', '.png ); ' ];

              // - Generate frame elements.
              // - Fetch proper background images for each element.
              // - This could be done purely with css and it would even have some benefits, but this is a bit more flexible as far as making new frames go and requires less code.
              $(
                  '<span class="if-top if-sides" style="'+ background[0] + 'top-bottom' + background[1] +'"></span>' +
                  '<span class="if-right if-sides" style="'+ background[0] + 'right-left' + background[1] +'"></span>' +
                  '<span class="if-bottom if-sides" style="'+ background[0] + 'top-bottom' + background[1] +'"></span>' +
                  '<span class="if-left if-sides" style="'+ background[0] + 'right-left' + background[1] +'"></span>' +
                  '<span class="if-top-right if-corners" style="'+ background[0] + 'corners' + background[1] +'"></span>' +
                  '<span class="if-bottom-right if-corners" style="'+ background[0] + 'corners' + background[1] +'"></span>' +
                  '<span class="if-bottom-left if-corners" style="'+ background[0] + 'corners' + background[1] +'"></span>' +
                  '<span class="if-top-left if-corners" style="'+ background[0] + 'corners' + background[1] +'"></span>'
              ).insertBefore( obj );

              // Inner shadow
              if ( o.innerShadow ) {

                  $('<img class="if-innerShadow" src="imageframer/innerShadows/is-'+ is +'.png" alt="" />').appendTo( sifWrap );
              }


              // Callback
              // You can't set any callback code as data-attribute, but you can still disable it via data-attribues. i.e. <div data-callback="false"></div>.
              if ( o.callback !== false ) {
                  o.callback.call( sifWrap );
              }
          }

          });
      }
  });
})(jQuery);

jQuery(document).ready(function($){
  
    window.onload = function (){
      $(".bts-popup").delay(1000).addClass('is-visible');
      }
    
      //open popup
      $('.bts-popup-trigger').on('click', function(event){
          event.preventDefault();
          $('.bts-popup').addClass('is-visible');
      });
      
      //close popup
      $('.bts-popup').on('click', function(event){
          if( $(event.target).is('.bts-popup-close') || $(event.target).is('.bts-popup') ) {
              event.preventDefault();
              $(this).removeClass('is-visible');
          }
      });
      //close popup when clicking the esc keyboard button
      $(document).keyup(function(event){
          if(event.which=='27'){
              $('.bts-popup').removeClass('is-visible');
          }
      });
  });