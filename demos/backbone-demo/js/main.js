(function(){

	window.App={
		Models:{},
		Collections:{},
		Views:{},
		Router:{}
	};

	App.Router=Backbone.Router.extend({
		routes:{
			'':'index',
			'show/:id':'show',
			'download/*randow':'download',
			'search/:query':'search',
			'*other':'default'
		},
		index:function () {
			$(document.body).append('调用了Index路由<br>');
		},
		show:function (id) {
			$(document.body).append('调用了Show路由，id为：'+id+'<br>');
		},
		download:function (randow) {
			$(document.body).append('调用了Download路由，randow为：'+randow+'<br>');
		},
		search:function (query) {
			$(document.body).append('调用了Search路由,query为：'+query+'<br>');
		},
		default:function (other) {
			$(document.body).append('访问的'+other+'路由，未定义<br>');
		}
	});

	new App.Router();
	Backbone.history.start();
})();