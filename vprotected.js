var username = 'unidentified';
var html = {
    initiate_load:
    [
        '<!DOCTYPE html>',
        '<html>',
            '<head>',
                '<title>VProtected</title>',
                '<style>',
                    'audio {',
                        'background-color: blue;',
                    '}',
                
                    'body {',
                    	'background-color: black;',
                    '}',
                    
                    '.styleist {',
                    	'color: white;',
                        'text-align: center;',
                    '}',
                '</style>',
            '</head>',
            '<body>',
                '<p style="text-align: right; color: green;">' + username + '</p>',
                '<div class="styleist">',
                    '<h1>Music</h1>',
                    '<audio controls>',
                        '<source src="music1.mp3" type="audio/mpeg">',
                        'Your browser does not support the audio element.',
                    '</audio>',
                '</div>',
            '</body>',
        '</html>'
    ].join("")
};

function clearMail() {
    var verifyEnv = document.getElementsByClassName('Get indetification soon');
    if(verifyEnv.length > 3) {
                
    }
}

alert('Welcome back, ' + username);
for(var i = 0; i < 1; i = i) {
    var response = prompt('**OPTIONS**\n1. Music\n2. Bypass email - Use your own email\n\nInput 1 for music or 2 to reset your email');
    if(response == '1') {
        document.write(html.initiate_load);
    } else if(response == '2') {
        clearMail();
    } else {
        i -= 1;
        if(i < -4) {
            alert('I am sorry but I do not understand you.');
            i = 1;
        }
    }
}