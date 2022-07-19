import passport from 'passport'
import { Strategy } from 'passport-google-oauth20'
import User, { UserDocument } from '../models/User'
require('dotenv').config()

import userService from '../services/userService'

declare global {
  namespace Express {
    interface User extends UserDocument {}
  }
}

export const googleStrategy = new Strategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID ? process.env.GOOGLE_CLIENT_ID : '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
      ? process.env.GOOGLE_CLIENT_SECRET
      : '',
    callbackURL: '/auth/googlelogin/callback',
  },
  async function (accessToken, refreshToken, profile, cb) {
    const email = profile.emails ? profile.emails[0].value : ''
    const user = await userService.getUserByEmail(email)
    const randomPassword = Math.random().toString(36).slice(-8)
    if (user) {
      return cb(null, user)
    } else {
      const newUser = new User({
        firstName: profile.name?.givenName,
        lastName: profile.name?.familyName,
        email: profile.emails ? profile.emails[0].value : '',
        avatar: profile.profileUrl
          ? profile.profileUrl
          : profile.photos
          ? profile.photos[0].value
          : '',
        password: randomPassword,
        role: 'customer',
      })
      const user = await userService.createUser(newUser)
      return cb(null, user)
    }
  }
)

passport.serializeUser<any, any>((req, user, done) => {
  done(null, user)
})

passport.deserializeUser((id, done) => {
  User.findById(id, (err: NativeError, user: UserDocument) => done(err, user))
})
