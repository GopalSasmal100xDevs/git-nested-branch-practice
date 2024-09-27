function _keys(obj) {
  if (!isObject(obj)) return [];
  if (Object.keys) return Object.keys(obj);
  var keys = [];
  for (var key in obj) if (_.has(obj, key)) keys.push(key);
  return keys;
}
function isObject(obj) {
  var type = typeof obj;
  return type === "function" || (type === "object" && !!obj);
}
console.log(_keys({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }));

function FindAllMethods(obj) {
  return Object.getOwnPropertyNames(obj).filter(function (property) {
    return typeof obj[property] == "function";
  });
}
//above code finds methods only
//Following code finds both properties and methods
console.log(FindAllMethods(Math));
console.log(FindAllMethods(Array));
function all_properties(obj) {
  return Object.getOwnPropertyNames(obj);
}

console.log(all_properties(Math));

console.log(all_properties(Array));

function invert_key_value(obj) {
  var result = {};
  var keys = _keys(obj);
  for (var i = 0, length = keys.length; i < length; i++) {
    result[obj[keys[i]]] = keys[i];
  }
  return result;
}
function _keys(obj) {
  if (!isObject(obj)) return [];
  if (Object.keys) return Object.keys(obj);
  var keys = [];
  for (var key in obj) if (_.has(obj, key)) keys.push(key);
  return keys;
}
function isObject(obj) {
  var type = typeof obj;
  return type === "function" || (type === "object" && !!obj);
}
console.log(
  invert_key_value({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" })
);

console.log(
  invert_key_value({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" })
);

console.log(
  invert_key_value({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" })
);
