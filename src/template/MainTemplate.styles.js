export default theme => ({
  root: {
    width: '100%',
    background: '#eee',
    position: 'relative',
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    boxSizing: 'border-box',
    minHeight: '100vh',
    zIndex: 1,
    borderTop: '5px solid #ccc',
    display: 'flex',
    flexDirection: 'column',
  },
})
