const express = require("express");
const Note = require("../models/notes");
const router = express.Router();

// Get /api/notes -Filter by Id
router.get("/", async (req, res) => {
  const { userId } = req.query;
  const filter = userId ? { userId } : {};
  const notes = await Note.find(filter).sort({ createdAt: -1 });
  res.json(notes);
});

//POST api/notes => create new entry - Optionally add Id
router.post("/", async (req, res) => {
  const { title, content, userId } = req.body;

  if (!title) return res.status(400).json({ message: "Please add a title" });

  const note = await Note.create({ title, content, userId });
  res.status(201).json(note);
});

//PUT api/Notes:id Update existing entry
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const updated = await Note.findByIdAndUpdate(
    id,
    { $set: { title, content } },
    { new: true }
  );
  if (!updated)
    return res.status(404).json({ message: "There is nothing to update" });
  res.json(updated);
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("DELETE ID:", req.params.id);

    const result = await Note.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.json({ ok: true });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
