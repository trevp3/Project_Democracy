// // This is a manifest file that'll be compiled into application.js, which will include all the files
// // listed below.
// //
// // Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// // or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
// //
// // It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// // compiled file. JavaScript code in this file should be added after the last require_* statement.
// //
// // Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// // about supported directives.
// //
// //= require jquery
// //= require jquery_ujs
// //= require turbolinks
// //= require_tree .
// console.log('connected!!')

// function renderCurrentTask(currentTask ) {
//   var $container = $('#in-progress');
//   var $currentTask = $('<li class="currentTask">');
//   $currentTask.text(currentTask.title)
//   // render the image

//   $container.append( $currentTask );
// }

// function renderSuggestedTask(suggestedTask ) {
//   var $container = $('#suggestions');
//   var $suggestedTask = $('<li class="suggestedTask">');
//   var $editBtn = $('<button id="edit-btn"> edit </button>')
//   var $deleteBtn = $('<button class="delete-btn" onclick="deleteSuggested(this);"> delete </button>')
//   var $upvote = $('<button class="upvote-btn" onclick="upvoteSuggested(this);"> ^ up </button>')
//   var $downvote = $('<button class="downvote-btn" onclick="upvoteSuggested(this);"> v down </button>')

//   var $userId = parseInt($('#user-id').text())
//   console.log(suggestedTask.create_by)
//   console.log($userId)
//   $suggestedTask.text(suggestedTask.issue_name+":  "+suggestedTask.task_body +  "   << current up/down: " + suggestedTask.upvotes +"/" +suggestedTask.upvotes+ "  >>  submitted by: " + suggestedTask.create_by)
//   $suggestedTask.attr("id", suggestedTask.id)
//   $suggestedTask.attr("up", suggestedTask.upvotes)
//   $suggestedTask.attr("down", suggestedTask.downvotes)
//   // render the image

//   $container.append( $suggestedTask )
//   $suggestedTask.append( $upvote, $downvote)
//   if ($userId == suggestedTask.create_by){
//     $suggestedTask.append( $deleteBtn )
//   }


// }



// function getCurrent() {
//   $.getJSON('/project').done(function( currentTasks ) {
//     currentTasks.forEach(function( currentTask ) {
//       renderCurrentTask( currentTask );
//     })
//   })
// }

// function getSuggested() {
//   $.getJSON('/suggestions').done(function( suggestedTasks ) {
//     suggestedTasks.forEach(function( suggestedTask ) {
//       renderSuggestedTask( suggestedTask )
//     })
//   })
// }

// function deleteSuggested(d){
//   console.log(d.parentElement)
//   let id = d.parentElement.getAttribute("id")
//   let url = '/suggestions/'+id
//   $.ajax({
//     url: url,
//     method: 'delete'
//   }).done(()=>{
//     console.log("deleted")
//     d.parentElement.remove()
//   })
// }

// // function editSuggested(e){

// // }

// function upvoteSuggested(d) {
//   console.log('UPVOTE CLICKED')
//   console.log(d.parentElement)
//   let id = d.parentElement.getAttribute("id")
//   let up = d.parentElement.getAttribute("up")
//   let down = d.parentElement.getAttribute("down")
//   let url = '/suggestions/'+id
//   let data ={
//     upvotes: up+1
//   }
//   $.ajax({
//     url: url,
//     method: 'put',
//     data: data
//   }).done(()=>{
//     console.log("upvoted")

//   })
// }

// // function applyListeners(){
// //   $('.delete-btn').on('click', deleteSuggested)
// //   $('.upvote-btn').on('click', upvoteSuggested)
// // }


// $(function() {
//   getCurrent()
//   getSuggested()
//   applyListeners()
//   console.log($.getJSON('/project'))



//   function createTask(e){

//     const newTitle = $('#new-title')
//     const newBody = $('#new-body')


//     let data = {
//       title: newTitle.val(),
//       body: newBody.val()
//     }

//     $.post('/suggestions',data).done( (response) => {
//       console.log(response);
//     })


//   }

//   $('form').submit(createTask);






// })

