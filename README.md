# Unhandled Promise Rejection in Express.js Route

This example demonstrates a common error in Express.js applications: unhandled promise rejections in asynchronous route handlers.  Failure to properly handle errors in `async/await` or `.then().catch()` blocks can lead to application crashes without informative error messages.

The `bug.js` file showcases this issue. The `someAsyncOperation()` function simulates an asynchronous operation that can throw an error.  However, the route handler lacks proper error handling, resulting in a silent crash.

The `bugSolution.js` file provides a corrected version with comprehensive error handling.