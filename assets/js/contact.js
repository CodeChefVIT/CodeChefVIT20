function validateForm(){
     var name = document.getElementById('name');
     var email = document.getElementById('email');
     var phone = document.getElementById('phone');
     var domain = document.getElementById('domain');
     if (!(name.oninvalid)||(email.oninvalid)||(phone.oninvalid)||(domain.oninvalid))
     {
        alert("Please fill valid details !");
        return false;
     }
     return true;
}
function contact()
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
        if(!validateForm()){
            window.location.replace('contact.html');
        }
        else if(this.status==201)
        {
            alert('Thanks for contacting!');
            window.location.replace('contact.html');
        }
}
}