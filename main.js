headers = document.getElementsByTagName("header")

var headerContentRequest = new XMLHttpRequest();
headerContentRequest.addEventListener("load", onLoad);
headerContentRequest.open("GET", "/header.html");
headerContentRequest.send();


function onLoad(){
    for(var i = 0; i < headers.length; i++){
        headerElement = headers[i];
        headerElement.innerHTML = this.responseText;
    }
}