let today=new Date()

today.getFullYear()

let thisYear=(today.getFullYear())

let footer=document.querySelector("footer")
footer.style ="border: dotted;"

let copyright=document.createElement("p")
copyright.innerHTML= `Nicole Merino Tsui ${thisYear}`  
footer.appendChild(copyright)

// added experience lines 15-23, modeled from Skills. 
const experiences =['Student Success Specialist-KIPP Bay Area    2017-2021', 'Graduate Researcher-Emory University   2015-2017', 'Grants Specialist-Tides Foundation  2013-2015', 'Educator-Oakland Schools      2007-2013',    'Data Associate-KPFA Radio  2004-2007'];
let experienceSection=document.getElementById("experience")
let experienceList=experienceSection.querySelector("ul")

for (let i = 0; i < experiences.length; i++) {
    let experience= document.createElement("li");
    experience.innerText=experiences[i];
    experienceList.appendChild(experience);
    }

const skills =['Program Management', 'Javascript', 'International Development', 'Transitional Team Building', 'Monitoring and Evaluation', 'Disaster Epidemiology'];
let skillsSection=document.getElementById("skills")
let skillsList=skillsSection.querySelector("ul")

for (let i = 0; i < skills.length; i++) {
let skill= document.createElement("li");
skill.innerText=skills[i];
skillsList.appendChild(skill)
}

const education=['University of California', 'Emory University'];
let educationSection=document.getElementById("education")
let educationList=educationSection.querySelector("ul")

for (let i = 0; i < education.length; i++) {
    let educationHTMLitem= document.createElement("li");
    educationHTMLitem.innerText=education[i];
    educationList.appendChild(educationHTMLitem);
    }

//let connectSection=document.getElementById("connect") 

const messageForm = document.querySelector("[name='leave_message']");

messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
		const form = e.target;
		const name = document.getElementById('nameform').value;
		const email = document.getElementById('emailname').value;
		const message = document.getElementById('formMessage').value;
        console.log(name, email, message);

        // Display Messages in List
        let messageSection = document.getElementById('messages');
        let messageList = messageSection.querySelector('ul');
        let newMessage = document.createElement('li'); 
        newMessage.innerHTML = 
            `<a href=“mailto:${email}”>${name}</a>
            <span id ="spanMessage"> wrote: ${message}</span>`;
        
        // Add remove button to each message
        let removeButton = document.createElement('button');
        removeButton.innerHTML = 'remove';
        removeButton.type = 'button'; 
        removeButton.className ='removeButton';
        
        removeButton.addEventListener('click', (e) => {
            let entry = e.target.parentNode;
            entry.remove();
        });

        // Adding the remove button and message to messageList
        newMessage.appendChild(removeButton);
        messageList.appendChild(newMessage);

        messageForm.reset();
    });

    // 6.2 Proect Section using AJAX
    const githubRequest = new XMLHttpRequest();
    githubRequest.onreadystatechange = function() {
        if(githubRequest.readyState === 4) {
            const projects = JSON.parse(githubRequest.responseText);
            console.log(githubRequest);
        }
        let projectSection = document.querySelector('#projects');
    let projectList = projectSection.getElementsByTagName('ul')[0];
    for (let i = 0; i < projects.length; i++){
        let project = document.createElement('li');
        project.innerText = projects[i];
        projectList.appendChild(project);
    }

    }
    githubRequest.open('GET', 'https://api.github.com/users/nicolemerinotsui/repos');
    githubRequest.send();
/*
    //Server Response
    githubRequest.addEventListener('load', (e) => {
        e.preventDefault();
        githubRequest.onreadystatechange = function() {
            if(githubRequest.readyState === 4) {
                const projects = JSON.parse(githubRequest.responseText);
                console.log(githubRequest);
            }
        }
    })
   

    //Display repositories in the list
    let projectSection = document.querySelector('#projects');
    let projectList = projectSection.getElementsByTagName('ul')[0];
    for (let i = 0; i < projects.length; i++){
        let project = document.createElement('li');
        project.innerText = projects[i];
        projectList.appendChild(project);
    }

    */
