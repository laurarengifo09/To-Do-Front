import { AppRouter } from "./app/router/AppRouter";
import "./index.css";
import { Provider } from "react-redux";
import store from "./app/store";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Provider store={store}>
        <AppRouter />
      </Provider>
      <ToastContainer position="top-center" closeOnClick theme="colored" transition={Slide} />
    </LocalizationProvider>
  );
}

export default App;
