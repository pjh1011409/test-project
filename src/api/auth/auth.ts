import "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";

const router = useRouter();
const storeUser = useUserStore();

export const googleLogIn = () => {
  const provider = new GoogleAuthProvider();
  // console.log(storeUser);
  // console.log(provider);
  // provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (credential) {
        const token: string | undefined = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        window.localStorage.setItem("Token", JSON.stringify(token));
        console.log(token, user);
        console.log(user.email);
        storeUser.setUserMail(JSON.stringify(user.email));
        console.log(storeUser);
        const a = storeUser.getUserMail;
        console.log(a);
      }
    })
    .catch((error) => {
      console.log(error);
      // ...
    });
};

export const googleLogOut = () => {
  const auth = getAuth();
  signOut(auth)
    .then((res) => {
      window.localStorage.clear();
      storeUser.delUserMail();
    })

    .catch((error) => {
      console.log(error);
    });
};
// export default googleLogIn ;
