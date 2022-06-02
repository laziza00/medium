import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import obj from '../../Object'
import Save from '../SaveList/Save';
import SaveMain from '../SaveList/SaveMain';
import './Portfolio.scss'
import PortfolioHome from './PortfolioHome'

function TabPort(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
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

TabPort.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function PorfolioTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' ,  transition: 'all 0.3s ease'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Home" {...a11yProps(0)}  style={{  transition: 'all 0.3s ease',}}/>
          <Tab label="Lists" {...a11yProps(1)} />
          <Tab label="About" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPort value={value} index={0}>
          <div>
        <PortfolioHome  />
          </div>
      </TabPort>
      <TabPort value={value} index={1}>
            <div className="HeroBox__article article" style={{  transition: 'all 0.3s ease',}}>
                <ul className="article__list">
                <SaveMain/>
                <Save className="save" />
                    
                </ul>
            </div>
      </TabPort>
      <TabPort value={value} index={2}>
            <div className="HeroBox__article article" style={{  transition: 'all 0.3s ease',}}>
                <ul className="article__list">
                    <h1>About</h1>
                </ul>
            </div>
      </TabPort>

    </Box>
  );
}