//Cookie LIBRARY
function createCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

//JavaScript

function refreshPage() {
  var refreshTimer = setInterval("location.reload();",600000);
}
window.onload = function(evt) {
  function readingReview(bookId, bookReview){
    document.getElementById(bookId).onclick = function(evt) {
      //Make Review
      var node = document.getElementById("reading");
      while (node.firstChild)
        node.removeChild(node.firstChild);
      node.appendChild(document.createTextNode(bookReview));
      //Make Link
      var divLink = document.createElement("div");
      var linkToReading = document.createElement("a");
      linkToReading.setAttribute("href","index.html");
      divLink.appendChild(document.createTextNode("Back"));
      linkToReading.appendChild(divLink);
      document.getElementById("reading").appendChild(linkToReading);
    };
  }
  readingReview("b1", "This is a classic series for practicly everyone. The whole series is about Harry Potter and his friends fighting off Lord Voldemort.");
  readingReview("b2", "Percy Jackson and his friends fight off mithical creatures in this story which blends modern day NYC and mythical Greece.");
  readingReview("b3", "Unbroken is a book about Louis Zamperini's Life in the Great Deppression and WWII. Louis Zamperini was training for the 1940 olympics and was expected to be the first person to break the 1 minute mark when WWII hit. He then decides to join the Airforce. On a mission over the pacific the plane crashes and he is captured by the Japenese.");
  readingReview("b4", "Night is an autobiographical novel about Elie Wiesel's experience in the Holocaust.");
  readingReview("b5", "The Giver is a classic distopian novel. Lois Lowry creates a place where people can't make any decision about their life.");
  readingReview("b6", "The Book Thief Is about a girl in the WWII in Germany.");
  readingReview("b7", "Holes is about a boy who gets sent to a detention center. Then he has to dig holes in the ground.");
  //Calender
  function calender(month, date, event){
    //Creating tr Element
    var tr = document.createElement("tr");
    //creating 2 td's and setting classes
    var tdDate = document.createElement("td");
    tdDate.setAttribute("class","border1");
    var tdEvent = document.createElement("td");
    tdEvent.setAttribute("class","border1");
    //Create The Date
    var newDate = new Date();
    var m = newDate.setMonth(month);//needs number bettween 0 - 11
    var d = newDate.setDate(date);//needs number bettween 1 - 31
    var time = newDate;
    //Appending Chidren
    tdDate.appendChild(document.createTextNode(time));
    tdEvent.appendChild(document.createTextNode(event));
    tr.appendChild(tdDate);
    tr.appendChild(tdEvent);
    document.getElementById("calender").appendChild(tr);
  }
  calender(6,29, "Start Driving For Alaska");
  calender(7,11, "Arrive In Alaska");
  calender(7,19, "School Starts");
  calender(8,7, "Labor Day (No School)");
  //Navigation Bar
  function navBarSize (){
    var n = document.getElementById("jsNav").getElementsByTagName("li");
    n.style.marginRight = "5px";
    //window.innerWidth
  }
  navBarSize();
  //Chat 
  function checkCookie(){
    var bueler = "Thombs";
    if (getCookie("chatName"==="")) {
      createCookie("chatName", bueler, 500);
    }
  }
  document.getElementById("go").onclick = function () {
    //var chatName = document.getElementById("chatName").value;
  };
};
refreshPage();

//jquery

$(function(){
  $("#nav").load("navigation.html");
  $("#happyday").hide();
  $("button").click(function(){
	$("#animation").animate({
      left: '215px',
      top: '215px',
      height: '145px',
      width: '200px',
      opacity: '0.5',
      color: '#0000FF'
    },"slow");
    $("button").hide("slow");
    $("#happyday").show(1000);
  });
  $(document).mousemove(function(event){
    $("#xycoord").text("X: " + event.pageX + " ,Y: "+ event.pageY)
    $("#milliseconds").text("Milliseconds since Jan. 1, 1970: "+ event.timeStamp);
  });
});
