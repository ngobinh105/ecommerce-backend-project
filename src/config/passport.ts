import { Strategy } from 'passport-google-oauth20'
import User from '../models/User'
require('dotenv').config()

import userService from '../services/userService'

export const googleStrategy = new Strategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID ? process.env.GOOGLE_CLIENT_ID : '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
      ? process.env.GOOGLE_CLIENT_SECRET
      : '',
    callbackURL: '/auth/googleLogin',
  },
  async function (accessToken, refreshToken, profile, cb) {
    const email = profile.emails ? profile.emails[0].value : ''
    const user = await userService.getUserByEmail(email)
    if (user) {
      return cb(null, user)
    } else {
      const newUser = new User({
        firstName: profile.name?.givenName,
        lastName: profile.name?.familyName,
        email,
        avatar: profile.profileUrl,
      })
      const user = await userService.createUser(newUser)
      return cb(null, user)
    }
  }
)
