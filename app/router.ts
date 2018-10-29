import { Application } from 'egg'

export default (app: Application) => {
    const { controller, router } = app

    router.post('/api/login', controller.api.login)

    router.get('/api/member/log', controller.api.memberLogList)

    router.get('/api/ignore/keyword', controller.api.ignoreList)
    router.post('/api/ignore/keyword', controller.api.addIgnoreKeyword)

    router.get('/', controller.home.index)
}
