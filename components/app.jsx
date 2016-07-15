let Link=require('react-router').Link;
let React = require('React');
require('../comm/less/reset.less');


var Header = require('./header/index.jsx');

class App extends React.Component{

	render(){
		return (<div id="container">
			<Header />
			<div id="content">{this.props.children}</div>
		 </div>);
	}
}

//export default Header;
module.exports=App;