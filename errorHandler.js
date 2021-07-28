/* Log General Errors and provide it to next middleware */
function logErrors (err, req, res, next) {
    console.error(err.stack)
    next(err)
  }
/* log XHR request errors */
function clientErrorHandler (err, req, res, next) {
    if (req.xhr) {
      res.status(500).json({status:'error', message: 'Something failed!' })
    } else {
      next(err)
    }
  }
/* catch all errors and provide status and error */
function errorHandler (err, req, res, next) {
    res.status(500)
    res.json({status:'error', message: err })
  }

module.exports = {
    logErrors,clientErrorHandler,errorHandler
}