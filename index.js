function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
  .then(resp => resp.json())
  .then(obj => {
    // Append the new id to the DOM
    document.body.innerHTML = obj.id;
  })
  .catch(error => {
    // Append the error message to the DOM
    document.body.innerHTML = error.message;
  });
}

// expose globally so tests can see it
window.submitData = submitData;
