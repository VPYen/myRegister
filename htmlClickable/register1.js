var searchOutput = document.getElementById("search-output");
var searchInput = document.getElementById("search-input");

searchInput.addEventListener("keyup", function(event){
    console.log("testing")
    console.log(event)
    if(event.key=="Backspace"){
        searchOutput.style.display="none";
    }else{
        searchOutput.style.display="block";
    }
});