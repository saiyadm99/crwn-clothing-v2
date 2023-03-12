import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";



const SignIn = () => {
	const logGoogleUser = async () => {
		const {user} = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user)
		console.log(user);
	}

	 return(
		<div>
			<h2>hi</h2>
			<button onClick={logGoogleUser}>
				Sign in with Google Popup
			</button>
		</div>
	 )
}

export default SignIn;