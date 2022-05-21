import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import Link from '@material-ui/core/Link';
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  }, 
//   changed the below from props: MenuProps 
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.secondary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
// changed below from event: React.MouseEvent<HTMLElement>
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        onClick={handleClick}
      >
        Classes
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <a href="/classes" style={{textDecoration: "none", color:"inherit"}}>
        <StyledMenuItem>
          {/* <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon> */}
          <ListItemText primary="Biochemistry"/>
        </StyledMenuItem>
        </a>
        <a href="/classes" style={{textDecoration: "none", color:"inherit"}}>
        <StyledMenuItem>
          {/* <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon> */}
          <ListItemText primary="Mathematics"/>
        </StyledMenuItem>
        </a>
        
      </StyledMenu>
    </div>
  );
}