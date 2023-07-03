import { createTheme } from '@mui/material/styles';
import { indigo, blue, lightBlue } from '@mui/material/colors';
import { koKR } from '@mui/material/locale';
import { koKR as pickerLocale } from '@mui/x-date-pickers/locales';

const theme = createTheme(
{
        // shadows: ["none"],
        palette: {
            primary: {
                main: blue.A200,
            },
        },
    }
    , koKR
    , pickerLocale
);

export default theme;