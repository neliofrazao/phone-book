export default theme => ({
  root: {
    marginTop: theme.spacing(5),
    padding: [[theme.spacing(2), theme.spacing(1)]],
    textAlign: 'right',
    '& button': { 
      marginRight: theme.spacing(2), 
    },
  },
})