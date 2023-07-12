import { createTheme } from '@mui/material/styles';
import { indigo, blue, lightBlue } from '@mui/material/colors';
import { koKR } from '@mui/material/locale';
import { koKR as pickerLocale } from '@mui/x-date-pickers/locales';

const theme = createTheme(
    {
        typography: {
            htmlFontSize: 20,
            fontFamily: 'Noto Sans KR',
        },
        palette: {
            primary: {
                main: blue.A200,
            },
        },
        // spacing:[0, 2, 3, 5, 8],
        components: {
            MuiAppBar: {
                defaultProps: {
                    color: 'transparent',
                    elevation: 2,
                },
                styleOverrides: {
                    root: {
                        backgroundColor: '#fff',
                    }
                }
            },
            MuiButton : {
                defaultProps: {
                    disableElevation: true
                }
            }
        }
    }
    , koKR
    , pickerLocale
);

export default theme;