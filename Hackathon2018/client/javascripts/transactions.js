var app = angular.module('BudgetApp', []);
app.controller('transactionCtrl', function($scope, $http) {
    $scope.formData = {};
    $scope.budgetData = {};
    $http.get("api/v1/Budget")
    .success(function (response) {
        $scope.typeName = response.data.records;
    });
});