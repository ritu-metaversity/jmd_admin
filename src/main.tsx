import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import "react-datepicker/dist/react-datepicker.css";
import { Provider } from 'react-redux';
import store from './store.ts';
import { SnackbarProvider } from 'notistack';
import { SnackbarUtilsConfigurator } from './utils/snackbar.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <SnackbarProvider maxSnack={2} autoHideDuration={1000} anchorOrigin={{ horizontal: "right", vertical: 'top' }}>
            <App />
            <SnackbarUtilsConfigurator />
        </SnackbarProvider>
    </Provider>
)
