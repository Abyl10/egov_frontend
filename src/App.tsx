import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './consts/routes';
import { DeliveryInfo } from './pages';
import classes from './styles.module.scss';
import Payment from './pages/Payment';

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
    </div>
  );
}

export default App;
