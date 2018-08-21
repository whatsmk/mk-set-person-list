import webapi from './webapi'

var _options = {
	webapi,
	webapiMap: {
		'ui.person.list.init': '/v1/ui/person/list/init',
		'department.query': '/v1/set/department/query',
		'department.queryTree': '/v1/set/department/queryTree',
		'department.del':'/v1/set/department/delete',
		'person.query': '/v1/set/person/query',
		'person.queryPageList': '/v1/set/person/queryPageList',
		'person.del': '/v1/set/person/delete',
		'person.delBatch': '/v1/set/person/deleteBatch'
	}
}

function config(options) {
	if (options) {
		Object.assign(_options, options)
	}
}

config.current = _options

export default config