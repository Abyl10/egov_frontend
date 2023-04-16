import React from 'react';
import { Tabs, Box, Tab, Typography } from '@mui/material';
import DelivererOrders from '../DelivererOrders';

import classes from './styles.module.scss';
import UnassignedOrders from '../UnassignedOrders';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const DelivererTabs = (props: TabPanelProps) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes['main']}>
      <div className={classes['main__upper']}>
        <h1 className={classes['main-title']}>Cписок доступных к доставке заказов</h1>
        <p className={classes['description']}>
          В данной секции вы можете управлять заказами. В секции “Мои заказы” вы можете увидеть
          детали заказа, который вы выполняете.
        </p>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
            <Tab label='Список заказов' />
            <Tab label='Мои заказы' />
          </Tabs>
        </Box>
      </div>
      <TabPanel value={value} index={0}>
        <UnassignedOrders />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DelivererOrders />
      </TabPanel>
    </div>
  );
};

export default DelivererTabs;
