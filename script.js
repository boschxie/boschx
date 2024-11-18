//function for scrolling to top upon hover over link
const scrollLink = document.getElementById('scrollLink');

scrollLink.addEventListener('mouseover', () => {
  const targetElement = document.getElementById('top');
  targetElement.scrollIntoView({ behavior: 'smooth' });
});

//function for fetching data from JSON
fetch('database.json')
  .then(response => response.json())
  .then(data => {
    const filteredData = data.filter(item => item.id === 1); // Assuming ID 1 has the updated date

    if (filteredData.length > 0) {
      const updatedDate = filteredData[0].mainT;
      const dateElement = document.getElementById('updatedDate');
      dateElement.textContent = updatedDate;
    } else {
      console.error('No matching data found');
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });