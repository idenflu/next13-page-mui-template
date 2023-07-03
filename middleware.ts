import {NextResponse, NextFetchEvent, NextRequest} from "next/server";
import {getToken} from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET

export async function middleware(req: NextRequest) {
    const token = await getToken({req, secret, raw:true})
    const {pathname} = req.nextUrl

    console.log('middleware')

    if (pathname.startsWith('/auth/signin')) {
        if(token) {
            return NextResponse.redirect(new URL('/', req.url))
        }
    }

    if (pathname.startsWith('/users')) {
        if(!token) {
            return NextResponse.redirect(new URL('/', req.url))
        }
    }

    if (pathname == '/') {
        if(!token) {
            return NextResponse.redirect(new URL('/auth/signin', req.url))
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/auth/signin'
        , '/'
        , '/users/:path*']
}