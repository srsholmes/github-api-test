export default {
  get: jest.fn().mockResolvedValue({
    items: [
      {
        login: 'username'
      }
    ]
  })
}
