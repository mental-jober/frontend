interface ToastProps {
  message: string;
}

const Toast = ({ message }: ToastProps) => {
  return (
    <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-2.5 rounded shadow-md z-10">
      {message}
    </div>
  );
};

export default Toast;
