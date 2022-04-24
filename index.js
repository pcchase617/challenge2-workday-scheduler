$(document).ready(function () {
    //define my variables for today's date and the time right now
    let currentDay = moment().format("LLLL");
    let currentTime = moment().hour();
  
    //update elements with localStorage values
    for (key = 0; key < localStorage.length; key++) {
      timeID = localStorage.key(key);
      timeValue = localStorage.getItem(timeID);
      $("#" + timeID).val(timeValue);
    }
  
    //display today's date in the currentDate id
    $("#currentDay").append(currentDay);
  
    $("input").each(function () {
      var item = parseInt($(this).attr("time"));
  
      console.log(item);
      // console.log(currentTime)
      if (item < currentTime) {
        $(this).addClass("past");
      }
  
      if (item > currentTime) {
        $(this).addClass("present");
      }
  
      if (item === currentTime) {
        $(this).addClass("future");
      }
    });
  
    function makeTimeblocks(hour, existingTodo = ""){
      //build some additional logic for if time is past present or future;
      var currentHour = new Date().getHours();
      var presentPastOrFuture = "future";
      if(currentHour > hour) presentPastOrFuture = "past";
      if(currentHour === hour) presentPastOrFuture = "present";
      var saveNotes = localStorage.getItem(`hour${hour}`) || ""
      $(".container").append($(`
      <div class="row time-block">
          <div class="hour col-1">${ moment(hour, "hh").format("LT")}</div>
          <textarea name="" id="input-id" cols="30" rows="3" style="color: black" class="description col-9 ${presentPastOrFuture}">${localStorage.getItem(hour) || ""}</textarea>
          <button class="btn saveBtn col-2" id=${hour}>Save</button>
      </div>`));
  }

  for(var i = 9; i<18; i++){
      makeTimeblocks(i);
  }

    $(".saveBtn").on("click", function () {
      //assigning the value to from input to variable
      textAreaVal = $(this).siblings('textarea').val();
      inputEl = $(this).attr("id");
      // inputEl = $($(this).parent().children()[0]);

      localStorage.setItem(inputEl, textAreaVal);
    });
});


//still need to add click event listeners so when a block is clicked, grabs the value from that textarea, and saves it in localStorage.

//when app first loads, need to grab all existing todos and show on the page