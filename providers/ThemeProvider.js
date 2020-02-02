import React from 'react';
import styled, {ThemeProvider} from 'styled-components';


const theme = {
    colors: {
        primary: '#19334B',
        secondary: '#3CA0B4',
        white: '#f0f4fa',
        black: '#010102',
        gray: '#cbc8c8'
    },
    fonts:{
        primary: "'Work Sans', Sans-Serif",
        secondary: "'Open Sans', Serif"
    }
}

const Theme = ({children}) => {
    return (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )
}

export default Theme;