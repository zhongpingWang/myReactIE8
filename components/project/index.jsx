var Link=require("react-router").Link;
var React = require('React');  
require('./less/index.less');
let projectAction=require('../../alt/actions/project.jsx');
let projectStore=require('../../alt/stores/project.jsx');

// class Projects extends React.Component{ 

// 	// getInitialState() {
// 	//     return {
// 	//         project:{}  
// 	//     };
// 	// }

// 	//前段只执行一次
// 	componentDidMount() { 
// 		//监听
//         projectStore.listen(this.handleChange); 
// 		projectAction.fetch();
//     }

// 	fetchClick(type){ 
// 		//切换路由的时候加载
// 		projectAction.fetchTodo(type);
// 	}

// 	handleChange(state){
// 		 this.setState({project:state});
// 	}

// 	render(){

// 		let state=this.state || {};

// 		return (<div>
// 				<div className="projectBox">
// 				  	这里是项目
// 				  </div>
//  			{state.data}

// 				{this.props.children}
// 			</div>);
// 	}


//  }


 var Projects = React.createClass({

 	getInitialState(){
		return {
			project:''
		}
	}, 
	 

	//前段只执行一次
	componentDidMount() { 
		//监听
        projectStore.listen(this.handleChange); 
		projectAction.fetch();
    },

  //销毁
    componentWillUnmount() {
       projectStore.unlisten(this.handleChange);
    },

    handleChange:function(state){ 

    	this.setState({project:state});
    },



	render(){ 

		let project=this.state.project;
		  
		return (<div>
				<div className="projectBox">
				  	这里是项目
				  </div> 
 			 
 			{ project.projects && project.projects.code}

				{this.props.children}
			</div>);
	}


});

//export default Header;
module.exports=Projects;