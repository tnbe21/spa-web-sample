'use strict';

const API_DOMAIN = 'http://13.112.91.9';
$(function() {
  $.get(API_DOMAIN + '/todo/find', (todos) => {
    _.each(todos, (todo) => {
      $('ul.todo-list').append($('<li>').addClass('todo').append(todo.body));
    });
  });

  $('input.new-todo').on('keypress', (e) => {
    if (e.which === 13) {
      const todo = {
        body: $(e.target).val()
      };
      $.post(API_DOMAIN + '/todo/save', todo, (err, result) => {
        $('ul.todo-list').append($('<li>').addClass('todo').append(todo.body));
        $(e.target).val('');
      });
    }
  });
});
