class ErrorHandler extends Error{
    constructor(message,statusCode){
    super(message);
    this.statusCode = statusCode

  Error.captureStrackTrace(this.this.constructor);

}}

module.exports = ErrorHandler