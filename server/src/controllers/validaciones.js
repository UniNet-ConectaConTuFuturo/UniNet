import {
  simpleDataValidation,
  mailValidation,
} from "../libs/SimpleDataValidation.js";
import * as consult from "../database/consults.js";
import { codeValidation } from "../libs/CodeFunctions.js";
export async function User(req, res, next) {
  try {
    const data = req.body;
    /* Validar Mail */
    const wrongmail = mailValidation(data);
    if (wrongmail) return res.json(wrongmail).end();
    /* Comprobar que no Exista */
    const user_data = await consult.selectFromUsuarios(
      "id_usuario",
      "mail_user",
      data.mail_user
    );
    if (user_data.length)
      return res.json({ spanEmail: "Este usuario ya está registrado" }).end();
    /* Validar Formato */
    const wrongdata = simpleDataValidation(data);
    if (wrongdata) return res.json(wrongdata).end();

    next();
  } catch (error) {
    console.error(error);
    res.status(404).end();
  }
}
export function Title(req, res, next) {
  try {
    const { title } = req.body;
    if (!title.trim()) return res.json({ spanTitle: "Completar" }).end();
    next();
  } catch (error) {
    console.error(error);
    res.status(404).end();
  }
}
export function IdUniversidad(req, res, next) {
  try {
    const { id_universidad } = req.body;
    if (!id_universidad.trim())
      return res.json({ spanIdUniversidad: "Completar" }).end();
    next();
  } catch (error) {
    console.error(error);
    res.status(404).end();
  }
}

export async function EntrantCode(req, res, next) {
  try {
    const { mail_user, code } = req.body;
    const wrongCode = await codeValidation(mail_user, code, req);
    if (wrongCode) return res.json(wrongCode).end();

    return next();
  } catch (err) {
    console.error(err);
    res.status(404).end();
  }
}
export async function RectorCode(req, res, next) {
  try {
    const { id_universidad, code } = req.body;
    const mail_universidad = await consult.selectFromUniversidades(
      "correo_universidad",
      id_universidad
    );
    const wrongCode = await codeValidation(mail_universidad, code, req);
    if (wrongCode) return res.json(wrongCode).end();

    return next();
  } catch (err) {
    console.error(err);
    res.status(404).end();
  }
}
