// Sets up angular for use
let app = angular.module("Android-Games", []);

/*******************
 *   CONTROLLERS   *
 *      BELOW      *
 *******************/

app.controller("Display", function ($scope, $http) {

    // RETRIEVES JSON FILE
    let promise = $http.get("./json/android-games.json");

    // INSPECTS PROMISE
    promise.then(
        // IF RETRIVAL IS SUCCESSFUL
        function (response) {
            $scope.data = response.data; // DATA

            $scope.title = Object.keys($scope.data); // RETRIEVES COLUMN NAME
        },

        // IF RETRIVAL IS UNSUCCESSFUL
        function (reason) {

        }
    )


});