const express = require("express");
const router = express.Router();
let items = require("./items");

router.get("/", (req, res) => {
  res.json(items);
});

router.post("/", (req, res) => {
  let itemToAdd = {
    name: req.body.name,
    price: req.body.price,
  };

  items.push(itemToAdd);
  res.json({ added: itemToAdd });
});

router.get("/:name", (req, res) => {
  const item = items.filter((val) => {
    if (val.name === req.params.name) {
      return val;
    }
  });
  res.json(item);
});

router.patch("/:name", (req, res) => {
  items = items.map((val) => {
    if (val.name === req.params.name) {
      val.name = req.body.name;
      val.price = req.body.price;
    }
    return val;
  });
  res.json(items);
});

router.delete("/:name", (req, res) => {
  const item = items.filter((val, index, arr) => {
    if (val.name === req.params.name) {
      items.splice(index, 1);
      return val;
    }
  });
  res.json({ removed: item });
});

module.exports = router;
