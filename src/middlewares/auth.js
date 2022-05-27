import jwt from "jsonwebtoken";
const authConfig = { secret: "e662505747e4922b7694aa878bcbcbc0" };

const authConfigs = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).json({ error: "Token não informado" });

  const parts = authHeader.split(" ");

  if (!parts.length === 2)
    return res.status(401).json({ error: "Token inválido" });

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme))
    return res.status(401).json({ error: "Token inválido" });

  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) return res.status(401).json({ error: "Token inválido" });
    req.userID = decoded.id;
    return next();
  });
};

export default authConfigs;
