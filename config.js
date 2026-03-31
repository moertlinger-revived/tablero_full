const firebaseConfig = {
    apiKey: "AIzaSyD07HOBcrcN3GzgRkWwvO4VX-42MO7YSmI",
    databaseURL: "https://tablero-full-revived-default-rtdb.firebaseio.com",
    projectId: "tablero-full-revived",
    // ... el resto de tus datos
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();