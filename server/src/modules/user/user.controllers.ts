import asyncHandler from '../../lib/asyncHandler';
import sendResponse from '../../lib/sendResponse';
import userServices from './user.services';

const register = asyncHandler(async (req, res) => {
  const user = await userServices.create(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'User registered successfully!',
    data: user,
  });
});

const getSingleUser = asyncHandler(async (req, res) => {
  const user = await userServices.getUser(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User retrieved successfully!',
    data: user,
  });
});

const userController = { register, getSingleUser };

export default userController;
