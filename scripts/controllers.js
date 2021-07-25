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

            // SPLITS JSON FILE INTO DIFFERENT OBJECTS AS THIS JSON FILE CONTAINS AN OBJECT WITHIN AN OBJECT
            $scope.rankData = $scope.data.rank;
            $scope.titleData = $scope.data.title;
            $scope.installsData = $scope.data.installs;
            $scope.averageData = $scope.data.averageRatings;
            $scope.priceData = $scope.data.price;
            $scope.categoryData = $scope.data.category;
            $scope.paidData = $scope.data.paid;
        },

        // IF RETRIVAL IS UNSUCCESSFUL
        function (reason) {

        }
    )


});
