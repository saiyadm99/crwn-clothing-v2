import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword
} from 'firebase/auth';

import {
	getFirestore,
	doc,
	getDoc,
	setDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCNVSUWxsMQD1iohoS7a7SCgknQuu8Bwk8",
  authDomain: "crown-clothing-db-02.firebaseapp.com",
  projectId: "crown-clothing-db-02",
  storageBucket: "crown-clothing-db-02.appspot.com",
  messagingSenderId: "791514556604",
  appId: "1:791514556604:web:64706fa2cd73637442c8b9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
		userAuth, 
		additionalInformation = {displayName: 'mike'}
	) => {
	if(!userAuth) return;
	const userDocRef = doc(db, 'users', userAuth.uid);

	const userSnapshot = await getDoc(userDocRef);
	console.log(userSnapshot);
	console.log(userSnapshot.exists());

	if(!userSnapshot.exists()){
		const {displayName, email} = userAuth;
		const createAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createAt,
				...additionalInformation

			});
		} catch (error){
			console.log('error creating user', error.message);
		}
	}

	return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if(!email || !password) return;

	return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if(!email || !password) return;

	return await signInWithEmailAndPassword(auth, email, password)
}