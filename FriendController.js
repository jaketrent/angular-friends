angular.module('app').controller('FriendController', function ($scope) {

  $.getJSON('https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json', function (data, status, xhr) {
    $scope.$apply(function () {
      $scope.friends = data.results
    })
  })

  $scope.test = "Hello World"
})




