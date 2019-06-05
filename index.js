// Add your code here

function submitData(name, email) {
  let formData = {
    name,
    email
  }
  
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  }
  
  return fetch("http://localhost:3000/users", configObj)
    .then(resp => resp.json())
    .then(obj => document.body.innerHTML = obj.id)
    .catch(function(error) { 
      alert("bad things!")
      document.body.innerHTML = error.message
    })
}