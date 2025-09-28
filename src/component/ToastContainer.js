import "../styles.css";
import { useState } from "react";
export default function ToastContainer() {
  const [toasts, setToasts] = useState([]);
  const handleClose = (id) => {
    setToasts((prevToasts) => {
      const filteredArray = prevToasts.filter((toast) => {
        return toast.id !== id;
      });
      return filteredArray;
    });
  };
  const handleAdd = (message, type) => {
    const id = new Date().getTime();
    const newTosts = [...toasts, { id, message, type }];
    setToasts(newTosts);
    setTimeout(() => handleClose(id), 5000);
  };
  return (
    <section class="container">
      <div className="toast-container">
        {toasts.map(({ id, message, type }) => {
          return (
            <div key={id} className={`toast ${type}`}>
              {message} <span onClick={() => handleClose(id)}>x</span>
            </div>
          );
        })}
      </div>

      <div class="toastButton">
        <button onClick={() => handleAdd("success", "success")} class="btn-red">
          Success Toast
        </button>
        <button
          onClick={() => handleAdd("warning", "warning")}
          class="btn-green"
        >
          Warning Toast
        </button>
        <button onClick={() => handleAdd("info", "info")} class="btn-blue">
          Info Toast
        </button>
        <button onClick={() => handleAdd("error", "error")} class="btn-yellow">
          Error Toast
        </button>
      </div>
    </section>
  );
}
