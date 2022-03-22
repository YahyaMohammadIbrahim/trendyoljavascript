import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          If you need help
        </Typography>
        <Typography variant="h5" component="h2">
          Please contact us using the numbers provided below!
        </Typography>
        <Typography variant="h54" component="h2">
          ==================================================
        </Typography>
        <Typography variant="h54" component="h2">
        0090509197495 FOR WHATSAPP // TELEGRAM
        </Typography>
        <Typography variant="h54" component="h2">
          ==================================================
        </Typography>
        <Typography variant="h5" component="h2">
        FOR EMAIL ENQUIRIES 
        </Typography>
        <Typography variant="s10" component="h2">
          ==================================================
        </Typography>
        <Typography variant="f4000#" component="h2">
          ytitsmaj@gmail.com  //
          vselfie123@gmail.com
        </Typography>
        
        
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
  );
}
