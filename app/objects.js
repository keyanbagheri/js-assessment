exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
  	obj.newFunc = fn
  	return obj.newFunc()
  },

  alterObjects: function(constructor, greeting) {
  	constructor.prototype.greeting = greeting
  },

  iterate: function(obj) {
  	array = []
  	Object.getOwnPropertyNames(obj).forEach(function(key){
  		array.push(key + ": " + obj[key])
  	})
  	return array
  }
};
