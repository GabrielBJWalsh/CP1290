$(document).ready(function () {
    // preload images
    $("#image_list a").each(function () {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });
    $("#image img").fadeOut(1000);
    // add a simple fade animation to fade in the image with id "image" over 1 second

    // set up event handlers for links ..

    $("#image_list a").click(function (event) {
            // change the main image with id "image" to use the link's href attribute from the image list when it is clicked

            var pic = $(this).attr("href");
            var title = $(this).attr("title");
            $("#caption").text(title);
            $("#image").attr("src",pic);
            event.preventDefault();


        }
    )
    // also set the header with id of "caption" with the link's title attribute


    // cancel the default action of the link
    // jQuery method that's cross-browser compatible
}); // end click

// move focus to first thumbnail
$("li:first-child a:first-child").focus()
; // end ready