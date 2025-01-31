const classes = {
    hidden: {
        display: 'none'
    },
    root: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'background.paper',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 2,
        zIndex: 10
    },
    iconSuccess: {
        color: 'success.main',
        fontSize: 45
    },
    titleSuccess: {
        color: 'success.main',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textSuccess: {
        color: 'success.main',
        fontSize: 18,
        textAlign: 'center'
    },
    iconError: {
        color: 'warning.main',
        fontSize: 45
    },
    titleError: {
        color: 'warning.main',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textError: {
        color: 'warning.main',
        fontSize: 18,
        textAlign: 'center'
    },
}

export default classes