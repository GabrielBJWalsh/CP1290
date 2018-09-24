$(document).ready(function () {
        $("h2:eq(0)").click(
            function () {
                $("div:eq(0)").toggle();
            }
        )
        $("h2:eq(1)").click(
            function () {
                $("div:eq(1)").toggle();
            }
        )
        $("h2:eq(2)").click(
            function () {
                $("div:eq(2)").toggle();
            }
        )
        $("a").click(
            function (event) {
                var pic = $(this).attr("href")
                event.preventDefault()
                $("img").attr("src",pic);

            }

        )
    }
)


