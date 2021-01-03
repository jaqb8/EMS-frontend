import firebase from 'firebase';

export const createToken = async () => {
  const user = firebase.auth().currentUser;
  const token = user && (await user.getIdToken());

  return token;
};
