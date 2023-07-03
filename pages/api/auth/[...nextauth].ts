import NextAuth, {NextAuthOptions, User} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    pages: {
        signIn: '/auth/signin',
    },
    secret: 'XXXXXX',
    providers: [
        CredentialsProvider({
            async authorize(credentials): Promise<User | null> {
                //console.log(credentials)

                // try {
                //     const response = await fetch('http://localhost:8080/v1/auth/signin', {
                //         method: 'POST',
                //         headers: {
                //             'Content-Type': 'application/json',
                //         },
                //         body: JSON.stringify({
                //             username: credentials?.username,
                //             password: credentials?.password
                //         })
                //     })
                //
                //     const user = await response.json()
                //     console.log(user)
                // }
                // catch (e) {
                //     console.error(e)
                //     // throw e
                //     return null
                // }

                return {
                    id: '1',
                    name: 'John Doe',
                    email: credentials?.username
                };
            },
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password'}
            }
        })
    ],
    callbacks: {
        session: ({session, token, user}) => {

            return session;
        }
    }
}

export default NextAuth(authOptions)
// const handler = NextAuth(authOptions);
//export { handler as GET, handler as POST };