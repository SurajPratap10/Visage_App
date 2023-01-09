import { useEffect, useState } from "react";
import "./app.css";
import Navbar from "./components/Navbar";
import NewPost from "./components/NewPost";

function App() {
  const [file, setFile] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    const getImage = () => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        setImage({
          url: img.src,
          width: img.width,
          height: img.height,
        });
      };
    };

    file && getImage();
  }, [file]);

  return (
    <div>
      <Navbar />
      {image ? (
        <NewPost image={image} />
      ) : (
        <div className="newPostCard">
          <div className="addPost">
    
            <div className="postForm">
              <img
                src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/512/external-down-arrow-arrow-flatart-icons-solid-flatarticons-1.png"
                alt=""
                className="postInput"
              />
              <label htmlFor="file">
                <img
                  className="addImg"
                  src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/512/external-add-photography-kiranshastry-lineal-color-kiranshastry.png"
                  alt=""
                />
      
      
              </label>
              <input
                onChange={(e) => setFile(e.target.files[0])}
                id="file"
                style={{ display: "none" }}
                type="file"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
