// Retrieve time 
document.getElementById("time").innerHTML = date();

// Return date
function date() {
    var d = new Date(),
      days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      months =['January', 'February', 'March','April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return days[d.getDay()] + ',  ' + months[d.getMonth()] + ' ' + d.getDate();
   }

// Create a close button and apend it to each list item 
var myNodeList = document.getElementsByTagNamr("li");
