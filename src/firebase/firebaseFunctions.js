import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db } from "./FirebaseConnection";

//Receive the setMenu (setUseState) and the type of menu to look in Firebase
export const SolicitaMenu = (setMenu, requestMenu) => {
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

export const RegistraReserva = async ( nuevaReserva ) => {
  console.log('ingresa reservacion');
  addDoc(collection(db, 'reservaciones'), nuevaReserva);
}
