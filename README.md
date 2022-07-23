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
- The purpose of the project was to develop a real-time bidirectional Chat-app application using React JS and socketIO
- Web socket is two-way connect from one end to another, client to server, to push data.
- Whenever client requests a resource/service, only then server pushes data to network to transported to client. Without a request, a response is never puched by server itslef. In order to create a real time application,  a link between sever and client needs to be present fr server to push data to client whenver an update is seen.
- For client and server to make a two-way connection, web socket is used, implemented by JS's Socket IO.
- Socket.IO is a library that enables real-time, bidirectional and event based communication between browser server suing emit and broadcast functions.
- Express JS is used to implement one end of communication HTML page.


## Technologies Used
- Node JS Express - version 1.0
- Socket.io
- VS Code- version 2.0
- For deployment: PM2 used


## Features
- Multiple users can chat online
- Anyone with the link can join the chat group/app
- Real time updation of messages between multiple users
- Info about new users logging in and old users logging out provided


## Setup
What are the project requirements/dependencies? Where are they listed? A requirements.txt or a Pipfile.lock file perhaps? Where is it located?

Proceed to describe how to install / setup one's local environment / get started with the project.
- Install VS Code
- Install node js and express package
- Download Chat-app folder
- And in command prompt move int0 Chat-app folder and run
- node index.js
- to make server go online "listening to *8003"
- For deployemnt on command prompt:
- download pm2 globally by moving into Chat-app folder using cmd
- npm install pm2@latest -g
-pm2 start index.js
-And we can see a process being forked, running on our CPU
Further, we can see the processes online using pm2 list command.

## Project Status
Project is: _complete_ 

## Acknowledgements
Give credit here.
- This project was inspired by...
- This project was based on [this tutorial](https://www.example.com).
- Many thanks to...

