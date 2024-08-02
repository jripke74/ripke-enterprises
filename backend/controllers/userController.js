// login user
const loginUser = async (req, res) => {
  res.json({ mssg: 'login user' });
};

// signup user
const signupUser = async (req, res) => {
  res.json({ mssg: 'singup user' });
};

module.exports = {
  loginUser,
  signupUser,
};
