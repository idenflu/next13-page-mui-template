import dayjs from "dayjs";
import 'dayjs/locale/ko';
import DefaultLayout from "@/components/DefaultLayout";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import {InputLabel, Select} from "@mui/material";
import FormControl from "@mui/material/FormControl";

const Users = () => {

    return (
        <DefaultLayout>
            <div>
                <h1>Users</h1>
                <div>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'ko'} >
                        <DatePicker label={'일자'}
                                    format={'YYYY-MM-DD'}
                                    defaultValue={dayjs(new Date())}/>
                    </LocalizationProvider>
                </div>

                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="Hello World"
                        />
                        <TextField
                            disabled
                            id="outlined-disabled"
                            label="Disabled"
                            defaultValue="Hello World"
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                        />
                        <TextField
                            id="outlined-read-only-input"
                            label="Read Only"
                            defaultValue="Hello World"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            id="outlined-number"
                            label="Number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField id="outlined-search" label="Search field" type="search" />
                        <TextField
                            id="outlined-helperText"
                            label="Helper text"
                            defaultValue="Default Value"
                            helperText="Some important text"
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            id="filled-required"
                            label="Required"
                            defaultValue="Hello World"
                            variant="filled"
                        />
                        <TextField
                            disabled
                            id="filled-disabled"
                            label="Disabled"
                            defaultValue="Hello World"
                            variant="filled"
                        />
                        <TextField
                            id="filled-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="filled"
                        />
                        <TextField
                            id="filled-read-only-input"
                            label="Read Only"
                            defaultValue="Hello World"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="filled"
                        />
                        <TextField
                            id="filled-number"
                            label="Number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                        />
                        <TextField
                            id="filled-search"
                            label="Search field"
                            type="search"
                            variant="filled"
                        />
                        <TextField
                            id="filled-helperText"
                            label="Helper text"
                            defaultValue="Default Value"
                            helperText="Some important text"
                            variant="filled"
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            id="standard-required"
                            label="Required"
                            defaultValue="Hello World"
                            variant="standard"
                        />
                        <TextField
                            disabled
                            id="standard-disabled"
                            label="Disabled"
                            defaultValue="Hello World"
                            variant="standard"
                        />
                        <TextField
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <TextField
                            id="standard-read-only-input"
                            label="Read Only"
                            defaultValue="Hello World"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="standard"
                        />
                        <TextField
                            id="standard-number"
                            label="Number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                        />
                        <TextField
                            id="standard-search"
                            label="Search field"
                            type="search"
                            variant="standard"
                        />
                        <TextField
                            id="standard-helperText"
                            label="Helper text"
                            defaultValue="Default Value"
                            helperText="Some important text"
                            variant="standard"
                        />
                    </div>
                </Box>

                <div>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            label="Age"
                            // onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
        </DefaultLayout>
    )
}
export default Users;