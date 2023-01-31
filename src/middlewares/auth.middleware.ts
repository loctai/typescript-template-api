import { HttpExceptionError } from "exceptions/http.exception"
import { getCookies } from "utils/cookie"

export const checkAuthentication: RequestHandler = async (req, _res, next) => {
    return next()
    const accessToken = getCookies(req.headers.cookie)?.accessToken

    if (!accessToken) return next(new HttpExceptionError(401, "unauthorised"))
}