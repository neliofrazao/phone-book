import React from 'react'
import { Button, Card, CardActions, CardContent,Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import { 
  DeleteRounded,
  KeyboardArrowRightRounded,
  PersonPinCircle,
  PhoneAndroidRounded,
} from '@material-ui/icons'
import './PhoneList.styles.css'

const PhoneList = () => (
  <Grid container justify="center" spacing={3}>
     <Grid item sm={12} md={6} lg={3}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2" className="card-name">
            <PersonPinCircle /> Zezin
          </Typography>
          <Typography color="textSecondary">
            <PhoneAndroidRounded /> 9999-8888
          </Typography>
        </CardContent>
        <CardActions className="card-actions">
          <Button size="small"><KeyboardArrowRightRounded /> Detalhes</Button>
          <Button size="small"><DeleteRounded /> Apagar</Button>
        </CardActions>
      </Card>
    </Grid>
  </Grid>
)

export default PhoneList