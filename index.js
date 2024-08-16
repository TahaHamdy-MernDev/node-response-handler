const responseBody = require("./responseBody");
const responseCode = require("./responseCode");

const responseHandler = (req, res, next) => {
  /**
   * test commit
   * @param {*} data 
   */
  res.success = (data) => {
    res.status(responseCode.success).json(responseBody.success(data));
  };
  res.badRequest = (data) => {
    res.status(responseCode.badRequest).json(responseBody.badRequest(data));
  };
  res.internalServerError = (data) => {
    res
      .status(responseCode.internalServerError)
      .json(responseBody.internalServerError(data));
  };
  res.recordNotFound = (data) => {
    res
      .status(responseCode.recordNotFound)
      .json(responseBody.recordNotFound(data));
  };
  res.conflict = (data) => {
    res.status(responseCode.conflict).json(responseBody.conflict(data));
  };
  res.validationError = (data) => {
    res
      .status(responseCode.validationError)
      .json(responseBody.validationError(data));
  };
  res.unauthorized = (data) => {
    res.status(responseCode.unauthorized).json(responseBody.unauthorized(data));
  };
  res.forbidden = (data) => {
    res.status(responseCode.forbidden).json(responseBody.forbidden(data));
  };
  next();
};

module.exports = responseHandler;
