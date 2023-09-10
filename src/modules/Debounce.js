const debounceMaker = (targetFunction, debounceTime) => {
  let isBlockedFlag = false;
  let idTimeout;
  let res;
  return function () {
    if (!isBlocked) {
      isBlockedFlag = true;
      idTimeout = setTimeout(() => {
        res = targetFunction.apply(this, arguments);
        isBlockedFlag = false;
      }, debounceTime);
    } else {
      clearTimeout(idTimeout);
      idTimeout = setTimeout(() => {
        res = targetFunction.apply(this, arguments);
        isBlockedFlag = false;
      }, debounceTime);
    }

    return res;
  };
};

export default debounceMaker;
