function initiate(key) {
    if(key == true) {
        for(var i = 0; i < 1; i = i) {
            var response = prompt('Vprotected would like to use this page to display music. Is that okay with you?\nyes/no');
            if(response == 'yes') {
                document.write('<html><head><meta name="viewport" content="width=device-width, initial-scale=1"><style>/* Center the loader */#loader {  position: absolute;  left: 50%;  top: 50%;  z-index: 1;  width: 150px;  height: 150px;  margin: -75px 0 0 -75px;  border: 16px solid #f3f3f3;  border-radius: 50%;  border-top: 16px solid #3498db;  width: 120px;  height: 120px;  -webkit-animation: spin 2s linear infinite;  animation: spin 2s linear infinite;}@-webkit-keyframes spin {  0% { -webkit-transform: rotate(0deg); }  100% { -webkit-transform: rotate(360deg); }}@keyframes spin {  0% { transform: rotate(0deg); }  100% { transform: rotate(360deg); }}/* Add animation to "page content" */.animate-bottom {  position: relative;  -webkit-animation-name: animatebottom;  -webkit-animation-duration: 1s;  animation-name: animatebottom;  animation-duration: 1s}@-webkit-keyframes animatebottom {  from { bottom:-100px; opacity:0 }   to { bottom:0px; opacity:1 }}@keyframes animatebottom {   from{ bottom:-100px; opacity:0 }   to{ bottom:0; opacity:1 }}#myDiv {  display: none;  text-align: center;}</style></head><body onload="myFunction()" style="margin:0;"><div id="loader"></div><div style="display:none;" id="myDiv" class="animate-bottom">  <h2>Tada!</h2>  <p>Some text in my newly loaded page..</p></div><script>var myVar;function myFunction() {    myVar = setTimeout(showPage, 3000);}function showPage() {  document.getElementById("loader").style.display = "none";  document.getElementById("myDiv").style.display = "block";}</script></body></html>');
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