angular.module("Controllers")
    .controller("secondCtrl", secondCtrl)
    secondCtrl.$inject = ["$scope", "myFactory"];

function secondCtrl($scope, myFactory){
    
    $scope.paste = function(){
        this.pastedText = myFactory.info;
        console.log("Pasted text: "+this.pastedText);
    };
};