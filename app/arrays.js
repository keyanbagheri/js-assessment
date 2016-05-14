exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item)
  },

  sum: function(arr) {
    var sum = 0
    for (var i=0; i<arr.length; i++){
      sum += arr[i]
    }
    return sum
  },

  remove: function(arr, item) {
    for (var i=0; i<arr.length; i++){
      if(arr[i] == item){
        arr.splice(i, 1)
      }
    }
    return arr
  },

  removeWithoutCopy: function(arr, item) {
    for (var i=arr.length-1; i>=0; i--){
      if(arr[i] == item){
        arr.splice(i, 1)
      }
    }
    return arr
  },

  append: function(arr, item) {
    arr.push(item)
    return arr
  },

  truncate: function(arr) {
    arr.pop()
    return arr
  },

  prepend: function(arr, item) {
    arr.unshift(item)
    return arr
  },

  curtail: function(arr) {
    arr.shift()
    return arr
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2)
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item)
    return arr
  },

  count: function(arr, item) {
    var count = 0
    for (var i=0; i<arr.length; i++){
      if(arr[i] == item){
        count ++
      }
    }
    return count
  },

  duplicates: function(arr) {
    var sorted = arr.sort()
    var dupes = []
    for (var i=0; i<sorted.length; i++){
      if(sorted[i] == sorted[i+1]){
        if(dupes.indexOf(sorted[i]) === -1){
          dupes.push(sorted[i])
        }
      }
    }
    return dupes
  },

  square: function(arr) {
    var squared = []
    for (var i=0; i<arr.length; i++){
      squared.push(arr[i] * arr[i])
    }
    return squared
  },

  findAllOccurrences: function(arr, target) {
    var results = []
    for (var i=0; i<arr.length; i++){
      if(arr[i] === target){
        results.push(i)
      }
    }
    return results
  }
};
