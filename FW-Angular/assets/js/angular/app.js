angular.module('myApp', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider

    .when('/about', {
      templateUrl: 'templates/about.html'
    })    
    .when('/contact', {
      templateUrl: 'templates/contact.html'
    })  
    .when('/download', {
      templateUrl: 'templates/download.html'
    })
    .when('/', {
      templateUrl: 'templates/index.html' 
    })
    .when('/blog', {
      templateUrl: 'templates/blog.html',
      controller: 'blogController'      

    })
    .when('/blog/:id', {
      templateUrl: 'templates/post.html',
      controller: 'postController',
      controllerAs: 'postCtrl'    

    })
    .otherwise({ 
      redirect : '/'
    });

}])
.controller('blogController', function($scope, $http){
  $scope. posts = {};
  $http.get('http://jsonplaceholder.typicode.com/posts')
  .success(function(data){
    $scope.posts = data;
  })
  .error(function(err){
    console.log(err);
  })
})
.controller('postController', function($scope, $http, $routeParams){
  $scope.post = {};
  $http({method: 'GET', url: 'http://jsonplaceholder.typicode.com/posts/'+$routeParams.id})
  .success(function(data){
    $scope.post = data;
    //console.log(data);
  })
  .error(function(err){
    console.log(err);
  })
});