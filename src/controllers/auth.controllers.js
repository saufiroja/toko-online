const register = (req, res, next) => {
  try {
    const { name } = req.body;
    console.log(name);
  } catch (error) {
    next(error);
  }
};

module.exports = { register };
