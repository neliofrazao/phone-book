import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card, CardActions, CardContent, Grid, withStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import {
  DeleteRounded,
  KeyboardArrowRightRounded,
  PersonPinCircle,
  PhoneAndroidRounded,
} from '@material-ui/icons'
import EmptySatate from '../EmptySatate'
import style from './CardsPhoneBook.styles'

const emptySatateText = 'Não existe nenhum contato cadastrado na sua agenda'

const CardsPhoneBook = ({ classes, handleDeleteContact, handleContactDetail, phones }) => {
  const handleDetailClick = phoneId => () => handleContactDetail(phoneId)
  const handleDeleteClick = phoneId => () => handleDeleteContact(phoneId)
  const hasCardsPhoneBook = !phones.length

  return (
    <>
      {hasCardsPhoneBook ? (
        <EmptySatate emptySatateText={emptySatateText} />
      ) : (
        <Grid container justify="center" spacing={3}>
          {phones.map(phone => (
            <Grid item sm={12} md={6} lg={3} key={phone.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h2" className={classes.cardName}>
                    <PersonPinCircle /> {phone.nickName}
                  </Typography>
                  <Typography color="textSecondary">
                    <PhoneAndroidRounded /> {phone.phoneNumber}
                  </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <Button size="small" onClick={handleDeleteClick(phone.id)}>
                    <DeleteRounded /> Apagar
                  </Button>
                  <Button size="small" onClick={handleDetailClick(phone.id)}>
                    <KeyboardArrowRightRounded /> Detalhes
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  )
}

CardsPhoneBook.prototype = {
  classes: PropTypes.object.isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
  handleContactDetail: PropTypes.func.isRequired,
  phones: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default withStyles(style)(CardsPhoneBook)
