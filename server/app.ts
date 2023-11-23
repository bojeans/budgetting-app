import express, { Request, Response } from "express";
import { Document } from "mongoose";
import { newModel } from "./routers/model";
import formatID from "./utils/formatID";

const app = express();
const json = express.json();

// Middleware
app.use(json);

// Routes

// Create (POST) a new data entry
app.post("/budget", async (req: Request, res: Response) => {
  try {
    const newData = await newModel.create(req.body);
    const formattedData = formatID(newData.toObject());
    res.status(201).json(formattedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error!!" });
  }
});

// Get all data entries
app.get("/budget", async (req: Request, res: Response) => {
  try {
    const data = await newModel.find();
    const transformedData = data.map((doc: Document) =>
      formatID(doc.toObject())
    );
    res.json(transformedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error!!" });
  }
});

// Get one data entry by ID
app.get("/budget/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await newModel.findById(id);

    if (!data) {
      return res.status(404).json({ error: "Data entry not found" });
    }

    const formattedData = formatID(data.toObject());
    res.json(formattedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error!!" });
  }
});

// Update (PUT/PATCH) a data entry by ID
app.put("/budget/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedData = await newModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedData) {
      return res.status(404).json({ error: "Data entry not found" });
    }

    const formattedData = formatID(updatedData.toObject());
    res.json(formattedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error!!" });
  }
});

// Delete a data entry by ID
app.delete("/budget/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedData = await newModel.findByIdAndDelete(id);

    if (!deletedData) {
      return res.status(404).json({ error: "Data entry not found" });
    }

    const formattedData = formatID(deletedData.toObject());
    res.json(formattedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error!!" });
  }
});

export default app;
