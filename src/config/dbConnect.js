import mongoose from "mongoose";

const conectaNaDatabase = async () => {
  mongoose.connect(process.env.DB_CONNECTION_STRING);

  return mongoose.connection;
};

export default conectaNaDatabase;
