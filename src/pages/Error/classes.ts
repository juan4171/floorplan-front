import theme from "@/styles/muiTheme"

const classes = {
    container: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparency.textDisabled.p20',
        flexDirection: 'column',
        gap: 2
    },
    textNot: {
        fontSize: 28,
        color: 'divider',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            fontSize: 24,
        }
    },
    textInfo: {
        fontSize: 24,
        textAlign: 'center',
        color: 'divider',
        [theme.breakpoints.down('sm')]: {
            fontSize: 20,
        }
    },
    boxContent: {
        borderRadius: 2,
        position: 'relative'
    },
    img: {
        width: '20vw',
    },
    boxImg: {
        position: 'absolute',
        bottom: 20,
        right: 40
    },
    boxMessage: {
        display: 'flex',
        alignItems: 'center',
        justifyConten: 'center',
        flexDirection: 'column',
    }
}

export default classes