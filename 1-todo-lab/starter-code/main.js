console.log('Main.js is connected!');

$(function() {
  // write all your code in here!

// Step 1
$('#new').submit(function(event) {
    event.preventDefault();
    var newItem = $('#newItem');
    var newToDo = event.target.newItem.value;
    addNewListItem(newToDo);
  })

function addNewListItem(newToDo) {
    $('<li>').appendTo('#todos').text(newToDo);
    event.target.reset();
}


// Step 3
function completeItem(newToDo) {
  $('li').on('click', function(event) {
    // event.target.classList.toggle('completed')
    // add completed to css, or you should do this part the long way in js
  })



$("li").on("click",function() {
    showLoader();
    $("#loading-content").load("dataSearch.php?"+this.id, hideLoader);
  });


}



// Pseudocode

// Step 1
// When the user submits their to-do list item
// // Select the input field the user has typed their to-do list info into
// // Get the value of the input field
// // Create a list item
// // Place the text inside of the list item
// // Append the list item to our ordered to-do list

// Step 2
// When the user clicks remove next to a to do list item
// // Select the to-do list item the user wants to remove
// // Delete the selected item from the page

// Step 3
// When the user clicks on the list item
// // Get the to-do list item the user clicked on
// // Add a css line-through style to the item

// Step 4
// When the user clicks the Clear List button
// // Select the list
// // Empty the list

// Step 5
// Select the to-do list counter element
// // Set the text inside the to-do list counter element to the number of items in the to-do list


});


// SOLUTION
// console.log('Main.js is connected!');

// $(function() {

//   // write all your code in here!

//   function changeCounter(num) {
//     var $counter = $('#count')
//     if (num === 0) {
//       $counter.text(0)
//     } else {
//       $counter.text(parseInt($counter.text()) + num)
//     }
//   }

//   $('#add').on('click', function(e) {
//     e.preventDefault()
//     var $input = $('#newItem:input')
//     var $newListItem = $('<li>').text($input.val())
//     $newListItem.appendTo('#todos')
//     $newListItem.on('click', function(e) {
//       e.target.classList.toggle('completed')
//       if (e.target.classList.contains('completed')) {
//         changeCounter(-1)
//       } else changeCounter(1)
//     })
//     $input.val('')
//     changeCounter(1)
//   })

//   $('#clear').on('click', function(e) {
//     changeCounter(0)
//     $('li').remove()
//   })

//   $('#clearCompleted').on('click', function(e) {
//     $('.completed').remove()
//   })

// });