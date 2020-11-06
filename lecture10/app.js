(function () {
  "use strict";

  angular.module("DIApp", []).controller("DIController", DIController);

  // Prevent minification of our AngularJS Services
  DIController.$inject = ["$scope", "$filter"];

  function DIController($scope, $filter) {
    $scope.name = "Kyle Berry";

    $scope.upper = function () {
      var upCase = $filter("uppercase");
      $scope.name = upCase($scope.name);
    };
  }
})();

// Showing that the minified code worked
// Thanks to <Controller Name>.$inject = ['$scope', '$filter'];

// !(function () {
//   "use strict";
//   function e(e, n) {
//     (e.name = "Kyle Berry"),
//       (e.upper = function () {
//         var r = n("uppercase");
//         e.name = r(e.name);
//       });
//   }
//   angular.module("DIApp", []).controller("DIController", e),
//     (e.$inject = ["$scope", "$filter"]);
// })();
