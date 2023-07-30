export interface User {
  email: string
  password: string
}

const fakeUsers: User[] = [
  {
    email: 'admin@gmail.com',
    password: 'admin123',
  },
  {
    email: 'user@gmail.com',
    password: 'user123',
  },
]
