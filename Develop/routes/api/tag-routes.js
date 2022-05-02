const router = require('express').Router();
const {
  Tag,
  Product,
  ProductTag
} = require('../../models');

// this route will GET all tags
router.get("/", (req, res) => {
  Tag.findAll({
      include: [Product]
    })
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
});

// this route will GET a tag by its `id` value
router.get("/:id", (req, res) => {
  Tag.findOne(req.params.id, {
      include: [Product]
    })
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
});

// this route will CREATE a tag by its `id` value
router.post("/", (req, res) => {
  Tag.create(req.body)
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
});

// this route will UPDATE a tag's name by its `id` value
router.put("/:id", (req, res) => {
  Tag.update({
      id: req.body.id,
      tag_name: req.body.tag_name,
    },
    {
      where: {
        id: req.params.id,
      },
    })
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
});

// this route will DELETE a single tag by its `id` value
router.delete("/:id", (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    },
  })
  .then((data) => res.json(data))
  .catch((error) => res.json(error));
});

module.exports = router;
