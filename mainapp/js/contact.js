

function validate(){
    
    var name = document.myform.name;
    var mail = document.myform.email;
    var phone = document.myform.phone;
    var emailpattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([com\co\.\in])+$/; // to validate email id
    var msg = document.myform.message;

    if(name.value.length <=0){
        swal("Name not entered.", "Enter your name.", "warning");
        name.focus();
        return false;
    }
    
    if(mail.value.length<=0){
        swal("Email not entered.", "We need your email.", "warning");
        mail.focus();
        return false;
    }

    if(!mail.value.match(emailpattern)){
        swal("Invalid Email format!", "Check your email ID again.", "warning");
        mail.focus();
        return false;
    }
    
    if( phone.value.length==""){
        swal("Phone number not entered.", "Enter your phone number.", "warning");
        phone.focus();
        return false;
    }

    if(phone.value.length !=10 || phone.value <=0 ){
        swal("Retype your phone number.", "Only 10 digits.", "warning");
        phone.focus();
        return false;
    }
    
    if(msg.value.length<=0){
        swal("Empty message.", "", "warning");
        return false;
    }
}


(function ($) {
    'use strict';

    var form = $('.contact__form'),
        message = $('.contact__msg'),
        form_data;

    // Success function
    function done_func(response) {
        message.fadeIn().removeClass('alert-danger').addClass('alert-success');
        message.text(response);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
        form.find('input:not([type="submit"]), textarea').val('');
    }

    // fail function
    function fail_func(data) {
        message.fadeIn().removeClass('alert-success').addClass('alert-success');
        message.text(data.responseText);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
    }
    
    form.submit(function (e) {
        e.preventDefault();
        form_data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form_data
        })
        .done(done_func)
        .fail(fail_func);
    });
    
})(jQuery);