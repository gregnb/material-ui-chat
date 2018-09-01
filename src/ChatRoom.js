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
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const peopleStyles = theme => ({
  root: {
    overflowY: 'scroll',
    height: '100%',
    '&::-webkit-scrollbar': {
      width: '5px',
      height: '8px',
      backgroundColor: '#FFF'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#025279' //'#23232F' //'#0595DD'
    },
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
    height: 'calc(100% - 80px)',
  },
  chatInputPaper: {
    height: 'calc(100% - 64px)'
  },
  chatInput: {
    overflowY: 'scroll',
    height: '100%',
    padding: '16px',
    // '&::-webkit-scrollbar': {
    //   width: '8px',
    //   height: '12px',
    //   backgroundColor: '#FFF'
    // },
    // '&::-webkit-scrollbar-thumb': {
    //   backgroundColor: '#025279' //'#23232F' //'#0595DD'
    // },
  },
  composeInputPaper: {
    marginTop: '16px'
  },
  composeInput: {
    padding: '16px'
  },
  sendIcon: {
    color: '#2196f3'
  },
  chatRoomMessage: {
    display: 'flex',
    marginBottom: '8px'
  },
  messageText: {
    padding: '8px 0px 0px 16px'
  },
  divider: {
    marginBottom: '8px'
  }
});

class ChatText extends React.Component {

  render() {
    const { classes } = this.props;

    let images = [
      { name: 'James Roberts', avatar: 'https://randomuser.me/api/portraits/men/61.jpg', message: 'Can anyone help me out?' },
      { name: 'Andy Brown', avatar: 'https://randomuser.me/api/portraits/men/62.jpg', message: 'Sure, what is wrong?' },
      { name: 'Peter Smith', avatar: 'https://randomuser.me/api/portraits/men/63.jpg', message: 'Does anyone know a good plumber?' },
      { name: 'Jennifer Todd', avatar: 'https://randomuser.me/api/portraits/women/60.jpg', message: 'Hi everyone' } 
    ];

    for (let i = 0; i < 5; i++) {
      images = images.concat(images);
    }

    return (
      <section className={classes.root}>
        <Paper className={classes.chatInputPaper} elevation={4}>
          <div className={classes.chatInput}>

            {images.map((item, index) => {
              return (
                <React.Fragment>
                  <div key={index} className={classes.chatRoomMessage}>
                    <Avatar alt='Remy Sharp' src={item.avatar} />
                    <div className={classes.messageText}>
                      {item.message}
                    </div>
                  </div>
                  <Divider className={classes.divider} key={index} />
                </React.Fragment>
              );
            })}

          </div>
        </Paper>
        <Paper className={classes.composeInputPaper} elevation={4}>
          <Input classes={{ root: classes.composeInput }} multiline={true} fullWidth={true} disableUnderline={true} placeholder={"Send a message!"} 
            endAdornment={<SendIcon className={classes.searchIcon} />}
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
    backgroundColor: '#0377ad', //'#0595DD', //'#23232F',
    borderRadius: '2px'
  },
  innerContent: {
    width: '100%',
  },
  chatTitle: {
    margin: '0 auto'
  },
  searchWrapper: {
    backgroundColor: '#025279',
    borderRadius: '3px',
    border: 'solid 1px #025279',
    color: '#FFF',
    margin: '5px'
  },
  searchInput: {
    width: '180px',
    paddingLeft: '8px',
    transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    '&::placeholder': {
      color: '#FFF',
      opacity: 1
    },
    '&:focus': {
      width: '300px'
    }
  },
  searchIcon: {
    color: '#FFF',
    marginTop: '3px'
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
        <Input classes={{ root: classes.searchWrapper, input: classes.searchInput }} disableUnderline={true} placeholder={"Search"} 
          endAdornment={<SearchIcon className={classes.searchIcon} />}
        />        
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
  },
  '@global': {
    'body': {
      fontFamily: '"Roboto"'
    }
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


