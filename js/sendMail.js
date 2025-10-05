//contact form submission
  emailjs.init('0jHdK5PxXJGfy8Mtf');

  document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('service_gkvai07', 'template_aiukuk6', this)
      .then(() => showAlert("OK"))
      .catch((error) => showAlert('Failed to send message: ' + error));
  });



//show message sent alert
function showAlert(message){
  console.log(message);
  if(message!='OK'){
    $('.mail-not-sent').addClass('visible')
    setTimeout(function(){$('.mail-not-sent').removeClass('visible') }, 5000);
  }else{
    document.querySelector('.contact-form').reset();
    $('.mail-sent').addClass('visible')
    setTimeout(function(){$('.mail-sent').removeClass('visible') }, 5000);
  }
}