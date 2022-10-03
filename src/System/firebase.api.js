import Firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
}

Firebase.initializeApp(firebaseConfig);
const db = Firebase.database();

export const FIREBASE_WRITE = (props) => {
    if (JSON.stringify(Object.keys(props.cookies)) === JSON.stringify(['token_type', 'access_token'])) {
        db.ref('/' + props.local).set(props.value).catch(console.error);
    }
}

export const FIREBASE_READ = (props) => {
    if (JSON.stringify(Object.keys(props.cookies)) === JSON.stringify(['token_type', 'access_token'])) {
        let a = db.ref('/' + props.local);
        a.on("value", (snapshot) => {
            props.set(snapshot.val());
        });
    }
}

export const FILE_READER = (props) => {
    let reader = new FileReader();
    reader.readAsDataURL(props.file);
    reader.onload = function () {
        return reader.result;
    };
    reader.onerror = (e) => console.error;
}