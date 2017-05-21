angular.module("myApp")
    .config(function($routeProvider){
        $routeProvider
            .when("/",{
                templateUrl: "templates/mainPage.html",
            })
            .when("/first",{
                templateUrl: "templates/firstPage.html",
            })
            .when("/second",{
                templateUrl: "templates/secondPage.html",
            })
            .when("/third",{
                templateUrl: "templates/thirdPage.html",
            });
    
    $routeProvider.otherwise("/");
    
});