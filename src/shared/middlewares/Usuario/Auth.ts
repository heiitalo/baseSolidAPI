import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

function checkToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "acesso negado!" });
  }

  try {
    const secret = "teste";

    jwt.verify(token, secret);
    next();
  } catch (error) {
    res.status(400).json({ message: "token inválido!" });
  }
}

export { checkToken };
