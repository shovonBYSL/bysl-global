function readingTime() {
  if (typeof window !== "undefined") {
    const text = document.getElementById("article");
    const wpm = 150;
    if (text) {
      const words = text.innerText.trim().split(/\s+/).length;
      const time = Math.ceil(words / wpm);
      document.getElementById("time").innerText = time + " mins to read";
    }
  }
}

export { readingTime };
