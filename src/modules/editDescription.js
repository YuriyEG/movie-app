const editDescription = (text, length, end) => {
  if (text.length < length) {
    return `${text}`;
  }
  let cur = text.slice(0, length, end);
  let i = length;
  while (text[i] !== ' ' && text[i]) {
    cur += text[i];
    i += 1;
  }

  return `${cur}${end}`;
};

export default editDescription;
