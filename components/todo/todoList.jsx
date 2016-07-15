 var React = require('React');
 
let TodoStore=require('../../alt/stores/todo.jsx');

let todoAction=require('../../alt/actions/todo.jsx');

var ToDoList = React.createClass({

	//前段只执行一次
	componentDidMount() { 
		//监听
        TodoStore.listen(this.handleChange); 
        //第一次的时候加载
        todoAction.fetchTodo(this.props.params.id);
    },

  //销毁
    componentWillUnmount() {
       TodoStore.unlisten(this.handleChange);
    },

    handleChange:function(state){ 
    	this.setState({todos:state.todos});
    },

	getInitialState(){
		return {
			todos:''
		}
	}, 
	 

	render(){ 

		var items=this.state.todos && this.state.todos.map((item,index)=>{
			return (<li key={index} className="item">{item.name}</li>); 
		}); 
		
		return (<div>

			 <ul className="todoList"> 
			 	{items}-123
			 </ul> 
			</div>);
	}


});


module.exports=ToDoList;