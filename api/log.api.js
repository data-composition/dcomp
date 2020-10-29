import {Router} from 'express'
import {AsyncWrapper} from '../utils/asyncWrapper'
import Log from '../models/Log.model'


// initialize
const router = Router()

/**
 * Default Func for Controller
 */
export const initRouter = () => {
    const thisRouter = {
        baseUrl: '/api/log',
        router: router
    }

    router.post('/', log)
    return thisRouter
}

export const log = async (req, res) => {
    const payload = req.body

    const log = new Log()
    log.top = payload.top
    log.userId = payload.userId
    log.left = payload.left
    log.target = payload.target
    log.save()
    logger.debug(log)

    res.json({})
}
