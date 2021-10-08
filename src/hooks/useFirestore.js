import { collection, getDocs, orderBy, query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collectionInput, file) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("usefirestore");
    const q = query(
      collection(projectFirestore, collectionInput),
      orderBy("createdAt", "desc")
    );
    const querySnapshot = getDocs(q).then(
      (data) => {
        console.log("data", data);
        let documents = [];
        data.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setItems(documents);
      },
      (err) => {
        console.log("err", err);
      }
    );

    return () => {
      if (typeof querySnapshot == "function") {
        querySnapshot();
      }
    };
  }, [collectionInput, file]);
  return { items };
};

export default useFirestore;
