export default function Modal({ children, showModal, enableScroll }) {
  enableScroll
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  return showModal ? (
    <>
      <div className="modal">
        <div className="modal__body">
          <div className="modal__content">{children}</div>
        </div>
      </div>
      <div className="modal__backdrop"></div>
    </>
  ) : null;
}
