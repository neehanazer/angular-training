var app = angular.module("campus360", []);

app.controller("dashboardController", function ($scope) {
  $scope.collegename = "FISAT";
  $scope.totalstudents = 1200;
  $scope.totalfaculty = 85;

  $scope.students = ["Shahid", "John", "Allen", "Shaun"];

  $scope.fees = 2500;
  $scope.today = new Date();

  $scope.departments = ["CSE", "MCA", "MBA"];

  $scope.selectedDepartment = "CSE";

  $scope.showstudents = true;

  $scope.addStudent = function () {
    $scope.totalstudents++;
  };
});
