console.log("app.js loaded");

var app = angular.module('campus360', [])


app.controller('dashboardController', function ($scope) {
    $scope.collegename = "FISAT"
    $scope.totalstudents = "1200"
    $scope.totalfaculty = "85"

    console.log("dashboard controller is loaded")

    $scope.students=[

        "Shahid","John","Allen","Shaun"
    ]

    $scope.addStudent=function()
    
    {

        $scope.totalstudents++


        $scope.showstudents=true
    }

    
})