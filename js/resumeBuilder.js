// JSON
var bio = {
  "name" : "Masahiro Okubo",
  "role" : "Front End developer",
  "age" : 31,
  "contacts" : {
    "mobile" : "(+81)90-9671-3566",
    "email" : "okubo.masahiro@okubo-tech.com",
    "github" : "MasahiroOkubo",
    "twitter" : "@MasahiroOkubo",
    "blog" : "http://try10know1.blogspot.jp/",
    "location" : "Japan, Tokyo, Itabashi-ku"
    },
  "biopic" : "images/MasahiroOkubo.png",
  "message" : "Welcome!",
  "skills" : ["awesomeness", "programming", "teaching", "JS"]
};
var work = {
  "jobs" : [
    {
     "employer" : "NSSOL",
     "title" : "infraengineer",
     "location" : "Japan, Tokyo, Chuo-ku",
     "dates" : "2008-2013",
     "description" : "Migrate from Onpremise to GCP or AWS.Migrate from Onpremise to GCP or AWS.Migrate from Onpremise to GCP or AWS.Migrate from Onpremise to GCP or AWS.Migrate from Onpremise to GCP or AWS.Migrate from Onpremise to GCP or AWS.Migrate from Onpremise to GCP or AWS."
    },
    {
     "employer" : "okubotech",
     "title" : "Consultant",
     "location" : "Japan, Tokyo, Itabashi-ku",
     "dates" : "inprogress",
     "description" : "Migrate from Onpremise to GCP or AWS.Migrate from Onpremise to GCP or AWS.Migrate from Onpremise to GCP or AWS.Migrate from Onpremise to GCP or AWS.Migrate from Onpremise to GCP or AWS.Migrate from Onpremise to GCP or AWS.Migrate from Onpremise to GCP or AWS."
    }
  ]
};
var projects = {
  "projects" : [
    {
      "title" : "Translate",
      "dates" : "inprogress",
      "description" : "Traslate videos in Japanese.",
      "images" : [
        "images/fry.jpg",
        "images/fry.jpg",
        "images/fry.jpg"
      ]
    },
    {
      "title" : "Google Apps Missionary",
      "dates" : "inprogress",
      "description" : "I explain and show how to use Google Apps.",
      "images" : [
        "images/fry.jpg",
        "images/fry.jpg"
      ]
    }
  ]
};
var education = {
  "schools" :
  [
    {
    "name" : "keio",
    "degree" : "Bachelor of Arts",
    "dates" : "2003-2007",
    "location" : "Japan, Tokyo, Minato-ku",
    "major" : "politics",
    "url" : "http://www.keio.ac.jp/index-jp.html"
    },
    {
    "name" : "kaisei",
    "degree" : "High school",
    "dates" : "2003-03-31",
    "location" : "Japan, Tokyo, Arakawa-ku",
    "major" : "fundamental",
    "url" : "http://kaiseigakuen.jp/"
    }
  ],
  "onlineCourses" :
  [
    {
      "title" : "IPND",
      "school" : "Udacity",
      "dates" : "2016-04-30",
      "url" : "https://www.udacity.com/"
    },
    {
      "title" : "IPND",
      "school" : "Udacity",
      "dates" : "2016-04-30",
      "url" : "https://www.udacity.com/"
    },
    {
      "title" : "IPND",
      "school" : "Udacity",
      "dates" : "2016-04-30",
      "url" : "https://www.udacity.com/"
    }
  ]
};

// Header
function showHeader(){
  // header
  var formattedName = HTMLheaderName.replace("%data%", bio["name"]);
  var formattedRole = HTMLheaderRole.replace("%data%", bio["role"]);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  // header - topContacts
  var formattedmobile = HTMLmobile.replace("%data%", bio["contacts"]["mobile"]);
  var formattedemail = HTMLemail.replace("%data%", bio["contacts"]["email"]);
  var formattedtwitter = HTMLtwitter.replace("%data%", bio["contacts"]["twitter"]);
  var formattedgithub = HTMLgithub.replace("%data%", bio["contacts"]["github"]);
  var formattedblog = HTMLblog.replace("%data%", bio["contacts"]["blog"]);
  var formattedlocation = HTMLlocation.replace("%data%", bio["contacts"]["location"]);
  $("#topContacts").append(formattedmobile);
  $("#topContacts").append(formattedemail);
  $("#topContacts").append(formattedtwitter);
  $("#topContacts").append(formattedgithub);
  $("#topContacts").append(formattedblog);
  $("#topContacts").append(formattedlocation);

  // header - biopic - welcomeMessage - skills
  var formattedBioPic = HTMLbioPic.replace("%data%", bio["biopic"]);
  $("#header").append(formattedBioPic);
  var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio["message"]);
  $("#header").append(formattedMessage);
  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (skill in bio.skills){
      var formattedSkill = HTMLskills.replace("%data%", bio["skills"][skill]);
      $("#header").append(formattedSkill);
    };
  };
}
showHeader();

// Footer
function showFooter(){
  var formattedmobile = HTMLmobile.replace("%data%", bio["contacts"]["mobile"]);
  var formattedemail = HTMLemail.replace("%data%", bio["contacts"]["email"]);
  var formattedtwitter = HTMLtwitter.replace("%data%", bio["contacts"]["twitter"]);
  var formattedgithub = HTMLgithub.replace("%data%", bio["contacts"]["github"]);
  var formattedlocation = HTMLlocation.replace("%data%", bio["contacts"]["location"]);
  $("#footerContacts").append(formattedmobile);
  $("#footerContacts").append(formattedemail);
  $("#footerContacts").append(formattedtwitter);
  $("#footerContacts").append(formattedgithub);
  $("#footerContacts").append(formattedlocation);
}
showFooter();

// workExperience
work.display = function(){
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle ;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job]["dates"]);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job]["description"]);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDescription);
  };
};
work.display();

// projects
projects.display = function(){
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project]["title"]);
    var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[project]["dates"]);
    var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project]["description"]);
    var formattedprojectsImages = HTMLprojectImage.replace("%data%", projects.projects[project]["images"]);
    $(".project-entry:last").append(formattedprojectTitle);
    $(".project-entry:last").append(formattedprojectDates);
    $(".project-entry:last").append(formattedprojectDescription);
    for (image in projects.projects[project]["images"]){
      var formattedprojectsImages = HTMLprojectImage.replace("%data%", projects.projects[project]["images"][image]);
      $(".project-entry:last").append(formattedprojectsImages);
    };
  };
};
projects.display();

//education
education.display = function(){
  $("#education").append(HTMLschoolStart);
  $(".education-entry:last").append(HTMLrealSchools);
  for (school in education.schools) {
    var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school]["name"]);
    var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school]["degree"]);
    var formattedschoolNameDegree = formattedschoolName + formattedschoolDegree;
    var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school]["dates"]);
    var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school]["location"]);
    var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school]["major"]);
    $(".education-entry:last").append(formattedschoolNameDegree);
    $(".education-entry:last").append(formattedschoolDates);
    $(".education-entry:last").append(formattedschoolLocation);
    $(".education-entry:last").append(formattedschoolMajor);
  };
  $(".education-entry:last").append(HTMLonlineClasses);
  for (onlineCourse in education.onlineCourses) {
    var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse]["title"]);
    var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse]["school"]);
    var formattedonlineTitleSchool = formattedonlineTitle + formattedonlineSchool;
    var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse]["dates"]);
    var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse]["url"]);
    $(".education-entry:last").append(formattedonlineTitleSchool);
    $(".education-entry:last").append(formattedonlineDates);
    $(".education-entry:last").append(formattedonlineURL);
  };
};
education.display();

// internationalize button
function inName(name){
  name = name.trim().split(" ");
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);

// Google map
$("#mapDiv").append(googleMap);
