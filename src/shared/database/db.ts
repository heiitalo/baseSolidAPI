import mongoose, { ConnectOptions } from "mongoose";

const connectDataBase = () => {
  console.log("conectando a database");

  mongoose
    .connect(
      "mongodb+srv://root:root@apisolid.xocf1fv.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions
    )
    .then(() => console.log("MongoDB Atlas conectado"))
    .catch((error) => console.log(error));
};

export { connectDataBase };
