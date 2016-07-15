require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill'); 


let ReactDOM=require('react-dom');
var React = require('React');
let ReactRouter=require('react-router');
let historyApi=require('history');

let App=require('./components/app.jsx');
let ToDo=require('./components/todo/index.jsx');
let ToDoList=require('./components/todo/todoList.jsx');
let Project=require('./components/project/index.jsx');
 
let {Router,Route,Link}=ReactRouter;  
let history=historyApi.createHashHistory({queryKey: false});
 

 
 

 

const routeConfig = [
  { path: '/',
    component: App,
    indexRoute: { component: ToDo },
    childRoutes: [
      { path: 'projects', component: Project },
      { path: 'todo',
        component: ToDo,
        childRoutes: [
          { path: ':id', component: ToDoList } 
        ]
      }
    ]
  }
]



ReactDOM.render(
 <Router routes={routeConfig}   history={history} />, 
  document.getElementById("body"));

 //  <Router  history={history}>
  //   <Route path="/" component={AppSite}>
  //     <Route path="projects" component={Projects} />
  //     <Route path="todo" component={ToDo}>
  //       <Route path="/:id" component={ToDoDetail} />
  //     </Route>
  //   </Route>
  // </Router>