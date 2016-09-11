(function () {

    var jQueryPath = "../../bower_components/jquery/dist/jquery";
    var angularPath = "../../bower_components/angular/angular";

    require.config(
        {

            baseUrl: "dist/es5",
            paths: {
                jquery: jQueryPath,
                angular: angularPath
            }
        }
    )

    require(["app"], function (app) {

    })

} ())

