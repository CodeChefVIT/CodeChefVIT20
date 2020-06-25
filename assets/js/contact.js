
function register()
{
    var data={
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        phone:document.getElementById('phone').value,
        domain:document.getElementById('domain').value
    }
    var xh = new XMLHttpRequest();
   

    xh.open("POST", "https://backendwebcc.herokuapp.com/contact", true)
    xh.setRequestHeader('Content-Type', 'application/json')
    
 
    xh.send(JSON.stringify(data))
    xh.onload=function(){
        if(this.status==201)
        {
            alert('Thanks for contacting!')
            window.location.replace('contact.html')
        }
        else{
            alert('Failed! Try again')
            window.location.replace('contact.html')
        }
}
}