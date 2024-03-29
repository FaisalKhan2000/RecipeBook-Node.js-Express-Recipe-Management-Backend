import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (error, req, res, next) => {
  console.log(error);
  const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const message = error.message || "something went wrong, tru again later";

  res.status(statusCode).json({ msg: message });
  next();
};

export default errorHandlerMiddleware;
