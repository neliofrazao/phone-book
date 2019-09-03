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

const PhoneList = ({ handleDeletePhone, handlePhoneDetail, phones }) => {
  const handleDetailClick = phoneId => e => handlePhoneDetail(phoneId, e)
  const handleDeleteClick = phoneId => e => handleDeletePhone(phoneId, e)

  return(
    <Grid container justify="center" spacing={3}>
      {phones.map(phone =>
        <Grid item sm={12} md={6} lg={3} key={phone.id}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" className="card-name">
                <PersonPinCircle /> {phone.nickName}
              </Typography>
              <Typography color="textSecondary">
                <PhoneAndroidRounded /> {phone.phoneNumer}
              </Typography>
            </CardContent>
            <CardActions className="card-actions">
              <Button size="small" onClick={handleDetailClick(phone.id)}>
                <KeyboardArrowRightRounded /> Detalhes
              </Button>
              <Button size="small" onClick={handleDeleteClick(phone.id)}>
                <DeleteRounded /> Apagar
              </Button>
            </CardActions>
          </Card>
        </Grid>
      )}
    </Grid>
  )
}

export default PhoneList