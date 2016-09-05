require.config(
    {

        baseUrl: "dist/es5"
    }
)

require(["app"], function(app){

    new app.App().run();
})