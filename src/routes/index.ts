// Import Config
import i18n from '../config/i18n'

// Import Thirdparty
import express from 'express'

// Import Routes
import auth from '../app/auth/route/auth.route'

const app = express.Router()

app.get('/v1/ping', function(req, res) {
  res.send(i18n.__('welcome_msg'))
})

const path = '/v1'

// path v1 routes
app.use(path + '/auth', auth)

export default app
