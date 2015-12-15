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
  $routeProvider.when('/google',{
    templateUrl: "/views/google/google.html",
    controller: 'routeCtrlShow'
  });
  $routeProvider.when('/apple',{
    templateUrl: "/views/apple/apple.html",
    controller: 'routeCtrlShow'
  });
  $routeProvider.when('/instaGram',{
    templateUrl: "/views/instaGram/instaGram.html",
    controller: 'routeCtrlShow'
  });
  $routeProvider.when('/nutShell',{
    templateUrl: "/views/nutShell/nutShell.html",
    controller: 'routeCtrlShow'
  });
  $routeProvider.when('/yahoo',{
    templateUrl: "/views/yahoo/yahoo.html",
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
   PleaseWorkCompanyName: "Google",
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
   PleaseWorkCompanyName: "Instagram",
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
   PleaseWorkCompanyName: "Nutshell",
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
   PleaseWorkCompanyName: "Apple",
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
   PleaseWorkCompanyName: "Yahoo",
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

   var companies = [google, nutshell, instagram ,apple, yahoo];

  return {tSwift, google, instagram, nutshell, apple, yahoo
  };
});

// Controller for data
app.controller("routeCtrlShow", function($scope, $localStorage, $http, loginServ) {
  // $("#navbar_icon").css("visibility","visible");
  // $scope.saveData = function() {
  //   $localStorage.message = "Hello World";
  //   console.log('hello');
  // };

  // $scope.loadData = function() {
  //   $scope.message = $localStorage.message;
  // };

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
      loggedIn=true;
    } else {
      alert("Please enter correct information");
      load("fail.html");
    }
  }
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
console.log("You did NOT NOT NOT it");    // called asynchronously if an error occurs
// or server returns response with an error status.
});

var myVar = setInterval(myTimer, 4000);
var current = 0;
function myTimer() {
  var tag = $scope.pictures[current];
  var container = document.getElementById("foo");
  console.log(container);

  container.src=tag;

//If we're at our max (minus 1 because of 0 based index) then reset
if (current == $scope.pictures.length - 1) {
  current = 0;
} else {
  current++;
}
}

console.log("myctrl ran");
$scope.companies = [
{ name: 'Grand Circus',
linked: '#'}
];
$scope.addCompany = function() {
  $scope.companies.push(
    {name: $scope.newCompany,
      linked: $scope.newLinked});
};

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
console.log('Name: ' + profile.getName());
console.log('Image URL: ' + profile.getImageUrl());
console.log('Email: ' + profile.getEmail());
};
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
};

 console.log("myctrl ran");
  $scope.companies = [
  { name: 'Grand Circus',
  linked: '#'}
  ];
  $scope.addCompany = function() {
    $scope.companies.push(
      {name: $scope.newCompany,
      linked: $scope.newLinked});
  };
});
//   function onSignIn(googleUser) {
//   var profile = googleUser.getBasicProfile();
//   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//   console.log('Name: ' + profile.getName());
//   console.log('Image URL: ' + profile.getImageUrl());
//   console.log('Email: ' + profile.getEmail());
// };
// function signOut() {
//     var auth2 = gapi.auth2.getAuthInstance();
//     auth2.signOut().then(function () {
//       console.log('User signed out.');
//     });
//   };

// });

app.directive('coke', function () {
  return {
    restrict:'AE',
    transclude:true,
    scope:  true,
    templateUrl:'views/companyLists/newCompanyListTemplate.html',
    replace:true,
    link: function (scope, el, attrs) {
}

}
});