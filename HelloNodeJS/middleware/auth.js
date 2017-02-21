const isAuthenticated = (req, res, next) => {
  console.log(`current user: `, req.user);
  req.user = {username: 'lucduong'};
  if (req.user) {
    next();
    return;
  } else {
    console.log('User is not logged yet!!');
    res.redirect('/login');
  }
}

exports.isAuthenticated = isAuthenticated;
