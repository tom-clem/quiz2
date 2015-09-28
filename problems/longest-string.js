'use strict';

function longestString(arr) {
  var lgth = 0;
  var longest;

  for(var i=0; i < arr.length; i++){
    if (typeof arr[i] === 'string' || arr[i] instanceof String) {

      if(arr[i].length > lgth){
          lgth = arr[i].length;
          longest = arr[i];
      }
}
}
return longest;
}

module.exports = longestString;
