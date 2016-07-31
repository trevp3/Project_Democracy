// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
console.log('connected!!')

function renderTask( task ) {
  var $container = $('#tasks');
  var $task = $('<li class="task">');
  $task.text(task.title)
  // render the image

  $container.append( $task );
}

function getTasks() {
  $.getJSON('/project').done(function( tasks ) {
    tasks.forEach(function( task ) {
      renderTask( task );
    })
  })
}





$(function() {
  getTasks()
  console.log($.getJSON('/project'))



  function createTask(e){

    const newTitle = $('#new-title')
    const newBody = $('#new-body')

    e.preventDefault();
    let $children = $(e.target).children();
    let data = {
      title: newTitle.val(),
      body: newBody.val()
    }

    $.post('/project',data).done( (response) => {
      console.log(response);
    })


  }

  $('form').submit(createTask);
  // $('#submit-btn').click(function(event){
  //     event.preventDefault()
  //     const newTitle = $('#new-title')
  //     const newBody = $('#new-body')
  //     var data = {
  //       title: newTitle.val(),
  //       body: newBody.val()
  //     }
  //     $.post('/project', data).done( (response) => {
  //     console.log(response);
  //   })
  //     event.target.reset()
  // })




})



