$(document).ready(function () {
  function executeHourlyAction(hour) {
    console.log(`Action for ${hour} hour.`);
  }

  function performHourlyActions() {
    var currentHour = new Date().getHours();
    executeHourlyAction(currentHour);
    setTimeout(performHourlyActions, 60 * 60 * 1000);
  }

  function applyHourlyClasses() {
    var currentHour = new Date().getHours();
    $('.time-block').each(function() {
      var blockHour = parseInt(this.id.split('-')[1]);
      if (blockHour < currentHour) {
        $(this).removeClass('future present').addClass('past');
      } else if (blockHour === currentHour) {
        $(this).removeClass('past future').addClass('present');
      } else {
        $(this).removeClass('past present').addClass('future');
      }     
  });
}

  function loadDataFromStorage() {
    $('.time-block').each(function() {
      var blockID =this.id;
      var savedText = localStorage.getItem(blockID);
      if (savedText !== null) {
        $(this).find('.description').val(savedText);
      }
    });
  }

    $('.saveBtn').on('click', function() {
        var text = $(this).siblings('.description').val();
        var BlockID = $(this).parent().attr('id');
        if (text.trim() !== '') {
            localStorage.setItem(blockID, text);
        }
    });

    $('#currentDay').text(dayjs().format('dddd, MMMM D'));

    applyHourlyClasses();
    loadDataFromStorage();
    performHoutrlyActions();
  });
  
        