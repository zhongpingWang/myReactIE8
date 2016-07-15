 
var alt=require("../alt.jsx");
let ProjectApi=require('../../api/project.jsx');

class ProjectAction {

  fetch() {  
  	 
  	ProjectApi.fetch((data)=>{ 
  		this.dispatch(JSON.parse(data));
  	})
  }

}

 
module.exports=alt.createActions(ProjectAction);