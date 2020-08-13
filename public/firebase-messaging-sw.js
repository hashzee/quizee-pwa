importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

firebase.initializeApp({
    messagingSenderId: "129418067947",
    apiKey: "AIzaSyBRvzsbagH_joHDA2c4D3uqC8JAgFleTa8",
    appId: "1:129418067947:web:8f9bf6e9123a5b8552a3ae",
    projectId: "quizeepushy"
});

const messaging = firebase.messaging();