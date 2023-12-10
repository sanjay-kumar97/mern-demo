import { Dialog } from "@material-tailwind/react";

const Modal = ({ show, handler, children }) => {
  const resetWidth =
    "w-fit lg:w-fit xl:w-fit !min-w-fit";
  return (
    <Dialog
      open={show}
      handler={handler}
      className={`bg-white shadow-none text-center ${resetWidth}`}
      animate={{ mount: { scale: 1, y: 0 }, unmount: { scale: 0.5, y: 0 } }}
    >
      {children}
    </Dialog>
  );
};

export default Modal;
