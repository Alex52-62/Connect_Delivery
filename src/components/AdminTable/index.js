import * as React from 'react';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {CouriersList} from "../CouriersList/CouriersList";
import {ChiefAnalytics} from "../ChiefAnalytics/ChiefAnalytics";
import {couriersOnline, couriersOffline, couriersWork} from "../../utils/constants";
import {CourierStatusChange} from "../CourierStatusChange/CourierStatusChange";



export const AdminTable = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
      <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example">
                      <Tab label="Карта" value="1"  />
                      <Tab label="Чат" value="2"  />
                      <Tab label="Управление курьерами" value="3"  />
                      <Tab label="Регистрация" value="4"  />
                  </TabList>
              </Box>
              <TabPanel value="1" >

              </TabPanel>
              <TabPanel value="2" >Item Two</TabPanel>
              <TabPanel value="3"  >

                  <CouriersList name={'Курьеры онлайн:'} couriers={couriersOnline} status={'online'}/>
                  <CouriersList name={'Курьеры в процессе доставки:'} couriers={couriersWork} status={'work'}/>
                  <CouriersList name={'Курьеры оффлайн:'} couriers={couriersOffline} status={'offline'}/>

              </TabPanel>
              <TabPanel value="4">Item Three</TabPanel>
          </TabContext>
      </Box>

  );
}

