import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

const handler = NextAuth({
    providers: [
        Credentials({
            name: "Test App",
            credentials: {
                username: { label: "Email", type: "text", placeholder: "johndoe@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {

                const user = { id: 1, name: "Sumiet Gore", email: "sumeetgore96@gmail.com", password: "Sumeetn96@@" }

                // console.log(credentials.username)

                if (user.email === credentials.username && credentials.password === user.password) {
                    return user
                }

                return null
            },


        })
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            console.log(user, account, credentials)
            return true
        },
        async session({ session, token, user }) {

            session.user.id = token.id

            return session
        }
    },
    events: {
        signIn: ({ user }) => {
            // console.log(user)
        }
    },
    pages: {
        signIn: '/auth/signin',
        // signOut: '/auth/signout',
        // error: '/auth/error',
        // verifyRequest: '/auth/verify-request',
        // newUser: '/auth/new-user'
    },
    // cookies: {
    //     sessionToken: {
    //         name: "st",
    //         options: {
    //             httpOnly: true,
    //             sameSite: 'lax',
    //             path: '/',
    //             secure: true
    //         }
    //     },
    //     callbackUrl: {
    //         name: "curl",
    //         options: {
    //             httpOnly: true,
    //             sameSite: 'lax',
    //             path: '/',
    //             secure: true
    //         }
    //     },
    //     csrfToken: {
    //         name: "csrf",
    //         options: {
    //             httpOnly: true,
    //             sameSite: 'lax',
    //             path: '/',
    //             secure: true
    //         }
    //     },
    // }
})

export { handler as GET, handler as POST }