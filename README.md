# Chat-app
> Created a real-time chat app using Node Js Framework Express and Socket.io
>
## Live Demo: http://localhost:8003/
## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)
<!-- * [License](#license) -->


## General Information
- Provide general information about your project here.
- What problem does it (intend to) solve?
- What is the purpose of your project?
- Why did you undertake it?
<!-- You don't have to answer all the questions - just the ones relevant to your project. -->


## Technologies Used
- Node JS Express - version 1.0
- Socket.io
- VS Code- version 2.0
- For deployment: PM2 used


## Features
List the ready features here:
- Multiple users can chat online
- Anyone with the link can join the chat group/app
- Real time updation of messages between multiple users
- Info about new users logging in and old users logging out provided


## Setup
What are the project requirements/dependencies? Where are they listed? A requirements.txt or a Pipfile.lock file perhaps? Where is it located?

Proceed to describe how to install / setup one's local environment / get started with the project.
Install VS Code
Install node js and express package
Download Chat-app folder
And in command prompt move int0 Chat-app folder and run
node index.js
to make server go online "listening to *8003"
For deployemnt on command prompt:
donload pm2 globally by moving into Chat-app folder using cmd
npm install pm2@latest -g
pm2 start index.js
And we can see a process being forked, running on our CPU
Further, we can see the processes online using pm2 list command.


## Usage
How does one go about using it?
Provide various use cases and code examples here.

`write-your-code-here`


## Project Status
Project is: _complete_ 


## Room for Improvement
Include areas you believe need improvement / could be improved. Also add TODOs for future development.

Room for improvement:
- Improvement to be done 1
- Improvement to be done 2

To do:
- Feature to be added 1
- Feature to be added 2


## Acknowledgements
Give credit here.
- This project was inspired by...
- This project was based on [this tutorial](https://www.example.com).
- Many thanks to...


## Contact
Created by [@flynerdpl](https://www.flynerd.pl/) - feel free to contact me!


<!-- Optional -->
<!-- ## License -->
<!-- This project is open source and available under the [... License](). -->

<!-- You don't have to include all sections - just the one's relevant to your project -->
