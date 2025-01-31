import background from '@/assets/images/backgrounds/logo-floorplan.png'
import theme from '@/styles/muiTheme'

const classes = {
    root: {
        position: 'relative',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            gap: 10
        }
    },
    bgImg: {
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        zIndex: 0,
        top: 0,
        left: 0,
        /* backgroundImage: `url(${background})`, */
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100vw 100vh',
        filter: 'blur(1px) contrast(80%)',
        [theme.breakpoints.down('sm')]: {
            backgroundSize: '500vw 150vh',
        },
        backgroundColor: 'black'
    },
    boxChildren: {
        width: '100%',
        height: '100%',
        zIndex: 1,
    }
}

export default classes