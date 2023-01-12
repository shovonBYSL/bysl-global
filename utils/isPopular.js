const popular = (arr, n) => {
  if (n > arr.length) {
    return false;
  }
  return arr
    .slice()
    .sort((a, b) => {
      return b.view_count - a.view_count;
    })
    .slice(0, n);
};

export { popular };
