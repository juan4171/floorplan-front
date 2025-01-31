/* eslint-disable @typescript-eslint/no-explicit-any */
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        bg: {
            main: string;
            light: string;
            dark: string;
            footer: string;
        },
        transparency: any
    }

    interface PaletteOptions {
        bg?: {
            main?: string;
            light?: string;
            dark?: string;
            footer?: string;
        };
        transparency?: any
        
        chipHeaderCard?: any

        suggestBgMobile?: any
    }
}

export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1DB954',
            light: '#1ED760',
            dark: '#1AA34A',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#42B5AE',
            dark: '#2D7D78',
            light: '#55EDE3',
            contrastText: '#FFFFFF',
        },
        bg: {
            main: '#FFFFFF',
            light: '#f5f5f5',
            dark: '#cccccc',
            footer: '#cccccc',
        },
        text: {
            primary: '#2e2e2e',
            secondary: '#2c2c2c',
            disabled: '#ababab',
        },
        divider: '#B3B3B3',
        transparency: {
            primary: {
                p05: 'rgba(29, 185, 84, 0.05)',
                p10: 'rgba(29, 185, 84, 0.1)', 
                p20: 'rgba(29, 185, 84, 0.2)', 
                p30: 'rgba(29, 185, 84, 0.3)', 
                p40: 'rgba(29, 185, 84, 0.4)', 
                p50: 'rgba(29, 185, 84, 0.5)', 
                p60: 'rgba(29, 185, 84, 0.6)', 
                p70: 'rgba(29, 185, 84, 0.7)', 
                p80: 'rgba(29, 185, 84, 0.8)', 
                p90: 'rgba(29, 185, 84, 0.9)', 
            },
            primaryLight: {
                p05: 'rgba(29, 185, 84, 0.05)',
                p10: 'rgba(29, 185, 84, 0.1)', 
                p20: 'rgba(29, 185, 84, 0.2)', 
                p30: 'rgba(29, 185, 84, 0.3)', 
                p40: 'rgba(29, 185, 84, 0.4)', 
                p50: 'rgba(29, 185, 84, 0.5)', 
                p60: 'rgba(29, 185, 84, 0.6)', 
                p70: 'rgba(29, 185, 84, 0.7)', 
                p80: 'rgba(29, 185, 84, 0.8)', 
                p90: 'rgba(29, 185, 84, 0.9)', 
            },
            text: {
                p05: 'rgba(46, 46, 46, 0.05)',
                p10: 'rgba(46, 46, 46, 0.1)',
                p20: 'rgba(46, 46, 46, 0.2)',
                p30: 'rgba(46, 46, 46, 0.3)',
                p40: 'rgba(46, 46, 46, 0.4)',
                p50: 'rgba(46, 46, 46, 0.5)',
                p60: 'rgba(46, 46, 46, 0.6)',
                p70: 'rgba(46, 46, 46, 0.7)',
                p80: 'rgba(46, 46, 46, 0.8)',
                p90: 'rgba(46, 46, 46, 0.9)',
            },
            textDisabled: {
                p05: 'rgba(171, 171, 171, 0.05)',
                p10: 'rgba(171, 171, 171, 0.1)',
                p20: 'rgba(171, 171, 171, 0.2)',
                p30: 'rgba(171, 171, 171, 0.3)',
                p40: 'rgba(171, 171, 171, 0.4)',
                p50: 'rgba(171, 171, 171, 0.5)',
                p60: 'rgba(171, 171, 171, 0.6)',
                p70: 'rgba(171, 171, 171, 0.7)',
                p80: 'rgba(171, 171, 171, 0.8)',
                p90: 'rgba(171, 171, 171, 0.9)',
            },
            bgDark: {
                p05: 'rgba(204, 204, 204, 0.05)',
                p10: 'rgba(204, 204, 204, 0.1)',
                p20: 'rgba(204, 204, 204, 0.2)',
                p30: 'rgba(204, 204, 204, 0.3)',
                p40: 'rgba(204, 204, 204, 0.4)',
                p50: 'rgba(204, 204, 204, 0.5)',
                p60: 'rgba(204, 204, 204, 0.6)',
                p70: 'rgba(204, 204, 204, 0.7)',
                p80: 'rgba(204, 204, 204, 0.8)',
                p90: 'rgba(204, 204, 204, 0.9)',
            },
        },
        chipHeaderCard: '#1ED760',
        suggestBgMobile: '#fff',
    }
});

export const themeDark = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1DB954',
            light: '#1ED760',
            dark: '#1AA34A',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#42B5AE',
            dark: '#2D7D78',
            light: '#55EDE3',
            contrastText: '#FFFFFF',
        },
        bg: {
            main: '#121212',
            light: '#121212',
            dark: '#cccccc',
            footer: '#272727',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#FFFFFF',
            disabled: '#9C9C9C',
        },
        divider: '#666',
        transparency: {
            primary: {
                p05: 'rgba(29, 185, 84, 0.05)',
                p10: 'rgba(29, 185, 84, 0.1)', 
                p20: 'rgba(29, 185, 84, 0.2)', 
                p30: 'rgba(29, 185, 84, 0.3)', 
                p40: 'rgba(29, 185, 84, 0.4)', 
                p50: 'rgba(29, 185, 84, 0.5)', 
                p60: 'rgba(29, 185, 84, 0.6)', 
                p70: 'rgba(29, 185, 84, 0.7)', 
                p80: 'rgba(29, 185, 84, 0.8)', 
                p90: 'rgba(29, 185, 84, 0.9)', 
            },
            primaryLight: {
                p05: 'rgba(29, 185, 84, 0.05)',
                p10: 'rgba(29, 185, 84, 0.1)', 
                p20: 'rgba(29, 185, 84, 0.2)', 
                p30: 'rgba(29, 185, 84, 0.3)', 
                p40: 'rgba(29, 185, 84, 0.4)', 
                p50: 'rgba(29, 185, 84, 0.5)', 
                p60: 'rgba(29, 185, 84, 0.6)', 
                p70: 'rgba(29, 185, 84, 0.7)', 
                p80: 'rgba(29, 185, 84, 0.8)', 
                p90: 'rgba(29, 185, 84, 0.9)', 
            },
            text: {
                p05: 'rgba(255, 255, 255, 0.05)',
                p10: 'rgba(255, 255, 255, 0.1)',
                p20: 'rgba(255, 255, 255, 0.2)',
                p30: 'rgba(255, 255, 255, 0.3)',
                p40: 'rgba(255, 255, 255, 0.4)',
                p50: 'rgba(255, 255, 255, 0.5)',
                p60: 'rgba(255, 255, 255, 0.6)',
                p70: 'rgba(255, 255, 255, 0.7)',
                p80: 'rgba(255, 255, 255, 0.8)',
                p90: 'rgba(255, 255, 255, 0.9)',
            },
            textDisabled: {
                p05: 'rgba(171, 171, 171, 0.05)',
                p10: 'rgba(171, 171, 171, 0.1)',
                p20: 'rgba(171, 171, 171, 0.2)',
                p30: 'rgba(171, 171, 171, 0.3)',
                p40: 'rgba(171, 171, 171, 0.4)',
                p50: 'rgba(171, 171, 171, 0.5)',
                p60: 'rgba(171, 171, 171, 0.6)',
                p70: 'rgba(171, 171, 171, 0.7)',
                p80: 'rgba(171, 171, 171, 0.8)',
                p90: 'rgba(171, 171, 171, 0.9)',
            },
            bgDark: {
                p05: 'rgba(204, 204, 204, 0.05)',
                p10: 'rgba(204, 204, 204, 0.1)',
                p20: 'rgba(204, 204, 204, 0.2)',
                p30: 'rgba(204, 204, 204, 0.3)',
                p40: 'rgba(204, 204, 204, 0.4)',
                p50: 'rgba(204, 204, 204, 0.5)',
                p60: 'rgba(204, 204, 204, 0.6)',
                p70: 'rgba(204, 204, 204, 0.7)',
                p80: 'rgba(204, 204, 204, 0.8)',
                p90: 'rgba(204, 204, 204, 0.9)',
            },
        },
        chipHeaderCard: '#1ED760',
        suggestBgMobile: '#353535',
    }
});

export default theme;