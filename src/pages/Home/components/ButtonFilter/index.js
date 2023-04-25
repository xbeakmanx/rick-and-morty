import { useFormFilter } from "context/filter-context";
import { Button, Modal, FormFilter } from "components/";

export default function ButtonFilter() {
  const { showModal, setShowModal } = useFormFilter();
  return (
    <>
      <div className="buttonFilter">
        <Button
          className="btn__filter"
          onClick={() => {
            setShowModal(true);
          }}
        >
          Search
        </Button>
      </div>
      <Modal setShowModal={setShowModal} showModal={showModal}>
        <FormFilter />
      </Modal>
    </>
  );
}
