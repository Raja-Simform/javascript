const element1 = document.getElementById('element1');
const element2 = document.getElementById('element2');

element1.addEventListener('scroll', () => {
  element2.scrollTop = element1.scrollTop;
  element2.scrollLeft = element1.scrollLeft;
});

element2.addEventListener('scroll', () => {
  element1.scrollTop = element2.scrollTop;
  element1.scrollLeft = element2.scrollLeft;
});
