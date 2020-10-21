import {Router} from 'express'
import {AsyncWrapper} from '../utils/asyncWrapper'
import Transaction from '../models/Transaction.model'

// initialize
const router = Router()

/**
 * Default Func for Controller
 */
export const initRouter = () => {
    const thisRouter = {
        baseUrl: '/api/trs',
        router: router
    }

    router.get('/', AsyncWrapper(getTrs))
    return thisRouter
}

export const getTrs = async (req, res, next) => {
    logger.debug('test getUsers')
    // Transaction.paginate({}, {limit: 10}, (err, result) => {
    //     console.log(result)
    //     res.json(result)
    // })
    const result = await Transaction.findOne().exec()
    console.log(result)

}

