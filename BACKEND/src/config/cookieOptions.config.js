export const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV ==="production",
    sameSite: "lax",
    maxAge: 1000 * 60 * 5 // for 5 minutes
}