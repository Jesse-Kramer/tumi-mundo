import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["buddys/Benny.svg","buddys/Daisy.svg","buddys/Milo.svg","buddys/Percy.svg","buddys/Raymond.svg","characters/Rat.svg","favicon.png","home-background.png","icons/back-icon.svg","icons/clock.svg","icons/download.svg","icons/heart.svg","icons/play.svg","icons/profile-icon.svg","icons/search-icon.svg","languages/Dutch.svg","languages/English.svg","languages/French.svg","languages/German.svg","languages/Italian.svg","languages/Japanese.svg","languages/unknown.svg","log-in-background.png","playlist-header.svg","progress.svg","style.css"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".css":"text/css"},
	_: {
		client: {start:"_app/immutable/entry/start.WSwsYuCY.js",app:"_app/immutable/entry/app.w-5BHSQj.js",imports:["_app/immutable/entry/start.WSwsYuCY.js","_app/immutable/chunks/DvCvH34v.js","_app/immutable/chunks/CuFQ8tbw.js","_app/immutable/entry/app.w-5BHSQj.js","_app/immutable/chunks/CuFQ8tbw.js","_app/immutable/chunks/Ch-veJuz.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js')),
			__memo(() => import('../server/nodes/6.js')),
			__memo(() => import('../server/nodes/7.js')),
			__memo(() => import('../server/nodes/8.js')),
			__memo(() => import('../server/nodes/9.js')),
			__memo(() => import('../server/nodes/10.js')),
			__memo(() => import('../server/nodes/11.js')),
			__memo(() => import('../server/nodes/12.js')),
			__memo(() => import('../server/nodes/13.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/all-stories",
				pattern: /^\/all-stories\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/choose-buddy",
				pattern: /^\/choose-buddy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/languages",
				pattern: /^\/languages\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/lessons",
				pattern: /^\/lessons\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/lessons/delete/[id]",
				pattern: /^\/lessons\/delete\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/lessons/delete/_id_/_server.js'))
			},
			{
				id: "/like",
				pattern: /^\/like\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/like/_server.js'))
			},
			{
				id: "/log-in",
				pattern: /^\/log-in\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/onboarding",
				pattern: /^\/onboarding\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/playlist/[id]",
				pattern: /^\/playlist\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/profile-selection",
				pattern: /^\/profile-selection\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/profile",
				pattern: /^\/profile\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/sign-up",
				pattern: /^\/sign-up\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/story/[id]",
				pattern: /^\/story\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
