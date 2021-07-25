// Sets up angular for use
let app = angular.module("Android-Games", []);

//hides search results
document.getElementById("records").style.display = 'none';


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

            $scope.record = 0;
            // Looks for typed Name
            $scope.search = function (searchName) {

                $scope.record = searchName;
                // Returns Title of Record
                title = Object.values($scope.titleData);
                titleSearch = title[searchName - 1];

                // Returns rank of Record
                rank = Object.values($scope.rankData);
                rankSearch = rank[searchName - 1];

                // Returns Installs of Record
                install = Object.values($scope.installsData);
                installSearch = install[searchName - 1];

                // Returns average of Record
                average = Object.values($scope.averageData);
                averageSearch = average[searchName - 1];

                // Returns price of Record
                price = Object.values($scope.priceData);
                priceSearch = price[searchName - 1];

                // Returns category of Record
                category = Object.values($scope.categoryData);
                categorySearch = category[searchName - 1];

                //reveals screen
                document.getElementById("records").style.display = 'block';

                if (searchName == "" || (searchName) <= 0 || (searchName) > 50) {
                    document.getElementById("records").style.display = 'none';
                }

                // Returns object
                $scope.userValue = {
                    'rank': rankSearch,
                    'title': titleSearch,
                    'installs': installSearch,
                    'average': averageSearch,
                    'price': priceSearch,
                    'category': categorySearch
                }

            }
        },

        // IF RETRIVAL IS UNSUCCESSFUL
        function (reason) {

        }
    )


});
