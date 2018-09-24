$(document).ready(function () {
    $("#join_list").click(
        function () {
            var emailAddress1 = $("#email_address1").val();
            var emailAddress2 = $("#email_address2").val();
            var isValid = true;

            // validate the first email address
            if (emailAddress1 == "") {
                $("#email_address1_error").text("This field is required.");
                isValid = false;
            } else {
                $("#email_address1_error").text("");
            }

            // validate the second email address
            if (emailAddress2 == "") {
                $("#email_address2_error").text("This field is required.");
                isValid = false;
            } else if (emailAddress1 !== emailAddress2) {
                $("#email_address2_error").text("This entry must equal first entry.");
                isValid = false;
            } else {
                $("#email_address2_error").text("");
            }

            // validate the first name entry
            if ($("#first_name").val() == "") {
                $("#first_name_error").text("This field is required.");
                isValid = false;
            }
            else {
                $("#first_name_error").text("");
            }

            // submit the form if all entries are valid
            if (isValid) {
                $("#email_form").submit();
            }
        } // end function
    );	// end click
    $("#email_address1").focus();

    $("#clear_entries").click(
        function() {
            email_address1 = document.getElementById("email_address1").value = null;
            email_address2 = document.getElementById("email_address2").value = null;
            first_name = document.getElementById("first_name").value = null;
        }
    )

    // noinspection JSAnnotator
    $(":text").dblclick(
        function(){
        //$("#clear_entries").trigger("click")
        $(this).val("");}
    )





    }

); // end ready
