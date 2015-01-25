/**
 * Created by brian on 1/25/15.
 */
passport.use('signup', new LocalStrategy({
    passReqToCallback : true
},
function(req, username, password, done) {
    findOrCreateuser = function() {
        User.findOne({'username': username}, function(err, user) {
            // In case of any error return
            if (err) {
                console.log('Error in SignUp: ' + err);
                return done(err);
            }
            // already exists
            if (user) {
                console.log('User already exists');
                return done(null, false, req.flash('message', 'User Already Exists'));
            } else {
                // if there is no user with that email create the user
                var newUser = new User();
                // set the user's local credentials
                newUser.username = username;
                newUser.password = createHash(password);
                newUser.email = req.param('email');
                newUser.firstName = req.param('firstName');
                newUser.lastName = req.param('lastName');

                // save teh user
                newUser.save(function(err) {
                    if (err){
                      console.log('Error in Saving user: ' + err);
                        throw err;
                    }
                    console.log('User Registration successful');
                    return done(null, newUser);
                });
            }
        });
    };

    process.nextTick(findOrCreateuser());
});
);

var createHash = function(password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
}