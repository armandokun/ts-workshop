const transformUser = ({ id, email, first_name, last_name, avatar }) => ({
  id,
  email,
  firstName: first_name,
  lastName: last_name,
  avatar
})

export const transformUsers = (users) => users.map(transformUser)
