'use strict';

function bindName(firstName, lastName, func) {

return func = func.bind(null,firstName + ' ' + lastName);


}

module.exports = bindName;
