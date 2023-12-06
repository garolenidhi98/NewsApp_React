import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { onSnapshot, collection, doc, deleteDoc } from "firebase/firestore";
import { CiTrash } from "react-icons/ci";

const FavPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getData = () => {
      const unsub = onSnapshot(collection(db, "favorites"), (snapshot) => {
        const article = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setArticles(article);
      });
    };

    getData();
  }, []);

  const deleteArticle = async (id) => {
    await deleteDoc(doc(db, "favorites", id));
    setArticles((prevArticles) =>
      prevArticles.filter((article) => article.id !== id)
    );
  };

  return (
    <>
      {articles.length === 0 ? (
        <h1>Nothing here</h1>
      ) : (
        articles.map((obj, index) => (
          <div key={index} className="card mb-3" style={{ width: "63vw" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={obj.src}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{obj.title}</h5>
                  <p className="card-text">{obj.description}</p>
                  <div className="buttons">
                    <a href={obj.url} className="btn btn-dark">
                      Read More
                    </a>
                    <CiTrash onClick={() => deleteArticle(obj.id)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default FavPage;
