export const UserTypes = `
type User {
  _id: String!
  email: String!
  password: String
  profile: UserProfile
  privacy: UserPrivacy
  sns: UserSns
  isAdmin: Boolean
}

type UserProfile {
  firstname: String!
  lastname: String!
  avatar: String
  birthday: Date
  age: Int
  country: String
  city: String
  gender: Int
  hobbies: String
  occupation: String
  introduction: String
}

type UserPrivacy {
  avatar: Int
  email: Int
  country: Int
  city: Int
  birthday: Int
  gender: Int
  hobbies: Int
  occupation: Int
  introduction: Int
}

type UserSns {
  facebook: Int
}

type UserVisitor {
  _id: String!
  userId: String!
  user: User
}

type Me {
  token: String
  user: User
  unreadNotificationCount: Int
}

type GetUsersResult {
  users: [User]
  pagination: Pagination
}

type PasswordRecoveryResult {
  success: Boolean!
}

type VerifyPasswordRecoveryCodeResult {
  valid: Boolean!
}

type RecoveryPasswordUpdateResult {
  updated: Boolean!
}

type GetVisitorsResult {
  visitors: [UserVisitor]
  count: Int!
}

type UserSignupSnsCheckResult {
  status: String!
  user: User
}
`;

export const UserInputs = `
input UserLoginInput {
  email: String!
  password: String!
  rememberMe: Boolean
}

input UserLoginWithSnsInput {
  sns: String!
  id: String!
}

input UserCreateInput {
  firstname: String!
  lastname: String!
  email: String!
  password: String!
}

input GetUsersFilters {
  active: Boolean
  keywords: String
}

input UpdateUserProfileInput {
  userId: String!
  firstname: String!
  lastname: String!
  country: String
  city: String
  birthday: Date
  gender: Int
  hobbies: String
  occupation: String
  introduction: String
}

input UpdateUserConfidentialityInput {
  userId: String!
  gender: Int
  country: Int
  city: Int
  hobbies: Int
  occupation: Int
  introduction: Int
  birthday: Int
  email: Int
  avatar: Int
}

input UpdateUserPasswordInput {
  userId: String!
  currentPassword: String!
  newPassword: String!
}

input UpdateUserEmailInput {
  userId: String!
  currentPassword: String!
  email: String!
}

input SetPasswordRecoveryCodeInput {
  email: String!
}

input RecoveryPasswordUpdateInput {
  code: String!
  email: String!
  password: String!
}

input UserSignupSnsCheckInput {
  email: String!
  id: String!
  sns: String!
}

input UserSnsLinkAccountAndLoginInput {
  email: String!
  sns: String!
  id: String!
  password:  String!
}

input UserSignupWithSnsAndLoginInput {
  email: String!
  firstname: String!
  lastname: String!
  password:  String!
  avatar: String
  sns: String!
  id: String!
}
`;
