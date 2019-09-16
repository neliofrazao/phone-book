import React from 'react'
import PropTypes from 'prop-types'
import ReactRouterPropTypes from 'react-router-prop-types'
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

const CardsPhoneBook = ({ classes, handleDeleteContact, history, phones }) => {
  const handleContactDetail = contactId => () => history.push(`contact-detail/${contactId}`)
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
                  <Button size="small" onClick={handleContactDetail(phone.id)}>
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

CardsPhoneBook.propTypes = {
  classes: PropTypes.object.isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  phones: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default withStyles(style)(CardsPhoneBook)
