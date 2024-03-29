import { db } from '../firebase/firebaseConfig'
import { doc, setDoc, getDoc } from 'firebase/firestore'

export const generateRandomCode = () => {
  const letters =
    'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,0,1,2,3,4,5,6,7,8,9';
  const cookedLetters = letters.split(',');

  let randomNum = '';
  for (let i = 0; i <= 6; i++) {
    const randomIndex = Math.floor(Math.random() * cookedLetters.length);
    randomNum += cookedLetters[randomIndex];
  }

  return randomNum;
};


export const isValidUrl = (url: string) => {
  const regex =
    /^(https?|ftp|http):\/\/?([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|net|org|biz|info|name|pro|coop|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;

  return regex.test(url);
};


class FirestoreService {  

  async addNewURL(url) {
    try {
      const urlRef = doc(db, 'URLs', url.code)
      await setDoc(urlRef, {
        inputUrl: url.inputUrl,
        outputCode: url.code
      })
    } catch (error) {
      console.log('FireStore::AddNewURL', error);

    }
  }

  async retrieveURL(code){
try {
  const docRef = doc(db,'URLs',code)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return(docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    return "No such document!";
  }
} catch (error) {
  console.log('FireStore::retrieveURL', error);
}
  }
}

export const firestoreService = new FirestoreService()