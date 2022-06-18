//A function to secure the routes 
// checks to see of user is logged and redirects the user to the correct route.
const withAuth = (req, res, next) => {
   
    // If the user is not logged in, redirect the request to the login route
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  