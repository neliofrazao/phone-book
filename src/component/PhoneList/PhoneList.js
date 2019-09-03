import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const PhoneList = () => (
  <Card>
    <CardContent>
      <Typography variant="h5" component="h2">
        Zezin
      </Typography>
      <Typography color="textSecondary">
        9999-8888
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
)

export default PhoneList