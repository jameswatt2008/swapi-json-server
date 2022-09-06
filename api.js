// https://blog.csdn.net/liuqiao0327/article/details/105237077

/**
 * @api {post} /todos 添加待办事项
 * @apiDescription 添加待办事项
 * @apiName 添加待办事项
 * @apiGroup todos
 * @apiParam (body) {String} title 待办事项标题
 * @apiParam (body) {String} completed 待办事项的完成状态
 * @apiParamExample  {body} Request-Example:
 * /todos
 * 请求体中
 * {
 *     title: "ceshi",
 *     completed: "1",
 * }
 *
 * @apiSuccess {Number} id 待办事件的id.
 * @apiSuccess {String} title  待办事项标题.
 * @apiSuccess {String} completed  待办事项的完成状态.
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "id" : "2",
 *      "title" : "测试标题"
 *      "completed" : 1
 *
 *  }
 * @apiSampleRequest /todos
 * @apiVersion 1.0.0
 */
function test1() {}

/**
 * @api {get} /todos 获取所有待办事项
 * @apiDescription 获取所有待办事项
 * @apiName 获取所有待办事项
 * @apiGroup todos
 * @apiParamExample  {get} Request-Example:
 * /todos/1
 * @apiSuccess {Number} id 待办事件的id.
 * @apiSuccess {String} title  待办事项标题.
 * @apiSuccess {String} completed  待办事项的完成状态.
 * @apiSuccessExample {json} Success-Response:
 *  [{
 *      "id" : "2",
 *      "title" : "测试标题"
 *      "completed" : 1
 *
 *  }]
 * @apiSampleRequest /todos
 * @apiVersion 1.0.0
 */
function test2() {}

/**
 * @api {get} /todos/:id 获取对应id的待办事项
 * @apiDescription 获取对应id的待办事项
 * @apiName 获取对应id的待办事项
 * @apiGroup todos
 * @apiParam {String} id 待办事项的id
 * @apiSuccess {Number} id 待办事件的id.
 * @apiSuccess {String} title  待办事项标题.
 * @apiSuccess {String} completed  待办事项的完成状态.
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "id" : "2",
 *      "title" : "测试标题"
 *      "completed" : 1
 *
 *  }
 * @apiSampleRequest /todos
 * @apiVersion 1.0.0
 */
function test3() {}

/**
 * @api {delete} /todos/:id 删除对应id的待办事项
 * @apiDescription 删除对应id的待办事项
 * @apiName 删除对应id的待办事项
 * @apiGroup todos
 * @apiParam {String} id 待办事项的id
 * @apiSuccess {Number} id 待办事件的id.
 * @apiSuccess {String} title  待办事项标题.
 * @apiSuccess {String} completed  待办事项的完成状态.
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "id" : "2",
 *      "title" : "测试标题"
 *      "completed" : 1
 *
 *  }
 * @apiSampleRequest /todos
 * @apiVersion 1.0.0
 */
function test4() {}

/**
 * @api {patch} /todos/:id 修改对应id的待办事项
 * @apiDescription 修改对应id的待办事项
 * @apiName 修改对应id的待办事项 测试
 * @apiGroup todos
 * @apiParam {String} id 待办事项的id，放入url中
 * @apiParam {String} title 待办事项的title，放入请求体中
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "id" : "2",
 *      "title" : "测试标题"
 *      "completed" : 1
 *
 *  }
 * @apiSampleRequest /todos
 * @apiVersion 1.0.0
 */
function test5() {}
