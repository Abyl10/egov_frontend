import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './consts/routes';
import classes from './styles.module.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const user = {
    role: 'CLIENT',
  };
  return (
    <div className={classes['wrapper']}>
      <Routes>
        {ROUTES.map(
          (route) =>
            route.roles.find((role) => role === user.role) && (
              <Route key={route.path} path={route.path} element={route.component} />
            ),
        )}
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
