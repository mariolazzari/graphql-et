import mongoose from "mongoose";

async function connectMongo() {
  try {
    await mongoose.connect("mongodb://localhost:27017/widgets");
    console.log("Mongo connected");
  } catch (error) {
    console.error("Error Mongo connection", error);
  }
}

connectMongo();

const widgetSchema = new mongoose.Schema({
  name: String,
  description: String,
  prince: Number,
  soldount: String,
  inventory: String,
  stores: Array,
});

export const Widget = mongoose.model("widgets", widgetSchema);
