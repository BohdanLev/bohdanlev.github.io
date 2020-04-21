    if (!localStorage.Token)
      document.getElementById('logout').hidden = true;
    else 
      document.getElementById('login').hidden = true;

    logOut = (e) => {
    fetch('http://localhost:8000/auth/logout/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${localStorage.Token}`,
      }
    }).then(res => {
      localStorage.removeItem("Token");
      localStorage.removeItem("User");
      window.location.reload(false);
      return res.json();

    })};