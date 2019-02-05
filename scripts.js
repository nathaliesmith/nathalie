// Interacting
var imagesArray = ["tvcat.JPG", "alertcat.JPG", "comfycat.JPG", 
   "potatocat.JPG", "studycat.JPG", "angelcat.JPG", 
    "longcat.JPG", "scrunchcat.JPG"];

    function displayImage(){
        var num = Math.floor(Math.random() * 8);
        document.canvas.src="images/"+imagesArray[num];
    }