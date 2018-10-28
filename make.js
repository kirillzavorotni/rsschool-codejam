module.exports = function make(...args) {
  let storage = [];
  storage = storage.concat(args);

  function wrap(...args) {
    const toString = Object.prototype.toString;

    if (toString.call(args[0]).indexOf('Number') !== -1) {
      args.forEach(elem => storage.push(elem));
    } else {
      return storage.reduce(args[0]);
    }
    return wrap;
  }
  return wrap;
}
