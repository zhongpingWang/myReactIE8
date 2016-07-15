var alt=require("../alt.jsx");
 
let ProjectAction=require("../actions/project.jsx"); 


class ProjectStore {
  
  constructor() {

    this.bindListeners({
      fethc: ProjectAction.fetch
    });

    this.state = {projects: []};

  }


  fethc(data) {  
  	var projects=[];
  	var name="项目";
  	 
  	for(var i=0;i<10;i++){
		  projects.push({name:name+i});
  	} 
    //this.setState({ projects: projects });
    this.setState({ projects: data });
  }
}

module.exports=alt.createStore(ProjectStore, 'ProjectStore');