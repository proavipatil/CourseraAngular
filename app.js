var app = angular.module('portfolioApp', ['ngRoute']);  // Initialize Angular app with ngRoute module

// Configure routing
app.config(function($routeProvider) {
    $routeProvider
        .when('/about', {
            templateUrl: 'about.html',   // Template path for About Me page
            controller: 'AboutController'  // Controller for About Me page
        })
        .when('/projects', {
            templateUrl: 'projects.html',  // Template path for Projects page
            controller: 'ProjectsController'  // Controller for Projects page
        })
        .when('/contact', {
            templateUrl: 'contact.html',  // Template path for Contact page
            controller: 'ContactController'  // Controller for Contact page
        })
        .otherwise({
            redirectTo: '/about'  // Default route is /about
        });
});

// Controllers to bind data to the views
app.controller('AboutController', function($scope) {
    $scope.objective = "Passionate software engineering student seeking an internship to apply and enhance my programming skills.";
    $scope.education = "Bachelor of Science in Computer Science, University of Europe for Applied Sciences, Berlin (Expected Graduation: March 2026).";
    $scope.skills = [
        { name: 'Python', icon: 'Python.svg' },
        { name: 'Java', icon: 'Java.svg' },
        { name: 'JavaScript', icon: 'JS.svg' },
        { name: 'C', icon: 'C.svg' },
        { name: 'C++', icon: 'CPlusPlus.svg' },
        { name: 'Git', icon: 'git.svg' },
        { name: 'HTML', icon: 'html.svg' },
        { name: 'CSS', icon: 'css.svg' }
    ];
    $scope.frameworks=[
            { name: "React", icon: "reacrt.svg" },
            { name: "AngularJS", icon: "angular.svg" },
            { name: "Node.js", icon: "nose.svg" },
            { name: "Spring", icon: "spring.svg" }
    ];
    $scope.databases=[
            { name: "MySQL", icon: "mysql.svg" },
            { name: "MongoDB", icon: "mongodb.svg" }
    ];

});

app.controller('ProjectsController', function($scope) {
    $scope.projects = [
        {
            title: "Weather App",
            description: "A user-friendly weather app that displays real-time data (temperature, humidity, etc.) using API calls for current and forecasted weather."
        },
        {
            title: "Tic Tac Toe",
            description: "I developed a Tic-Tac-Toe game with interactive gameplay, win detection, and a restart feature. 🎮✨"
        },
        {
            title: "Bucket List",
            description: "A user-friendly list bicket app that displays real-time data (temperature, humidity, etc.) using API calls for current and forecasted weather."
        }
    ];
});

app.controller('ContactController', function($scope) {
    $scope.contactInfo = {
        phone: "+49 1515 3924850",
        email: "josemarianoludenalimas@gmail.com",
        linkedin: "https://www.linkedin.com/in/jose-mariano-ludeña-limas-023b5a139"
    };
});
