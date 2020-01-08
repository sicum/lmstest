$(document).ready(function(){
    $(document).on('submit', '#login_form', function(){
        // get form data
        var form_signin=$(this);
        var form_data=form_signin.serializeObject();
        // submit form data to api
        console.log(form_data);
        $.ajax({
            method: "POST",
            url: "api/auth/login.php?username=" + form_data.username + "&password=" + form_data.password  ,
            data: form_data
          })
          .done(function( message ) {
            $('#response').html("<div class='alert alert-success'>Successful login.</div>");
            location.href = 'list.html';
          })
          .fail(function( message ) {
            $('#response').html("<div class='alert alert-danger'>Login failed. username or password is incorrect.</div>");
          });
        return false;
    });
    // function to make form values to json format
    $.fn.serializeObject = function(){

        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
        };
});