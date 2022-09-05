const popular = (arr, n) => {
  if (n > arr.length) {
    return false;
  }
  return arr
    .slice()
    .sort((a, b) => {
      return b.hits - a.hits;
    })
    .slice(0, n);
};

export { popular };
