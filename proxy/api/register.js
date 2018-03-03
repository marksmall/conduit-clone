const user = {
  id: 1,
  firstName: 'John',
  surname: 'Smith',
  dob: new Date('1973-01-18')
};

const successResponse = {
  message: 'Registration request successful',
  user
};

const errorResponse = {
  message: 'Unable to validate Registration request'
};

const isValid = request => {
  return true;
};

module.exports = (req, res) => {
  const request = req.body;
  // Validate request first.
  if (isValid(request)) {
    console.log('Registration Data: ', request);
    res.json(successResponse);
  } else {
    // Invalid request, return Bad Request 400 Error.
    res.status(400);
    res.json(errorResponse);
  }
};
