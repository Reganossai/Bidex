import React, { useState } from "react";
import Webcam from "react-webcam";
import Dropzone from "react-dropzone";

const PhotoUploader = () => {
  const [webcamEnabled, setWebcamEnabled] = useState(false);
  const [photo, setPhoto] = useState(null);

  const webcamRef = React.useRef(null);

  const handleStartWebcam = () => {
    setWebcamEnabled(true);
  };

  const handleCapturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setPhoto(imageSrc);
    setWebcamEnabled(false);
  };

  const handleDrop = (acceptedFiles) => {
    // Handle the uploaded file here (e.g., display it or upload to a server)
    const uploadedFile = acceptedFiles[0];
    setPhoto(URL.createObjectURL(uploadedFile));
  };

  return (
    <div>
      {webcamEnabled ? (
        <div>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            onUserMediaError={(error) => console.error("Webcam error:", error)}
          />
          <button onClick={handleCapturePhoto}>Capture Photo</button>
        </div>
      ) : (
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

          <Dropzone onDrop={handleDrop}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()} style={dropzoneStyles}>
                <input {...getInputProps()} />
                <p className="upload-photo">Upload ID image</p>
              </div>
            )}
          </Dropzone>
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
  width: "500px",
};

export default PhotoUploader;
