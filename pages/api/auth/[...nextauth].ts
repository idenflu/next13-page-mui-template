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

                // const response = await fetch('http://localhost:3000/api/login', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json'
                //     },
                //     body: JSON.stringify(credentials)
                // })
                //
                // const user = response.json()

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