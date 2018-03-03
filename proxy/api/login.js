const user = {
  id: 1,
  firstName: 'John',
  surname: 'Smith',
  dob: new Date('1973-01-18')
};

const successResponse = {
  message: 'Login request successful',
  user
};

const errorResponse = {
  message: 'Unable to validate Login request'
};

const isValid = request => {
  return true;
};

module.exports = (req, res) => {
  const request = req.body;
  console.log('Login Data: ', request);
  // Validate request first.
  if (isValid(request)) {
    console.log('Login Response: ', successResponse);
    res.json(successResponse);
  } else {
    // Invalid request, return Bad Request 400 Error.
    res.status(400);
    res.json(errorResponse);
  }
};
