const router = require("express").Router();
const plantsController = require("../../controllers/plantsController");

// Matches with "/api/books"
router.route("/")
  .get(plantsController.findAll)
  .post(plantsController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
