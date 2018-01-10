var stringifyJSON = function(obj) {
  // your code goes here
  if (Array.isArray(obj)) {
    let result = '';
    if (obj.length === 0) {
      result.replace(/,.$/gim, ']');
      return result;
    }
    if (obj.length > 0) {
      if (
        typeof obj[0] === 'function' ||
        typeof obj[0] === 'undefined' ||
        typeof obj[0] === 'symbol'
      ) {
        result += null;
        return (result += ',' + stringifyJSON(obj.slice(1)));
      }
      if (typeof obj[0] === 'number') {
        result += obj[0];
        return (result += ',' + stringifyJSON(obj.slice(1)));
      }
      if (typeof obj[0] === 'boolean') {
        result += obj[0];
        return (result += ',' + stringifyJSON(obj.slice(1)));
      }
      if (typeof obj[0] === 'string') {
        result += '"' + obj[0] + '"';
        return (result += ',' + stringifyJSON(obj.slice(1)));
      }
      if (Array.isArray(obj[0])) {
        return stringifyJSON(obj[0]) + stringifyJSON(obj.slice(1));
      }
    }
  }
  if (typeof obj === 'object' && obj !== null) {
    let string = '';
    for (let key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        string += stringifyJSON(obj[key]);
      }
      if (
        typeof obj[key] === 'function' ||
        typeof obj[key] === 'undefined' ||
        typeof obj[key] === 'symbol'
      ) {
         string += '';
      }
      if (typeof obj[key] === 'number') {
        string += '"'+ key + '":' + obj[key] + ',';
      }
      if (typeof obj[key] === 'boolean') {
        string += '"'+ key + '":' + obj[key] + ',';
      }
      if (typeof obj[key] === 'string') {
        string += '"'+ key + '":' + '"' + obj[key] + '",';
      }
    }
    return string;
  }
};
stringifyJSON([
  'hello',
  true,
  false,
  5,
  6,
  8,
  'oh God',
  function() {},
  undefined,
]);

stringifyJSON({
  string0: 'hello',
  boolean0: true,
  boolean1: false,
  number0: 5,
  number1: 6,
  number2: 8,
  string3: 'oh God',
  notthisone: function(){},
  omit: undefined,
})
