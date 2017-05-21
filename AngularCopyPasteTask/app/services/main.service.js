angular.module("Services", [])
    .factory("myFactory", myFactory)

function myFactory(){
    
    return {
        info: ""
    };
};
