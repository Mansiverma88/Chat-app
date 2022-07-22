
// const socket = io('http://localhost:8003');

// //Get DOM element in js variables respectively
// const form=document.getElementById('send-container');
// const messageInput = document.getElementById('messageInp');
// const messageContainer=document.querySelector(".container");

// //ask user forhis her name and let sever know
// const namep= prompt("Enter your name to join");
// socket.emit('new-user-joined', namep);
// //var audio=new Audio('')

// //append function to append info to container
// const append=(message, position)=>{
//     const messageElement=document.createElement('div');
//     messageElement.innerText=message;
//     messageElement.classList.add('message');
//     messageElement.classList.add(position);
//     messageContainer.append(messageElement);
    
// }



// //if new user joins, receive event from server
// socket.on('user-joined', namep=>{
//     append(`${namep} joined the chat`,'right')
// });

// //if server sends  a mesage reveive it
// socket.on('receive', data=>{
//     append(`${data.namep}: ${data.message}`,'left')
// });

// //if someone leaves the chat, append the ifo to server
// socket.on('left', namep=>{
//     append(`${namep} left the chat`,'right')
// });

// //if the form gets subistted send server the message
// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     const message=messageInput.value;
//     append(`You: ${message}`, 'right');
//     socket.emit('send', message);
//     messageInput.value=''
// });