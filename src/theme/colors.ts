import { DefaultTheme, DarkTheme } from '@react-navigation/native';

export const Colors = {
    red: '#ff0000',
    black: '#000000',
    transparentBlack: '#000000aa',
    transparentDark: '#444444aa',
    transparent: 'transparent',
    white: '#ffffff',
    darkBackground: '#1b262c',
    lightBackground: '#ffffff',
    darkPrimary: '#0f4c75',
    primary: 'rgb(90,13,226)',
    grey: '#5a5a5a',
    lightGrey: "#939AA4",
    lighterGrey: "#CDD4DA",
    error: "#dd3333",
    textInput: '#CDD4DA'
};

export const darkColors = {
    ...DarkTheme.colors,
    background: '#1b262c',
    text: '#bbe1fa',
};

export const lightColors = {
    ...DefaultTheme.colors,
    background: '#ffffff',
    text: Colors.black,
};