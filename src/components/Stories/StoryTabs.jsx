import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function TabStory(props) {
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

TabStory.propTypes = {
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

export default function StoryTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' ,  transition: 'all 0.3s ease'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Drafts 2" {...a11yProps(0)}  style={{  transition: 'all 0.3s ease',}}/>
          <Tab label="Published" {...a11yProps(1)} />
          <Tab label="Responses" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabStory value={value} index={0}>
          <div>
          </div>
      </TabStory>
      <TabStory value={value} index={1}>
            <div className="HeroBox__article article" style={{  transition: 'all 0.3s ease',}}>
                <ul className="article__list">
                  <h2>Published 2</h2>
                    
                </ul>
            </div>
      </TabStory>
      <TabStory value={value} index={2}>
            <div className="HeroBox__article article" style={{  transition: 'all 0.3s ease',}}>
                <ul className="article__list">
                <h2>Responses</h2>
                </ul>
            </div>
      </TabStory>

    </Box>
  );
}