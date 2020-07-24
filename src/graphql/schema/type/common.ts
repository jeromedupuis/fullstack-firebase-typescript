export const CommonTypes = `
type Pagination {
  totalPage: Int
  currentPage: Int
  limit: Int
}

scalar Upload
`;

export const CommonEnums = `
enum OrderByEnum {
  ASC
  DESC
}
`;

export const CommonInputs = `
input PagingInput {
  limit: Int
  order: OrderByEnum
}
input DateRangeInput {
  startAt: Date
  endAt: Date
}

input PaginationInput {
  limit: Int
  page: Int
  order: OrderByEnum
}

input AvatarInput {
  pathname: String
  path: String
}
`;
