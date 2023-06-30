const testConnection = (req, res) => {
  const { email, password } = req.body;
  console.log(`The username received is: ${email}`);
  console.log(`The password received is: ${password}`);
  res.json({ username: email, password: password });
};

export default testConnection;
