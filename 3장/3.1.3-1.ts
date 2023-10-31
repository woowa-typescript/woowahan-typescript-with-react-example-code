function showModal(type: ModalType): void {
  feedbackSlice.actions.createModal(type);
}
  
// 화살표 함수로 작성 시
const showModal = (type: ModalType): void => {
  feedbackSlice.actions.createModal(type);
};
  