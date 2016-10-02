window.onload = function(evt) {

  function picGallery(){
    var imageURLs = ["above-golden.jpg", "crater-lake.jpg"];
    var node = document.getElementById("picture");
    node.element.setAttribute("src","http://twbf.github.io/images/crater-lake.jpg");
  }

  setInterval(picGallery, 5000);
  
};
