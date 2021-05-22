const httpStatus = require('http-status');
const { TestCategory } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a test category
 * @param {Object} body
 * @returns {Promise<TestCategory>}
 */
const create = async (body) => {
  const category = await TestCategory.create(body);
  return category;
};

/**
 * Query for categories
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getList = async (filter, options) => {
  const categories = await TestCategory.paginate(filter, options);
  return categories;
};

/**
 * Get test category by id
 * @param {ObjectId} id
 * @returns {Promise<TestCategory>}
 */
const getById = async (id) => {
  return TestCategory.findById(id);
};

/**
 * Get test category by name
 * @param {string} name
 * @returns {Promise<TestCategory>}
 */
const getByName = async (name) => {
  return TestCategory.findOne({ name });
};

/**
 * Update test category by id
 * @param {ObjectId} categoryId
 * @param {Object} body
 * @returns {Promise<TestCategory>}
 */
const updateById = async (categoryId, body) => {
  const category = await getById(categoryId);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Test category not found');
  }

  if (await getByName(body.name)) {
    throw new ApiError(httpStatus.CONFLICT, 'Conflict category name');
  }

  Object.assign(category, body);
  await category.save();
  return category;
};

/**
 * Delete test category by id
 * @param {ObjectId} categoryId
 * @returns {Promise<TestCategory>}
 */
const deleteById = async (categoryId) => {
  const category = await getById(categoryId);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Test category not found');
  }
  await category.remove();
  return category;
};

module.exports = {
  create,
  getList,
  getById,
  getByName,
  updateById,
  deleteById,
};
