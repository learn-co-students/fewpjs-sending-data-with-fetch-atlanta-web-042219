function submitData(name, email) {

  return fetch("http://localhost:3000/users", {
    method:'POST',
    headers: {
      'Accept': 'application/json',
      'Content-type':'application/json'
    },
    body: JSON.stringify({
      name,
      email
    })
  })

  .then((res) => res.json())
  .then((data) => document.body.innerHTML = data["id"])
  .catch((err) => document.body.innerHTML = err.message)

}

//   .then( function ( response ) {
//     return response.json()
//   } )
//   .then( function ( object ) {
//     document.body.innerHTML = object[ "id" ]
//   } )
//   .catch( function ( error ) {
//     document.body.innerHTML = error.message
//   } )
// }

// function addNewUser(data){
//   const userP = document.getElementById('#userP')
//   const emailP = document.getElementById('#emailP')

//   userP.innerText = data.name
//   emailP.innerText = data.email
// }