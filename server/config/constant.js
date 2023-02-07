
const USER_CONSTANTS = {
  INVALID_CREDENTIALS: "Invalid email or password.",
  INVALID_PASSWORD: "Invalid password",
  USER_NOT_FOUND: "User not found",
  USER_FOUND: "User's found",
  EMAIL_ALREADY_EXISTS: "Email already registered",
  MOBILE_EMAIL_ALREADY_EXISTS: "Email or mobile already registered",
  MOBILE_ALREADY_EXISTS: "Phone no. is already registered",
  USERNAME_ALREADY_EXISTS: "Username already taken, please choose another username.",
  LOGGED_IN: "Logged in successfully",
  REGISTERED_SUCCESSFULLY: "You have Registered successfully , Kindly verify your email to Login.",
  DELETED_USER: "User deleted successfully",
  PASSWORD_RESET_SUCCESS: "Password resetted successfully",
  VERIFICATION_SUCCESS: "Your details have been verified succesfully.",
  EDIT_SUCCESS: "User Edited Successfully.",
  INVALID_USER: "User not found",
  VALID_USER: "User  found successfully ",
  INVALID_REFERRAL_CODE: "Referral code is Invalid/Expired.",
};
const EMPLOYEE_CONSTANTS = {
  REGISTERED_SUCCESSFULLY: "Account Created Successfully",
  EMAIL_ALREADY_EXISTS: "Email Already Exists",
  INVALID_ID: "Invalid EmployeeID",
  EMPLOYEES_FOUND: "Employees found successfully",
  EMPLOYEE_FOUND: "Employee found successfully",
  EMPLOYEE_UPDATED: "Employee updated successfully",
  EMPLOYEE_DELETED: "Employee deleted successfully",
};
const MIDDLEWARE_AUTH_CONSTANTS = {
  ACCESS_DENIED: "Access denied. No authorization token provided",
  RESOURCE_FORBIDDEN: "You don't have access to the request resource.",
  INVALID_AUTH_TOKEN: "Invalid token",
};
const AUTH_CONSTANTS = {
  INVALID_USER: "INVALID_USER",
  INVALID_CREDENTIALS: "Your credentials are incorrect, Try again",
  INVALID_PASSWORD: "You have entered incorrect password. Please try again with valid password.",
  CHANGE_PASSWORD_REQUEST_SUCCESS: "Password recovery link has been sent to your registered email.",
  CHANGE_PASSWORD_REQUEST_EMAIL_FAILURE: "Email sending failed due to some application issue.",
  INVALID_EMAIL: "The email provided is not registered. Please sign up to continue.",
  INVALID_RECOVERY_LINK: "Password link expired or not valid.",
  PASSWORD_CHANGE_SUCCESS: "Password changed successfully",
  INVALID_OTP: "Invalid OTP passed",
  INVALID_MOBILE: "No user found with given mobile.",
  MOBILE_REQUIRED: '"mobile" is required',
  OTP_TOKEN_REQUIRED: '"otpToken" is required',
  OLD_NEW_PASSWORD_NOTSAME: "Old password and new password must not be same",
  INACTIVE_ACCOUNT: "Your account is currently deactivated",
  NOTVERIFY_ACCOUNT: "Your account is currently not verified",
};

module.exports.USER_CONSTANTS = USER_CONSTANTS;
module.exports.EMPLOYEE_CONSTANTS = EMPLOYEE_CONSTANTS;
module.exports.MIDDLEWARE_AUTH_CONSTANTS = MIDDLEWARE_AUTH_CONSTANTS;
module.exports.AUTH_CONSTANTS = AUTH_CONSTANTS;


