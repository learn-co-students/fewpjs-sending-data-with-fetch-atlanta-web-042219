function submitData(name, email) {
  return fetch( 'http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify( {
        name,
        email
      } )
    } )
    .then(function(res) {
      return res.json()
    } )
    .then(function(res) {
      document.body.innerHTML = res["id"]
    } )
    .catch(function(error) {
      document.body.innerHTML = error.message
    } )

}