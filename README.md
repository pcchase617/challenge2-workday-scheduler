# challenge2-workday-scheduler

1. Display a time and day using java script format of moment().format("LLLL")
2. Time blocks are produced from linking web api
3. Standard business hours are displayed using a for loop for(var i = 9; i<18; i++){makeTimeBlocks(i)} and formating it with moment(hour, "hh").format("LT")}
4. Past, Present, and Future are displayed doing currentTime of .addClass
5. Add an event listener and save with a .saveBtn and saving to a local storage with .setItem and calling it from JQuery