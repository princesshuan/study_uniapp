(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createPlugin = createPlugin;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 4);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var realAtob;

var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;

if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");}

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;var result = '';var r1;var r2;var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 |
      (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));

      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) :
      r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) :
      String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // ??????atob??????????????????????????????????????????`const Base64 = {atob};Base64.atob('xxxx')`??????????????????
  realAtob = atob;
}

function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0 };

  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('?????????????????????????????????????????????????????????' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}

function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {var _getCurrentUserInfo =


    getCurrentUserInfo(),role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {var _getCurrentUserInfo2 =


    getCurrentUserInfo(),permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {var _getCurrentUserInfo3 =


    getCurrentUserInfo(),tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  } };


var SYNC_API_RE =
/^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context????????????
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// ??????????????????
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime ??????????????? uni ???????????????????????????????????? uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

function getLocale() {
  // ???????????? $locale
  var app = getApp({
    allowDefault: true });

  if (app && app.$vm) {
    return app.$vm.$locale;
  }
  return wx.getSystemInfoSync().language || 'zh-Hans';
}

function setLocale(locale) {
  var app = getApp();
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {return fn({
        locale: locale });});

    return true;
  }
  return false;
}

var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}

if (typeof global !== 'undefined') {
  global.getLocale = getLocale;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale,
  setLocale: setLocale,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function addUuid(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId });

  }
  result.deviceId = deviceId;
}

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}

var getSystemInfo = {
  returnValue: function returnValue(result) {
    addUuid(result);
    addSafeAreaInsets(result);
  } };


// import navigateTo from 'uni-helpers/navigate-to'

var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // ?????????????????????????????????????????????????????????__id__???????????????????????????mp-weixin??????navigateTo???AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo };

var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// ?????? api ???????????????
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue ??? false ???????????????????????????????????????????????????????????????????????????
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// ??????????????????
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {// ???????????? key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}????????????????????? key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// ???????????? returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// ??????????????? api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {// ?????? api ??????????????????
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// ?????? api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options, isComponent) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;

  Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // ?????? Vue.prototype ???????????????
    } catch (e) {
      if (Object({"VUE_APP_NAME":"study","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('?????? Vue ??? data ???????????????????????? data ???????????????????????? data ?????????????????? vm ??????????????????????????????????????????????????????', data);
      }
    }
  } else {
    try {
      // ??? data ?????????
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // ????????????????????? render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // ?????????????????????????????????????????????
    properties.generic = {
      type: Object,
      value: null };

    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: '' };

    properties.vueSlots = { // ??????????????????????????? $slots ??? props??????????????? vueSlots ????????? $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO ???????????? mpvue ??? mp ??????
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for ???????????????????????????', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent ????????????????????? event ??????
  if (isCustom) {// ???????????????
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// ???????????????????????? event ??? detail ??????
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent ?????????????????????
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // ???????????? scoped slots ??????????????????????????????????????????
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('?????????????????????');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // ????????? web-view ?????? dataset ?????????
  if (!eventOpts) {
    return console.warn('?????????????????????');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao ?????????????????? scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          params = Array.isArray(params) ? params : [];
          // ??????????????????????????????????????????????????????????????????????????????
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var messages = {};

var locale;

{
  locale = wx.getSystemInfoSync().language;
}

function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}

initI18nMessages();

var i18n = (0, _uniI18n.initVueI18n)(
locale,
{});

var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {var _this2 = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this2.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    } } };


var setLocale$1 = i18n.setLocale;
var getLocale$1 = i18n.getLocale;

function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale() });

  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {return watch(v);});
    } });

}

function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}

// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

var eventChannels = {};

var eventChannelStack = [];

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // ???????????????????????????getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}

function initScopedSlotsParams() {
  var center = {};
  var parents = {};

  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return has;
  };

  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
  };

  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      var object = center[vueId] = center[vueId] || {};
      object[name] = value;
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    }
  };

  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    } });

}

function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {// hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// ?????????????????????????????????????????????????????? onShow ??? onLaunch ??????
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {// ?????? ???2.2.3 ????????????????????? 2.3.0 ??? nextTick ??????
          console.error('?????????????????????????????????????????? ?????????????????????-??????-????????????-????????????????????? ?????????`2.3.0`??????');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm ???????????? globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // ??????????????? globalData
  appOptions.globalData = vm.$options.globalData || {};
  // ??? methods ?????????????????? getApp() ???
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initAppLocale(_vue.default, vm, wx.getSystemInfoSync().language || 'zh-Hans');

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // ??????????????????(????????????:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // ??????????????????
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector);
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || component;
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO ???????????? for ?????? scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail ?????????,value ?????????(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // ?????? multipleSlots ??????????????? bug??????????????????????????? ??? u-list?????????????????????
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // ??????????????????
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // ????????? vue ??????
        this.$vm = new VueComponent(options);

        // ??????$slots,$scopedSlots???????????????????????????$slots???
        initSlots(this.$vm, properties.vueSlots);

        // ???????????? setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // ????????? props ???????????? true????????????????????? false ????????? created,ready ??????, ??? attached ?????????
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // ?????? mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true });

  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {args[_key7] = arguments[_key7];}
      appOptions.onShow.apply(vm, args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {args[_key8] = arguments[_key8];}
      appOptions.onHide.apply(vm, args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    appOptions.onLaunch.call(vm, args);
  }
  return vm;
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 11:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 12:
/*!*****************************************!*\
  !*** H:/work-project/study/mock/api.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var Mock = __webpack_require__(/*! mockjs */ 13);
var Random = Mock.Random;

function getAdverts() {
  var res = Mock.mock({
    status: 200,
    message: '????????????????????????',
    'data|3': [{ // 5-10????????????5~10?????????
      'id|+1': 1,
      'image': "https://picsum.photos/400/200",
      "link": 'https://www.baidu.com' }] });


  // ????????????
  // console.log(JSON.stringify(res))
  // fn(res);
  return res;
}
function getFeeds() {var _ref;
  var res = Mock.mock({
    status: 200,
    message: '????????????????????????',
    'data|10-15': [(_ref = { // 5-10????????????5~10?????????
      'id|+1': 1,
      name: '@cword(2,3)', // ?????????????????????word??????????????????
      'cover|1': ['https://picsum.photos/180/150', "https://picsum.photos/250/250"],
      // cover:'@image()',
      feed_content: '@ctitle(5,10)',
      avatar: "https://picsum.photos/200/200" }, _defineProperty(_ref, "name",
    '@cname(2,4)'), _defineProperty(_ref,
    'has_like|1', [false, true]), _defineProperty(_ref, "feed_comment_count",
    '@integer(0,2000)'), _defineProperty(_ref, "like_count",
    '@integer(0,2000)'), _ref)] });


  return res;
}
function getNews() {
  var res = Mock.mock({
    status: 200,
    message: '????????????????????????',
    'data|10-15': [{ // 5-10????????????5~10?????????
      'id|+1': 1,
      title: '@ctitle(10,20)',
      author: '@cname(2,4)',
      created_at: '@datetime()',
      cover: "https://picsum.photos/200/100" }] });


  return res;
}
function getImage() {
  var res = Mock.mock({
    status: 200,
    message: '????????????????????????',
    'data|20-35': [{ // 5-10????????????5~10?????????
      'id|+1': 1,
      name: '@cword(2,3)',
      'cover|1': ['https://picsum.photos/180/150', "https://picsum.photos/250/250", "https://picsum.photos/200/100"] }] });


  return res;
}

function feedInfo(name) {
  var res = Mock.mock({
    status: 200,
    message: '????????????????????????',
    'data': {
      id: 1,
      name: name,
      avatar: "https://picsum.photos/200/100",
      feed_content: '@ctitle(10,20)',
      images: ['https://picsum.photos/180/150', "https://picsum.photos/250/250", "https://picsum.photos/200/100"],
      created_at: '@datetime()',
      feed_view_count: '@integer(0,200)',
      feed_comment_count: '@integer(0,20)',
      'has_like|1': [false, true],
      like_count: '@integer(0,200)' } });


  return res;
}

function newInfo(name) {
  var res = Mock.mock({
    status: 200,
    message: '????????????????????????',
    'data': {
      id: 1,
      cover: "https://picsum.photos/200/100",
      title: '@ctitle(10,20)',
      author: name,
      created_at: '@datetime()',
      views_count: '@integer(0,200)',
      content: '@cparagraph(300,400)',
      digg_count: '@integer(0,20)',
      comment_count: '@integer(0,20)',
      'has_like|1': [false, true] } });



  return res;
}

function getFeedComments() {
  var res = Mock.mock({
    status: 200,
    message: '????????????????????????',
    'data|5-10': [{
      'id|+1': 1,
      body: '@ctitle(10,20)',
      user: {
        avatar: {
          url: "https://picsum.photos/200/100" },

        name: '@cname(2,3)' },

      created_at: '@datetime()' }] });


  return res;
}
function getNewComments() {
  var res = Mock.mock({
    status: 200,
    message: '????????????????????????',
    'data|5-10': [{
      'id|+1': 1,
      body: '@ctitle(10,20)',
      user: {
        avatar: {
          url: 'https://picsum.photos/200/100' },

        name: '@cname(2,3)' },

      created_at: '@datetime()' }] });


  return res;
}

function getUserMsg() {
  var res = Mock.mock({
    status: 200,
    message: '????????????????????????',
    'data|5-10': {
      user: {
        liked: '',
        commented: '',
        name: '@cname(2,3)' },

      created_at: '@datetime()' } });


  return res;
}

module.exports = {
  getAdverts: getAdverts,
  getFeeds: getFeeds,
  getNews: getNews,
  getImage: getImage,
  feedInfo: feedInfo,
  newInfo: newInfo,
  getFeedComments: getFeedComments,
  getNewComments: getNewComments,
  getUserMsg: getUserMsg };

/***/ }),

/***/ 13:
/*!**************************************************************!*\
  !*** H:/work-project/study/node_modules/mockjs/dist/mock.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true)
  module.exports = factory();else
  {}
})(this, function () {
  return (/******/function (modules) {// webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};

      /******/ // The require function
      /******/function __webpack_require__(moduleId) {

        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId])
          /******/return installedModules[moduleId].exports;

        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/exports: {},
          /******/id: moduleId,
          /******/loaded: false
          /******/ };

        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

        /******/ // Flag the module as loaded
        /******/module.loaded = true;

        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/}


      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;

      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;

      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";

      /******/ // Load entry module and return exports
      /******/return __webpack_require__(0);
      /******/}(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports, __webpack_require__) {

      /* global require, module, window */
      var Handler = __webpack_require__(1);
      var Util = __webpack_require__(3);
      var Random = __webpack_require__(5);
      var RE = __webpack_require__(20);
      var toJSONSchema = __webpack_require__(23);
      var valid = __webpack_require__(25);

      var XHR;
      if (typeof window !== 'undefined') XHR = __webpack_require__(27);

      /*!
                                                                            Mock - ???????????? & ????????????
                                                                            https://github.com/nuysoft/Mock
                                                                            ?????? mozhi.gyy@taobao.com nuysoft@gmail.com
                                                                        */
      var Mock = {
        Handler: Handler,
        Random: Random,
        Util: Util,
        XHR: XHR,
        RE: RE,
        toJSONSchema: toJSONSchema,
        valid: valid,
        heredoc: Util.heredoc,
        setup: function setup(settings) {
          return XHR.setup(settings);
        },
        _mocked: {} };


      Mock.version = '1.0.1-beta3';

      // ??????????????????
      if (XHR) XHR.Mock = Mock;

      /*
                                    * Mock.mock( template )
                                    * Mock.mock( function() )
                                    * Mock.mock( rurl, template )
                                    * Mock.mock( rurl, function(options) )
                                    * Mock.mock( rurl, rtype, template )
                                    * Mock.mock( rurl, rtype, function(options) )
                                
                                    ???????????????????????????????????????
                                */
      Mock.mock = function (rurl, rtype, template) {
        // Mock.mock(template)
        if (arguments.length === 1) {
          return Handler.gen(rurl);
        }
        // Mock.mock(rurl, template)
        if (arguments.length === 2) {
          template = rtype;
          rtype = undefined;
        }
        // ?????? XHR
        if (XHR) window.XMLHttpRequest = XHR;
        Mock._mocked[rurl + (rtype || '')] = {
          rurl: rurl,
          rtype: rtype,
          template: template };

        return Mock;
      };

      module.exports = Mock;

      /***/},
    /* 1 */
    /***/function (module, exports, __webpack_require__) {

      /* 
                                                              ## Handler
                                                          
                                                              ?????????????????????
                                                              
                                                              * Handler.gen( template, name?, context? )
                                                          
                                                                  ???????????????
                                                          
                                                              * Data Template Definition, DTD
                                                                  
                                                                  ???????????????????????????
                                                          
                                                                  * Handler.array( options )
                                                                  * Handler.object( options )
                                                                  * Handler.number( options )
                                                                  * Handler.boolean( options )
                                                                  * Handler.string( options )
                                                                  * Handler.function( options )
                                                                  * Handler.regexp( options )
                                                                  
                                                                  ????????????????????????????????????
                                                          
                                                                  * Handler.getValueByKeyPath( key, options )
                                                          
                                                              * Data Placeholder Definition, DPD
                                                          
                                                                  ???????????????????????????
                                                          
                                                                  * Handler.placeholder( placeholder, context, templateContext, options )
                                                          
                                                          */

      var Constant = __webpack_require__(2);
      var Util = __webpack_require__(3);
      var Parser = __webpack_require__(4);
      var Random = __webpack_require__(5);
      var RE = __webpack_require__(20);

      var Handler = {
        extend: Util.extend };


      /*
                                   template        ??????????????????????????????
                                   name            ?????????
                                   context         ????????????????????????????????????
                                   templateContext ??????????????????
                               
                                   Handle.gen(template, name, options)
                                   context
                                       currentContext, templateCurrentContext, 
                                       path, templatePath
                                       root, templateRoot
                               */
      Handler.gen = function (template, name, context) {
        /* jshint -W041 */
        name = name == undefined ? '' : name + '';

        context = context || {};
        context = {
          // ????????????????????????????????????????????????????????????
          path: context.path || [Constant.GUID],
          templatePath: context.templatePath || [Constant.GUID++],
          // ???????????????????????????
          currentContext: context.currentContext,
          // ???????????????????????????
          templateCurrentContext: context.templateCurrentContext || template,
          // ???????????????
          root: context.root || context.currentContext,
          // ????????????
          templateRoot: context.templateRoot || context.templateCurrentContext || template };

        // console.log('path:', context.path.join('.'), template)

        var rule = Parser.parse(name);
        var type = Util.type(template);
        var data;

        if (Handler[type]) {
          data = Handler[type]({
            // ???????????????
            type: type,
            // ???????????????
            template: template,
            // ????????? + ????????????
            name: name,
            // ?????????
            parsedName: name ? name.replace(Constant.RE_KEY, '$1') : name,

            // ????????????????????????
            rule: rule,
            // ???????????????
            context: context });


          if (!context.root) context.root = data;
          return data;
        }

        return template;
      };

      Handler.extend({
        array: function array(options) {
          var result = [],
          i,ii;

          // 'name|1': []
          // 'name|count': []
          // 'name|min-max': []
          if (options.template.length === 0) return result;

          // 'arr': [{ 'email': '@EMAIL' }, { 'email': '@EMAIL' }]
          if (!options.rule.parameters) {
            for (i = 0; i < options.template.length; i++) {
              options.context.path.push(i);
              options.context.templatePath.push(i);
              result.push(
              Handler.gen(options.template[i], i, {
                path: options.context.path,
                templatePath: options.context.templatePath,
                currentContext: result,
                templateCurrentContext: options.template,
                root: options.context.root || result,
                templateRoot: options.context.templateRoot || options.template }));


              options.context.path.pop();
              options.context.templatePath.pop();
            }
          } else {
            // 'method|1': ['GET', 'POST', 'HEAD', 'DELETE']
            if (options.rule.min === 1 && options.rule.max === undefined) {
              // fix #17
              options.context.path.push(options.name);
              options.context.templatePath.push(options.name);
              result = Random.pick(
              Handler.gen(options.template, undefined, {
                path: options.context.path,
                templatePath: options.context.templatePath,
                currentContext: result,
                templateCurrentContext: options.template,
                root: options.context.root || result,
                templateRoot: options.context.templateRoot || options.template }));


              options.context.path.pop();
              options.context.templatePath.pop();
            } else {
              // 'data|+1': [{}, {}]
              if (options.rule.parameters[2]) {
                options.template.__order_index = options.template.__order_index || 0;

                options.context.path.push(options.name);
                options.context.templatePath.push(options.name);
                result = Handler.gen(options.template, undefined, {
                  path: options.context.path,
                  templatePath: options.context.templatePath,
                  currentContext: result,
                  templateCurrentContext: options.template,
                  root: options.context.root || result,
                  templateRoot: options.context.templateRoot || options.template })[

                options.template.__order_index % options.template.length];


                options.template.__order_index += +options.rule.parameters[2];

                options.context.path.pop();
                options.context.templatePath.pop();

              } else {
                // 'data|1-10': [{}]
                for (i = 0; i < options.rule.count; i++) {
                  // 'data|1-10': [{}, {}]
                  for (ii = 0; ii < options.template.length; ii++) {
                    options.context.path.push(result.length);
                    options.context.templatePath.push(ii);
                    result.push(
                    Handler.gen(options.template[ii], result.length, {
                      path: options.context.path,
                      templatePath: options.context.templatePath,
                      currentContext: result,
                      templateCurrentContext: options.template,
                      root: options.context.root || result,
                      templateRoot: options.context.templateRoot || options.template }));


                    options.context.path.pop();
                    options.context.templatePath.pop();
                  }
                }
              }
            }
          }
          return result;
        },
        object: function object(options) {
          var result = {},
          keys,fnKeys,key,parsedKey,inc,i;

          // 'obj|min-max': {}
          /* jshint -W041 */
          if (options.rule.min != undefined) {
            keys = Util.keys(options.template);
            keys = Random.shuffle(keys);
            keys = keys.slice(0, options.rule.count);
            for (i = 0; i < keys.length; i++) {
              key = keys[i];
              parsedKey = key.replace(Constant.RE_KEY, '$1');
              options.context.path.push(parsedKey);
              options.context.templatePath.push(key);
              result[parsedKey] = Handler.gen(options.template[key], key, {
                path: options.context.path,
                templatePath: options.context.templatePath,
                currentContext: result,
                templateCurrentContext: options.template,
                root: options.context.root || result,
                templateRoot: options.context.templateRoot || options.template });

              options.context.path.pop();
              options.context.templatePath.pop();
            }

          } else {
            // 'obj': {}
            keys = [];
            fnKeys = []; // #25 ?????????????????????????????????????????????????????????
            for (key in options.template) {
              (typeof options.template[key] === 'function' ? fnKeys : keys).push(key);
            }
            keys = keys.concat(fnKeys);

            /*
                                            ?????????????????????????????????
                                            keys = Util.keys(options.template)
                                            keys.sort(function(a, b) {
                                                var afn = typeof options.template[a] === 'function'
                                                var bfn = typeof options.template[b] === 'function'
                                                if (afn === bfn) return 0
                                                if (afn && !bfn) return 1
                                                if (!afn && bfn) return -1
                                            })
                                        */

            for (i = 0; i < keys.length; i++) {
              key = keys[i];
              parsedKey = key.replace(Constant.RE_KEY, '$1');
              options.context.path.push(parsedKey);
              options.context.templatePath.push(key);
              result[parsedKey] = Handler.gen(options.template[key], key, {
                path: options.context.path,
                templatePath: options.context.templatePath,
                currentContext: result,
                templateCurrentContext: options.template,
                root: options.context.root || result,
                templateRoot: options.context.templateRoot || options.template });

              options.context.path.pop();
              options.context.templatePath.pop();
              // 'id|+1': 1
              inc = key.match(Constant.RE_KEY);
              if (inc && inc[2] && Util.type(options.template[key]) === 'number') {
                options.template[key] += parseInt(inc[2], 10);
              }
            }
          }
          return result;
        },
        number: function number(options) {
          var result, parts;
          if (options.rule.decimal) {// float
            options.template += '';
            parts = options.template.split('.');
            // 'float1|.1-10': 10,
            // 'float2|1-100.1-10': 1,
            // 'float3|999.1-10': 1,
            // 'float4|.3-10': 123.123,
            parts[0] = options.rule.range ? options.rule.count : parts[0];
            parts[1] = (parts[1] || '').slice(0, options.rule.dcount);
            while (parts[1].length < options.rule.dcount) {
              parts[1] +=
              // ????????????????????? 0???????????????????????? 0????????? JS ??????????????????
              parts[1].length < options.rule.dcount - 1 ? Random.character('number') : Random.character('123456789');

            }
            result = parseFloat(parts.join('.'), 10);
          } else {// integer
            // 'grade1|1-100': 1,
            result = options.rule.range && !options.rule.parameters[2] ? options.rule.count : options.template;
          }
          return result;
        },
        boolean: function boolean(options) {
          var result;
          // 'prop|multiple': false, ????????????????????????????????????
          // 'prop|probability-probability': false, ??????????????????????????????
          result = options.rule.parameters ? Random.bool(options.rule.min, options.rule.max, options.template) : options.template;
          return result;
        },
        string: function string(options) {
          var result = '',
          i,placeholders,ph,phed;
          if (options.template.length) {

            //  'foo': '???',
            /* jshint -W041 */
            if (options.rule.count == undefined) {
              result += options.template;
            }

            // 'star|1-5': '???',
            for (i = 0; i < options.rule.count; i++) {
              result += options.template;
            }
            // 'email|1-10': '@EMAIL, ',
            placeholders = result.match(Constant.RE_PLACEHOLDER) || []; // A-Z_0-9 > \w_
            for (i = 0; i < placeholders.length; i++) {
              ph = placeholders[i];

              // ?????????????????????????????????????????????
              if (/^\\/.test(ph)) {
                placeholders.splice(i--, 1);
                continue;
              }

              phed = Handler.placeholder(ph, options.context.currentContext, options.context.templateCurrentContext, options);

              // ????????????????????????????????????????????????
              if (placeholders.length === 1 && ph === result && typeof phed !== typeof result) {// 
                result = phed;
                break;

                if (Util.isNumeric(phed)) {
                  result = parseFloat(phed, 10);
                  break;
                }
                if (/^(true|false)$/.test(phed)) {
                  result = phed === 'true' ? true :
                  phed === 'false' ? false :
                  phed; // ??????????????????
                  break;
                }
              }
              result = result.replace(ph, phed);
            }

          } else {
            // 'ASCII|1-10': '',
            // 'ASCII': '',
            result = options.rule.range ? Random.string(options.rule.count) : options.template;
          }
          return result;
        },
        'function': function _function(options) {
          // ( context, options )
          return options.template.call(options.context.currentContext, options);
        },
        'regexp': function regexp(options) {
          var source = '';

          // 'name': /regexp/,
          /* jshint -W041 */
          if (options.rule.count == undefined) {
            source += options.template.source; // regexp.source
          }

          // 'name|1-5': /regexp/,
          for (var i = 0; i < options.rule.count; i++) {
            source += options.template.source;
          }

          return RE.Handler.gen(
          RE.Parser.parse(
          source));


        } });


      Handler.extend({
        _all: function _all() {
          var re = {};
          for (var key in Random) {re[key.toLowerCase()] = key;}
          return re;
        },
        // ????????????????????????????????????
        placeholder: function placeholder(_placeholder, obj, templateContext, options) {
          // console.log(options.context.path)
          // 1 key, 2 params
          Constant.RE_PLACEHOLDER.exec('');
          var parts = Constant.RE_PLACEHOLDER.exec(_placeholder),
          key = parts && parts[1],
          lkey = key && key.toLowerCase(),
          okey = this._all()[lkey],
          params = parts && parts[2] || '';
          var pathParts = this.splitPathToArray(key);

          // ????????????????????????
          try {
            // 1. ???????????????????????????
            /*
                #24 [Window Firefox 30.0 ?????? ????????? ??????](https://github.com/nuysoft/Mock/issues/24)
                [BX9056: ??????????????? window.eval ????????????????????????????????????](http://www.w3help.org/zh-cn/causes/BX9056)
                ???????????? Window Firefox 30.0 ??? BUG
            */
            /* jshint -W061 */
            params = eval('(function(){ return [].splice.call(arguments, 0 ) })(' + params + ')');
          } catch (error) {
            // 2. ???????????????????????????????????????
            // console.error(error)
            // if (error instanceof ReferenceError) params = parts[2].split(/,\s*/);
            // else throw error
            params = parts[2].split(/,\s*/);
          }

          // ?????????????????????????????????????????????
          if (obj && key in obj) return obj[key];

          // @index @key
          // if (Constant.RE_INDEX.test(key)) return +options.name
          // if (Constant.RE_KEY.test(key)) return options.name

          // ???????????? or ????????????
          if (
          key.charAt(0) === '/' ||
          pathParts.length > 1)
          return this.getValueByKeyPath(key, options);

          // ????????????????????????????????????
          if (templateContext &&
          typeof templateContext === 'object' &&
          key in templateContext &&
          _placeholder !== templateContext[key] // fix #15 ????????????????????????
          ) {
              // ??????????????????????????????
              templateContext[key] = Handler.gen(templateContext[key], key, {
                currentContext: obj,
                templateCurrentContext: templateContext });

              return templateContext[key];
            }

          // ?????????????????????????????????
          if (!(key in Random) && !(lkey in Random) && !(okey in Random)) return _placeholder;

          // ?????????????????????????????????
          for (var i = 0; i < params.length; i++) {
            Constant.RE_PLACEHOLDER.exec('');
            if (Constant.RE_PLACEHOLDER.test(params[i])) {
              params[i] = Handler.placeholder(params[i], obj, templateContext, options);
            }
          }

          var handle = Random[key] || Random[lkey] || Random[okey];
          switch (Util.type(handle)) {
            case 'array':
              // ???????????????????????????????????? @areas
              return Random.pick(handle);
            case 'function':
              // ??????????????????????????????????????????
              handle.options = options;
              var re = handle.apply(Random, params);
              if (re === undefined) re = ''; // ?????????????????????????????????????????????????????????
              delete handle.options;
              return re;}

        },
        getValueByKeyPath: function getValueByKeyPath(key, options) {
          var originalKey = key;
          var keyPathParts = this.splitPathToArray(key);
          var absolutePathParts = [];

          // ????????????
          if (key.charAt(0) === '/') {
            absolutePathParts = [options.context.path[0]].concat(
            this.normalizePath(keyPathParts));

          } else {
            // ????????????
            if (keyPathParts.length > 1) {
              absolutePathParts = options.context.path.slice(0);
              absolutePathParts.pop();
              absolutePathParts = this.normalizePath(
              absolutePathParts.concat(keyPathParts));


            }
          }

          try {
            key = keyPathParts[keyPathParts.length - 1];
            var currentContext = options.context.root;
            var templateCurrentContext = options.context.templateRoot;
            for (var i = 1; i < absolutePathParts.length - 1; i++) {
              currentContext = currentContext[absolutePathParts[i]];
              templateCurrentContext = templateCurrentContext[absolutePathParts[i]];
            }
            // ???????????????????????????
            if (currentContext && key in currentContext) return currentContext[key];

            // ???????????????????????????????????????????????????
            if (templateCurrentContext &&
            typeof templateCurrentContext === 'object' &&
            key in templateCurrentContext &&
            originalKey !== templateCurrentContext[key] // fix #15 ????????????????????????
            ) {
                // ??????????????????????????????
                templateCurrentContext[key] = Handler.gen(templateCurrentContext[key], key, {
                  currentContext: currentContext,
                  templateCurrentContext: templateCurrentContext });

                return templateCurrentContext[key];
              }
          } catch (err) {}

          return '@' + keyPathParts.join('/');
        },
        // https://github.com/kissyteam/kissy/blob/master/src/path/src/path.js
        normalizePath: function normalizePath(pathParts) {
          var newPathParts = [];
          for (var i = 0; i < pathParts.length; i++) {
            switch (pathParts[i]) {
              case '..':
                newPathParts.pop();
                break;
              case '.':
                break;
              default:
                newPathParts.push(pathParts[i]);}

          }
          return newPathParts;
        },
        splitPathToArray: function splitPathToArray(path) {
          var parts = path.split(/\/+/);
          if (!parts[parts.length - 1]) parts = parts.slice(0, -1);
          if (!parts[0]) parts = parts.slice(1);
          return parts;
        } });


      module.exports = Handler;

      /***/},
    /* 2 */
    /***/function (module, exports) {

      /*
                                         ## Constant
                                     
                                         ???????????????
                                      */
      /*
                                             RE_KEY
                                                 'name|min-max': value
                                                 'name|count': value
                                                 'name|min-max.dmin-dmax': value
                                                 'name|min-max.dcount': value
                                                 'name|count.dmin-dmax': value
                                                 'name|count.dcount': value
                                                 'name|+step': value
                                         
                                                 1 name, 2 step, 3 range [ min, max ], 4 drange [ dmin, dmax ]
                                         
                                             RE_PLACEHOLDER
                                                 placeholder(*)
                                         
                                             [??????????????????](http://www.regexper.com/)
                                         
                                             #26 ???????????? ?????? ??????????????? number|-100-100
                                         */
      module.exports = {
        GUID: 1,
        RE_KEY: /(.+)\|(?:\+(\d+)|([\+\-]?\d+-?[\+\-]?\d*)?(?:\.(\d+-?\d*))?)/,
        RE_RANGE: /([\+\-]?\d+)-?([\+\-]?\d+)?/,
        RE_PLACEHOLDER: /\\*@([^@#%&()\?\s]+)(?:\((.*?)\))?/g
        // /\\*@([^@#%&()\?\s\/\.]+)(?:\((.*?)\))?/g
        // RE_INDEX: /^index$/,
        // RE_KEY: /^key$/
      };

      /***/},
    /* 3 */
    /***/function (module, exports) {

      /*
                                         ## Utilities
                                     */
      var Util = {};

      Util.extend = function extend() {
        var target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        options,name,src,copy,clone;

        if (length === 1) {
          target = this;
          i = 0;
        }

        for (; i < length; i++) {
          options = arguments[i];
          if (!options) continue;

          for (name in options) {
            src = target[name];
            copy = options[name];

            if (target === copy) continue;
            if (copy === undefined) continue;

            if (Util.isArray(copy) || Util.isObject(copy)) {
              if (Util.isArray(copy)) clone = src && Util.isArray(src) ? src : [];
              if (Util.isObject(copy)) clone = src && Util.isObject(src) ? src : {};

              target[name] = Util.extend(clone, copy);
            } else {
              target[name] = copy;
            }
          }
        }

        return target;
      };

      Util.each = function each(obj, iterator, context) {
        var i, key;
        if (this.type(obj) === 'number') {
          for (i = 0; i < obj; i++) {
            iterator(i, i);
          }
        } else if (obj.length === +obj.length) {
          for (i = 0; i < obj.length; i++) {
            if (iterator.call(context, obj[i], i, obj) === false) break;
          }
        } else {
          for (key in obj) {
            if (iterator.call(context, obj[key], key, obj) === false) break;
          }
        }
      };

      Util.type = function type(obj) {
        return obj === null || obj === undefined ? String(obj) : Object.prototype.toString.call(obj).match(/\[object (\w+)\]/)[1].toLowerCase();
      };

      Util.each('String Object Array RegExp Function'.split(' '), function (value) {
        Util['is' + value] = function (obj) {
          return Util.type(obj) === value.toLowerCase();
        };
      });

      Util.isObjectOrArray = function (value) {
        return Util.isObject(value) || Util.isArray(value);
      };

      Util.isNumeric = function (value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
      };

      Util.keys = function (obj) {
        var keys = [];
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) keys.push(key);
        }
        return keys;
      };
      Util.values = function (obj) {
        var values = [];
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) values.push(obj[key]);
        }
        return values;
      };

      /*
             ### Mock.heredoc(fn)
         
             * Mock.heredoc(fn)
         
             ?????????????????????????????????????????????HTML ?????????
         
             **????????????**???????????????
         
                 var tpl = Mock.heredoc(function() {
                     /*!
                 {{email}}{{age}}
                 <!-- Mock { 
                     email: '@EMAIL',
                     age: '@INT(1,100)'
                 } -->
                     *\/
                 })
             
             **????????????**
             * [Creating multiline strings in JavaScript](http://stackoverflow.com/questions/805107/creating-multiline-strings-in-javascript)???
         */
      Util.heredoc = function heredoc(fn) {
        // 1. ??????????????? function(){ /*!
        // 2. ??????????????? */ }
        // 3. ??????????????????????????????
        return fn.toString().
        replace(/^[^\/]+\/\*!?/, '').
        replace(/\*\/[^\/]+$/, '').
        replace(/^[\s\xA0]+/, '').replace(/[\s\xA0]+$/, ''); // .trim()
      };

      Util.noop = function () {};

      module.exports = Util;

      /***/},
    /* 4 */
    /***/function (module, exports, __webpack_require__) {

      /*
                                                          	## Parser
                                                          
                                                          	??????????????????????????????????????????
                                                          
                                                          	* Parser.parse( name )
                                                          		
                                                          		```json
                                                          		{
                                                          			parameters: [ name, inc, range, decimal ],
                                                          			rnage: [ min , max ],
                                                          
                                                          			min: min,
                                                          			max: max,
                                                          			count : count,
                                                          
                                                          			decimal: decimal,
                                                          			dmin: dmin,
                                                          			dmax: dmax,
                                                          			dcount: dcount
                                                          		}
                                                          		```
                                                           */

      var Constant = __webpack_require__(2);
      var Random = __webpack_require__(5);

      /* jshint -W041 */
      module.exports = {
        parse: function parse(name) {
          name = name == undefined ? '' : name + '';

          var parameters = (name || '').match(Constant.RE_KEY);

          var range = parameters && parameters[3] && parameters[3].match(Constant.RE_RANGE);
          var min = range && range[1] && parseInt(range[1], 10); // || 1
          var max = range && range[2] && parseInt(range[2], 10); // || 1
          // repeat || min-max || 1
          // var count = range ? !range[2] && parseInt(range[1], 10) || Random.integer(min, max) : 1
          var count = range ? !range[2] ? parseInt(range[1], 10) : Random.integer(min, max) : undefined;

          var decimal = parameters && parameters[4] && parameters[4].match(Constant.RE_RANGE);
          var dmin = decimal && decimal[1] && parseInt(decimal[1], 10); // || 0,
          var dmax = decimal && decimal[2] && parseInt(decimal[2], 10); // || 0,
          // int || dmin-dmax || 0
          var dcount = decimal ? !decimal[2] && parseInt(decimal[1], 10) || Random.integer(dmin, dmax) : undefined;

          var result = {
            // 1 name, 2 inc, 3 range, 4 decimal
            parameters: parameters,
            // 1 min, 2 max
            range: range,
            min: min,
            max: max,
            // min-max
            count: count,
            // ????????? decimal
            decimal: decimal,
            dmin: dmin,
            dmax: dmax,
            // dmin-dimax
            dcount: dcount };


          for (var r in result) {
            if (result[r] != undefined) return result;
          }

          return {};
        } };


      /***/},
    /* 5 */
    /***/function (module, exports, __webpack_require__) {

      /*
                                                              ## Mock.Random
                                                              
                                                              ?????????????????????????????????????????????
                                                          */

      var Util = __webpack_require__(3);

      var Random = {
        extend: Util.extend };


      Random.extend(__webpack_require__(6));
      Random.extend(__webpack_require__(7));
      Random.extend(__webpack_require__(8));
      Random.extend(__webpack_require__(10));
      Random.extend(__webpack_require__(13));
      Random.extend(__webpack_require__(15));
      Random.extend(__webpack_require__(16));
      Random.extend(__webpack_require__(17));
      Random.extend(__webpack_require__(14));
      Random.extend(__webpack_require__(19));

      module.exports = Random;

      /***/},
    /* 6 */
    /***/function (module, exports) {

      /*
                                         ## Basics
                                     */
      module.exports = {
        // ?????????????????????????????????
        boolean: function boolean(min, max, cur) {
          if (cur !== undefined) {
            min = typeof min !== 'undefined' && !isNaN(min) ? parseInt(min, 10) : 1;
            max = typeof max !== 'undefined' && !isNaN(max) ? parseInt(max, 10) : 1;
            return Math.random() > 1.0 / (min + max) * min ? !cur : cur;
          }

          return Math.random() >= 0.5;
        },
        bool: function bool(min, max, cur) {
          return this.boolean(min, max, cur);
        },
        // ????????????????????????????????????????????? 0 ???????????????
        natural: function natural(min, max) {
          min = typeof min !== 'undefined' ? parseInt(min, 10) : 0;
          max = typeof max !== 'undefined' ? parseInt(max, 10) : 9007199254740992; // 2^53
          return Math.round(Math.random() * (max - min)) + min;
        },
        // ??????????????????????????????
        integer: function integer(min, max) {
          min = typeof min !== 'undefined' ? parseInt(min, 10) : -9007199254740992;
          max = typeof max !== 'undefined' ? parseInt(max, 10) : 9007199254740992; // 2^53
          return Math.round(Math.random() * (max - min)) + min;
        },
        int: function int(min, max) {
          return this.integer(min, max);
        },
        // ?????????????????????????????????
        float: function float(min, max, dmin, dmax) {
          dmin = dmin === undefined ? 0 : dmin;
          dmin = Math.max(Math.min(dmin, 17), 0);
          dmax = dmax === undefined ? 17 : dmax;
          dmax = Math.max(Math.min(dmax, 17), 0);
          var ret = this.integer(min, max) + '.';
          for (var i = 0, dcount = this.natural(dmin, dmax); i < dcount; i++) {
            ret +=
            // ????????????????????? 0???????????????????????? 0????????? JS ??????????????????
            i < dcount - 1 ? this.character('number') : this.character('123456789');

          }
          return parseFloat(ret, 10);
        },
        // ???????????????????????????
        character: function character(pool) {
          var pools = {
            lower: 'abcdefghijklmnopqrstuvwxyz',
            upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            number: '0123456789',
            symbol: '!@#$%^&*()[]' };

          pools.alpha = pools.lower + pools.upper;
          pools['undefined'] = pools.lower + pools.upper + pools.number + pools.symbol;

          pool = pools[('' + pool).toLowerCase()] || pool;
          return pool.charAt(this.natural(0, pool.length - 1));
        },
        char: function char(pool) {
          return this.character(pool);
        },
        // ??????????????????????????????
        string: function string(pool, min, max) {
          var len;
          switch (arguments.length) {
            case 0: // ()
              len = this.natural(3, 7);
              break;
            case 1: // ( length )
              len = pool;
              pool = undefined;
              break;
            case 2:
              // ( pool, length )
              if (typeof arguments[0] === 'string') {
                len = min;
              } else {
                // ( min, max )
                len = this.natural(pool, min);
                pool = undefined;
              }
              break;
            case 3:
              len = this.natural(min, max);
              break;}


          var text = '';
          for (var i = 0; i < len; i++) {
            text += this.character(pool);
          }

          return text;
        },
        str: function str() /*pool, min, max*/{
          return this.string.apply(this, arguments);
        },
        // ???????????????????????????
        range: function range(start, stop, step) {
          // range( stop )
          if (arguments.length <= 1) {
            stop = start || 0;
            start = 0;
          }
          // range( start, stop )
          step = arguments[2] || 1;

          start = +start;
          stop = +stop;
          step = +step;

          var len = Math.max(Math.ceil((stop - start) / step), 0);
          var idx = 0;
          var range = new Array(len);

          while (idx < len) {
            range[idx++] = start;
            start += step;
          }

          return range;
        } };


      /***/},
    /* 7 */
    /***/function (module, exports) {

      /*
                                         ## Date
                                     */
      var patternLetters = {
        yyyy: 'getFullYear',
        yy: function yy(date) {
          return ('' + date.getFullYear()).slice(2);
        },
        y: 'yy',

        MM: function MM(date) {
          var m = date.getMonth() + 1;
          return m < 10 ? '0' + m : m;
        },
        M: function M(date) {
          return date.getMonth() + 1;
        },

        dd: function dd(date) {
          var d = date.getDate();
          return d < 10 ? '0' + d : d;
        },
        d: 'getDate',

        HH: function HH(date) {
          var h = date.getHours();
          return h < 10 ? '0' + h : h;
        },
        H: 'getHours',
        hh: function hh(date) {
          var h = date.getHours() % 12;
          return h < 10 ? '0' + h : h;
        },
        h: function h(date) {
          return date.getHours() % 12;
        },

        mm: function mm(date) {
          var m = date.getMinutes();
          return m < 10 ? '0' + m : m;
        },
        m: 'getMinutes',

        ss: function ss(date) {
          var s = date.getSeconds();
          return s < 10 ? '0' + s : s;
        },
        s: 'getSeconds',

        SS: function SS(date) {
          var ms = date.getMilliseconds();
          return ms < 10 && '00' + ms || ms < 100 && '0' + ms || ms;
        },
        S: 'getMilliseconds',

        A: function A(date) {
          return date.getHours() < 12 ? 'AM' : 'PM';
        },
        a: function a(date) {
          return date.getHours() < 12 ? 'am' : 'pm';
        },
        T: 'getTime' };

      module.exports = {
        // ????????????????????????
        _patternLetters: patternLetters,
        // ????????????????????????
        _rformat: new RegExp(function () {
          var re = [];
          for (var i in patternLetters) {re.push(i);}
          return '(' + re.join('|') + ')';
        }(), 'g'),
        // ??????????????????
        _formatDate: function _formatDate(date, format) {
          return format.replace(this._rformat, function creatNewSubString($0, flag) {
            return typeof patternLetters[flag] === 'function' ? patternLetters[flag](date) :
            patternLetters[flag] in patternLetters ? creatNewSubString($0, patternLetters[flag]) :
            date[patternLetters[flag]]();
          });
        },
        // ????????????????????? Date ?????????
        _randomDate: function _randomDate(min, max) {// min, max
          min = min === undefined ? new Date(0) : min;
          max = max === undefined ? new Date() : max;
          return new Date(Math.random() * (max.getTime() - min.getTime()));
        },
        // ???????????????????????????????????????
        date: function date(format) {
          format = format || 'yyyy-MM-dd';
          return this._formatDate(this._randomDate(), format);
        },
        // ???????????????????????????????????????
        time: function time(format) {
          format = format || 'HH:mm:ss';
          return this._formatDate(this._randomDate(), format);
        },
        // ????????????????????????????????????????????????
        datetime: function datetime(format) {
          format = format || 'yyyy-MM-dd HH:mm:ss';
          return this._formatDate(this._randomDate(), format);
        },
        // ??????????????????????????????????????????
        now: function now(unit, format) {
          // now(unit) now(format)
          if (arguments.length === 1) {
            // now(format)
            if (!/year|month|day|hour|minute|second|week/.test(unit)) {
              format = unit;
              unit = '';
            }
          }
          unit = (unit || '').toLowerCase();
          format = format || 'yyyy-MM-dd HH:mm:ss';

          var date = new Date();

          /* jshint -W086 */
          // ????????? http://momentjs.cn/docs/#/manipulating/start-of/
          switch (unit) {
            case 'year':
              date.setMonth(0);
            case 'month':
              date.setDate(1);
            case 'week':
            case 'day':
              date.setHours(0);
            case 'hour':
              date.setMinutes(0);
            case 'minute':
              date.setSeconds(0);
            case 'second':
              date.setMilliseconds(0);}

          switch (unit) {
            case 'week':
              date.setDate(date.getDate() - date.getDay());}


          return this._formatDate(date, format);
        } };


      /***/},
    /* 8 */
    /***/function (module, exports, __webpack_require__) {

      /* WEBPACK VAR INJECTION */(function (module) {/* global document  */
        /*
                                                                                ## Image
                                                                            */
        module.exports = {
          // ?????????????????????
          _adSize: [
          '300x250', '250x250', '240x400', '336x280', '180x150',
          '720x300', '468x60', '234x60', '88x31', '120x90',
          '120x60', '120x240', '125x125', '728x90', '160x600',
          '120x600', '300x600'],

          // ?????????????????????
          _screenSize: [
          '320x200', '320x240', '640x480', '800x480', '800x480',
          '1024x600', '1024x768', '1280x800', '1440x900', '1920x1200',
          '2560x1600'],

          // ?????????????????????
          _videoSize: ['720x480', '768x576', '1280x720', '1920x1080'],
          /*
                                                                           ????????????????????????????????????
                                                                             ???????????????
                                                                               http://fpoimg.com/
                                                                           ????????? 
                                                                               http://rensanning.iteye.com/blog/1933310
                                                                               http://code.tutsplus.com/articles/the-top-8-placeholders-for-web-designers--net-19485
                                                                       */

          image: function image(size, background, foreground, format, text) {
            // Random.image( size, background, foreground, text )
            if (arguments.length === 4) {
              text = format;
              format = undefined;
            }
            // Random.image( size, background, text )
            if (arguments.length === 3) {
              text = foreground;
              foreground = undefined;
            }
            // Random.image()
            if (!size) size = this.pick(this._adSize);

            if (background && ~background.indexOf('#')) background = background.slice(1);
            if (foreground && ~foreground.indexOf('#')) foreground = foreground.slice(1);

            // http://dummyimage.com/600x400/cc00cc/470047.png&text=hello
            return 'http://dummyimage.com/' + size + (
            background ? '/' + background : '') + (
            foreground ? '/' + foreground : '') + (
            format ? '.' + format : '') + (
            text ? '&text=' + text : '');
          },
          img: function img() {
            return this.image.apply(this, arguments);
          },

          /*
                 BrandColors
                 http://brandcolors.net/
                 A collection of major brand color codes curated by Galen Gidman.
                 ???????????????????????????
                   // ?????????????????????
                 $('h2').each(function(index, item){
                     item = $(item)
                     console.log('\'' + item.text() + '\'', ':', '\'' + item.next().text() + '\'', ',')
                 })
             */

          _brandColors: {
            '4ormat': '#fb0a2a',
            '500px': '#02adea',
            'About.me (blue)': '#00405d',
            'About.me (yellow)': '#ffcc33',
            'Addvocate': '#ff6138',
            'Adobe': '#ff0000',
            'Aim': '#fcd20b',
            'Amazon': '#e47911',
            'Android': '#a4c639',
            'Angie\'s List': '#7fbb00',
            'AOL': '#0060a3',
            'Atlassian': '#003366',
            'Behance': '#053eff',
            'Big Cartel': '#97b538',
            'bitly': '#ee6123',
            'Blogger': '#fc4f08',
            'Boeing': '#0039a6',
            'Booking.com': '#003580',
            'Carbonmade': '#613854',
            'Cheddar': '#ff7243',
            'Code School': '#3d4944',
            'Delicious': '#205cc0',
            'Dell': '#3287c1',
            'Designmoo': '#e54a4f',
            'Deviantart': '#4e6252',
            'Designer News': '#2d72da',
            'Devour': '#fd0001',
            'DEWALT': '#febd17',
            'Disqus (blue)': '#59a3fc',
            'Disqus (orange)': '#db7132',
            'Dribbble': '#ea4c89',
            'Dropbox': '#3d9ae8',
            'Drupal': '#0c76ab',
            'Dunked': '#2a323a',
            'eBay': '#89c507',
            'Ember': '#f05e1b',
            'Engadget': '#00bdf6',
            'Envato': '#528036',
            'Etsy': '#eb6d20',
            'Evernote': '#5ba525',
            'Fab.com': '#dd0017',
            'Facebook': '#3b5998',
            'Firefox': '#e66000',
            'Flickr (blue)': '#0063dc',
            'Flickr (pink)': '#ff0084',
            'Forrst': '#5b9a68',
            'Foursquare': '#25a0ca',
            'Garmin': '#007cc3',
            'GetGlue': '#2d75a2',
            'Gimmebar': '#f70078',
            'GitHub': '#171515',
            'Google Blue': '#0140ca',
            'Google Green': '#16a61e',
            'Google Red': '#dd1812',
            'Google Yellow': '#fcca03',
            'Google+': '#dd4b39',
            'Grooveshark': '#f77f00',
            'Groupon': '#82b548',
            'Hacker News': '#ff6600',
            'HelloWallet': '#0085ca',
            'Heroku (light)': '#c7c5e6',
            'Heroku (dark)': '#6567a5',
            'HootSuite': '#003366',
            'Houzz': '#73ba37',
            'HTML5': '#ec6231',
            'IKEA': '#ffcc33',
            'IMDb': '#f3ce13',
            'Instagram': '#3f729b',
            'Intel': '#0071c5',
            'Intuit': '#365ebf',
            'Kickstarter': '#76cc1e',
            'kippt': '#e03500',
            'Kodery': '#00af81',
            'LastFM': '#c3000d',
            'LinkedIn': '#0e76a8',
            'Livestream': '#cf0005',
            'Lumo': '#576396',
            'Mixpanel': '#a086d3',
            'Meetup': '#e51937',
            'Nokia': '#183693',
            'NVIDIA': '#76b900',
            'Opera': '#cc0f16',
            'Path': '#e41f11',
            'PayPal (dark)': '#1e477a',
            'PayPal (light)': '#3b7bbf',
            'Pinboard': '#0000e6',
            'Pinterest': '#c8232c',
            'PlayStation': '#665cbe',
            'Pocket': '#ee4056',
            'Prezi': '#318bff',
            'Pusha': '#0f71b4',
            'Quora': '#a82400',
            'QUOTE.fm': '#66ceff',
            'Rdio': '#008fd5',
            'Readability': '#9c0000',
            'Red Hat': '#cc0000',
            'Resource': '#7eb400',
            'Rockpack': '#0ba6ab',
            'Roon': '#62b0d9',
            'RSS': '#ee802f',
            'Salesforce': '#1798c1',
            'Samsung': '#0c4da2',
            'Shopify': '#96bf48',
            'Skype': '#00aff0',
            'Snagajob': '#f47a20',
            'Softonic': '#008ace',
            'SoundCloud': '#ff7700',
            'Space Box': '#f86960',
            'Spotify': '#81b71a',
            'Sprint': '#fee100',
            'Squarespace': '#121212',
            'StackOverflow': '#ef8236',
            'Staples': '#cc0000',
            'Status Chart': '#d7584f',
            'Stripe': '#008cdd',
            'StudyBlue': '#00afe1',
            'StumbleUpon': '#f74425',
            'T-Mobile': '#ea0a8e',
            'Technorati': '#40a800',
            'The Next Web': '#ef4423',
            'Treehouse': '#5cb868',
            'Trulia': '#5eab1f',
            'Tumblr': '#34526f',
            'Twitch.tv': '#6441a5',
            'Twitter': '#00acee',
            'TYPO3': '#ff8700',
            'Ubuntu': '#dd4814',
            'Ustream': '#3388ff',
            'Verizon': '#ef1d1d',
            'Vimeo': '#86c9ef',
            'Vine': '#00a478',
            'Virb': '#06afd8',
            'Virgin Media': '#cc0000',
            'Wooga': '#5b009c',
            'WordPress (blue)': '#21759b',
            'WordPress (orange)': '#d54e21',
            'WordPress (grey)': '#464646',
            'Wunderlist': '#2b88d9',
            'XBOX': '#9bc848',
            'XING': '#126567',
            'Yahoo!': '#720e9e',
            'Yandex': '#ffcc00',
            'Yelp': '#c41200',
            'YouTube': '#c4302b',
            'Zalongo': '#5498dc',
            'Zendesk': '#78a300',
            'Zerply': '#9dcc7a',
            'Zootool': '#5e8b1d' },

          _brandNames: function _brandNames() {
            var brands = [];
            for (var b in this._brandColors) {
              brands.push(b);
            }
            return brands;
          },
          /*
                 ????????????????????? Base64 ???????????????
                   https://github.com/imsky/holder
                 Holder renders image placeholders entirely on the client side.
                   dataImageHolder: function(size) {
                     return 'holder.js/' + size
                 },
             */


          dataImage: function dataImage(size, text) {
            var canvas;
            if (typeof document !== 'undefined') {
              canvas = document.createElement('canvas');
            } else {
              /*
                        https://github.com/Automattic/node-canvas
                            npm install canvas --save
                        ???????????????
                        * http://stackoverflow.com/questions/22953206/gulp-issues-with-cario-install-command-not-found-when-trying-to-installing-canva
                        * https://github.com/Automattic/node-canvas/issues/415
                        * https://github.com/Automattic/node-canvas/wiki/_pages
                          PS???node-canvas ?????????????????????????????????????????????????????? package.json ??? dependencies???
                     */

              var Canvas = module.require('canvas');
              canvas = new Canvas();
            }

            var ctx = canvas && canvas.getContext && canvas.getContext("2d");
            if (!canvas || !ctx) return '';

            if (!size) size = this.pick(this._adSize);
            text = text !== undefined ? text : size;

            size = size.split('x');

            var width = parseInt(size[0], 10),
            height = parseInt(size[1], 10),
            background = this._brandColors[this.pick(this._brandNames())],
            foreground = '#FFF',
            text_height = 14,
            font = 'sans-serif';

            canvas.width = width;
            canvas.height = height;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = background;
            ctx.fillRect(0, 0, width, height);
            ctx.fillStyle = foreground;
            ctx.font = 'bold ' + text_height + 'px ' + font;
            ctx.fillText(text, width / 2, height / 2, width);
            return canvas.toDataURL('image/png');
          } };

        /* WEBPACK VAR INJECTION */}).call(exports, __webpack_require__(9)(module));

      /***/},
    /* 9 */
    /***/function (module, exports) {

      module.exports = function (module) {
        if (!module.webpackPolyfill) {
          module.deprecate = function () {};
          module.paths = [];
          // module.parent = undefined by default
          module.children = [];
          module.webpackPolyfill = 1;
        }
        return module;
      };


      /***/},
    /* 10 */
    /***/function (module, exports, __webpack_require__) {

      /*
                                                              ## Color
                                                          
                                                              http://llllll.li/randomColor/
                                                                  A color generator for JavaScript.
                                                                  randomColor generates attractive colors by default. More specifically, randomColor produces bright colors with a reasonably high saturation. This makes randomColor particularly useful for data visualizations and generative art.
                                                          
                                                              http://randomcolour.com/
                                                                  var bg_colour = Math.floor(Math.random() * 16777215).toString(16);
                                                                  bg_colour = "#" + ("000000" + bg_colour).slice(-6);
                                                                  document.bgColor = bg_colour;
                                                              
                                                              http://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
                                                                  Creating random colors is actually more difficult than it seems. The randomness itself is easy, but aesthetically pleasing randomness is more difficult.
                                                                  https://github.com/devongovett/color-generator
                                                          
                                                              http://www.paulirish.com/2009/random-hex-color-code-snippets/
                                                                  Random Hex Color Code Generator in JavaScript
                                                          
                                                              http://chancejs.com/#color
                                                                  chance.color()
                                                                  // => '#79c157'
                                                                  chance.color({format: 'hex'})
                                                                  // => '#d67118'
                                                                  chance.color({format: 'shorthex'})
                                                                  // => '#60f'
                                                                  chance.color({format: 'rgb'})
                                                                  // => 'rgb(110,52,164)'
                                                          
                                                              http://tool.c7sky.com/webcolor
                                                                  ?????????????????????????????????
                                                              
                                                              https://github.com/One-com/one-color
                                                                  An OO-based JavaScript color parser/computation toolkit with support for RGB, HSV, HSL, CMYK, and alpha channels.
                                                                  API ??????
                                                          
                                                              https://github.com/harthur/color
                                                                  JavaScript color conversion and manipulation library
                                                          
                                                              https://github.com/leaverou/css-colors
                                                                  Share & convert CSS colors
                                                              http://leaverou.github.io/css-colors/#slategray
                                                                  Type a CSS color keyword, #hex, hsl(), rgba(), whatever:
                                                          
                                                              ?????? hue
                                                                  http://baike.baidu.com/view/23368.htm
                                                                  ?????????????????????????????????????????????????????????????????????????????????
                                                              ????????? saturation
                                                                  http://baike.baidu.com/view/189644.htm
                                                                  ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                                                              ?????? brightness
                                                                  http://baike.baidu.com/view/34773.htm
                                                                  ?????????????????????????????????????????????????????????????????????????????????
                                                              ?????? luminosity
                                                                  ????????????????????????,????????????????????????????????????????????????,??????????????????[??????](Lux,lx) ,??? 1m / m2 ???
                                                          
                                                              http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript
                                                                  var letters = '0123456789ABCDEF'.split('')
                                                                  var color = '#'
                                                                  for (var i = 0; i < 6; i++) {
                                                                      color += letters[Math.floor(Math.random() * 16)]
                                                                  }
                                                                  return color
                                                              
                                                                  // ????????????????????????????????????????????? '#RRGGBB'???
                                                                  // _brainlessColor()
                                                                  var color = Math.floor(
                                                                      Math.random() *
                                                                      (16 * 16 * 16 * 16 * 16 * 16 - 1)
                                                                  ).toString(16)
                                                                  color = "#" + ("000000" + color).slice(-6)
                                                                  return color.toUpperCase()
                                                          */

      var Convert = __webpack_require__(11);
      var DICT = __webpack_require__(12);

      module.exports = {
        // ??????????????????????????????????????????????????? '#RRGGBB'???
        color: function color(name) {
          if (name || DICT[name]) return DICT[name].nicer;
          return this.hex();
        },
        // #DAC0DE
        hex: function hex() {
          var hsv = this._goldenRatioColor();
          var rgb = Convert.hsv2rgb(hsv);
          var hex = Convert.rgb2hex(rgb[0], rgb[1], rgb[2]);
          return hex;
        },
        // rgb(128,255,255)
        rgb: function rgb() {
          var hsv = this._goldenRatioColor();
          var rgb = Convert.hsv2rgb(hsv);
          return 'rgb(' +
          parseInt(rgb[0], 10) + ', ' +
          parseInt(rgb[1], 10) + ', ' +
          parseInt(rgb[2], 10) + ')';
        },
        // rgba(128,255,255,0.3)
        rgba: function rgba() {
          var hsv = this._goldenRatioColor();
          var rgb = Convert.hsv2rgb(hsv);
          return 'rgba(' +
          parseInt(rgb[0], 10) + ', ' +
          parseInt(rgb[1], 10) + ', ' +
          parseInt(rgb[2], 10) + ', ' +
          Math.random().toFixed(2) + ')';
        },
        // hsl(300,80%,90%)
        hsl: function hsl() {
          var hsv = this._goldenRatioColor();
          var hsl = Convert.hsv2hsl(hsv);
          return 'hsl(' +
          parseInt(hsl[0], 10) + ', ' +
          parseInt(hsl[1], 10) + ', ' +
          parseInt(hsl[2], 10) + ')';
        },
        // http://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
        // https://github.com/devongovett/color-generator/blob/master/index.js
        // ??????????????????????????????????????????
        _goldenRatioColor: function _goldenRatioColor(saturation, value) {
          this._goldenRatio = 0.618033988749895;
          this._hue = this._hue || Math.random();
          this._hue += this._goldenRatio;
          this._hue %= 1;

          if (typeof saturation !== "number") saturation = 0.5;
          if (typeof value !== "number") value = 0.95;

          return [
          this._hue * 360,
          saturation * 100,
          value * 100];

        } };


      /***/},
    /* 11 */
    /***/function (module, exports) {

      /*
                                         ## Color Convert
                                     
                                         http://blog.csdn.net/idfaya/article/details/6770414
                                             ????????????RGB???HSV(HSL)?????????
                                     */
      // https://github.com/harthur/color-convert/blob/master/conversions.js
      module.exports = {
        rgb2hsl: function rgb2hsl(rgb) {
          var r = rgb[0] / 255,
          g = rgb[1] / 255,
          b = rgb[2] / 255,
          min = Math.min(r, g, b),
          max = Math.max(r, g, b),
          delta = max - min,
          h,s,l;

          if (max == min)
          h = 0;else
          if (r == max)
          h = (g - b) / delta;else
          if (g == max)
          h = 2 + (b - r) / delta;else
          if (b == max)
          h = 4 + (r - g) / delta;

          h = Math.min(h * 60, 360);

          if (h < 0)
          h += 360;

          l = (min + max) / 2;

          if (max == min)
          s = 0;else
          if (l <= 0.5)
          s = delta / (max + min);else

          s = delta / (2 - max - min);

          return [h, s * 100, l * 100];
        },
        rgb2hsv: function rgb2hsv(rgb) {
          var r = rgb[0],
          g = rgb[1],
          b = rgb[2],
          min = Math.min(r, g, b),
          max = Math.max(r, g, b),
          delta = max - min,
          h,s,v;

          if (max === 0)
          s = 0;else

          s = delta / max * 1000 / 10;

          if (max == min)
          h = 0;else
          if (r == max)
          h = (g - b) / delta;else
          if (g == max)
          h = 2 + (b - r) / delta;else
          if (b == max)
          h = 4 + (r - g) / delta;

          h = Math.min(h * 60, 360);

          if (h < 0)
          h += 360;

          v = max / 255 * 1000 / 10;

          return [h, s, v];
        },
        hsl2rgb: function hsl2rgb(hsl) {
          var h = hsl[0] / 360,
          s = hsl[1] / 100,
          l = hsl[2] / 100,
          t1,t2,t3,rgb,val;

          if (s === 0) {
            val = l * 255;
            return [val, val, val];
          }

          if (l < 0.5)
          t2 = l * (1 + s);else

          t2 = l + s - l * s;
          t1 = 2 * l - t2;

          rgb = [0, 0, 0];
          for (var i = 0; i < 3; i++) {
            t3 = h + 1 / 3 * -(i - 1);
            if (t3 < 0) t3++;
            if (t3 > 1) t3--;

            if (6 * t3 < 1)
            val = t1 + (t2 - t1) * 6 * t3;else
            if (2 * t3 < 1)
            val = t2;else
            if (3 * t3 < 2)
            val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;else

            val = t1;

            rgb[i] = val * 255;
          }

          return rgb;
        },
        hsl2hsv: function hsl2hsv(hsl) {
          var h = hsl[0],
          s = hsl[1] / 100,
          l = hsl[2] / 100,
          sv,v;
          l *= 2;
          s *= l <= 1 ? l : 2 - l;
          v = (l + s) / 2;
          sv = 2 * s / (l + s);
          return [h, sv * 100, v * 100];
        },
        hsv2rgb: function hsv2rgb(hsv) {
          var h = hsv[0] / 60;
          var s = hsv[1] / 100;
          var v = hsv[2] / 100;
          var hi = Math.floor(h) % 6;

          var f = h - Math.floor(h);
          var p = 255 * v * (1 - s);
          var q = 255 * v * (1 - s * f);
          var t = 255 * v * (1 - s * (1 - f));

          v = 255 * v;

          switch (hi) {
            case 0:
              return [v, t, p];
            case 1:
              return [q, v, p];
            case 2:
              return [p, v, t];
            case 3:
              return [p, q, v];
            case 4:
              return [t, p, v];
            case 5:
              return [v, p, q];}

        },
        hsv2hsl: function hsv2hsl(hsv) {
          var h = hsv[0],
          s = hsv[1] / 100,
          v = hsv[2] / 100,
          sl,l;

          l = (2 - s) * v;
          sl = s * v;
          sl /= l <= 1 ? l : 2 - l;
          l /= 2;
          return [h, sl * 100, l * 100];
        },
        // http://www.140byt.es/keywords/color
        rgb2hex: function rgb2hex(
        a, // red, as a number from 0 to 255
        b, // green, as a number from 0 to 255
        c // blue, as a number from 0 to 255
        ) {
          return "#" + ((256 + a << 8 | b) << 8 | c).toString(16).slice(1);
        },
        hex2rgb: function hex2rgb(
        a // take a "#xxxxxx" hex string,
        ) {
          a = '0x' + a.slice(1).replace(a.length > 4 ? a : /./g, '$&$&') | 0;
          return [a >> 16, a >> 8 & 255, a & 255];
        } };


      /***/},
    /* 12 */
    /***/function (module, exports) {

      /*
                                         ## Color ????????????
                                     
                                         ?????????????????? [A nicer color palette for the web](http://clrs.cc/)
                                     */
      module.exports = {
        // name value nicer
        navy: {
          value: '#000080',
          nicer: '#001F3F' },

        blue: {
          value: '#0000ff',
          nicer: '#0074D9' },

        aqua: {
          value: '#00ffff',
          nicer: '#7FDBFF' },

        teal: {
          value: '#008080',
          nicer: '#39CCCC' },

        olive: {
          value: '#008000',
          nicer: '#3D9970' },

        green: {
          value: '#008000',
          nicer: '#2ECC40' },

        lime: {
          value: '#00ff00',
          nicer: '#01FF70' },

        yellow: {
          value: '#ffff00',
          nicer: '#FFDC00' },

        orange: {
          value: '#ffa500',
          nicer: '#FF851B' },

        red: {
          value: '#ff0000',
          nicer: '#FF4136' },

        maroon: {
          value: '#800000',
          nicer: '#85144B' },

        fuchsia: {
          value: '#ff00ff',
          nicer: '#F012BE' },

        purple: {
          value: '#800080',
          nicer: '#B10DC9' },

        silver: {
          value: '#c0c0c0',
          nicer: '#DDDDDD' },

        gray: {
          value: '#808080',
          nicer: '#AAAAAA' },

        black: {
          value: '#000000',
          nicer: '#111111' },

        white: {
          value: '#FFFFFF',
          nicer: '#FFFFFF' } };



      /***/},
    /* 13 */
    /***/function (module, exports, __webpack_require__) {

      /*
                                                              ## Text
                                                          
                                                              http://www.lipsum.com/
                                                          */
      var Basic = __webpack_require__(6);
      var Helper = __webpack_require__(14);

      function range(defaultMin, defaultMax, min, max) {
        return min === undefined ? Basic.natural(defaultMin, defaultMax) : // ()
        max === undefined ? min : // ( len )
        Basic.natural(parseInt(min, 10), parseInt(max, 10)); // ( min, max )
      }

      module.exports = {
        // ???????????????????????????
        paragraph: function paragraph(min, max) {
          var len = range(3, 7, min, max);
          var result = [];
          for (var i = 0; i < len; i++) {
            result.push(this.sentence());
          }
          return result.join(' ');
        },
        // 
        cparagraph: function cparagraph(min, max) {
          var len = range(3, 7, min, max);
          var result = [];
          for (var i = 0; i < len; i++) {
            result.push(this.csentence());
          }
          return result.join('');
        },
        // ???????????????????????????????????????????????????????????????
        sentence: function sentence(min, max) {
          var len = range(12, 18, min, max);
          var result = [];
          for (var i = 0; i < len; i++) {
            result.push(this.word());
          }
          return Helper.capitalize(result.join(' ')) + '.';
        },
        // ?????????????????????????????????
        csentence: function csentence(min, max) {
          var len = range(12, 18, min, max);
          var result = [];
          for (var i = 0; i < len; i++) {
            result.push(this.cword());
          }

          return result.join('') + '???';
        },
        // ???????????????????????????
        word: function word(min, max) {
          var len = range(3, 10, min, max);
          var result = '';
          for (var i = 0; i < len; i++) {
            result += Basic.character('lower');
          }
          return result;
        },
        // ????????????????????????????????????
        cword: function cword(pool, min, max) {
          // ???????????? 500 ????????? http://baike.baidu.com/view/568436.htm
          var DICT_KANZI = '????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????';

          var len;
          switch (arguments.length) {
            case 0: // ()
              pool = DICT_KANZI;
              len = 1;
              break;
            case 1: // ( pool )
              if (typeof arguments[0] === 'string') {
                len = 1;
              } else {
                // ( length )
                len = pool;
                pool = DICT_KANZI;
              }
              break;
            case 2:
              // ( pool, length )
              if (typeof arguments[0] === 'string') {
                len = min;
              } else {
                // ( min, max )
                len = this.natural(pool, min);
                pool = DICT_KANZI;
              }
              break;
            case 3:
              len = this.natural(min, max);
              break;}


          var result = '';
          for (var i = 0; i < len; i++) {
            result += pool.charAt(this.natural(0, pool.length - 1));
          }
          return result;
        },
        // ??????????????????????????????????????????????????????????????????
        title: function title(min, max) {
          var len = range(3, 7, min, max);
          var result = [];
          for (var i = 0; i < len; i++) {
            result.push(this.capitalize(this.word()));
          }
          return result.join(' ');
        },
        // ?????????????????????????????????
        ctitle: function ctitle(min, max) {
          var len = range(3, 7, min, max);
          var result = [];
          for (var i = 0; i < len; i++) {
            result.push(this.cword());
          }
          return result.join('');
        } };


      /***/},
    /* 14 */
    /***/function (module, exports, __webpack_require__) {

      /*
                                                              ## Helpers
                                                          */

      var Util = __webpack_require__(3);

      module.exports = {
        // ????????????????????????????????????????????????
        capitalize: function capitalize(word) {
          return (word + '').charAt(0).toUpperCase() + (word + '').substr(1);
        },
        // ??????????????????????????????
        upper: function upper(str) {
          return (str + '').toUpperCase();
        },
        // ??????????????????????????????
        lower: function lower(str) {
          return (str + '').toLowerCase();
        },
        // ???????????????????????????????????????????????????
        pick: function pick(arr, min, max) {
          // pick( item1, item2 ... )
          if (!Util.isArray(arr)) {
            arr = [].slice.call(arguments);
            min = 1;
            max = 1;
          } else {
            // pick( [ item1, item2 ... ] )
            if (min === undefined) min = 1;

            // pick( [ item1, item2 ... ], count )
            if (max === undefined) max = min;
          }

          if (min === 1 && max === 1) return arr[this.natural(0, arr.length - 1)];

          // pick( [ item1, item2 ... ], min, max )
          return this.shuffle(arr, min, max);

          // ?????????????????????????????????????????????????????????#90
          // switch (arguments.length) {
          // 	case 1:
          // 		// pick( [ item1, item2 ... ] )
          // 		return arr[this.natural(0, arr.length - 1)]
          // 	case 2:
          // 		// pick( [ item1, item2 ... ], count )
          // 		max = min
          // 			/* falls through */
          // 	case 3:
          // 		// pick( [ item1, item2 ... ], min, max )
          // 		return this.shuffle(arr, min, max)
          // }
        },
        /*
               ?????????????????????????????????????????????
               Given an array, scramble the order and return it.
           		    ????????????????????????
                   // https://code.google.com/p/jslibs/wiki/JavascriptTips
                   result = result.sort(function() {
                       return Math.random() - 0.5
                   })
           */

        shuffle: function shuffle(arr, min, max) {
          arr = arr || [];
          var old = arr.slice(0),
          result = [],
          index = 0,
          length = old.length;
          for (var i = 0; i < length; i++) {
            index = this.natural(0, old.length - 1);
            result.push(old[index]);
            old.splice(index, 1);
          }
          switch (arguments.length) {
            case 0:
            case 1:
              return result;
            case 2:
              max = min;
            /* falls through */
            case 3:
              min = parseInt(min, 10);
              max = parseInt(max, 10);
              return result.slice(0, this.natural(min, max));}

        },
        /*
               * Random.order(item, item)
               * Random.order([item, item ...])
           		    ??????????????????????????????
           		    [JSON????????????????????????????????????](https://github.com/thx/RAP/issues/22)
           		    ????????????????????????
           */



        order: function order(array) {
          order.cache = order.cache || {};

          if (arguments.length > 1) array = [].slice.call(arguments, 0);

          // options.context.path/templatePath
          var options = order.options;
          var templatePath = options.context.templatePath.join('.');

          var cache =
          order.cache[templatePath] = order.cache[templatePath] || {
            index: 0,
            array: array };



          return cache.array[cache.index++ % cache.array.length];
        } };


      /***/},
    /* 15 */
    /***/function (module, exports) {

      /*
                                         ## Name
                                     
                                         [Beyond the Top 1000 Names](http://www.ssa.gov/oact/babynames/limits.html)
                                     */
      module.exports = {
        // ???????????????????????????????????????
        first: function first() {
          var names = [
          // male
          "James", "John", "Robert", "Michael", "William",
          "David", "Richard", "Charles", "Joseph", "Thomas",
          "Christopher", "Daniel", "Paul", "Mark", "Donald",
          "George", "Kenneth", "Steven", "Edward", "Brian",
          "Ronald", "Anthony", "Kevin", "Jason", "Matthew",
          "Gary", "Timothy", "Jose", "Larry", "Jeffrey",
          "Frank", "Scott", "Eric"].
          concat([
          // female
          "Mary", "Patricia", "Linda", "Barbara", "Elizabeth",
          "Jennifer", "Maria", "Susan", "Margaret", "Dorothy",
          "Lisa", "Nancy", "Karen", "Betty", "Helen",
          "Sandra", "Donna", "Carol", "Ruth", "Sharon",
          "Michelle", "Laura", "Sarah", "Kimberly", "Deborah",
          "Jessica", "Shirley", "Cynthia", "Angela", "Melissa",
          "Brenda", "Amy", "Anna"]);

          return this.pick(names);
          // or this.capitalize(this.word())
        },
        // ???????????????????????????????????????
        last: function last() {
          var names = [
          "Smith", "Johnson", "Williams", "Brown", "Jones",
          "Miller", "Davis", "Garcia", "Rodriguez", "Wilson",
          "Martinez", "Anderson", "Taylor", "Thomas", "Hernandez",
          "Moore", "Martin", "Jackson", "Thompson", "White",
          "Lopez", "Lee", "Gonzalez", "Harris", "Clark",
          "Lewis", "Robinson", "Walker", "Perez", "Hall",
          "Young", "Allen"];

          return this.pick(names);
          // or this.capitalize(this.word())
        },
        // ??????????????????????????????????????????
        name: function name(middle) {
          return this.first() + ' ' + (
          middle ? this.first() + ' ' : '') +
          this.last();
        },
        /*
               ???????????????????????????????????????
               [????????????????????????](http://baike.baidu.com/view/1719115.htm)
               [????????? - ??????????????????????????????](http://xuanpai.sinaapp.com/)
            */
        cfirst: function cfirst() {
          var names = (
          '??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ' +
          '??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ' +
          '??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ' +
          '??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ' +
          '??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ' +
          '??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ' +
          '??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ' +
          '??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ' +
          '??? ??? ??? ??? ??? ??? ??? ??? ??? ??? ' +
          '??? ??? ??? ??? ??? ??? ??? ??? ??? ???').
          split(' ');
          return this.pick(names);
        },
        /*
               ???????????????????????????????????????
               [????????????????????????50???_???????????????](http://www.name999.net/xingming/xingshi/20131004/48.html)
            */
        clast: function clast() {
          var names = (
          '??? ??? ??? ?????? ??? ??? ??? ??? ??? ??? ' +
          '??? ??? ??? ??? ??? ??? ??? ??? ?????? ??? ' +
          '??? ??? ??????').
          split(' ');
          return this.pick(names);
        },
        // ??????????????????????????????????????????
        cname: function cname() {
          return this.cfirst() + this.clast();
        } };


      /***/},
    /* 16 */
    /***/function (module, exports) {

      /*
                                         ## Web
                                     */
      module.exports = {
        /*
                             ?????????????????? URL???
                               [URL ??????](http://www.w3.org/Addressing/URL/url-spec.txt)
                                 http                    Hypertext Transfer Protocol 
                                 ftp                     File Transfer protocol 
                                 gopher                  The Gopher protocol 
                                 mailto                  Electronic mail address 
                                 mid                     Message identifiers for electronic mail 
                                 cid                     Content identifiers for MIME body part 
                                 news                    Usenet news 
                                 nntp                    Usenet news for local NNTP access only 
                                 prospero                Access using the prospero protocols 
                                 telnet rlogin tn3270    Reference to interactive sessions
                                 wais                    Wide Area Information Servers 
                         */

        url: function url(protocol, host) {
          return (protocol || this.protocol()) + '://' + ( // protocol?
          host || this.domain()) + // host?
          '/' + this.word();
        },
        // ?????????????????? URL ?????????
        protocol: function protocol() {
          return this.pick(
          // ?????????
          'http ftp gopher mailto mid cid news nntp prospero telnet rlogin tn3270 wais'.split(' '));

        },
        // ???????????????????????????
        domain: function domain(tld) {
          return this.word() + '.' + (tld || this.tld());
        },
        /*
               ?????????????????????????????????
               ?????????????????? international top-level domain-names, iTLDs
               ?????????????????? national top-level domainnames, nTLDs
               [??????????????????](http://www.163ns.com/zixun/post/4417.html)
           */
        tld: function tld() {// Top Level Domain
          return this.pick(
          (
          // ????????????
          'com net org edu gov int mil cn ' +
          // ????????????
          'com.cn net.cn gov.cn org.cn ' +
          // ??????????????????
          '?????? ????????????.?????? ????????????.?????? ' +
          // ???????????????
          'tel biz cc tv info name hk mobi asia cd travel pro museum coop aero ' +
          // ????????????????????????
          'ad ae af ag ai al am an ao aq ar as at au aw az ba bb bd be bf bg bh bi bj bm bn bo br bs bt bv bw by bz ca cc cf cg ch ci ck cl cm cn co cq cr cu cv cx cy cz de dj dk dm do dz ec ee eg eh es et ev fi fj fk fm fo fr ga gb gd ge gf gh gi gl gm gn gp gr gt gu gw gy hk hm hn hr ht hu id ie il in io iq ir is it jm jo jp ke kg kh ki km kn kp kr kw ky kz la lb lc li lk lr ls lt lu lv ly ma mc md mg mh ml mm mn mo mp mq mr ms mt mv mw mx my mz na nc ne nf ng ni nl no np nr nt nu nz om qa pa pe pf pg ph pk pl pm pn pr pt pw py re ro ru rw sa sb sc sd se sg sh si sj sk sl sm sn so sr st su sy sz tc td tf tg th tj tk tm tn to tp tr tt tv tw tz ua ug uk us uy va vc ve vg vn vu wf ws ye yu za zm zr zw').
          split(' '));

        },
        // ?????????????????????????????????
        email: function email(domain) {
          return this.character('lower') + '.' + this.word() + '@' + (

          domain ||
          this.word() + '.' + this.tld());

          // return this.character('lower') + '.' + this.last().toLowerCase() + '@' + this.last().toLowerCase() + '.' + this.tld()
          // return this.word() + '@' + (domain || this.domain())
        },
        // ?????????????????? IP ?????????
        ip: function ip() {
          return this.natural(0, 255) + '.' +
          this.natural(0, 255) + '.' +
          this.natural(0, 255) + '.' +
          this.natural(0, 255);
        } };


      /***/},
    /* 17 */
    /***/function (module, exports, __webpack_require__) {

      /*
                                                              ## Address
                                                          */

      var DICT = __webpack_require__(18);
      var REGION = ['??????', '??????', '??????', '??????', '??????', '??????', '??????'];

      module.exports = {
        // ???????????????????????????
        region: function region() {
          return this.pick(REGION);
        },
        // ????????????????????????????????????????????????????????????????????????????????????
        province: function province() {
          return this.pick(DICT).name;
        },
        // ????????????????????????????????????
        city: function city(prefix) {
          var province = this.pick(DICT);
          var city = this.pick(province.children);
          return prefix ? [province.name, city.name].join(' ') : city.name;
        },
        // ????????????????????????????????????
        county: function county(prefix) {
          var province = this.pick(DICT);
          var city = this.pick(province.children);
          var county = this.pick(city.children) || {
            name: '-' };

          return prefix ? [province.name, city.name, county.name].join(' ') : county.name;
        },
        // ???????????????????????????????????????????????????
        zip: function zip(len) {
          var zip = '';
          for (var i = 0; i < (len || 6); i++) {zip += this.natural(0, 9);}
          return zip;
        }

        // address: function() {},
        // phone: function() {},
        // areacode: function() {},
        // street: function() {},
        // street_suffixes: function() {},
        // street_suffix: function() {},
        // states: function() {},
        // state: function() {},
      };

      /***/},
    /* 18 */
    /***/function (module, exports) {

      /*
                                         ## Address ????????????
                                     
                                         ?????????????????? http://www.atatech.org/articles/30028?rnd=254259856
                                     
                                         ?????? ?????????????????????????????????
                                     
                                         ??????   ????????? ????????? ????????? ????????? ??????????????????
                                         ??????   ????????? ????????? ????????????
                                         ??????   ????????? ????????? ????????? ????????? ????????? ????????? ?????????
                                         ??????   ????????? ????????????????????? ?????????
                                         ??????   ????????? ????????? ?????????
                                         ??????   ????????? ????????? ????????? ????????? ???????????????
                                         ??????   ????????? ????????? ????????? ????????????????????? ????????????????????????
                                         ????????? ????????????????????? ????????????????????? ?????????
                                         
                                         **??????**
                                         
                                         ```js
                                         var map = {}
                                         _.each(_.keys(REGIONS),function(id){
                                           map[id] = REGIONS[ID]
                                         })
                                         JSON.stringify(map)
                                         ```
                                     */
      var DICT = {
        "110000": "??????",
        "110100": "?????????",
        "110101": "?????????",
        "110102": "?????????",
        "110105": "?????????",
        "110106": "?????????",
        "110107": "????????????",
        "110108": "?????????",
        "110109": "????????????",
        "110111": "?????????",
        "110112": "?????????",
        "110113": "?????????",
        "110114": "?????????",
        "110115": "?????????",
        "110116": "?????????",
        "110117": "?????????",
        "110228": "?????????",
        "110229": "?????????",
        "110230": "?????????",
        "120000": "??????",
        "120100": "?????????",
        "120101": "?????????",
        "120102": "?????????",
        "120103": "?????????",
        "120104": "?????????",
        "120105": "?????????",
        "120106": "?????????",
        "120110": "?????????",
        "120111": "?????????",
        "120112": "?????????",
        "120113": "?????????",
        "120114": "?????????",
        "120115": "?????????",
        "120116": "????????????",
        "120221": "?????????",
        "120223": "?????????",
        "120225": "??????",
        "120226": "?????????",
        "130000": "?????????",
        "130100": "????????????",
        "130102": "?????????",
        "130103": "?????????",
        "130104": "?????????",
        "130105": "?????????",
        "130107": "????????????",
        "130108": "?????????",
        "130121": "?????????",
        "130123": "?????????",
        "130124": "?????????",
        "130125": "?????????",
        "130126": "?????????",
        "130127": "?????????",
        "130128": "?????????",
        "130129": "?????????",
        "130130": "?????????",
        "130131": "?????????",
        "130132": "?????????",
        "130133": "??????",
        "130181": "?????????",
        "130182": "?????????",
        "130183": "?????????",
        "130184": "?????????",
        "130185": "?????????",
        "130186": "?????????",
        "130200": "?????????",
        "130202": "?????????",
        "130203": "?????????",
        "130204": "?????????",
        "130205": "?????????",
        "130207": "?????????",
        "130208": "?????????",
        "130223": "??????",
        "130224": "?????????",
        "130225": "?????????",
        "130227": "?????????",
        "130229": "?????????",
        "130230": "????????????",
        "130281": "?????????",
        "130283": "?????????",
        "130284": "?????????",
        "130300": "????????????",
        "130302": "?????????",
        "130303": "????????????",
        "130304": "????????????",
        "130321": "?????????????????????",
        "130322": "?????????",
        "130323": "?????????",
        "130324": "?????????",
        "130398": "?????????",
        "130400": "?????????",
        "130402": "?????????",
        "130403": "?????????",
        "130404": "?????????",
        "130406": "????????????",
        "130421": "?????????",
        "130423": "?????????",
        "130424": "?????????",
        "130425": "?????????",
        "130426": "??????",
        "130427": "??????",
        "130428": "?????????",
        "130429": "?????????",
        "130430": "??????",
        "130431": "?????????",
        "130432": "?????????",
        "130433": "?????????",
        "130434": "??????",
        "130435": "?????????",
        "130481": "?????????",
        "130482": "?????????",
        "130500": "?????????",
        "130502": "?????????",
        "130503": "?????????",
        "130521": "?????????",
        "130522": "?????????",
        "130523": "?????????",
        "130524": "?????????",
        "130525": "?????????",
        "130526": "??????",
        "130527": "?????????",
        "130528": "?????????",
        "130529": "?????????",
        "130530": "?????????",
        "130531": "?????????",
        "130532": "?????????",
        "130533": "??????",
        "130534": "?????????",
        "130535": "?????????",
        "130581": "?????????",
        "130582": "?????????",
        "130583": "?????????",
        "130600": "?????????",
        "130602": "?????????",
        "130603": "?????????",
        "130604": "?????????",
        "130621": "?????????",
        "130622": "?????????",
        "130623": "?????????",
        "130624": "?????????",
        "130625": "?????????",
        "130626": "?????????",
        "130627": "??????",
        "130628": "?????????",
        "130629": "?????????",
        "130630": "?????????",
        "130631": "?????????",
        "130632": "?????????",
        "130633": "??????",
        "130634": "?????????",
        "130635": "??????",
        "130636": "?????????",
        "130637": "?????????",
        "130638": "??????",
        "130681": "?????????",
        "130682": "?????????",
        "130683": "?????????",
        "130684": "????????????",
        "130699": "?????????",
        "130700": "????????????",
        "130702": "?????????",
        "130703": "?????????",
        "130705": "?????????",
        "130706": "????????????",
        "130721": "?????????",
        "130722": "?????????",
        "130723": "?????????",
        "130724": "?????????",
        "130725": "?????????",
        "130726": "??????",
        "130727": "?????????",
        "130728": "?????????",
        "130729": "?????????",
        "130730": "?????????",
        "130731": "?????????",
        "130732": "?????????",
        "130733": "?????????",
        "130734": "?????????",
        "130800": "?????????",
        "130802": "?????????",
        "130803": "?????????",
        "130804": "??????????????????",
        "130821": "?????????",
        "130822": "?????????",
        "130823": "?????????",
        "130824": "?????????",
        "130825": "?????????",
        "130826": "?????????????????????",
        "130827": "?????????????????????",
        "130828": "??????????????????????????????",
        "130829": "?????????",
        "130900": "?????????",
        "130902": "?????????",
        "130903": "?????????",
        "130921": "??????",
        "130922": "??????",
        "130923": "?????????",
        "130924": "?????????",
        "130925": "?????????",
        "130926": "?????????",
        "130927": "?????????",
        "130928": "?????????",
        "130929": "??????",
        "130930": "?????????????????????",
        "130981": "?????????",
        "130982": "?????????",
        "130983": "?????????",
        "130984": "?????????",
        "130985": "?????????",
        "131000": "?????????",
        "131002": "?????????",
        "131003": "?????????",
        "131022": "?????????",
        "131023": "?????????",
        "131024": "?????????",
        "131025": "?????????",
        "131026": "?????????",
        "131028": "?????????????????????",
        "131081": "?????????",
        "131082": "?????????",
        "131083": "?????????",
        "131100": "?????????",
        "131102": "?????????",
        "131121": "?????????",
        "131122": "?????????",
        "131123": "?????????",
        "131124": "?????????",
        "131125": "?????????",
        "131126": "?????????",
        "131127": "??????",
        "131128": "?????????",
        "131181": "?????????",
        "131182": "?????????",
        "131183": "?????????",
        "140000": "?????????",
        "140100": "?????????",
        "140105": "?????????",
        "140106": "?????????",
        "140107": "????????????",
        "140108": "????????????",
        "140109": "????????????",
        "140110": "?????????",
        "140121": "?????????",
        "140122": "?????????",
        "140123": "?????????",
        "140181": "?????????",
        "140182": "?????????",
        "140200": "?????????",
        "140202": "??????",
        "140203": "??????",
        "140211": "?????????",
        "140212": "?????????",
        "140221": "?????????",
        "140222": "?????????",
        "140223": "?????????",
        "140224": "?????????",
        "140225": "?????????",
        "140226": "?????????",
        "140227": "?????????",
        "140228": "?????????",
        "140300": "?????????",
        "140302": "??????",
        "140303": "??????",
        "140311": "??????",
        "140321": "?????????",
        "140322": "??????",
        "140323": "?????????",
        "140400": "?????????",
        "140421": "?????????",
        "140423": "?????????",
        "140424": "?????????",
        "140425": "?????????",
        "140426": "?????????",
        "140427": "?????????",
        "140428": "?????????",
        "140429": "?????????",
        "140430": "??????",
        "140431": "?????????",
        "140481": "?????????",
        "140482": "??????",
        "140483": "??????",
        "140485": "?????????",
        "140500": "?????????",
        "140502": "??????",
        "140521": "?????????",
        "140522": "?????????",
        "140524": "?????????",
        "140525": "?????????",
        "140581": "?????????",
        "140582": "?????????",
        "140600": "?????????",
        "140602": "?????????",
        "140603": "?????????",
        "140621": "?????????",
        "140622": "??????",
        "140623": "?????????",
        "140624": "?????????",
        "140625": "?????????",
        "140700": "?????????",
        "140702": "?????????",
        "140721": "?????????",
        "140722": "?????????",
        "140723": "?????????",
        "140724": "?????????",
        "140725": "?????????",
        "140726": "?????????",
        "140727": "??????",
        "140728": "?????????",
        "140729": "?????????",
        "140781": "?????????",
        "140782": "?????????",
        "140800": "?????????",
        "140802": "?????????",
        "140821": "?????????",
        "140822": "?????????",
        "140823": "?????????",
        "140824": "?????????",
        "140825": "?????????",
        "140826": "??????",
        "140827": "?????????",
        "140828": "??????",
        "140829": "?????????",
        "140830": "?????????",
        "140881": "?????????",
        "140882": "?????????",
        "140883": "?????????",
        "140900": "?????????",
        "140902": "?????????",
        "140921": "?????????",
        "140922": "?????????",
        "140923": "??????",
        "140924": "?????????",
        "140925": "?????????",
        "140926": "?????????",
        "140927": "?????????",
        "140928": "?????????",
        "140929": "?????????",
        "140930": "?????????",
        "140931": "?????????",
        "140932": "?????????",
        "140981": "?????????",
        "140982": "?????????",
        "141000": "?????????",
        "141002": "?????????",
        "141021": "?????????",
        "141022": "?????????",
        "141023": "?????????",
        "141024": "?????????",
        "141025": "??????",
        "141026": "?????????",
        "141027": "?????????",
        "141028": "??????",
        "141029": "?????????",
        "141030": "?????????",
        "141031": "??????",
        "141032": "?????????",
        "141033": "??????",
        "141034": "?????????",
        "141081": "?????????",
        "141082": "?????????",
        "141083": "?????????",
        "141100": "?????????",
        "141102": "?????????",
        "141121": "?????????",
        "141122": "?????????",
        "141123": "??????",
        "141124": "??????",
        "141125": "?????????",
        "141126": "?????????",
        "141127": "??????",
        "141128": "?????????",
        "141129": "?????????",
        "141130": "?????????",
        "141181": "?????????",
        "141182": "?????????",
        "141183": "?????????",
        "150000": "??????????????????",
        "150100": "???????????????",
        "150102": "?????????",
        "150103": "?????????",
        "150104": "?????????",
        "150105": "?????????",
        "150121": "???????????????",
        "150122": "????????????",
        "150123": "???????????????",
        "150124": "????????????",
        "150125": "?????????",
        "150126": "?????????",
        "150200": "?????????",
        "150202": "?????????",
        "150203": "????????????",
        "150204": "?????????",
        "150205": "?????????",
        "150206": "??????????????????",
        "150207": "?????????",
        "150221": "???????????????",
        "150222": "?????????",
        "150223": "???????????????????????????",
        "150224": "?????????",
        "150300": "?????????",
        "150302": "????????????",
        "150303": "?????????",
        "150304": "?????????",
        "150305": "?????????",
        "150400": "?????????",
        "150402": "?????????",
        "150403": "????????????",
        "150404": "?????????",
        "150421": "??????????????????",
        "150422": "????????????",
        "150423": "????????????",
        "150424": "?????????",
        "150425": "???????????????",
        "150426": "????????????",
        "150428": "????????????",
        "150429": "?????????",
        "150430": "?????????",
        "150431": "?????????",
        "150500": "?????????",
        "150502": "????????????",
        "150521": "?????????????????????",
        "150522": "?????????????????????",
        "150523": "?????????",
        "150524": "?????????",
        "150525": "?????????",
        "150526": "????????????",
        "150581": "???????????????",
        "150582": "?????????",
        "150600": "???????????????",
        "150602": "?????????",
        "150621": "????????????",
        "150622": "????????????",
        "150623": "???????????????",
        "150624": "????????????",
        "150625": "?????????",
        "150626": "?????????",
        "150627": "???????????????",
        "150628": "?????????",
        "150700": "???????????????",
        "150702": "????????????",
        "150703": "???????????????",
        "150721": "?????????",
        "150722": "?????????????????????????????????",
        "150723": "??????????????????",
        "150724": "?????????????????????",
        "150725": "???????????????",
        "150726": "??????????????????",
        "150727": "??????????????????",
        "150781": "????????????",
        "150782": "????????????",
        "150783": "????????????",
        "150784": "???????????????",
        "150785": "?????????",
        "150786": "?????????",
        "150800": "???????????????",
        "150802": "?????????",
        "150821": "?????????",
        "150822": "?????????",
        "150823": "???????????????",
        "150824": "???????????????",
        "150825": "???????????????",
        "150826": "????????????",
        "150827": "?????????",
        "150900": "???????????????",
        "150902": "?????????",
        "150921": "?????????",
        "150922": "?????????",
        "150923": "?????????",
        "150924": "?????????",
        "150925": "?????????",
        "150926": "?????????????????????",
        "150927": "?????????????????????",
        "150928": "?????????????????????",
        "150929": "????????????",
        "150981": "?????????",
        "150982": "?????????",
        "152200": "?????????",
        "152201": "???????????????",
        "152202": "????????????",
        "152221": "?????????????????????",
        "152222": "?????????????????????",
        "152223": "????????????",
        "152224": "?????????",
        "152225": "?????????",
        "152500": "???????????????",
        "152501": "???????????????",
        "152502": "???????????????",
        "152522": "????????????",
        "152523": "???????????????",
        "152524": "???????????????",
        "152525": "??????????????????",
        "152526": "??????????????????",
        "152527": "????????????",
        "152528": "?????????",
        "152529": "????????????",
        "152530": "?????????",
        "152531": "?????????",
        "152532": "?????????",
        "152900": "????????????",
        "152921": "???????????????",
        "152922": "???????????????",
        "152923": "????????????",
        "152924": "?????????",
        "210000": "?????????",
        "210100": "?????????",
        "210102": "?????????",
        "210103": "?????????",
        "210104": "?????????",
        "210105": "?????????",
        "210106": "?????????",
        "210111": "????????????",
        "210112": "?????????",
        "210113": "????????????",
        "210114": "?????????",
        "210122": "?????????",
        "210123": "?????????",
        "210124": "?????????",
        "210181": "?????????",
        "210184": "????????????",
        "210185": "?????????",
        "210200": "?????????",
        "210202": "?????????",
        "210203": "?????????",
        "210204": "????????????",
        "210211": "????????????",
        "210212": "????????????",
        "210213": "?????????",
        "210224": "?????????",
        "210281": "????????????",
        "210282": "????????????",
        "210283": "?????????",
        "210298": "?????????",
        "210300": "?????????",
        "210302": "?????????",
        "210303": "?????????",
        "210304": "?????????",
        "210311": "?????????",
        "210321": "?????????",
        "210323": "?????????????????????",
        "210381": "?????????",
        "210382": "?????????",
        "210400": "?????????",
        "210402": "?????????",
        "210403": "?????????",
        "210404": "?????????",
        "210411": "?????????",
        "210421": "?????????",
        "210422": "?????????????????????",
        "210423": "?????????????????????",
        "210424": "?????????",
        "210500": "?????????",
        "210502": "?????????",
        "210503": "?????????",
        "210504": "?????????",
        "210505": "?????????",
        "210521": "?????????????????????",
        "210522": "?????????????????????",
        "210523": "?????????",
        "210600": "?????????",
        "210602": "?????????",
        "210603": "?????????",
        "210604": "?????????",
        "210624": "?????????????????????",
        "210681": "?????????",
        "210682": "?????????",
        "210683": "?????????",
        "210700": "?????????",
        "210702": "?????????",
        "210703": "?????????",
        "210711": "?????????",
        "210726": "?????????",
        "210727": "??????",
        "210781": "?????????",
        "210782": "?????????",
        "210783": "?????????",
        "210800": "?????????",
        "210802": "?????????",
        "210803": "?????????",
        "210804": "????????????",
        "210811": "?????????",
        "210881": "?????????",
        "210882": "????????????",
        "210883": "?????????",
        "210900": "?????????",
        "210902": "?????????",
        "210903": "?????????",
        "210904": "?????????",
        "210905": "????????????",
        "210911": "?????????",
        "210921": "????????????????????????",
        "210922": "?????????",
        "210923": "?????????",
        "211000": "?????????",
        "211002": "?????????",
        "211003": "?????????",
        "211004": "?????????",
        "211005": "????????????",
        "211011": "????????????",
        "211021": "?????????",
        "211081": "?????????",
        "211082": "?????????",
        "211100": "?????????",
        "211102": "????????????",
        "211103": "????????????",
        "211121": "?????????",
        "211122": "?????????",
        "211123": "?????????",
        "211200": "?????????",
        "211202": "?????????",
        "211204": "?????????",
        "211221": "?????????",
        "211223": "?????????",
        "211224": "?????????",
        "211281": "????????????",
        "211282": "?????????",
        "211283": "?????????",
        "211300": "?????????",
        "211302": "?????????",
        "211303": "?????????",
        "211321": "?????????",
        "211322": "?????????",
        "211324": "?????????????????????????????????",
        "211381": "?????????",
        "211382": "?????????",
        "211383": "?????????",
        "211400": "????????????",
        "211402": "?????????",
        "211403": "?????????",
        "211404": "?????????",
        "211421": "?????????",
        "211422": "?????????",
        "211481": "?????????",
        "211482": "?????????",
        "220000": "?????????",
        "220100": "?????????",
        "220102": "?????????",
        "220103": "?????????",
        "220104": "?????????",
        "220105": "?????????",
        "220106": "?????????",
        "220112": "?????????",
        "220122": "?????????",
        "220181": "?????????",
        "220182": "?????????",
        "220183": "?????????",
        "220188": "?????????",
        "220200": "?????????",
        "220202": "?????????",
        "220203": "?????????",
        "220204": "?????????",
        "220211": "?????????",
        "220221": "?????????",
        "220281": "?????????",
        "220282": "?????????",
        "220283": "?????????",
        "220284": "?????????",
        "220285": "?????????",
        "220300": "?????????",
        "220302": "?????????",
        "220303": "?????????",
        "220322": "?????????",
        "220323": "?????????????????????",
        "220381": "????????????",
        "220382": "?????????",
        "220383": "?????????",
        "220400": "?????????",
        "220402": "?????????",
        "220403": "?????????",
        "220421": "?????????",
        "220422": "?????????",
        "220423": "?????????",
        "220500": "?????????",
        "220502": "?????????",
        "220503": "????????????",
        "220521": "?????????",
        "220523": "?????????",
        "220524": "?????????",
        "220581": "????????????",
        "220582": "?????????",
        "220583": "?????????",
        "220600": "?????????",
        "220602": "?????????",
        "220621": "?????????",
        "220622": "?????????",
        "220623": "????????????????????????",
        "220625": "?????????",
        "220681": "?????????",
        "220682": "?????????",
        "220700": "?????????",
        "220702": "?????????",
        "220721": "?????????????????????????????????",
        "220722": "?????????",
        "220723": "?????????",
        "220724": "?????????",
        "220725": "?????????",
        "220800": "?????????",
        "220802": "?????????",
        "220821": "?????????",
        "220822": "?????????",
        "220881": "?????????",
        "220882": "?????????",
        "220883": "?????????",
        "222400": "????????????????????????",
        "222401": "?????????",
        "222402": "?????????",
        "222403": "?????????",
        "222404": "?????????",
        "222405": "?????????",
        "222406": "?????????",
        "222424": "?????????",
        "222426": "?????????",
        "222427": "?????????",
        "230000": "????????????",
        "230100": "????????????",
        "230102": "?????????",
        "230103": "?????????",
        "230104": "?????????",
        "230106": "?????????",
        "230108": "?????????",
        "230109": "?????????",
        "230111": "?????????",
        "230123": "?????????",
        "230124": "?????????",
        "230125": "??????",
        "230126": "?????????",
        "230127": "?????????",
        "230128": "?????????",
        "230129": "?????????",
        "230181": "?????????",
        "230182": "?????????",
        "230183": "?????????",
        "230184": "?????????",
        "230186": "?????????",
        "230200": "???????????????",
        "230202": "?????????",
        "230203": "?????????",
        "230204": "?????????",
        "230205": "????????????",
        "230206": "???????????????",
        "230207": "????????????",
        "230208": "????????????????????????",
        "230221": "?????????",
        "230223": "?????????",
        "230224": "?????????",
        "230225": "?????????",
        "230227": "?????????",
        "230229": "?????????",
        "230230": "?????????",
        "230231": "?????????",
        "230281": "?????????",
        "230282": "?????????",
        "230300": "?????????",
        "230302": "?????????",
        "230303": "?????????",
        "230304": "?????????",
        "230305": "?????????",
        "230306": "????????????",
        "230307": "?????????",
        "230321": "?????????",
        "230381": "?????????",
        "230382": "?????????",
        "230383": "?????????",
        "230400": "?????????",
        "230402": "?????????",
        "230403": "?????????",
        "230404": "?????????",
        "230405": "?????????",
        "230406": "?????????",
        "230407": "?????????",
        "230421": "?????????",
        "230422": "?????????",
        "230423": "?????????",
        "230500": "????????????",
        "230502": "?????????",
        "230503": "?????????",
        "230505": "????????????",
        "230506": "?????????",
        "230521": "?????????",
        "230522": "?????????",
        "230523": "?????????",
        "230524": "?????????",
        "230525": "?????????",
        "230600": "?????????",
        "230602": "????????????",
        "230603": "?????????",
        "230604": "????????????",
        "230605": "?????????",
        "230606": "?????????",
        "230621": "?????????",
        "230622": "?????????",
        "230623": "?????????",
        "230624": "??????????????????????????????",
        "230625": "?????????",
        "230700": "?????????",
        "230702": "?????????",
        "230703": "?????????",
        "230704": "?????????",
        "230705": "?????????",
        "230706": "?????????",
        "230707": "?????????",
        "230708": "?????????",
        "230709": "????????????",
        "230710": "?????????",
        "230711": "????????????",
        "230712": "????????????",
        "230713": "?????????",
        "230714": "????????????",
        "230715": "?????????",
        "230716": "????????????",
        "230722": "?????????",
        "230781": "?????????",
        "230782": "?????????",
        "230800": "????????????",
        "230803": "?????????",
        "230804": "?????????",
        "230805": "?????????",
        "230811": "??????",
        "230822": "?????????",
        "230826": "?????????",
        "230828": "?????????",
        "230833": "?????????",
        "230881": "?????????",
        "230882": "?????????",
        "230883": "?????????",
        "230900": "????????????",
        "230902": "?????????",
        "230903": "?????????",
        "230904": "????????????",
        "230921": "?????????",
        "230922": "?????????",
        "231000": "????????????",
        "231002": "?????????",
        "231003": "?????????",
        "231004": "?????????",
        "231005": "?????????",
        "231024": "?????????",
        "231025": "?????????",
        "231081": "????????????",
        "231083": "?????????",
        "231084": "?????????",
        "231085": "?????????",
        "231086": "?????????",
        "231100": "?????????",
        "231102": "?????????",
        "231121": "?????????",
        "231123": "?????????",
        "231124": "?????????",
        "231181": "?????????",
        "231182": "???????????????",
        "231183": "?????????",
        "231200": "?????????",
        "231202": "?????????",
        "231221": "?????????",
        "231222": "?????????",
        "231223": "?????????",
        "231224": "?????????",
        "231225": "?????????",
        "231226": "?????????",
        "231281": "?????????",
        "231282": "?????????",
        "231283": "?????????",
        "231284": "?????????",
        "232700": "??????????????????",
        "232702": "?????????",
        "232703": "?????????",
        "232704": "?????????",
        "232721": "?????????",
        "232722": "?????????",
        "232723": "?????????",
        "232724": "???????????????",
        "232725": "?????????",
        "310000": "??????",
        "310100": "?????????",
        "310101": "?????????",
        "310104": "?????????",
        "310105": "?????????",
        "310106": "?????????",
        "310107": "?????????",
        "310108": "?????????",
        "310109": "?????????",
        "310110": "?????????",
        "310112": "?????????",
        "310113": "?????????",
        "310114": "?????????",
        "310115": "????????????",
        "310116": "?????????",
        "310117": "?????????",
        "310118": "?????????",
        "310120": "?????????",
        "310230": "?????????",
        "310231": "?????????",
        "320000": "?????????",
        "320100": "?????????",
        "320102": "?????????",
        "320104": "?????????",
        "320105": "?????????",
        "320106": "?????????",
        "320111": "?????????",
        "320113": "?????????",
        "320114": "????????????",
        "320115": "?????????",
        "320116": "?????????",
        "320124": "?????????",
        "320125": "?????????",
        "320126": "?????????",
        "320200": "?????????",
        "320202": "?????????",
        "320203": "?????????",
        "320204": "?????????",
        "320205": "?????????",
        "320206": "?????????",
        "320211": "?????????",
        "320281": "?????????",
        "320282": "?????????",
        "320297": "?????????",
        "320300": "?????????",
        "320302": "?????????",
        "320303": "?????????",
        "320305": "?????????",
        "320311": "?????????",
        "320321": "??????",
        "320322": "??????",
        "320323": "?????????",
        "320324": "?????????",
        "320381": "?????????",
        "320382": "?????????",
        "320383": "?????????",
        "320400": "?????????",
        "320402": "?????????",
        "320404": "?????????",
        "320405": "????????????",
        "320411": "?????????",
        "320412": "?????????",
        "320481": "?????????",
        "320482": "?????????",
        "320483": "?????????",
        "320500": "?????????",
        "320505": "?????????",
        "320506": "?????????",
        "320507": "?????????",
        "320508": "?????????",
        "320581": "?????????",
        "320582": "????????????",
        "320583": "?????????",
        "320584": "?????????",
        "320585": "?????????",
        "320596": "?????????",
        "320600": "?????????",
        "320602": "?????????",
        "320611": "?????????",
        "320612": "?????????",
        "320621": "?????????",
        "320623": "?????????",
        "320681": "?????????",
        "320682": "?????????",
        "320684": "?????????",
        "320694": "?????????",
        "320700": "????????????",
        "320703": "?????????",
        "320705": "?????????",
        "320706": "?????????",
        "320721": "?????????",
        "320722": "?????????",
        "320723": "?????????",
        "320724": "?????????",
        "320725": "?????????",
        "320800": "?????????",
        "320802": "?????????",
        "320803": "?????????",
        "320804": "?????????",
        "320811": "?????????",
        "320826": "?????????",
        "320829": "?????????",
        "320830": "?????????",
        "320831": "?????????",
        "320832": "?????????",
        "320900": "?????????",
        "320902": "?????????",
        "320903": "?????????",
        "320921": "?????????",
        "320922": "?????????",
        "320923": "?????????",
        "320924": "?????????",
        "320925": "?????????",
        "320981": "?????????",
        "320982": "?????????",
        "320983": "?????????",
        "321000": "?????????",
        "321002": "?????????",
        "321003": "?????????",
        "321023": "?????????",
        "321081": "?????????",
        "321084": "?????????",
        "321088": "?????????",
        "321093": "?????????",
        "321100": "?????????",
        "321102": "?????????",
        "321111": "?????????",
        "321112": "?????????",
        "321181": "?????????",
        "321182": "?????????",
        "321183": "?????????",
        "321184": "?????????",
        "321200": "?????????",
        "321202": "?????????",
        "321203": "?????????",
        "321281": "?????????",
        "321282": "?????????",
        "321283": "?????????",
        "321284": "?????????",
        "321285": "?????????",
        "321300": "?????????",
        "321302": "?????????",
        "321311": "?????????",
        "321322": "?????????",
        "321323": "?????????",
        "321324": "?????????",
        "321325": "?????????",
        "330000": "?????????",
        "330100": "?????????",
        "330102": "?????????",
        "330103": "?????????",
        "330104": "?????????",
        "330105": "?????????",
        "330106": "?????????",
        "330108": "?????????",
        "330109": "?????????",
        "330110": "?????????",
        "330122": "?????????",
        "330127": "?????????",
        "330182": "?????????",
        "330183": "?????????",
        "330185": "?????????",
        "330186": "?????????",
        "330200": "?????????",
        "330203": "?????????",
        "330204": "?????????",
        "330205": "?????????",
        "330206": "?????????",
        "330211": "?????????",
        "330212": "?????????",
        "330225": "?????????",
        "330226": "?????????",
        "330281": "?????????",
        "330282": "?????????",
        "330283": "?????????",
        "330284": "?????????",
        "330300": "?????????",
        "330302": "?????????",
        "330303": "?????????",
        "330304": "?????????",
        "330322": "?????????",
        "330324": "?????????",
        "330326": "?????????",
        "330327": "?????????",
        "330328": "?????????",
        "330329": "?????????",
        "330381": "?????????",
        "330382": "?????????",
        "330383": "?????????",
        "330400": "?????????",
        "330402": "?????????",
        "330411": "?????????",
        "330421": "?????????",
        "330424": "?????????",
        "330481": "?????????",
        "330482": "?????????",
        "330483": "?????????",
        "330484": "?????????",
        "330500": "?????????",
        "330502": "?????????",
        "330503": "?????????",
        "330521": "?????????",
        "330522": "?????????",
        "330523": "?????????",
        "330524": "?????????",
        "330600": "?????????",
        "330602": "?????????",
        "330621": "?????????",
        "330624": "?????????",
        "330681": "?????????",
        "330682": "?????????",
        "330683": "?????????",
        "330684": "?????????",
        "330700": "?????????",
        "330702": "?????????",
        "330703": "?????????",
        "330723": "?????????",
        "330726": "?????????",
        "330727": "?????????",
        "330781": "?????????",
        "330782": "?????????",
        "330783": "?????????",
        "330784": "?????????",
        "330785": "?????????",
        "330800": "?????????",
        "330802": "?????????",
        "330803": "?????????",
        "330822": "?????????",
        "330824": "?????????",
        "330825": "?????????",
        "330881": "?????????",
        "330882": "?????????",
        "330900": "?????????",
        "330902": "?????????",
        "330903": "?????????",
        "330921": "?????????",
        "330922": "?????????",
        "330923": "?????????",
        "331000": "?????????",
        "331002": "?????????",
        "331003": "?????????",
        "331004": "?????????",
        "331021": "?????????",
        "331022": "?????????",
        "331023": "?????????",
        "331024": "?????????",
        "331081": "?????????",
        "331082": "?????????",
        "331083": "?????????",
        "331100": "?????????",
        "331102": "?????????",
        "331121": "?????????",
        "331122": "?????????",
        "331123": "?????????",
        "331124": "?????????",
        "331125": "?????????",
        "331126": "?????????",
        "331127": "?????????????????????",
        "331181": "?????????",
        "331182": "?????????",
        "340000": "?????????",
        "340100": "?????????",
        "340102": "?????????",
        "340103": "?????????",
        "340104": "?????????",
        "340111": "?????????",
        "340121": "?????????",
        "340122": "?????????",
        "340123": "?????????",
        "340192": "?????????",
        "340200": "?????????",
        "340202": "?????????",
        "340203": "?????????",
        "340207": "?????????",
        "340208": "?????????",
        "340221": "?????????",
        "340222": "?????????",
        "340223": "?????????",
        "340224": "?????????",
        "340300": "?????????",
        "340302": "????????????",
        "340303": "?????????",
        "340304": "?????????",
        "340311": "?????????",
        "340321": "?????????",
        "340322": "?????????",
        "340323": "?????????",
        "340324": "?????????",
        "340400": "?????????",
        "340402": "?????????",
        "340403": "????????????",
        "340404": "????????????",
        "340405": "????????????",
        "340406": "?????????",
        "340421": "?????????",
        "340422": "?????????",
        "340500": "????????????",
        "340503": "?????????",
        "340504": "?????????",
        "340506": "?????????",
        "340521": "?????????",
        "340522": "?????????",
        "340600": "?????????",
        "340602": "?????????",
        "340603": "?????????",
        "340604": "?????????",
        "340621": "?????????",
        "340622": "?????????",
        "340700": "?????????",
        "340702": "????????????",
        "340703": "????????????",
        "340711": "??????",
        "340721": "?????????",
        "340722": "?????????",
        "340800": "?????????",
        "340802": "?????????",
        "340803": "?????????",
        "340811": "?????????",
        "340822": "?????????",
        "340823": "?????????",
        "340824": "?????????",
        "340825": "?????????",
        "340826": "?????????",
        "340827": "?????????",
        "340828": "?????????",
        "340881": "?????????",
        "340882": "?????????",
        "341000": "?????????",
        "341002": "?????????",
        "341003": "?????????",
        "341004": "?????????",
        "341021": "??????",
        "341022": "?????????",
        "341023": "??????",
        "341024": "?????????",
        "341025": "?????????",
        "341100": "?????????",
        "341102": "?????????",
        "341103": "?????????",
        "341122": "?????????",
        "341124": "?????????",
        "341125": "?????????",
        "341126": "?????????",
        "341181": "?????????",
        "341182": "?????????",
        "341183": "?????????",
        "341200": "?????????",
        "341202": "?????????",
        "341203": "?????????",
        "341204": "?????????",
        "341221": "?????????",
        "341222": "?????????",
        "341225": "?????????",
        "341226": "?????????",
        "341282": "?????????",
        "341283": "?????????",
        "341300": "?????????",
        "341302": "?????????",
        "341321": "?????????",
        "341322": "??????",
        "341323": "?????????",
        "341324": "??????",
        "341325": "?????????",
        "341400": "?????????",
        "341421": "?????????",
        "341422": "?????????",
        "341423": "?????????",
        "341424": "??????",
        "341500": "?????????",
        "341502": "?????????",
        "341503": "?????????",
        "341521": "??????",
        "341522": "?????????",
        "341523": "?????????",
        "341524": "?????????",
        "341525": "?????????",
        "341526": "?????????",
        "341600": "?????????",
        "341602": "?????????",
        "341621": "?????????",
        "341622": "?????????",
        "341623": "?????????",
        "341624": "?????????",
        "341700": "?????????",
        "341702": "?????????",
        "341721": "?????????",
        "341722": "?????????",
        "341723": "?????????",
        "341724": "?????????",
        "341800": "?????????",
        "341802": "?????????",
        "341821": "?????????",
        "341822": "?????????",
        "341823": "??????",
        "341824": "?????????",
        "341825": "?????????",
        "341881": "?????????",
        "341882": "?????????",
        "350000": "?????????",
        "350100": "?????????",
        "350102": "?????????",
        "350103": "?????????",
        "350104": "?????????",
        "350105": "?????????",
        "350111": "?????????",
        "350121": "?????????",
        "350122": "?????????",
        "350123": "?????????",
        "350124": "?????????",
        "350125": "?????????",
        "350128": "?????????",
        "350181": "?????????",
        "350182": "?????????",
        "350183": "?????????",
        "350200": "?????????",
        "350203": "?????????",
        "350205": "?????????",
        "350206": "?????????",
        "350211": "?????????",
        "350212": "?????????",
        "350213": "?????????",
        "350214": "?????????",
        "350300": "?????????",
        "350302": "?????????",
        "350303": "?????????",
        "350304": "?????????",
        "350305": "?????????",
        "350322": "?????????",
        "350323": "?????????",
        "350400": "?????????",
        "350402": "?????????",
        "350403": "?????????",
        "350421": "?????????",
        "350423": "?????????",
        "350424": "?????????",
        "350425": "?????????",
        "350426": "?????????",
        "350427": "??????",
        "350428": "?????????",
        "350429": "?????????",
        "350430": "?????????",
        "350481": "?????????",
        "350482": "?????????",
        "350500": "?????????",
        "350502": "?????????",
        "350503": "?????????",
        "350504": "?????????",
        "350505": "?????????",
        "350521": "?????????",
        "350524": "?????????",
        "350525": "?????????",
        "350526": "?????????",
        "350527": "?????????",
        "350581": "?????????",
        "350582": "?????????",
        "350583": "?????????",
        "350584": "?????????",
        "350600": "?????????",
        "350602": "?????????",
        "350603": "?????????",
        "350622": "?????????",
        "350623": "?????????",
        "350624": "?????????",
        "350625": "?????????",
        "350626": "?????????",
        "350627": "?????????",
        "350628": "?????????",
        "350629": "?????????",
        "350681": "?????????",
        "350682": "?????????",
        "350700": "?????????",
        "350702": "?????????",
        "350721": "?????????",
        "350722": "?????????",
        "350723": "?????????",
        "350724": "?????????",
        "350725": "?????????",
        "350781": "?????????",
        "350782": "????????????",
        "350783": "?????????",
        "350784": "?????????",
        "350785": "?????????",
        "350800": "?????????",
        "350802": "?????????",
        "350821": "?????????",
        "350822": "?????????",
        "350823": "?????????",
        "350824": "?????????",
        "350825": "?????????",
        "350881": "?????????",
        "350882": "?????????",
        "350900": "?????????",
        "350902": "?????????",
        "350921": "?????????",
        "350922": "?????????",
        "350923": "?????????",
        "350924": "?????????",
        "350925": "?????????",
        "350926": "?????????",
        "350981": "?????????",
        "350982": "?????????",
        "350983": "?????????",
        "360000": "?????????",
        "360100": "?????????",
        "360102": "?????????",
        "360103": "?????????",
        "360104": "????????????",
        "360105": "?????????",
        "360111": "????????????",
        "360121": "?????????",
        "360122": "?????????",
        "360123": "?????????",
        "360124": "?????????",
        "360128": "?????????",
        "360200": "????????????",
        "360202": "?????????",
        "360203": "?????????",
        "360222": "?????????",
        "360281": "?????????",
        "360282": "?????????",
        "360300": "?????????",
        "360302": "?????????",
        "360313": "?????????",
        "360321": "?????????",
        "360322": "?????????",
        "360323": "?????????",
        "360324": "?????????",
        "360400": "?????????",
        "360402": "?????????",
        "360403": "?????????",
        "360421": "?????????",
        "360423": "?????????",
        "360424": "?????????",
        "360425": "?????????",
        "360426": "?????????",
        "360427": "?????????",
        "360428": "?????????",
        "360429": "?????????",
        "360430": "?????????",
        "360481": "?????????",
        "360482": "?????????",
        "360483": "????????????",
        "360500": "?????????",
        "360502": "?????????",
        "360521": "?????????",
        "360522": "?????????",
        "360600": "?????????",
        "360602": "?????????",
        "360622": "?????????",
        "360681": "?????????",
        "360682": "?????????",
        "360700": "?????????",
        "360702": "?????????",
        "360721": "??????",
        "360722": "?????????",
        "360723": "?????????",
        "360724": "?????????",
        "360725": "?????????",
        "360726": "?????????",
        "360727": "?????????",
        "360728": "?????????",
        "360729": "?????????",
        "360730": "?????????",
        "360731": "?????????",
        "360732": "?????????",
        "360733": "?????????",
        "360734": "?????????",
        "360735": "?????????",
        "360781": "?????????",
        "360782": "?????????",
        "360783": "?????????",
        "360800": "?????????",
        "360802": "?????????",
        "360803": "?????????",
        "360821": "?????????",
        "360822": "?????????",
        "360823": "?????????",
        "360824": "?????????",
        "360825": "?????????",
        "360826": "?????????",
        "360827": "?????????",
        "360828": "?????????",
        "360829": "?????????",
        "360830": "?????????",
        "360881": "????????????",
        "360882": "?????????",
        "360900": "?????????",
        "360902": "?????????",
        "360921": "?????????",
        "360922": "?????????",
        "360923": "?????????",
        "360924": "?????????",
        "360925": "?????????",
        "360926": "?????????",
        "360981": "?????????",
        "360982": "?????????",
        "360983": "?????????",
        "360984": "?????????",
        "361000": "?????????",
        "361002": "?????????",
        "361021": "?????????",
        "361022": "?????????",
        "361023": "?????????",
        "361024": "?????????",
        "361025": "?????????",
        "361026": "?????????",
        "361027": "?????????",
        "361028": "?????????",
        "361029": "?????????",
        "361030": "?????????",
        "361031": "?????????",
        "361100": "?????????",
        "361102": "?????????",
        "361121": "?????????",
        "361122": "?????????",
        "361123": "?????????",
        "361124": "?????????",
        "361125": "?????????",
        "361126": "?????????",
        "361127": "?????????",
        "361128": "?????????",
        "361129": "?????????",
        "361130": "?????????",
        "361181": "?????????",
        "361182": "?????????",
        "370000": "?????????",
        "370100": "?????????",
        "370102": "?????????",
        "370103": "?????????",
        "370104": "?????????",
        "370105": "?????????",
        "370112": "?????????",
        "370113": "?????????",
        "370124": "?????????",
        "370125": "?????????",
        "370126": "?????????",
        "370181": "?????????",
        "370182": "?????????",
        "370200": "?????????",
        "370202": "?????????",
        "370203": "?????????",
        "370211": "?????????",
        "370212": "?????????",
        "370213": "?????????",
        "370214": "?????????",
        "370281": "?????????",
        "370282": "?????????",
        "370283": "?????????",
        "370285": "?????????",
        "370286": "?????????",
        "370300": "?????????",
        "370302": "?????????",
        "370303": "?????????",
        "370304": "?????????",
        "370305": "?????????",
        "370306": "?????????",
        "370321": "?????????",
        "370322": "?????????",
        "370323": "?????????",
        "370324": "?????????",
        "370400": "?????????",
        "370402": "?????????",
        "370403": "?????????",
        "370404": "?????????",
        "370405": "????????????",
        "370406": "?????????",
        "370481": "?????????",
        "370482": "?????????",
        "370500": "?????????",
        "370502": "?????????",
        "370503": "?????????",
        "370521": "?????????",
        "370522": "?????????",
        "370523": "?????????",
        "370591": "?????????",
        "370600": "?????????",
        "370602": "?????????",
        "370611": "?????????",
        "370612": "?????????",
        "370613": "?????????",
        "370634": "?????????",
        "370681": "?????????",
        "370682": "?????????",
        "370683": "?????????",
        "370684": "?????????",
        "370685": "?????????",
        "370686": "?????????",
        "370687": "?????????",
        "370688": "?????????",
        "370700": "?????????",
        "370702": "?????????",
        "370703": "?????????",
        "370704": "?????????",
        "370705": "?????????",
        "370724": "?????????",
        "370725": "?????????",
        "370781": "?????????",
        "370782": "?????????",
        "370783": "?????????",
        "370784": "?????????",
        "370785": "?????????",
        "370786": "?????????",
        "370787": "?????????",
        "370800": "?????????",
        "370802": "?????????",
        "370811": "?????????",
        "370826": "?????????",
        "370827": "?????????",
        "370828": "?????????",
        "370829": "?????????",
        "370830": "?????????",
        "370831": "?????????",
        "370832": "?????????",
        "370881": "?????????",
        "370882": "?????????",
        "370883": "?????????",
        "370884": "?????????",
        "370900": "?????????",
        "370902": "?????????",
        "370903": "?????????",
        "370921": "?????????",
        "370923": "?????????",
        "370982": "?????????",
        "370983": "?????????",
        "370984": "?????????",
        "371000": "?????????",
        "371002": "?????????",
        "371081": "?????????",
        "371082": "?????????",
        "371083": "?????????",
        "371084": "?????????",
        "371100": "?????????",
        "371102": "?????????",
        "371103": "?????????",
        "371121": "?????????",
        "371122": "??????",
        "371123": "?????????",
        "371200": "?????????",
        "371202": "?????????",
        "371203": "?????????",
        "371204": "?????????",
        "371300": "?????????",
        "371302": "?????????",
        "371311": "?????????",
        "371312": "?????????",
        "371321": "?????????",
        "371322": "?????????",
        "371323": "?????????",
        "371324": "?????????",
        "371325": "??????",
        "371326": "?????????",
        "371327": "?????????",
        "371328": "?????????",
        "371329": "?????????",
        "371330": "?????????",
        "371400": "?????????",
        "371402": "?????????",
        "371421": "??????",
        "371422": "?????????",
        "371423": "?????????",
        "371424": "?????????",
        "371425": "?????????",
        "371426": "?????????",
        "371427": "?????????",
        "371428": "?????????",
        "371481": "?????????",
        "371482": "?????????",
        "371483": "?????????",
        "371500": "?????????",
        "371502": "????????????",
        "371521": "?????????",
        "371522": "??????",
        "371523": "?????????",
        "371524": "?????????",
        "371525": "??????",
        "371526": "?????????",
        "371581": "?????????",
        "371582": "?????????",
        "371600": "?????????",
        "371602": "?????????",
        "371621": "?????????",
        "371622": "?????????",
        "371623": "?????????",
        "371624": "?????????",
        "371625": "?????????",
        "371626": "?????????",
        "371627": "?????????",
        "371700": "?????????",
        "371702": "?????????",
        "371721": "??????",
        "371722": "??????",
        "371723": "?????????",
        "371724": "?????????",
        "371725": "?????????",
        "371726": "?????????",
        "371727": "?????????",
        "371728": "?????????",
        "371729": "?????????",
        "410000": "?????????",
        "410100": "?????????",
        "410102": "?????????",
        "410103": "?????????",
        "410104": "???????????????",
        "410105": "?????????",
        "410106": "?????????",
        "410108": "?????????",
        "410122": "?????????",
        "410181": "?????????",
        "410182": "?????????",
        "410183": "?????????",
        "410184": "?????????",
        "410185": "?????????",
        "410188": "?????????",
        "410200": "?????????",
        "410202": "?????????",
        "410203": "???????????????",
        "410204": "?????????",
        "410205": "????????????",
        "410211": "?????????",
        "410221": "??????",
        "410222": "?????????",
        "410223": "?????????",
        "410224": "?????????",
        "410225": "?????????",
        "410226": "?????????",
        "410300": "?????????",
        "410302": "?????????",
        "410303": "?????????",
        "410304": "???????????????",
        "410305": "?????????",
        "410306": "?????????",
        "410307": "?????????",
        "410322": "?????????",
        "410323": "?????????",
        "410324": "?????????",
        "410325": "??????",
        "410326": "?????????",
        "410327": "?????????",
        "410328": "?????????",
        "410329": "?????????",
        "410381": "?????????",
        "410400": "????????????",
        "410402": "?????????",
        "410403": "?????????",
        "410404": "?????????",
        "410411": "?????????",
        "410421": "?????????",
        "410422": "??????",
        "410423": "?????????",
        "410425": "??????",
        "410481": "?????????",
        "410482": "?????????",
        "410483": "?????????",
        "410500": "?????????",
        "410502": "?????????",
        "410503": "?????????",
        "410505": "?????????",
        "410506": "?????????",
        "410522": "?????????",
        "410523": "?????????",
        "410526": "??????",
        "410527": "?????????",
        "410581": "?????????",
        "410582": "?????????",
        "410600": "?????????",
        "410602": "?????????",
        "410603": "?????????",
        "410611": "?????????",
        "410621": "??????",
        "410622": "??????",
        "410623": "?????????",
        "410700": "?????????",
        "410702": "?????????",
        "410703": "?????????",
        "410704": "?????????",
        "410711": "?????????",
        "410721": "?????????",
        "410724": "?????????",
        "410725": "?????????",
        "410726": "?????????",
        "410727": "?????????",
        "410728": "?????????",
        "410781": "?????????",
        "410782": "?????????",
        "410783": "?????????",
        "410800": "?????????",
        "410802": "?????????",
        "410803": "?????????",
        "410804": "?????????",
        "410811": "?????????",
        "410821": "?????????",
        "410822": "?????????",
        "410823": "?????????",
        "410825": "??????",
        "410881": "?????????",
        "410882": "?????????",
        "410883": "?????????",
        "410884": "?????????",
        "410900": "?????????",
        "410902": "?????????",
        "410922": "?????????",
        "410923": "?????????",
        "410926": "??????",
        "410927": "?????????",
        "410928": "?????????",
        "410929": "?????????",
        "411000": "?????????",
        "411002": "?????????",
        "411023": "?????????",
        "411024": "?????????",
        "411025": "?????????",
        "411081": "?????????",
        "411082": "?????????",
        "411083": "?????????",
        "411100": "?????????",
        "411102": "?????????",
        "411103": "?????????",
        "411104": "?????????",
        "411121": "?????????",
        "411122": "?????????",
        "411123": "?????????",
        "411200": "????????????",
        "411202": "?????????",
        "411221": "?????????",
        "411222": "??????",
        "411224": "?????????",
        "411281": "?????????",
        "411282": "?????????",
        "411283": "?????????",
        "411300": "?????????",
        "411302": "?????????",
        "411303": "?????????",
        "411321": "?????????",
        "411322": "?????????",
        "411323": "?????????",
        "411324": "?????????",
        "411325": "?????????",
        "411326": "?????????",
        "411327": "?????????",
        "411328": "?????????",
        "411329": "?????????",
        "411330": "?????????",
        "411381": "?????????",
        "411382": "?????????",
        "411400": "?????????",
        "411402": "?????????",
        "411403": "?????????",
        "411421": "?????????",
        "411422": "??????",
        "411423": "?????????",
        "411424": "?????????",
        "411425": "?????????",
        "411426": "?????????",
        "411481": "?????????",
        "411482": "?????????",
        "411500": "?????????",
        "411502": "?????????",
        "411503": "?????????",
        "411521": "?????????",
        "411522": "?????????",
        "411523": "??????",
        "411524": "?????????",
        "411525": "?????????",
        "411526": "?????????",
        "411527": "?????????",
        "411528": "??????",
        "411529": "?????????",
        "411600": "?????????",
        "411602": "?????????",
        "411621": "?????????",
        "411622": "?????????",
        "411623": "?????????",
        "411624": "?????????",
        "411625": "?????????",
        "411626": "?????????",
        "411627": "?????????",
        "411628": "?????????",
        "411681": "?????????",
        "411682": "?????????",
        "411700": "????????????",
        "411702": "?????????",
        "411721": "?????????",
        "411722": "?????????",
        "411723": "?????????",
        "411724": "?????????",
        "411725": "?????????",
        "411726": "?????????",
        "411727": "?????????",
        "411728": "?????????",
        "411729": "?????????",
        "411730": "?????????",
        "420000": "?????????",
        "420100": "?????????",
        "420102": "?????????",
        "420103": "?????????",
        "420104": "?????????",
        "420105": "?????????",
        "420106": "?????????",
        "420107": "?????????",
        "420111": "?????????",
        "420112": "????????????",
        "420113": "?????????",
        "420114": "?????????",
        "420115": "?????????",
        "420116": "?????????",
        "420117": "?????????",
        "420118": "?????????",
        "420200": "?????????",
        "420202": "????????????",
        "420203": "????????????",
        "420204": "?????????",
        "420205": "?????????",
        "420222": "?????????",
        "420281": "?????????",
        "420282": "?????????",
        "420300": "?????????",
        "420302": "?????????",
        "420303": "?????????",
        "420321": "??????",
        "420322": "?????????",
        "420323": "?????????",
        "420324": "?????????",
        "420325": "??????",
        "420381": "????????????",
        "420383": "?????????",
        "420500": "?????????",
        "420502": "?????????",
        "420503": "????????????",
        "420504": "?????????",
        "420505": "?????????",
        "420506": "?????????",
        "420525": "?????????",
        "420526": "?????????",
        "420527": "?????????",
        "420528": "????????????????????????",
        "420529": "????????????????????????",
        "420581": "?????????",
        "420582": "?????????",
        "420583": "?????????",
        "420584": "?????????",
        "420600": "?????????",
        "420602": "?????????",
        "420606": "?????????",
        "420607": "?????????",
        "420624": "?????????",
        "420625": "?????????",
        "420626": "?????????",
        "420682": "????????????",
        "420683": "?????????",
        "420684": "?????????",
        "420685": "?????????",
        "420700": "?????????",
        "420702": "????????????",
        "420703": "?????????",
        "420704": "?????????",
        "420705": "?????????",
        "420800": "?????????",
        "420802": "?????????",
        "420804": "?????????",
        "420821": "?????????",
        "420822": "?????????",
        "420881": "?????????",
        "420882": "?????????",
        "420900": "?????????",
        "420902": "?????????",
        "420921": "?????????",
        "420922": "?????????",
        "420923": "?????????",
        "420981": "?????????",
        "420982": "?????????",
        "420984": "?????????",
        "420985": "?????????",
        "421000": "?????????",
        "421002": "?????????",
        "421003": "?????????",
        "421022": "?????????",
        "421023": "?????????",
        "421024": "?????????",
        "421081": "?????????",
        "421083": "?????????",
        "421087": "?????????",
        "421088": "?????????",
        "421100": "?????????",
        "421102": "?????????",
        "421121": "?????????",
        "421122": "?????????",
        "421123": "?????????",
        "421124": "?????????",
        "421125": "?????????",
        "421126": "?????????",
        "421127": "?????????",
        "421181": "?????????",
        "421182": "?????????",
        "421183": "?????????",
        "421200": "?????????",
        "421202": "?????????",
        "421221": "?????????",
        "421222": "?????????",
        "421223": "?????????",
        "421224": "?????????",
        "421281": "?????????",
        "421283": "?????????",
        "421300": "?????????",
        "421302": "?????????",
        "421321": "??????",
        "421381": "?????????",
        "421382": "?????????",
        "422800": "??????????????????????????????",
        "422801": "?????????",
        "422802": "?????????",
        "422822": "?????????",
        "422823": "?????????",
        "422825": "?????????",
        "422826": "?????????",
        "422827": "?????????",
        "422828": "?????????",
        "422829": "?????????",
        "429004": "?????????",
        "429005": "?????????",
        "429006": "?????????",
        "429021": "???????????????",
        "430000": "?????????",
        "430100": "?????????",
        "430102": "?????????",
        "430103": "?????????",
        "430104": "?????????",
        "430105": "?????????",
        "430111": "?????????",
        "430121": "?????????",
        "430122": "?????????",
        "430124": "?????????",
        "430181": "?????????",
        "430182": "?????????",
        "430200": "?????????",
        "430202": "?????????",
        "430203": "?????????",
        "430204": "?????????",
        "430211": "?????????",
        "430221": "?????????",
        "430223": "??????",
        "430224": "?????????",
        "430225": "?????????",
        "430281": "?????????",
        "430282": "?????????",
        "430300": "?????????",
        "430302": "?????????",
        "430304": "?????????",
        "430321": "?????????",
        "430381": "?????????",
        "430382": "?????????",
        "430383": "?????????",
        "430400": "?????????",
        "430405": "?????????",
        "430406": "?????????",
        "430407": "?????????",
        "430408": "?????????",
        "430412": "?????????",
        "430421": "?????????",
        "430422": "?????????",
        "430423": "?????????",
        "430424": "?????????",
        "430426": "?????????",
        "430481": "?????????",
        "430482": "?????????",
        "430483": "?????????",
        "430500": "?????????",
        "430502": "?????????",
        "430503": "?????????",
        "430511": "?????????",
        "430521": "?????????",
        "430522": "?????????",
        "430523": "?????????",
        "430524": "?????????",
        "430525": "?????????",
        "430527": "?????????",
        "430528": "?????????",
        "430529": "?????????????????????",
        "430581": "?????????",
        "430582": "?????????",
        "430600": "?????????",
        "430602": "????????????",
        "430603": "?????????",
        "430611": "?????????",
        "430621": "?????????",
        "430623": "?????????",
        "430624": "?????????",
        "430626": "?????????",
        "430681": "?????????",
        "430682": "?????????",
        "430683": "?????????",
        "430700": "?????????",
        "430702": "?????????",
        "430703": "?????????",
        "430721": "?????????",
        "430722": "?????????",
        "430723": "??????",
        "430724": "?????????",
        "430725": "?????????",
        "430726": "?????????",
        "430781": "?????????",
        "430782": "?????????",
        "430800": "????????????",
        "430802": "?????????",
        "430811": "????????????",
        "430821": "?????????",
        "430822": "?????????",
        "430823": "?????????",
        "430900": "?????????",
        "430902": "?????????",
        "430903": "?????????",
        "430921": "??????",
        "430922": "?????????",
        "430923": "?????????",
        "430981": "?????????",
        "430982": "?????????",
        "431000": "?????????",
        "431002": "?????????",
        "431003": "?????????",
        "431021": "?????????",
        "431022": "?????????",
        "431023": "?????????",
        "431024": "?????????",
        "431025": "?????????",
        "431026": "?????????",
        "431027": "?????????",
        "431028": "?????????",
        "431081": "?????????",
        "431082": "?????????",
        "431100": "?????????",
        "431102": "?????????",
        "431103": "????????????",
        "431121": "?????????",
        "431122": "?????????",
        "431123": "?????????",
        "431124": "??????",
        "431125": "?????????",
        "431126": "?????????",
        "431127": "?????????",
        "431128": "?????????",
        "431129": "?????????????????????",
        "431130": "?????????",
        "431200": "?????????",
        "431202": "?????????",
        "431221": "?????????",
        "431222": "?????????",
        "431223": "?????????",
        "431224": "?????????",
        "431225": "?????????",
        "431226": "?????????????????????",
        "431227": "?????????????????????",
        "431228": "?????????????????????",
        "431229": "???????????????????????????",
        "431230": "?????????????????????",
        "431281": "?????????",
        "431282": "?????????",
        "431300": "?????????",
        "431302": "?????????",
        "431321": "?????????",
        "431322": "?????????",
        "431381": "????????????",
        "431382": "?????????",
        "431383": "?????????",
        "433100": "??????????????????????????????",
        "433101": "?????????",
        "433122": "?????????",
        "433123": "?????????",
        "433124": "?????????",
        "433125": "?????????",
        "433126": "?????????",
        "433127": "?????????",
        "433130": "?????????",
        "433131": "?????????",
        "440000": "?????????",
        "440100": "?????????",
        "440103": "?????????",
        "440104": "?????????",
        "440105": "?????????",
        "440106": "?????????",
        "440111": "?????????",
        "440112": "?????????",
        "440113": "?????????",
        "440114": "?????????",
        "440115": "?????????",
        "440116": "?????????",
        "440183": "?????????",
        "440184": "?????????",
        "440189": "?????????",
        "440200": "?????????",
        "440203": "?????????",
        "440204": "?????????",
        "440205": "?????????",
        "440222": "?????????",
        "440224": "?????????",
        "440229": "?????????",
        "440232": "?????????????????????",
        "440233": "?????????",
        "440281": "?????????",
        "440282": "?????????",
        "440283": "?????????",
        "440300": "?????????",
        "440303": "?????????",
        "440304": "?????????",
        "440305": "?????????",
        "440306": "?????????",
        "440307": "?????????",
        "440308": "?????????",
        "440309": "?????????",
        "440320": "????????????",
        "440321": "????????????",
        "440322": "????????????",
        "440323": "????????????",
        "440400": "?????????",
        "440402": "?????????",
        "440403": "?????????",
        "440404": "?????????",
        "440488": "?????????",
        "440500": "?????????",
        "440507": "?????????",
        "440511": "?????????",
        "440512": "?????????",
        "440513": "?????????",
        "440514": "?????????",
        "440515": "?????????",
        "440523": "?????????",
        "440524": "?????????",
        "440600": "?????????",
        "440604": "?????????",
        "440605": "?????????",
        "440606": "?????????",
        "440607": "?????????",
        "440608": "?????????",
        "440609": "?????????",
        "440700": "?????????",
        "440703": "?????????",
        "440704": "?????????",
        "440705": "?????????",
        "440781": "?????????",
        "440783": "?????????",
        "440784": "?????????",
        "440785": "?????????",
        "440786": "?????????",
        "440800": "?????????",
        "440802": "?????????",
        "440803": "?????????",
        "440804": "?????????",
        "440811": "?????????",
        "440823": "?????????",
        "440825": "?????????",
        "440881": "?????????",
        "440882": "?????????",
        "440883": "?????????",
        "440884": "?????????",
        "440900": "?????????",
        "440902": "?????????",
        "440903": "?????????",
        "440923": "?????????",
        "440981": "?????????",
        "440982": "?????????",
        "440983": "?????????",
        "440984": "?????????",
        "441200": "?????????",
        "441202": "?????????",
        "441203": "?????????",
        "441223": "?????????",
        "441224": "?????????",
        "441225": "?????????",
        "441226": "?????????",
        "441283": "?????????",
        "441284": "?????????",
        "441285": "?????????",
        "441300": "?????????",
        "441302": "?????????",
        "441303": "?????????",
        "441322": "?????????",
        "441323": "?????????",
        "441324": "?????????",
        "441325": "?????????",
        "441400": "?????????",
        "441402": "?????????",
        "441421": "??????",
        "441422": "?????????",
        "441423": "?????????",
        "441424": "?????????",
        "441426": "?????????",
        "441427": "?????????",
        "441481": "?????????",
        "441482": "?????????",
        "441500": "?????????",
        "441502": "??????",
        "441521": "?????????",
        "441523": "?????????",
        "441581": "?????????",
        "441582": "?????????",
        "441600": "?????????",
        "441602": "?????????",
        "441621": "?????????",
        "441622": "?????????",
        "441623": "?????????",
        "441624": "?????????",
        "441625": "?????????",
        "441626": "?????????",
        "441700": "?????????",
        "441702": "?????????",
        "441721": "?????????",
        "441723": "?????????",
        "441781": "?????????",
        "441782": "?????????",
        "441800": "?????????",
        "441802": "?????????",
        "441821": "?????????",
        "441823": "?????????",
        "441825": "???????????????????????????",
        "441826": "?????????????????????",
        "441827": "?????????",
        "441881": "?????????",
        "441882": "?????????",
        "441883": "?????????",
        "441900": "?????????",
        "442000": "?????????",
        "442101": "????????????",
        "445100": "?????????",
        "445102": "?????????",
        "445121": "?????????",
        "445122": "?????????",
        "445186": "?????????",
        "445200": "?????????",
        "445202": "?????????",
        "445221": "?????????",
        "445222": "?????????",
        "445224": "?????????",
        "445281": "?????????",
        "445285": "?????????",
        "445300": "?????????",
        "445302": "?????????",
        "445321": "?????????",
        "445322": "?????????",
        "445323": "?????????",
        "445381": "?????????",
        "445382": "?????????",
        "450000": "?????????????????????",
        "450100": "?????????",
        "450102": "?????????",
        "450103": "?????????",
        "450105": "?????????",
        "450107": "????????????",
        "450108": "?????????",
        "450109": "?????????",
        "450122": "?????????",
        "450123": "?????????",
        "450124": "?????????",
        "450125": "?????????",
        "450126": "?????????",
        "450127": "??????",
        "450128": "?????????",
        "450200": "?????????",
        "450202": "?????????",
        "450203": "?????????",
        "450204": "?????????",
        "450205": "?????????",
        "450221": "?????????",
        "450222": "?????????",
        "450223": "?????????",
        "450224": "?????????",
        "450225": "?????????????????????",
        "450226": "?????????????????????",
        "450227": "?????????",
        "450300": "?????????",
        "450302": "?????????",
        "450303": "?????????",
        "450304": "?????????",
        "450305": "?????????",
        "450311": "?????????",
        "450321": "?????????",
        "450322": "?????????",
        "450323": "?????????",
        "450324": "?????????",
        "450325": "?????????",
        "450326": "?????????",
        "450327": "?????????",
        "450328": "?????????????????????",
        "450329": "?????????",
        "450330": "?????????",
        "450331": "?????????",
        "450332": "?????????????????????",
        "450333": "?????????",
        "450400": "?????????",
        "450403": "?????????",
        "450405": "?????????",
        "450406": "?????????",
        "450421": "?????????",
        "450422": "??????",
        "450423": "?????????",
        "450481": "?????????",
        "450482": "?????????",
        "450500": "?????????",
        "450502": "?????????",
        "450503": "?????????",
        "450512": "????????????",
        "450521": "?????????",
        "450522": "?????????",
        "450600": "????????????",
        "450602": "?????????",
        "450603": "?????????",
        "450621": "?????????",
        "450681": "?????????",
        "450682": "?????????",
        "450700": "?????????",
        "450702": "?????????",
        "450703": "?????????",
        "450721": "?????????",
        "450722": "?????????",
        "450723": "?????????",
        "450800": "?????????",
        "450802": "?????????",
        "450803": "?????????",
        "450804": "?????????",
        "450821": "?????????",
        "450881": "?????????",
        "450882": "?????????",
        "450900": "?????????",
        "450902": "?????????",
        "450903": "?????????",
        "450921": "??????",
        "450922": "?????????",
        "450923": "?????????",
        "450924": "?????????",
        "450981": "?????????",
        "450982": "?????????",
        "451000": "?????????",
        "451002": "?????????",
        "451021": "?????????",
        "451022": "?????????",
        "451023": "?????????",
        "451024": "?????????",
        "451025": "?????????",
        "451026": "?????????",
        "451027": "?????????",
        "451028": "?????????",
        "451029": "?????????",
        "451030": "?????????",
        "451031": "?????????????????????",
        "451032": "?????????",
        "451100": "?????????",
        "451102": "?????????",
        "451119": "???????????????",
        "451121": "?????????",
        "451122": "?????????",
        "451123": "?????????????????????",
        "451124": "?????????",
        "451200": "?????????",
        "451202": "????????????",
        "451221": "?????????",
        "451222": "?????????",
        "451223": "?????????",
        "451224": "?????????",
        "451225": "????????????????????????",
        "451226": "????????????????????????",
        "451227": "?????????????????????",
        "451228": "?????????????????????",
        "451229": "?????????????????????",
        "451281": "?????????",
        "451282": "?????????",
        "451300": "?????????",
        "451302": "?????????",
        "451321": "?????????",
        "451322": "?????????",
        "451323": "?????????",
        "451324": "?????????????????????",
        "451381": "?????????",
        "451382": "?????????",
        "451400": "?????????",
        "451402": "?????????",
        "451421": "?????????",
        "451422": "?????????",
        "451423": "?????????",
        "451424": "?????????",
        "451425": "?????????",
        "451481": "?????????",
        "451482": "?????????",
        "460000": "?????????",
        "460100": "?????????",
        "460105": "?????????",
        "460106": "?????????",
        "460107": "?????????",
        "460108": "?????????",
        "460109": "?????????",
        "460200": "?????????",
        "460300": "?????????",
        "460321": "????????????",
        "460322": "????????????",
        "460323": "?????????????????????????????????",
        "469001": "????????????",
        "469002": "?????????",
        "469003": "?????????",
        "469005": "?????????",
        "469006": "?????????",
        "469007": "?????????",
        "469025": "?????????",
        "469026": "?????????",
        "469027": "?????????",
        "469028": "?????????",
        "469030": "?????????????????????",
        "469031": "?????????????????????",
        "469033": "?????????????????????",
        "469034": "?????????????????????",
        "469035": "???????????????????????????",
        "469036": "???????????????????????????",
        "471005": "?????????",
        "500000": "??????",
        "500100": "?????????",
        "500101": "?????????",
        "500102": "?????????",
        "500103": "?????????",
        "500104": "????????????",
        "500105": "?????????",
        "500106": "????????????",
        "500107": "????????????",
        "500108": "?????????",
        "500109": "?????????",
        "500110": "?????????",
        "500111": "?????????",
        "500112": "?????????",
        "500113": "?????????",
        "500114": "?????????",
        "500115": "?????????",
        "500222": "?????????",
        "500223": "?????????",
        "500224": "?????????",
        "500225": "?????????",
        "500226": "?????????",
        "500227": "?????????",
        "500228": "?????????",
        "500229": "?????????",
        "500230": "?????????",
        "500231": "?????????",
        "500232": "?????????",
        "500233": "??????",
        "500234": "??????",
        "500235": "?????????",
        "500236": "?????????",
        "500237": "?????????",
        "500238": "?????????",
        "500240": "????????????????????????",
        "500241": "??????????????????????????????",
        "500242": "??????????????????????????????",
        "500243": "??????????????????????????????",
        "500381": "?????????",
        "500382": "?????????",
        "500383": "?????????",
        "500384": "?????????",
        "500385": "?????????",
        "510000": "?????????",
        "510100": "?????????",
        "510104": "?????????",
        "510105": "?????????",
        "510106": "?????????",
        "510107": "?????????",
        "510108": "?????????",
        "510112": "????????????",
        "510113": "????????????",
        "510114": "?????????",
        "510115": "?????????",
        "510121": "?????????",
        "510122": "?????????",
        "510124": "??????",
        "510129": "?????????",
        "510131": "?????????",
        "510132": "?????????",
        "510181": "????????????",
        "510182": "?????????",
        "510183": "?????????",
        "510184": "?????????",
        "510185": "?????????",
        "510300": "?????????",
        "510302": "????????????",
        "510303": "?????????",
        "510304": "?????????",
        "510311": "?????????",
        "510321": "??????",
        "510322": "?????????",
        "510323": "?????????",
        "510400": "????????????",
        "510402": "??????",
        "510403": "??????",
        "510411": "?????????",
        "510421": "?????????",
        "510422": "?????????",
        "510423": "?????????",
        "510500": "?????????",
        "510502": "?????????",
        "510503": "?????????",
        "510504": "????????????",
        "510521": "??????",
        "510522": "?????????",
        "510524": "?????????",
        "510525": "?????????",
        "510526": "?????????",
        "510600": "?????????",
        "510603": "?????????",
        "510623": "?????????",
        "510626": "?????????",
        "510681": "?????????",
        "510682": "?????????",
        "510683": "?????????",
        "510684": "?????????",
        "510700": "?????????",
        "510703": "?????????",
        "510704": "?????????",
        "510722": "?????????",
        "510723": "?????????",
        "510724": "??????",
        "510725": "?????????",
        "510726": "?????????????????????",
        "510727": "?????????",
        "510781": "?????????",
        "510782": "?????????",
        "510800": "?????????",
        "510802": "?????????",
        "510811": "?????????",
        "510812": "?????????",
        "510821": "?????????",
        "510822": "?????????",
        "510823": "?????????",
        "510824": "?????????",
        "510825": "?????????",
        "510900": "?????????",
        "510903": "?????????",
        "510904": "?????????",
        "510921": "?????????",
        "510922": "?????????",
        "510923": "?????????",
        "510924": "?????????",
        "511000": "?????????",
        "511002": "?????????",
        "511011": "?????????",
        "511024": "?????????",
        "511025": "?????????",
        "511028": "?????????",
        "511029": "?????????",
        "511100": "?????????",
        "511102": "?????????",
        "511111": "?????????",
        "511112": "????????????",
        "511113": "????????????",
        "511123": "?????????",
        "511124": "?????????",
        "511126": "?????????",
        "511129": "?????????",
        "511132": "?????????????????????",
        "511133": "?????????????????????",
        "511181": "????????????",
        "511182": "?????????",
        "511300": "?????????",
        "511302": "?????????",
        "511303": "?????????",
        "511304": "?????????",
        "511321": "?????????",
        "511322": "?????????",
        "511323": "?????????",
        "511324": "?????????",
        "511325": "?????????",
        "511381": "?????????",
        "511382": "?????????",
        "511400": "?????????",
        "511402": "?????????",
        "511421": "?????????",
        "511422": "?????????",
        "511423": "?????????",
        "511424": "?????????",
        "511425": "?????????",
        "511426": "?????????",
        "511500": "?????????",
        "511502": "?????????",
        "511521": "?????????",
        "511522": "?????????",
        "511523": "?????????",
        "511524": "?????????",
        "511525": "??????",
        "511526": "??????",
        "511527": "?????????",
        "511528": "?????????",
        "511529": "?????????",
        "511530": "?????????",
        "511600": "?????????",
        "511602": "?????????",
        "511603": "?????????",
        "511621": "?????????",
        "511622": "?????????",
        "511623": "?????????",
        "511681": "?????????",
        "511683": "?????????",
        "511700": "?????????",
        "511702": "?????????",
        "511721": "?????????",
        "511722": "?????????",
        "511723": "?????????",
        "511724": "?????????",
        "511725": "??????",
        "511781": "?????????",
        "511782": "?????????",
        "511800": "?????????",
        "511802": "?????????",
        "511821": "?????????",
        "511822": "?????????",
        "511823": "?????????",
        "511824": "?????????",
        "511825": "?????????",
        "511826": "?????????",
        "511827": "?????????",
        "511828": "?????????",
        "511900": "?????????",
        "511902": "?????????",
        "511903": "?????????",
        "511921": "?????????",
        "511922": "?????????",
        "511923": "?????????",
        "511924": "?????????",
        "512000": "?????????",
        "512002": "?????????",
        "512021": "?????????",
        "512022": "?????????",
        "512081": "?????????",
        "512082": "?????????",
        "513200": "???????????????????????????",
        "513221": "?????????",
        "513222": "??????",
        "513223": "??????",
        "513224": "?????????",
        "513225": "????????????",
        "513226": "?????????",
        "513227": "?????????",
        "513228": "?????????",
        "513229": "????????????",
        "513230": "?????????",
        "513231": "?????????",
        "513232": "????????????",
        "513233": "?????????",
        "513234": "?????????",
        "513300": "?????????????????????",
        "513321": "?????????",
        "513322": "?????????",
        "513323": "?????????",
        "513324": "?????????",
        "513325": "?????????",
        "513326": "?????????",
        "513327": "?????????",
        "513328": "?????????",
        "513329": "?????????",
        "513330": "?????????",
        "513331": "?????????",
        "513332": "?????????",
        "513333": "?????????",
        "513334": "?????????",
        "513335": "?????????",
        "513336": "?????????",
        "513337": "?????????",
        "513338": "?????????",
        "513339": "?????????",
        "513400": "?????????????????????",
        "513401": "?????????",
        "513422": "?????????????????????",
        "513423": "?????????",
        "513424": "?????????",
        "513425": "?????????",
        "513426": "?????????",
        "513427": "?????????",
        "513428": "?????????",
        "513429": "?????????",
        "513430": "?????????",
        "513431": "?????????",
        "513432": "?????????",
        "513433": "?????????",
        "513434": "?????????",
        "513435": "?????????",
        "513436": "?????????",
        "513437": "?????????",
        "513438": "?????????",
        "520000": "?????????",
        "520100": "?????????",
        "520102": "?????????",
        "520103": "?????????",
        "520111": "?????????",
        "520112": "?????????",
        "520113": "?????????",
        "520121": "?????????",
        "520122": "?????????",
        "520123": "?????????",
        "520151": "????????????",
        "520181": "?????????",
        "520182": "?????????",
        "520200": "????????????",
        "520201": "?????????",
        "520203": "????????????",
        "520221": "?????????",
        "520222": "??????",
        "520223": "?????????",
        "520300": "?????????",
        "520302": "????????????",
        "520303": "?????????",
        "520321": "?????????",
        "520322": "?????????",
        "520323": "?????????",
        "520324": "?????????",
        "520325": "??????????????????????????????",
        "520326": "??????????????????????????????",
        "520327": "?????????",
        "520328": "?????????",
        "520329": "?????????",
        "520330": "?????????",
        "520381": "?????????",
        "520382": "?????????",
        "520383": "?????????",
        "520400": "?????????",
        "520402": "?????????",
        "520421": "?????????",
        "520422": "?????????",
        "520423": "??????????????????????????????",
        "520424": "??????????????????????????????",
        "520425": "??????????????????????????????",
        "520426": "?????????",
        "522200": "?????????",
        "522201": "?????????",
        "522222": "?????????",
        "522223": "?????????????????????",
        "522224": "?????????",
        "522225": "?????????",
        "522226": "??????????????????????????????",
        "522227": "?????????",
        "522228": "????????????????????????",
        "522229": "?????????????????????",
        "522230": "?????????",
        "522231": "?????????",
        "522300": "?????????????????????????????????",
        "522301": "?????????",
        "522322": "?????????",
        "522323": "?????????",
        "522324": "?????????",
        "522325": "?????????",
        "522326": "?????????",
        "522327": "?????????",
        "522328": "?????????",
        "522329": "?????????",
        "522400": "?????????",
        "522401": "????????????",
        "522422": "?????????",
        "522423": "?????????",
        "522424": "?????????",
        "522425": "?????????",
        "522426": "?????????",
        "522427": "?????????????????????????????????",
        "522428": "?????????",
        "522429": "?????????",
        "522600": "??????????????????????????????",
        "522601": "?????????",
        "522622": "?????????",
        "522623": "?????????",
        "522624": "?????????",
        "522625": "?????????",
        "522626": "?????????",
        "522627": "?????????",
        "522628": "?????????",
        "522629": "?????????",
        "522630": "?????????",
        "522631": "?????????",
        "522632": "?????????",
        "522633": "?????????",
        "522634": "?????????",
        "522635": "?????????",
        "522636": "?????????",
        "522637": "?????????",
        "522700": "??????????????????????????????",
        "522701": "?????????",
        "522702": "?????????",
        "522722": "?????????",
        "522723": "?????????",
        "522725": "?????????",
        "522726": "?????????",
        "522727": "?????????",
        "522728": "?????????",
        "522729": "?????????",
        "522730": "?????????",
        "522731": "?????????",
        "522732": "?????????????????????",
        "522733": "?????????",
        "530000": "?????????",
        "530100": "?????????",
        "530102": "?????????",
        "530103": "?????????",
        "530111": "?????????",
        "530112": "?????????",
        "530113": "?????????",
        "530121": "?????????",
        "530122": "?????????",
        "530124": "?????????",
        "530125": "?????????",
        "530126": "?????????????????????",
        "530127": "?????????",
        "530128": "???????????????????????????",
        "530129": "???????????????????????????",
        "530181": "?????????",
        "530182": "?????????",
        "530300": "?????????",
        "530302": "?????????",
        "530321": "?????????",
        "530322": "?????????",
        "530323": "?????????",
        "530324": "?????????",
        "530325": "?????????",
        "530326": "?????????",
        "530328": "?????????",
        "530381": "?????????",
        "530382": "?????????",
        "530400": "?????????",
        "530402": "?????????",
        "530421": "?????????",
        "530422": "?????????",
        "530423": "?????????",
        "530424": "?????????",
        "530425": "?????????",
        "530426": "?????????????????????",
        "530427": "???????????????????????????",
        "530428": "????????????????????????????????????",
        "530429": "?????????",
        "530500": "?????????",
        "530502": "?????????",
        "530521": "?????????",
        "530522": "?????????",
        "530523": "?????????",
        "530524": "?????????",
        "530525": "?????????",
        "530600": "?????????",
        "530602": "?????????",
        "530621": "?????????",
        "530622": "?????????",
        "530623": "?????????",
        "530624": "?????????",
        "530625": "?????????",
        "530626": "?????????",
        "530627": "?????????",
        "530628": "?????????",
        "530629": "?????????",
        "530630": "?????????",
        "530631": "?????????",
        "530700": "?????????",
        "530702": "?????????",
        "530721": "????????????????????????",
        "530722": "?????????",
        "530723": "?????????",
        "530724": "?????????????????????",
        "530725": "?????????",
        "530800": "?????????",
        "530802": "?????????",
        "530821": "??????????????????????????????",
        "530822": "????????????????????????",
        "530823": "?????????????????????",
        "530824": "???????????????????????????",
        "530825": "???????????????????????????????????????",
        "530826": "??????????????????????????????",
        "530827": "????????????????????????????????????",
        "530828": "????????????????????????",
        "530829": "?????????????????????",
        "530830": "?????????",
        "530900": "?????????",
        "530902": "?????????",
        "530921": "?????????",
        "530922": "??????",
        "530923": "?????????",
        "530924": "?????????",
        "530925": "?????????????????????????????????????????????",
        "530926": "???????????????????????????",
        "530927": "?????????????????????",
        "530928": "?????????",
        "532300": "?????????????????????",
        "532301": "?????????",
        "532322": "?????????",
        "532323": "?????????",
        "532324": "?????????",
        "532325": "?????????",
        "532326": "?????????",
        "532327": "?????????",
        "532328": "?????????",
        "532329": "?????????",
        "532331": "?????????",
        "532332": "?????????",
        "532500": "??????????????????????????????",
        "532501": "?????????",
        "532502": "?????????",
        "532522": "?????????",
        "532523": "?????????????????????",
        "532524": "?????????",
        "532525": "?????????",
        "532526": "?????????",
        "532527": "?????????",
        "532528": "?????????",
        "532529": "?????????",
        "532530": "?????????????????????????????????",
        "532531": "?????????",
        "532532": "?????????????????????",
        "532533": "?????????",
        "532600": "???????????????????????????",
        "532621": "?????????",
        "532622": "?????????",
        "532623": "?????????",
        "532624": "????????????",
        "532625": "?????????",
        "532626": "?????????",
        "532627": "?????????",
        "532628": "?????????",
        "532629": "?????????",
        "532800": "???????????????????????????",
        "532801": "?????????",
        "532822": "?????????",
        "532823": "?????????",
        "532824": "?????????",
        "532900": "?????????????????????",
        "532901": "?????????",
        "532922": "?????????????????????",
        "532923": "?????????",
        "532924": "?????????",
        "532925": "?????????",
        "532926": "?????????????????????",
        "532927": "???????????????????????????",
        "532928": "?????????",
        "532929": "?????????",
        "532930": "?????????",
        "532931": "?????????",
        "532932": "?????????",
        "532933": "?????????",
        "533100": "??????????????????????????????",
        "533102": "?????????",
        "533103": "??????",
        "533122": "?????????",
        "533123": "?????????",
        "533124": "?????????",
        "533125": "?????????",
        "533300": "????????????????????????",
        "533321": "?????????",
        "533323": "?????????",
        "533324": "??????????????????????????????",
        "533325": "??????????????????????????????",
        "533326": "?????????",
        "533400": "?????????????????????",
        "533421": "???????????????",
        "533422": "?????????",
        "533423": "????????????????????????",
        "533424": "?????????",
        "540000": "???????????????",
        "540100": "?????????",
        "540102": "?????????",
        "540121": "?????????",
        "540122": "?????????",
        "540123": "?????????",
        "540124": "?????????",
        "540125": "???????????????",
        "540126": "?????????",
        "540127": "???????????????",
        "540128": "?????????",
        "542100": "????????????",
        "542121": "?????????",
        "542122": "?????????",
        "542123": "?????????",
        "542124": "????????????",
        "542125": "?????????",
        "542126": "?????????",
        "542127": "?????????",
        "542128": "?????????",
        "542129": "?????????",
        "542132": "?????????",
        "542133": "?????????",
        "542134": "?????????",
        "542200": "????????????",
        "542221": "?????????",
        "542222": "?????????",
        "542223": "?????????",
        "542224": "?????????",
        "542225": "?????????",
        "542226": "?????????",
        "542227": "?????????",
        "542228": "?????????",
        "542229": "?????????",
        "542231": "?????????",
        "542232": "?????????",
        "542233": "????????????",
        "542234": "?????????",
        "542300": "???????????????",
        "542301": "????????????",
        "542322": "????????????",
        "542323": "?????????",
        "542324": "?????????",
        "542325": "?????????",
        "542326": "?????????",
        "542327": "?????????",
        "542328": "????????????",
        "542329": "?????????",
        "542330": "?????????",
        "542331": "?????????",
        "542332": "?????????",
        "542333": "?????????",
        "542334": "?????????",
        "542335": "?????????",
        "542336": "????????????",
        "542337": "?????????",
        "542338": "?????????",
        "542339": "?????????",
        "542400": "????????????",
        "542421": "?????????",
        "542422": "?????????",
        "542423": "?????????",
        "542424": "?????????",
        "542425": "?????????",
        "542426": "?????????",
        "542427": "??????",
        "542428": "?????????",
        "542429": "?????????",
        "542430": "?????????",
        "542431": "?????????",
        "542432": "?????????",
        "542500": "????????????",
        "542521": "?????????",
        "542522": "?????????",
        "542523": "?????????",
        "542524": "?????????",
        "542525": "?????????",
        "542526": "?????????",
        "542527": "?????????",
        "542528": "?????????",
        "542600": "????????????",
        "542621": "?????????",
        "542622": "???????????????",
        "542623": "?????????",
        "542624": "?????????",
        "542625": "?????????",
        "542626": "?????????",
        "542627": "??????",
        "542628": "?????????",
        "610000": "?????????",
        "610100": "?????????",
        "610102": "?????????",
        "610103": "?????????",
        "610104": "?????????",
        "610111": "?????????",
        "610112": "?????????",
        "610113": "?????????",
        "610114": "?????????",
        "610115": "?????????",
        "610116": "?????????",
        "610122": "?????????",
        "610124": "?????????",
        "610125": "??????",
        "610126": "?????????",
        "610127": "?????????",
        "610200": "?????????",
        "610202": "?????????",
        "610203": "?????????",
        "610204": "?????????",
        "610222": "?????????",
        "610223": "?????????",
        "610300": "?????????",
        "610302": "?????????",
        "610303": "?????????",
        "610304": "?????????",
        "610322": "?????????",
        "610323": "?????????",
        "610324": "?????????",
        "610326": "??????",
        "610327": "??????",
        "610328": "?????????",
        "610329": "?????????",
        "610330": "??????",
        "610331": "?????????",
        "610332": "?????????",
        "610400": "?????????",
        "610402": "?????????",
        "610403": "?????????",
        "610404": "?????????",
        "610422": "?????????",
        "610423": "?????????",
        "610424": "??????",
        "610425": "?????????",
        "610426": "?????????",
        "610427": "??????",
        "610428": "?????????",
        "610429": "?????????",
        "610430": "?????????",
        "610431": "?????????",
        "610481": "?????????",
        "610482": "?????????",
        "610500": "?????????",
        "610502": "?????????",
        "610521": "??????",
        "610522": "?????????",
        "610523": "?????????",
        "610524": "?????????",
        "610525": "?????????",
        "610526": "?????????",
        "610527": "?????????",
        "610528": "?????????",
        "610581": "?????????",
        "610582": "?????????",
        "610583": "?????????",
        "610600": "?????????",
        "610602": "?????????",
        "610621": "?????????",
        "610622": "?????????",
        "610623": "?????????",
        "610624": "?????????",
        "610625": "?????????",
        "610626": "?????????",
        "610627": "?????????",
        "610628": "??????",
        "610629": "?????????",
        "610630": "?????????",
        "610631": "?????????",
        "610632": "?????????",
        "610633": "?????????",
        "610700": "?????????",
        "610702": "?????????",
        "610721": "?????????",
        "610722": "?????????",
        "610723": "??????",
        "610724": "?????????",
        "610725": "??????",
        "610726": "?????????",
        "610727": "?????????",
        "610728": "?????????",
        "610729": "?????????",
        "610730": "?????????",
        "610731": "?????????",
        "610800": "?????????",
        "610802": "?????????",
        "610821": "?????????",
        "610822": "?????????",
        "610823": "?????????",
        "610824": "?????????",
        "610825": "?????????",
        "610826": "?????????",
        "610827": "?????????",
        "610828": "??????",
        "610829": "?????????",
        "610830": "?????????",
        "610831": "?????????",
        "610832": "?????????",
        "610900": "?????????",
        "610902": "?????????",
        "610921": "?????????",
        "610922": "?????????",
        "610923": "?????????",
        "610924": "?????????",
        "610925": "?????????",
        "610926": "?????????",
        "610927": "?????????",
        "610928": "?????????",
        "610929": "?????????",
        "610930": "?????????",
        "611000": "?????????",
        "611002": "?????????",
        "611021": "?????????",
        "611022": "?????????",
        "611023": "?????????",
        "611024": "?????????",
        "611025": "?????????",
        "611026": "?????????",
        "611027": "?????????",
        "620000": "?????????",
        "620100": "?????????",
        "620102": "?????????",
        "620103": "????????????",
        "620104": "?????????",
        "620105": "?????????",
        "620111": "?????????",
        "620121": "?????????",
        "620122": "?????????",
        "620123": "?????????",
        "620124": "?????????",
        "620200": "????????????",
        "620300": "?????????",
        "620302": "?????????",
        "620321": "?????????",
        "620322": "?????????",
        "620400": "?????????",
        "620402": "?????????",
        "620403": "?????????",
        "620421": "?????????",
        "620422": "?????????",
        "620423": "?????????",
        "620424": "?????????",
        "620500": "?????????",
        "620502": "?????????",
        "620503": "?????????",
        "620521": "?????????",
        "620522": "?????????",
        "620523": "?????????",
        "620524": "?????????",
        "620525": "????????????????????????",
        "620526": "?????????",
        "620600": "?????????",
        "620602": "?????????",
        "620621": "?????????",
        "620622": "?????????",
        "620623": "?????????????????????",
        "620624": "?????????",
        "620700": "?????????",
        "620702": "?????????",
        "620721": "????????????????????????",
        "620722": "?????????",
        "620723": "?????????",
        "620724": "?????????",
        "620725": "?????????",
        "620726": "?????????",
        "620800": "?????????",
        "620802": "?????????",
        "620821": "?????????",
        "620822": "?????????",
        "620823": "?????????",
        "620824": "?????????",
        "620825": "?????????",
        "620826": "?????????",
        "620827": "?????????",
        "620900": "?????????",
        "620902": "?????????",
        "620921": "?????????",
        "620922": "?????????",
        "620923": "????????????????????????",
        "620924": "??????????????????????????????",
        "620981": "?????????",
        "620982": "?????????",
        "620983": "?????????",
        "621000": "?????????",
        "621002": "?????????",
        "621021": "?????????",
        "621022": "??????",
        "621023": "?????????",
        "621024": "?????????",
        "621025": "?????????",
        "621026": "??????",
        "621027": "?????????",
        "621028": "?????????",
        "621100": "?????????",
        "621102": "?????????",
        "621121": "?????????",
        "621122": "?????????",
        "621123": "?????????",
        "621124": "?????????",
        "621125": "??????",
        "621126": "??????",
        "621127": "?????????",
        "621200": "?????????",
        "621202": "?????????",
        "621221": "??????",
        "621222": "??????",
        "621223": "?????????",
        "621224": "??????",
        "621225": "?????????",
        "621226": "??????",
        "621227": "??????",
        "621228": "?????????",
        "621229": "?????????",
        "622900": "?????????????????????",
        "622901": "?????????",
        "622921": "?????????",
        "622922": "?????????",
        "622923": "?????????",
        "622924": "?????????",
        "622925": "?????????",
        "622926": "??????????????????",
        "622927": "?????????????????????????????????????????????",
        "622928": "?????????",
        "623000": "?????????????????????",
        "623001": "?????????",
        "623021": "?????????",
        "623022": "?????????",
        "623023": "?????????",
        "623024": "?????????",
        "623025": "?????????",
        "623026": "?????????",
        "623027": "?????????",
        "623028": "?????????",
        "630000": "?????????",
        "630100": "?????????",
        "630102": "?????????",
        "630103": "?????????",
        "630104": "?????????",
        "630105": "?????????",
        "630121": "???????????????????????????",
        "630122": "?????????",
        "630123": "?????????",
        "630124": "?????????",
        "632100": "?????????",
        "632121": "?????????",
        "632122": "???????????????????????????",
        "632123": "?????????",
        "632126": "?????????????????????",
        "632127": "?????????????????????",
        "632128": "????????????????????????",
        "632129": "?????????",
        "632200": "?????????????????????",
        "632221": "?????????????????????",
        "632222": "?????????",
        "632223": "?????????",
        "632224": "?????????",
        "632225": "?????????",
        "632300": "?????????????????????",
        "632321": "?????????",
        "632322": "?????????",
        "632323": "?????????",
        "632324": "????????????????????????",
        "632325": "?????????",
        "632500": "?????????????????????",
        "632521": "?????????",
        "632522": "?????????",
        "632523": "?????????",
        "632524": "?????????",
        "632525": "?????????",
        "632526": "?????????",
        "632600": "?????????????????????",
        "632621": "?????????",
        "632622": "?????????",
        "632623": "?????????",
        "632624": "?????????",
        "632625": "?????????",
        "632626": "?????????",
        "632627": "?????????",
        "632700": "?????????????????????",
        "632721": "?????????",
        "632722": "?????????",
        "632723": "?????????",
        "632724": "?????????",
        "632725": "?????????",
        "632726": "????????????",
        "632727": "?????????",
        "632800": "??????????????????????????????",
        "632801": "????????????",
        "632802": "????????????",
        "632821": "?????????",
        "632822": "?????????",
        "632823": "?????????",
        "632824": "?????????",
        "640000": "?????????????????????",
        "640100": "?????????",
        "640104": "?????????",
        "640105": "?????????",
        "640106": "?????????",
        "640121": "?????????",
        "640122": "?????????",
        "640181": "?????????",
        "640182": "?????????",
        "640200": "????????????",
        "640202": "????????????",
        "640205": "?????????",
        "640221": "?????????",
        "640222": "?????????",
        "640300": "?????????",
        "640302": "?????????",
        "640303": "????????????",
        "640323": "?????????",
        "640324": "?????????",
        "640381": "????????????",
        "640382": "?????????",
        "640400": "?????????",
        "640402": "?????????",
        "640422": "?????????",
        "640423": "?????????",
        "640424": "?????????",
        "640425": "?????????",
        "640426": "?????????",
        "640500": "?????????",
        "640502": "????????????",
        "640521": "?????????",
        "640522": "?????????",
        "640523": "?????????",
        "650000": "????????????????????????",
        "650100": "???????????????",
        "650102": "?????????",
        "650103": "???????????????",
        "650104": "?????????",
        "650105": "????????????",
        "650106": "????????????",
        "650107": "????????????",
        "650109": "?????????",
        "650121": "???????????????",
        "650122": "?????????",
        "650200": "???????????????",
        "650202": "????????????",
        "650203": "???????????????",
        "650204": "????????????",
        "650205": "????????????",
        "650206": "?????????",
        "652100": "???????????????",
        "652101": "????????????",
        "652122": "?????????",
        "652123": "????????????",
        "652124": "?????????",
        "652200": "????????????",
        "652201": "?????????",
        "652222": "???????????????????????????",
        "652223": "?????????",
        "652224": "?????????",
        "652300": "?????????????????????",
        "652301": "?????????",
        "652302": "?????????",
        "652323": "????????????",
        "652324": "????????????",
        "652325": "?????????",
        "652327": "???????????????",
        "652328": "????????????????????????",
        "652329": "?????????",
        "652700": "???????????????????????????",
        "652701": "?????????",
        "652702": "???????????????",
        "652722": "?????????",
        "652723": "?????????",
        "652724": "?????????",
        "652800": "???????????????????????????",
        "652801": "????????????",
        "652822": "?????????",
        "652823": "?????????",
        "652824": "?????????",
        "652825": "?????????",
        "652826": "?????????????????????",
        "652827": "?????????",
        "652828": "?????????",
        "652829": "?????????",
        "652830": "?????????",
        "652900": "???????????????",
        "652901": "????????????",
        "652922": "?????????",
        "652923": "?????????",
        "652924": "?????????",
        "652925": "?????????",
        "652926": "?????????",
        "652927": "?????????",
        "652928": "????????????",
        "652929": "?????????",
        "652930": "?????????",
        "653000": "?????????????????????????????????",
        "653001": "????????????",
        "653022": "????????????",
        "653023": "????????????",
        "653024": "?????????",
        "653025": "?????????",
        "653100": "????????????",
        "653101": "?????????",
        "653121": "?????????",
        "653122": "?????????",
        "653123": "????????????",
        "653124": "?????????",
        "653125": "?????????",
        "653126": "?????????",
        "653127": "????????????",
        "653128": "????????????",
        "653129": "?????????",
        "653130": "?????????",
        "653131": "?????????????????????????????????",
        "653132": "?????????",
        "653200": "????????????",
        "653201": "?????????",
        "653221": "?????????",
        "653222": "?????????",
        "653223": "?????????",
        "653224": "?????????",
        "653225": "?????????",
        "653226": "?????????",
        "653227": "?????????",
        "653228": "?????????",
        "654000": "????????????????????????",
        "654002": "?????????",
        "654003": "?????????",
        "654021": "?????????",
        "654022": "???????????????????????????",
        "654023": "?????????",
        "654024": "?????????",
        "654025": "?????????",
        "654026": "?????????",
        "654027": "????????????",
        "654028": "????????????",
        "654029": "?????????",
        "654200": "????????????",
        "654201": "?????????",
        "654202": "?????????",
        "654221": "?????????",
        "654223": "?????????",
        "654224": "?????????",
        "654225": "?????????",
        "654226": "??????????????????????????????",
        "654227": "?????????",
        "654300": "???????????????",
        "654301": "????????????",
        "654321": "????????????",
        "654322": "?????????",
        "654323": "?????????",
        "654324": "????????????",
        "654325": "?????????",
        "654326": "????????????",
        "654327": "?????????",
        "659001": "????????????",
        "659002": "????????????",
        "659003": "???????????????",
        "659004": "????????????",
        "710000": "??????",
        "710100": "?????????",
        "710101": "?????????",
        "710102": "?????????",
        "710103": "?????????",
        "710104": "?????????",
        "710105": "?????????",
        "710106": "?????????",
        "710107": "?????????",
        "710108": "?????????",
        "710109": "?????????",
        "710110": "?????????",
        "710111": "?????????",
        "710112": "?????????",
        "710113": "?????????",
        "710200": "?????????",
        "710201": "?????????",
        "710202": "?????????",
        "710203": "?????????",
        "710204": "?????????",
        "710205": "?????????",
        "710206": "?????????",
        "710207": "?????????",
        "710208": "?????????",
        "710209": "?????????",
        "710210": "?????????",
        "710211": "?????????",
        "710212": "?????????",
        "710241": "?????????",
        "710242": "?????????",
        "710243": "?????????",
        "710244": "?????????",
        "710245": "?????????",
        "710246": "?????????",
        "710247": "?????????",
        "710248": "?????????",
        "710249": "?????????",
        "710250": "?????????",
        "710251": "?????????",
        "710252": "?????????",
        "710253": "?????????",
        "710254": "?????????",
        "710255": "?????????",
        "710256": "?????????",
        "710257": "?????????",
        "710258": "?????????",
        "710259": "?????????",
        "710260": "?????????",
        "710261": "?????????",
        "710262": "?????????",
        "710263": "?????????",
        "710264": "?????????",
        "710265": "?????????",
        "710266": "????????????",
        "710267": "?????????",
        "710268": "?????????",
        "710300": "?????????",
        "710301": "?????????",
        "710302": "??????",
        "710303": "??????",
        "710304": "??????",
        "710305": "?????????",
        "710306": "?????????",
        "710307": "?????????",
        "710339": "?????????",
        "710340": "?????????",
        "710341": "?????????",
        "710342": "?????????",
        "710343": "?????????",
        "710344": "?????????",
        "710345": "?????????",
        "710346": "?????????",
        "710347": "?????????",
        "710348": "?????????",
        "710349": "?????????",
        "710350": "?????????",
        "710351": "?????????",
        "710352": "?????????",
        "710353": "?????????",
        "710354": "?????????",
        "710355": "?????????",
        "710356": "?????????",
        "710357": "?????????",
        "710358": "?????????",
        "710359": "?????????",
        "710360": "?????????",
        "710361": "?????????",
        "710362": "?????????",
        "710363": "?????????",
        "710364": "?????????",
        "710365": "?????????",
        "710366": "?????????",
        "710367": "?????????",
        "710368": "?????????",
        "710369": "?????????",
        "710400": "?????????",
        "710401": "??????",
        "710402": "??????",
        "710403": "??????",
        "710404": "??????",
        "710405": "??????",
        "710406": "?????????",
        "710407": "?????????",
        "710408": "?????????",
        "710409": "?????????",
        "710431": "?????????",
        "710432": "?????????",
        "710433": "?????????",
        "710434": "?????????",
        "710435": "?????????",
        "710436": "?????????",
        "710437": "?????????",
        "710438": "?????????",
        "710439": "?????????",
        "710440": "?????????",
        "710441": "?????????",
        "710442": "?????????",
        "710443": "?????????",
        "710444": "?????????",
        "710445": "?????????",
        "710446": "?????????",
        "710447": "?????????",
        "710448": "?????????",
        "710449": "?????????",
        "710450": "?????????",
        "710451": "?????????",
        "710500": "?????????",
        "710507": "?????????",
        "710508": "?????????",
        "710509": "?????????",
        "710510": "?????????",
        "710511": "?????????",
        "710512": "?????????",
        "710600": "?????????",
        "710614": "?????????",
        "710615": "?????????",
        "710616": "?????????",
        "710617": "?????????",
        "710618": "?????????",
        "710619": "?????????",
        "710620": "?????????",
        "710621": "?????????",
        "710622": "?????????",
        "710623": "?????????",
        "710624": "?????????",
        "710625": "?????????",
        "710626": "?????????",
        "710700": "?????????",
        "710701": "?????????",
        "710702": "?????????",
        "710703": "?????????",
        "710704": "?????????",
        "710705": "?????????",
        "710706": "?????????",
        "710707": "?????????",
        "710708": "?????????",
        "710800": "?????????",
        "710801": "??????",
        "710802": "??????",
        "710803": "?????????",
        "710804": "?????????",
        "710900": "?????????",
        "710901": "??????",
        "710902": "??????",
        "710903": "?????????",
        "711100": "?????????",
        "711130": "?????????",
        "711131": "?????????",
        "711132": "?????????",
        "711133": "?????????",
        "711134": "?????????",
        "711135": "?????????",
        "711136": "?????????",
        "711137": "?????????",
        "711138": "?????????",
        "711139": "?????????",
        "711140": "?????????",
        "711141": "?????????",
        "711142": "?????????",
        "711143": "?????????",
        "711144": "?????????",
        "711145": "?????????",
        "711146": "?????????",
        "711147": "?????????",
        "711148": "?????????",
        "711149": "?????????",
        "711150": "?????????",
        "711151": "?????????",
        "711152": "?????????",
        "711153": "?????????",
        "711154": "?????????",
        "711155": "?????????",
        "711156": "?????????",
        "711157": "?????????",
        "711158": "?????????",
        "711200": "?????????",
        "711214": "?????????",
        "711215": "?????????",
        "711216": "?????????",
        "711217": "?????????",
        "711218": "?????????",
        "711219": "?????????",
        "711220": "?????????",
        "711221": "?????????",
        "711222": "?????????",
        "711223": "?????????",
        "711224": "?????????",
        "711225": "?????????",
        "711226": "?????????",
        "711300": "?????????",
        "711314": "?????????",
        "711315": "?????????",
        "711316": "?????????",
        "711317": "?????????",
        "711318": "?????????",
        "711319": "?????????",
        "711320": "?????????",
        "711321": "?????????",
        "711322": "?????????",
        "711323": "?????????",
        "711324": "?????????",
        "711325": "?????????",
        "711326": "?????????",
        "711400": "?????????",
        "711414": "?????????",
        "711415": "?????????",
        "711416": "?????????",
        "711417": "?????????",
        "711418": "?????????",
        "711419": "?????????",
        "711420": "?????????",
        "711421": "?????????",
        "711422": "?????????",
        "711423": "?????????",
        "711424": "?????????",
        "711425": "?????????",
        "711426": "?????????",
        "711500": "?????????",
        "711519": "?????????",
        "711520": "?????????",
        "711521": "?????????",
        "711522": "?????????",
        "711523": "?????????",
        "711524": "?????????",
        "711525": "?????????",
        "711526": "?????????",
        "711527": "?????????",
        "711528": "?????????",
        "711529": "?????????",
        "711530": "?????????",
        "711531": "?????????",
        "711532": "?????????",
        "711533": "?????????",
        "711534": "?????????",
        "711535": "?????????",
        "711536": "?????????",
        "711700": "?????????",
        "711727": "?????????",
        "711728": "?????????",
        "711729": "?????????",
        "711730": "?????????",
        "711731": "?????????",
        "711732": "?????????",
        "711733": "?????????",
        "711734": "?????????",
        "711735": "?????????",
        "711736": "?????????",
        "711737": "?????????",
        "711738": "?????????",
        "711739": "?????????",
        "711740": "?????????",
        "711741": "?????????",
        "711742": "?????????",
        "711743": "?????????",
        "711744": "?????????",
        "711745": "?????????",
        "711746": "?????????",
        "711747": "?????????",
        "711748": "?????????",
        "711749": "?????????",
        "711750": "?????????",
        "711751": "?????????",
        "711752": "?????????",
        "711900": "?????????",
        "711919": "?????????",
        "711920": "?????????",
        "711921": "?????????",
        "711922": "????????????",
        "711923": "?????????",
        "711924": "?????????",
        "711925": "?????????",
        "711926": "?????????",
        "711927": "?????????",
        "711928": "?????????",
        "711929": "?????????",
        "711930": "?????????",
        "711931": "?????????",
        "711932": "?????????",
        "711933": "?????????",
        "711934": "?????????",
        "711935": "?????????",
        "711936": "?????????",
        "712100": "?????????",
        "712121": "?????????",
        "712122": "?????????",
        "712123": "?????????",
        "712124": "?????????",
        "712125": "?????????",
        "712126": "?????????",
        "712127": "?????????",
        "712128": "?????????",
        "712129": "?????????",
        "712130": "?????????",
        "712131": "?????????",
        "712132": "?????????",
        "712133": "?????????",
        "712134": "?????????",
        "712135": "?????????",
        "712136": "?????????",
        "712137": "?????????",
        "712138": "?????????",
        "712139": "?????????",
        "712140": "?????????",
        "712400": "?????????",
        "712434": "?????????",
        "712435": "????????????",
        "712436": "?????????",
        "712437": "?????????",
        "712438": "?????????",
        "712439": "?????????",
        "712440": "?????????",
        "712441": "?????????",
        "712442": "?????????",
        "712443": "?????????",
        "712444": "?????????",
        "712445": "?????????",
        "712446": "?????????",
        "712447": "?????????",
        "712448": "?????????",
        "712449": "?????????",
        "712450": "?????????",
        "712451": "?????????",
        "712452": "?????????",
        "712453": "?????????",
        "712454": "?????????",
        "712455": "?????????",
        "712456": "?????????",
        "712457": "?????????",
        "712458": "?????????",
        "712459": "?????????",
        "712460": "?????????",
        "712461": "?????????",
        "712462": "?????????",
        "712463": "?????????",
        "712464": "?????????",
        "712465": "?????????",
        "712466": "?????????",
        "712500": "?????????",
        "712517": "?????????",
        "712518": "?????????",
        "712519": "?????????",
        "712520": "?????????",
        "712521": "?????????",
        "712522": "?????????",
        "712523": "?????????",
        "712524": "?????????",
        "712525": "?????????",
        "712526": "?????????",
        "712527": "?????????",
        "712528": "?????????",
        "712529": "?????????",
        "712530": "?????????",
        "712531": "?????????",
        "712532": "????????????",
        "712600": "?????????",
        "712615": "?????????",
        "712616": "?????????",
        "712617": "?????????",
        "712618": "?????????",
        "712619": "?????????",
        "712620": "?????????",
        "712621": "?????????",
        "712622": "?????????",
        "712623": "?????????",
        "712624": "?????????",
        "712625": "?????????",
        "712626": "?????????",
        "712627": "?????????",
        "712628": "?????????",
        "712700": "?????????",
        "712707": "?????????",
        "712708": "?????????",
        "712709": "?????????",
        "712710": "?????????",
        "712711": "?????????",
        "712712": "?????????",
        "712800": "?????????",
        "712805": "?????????",
        "712806": "?????????",
        "712807": "?????????",
        "712808": "?????????",
        "810000": "?????????????????????",
        "810100": "?????????",
        "810101": "?????????",
        "810102": "??????",
        "810103": "??????",
        "810104": "??????",
        "810200": "??????",
        "810201": "????????????",
        "810202": "????????????",
        "810203": "????????????",
        "810204": "????????????",
        "810205": "?????????",
        "810300": "??????",
        "810301": "??????",
        "810302": "?????????",
        "810303": "?????????",
        "810304": "?????????",
        "810305": "?????????",
        "810306": "?????????",
        "810307": "?????????",
        "810308": "?????????",
        "810309": "?????????",
        "820000": "?????????????????????",
        "820100": "????????????",
        "820200": "??????",
        "990000": "??????",
        "990100": "??????" };


      // id pid/parentId name children
      function tree(list) {
        var mapped = {};
        for (var i = 0, item; i < list.length; i++) {
          item = list[i];
          if (!item || !item.id) continue;
          mapped[item.id] = item;
        }

        var result = [];
        for (var ii = 0; ii < list.length; ii++) {
          item = list[ii];

          if (!item) continue;
          /* jshint -W041 */
          if (item.pid == undefined && item.parentId == undefined) {
            result.push(item);
            continue;
          }
          var parent = mapped[item.pid] || mapped[item.parentId];
          if (!parent) continue;
          if (!parent.children) parent.children = [];
          parent.children.push(item);
        }
        return result;
      }

      var DICT_FIXED = function () {
        var fixed = [];
        for (var id in DICT) {
          var pid = id.slice(2, 6) === '0000' ? undefined :
          id.slice(4, 6) == '00' ? id.slice(0, 2) + '0000' :
          id.slice(0, 4) + '00';
          fixed.push({
            id: id,
            pid: pid,
            name: DICT[id] });

        }
        return tree(fixed);
      }();

      module.exports = DICT_FIXED;

      /***/},
    /* 19 */
    /***/function (module, exports, __webpack_require__) {

      /*
                                                              ## Miscellaneous
                                                          */
      var DICT = __webpack_require__(18);
      module.exports = {
        // Dice
        d4: function d4() {
          return this.natural(1, 4);
        },
        d6: function d6() {
          return this.natural(1, 6);
        },
        d8: function d8() {
          return this.natural(1, 8);
        },
        d12: function d12() {
          return this.natural(1, 12);
        },
        d20: function d20() {
          return this.natural(1, 20);
        },
        d100: function d100() {
          return this.natural(1, 100);
        },
        /*
               ?????????????????? GUID???
           		    http://www.broofa.com/2008/09/javascript-uuid-function/
               [UUID ??????](http://www.ietf.org/rfc/rfc4122.txt)
                   UUIDs (Universally Unique IDentifier)
                   GUIDs (Globally Unique IDentifier)
                   The formal definition of the UUID string representation is provided by the following ABNF [7]:
                       UUID                   = time-low "-" time-mid "-"
                                              time-high-and-version "-"
                                              clock-seq-and-reserved
                                              clock-seq-low "-" node
                       time-low               = 4hexOctet
                       time-mid               = 2hexOctet
                       time-high-and-version  = 2hexOctet
                       clock-seq-and-reserved = hexOctet
                       clock-seq-low          = hexOctet
                       node                   = 6hexOctet
                       hexOctet               = hexDigit hexDigit
                       hexDigit =
                           "0" / "1" / "2" / "3" / "4" / "5" / "6" / "7" / "8" / "9" /
                           "a" / "b" / "c" / "d" / "e" / "f" /
                           "A" / "B" / "C" / "D" / "E" / "F"
               
               https://github.com/victorquinn/chancejs/blob/develop/chance.js#L1349
           */

        guid: function guid() {
          var pool = "abcdefABCDEF1234567890",
          guid = this.string(pool, 8) + '-' +
          this.string(pool, 4) + '-' +
          this.string(pool, 4) + '-' +
          this.string(pool, 4) + '-' +
          this.string(pool, 12);
          return guid;
        },
        uuid: function uuid() {
          return this.guid();
        },
        /*
               ?????????????????? 18 ???????????????
           		    [?????????](http://baike.baidu.com/view/1697.htm#4)
                   ????????? 6 + ??????????????? 8 + ????????? 3 + ????????? 1
               [?????????????????????????????????????????????????????????(GB/T2260)](http://zhidao.baidu.com/question/1954561.html)
           */

        id: function id() {
          var id,
          sum = 0,
          rank = [
          "7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4", "2"],

          last = [
          "1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];


          id = this.pick(DICT).id +
          this.date('yyyyMMdd') +
          this.string('number', 3);

          for (var i = 0; i < id.length; i++) {
            sum += id[i] * rank[i];
          }
          id += last[sum % 11];

          return id;
        },

        /*
               ????????????????????????????????????
               ?????????????????????auto increment primary key??????
           */
        increment: function () {
          var key = 0;
          return function (step) {
            return key += +step || 1; // step?
          };
        }(),
        inc: function inc(step) {
          return this.increment(step);
        } };


      /***/},
    /* 20 */
    /***/function (module, exports, __webpack_require__) {

      var Parser = __webpack_require__(21);
      var Handler = __webpack_require__(22);
      module.exports = {
        Parser: Parser,
        Handler: Handler };


      /***/},
    /* 21 */
    /***/function (module, exports) {

      // https://github.com/nuysoft/regexp
      // forked from https://github.com/ForbesLindesay/regexp

      function parse(n) {
        if ("string" != typeof n) {
          var l = new TypeError("The regexp to parse must be represented as a string.");
          throw l;
        }
        return index = 1, cgs = {}, parser.parse(n);
      }

      function Token(n) {
        this.type = n, this.offset = Token.offset(), this.text = Token.text();
      }

      function Alternate(n, l) {
        Token.call(this, "alternate"), this.left = n, this.right = l;
      }

      function Match(n) {
        Token.call(this, "match"), this.body = n.filter(Boolean);
      }

      function Group(n, l) {
        Token.call(this, n), this.body = l;
      }

      function CaptureGroup(n) {
        Group.call(this, "capture-group"), this.index = cgs[this.offset] || (cgs[this.offset] = index++),
        this.body = n;
      }

      function Quantified(n, l) {
        Token.call(this, "quantified"), this.body = n, this.quantifier = l;
      }

      function Quantifier(n, l) {
        Token.call(this, "quantifier"), this.min = n, this.max = l, this.greedy = !0;
      }

      function CharSet(n, l) {
        Token.call(this, "charset"), this.invert = n, this.body = l;
      }

      function CharacterRange(n, l) {
        Token.call(this, "range"), this.start = n, this.end = l;
      }

      function Literal(n) {
        Token.call(this, "literal"), this.body = n, this.escaped = this.body != this.text;
      }

      function Unicode(n) {
        Token.call(this, "unicode"), this.code = n.toUpperCase();
      }

      function Hex(n) {
        Token.call(this, "hex"), this.code = n.toUpperCase();
      }

      function Octal(n) {
        Token.call(this, "octal"), this.code = n.toUpperCase();
      }

      function BackReference(n) {
        Token.call(this, "back-reference"), this.code = n.toUpperCase();
      }

      function ControlCharacter(n) {
        Token.call(this, "control-character"), this.code = n.toUpperCase();
      }

      var parser = function () {
        function n(n, l) {
          function u() {
            this.constructor = n;
          }
          u.prototype = l.prototype, n.prototype = new u();
        }
        function l(n, l, u, t, r) {
          function e(n, l) {
            function u(n) {
              function l(n) {
                return n.charCodeAt(0).toString(16).toUpperCase();
              }
              return n.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, function (n) {
                return "\\x0" + l(n);
              }).replace(/[\x10-\x1F\x80-\xFF]/g, function (n) {
                return "\\x" + l(n);
              }).replace(/[\u0180-\u0FFF]/g, function (n) {
                return "\\u0" + l(n);
              }).replace(/[\u1080-\uFFFF]/g, function (n) {
                return "\\u" + l(n);
              });
            }
            var t, r;
            switch (n.length) {
              case 0:
                t = "end of input";
                break;

              case 1:
                t = n[0];
                break;

              default:
                t = n.slice(0, -1).join(", ") + " or " + n[n.length - 1];}

            return r = l ? '"' + u(l) + '"' : "end of input", "Expected " + t + " but " + r + " found.";
          }
          this.expected = n, this.found = l, this.offset = u, this.line = t, this.column = r,
          this.name = "SyntaxError", this.message = e(n, l);
        }
        function u(n) {
          function u() {
            return n.substring(Lt, qt);
          }
          function t() {
            return Lt;
          }
          function r(l) {
            function u(l, u, t) {
              var r, e;
              for (r = u; t > r; r++) {e = n.charAt(r), "\n" === e ? (l.seenCR || l.line++, l.column = 1,
                l.seenCR = !1) : "\r" === e || "\u2028" === e || "\u2029" === e ? (l.line++, l.column = 1,
                l.seenCR = !0) : (l.column++, l.seenCR = !1);}
            }
            return Mt !== l && (Mt > l && (Mt = 0, Dt = {
              line: 1,
              column: 1,
              seenCR: !1 }),
            u(Dt, Mt, l), Mt = l), Dt;
          }
          function e(n) {
            Ht > qt || (qt > Ht && (Ht = qt, Ot = []), Ot.push(n));
          }
          function o(n) {
            var l = 0;
            for (n.sort(); l < n.length;) {n[l - 1] === n[l] ? n.splice(l, 1) : l++;}
          }
          function c() {
            var l, u, t, r, o;
            return l = qt, u = i(), null !== u ? (t = qt, 124 === n.charCodeAt(qt) ? (r = fl,
            qt++) : (r = null, 0 === Wt && e(sl)), null !== r ? (o = c(), null !== o ? (r = [r, o],
            t = r) : (qt = t, t = il)) : (qt = t, t = il), null === t && (t = al), null !== t ? (Lt = l,
            u = hl(u, t), null === u ? (qt = l, l = u) : l = u) : (qt = l, l = il)) : (qt = l,
            l = il), l;
          }
          function i() {
            var n, l, u, t, r;
            if (n = qt, l = f(), null === l && (l = al), null !== l) {if (u = qt, Wt++, t = d(),
              Wt--, null === t ? u = al : (qt = u, u = il), null !== u) {
                for (t = [], r = h(), null === r && (r = a()); null !== r;) {t.push(r), r = h(),
                  null === r && (r = a());}
                null !== t ? (r = s(), null === r && (r = al), null !== r ? (Lt = n, l = dl(l, t, r),
                null === l ? (qt = n, n = l) : n = l) : (qt = n, n = il)) : (qt = n, n = il);
              } else qt = n, n = il;} else qt = n, n = il;
            return n;
          }
          function a() {
            var n;
            return n = x(), null === n && (n = Q(), null === n && (n = B())), n;
          }
          function f() {
            var l, u;
            return l = qt, 94 === n.charCodeAt(qt) ? (u = pl, qt++) : (u = null, 0 === Wt && e(vl)),
            null !== u && (Lt = l, u = wl()), null === u ? (qt = l, l = u) : l = u, l;
          }
          function s() {
            var l, u;
            return l = qt, 36 === n.charCodeAt(qt) ? (u = Al, qt++) : (u = null, 0 === Wt && e(Cl)),
            null !== u && (Lt = l, u = gl()), null === u ? (qt = l, l = u) : l = u, l;
          }
          function h() {
            var n, l, u;
            return n = qt, l = a(), null !== l ? (u = d(), null !== u ? (Lt = n, l = bl(l, u),
            null === l ? (qt = n, n = l) : n = l) : (qt = n, n = il)) : (qt = n, n = il), n;
          }
          function d() {
            var n, l, u;
            return Wt++, n = qt, l = p(), null !== l ? (u = k(), null === u && (u = al), null !== u ? (Lt = n,
            l = Tl(l, u), null === l ? (qt = n, n = l) : n = l) : (qt = n, n = il)) : (qt = n,
            n = il), Wt--, null === n && (l = null, 0 === Wt && e(kl)), n;
          }
          function p() {
            var n;
            return n = v(), null === n && (n = w(), null === n && (n = A(), null === n && (n = C(),
            null === n && (n = g(), null === n && (n = b()))))), n;
          }
          function v() {
            var l, u, t, r, o, c;
            return l = qt, 123 === n.charCodeAt(qt) ? (u = xl, qt++) : (u = null, 0 === Wt && e(yl)),
            null !== u ? (t = T(), null !== t ? (44 === n.charCodeAt(qt) ? (r = ml, qt++) : (r = null,
            0 === Wt && e(Rl)), null !== r ? (o = T(), null !== o ? (125 === n.charCodeAt(qt) ? (c = Fl,
            qt++) : (c = null, 0 === Wt && e(Ql)), null !== c ? (Lt = l, u = Sl(t, o), null === u ? (qt = l,
            l = u) : l = u) : (qt = l, l = il)) : (qt = l, l = il)) : (qt = l, l = il)) : (qt = l,
            l = il)) : (qt = l, l = il), l;
          }
          function w() {
            var l, u, t, r;
            return l = qt, 123 === n.charCodeAt(qt) ? (u = xl, qt++) : (u = null, 0 === Wt && e(yl)),
            null !== u ? (t = T(), null !== t ? (n.substr(qt, 2) === Ul ? (r = Ul, qt += 2) : (r = null,
            0 === Wt && e(El)), null !== r ? (Lt = l, u = Gl(t), null === u ? (qt = l, l = u) : l = u) : (qt = l,
            l = il)) : (qt = l, l = il)) : (qt = l, l = il), l;
          }
          function A() {
            var l, u, t, r;
            return l = qt, 123 === n.charCodeAt(qt) ? (u = xl, qt++) : (u = null, 0 === Wt && e(yl)),
            null !== u ? (t = T(), null !== t ? (125 === n.charCodeAt(qt) ? (r = Fl, qt++) : (r = null,
            0 === Wt && e(Ql)), null !== r ? (Lt = l, u = Bl(t), null === u ? (qt = l, l = u) : l = u) : (qt = l,
            l = il)) : (qt = l, l = il)) : (qt = l, l = il), l;
          }
          function C() {
            var l, u;
            return l = qt, 43 === n.charCodeAt(qt) ? (u = jl, qt++) : (u = null, 0 === Wt && e($l)),
            null !== u && (Lt = l, u = ql()), null === u ? (qt = l, l = u) : l = u, l;
          }
          function g() {
            var l, u;
            return l = qt, 42 === n.charCodeAt(qt) ? (u = Ll, qt++) : (u = null, 0 === Wt && e(Ml)),
            null !== u && (Lt = l, u = Dl()), null === u ? (qt = l, l = u) : l = u, l;
          }
          function b() {
            var l, u;
            return l = qt, 63 === n.charCodeAt(qt) ? (u = Hl, qt++) : (u = null, 0 === Wt && e(Ol)),
            null !== u && (Lt = l, u = Wl()), null === u ? (qt = l, l = u) : l = u, l;
          }
          function k() {
            var l;
            return 63 === n.charCodeAt(qt) ? (l = Hl, qt++) : (l = null, 0 === Wt && e(Ol)),
            l;
          }
          function T() {
            var l, u, t;
            if (l = qt, u = [], zl.test(n.charAt(qt)) ? (t = n.charAt(qt), qt++) : (t = null,
            0 === Wt && e(Il)), null !== t) for (; null !== t;) {u.push(t), zl.test(n.charAt(qt)) ? (t = n.charAt(qt),
              qt++) : (t = null, 0 === Wt && e(Il));} else u = il;
            return null !== u && (Lt = l, u = Jl(u)), null === u ? (qt = l, l = u) : l = u,
            l;
          }
          function x() {
            var l, u, t, r;
            return l = qt, 40 === n.charCodeAt(qt) ? (u = Kl, qt++) : (u = null, 0 === Wt && e(Nl)),
            null !== u ? (t = R(), null === t && (t = F(), null === t && (t = m(), null === t && (t = y()))),
            null !== t ? (41 === n.charCodeAt(qt) ? (r = Pl, qt++) : (r = null, 0 === Wt && e(Vl)),
            null !== r ? (Lt = l, u = Xl(t), null === u ? (qt = l, l = u) : l = u) : (qt = l,
            l = il)) : (qt = l, l = il)) : (qt = l, l = il), l;
          }
          function y() {
            var n, l;
            return n = qt, l = c(), null !== l && (Lt = n, l = Yl(l)), null === l ? (qt = n,
            n = l) : n = l, n;
          }
          function m() {
            var l, u, t;
            return l = qt, n.substr(qt, 2) === Zl ? (u = Zl, qt += 2) : (u = null, 0 === Wt && e(_l)),
            null !== u ? (t = c(), null !== t ? (Lt = l, u = nu(t), null === u ? (qt = l, l = u) : l = u) : (qt = l,
            l = il)) : (qt = l, l = il), l;
          }
          function R() {
            var l, u, t;
            return l = qt, n.substr(qt, 2) === lu ? (u = lu, qt += 2) : (u = null, 0 === Wt && e(uu)),
            null !== u ? (t = c(), null !== t ? (Lt = l, u = tu(t), null === u ? (qt = l, l = u) : l = u) : (qt = l,
            l = il)) : (qt = l, l = il), l;
          }
          function F() {
            var l, u, t;
            return l = qt, n.substr(qt, 2) === ru ? (u = ru, qt += 2) : (u = null, 0 === Wt && e(eu)),
            null !== u ? (t = c(), null !== t ? (Lt = l, u = ou(t), null === u ? (qt = l, l = u) : l = u) : (qt = l,
            l = il)) : (qt = l, l = il), l;
          }
          function Q() {
            var l, u, t, r, o;
            if (Wt++, l = qt, 91 === n.charCodeAt(qt) ? (u = iu, qt++) : (u = null, 0 === Wt && e(au)),
            null !== u) {if (94 === n.charCodeAt(qt) ? (t = pl, qt++) : (t = null, 0 === Wt && e(vl)),
              null === t && (t = al), null !== t) {
                for (r = [], o = S(), null === o && (o = U()); null !== o;) {r.push(o), o = S(),
                  null === o && (o = U());}
                null !== r ? (93 === n.charCodeAt(qt) ? (o = fu, qt++) : (o = null, 0 === Wt && e(su)),
                null !== o ? (Lt = l, u = hu(t, r), null === u ? (qt = l, l = u) : l = u) : (qt = l,
                l = il)) : (qt = l, l = il);
              } else qt = l, l = il;} else qt = l, l = il;
            return Wt--, null === l && (u = null, 0 === Wt && e(cu)), l;
          }
          function S() {
            var l, u, t, r;
            return Wt++, l = qt, u = U(), null !== u ? (45 === n.charCodeAt(qt) ? (t = pu, qt++) : (t = null,
            0 === Wt && e(vu)), null !== t ? (r = U(), null !== r ? (Lt = l, u = wu(u, r), null === u ? (qt = l,
            l = u) : l = u) : (qt = l, l = il)) : (qt = l, l = il)) : (qt = l, l = il), Wt--,
            null === l && (u = null, 0 === Wt && e(du)), l;
          }
          function U() {
            var n, l;
            return Wt++, n = G(), null === n && (n = E()), Wt--, null === n && (l = null, 0 === Wt && e(Au)),
            n;
          }
          function E() {
            var l, u;
            return l = qt, Cu.test(n.charAt(qt)) ? (u = n.charAt(qt), qt++) : (u = null, 0 === Wt && e(gu)),
            null !== u && (Lt = l, u = bu(u)), null === u ? (qt = l, l = u) : l = u, l;
          }
          function G() {
            var n;
            return n = L(), null === n && (n = Y(), null === n && (n = H(), null === n && (n = O(),
            null === n && (n = W(), null === n && (n = z(), null === n && (n = I(), null === n && (n = J(),
            null === n && (n = K(), null === n && (n = N(), null === n && (n = P(), null === n && (n = V(),
            null === n && (n = X(), null === n && (n = _(), null === n && (n = nl(), null === n && (n = ll(),
            null === n && (n = ul(), null === n && (n = tl()))))))))))))))))), n;
          }
          function B() {
            var n;
            return n = j(), null === n && (n = q(), null === n && (n = $())), n;
          }
          function j() {
            var l, u;
            return l = qt, 46 === n.charCodeAt(qt) ? (u = ku, qt++) : (u = null, 0 === Wt && e(Tu)),
            null !== u && (Lt = l, u = xu()), null === u ? (qt = l, l = u) : l = u, l;
          }
          function $() {
            var l, u;
            return Wt++, l = qt, mu.test(n.charAt(qt)) ? (u = n.charAt(qt), qt++) : (u = null,
            0 === Wt && e(Ru)), null !== u && (Lt = l, u = bu(u)), null === u ? (qt = l, l = u) : l = u,
            Wt--, null === l && (u = null, 0 === Wt && e(yu)), l;
          }
          function q() {
            var n;
            return n = M(), null === n && (n = D(), null === n && (n = Y(), null === n && (n = H(),
            null === n && (n = O(), null === n && (n = W(), null === n && (n = z(), null === n && (n = I(),
            null === n && (n = J(), null === n && (n = K(), null === n && (n = N(), null === n && (n = P(),
            null === n && (n = V(), null === n && (n = X(), null === n && (n = Z(), null === n && (n = _(),
            null === n && (n = nl(), null === n && (n = ll(), null === n && (n = ul(), null === n && (n = tl()))))))))))))))))))),
            n;
          }
          function L() {
            var l, u;
            return l = qt, n.substr(qt, 2) === Fu ? (u = Fu, qt += 2) : (u = null, 0 === Wt && e(Qu)),
            null !== u && (Lt = l, u = Su()), null === u ? (qt = l, l = u) : l = u, l;
          }
          function M() {
            var l, u;
            return l = qt, n.substr(qt, 2) === Fu ? (u = Fu, qt += 2) : (u = null, 0 === Wt && e(Qu)),
            null !== u && (Lt = l, u = Uu()), null === u ? (qt = l, l = u) : l = u, l;
          }
          function D() {
            var l, u;
            return l = qt, n.substr(qt, 2) === Eu ? (u = Eu, qt += 2) : (u = null, 0 === Wt && e(Gu)),
            null !== u && (Lt = l, u = Bu()), null === u ? (qt = l, l = u) : l = u, l;
          }
          function H() {
            var l, u;
            return l = qt, n.substr(qt, 2) === ju ? (u = ju, qt += 2) : (u = null, 0 === Wt && e($u)),
            null !== u && (Lt = l, u = qu()), null === u ? (qt = l, l = u) : l = u, l;
          }
          function O() {
            var l, u;
            return l = qt, n.substr(qt, 2) === Lu ? (u = Lu, qt += 2) : (u = null, 0 === Wt && e(Mu)),
            null !== u && (Lt = l, u = Du()), null === u ? (qt = l, l = u) : l = u, l;
          }
          function W() {
            var l, u;
            return l = qt, n.substr(qt, 2) === Hu ? (u = Hu, qt += 2) : (u = null, 0 === Wt && e(Ou)),
            null !== u && (Lt = l, u = Wu()), null === u ? (qt = l, l = u) : l = u, l;
          }
          function z() {
            var l, u;
            return l = qt, n.substr(qt, 2) === zu ? (u = zu, qt += 2) : (u = null, 0 === Wt && e(Iu)),
            null !== u && (Lt = l, u = Ju()), null === u ? (qt = l, l = u) : l = u, l;
          }
          function I() {
            var l, u;
            return l = qt, n.substr(qt, 2) === Ku ? (u = Ku, qt += 2) : (u = null, 0 === Wt && e(Nu)),
            null !== u && (Lt = l, u = Pu()), null === u ? (qt = l, l = u) : l = u, l;
          }
          function J() {
            var l, u;
            return l = qt, n.substr(qt, 2) === Vu ? (u = Vu, qt += 2) : (u = null, 0 === Wt && e(Xu)),
            null !== u && (Lt = l, u = Yu()), null === u ? (qt = l, l = u) : l = u, l;
          }
          function K() {
            var l, u;
            return l = qt, n.substr(qt, 2) === Zu ? (u = Zu, qt += 2) : (u = null, 0 === Wt && e(_u)),
            null !== u && (Lt = l, u = nt()), null === u ? (qt = l, l = u) : l = u, l;
          }
          function N() {
            var l, u;
            return l = qt, n.substr(qt, 2) === lt ? (u = lt, qt += 2) : (u = null, 0 === Wt && e(ut)),
            null !== u && (Lt = l, u = tt()), null === u ? (qt = l, l = u) : l = u, l;
          }
          function P() {
            var l, u;
            return l = qt, n.substr(qt, 2) === rt ? (u = rt, qt += 2) : (u = null, 0 === Wt && e(et)),
            null !== u && (Lt = l, u = ot()), null === u ? (qt = l, l = u) : l = u, l;
          }
          function V() {
            var l, u;
            return l = qt, n.substr(qt, 2) === ct ? (u = ct, qt += 2) : (u = null, 0 === Wt && e(it)),
            null !== u && (Lt = l, u = at()), null === u ? (qt = l, l = u) : l = u, l;
          }
          function X() {
            var l, u;
            return l = qt, n.substr(qt, 2) === ft ? (u = ft, qt += 2) : (u = null, 0 === Wt && e(st)),
            null !== u && (Lt = l, u = ht()), null === u ? (qt = l, l = u) : l = u, l;
          }
          function Y() {
            var l, u, t;
            return l = qt, n.substr(qt, 2) === dt ? (u = dt, qt += 2) : (u = null, 0 === Wt && e(pt)),
            null !== u ? (n.length > qt ? (t = n.charAt(qt), qt++) : (t = null, 0 === Wt && e(vt)),
            null !== t ? (Lt = l, u = wt(t), null === u ? (qt = l, l = u) : l = u) : (qt = l,
            l = il)) : (qt = l, l = il), l;
          }
          function Z() {
            var l, u, t;
            return l = qt, 92 === n.charCodeAt(qt) ? (u = At, qt++) : (u = null, 0 === Wt && e(Ct)),
            null !== u ? (gt.test(n.charAt(qt)) ? (t = n.charAt(qt), qt++) : (t = null, 0 === Wt && e(bt)),
            null !== t ? (Lt = l, u = kt(t), null === u ? (qt = l, l = u) : l = u) : (qt = l,
            l = il)) : (qt = l, l = il), l;
          }
          function _() {
            var l, u, t, r;
            if (l = qt, n.substr(qt, 2) === Tt ? (u = Tt, qt += 2) : (u = null, 0 === Wt && e(xt)),
            null !== u) {
              if (t = [], yt.test(n.charAt(qt)) ? (r = n.charAt(qt), qt++) : (r = null, 0 === Wt && e(mt)),
              null !== r) for (; null !== r;) {t.push(r), yt.test(n.charAt(qt)) ? (r = n.charAt(qt),
                qt++) : (r = null, 0 === Wt && e(mt));} else t = il;
              null !== t ? (Lt = l, u = Rt(t), null === u ? (qt = l, l = u) : l = u) : (qt = l,
              l = il);
            } else qt = l, l = il;
            return l;
          }
          function nl() {
            var l, u, t, r;
            if (l = qt, n.substr(qt, 2) === Ft ? (u = Ft, qt += 2) : (u = null, 0 === Wt && e(Qt)),
            null !== u) {
              if (t = [], St.test(n.charAt(qt)) ? (r = n.charAt(qt), qt++) : (r = null, 0 === Wt && e(Ut)),
              null !== r) for (; null !== r;) {t.push(r), St.test(n.charAt(qt)) ? (r = n.charAt(qt),
                qt++) : (r = null, 0 === Wt && e(Ut));} else t = il;
              null !== t ? (Lt = l, u = Et(t), null === u ? (qt = l, l = u) : l = u) : (qt = l,
              l = il);
            } else qt = l, l = il;
            return l;
          }
          function ll() {
            var l, u, t, r;
            if (l = qt, n.substr(qt, 2) === Gt ? (u = Gt, qt += 2) : (u = null, 0 === Wt && e(Bt)),
            null !== u) {
              if (t = [], St.test(n.charAt(qt)) ? (r = n.charAt(qt), qt++) : (r = null, 0 === Wt && e(Ut)),
              null !== r) for (; null !== r;) {t.push(r), St.test(n.charAt(qt)) ? (r = n.charAt(qt),
                qt++) : (r = null, 0 === Wt && e(Ut));} else t = il;
              null !== t ? (Lt = l, u = jt(t), null === u ? (qt = l, l = u) : l = u) : (qt = l,
              l = il);
            } else qt = l, l = il;
            return l;
          }
          function ul() {
            var l, u;
            return l = qt, n.substr(qt, 2) === Tt ? (u = Tt, qt += 2) : (u = null, 0 === Wt && e(xt)),
            null !== u && (Lt = l, u = $t()), null === u ? (qt = l, l = u) : l = u, l;
          }
          function tl() {
            var l, u, t;
            return l = qt, 92 === n.charCodeAt(qt) ? (u = At, qt++) : (u = null, 0 === Wt && e(Ct)),
            null !== u ? (n.length > qt ? (t = n.charAt(qt), qt++) : (t = null, 0 === Wt && e(vt)),
            null !== t ? (Lt = l, u = bu(t), null === u ? (qt = l, l = u) : l = u) : (qt = l,
            l = il)) : (qt = l, l = il), l;
          }
          var rl,el = arguments.length > 1 ? arguments[1] : {},ol = {
            regexp: c },
          cl = c,il = null,al = "",fl = "|",sl = '"|"',hl = function hl(n, l) {
            return l ? new Alternate(n, l[1]) : n;
          },dl = function dl(n, l, u) {
            return new Match([n].concat(l).concat([u]));
          },pl = "^",vl = '"^"',wl = function wl() {
            return new Token("start");
          },Al = "$",Cl = '"$"',gl = function gl() {
            return new Token("end");
          },bl = function bl(n, l) {
            return new Quantified(n, l);
          },kl = "Quantifier",Tl = function Tl(n, l) {
            return l && (n.greedy = !1), n;
          },xl = "{",yl = '"{"',ml = ",",Rl = '","',Fl = "}",Ql = '"}"',Sl = function Sl(n, l) {
            return new Quantifier(n, l);
          },Ul = ",}",El = '",}"',Gl = function Gl(n) {
            return new Quantifier(n, 1 / 0);
          },Bl = function Bl(n) {
            return new Quantifier(n, n);
          },jl = "+",$l = '"+"',ql = function ql() {
            return new Quantifier(1, 1 / 0);
          },Ll = "*",Ml = '"*"',Dl = function Dl() {
            return new Quantifier(0, 1 / 0);
          },Hl = "?",Ol = '"?"',Wl = function Wl() {
            return new Quantifier(0, 1);
          },zl = /^[0-9]/,Il = "[0-9]",Jl = function Jl(n) {
            return +n.join("");
          },Kl = "(",Nl = '"("',Pl = ")",Vl = '")"',Xl = function Xl(n) {
            return n;
          },Yl = function Yl(n) {
            return new CaptureGroup(n);
          },Zl = "?:",_l = '"?:"',nu = function nu(n) {
            return new Group("non-capture-group", n);
          },lu = "?=",uu = '"?="',tu = function tu(n) {
            return new Group("positive-lookahead", n);
          },ru = "?!",eu = '"?!"',ou = function ou(n) {
            return new Group("negative-lookahead", n);
          },cu = "CharacterSet",iu = "[",au = '"["',fu = "]",su = '"]"',hu = function hu(n, l) {
            return new CharSet(!!n, l);
          },du = "CharacterRange",pu = "-",vu = '"-"',wu = function wu(n, l) {
            return new CharacterRange(n, l);
          },Au = "Character",Cu = /^[^\\\]]/,gu = "[^\\\\\\]]",bu = function bu(n) {
            return new Literal(n);
          },ku = ".",Tu = '"."',xu = function xu() {
            return new Token("any-character");
          },yu = "Literal",mu = /^[^|\\\/.[()?+*$\^]/,Ru = "[^|\\\\\\/.[()?+*$\\^]",Fu = "\\b",Qu = '"\\\\b"',Su = function Su() {
            return new Token("backspace");
          },Uu = function Uu() {
            return new Token("word-boundary");
          },Eu = "\\B",Gu = '"\\\\B"',Bu = function Bu() {
            return new Token("non-word-boundary");
          },ju = "\\d",$u = '"\\\\d"',qu = function qu() {
            return new Token("digit");
          },Lu = "\\D",Mu = '"\\\\D"',Du = function Du() {
            return new Token("non-digit");
          },Hu = "\\f",Ou = '"\\\\f"',Wu = function Wu() {
            return new Token("form-feed");
          },zu = "\\n",Iu = '"\\\\n"',Ju = function Ju() {
            return new Token("line-feed");
          },Ku = "\\r",Nu = '"\\\\r"',Pu = function Pu() {
            return new Token("carriage-return");
          },Vu = "\\s",Xu = '"\\\\s"',Yu = function Yu() {
            return new Token("white-space");
          },Zu = "\\S",_u = '"\\\\S"',nt = function nt() {
            return new Token("non-white-space");
          },lt = "\\t",ut = '"\\\\t"',tt = function tt() {
            return new Token("tab");
          },rt = "\\v",et = '"\\\\v"',ot = function ot() {
            return new Token("vertical-tab");
          },ct = "\\w",it = '"\\\\w"',at = function at() {
            return new Token("word");
          },ft = "\\W",st = '"\\\\W"',ht = function ht() {
            return new Token("non-word");
          },dt = "\\c",pt = '"\\\\c"',vt = "any character",wt = function wt(n) {
            return new ControlCharacter(n);
          },At = "\\",Ct = '"\\\\"',gt = /^[1-9]/,bt = "[1-9]",kt = function kt(n) {
            return new BackReference(n);
          },Tt = "\\0",xt = '"\\\\0"',yt = /^[0-7]/,mt = "[0-7]",Rt = function Rt(n) {
            return new Octal(n.join(""));
          },Ft = "\\x",Qt = '"\\\\x"',St = /^[0-9a-fA-F]/,Ut = "[0-9a-fA-F]",Et = function Et(n) {
            return new Hex(n.join(""));
          },Gt = "\\u",Bt = "\"\\\\u\"",jt = function jt(n) {
            return new Unicode(n.join(""));
          },$t = function $t() {
            return new Token("null-character");
          },qt = 0,Lt = 0,Mt = 0,Dt = {
            line: 1,
            column: 1,
            seenCR: !1 },
          Ht = 0,Ot = [],Wt = 0;
          if ("startRule" in el) {
            if (!(el.startRule in ol)) throw new Error("Can't start parsing from rule \"" + el.startRule + '".');
            cl = ol[el.startRule];
          }
          if (Token.offset = t, Token.text = u, rl = cl(), null !== rl && qt === n.length) return rl;
          throw o(Ot), Lt = Math.max(qt, Ht), new l(Ot, Lt < n.length ? n.charAt(Lt) : null, Lt, r(Lt).line, r(Lt).column);
        }
        return n(l, Error), {
          SyntaxError: l,
          parse: u };

      }(),index = 1,cgs = {};

      module.exports = parser;

      /***/},
    /* 22 */
    /***/function (module, exports, __webpack_require__) {

      /*
                                                              ## RegExp Handler
                                                          
                                                              https://github.com/ForbesLindesay/regexp
                                                              https://github.com/dmajda/pegjs
                                                              http://www.regexper.com/
                                                          
                                                              ?????????????????????
                                                                  {
                                                                      type: '',
                                                                      offset: number,
                                                                      text: '',
                                                                      body: {},
                                                                      escaped: true/false
                                                                  }
                                                          
                                                              type ?????????
                                                                  alternate             |         ??????
                                                                  match                 ??????
                                                                  capture-group         ()        ?????????
                                                                  non-capture-group     (?:...)   ????????????
                                                                  positive-lookahead    (?=p)     ????????????????????????
                                                                  negative-lookahead    (?!p)     ????????????????????????
                                                                  quantified            a*        ????????????
                                                                  quantifier            *         ??????
                                                                  charset               []        ?????????
                                                                  range                 {m, n}    ??????
                                                                  literal               a         ???????????????
                                                                  unicode               \uxxxx    Unicode
                                                                  hex                   \x        ????????????
                                                                  octal                 ?????????
                                                                  back-reference        \n        ????????????
                                                                  control-character     \cX       ????????????
                                                          
                                                                  // Token
                                                                  start               ^       ??????
                                                                  end                 $       ??????
                                                                  any-character       .       ????????????
                                                                  backspace           [\b]    ???????????????
                                                                  word-boundary       \b      ????????????
                                                                  non-word-boundary   \B      ???????????????
                                                                  digit               \d      ASCII ?????????[0-9]
                                                                  non-digit           \D      ??? ASCII ?????????[^0-9]
                                                                  form-feed           \f      ?????????
                                                                  line-feed           \n      ?????????
                                                                  carriage-return     \r      ?????????
                                                                  white-space         \s      ?????????
                                                                  non-white-space     \S      ????????????
                                                                  tab                 \t      ?????????
                                                                  vertical-tab        \v      ???????????????
                                                                  word                \w      ASCII ?????????[a-zA-Z0-9]
                                                                  non-word            \W      ??? ASCII ?????????[^a-zA-Z0-9]
                                                                  null-character      \o      NUL ??????
                                                           */

      var Util = __webpack_require__(3);
      var Random = __webpack_require__(5);
      /*
                                               
                                           */
      var Handler = {
        extend: Util.extend };


      // http://en.wikipedia.org/wiki/ASCII#ASCII_printable_code_chart
      /*var ASCII_CONTROL_CODE_CHART = {
          '@': ['\u0000'],
          A: ['\u0001'],
          B: ['\u0002'],
          C: ['\u0003'],
          D: ['\u0004'],
          E: ['\u0005'],
          F: ['\u0006'],
          G: ['\u0007', '\a'],
          H: ['\u0008', '\b'],
          I: ['\u0009', '\t'],
          J: ['\u000A', '\n'],
          K: ['\u000B', '\v'],
          L: ['\u000C', '\f'],
          M: ['\u000D', '\r'],
          N: ['\u000E'],
          O: ['\u000F'],
          P: ['\u0010'],
          Q: ['\u0011'],
          R: ['\u0012'],
          S: ['\u0013'],
          T: ['\u0014'],
          U: ['\u0015'],
          V: ['\u0016'],
          W: ['\u0017'],
          X: ['\u0018'],
          Y: ['\u0019'],
          Z: ['\u001A'],
          '[': ['\u001B', '\e'],
          '\\': ['\u001C'],
          ']': ['\u001D'],
          '^': ['\u001E'],
          '_': ['\u001F']
      }*/

      // ASCII printable code chart
      // var LOWER = 'abcdefghijklmnopqrstuvwxyz'
      // var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      // var NUMBER = '0123456789'
      // var SYMBOL = ' !"#$%&\'()*+,-./' + ':;<=>?@' + '[\\]^_`' + '{|}~'
      var LOWER = ascii(97, 122);
      var UPPER = ascii(65, 90);
      var NUMBER = ascii(48, 57);
      var OTHER = ascii(32, 47) + ascii(58, 64) + ascii(91, 96) + ascii(123, 126); // ?????? 95 _ ascii(91, 94) + ascii(96, 96)
      var PRINTABLE = ascii(32, 126);
      var SPACE = " \f\n\r\t\x0B\xA0\u2028\u2029";
      var CHARACTER_CLASSES = {
        '\\w': LOWER + UPPER + NUMBER + '_', // ascii(95, 95)
        '\\W': OTHER.replace('_', ''),
        '\\s': SPACE,
        '\\S': function () {
          var result = PRINTABLE;
          for (var i = 0; i < SPACE.length; i++) {
            result = result.replace(SPACE[i], '');
          }
          return result;
        }(),
        '\\d': NUMBER,
        '\\D': LOWER + UPPER + OTHER };


      function ascii(from, to) {
        var result = '';
        for (var i = from; i <= to; i++) {
          result += String.fromCharCode(i);
        }
        return result;
      }

      // var ast = RegExpParser.parse(regexp.source)
      Handler.gen = function (node, result, cache) {
        cache = cache || {
          guid: 1 };

        return Handler[node.type] ? Handler[node.type](node, result, cache) :
        Handler.token(node, result, cache);
      };

      Handler.extend({
        /* jshint unused:false */
        token: function token(node, result, cache) {
          switch (node.type) {
            case 'start':
            case 'end':
              return '';
            case 'any-character':
              return Random.character();
            case 'backspace':
              return '';
            case 'word-boundary': // TODO
              return '';
            case 'non-word-boundary': // TODO
              break;
            case 'digit':
              return Random.pick(
              NUMBER.split(''));

            case 'non-digit':
              return Random.pick(
              (LOWER + UPPER + OTHER).split(''));

            case 'form-feed':
              break;
            case 'line-feed':
              return node.body || node.text;
            case 'carriage-return':
              break;
            case 'white-space':
              return Random.pick(
              SPACE.split(''));

            case 'non-white-space':
              return Random.pick(
              (LOWER + UPPER + NUMBER).split(''));

            case 'tab':
              break;
            case 'vertical-tab':
              break;
            case 'word': // \w [a-zA-Z0-9]
              return Random.pick(
              (LOWER + UPPER + NUMBER).split(''));

            case 'non-word': // \W [^a-zA-Z0-9]
              return Random.pick(
              OTHER.replace('_', '').split(''));

            case 'null-character':
              break;}

          return node.body || node.text;
        },
        /*
               {
                   type: 'alternate',
                   offset: 0,
                   text: '',
                   left: {
                       boyd: []
                   },
                   right: {
                       boyd: []
                   }
               }
           */
        alternate: function alternate(node, result, cache) {
          // node.left/right {}
          return this.gen(
          Random.boolean() ? node.left : node.right,
          result,
          cache);

        },
        /*
               {
                   type: 'match',
                   offset: 0,
                   text: '',
                   body: []
               }
           */
        match: function match(node, result, cache) {
          result = '';
          // node.body []
          for (var i = 0; i < node.body.length; i++) {
            result += this.gen(node.body[i], result, cache);
          }
          return result;
        },
        // ()
        'capture-group': function captureGroup(node, result, cache) {
          // node.body {}
          result = this.gen(node.body, result, cache);
          cache[cache.guid++] = result;
          return result;
        },
        // (?:...)
        'non-capture-group': function nonCaptureGroup(node, result, cache) {
          // node.body {}
          return this.gen(node.body, result, cache);
        },
        // (?=p)
        'positive-lookahead': function positiveLookahead(node, result, cache) {
          // node.body
          return this.gen(node.body, result, cache);
        },
        // (?!p)
        'negative-lookahead': function negativeLookahead(node, result, cache) {
          // node.body
          return '';
        },
        /*
               {
                   type: 'quantified',
                   offset: 3,
                   text: 'c*',
                   body: {
                       type: 'literal',
                       offset: 3,
                       text: 'c',
                       body: 'c',
                       escaped: false
                   },
                   quantifier: {
                       type: 'quantifier',
                       offset: 4,
                       text: '*',
                       min: 0,
                       max: Infinity,
                       greedy: true
                   }
               }
           */
        quantified: function quantified(node, result, cache) {
          result = '';
          // node.quantifier {}
          var count = this.quantifier(node.quantifier);
          // node.body {}
          for (var i = 0; i < count; i++) {
            result += this.gen(node.body, result, cache);
          }
          return result;
        },
        /*
               quantifier: {
                   type: 'quantifier',
                   offset: 4,
                   text: '*',
                   min: 0,
                   max: Infinity,
                   greedy: true
               }
           */
        quantifier: function quantifier(node, result, cache) {
          var min = Math.max(node.min, 0);
          var max = isFinite(node.max) ? node.max :
          min + Random.integer(3, 7);
          return Random.integer(min, max);
        },
        /*
               
           */
        charset: function charset(node, result, cache) {
          // node.invert
          if (node.invert) return this['invert-charset'](node, result, cache);

          // node.body []
          var literal = Random.pick(node.body);
          return this.gen(literal, result, cache);
        },
        'invert-charset': function invertCharset(node, result, cache) {
          var pool = PRINTABLE;
          for (var i = 0, item; i < node.body.length; i++) {
            item = node.body[i];
            switch (item.type) {
              case 'literal':
                pool = pool.replace(item.body, '');
                break;
              case 'range':
                var min = this.gen(item.start, result, cache).charCodeAt();
                var max = this.gen(item.end, result, cache).charCodeAt();
                for (var ii = min; ii <= max; ii++) {
                  pool = pool.replace(String.fromCharCode(ii), '');
                }
              /* falls through */
              default:
                var characters = CHARACTER_CLASSES[item.text];
                if (characters) {
                  for (var iii = 0; iii <= characters.length; iii++) {
                    pool = pool.replace(characters[iii], '');
                  }
                }}

          }
          return Random.pick(pool.split(''));
        },
        range: function range(node, result, cache) {
          // node.start, node.end
          var min = this.gen(node.start, result, cache).charCodeAt();
          var max = this.gen(node.end, result, cache).charCodeAt();
          return String.fromCharCode(
          Random.integer(min, max));

        },
        literal: function literal(node, result, cache) {
          return node.escaped ? node.body : node.text;
        },
        // Unicode \u
        unicode: function unicode(node, result, cache) {
          return String.fromCharCode(
          parseInt(node.code, 16));

        },
        // ???????????? \xFF
        hex: function hex(node, result, cache) {
          return String.fromCharCode(
          parseInt(node.code, 16));

        },
        // ????????? \0
        octal: function octal(node, result, cache) {
          return String.fromCharCode(
          parseInt(node.code, 8));

        },
        // ????????????
        'back-reference': function backReference(node, result, cache) {
          return cache[node.code] || '';
        },
        /*
               http://en.wikipedia.org/wiki/C0_and_C1_control_codes
           */
        CONTROL_CHARACTER_MAP: function () {
          var CONTROL_CHARACTER = '@ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z [ \\ ] ^ _'.split(' ');
          var CONTROL_CHARACTER_UNICODE = "\0 \x01 \x02 \x03 \x04 \x05 \x06 \x07 \b \t \n \x0B \f \r \x0E \x0F \x10 \x11 \x12 \x13 \x14 \x15 \x16 \x17 \x18 \x19 \x1A \x1B \x1C \x1D \x1E \x1F".split(' ');
          var map = {};
          for (var i = 0; i < CONTROL_CHARACTER.length; i++) {
            map[CONTROL_CHARACTER[i]] = CONTROL_CHARACTER_UNICODE[i];
          }
          return map;
        }(),
        'control-character': function controlCharacter(node, result, cache) {
          return this.CONTROL_CHARACTER_MAP[node.code];
        } });


      module.exports = Handler;

      /***/},
    /* 23 */
    /***/function (module, exports, __webpack_require__) {

      module.exports = __webpack_require__(24);

      /***/},
    /* 24 */
    /***/function (module, exports, __webpack_require__) {

      /*
                                                              ## toJSONSchema
                                                          
                                                              ??? Mock.js ?????????????????????????????? JSON Schema???
                                                          
                                                              > [JSON Schema](http://json-schema.org/)
                                                           */
      var Constant = __webpack_require__(2);
      var Util = __webpack_require__(3);
      var Parser = __webpack_require__(4);

      function toJSONSchema(template, name, path /* Internal Use Only */) {
        // type rule properties items
        path = path || [];
        var result = {
          name: typeof name === 'string' ? name.replace(Constant.RE_KEY, '$1') : name,
          template: template,
          type: Util.type(template), // ???????????????????????? { 'name|1': [{}, {} ...] }
          rule: Parser.parse(name) };

        result.path = path.slice(0);
        result.path.push(name === undefined ? 'ROOT' : result.name);

        switch (result.type) {
          case 'array':
            result.items = [];
            Util.each(template, function (value, index) {
              result.items.push(
              toJSONSchema(value, index, result.path));

            });
            break;
          case 'object':
            result.properties = [];
            Util.each(template, function (value, name) {
              result.properties.push(
              toJSONSchema(value, name, result.path));

            });
            break;}


        return result;

      }

      module.exports = toJSONSchema;


      /***/},
    /* 25 */
    /***/function (module, exports, __webpack_require__) {

      module.exports = __webpack_require__(26);

      /***/},
    /* 26 */
    /***/function (module, exports, __webpack_require__) {

      /*
                                                              ## valid(template, data)
                                                          
                                                              ?????????????????? data ????????????????????? template ?????????
                                                              
                                                              ???????????????
                                                              1. ???????????????
                                                                  ?????????????????? template ????????????????????????????????? JSON-Schame
                                                                  name               ????????? 
                                                                  type               ???????????????
                                                                  template           ???????????????
                                                                  properties         ??????????????????
                                                                  items              ??????????????????
                                                                  rule               ?????????????????????
                                                              2. ?????????????????????
                                                                  ????????? JSON-Schema ????????????????????????????????????????????????????????????????????????????????????
                                                          
                                                              ???????????? 
                                                              https://github.com/fge/json-schema-validator/blob/master/src/main/resources/com/github/fge/jsonschema/validator/validation.properties
                                                              [JSON-Schama validator](http://json-schema-validator.herokuapp.com/)
                                                              [Regexp Demo](http://demos.forbeslindesay.co.uk/regexp/)
                                                          */
      var Constant = __webpack_require__(2);
      var Util = __webpack_require__(3);
      var toJSONSchema = __webpack_require__(23);

      function valid(template, data) {
        var schema = toJSONSchema(template);
        var result = Diff.diff(schema, data);
        for (var i = 0; i < result.length; i++) {
          // console.log(template, data)
          // console.warn(Assert.message(result[i]))
        }
        return result;
      }

      /*
            ## name
                ???????????????????????????????????? name
                ??????????????????????????????
            ## type
                ??????????????????????????????
                ????????????????????????????????? template?????????????????????
            ## value vs. template
                ????????????
                    ??????????????????????????????
                    ??????????????????
                        number
                            min-max.dmin-dmax
                            min-max.dcount
                            count.dmin-dmax
                            count.dcount
                            +step
                            ????????????
                            ????????????
                        boolean 
                        string  
                            min-max
                            count
            ## properties
                ??????
                    ????????????????????????????????????????????????????????????
                    ????????????????????????????????????????????????????????????
            ## items
                ??????
                    ??????????????????
                        `'name|1': [{}, {} ...]`            ???????????????????????????
                        `'name|+1': [{}, {} ...]`           ???????????????????????????
                        `'name|min-max': [{}, {} ...]`      ???????????????????????????
                        `'name|count': [{}, {} ...]`        ???????????????????????????
                    ????????????????????????????????????????????????????????????
        */
      var Diff = {
        diff: function diff(schema, data, name /* Internal Use Only */) {
          var result = [];

          // ??????????????? name ????????? type??????????????????????????????????????????
          if (
          this.name(schema, data, name, result) &&
          this.type(schema, data, name, result))
          {
            this.value(schema, data, name, result);
            this.properties(schema, data, name, result);
            this.items(schema, data, name, result);
          }

          return result;
        },
        /* jshint unused:false */
        name: function name(schema, data, _name, result) {
          var length = result.length;

          Assert.equal('name', schema.path, _name + '', schema.name + '', result);

          return result.length === length;
        },
        type: function type(schema, data, name, result) {
          var length = result.length;

          switch (schema.type) {
            case 'string':
              // ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????? '@int' ????????????????????????
              if (schema.template.match(Constant.RE_PLACEHOLDER)) return true;
              break;
            case 'array':
              if (schema.rule.parameters) {
                // name|count: array
                if (schema.rule.min !== undefined && schema.rule.max === undefined) {
                  // ?????? name|1: array???????????????????????????????????????????????????????????????????????? `array` ??????????????????
                  if (schema.rule.count === 1) return true;
                }
                // ?????? name|+inc: array
                if (schema.rule.parameters[2]) return true;
              }
              break;
            case 'function':
              // ?????? `'name': function`????????????????????????????????????????????????
              return true;}


          Assert.equal('type', schema.path, Util.type(data), schema.type, result);

          return result.length === length;
        },
        value: function value(schema, data, name, result) {
          var length = result.length;

          var rule = schema.rule;
          var templateType = schema.type;
          if (templateType === 'object' || templateType === 'array' || templateType === 'function') return true;

          // ???????????????
          if (!rule.parameters) {
            switch (templateType) {
              case 'regexp':
                Assert.match('value', schema.path, data, schema.template, result);
                return result.length === length;
              case 'string':
                // ???????????????????????????????????????????????????????????????????????????????????????????????????????????????
                if (schema.template.match(Constant.RE_PLACEHOLDER)) return result.length === length;
                break;}

            Assert.equal('value', schema.path, data, schema.template, result);
            return result.length === length;
          }

          // ???????????????
          var actualRepeatCount;
          switch (templateType) {
            case 'number':
              var parts = (data + '').split('.');
              parts[0] = +parts[0];

              // ????????????
              // |min-max
              if (rule.min !== undefined && rule.max !== undefined) {
                Assert.greaterThanOrEqualTo('value', schema.path, parts[0], Math.min(rule.min, rule.max), result);
                // , 'numeric instance is lower than the required minimum (minimum: {expected}, found: {actual})')
                Assert.lessThanOrEqualTo('value', schema.path, parts[0], Math.max(rule.min, rule.max), result);
              }
              // |count
              if (rule.min !== undefined && rule.max === undefined) {
                Assert.equal('value', schema.path, parts[0], rule.min, result, '[value] ' + name);
              }

              // ????????????
              if (rule.decimal) {
                // |dmin-dmax
                if (rule.dmin !== undefined && rule.dmax !== undefined) {
                  Assert.greaterThanOrEqualTo('value', schema.path, parts[1].length, rule.dmin, result);
                  Assert.lessThanOrEqualTo('value', schema.path, parts[1].length, rule.dmax, result);
                }
                // |dcount
                if (rule.dmin !== undefined && rule.dmax === undefined) {
                  Assert.equal('value', schema.path, parts[1].length, rule.dmin, result);
                }
              }

              break;

            case 'boolean':
              break;

            case 'string':
              // 'aaa'.match(/a/g)
              actualRepeatCount = data.match(new RegExp(schema.template, 'g'));
              actualRepeatCount = actualRepeatCount ? actualRepeatCount.length : 0;

              // |min-max
              if (rule.min !== undefined && rule.max !== undefined) {
                Assert.greaterThanOrEqualTo('repeat count', schema.path, actualRepeatCount, rule.min, result);
                Assert.lessThanOrEqualTo('repeat count', schema.path, actualRepeatCount, rule.max, result);
              }
              // |count
              if (rule.min !== undefined && rule.max === undefined) {
                Assert.equal('repeat count', schema.path, actualRepeatCount, rule.min, result);
              }

              break;

            case 'regexp':
              actualRepeatCount = data.match(new RegExp(schema.template.source.replace(/^\^|\$$/g, ''), 'g'));
              actualRepeatCount = actualRepeatCount ? actualRepeatCount.length : 0;

              // |min-max
              if (rule.min !== undefined && rule.max !== undefined) {
                Assert.greaterThanOrEqualTo('repeat count', schema.path, actualRepeatCount, rule.min, result);
                Assert.lessThanOrEqualTo('repeat count', schema.path, actualRepeatCount, rule.max, result);
              }
              // |count
              if (rule.min !== undefined && rule.max === undefined) {
                Assert.equal('repeat count', schema.path, actualRepeatCount, rule.min, result);
              }
              break;}


          return result.length === length;
        },
        properties: function properties(schema, data, name, result) {
          var length = result.length;

          var rule = schema.rule;
          var keys = Util.keys(data);
          if (!schema.properties) return;

          // ???????????????
          if (!schema.rule.parameters) {
            Assert.equal('properties length', schema.path, keys.length, schema.properties.length, result);
          } else {
            // ???????????????
            // |min-max
            if (rule.min !== undefined && rule.max !== undefined) {
              Assert.greaterThanOrEqualTo('properties length', schema.path, keys.length, Math.min(rule.min, rule.max), result);
              Assert.lessThanOrEqualTo('properties length', schema.path, keys.length, Math.max(rule.min, rule.max), result);
            }
            // |count
            if (rule.min !== undefined && rule.max === undefined) {
              // |1, |>1
              if (rule.count !== 1) Assert.equal('properties length', schema.path, keys.length, rule.min, result);
            }
          }

          if (result.length !== length) return false;

          for (var i = 0; i < keys.length; i++) {
            result.push.apply(
            result,
            this.diff(
            function () {
              var property;
              Util.each(schema.properties, function (item /*, index*/) {
                if (item.name === keys[i]) property = item;
              });
              return property || schema.properties[i];
            }(),
            data[keys[i]],
            keys[i]));


          }

          return result.length === length;
        },
        items: function items(schema, data, name, result) {
          var length = result.length;

          if (!schema.items) return;

          var rule = schema.rule;

          // ???????????????
          if (!schema.rule.parameters) {
            Assert.equal('items length', schema.path, data.length, schema.items.length, result);
          } else {
            // ???????????????
            // |min-max
            if (rule.min !== undefined && rule.max !== undefined) {
              Assert.greaterThanOrEqualTo('items', schema.path, data.length, Math.min(rule.min, rule.max) * schema.items.length, result,
              '[{utype}] array is too short: {path} must have at least {expected} elements but instance has {actual} elements');
              Assert.lessThanOrEqualTo('items', schema.path, data.length, Math.max(rule.min, rule.max) * schema.items.length, result,
              '[{utype}] array is too long: {path} must have at most {expected} elements but instance has {actual} elements');
            }
            // |count
            if (rule.min !== undefined && rule.max === undefined) {
              // |1, |>1
              if (rule.count === 1) return result.length === length;else
              Assert.equal('items length', schema.path, data.length, rule.min * schema.items.length, result);
            }
            // |+inc
            if (rule.parameters[2]) return result.length === length;
          }

          if (result.length !== length) return false;

          for (var i = 0; i < data.length; i++) {
            result.push.apply(
            result,
            this.diff(
            schema.items[i % schema.items.length],
            data[i],
            i % schema.items.length));


          }

          return result.length === length;
        } };


      /*
                 ??????????????????????????????
                 
                 Equal, not equal to, greater than, less than, greater than or equal to, less than or equal to
                 ?????? ???????????? ?????? 
             
                 Expect path.name is less than or equal to expected, but path.name is actual.
             
                 Expect path.name is less than or equal to expected, but path.name is actual.
                 Expect path.name is greater than or equal to expected, but path.name is actual.
             
             */
      var Assert = {
        message: function message(item) {
          return (item.message ||
          '[{utype}] Expect {path}\'{ltype} {action} {expected}, but is {actual}').
          replace('{utype}', item.type.toUpperCase()).
          replace('{ltype}', item.type.toLowerCase()).
          replace('{path}', Util.isArray(item.path) && item.path.join('.') || item.path).
          replace('{action}', item.action).
          replace('{expected}', item.expected).
          replace('{actual}', item.actual);
        },
        equal: function equal(type, path, actual, expected, result, message) {
          if (actual === expected) return true;
          switch (type) {
            case 'type':
              // ???????????? === ??????????????????
              if (expected === 'regexp' && actual === 'string') return true;
              break;}


          var item = {
            path: path,
            type: type,
            actual: actual,
            expected: expected,
            action: 'is equal to',
            message: message };

          item.message = Assert.message(item);
          result.push(item);
          return false;
        },
        // actual matches expected
        match: function match(type, path, actual, expected, result, message) {
          if (expected.test(actual)) return true;

          var item = {
            path: path,
            type: type,
            actual: actual,
            expected: expected,
            action: 'matches',
            message: message };

          item.message = Assert.message(item);
          result.push(item);
          return false;
        },
        notEqual: function notEqual(type, path, actual, expected, result, message) {
          if (actual !== expected) return true;
          var item = {
            path: path,
            type: type,
            actual: actual,
            expected: expected,
            action: 'is not equal to',
            message: message };

          item.message = Assert.message(item);
          result.push(item);
          return false;
        },
        greaterThan: function greaterThan(type, path, actual, expected, result, message) {
          if (actual > expected) return true;
          var item = {
            path: path,
            type: type,
            actual: actual,
            expected: expected,
            action: 'is greater than',
            message: message };

          item.message = Assert.message(item);
          result.push(item);
          return false;
        },
        lessThan: function lessThan(type, path, actual, expected, result, message) {
          if (actual < expected) return true;
          var item = {
            path: path,
            type: type,
            actual: actual,
            expected: expected,
            action: 'is less to',
            message: message };

          item.message = Assert.message(item);
          result.push(item);
          return false;
        },
        greaterThanOrEqualTo: function greaterThanOrEqualTo(type, path, actual, expected, result, message) {
          if (actual >= expected) return true;
          var item = {
            path: path,
            type: type,
            actual: actual,
            expected: expected,
            action: 'is greater than or equal to',
            message: message };

          item.message = Assert.message(item);
          result.push(item);
          return false;
        },
        lessThanOrEqualTo: function lessThanOrEqualTo(type, path, actual, expected, result, message) {
          if (actual <= expected) return true;
          var item = {
            path: path,
            type: type,
            actual: actual,
            expected: expected,
            action: 'is less than or equal to',
            message: message };

          item.message = Assert.message(item);
          result.push(item);
          return false;
        } };


      valid.Diff = Diff;
      valid.Assert = Assert;

      module.exports = valid;

      /***/},
    /* 27 */
    /***/function (module, exports, __webpack_require__) {

      module.exports = __webpack_require__(28);

      /***/},
    /* 28 */
    /***/function (module, exports, __webpack_require__) {

      /* global window, document, location, Event, setTimeout */
      /*
                                                                     ## MockXMLHttpRequest
                                                                 
                                                                     ??????????????????
                                                                     1. ????????????????????? XHR ?????????
                                                                     2. ????????????????????? XHR ?????????
                                                                     3. ???????????????????????????????????????????????????
                                                                     4. ???????????????????????????????????? XHR ?????????
                                                                     5. ???????????????????????????????????? XHR ?????????
                                                                     6. ?????? XMLHttpRequest ??? ActiveXObject
                                                                         new window.XMLHttpRequest()
                                                                         new window.ActiveXObject("Microsoft.XMLHTTP")
                                                                 
                                                                     ????????????????????????
                                                                     * new   ???????????????????????????????????????????????????????????? XHR ?????????????????????
                                                                     * open  ?????????????????? URL????????????????????????????????????
                                                                     * send  ????????????????????????????????????
                                                                 
                                                                     ?????????
                                                                     http://xhr.spec.whatwg.org/
                                                                     http://www.w3.org/TR/XMLHttpRequest2/
                                                                 
                                                                     ???????????????
                                                                     https://github.com/philikon/MockHttpRequest/blob/master/lib/mock.js
                                                                     https://github.com/trek/FakeXMLHttpRequest/blob/master/fake_xml_http_request.js
                                                                     https://github.com/ilinsky/xmlhttprequest/blob/master/XMLHttpRequest.js
                                                                     https://github.com/firebug/firebug-lite/blob/master/content/lite/xhr.js
                                                                     https://github.com/thx/RAP/blob/master/lab/rap.plugin.xinglie.js
                                                                 
                                                                     **???????????????????????? XMLHttpRequest???**
                                                                         http://xhr.spec.whatwg.org/#interface-xmlhttprequest
                                                                         ???????????? readyState???status???statusText???response???responseText???responseXML ??? readonly??????????????????????????????????????????????????????????????????????????????
                                                                         ??????????????????????????????????????? XMLHttpRequest????????? jQuery ???????????????????????????
                                                                 
                                                                     // Event handlers
                                                                     onloadstart         loadstart
                                                                     onprogress          progress
                                                                     onabort             abort
                                                                     onerror             error
                                                                     onload              load
                                                                     ontimeout           timeout
                                                                     onloadend           loadend
                                                                     onreadystatechange  readystatechange
                                                                  */

      var Util = __webpack_require__(3);

      // ???????????? XMLHttpRequest
      window._XMLHttpRequest = window.XMLHttpRequest;
      window._ActiveXObject = window.ActiveXObject;

      /*
                                                        PhantomJS
                                                        TypeError: '[object EventConstructor]' is not a constructor (evaluating 'new Event("readystatechange")')
                                                    
                                                        https://github.com/bluerail/twitter-bootstrap-rails-confirm/issues/18
                                                        https://github.com/ariya/phantomjs/issues/11289
                                                    */
      try {
        new window.Event('custom');
      } catch (exception) {
        window.Event = function (type, bubbles, cancelable, detail) {
          var event = document.createEvent('CustomEvent'); // MUST be 'CustomEvent'
          event.initCustomEvent(type, bubbles, cancelable, detail);
          return event;
        };
      }

      var XHR_STATES = {
        // The object has been constructed.
        UNSENT: 0,
        // The open() method has been successfully invoked.
        OPENED: 1,
        // All redirects (if any) have been followed and all HTTP headers of the response have been received.
        HEADERS_RECEIVED: 2,
        // The response's body is being received.
        LOADING: 3,
        // The data transfer has been completed or something went wrong during the transfer (e.g. infinite redirects).
        DONE: 4 };


      var XHR_EVENTS = 'readystatechange loadstart progress abort error load timeout loadend'.split(' ');
      var XHR_REQUEST_PROPERTIES = 'timeout withCredentials'.split(' ');
      var XHR_RESPONSE_PROPERTIES = 'readyState responseURL status statusText responseType response responseText responseXML'.split(' ');

      // https://github.com/trek/FakeXMLHttpRequest/blob/master/fake_xml_http_request.js#L32
      var HTTP_STATUS_CODES = {
        100: "Continue",
        101: "Switching Protocols",
        200: "OK",
        201: "Created",
        202: "Accepted",
        203: "Non-Authoritative Information",
        204: "No Content",
        205: "Reset Content",
        206: "Partial Content",
        300: "Multiple Choice",
        301: "Moved Permanently",
        302: "Found",
        303: "See Other",
        304: "Not Modified",
        305: "Use Proxy",
        307: "Temporary Redirect",
        400: "Bad Request",
        401: "Unauthorized",
        402: "Payment Required",
        403: "Forbidden",
        404: "Not Found",
        405: "Method Not Allowed",
        406: "Not Acceptable",
        407: "Proxy Authentication Required",
        408: "Request Timeout",
        409: "Conflict",
        410: "Gone",
        411: "Length Required",
        412: "Precondition Failed",
        413: "Request Entity Too Large",
        414: "Request-URI Too Long",
        415: "Unsupported Media Type",
        416: "Requested Range Not Satisfiable",
        417: "Expectation Failed",
        422: "Unprocessable Entity",
        500: "Internal Server Error",
        501: "Not Implemented",
        502: "Bad Gateway",
        503: "Service Unavailable",
        504: "Gateway Timeout",
        505: "HTTP Version Not Supported" };


      /*
                                                 MockXMLHttpRequest
                                             */

      function MockXMLHttpRequest() {
        // ????????? custom ????????????????????????????????????
        this.custom = {
          events: {},
          requestHeaders: {},
          responseHeaders: {} };

      }

      MockXMLHttpRequest._settings = {
        timeout: '10-100'
        /*
                              timeout: 50,
                              timeout: '10-100',
                           */ };


      MockXMLHttpRequest.setup = function (settings) {
        Util.extend(MockXMLHttpRequest._settings, settings);
        return MockXMLHttpRequest._settings;
      };

      Util.extend(MockXMLHttpRequest, XHR_STATES);
      Util.extend(MockXMLHttpRequest.prototype, XHR_STATES);

      // ????????????????????? MockXMLHttpRequest
      MockXMLHttpRequest.prototype.mock = true;

      // ???????????? Ajax ??????
      MockXMLHttpRequest.prototype.match = false;

      // ????????? Request ????????????????????????
      Util.extend(MockXMLHttpRequest.prototype, {
        // https://xhr.spec.whatwg.org/#the-open()-method
        // Sets the request method, request URL, and synchronous flag.
        open: function open(method, url, async, username, password) {
          var that = this;

          Util.extend(this.custom, {
            method: method,
            url: url,
            async: typeof async === 'boolean' ? async : true,
            username: username,
            password: password,
            options: {
              url: url,
              type: method } });



          this.custom.timeout = function (timeout) {
            if (typeof timeout === 'number') return timeout;
            if (typeof timeout === 'string' && !~timeout.indexOf('-')) return parseInt(timeout, 10);
            if (typeof timeout === 'string' && ~timeout.indexOf('-')) {
              var tmp = timeout.split('-');
              var min = parseInt(tmp[0], 10);
              var max = parseInt(tmp[1], 10);
              return Math.round(Math.random() * (max - min)) + min;
            }
          }(MockXMLHttpRequest._settings.timeout);

          // ??????????????????????????????????????????
          var item = find(this.custom.options);

          function handle(event) {
            // ???????????? NativeXMLHttpRequest => MockXMLHttpRequest
            for (var i = 0; i < XHR_RESPONSE_PROPERTIES.length; i++) {
              try {
                that[XHR_RESPONSE_PROPERTIES[i]] = xhr[XHR_RESPONSE_PROPERTIES[i]];
              } catch (e) {}
            }
            // ?????? MockXMLHttpRequest ??????????????????
            that.dispatchEvent(new Event(event.type /*, false, false, that*/));
          }

          // ?????????????????????????????????????????????????????? XHR ???????????????
          if (!item) {
            // ???????????? XHR ????????????????????? open()???????????????????????????
            var xhr = createNativeXMLHttpRequest();
            this.custom.xhr = xhr;

            // ?????????????????????????????????????????? XHR ???????????????
            for (var i = 0; i < XHR_EVENTS.length; i++) {
              xhr.addEventListener(XHR_EVENTS[i], handle);
            }

            // xhr.open()
            if (username) xhr.open(method, url, async, username, password);else
            xhr.open(method, url, async);

            // ???????????? MockXMLHttpRequest => NativeXMLHttpRequest
            for (var j = 0; j < XHR_REQUEST_PROPERTIES.length; j++) {
              try {
                xhr[XHR_REQUEST_PROPERTIES[j]] = that[XHR_REQUEST_PROPERTIES[j]];
              } catch (e) {}
            }

            return;
          }

          // ????????????????????????????????????????????? XHR ??????
          this.match = true;
          this.custom.template = item;
          this.readyState = MockXMLHttpRequest.OPENED;
          this.dispatchEvent(new Event('readystatechange' /*, false, false, this*/));
        },
        // https://xhr.spec.whatwg.org/#the-setrequestheader()-method
        // Combines a header in author request headers.
        setRequestHeader: function setRequestHeader(name, value) {
          // ?????? XHR
          if (!this.match) {
            this.custom.xhr.setRequestHeader(name, value);
            return;
          }

          // ?????? XHR
          var requestHeaders = this.custom.requestHeaders;
          if (requestHeaders[name]) requestHeaders[name] += ',' + value;else
          requestHeaders[name] = value;
        },
        timeout: 0,
        withCredentials: false,
        upload: {},
        // https://xhr.spec.whatwg.org/#the-send()-method
        // Initiates the request.
        send: function send(data) {
          var that = this;
          this.custom.options.body = data;

          // ?????? XHR
          if (!this.match) {
            this.custom.xhr.send(data);
            return;
          }

          // ?????? XHR

          // X-Requested-With header
          this.setRequestHeader('X-Requested-With', 'MockXMLHttpRequest');

          // loadstart The fetch initiates.
          this.dispatchEvent(new Event('loadstart' /*, false, false, this*/));

          if (this.custom.async) setTimeout(done, this.custom.timeout); // ??????
          else done(); // ??????

          function done() {
            that.readyState = MockXMLHttpRequest.HEADERS_RECEIVED;
            that.dispatchEvent(new Event('readystatechange' /*, false, false, that*/));
            that.readyState = MockXMLHttpRequest.LOADING;
            that.dispatchEvent(new Event('readystatechange' /*, false, false, that*/));

            that.status = 200;
            that.statusText = HTTP_STATUS_CODES[200];

            // fix #92 #93 by @qddegtya
            that.response = that.responseText = JSON.stringify(
            convert(that.custom.template, that.custom.options),
            null, 4);


            that.readyState = MockXMLHttpRequest.DONE;
            that.dispatchEvent(new Event('readystatechange' /*, false, false, that*/));
            that.dispatchEvent(new Event('load' /*, false, false, that*/));
            that.dispatchEvent(new Event('loadend' /*, false, false, that*/));
          }
        },
        // https://xhr.spec.whatwg.org/#the-abort()-method
        // Cancels any network activity.
        abort: function abort() {
          // ?????? XHR
          if (!this.match) {
            this.custom.xhr.abort();
            return;
          }

          // ?????? XHR
          this.readyState = MockXMLHttpRequest.UNSENT;
          this.dispatchEvent(new Event('abort', false, false, this));
          this.dispatchEvent(new Event('error', false, false, this));
        } });


      // ????????? Response ????????????????????????
      Util.extend(MockXMLHttpRequest.prototype, {
        responseURL: '',
        status: MockXMLHttpRequest.UNSENT,
        statusText: '',
        // https://xhr.spec.whatwg.org/#the-getresponseheader()-method
        getResponseHeader: function getResponseHeader(name) {
          // ?????? XHR
          if (!this.match) {
            return this.custom.xhr.getResponseHeader(name);
          }

          // ?????? XHR
          return this.custom.responseHeaders[name.toLowerCase()];
        },
        // https://xhr.spec.whatwg.org/#the-getallresponseheaders()-method
        // http://www.utf8-chartable.de/
        getAllResponseHeaders: function getAllResponseHeaders() {
          // ?????? XHR
          if (!this.match) {
            return this.custom.xhr.getAllResponseHeaders();
          }

          // ?????? XHR
          var responseHeaders = this.custom.responseHeaders;
          var headers = '';
          for (var h in responseHeaders) {
            if (!responseHeaders.hasOwnProperty(h)) continue;
            headers += h + ': ' + responseHeaders[h] + '\r\n';
          }
          return headers;
        },
        overrideMimeType: function overrideMimeType() /*mime*/{},
        responseType: '', // '', 'text', 'arraybuffer', 'blob', 'document', 'json'
        response: null,
        responseText: '',
        responseXML: null });


      // EventTarget
      Util.extend(MockXMLHttpRequest.prototype, {
        addEventListener: function addEventListener(type, handle) {
          var events = this.custom.events;
          if (!events[type]) events[type] = [];
          events[type].push(handle);
        },
        removeEventListener: function removeEventListener(type, handle) {
          var handles = this.custom.events[type] || [];
          for (var i = 0; i < handles.length; i++) {
            if (handles[i] === handle) {
              handles.splice(i--, 1);
            }
          }
        },
        dispatchEvent: function dispatchEvent(event) {
          var handles = this.custom.events[event.type] || [];
          for (var i = 0; i < handles.length; i++) {
            handles[i].call(this, event);
          }

          var ontype = 'on' + event.type;
          if (this[ontype]) this[ontype](event);
        } });


      // Inspired by jQuery
      function createNativeXMLHttpRequest() {
        var isLocal = function () {
          var rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/;
          var rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/;
          var ajaxLocation = location.href;
          var ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];
          return rlocalProtocol.test(ajaxLocParts[1]);
        }();

        return window.ActiveXObject ?
        !isLocal && createStandardXHR() || createActiveXHR() : createStandardXHR();

        function createStandardXHR() {
          try {
            return new window._XMLHttpRequest();
          } catch (e) {}
        }

        function createActiveXHR() {
          try {
            return new window._ActiveXObject("Microsoft.XMLHTTP");
          } catch (e) {}
        }
      }


      // ?????????????????????????????????????????????URL???Type
      function find(options) {

        for (var sUrlType in MockXMLHttpRequest.Mock._mocked) {
          var item = MockXMLHttpRequest.Mock._mocked[sUrlType];
          if (
          (!item.rurl || match(item.rurl, options.url)) && (
          !item.rtype || match(item.rtype, options.type.toLowerCase())))
          {
            // console.log('[mock]', options.url, '>', item.rurl)
            return item;
          }
        }

        function match(expected, actual) {
          if (Util.type(expected) === 'string') {
            return expected === actual;
          }
          if (Util.type(expected) === 'regexp') {
            return expected.test(actual);
          }
        }

      }

      // ???????????? ???> ????????????
      function convert(item, options) {
        return Util.isFunction(item.template) ?
        item.template(options) : MockXMLHttpRequest.Mock.mock(item.template);
      }

      module.exports = MockXMLHttpRequest;

      /***/}
    /******/]));
});
;

/***/ }),

/***/ 14:
/*!************************************************************!*\
  !*** H:/work-project/study/node_modules/uview-ui/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var _mixin = _interopRequireDefault(__webpack_require__(/*! ./libs/mixin/mixin.js */ 15));



var _request = _interopRequireDefault(__webpack_require__(/*! ./libs/request */ 16));




















var _queryParams = _interopRequireDefault(__webpack_require__(/*! ./libs/function/queryParams.js */ 20));

var _route = _interopRequireDefault(__webpack_require__(/*! ./libs/function/route.js */ 21));

var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFormat.js */ 25));

var _timeFrom = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFrom.js */ 26));

var _colorGradient = _interopRequireDefault(__webpack_require__(/*! ./libs/function/colorGradient.js */ 27));

var _guid = _interopRequireDefault(__webpack_require__(/*! ./libs/function/guid.js */ 28));

var _color = _interopRequireDefault(__webpack_require__(/*! ./libs/function/color.js */ 29));

var _type2icon = _interopRequireDefault(__webpack_require__(/*! ./libs/function/type2icon.js */ 30));

var _randomArray = _interopRequireDefault(__webpack_require__(/*! ./libs/function/randomArray.js */ 31));

var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepClone.js */ 18));

var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepMerge.js */ 17));

var _addUnit = _interopRequireDefault(__webpack_require__(/*! ./libs/function/addUnit.js */ 32));


var _test = _interopRequireDefault(__webpack_require__(/*! ./libs/function/test.js */ 19));

var _random = _interopRequireDefault(__webpack_require__(/*! ./libs/function/random.js */ 33));

var _trim = _interopRequireDefault(__webpack_require__(/*! ./libs/function/trim.js */ 34));

var _toast = _interopRequireDefault(__webpack_require__(/*! ./libs/function/toast.js */ 35));

var _getParent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/getParent.js */ 36));

var _$parent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/$parent.js */ 37));



var _sys = __webpack_require__(/*! ./libs/function/sys.js */ 38);

var _debounce = _interopRequireDefault(__webpack_require__(/*! ./libs/function/debounce.js */ 39));

var _throttle = _interopRequireDefault(__webpack_require__(/*! ./libs/function/throttle.js */ 40));



var _config = _interopRequireDefault(__webpack_require__(/*! ./libs/config/config.js */ 41));

var _zIndex = _interopRequireDefault(__webpack_require__(/*! ./libs/config/zIndex.js */ 42));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // ????????????mixin
// ??????????????????mixin??????????????????????????????
// import wxshare from './libs/mixin/mpShare.js'
// ??????????????????http????????????????????????
function wranning(str) {// ??????????????????????????????,???????????????????????????
  // ?????????????????????????????????????????????,??????hx????????????????????????????????????,??????:
  // 	https://uniapp.dcloud.io/frame?id=%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%e5%92%8c%e7%94%9f%e4%ba%a7%e7%8e%af%e5%a2%83
  if (true) {console.warn(str);}} // ???????????????????????????/store????????????$u.mixin.js????????????uView?????????????????????????????????vuex???state??????
// HX2.6.11??????,??????try???,????????????????????????,????????????????????????
// let vuexStore = {};
// try {
// 	vuexStore = require("@/store/$u.mixin.js");
// } catch (e) {
// 	//TODO handle the exception
// }
// post????????????????????????get??????url??????
var $u = { queryParams: _queryParams.default, route: _route.default, timeFormat: _timeFormat.default, date: _timeFormat.default, // ??????date
  timeFrom: _timeFrom.default, colorGradient: _colorGradient.default.colorGradient, colorToRgba: _colorGradient.default.colorToRgba, guid: _guid.default, color: _color.default, sys: _sys.sys, os: _sys.os, type2icon: _type2icon.default, randomArray: _randomArray.default, wranning: wranning, get: _request.default.get,
  post: _request.default.post,
  put: _request.default.put,
  'delete': _request.default.delete,
  hexToRgb: _colorGradient.default.hexToRgb,
  rgbToHex: _colorGradient.default.rgbToHex,
  test: _test.default,
  random: _random.default,
  deepClone: _deepClone.default,
  deepMerge: _deepMerge.default,
  getParent: _getParent.default,
  $parent: _$parent.default,
  addUnit: _addUnit.default,
  trim: _trim.default,
  type: ['primary', 'success', 'error', 'warning', 'info'],
  http: _request.default,
  toast: _toast.default,
  config: _config.default, // uView????????????????????????????????????
  zIndex: _zIndex.default,
  debounce: _debounce.default,
  throttle: _throttle.default };


// $u?????????uni?????????
uni.$u = $u;

var install = function install(Vue) {
  Vue.mixin(_mixin.default);
  if (Vue.prototype.openShare) {
    Vue.mixin(mpShare);
  }
  // Vue.mixin(vuexStore);
  // ???????????????????????????????????????date???timeFormat
  Vue.filter('timeFormat', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  Vue.filter('date', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  // ???????????????????????????????????????????????????
  Vue.filter('timeFrom', function (timestamp, format) {
    return (0, _timeFrom.default)(timestamp, format);
  });
  Vue.prototype.$u = $u;
};var _default =

{
  install: install };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 15:
/*!***********************************************************************!*\
  !*** H:/work-project/study/node_modules/uview-ui/libs/mixin/mixin.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {module.exports = {
  data: function data() {
    return {};
  },
  onLoad: function onLoad() {
    // getRect?????????$u?????????????????????????????????in(this)?????????????????????????????????????????????????????????
    this.$u.getRect = this.$uGetRect;
  },
  methods: {
    // ??????????????????
    // ?????????????????????????????????????????????????????????????????????????????????????????????bug(2020-07-21)
    // ???????????????????????????????????????????????????????????????view??????
    $uGetRect: function $uGetRect(selector, all) {var _this = this;
      return new Promise(function (resolve) {
        uni.createSelectorQuery().
        in(_this)[all ? 'selectAll' : 'select'](selector).
        boundingClientRect(function (rect) {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }
          if (!all && rect) {
            resolve(rect);
          }
        }).
        exec();
      });
    },
    getParentData: function getParentData() {var _this2 = this;var parentName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      // ?????????created????????????parent??????
      if (!this.parent) this.parent = false;
      // ??????????????????????????????????????????????????????(??????u-radio-group???this)
      // ????????????this???????????????????????????????????????(u-radio???this)???parentData????????????????????????
      // ?????????????????????????????????????????????????????????????????????????????????this.parent.xxx?????????????????????????????????
      this.parent = this.$u.$parent.call(this, parentName);
      if (this.parent) {
        // ??????parentData??????????????????parent???????????????????????????parentData
        Object.keys(this.parentData).map(function (key) {
          _this2.parentData[key] = _this2.parent[key];
        });
      }
    },
    // ??????????????????
    preventEvent: function preventEvent(e) {
      e && e.stopPropagation && e.stopPropagation();
    } },

  onReachBottom: function onReachBottom() {
    uni.$emit('uOnReachBottom');
  },
  beforeDestroy: function beforeDestroy() {var _this3 = this;
    // ??????????????????????????????parent???chldren????????????checkbox???checkbox-group????????????????????????????????????
    // ?????????????????????????????????????????????children??????????????????????????????????????????????????????
    if (this.parent && uni.$u.test.array(this.parent.children)) {
      // ???????????????????????????????????????children????????????????????????
      var childrenList = this.parent.children;
      childrenList.map(function (child, index) {
        // ????????????????????????
        if (child === _this3) {
          childrenList.splice(index, 1);
        }
      });
    }
  } };
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 16:
/*!*************************************************************************!*\
  !*** H:/work-project/study/node_modules/uview-ui/libs/request/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ../function/deepMerge */ 17));
var _test = _interopRequireDefault(__webpack_require__(/*! ../function/test */ 19));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var
Request = /*#__PURE__*/function () {_createClass(Request, [{ key: "setConfig",
    // ????????????????????????
    value: function setConfig(customConfig) {
      // ????????????????????????????????????????????????????????????
      this.config = (0, _deepMerge.default)(this.config, customConfig);
    }

    // ??????????????????
  }, { key: "request", value: function request() {var _this = this;var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // ??????????????????
      if (this.interceptor.request && typeof this.interceptor.request === 'function') {
        var tmpConfig = {};
        var interceptorRequest = this.interceptor.request(options);
        if (interceptorRequest === false) {
          // ??????????????????pending????????????Promise???????????????promise???????????????then()??????
          return new Promise(function () {});
        }
        this.options = interceptorRequest;
      }
      options.dataType = options.dataType || this.config.dataType;
      options.responseType = options.responseType || this.config.responseType;
      options.url = options.url || '';
      options.params = options.params || {};
      options.header = Object.assign({}, this.config.header, options.header);
      options.method = options.method || this.config.method;

      return new Promise(function (resolve, reject) {
        options.complete = function (response) {
          // ????????????????????????loading(?????????????????????????????????????????????loading)
          uni.hideLoading();
          // ???????????????????????????????????????????????????loading
          clearTimeout(_this.config.timer);
          _this.config.timer = null;
          // ???????????????????????????????????????????????????originalData???true????????????????????????(response)??????????????????????????????response.data
          if (_this.config.originalData) {
            // ???????????????????????????
            if (_this.interceptor.response && typeof _this.interceptor.response === 'function') {
              var resInterceptors = _this.interceptor.response(response);
              // ????????????????????????false????????????????????????????????????this.$u.post???then??????
              if (resInterceptors !== false) {
                resolve(resInterceptors);
              } else {
                // ?????????????????????false??????????????????????????????????????????????????????????????????catch??????
                reject(response);
              }
            } else {
              // ????????????????????????????????????????????????????????????????????????????????????
              resolve(response);
            }
          } else {
            if (response.statusCode == 200) {
              if (_this.interceptor.response && typeof _this.interceptor.response === 'function') {
                var _resInterceptors = _this.interceptor.response(response.data);
                if (_resInterceptors !== false) {
                  resolve(_resInterceptors);
                } else {
                  reject(response.data);
                }
              } else {
                // ??????????????????????????????(originalData=false)??????????????????????????????????????????????????????then??????
                resolve(response.data);
              }
            } else {
              // ????????????????????????????????????????????????????????????200???modal????????????
              // if(response.errMsg) {
              // 	uni.showModal({
              // 		title: response.errMsg
              // 	});
              // }
              reject(response);
            }
          }
        };

        // ?????????????????????URL??????/??????,????????????,??????/??????????????????uView???test.js????????????url()??????
        options.url = _test.default.url(options.url) ? options.url : _this.config.baseUrl + (options.url.indexOf('/') == 0 ?
        options.url : '/' + options.url);

        // ????????????loading
        // ?????????????????????timer?????????????????????????????????????????????????????????????????????????????????????????????id
        // ?????????????????????????????????????????????????????????????????????loading
        if (_this.config.showLoading && !_this.config.timer) {
          _this.config.timer = setTimeout(function () {
            uni.showLoading({
              title: _this.config.loadingText,
              mask: _this.config.loadingMask });

            _this.config.timer = null;
          }, _this.config.loadingTime);
        }
        uni.request(options);
      });
      // .catch(res => {
      // 	// ????????????reject()??????????????????this.$u.post().then().catch()?????????catct()
      // 	// ???????????????????????????????????????catch()???????????????????????????catch
      // 	return new Promise(()=>{});
      // })
    } }]);

  function Request() {var _this2 = this;_classCallCheck(this, Request);
    this.config = {
      baseUrl: '', // ??????????????????
      // ??????????????????
      header: {},
      method: 'POST',
      // ?????????json????????????uni.request????????????????????????JSON.parse
      dataType: 'json',
      // ??????????????????????????????5+??????????????????????????????????????????text??????
      responseType: 'text',
      showLoading: true, // ????????????????????????loading
      loadingText: '?????????...',
      loadingTime: 800, // ??????????????????????????????????????????????????????????????????????????????ms
      timer: null, // ?????????
      originalData: false, // ?????????????????????????????????????????????????????????????????????
      loadingMask: true // ??????loading???????????????????????????????????????????????????????????????
    };

    // ?????????
    this.interceptor = {
      // ??????????????????
      request: null,
      // ??????????????????
      response: null };


    // get??????
    this.get = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        method: 'GET',
        url: url,
        header: header,
        data: data });

    };

    // post??????
    this.post = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'POST',
        header: header,
        data: data });

    };

    // put????????????????????????????????????(HX2.6.15)
    this.put = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'PUT',
        header: header,
        data: data });

    };

    // delete?????????????????????????????????????????????(HX2.6.15)
    this.delete = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'DELETE',
        header: header,
        data: data });

    };
  }return Request;}();var _default =

new Request();exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 17:
/*!******************************************************************************!*\
  !*** H:/work-project/study/node_modules/uview-ui/libs/function/deepMerge.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./deepClone */ 18));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// JS??????????????????
function deepMerge() {var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  target = (0, _deepClone.default)(target);
  if (typeof target !== 'object' || typeof source !== 'object') return false;
  for (var prop in source) {
    if (!source.hasOwnProperty(prop)) continue;
    if (prop in target) {
      if (typeof target[prop] !== 'object') {
        target[prop] = source[prop];
      } else {
        if (typeof source[prop] !== 'object') {
          target[prop] = source[prop];
        } else {
          if (target[prop].concat && source[prop].concat) {
            target[prop] = target[prop].concat(source[prop]);
          } else {
            target[prop] = deepMerge(target[prop], source[prop]);
          }
        }
      }
    } else {
      target[prop] = source[prop];
    }
  }
  return target;
}var _default =

deepMerge;exports.default = _default;

/***/ }),

/***/ 18:
/*!******************************************************************************!*\
  !*** H:/work-project/study/node_modules/uview-ui/libs/function/deepClone.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // ??????arr????????????????????????????????????bool???
function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

// ????????????
function deepClone(obj) {
  // ????????????????????????????????????????????????
  if ([null, undefined, NaN, false].includes(obj)) return obj;
  if (typeof obj !== "object" && typeof obj !== 'function') {
    //????????????????????????
    return obj;
  }
  var o = isArray(obj) ? [] : {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
    }
  }
  return o;
}var _default =

deepClone;exports.default = _default;

/***/ }),

/***/ 187:
/*!************************************************************************!*\
  !*** H:/work-project/study/node_modules/uview-ui/libs/util/emitter.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * ???????????? call ??????this??????
                                                                                                      * @param componentName // ???????????????????????????
                                                                                                      * @param eventName // ????????????
                                                                                                      * @param params // ?????????????????????
                                                                                                      */
function _broadcast(componentName, eventName, params) {
  // ????????????????????????????????????????????? ?????? ?????? ???????????????
  this.$children.map(function (child) {
    if (componentName === child.$options.name) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      _broadcast.apply(child, [componentName, eventName].concat(params));
    }
  });
}var _default =
{
  methods: {
    /**
              * ?????? (????????????) (??????)
              * @param componentName // ???????????????????????????
              * @param eventName // ????????????
              * @param params // ?????????????????????
              */
    dispatch: function dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root; //$parent ???????????????????????? $root ?????????
      var name = parent.$options.name; // ???????????????????????????name
      // ????????????????????? && ??????????????? ??? ??????????????????????????????????????????????????????????????????????????????
      // ?????????????????????????????????????????????
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;
        if (parent) {
          name = parent.$options.name;
        }
      }
      // ??????????????????????????????name???????????????
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    /**
        * ?????? (????????????) (????????????)
        * @param componentName // ???????????????????????????
        * @param eventName // ????????????
        * @param params // ?????????????????????
        */
    broadcast: function broadcast(componentName, eventName, params) {
      _broadcast.call(this, componentName, eventName, params);
    } } };exports.default = _default;

/***/ }),

/***/ 188:
/*!********************************************************************************!*\
  !*** H:/work-project/study/node_modules/uview-ui/libs/util/async-validator.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/* eslint no-console:0 */
var formatRegExp = /%[sdj%]/g;
var warning = function warning() {}; // don't print warning message when in production env or node runtime

if (typeof process !== 'undefined' && Object({"VUE_APP_NAME":"study","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}) && "development" !== 'production' && typeof window !==
'undefined' && typeof document !== 'undefined') {
  warning = function warning(type, errors) {
    if (typeof console !== 'undefined' && console.warn) {
      if (errors.every(function (e) {
        return typeof e === 'string';
      })) {
        console.warn(type, errors);
      }
    }
  };
}

function convertFieldsError(errors) {
  if (!errors || !errors.length) return null;
  var fields = {};
  errors.forEach(function (error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}

function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var i = 1;
  var f = args[0];
  var len = args.length;

  if (typeof f === 'function') {
    return f.apply(null, args.slice(1));
  }

  if (typeof f === 'string') {
    var str = String(f).replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%';
      }

      if (i >= len) {
        return x;
      }

      switch (x) {
        case '%s':
          return String(args[i++]);

        case '%d':
          return Number(args[i++]);

        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }

          break;

        default:
          return x;}

    });

    for (var arg = args[i]; i < len; arg = args[++i]) {
      str += " " + arg;
    }

    return str;
  }

  return f;
}

function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'pattern';
}

function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }

  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true;
  }

  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true;
  }

  return false;
}

function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;

  function count(errors) {
    results.push.apply(results, errors);
    total++;

    if (total === arrLength) {
      callback(results);
    }
  }

  arr.forEach(function (a) {
    func(a, count);
  });
}

function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;

  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }

    var original = index;
    index = index + 1;

    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }

  next([]);
}

function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, objArr[k]);
  });
  return ret;
}

function asyncMap(objArr, option, func, callback) {
  if (option.first) {
    var _pending = new Promise(function (resolve, reject) {
      var next = function next(errors) {
        callback(errors);
        return errors.length ? reject({
          errors: errors,
          fields: convertFieldsError(errors) }) :
        resolve();
      };

      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });

    _pending["catch"](function (e) {
      return e;
    });

    return _pending;
  }

  var firstFields = option.firstFields || [];

  if (firstFields === true) {
    firstFields = Object.keys(objArr);
  }

  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function (resolve, reject) {
    var next = function next(errors) {
      results.push.apply(results, errors);
      total++;

      if (total === objArrLength) {
        callback(results);
        return results.length ? reject({
          errors: results,
          fields: convertFieldsError(results) }) :
        resolve();
      }
    };

    if (!objArrKeys.length) {
      callback(results);
      resolve();
    }

    objArrKeys.forEach(function (key) {
      var arr = objArr[key];

      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending["catch"](function (e) {
    return e;
  });
  return pending;
}

function complementError(rule) {
  return function (oe) {
    if (oe && oe.message) {
      oe.field = oe.field || rule.fullField;
      return oe;
    }

    return {
      message: typeof oe === 'function' ? oe() : oe,
      field: oe.field || rule.fullField };

  };
}

function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];

        if (typeof value === 'object' && typeof target[s] === 'object') {
          target[s] = _extends({}, target[s], {}, value);
        } else {
          target[s] = value;
        }
      }
    }
  }

  return target;
}

/**
   *  Rule for validating required fields.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param source The source object being validated.
   *  @param errors An array of errors that this rule may add
   *  validation errors to.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function required(rule, value, source, errors, options, type) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
}

/**
   *  Rule for validating whitespace.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param source The source object being validated.
   *  @param errors An array of errors that this rule may add
   *  validation errors to.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function whitespace(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === '') {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
}

/* eslint max-len:0 */

var pattern = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  url: new RegExp(
  "^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",
  'i'),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i };

var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  "float": function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }

    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear ===
    'function';
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }

    // ????????????????????????????????????????????????
    return typeof +value === 'number';
  },
  object: function object(value) {
    return typeof value === 'object' && !types.array(value);
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  email: function email(value) {
    return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
  },
  url: function url(value) {
    return typeof value === 'string' && !!value.match(pattern.url);
  },
  hex: function hex(value) {
    return typeof value === 'string' && !!value.match(pattern.hex);
  } };

/**
        *  Rule for validating the type of a value.
        *
        *  @param rule The validation rule.
        *  @param value The value of the field on the source object.
        *  @param source The source object being validated.
        *  @param errors An array of errors that this rule may add
        *  validation errors to.
        *  @param options The validation options.
        *  @param options.messages The validation messages.
        */

function type(rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    required(rule, value, source, errors, options);
    return;
  }

  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
  var ruleType = rule.type;

  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    } // straight typeof check

  } else if (ruleType && typeof value !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
}

/**
   *  Rule for validating minimum and maximum allowed values.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param source The source object being validated.
   *  @param errors An array of errors that this rule may add
   *  validation errors to.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function range(rule, value, source, errors, options) {
  var len = typeof rule.len === 'number';
  var min = typeof rule.min === 'number';
  var max = typeof rule.max === 'number'; // ???????????????????????????U+010000?????????U+10FFFF????????????????????????Supplementary Plane???

  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === 'number';
  var str = typeof value === 'string';
  var arr = Array.isArray(value);

  if (num) {
    key = 'number';
  } else if (str) {
    key = 'string';
  } else if (arr) {
    key = 'array';
  } // if the value is not of a supported type for range validation
  // the validation rule rule should use the
  // type property to also test for a particular type


  if (!key) {
    return false;
  }

  if (arr) {
    val = value.length;
  }

  if (str) {
    // ??????????????????U+010000?????????length??????????????????bug??????"????????????".lenght !== 3
    val = value.replace(spRegexp, '_').length;
  }

  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
}

var ENUM = 'enum';
/**
                    *  Rule for validating a value exists in an enumerable list.
                    *
                    *  @param rule The validation rule.
                    *  @param value The value of the field on the source object.
                    *  @param source The source object being validated.
                    *  @param errors An array of errors that this rule may add
                    *  validation errors to.
                    *  @param options The validation options.
                    *  @param options.messages The validation messages.
                    */

function enumerable(rule, value, source, errors, options) {
  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];

  if (rule[ENUM].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
  }
}

/**
   *  Rule for validating a regular expression pattern.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param source The source object being validated.
   *  @param errors An array of errors that this rule may add
   *  validation errors to.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function pattern$1(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      // if a RegExp instance is passed, reset `lastIndex` in case its `global`
      // flag is accidentally set to `true`, which in a validation scenario
      // is not necessary and the result might be misleading
      rule.pattern.lastIndex = 0;

      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === 'string') {
      var _pattern = new RegExp(rule.pattern);

      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
}

var rules = {
  required: required,
  whitespace: whitespace,
  type: type,
  range: range,
  "enum": enumerable,
  pattern: pattern$1 };


/**
                         *  Performs validation for string types.
                         *
                         *  @param rule The validation rule.
                         *  @param value The value of the field on the source object.
                         *  @param callback The callback function.
                         *  @param source The source object being validated.
                         *  @param options The validation options.
                         *  @param options.messages The validation messages.
                         */

function string(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'string');

    if (!isEmptyValue(value, 'string')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);

      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }

  callback(errors);
}

/**
   *  Validates a function.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function method(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
   *  Validates a number.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function number(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (value === '') {
      value = undefined;
    }

    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
   *  Validates a boolean.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function _boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
   *  Validates the regular expression type.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function regexp(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
   *  Validates a number is an integer.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function integer(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
   *  Validates a number is a floating point number.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
   *  Validates an array.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function array(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'array') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'array');

    if (!isEmptyValue(value, 'array')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
   *  Validates an object.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function object(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

var ENUM$1 = 'enum';
/**
                      *  Validates an enumerable list.
                      *
                      *  @param rule The validation rule.
                      *  @param value The value of the field on the source object.
                      *  @param callback The callback function.
                      *  @param source The source object being validated.
                      *  @param options The validation options.
                      *  @param options.messages The validation messages.
                      */

function enumerable$1(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules[ENUM$1](rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
   *  Validates a regular expression pattern.
   *
   *  Performs validation when a rule only contains
   *  a pattern property but is not declared as a string type.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function pattern$2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value, 'string')) {
      rules.pattern(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

function date(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value)) {
      var dateObject;

      if (typeof value === 'number') {
        dateObject = new Date(value);
      } else {
        dateObject = value;
      }

      rules.type(rule, dateObject, source, errors, options);

      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }

  callback(errors);
}

function required$1(rule, value, callback, source, options) {
  var errors = [];
  var type = Array.isArray(value) ? 'array' : typeof value;
  rules.required(rule, value, source, errors, options, type);
  callback(errors);
}

function type$1(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, ruleType);

    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
   *  Performs validation for any type.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function any(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);
  }

  callback(errors);
}

var validators = {
  string: string,
  method: method,
  number: number,
  "boolean": _boolean,
  regexp: regexp,
  integer: integer,
  "float": floatFn,
  array: array,
  object: object,
  "enum": enumerable$1,
  pattern: pattern$2,
  date: date,
  url: type$1,
  hex: type$1,
  email: type$1,
  required: required$1,
  any: any };


function newMessages() {
  return {
    "default": 'Validation error on field %s',
    required: '%s is required',
    "enum": '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid' },

    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      "boolean": '%s is not a %s',
      integer: '%s is not an %s',
      "float": '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s' },

    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters' },

    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s' },

    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length' },

    pattern: {
      mismatch: '%s value %s does not match pattern %s' },

    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    } };

}
var messages = newMessages();

/**
                               *  Encapsulates a validation schema.
                               *
                               *  @param descriptor An object declaring validation rules
                               *  for this schema.
                               */

function Schema(descriptor) {
  this.rules = null;
  this._messages = messages;
  this.define(descriptor);
}

Schema.prototype = {
  messages: function messages(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }

    return this._messages;
  },
  define: function define(rules) {
    if (!rules) {
      throw new Error('Cannot configure a schema with no rules');
    }

    if (typeof rules !== 'object' || Array.isArray(rules)) {
      throw new Error('Rules must be an object');
    }

    this.rules = {};
    var z;
    var item;

    for (z in rules) {
      if (rules.hasOwnProperty(z)) {
        item = rules[z];
        this.rules[z] = Array.isArray(item) ? item : [item];
      }
    }
  },
  validate: function validate(source_, o, oc) {
    var _this = this;

    if (o === void 0) {
      o = {};
    }

    if (oc === void 0) {
      oc = function oc() {};
    }

    var source = source_;
    var options = o;
    var callback = oc;

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback();
      }

      return Promise.resolve();
    }

    function complete(results) {
      var i;
      var errors = [];
      var fields = {};

      function add(e) {
        if (Array.isArray(e)) {
          var _errors;

          errors = (_errors = errors).concat.apply(_errors, e);
        } else {
          errors.push(e);
        }
      }

      for (i = 0; i < results.length; i++) {
        add(results[i]);
      }

      if (!errors.length) {
        errors = null;
        fields = null;
      } else {
        fields = convertFieldsError(errors);
      }

      callback(errors, fields);
    }

    if (options.messages) {
      var messages$1 = this.messages();

      if (messages$1 === messages) {
        messages$1 = newMessages();
      }

      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }

    var arr;
    var value;
    var series = {};
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function (z) {
      arr = _this.rules[z];
      value = source[z];
      arr.forEach(function (r) {
        var rule = r;

        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = _extends({}, source);
          }

          value = source[z] = rule.transform(value);
        }

        if (typeof rule === 'function') {
          rule = {
            validator: rule };

        } else {
          rule = _extends({}, rule);
        }

        rule.validator = _this.getValidationMethod(rule);
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this.getType(rule);

        if (!rule.validator) {
          return;
        }

        series[z] = series[z] || [];
        series[z].push({
          rule: rule,
          value: value,
          source: source,
          field: z });

      });
    });
    var errorFields = {};
    return asyncMap(series, options, function (data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === 'object' || rule.type === 'array') && (typeof rule.fields === 'object' || typeof rule.defaultField ===
      'object');
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;

      function addFullfield(key, schema) {
        return _extends({}, schema, {
          fullField: rule.fullField + "." + key });

      }

      function cb(e) {
        if (e === void 0) {
          e = [];
        }

        var errors = e;

        if (!Array.isArray(errors)) {
          errors = [errors];
        }

        if (!options.suppressWarning && errors.length) {
          Schema.warning('async-validator:', errors);
        }

        if (errors.length && rule.message) {
          errors = [].concat(rule.message);
        }

        errors = errors.map(complementError(rule));

        if (options.first && errors.length) {
          errorFields[rule.field] = 1;
          return doIt(errors);
        }

        if (!deep) {
          doIt(errors);
        } else {
          // if rule is required but the target object
          // does not exist fail at the rule level and don't
          // go deeper
          if (rule.required && !data.value) {
            if (rule.message) {
              errors = [].concat(rule.message).map(complementError(rule));
            } else if (options.error) {
              errors = [options.error(rule, format(options.messages.required, rule.field))];
            } else {
              errors = [];
            }

            return doIt(errors);
          }

          var fieldsSchema = {};

          if (rule.defaultField) {
            for (var k in data.value) {
              if (data.value.hasOwnProperty(k)) {
                fieldsSchema[k] = rule.defaultField;
              }
            }
          }

          fieldsSchema = _extends({}, fieldsSchema, {}, data.rule.fields);

          for (var f in fieldsSchema) {
            if (fieldsSchema.hasOwnProperty(f)) {
              var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
              fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
            }
          }

          var schema = new Schema(fieldsSchema);
          schema.messages(options.messages);

          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }

          schema.validate(data.value, data.rule.options || options, function (errs) {
            var finalErrors = [];

            if (errors && errors.length) {
              finalErrors.push.apply(finalErrors, errors);
            }

            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }

            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }

      var res;

      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        res = rule.validator(rule, data.value, cb, data.source, options);

        if (res === true) {
          cb();
        } else if (res === false) {
          cb(rule.message || rule.field + " fails");
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }

      if (res && res.then) {
        res.then(function () {
          return cb();
        }, function (e) {
          return cb(e);
        });
      }
    }, function (results) {
      complete(results);
    });
  },
  getType: function getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern';
    }

    if (typeof rule.validator !== 'function' && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format('Unknown rule type %s', rule.type));
    }

    return rule.type || 'string';
  },
  getValidationMethod: function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator;
    }

    var keys = Object.keys(rule);
    var messageIndex = keys.indexOf('message');

    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }

    if (keys.length === 1 && keys[0] === 'required') {
      return validators.required;
    }

    return validators[this.getType(rule)] || false;
  } };


Schema.register = function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error('Cannot register a validator by type, validator is not a function');
  }

  validators[type] = validator;
};

Schema.warning = warning;
Schema.messages = messages;var _default =

Schema;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../software/HBuilderX/plugins/uniapp-cli/node_modules/node-libs-browser/mock/process.js */ 189)))

/***/ }),

/***/ 189:
/*!********************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/process.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__(/*! path */ 190);
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ 19:
/*!*************************************************************************!*\
  !*** H:/work-project/study/node_modules/uview-ui/libs/function/test.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * ????????????????????????
                                                                                                      */
function email(value) {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
}

/**
   * ??????????????????
   */
function mobile(value) {
  return /^1[3-9]\d{9}$/.test(value);
}

/**
   * ??????URL??????
   */
function url(value) {
  return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(value);
}

/**
   * ??????????????????
   */
function date(value) {
  return !/Invalid|NaN/.test(new Date(value).toString());
}

/**
   * ??????ISO?????????????????????
   */
function dateISO(value) {
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
}

/**
   * ?????????????????????
   */
function number(value) {
  return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
}

/**
   * ????????????
   */
function digits(value) {
  return /^\d+$/.test(value);
}

/**
   * ?????????????????????
   */
function idCard(value) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
  value);
}

/**
   * ???????????????
   */
function carNo(value) {
  // ???????????????
  var xreg = /^[???????????????????????????????????????????????????????????????????????????????????????????????????A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
  // ?????????
  var creg = /^[???????????????????????????????????????????????????????????????????????????????????????????????????A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9???????????????]{1}$/;
  if (value.length === 7) {
    return creg.test(value);
  } else if (value.length === 8) {
    return xreg.test(value);
  } else {
    return false;
  }
}

/**
   * ??????,?????????2?????????
   */
function amount(value) {
  //????????????????????????????????????
  return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
}

/**
   * ??????
   */
function chinese(value) {
  var reg = /^[\u4e00-\u9fa5]+$/gi;
  return reg.test(value);
}

/**
   * ??????????????????
   */
function letter(value) {
  return /^[a-zA-Z]*$/.test(value);
}

/**
   * ???????????????????????????
   */
function enOrNum(value) {
  //??????????????????
  var reg = /^[0-9a-zA-Z]*$/g;
  return reg.test(value);
}

/**
   * ???????????????????????????
   */
function contains(value, param) {
  return value.indexOf(param) >= 0;
}

/**
   * ?????????????????????[min, max]
   */
function range(value, param) {
  return value >= param[0] && value <= param[1];
}

/**
   * ????????????????????????[min, max]
   */
function rangeLength(value, param) {
  return value.length >= param[0] && value.length <= param[1];
}

/**
   * ??????????????????
   */
function landline(value) {
  var reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
  return reg.test(value);
}

/**
   * ??????????????????
   */
function empty(value) {
  switch (typeof value) {
    case 'undefined':
      return true;
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
      break;
    case 'boolean':
      if (!value) return true;
      break;
    case 'number':
      if (0 === value || isNaN(value)) return true;
      break;
    case 'object':
      if (null === value || value.length === 0) return true;
      for (var i in value) {
        return false;
      }
      return true;}

  return false;
}

/**
   * ??????json?????????
   */
function jsonString(value) {
  if (typeof value == 'string') {
    try {
      var obj = JSON.parse(value);
      if (typeof obj == 'object' && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
  return false;
}


/**
   * ????????????
   */
function array(value) {
  if (typeof Array.isArray === "function") {
    return Array.isArray(value);
  } else {
    return Object.prototype.toString.call(value) === "[object Array]";
  }
}

/**
   * ????????????
   */
function object(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/**
   * ?????????????????????
   */
function code(value) {var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return new RegExp("^\\d{".concat(len, "}$")).test(value);
}var _default =


{
  email: email,
  mobile: mobile,
  url: url,
  date: date,
  dateISO: dateISO,
  number: number,
  digits: digits,
  idCard: idCard,
  carNo: carNo,
  amount: amount,
  chinese: chinese,
  letter: letter,
  enOrNum: enOrNum,
  contains: contains,
  range: range,
  rangeLength: rangeLength,
  empty: empty,
  isEmpty: empty,
  jsonString: jsonString,
  landline: landline,
  object: object,
  array: array,
  code: code };exports.default = _default;

/***/ }),

/***/ 190:
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node-libs-browser/mock/process.js */ 189)))

/***/ }),

/***/ 2:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 20:
/*!********************************************************************************!*\
  !*** H:/work-project/study/node_modules/uview-ui/libs/function/queryParams.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * ?????????url??????
                                                                                                      * @param {*} data,??????
                                                                                                      * @param {*} isPrefix,??????????????????"?"
                                                                                                      */
function queryParams() {var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var isPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var arrayFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'brackets';
  var prefix = isPrefix ? '?' : '';
  var _result = [];
  if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1) arrayFormat = 'brackets';var _loop = function _loop(
  key) {
    var value = data[key];
    // ?????????????????????
    if (['', undefined, null].indexOf(value) >= 0) {
      return "continue";
    }
    // ?????????????????????????????????
    if (value.constructor === Array) {
      // e.g. {ids: [1, 2, 3]}
      switch (arrayFormat) {
        case 'indices':
          // ??????: ids[0]=1&ids[1]=2&ids[2]=3
          for (var i = 0; i < value.length; i++) {
            _result.push(key + '[' + i + ']=' + value[i]);
          }
          break;
        case 'brackets':
          // ??????: ids[]=1&ids[]=2&ids[]=3
          value.forEach(function (_value) {
            _result.push(key + '[]=' + _value);
          });
          break;
        case 'repeat':
          // ??????: ids=1&ids=2&ids=3
          value.forEach(function (_value) {
            _result.push(key + '=' + _value);
          });
          break;
        case 'comma':
          // ??????: ids=1,2,3
          var commaStr = "";
          value.forEach(function (_value) {
            commaStr += (commaStr ? "," : "") + _value;
          });
          _result.push(key + '=' + commaStr);
          break;
        default:
          value.forEach(function (_value) {
            _result.push(key + '[]=' + _value);
          });}

    } else {
      _result.push(key + '=' + value);
    }};for (var key in data) {var _ret = _loop(key);if (_ret === "continue") continue;
  }
  return _result.length ? prefix + _result.join('&') : '';
}var _default =

queryParams;exports.default = _default;

/***/ }),

/***/ 21:
/*!**************************************************************************!*\
  !*** H:/work-project/study/node_modules/uview-ui/libs/function/route.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 22));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         * ???????????????????????????????????????????????????uni.xxx????????????????????????????????????
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         * ??????????????????????????????
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         */var

Router = /*#__PURE__*/function () {
  function Router() {_classCallCheck(this, Router);
    // ??????????????????
    this.config = {
      type: 'navigateTo',
      url: '',
      delta: 1, // navigateBack???????????????,???????????????
      params: {}, // ???????????????
      animationType: 'pop-in', // ????????????,??????APP??????
      animationDuration: 300, // ????????????????????????,????????????,??????APP??????
      intercept: false // ??????????????????
    };
    // ??????route????????????????????????????????????????????????????????????route???????????????this????????????route???????????????
    // ??????????????????????????????this??????
    this.route = this.route.bind(this);
  }

  // ??????url???????????????"/"?????????????????????????????????????????????
  _createClass(Router, [{ key: "addRootPath", value: function addRootPath(url) {
      return url[0] === '/' ? url : "/".concat(url);
    }

    // ??????????????????
  }, { key: "mixinParam", value: function mixinParam(url, params) {
      url = url && this.addRootPath(url);

      // ???????????????????????????????????????????????????"/","?","="????????????/page/index/index?name=mary"
      // ?????????url??????get??????????????????????????????"?"
      var query = '';
      if (/.*\/.*\?.*=.*/.test(url)) {
        // object????????????get???????????????
        query = uni.$u.queryParams(params, false);
        // ????????????get??????,???????????????????????????????????????"&"??????
        return url += "&" + query;
      } else {
        // ?????????????????????????????????url??????????????????query?????????????????????"?/&"???????????????
        query = uni.$u.queryParams(params);
        return url += query;
      }
    }

    // ?????????????????????
  }, { key: "route", value: function () {var _route = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var options,params,mergeConfig,isNext,_args = arguments;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};params = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                // ?????????????????????????????????????????????
                mergeConfig = {};

                if (typeof options === 'string') {
                  // ??????options?????????????????????route(url, params)?????????
                  mergeConfig.url = this.mixinParam(options, params);
                  mergeConfig.type = 'navigateTo';
                } else {
                  mergeConfig = uni.$u.deepClone(options, this.config);
                  // ??????????????????mergeConfig??????url???params????????????
                  mergeConfig.url = this.mixinParam(options.url, options.params);
                }

                if (params.intercept) {
                  this.config.intercept = params.intercept;
                }
                // params????????????????????????
                mergeConfig.params = params;
                // ?????????????????????
                mergeConfig = uni.$u.deepMerge(this.config, mergeConfig);
                // ????????????????????????????????????
                if (!(typeof uni.$u.routeIntercept === 'function')) {_context.next = 14;break;}_context.next = 10;return (

                  new Promise(function (resolve, reject) {
                    uni.$u.routeIntercept(mergeConfig, resolve);
                  }));case 10:isNext = _context.sent;
                // ??????isNext???true????????????????????????
                isNext && this.openPage(mergeConfig);_context.next = 15;break;case 14:

                this.openPage(mergeConfig);case 15:case "end":return _context.stop();}}}, _callee, this);}));function route() {return _route.apply(this, arguments);}return route;}()



    // ??????????????????
  }, { key: "openPage", value: function openPage(config) {
      // ????????????
      var
      url =




      config.url,type = config.type,delta = config.delta,animationType = config.animationType,animationDuration = config.animationDuration;
      if (config.type == 'navigateTo' || config.type == 'to') {
        uni.navigateTo({
          url: url,
          animationType: animationType,
          animationDuration: animationDuration });

      }
      if (config.type == 'redirectTo' || config.type == 'redirect') {
        uni.redirectTo({
          url: url });

      }
      if (config.type == 'switchTab' || config.type == 'tab') {
        uni.switchTab({
          url: url });

      }
      if (config.type == 'reLaunch' || config.type == 'launch') {
        uni.reLaunch({
          url: url });

      }
      if (config.type == 'navigateBack' || config.type == 'back') {
        uni.navigateBack({
          delta: delta });

      }
    } }]);return Router;}();var _default =


new Router().route;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 22:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 23);

/***/ }),

/***/ 226:
/*!******************************************************************************!*\
  !*** H:/work-project/study/subpages/components/html-parse/libs/html2json.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;













var _wxDiscode = _interopRequireDefault(__webpack_require__(/*! ./wxDiscode */ 227));
var _htmlparser = _interopRequireDefault(__webpack_require__(/*! ./htmlparser */ 228));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
                                                                                                                                                                 * html2Json ????????????: https://github.com/Jxck/html2json
                                                                                                                                                                 *
                                                                                                                                                                 *
                                                                                                                                                                 * author: Di (??????????????????????????????)
                                                                                                                                                                 * organization: WeAppDev(???????????????????????????)(http://weappdev.com)
                                                                                                                                                                 *               ???????????????????????????????????????
                                                                                                                                                                 *
                                                                                                                                                                 * github??????: https://github.com/icindy/wxParse
                                                                                                                                                                 *
                                                                                                                                                                 * for: ??????????????????????????????
                                                                                                                                                                 * detail : http://weappdev.com/t/wxparse-alpha0-1-html-markdown/184
                                                                                                                                                                 */function makeMap(str) {var obj = {};var items = str.split(',');for (var i = 0; i < items.length; i += 1) {obj[items[i]] = true;}return obj;} // Block Elements - HTML 5
var block = makeMap('br,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video'); // Inline Elements - HTML 5
var inline = makeMap('a,abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var');
// Elements that you can, intentionally, leave open
// (and which close themselves)
var closeSelf = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr');

function removeDOCTYPE(html) {
  var isDocument = /<body.*>([^]*)<\/body>/.test(html);
  return isDocument ? RegExp.$1 : html;
}

function trimHtml(html) {
  return html.
  replace(/<!--.*?-->/gi, '').
  replace(/\/\*.*?\*\//gi, '').
  replace(/[ ]+</gi, '<').
  replace(/<script[^]*<\/script>/gi, '').
  replace(/<style[^]*<\/style>/gi, '');
}

function getScreenInfo() {
  var screen = {};
  wx.getSystemInfo({
    success: function success(res) {
      screen.width = res.windowWidth;
      screen.height = res.windowHeight;
    } });

  return screen;
}

function html2json(html, customHandler, imageProp, host) {
  // ???????????????
  html = removeDOCTYPE(html);
  html = trimHtml(html);
  html = _wxDiscode.default.strDiscode(html);
  // ??????node??????
  var bufArray = [];
  var results = {
    nodes: [],
    imageUrls: [] };


  var screen = getScreenInfo();
  function Node(tag) {
    this.node = 'element';
    this.tag = tag;

    this.$screen = screen;
  }

  (0, _htmlparser.default)(html, {
    start: function start(tag, attrs, unary) {
      // node for this element
      var node = new Node(tag);

      if (bufArray.length !== 0) {
        var parent = bufArray[0];
        if (parent.nodes === undefined) {
          parent.nodes = [];
        }
      }

      if (block[tag]) {
        node.tagType = 'block';
      } else if (inline[tag]) {
        node.tagType = 'inline';
      } else if (closeSelf[tag]) {
        node.tagType = 'closeSelf';
      }

      node.attr = attrs.reduce(function (pre, attr) {var
        name = attr.name;var
        value = attr.value;
        if (name === 'class') {
          node.classStr = value;
        }
        // has multi attibutes
        // make it array of attribute
        if (name === 'style') {
          node.styleStr = value;
        }
        if (value.match(/ /)) {
          value = value.split(' ');
        }

        // if attr already exists
        // merge it
        if (pre[name]) {
          if (Array.isArray(pre[name])) {
            // already array, push to last
            pre[name].push(value);
          } else {
            // single value, make it array
            pre[name] = [pre[name], value];
          }
        } else {
          // not exist, put it
          pre[name] = value;
        }

        return pre;
      }, {});

      // ????????????????????????
      if (node.classStr) {
        node.classStr += " ".concat(node.tag);
      } else {
        node.classStr = node.tag;
      }
      if (node.tagType === 'inline') {
        node.classStr += ' inline';
      }

      // ???img??????????????????
      if (node.tag === 'img') {
        var imgUrl = node.attr.src;
        imgUrl = _wxDiscode.default.urlToHttpUrl(imgUrl, imageProp.domain);
        Object.assign(node.attr, imageProp, {
          src: imgUrl || '' });

        if (imgUrl) {
          results.imageUrls.push(imgUrl);
        }
      }

      // ??????a????????????
      if (node.tag === 'a') {
        node.attr.href = node.attr.href || '';
      }

      // ??????font??????????????????
      if (node.tag === 'font') {
        var fontSize = [
        'x-small',
        'small',
        'medium',
        'large',
        'x-large',
        'xx-large',
        '-webkit-xxx-large'];

        var styleAttrs = {
          color: 'color',
          face: 'font-family',
          size: 'font-size' };

        if (!node.styleStr) node.styleStr = '';
        Object.keys(styleAttrs).forEach(function (key) {
          if (node.attr[key]) {
            var value = key === 'size' ? fontSize[node.attr[key] - 1] : node.attr[key];
            node.styleStr += "".concat(styleAttrs[key], ": ").concat(value, ";");
          }
        });
      }

      // ????????????source??????
      if (node.tag === 'source') {
        results.source = node.attr.src;
      }

      if (customHandler.start) {
        customHandler.start(node, results);
      }

      if (unary) {
        // if this tag doesn't have end tag
        // like <img src="hoge.png"/>
        // add to parents
        var _parent = bufArray[0] || results;
        if (_parent.nodes === undefined) {
          _parent.nodes = [];
        }
        _parent.nodes.push(node);
      } else {
        bufArray.unshift(node);
      }
    },
    end: function end(tag) {
      // merge into parent tag
      var node = bufArray.shift();
      if (node.tag !== tag) {
        console.error('invalid state: mismatch end tag');
      }

      // ????????????source???????????????video??????src??????
      if (node.tag === 'video' && results.source) {
        node.attr.src = results.source;
        delete results.source;
      }

      if (customHandler.end) {
        customHandler.end(node, results);
      }

      if (bufArray.length === 0) {
        results.nodes.push(node);
      } else {
        var parent = bufArray[0];
        if (!parent.nodes) {
          parent.nodes = [];
        }
        parent.nodes.push(node);
      }
    },
    chars: function chars(text) {
      if (!text.trim()) return;

      var node = {
        node: 'text',
        text: text };


      if (customHandler.chars) {
        customHandler.chars(node, results);
      }

      if (bufArray.length === 0) {
        results.nodes.push(node);
      } else {
        var parent = bufArray[0];
        if (parent.nodes === undefined) {
          parent.nodes = [];
        }
        parent.nodes.push(node);
      }
    } });


  return results;
}var _default =

html2json;exports.default = _default;

/***/ }),

/***/ 227:
/*!******************************************************************************!*\
  !*** H:/work-project/study/subpages/components/html-parse/libs/wxDiscode.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // HTML ?????????????????????
function strNumDiscode(str) {
  str = str.replace(/&forall;|&#8704;|&#x2200;/g, '???');
  str = str.replace(/&part;|&#8706;|&#x2202;/g, '???');
  str = str.replace(/&exist;|&#8707;|&#x2203;/g, '???');
  str = str.replace(/&empty;|&#8709;|&#x2205;/g, '???');
  str = str.replace(/&nabla;|&#8711;|&#x2207;/g, '???');
  str = str.replace(/&isin;|&#8712;|&#x2208;/g, '???');
  str = str.replace(/&notin;|&#8713;|&#x2209;/g, '???');
  str = str.replace(/&ni;|&#8715;|&#x220b;/g, '???');
  str = str.replace(/&prod;|&#8719;|&#x220f;/g, '???');
  str = str.replace(/&sum;|&#8721;|&#x2211;/g, '???');
  str = str.replace(/&minus;|&#8722;|&#x2212;/g, '???');
  str = str.replace(/&lowast;|&#8727;|&#x2217;/g, '???');
  str = str.replace(/&radic;|&#8730;|&#x221a;/g, '???');
  str = str.replace(/&prop;|&#8733;|&#x221d;/g, '???');
  str = str.replace(/&infin;|&#8734;|&#x221e;/g, '???');
  str = str.replace(/&ang;|&#8736;|&#x2220;/g, '???');
  str = str.replace(/&and;|&#8743;|&#x2227;/g, '???');
  str = str.replace(/&or;|&#8744;|&#x2228;/g, '???');
  str = str.replace(/&cap;|&#8745;|&#x2229;/g, '???');
  str = str.replace(/&cup;|&#8746;|&#x222a;/g, '???');
  str = str.replace(/&int;|&#8747;|&#x222b;/g, '???');
  str = str.replace(/&there4;|&#8756;|&#x2234;/g, '???');
  str = str.replace(/&sim;|&#8764;|&#x223c;/g, '???');
  str = str.replace(/&cong;|&#8773;|&#x2245;/g, '???');
  str = str.replace(/&asymp;|&#8776;|&#x2248;/g, '???');
  str = str.replace(/&ne;|&#8800;|&#x2260;/g, '???');
  str = str.replace(/&le;|&#8804;|&#x2264;/g, '???');
  str = str.replace(/&ge;|&#8805;|&#x2265;/g, '???');
  str = str.replace(/&sub;|&#8834;|&#x2282;/g, '???');
  str = str.replace(/&sup;|&#8835;|&#x2283;/g, '???');
  str = str.replace(/&nsub;|&#8836;|&#x2284;/g, '???');
  str = str.replace(/&sube;|&#8838;|&#x2286;/g, '???');
  str = str.replace(/&supe;|&#8839;|&#x2287;/g, '???');
  str = str.replace(/&oplus;|&#8853;|&#x2295;/g, '???');
  str = str.replace(/&otimes;|&#8855;|&#x2297;/g, '???');
  str = str.replace(/&perp;|&#8869;|&#x22a5;/g, '???');
  str = str.replace(/&sdot;|&#8901;|&#x22c5;/g, '???');
  return str;
}

// HTML ?????????????????????
function strGreeceDiscode(str) {
  str = str.replace(/&Alpha;|&#913;|&#x391;/g, '??');
  str = str.replace(/&Beta;|&#914;|&#x392;/g, '??');
  str = str.replace(/&Gamma;|&#915;|&#x393;/g, '??');
  str = str.replace(/&Delta;|&#916;|&#x394;/g, '??');
  str = str.replace(/&Epsilon;|&#917;|&#x395;/g, '??');
  str = str.replace(/&Zeta;|&#918;|&#x396;/g, '??');
  str = str.replace(/&Eta;|&#919;|&#x397;/g, '??');
  str = str.replace(/&Theta;|&#920;|&#x398;/g, '??');
  str = str.replace(/&Iota;|&#921;|&#x399;/g, '??');
  str = str.replace(/&Kappa;|&#922;|&#x39a;/g, '??');
  str = str.replace(/&Lambda;|&#923;|&#x39b;/g, '??');
  str = str.replace(/&Mu;|&#924;|&#x39c;/g, '??');
  str = str.replace(/&Nu;|&#925;|&#x39d;/g, '??');
  str = str.replace(/&Xi;|&#925;|&#x39d;/g, '??');
  str = str.replace(/&Omicron;|&#927;|&#x39f;/g, '??');
  str = str.replace(/&Pi;|&#928;|&#x3a0;/g, '??');
  str = str.replace(/&Rho;|&#929;|&#x3a1;/g, '??');
  str = str.replace(/&Sigma;|&#931;|&#x3a3;/g, '??');
  str = str.replace(/&Tau;|&#932;|&#x3a4;/g, '??');
  str = str.replace(/&Upsilon;|&#933;|&#x3a5;/g, '??');
  str = str.replace(/&Phi;|&#934;|&#x3a6;/g, '??');
  str = str.replace(/&Chi;|&#935;|&#x3a7;/g, '??');
  str = str.replace(/&Psi;|&#936;|&#x3a8;/g, '??');
  str = str.replace(/&Omega;|&#937;|&#x3a9;/g, '??');

  str = str.replace(/&alpha;|&#945;|&#x3b1;/g, '??');
  str = str.replace(/&beta;|&#946;|&#x3b2;/g, '??');
  str = str.replace(/&gamma;|&#947;|&#x3b3;/g, '??');
  str = str.replace(/&delta;|&#948;|&#x3b4;/g, '??');
  str = str.replace(/&epsilon;|&#949;|&#x3b5;/g, '??');
  str = str.replace(/&zeta;|&#950;|&#x3b6;/g, '??');
  str = str.replace(/&eta;|&#951;|&#x3b7;/g, '??');
  str = str.replace(/&theta;|&#952;|&#x3b8;/g, '??');
  str = str.replace(/&iota;|&#953;|&#x3b9;/g, '??');
  str = str.replace(/&kappa;|&#954;|&#x3ba;/g, '??');
  str = str.replace(/&lambda;|&#955;|&#x3bb;/g, '??');
  str = str.replace(/&mu;|&#956;|&#x3bc;/g, '??');
  str = str.replace(/&nu;|&#957;|&#x3bd;/g, '??');
  str = str.replace(/&xi;|&#958;|&#x3be;/g, '??');
  str = str.replace(/&omicron;|&#959;|&#x3bf;/g, '??');
  str = str.replace(/&pi;|&#960;|&#x3c0;/g, '??');
  str = str.replace(/&rho;|&#961;|&#x3c1;/g, '??');
  str = str.replace(/&sigmaf;|&#962;|&#x3c2;/g, '??');
  str = str.replace(/&sigma;|&#963;|&#x3c3;/g, '??');
  str = str.replace(/&tau;|&#964;|&#x3c4;/g, '??');
  str = str.replace(/&upsilon;|&#965;|&#x3c5;/g, '??');
  str = str.replace(/&phi;|&#966;|&#x3c6;/g, '??');
  str = str.replace(/&chi;|&#967;|&#x3c7;/g, '??');
  str = str.replace(/&psi;|&#968;|&#x3c8;/g, '??');
  str = str.replace(/&omega;|&#969;|&#x3c9;/g, '??');
  str = str.replace(/&thetasym;|&#977;|&#x3d1;/g, '??');
  str = str.replace(/&upsih;|&#978;|&#x3d2;/g, '??');
  str = str.replace(/&piv;|&#982;|&#x3d6;/g, '??');
  str = str.replace(/&middot;|&#183;|&#xb7;/g, '??');
  return str;
}

function strcharacterDiscode(str) {
  // ??????????????????

  // str = str.replace(/&nbsp;|&#32;|&#x20;/g, "&nbsp;");
  // str = str.replace(/&ensp;|&#8194;|&#x2002;/g, '&ensp;');
  // str = str.replace(/&#12288;|&#x3000;/g, '<span class=\'spaceshow\'>???</span>');
  // str = str.replace(/&emsp;|&#8195;|&#x2003;/g, '&emsp;');
  // str = str.replace(/&quot;|&#34;|&#x22;/g, "\"");
  // str = str.replace(/&apos;|&#39;|&#x27;/g, "&apos;");
  // str = str.replace(/&acute;|&#180;|&#xB4;/g, "??");
  // str = str.replace(/&times;|&#215;|&#xD7;/g, "??");
  // str = str.replace(/&divide;|&#247;|&#xF7;/g, "??");
  // str = str.replace(/&amp;|&#38;|&#x26;/g, '&amp;');
  // str = str.replace(/&lt;|&#60;|&#x3c;/g, '&lt;');
  // str = str.replace(/&gt;|&#62;|&#x3e;/g, '&gt;');




  str = str.replace(/&nbsp;|&#32;|&#x20;/g, "<span class='spaceshow'> </span>");
  str = str.replace(/&ensp;|&#8194;|&#x2002;/g, '<span class=\'spaceshow\'>???</span>');
  str = str.replace(/&#12288;|&#x3000;/g, '<span class=\'spaceshow\'>???</span>');
  str = str.replace(/&emsp;|&#8195;|&#x2003;/g, '<span class=\'spaceshow\'>???</span>');
  str = str.replace(/&quot;|&#34;|&#x22;/g, "\"");
  str = str.replace(/&quot;|&#39;|&#x27;/g, "'");
  str = str.replace(/&acute;|&#180;|&#xB4;/g, "??");
  str = str.replace(/&times;|&#215;|&#xD7;/g, "??");
  str = str.replace(/&divide;|&#247;|&#xF7;/g, "??");
  str = str.replace(/&amp;|&#38;|&#x26;/g, '&');
  str = str.replace(/&lt;|&#60;|&#x3c;/g, '<');
  str = str.replace(/&gt;|&#62;|&#x3e;/g, '>');
  return str;
}

// HTML ?????????????????????
function strOtherDiscode(str) {
  str = str.replace(/&OElig;|&#338;|&#x152;/g, '??');
  str = str.replace(/&oelig;|&#339;|&#x153;/g, '??');
  str = str.replace(/&Scaron;|&#352;|&#x160;/g, '??');
  str = str.replace(/&scaron;|&#353;|&#x161;/g, '??');
  str = str.replace(/&Yuml;|&#376;|&#x178;/g, '??');
  str = str.replace(/&fnof;|&#402;|&#x192;/g, '??');
  str = str.replace(/&circ;|&#710;|&#x2c6;/g, '??');
  str = str.replace(/&tilde;|&#732;|&#x2dc;/g, '??');
  str = str.replace(/&thinsp;|$#8201;|&#x2009;/g, '<span class=\'spaceshow\'>???</span>');
  str = str.replace(/&zwnj;|&#8204;|&#x200C;/g, '<span class=\'spaceshow\'>???</span>');
  str = str.replace(/&zwj;|$#8205;|&#x200D;/g, '<span class=\'spaceshow\'>???</span>');
  str = str.replace(/&lrm;|$#8206;|&#x200E;/g, '<span class=\'spaceshow\'>???</span>');
  str = str.replace(/&rlm;|&#8207;|&#x200F;/g, '<span class=\'spaceshow\'>???</span>');
  str = str.replace(/&ndash;|&#8211;|&#x2013;/g, '???');
  str = str.replace(/&mdash;|&#8212;|&#x2014;/g, '???');
  str = str.replace(/&lsquo;|&#8216;|&#x2018;/g, '???');
  str = str.replace(/&rsquo;|&#8217;|&#x2019;/g, '???');
  str = str.replace(/&sbquo;|&#8218;|&#x201a;/g, '???');
  str = str.replace(/&ldquo;|&#8220;|&#x201c;/g, '???');
  str = str.replace(/&rdquo;|&#8221;|&#x201d;/g, '???');
  str = str.replace(/&bdquo;|&#8222;|&#x201e;/g, '???');
  str = str.replace(/&dagger;|&#8224;|&#x2020;/g, '???');
  str = str.replace(/&Dagger;|&#8225;|&#x2021;/g, '???');
  str = str.replace(/&bull;|&#8226;|&#x2022;/g, '???');
  str = str.replace(/&hellip;|&#8230;|&#x2026;/g, '???');
  str = str.replace(/&permil;|&#8240;|&#x2030;/g, '???');
  str = str.replace(/&prime;|&#8242;|&#x2032;/g, '???');
  str = str.replace(/&Prime;|&#8243;|&#x2033;/g, '???');
  str = str.replace(/&lsaquo;|&#8249;|&#x2039;/g, '???');
  str = str.replace(/&rsaquo;|&#8250;|&#x203a;/g, '???');
  str = str.replace(/&oline;|&#8254;|&#x203e;/g, '???');
  str = str.replace(/&euro;|&#8364;|&#x20ac;/g, '???');
  str = str.replace(/&trade;|&#8482;|&#x2122;/g, '???');
  str = str.replace(/&larr;|&#8592;|&#x2190;/g, '???');
  str = str.replace(/&uarr;|&#8593;|&#x2191;/g, '???');
  str = str.replace(/&rarr;|&#8594;|&#x2192;/g, '???');
  str = str.replace(/&darr;|&#8595;|&#x2193;/g, '???');
  str = str.replace(/&harr;|&#8596;|&#x2194;/g, '???');
  str = str.replace(/&crarr;|&#8629;|&#x21b5;/g, '???');
  str = str.replace(/&lceil;|&#8968;|&#x2308;/g, '???');
  str = str.replace(/&rceil;|&#8969;|&#x2309;/g, '???');
  str = str.replace(/&lfloor;|&#8970;|&#x230a;/g, '???');
  str = str.replace(/&rfloor;|&#8971;|&#x230b;/g, '???');
  str = str.replace(/&loz;|&#9674;|&#x25ca;/g, '???');
  str = str.replace(/&spades;|&#9824;|&#x2660;/g, '???');
  str = str.replace(/&clubs;|&#9827;|&#x2663;/g, '???');
  str = str.replace(/&hearts;|&#9829;|&#x2665;/g, '???');
  str = str.replace(/&diams;|&#9830;|&#x2666;/g, '???');
  return str;
}

function strDiscode(str) {
  str = strNumDiscode(str);
  str = strGreeceDiscode(str);
  str = strcharacterDiscode(str);
  str = strOtherDiscode(str);
  return str;
}

function urlToHttpUrl(url, domain) {
  if (/^\/\//.test(url)) {
    return "https:".concat(url);
  } else if (/^\//.test(url)) {
    return "https://".concat(domain).concat(url);
  }
  return url;
}var _default =

{
  strDiscode: strDiscode,
  urlToHttpUrl: urlToHttpUrl };exports.default = _default;

/***/ }),

/***/ 228:
/*!*******************************************************************************!*\
  !*** H:/work-project/study/subpages/components/html-parse/libs/htmlparser.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      *
                                                                                                      * htmlParser?????????: https://github.com/blowsie/Pure-JavaScript-HTML5-Parser
                                                                                                      *
                                                                                                      * author: Di (??????????????????????????????)
                                                                                                      * organization: WeAppDev(???????????????????????????)(http://weappdev.com)
                                                                                                      *               ???????????????????????????????????????
                                                                                                      *
                                                                                                      * github??????: https://github.com/icindy/wxParse
                                                                                                      *
                                                                                                      * for: ??????????????????????????????
                                                                                                      * detail : http://weappdev.com/t/wxparse-alpha0-1-html-markdown/184
                                                                                                      */
// Regular Expressions for parsing tags and attributes

var startTag = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z0-9_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/;
var endTag = /^<\/([-A-Za-z0-9_]+)[^>]*>/;
var attr = /([a-zA-Z0-9_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;

function makeMap(str) {
  var obj = {};
  var items = str.split(',');
  for (var i = 0; i < items.length; i += 1) {obj[items[i]] = true;}
  return obj;
}

// Empty Elements - HTML 5
var empty = makeMap('area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr');

// Block Elements - HTML 5
var block = makeMap('address,code,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video');

// Inline Elements - HTML 5
var inline = makeMap('a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var');

// Elements that you can, intentionally, leave open
// (and which close themselves)
var closeSelf = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr');

// Attributes that have their values filled in disabled="disabled"
var fillAttrs = makeMap('checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected');

function HTMLParser(html, handler) {
  var index;
  var chars;
  var match;
  var last = html;
  var stack = [];

  stack.last = function () {return stack[stack.length - 1];};

  function parseEndTag(tag, tagName) {
    // If no tag name is provided, clean shop
    var pos;
    if (!tagName) {
      pos = 0;
    } else {
      // Find the closest opened tag of the same type
      tagName = tagName.toLowerCase();
      for (pos = stack.length - 1; pos >= 0; pos -= 1) {
        if (stack[pos] === tagName) break;
      }
    }
    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i -= 1) {
        if (handler.end) handler.end(stack[i]);
      }

      // Remove the open elements from the stack
      stack.length = pos;
    }
  }

  function parseStartTag(tag, tagName, rest, unary) {
    tagName = tagName.toLowerCase();

    if (block[tagName]) {
      while (stack.last() && inline[stack.last()]) {
        parseEndTag('', stack.last());
      }
    }

    if (closeSelf[tagName] && stack.last() === tagName) {
      parseEndTag('', tagName);
    }

    unary = empty[tagName] || !!unary;

    if (!unary) stack.push(tagName);

    if (handler.start) {
      var attrs = [];

      rest.replace(attr, function genAttr(matches, name) {
        var value = arguments[2] || arguments[3] || arguments[4] || (fillAttrs[name] ? name : '');

        attrs.push({
          name: name,
          value: value,
          escaped: value.replace(/(^|[^\\])"/g, '$1\\"') // "
        });
      });

      if (handler.start) {
        handler.start(tagName, attrs, unary);
      }
    }
  }

  while (html) {
    chars = true;

    if (html.indexOf('</') === 0) {
      match = html.match(endTag);

      if (match) {
        html = html.substring(match[0].length);
        match[0].replace(endTag, parseEndTag);
        chars = false;
      }

      // start tag
    } else if (html.indexOf('<') === 0) {
      match = html.match(startTag);

      if (match) {
        html = html.substring(match[0].length);
        match[0].replace(startTag, parseStartTag);
        chars = false;
      }
    }

    if (chars) {
      index = html.indexOf('<');
      var text = '';
      while (index === 0) {
        text += '<';
        html = html.substring(1);
        index = html.indexOf('<');
      }
      text += index < 0 ? html : html.substring(0, index);
      html = index < 0 ? '' : html.substring(index);

      if (handler.chars) handler.chars(text);
    }

    if (html === last) throw new Error("Parse Error: ".concat(html));
    last = html;
  }

  // Clean up any remaining tags
  parseEndTag();
}var _default =

HTMLParser;exports.default = _default;

/***/ }),

/***/ 23:
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 24);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ 24:
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ 25:
/*!*******************************************************************************!*\
  !*** H:/work-project/study/node_modules/uview-ui/libs/function/timeFormat.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // padStart ??? polyfill????????????????????????????????????????????????es7???padStart????????????????????????????????????
// ???????????????????????????polyfill???????????????
if (!String.prototype.padStart) {
  // ???????????????????????? fillString ??????ES6 ?????????????????????????????????
  String.prototype.padStart = function (maxLength) {var fillString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
    if (Object.prototype.toString.call(fillString) !== "[object String]") throw new TypeError(
    'fillString must be String');
    var str = this;
    // ?????? String(str) ????????????????????????????????????????????????????????????????????????????????????
    if (str.length >= maxLength) return String(str);

    var fillLength = maxLength - str.length,
    times = Math.ceil(fillLength / fillString.length);
    while (times >>= 1) {
      fillString += fillString;
      if (times === 1) {
        fillString += fillString;
      }
    }
    return fillString.slice(0, fillLength) + str;
  };
}

// ?????????????????????????????????:
// yyyy:mm:dd|yyyy:mm|yyyy???mm???dd???|yyyy???mm???dd??? hh???MM??????,??????????????????
function timeFormat() {var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // ?????????null,????????????????????????
  if (!dateTime) dateTime = Number(new Date());
  // ??????dateTime?????????10??????13????????????????????????????????????????????????13?????????????????????????????????
  if (dateTime.toString().length == 10) dateTime *= 1000;
  var date = new Date(dateTime);
  var ret;
  var opt = {
    "y+": date.getFullYear().toString(), // ???
    "m+": (date.getMonth() + 1).toString(), // ???
    "d+": date.getDate().toString(), // ???
    "h+": date.getHours().toString(), // ???
    "M+": date.getMinutes().toString(), // ???
    "s+": date.getSeconds().toString() // ???
    // ???????????????????????????????????????????????????????????????????????????
  };
  for (var k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"));
    };
  };
  return fmt;
}var _default =

timeFormat;exports.default = _default;

/***/ }),

/***/ 26:
/*!*****************************************************************************!*\
  !*** H:/work-project/study/node_modules/uview-ui/libs/function/timeFrom.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ../../libs/function/timeFormat.js */ 25));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                                                                                                                                          * ???????????????????????????
                                                                                                                                                                                                                                                                                          * @param String timestamp ?????????
                                                                                                                                                                                                                                                                                          * @param String | Boolean format ??????????????????????????????????????????????????????????????????????????????????????????
                                                                                                                                                                                                                                                                                          * ??????????????????false??????????????????????????????????????????????????????
                                                                                                                                                                                                                                                                                          */
function timeFrom() {var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // ?????????null,????????????????????????
  if (!dateTime) dateTime = Number(new Date());
  // ??????dateTime?????????10??????13????????????????????????????????????????????????13?????????????????????????????????
  if (dateTime.toString().length == 10) dateTime *= 1000;
  var timestamp = +new Date(Number(dateTime));

  var timer = (Number(new Date()) - timestamp) / 1000;
  // ????????????5??????,?????????"??????",??????????????????
  var tips = '';
  switch (true) {
    case timer < 300:
      tips = '??????';
      break;
    case timer >= 300 && timer < 3600:
      tips = parseInt(timer / 60) + '?????????';
      break;
    case timer >= 3600 && timer < 86400:
      tips = parseInt(timer / 3600) + '?????????';
      break;
    case timer >= 86400 && timer < 2592000:
      tips = parseInt(timer / 86400) + '??????';
      break;
    default:
      // ??????format???false???????????????????????????????????????xx??????
      if (format === false) {
        if (timer >= 2592000 && timer < 365 * 86400) {
          tips = parseInt(timer / (86400 * 30)) + '?????????';
        } else {
          tips = parseInt(timer / (86400 * 365)) + '??????';
        }
      } else {
        tips = (0, _timeFormat.default)(timestamp, format);
      }}

  return tips;
}var _default =

timeFrom;exports.default = _default;

/***/ }),

/***/ 27:
/*!**********************************************************************************!*\
  !*** H:/work-project/study/node_modules/uview-ui/libs/function/colorGradient.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * ?????????????????????????????????
                                                                                                      * @param {string} startColor ???????????????
                                                                                                      * @param {string} endColor ???????????????
                                                                                                      * @param {number} step ?????????????????????
                                                                                                      * */
function colorGradient() {var startColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'rgb(0, 0, 0)';var endColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgb(255, 255, 255)';var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var startRGB = hexToRgb(startColor, false); //?????????rgb????????????
  var startR = startRGB[0];
  var startG = startRGB[1];
  var startB = startRGB[2];

  var endRGB = hexToRgb(endColor, false);
  var endR = endRGB[0];
  var endG = endRGB[1];
  var endB = endRGB[2];

  var sR = (endR - startR) / step; //?????????
  var sG = (endG - startG) / step;
  var sB = (endB - startB) / step;
  var colorArr = [];
  for (var i = 0; i < step; i++) {
    //??????????????????hex??? 
    var hex = rgbToHex('rgb(' + Math.round(sR * i + startR) + ',' + Math.round(sG * i + startG) + ',' + Math.round(sB *
    i + startB) + ')');
    colorArr.push(hex);
  }
  return colorArr;
}

// ???hex?????????????????????rgb????????????(????????????rgb????????????)
function hexToRgb(sColor) {var str = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  sColor = sColor.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = "#";
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    //????????????????????????
    var sColorChange = [];
    for (var _i = 1; _i < 7; _i += 2) {
      sColorChange.push(parseInt("0x" + sColor.slice(_i, _i + 2)));
    }
    if (!str) {
      return sColorChange;
    } else {
      return "rgb(".concat(sColorChange[0], ",").concat(sColorChange[1], ",").concat(sColorChange[2], ")");
    }
  } else if (/^(rgb|RGB)/.test(sColor)) {
    var arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    return arr.map(function (val) {return Number(val);});
  } else {
    return sColor;
  }
};

// ???rgb?????????????????????hex????????????
function rgbToHex(rgb) {
  var _this = rgb;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  if (/^(rgb|RGB)/.test(_this)) {
    var aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    var strHex = "#";
    for (var i = 0; i < aColor.length; i++) {
      var hex = Number(aColor[i]).toString(16);
      hex = String(hex).length == 1 ? 0 + '' + hex : hex; // ????????????rgb?????????2???
      if (hex === "0") {
        hex += hex;
      }
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = _this;
    }
    return strHex;
  } else if (reg.test(_this)) {
    var aNum = _this.replace(/#/, "").split("");
    if (aNum.length === 6) {
      return _this;
    } else if (aNum.length === 3) {
      var numHex = "#";
      for (var _i2 = 0; _i2 < aNum.length; _i2 += 1) {
        numHex += aNum[_i2] + aNum[_i2];
      }
      return numHex;
    }
  } else {
    return _this;
  }
}


/**
  * JS???????????????????????????rgb???rgba,?????????????????? rgba???255???255???255???0.5????????????
  * sHex?????????????????????????????????
  * alpha???rgba????????????
  */
function colorToRgba(color) {var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.3;
  color = rgbToHex(color);
  // ???????????????????????????????????????
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  /* 16??????????????????RGB?????? */
  var sColor = color.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#';
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // ????????????????????????
    var sColorChange = [];
    for (var _i3 = 1; _i3 < 7; _i3 += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(_i3, _i3 + 2)));
    }
    // return sColorChange.join(',')
    return 'rgba(' + sColorChange.join(',') + ',' + alpha + ')';
  } else
  {
    return sColor;
  }
}var _default =

{
  colorGradient: colorGradient,
  hexToRgb: hexToRgb,
  rgbToHex: rgbToHex,
  colorToRgba: colorToRgba };exports.default = _default;

/***/ }),

/***/ 28:
/*!*************************************************************************!*\
  !*** H:/work-project/study/node_modules/uview-ui/libs/function/guid.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * ????????????????????????????????????????????????https://www.jianshu.com/p/fdbf293d0a85
                                                                                                      * ????????????????????????uuid???Globally Unique Identifier???,????????? uuid(Universally Unique IDentifier) 
                                                                                                      * ??????????????????????????????,??????????????????????????????,??????v-for???????????????,?????????????????????index???????????????????????????????????????
                                                                                                      * ?????????????????????????????????item????????????????????????"?????????"?????????????????????,?????????????????????????????????????????????
                                                                                                      * v-for?????????,???????????????????????????id??????????????????index
                                                                                                      * @param {Number} len uuid?????????
                                                                                                      * @param {Boolean} firstU ???????????????????????????"u"
                                                                                                      * @param {Nubmer} radix ??????uuid?????????(?????????????????????????????????????????????),2-?????????,8-?????????,10-?????????,16-????????????
                                                                                                      */
function guid() {var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;var firstU = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [];
  radix = radix || chars.length;

  if (len) {
    // ????????????uuid??????,????????????????????????,0|x????????????,?????????x????????????,???????????????
    for (var i = 0; i < len; i++) {uuid[i] = chars[0 | Math.random() * radix];}
  } else {
    var r;
    // rfc4122?????????????????????uuid???,???????????????????????????
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';

    for (var _i = 0; _i < 36; _i++) {
      if (!uuid[_i]) {
        r = 0 | Math.random() * 16;
        uuid[_i] = chars[_i == 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }
  // ?????????????????????,??????u??????,?????????????????????????????????,???guuid????????????id??????class
  if (firstU) {
    uuid.shift();
    return 'u' + uuid.join('');
  } else {
    return uuid.join('');
  }
}var _default =

guid;exports.default = _default;

/***/ }),

/***/ 29:
/*!**************************************************************************!*\
  !*** H:/work-project/study/node_modules/uview-ui/libs/function/color.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // ?????????????????????????????????????????????????????????????????????????????????css??????
// ????????????????????????????????????????????????????????????????????????(2020-06-20)
var color = {
  primary: "#2979ff",
  primaryDark: "#2b85e4",
  primaryDisabled: "#a0cfff",
  primaryLight: "#ecf5ff",
  bgColor: "#f3f4f6",

  info: "#909399",
  infoDark: "#82848a",
  infoDisabled: "#c8c9cc",
  infoLight: "#f4f4f5",

  warning: "#ff9900",
  warningDark: "#f29100",
  warningDisabled: "#fcbd71",
  warningLight: "#fdf6ec",

  error: "#fa3534",
  errorDark: "#dd6161",
  errorDisabled: "#fab6b6",
  errorLight: "#fef0f0",

  success: "#19be6b",
  successDark: "#18b566",
  successDisabled: "#71d5a1",
  successLight: "#dbf1e1",

  mainColor: "#303133",
  contentColor: "#606266",
  tipsColor: "#909399",
  lightColor: "#c0c4cc",
  borderColor: "#e4e7ed" };var _default =


color;exports.default = _default;

/***/ }),

/***/ 3:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx ????????????????????? plugins ???????????????????????????????????????????????????????????????????????? copyAugment ??????
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // ?????? externalClass ????????????(????????? externalClass ????????????????????????)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx ?????? hack ??? uni-app ???????????? name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou'){//??????????????? observer ??? setData callback ?????????????????????????????? warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field ????????????
            if(
                key === 'value' &&
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    // NOTE ????????? != ????????? !==????????????????????????????????????????????????????????????????????????????????????????????????
                    if (currentValue !== pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_NAME":"study","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick ?????? ??? setData ??? setData ??????????????????
    //2.nextTick ???????????? render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_NAME":"study","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_NAME":"study","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // ???????????? vm ?????????????????????
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO ??????????????????????????????????????? list=>l0 ??? list ??????????????????????????????????????????
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //????????? data ???????????????
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_NAME":"study","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']????????????',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js ?????? new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }

  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay ???????????? selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // ????????????????????????
    Vue.set(target, key, value)
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // ????????????????????????
    Vue.set(target, key, value)
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO ???????????? string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // ??????????????????????????????????????????
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // ???????????????????????????????????????
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 30:
/*!******************************************************************************!*\
  !*** H:/work-project/study/node_modules/uview-ui/libs/function/type2icon.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * ????????????type???,?????????????????????
                                                                                                      * @param String type ????????????,primary|info|error|warning|success
                                                                                                      * @param String fill ????????????fill?????????????????????  
                                                                                                      */
function type2icon() {var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';var fill = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // ??????????????????,?????????success
  if (['primary', 'info', 'error', 'warning', 'success'].indexOf(type) == -1) type = 'success';
  var iconName = '';
  // ??????(2019-12-12),info???primary?????????????????????
  switch (type) {
    case 'primary':
      iconName = 'info-circle';
      break;
    case 'info':
      iconName = 'info-circle';
      break;
    case 'error':
      iconName = 'close-circle';
      break;
    case 'warning':
      iconName = 'error-circle';
      break;
    case 'success':
      iconName = 'checkmark-circle';
      break;
    default:
      iconName = 'checkmark-circle';}

  // ?????????????????????,??????-fill,???icon????????????,???????????????????????????-fill???
  if (fill) iconName += '-fill';
  return iconName;
}var _default =

type2icon;exports.default = _default;

/***/ }),

/***/ 31:
/*!********************************************************************************!*\
  !*** H:/work-project/study/node_modules/uview-ui/libs/function/randomArray.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // ????????????
function randomArray() {var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  // ?????????sort??????,Math.random()??????0<= x < 1????????????,?????????x-0.05??????????????????0
  return array.sort(function () {return Math.random() - 0.5;});
}var _default =

randomArray;exports.default = _default;

/***/ }),

/***/ 32:
/*!****************************************************************************!*\
  !*** H:/work-project/study/node_modules/uview-ui/libs/function/addUnit.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = addUnit;var _test = _interopRequireDefault(__webpack_require__(/*! ./test.js */ 19));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// ????????????????????????rpx???%???px???????????????????????????auto??????????????????????????????rpx????????????
function addUnit() {var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto';var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rpx';
  value = String(value);
  // ???uView????????????????????????number?????????????????????
  return _test.default.number(value) ? "".concat(value).concat(unit) : value;
}

/***/ }),

/***/ 33:
/*!***************************************************************************!*\
  !*** H:/work-project/study/node_modules/uview-ui/libs/function/random.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function random(min, max) {
  if (min >= 0 && max > 0 && max >= min) {
    var gab = max - min + 1;
    return Math.floor(Math.random() * gab + min);
  } else {
    return 0;
  }
}var _default =

random;exports.default = _default;

/***/ }),

/***/ 34:
/*!*************************************************************************!*\
  !*** H:/work-project/study/node_modules/uview-ui/libs/function/trim.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function trim(str) {var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'both';
  if (pos == 'both') {
    return str.replace(/^\s+|\s+$/g, "");
  } else if (pos == "left") {
    return str.replace(/^\s*/, '');
  } else if (pos == 'right') {
    return str.replace(/(\s*$)/g, "");
  } else if (pos == 'all') {
    return str.replace(/\s+/g, "");
  } else {
    return str;
  }
}var _default =

trim;exports.default = _default;

/***/ }),

/***/ 35:
/*!**************************************************************************!*\
  !*** H:/work-project/study/node_modules/uview-ui/libs/function/toast.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function toast(title) {var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
  uni.showToast({
    title: title,
    icon: 'none',
    duration: duration });

}var _default =

toast;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 36:
/*!******************************************************************************!*\
  !*** H:/work-project/study/node_modules/uview-ui/libs/function/getParent.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = getParent; // ????????????????????????????????????????????????????????????provide/inject?????????
// this.$parent??????H5????????????????????????????????????????????????H5??????????????????this.$parent.$parent.xxx
function getParent(name, keys) {
  var parent = this.$parent;
  // ??????while??????????????????????????????H5???????????????????????????
  while (parent) {
    // ?????????
    if (parent.$options.name !== name) {
      // ???????????????name?????????????????????????????????
      parent = parent.$parent;
    } else {var _ret = function () {
        var data = {};
        // ??????keys??????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        if (Array.isArray(keys)) {
          keys.map(function (val) {
            data[val] = parent[val] ? parent[val] : '';
          });
        } else {
          // ??????????????????????????????
          for (var i in keys) {
            // ???????????????????????????????????????????????????????????????
            // ????????????????????????????????????????????????????????????????????????????????????
            if (Array.isArray(keys[i])) {
              if (keys[i].length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else if (keys[i].constructor === Object) {
              // ???????????????????????????????????????????????????????????????????????????????????????????????????????????????
              if (Object.keys(keys[i]).length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else {
              // ????????????????????????????????????false?????????????????????????????????????????????????????????????????????
              data[i] = keys[i] || keys[i] === false ? keys[i] : parent[i];
            }
          }
        }
        return { v: data };}();if (typeof _ret === "object") return _ret.v;
    }
  }

  return {};
}

/***/ }),

/***/ 37:
/*!****************************************************************************!*\
  !*** H:/work-project/study/node_modules/uview-ui/libs/function/$parent.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = $parent; // ????????????????????????????????????????????????????????????provide/inject?????????
// this.$parent??????H5????????????????????????????????????????????????H5??????????????????this.$parent.$parent.xxx
// ?????????????????????undefined???????????????????????????????????????(??????)???$parent??????undefined??????????????????name
// ???(?????????undefined)???????????????????????????$parent
function $parent() {var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var parent = this.$parent;
  // ??????while??????????????????????????????H5???????????????????????????
  while (parent) {
    // ?????????
    if (parent.$options && parent.$options.name !== name) {
      // ???????????????name?????????????????????????????????
      parent = parent.$parent;
    } else {
      return parent;
    }
  }
  return false;
}

/***/ }),

/***/ 38:
/*!************************************************************************!*\
  !*** H:/work-project/study/node_modules/uview-ui/libs/function/sys.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.os = os;exports.sys = sys;function os() {
  return uni.getSystemInfoSync().platform;
};

function sys() {
  return uni.getSystemInfoSync();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 39:
/*!*****************************************************************************!*\
  !*** H:/work-project/study/node_modules/uview-ui/libs/function/debounce.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var timeout = null;

/**
                                                                                                                         * ??????????????????????????????????????????????????????????????????wait????????????????????????
                                                                                                                         * 
                                                                                                                         * @param {Function} func ???????????????????????? 
                                                                                                                         * @param {Number} wait ???????????????
                                                                                                                         * @param {Boolean} immediate ?????????????????? 
                                                                                                                         * @return null
                                                                                                                         */
function debounce(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // ???????????????
  if (timeout !== null) clearTimeout(timeout);
  // ??????????????????????????????????????????
  if (immediate) {
    var callNow = !timeout;
    timeout = setTimeout(function () {
      timeout = null;
    }, wait);
    if (callNow) typeof func === 'function' && func();
  } else {
    // ?????????????????????????????????????????????timeout????????????????????????????????????wait???????????????func????????????
    timeout = setTimeout(function () {
      typeof func === 'function' && func();
    }, wait);
  }
}var _default =

debounce;exports.default = _default;

/***/ }),

/***/ 4:
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {Object.defineProperty(exports, "__esModule", { value: true });exports.compileI18nJsonStr = compileI18nJsonStr;exports.hasI18nJson = hasI18nJson;exports.initVueI18n = initVueI18n;exports.isI18nStr = isI18nStr;exports.normalizeLocale = normalizeLocale;exports.parseI18nJson = parseI18nJson;exports.resolveLocale = resolveLocale;exports.isString = exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var isArray = Array.isArray;
var isObject = function isObject(val) {return val !== null && typeof val === 'object';};
var defaultDelimiters = ['{', '}'];var
BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {_classCallCheck(this, BaseFormatter);
    this._caches = Object.create(null);
  }_createClass(BaseFormatter, [{ key: "interpolate", value: function interpolate(
    message, values) {var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    } }]);return BaseFormatter;}();exports.Formatter = BaseFormatter;

var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {var _ref2 = _slicedToArray(_ref, 2),startDelimiter = _ref2[0],endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ?
      'list' :
      isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ?
      'named' :
      'unknown';
      tokens.push({ value: sub, type: type });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
        text += char;
      }
  }
  text && tokens.push({ type: 'text', value: text });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ?
  'list' :
  isObject(values) ?
  'named' :
  'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else
        {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;}

    index++;
  }
  return compiled;
}

var LOCALE_ZH_HANS = 'zh-Hans';exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {return hasOwnProperty.call(val, key);};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}
function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}var
I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {var locale = _ref3.locale,fallbackLocale = _ref3.fallbackLocale,messages = _ref3.messages,watcher = _ref3.watcher,formater = _ref3.formater;_classCallCheck(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }_createClass(I18n, [{ key: "setLocale", value: function setLocale(
    locale) {var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // ???????????????????????????
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // ???????????????????????????
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    } }, { key: "getLocale", value: function getLocale()
    {
      return this.locale;
    } }, { key: "watchLocale", value: function watchLocale(
    fn) {var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    } }, { key: "add", value: function add(
    locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else
        {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else
      {
        this.messages[locale] = message;
      }
    } }, { key: "f", value: function f(
    message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    } }, { key: "t", value: function t(
    key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else
      {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    } }]);return I18n;}();exports.I18n = I18n;


function watchAppLocale(appVm, i18n) {
  // ???????????? watch ??????????????????????????????
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else
  {
    appVm.$watch(function () {return appVm.$locale;}, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // ??????????????????uni ??? uni-i18n ????????????????????????????????? uni????????? global ????????? getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // ?????????????????????
  if (typeof locale !== 'string') {var _ref4 =
    [
    messages,
    locale];locale = _ref4[0];messages = _ref4[1];

  }
  if (typeof locale !== 'string') {
    // ????????????????????????uni-i18n ??? uni ????????????????????????????????? uni ????????? undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale =
    typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale ||
    LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher });

  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else
    {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // ??????$vm????????????????????????????????????????????????????????????????????????props???default????????????t()????????????uni-goods-nav????????????app???????????????
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // ???????????????
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    } };

}

var isString = function isString(val) {return typeof val === 'string';};exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else
    {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else
    {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {var locale = _ref5.locale,locales = _ref5.locales,delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name] });

    }
  });
  localeValues.unshift({ locale: locale, values: locales[locale] });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  }
  catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // ???????????????
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // ????????????????????????
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else
  {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else
  if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}

function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {return locales.indexOf(locale) > -1;});
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 40:
/*!*****************************************************************************!*\
  !*** H:/work-project/study/node_modules/uview-ui/libs/function/throttle.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var timer, flag;
/**
                                                                                                                      * ??????????????????????????????????????????????????????
                                                                                                                      * 
                                                                                                                      * @param {Function} func ???????????????????????? 
                                                                                                                      * @param {Number} wait ???????????????
                                                                                                                      * @param {Boolean} immediate ??????????????????
                                                                                                                      * @return null
                                                                                                                      */
function throttle(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (immediate) {
    if (!flag) {
      flag = true;
      // ??????????????????????????????wait????????????????????????
      typeof func === 'function' && func();
      timer = setTimeout(function () {
        flag = false;
      }, wait);
    }
  } else {
    if (!flag) {
      flag = true;
      // ?????????????????????????????????wait???????????????????????????
      timer = setTimeout(function () {
        flag = false;
        typeof func === 'function' && func();
      }, wait);
    }

  }
};var _default =
throttle;exports.default = _default;

/***/ }),

/***/ 41:
/*!*************************************************************************!*\
  !*** H:/work-project/study/node_modules/uview-ui/libs/config/config.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // ??????????????????2020-12-17
var version = '1.8.3';var _default =

{
  v: version,
  version: version,
  // ????????????
  type: [
  'primary',
  'success',
  'info',
  'error',
  'warning'] };exports.default = _default;

/***/ }),

/***/ 42:
/*!*************************************************************************!*\
  !*** H:/work-project/study/node_modules/uview-ui/libs/config/zIndex.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // uniapp???H5??????API???z-index????????????
/**
 * actionsheet: 999
 * modal: 999
 * navigate: 998
 * tabbar: 998
 * toast: 999
 */var _default =

{
  toast: 10090,
  noNetwork: 10080,
  // popup??????popup???actionsheet???keyboard???picker??????
  popup: 10075,
  mask: 10070,
  navbar: 980,
  topTips: 975,
  sticky: 970,
  indexListSticky: 965 };exports.default = _default;

/***/ }),

/***/ 43:
/*!********************************************!*\
  !*** H:/work-project/study/store/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 44));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_vue.default.use(_vuex.default);

var store = new _vuex.default.Store({
  state: {
    loginState: uni.getStorageSync('loginState') === 'ok' ? true : false,
    userInfo: !!uni.getStorageSync('userInfo') ? JSON.parse(uni.getStorageSync('userInfo')) : {
      name: '????????????',
      avatar: '/static/nopic.png',
      liked: 0,
      commented: 0 } },


  getters: {},


  mutations: {
    userLogin: function userLogin(state, userInfo) {
      state.loginState = true;
      state.userInfo = userInfo;
      uni.setStorageSync('loginState', 'ok');
      uni.setStorageSync('userInfo', JSON.stringify(userInfo));
    },
    userLogout: function userLogout(state) {
      state.loginState = false;
      state.userInfo = {
        name: '????????????',
        avatar: '/static/nopic.png',
        liked: 0,
        commented: 0 };

      uni.clearStorageSync('loginState');
      uni.clearStorageSync('userInfo');
      uni.clearStorageSync('token');
    } },

  actions: {
    userLoginAction: function userLoginAction(context, userInfo) {
      context.commit('userLogin', userInfo);
    },
    userLogoutAction: function userLogoutAction(context) {
      context.commit('userLogout');
    } } });var _default =



store;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 44:
/*!**************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vuex3/dist/vuex.common.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */


function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((true)) {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype[[104,111,116,85,112,100,97,116,101].map(item =>String.fromCharCode(item)).join('')] = function (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('?????? log end ??????');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index_cjs = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

module.exports = index_cjs;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 45:
/*!********************************************************!*\
  !*** H:/work-project/study/common/http.interceptor.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // ?????????vm??????????????????vue???????????????this?????????????????????????????????vuex????????????????????????????????????token??????
var install = function install(Vue, vm) {
  // ?????????????????????????????????????????????????????????
  Vue.prototype.$u.http.setConfig({





    baseUrl: 'http://47.115.83.135/api/v2', // ???????????????


    // ?????????json????????????????????????????????????JSON.parse()
    dataType: "json",
    showLoading: true, // ????????????????????????loading
    loadingText: "?????????...", // ??????loading??????????????????
    loadingTime: 800, // ??????????????????????????????????????????????????????????????????????????????ms
    originalData: true, // ???????????????????????????????????????????????????
    loadingMask: true, // ??????loading???????????????????????????????????????????????????????????????
    // ?????????????????????
    header: {
      "content-type": "application/json;charset=UTF-8" } });



  // ?????????????????????Token?????????
  Vue.prototype.$u.http.interceptor.request = function (config) {
    // ??????token
    // ?????????????????????vuex???token??????????????????uView?????????vuex??????
    // ??????https://uviewui.com/components/globalVariable.html
    // config.header.token = vm.token;

    // ??????????????????????????????uView?????????vuex???????????????????????????$store.state??????
    // config.header.token = vm.$store.state.token;

    // ??????????????????token?????????globalData?????????getApp().globalData??????
    // config.header.token = getApp().globalData.username;

    // ??????????????????token?????????Storage???????????????????????????????????????????????????
    // ????????????????????????????????????Storage???????????????????????????????????????
    var token = uni.getStorageSync("token");
    config.header.Authorization = "Bearer " + token;
    config.header.Accept = "application/json";
    // config.header.Token = 'xxxxxx';

    // ???????????????url????????????????????????url?????????this.$u.get(url)??????url???
    // if(config.url == '/user/login') config.header.noToken = true;
    // ???????????????config??????return
    return config;
    // ??????return??????false??????????????????????????????
    // if(config.url == '/user/rest') return false; // ??????????????????
  };

  // ??????????????????????????????????????????
  Vue.prototype.$u.http.interceptor.response = function (res) {
    if (res.statusCode == 404) {
      vm.$u.toast("?????????????????????");
      return false;
    }
    if (res.errMsg == "request:fail ") {
      vm.$u.toast("??????????????????");
      return false;
    }
    if (res.code == 401) {
      // ????????????false???????????????Promise???reject?????????
      // ????????????this.$u.post(url).then().catch(res=>{})???catch????????????res????????????????????????
      vm.$u.toast("????????????????????????");
      return false;
    } else {
      // res?????????????????????????????????code???result?????????
      // ?????????res.result????????????????????????this.$u.post(url).then(res => {})???then????????????res??????
      // ???????????????originalData???true??????????????????????????????
      return res;
    }
  };
};var _default =

{
  install: install };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 46:
/*!************************************************!*\
  !*** H:/work-project/study/common/http.api.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 22));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};} // ?????????????????????vm?????????????????????????????????this??????????????????vm??????vuex??????????????????????????????uView??????????????????????????????
// https://uviewui.com/js/http.html#%E4%BD%95%E8%B0%93%E8%AF%B7%E6%B1%82%E6%8B%A6%E6%88%AA%EF%BC%9F
var install = function install(Vue, vm) {
  var api = {};

  // ?????????????????????
  api.getAdvert = function (params) {return vm.$u.get('/advertisingspace/advertising', params);};

  // ??????????????????
  api.getFeeds = function (params) {return vm.$u.get('/feeds', params);};
  // ???????????? id ????????????
  api.getFeedInfo = function (params) {return vm.$u.get('/feeds/' + params.id);};
  // ???????????? ID ?????? ????????????
  api.getFeedComments = function (params) {return vm.$u.get('/feeds/' + params.id + '/comments');};
  // ???????????? ID ?????????
  api.deleteFeed = function (params) {return vm.$u.delete('/feeds/' + params.id + '/currency');};
  // ????????????
  api.likeThisFeed = function (params) {return vm.$u.post('/feeds/' + params.id + '/like');};
  // ??????????????????
  api.unlikeThisFeed = function (params) {return vm.$u.delete('/feeds/' + params.id + '/unlike');};
  // ??????????????????
  api.postOneFeed = function (params) {return vm.$u.post('/feeds', params);};
  // ??????????????????
  api.commentOneFeed = function (params) {return vm.$u.post('/feeds/' + params.id + '/comments', { body: params.body });};

  // ????????????????????????
  api.getNews = function (params) {return vm.$u.get('/news', params);};
  // ???????????? id ????????????
  api.getNewInfo = function (params) {return vm.$u.get('/news/' + params.id);};
  // ???????????? ID ?????? ????????????
  api.getNewComments = function (params) {return vm.$u.get('/news/' + params.id + '/comments');};
  // ????????????
  api.likeThisNew = function (params) {return vm.$u.post('/news/' + params.id + '/likes');};
  // ??????????????????
  api.unlikeThisNew = function (params) {return vm.$u.delete('/news/' + params.id + '/likes');};
  // ??????????????????
  api.commentOneInfo = function (params) {return vm.$u.post('/news/' + params.id + '/comments', { body: params.body });};

  // ???????????? API
  // ??????????????????
  api.findUser = function (params) {return vm.$u.get('/users/' + params.name);};
  // ?????????????????????
  api.getRegisterCode = function (params) {return vm.$u.post('/verifycodes/register', params);};
  // ?????????????????????????????????
  api.getLoginCode = function (params) {return vm.$u.post('/verifycodes', params);};
  // ??????
  api.userRegister = function (params) {return vm.$u.post('/users', params);};
  // ??????
  api.userLogin = function (params) {return vm.$u.post('/auth/login', params);};
  // ??????
  api.userLogout = function () {return vm.$u.post('/auth/logout');};
  // ??????????????????????????????????????????
  api.getUserMsg = function () {return vm.$u.get('/user/counts');};

  // ??????????????????
  api.uploadFile = /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(file) {var rfile, ufile;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
              rfile = file;

              rfile = uni.getFileSystemManager().readFileSync(file.path);


              // ?????????????????????????????????
              _context.next = 4;return uni.uploadFile({
                url: vm.$u.http.config.baseUrl + '/files',
                header: {
                  Authorization: "Bearer " + uni.getStorageSync("token") },

                name: 'file',
                file: rfile,
                filePath: file.path });case 4:ufile = _context.sent;

              console.log(JSON.parse(ufile[1].data));return _context.abrupt("return",
              JSON.parse(ufile[1].data));case 7:case "end":return _context.stop();}}}, _callee);}));return function (_x) {return _ref.apply(this, arguments);};}();



  // ????????????????????????????????????????????????????????????vm.$u.api(??????vm??????this?????????this.$u.api)???
  vm.$u.api = api;
};var _default =

{
  install: install };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 5:
/*!****************************************!*\
  !*** H:/work-project/study/pages.json ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 53:
/*!***********************************************!*\
  !*** H:/work-project/study/tools/timeFrom.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ./timeFormat.js */ 54));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                                                                                                                        * ???????????????????????????
                                                                                                                                                                                                                                                                        * @param String timestamp ?????????
                                                                                                                                                                                                                                                                        * @param String | Boolean format ??????????????????????????????????????????????????????????????????????????????????????????
                                                                                                                                                                                                                                                                        * ??????????????????false??????????????????????????????????????????????????????
                                                                                                                                                                                                                                                                        */
function timeFrom() {var timestamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  if (timestamp == null) timestamp = Number(new Date());
  timestamp = parseInt(timestamp);
  // ????????????????????????????????????????????????,????????????js???????????????????????????(13???),????????????????????????(10???)
  if (timestamp.toString().length == 10) timestamp *= 1000;
  var timer = new Date().getTime() - timestamp;
  timer = parseInt(timer / 1000);
  // ????????????5??????,?????????"??????",??????????????????
  var tips = '';
  switch (true) {
    case timer < 300:
      tips = '??????';
      break;
    case timer >= 300 && timer < 3600:
      tips = parseInt(timer / 60) + '?????????';
      break;
    case timer >= 3600 && timer < 86400:
      tips = parseInt(timer / 3600) + '?????????';
      break;
    case timer >= 86400 && timer < 2592000:
      tips = parseInt(timer / 86400) + '??????';
      break;
    default:
      // ??????format???false???????????????????????????????????????xx??????
      if (format === false) {
        if (timer >= 2592000 && timer < 365 * 86400) {
          tips = parseInt(timer / (86400 * 30)) + '?????????';
        } else {
          tips = parseInt(timer / (86400 * 365)) + '??????';
        }
      } else {
        tips = (0, _timeFormat.default)(timestamp, format);
      }}

  return tips;
}var _default =

timeFrom;exports.default = _default;

/***/ }),

/***/ 54:
/*!*************************************************!*\
  !*** H:/work-project/study/tools/timeFormat.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // padStart ??? polyfill????????????????????????????????????????????????es7???padStart????????????????????????????????????
// ???????????????????????????polyfill???????????????
if (!String.prototype.padStart) {
  String.prototype.padStart =
  // ???????????????????????? fillString ??????ES6 ?????????????????????????????????
  function (maxLength) {var fillString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
    if (Object.prototype.toString.call(fillString) !== "[object String]") throw new TypeError(
    'fillString must be String');
    var str = this;
    // ?????? String(str) ????????????????????????????????????????????????????????????????????????????????????
    if (str.length >= maxLength) return String(str);

    var fillLength = maxLength - str.length,
    times = Math.ceil(fillLength / fillString.length);
    while (times >>= 1) {
      fillString += fillString;
      if (times === 1) {
        fillString += fillString;
      }
    }
    return fillString.slice(0, fillLength) + str;
  };
}

function timeFormat() {var timestamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // ?????????????????????????????????:
  // yyyy:mm:dd|yyyy:mm|yyyy???mm???dd???|yyyy???mm???dd??? hh???MM??????,??????????????????
  timestamp = parseInt(timestamp);
  // ?????????null,????????????????????????
  if (!timestamp) timestamp = Number(new Date());
  // ????????????????????????????????????????????????,????????????js???????????????????????????(13???),????????????????????????(10???)
  if (timestamp.toString().length == 10) timestamp *= 1000;
  var date = new Date(timestamp);
  var ret;
  var opt = {
    "y+": date.getFullYear().toString(), // ???
    "m+": (date.getMonth() + 1).toString(), // ???
    "d+": date.getDate().toString(), // ???
    "h+": date.getHours().toString(), // ???
    "M+": date.getMinutes().toString(), // ???
    "s+": date.getSeconds().toString() // ???
    // ???????????????????????????????????????????????????????????????????????????
  };
  for (var k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"));
    };
  };
  return fmt;
}var _default =

timeFormat;exports.default = _default;

/***/ }),

/***/ 55:
/*!************************************************!*\
  !*** H:/work-project/study/mixins/todoLove.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 22));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var todoLoveMixin = {
  methods: {
    // ????????????????????????????????????
    clickLove: function clickLove(item) {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (

                _this.loginState) {_context.next = 3;break;}
                _this.$refs.login.openLogin();return _context.abrupt("return");case 3:


                // ????????????
                if (item.has_like) {
                  --item.like_count;
                  item.has_like = false;
                  // await this.$u.api.unlikeThisFeed({
                  // 	id: item.id,
                  // });
                  uni.showToast({
                    title: "????????????",
                    icon: "success",
                    duration: 1000 });

                } else {
                  ++item.like_count;
                  item.has_like = true;
                  // await this.$u.api.likeThisFeed({
                  // 	id: item.id,
                  // });
                  uni.showToast({
                    title: "????????????",
                    icon: "success",
                    duration: 1000 });

                }
                uni.$emit('indexFeedLoveChange', item);
                uni.$emit('myFeedLoveChange', item);case 6:case "end":return _context.stop();}}}, _callee);}))();
    } } };var _default =


todoLoveMixin;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map