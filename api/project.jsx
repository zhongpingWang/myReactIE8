var $ = require('jquery');


var ProjectApi={

	fetch(callback){
		$.ajax({
			 url:"http://bim.wanda.cn/platform/token",
			 success:function(data){
			 	callback(data);
			 },
			 error:function(data){
			 	callback('{"a":1}');
			 }
			 

	       })
		// $.ajax({url:"http://bim.wanda.cn/platform/token"}).done(function(data){
		// 	callback(data);
		// }).fail(()=>{
  // 		debugger
  // 		console.log(1);
  // 	});
	} 

}

module.exports=ProjectApi;