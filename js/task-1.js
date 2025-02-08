const items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

items.forEach(items => {
  const header = items.querySelector('h2');
  console.log(`Category:${header.textContent}`);

  const elements = items.querySelectorAll('ul > li');
  console.log(`Elements: ${elements.length}`);
});
