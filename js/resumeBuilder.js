'use strict';

var bio = {
    name: 'Masahiro Okubo',
    role: 'Front End developer',
    contacts: {
        mobile: '(+81)90-9671-3566',
        email: 'okubo.masahiro@okubo-tech.com',
        github: 'MasahiroOkubo',
        twitter: '@MasahiroOkubo',
        blog: 'http://try10know1.blogspot.jp',
        location: 'Japan, Tokyo, Itabashi-ku'
    },
    welcomeMessage: 'Welcome! My BIO Page. I am lucky to born in this age "The-Internet-Age".',
    skills: [
        'GoogleCloudPlatform ( Especially, I love AppEngine ! )',
        'Python ( Do you know the word "Zen" is come from Japanese. )',
        'JavaScript ( I Want to make Single Page Applications. )',
        'Other ( Redhat, Windows, Oracle, vSphere, etc... )'
    ],
    biopic: 'images/MasahiroOKUBO.jpg',
    age: 31,
    likings: [
        'PlayStation4 ( I love "Call of Duty" series. )',
        'Trecking ( Only Summer and No snow. I am biginner. )',
        'Udacity ( Study is Fun ! )'
    ]
};
var work = {
    jobs: [{
        employer: 'NSSOL',
        title: 'InfraEngineer',
        location: 'Japan, Tokyo, Chuo-ku',
        dates: '2008 - 2013',
        description: 'Administrate onpremise systems lifecycle. Especially about Infra such as Server(Bladesystem), Storage(Netapp,EMC), HV/OS(ESX,RHEL,Windows), Database(Oracle,Postgresql), Network(Cisco,Juniper) etc. I did Make plan to purchase, Design architecture, Review documents, Setup softwares, Tests, Data migration, Write script, Trouble shooting etc.'
    }, {
        employer: 'Freelancer',
        title: 'Programmer',
        location: 'Japan, Tokyo, Itabashi-ku',
        dates: '2013 - inprogress',
        description: 'Make plan to migrate systems from Onpremise to GoogleCloudPlatform. And to SMB CEO, Suggest loadmap about IT systems. Also I am interestd in rapid development of WebApplications. So It is my pleasure to study Javascript frame works!'
    }]
};
var projects = {
    projects: [{
        title: 'Translate Udacity Contents',
        dates: '2016 - inprogress',
        description: 'Traslate Udacity videos in Japanese. I love Udacity so want to volunteer someelse.',
        images: [
            'images/volunteer-udacity-1.jpg',
            'images/volunteer-udacity-2.jpg'
        ]
    }, {
        title: 'Google Cloud Missionary',
        dates: '2015 - inprogress',
        description: 'I explain and show how to use Google Cloud. Apps, GAE, GCE.',
        images: [
            'images/fry.jpg',
            'images/fry.jpg'
        ]
    }]
};
var education = {
    schools: [{
        name: 'keio',
        degree: 'Bachelor of Arts',
        dates: '2003-2007',
        location: 'Japan, Tokyo, Minato-ku',
        majors: ['politics', 'a hard world'],
        url: 'http://www.keio.ac.jp/index-jp.html'
    }, {
        name: 'Kaisei high school',
        degree: 'High school',
        dates: '2003-03-31',
        location: 'Japan, Tokyo, Arakawa-ku',
        majors: ['fundamental', 'mahjong', 'humanity'],
        url: 'http://kaiseigakuen.jp'
    }],
    onlineCourses: [{
        title: 'Into to Programming Nanodegree',
        school: 'Udacity',
        date: '2016-04',
        url: 'https://www.udacity.com',
        description: 'fundamental of programming',
        outputtitle: 'my output',
        outputurl: 'https://www.udacity.com'
    }, {
        title: 'Developing Scalable Apps in Python',
        school: 'Udacity',
        date: '2016-05',
        url: 'https://www.udacity.com',
        description: 'fundamental of programming',
        outputtitle: 'my output',
        outputurl: 'https://www.udacity.com'
    }, {
        title: 'HTML5 Game Development',
        school: 'Udacity',
        date: '2016-06',
        url: 'https://www.udacity.com',
        description: 'fundamental of programming',
        outputtitle: 'my output',
        outputurl: 'https://www.udacity.com'
    }]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
    var formattedMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    var formattedmobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    var formattedemail = HTMLemail.replace('%data%', bio.contacts.email);
    var formattedtwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    var formattedgithub = HTMLgithub.replace('%data%', bio.contacts.github);
    var formattedblog = HTMLblog.replace('%data%', bio.contacts.blog);
    var formattedlocation = HTMLlocation.replace('%data%', bio.contacts.location);

    $('#header').prepend(formattedName, formattedRole);
    $('#header').append(formattedBioPic, formattedMessage);
    if (bio.skills.length) {
        $('#header').append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace('%data%', skill);
            $('#skills-h3').append(formattedSkill);
        })
    }
    $('#topContacts, #footerContacts').append(formattedmobile, formattedemail,
        formattedtwitter, formattedgithub);
    $('#topContacts').append(formattedlocation, formattedblog);
};
work.display = function() {
    if (work.jobs.length) {
        $('#workExperience').append(HTMLworkStart);
        work.jobs.forEach(function(job) {
            var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
            var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedDates = HTMLworkDates.replace('%data%', job.dates);
            var formattedLocation = HTMLworkLocation.replace('%data%', job.location);
            var formattedDescription = HTMLworkDescription.replace('%data%', job.description);
            $('.work-entry:last').append(formattedEmployerTitle, formattedDates,
                formattedLocation, formattedDescription);
        })
    }
};
projects.display = function() {
    if (projects.projects.length) {
        $('#projects').append(HTMLprojectStart);
        projects.projects.forEach(function(project) {
            var formattedprojectTitle = HTMLprojectTitle.replace('%data%', project.title);
            var formattedprojectDates = HTMLprojectDates.replace('%data%', project.dates);
            var formattedprojectDescription = HTMLprojectDescription.replace('%data%', project.description);
            $('.project-entry:last').append(formattedprojectTitle, formattedprojectDates, formattedprojectDescription);
            project.images.forEach(function(image) {
                var formattedprojectsImages = HTMLprojectImage.replace('%data%', image);
                $('.project-entry:last').append(formattedprojectsImages);
            })
        })
    }
};
education.display = function() {
    $('#education').append(HTMLschoolStart);
    $('.education-entry').append(HTMLrealSchools);
    education.schools.forEach(function(school) {
        var formattedschoolName = HTMLschoolName.replace('%data%', school.name);
        var formattedschoolDegree = HTMLschoolDegree.replace('%data%', school.degree);
        var formattedschoolNameDegree = formattedschoolName + formattedschoolDegree;
        var formattedschoolDates = HTMLschoolDates.replace('%data%', school.dates);
        var formattedschoolLocation = HTMLschoolLocation.replace('%data%', school.location);
        $('.education-entry').append(formattedschoolNameDegree, formattedschoolDates, formattedschoolLocation);
        school.majors.forEach(function(major) {
            var formattedschoolMajor = HTMLschoolMajor.replace('%data%', major);
            $('.education-entry').append(formattedschoolMajor);
        })
    })
    $('.education-entry').append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(onlineCourse) {
        var formattedonlineTitle = HTMLonlineTitle.replace('%data%', onlineCourse.title);
        var formattedonlineSchool = HTMLonlineSchool.replace('%data%', onlineCourse.school);
        var formattedonlineTitleSchool = formattedonlineTitle + formattedonlineSchool;
        var formattedonlineDates = HTMLonlineDates.replace('%data%', onlineCourse.date);
        var formattedonlineURL = HTMLonlineURL.replace('%data%', onlineCourse.url);
        $('.education-entry:last').append(formattedonlineTitleSchool, formattedonlineDates, formattedonlineURL);
    })
};

bio.display();
work.display();
projects.display();
education.display();

// internationalize button
$("#main").append(internationalizeButton);

// Google map
$("#mapDiv").append(googleMap);
