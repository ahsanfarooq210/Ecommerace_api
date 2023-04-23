import User from "../models/User";


/**
 * This function registers a new user by creating a new User object with the provided username, email,
 * and password, and saves it to the database.
 * @param req - req stands for request and it is an object that contains information about the HTTP
 * request that was made, such as the request headers, request parameters, request body, etc. It is
 * passed as the first parameter to the registerUser function.
 * @param res - `res` is the response object that is sent back to the client after the server has
 * processed the request. It contains information such as the status code, headers, and response body.
 * In this code snippet, `res` is used to send a response back to the client with a status code of
 */
export const registerUser = async (req, res) => {
    //TODO: handle the bad data cases here
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    const response = await newUser.save();
    console.log(response);
    res.status(201).send(response);
  } catch (error) {
    res.status(500).json(error);
  }
};
