// https://blog.csdn.net/liuqiao0327/article/details/105237077

/**
 * @api {post} /todos 添加待办事项
 * @apiDescription 添加待办事项
 * @apiName 添加待办事项
 * @apiGroup todos
 * @apiParam (body) {String} title 待办事项标题
 * @apiParam (body) {String} completed 待办事项的完成状态
 *
 * @apiSuccess {Number} code 错误状态码.
 * @apiSuccess {String} msg  错误消息.
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "0",
 *      "msg" : "注册成功"
 *
 *  }
 * @apiSampleRequest /todos
 * @apiVersion 1.0.0
 */
function test() {}

/**
 * @api {post} http://localhost:3000/login 用户登录
 * @apiDescription 用户登录
 * @apiName login
 * @apiGroup User
 * @apiParam (body) {String} email 用户邮箱
 * @apiParam (body) {String} password 用户密码
 *
 * @apiSuccess {Number} code 错误状态码.
 * @apiSuccess {String} msg  错误消息.
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "0",
 *      "msg" : "注册成功"
 *
 *  }
 * @apiSampleRequest http://localhost:3000/register
 * @apiVersion 1.0.0
 */
function test2() {}
