angular.module('nodeBudget', [])
    .controller('mainController', ($scope, $http) => {
        $scope.formData = {};
        $scope.budgetData = {};
        // Get all todos
        $http.get('/api/v1/Budget')
            .success((data) => {
                $scope.budgetData = data;
                console.log(data);
            })
            .error((error) => {
                console.log('Error: ' + error);
            });

        // Create a new todo
        $scope.createTest = () => {
            $http.post('/api/v1/Budget', $scope.formData)
                .success((data) => {
                    $scope.formData = {};
                    $scope.todoData = data;
                    console.log(data);
                })
                .error((error) => {
                    console.log('Error: ' + error);
                });
        };
        // Delete a todo
        $scope.deleteTest = (testID) => {
            $http.delete('/api/v1/Budget/' + testID)
                .success((data) => {
                    $scope.budgetData = data;
                    console.log(data);
                })
                .error((data) => {
                    console.log('Error: ' + data);
                });
        };

        $scope.createExpense = () => {
            $http.post('/api/v1/Budget', $scope.formData)
            .success((data) => {
              $scope.formData = {};
              $scope.todoData = data;
              console.log(data);
            })
            .error((error) => {
              console.log('Error: ' + error);
            });
          };
    });