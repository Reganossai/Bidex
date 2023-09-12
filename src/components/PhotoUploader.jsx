import React, { useState } from "react";
import Webcam from "react-webcam";
import Dropzone from "react-dropzone";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

const PhotoUploader = () => {
  const [htmlCamera, setHtmlCamera] = useState(false);
  const [photo, setPhoto] = useState(null);

  const webcamRef = React.useRef(null);

  const handleStartWebcam = () => {
    setHtmlCamera(true);
  };

  const handleTakePhoto = (dataUri) => {
    setPhoto(dataUri);
    setHtmlCamera(false);
  };

  const handleDrop = (acceptedFiles) => {
    // Handle the uploaded file here (e.g., display it or upload to a server)
    const uploadedFile = acceptedFiles[0];
    setPhoto(URL.createObjectURL(uploadedFile));
  };

  return (
    <div className="take-upload-photo">
      {photo && (
        <div>
          <h2>Selected Photo:</h2>
          <img src={photo} alt="Selected" style={{ maxWidth: "10%" }} />
        </div>
      )}
      {!photo && (
        <button className="take-photo" onClick={handleStartWebcam}>
          Take ID photo
        </button>
      )}
      {htmlCamera ? (
        <Camera
          onTakePhoto={(dataUri) => {
            handleTakePhoto(dataUri);
          }}
        />
      ) : null}

      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} style={dropzoneStyles}>
            <input {...getInputProps()} />
            <p className="upload-photo">Upload ID image</p>
          </div>
        )}
      </Dropzone>
    </div>
  );
};

const dropzoneStyles = {
  border: "none",
  borderRadius: "4px",
  padding: "20px",
  textAlign: "center",
  cursor: "pointer",
  width: "500px",
};

export default PhotoUploader;
