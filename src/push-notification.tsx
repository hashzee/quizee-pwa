import firebase from 'firebase';

export const initializeFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: "129418067947",
    apiKey: "AIzaSyBRvzsbagH_joHDA2c4D3uqC8JAgFleTa8",
    appId: "1:129418067947:web:8f9bf6e9123a5b8552a3ae",
    projectId: "quizeepushy"
  });
}

export const askForPermissioToReceiveNotifications = async () => {
    try {
      const messaging = firebase.messaging();
      await messaging.requestPermission();
      const token = await messaging.getToken();
      console.log('Token:', token);
      
      return token;
    } catch (error) {
      console.error(error);
    }
  }