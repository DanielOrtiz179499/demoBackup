import React from 'react'
import backgroundImage from './img/1.png'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import SendIcon from '@material-ui/icons/Send'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  videoWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  header: {
    position: 'absolute',
    top: '50px',
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: '70px',
    fontWeight: 'bold',
    margin: 0,
    color: 'black',
    fontFamily: 'Lucida Calligraphy, cursive',
  },
  footer1: {
    position: 'absolute',
    bottom: '120px',
    left: 0,
    right: 0,
    textAlign: 'center',
    fontFamily: 'Lucida Calligraphy, cursive',
  },
  footer2: {
    position: 'absolute',
    bottom: '80px',
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  button: {
    borderRadius: '10px',
    padding: '10px 20px',
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: '#F9E854',
    '&:hover': {
      backgroundColor: '#FF8F19',
    },
  },
  bounce: {
    animation: '$bounceEffect 1s infinite',
  },
  '@keyframes bounceEffect': {
    '0%, 100%': {
      transform: 'translateY(0)',
    },
    '50%': {
      transform: 'translateY(-120px)',
    },
  },
}))

const App: React.FC = () => {
  const classes = useStyles()

  const handleClick = () => {
    console.log('Botón clickeado')
  }

  return (
    <div className={classes.container}>
      <div>
        <Typography className={classes.header} variant="h1">
          Mundo belleza
        </Typography>
      </div>
      <div className={classes.videoWrapper}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/eTGu0CZs0r0"
          title="YouTube Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className={classes.footer1}>
        <Typography
          className={` ${classes.bounce} ${classes.footer1}`}
          variant="h2"
        >
          Clik Aquí
        </Typography>
      </div>

      <div className={classes.footer2}>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          className={classes.button}
          onClick={handleClick}
        >
          Entrar
        </Button>
      </div>
      <div>Contenido adicional del</div>
    </div>
  )
}

export default App
