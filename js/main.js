'use strict';

const API_DOMAIN = 'http://13.112.91.9';
$(function() {
  $.get(API_DOMAIN + '/todo/find', (err, result) => {
    _.each(result, (todo) => {
      $('li.todo').append(todo.body);
    });
  });

  $('input.new-todo').on('click', () => {
    const todo = {
      body: this.val()
    };
    $.post(API_DOMAIN + '/todo/save', todo, (err, result) => {
      $('li.todo').append(todo.body);
    });
  });
});
