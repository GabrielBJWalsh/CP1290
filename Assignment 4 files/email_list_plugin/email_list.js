$(document).ready(function () {
    $("#email").focus();
    $("#email_form").validate(
        {
            rules: {
                email_1: {required: true, email: true},
                email_2: {required: true, email: true, equalTo: "#email_1"},
                last_name: {required: true},
                first_name: {required: true},
                state: {
                    required: true,
                    rangelength: [2, 2],
                    digits: false
                },
                zip: {
                    required: true,
                    digits: true,
                    rangelength: [5, 5],
                }


            },
            messages: {
                email_2: {equalTo: "email must match"},
                state: {rangelength: "please use 2 letter code"},
                zip: {digits: "please give a 5 digit code", rangelength: "please give a 5 digit code"}


            }
        }
    )

var email = "fuckit";
}); // end ready
