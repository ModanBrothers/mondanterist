import React, { PropTypes } from 'react';
import DropZone from 'react-DropZone';

export function ImageUploader({ field, imageHandler, filePreview }) {
  if (!filePreview) {
    return (
      <DropZone className="form-group" { ...field } onDrop={ imageHandler }>
        <div>Drag and drop or click below to select an image.</div>
        <img className="img-fluid" src="http://placehold.it/700x300" />
      </DropZone>
    );
  }
  return <img className="img-fluid"src={ filePreview } />;
}

ImageUploader.propTypes = {
  field: PropTypes.object.isRequired,
  imageHandler: PropTypes.func.isRequired,
  filePreview: PropTypes.string
};

export default ImageUploader;
