const ErrorHandler = require("../utils/ErrorHandler");
module.exports = (err, req, res, next) => {
  err.statusCode = err.StatusCode || 500;
  err.message = err.message || "Internal server Error";

  // wrong mongodb id error
  if (err.name === "CastError") {
    const message = `Resources not found with tis id.. Invalid ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  //duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate key ${object.key(err.keyvalue)} Enterd`;
    err = new ErrorHandler(message, 400);
  }

  // wring jwt error
  if ((err, name === "JsonWebTokenError")) {
    const message = `Your url invalid try again later`;
    err = new ErrorHandler(message, 400);
  }

  //jwt expired
  if (err.name === "TokenExpiredError") {
    const message = `Your url is expired try again later`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err).statusCode.json({
    sucess: false,
    message: err.message,
  });
};
