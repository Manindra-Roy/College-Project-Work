displaySize = window.screen.availWidth;
console.log(displaySize)
if(displaySize <= 820){
    document.querySelector(".top-header").style.display="none"
    document.querySelector(".main-container").style.display="none"
    // document.querySelector(".main-container").style.display="none"
    document.querySelector("body").innerHTML="<h1 style='color:red;'>Sorry But This Site Not Made For Mobile Devices.</h1>"

}