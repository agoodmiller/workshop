// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    var service = new EmployeeService();
    service.initialize().done(function () {
        console.log("Service initialized");
    });
var adapter = new EmployeeService();
var homeTpl = Handlebars.compile($("#home-tpl").html());
var employeeLiTpl = Handlebars.compile($("#employee-li-tpl").html());
adapter.initialize().done(function () {
    $('body').html(new HomeView(adapter, homeTpl, employeeLiTpl).render().el);
});
    /* --------------------------------- Event Registration -------------------------------- */

    /* ---------------------------------- Local Functions ---------------------------------- */
    document.addEventListener('deviceready', function () {
        FastClick.attach(document.body);
        if (navigator.notification) { // Override default HTML alert with native dialog
            window.alert = function (message) {
                navigator.notification.alert(
                    message,    // message
                    null,       // callback
                    "Big Dog", // title
                    'Blah'        // buttonName
                );
            };
        }
    }, false);
}());