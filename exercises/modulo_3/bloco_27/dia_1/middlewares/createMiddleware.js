const validate = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  if (
    !firstName || firstName === undefined ||
    !lastName || lastName === undefined ||
    !firstName || firstName === undefined ||
    !email || email === undefined ||
    !password || password === undefined
  ) {
    return res.status(400).json({
      error: true,
      message: "Todos os campos são obrigatórios",
    });
  }

  if (password. length < 6) {
    return res.status(400).json({
      error: true,
      message: "O campo 'password' deve ter pelo menos 6 caracteres",
    });
  }

  next();
}

module.exports = validate;