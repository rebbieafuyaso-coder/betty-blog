globalThis.process ??= {};
globalThis.process.env ??= {};
// node_modules/astro/dist/env/runtime.js
var _getEnv = (key) => process.env[key];
function setGetEnv(fn) {
	_getEnv = fn;
	_onSetGetEnv();
}
var _onSetGetEnv = () => {};
function setOnSetGetEnv(fn) {
	_onSetGetEnv = fn;
}
function getEnv(...args) {
	return _getEnv(...args);
}
export { setGetEnv as n, setOnSetGetEnv as r, getEnv as t };

//# sourceMappingURL=runtime_DBdAVI9U.mjs.map