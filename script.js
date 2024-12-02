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
      const profilePic = document.querySelector('.profilePic');
      profilePic.src = filteredData[0].imgUrl;
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
    const filteredData = data.filter(item => item.id === 3); // Assuming ID 3 has the updated followMe

    if (filteredData.length > 0) {
      const followMeHeader = filteredData[0].mainH;
      const followMeHeaderElement = document.getElementById('followMeHeader');
      followMeHeaderElement.textContent = followMeHeader;
      const followMe = filteredData[0].mainT;
      const followMeElement = document.getElementById('followMe');
      followMeElement.textContent = followMe;
      const followMe2 = filteredData[0].mainT2;
      const followMe2Element = document.getElementById('followMe2');
      followMe2Element.textContent = followMe2;
    } else {
      console.error('No matching data found');
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
});

//Function for filtering of the cards in the left column and clear button
const searchInput = document.getElementById('searchInput');
const clearButton = document.getElementById('clearButton');
const cards = document.querySelector('.leftcolumn').querySelectorAll('.card');

clearButton.addEventListener('click', () => {
  searchInput.value = '';
  cards.forEach(card => {
    card.style.display = 'block';
  });
});

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const cardTitle = card.querySelector('h2').textContent.toLowerCase(); 
    const cardSubTitle = card.querySelector('h4').textContent.toLowerCase(); 
    const cardContent = card.querySelector('p').textContent.toLowerCase();

    if (cardTitle.includes(searchTerm) || cardContent.includes(searchTerm) || cardSubTitle.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});