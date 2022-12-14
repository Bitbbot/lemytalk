import GoogleStr from "passport-google-oauth20";
import passport from "passport";
const GoogleStrategy = GoogleStr.Strategy;

const GOOGLE_CLIENT_ID =
    "287466123313-g1casds5cq55qp21tqk676s95p80tjh8.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
    new GoogleStrategy(
        {
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
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
