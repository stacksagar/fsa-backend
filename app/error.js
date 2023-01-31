function notFoundHandler(_req, _res, next) {
  const error = new Error("Resource Not Found");
  error.status = 404;
  next(error);
}

function errorHandler(error, _req, res, _next) {
  if (error?.status) {
    return res.status(error.status).json({
      message: error?.message,
    });
  }
  return res.status(500).json({ message: "Something went wrong!" });
}

module.exports = { notFoundHandler, errorHandler };
