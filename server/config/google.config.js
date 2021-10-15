import googleOAuth from "passport-google-oauth20";
import UserModel from "../database/allmodels";

const GoogleStratergy = googleOAuth.Strategy;

export default (passport) => {
    passport.use(
        new GoogleStratergy({
            clientID: "865552324101-v46knubi5j7fg2i847ja92mike3npr5b.apps.googleusercontent.com",
            clientSecret: "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",
            callbackURL: "http://localhost:3000/auth/google/callback"
            },
            async(accessToken, refreshToken, profile, done) => {
                const newUser = {
                    fullname: profile.displayName,
                    email: profile.emails[0].value,
                    profilePic: profile.photos[0].value
                };
                try{
                    const user = await UserModel.findOne({ email: newUser.email });
            
                    if(user){
                        const token = user.generateJwtToken(); 
                        done(null, { user, token});
                    }
                    else{
                        const user = await UserModel.create(newUser);
                        const token = user.generateJwtToken();
                        done(null, { user, token});
                    }
                }
                catch(error){
                    done(error, null);
                }
            }
        )
    );
    
    passport.serializeUser((userData,done) => done(null, {...userData}));
    passport.deserializeUser((id, done) => done(null, id));
};


