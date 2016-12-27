/*Data Objects.*/

var bio = {
    "name": "Christiaan Quyn",
    "role": "Front-End Developer",
    "contacts": {
        "mobile": "+94 777549947",
        "email": "christianq010@gmail.com",
        "github": "https://github.com/Christianq010",
        "linkedIn": "https://lk.linkedin.com/in/christianq010",
        "blog": "https://medium.com/@christianq010",
        "location": "Colombo, Sri Lanka"
    },
    "welcomeMessage": "Hi, I started programming while working as an HVAC Tech - pursuing my Engineering degree. I'm incredibly passionate about developing software and creating interesting user experiences over the web.",
    "skills": ["./assets/img/svg/html-5.svg",
                "./assets/img/svg/css-3.svg",
                "./assets/img/svg/javascript.svg",
                "./assets/img/svg/sass.svg",
                "./assets/img/svg/bootstrap.svg",
                "./assets/img/svg/jquery.svg",
                "./assets/img/svg/git.svg"
                ],
    "biopic": "./assets/paper_img/sw-pic1.jpg"
};

var education = {
    "schools": [{
        "name": "University of Wolverhampton",
        "location": "BCAS City Campus, Colombo",
        "degree": "BEng (Hons)",
        "majors": ["Telecommunication Engineering", "Electronic Engineering"],
        "dates": "2016-2019",
        "courses": ["BTEC Diploma in Engineering Foundations", "HND in Telecom Eng"],
        "url": "http://courses.wlv.ac.uk/course.asp?code=MA006H31UVD"
    }],
    "onlineCourses": [{
        "title": "Udacity Front-End Developer Nanodegree",
        "school": "Udacity Inc.",
        "dates": "2016",
        "url": "https://www.udacity.com"
    }, {
        "title": "Treehouse Front-End Developer Track",
        "school": "Treehouse Island Inc.",
        "dates": "2015-2016",
        "url": "https://teamtreehouse.com"
    }]
};

var work = {
    "jobs": [{
        "employer": "Lanka Energy Conservation",
        "title": "Trainee Engineer",
        "description": "Trainee Mechanical Service Engineer / Tech for HVAC Equipment",
        "dates": "2015-present",
        "location": "Colombo 4, Sri Lanka"
    }, {
        "employer": "Cinnamon Grand Hotel",
        "title": "Engineering Apprentice",
        "description": "Engineering Maintenance Technician for a variety of equipment including HVAC, Electrical and Mechanical",
        "dates": "2014-2015",
        "location": "Colombo 3, Sri Lanka"
    }]
};

var projects = {
    "projects": [{
        "title": "Portfolio Website",
        "dates": "Sep 2016",
        "description": "A Portfolio of Projects, created as part of the Udacity Nanodegree in Front-End Web Development",
        "images": ["./assets/paper_img/album.svg"],
        "url" : "https://github.com/Christianq010/udacity_personal-portfolio"
    },
    {
        "title": "Resume project",
        "dates": "Oct 2016",
        "description": "An Online Resume, built on Javascript objects appended with new skills and information dynamically via jQuery",
        "images": ["./assets/paper_img/curriculum.svg"],
        "url" : "https://github.com/Christianq010/udacity_resume_project"
    },
    {
        "title": "Classic Arcade Game",
        "dates": "Nov 2016",
        "description": "Recreated the classic Arcade game Frogger, using provided visual assets and game engine following Object Oriented Javascript principles.",
        "images": ["./assets/paper_img/video-game.svg"],
        "url" : "https://github.com/Christianq010/Classic-Arcade-Game-Frogger_master"
    }]
};

bio.display = function () {

    //Variables for all bio details
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedContactMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedContactEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedlinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedIn);
    var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    //Append variables onto the Page
    $(".name").prepend(formattedName);
    $(".role").prepend(formattedRole);
    $(".avatar").append(formattedBioPic);
    $(".skillsStart").append(HTMLskillsStart);
    $(".message").append(formattedWelcomeMsg);

    //Append Contact Info to Top of the page
    $(".contactMobile").append(formattedContactMobile);
    $(".contactMail").append(formattedContactEmail);
    $(".contactGithub").append(formattedGithub);
    $(".contactLinkedIn").append(formattedlinkedin);
    $(".contactLocation").append(formattedLocation);

    //Loop Through each Skill
    bio.skills.forEach(function (skill) {
        var formattedSkill = HTMLskills.replace("%data%",skill);
        $("#skills").append(formattedSkill);
    });

    //Contact details for the footer
    $(".footerMobile").append(formattedContactMobile);
    $(".footerEmail").append(formattedContactEmail);
    $(".footerLocation").append(formattedLocation);
    $(".footerBlog").append(formattedBlog);
};


$("#education").append(HTMLschoolStart);

education.display = function () {

    education.schools.forEach(function(school) {

        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
        var formattedSchoolUrl = HTMLschoolUrl.replace("%data%", school.url);

        $(".education-entry:last").append(formattedSchoolName, formattedDegree, formattedSchoolDates, formattedSchoolLocation, formattedSchoolMajor, formattedSchoolUrl);
    });
        //repeated so Online Courses appears Below Main Education
        $("#education").append(HTMLschoolStart);
        //append Online Courses in Education section
        $("#education").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(onlineCourse) {

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
        var formattedOnlineCourseDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
        var formattedOnlineUrl = HTMLonlineURL.replace("%data%", onlineCourse.url);

        $(".education-online").append(formattedOnlineTitle, formattedOnlineSchool, formattedOnlineCourseDates, formattedOnlineUrl);
    });

};


work.display = function () {

    work.jobs.forEach(function (job) {

        //create a new div for work section
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

        $(".work-entry:last").append(formattedDates, formattedLocation, formattedDescription);
    });
};

projects.display = function () {

    projects.projects.forEach(function(project) {
        //new Project Section
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);

        $(".project-entry:last").append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription);

        //Loop Through Each Image
        project.images.forEach(function (image) {
            var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
            $(".project-entry:last").append(formattedProjectImage);
        });

        var formattedProjectUrl = HTMLprojectUrl.replace("%data%", project.url);
        $(".project-entry:last").append(formattedProjectUrl);
    });
};

    //International Name
    function inName(name) {
        name = name.trim().split(" ");
        console.log(name);

        name[1] = name[1].toUpperCase();
        name[0] = name[0].slice(0, 1).toUpperCase() +
            name[0].slice(1).toLowerCase();

        var intName = name[0] + " " + name[1];

        return intName();
    }
    $(".internationalize-btn").append(internationalizeButton);

//Call all display functions to display Content on Page
bio.display();
education.display();
work.display();
projects.display();

    //Google Maps
    $("#mapDiv").append(googleMap);