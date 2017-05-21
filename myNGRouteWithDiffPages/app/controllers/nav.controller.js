angular.module("Controllers", [])
    .controller("myCtrl", myCtrl);   //мій контролер myCtrl

function myCtrl(){
    
    this.navigation = [
      {
        title: "MainPage",
        link: "#/"
      },
      {
        title: "JavaScript",
        link: "#/first"
      },
      {
        title: "JQuery",
        link: "#/second"
      },
      {
        title: "Java",
        link: "#/third"
      }
    ];

};