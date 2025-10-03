import {createRoot} from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/configStore.js";
import {LanguageProvider} from "./contexts/LanguageContext.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </Provider>
);
