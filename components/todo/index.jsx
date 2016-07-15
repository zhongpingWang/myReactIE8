var Link=require("react-router").Link;
var React = require('React');
let todoAction=require('../../alt/actions/todo.jsx');
require('./less/index.less');

class ToDo extends React.Component{ 

	fetchClick(type){ 
		//切换路由的时候加载
		todoAction.fetchTodo(type);
	}


	render(){

		return (<div>
				<div className="todoNavBox">
				 <ul className="todoNav">
					<li className="item" key="1"><Link onClick={this.fetchClick.bind(event,'commission')} activeClassName="selected" to="/todo/commission">代办22</Link></li> 
					<li className="item" key="2"><Link onClick={this.fetchClick.bind(event,'already')} activeClassName="selected" to="/todo/already">已办</Link></li> 
				</ul></div>
				{this.props.children}
			</div>);
	}


 }

//export default Header;
module.exports=ToDo;