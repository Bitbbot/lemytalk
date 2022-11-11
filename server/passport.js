import GoogleStr from "passport-google-oauth20";
import passport from "passport";
import dotenv from 'dotenv';

dotenv.config();

const GoogleStrategy = GoogleStr.Strategy;

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "/api/auth/google/callback",
        },
        function (accessToken, refreshToken, profile, done) {
            done(null, profile);
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, { authId: user.provider[0] + user.id });
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

export default passport;
