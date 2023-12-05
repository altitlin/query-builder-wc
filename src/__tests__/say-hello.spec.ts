import { sayHello } from 'src'

describe('sayHello', () => {
  test('should say "Hello"', () => {
    expect(sayHello()).toBe('Hello')
  })
})
