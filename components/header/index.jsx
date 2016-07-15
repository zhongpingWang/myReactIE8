let Link=require('react-router').Link;
var React = require('React');
require("./index.less");
class Header extends React.Component{

	render(){
		return (<div id="topBar"><ul className="nav">
			<li className="item" key="1"><Link to="/todo/commission">代办</Link></li> 
			<li className="item" key="2"><Link to="/projects">项目</Link></li>
			<li className="item" key="3"><Link to="/flow">流程</Link></li>
			<li className="item" key="4"><Link to="/resources">资源库</Link></li>
			<li className="item" key="5"><Link to="/console">控制台</Link></li> 
			<li className="user"><a>User</a></li>
			<li className="more"><a>More</a></li>
	</ul></div>);
	}
}

//export default Header;
module.exports=Header;