$(document).ready(function () {
    // add an h2 heading to the aside
    $("aside").append("<h2>Table of contents</h2>");
    //back to top
    $("aside").append("<br><a href='#heading1'>Back to top</a>");


    // wrap the h2 text in the article in <a> tags
    $("article h2").wrapInner("<a></a>");

    // add ids to the new <a> tags
    //OLD
    /*
    $("article a").each(function (index) {
        var id = "heading" + (index + 1);
        $(this).attr("id", id);
    });
    */
    // adds ids to <a> tags using attr
    $("article a").attr("id", function (index) {
        var id = "heading" + (index + 1);
        return id
    });
    // clone the <a> tags in the article and insert them into the aside
    $("article a").clone().insertAfter($("aside h2"));

    // remove the id attributes from the <a> tags in the aside
    $("aside a").removeAttr("id");

    // add the href attributes to the <a> tags in the aside
    $("aside a").attr("href", function (index) {
        var href = "#heading" + (index + 1);
        if (href == "#heading8") {
            return "#heading1"
        } else {
            return href;
        }
    });

    // change the CSS for the selected topic and move the TOC
    $("aside a").click(function () {
        // get the id selector of the selected h2 element from the <a> tag
        id = $(this).attr("href");

        // change the styles for the selected heading
        $(id).css({"color": "blue", "font-size": "150%"});
        $("h2").not($(id)).css({"color": "black", "font-size": "120%"});
        //$(id).append("I AM THE ID ")


        // move the aside so it is next to the selected heading
        var h2Offset = $(id).offset().top;
        var asideHeight = $("aside").height();
        var articleHeight = $("article").height();
        if ((h2Offset + asideHeight) <= articleHeight) {
            asideOffset = h2Offset;
        }
        else {
            asideOffset = articleHeight - asideHeight;
        }
        $("aside").css("top", asideOffset);

    });

    $("p").not($('h2+p')).css("text-indent","1.5em")

})

