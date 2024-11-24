export function handleControllerError(err, _, res) {
  console.log("ERROR : ", err.message);
  console.error("stacked error: ", err.stack);

  res.status(err.statusCode || 500).json({
    message: "An error occurred.",
  });
}
