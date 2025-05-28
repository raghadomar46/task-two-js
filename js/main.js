fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const container = document.getElementById('userContainer');
    users.forEach(user => {
      const userCard = document.createElement('div');
      userCard.className = 'user-card';
      userCard.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>اسم المستخدم:</strong> ${user.username}</p>
        <p><strong>البريد الإلكتروني:</strong> ${user.email}</p>
        <p><strong>الهاتف:</strong> ${user.phone}</p>
        <p><strong>الموقع:</strong> ${user.website}</p>
        <p><strong>العنوان:</strong> ${user.address.city}, ${user.address.street}</p>
      `;
      container.appendChild(userCard);
    });
  })
  .catch(error => {
    console.error('حدث خطأ أثناء جلب البيانات:', error);
  });