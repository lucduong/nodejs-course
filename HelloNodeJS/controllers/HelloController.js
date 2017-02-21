const getHelloView = (req, res) => {
  res.json({message: 'Hello from HelloController'});
};

exports.helloView = getHelloView;

