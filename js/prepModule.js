// Module created and named
var app = angular.module('prepModule', ['ngRoute', 'ngStorage']);
var loggedIn = false;
// Routing and view switching
app.config(function($routeProvider){
  $routeProvider.when('/',{
    templateUrl: "/views/login/login.html",
    controller: 'routeCtrlShow', 
  });
  $routeProvider.when('/login',{
    templateUrl: "/views/login/login.html",
    controller: 'routeCtrlShow'
  });
  $routeProvider.when('/profile',{
    templateUrl: "/views/profile/profile.html",
    controller: 'routeCtrlShow'
  });
  $routeProvider.when('/myPrep',{
    templateUrl: "/views/myPrep/myPrep.html",
    controller: 'routeCtrlShow'
  });
  $routeProvider.when('/companyInfo',{
    templateUrl: "/views/companyInfo/companyInfo.html",
    controller: 'routeCtrlShow'
  });
  $routeProvider.when('/companyLists',{
    templateUrl: "/views/companyLists/companyLists.html",
    controller: 'routeCtrlShow'
  });
  $routeProvider.when('/company/:index', {
    templateUrl: "/views/companyTemplate.html",
    controller: 'routeCtrlShow'
  });

});

app.factory('loginServ', function() {
  var tSwift = {
    firstName: 'Taylor',
    lastName: 'Swift',
    email: 'taylorswift@gmail.com',
    education: 'Grand Circus, Detroit',
    jobTitle: 'Greatest female ever',
    skills: 'Everything'
  };
  var google = {
    name: "Google",
    status: "Hiring",
    size: "Big",
    location: "California",
    jobDesc: "Awesome",
    salary: "Huge",
    wants: "You",
    bonusSkills: "PHP",
    industry: "Tech",
    product: "Awesome Code",
  };
  var instagram = {
    name: "Instagram",
    status: "Hiring",
    size: "Huge",
    location: "New York",
    jobDesc: "Fabulous",
    salary: "Small",
    wants: "Amazing People!",
    bonusSkills: "Photoshop",
    industry: "Tech",
    product: "Awesome Code",
  };
  var nutshell = {
    name: "Nutshell",
    status: "No Positions Open",
    size: "Small",
    location: "California",
    jobDesc: "Okay",
    salary: "Moderate",
    wants: "Bodies",
    bonusSkills: "C",
    industry: "Tech",
    product: "Awesome Code",
  };
  var apple = {
    name: "Apple",
    status: "Accepting Resumes",
    size: "Huge",
    location: "California",
    jobDesc: "Pretty Cool",
    salary: "Moderate",
    wants: "Ninjas",
    bonusSkills: "Ruby",
    industry: "Tech",
    product: "Awesome Code",
  };

  var yahoo = {
    name: "Yahoo",
    status: "No Positions Open",
    size: "Small",
    location: "California",
    jobDesc: "Okay",
    salary: "Small",
    wants: "Rockstars",
    bonusSkills: "C+",
    industry: "Tech",
    product: "Awesome Code",
  };

  var grandCircus = {
    name: "Grand Circus",
    status: "Waiting on interview",
    size: "Small",
    location: "Detroit, Michigan",
    jobDesc: "Becoming the most amazing instructor this camp has ever seen.",
    salary: "$1,000,000",
    wants: "Godly coders",
    bonusSkills: "Being able to crush your work",
    industry: "Tech",
    product: "Grand Circus is passionate about training people for amazing careers in tech and helping local businesses grow by hiring local tech superstars. Our bootcamps serve both purposes: we give people critical skills for tech jobs while introducing them to businesses looking for talent.",
  };

  var companies = [grandCircus, google, apple, instagram, nutshell, yahoo];
  console.log(companies);
  return  companies ;
});

// Controller for data
app.controller("routeCtrlShow", function($scope, $routeParams, $localStorage, $http, loginServ) {
// console.log($routeParams);
  $scope.companies = loginServ;
  Object.assign($scope, loginServ[$routeParams.index]);

if(loggedIn){
// Taylor
$scope.taylorFirstName = loginServ.tSwift.firstName;
$scope.taylorLastName = loginServ.tSwift.lastName;
$scope.taylorEmail = loginServ.tSwift.email;
$scope.taylorEducation = loginServ.tSwift.education;
$scope.taylorJobTitle = loginServ.tSwift.jobTitle;
$scope.taylorSkills = loginServ.tSwift.skills;
// Google
$scope.googlePleaseWorkCompanyName = loginServ.google.PleaseWorkCompanyName;
$scope.googleStatus = loginServ.google.status;
$scope.googleLocation = loginServ.google.location;
$scope.googleJobDescription = loginServ.google.jobDesc;
$scope.googleSize = loginServ.google.size;
$scope.googleSalary = loginServ.google.salary;
//  Yahoo
$scope.yahooPleaseWorkCompanyName = loginServ.yahoo.PleaseWorkCompanyName;
$scope.yahooStatus = loginServ.yahoo.status;
$scope.yahooLocation = loginServ.yahoo.location;
$scope.yahooJobDescription = loginServ.yahoo.jobDesc;
$scope.yahooSize = loginServ.yahoo.size;
$scope.yahooSalary = loginServ.yahoo.salary;
//  Instagram
$scope.instagramPleaseWorkCompanyName = loginServ.instagram.PleaseWorkCompanyName;
$scope.instagramStatus = loginServ.instagram.status;
$scope.instagramLocation = loginServ.instagram.location;
$scope.instagramJobDescription = loginServ.instagram.jobDesc;
$scope.instagramSize = loginServ.instagram.size;
$scope.instagramSalary = loginServ.instagram.salary;
//  NutShell
$scope.nutshellPleaseWorkCompanyName = loginServ.nutshell.PleaseWorkCompanyName;
$scope.nutshellStatus = loginServ.nutshell.status;
$scope.nutshellLocation = loginServ.nutshell.location;
$scope.nutshellJobDescription = loginServ.nutshell.jobDesc;
$scope.nutshellSize = loginServ.nutshell.size;
$scope.nutshellSalary = loginServ.nutshell.salary;
//  Apple
$scope.applePleaseWorkCompanyName = loginServ.apple.PleaseWorkCompanyName;
$scope.appleStatus = loginServ.apple.status;
$scope.appleLocation = loginServ.apple.location;
$scope.appleJobDescription = loginServ.apple.jobDesc;
$scope.appleSize = loginServ.apple.size;
$scope.appleSalary = loginServ.apple.salary;
} else{
  $scope.taylorFirstName = "Please Log In";
}

$scope.ballinLogIn=function() {
  console.log("swift");
  var username = document.getElementById("username");
  var password = document.getElementById("password");
  if (username.value === "taylorswift" && password.value === "taylorswift") {
    console.log("ok lets do this");
    load("#/profile");
    loggedIn = true;
  } else {
    alert("Please enter correct information");
    load("fail.html");
  }
};
function load(url) {
  location.href = url;
}

// $("#navbar_icon").css("visibility","hidden"); // This uncommented means the hamburger shows up. 
console.log("showImages.js DO IT!");
$scope.pictures = [];
$http({
  method: 'GET',
  url: 'https://api.unsplash.com/photos/?client_id=67726f5ad542c14d61f2e484786f72da4cf6bf5f772a6a058719c14f14459649',
}).then(function successCallback(response) {
// console.log(response.data[0].urls.regular);

response.data.forEach(function(element){
  $scope.pictures.push(element.urls.regular);

});

// console.log($scope.pictures);
}, function errorCallback(response) {
// console.log("You did NOT NOT NOT it");    // called asynchronously if an error occurs
// or server returns response with an error status.
});

var myVar = setInterval(myTimer, 10000);
var current = 0;
function myTimer() {
  var tag = $scope.pictures[current];
  var container = document.getElementById("foo");
  console.log(container);

// container.src=tag;

//If we're at our max (minus 1 because of 0 based index) then reset
if (current == $scope.pictures.length - 1) {
  current = 0;
} else {
  current++;
}
}

// console.log("myctrl ran");


$scope.addCompany = function(  ) {
  var newCompanyName = {};
  newCompanyName.name =  $scope.newCompany;
  newCompanyName.status = $scope.newStatus;
  newCompanyName.size = $scope.newSize;
  newCompanyName.location = $scope.newLocation;
  newCompanyName.jobDesc = $scope.newJobDescription;
  newCompanyName.salary = $scope.newSalary;
  newCompanyName.wants = $scope.newWants;
  newCompanyName.bonusSkills = $scope.newBonusSkills;
  newCompanyName.industry = $scope.newIndustry;
  newCompanyName.product = $scope.newProduct;

  console.log($scope);
  $scope.companies.push(newCompanyName);
};

});

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
console.log('Name: ' + profile.getName());
console.log('Image URL: ' + profile.getImageUrl());
console.log('Email: ' + profile.getEmail());
}
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}

app.directive('coke', function () {
  return {
    restrict:'AE',
    transclude:true,
    scope:  true,
    templateUrl:'views/companyLists/newCompanyListTemplate.html',
    replace:true,
    link: function (scope, el, attrs) {
    }

  };
});