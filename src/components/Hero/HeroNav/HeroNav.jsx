import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HeroBasicItems from '../HeroBasic/HeroBasicItems';

function TabPanel(props) {
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

TabPanel.propTypes = {
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

export default function BasicTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%',  transition: 'all 0.3s ease'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Following" {...a11yProps(1)}  style={{  transition: 'all 0.3s ease',}}/>
          <Tab label="Recommended" {...a11yProps(0)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={1}>
        <h2>Here for your's Followers </h2>
      </TabPanel>
      <TabPanel value={value} index={0}>
            <div className="HeroBox__article article" style={{  transition: 'all 0.3s ease',}}>
                <ul className="article__list" style={{padding: '0'}}>
                {props.arr && props.arr.map((item, i)=> {
                    return (<HeroBasicItems
                            style={{  transition: 'all 0.3s ease',}}
                            key ={i}
                            name = {item.name}
                            id= {item.id}
                            avatar={item.avatar}
                            descInfo={item.descInfo}
                            title={item.title}
                            data={item.data}
                            img ={item.img}
                            category ={item.category}
                            arr ={props.arr}
                            setArr ={props.setArr}
                            bigSave ={props.bigSave}
                            setBigSave ={props.setBigSave}
                    />)
                    })}
                </ul>
            </div>
      </TabPanel>
    </Box>
  );
}