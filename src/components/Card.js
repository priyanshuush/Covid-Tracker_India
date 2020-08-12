import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const  SimpleCard = (props) =>  {


  let colors;
  switch(props.title){
    case 'Recovered': 
      colors = 'green'
      break;
    case 'Confirmed Cases':
      colors = 'red'
      break;
    case 'Deaths':
      colors = '#d80000'
      break;
    default:
      colors = 'black'
  }

  const useStyles = makeStyles({
    root: {
      minWidth: 200,
      maxHeight: 1000,
      margin: '10px auto',
      color: colors,
      //borderRadius: '100px',
      border: '1px solid black',
      boxShadow: 'inset 0px 14px 50px -11px rgba(220,220,220,1)'
    },
    title: {
      fontSize: 14,
      fontWeight: 'bold',
      color: 'black'
    },
    pos: {
      marginBottom: 12,
      

    },
  });
  

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.val}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
            {props.plus}{props.cc}
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
  );
}

export default SimpleCard;