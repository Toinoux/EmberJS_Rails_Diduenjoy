import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createTodo: function() {
      var title = this.get('todoTitle');
      var todo = this.store.createRecord('todo', {
        title: title,
        done: false,
      });
      todo.save();
     },
    editTodo: function(todo) {
      var todo = this.store.findRecord('todo', todo.get('id'))
    }
  }
});
