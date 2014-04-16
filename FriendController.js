angular.module('app').controller('FriendController', function ($scope, $http) {

  $http.get('https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json')
    .success(function(data, status, headers, config) {
      $scope.friends = data.results
    })

  $scope.sortProperties = [
    { text: 'Name', value: 'name' },
    { text: '# Friends', value: 'friend_count' },
    { text: 'City', value: 'current_location.city' },
    { text: 'State', value: 'current_location.state' },
    { text: 'Country', value: 'current_location.country' }
  ]
  $scope.sortProperty = $scope.sortProperties[0].value

  $scope.sortDirections = [
    { text: 'Ascending', value: false },
    { text: 'Descending', value: true }
  ]
  $scope.sortDirection = $scope.sortDirections[0].value

})


