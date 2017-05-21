angular.module("Controllers", [])
    .controller("firstCtrl", firstCtrl)
    firstCtrl.$inject = ["myFactory"];

function firstCtrl(myFactory){
    
    this.copy = function(text){
        console.log("Copied text: "+text);
        myFactory.info = text;
    };
};