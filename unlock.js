// unlock.js

$(document).ready(function() {

    var password = 'password';
    var blankHistory = '';
    var messageLength = password.length;
    var keyHistory = blankHistory;
    var match;

    // $.getScript('./sha3.min.js', function() {
    //     // script is now loaded and executed.
    //     // put your dependent JS here.
    //     console.log(sha3_512(password))
    // });
    

    $(document).keypress(function(e) {
        if(e.which == 13) { // ENTER
            if (keyHistory == blankHistory) {
                return
            }
            
            sha_3_output = sha_3(keyHistory)
            keyHistory = blankHistory;

            if (sha_3_output == password) {
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

    // https://csrc.nist.gov/csrc/media/publications/fips/180/4/final/documents/fips180-4-draft-aug2014.pdf
    function sha_3(input) {
        return input
    }

});