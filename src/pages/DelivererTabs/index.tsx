import React from 'react';
import { Tabs, Box, Tab } from '@mui/material';
import { TabPanel } from '@mui/lab';
import DelivererOrders from '../DelivererOrders';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const DelivererTabs= (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
          <Tab label='Item One' {...a11yProps(0)} />
          <Tab label='Item Two' {...a11yProps(1)} />
          <Tab label='Item Three' {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <DelivererOrders/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
};

export default DelivererTabs;
