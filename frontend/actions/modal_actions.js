export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, rest_id={id: null}) => {
  return{
    type: OPEN_MODAL,
    modal: modal,
    rest_id
  }
}

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};