import firebase from 'firebase';

const getAxiosHeaders = async () => {
  return {
    headers: {
      Authorization: `Bearer ${await firebase.auth().currentUser.getIdToken()}`
    }
  };
};

export default getAxiosHeaders;
