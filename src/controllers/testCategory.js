const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { testCategoryService } = require('../services');

const create = catchAsync(async (req, res) => {
  const result = await testCategoryService.create(req.body);
  res.status(httpStatus.CREATED).send(result);
});

const getList = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await testCategoryService.getList(filter, options);
  res.send(result);
});

const getById = catchAsync(async (req, res) => {
  const result = await testCategoryService.getById(req.params.categoryId);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Test category not found');
  }
  res.send(result);
});

const updateById = catchAsync(async (req, res) => {
  const result = await testCategoryService.updateById(req.params.categoryId, req.body);
  res.send(result);
});

const deleteById = catchAsync(async (req, res) => {
  await testCategoryService.deleteById(req.params.categoryId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  create,
  getList,
  getById,
  updateById,
  deleteById,
};
