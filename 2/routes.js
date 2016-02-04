angular.module('NoteWrangler', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider

    .when('/notes', {
      templateUrl: 'templates/pages/notes/index.html'
    })
    .when('/users', {
      templateUrl: 'templates/pages/users/index.html'
    })
    .when('/notes/new', {
        templateUrl: 'templates/pages/notes/edit.html'
      })
  	.when('/', { redirectTo : '/users'})
    .when('/notes/:id', {
      templateUrl: 'templates/pages/notes/note.html'
      controller: 'NotesIndexController',
      controllerAs: 'indexController'
    })
  	.otherwise({ redirectTo : '/notes'});

}]);