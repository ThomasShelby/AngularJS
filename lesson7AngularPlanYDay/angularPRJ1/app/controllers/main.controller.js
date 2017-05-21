angular.module("Controllers", [])
    .controller("MainCtrl", MainCtrl)
//тепер інжектимо сервіси
    MainCtrl.$inject = ["$scope", "myFactory"];   //вбудовані сервіси ангулара вказуються зі знаком $, а мої сервіси без знаку $

function MainCtrl($scope, myFactory){
    $scope.tasks = myFactory.tasks;
    $scope.addNewTask = myFactory.addNewTask;
    $scope.deleteTask = myFactory.deleteTask;
    $scope.toggle = false;
    
    $scope.editBtn = function(index){
        $scope.taskIndex = index;  
        $scope.toggle = true;
    };
    
    $scope.save = function(edit){
        $scope.tasks[$scope.taskIndex].content = edit;
        $scope.toggle = false;
    };
};