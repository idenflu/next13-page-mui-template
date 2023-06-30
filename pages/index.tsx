import { Button } from '@mui/material';

import type { NextPage } from 'next';
import {MouseEventHandler} from "react";
import {useRouter} from "next/navigation";
import {signOut, useSession} from "next-auth/react";
import DefaultLayout from "@/components/DefaultLayout";

const Home: NextPage = () => {

    const {data, status} = useSession()
    const {push} = useRouter()

    const signin = (event: MouseEventHandler<HTMLButtonElement>) => {
        push('/auth/signin')
    }

    if(status === 'loading')
        return (
            <></>
            // <div style={{
            //     width: '100vw',
            //     height: '100vh',
            //     display: 'flex',
            //     justifyContent: 'center',
            //     alignItems: 'center',
            // }}>loading</div>
        );


    return (
      <DefaultLayout>
          <div>
              <header>
                  <h1>MUI5 + Next.js</h1>
              </header>
              <section>
                  {
                      !data && <Button variant={'contained'} onClick={signin}>Signin</Button>
                  }
                  {
                      data && (<div>
                          <div>
                              Welcome {data.user?.name}
                          </div>
                          <Button variant={'contained'} onClick={()=> signOut()}>Signout</Button>
                      </div>)
                  }
              </section>
          </div>
      </DefaultLayout>
  );
};

export default Home;