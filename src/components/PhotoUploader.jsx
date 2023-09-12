import React, { useState } from 'react';
import Webcam from 'react-webcam';
import Dropzone from 'react-dropzone';
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

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

  const handleDrop = (acceptedFiles) => {
    // Handle the uploaded file here (e.g., display it or upload to a server)
    const uploadedFile = acceptedFiles[0];
    setPhoto(URL.createObjectURL(uploadedFile));
  };

  return (
    <div>
      {webcamEnabled ? (
        <div>
          <Camera
            onTakePhoto={(dataUri) => {
              handleTakePhoto(dataUri);
            }}
          />
 
        </div>
      ) : (
        <div className='take-upload-photo'>
           {photo && (
            <div>
              <h2>Selected Photo:</h2>
              <img src={photo} alt="Selected" style={{ maxWidth: '100%' }} />
            </div>
          )}
          {!photo && (
             <Camera
             onTakePhoto={(dataUri) => {
               handleTakePhoto(dataUri);
             }}
           />
          )}
          

          <Dropzone onDrop={handleDrop}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()} style={dropzoneStyles}>
                <input {...getInputProps()} />
                <p className='upload-photo'>Upload ID image</p>
              </div>
            )}
          </Dropzone>
         
        </div>
      )}
    </div>
  );
}


const dropzoneStyles = {
    border: 'none',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
    width: '500px'
  };

export default PhotoUploader;