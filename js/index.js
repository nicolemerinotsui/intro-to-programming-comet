let today=new Date()

today.getFullYear()

let thisYear=(today.getFullYear())

let footer=document.querySelector("footer")
footer.style ="border: dotted;"

let copyright=document.createElement("p")
copyright.innerHTML= `Nicole Merino Tsui ${thisYear}`  
footer.appendChild(copyright)

const skills =['Program Management', 'Javascript', 'International Development', 'Transitional Team Building', 'Monitoring and Evaluation', 'Disaster Epidemiology'];
let skillsSection=document.getElementById("skills")
let skillsList=skillsSection.querySelector("ul")

for (let i = 0; i < skills.length; i++) {
let skill= document.createElement("li");
skill.innerText=skills[i];
skillsList.appendChild(skill)
}

const education =['University of California', 'Emory University'];
let educationSection=document.getElementById("education")
let educationList=educationSection.querySelector("ul")

for (let i = 0; i < education.length; i++) {
    let education= document.createElement("li");
    skill.innerText=education[i];
    educationList.appendChild(education)
    }

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
        
        removeButton.addEventListener('click', (e) => {
            let entry = e.target.parentNode;
            entry.remove();
        });

        // Adding the remove button and message to messageList
        newMessage.appendChild(removeButton);
        messageList.appendChild(newMessage);

        messageForm.reset();
    });
