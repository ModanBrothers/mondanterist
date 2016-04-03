import pinState from './../states/pinState';

export const POST_PIN = 'POST_PIN';
export const FILE_PREVIEW = 'FILE_PREVIEW';

export function logResponse(response) {
  console.log('this is the response', response);
}

export function createFormData(payload) {
  const formData = new FormData();
  for (const field in payload) {
    if (field !== 'image') {
      formData.append(field, payload[field]);
    } else {
      formData.append('file', payload[field][0]);
    }
  }
  return formData;
}

export function savePin(payload) {
  const formData = createFormData(payload);
  return dispatch => fetch('/api/pins/savePin', {
    method: 'POST',
    body: formData
  }).then(response => response.json())
    .then(data => dispatch(logResponse(data)));
}

export function renderPreview(payload) {
  return { type: FILE_PREVIEW,
           payload };
}

export const actions = {
  renderPreview,
  savePin
};

export default function pinReducer(state = pinState, action) {
  switch (action.type) {
    case POST_PIN:
      return Object.assign({}, state, action.payload);
    case FILE_PREVIEW:
      return state.set('imagePreview', action.payload);
    default:
      return state;
  }
}
