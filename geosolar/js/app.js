(function() {
  angular.module('landingApp', ['localytics.directives']).config([
    '$parseProvider', function($parseProvider) {
      return $parseProvider.unwrapPromises(true);
    }
  ]).controller('SearchCtrl', function($scope){
  $scope.skills = [
    'Android',
    'AngularJS',
    'API',
    'ASP.NET',
    'ASP.NET MVC',
    'Backbone.js',
    'C',
    'C#',
    'C++',
    'CakePHP',
    'Clojure',
    'CMS',
    'Cocoa',
    'CoffeeScript',
    'Delphi',

    'DevOps',
    'Django',
    'Dojo',
    'Drupal',
    'Erlang',
    'ERP',
    'Express.js',
    'Ext JS',
    'F#',
    'Flash',
    'Front-end',
    'Game Development',
    'GIS',
    'Grails',
    'Groovy', 
  
    'Hadoop',
    'Haskell',
    'Hibernate',
    'HTML5',
    'iOS',
    'Java',
    'Java EE',
    'JavaScript',
    'jQuery',
    'LAMP',
    'LMS',
    'Machine Learning',
    'Magento',
    'MATLAB',
    'Microsoft',

    'Mobile',
    'MSSQL',
    'MySQL',
    '.NET',
    'Node.js',
    'Objective-C',
    'OCaml',
    'OpenGL',
    'Perl',
    'PHP',
    'POS',
    'PostgreSQL',
    'PyObjc',
    'PyQT',
    'Python',

    'Ruby',
    'Ruby on Rails',
    'SalesForce',
    'Scala',
    'Sharepoint',
    'Silverlight',
    'Socket.IO',
    'Spring',
    'SQL',
    'Struts',
    'Symfony',
    'Sys Admin',
    'System Security',
    'Twitter Bootstrap',
    'UI',

    'Unity',
    'Unity3D',
    'VB.NET',
    'Visual Studio',
    'Web',
    'Windows',
    'WordPress',
    'WPF',
    'Xamarin',
    'Xcode',
    'Yii',
    'Zend'
  ]
});

}).call(this);
