$(document).ready(function () {
    $("#image_rollovers img").each(function () {
        // get old and new urls
        var oldURL = $(this).attr("src");
        var newURL = $(this).attr("id");

        // preload images
        var rolloverImage = new Image();
        rolloverImage.src = newURL;

        // set up event handlers
        //$(this).hover(
        $(this).mouseover(
            function () {
                $(this).attr("src", newURL);
            }
        ); // end hover
        $(this).mouseout(
            function () {
                $(this).attr("src", oldURL);
            }
        )
    });
    // end each
}); // end ready