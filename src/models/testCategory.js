const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON, paginate } = require('./plugins');

const testCategorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    }
  },
  {
    timestamps: true
  }
);

// add plugin that converts mongoose to json
testCategorySchema.plugin(toJSON);
testCategorySchema.plugin(paginate);

/**
 * @typedef TestCategory
 */
const TestCategory = mongoose.model('TestCategory', testCategorySchema);

module.exports = TestCategory;
