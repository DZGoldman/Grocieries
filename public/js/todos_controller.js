app.controller('TodosCtrl', TodosCtrl);

function TodosCtrl() {
  this.all = [
      {task: "build an awesome todo list", done: false},
      {task: "get super good at Angular", done: false},
      {task: "party on code", done: true},
      {task: "tackle the bonus challenges for this lesson", done: false},
      {task: "take a nap", done: true}
  ];

  this.newTodo = {task: '', done: false};
  this.add = function () {
    this.all.push({task: this.newTodo.task, done: false});
    this.newTodo.task = '';
  };
};
