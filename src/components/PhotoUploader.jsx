import React, { useState } from "react";
import Webcam from "react-webcam";
import Dropzone from "react-dropzone";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faCamera, faImage, faXmark } from "@fortawesome/free-solid-svg-icons";

const PhotoUploader = () => {
  const [webcamEnabled, setWebcamEnabled] = useState(false);
  const [photo, setPhoto] = useState(null);

  const webcamRef = React.useRef(null);

  const handleStartWebcam = () => {
    setWebcamEnabled(true);
  };

  const handleTakePhoto = (dataUri) => {
    setPhoto(dataUri);
    setWebcamEnabled(false);
  };

  const handleGoBack = () => {
    setWebcamEnabled(false);
    setPhoto(null);
  }

  const handleDrop = (acceptedFiles) => {
    // Handle the uploaded file here (e.g., display it or upload to a server)
    const uploadedFile = acceptedFiles[0];
    setPhoto(URL.createObjectURL(uploadedFile));
  };

  return (
    <div>
      {webcamEnabled ? (
        <div>
          <button>
            <FontAwesomeIcon
              icon={faXmark}
              className="font-backk"
              onClick={handleGoBack}
            />
          </button>
          <div className="cam-position">
          <Camera
            onTakePhoto={(dataUri) => {
              handleTakePhoto(dataUri);
            }}
          />
          </div>
        </div>
      ) : (
        <div className="take-upload-photo">
          {photo && (
            <div>
              <h2>Selected Photo:</h2>
              <button>
            <FontAwesomeIcon
              icon={faXmark}
              className="font-backk"
              onClick={handleGoBack}
            />
          </button>
              <img src={photo} alt="Selected" style={{ maxWidth: "100%",height:"200px" }} />
            </div>
          )}
          {!photo && (
            <div>
              <button className="take-photo" onClick={handleStartWebcam}>
                <FontAwesomeIcon icon={faCamera} className="fontawesome-sidebar"/>Take ID photo
              </button>

              <Dropzone onDrop={handleDrop}>
                {({ getRootProps, getInputProps }) => (
                  <div {...getRootProps()} style={dropzoneStyles}>
                    <input {...getInputProps()} />
                    <p className="upload-photo"><FontAwesomeIcon icon={faImage} className="fontawesome-sidebar"/>Upload ID image</p>
                  </div>
                )}
              </Dropzone>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const dropzoneStyles = {
  border: "none",
  borderRadius: "4px",
  padding: "20px",
  textAlign: "center",
  cursor: "pointer",
  width: "300px",
};

export default PhotoUploader;
