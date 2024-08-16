const responseMessages = {
  success: "Your request is successfully executed",
  failure: "Some error occurred while performing action.",
  internalServerError: "Internal server error.",
  badRequest: "Request parameters are invalid or missing.",
  recordNotFound: `Sorry, can't find this!!!`,
  validationError: "Invalid Data, Validation Failed.",
  unauthorized: "You are not authorized to access the request",
  forbidden:
    "You do not have the necessary permissions to access this resource.",
  conflict: `The request could not be completed due to a conflict with the current state.`,
};
module.exports = responseMessages;
