import mongoose from "mongoose";

class DatabaseConnection {
  public connection: any;

  constructor() {
    this.connect();
  }

  public async connect(): Promise<void> {
    this.connection = await mongoose.connect("mongodb://localhost/3lm", {
      useNewUrlParser: true,
    });
  }
}

export default new DatabaseConnection().connection;
