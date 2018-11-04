$(document).ready(function () {
    $("#join_list").click(
        function (event) {
            var valid = true;
            if($("#email_address1").val()==""){
                $("#email_address1_error").append("please enter an email address")
                event.preventDefault()
                valid=false;
            }

            //add a selector to get the two email address values
            if($("#email_address2").val()==""){
                $("#email_address2_error").append("please enter an email address")
                event.preventDefault()
                valid=false;
            }

            if ($("#first_name").val()==""){
                $("#first_name_error").append("please enter a name")
                event.preventDefault()
                valid=false;
            }
            //add logic to determine if the user has entered text into the email address input
            //change the error text as required

            // submit the form if all entries are valid
            if(valid){
            $("#email_form").submit();}
            else {event.preventDefault()}
        } // end function
    );	// end click
    $("#email_address1").focus();
}); // end ready
