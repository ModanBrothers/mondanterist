import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';

import { actions as pinActions } from './../../redux/modules/pin';

import SmallFormInput from './../smallFormInput/smallFormInput';
import TextArea from './../textArea/textArea';
import ImageUploader from './../imageUploader/ImageUploader';

const mapStateToProps = ({ pin }) => ({
  imagePreview: pin.get('imagePreview')
});

export class PinForm extends React.Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    savePin: PropTypes.func.isRequired,
    renderPreview: PropTypes.func.isRequired,
    imagePreview: PropTypes.string
  };

  handleImage(imageFile) {
    this.props.renderPreview(imageFile[0].preview);
    return imageFile;
  }

  render() {
    const { fields: {
      title, description, tags, link, image
    }, handleSubmit, imagePreview } = this.props;

    return (
      <form className="form-horizontal" onSubmit={ handleSubmit(this.props.savePin) } >
        <ImageUploader
          field={ image }
          imageHandler={ ::this.handleImage }
          filePreview={ imagePreview }
        />
        <SmallFormInput field={ title } inputLabel="Title" />
        <TextArea field={ description } inputLabel="Description" rows={ 3 } />
        <SmallFormInput field={ link } inputLabel="Link" />
        <SmallFormInput field={ tags } inputLabel="Tags"
          optionalDescriptor=" separated by a space"
        />
        <button type="submit" className="btn btn-primary">Save Pin</button>
      </form>
    );
  }
}


export default reduxForm({
  form: 'savePin',
  fields: ['title', 'description', 'tags', 'link', 'image']
}, mapStateToProps, pinActions)(PinForm);
