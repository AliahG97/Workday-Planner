Wrap all code that interacts with the DOM in a call to jQuery to ensure that
 the code isn't run until the browser has finished rendering all the elements
 in the html.

$(function () {
   TODO: Add a listener for click events on the save button. 
   
   This code should use the id in the containing time-block as a key to save the user input in local storage.
  
   TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. 
     
   TODO: Add code to get any user input that was saved in localStorage and setthe values of the corresponding textarea elements. HINT: How can the id attribute of each time-block be used to do this?
  
   TODO: Add code to display the current date in the header of the page.
});


