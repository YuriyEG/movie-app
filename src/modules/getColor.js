function getColor(rating) {
  let color;
  if (rating <= 3) {
    color = '#E90000';
  } else if (rating <= 5 && rating > 3) {
    color = '#E97E00';
  } else if (rating <= 7 && rating > 5) {
    color = '#E9D100';
  } else if (rating > 7) {
    color = '#66E900';
  }
  return color;
}

export default getColor;
