document.addEventListener('DOMContentLoaded', () => {
  fetch('Tests.json')
    .then(response => response.json())
    .then(data => {
      const appDiv = document.getElementById('app');
      appDiv.innerHTML = `
        <h2>Data from JSON</h2>
        <pre>${JSON.stringify(data, null, 2)}</pre>
      `;
    })
    .catch(error => console.error('Error fetching JSON:', error));
});
