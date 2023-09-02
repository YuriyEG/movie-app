const throttle = (fn, throttleTime) => {
  let start = -Infinity;
  let result;
  return function () {
    const end = Date.now();
    if (end - start >= throttleTime) {
      result = fn.apply(this, arguments);
      start = end;
    }

    return result;
  };
};
export default throttle;
