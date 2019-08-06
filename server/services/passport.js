const mongoose = require('mongoose')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const { GOOGLE_CLIENT_ID: clientID, GOOGLE_CLIENT_SECRET: clientSecret} = process.env

const User = mongoose.model('users')

passport.use(
  new GoogleStrategy(
    {
      clientID,
      clientSecret,
      callbackURL: '/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log('accessToken', accessToken)
      console.log('refreshToken', refreshToken)
      console.log('profile id', profile.id)
      const existingUser = await User.findOne({ googleId: profile.id })

      if (existing) {
        done(null, existingUser)
      } else {
        const user =  await new User({ googleId: profile.id }).save()
        done(null, user)
      }
    }
  )
)