/* eslint-disable */

const debounce = (fn, debounceTime) => {
  let isBlocked = false;
  let idTimeout;
  let res;
  return function () {
    if (!isBlocked) {
      isBlocked = true;
      idTimeout = setTimeout(() => {
        res = fn.apply(this, arguments);
        isBlocked = false;
      }, debounceTime);
    } else {
      clearTimeout(idTimeout);
      idTimeout = setTimeout(() => {
        res = fn.apply(this, arguments);
        isBlocked = false;
      }, debounceTime);
    }

    return res;
  };
};

export default debounce;
