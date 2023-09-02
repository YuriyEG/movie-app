const throttle = (fn, throttleTime) => {
  let start = -Infinity;
  let cachedResult;

  return function () {
    const end = Date.now();

    if (end - start >= throttleTime) {
      start = end;
      cachedResult = fn.apply(this, arguments);
    }

    return cachedResult;
  };
};
export default throttle;
