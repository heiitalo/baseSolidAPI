import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    nome: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    senha: {
      type: String,
      required: true,
    },

    dataNascimento: {
      type: Date,
      required: true,
    },

    cpf: {
      type: String,
      required: true,
      trim: true,
    },

    pais: {
      type: String,
      required: true,
      trim: true,
    },

    estado: {
      type: String,
      required: true,
      trim: true,
    },

    cidade: {
      type: String,
      required: true,
      trim: true,
    },

    rua: {
      type: String,
      required: true,
      trim: true,
    },

    numero: {
      type: Number,
      required: true,
    },

    celular: {
      type: Number,
      required: true,
    },

    foto: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Usuario = mongoose.model("Usuario", UserSchema);

export { Usuario };
