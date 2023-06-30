import dayjs from "dayjs";
import 'dayjs/locale/ko';
import DefaultLayout from "@/components/DefaultLayout";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

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
            </div>
        </DefaultLayout>
    )
}
export default Users;