import theme from "@/styles/muiTheme"

const classes = {
    card: {
        width: 250,
        height: 280,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        pb: 1,
        
    },
    boxHeaderCard: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
        position: 'relative',
        width: '100%',
        height: 100,
        backgroundColor: 'transparency.primary.p05',
        pt: '.5rem'
    },
    textHeaderCard: {
        fontWeight: 'bold',
        textAlign: 'center',
        zIndex: 1,
        textTransform: 'uppercase',
        width: 140
    },
    actionsCard: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerHeader: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        mt: 1,
        mb: 5,
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
            gap: 2
        }
    },
    containerHeaderCard: {
        overflow: 'hidden',
        width: '100%',  
    },
    descriptionCard: {
        textAlign: 'center',
        fontSize: 14,
        overflow: 'hidden',
    },
    boxOutCard: {
        position: 'relative',
    },
    chipHeaderCard: {
        position: 'absolute',
        top: 8,
        left: 10,
        color: 'transparency.primary.p80',
        borderColor: 'primary.light',
        backgroundColor: 'transparency.primaryLight.p40',
        borderRadius: 1,
        zIndex: 2,
        cursor: 'help'
    },
    boxChipHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: 1
    },
    buttonFavorites: {
        position: 'absolute',
        top: 2,
        right: 4
    },
    actionsTable: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
}

export default classes