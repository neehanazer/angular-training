var app = angular.module("campus360", []);

app.controller("dashboardController", function ($scope) {
  // Imported updated initial values from 2nd JS
  $scope.collegename = "FiSaT";
  $scope.collegeId = "FISAT-2026";
  $scope.totalstudents = 1200;
  $scope.totalfaculty = 120; // Updated from 85 to 120
  $scope.students = ["Shahid", "John", "Allen", "Shaun"];
  $scope.showstudents = true;
  $scope.fees = 25600; // Updated from 2500 to 25600
  $scope.today = new Date();

  $scope.departments = ["CSE", "MCA", "MBA", "EEE", "ECE", "BCA", "IMCA"];
  $scope.selectedDepartment = "MCA"; // Default updated to MCA

  $scope.addStudent = function () {
    $scope.totalstudents++;
  };

  $scope.isDisable = true;
  $scope.allowAdmission = function () {
    $scope.isDisable = false; // Directly enables admission (from 2nd JS logic)
  };

  $scope.isReadOnly = true;
  $scope.toggleReadOnly = function () {
    $scope.isReadOnly = !$scope.isReadOnly;
  };

  $scope.student = {};
});
