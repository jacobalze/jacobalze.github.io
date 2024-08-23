document.addEventListener('DOMContentLoaded', () => {
  fetch('Tests.json')
    .then(response => response.json())
    .then(data => {
      const preElement = document.getElementById('json-data');
      preElement.textContent = JSON.stringify(data, null, 2); // Pretty-print JSON with 2-space indentation
    })
    .catch(error => console.error('Error fetching JSON:', error));
});
