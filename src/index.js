import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function ImageGallery() {
  const images = [
    { id: 1, src: "https://picsum.photos/200/200?random=1" },
    { id: 2, src: "https://picsum.photos/200/200?random=2"},
    { id: 3, src: "https://picsum.photos/200/200?random=3" },
    { id: 4, src: "https://picsum.photos/200/200?random=4"},
    { id: 5, src: "https://picsum.photos/200/200?random=5"},
    { id: 6, src: "https://picsum.photos/200/200?random=6"},
  ];

  return (
    <div className="container">
      <h1 className="title">Image Gallery</h1>
      <div className="images">
        {images.map((image) => (
          <div  className="img-container">
            <img src={image.src} alt="" />
            <p className="img-title">Nature</p>
          </div>
        )
      )
        }
      </div>
    </div>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ImageGallery></ImageGallery>
);


