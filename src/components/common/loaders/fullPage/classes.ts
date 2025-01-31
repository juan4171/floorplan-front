import theme from "@/styles/muiTheme"

const classes = {
    backdrop: {
        color: '#fff',
        zIndex: theme.zIndex.drawer + 1,
        display: 'flex',
        alignItems: 'center',
        justofyContent: 'center',
        gap: 1,
        flexDirection: 'column'
    }
}

export default classes