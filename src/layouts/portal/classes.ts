import theme from "@/styles/muiTheme"

const classes = {
    root: {
        display: 'flex',
        overflowX: 'hidden'
    },
    children: {
        flexGrow: 1,
        p: 3,
        pb: 4,
        width: {
            sm: '100%'//`calc(100% - ${240}px)`
        },
        backgroundColor: 'bg.light',
        minHeight: '96vh',
        [theme.breakpoints.down('md')]: {
            minHeight: '93vh',
        }
    },
    boxContainerChildren: {
        width: '100vw'
    }
}

export default classes