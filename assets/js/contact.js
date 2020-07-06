function validateForm(){
     var name = document.getElementById('name');
     var email = document.getElementById('email');
     var phone = document.getElementById('phone');
     var domain = document.getElementById('domain');
     console.log(email.checkValidity());
     console.log(phone.checkValidity());
     return((email.checkValidity())&&(phone.checkValidity()));
}
function contact()
{
    grecaptcha.ready(() => {
        grecaptcha.execute('6LebSawZAAAAAFNR2zDGbGVurB8zitlUJ4BmXANk', {
            action: '/'
        }).then((token) => {

        var data={
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        phone:document.getElementById('phone').value,
        domain:document.getElementById('domain').value,
        recaptcha: token
    }
    var xh = new XMLHttpRequest();
   
    xh.open("POST", "https://backendcc.herokuapp.com/contact", true)
    xh.setRequestHeader('Content-Type', 'application/json')
    
 
    xh.send(JSON.stringify(data))
     xh.onload=function(){
        console.log('return value ' + validateForm());
       if(!validateForm())
       {
        toastr.error('Enter valid details !');
       }
      
        else if(this.status==201)
        {
            toastr.success('Thanks for contacting !');
            // window.location.replace('contact.html');
        }
        else{
            toastr.error('Failed! Try again');
            // window.location.replace('contact.html');
        }
    }
})
    })
}



