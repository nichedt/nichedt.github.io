// unlock.js

;(function($, window, document, undefined) {
  window.method = null;

  $(document).ready(function() {
    var option = $('[data-option]');
    
    var keyHistory = ''
    var passHash = '01ddac292398df1c7c7db718adde4f81cc5a7fad18ff2d88be6defada292f4d8a52b368a831a0dd749ce3e61e395d342cbeb994c4cffedf69906a76f96898d0a';
    var messageLength = passHash.length;
    var match;

    $(document).keypress(function(e) {
        if(e.which == 13) { // ENTER
            if (keyHistory == '') {
                return
            }
            
            sha_3_output = method(keyHistory, option.val())
            keyHistory = '';

            if (sha_3_output == passHash) {
                alert('password matches')
            }
            return
        }

        // if(e.which == BACKSPACE) // BACKSPACE

        keyHistory += String.fromCharCode(e.which)
        if (keyHistory.length > messageLength) {
            keyHistory = keyHistory.substr(1);
        }

    });

    var parts = location.pathname.split('/');
    $('a[href="' + parts[parts.length - 1] + '"]').addClass('active');
  });

})(jQuery, window, document);



