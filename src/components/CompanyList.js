import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

export default function() {
  const companies = [
    "Apple",
    "Google", 
    "Samsung", 
    "LG",
    "Elasticsearch", 
    "Robinhood", 
    "Prompt Technology",
    "Hansung", 
    "Melon", 
    "Sony"
  ]
  return(
    <List component="nav" aria-label="main mailbox folders">
      {companies.map(item => (
        <div>
          <ListItem button>
            <ListItemText primary={item} />
          </ListItem>
          <Divider />
        </div>
      ))}
    </List>
  )
}