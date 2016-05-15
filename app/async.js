exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
  	return new Promise(function(resolve){
			resolve(value);
  	})
  },

  manipulateRemoteData: function(url) {
  	return new Promise(function(resolve){
	  	var request = new XMLHttpRequest();
	  	request.open('GET', url, true);
	  	request.onload = function(){
	  		if(this.status == 200){
	  			var results = JSON.parse(this.responseText)["people"];
			  	var array = []
			  	for(i in results){
			  		array.push(results[i]["name"])
			  	}
			  	resolve(array.sort());
	  		}
	  	};
	  	request.send();
  	});
  }
};
