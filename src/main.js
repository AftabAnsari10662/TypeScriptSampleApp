(function () {

var jQueryPath = "./bower_components/jquery/jquery.js";

    require.config(
        {

            baseUrl: "dist/es5",
            paths:{
                jquery:jQueryPath
            }
        }
    )

    require(["app"], function (app) {

    })

} ())

