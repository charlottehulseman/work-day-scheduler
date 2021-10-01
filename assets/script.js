// TODO: Inputs are saved when page is refreshed

// Variables
var timeBoxEl = document.getElementsByTagName("span")
var saveButtonEl = $("button");
var textBoxEl = $("input");

// Current day is displayed in the jumbotron with moment.js
var time = moment().format("[Today is] dddd MMM Do YYYY h:mm:ss a");
$("#currentDay").text(time);

// box El's
var box9amEl = $("#button-9")
var box10amEl = $("#button-10")
var box11amEl = $("#button-11")
var box12pmEl = $("#button-12")
var box1pmEl = $("#button-1")
var box2pmEl = $("#button-2")
var box3pmEl = $("#button-3")
var box4pmEl = $("#button-4")
var box5pmEl = $("#button-5")


console.log(timeBoxEl);

saveButtonEl.on("click", function() {
    var storeId = $(this).attr("id");
    localStorage.setItem(storeId, JSON.stringify($(this).parent().siblings("input").val()))
  });

  box9amEl.val(localStorage.getItem("#button-9"));
  box10amEl.val(localStorage.getItem("#button-10"));
  box11amEl.val(localStorage.getItem("#button-11"));
  box12pmEl.val(localStorage.getItem("#button-12"));
  box1pmEl.val(localStorage.getItem("#button-1"));
  box2pmEl.val(localStorage.getItem("#button-2"));
  box3pmEl.val(localStorage.getItem("#button-3"));
  box4pmEl.val(localStorage.getItem("#button-4"));
  box5pmEl.val(localStorage.getItem("#button-5"));