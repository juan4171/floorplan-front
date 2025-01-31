const classes = {
    drawerContainer: {
        width: {
            sm: 240,
        },
        flexShrink: {
            sm: 0,
        },
    },
    temporaryDrawer: {
        display: {
            xs: 'block',
            sm: 'none',
        },
        '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
        },
    },
    permanentDrawer: {
        display: {
            xs: 'none',
            sm: 'block',
        },
        '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
        },
    },
    headerContainer: {
        mr: 2,
        width: {
            sm: `calc(100% - ${270}px)`,
        },
        ml: {
            sm: `${240}px`,
        },
        backgroundColor: 'bg.main',
        mt: 1,
        borderRadius: 1,
        /* [theme.breakpoints.down('sm')]: {
            width: {
                sm: `calc(100% - ${240}px)`,
            },
            mr: 0,
            mt: 0,
        }, */
    },
    buttoniconHeader: {
        mr: 2,
        display: {
            sm: 'none',
        },
    },
    tagsContainer: {
        height: '100%',
    },
    boxImgTags: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textHeader: {
        color: 'text.primary',
    },
    headerContent: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    boxAvatar: {
        display: 'flex',
        alignItems: 'center',
    },
    itemMenuUser: {
        cursor: 'default',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: 1,
    },
    avatarSize: {
        width: 50,
        height: 50,
    },
    nameUser: {
        fontWeight: 'bold',
    },
    roleUser: {
        fontSize: 14,
    },
    button: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 3,
    },
    buttonTags: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    menuTags: {
        '& .MuiMenu-paper': {
            width: 205,
            maxWidth: 205,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        },
    },
    searchTags: {
        width: 180,
    },
    itemButtomCollapse: {
        ml: 2,
        borderRadius: 1,
        '& .MuiListItemIcon-root': {
            minWidth: 'max-content',
            mr: 1,
        },
    },
    itemButtomCollapseSelected: {
        ml: 2,
        borderRadius: 1,
        backgroundColor: 'primary.main',
        '& .MuiListItemText-primary': {
            fontWeight: 'bold',
            color: 'primary.contrastText',
        },
        '& .MuiListItemIcon-root': {
            color: 'bg.main',
            minWidth: 'max-content',
            mr: 1,
        },
        '& .MuiSvgIcon-root': {
            color: 'primary.contrastText',
        },
        '&:hover': {
            backgroundColor: 'primary.dark',
        },
    },
    boxSearchTags: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        my: 1,
    },
    listTags: {
        maxHeight: 250,
        overflowY: 'scroll',
    },
    nav: {
        borderRadius: 1,
        mb: 1,
    },
    navSelected: {
        borderRadius: 1,
        mb: 1,
        backgroundColor: 'primary.main',
        borderTop: `1px solid`,
        borderBottom: `1px solid`,
        borderColor: 'primary.main',
        '& .MuiListItemText-primary': {
            fontWeight: 'bold',
            color: 'primary.contrastText',
        },
        '& .MuiListItemIcon-root': {
            color: 'bg.main',
        },
        '& .MuiSvgIcon-root': {
            color: 'primary.contrastText',
        },
        '&:hover': {
            backgroundColor: 'primary.dark',
            borderTop: `1px solid`,
            borderBottom: `1px solid`,
            borderColor: 'primary.dark',
        },
    },
    containerPosition: {
        width: 150,
    },
    boxPosition: {
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        color: 'primary.main',
    },
    boxTextPosition: {
        display: 'flex',
        flexDirection: 'column',
    },
    textPrimaryPosition: {
        fontWeight: 'bold',
    },
    textSecondaryPosition: {
        fontSize: 14,
    },
    searchHeader: {
        /* [theme.breakpoints.down('sm')]: {
            maxWidth: 200,
        }, */
        padding: 0,
    },
    boxNavigation: {
        position: 'relative',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
        zIndex: 1,
    },
    listNavigation: {
        width: '90%',
        paddingBottom: '60px',
    },
    list: {
        width: '100%',
    },
    boxFooter: {
        position: 'relative',
        width: '100%',
        p: 0.3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 0.35,
        backgroundColor: 'bg.footer',
        minHeight: '4vh',
        /* [theme.breakpoints.down('md')]: {
            minHeight: '7vh',
        }, */
    },
    textFooter: {
        color: 'text.primary',
        fontSize: 14,
    },
    textFooterLabel: {
        color: 'primary.main',
        fontSize: 14,
        fontWeight: 'bold',
    },
    listSectionsTools: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    textFooterUpdate: {
        color: 'text.primary',
        fontSize: 14,
        /* [theme.breakpoints.up('md')]: {
            position: 'absolute',
            right: 6,
        }, */
    },
    textFooterLabelUpdate: {
        color: 'text.primary',
        fontSize: 14,
        fontWeight: 'bold',
        ml: 0.5,
    },
    boxDarkMode: {
        display: 'flex',
        alignItems: 'center',
        gap: 1,
    },
    buttonSuggest: {
        position: 'fixed',
        bottom: 20,
        left: 14.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
        backgroundColor: 'bg.main',
        '&:hover': {
            backgroundColor: 'bg.light',
            transition: '0.2s',
        },
        transition: '0s',
        /* [theme.breakpoints.down('sm')]: {
            backgroundColor: 'suggestBgMobile',
        }, */
    },
}

export default classes