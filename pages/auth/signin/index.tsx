import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {signIn} from "next-auth/react";

const signin = () => {
    // form 전송
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);
        const username = data.get("usename")
        const password = data.get("password")

        const response = await signIn("credentials", {
            username,
            password,
            redirect: true,
            callbackUrl: '/'
        })

    };

    return (
        <Container>
            <Box sx={{ justifyContent: 'center'
                , alignItems: 'center'
                , textAlign:'center'}}>
                <h1>Sign in</h1>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <FormControl component="fieldset" variant="standard">
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    autoFocus
                                    fullWidth
                                    type="text"
                                    id="username"
                                    name="username"
                                    label="아이디"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    type="password"
                                    id="password"
                                    name="password"
                                    label="비밀번호"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            size="large"
                        >
                            회원가입
                        </Button>
                    </FormControl>
                </Box>
            </Box>
        </Container>
    )
}

export default signin;