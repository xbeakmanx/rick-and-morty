export default function Modal({ children, showModal, setShowModal }) {
  showModal
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  const handleOnClose = (e) => {
    if (e.target.id === "container") {
      setShowModal(false);
    }
  };
  if (!showModal) return null;
  return (
    <>
      <div id="container" className="modal" onClick={handleOnClose}>
        <div className="modal__body">
          <div className="modal__content">{children}</div>
        </div>
      </div>
    </>
  );
}
