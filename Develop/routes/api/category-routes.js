const router = require('express').Router();
const { Category, Product } = require('../../models');

// this route will GET all categories
router.get("/", (req, res) => {
  Category.findAll({ include: [Product] })
  .then((data) => res.json(data))
  .catch((error) => res.json(error));
});

// this route is to GET a category by its `id` value
router.get("/:id", (req, res) => {
  Category.findOne(req.params.id, { include: [Product] })
  .then((data) => res.json(data))
  .catch((error) => res.json(error));
});

// this post route is to CREATE a new category
router.post("/", (req, res) => {
  Category.create(req.body)
  .then((data) => res.json(data))
  .catch((error) => res.json(error));
});

// this route will UPDATE a category by its `id` value
router.put("/:id", (req, res) => {
  Category.update({
    id: req.body.id,
    category_name: req.body.category_name,
  },
{
  where: {
    id: req.params.id,
  },
})
.then((data) => res.json(data))
.catch((error) => res.json(error));
});

// this route is to DELETE a category by its `id` value
router.delete("/:id", (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((data) => res.json(data))
  .catch((error) => res.json(error));
});

module.exports = router;
