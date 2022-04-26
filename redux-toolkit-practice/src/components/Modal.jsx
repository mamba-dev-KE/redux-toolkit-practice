import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";
import { useDispatch } from "react-redux";

const Modal = () => {
  const dispatch = useDispatch();

  // click handlers

  const handleConfirm = () => {
    dispatch(clearCart());
    dispatch(closeModal());
  };

  const handleCancel = () => {
    dispatch(closeModal());
  };

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all itemf from your shopping cart?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={handleConfirm}
          >
            confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={handleCancel}
          >
            clear
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
