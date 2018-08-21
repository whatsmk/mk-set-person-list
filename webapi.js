/**
 * webapi.js 封装app所需的所有web请求
 * 供app测试使用，app加入网站后webpai应该由网站通过config,提供给每个app
 */


import { fetch } from 'mk-utils'
import config from './config'

const api = key => config.current.webapiMap[key]

export default {
    init:  (option) => fetch.post(api('ui.person.list.init'), option),
    person: {
        queryPageList: option => fetch.post(api('person.queryPageList'), option),
        query: option => fetch.post(api('person.query'), option),
        del: option => fetch.post(api('person.del'), option),
        delBatch: option => fetch.post(api('person.delBatch'), option),
    },
    department: {
        query: option => fetch.post(api('department.query'), option),
        queryTree: option => fetch.post(api('department.queryTree'), option),
        del: option  => fetch.post(api('department.del'), option),
    }
}