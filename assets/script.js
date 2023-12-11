$(document).ready(function () {
//Function to execute an action based on the current hour.// 
  function executeHourlyAction(hour) {
    console.log(`Action for ${hour} hour.`);
  }
  
  //function to perform hourly actions.//
  function performHourlyActions() {
    var currentHour = new Date().getHours();
    executeHourlyAction(currentHour);//Executes action for the current hour// 
    setTimeout(performHourlyActions, 60 * 60 * 1000);//Run again after an hour.// 
  }
  
  //Function to apply classes based on current and block hours.//
  function applyHourlyClasses() {
    var currentHour = new Date().getHours();
    $('.time-block').each(function() {
      var blockHour = parseInt(this.id.split('-')[1]);
      if (blockHour < currentHour) {
        //If block hour has passed, add 'past' class//
        $(this).removeClass('future present').addClass('past');
      } else if (blockHour === currentHour) {
        //If block hour has passed, add 'present' class//
        $(this).removeClass('past future').addClass('present');
      } else {
         //If block hour has passed, add 'future' class//
        $(this).removeClass('past present').addClass('future');
      }     
    });
  }
  
  //Function to load data from storage for each time block.//
  function loadDataFromStorage() {
    $('.time-block').each(function() {
      var blockID =this.id;
      var savedText = localStorage.getItem(blockID);
      if (savedText !== null) {
        $(this).find('.description').val(savedText);
      }
    });
  }

  //Click event listener for saving description in local storage.//
    $('.saveBtn').on('click', function() {
        var text = $(this).siblings('.description').val();
        var blockID = $(this).parent().attr('id');
        if (text.trim() !== '') {
            localStorage.setItem(blockID, text);
        }
    });
    
    //Set the current day using day OS Library and format.// 
    $('#currentDay').text(dayjs().format('dddd, MMMM D'));
    
    //Apply classes load data and start performing hourly actions.//
    applyHourlyClasses();
    loadDataFromStorage();
    performHourlyActions();
  });
  