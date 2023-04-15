import { DeliveryInfo } from './pages';
import classes from './styles.module.scss';
import Main from '@/pages/Main';

function App() {
  return (
    <div className={classes['wrapper']}>
      <DeliveryInfo />
    </div>
  );
}

export default App;
