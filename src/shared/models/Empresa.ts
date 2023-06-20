import mongoose from "mongoose";

// const mongoose = require("mongoose")

const EmpresaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    empresaName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    telefone: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Empresa = mongoose.model("Empresa", EmpresaSchema);

export { Empresa };
