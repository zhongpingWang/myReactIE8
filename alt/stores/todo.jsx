var alt=require("../alt.jsx");
 
let TodoAction=require("../actions/todo.jsx"); 


class TodoStore {
  
  constructor() {

    this.bindListeners({
      fethcTodo: TodoAction.fetchTodo
    });

    this.state = {todos: []};

  }


  fethcTodo(todo) {
  	var todos=[];
  	var name="未完成的toDo";
  	if (todo.type=="already") {
		name="已完成的toDo";
  	};
  	for(var i=0;i<10;i++){
		  todos.push({name:name+i});
  	} 
    this.setState({ todos: todos });
  }
}

module.exports=alt.createStore(TodoStore, 'TodoStore');