import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/FirebaseConnection";

//Receive the setMenu (setUseState) and the type of menu to look in Firebase
const SolicitaMenu = (setMenu, requestMenu) => {
    onSnapshot(collection(db, requestMenu), (snapshot) => {
        const banquets = [];
        snapshot.docs.forEach((banquetes) => {
          banquets.push({
            ...banquetes.data(),
            id: banquetes?.id,
          });
        });

        return setMenu(banquets);
      });
}

export default SolicitaMenu