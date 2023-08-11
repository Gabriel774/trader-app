import { ToastOptions, toast as toastify } from "react-toastify";
import { theme } from "../theme";

const config: ToastOptions<{}> = {
  position: "bottom-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const toast = {
  success: (message: string) => {
    toastify.success(message, {
      ...config,
      style: { backgroundColor: theme.primaryColor000 },
    });
  },
  error: (message: string) => {
    toastify.error(message, {
      ...config,
      style: { backgroundColor: theme.error },
    });
  },
};
