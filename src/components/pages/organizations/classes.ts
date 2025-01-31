import theme from "@/styles/muiTheme"


const classes = {
    containerCard: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        flexWrap: 'wrap',
        mt: 3
    },
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
        backgroundColor: 'transparency.primary.p05'
    },
    textHeaderCard: {
        fontWeight: 'bold',
        textAlign: 'center',
        zIndex: 1,
        textTransform: 'uppercase',
        width: 140
    },
    iconFavoriteCard: {
        position: 'absolute',
        top: 5,
        right: 7,
        zIndex: 1,
        backgroundColor: 'bg.main',
    },
    actionsCard: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 2
    },
    boxDescriptionCard: {
        height: 120,
        display: 'flex',
        flexDirection: 'column',
        gap: 2
    },
    containerHeader: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 1,
        mt: 1,
        mb: 2,
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
        },
    },
    filtersHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: 1
    },
    containerHeaderCard: {
        width: '100%',
    },
    boxChips: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 1
    },
    chipMarquee: {
        mr: 1
    },
    descriptionCard: {
        color: 'transparency.text.p50',
        textAlign: 'center',
        fontSize: 14
    },
    boxOutCard: {
        position: 'relative'
    },
    chipDeprecated: {
        position: 'absolute',
        top: 10,
        right: 7
    },
    chipHeaderCard: {
        position: 'absolute',
        top: 5,
        left: 6,
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
    boxInfoDeprecated: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 1
    },
    textDeprecated: {
        fontSize: 20,
        color: 'text.disabled'
    },
    iconDeprecated: {
        fontSize: 36,
        color: 'text.disabled'
    },
    textButtonMenu: {
        fontSize: 14
    },
    textButtonMenuSpan: {
        fontSize: 14,
        fontWeight: 'bold',
        ml: 1
    }
}

export default classes