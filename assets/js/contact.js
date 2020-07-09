function validateForm(){
     var name = document.getElementById('name');
     var email = document.getElementById('email');
     var phone = document.getElementById('phone');
     var domain = document.getElementById('domain');
     console.log(email.checkValidity());
     console.log(phone.checkValidity());
     if(document.getElementById('name') && document.getElementById('email') && document.getElementById('phone') && document.getElementById('domain') && email.checkValidity() && phone.checkValidity())
     {
         contact()
     }
     else{
         alert('Please fill complete details!')
     }
}
function contact()
{
    document.getElementById('signup').disable=true
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
    console.log(data)
    xh.open("POST", "https://backendcc.herokuapp.com/contact", true)
    xh.setRequestHeader('Content-Type', 'application/json')
    xh.send(JSON.stringify(data))
     xh.onload=function(){
        if(this.status==201)
        {
            toastr.success('Thanks for contacting !');
            document.getElementById('name').value=''
            document.getElementById('email').value=''
            document.getElementById('phone').value=''
            document.getElementById('domain').value=''
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



