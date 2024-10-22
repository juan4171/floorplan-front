import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { ROUTES_NAVIGATION } from '../constants/routes';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
export default function PermanentDrawerLeft() {
    return (
      <Box sx={{ display: 'flex' }}>
        
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar>
            <Typography variant="h4" noWrap component="div">
              Floorplan
            </Typography>
          </Toolbar>
          <Divider />
          <List>
            {ROUTES_NAVIGATION.map((route, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton component={Link} to={route.path}>
                  <ListItemText primary={route.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
        
      </Box>
    );
  }