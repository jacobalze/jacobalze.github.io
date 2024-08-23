document.addEventListener('DOMContentLoaded', () => {
  fetch('Tests.json')
    .then(response => response.json())
    .then(data => {
      const userList = document.getElementById('user-list');
      data.users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.className = 'user';
        userDiv.innerHTML = `
          <strong>Name:</strong> ${user.name}<br>
          <strong>Age:</strong> ${user.age}<br>
          <strong>City:</strong> ${user.city}
        `;
        userList.appendChild(userDiv);
      });
    })
    .catch(error => console.error('Error fetching JSON:', error));
});
