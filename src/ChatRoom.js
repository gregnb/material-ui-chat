import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Input from '@material-ui/core/Input';
import SendIcon from '@material-ui/icons/Send';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const peopleStyles = theme => ({
  root: {
    overflowY: 'scroll',
    height: '100%'
  }
});

class PeopleList extends React.Component {

  render() {

    const { classes } = this.props;

    let images = [
      { name: 'James Roberts', avatar: 'https://randomuser.me/api/portraits/men/61.jpg' },
      { name: 'Andy Brown', avatar: 'https://randomuser.me/api/portraits/men/62.jpg' },
      { name: 'Peter Smith', avatar: 'https://randomuser.me/api/portraits/men/63.jpg' },
      { name: 'Jennifer Todd', avatar: 'https://randomuser.me/api/portraits/women/60.jpg' } 
    ];

    for (let i = 0; i < 5; i++) {
      images = images.concat(images);
    }

    return (
      <List className={classes.root}>
        {images.map((item, index) => (
          <React.Fragment>
            <ListItem key={index} dense button>
              <Avatar alt='Remy Sharp' src={item.avatar} />
              <ListItemText primary={item.name} />
            </ListItem>
            {index !== images.length-1 && <Divider key={index} />}
          </React.Fragment>
        ))}
     </List>
    );
  }

}

PeopleList = withStyles(peopleStyles)(PeopleList);


/* ----------------- */

const chatTextStyles = (theme) => ({
  root: {
    margin: '8px',
    height: 'calc(100% - 64px)'
  },
  chatInputPaper: {
    height: 'calc(100% - 64px)'
  },
  chatInput: {
    padding: '16px'
  },
  composeInputPaper: {
    marginTop: '16px'
  },
  composeInput: {
    padding: '16px'
  },
  sendIcon: {
    color: '#2196f3'
  }
});

class ChatText extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <section className={classes.root}>
        <Paper className={classes.chatInputPaper} elevation={4}>
          <div className={classes.chatInput}>
            Content will go here..
          </div>
        </Paper>
        <Paper className={classes.composeInputPaper} elevation={4}>
          <Input classes={{ root: classes.composeInput }} multiline={true} fullWidth={true} disableUnderline={true} placeholder={"Send a message!"} 
            endAdornment={<SendIcon className={classes.sendIcon} />}
          />
        </Paper>
      </section>
    );
  }

}

ChatText = withStyles(chatTextStyles)(ChatText);


/* -------------------------- */

const chatToolbarStyles = theme => ({
  chatToolbarRoot: {
    color: '#FFF',
    margin: '8px',
    minHeight: '32px',
    backgroundColor: '#23232F',
    borderRadius: '2px'
  },
  innerContent: {
    width: '100%',
  },
  chatTitle: {
    margin: '0 auto'
  }
});

class ChatToolbar extends React.Component {

  render() {

    const { classes } = this.props;

    return (
      <Toolbar disableGutters={true} className={classes.chatToolbarRoot}>
        <Typography variant="title" className={classes.chatTitle} color="inherit">
          Now talking in "Wonderful Chatroom"
        </Typography>
      </Toolbar>
    );
  }

}

ChatToolbar = withStyles(chatToolbarStyles)(ChatToolbar);


/* -------------------------- */


const styles = theme => ({
  root: {
    margin: '16px',
    height: 'calc(100vh - 32px)'
  },
  paper: {
    height: '100%'
  },
  gridContainer: {
    height: 'inherit'
  },
  gridItem: {
    height: '100%'
  }
});

class ChatRoom extends React.Component {

  render() {

    const { classes } = this.props;
    console.log(classes);
    
    return (
      <div className={classes.root}>
        <Paper className={classes.paper} elevation={2}>
          <Grid container spacing={0} className={classes.gridContainer}>
            <Hidden mdDown>
              <Grid item md={2} className={classes.gridItem}>
                <PeopleList />
              </Grid>
            </Hidden>
            <Grid item xs={12} md={10} className={classes.gridItem}>
              <ChatToolbar />
              <ChatText />
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }

}

export default withStyles(styles)(ChatRoom);


