const storage_key = 'todo-storage';

const app = new Vue({
  el: '#app',
  data: {
    title: 'My to do App',
    newTodo: '',
    todos: [],
    newTodoDate: '',
    newTodoTime: ''
  },

  //created (){
    //this.todos=JSON.parse(localStorage.getItem(storage_key) || '[]');
//},


  methods: {
    addTodo() {
      this.todos.push({
        text: this.newTodo,
        date: this.newTodoDate,
        time: this.newTodoTime,
        done: false
      });
      this.newTodo
       = ''; 
       this.newTodoDate='';

       localStorage.setItem(storage_key, JSON.stringify(this.todos))
    },
    removeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
      localStorage.setItem(storage_key,JSON.stringify(this.todos))
    },

    editTask(){
      this.todo = this.todos.name;
    },

    allDone() {
      this.todos.forEach(todo => {
        todo.done = true;
      });
    }
  }
});