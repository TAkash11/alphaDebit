// Import Config
import i18n from '../config/i18n'
// Import Static

// Import Middleware

// Import Controllers

// Import Interface

// Import Validators

// Import Helpers

// Import Transformers

// Import Libraries

// Import Models

// Import Thirdparty
import statusCodes from 'http-status-codes'
class Authorization {
  /*
  * 😎 @author : Akash Thakkar
  * 🚩 @uses : to validate the login
  * 🗓 Created : 21/4/2022
  */
  async validateLogin(container:any) {
    try {
      if (container.output &&container.output.error && Object.keys(container.output.error).length) {
        const err:any = new Error(container.output.error.message)
        err.statusCode = container.output.error.code
        throw err
      } else {
        if (!container.derived.user) {
          const err:any = new Error(i18n.__('auth.wrong_credentials'))
          err.statusCode = statusCodes.UNAUTHORIZED
          throw err
        }
      }

      return true
    } catch (error) {
      throw error
    }
  }
}
export default new Authorization()
