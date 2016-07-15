 
var alt=require("../alt.jsx");

class TodoAction {

  fetchTodo(type) {  
  	//
  	 
    return { type }
  }

}

 
module.exports=alt.createActions(TodoAction);