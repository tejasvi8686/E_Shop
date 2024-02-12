module.exports = (theFun) => (req,res,next) => {
    promise.resolve(theFun(req,res,next)).catch(next);
};