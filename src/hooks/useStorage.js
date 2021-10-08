import { collection, doc, serverTimestamp, setDoc } from "@firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { useEffect, useState } from "react";
import { projectFirestore, projectStorage } from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // reference from project storage in firebase
    const storageRef = ref(projectStorage, file.name);
    const collectionRef = doc(collection(projectFirestore, "images"));
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        console.log(snapshot);
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        await setDoc(collectionRef, {
          downloadURL,
          createdAt: serverTimestamp(),
        });
        console.log("downloadurl", downloadURL);
        setUrl(downloadURL);
      }
    );
  }, [file]);
  return { progress, url, error };
};

export default useStorage;
