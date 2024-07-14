//How to create a higher order Function:
//const asyncHandler = () => {}
//const asyncHandler = (func) => () => {}
//const asyncHandler = (func) => async () => {} 

// const asyncHandler = (func) => async (err, req, res, next) => {
//     try{
//         await func(err, req, res, next)
//     }
//     catch(error) {
//             res.status(err.code || 500).json({
//                 flag: false,
//                 message: err.message
//             })
//         }
//     }
const asyncHandler = (requestHandler) => {
    (err, req, res, next) => {
      Promise.resolve(requestHandler(err, req, res, next))
      .catch((err) => next(err))
    }
}
export {asyncHandler};