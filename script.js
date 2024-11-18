//function for scrolling to top upon hover over link
const scrollLink = document.getElementById('scrollLink');

scrollLink.addEventListener('mouseover', () => {
  const targetElement = document.getElementById('top');
  targetElement.scrollIntoView({ behavior: 'smooth' });
});