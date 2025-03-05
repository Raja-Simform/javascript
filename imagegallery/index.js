function show(href, title,element) { 
  let screen = document.getElementById("screen");
  screen.src = href;
  screen.alt = title;
}
document.getElementById("gallery").addEventListener("click", (event) => {
  let element = event.target.closest("a");
  if (!element) return;
  event.preventDefault();
  show(element.href, element.title);
});
