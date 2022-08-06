const BOOKS = {
    GET: (page: number) => `/books/?page=${page}&amount=12`
}

const BOOKSID = {
    GET: (id: string) => `/books/${id}`
}

const SIGN_IN = {
    POST: '/auth/sign-in'
}

const REFRESH_TOKEN = {
    POST: '/auth/refresh-token'
}

const ROUTES = {
    BOOKS,
    BOOKSID,
    SIGN_IN,
    REFRESH_TOKEN
}

export { ROUTES }