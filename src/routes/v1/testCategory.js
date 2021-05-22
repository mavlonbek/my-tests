const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation');
const testCategoryController = require('../../controllers/testCategory');

const router = express.Router();

router
  .route('/')
  .post(auth('manageUsers'), validate(userValidation.createUser), testCategoryController.create)
  .get(auth('getUsers'), validate(userValidation.getUsers), testCategoryController.getList);

router
  .route('/:userId')
  .get(auth('getUsers'), validate(userValidation.getUser), testCategoryController.getById)
  .patch(auth('manageUsers'), validate(userValidation.updateUser), testCategoryController.updateById)
  .delete(auth('manageUsers'), validate(userValidation.deleteUser), testCategoryController.deleteById);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: TestCategories
 *   description: Test category management and retrieval
 */

/**
 * @swagger
 * /testCategories:
 *   post:
 *     summary: Create a test category
 *     description: Only admins can create other test categories.
 *     tags: [TestCategories]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - codeName
 *             properties:
 *               name:
 *                 type: string
 *               codeName:
 *                  type: string
 *                  enum: [dtm, avto, teacher]
 *             example:
 *               name: Matematika-2001/11
 *               codeName: dtm
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/TestCategory'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized' 
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "409":
 *         $ref: '#/components/responses/ConflictName'
 *
 *   get:
 *     summary: Get all test categories
 *     description: Only admins can retrieve all test categories.
 *     tags: [TestCategories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: User name
 *       - in: query
 *         name: codeName
 *         schema:
 *           type: string
 *         description: Test category code name
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: sort by query in the form of field:desc/asc (ex. name:asc)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of users
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/TestCategory'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /testCategories/{id}:
 *   get:
 *     summary: Get a test category
 *     description: All users can fetch this category.
 *     tags: [TestCategories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Test category id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/TestCategory'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a test category
 *     description: Logged in users can only get information. Only admins can update categories.
 *     tags: [TestCategories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Test category id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *             example:
 *               name: fake name
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/TestCategory'
 *       "400":
 *         $ref: '#/components/responses/ConflictName'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a test category
 *     description: Only admins can delete categories.
 *     tags: [TestCategories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Test category id
 *     responses:
 *       "200":
 *         description: No content
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
