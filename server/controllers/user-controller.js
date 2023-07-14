const UserService = require('../services/user-service')
const { validationResult } = require('express-validator')
const ApiError = require('../exceptions/api-error')
class UserController {
  async userRegistration(req, res, next) {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
      }
      const { email, password } = req.body
      const userData = await UserService.registation(email, password)
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      })
      return res.json(userData)
    } catch (error) {
      next(error)
    }
  }
  async userLogin(req, res, next) {
    try {
    } catch (error) {
      next(error)
    }
  }
  async userLogout(req, res, next) {
    try {
    } catch (error) {
      next(error)
    }
  }
  async activateLink(req, res, next) {
    try {
    } catch (error) {
      next(error)
    }
  }
  async getRefreshToken(req, res, next) {
    try {
    } catch (error) {
      next(error)
    }
  }
  async getUsers(req, res, next) {
    try {
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new UserController()
