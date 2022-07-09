import enviroment from "./enviroments";

// ! IF THE SERVER IS IN PRODUCTION THIS VALUES NOT CONMING FROM A ENV
if (process.env.NODE_ENV !== "production") {
  const env = enviroment;
}

//  TODO: JSONWEBTOKEN SECRET KEY
export const SECRET_KEY = process.env.SECRET_KEY || "SECRET_KEY_DEVELOPMENT";

// TODO: DATABASE COLLECTIONS NAME
export enum COLLECTIONS {
  USERS   = "users",
  GENRES  = "genres",
  TAGS    = 'tags',
  PRODUCTS_PLATFORM = 'product_platforms'
}

// TODO: MESSAGES
export enum MESSAGES {
  TOKEN_VERIFICATION_FAILED = ' TOKEN IS INVALID PLEASE SIGN IN AGAIN ',
}

// TODO: NODEMAILER CONFIGS
export const USER_MAIL = process.env.USER_EMAIL_PASSWORD_DOS_PASOS || ''
export const USER_PASSWORD_MAIL = process.env.USER_EMAIL_NAME || ''


//  TODO: EXPIRETIME TOKEN VALUES ( HOUR, 24 HOURS, 15MINUTES, 3DAYS, 20MINUTES)
export enum EXPIRETIME {
  H1 = 60 * 60,
  H24 = 24 * H1,
  M15 = H1 / 4,
  M20 = H1 / 3,
  D3 = H24 * 3,
}