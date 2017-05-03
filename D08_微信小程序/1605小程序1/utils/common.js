require("module1")
console.log("我是common.js");
function sayHello(name) {
  console.log(`Hello ${name} !`)
}

module.exports.sayHello = sayHello;