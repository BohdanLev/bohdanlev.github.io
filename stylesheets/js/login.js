const myForm = document.getElementById('formElem');
myForm.onsubmit =  (e) => {
e.preventDefault();
fetch('http://127.0.0.1:8000/auth/login/', {
method: 'POST',
body: new FormData(myForm)
}).then((response) => {
	if (!response.ok)
	{
		window.location.reload(false);
	} 
	else 
	{
		localStorage.removeItem('error');
		window.location.replace('home.html')
	}
	return response.json();
}).then(data => {
	if (data.detail)
	localStorage.setItem('error', data.detail);
	localStorage.setItem('Token', data.Token)
});
}
window.onload = function(){
if (localStorage.getItem('error'))
    document.getElementById('error').innerHTML = localStorage.getItem('error');
    localStorage.removeItem('error');
};