var html = {
    initiate_load:
    [
        '<!DOCTYPE html>',
        '<html>',
            '<head>',
                '<title>Test</title>',
                '<style>',
                  '#test p {',
                      'margin-top: 25px;',
                      'font-size: 21px;',
                      'text-align: center;',
                      'animation: fadein 5s;',
                      '-moz-animation: fadein 5s; /* Firefox */',
                      '-webkit-animation: fadein 5s; /* Safari and Chrome */',
                      '-o-animation: fadein 5s; /* Opera */',
                  '}',
                  '@keyframes fadein {',
                      'from {',
                          'opacity:0;',
                      '}',
                      'to {',
                          'opacity:1;',
                      '}',
                  '}',
                  '@-moz-keyframes fadein { /* Firefox */',
                      'from {',
                          'opacity:0;',
                      '}',
                      'to {',
                          'opacity:1;',
                      '}',
                  '}',
                  '@-webkit-keyframes fadein { /* Safari and Chrome */',
                      'from {',
                          'opacity:0;',
                      '}',
                      'to {',
                          'opacity:1;',
                      '}',
                  '}',
                  '@-o-keyframes fadein { /* Opera */',
                      'from {',
                          'opacity:0;',
                      '}',
                      'to {',
                          'opacity: 1;',
                      '}',
                  '}',
                '</style>',
            '</head>',
            '<body>',
              '<div id="test">',
                '<h1>Vprotected</h1>',
                '<h3>Quando Rondo - I remember</h3>',
              '</div>',
            '</body>',
        '</html>'
    ].join("")
};

function initiate(key) {
    if(key == true) {
        for(var i = 0; i < 1; i = i) {
            var response = prompt('Vprotected would like to use this page to display music. Is that okay with you?\nyes/no');
            if(response == 'yes') {
                document.write(html.initiate_load);
                i = 1;
            } else if(response == 'no') {
                i = 1;
            } else {
                i = i - 1;
                if(i < -2) {
                    i = 1;
                } 
            }
        }
    }
}

//Free beta
var unlock = true;
initiate(unlock);