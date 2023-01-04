import { createRoot } from "react-dom/client";
import App from "@/App";
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const container = document.getElementById("root");
const root = createRoot(container as Element);
import store from './store'

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);
