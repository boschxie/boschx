//function for changing logo src depending on screen size
const logo = document.querySelector('.logo');

function setLogoSrc() {
  if (window.innerWidth <= 768) {
    logo.src = './public/images/logo_small.jpg';
  } else {
    logo.src = './public/images/logo.jpg';
  }
}

setLogoSrc();  /*Initial setup*/

window.addEventListener('resize', setLogoSrc);  /* Adjust logo on window resize */

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

fetch('database.json')
  .then(response => response.json())
  .then(data => {
    const filteredData = data.filter(item => item.id === 2); // Assuming ID 2 has the updated aboutMe

    if (filteredData.length > 0) {
      const aboutMeHeader = filteredData[0].mainH;
      const aboutMeHeaderElement = document.getElementById('aboutMeHeader');
      aboutMeHeaderElement.textContent = aboutMeHeader;
      const aboutMe = filteredData[0].mainT;
      const aboutMeElement = document.getElementById('aboutMe');
      aboutMeElement.textContent = aboutMe;
    } else {
      console.error('No matching data found');
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
});