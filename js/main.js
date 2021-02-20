async function fetchPersonsFromAPI() {
  const response = await fetch(
    "https://my-json-server.typicode.com/horizon-code-academy/fake-data-api/users"
  );
  const users = await response.json();
  localStorage.setItem("persons", JSON.stringify(users));
  // render
  document.querySelector(".row").innerHTML = "";
  for (let i = 0; i < users.length; i += 1) {
    document.querySelector(".row").innerHTML += `
    <div class="col-md-4">
    <div class="card">
      <div class="card-body">
        <h2>${users[i].name}</h2>
        <ul>
        ${users[i].roles
          .map((e) => `<li style="text-transform:capitalize;">${e}</li>`)
          .join("")}
        </ul>
        <a href="tel:${users[i].phone}">Phone</a>
        <a href="mailto:${users[i].email}">Email</a>
      </div>
    </div>
  </div>
  `;
  }
}

fetchPersonsFromAPI();
