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


const peopleStyles = theme => ({
  root: {
    overflow: 'scroll',
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
          <ListItem key={index} dense button>
            <Avatar alt='Remy Sharp' src={item.avatar} />
            <ListItemText primary={item.name} />
          </ListItem>
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
  },
  textInputPaper: {
  },
  textInput: {
    padding: '16px'
  }
});

class ChatText extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <section className={classes.root}>
        <Paper className={classes.textInputPaper} elevation={4}>
          <Input classes={{ root: classes.textInput }} multiline={true} fullWidth={true} disableUnderline={true} placeholder={"Send a message!"} />
        </Paper>
      </section>
    );
  }

}

ChatText = withStyles(chatTextStyles)(ChatText);


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
            <Grid item xs={12} md={2} className={classes.gridItem}>
              <PeopleList />
            </Grid>
            <Hidden mdDown>
              <Grid item md={10} className={classes.gridItem}>
                <ChatText />
              </Grid>
            </Hidden>
          </Grid>
        </Paper>
      </div>
    );
  }

}

export default withStyles(styles)(ChatRoom);


