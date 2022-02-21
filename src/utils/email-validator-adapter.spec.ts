import { EmailValidatorAdapter } from './email-validator'

describe('EmailValidator Adapter', () => {
  it('Shoud retunr false if validator returns false', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('invalid_email@mail.com')
    expect(isValid).toBe(false)
  })
})
