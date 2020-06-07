/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./resources/assets/scripts/chat.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@adonisjs/websocket-client/dist/Ws.browser.js":
/*!********************************************************************!*\
  !*** ./node_modules/@adonisjs/websocket-client/dist/Ws.browser.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var asyncToGenerator = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
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

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var anyMap = new WeakMap();
var eventsMap = new WeakMap();
var resolvedPromise = Promise.resolve();

function assertEventName(eventName) {
	if (typeof eventName !== 'string') {
		throw new TypeError('eventName must be a string');
	}
}

function assertListener(listener) {
	if (typeof listener !== 'function') {
		throw new TypeError('listener must be a function');
	}
}

function getListeners(instance, eventName) {
	var events = eventsMap.get(instance);
	if (!events.has(eventName)) {
		events.set(eventName, new Set());
	}

	return events.get(eventName);
}

var Emittery = function () {
	function Emittery() {
		classCallCheck(this, Emittery);

		anyMap.set(this, new Set());
		eventsMap.set(this, new Map());
	}

	createClass(Emittery, [{
		key: 'on',
		value: function on(eventName, listener) {
			assertEventName(eventName);
			assertListener(listener);
			getListeners(this, eventName).add(listener);
			return this.off.bind(this, eventName, listener);
		}
	}, {
		key: 'off',
		value: function off(eventName, listener) {
			assertEventName(eventName);
			assertListener(listener);
			getListeners(this, eventName).delete(listener);
		}
	}, {
		key: 'once',
		value: function once(eventName) {
			var _this = this;

			return new Promise(function (resolve) {
				assertEventName(eventName);
				var off = _this.on(eventName, function (data) {
					off();
					resolve(data);
				});
			});
		}
	}, {
		key: 'emit',
		value: function () {
			var _ref = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(eventName, eventData) {
				var _this2 = this;

				var listeners, anyListeners, staticListeners, staticAnyListeners;
				return regeneratorRuntime.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								assertEventName(eventName);

								listeners = getListeners(this, eventName);
								anyListeners = anyMap.get(this);
								staticListeners = [].concat(toConsumableArray(listeners));
								staticAnyListeners = [].concat(toConsumableArray(anyListeners));
								_context3.next = 7;
								return resolvedPromise;

							case 7:
								return _context3.abrupt('return', Promise.all([].concat(toConsumableArray(staticListeners.map(function () {
									var _ref2 = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(listener) {
										return regeneratorRuntime.wrap(function _callee$(_context) {
											while (1) {
												switch (_context.prev = _context.next) {
													case 0:
														if (!listeners.has(listener)) {
															_context.next = 2;
															break;
														}

														return _context.abrupt('return', listener(eventData));

													case 2:
													case 'end':
														return _context.stop();
												}
											}
										}, _callee, _this2);
									}));

									return function (_x3) {
										return _ref2.apply(this, arguments);
									};
								}())), toConsumableArray(staticAnyListeners.map(function () {
									var _ref3 = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(listener) {
										return regeneratorRuntime.wrap(function _callee2$(_context2) {
											while (1) {
												switch (_context2.prev = _context2.next) {
													case 0:
														if (!anyListeners.has(listener)) {
															_context2.next = 2;
															break;
														}

														return _context2.abrupt('return', listener(eventName, eventData));

													case 2:
													case 'end':
														return _context2.stop();
												}
											}
										}, _callee2, _this2);
									}));

									return function (_x4) {
										return _ref3.apply(this, arguments);
									};
								}())))));

							case 8:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function emit(_x, _x2) {
				return _ref.apply(this, arguments);
			}

			return emit;
		}()
	}, {
		key: 'emitSerial',
		value: function () {
			var _ref4 = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(eventName, eventData) {
				var listeners, anyListeners, staticListeners, staticAnyListeners, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, listener, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _listener;

				return regeneratorRuntime.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								assertEventName(eventName);

								listeners = getListeners(this, eventName);
								anyListeners = anyMap.get(this);
								staticListeners = [].concat(toConsumableArray(listeners));
								staticAnyListeners = [].concat(toConsumableArray(anyListeners));
								_context4.next = 7;
								return resolvedPromise;

							case 7:
								/* eslint-disable no-await-in-loop */
								_iteratorNormalCompletion = true;
								_didIteratorError = false;
								_iteratorError = undefined;
								_context4.prev = 10;
								_iterator = staticListeners[Symbol.iterator]();

							case 12:
								if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
									_context4.next = 20;
									break;
								}

								listener = _step.value;

								if (!listeners.has(listener)) {
									_context4.next = 17;
									break;
								}

								_context4.next = 17;
								return listener(eventData);

							case 17:
								_iteratorNormalCompletion = true;
								_context4.next = 12;
								break;

							case 20:
								_context4.next = 26;
								break;

							case 22:
								_context4.prev = 22;
								_context4.t0 = _context4['catch'](10);
								_didIteratorError = true;
								_iteratorError = _context4.t0;

							case 26:
								_context4.prev = 26;
								_context4.prev = 27;

								if (!_iteratorNormalCompletion && _iterator.return) {
									_iterator.return();
								}

							case 29:
								_context4.prev = 29;

								if (!_didIteratorError) {
									_context4.next = 32;
									break;
								}

								throw _iteratorError;

							case 32:
								return _context4.finish(29);

							case 33:
								return _context4.finish(26);

							case 34:
								_iteratorNormalCompletion2 = true;
								_didIteratorError2 = false;
								_iteratorError2 = undefined;
								_context4.prev = 37;
								_iterator2 = staticAnyListeners[Symbol.iterator]();

							case 39:
								if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
									_context4.next = 47;
									break;
								}

								_listener = _step2.value;

								if (!anyListeners.has(_listener)) {
									_context4.next = 44;
									break;
								}

								_context4.next = 44;
								return _listener(eventName, eventData);

							case 44:
								_iteratorNormalCompletion2 = true;
								_context4.next = 39;
								break;

							case 47:
								_context4.next = 53;
								break;

							case 49:
								_context4.prev = 49;
								_context4.t1 = _context4['catch'](37);
								_didIteratorError2 = true;
								_iteratorError2 = _context4.t1;

							case 53:
								_context4.prev = 53;
								_context4.prev = 54;

								if (!_iteratorNormalCompletion2 && _iterator2.return) {
									_iterator2.return();
								}

							case 56:
								_context4.prev = 56;

								if (!_didIteratorError2) {
									_context4.next = 59;
									break;
								}

								throw _iteratorError2;

							case 59:
								return _context4.finish(56);

							case 60:
								return _context4.finish(53);

							case 61:
							case 'end':
								return _context4.stop();
						}
					}
				}, _callee4, this, [[10, 22, 26, 34], [27,, 29, 33], [37, 49, 53, 61], [54,, 56, 60]]);
			}));

			function emitSerial(_x5, _x6) {
				return _ref4.apply(this, arguments);
			}

			return emitSerial;
		}()
	}, {
		key: 'onAny',
		value: function onAny(listener) {
			assertListener(listener);
			anyMap.get(this).add(listener);
			return this.offAny.bind(this, listener);
		}
	}, {
		key: 'offAny',
		value: function offAny(listener) {
			assertListener(listener);
			anyMap.get(this).delete(listener);
		}
	}, {
		key: 'clearListeners',
		value: function clearListeners(eventName) {
			if (typeof eventName === 'string') {
				getListeners(this, eventName).clear();
			} else {
				anyMap.get(this).clear();
				var _iteratorNormalCompletion3 = true;
				var _didIteratorError3 = false;
				var _iteratorError3 = undefined;

				try {
					for (var _iterator3 = eventsMap.get(this).values()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
						var listeners = _step3.value;

						listeners.clear();
					}
				} catch (err) {
					_didIteratorError3 = true;
					_iteratorError3 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion3 && _iterator3.return) {
							_iterator3.return();
						}
					} finally {
						if (_didIteratorError3) {
							throw _iteratorError3;
						}
					}
				}
			}
		}
	}, {
		key: 'listenerCount',
		value: function listenerCount(eventName) {
			if (typeof eventName === 'string') {
				return anyMap.get(this).size + getListeners(this, eventName).size;
			}

			if (typeof eventName !== 'undefined') {
				assertEventName(eventName);
			}

			var count = anyMap.get(this).size;

			var _iteratorNormalCompletion4 = true;
			var _didIteratorError4 = false;
			var _iteratorError4 = undefined;

			try {
				for (var _iterator4 = eventsMap.get(this).values()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
					var value = _step4.value;

					count += value.size;
				}
			} catch (err) {
				_didIteratorError4 = true;
				_iteratorError4 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion4 && _iterator4.return) {
						_iterator4.return();
					}
				} finally {
					if (_didIteratorError4) {
						throw _iteratorError4;
					}
				}
			}

			return count;
		}
	}]);
	return Emittery;
}();

// Subclass used to encourage TS users to type their events.


Emittery.Typed = function (_Emittery) {
	inherits(_class, _Emittery);

	function _class() {
		classCallCheck(this, _class);
		return possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	return _class;
}(Emittery);
Object.defineProperty(Emittery.Typed, 'Typed', {
	enumerable: false,
	value: undefined
});

var emittery = Emittery;

var strictUriEncode = function strictUriEncode(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (x) {
    return '%' + x.charCodeAt(0).toString(16).toUpperCase();
  });
};

function encoderForArrayFormat(options) {
	switch (options.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [encode(key, options), '[', index, ']'].join('') : [encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('');
			};
		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, options) : [encode(key, options), '[]=', encode(value, options)].join('');
			};
		default:
			return function (key, value) {
				return value === null ? encode(key, options) : [encode(key, options), '=', encode(value, options)].join('');
			};
	}
}

function encode(value, options) {
	if (options.encode) {
		return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

var stringify = function stringify(obj, options) {
	var defaults$$1 = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	options = _extends(defaults$$1, options);

	if (options.sort === false) {
		options.sort = function () {};
	}

	var formatter = encoderForArrayFormat(options);

	return obj ? Object.keys(obj).sort(options.sort).map(function (key) {
		var value = obj[key];

		if (value === undefined) {
			return '';
		}

		if (value === null) {
			return encode(key, options);
		}

		if (Array.isArray(value)) {
			var result = [];

			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = value.slice()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var value2 = _step2.value;

					if (value2 === undefined) {
						continue;
					}

					result.push(formatter(key, value2, result.length));
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			return result.join('&');
		}

		return encode(key, options) + '=' + encode(value, options);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var wsp_browser = createCommonjsModule(function (module, exports) {
  !function (t, e) {
    module.exports = e();
  }(commonjsGlobal, function () {
    var t = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === 'undefined' ? 'undefined' : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === 'undefined' ? 'undefined' : _typeof(t);
    },
        e = { OPEN: 0, JOIN: 1, LEAVE: 2, JOIN_ACK: 3, JOIN_ERROR: 4, LEAVE_ACK: 5, LEAVE_ERROR: 6, EVENT: 7, PING: 8, PONG: 9 };function o(t, e, o) {
      return o.forEach(function (t) {
        !function (t, e) {
          if (!t || "string" != typeof t) throw new Error(e);
        }(e[t], "expected " + t + " to be a valid string");
      }), { t: t, d: e };
    }var n = {};return Object.keys(e).forEach(function (o) {
      var i = o.toLowerCase().replace(/^\w|_(\w)/g, function (t, e) {
        return e ? e.toUpperCase() : t.toUpperCase();
      });n["is" + i + "Packet"] = function (n) {
        return !(!n || "object" !== (void 0 === n ? "undefined" : t(n)) || n.t !== e[o]);
      };
    }), n.hasTopic = function (t) {
      return !!(t && t.d && t.d.topic);
    }, n.isValidJoinPacket = n.hasTopic, n.isValidLeavePacket = n.hasTopic, n.isValidEventPacket = n.hasTopic, n.joinPacket = function (t) {
      return o(e.JOIN, { topic: t }, ["topic"]);
    }, n.leavePacket = function (t) {
      return o(e.LEAVE, { topic: t }, ["topic"]);
    }, n.joinAckPacket = function (t) {
      return o(e.JOIN_ACK, { topic: t }, ["topic"]);
    }, n.joinErrorPacket = function (t, n) {
      return o(e.JOIN_ERROR, { topic: t, message: n }, ["topic", "message"]);
    }, n.leaveAckPacket = function (t) {
      return o(e.LEAVE_ACK, { topic: t }, ["topic"]);
    }, n.leaveErrorPacket = function (t, n) {
      return o(e.LEAVE_ERROR, { topic: t, message: n }, ["topic", "message"]);
    }, n.eventPacket = function (t, n, i) {
      return o(e.EVENT, { topic: t, event: n, data: i = i || "" }, ["topic", "event"]);
    }, n.pingPacket = function () {
      return { t: e.PING };
    }, n.pongPacket = function () {
      return { t: e.PONG };
    }, _extends({ codes: e }, n);
  });
});

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

var ms = function ms(val, options) {
  options = options || {};
  var type = typeof val === 'undefined' ? 'undefined' : _typeof(val);
  if (type === 'string' && val.length > 0) {
    return parse$1(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse$1(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}

var debug = createCommonjsModule(function (module, exports) {
  /**
   * This is the common logic for both the Node.js and web browser
   * implementations of `debug()`.
   *
   * Expose `debug()` as the module.
   */

  exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
  exports.coerce = coerce;
  exports.disable = disable;
  exports.enable = enable;
  exports.enabled = enabled;
  exports.humanize = ms;

  /**
   * The currently active debug mode names, and names to skip.
   */

  exports.names = [];
  exports.skips = [];

  /**
   * Map of special "%n" handling functions, for the debug "format" argument.
   *
   * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
   */

  exports.formatters = {};

  /**
   * Previous log timestamp.
   */

  var prevTime;

  /**
   * Select a color.
   * @param {String} namespace
   * @return {Number}
   * @api private
   */

  function selectColor(namespace) {
    var hash = 0,
        i;

    for (i in namespace) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }

    return exports.colors[Math.abs(hash) % exports.colors.length];
  }

  /**
   * Create a debugger with the given `namespace`.
   *
   * @param {String} namespace
   * @return {Function}
   * @api public
   */

  function createDebug(namespace) {

    function debug() {
      // disabled?
      if (!debug.enabled) return;

      var self = debug;

      // set `diff` timestamp
      var curr = +new Date();
      var ms$$1 = curr - (prevTime || curr);
      self.diff = ms$$1;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;

      // turn the `arguments` into a proper Array
      var args = new Array(arguments.length);
      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }

      args[0] = exports.coerce(args[0]);

      if ('string' !== typeof args[0]) {
        // anything else let's inspect with %O
        args.unshift('%O');
      }

      // apply any `formatters` transformations
      var index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
        // if we encounter an escaped % then don't increase the array index
        if (match === '%%') return match;
        index++;
        var formatter = exports.formatters[format];
        if ('function' === typeof formatter) {
          var val = args[index];
          match = formatter.call(self, val);

          // now we need to remove `args[index]` since it's inlined in the `format`
          args.splice(index, 1);
          index--;
        }
        return match;
      });

      // apply env-specific formatting (colors, etc.)
      exports.formatArgs.call(self, args);

      var logFn = debug.log || exports.log || console.log.bind(console);
      logFn.apply(self, args);
    }

    debug.namespace = namespace;
    debug.enabled = exports.enabled(namespace);
    debug.useColors = exports.useColors();
    debug.color = selectColor(namespace);

    // env-specific initialization logic for debug instances
    if ('function' === typeof exports.init) {
      exports.init(debug);
    }

    return debug;
  }

  /**
   * Enables a debug mode by namespaces. This can include modes
   * separated by a colon and wildcards.
   *
   * @param {String} namespaces
   * @api public
   */

  function enable(namespaces) {
    exports.save(namespaces);

    exports.names = [];
    exports.skips = [];

    var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
    var len = split.length;

    for (var i = 0; i < len; i++) {
      if (!split[i]) continue; // ignore empty strings
      namespaces = split[i].replace(/\*/g, '.*?');
      if (namespaces[0] === '-') {
        exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
      } else {
        exports.names.push(new RegExp('^' + namespaces + '$'));
      }
    }
  }

  /**
   * Disable debug output.
   *
   * @api public
   */

  function disable() {
    exports.enable('');
  }

  /**
   * Returns true if the given mode name is enabled, false otherwise.
   *
   * @param {String} name
   * @return {Boolean}
   * @api public
   */

  function enabled(name) {
    var i, len;
    for (i = 0, len = exports.skips.length; i < len; i++) {
      if (exports.skips[i].test(name)) {
        return false;
      }
    }
    for (i = 0, len = exports.names.length; i < len; i++) {
      if (exports.names[i].test(name)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Coerce `val`.
   *
   * @param {Mixed} val
   * @return {Mixed}
   * @api private
   */

  function coerce(val) {
    if (val instanceof Error) return val.stack || val.message;
    return val;
  }
});
var debug_1 = debug.coerce;
var debug_2 = debug.disable;
var debug_3 = debug.enable;
var debug_4 = debug.enabled;
var debug_5 = debug.humanize;
var debug_6 = debug.names;
var debug_7 = debug.skips;
var debug_8 = debug.formatters;

var browser = createCommonjsModule(function (module, exports) {
  /**
   * This is the web browser implementation of `debug()`.
   *
   * Expose `debug()` as the module.
   */

  exports = module.exports = debug;
  exports.log = log;
  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load;
  exports.useColors = useColors;
  exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();

  /**
   * Colors.
   */

  exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];

  /**
   * Currently only WebKit-based Web Inspectors, Firefox >= v31,
   * and the Firebug extension (any Firefox version) are known
   * to support "%c" CSS customizations.
   *
   * TODO: add a `localStorage` variable to explicitly enable/disable colors
   */

  function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
      return true;
    }

    // is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 ||
    // double check webkit in userAgent just in case we are in a worker
    typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }

  /**
   * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
   */

  exports.formatters.j = function (v) {
    try {
      return JSON.stringify(v);
    } catch (err) {
      return '[UnexpectedJSONParseError]: ' + err.message;
    }
  };

  /**
   * Colorize log arguments if enabled.
   *
   * @api public
   */

  function formatArgs(args) {
    var useColors = this.useColors;

    args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);

    if (!useColors) return;

    var c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit');

    // the final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    var index = 0;
    var lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, function (match) {
      if ('%%' === match) return;
      index++;
      if ('%c' === match) {
        // we only are interested in the *last* %c
        // (the user may have provided their own)
        lastC = index;
      }
    });

    args.splice(lastC, 0, c);
  }

  /**
   * Invokes `console.log()` when available.
   * No-op when `console.log` is not a "function".
   *
   * @api public
   */

  function log() {
    // this hackery is required for IE8/9, where
    // the `console.log` function doesn't have 'apply'
    return 'object' === (typeof console === 'undefined' ? 'undefined' : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
  }

  /**
   * Save `namespaces`.
   *
   * @param {String} namespaces
   * @api private
   */

  function save(namespaces) {
    try {
      if (null == namespaces) {
        exports.storage.removeItem('debug');
      } else {
        exports.storage.debug = namespaces;
      }
    } catch (e) {}
  }

  /**
   * Load `namespaces`.
   *
   * @return {String} returns the previously persisted debug modes
   * @api private
   */

  function load() {
    var r;
    try {
      r = exports.storage.debug;
    } catch (e) {}

    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof process !== 'undefined' && 'env' in process) {
      r = process.env.DEBUG;
    }

    return r;
  }

  /**
   * Enable namespaces listed in `localStorage.debug` initially.
   */

  exports.enable(load());

  /**
   * Localstorage attempts to return the localstorage.
   *
   * This is necessary because safari throws
   * when a user disables cookies/localstorage
   * and you attempt to access it.
   *
   * @return {LocalStorage}
   * @api private
   */

  function localstorage() {
    try {
      return window.localStorage;
    } catch (e) {}
  }
});
var browser_1 = browser.log;
var browser_2 = browser.formatArgs;
var browser_3 = browser.save;
var browser_4 = browser.load;
var browser_5 = browser.useColors;
var browser_6 = browser.storage;
var browser_7 = browser.colors;

var Debug = createCommonjsModule(function (module) {

  /*
   * adonis-websocket-client
   *
   * (c) Harminder Virk <virk@adonisjs.com>
   *
   * For the full copyright and license information, please view the LICENSE
   * file that was distributed with this source code.
  */

  {
    var _Debug = browser;
    _Debug.enable('adonis:*');
    module.exports = _Debug('adonis:websocket');
  }
});

/**
 * Socket class holds details for a single subscription. The instance
 * of this class can be used to exchange messages with the server
 * on a given topic.
 *
 * @class Socket
 */

var Socket = function () {
  function Socket(topic, connection) {
    classCallCheck(this, Socket);

    this.topic = topic;
    this.connection = connection;
    this.emitter = new emittery();
    this._state = 'pending';
    this._emitBuffer = [];
  }

  /**
   * Socket state
   *
   * @attribute state
   *
   * @return {String}
   */


  createClass(Socket, [{
    key: 'joinAck',


    /**
     * Called when subscription is confirmed by the
     * server
     *
     * @method joinAck
     *
     * @return {void}
     */
    value: function joinAck() {
      var _this = this;

      this.state = 'open';
      this.emitter.emit('ready', this);

      {
        Debug('clearing emit buffer for %s topic after subscription ack', this.topic);
      }

      /**
       * Process queued events
       */
      this._emitBuffer.forEach(function (buf) {
        return _this.emit(buf.event, buf.data);
      });
      this._emitBuffer = [];
    }

    /**
     * Called when subscription is rejected by the server
     *
     * @method joinError
     *
     * @param  {Object}  packet
     *
     * @return {void}
     */

  }, {
    key: 'joinError',
    value: function joinError(packet) {
      this.state = 'error';
      this.emitter.emit('error', packet);
      this.serverClose();
    }

    /**
     * Called when subscription close is acknowledged
     * by the server
     *
     * @method leaveAck
     *
     * @return {void}
     */

  }, {
    key: 'leaveAck',
    value: function leaveAck() {
      this.state = 'closed';
      this.serverClose();
    }

    /**
     * This method is invoked, when server rejects to close
     * the subscription. The state of the socket should not
     * change here
     *
     * @method leaveError
     *
     * @param  {Object}   packet
     *
     * @return {void}
     */

  }, {
    key: 'leaveError',
    value: function leaveError(packet) {
      this.emitter.emit('leaveError', packet);
    }

    /* istanbul-ignore */
    /**
     * Add an event listener
     *
     * @method on
     */

  }, {
    key: 'on',
    value: function on() {
      var _emitter;

      (_emitter = this.emitter).on.apply(_emitter, arguments);
    }

    /* istanbul-ignore */
    /**
     * Add an event listener for once only
     *
     * @method once
     */

  }, {
    key: 'once',
    value: function once() {
      var _emitter2;

      (_emitter2 = this.emitter).once.apply(_emitter2, arguments);
    }

    /* istanbul-ignore */
    /**
     * Remove event listener(s)
     *
     * @method off
     */

  }, {
    key: 'off',
    value: function off() {
      var _emitter3;

      (_emitter3 = this.emitter).off.apply(_emitter3, arguments);
    }

    /**
     * Emit message on the subscription
     *
     * @method emit
     *
     * @param  {String} event
     * @param  {Mixed} data
     *
     * @return {void}
     */

  }, {
    key: 'emit',
    value: function emit(event, data) {
      if (this.state === 'pending') {
        this._emitBuffer.push({ event: event, data: data });
        return;
      }

      this.connection.sendEvent(this.topic, event, data);
    }

    /**
     * Closes the connection and removes all existing
     * listeners
     *
     * @method serverClose
     *
     * @return {Promise}
     */

  }, {
    key: 'serverClose',
    value: function serverClose() {
      var _this2 = this;

      return this.emitter.emit('close', this).then(function () {
        _this2._emitBuffer = [];
        _this2.emitter.clearListeners();
      }).catch(function () {
        _this2._emitBuffer = [];
        _this2.emitter.clearListeners();
      });
    }

    /**
     * Invoked when a new event is received from the server
     *
     * @method serverEvent
     *
     * @param  {String}    options.event
     * @param  {Mixed}    options.data
     *
     * @return {void}
     */

  }, {
    key: 'serverEvent',
    value: function serverEvent(_ref) {
      var event = _ref.event,
          data = _ref.data;

      this.emitter.emit(event, data);
    }

    /**
     * Received error on connection
     *
     * @method serverError
     *
     * @return {void}
     */

  }, {
    key: 'serverError',
    value: function serverError() {
      this.state = 'error';
    }

    /**
     * Sends the request on server to close the subscription, we
     * have to wait for acknowledgment too
     *
     * @method close
     *
     * @return {void}
     */

  }, {
    key: 'close',
    value: function close() {
      this.state = 'closing';
      {
        Debug('closing subscription for %s topic with server', this.topic);
      }
      this.connection.sendPacket(wsp_browser.leavePacket(this.topic));
    }

    /**
     * Forcefully terminating the subscription
     *
     * @method terminate
     *
     * @return {void}
     */

  }, {
    key: 'terminate',
    value: function terminate() {
      this.leaveAck();
    }
  }, {
    key: 'state',
    get: function get$$1() {
      return this._state;
    }

    /**
     * Update socket state
     */
    ,
    set: function set$$1(state) {
      if (!this.constructor.states.indexOf(state) === -1) {
        throw new Error(state + ' is not a valid socket state');
      }
      this._state = state;
    }

    /**
     * A static array of internal states
     *
     * @method states
     *
     * @return {Array}
     */

  }], [{
    key: 'states',
    get: function get$$1() {
      return ['pending', 'open', 'closed', 'closing', 'error'];
    }
  }]);
  return Socket;
}();

/**
 * adonis-websocket-client
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

/**
 * The default encoder to encode packets.
 */

var JsonEncoder = {
  name: 'json',
  /**
   * Encode a value by stringifying it
   *
   * @method encode
   *
   * @param  {Object}   payload
   * @param  {Function} callback
   *
   * @return {void}
   */
  encode: function encode(payload, callback) {
    var encoded = null;

    try {
      encoded = JSON.stringify(payload);
    } catch (error) {
      return callback(error);
    }
    callback(null, encoded);
  },


  /**
   * Decode value by parsing it
   *
   * @method decode
   *
   * @param  {String}   payload
   * @param  {Function} callback
   *
   * @return {void}
   */
  decode: function decode(payload, callback) {
    var decoded = null;

    try {
      decoded = JSON.parse(payload);
    } catch (error) {
      return callback(error);
    }
    callback(null, decoded);
  }
};

/**
 * Returns the ws protocol based upon HTTP or HTTPS
 *
 * @returns {String}
 *
 */
var wsProtocol = window.location.protocol === 'https:' ? 'wss' : 'ws';

/**
 * Connection class is used to make a TCP/Socket connection
 * with the server. It relies on Native Websocket browser
 * support.
 *
 * @class Connection
 *
 * @param {String} url
 * @param {Object} options
 */

var Connection = function (_Emitter) {
  inherits(Connection, _Emitter);

  function Connection(url, options) {
    classCallCheck(this, Connection);

    var _this = possibleConstructorReturn(this, (Connection.__proto__ || Object.getPrototypeOf(Connection)).call(this));

    url = url || wsProtocol + '://' + window.location.host;

    /**
     * Connection options
     *
     * @type {Object}
     */
    _this.options = _extends({
      path: 'adonis-ws',
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 1000,
      query: null,
      encoder: JsonEncoder
    }, options);

    {
      Debug('connection options %o', _this.options);
    }

    /**
     * The state connection is in
     *
     * @type {String}
     */
    _this._connectionState = 'idle';

    /**
     * Number of reconnection attempts being made
     *
     * @type {Number}
     */
    _this._reconnectionAttempts = 0;

    /**
     * All packets are sent in sequence to the server. So we need to
     * maintain a queue and process one at a time
     *
     * @type {Array}
     */
    _this._packetsQueue = [];

    /**
     * Whether or not the queue is in process
     *
     * @type {Boolean}
     */
    _this._processingQueue = false;

    /**
     * As per Adonis protocol, the client must ping
     * the server after x interval
     *
     * @type {Timer}
     */
    _this._pingTimer = null;

    /**
     * Extended query is merged with the query params
     * user pass
     *
     * @type {Object}
     */
    _this._extendedQuery = {};

    /**
     * Base URL for the websocket connection
     *
     * @type {String}
     */
    _this._url = url.replace(/\/$/, '') + '/' + _this.options.path;

    /**
     * Subscriptions for a single connection
     *
     * @type {Object}
     */
    _this.subscriptions = {};

    /**
     * Handler called when `close` is emitted from the
     * subscription
     */
    _this.removeSubscription = function (_ref) {
      var topic = _ref.topic;

      delete _this.subscriptions[topic];
    };
    return _this;
  }

  /**
   * Computed value to decide, whether or not to reconnect
   *
   * @method shouldReconnect
   *
   * @return {Boolean}
   */


  createClass(Connection, [{
    key: '_cleanup',


    /**
     * Clean references
     *
     * @method _cleanup
     *
     * @return {void}
     *
     * @private
     */
    value: function _cleanup() {
      clearInterval(this._pingTimer);
      this.ws = null;
      this._pingTimer = null;
    }

    /**
     * Calls a callback passing subscription to it
     *
     * @method _subscriptionsIterator
     *
     * @param  {Function}             callback
     *
     * @return {void}
     *
     * @private
     */

  }, {
    key: '_subscriptionsIterator',
    value: function _subscriptionsIterator(callback) {
      var _this2 = this;

      Object.keys(this.subscriptions).forEach(function (sub) {
        return callback(_this2.subscriptions[sub], sub);
      });
    }

    /**
     * Calls the callback when there is a subscription for
     * the topic mentioned in the packet
     *
     * @method _ensureSubscription
     *
     * @param  {Object}            packet
     * @param  {Function}          cb
     *
     * @return {void}
     *
     * @private
     */

  }, {
    key: '_ensureSubscription',
    value: function _ensureSubscription(packet, cb) {
      var socket = this.getSubscription(packet.d.topic);

      if (!socket) {
        {
          Debug('cannot consume packet since %s topic has no active subscription %j', packet.d.topic, packet);
        }
        return;
      }

      cb(socket, packet);
    }

    /**
     * Process the packets queue by sending one packet at a time
     *
     * @method _processQueue
     *
     * @return {void}
     *
     * @private
     */

  }, {
    key: '_processQueue',
    value: function _processQueue() {
      var _this3 = this;

      if (this._processingQueue || !this._packetsQueue.length) {
        return;
      }

      /**
       * Turn on the processing flag
       *
       * @type {Boolean}
       */
      this._processingQueue = true;

      this.options.encoder.encode(this._packetsQueue.shift(), function (error, payload) {
        if (error) {
          {
            Debug('encode error %j', error);
          }
          return;
        }
        _this3.write(payload);

        /**
         * Turn off the processing flag and re call the processQueue to send
         * the next message
         *
         * @type {Boolean}
         */
        _this3._processingQueue = false;
        _this3._processQueue();
      });
    }

    /**
     * As soon as connection is ready, we start listening
     * for new message
     *
     * @method _onOpen
     *
     * @return {void}
     *
     * @private
     */

  }, {
    key: '_onOpen',
    value: function _onOpen() {
      {
        Debug('opened');
      }
    }

    /**
     * When received connection error
     *
     * @method _onError
     *
     * @param  {Event} event
     *
     * @return {void}
     *
     * @private
     */

  }, {
    key: '_onError',
    value: function _onError(event) {
      {
        Debug('error %O', event);
      }

      this._subscriptionsIterator(function (subscription) {
        return subscription.serverError();
      });
      this.emit('error', event);
    }

    /**
     * Initiates reconnect with the server by moving
     * all subscriptions to pending state
     *
     * @method _reconnect
     *
     * @return {void}
     *
     * @private
     */

  }, {
    key: '_reconnect',
    value: function _reconnect() {
      var _this4 = this;

      this._reconnectionAttempts++;

      this.emit('reconnect', this._reconnectionAttempts);

      setTimeout(function () {
        _this4._connectionState = 'reconnect';
        _this4.connect();
      }, this.options.reconnectionDelay * this._reconnectionAttempts);
    }

    /**
     * When connection closes
     *
     * @method _onClose
     *
     * @param  {Event} event
     *
     * @return {void}
     *
     * @private
     */

  }, {
    key: '_onClose',
    value: function _onClose(event) {
      var _this5 = this;

      {
        Debug('closing from %s state', this._connectionState);
      }

      this._cleanup();

      /**
       * Force subscriptions to terminate
       */
      this._subscriptionsIterator(function (subscription) {
        return subscription.terminate();
      });

      this.emit('close', this).then(function () {
        _this5.shouldReconnect ? _this5._reconnect() : _this5.clearListeners();
      }).catch(function () {
        _this5.shouldReconnect ? _this5._reconnect() : _this5.clearListeners();
      });
    }

    /**
     * When a new message was received
     *
     * @method _onMessage
     *
     * @param  {Event}   event
     *
     * @return {void}
     *
     * @private
     */

  }, {
    key: '_onMessage',
    value: function _onMessage(event) {
      var _this6 = this;

      this.options.encoder.decode(event.data, function (decodeError, packet) {
        if (decodeError) {
          {
            Debug('packet dropped, decode error %o', decodeError);
          }
          return;
        }
        _this6._handleMessage(packet);
      });
    }

    /**
     * Handles the message packet based upon it's type
     *
     * @method _handleMessage
     *
     * @param  {Object}       packet
     *
     * @return {void}
     *
     * @private
     */

  }, {
    key: '_handleMessage',
    value: function _handleMessage(packet) {
      if (wsp_browser.isOpenPacket(packet)) {
        {
          Debug('open packet');
        }
        this._handleOpen(packet);
        return;
      }

      if (wsp_browser.isJoinAckPacket(packet)) {
        {
          Debug('join ack packet');
        }
        this._handleJoinAck(packet);
        return;
      }

      if (wsp_browser.isJoinErrorPacket(packet)) {
        {
          Debug('join error packet');
        }
        this._handleJoinError(packet);
        return;
      }

      if (wsp_browser.isLeaveAckPacket(packet)) {
        {
          Debug('leave ack packet');
        }
        this._handleLeaveAck(packet);
        return;
      }

      if (wsp_browser.isLeaveErrorPacket(packet)) {
        {
          Debug('leave error packet');
        }
        this._handleLeaveError(packet);
        return;
      }

      if (wsp_browser.isLeavePacket(packet)) {
        {
          Debug('leave packet');
        }
        this._handleServerLeave(packet);
        return;
      }

      if (wsp_browser.isEventPacket(packet)) {
        {
          Debug('event packet');
        }
        this._handleEvent(packet);
        return;
      }

      if (wsp_browser.isPongPacket(packet)) {
        {
          Debug('pong packet');
        }
        return;
      }

      {
        Debug('invalid packet type %d', packet.t);
      }
    }

    /**
     * Emits the open emit and send subscription packets
     * for pre-existing subscriptions
     *
     * @method _handleOpen
     *
     * @param  {Object}    packet
     *
     * @return {void}
     *
     * @private
     */

  }, {
    key: '_handleOpen',
    value: function _handleOpen(packet) {
      var _this7 = this;

      this._connectionState = 'open';
      this.emit('open', packet.d);

      /**
       * Setup a timer to ping the server, telling
       * client is awake
       */
      this._pingTimer = setInterval(function () {
        _this7.sendPacket(wsp_browser.pingPacket());
      }, packet.d.clientInterval);

      /**
       * Sending packets to make pending subscriptions
       */
      {
        Debug('processing pre connection subscriptions %o', Object.keys(this.subscriptions));
      }

      this._subscriptionsIterator(function (subscription) {
        _this7._sendSubscriptionPacket(subscription.topic);
      });
    }

    /**
     * Handles the join acknowledgement for a subscription
     *
     * @method _handleJoinAck
     *
     * @param  {Object}       packet
     *
     * @return {void}
     *
     * @private
     */

  }, {
    key: '_handleJoinAck',
    value: function _handleJoinAck(packet) {
      this._ensureSubscription(packet, function (socket) {
        return socket.joinAck();
      });
    }

    /**
     * Handles the join error for a subscription
     *
     * @method _handleJoinError
     *
     * @param  {Object}         packet
     *
     * @return {void}
     *
     * @private
     */

  }, {
    key: '_handleJoinError',
    value: function _handleJoinError(packet) {
      this._ensureSubscription(packet, function (socket, packet) {
        return socket.joinError(packet.d);
      });
    }

    /**
     * Acknowledges the subscription leave
     *
     * @method _handleLeaveAck
     *
     * @param  {Object}        packet
     *
     * @return {void}
     *
     * @private
     */

  }, {
    key: '_handleLeaveAck',
    value: function _handleLeaveAck(packet) {
      this._ensureSubscription(packet, function (socket) {
        return socket.leaveAck();
      });
    }

    /**
     * Handles leave error for a subscription
     *
     * @method _handleLeaveError
     *
     * @param  {Object}          packet
     *
     * @return {void}
     *
     * @private
     */

  }, {
    key: '_handleLeaveError',
    value: function _handleLeaveError(packet) {
      this._ensureSubscription(packet, function (socket, packet) {
        return socket.leaveError(packet.d);
      });
    }

    /**
     * Handles when server initiates the subscription leave
     *
     * @method _handleServerLeave
     *
     * @param  {Object}           packet
     *
     * @return {void}
     *
     * @private
     */

  }, {
    key: '_handleServerLeave',
    value: function _handleServerLeave(packet) {
      this._ensureSubscription(packet, function (socket, packet) {
        return socket.leaveAck();
      });
    }

    /**
     * Handles the event packet for a subscription
     *
     * @method _handleEvent
     *
     * @param  {Object}     packet
     *
     * @return {void}
     *
     * @private
     */

  }, {
    key: '_handleEvent',
    value: function _handleEvent(packet) {
      this._ensureSubscription(packet, function (socket, packet) {
        return socket.serverEvent(packet.d);
      });
    }

    /**
     * Sends the subscription packet for a given topic
     *
     * @method sendSubscriptionPacket
     *
     * @param  {String}               topic
     *
     * @return {void}
     *
     * @private
     */

  }, {
    key: '_sendSubscriptionPacket',
    value: function _sendSubscriptionPacket(topic) {
      {
        Debug('initiating subscription for %s topic with server', topic);
      }
      this.sendPacket(wsp_browser.joinPacket(topic));
    }

    /**
     * Instantiate the websocket connection
     *
     * @method connect
     *
     * @return {void}
     */

  }, {
    key: 'connect',
    value: function connect() {
      var _this8 = this;

      var query = stringify(_extends({}, this.options.query, this._extendedQuery));
      var url = query ? this._url + '?' + query : this._url;

      {
        Debug('creating socket connection on %s url', url);
      }

      this.ws = new window.WebSocket(url);
      this.ws.onclose = function (event) {
        return _this8._onClose(event);
      };
      this.ws.onerror = function (event) {
        return _this8._onError(event);
      };
      this.ws.onopen = function (event) {
        return _this8._onOpen(event);
      };
      this.ws.onmessage = function (event) {
        return _this8._onMessage(event);
      };

      return this;
    }

    /**
     * Writes the payload on the open connection
     *
     * @method write
     *
     * @param  {String} payload
     *
     * @return {void}
     */

  }, {
    key: 'write',
    value: function write(payload) {
      if (this.ws.readyState !== window.WebSocket.OPEN) {
        {
          Debug('connection is not in open state, current state %s', this.ws.readyState);
        }
        return;
      }

      this.ws.send(payload);
    }

    /**
     * Sends a packet by encoding it first
     *
     * @method _sendPacket
     *
     * @param  {Object}    packet
     *
     * @return {void}
     */

  }, {
    key: 'sendPacket',
    value: function sendPacket(packet) {
      this._packetsQueue.push(packet);
      this._processQueue();
    }

    /**
     * Returns the subscription instance for a given topic
     *
     * @method getSubscription
     *
     * @param  {String}        topic
     *
     * @return {Socket}
     */

  }, {
    key: 'getSubscription',
    value: function getSubscription(topic) {
      return this.subscriptions[topic];
    }

    /**
     * Returns a boolean telling, whether connection has
     * a subscription for a given topic or not
     *
     * @method hasSubcription
     *
     * @param  {String}       topic
     *
     * @return {Boolean}
     */

  }, {
    key: 'hasSubcription',
    value: function hasSubcription(topic) {
      return !!this.getSubscription(topic);
    }

    /**
     * Create a new subscription with the server
     *
     * @method subscribe
     *
     * @param  {String}  topic
     *
     * @return {Socket}
     */

  }, {
    key: 'subscribe',
    value: function subscribe(topic) {
      if (!topic || typeof topic !== 'string') {
        throw new Error('subscribe method expects topic to be a valid string');
      }

      if (this.subscriptions[topic]) {
        throw new Error('Cannot subscribe to same topic twice. Instead use getSubscription');
      }

      var socket = new Socket(topic, this);
      socket.on('close', this.removeSubscription);

      /**
       * Storing reference to the socket
       */
      this.subscriptions[topic] = socket;

      /**
       * Sending join request to the server, the subscription will
       * be considered ready, once server acknowledges it
       */
      if (this._connectionState === 'open') {
        this._sendSubscriptionPacket(topic);
      }

      return socket;
    }

    /**
     * Sends event for a given topic
     *
     * @method sendEvent
     *
     * @param  {String}  topic
     * @param  {String}  event
     * @param  {Mixed}  data
     *
     * @return {void}
     *
     * @throws {Error} If topic or event are not passed
     * @throws {Error} If there is no active subscription for the given topic
     */

  }, {
    key: 'sendEvent',
    value: function sendEvent(topic, event, data) {
      if (!topic || !event) {
        throw new Error('topic and event name is required to call sendEvent method');
      }

      /**
       * Make sure there is an active subscription for the topic. Though server will
       * bounce the message, there is no point in hammering it
       */
      var subscription = this.getSubscription(topic);
      if (!subscription) {
        throw new Error('There is no active subscription for ' + topic + ' topic');
      }

      /**
       * If subscription state is not open, then we should not publish
       * messages.
       *
       * The reason we have this check on connection and not socket,
       * is coz we don't want anyone to use the connection object
       * and send packets, even when subscription is closed.
       */
      if (subscription.state !== 'open') {
        throw new Error('Cannot emit since subscription socket is in ' + this.state + ' state');
      }

      {
        Debug('sending event on %s topic', topic);
      }

      this.sendPacket(wsp_browser.eventPacket(topic, event, data));
    }

    /**
     * Use JWT token to authenticate the user
     *
     * @method withJwtToken
     *
     * @param {String} token
     *
     * @chainable
     */

  }, {
    key: 'withJwtToken',
    value: function withJwtToken(token) {
      this._extendedQuery.token = token;
      return this;
    }

    /**
     * Use basic auth credentials to login the user
     *
     * @method withBasicAuth
     *
     * @param  {String}  username
     * @param  {String}  password
     *
     * @chainable
     */

  }, {
    key: 'withBasicAuth',
    value: function withBasicAuth(username, password) {
      this._extendedQuery.basic = window.btoa(username + ':' + password);
      return this;
    }

    /**
     * Use personal API token to authenticate the user
     *
     * @method withApiToken
     *
     * @param {String} token
     *
     * @return {String}
     */

  }, {
    key: 'withApiToken',
    value: function withApiToken(token) {
      this._extendedQuery.token = token;
      return this;
    }

    /**
     * Forcefully close the connection
     *
     * @method close
     *
     * @return {void}
     */

  }, {
    key: 'close',
    value: function close() {
      this._connectionState = 'terminated';
      this.ws.close();
    }
  }, {
    key: 'shouldReconnect',
    get: function get$$1() {
      return this._connectionState !== 'terminated' && this.options.reconnection && this.options.reconnectionAttempts > this._reconnectionAttempts;
    }
  }]);
  return Connection;
}(emittery);

function index (url, options) {
  return new Connection(url, options);
}

return index;

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
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
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
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
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
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

/***/ "./resources/assets/scripts/chat.js":
/*!******************************************!*\
  !*** ./resources/assets/scripts/chat.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _adonisjs_websocket_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adonisjs/websocket-client */ "./node_modules/@adonisjs/websocket-client/dist/Ws.browser.js");
/* harmony import */ var _adonisjs_websocket_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_adonisjs_websocket_client__WEBPACK_IMPORTED_MODULE_1__);


var isConnected = false;
var ws = null;
var chat = null;
var isTyping = false;
var messageInput = document.querySelector('#message');
var chatForm = document.querySelector('#chat-form');
var messagesContainer = document.querySelector('#messages-container');
messagesContainer.scrollTop = messagesContainer.scrollHeight;
var topic = location.pathname.replace('/channels/', '');
ws = _adonisjs_websocket_client__WEBPACK_IMPORTED_MODULE_1___default()().connect();
ws.on('open', function () {
  console.log('open');
  isConnected = true;
  subscribeToChannel();
});
ws.on('error', function () {
  console.log('ws error');
  isConnected = false;
});
ws.on('close', function () {
  console.log('ws close');
  isConnected = false;
});

var subscribeToChannel = function subscribeToChannel() {
  chat = ws.subscribe("chat:".concat(topic));
  chat.on('ready', function () {
    chat.emit('connected');
  });
  chat.on('error', function (error) {
    console.log('chat error', error);
  });
  chat.on('close', function () {
    console.log('chat close');
    chat.close();
  });
  chat.on('message', function (message) {
    var articleNode = document.createElement('article');
    articleNode.classList.add('chat-message', 'media', 'has-background-light');
    var mediaContentNode = document.createElement('div');
    mediaContentNode.classList.add('media-content');
    var contentNode = document.createElement('div');
    contentNode.classList.add('content');
    var paragraphNode = document.createElement('p');
    var strongNode = document.createElement('strong');
    var smallNode = document.createElement('small');
    var br1Node = document.createElement('br');
    var br2Node = document.createElement('br');
    var messageValue = document.createTextNode(message.message.body);
    strongNode.innerHTML = message.username + ' ';
    smallNode.innerHTML = message.deliveredAt;
    paragraphNode.appendChild(strongNode);
    paragraphNode.appendChild(smallNode);
    paragraphNode.appendChild(br1Node);
    paragraphNode.appendChild(messageValue);
    paragraphNode.appendChild(br2Node);
    contentNode.appendChild(paragraphNode);
    mediaContentNode.appendChild(contentNode);
    articleNode.appendChild(mediaContentNode);
    messagesContainer.appendChild(articleNode);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  });
  chat.on('typing', function (userTyping) {
    var articleNode = document.createElement('article');
    articleNode.classList.add('chat-message', 'media', 'has-background-light', "typing-".concat(userTyping.replace(/\s/g, '')));
    var mediaContentNode = document.createElement('div');
    mediaContentNode.classList.add('media-content');
    var contentNode = document.createElement('div');
    contentNode.classList.add('content');
    var paragraphNode = document.createElement('p');
    var messageValue = document.createTextNode("".concat(userTyping, " is typing ..."));
    paragraphNode.appendChild(messageValue);
    contentNode.appendChild(paragraphNode);
    mediaContentNode.appendChild(contentNode);
    articleNode.appendChild(mediaContentNode);
    messagesContainer.appendChild(articleNode);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  });
  chat.on('stopTyping', function (userTyping) {
    document.querySelector(".typing-".concat(userTyping)).remove();
  });
};

messageInput.addEventListener('input', function (event) {
  if (!isTyping) {
    isTyping = true;
    chat.emit('typing');
  }

  var lastTypingTime = new Date().getTime();
  setTimeout(function () {
    var typingTimer = new Date().getTime();
    var timeDiff = typingTimer - lastTypingTime;

    if (timeDiff >= 4000 && isTyping) {
      chat.emit('stopTyping');
      isTyping = false;
    }
  }, 4000);
});
chatForm.addEventListener('submit', function (event) {
  event.preventDefault();
  if (messageInput.value.length) chat.emit('message', {
    body: messageInput.value,
    channel: topic
  });
  chat.emit('stopTyping');
  isTyping = false;
  messageInput.value = '';
  messageInput.focus();
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhZG9uaXNqcy93ZWJzb2NrZXQtY2xpZW50L2Rpc3QvV3MuYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvY2hhdC5qcyJdLCJuYW1lcyI6WyJpc0Nvbm5lY3RlZCIsIndzIiwiY2hhdCIsImlzVHlwaW5nIiwibWVzc2FnZUlucHV0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2hhdEZvcm0iLCJtZXNzYWdlc0NvbnRhaW5lciIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsInRvcGljIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInJlcGxhY2UiLCJXcyIsImNvbm5lY3QiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJzdWJzY3JpYmVUb0NoYW5uZWwiLCJzdWJzY3JpYmUiLCJlbWl0IiwiZXJyb3IiLCJjbG9zZSIsIm1lc3NhZ2UiLCJhcnRpY2xlTm9kZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJtZWRpYUNvbnRlbnROb2RlIiwiY29udGVudE5vZGUiLCJwYXJhZ3JhcGhOb2RlIiwic3Ryb25nTm9kZSIsInNtYWxsTm9kZSIsImJyMU5vZGUiLCJicjJOb2RlIiwibWVzc2FnZVZhbHVlIiwiY3JlYXRlVGV4dE5vZGUiLCJib2R5IiwiaW5uZXJIVE1MIiwidXNlcm5hbWUiLCJkZWxpdmVyZWRBdCIsImFwcGVuZENoaWxkIiwidXNlclR5cGluZyIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImxhc3RUeXBpbmdUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJzZXRUaW1lb3V0IiwidHlwaW5nVGltZXIiLCJ0aW1lRGlmZiIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJsZW5ndGgiLCJjaGFubmVsIiwiZm9jdXMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLENBQUMsS0FBNEQ7QUFDN0QsQ0FBQyxTQUNtRTtBQUNwRSxDQUFDLHFCQUFxQjs7QUFFdEI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkMsZ0JBQWdCOztBQUU3RDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1GQUFtRixtRUFBbUU7QUFDdEo7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtGQUFrRixtRUFBbUU7QUFDcko7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLENBQUM7O0FBRUQ7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1FQUFtRSxtRUFBbUU7QUFDdEk7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLHVDQUF1QztBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFD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QVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7O0FDdkx0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxLQUFLO0FBQ0wsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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SSxRQUFRLENBQUN1QyxnQkFBVCxDQUEwQixRQUExQixFQUFvQyxVQUFDQyxLQUFELEVBQVc7QUFDN0NBLE9BQUssQ0FBQ08sY0FBTjtBQUVBLE1BQUlsRCxZQUFZLENBQUNtRCxLQUFiLENBQW1CQyxNQUF2QixFQUNFdEQsSUFBSSxDQUFDb0IsSUFBTCxDQUFVLFNBQVYsRUFBcUI7QUFDbkJpQixRQUFJLEVBQUVuQyxZQUFZLENBQUNtRCxLQURBO0FBRW5CRSxXQUFPLEVBQUU5QztBQUZVLEdBQXJCO0FBS0ZULE1BQUksQ0FBQ29CLElBQUwsQ0FBVSxZQUFWO0FBQ0FuQixVQUFRLEdBQUcsS0FBWDtBQUVBQyxjQUFZLENBQUNtRCxLQUFiLEdBQXFCLEVBQXJCO0FBQ0FuRCxjQUFZLENBQUNzRCxLQUFiO0FBRUQsQ0FmRCxFIiwiZmlsZSI6ImNoYXQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvY2hhdC5qc1wiKTtcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcblx0KGdsb2JhbC5hZG9uaXMgPSBnbG9iYWwuYWRvbmlzIHx8IHt9LCBnbG9iYWwuYWRvbmlzLldzID0gZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iajtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xufTtcblxudmFyIGFzeW5jVG9HZW5lcmF0b3IgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZ2VuID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgZnVuY3Rpb24gc3RlcChrZXksIGFyZykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBzdGVwKFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgc3RlcChcInRocm93XCIsIGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0ZXAoXCJuZXh0XCIpO1xuICAgIH0pO1xuICB9O1xufTtcblxudmFyIGNsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbnZhciBjcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbnZhciBpbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cbnZhciBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG52YXIgdG9Db25zdW1hYmxlQXJyYXkgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuXG4gICAgcmV0dXJuIGFycjI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oYXJyKTtcbiAgfVxufTtcblxudmFyIGFueU1hcCA9IG5ldyBXZWFrTWFwKCk7XG52YXIgZXZlbnRzTWFwID0gbmV3IFdlYWtNYXAoKTtcbnZhciByZXNvbHZlZFByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcblxuZnVuY3Rpb24gYXNzZXJ0RXZlbnROYW1lKGV2ZW50TmFtZSkge1xuXHRpZiAodHlwZW9mIGV2ZW50TmFtZSAhPT0gJ3N0cmluZycpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdldmVudE5hbWUgbXVzdCBiZSBhIHN0cmluZycpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGFzc2VydExpc3RlbmVyKGxpc3RlbmVyKSB7XG5cdGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblx0fVxufVxuXG5mdW5jdGlvbiBnZXRMaXN0ZW5lcnMoaW5zdGFuY2UsIGV2ZW50TmFtZSkge1xuXHR2YXIgZXZlbnRzID0gZXZlbnRzTWFwLmdldChpbnN0YW5jZSk7XG5cdGlmICghZXZlbnRzLmhhcyhldmVudE5hbWUpKSB7XG5cdFx0ZXZlbnRzLnNldChldmVudE5hbWUsIG5ldyBTZXQoKSk7XG5cdH1cblxuXHRyZXR1cm4gZXZlbnRzLmdldChldmVudE5hbWUpO1xufVxuXG52YXIgRW1pdHRlcnkgPSBmdW5jdGlvbiAoKSB7XG5cdGZ1bmN0aW9uIEVtaXR0ZXJ5KCkge1xuXHRcdGNsYXNzQ2FsbENoZWNrKHRoaXMsIEVtaXR0ZXJ5KTtcblxuXHRcdGFueU1hcC5zZXQodGhpcywgbmV3IFNldCgpKTtcblx0XHRldmVudHNNYXAuc2V0KHRoaXMsIG5ldyBNYXAoKSk7XG5cdH1cblxuXHRjcmVhdGVDbGFzcyhFbWl0dGVyeSwgW3tcblx0XHRrZXk6ICdvbicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIG9uKGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcblx0XHRcdGFzc2VydEV2ZW50TmFtZShldmVudE5hbWUpO1xuXHRcdFx0YXNzZXJ0TGlzdGVuZXIobGlzdGVuZXIpO1xuXHRcdFx0Z2V0TGlzdGVuZXJzKHRoaXMsIGV2ZW50TmFtZSkuYWRkKGxpc3RlbmVyKTtcblx0XHRcdHJldHVybiB0aGlzLm9mZi5iaW5kKHRoaXMsIGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ29mZicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIG9mZihldmVudE5hbWUsIGxpc3RlbmVyKSB7XG5cdFx0XHRhc3NlcnRFdmVudE5hbWUoZXZlbnROYW1lKTtcblx0XHRcdGFzc2VydExpc3RlbmVyKGxpc3RlbmVyKTtcblx0XHRcdGdldExpc3RlbmVycyh0aGlzLCBldmVudE5hbWUpLmRlbGV0ZShsaXN0ZW5lcik7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnb25jZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIG9uY2UoZXZlbnROYW1lKSB7XG5cdFx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcblx0XHRcdFx0YXNzZXJ0RXZlbnROYW1lKGV2ZW50TmFtZSk7XG5cdFx0XHRcdHZhciBvZmYgPSBfdGhpcy5vbihldmVudE5hbWUsIGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0XHRcdFx0b2ZmKCk7XG5cdFx0XHRcdFx0cmVzb2x2ZShkYXRhKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdlbWl0Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIF9yZWYgPSBhc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTMoZXZlbnROYW1lLCBldmVudERhdGEpIHtcblx0XHRcdFx0dmFyIF90aGlzMiA9IHRoaXM7XG5cblx0XHRcdFx0dmFyIGxpc3RlbmVycywgYW55TGlzdGVuZXJzLCBzdGF0aWNMaXN0ZW5lcnMsIHN0YXRpY0FueUxpc3RlbmVycztcblx0XHRcdFx0cmV0dXJuIHJlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUzJChfY29udGV4dDMpIHtcblx0XHRcdFx0XHR3aGlsZSAoMSkge1xuXHRcdFx0XHRcdFx0c3dpdGNoIChfY29udGV4dDMucHJldiA9IF9jb250ZXh0My5uZXh0KSB7XG5cdFx0XHRcdFx0XHRcdGNhc2UgMDpcblx0XHRcdFx0XHRcdFx0XHRhc3NlcnRFdmVudE5hbWUoZXZlbnROYW1lKTtcblxuXHRcdFx0XHRcdFx0XHRcdGxpc3RlbmVycyA9IGdldExpc3RlbmVycyh0aGlzLCBldmVudE5hbWUpO1xuXHRcdFx0XHRcdFx0XHRcdGFueUxpc3RlbmVycyA9IGFueU1hcC5nZXQodGhpcyk7XG5cdFx0XHRcdFx0XHRcdFx0c3RhdGljTGlzdGVuZXJzID0gW10uY29uY2F0KHRvQ29uc3VtYWJsZUFycmF5KGxpc3RlbmVycykpO1xuXHRcdFx0XHRcdFx0XHRcdHN0YXRpY0FueUxpc3RlbmVycyA9IFtdLmNvbmNhdCh0b0NvbnN1bWFibGVBcnJheShhbnlMaXN0ZW5lcnMpKTtcblx0XHRcdFx0XHRcdFx0XHRfY29udGV4dDMubmV4dCA9IDc7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlc29sdmVkUHJvbWlzZTtcblxuXHRcdFx0XHRcdFx0XHRjYXNlIDc6XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIF9jb250ZXh0My5hYnJ1cHQoJ3JldHVybicsIFByb21pc2UuYWxsKFtdLmNvbmNhdCh0b0NvbnN1bWFibGVBcnJheShzdGF0aWNMaXN0ZW5lcnMubWFwKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBfcmVmMiA9IGFzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKGxpc3RlbmVyKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiByZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdoaWxlICgxKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgMDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIWxpc3RlbmVycy5oYXMobGlzdGVuZXIpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfY29udGV4dC5uZXh0ID0gMjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBfY29udGV4dC5hYnJ1cHQoJ3JldHVybicsIGxpc3RlbmVyKGV2ZW50RGF0YSkpO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgMjpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAnZW5kJzpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSwgX2NhbGxlZSwgX3RoaXMyKTtcblx0XHRcdFx0XHRcdFx0XHRcdH0pKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChfeDMpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIF9yZWYyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRcdH0oKSkpLCB0b0NvbnN1bWFibGVBcnJheShzdGF0aWNBbnlMaXN0ZW5lcnMubWFwKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBfcmVmMyA9IGFzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlMihsaXN0ZW5lcikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTIkKF9jb250ZXh0Mikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdoaWxlICgxKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzd2l0Y2ggKF9jb250ZXh0Mi5wcmV2ID0gX2NvbnRleHQyLm5leHQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAwOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmICghYW55TGlzdGVuZXJzLmhhcyhsaXN0ZW5lcikpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9jb250ZXh0Mi5uZXh0ID0gMjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBfY29udGV4dDIuYWJydXB0KCdyZXR1cm4nLCBsaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50RGF0YSkpO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgMjpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAnZW5kJzpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gX2NvbnRleHQyLnN0b3AoKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sIF9jYWxsZWUyLCBfdGhpczIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSkpO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24gKF94NCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gX3JlZjMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdFx0fSgpKSkpKSk7XG5cblx0XHRcdFx0XHRcdFx0Y2FzZSA4OlxuXHRcdFx0XHRcdFx0XHRjYXNlICdlbmQnOlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBfY29udGV4dDMuc3RvcCgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgX2NhbGxlZTMsIHRoaXMpO1xuXHRcdFx0fSkpO1xuXG5cdFx0XHRmdW5jdGlvbiBlbWl0KF94LCBfeDIpIHtcblx0XHRcdFx0cmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGVtaXQ7XG5cdFx0fSgpXG5cdH0sIHtcblx0XHRrZXk6ICdlbWl0U2VyaWFsJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIF9yZWY0ID0gYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU0KGV2ZW50TmFtZSwgZXZlbnREYXRhKSB7XG5cdFx0XHRcdHZhciBsaXN0ZW5lcnMsIGFueUxpc3RlbmVycywgc3RhdGljTGlzdGVuZXJzLCBzdGF0aWNBbnlMaXN0ZW5lcnMsIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24sIF9kaWRJdGVyYXRvckVycm9yLCBfaXRlcmF0b3JFcnJvciwgX2l0ZXJhdG9yLCBfc3RlcCwgbGlzdGVuZXIsIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yLCBfZGlkSXRlcmF0b3JFcnJvcjIsIF9pdGVyYXRvckVycm9yMiwgX2l0ZXJhdG9yMiwgX3N0ZXAyLCBfbGlzdGVuZXI7XG5cblx0XHRcdFx0cmV0dXJuIHJlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU0JChfY29udGV4dDQpIHtcblx0XHRcdFx0XHR3aGlsZSAoMSkge1xuXHRcdFx0XHRcdFx0c3dpdGNoIChfY29udGV4dDQucHJldiA9IF9jb250ZXh0NC5uZXh0KSB7XG5cdFx0XHRcdFx0XHRcdGNhc2UgMDpcblx0XHRcdFx0XHRcdFx0XHRhc3NlcnRFdmVudE5hbWUoZXZlbnROYW1lKTtcblxuXHRcdFx0XHRcdFx0XHRcdGxpc3RlbmVycyA9IGdldExpc3RlbmVycyh0aGlzLCBldmVudE5hbWUpO1xuXHRcdFx0XHRcdFx0XHRcdGFueUxpc3RlbmVycyA9IGFueU1hcC5nZXQodGhpcyk7XG5cdFx0XHRcdFx0XHRcdFx0c3RhdGljTGlzdGVuZXJzID0gW10uY29uY2F0KHRvQ29uc3VtYWJsZUFycmF5KGxpc3RlbmVycykpO1xuXHRcdFx0XHRcdFx0XHRcdHN0YXRpY0FueUxpc3RlbmVycyA9IFtdLmNvbmNhdCh0b0NvbnN1bWFibGVBcnJheShhbnlMaXN0ZW5lcnMpKTtcblx0XHRcdFx0XHRcdFx0XHRfY29udGV4dDQubmV4dCA9IDc7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlc29sdmVkUHJvbWlzZTtcblxuXHRcdFx0XHRcdFx0XHRjYXNlIDc6XG5cdFx0XHRcdFx0XHRcdFx0LyogZXNsaW50LWRpc2FibGUgbm8tYXdhaXQtaW4tbG9vcCAqL1xuXHRcdFx0XHRcdFx0XHRcdF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdFx0X2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdFx0X2NvbnRleHQ0LnByZXYgPSAxMDtcblx0XHRcdFx0XHRcdFx0XHRfaXRlcmF0b3IgPSBzdGF0aWNMaXN0ZW5lcnNbU3ltYm9sLml0ZXJhdG9yXSgpO1xuXG5cdFx0XHRcdFx0XHRcdGNhc2UgMTI6XG5cdFx0XHRcdFx0XHRcdFx0aWYgKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRfY29udGV4dDQubmV4dCA9IDIwO1xuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0bGlzdGVuZXIgPSBfc3RlcC52YWx1ZTtcblxuXHRcdFx0XHRcdFx0XHRcdGlmICghbGlzdGVuZXJzLmhhcyhsaXN0ZW5lcikpIHtcblx0XHRcdFx0XHRcdFx0XHRcdF9jb250ZXh0NC5uZXh0ID0gMTc7XG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRfY29udGV4dDQubmV4dCA9IDE3O1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBsaXN0ZW5lcihldmVudERhdGEpO1xuXG5cdFx0XHRcdFx0XHRcdGNhc2UgMTc6XG5cdFx0XHRcdFx0XHRcdFx0X2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0X2NvbnRleHQ0Lm5leHQgPSAxMjtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdFx0XHRjYXNlIDIwOlxuXHRcdFx0XHRcdFx0XHRcdF9jb250ZXh0NC5uZXh0ID0gMjY7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRcdFx0Y2FzZSAyMjpcblx0XHRcdFx0XHRcdFx0XHRfY29udGV4dDQucHJldiA9IDIyO1xuXHRcdFx0XHRcdFx0XHRcdF9jb250ZXh0NC50MCA9IF9jb250ZXh0NFsnY2F0Y2gnXSgxMCk7XG5cdFx0XHRcdFx0XHRcdFx0X2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdF9pdGVyYXRvckVycm9yID0gX2NvbnRleHQ0LnQwO1xuXG5cdFx0XHRcdFx0XHRcdGNhc2UgMjY6XG5cdFx0XHRcdFx0XHRcdFx0X2NvbnRleHQ0LnByZXYgPSAyNjtcblx0XHRcdFx0XHRcdFx0XHRfY29udGV4dDQucHJldiA9IDI3O1xuXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcblx0XHRcdFx0XHRcdFx0XHRcdF9pdGVyYXRvci5yZXR1cm4oKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Y2FzZSAyOTpcblx0XHRcdFx0XHRcdFx0XHRfY29udGV4dDQucHJldiA9IDI5O1xuXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFfZGlkSXRlcmF0b3JFcnJvcikge1xuXHRcdFx0XHRcdFx0XHRcdFx0X2NvbnRleHQ0Lm5leHQgPSAzMjtcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdHRocm93IF9pdGVyYXRvckVycm9yO1xuXG5cdFx0XHRcdFx0XHRcdGNhc2UgMzI6XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIF9jb250ZXh0NC5maW5pc2goMjkpO1xuXG5cdFx0XHRcdFx0XHRcdGNhc2UgMzM6XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIF9jb250ZXh0NC5maW5pc2goMjYpO1xuXG5cdFx0XHRcdFx0XHRcdGNhc2UgMzQ6XG5cdFx0XHRcdFx0XHRcdFx0X2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdF9kaWRJdGVyYXRvckVycm9yMiA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdF9pdGVyYXRvckVycm9yMiA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0XHRfY29udGV4dDQucHJldiA9IDM3O1xuXHRcdFx0XHRcdFx0XHRcdF9pdGVyYXRvcjIgPSBzdGF0aWNBbnlMaXN0ZW5lcnNbU3ltYm9sLml0ZXJhdG9yXSgpO1xuXG5cdFx0XHRcdFx0XHRcdGNhc2UgMzk6XG5cdFx0XHRcdFx0XHRcdFx0aWYgKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gKF9zdGVwMiA9IF9pdGVyYXRvcjIubmV4dCgpKS5kb25lKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRfY29udGV4dDQubmV4dCA9IDQ3O1xuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0X2xpc3RlbmVyID0gX3N0ZXAyLnZhbHVlO1xuXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFhbnlMaXN0ZW5lcnMuaGFzKF9saXN0ZW5lcikpIHtcblx0XHRcdFx0XHRcdFx0XHRcdF9jb250ZXh0NC5uZXh0ID0gNDQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRfY29udGV4dDQubmV4dCA9IDQ0O1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBfbGlzdGVuZXIoZXZlbnROYW1lLCBldmVudERhdGEpO1xuXG5cdFx0XHRcdFx0XHRcdGNhc2UgNDQ6XG5cdFx0XHRcdFx0XHRcdFx0X2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdF9jb250ZXh0NC5uZXh0ID0gMzk7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRcdFx0Y2FzZSA0Nzpcblx0XHRcdFx0XHRcdFx0XHRfY29udGV4dDQubmV4dCA9IDUzO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0XHRcdGNhc2UgNDk6XG5cdFx0XHRcdFx0XHRcdFx0X2NvbnRleHQ0LnByZXYgPSA0OTtcblx0XHRcdFx0XHRcdFx0XHRfY29udGV4dDQudDEgPSBfY29udGV4dDRbJ2NhdGNoJ10oMzcpO1xuXHRcdFx0XHRcdFx0XHRcdF9kaWRJdGVyYXRvckVycm9yMiA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0X2l0ZXJhdG9yRXJyb3IyID0gX2NvbnRleHQ0LnQxO1xuXG5cdFx0XHRcdFx0XHRcdGNhc2UgNTM6XG5cdFx0XHRcdFx0XHRcdFx0X2NvbnRleHQ0LnByZXYgPSA1Mztcblx0XHRcdFx0XHRcdFx0XHRfY29udGV4dDQucHJldiA9IDU0O1xuXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiAmJiBfaXRlcmF0b3IyLnJldHVybikge1xuXHRcdFx0XHRcdFx0XHRcdFx0X2l0ZXJhdG9yMi5yZXR1cm4oKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Y2FzZSA1Njpcblx0XHRcdFx0XHRcdFx0XHRfY29udGV4dDQucHJldiA9IDU2O1xuXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFfZGlkSXRlcmF0b3JFcnJvcjIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdF9jb250ZXh0NC5uZXh0ID0gNTk7XG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHR0aHJvdyBfaXRlcmF0b3JFcnJvcjI7XG5cblx0XHRcdFx0XHRcdFx0Y2FzZSA1OTpcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gX2NvbnRleHQ0LmZpbmlzaCg1Nik7XG5cblx0XHRcdFx0XHRcdFx0Y2FzZSA2MDpcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gX2NvbnRleHQ0LmZpbmlzaCg1Myk7XG5cblx0XHRcdFx0XHRcdFx0Y2FzZSA2MTpcblx0XHRcdFx0XHRcdFx0Y2FzZSAnZW5kJzpcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gX2NvbnRleHQ0LnN0b3AoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIF9jYWxsZWU0LCB0aGlzLCBbWzEwLCAyMiwgMjYsIDM0XSwgWzI3LCwgMjksIDMzXSwgWzM3LCA0OSwgNTMsIDYxXSwgWzU0LCwgNTYsIDYwXV0pO1xuXHRcdFx0fSkpO1xuXG5cdFx0XHRmdW5jdGlvbiBlbWl0U2VyaWFsKF94NSwgX3g2KSB7XG5cdFx0XHRcdHJldHVybiBfcmVmNC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZW1pdFNlcmlhbDtcblx0XHR9KClcblx0fSwge1xuXHRcdGtleTogJ29uQW55Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gb25BbnkobGlzdGVuZXIpIHtcblx0XHRcdGFzc2VydExpc3RlbmVyKGxpc3RlbmVyKTtcblx0XHRcdGFueU1hcC5nZXQodGhpcykuYWRkKGxpc3RlbmVyKTtcblx0XHRcdHJldHVybiB0aGlzLm9mZkFueS5iaW5kKHRoaXMsIGxpc3RlbmVyKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdvZmZBbnknLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBvZmZBbnkobGlzdGVuZXIpIHtcblx0XHRcdGFzc2VydExpc3RlbmVyKGxpc3RlbmVyKTtcblx0XHRcdGFueU1hcC5nZXQodGhpcykuZGVsZXRlKGxpc3RlbmVyKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdjbGVhckxpc3RlbmVycycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNsZWFyTGlzdGVuZXJzKGV2ZW50TmFtZSkge1xuXHRcdFx0aWYgKHR5cGVvZiBldmVudE5hbWUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGdldExpc3RlbmVycyh0aGlzLCBldmVudE5hbWUpLmNsZWFyKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRhbnlNYXAuZ2V0KHRoaXMpLmNsZWFyKCk7XG5cdFx0XHRcdHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IHRydWU7XG5cdFx0XHRcdHZhciBfZGlkSXRlcmF0b3JFcnJvcjMgPSBmYWxzZTtcblx0XHRcdFx0dmFyIF9pdGVyYXRvckVycm9yMyA9IHVuZGVmaW5lZDtcblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGZvciAodmFyIF9pdGVyYXRvcjMgPSBldmVudHNNYXAuZ2V0KHRoaXMpLnZhbHVlcygpW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXAzOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gKF9zdGVwMyA9IF9pdGVyYXRvcjMubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSB0cnVlKSB7XG5cdFx0XHRcdFx0XHR2YXIgbGlzdGVuZXJzID0gX3N0ZXAzLnZhbHVlO1xuXG5cdFx0XHRcdFx0XHRsaXN0ZW5lcnMuY2xlYXIoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdF9kaWRJdGVyYXRvckVycm9yMyA9IHRydWU7XG5cdFx0XHRcdFx0X2l0ZXJhdG9yRXJyb3IzID0gZXJyO1xuXHRcdFx0XHR9IGZpbmFsbHkge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zICYmIF9pdGVyYXRvcjMucmV0dXJuKSB7XG5cdFx0XHRcdFx0XHRcdF9pdGVyYXRvcjMucmV0dXJuKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBmaW5hbGx5IHtcblx0XHRcdFx0XHRcdGlmIChfZGlkSXRlcmF0b3JFcnJvcjMpIHtcblx0XHRcdFx0XHRcdFx0dGhyb3cgX2l0ZXJhdG9yRXJyb3IzO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2xpc3RlbmVyQ291bnQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW5lckNvdW50KGV2ZW50TmFtZSkge1xuXHRcdFx0aWYgKHR5cGVvZiBldmVudE5hbWUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdHJldHVybiBhbnlNYXAuZ2V0KHRoaXMpLnNpemUgKyBnZXRMaXN0ZW5lcnModGhpcywgZXZlbnROYW1lKS5zaXplO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHlwZW9mIGV2ZW50TmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0YXNzZXJ0RXZlbnROYW1lKGV2ZW50TmFtZSk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBjb3VudCA9IGFueU1hcC5nZXQodGhpcykuc2l6ZTtcblxuXHRcdFx0dmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ID0gdHJ1ZTtcblx0XHRcdHZhciBfZGlkSXRlcmF0b3JFcnJvcjQgPSBmYWxzZTtcblx0XHRcdHZhciBfaXRlcmF0b3JFcnJvcjQgPSB1bmRlZmluZWQ7XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdGZvciAodmFyIF9pdGVyYXRvcjQgPSBldmVudHNNYXAuZ2V0KHRoaXMpLnZhbHVlcygpW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA0OyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ID0gKF9zdGVwNCA9IF9pdGVyYXRvcjQubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjQgPSB0cnVlKSB7XG5cdFx0XHRcdFx0dmFyIHZhbHVlID0gX3N0ZXA0LnZhbHVlO1xuXG5cdFx0XHRcdFx0Y291bnQgKz0gdmFsdWUuc2l6ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdF9kaWRJdGVyYXRvckVycm9yNCA9IHRydWU7XG5cdFx0XHRcdF9pdGVyYXRvckVycm9yNCA9IGVycjtcblx0XHRcdH0gZmluYWxseSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNCAmJiBfaXRlcmF0b3I0LnJldHVybikge1xuXHRcdFx0XHRcdFx0X2l0ZXJhdG9yNC5yZXR1cm4oKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZmluYWxseSB7XG5cdFx0XHRcdFx0aWYgKF9kaWRJdGVyYXRvckVycm9yNCkge1xuXHRcdFx0XHRcdFx0dGhyb3cgX2l0ZXJhdG9yRXJyb3I0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gY291bnQ7XG5cdFx0fVxuXHR9XSk7XG5cdHJldHVybiBFbWl0dGVyeTtcbn0oKTtcblxuLy8gU3ViY2xhc3MgdXNlZCB0byBlbmNvdXJhZ2UgVFMgdXNlcnMgdG8gdHlwZSB0aGVpciBldmVudHMuXG5cblxuRW1pdHRlcnkuVHlwZWQgPSBmdW5jdGlvbiAoX0VtaXR0ZXJ5KSB7XG5cdGluaGVyaXRzKF9jbGFzcywgX0VtaXR0ZXJ5KTtcblxuXHRmdW5jdGlvbiBfY2xhc3MoKSB7XG5cdFx0Y2xhc3NDYWxsQ2hlY2sodGhpcywgX2NsYXNzKTtcblx0XHRyZXR1cm4gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX2NsYXNzLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoX2NsYXNzKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cdH1cblxuXHRyZXR1cm4gX2NsYXNzO1xufShFbWl0dGVyeSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRW1pdHRlcnkuVHlwZWQsICdUeXBlZCcsIHtcblx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdHZhbHVlOiB1bmRlZmluZWRcbn0pO1xuXG52YXIgZW1pdHRlcnkgPSBFbWl0dGVyeTtcblxudmFyIHN0cmljdFVyaUVuY29kZSA9IGZ1bmN0aW9uIHN0cmljdFVyaUVuY29kZShzdHIpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoL1shJygpKl0vZywgZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4gJyUnICsgeC5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuICB9KTtcbn07XG5cbmZ1bmN0aW9uIGVuY29kZXJGb3JBcnJheUZvcm1hdChvcHRpb25zKSB7XG5cdHN3aXRjaCAob3B0aW9ucy5hcnJheUZvcm1hdCkge1xuXHRcdGNhc2UgJ2luZGV4Jzpcblx0XHRcdHJldHVybiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgaW5kZXgpIHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlID09PSBudWxsID8gW2VuY29kZShrZXksIG9wdGlvbnMpLCAnWycsIGluZGV4LCAnXSddLmpvaW4oJycpIDogW2VuY29kZShrZXksIG9wdGlvbnMpLCAnWycsIGVuY29kZShpbmRleCwgb3B0aW9ucyksICddPScsIGVuY29kZSh2YWx1ZSwgb3B0aW9ucyldLmpvaW4oJycpO1xuXHRcdFx0fTtcblx0XHRjYXNlICdicmFja2V0Jzpcblx0XHRcdHJldHVybiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWUgPT09IG51bGwgPyBlbmNvZGUoa2V5LCBvcHRpb25zKSA6IFtlbmNvZGUoa2V5LCBvcHRpb25zKSwgJ1tdPScsIGVuY29kZSh2YWx1ZSwgb3B0aW9ucyldLmpvaW4oJycpO1xuXHRcdFx0fTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZSA9PT0gbnVsbCA/IGVuY29kZShrZXksIG9wdGlvbnMpIDogW2VuY29kZShrZXksIG9wdGlvbnMpLCAnPScsIGVuY29kZSh2YWx1ZSwgb3B0aW9ucyldLmpvaW4oJycpO1xuXHRcdFx0fTtcblx0fVxufVxuXG5mdW5jdGlvbiBlbmNvZGUodmFsdWUsIG9wdGlvbnMpIHtcblx0aWYgKG9wdGlvbnMuZW5jb2RlKSB7XG5cdFx0cmV0dXJuIG9wdGlvbnMuc3RyaWN0ID8gc3RyaWN0VXJpRW5jb2RlKHZhbHVlKSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbnZhciBzdHJpbmdpZnkgPSBmdW5jdGlvbiBzdHJpbmdpZnkob2JqLCBvcHRpb25zKSB7XG5cdHZhciBkZWZhdWx0cyQkMSA9IHtcblx0XHRlbmNvZGU6IHRydWUsXG5cdFx0c3RyaWN0OiB0cnVlLFxuXHRcdGFycmF5Rm9ybWF0OiAnbm9uZSdcblx0fTtcblxuXHRvcHRpb25zID0gX2V4dGVuZHMoZGVmYXVsdHMkJDEsIG9wdGlvbnMpO1xuXG5cdGlmIChvcHRpb25zLnNvcnQgPT09IGZhbHNlKSB7XG5cdFx0b3B0aW9ucy5zb3J0ID0gZnVuY3Rpb24gKCkge307XG5cdH1cblxuXHR2YXIgZm9ybWF0dGVyID0gZW5jb2RlckZvckFycmF5Rm9ybWF0KG9wdGlvbnMpO1xuXG5cdHJldHVybiBvYmogPyBPYmplY3Qua2V5cyhvYmopLnNvcnQob3B0aW9ucy5zb3J0KS5tYXAoZnVuY3Rpb24gKGtleSkge1xuXHRcdHZhciB2YWx1ZSA9IG9ialtrZXldO1xuXG5cdFx0aWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cblx0XHRpZiAodmFsdWUgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBlbmNvZGUoa2V5LCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdHZhciByZXN1bHQgPSBbXTtcblxuXHRcdFx0dmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZTtcblx0XHRcdHZhciBfZGlkSXRlcmF0b3JFcnJvcjIgPSBmYWxzZTtcblx0XHRcdHZhciBfaXRlcmF0b3JFcnJvcjIgPSB1bmRlZmluZWQ7XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdGZvciAodmFyIF9pdGVyYXRvcjIgPSB2YWx1ZS5zbGljZSgpW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXAyOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gKF9zdGVwMiA9IF9pdGVyYXRvcjIubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlKSB7XG5cdFx0XHRcdFx0dmFyIHZhbHVlMiA9IF9zdGVwMi52YWx1ZTtcblxuXHRcdFx0XHRcdGlmICh2YWx1ZTIgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmVzdWx0LnB1c2goZm9ybWF0dGVyKGtleSwgdmFsdWUyLCByZXN1bHQubGVuZ3RoKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRfZGlkSXRlcmF0b3JFcnJvcjIgPSB0cnVlO1xuXHRcdFx0XHRfaXRlcmF0b3JFcnJvcjIgPSBlcnI7XG5cdFx0XHR9IGZpbmFsbHkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgJiYgX2l0ZXJhdG9yMi5yZXR1cm4pIHtcblx0XHRcdFx0XHRcdF9pdGVyYXRvcjIucmV0dXJuKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGZpbmFsbHkge1xuXHRcdFx0XHRcdGlmIChfZGlkSXRlcmF0b3JFcnJvcjIpIHtcblx0XHRcdFx0XHRcdHRocm93IF9pdGVyYXRvckVycm9yMjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHJlc3VsdC5qb2luKCcmJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVuY29kZShrZXksIG9wdGlvbnMpICsgJz0nICsgZW5jb2RlKHZhbHVlLCBvcHRpb25zKTtcblx0fSkuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuIHgubGVuZ3RoID4gMDtcblx0fSkuam9pbignJicpIDogJyc7XG59O1xuXG52YXIgY29tbW9uanNHbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHt9O1xuXG5mdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbiwgbW9kdWxlKSB7XG5cdHJldHVybiBtb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcbn1cblxudmFyIHdzcF9icm93c2VyID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuICAhZnVuY3Rpb24gKHQsIGUpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGUoKTtcbiAgfShjb21tb25qc0dsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSBfdHlwZW9mKFN5bWJvbC5pdGVyYXRvcikgPyBmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB0ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih0KTtcbiAgICB9IDogZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiB0ICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIHQuY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiB0ICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiB0ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih0KTtcbiAgICB9LFxuICAgICAgICBlID0geyBPUEVOOiAwLCBKT0lOOiAxLCBMRUFWRTogMiwgSk9JTl9BQ0s6IDMsIEpPSU5fRVJST1I6IDQsIExFQVZFX0FDSzogNSwgTEVBVkVfRVJST1I6IDYsIEVWRU5UOiA3LCBQSU5HOiA4LCBQT05HOiA5IH07ZnVuY3Rpb24gbyh0LCBlLCBvKSB7XG4gICAgICByZXR1cm4gby5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICFmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICAgIGlmICghdCB8fCBcInN0cmluZ1wiICE9IHR5cGVvZiB0KSB0aHJvdyBuZXcgRXJyb3IoZSk7XG4gICAgICAgIH0oZVt0XSwgXCJleHBlY3RlZCBcIiArIHQgKyBcIiB0byBiZSBhIHZhbGlkIHN0cmluZ1wiKTtcbiAgICAgIH0pLCB7IHQ6IHQsIGQ6IGUgfTtcbiAgICB9dmFyIG4gPSB7fTtyZXR1cm4gT2JqZWN0LmtleXMoZSkuZm9yRWFjaChmdW5jdGlvbiAobykge1xuICAgICAgdmFyIGkgPSBvLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXlxcd3xfKFxcdykvZywgZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgICAgcmV0dXJuIGUgPyBlLnRvVXBwZXJDYXNlKCkgOiB0LnRvVXBwZXJDYXNlKCk7XG4gICAgICB9KTtuW1wiaXNcIiArIGkgKyBcIlBhY2tldFwiXSA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHJldHVybiAhKCFuIHx8IFwib2JqZWN0XCIgIT09ICh2b2lkIDAgPT09IG4gPyBcInVuZGVmaW5lZFwiIDogdChuKSkgfHwgbi50ICE9PSBlW29dKTtcbiAgICAgIH07XG4gICAgfSksIG4uaGFzVG9waWMgPSBmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuICEhKHQgJiYgdC5kICYmIHQuZC50b3BpYyk7XG4gICAgfSwgbi5pc1ZhbGlkSm9pblBhY2tldCA9IG4uaGFzVG9waWMsIG4uaXNWYWxpZExlYXZlUGFja2V0ID0gbi5oYXNUb3BpYywgbi5pc1ZhbGlkRXZlbnRQYWNrZXQgPSBuLmhhc1RvcGljLCBuLmpvaW5QYWNrZXQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIG8oZS5KT0lOLCB7IHRvcGljOiB0IH0sIFtcInRvcGljXCJdKTtcbiAgICB9LCBuLmxlYXZlUGFja2V0ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiBvKGUuTEVBVkUsIHsgdG9waWM6IHQgfSwgW1widG9waWNcIl0pO1xuICAgIH0sIG4uam9pbkFja1BhY2tldCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gbyhlLkpPSU5fQUNLLCB7IHRvcGljOiB0IH0sIFtcInRvcGljXCJdKTtcbiAgICB9LCBuLmpvaW5FcnJvclBhY2tldCA9IGZ1bmN0aW9uICh0LCBuKSB7XG4gICAgICByZXR1cm4gbyhlLkpPSU5fRVJST1IsIHsgdG9waWM6IHQsIG1lc3NhZ2U6IG4gfSwgW1widG9waWNcIiwgXCJtZXNzYWdlXCJdKTtcbiAgICB9LCBuLmxlYXZlQWNrUGFja2V0ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiBvKGUuTEVBVkVfQUNLLCB7IHRvcGljOiB0IH0sIFtcInRvcGljXCJdKTtcbiAgICB9LCBuLmxlYXZlRXJyb3JQYWNrZXQgPSBmdW5jdGlvbiAodCwgbikge1xuICAgICAgcmV0dXJuIG8oZS5MRUFWRV9FUlJPUiwgeyB0b3BpYzogdCwgbWVzc2FnZTogbiB9LCBbXCJ0b3BpY1wiLCBcIm1lc3NhZ2VcIl0pO1xuICAgIH0sIG4uZXZlbnRQYWNrZXQgPSBmdW5jdGlvbiAodCwgbiwgaSkge1xuICAgICAgcmV0dXJuIG8oZS5FVkVOVCwgeyB0b3BpYzogdCwgZXZlbnQ6IG4sIGRhdGE6IGkgPSBpIHx8IFwiXCIgfSwgW1widG9waWNcIiwgXCJldmVudFwiXSk7XG4gICAgfSwgbi5waW5nUGFja2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHsgdDogZS5QSU5HIH07XG4gICAgfSwgbi5wb25nUGFja2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHsgdDogZS5QT05HIH07XG4gICAgfSwgX2V4dGVuZHMoeyBjb2RlczogZSB9LCBuKTtcbiAgfSk7XG59KTtcblxuLyoqXG4gKiBIZWxwZXJzLlxuICovXG5cbnZhciBzID0gMTAwMDtcbnZhciBtID0gcyAqIDYwO1xudmFyIGggPSBtICogNjA7XG52YXIgZCA9IGggKiAyNDtcbnZhciB5ID0gZCAqIDM2NS4yNTtcblxuLyoqXG4gKiBQYXJzZSBvciBmb3JtYXQgdGhlIGdpdmVuIGB2YWxgLlxuICpcbiAqIE9wdGlvbnM6XG4gKlxuICogIC0gYGxvbmdgIHZlcmJvc2UgZm9ybWF0dGluZyBbZmFsc2VdXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEB0aHJvd3Mge0Vycm9yfSB0aHJvdyBhbiBlcnJvciBpZiB2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIG51bWJlclxuICogQHJldHVybiB7U3RyaW5nfE51bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxudmFyIG1zID0gZnVuY3Rpb24gbXModmFsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHZhbCk7XG4gIGlmICh0eXBlID09PSAnc3RyaW5nJyAmJiB2YWwubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBwYXJzZSQxKHZhbCk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgaXNOYU4odmFsKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sb25nID8gZm10TG9uZyh2YWwpIDogZm10U2hvcnQodmFsKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ3ZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgdmFsaWQgbnVtYmVyLiB2YWw9JyArIEpTT04uc3RyaW5naWZ5KHZhbCkpO1xufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gYHN0cmAgYW5kIHJldHVybiBtaWxsaXNlY29uZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2UkMShzdHIpIHtcbiAgc3RyID0gU3RyaW5nKHN0cik7XG4gIGlmIChzdHIubGVuZ3RoID4gMTAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBtYXRjaCA9IC9eKCg/OlxcZCspP1xcLj9cXGQrKSAqKG1pbGxpc2Vjb25kcz98bXNlY3M/fG1zfHNlY29uZHM/fHNlY3M/fHN8bWludXRlcz98bWlucz98bXxob3Vycz98aHJzP3xofGRheXM/fGR8eWVhcnM/fHlycz98eSk/JC9pLmV4ZWMoc3RyKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbiA9IHBhcnNlRmxvYXQobWF0Y2hbMV0pO1xuICB2YXIgdHlwZSA9IChtYXRjaFsyXSB8fCAnbXMnKS50b0xvd2VyQ2FzZSgpO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgY2FzZSAneWVhcic6XG4gICAgY2FzZSAneXJzJzpcbiAgICBjYXNlICd5cic6XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gbiAqIHk7XG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiBuICogZDtcbiAgICBjYXNlICdob3Vycyc6XG4gICAgY2FzZSAnaG91cic6XG4gICAgY2FzZSAnaHJzJzpcbiAgICBjYXNlICdocic6XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gbiAqIGg7XG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW5zJzpcbiAgICBjYXNlICdtaW4nOlxuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIG4gKiBtO1xuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjcyc6XG4gICAgY2FzZSAnc2VjJzpcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiBuICogcztcbiAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxuICAgIGNhc2UgJ21pbGxpc2Vjb25kJzpcbiAgICBjYXNlICdtc2Vjcyc6XG4gICAgY2FzZSAnbXNlYyc6XG4gICAgY2FzZSAnbXMnOlxuICAgICAgcmV0dXJuIG47XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydCBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRTaG9ydChtcykge1xuICBpZiAobXMgPj0gZCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gZCkgKyAnZCc7XG4gIH1cbiAgaWYgKG1zID49IGgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGgpICsgJ2gnO1xuICB9XG4gIGlmIChtcyA+PSBtKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBtKSArICdtJztcbiAgfVxuICBpZiAobXMgPj0gcykge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gcykgKyAncyc7XG4gIH1cbiAgcmV0dXJuIG1zICsgJ21zJztcbn1cblxuLyoqXG4gKiBMb25nIGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdExvbmcobXMpIHtcbiAgcmV0dXJuIHBsdXJhbChtcywgZCwgJ2RheScpIHx8IHBsdXJhbChtcywgaCwgJ2hvdXInKSB8fCBwbHVyYWwobXMsIG0sICdtaW51dGUnKSB8fCBwbHVyYWwobXMsIHMsICdzZWNvbmQnKSB8fCBtcyArICcgbXMnO1xufVxuXG4vKipcbiAqIFBsdXJhbGl6YXRpb24gaGVscGVyLlxuICovXG5cbmZ1bmN0aW9uIHBsdXJhbChtcywgbiwgbmFtZSkge1xuICBpZiAobXMgPCBuKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChtcyA8IG4gKiAxLjUpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihtcyAvIG4pICsgJyAnICsgbmFtZTtcbiAgfVxuICByZXR1cm4gTWF0aC5jZWlsKG1zIC8gbikgKyAnICcgKyBuYW1lICsgJ3MnO1xufVxuXG52YXIgZGVidWcgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBjb21tb24gbG9naWMgZm9yIGJvdGggdGhlIE5vZGUuanMgYW5kIHdlYiBicm93c2VyXG4gICAqIGltcGxlbWVudGF0aW9ucyBvZiBgZGVidWcoKWAuXG4gICAqXG4gICAqIEV4cG9zZSBgZGVidWcoKWAgYXMgdGhlIG1vZHVsZS5cbiAgICovXG5cbiAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3JlYXRlRGVidWcuZGVidWcgPSBjcmVhdGVEZWJ1Z1snZGVmYXVsdCddID0gY3JlYXRlRGVidWc7XG4gIGV4cG9ydHMuY29lcmNlID0gY29lcmNlO1xuICBleHBvcnRzLmRpc2FibGUgPSBkaXNhYmxlO1xuICBleHBvcnRzLmVuYWJsZSA9IGVuYWJsZTtcbiAgZXhwb3J0cy5lbmFibGVkID0gZW5hYmxlZDtcbiAgZXhwb3J0cy5odW1hbml6ZSA9IG1zO1xuXG4gIC8qKlxuICAgKiBUaGUgY3VycmVudGx5IGFjdGl2ZSBkZWJ1ZyBtb2RlIG5hbWVzLCBhbmQgbmFtZXMgdG8gc2tpcC5cbiAgICovXG5cbiAgZXhwb3J0cy5uYW1lcyA9IFtdO1xuICBleHBvcnRzLnNraXBzID0gW107XG5cbiAgLyoqXG4gICAqIE1hcCBvZiBzcGVjaWFsIFwiJW5cIiBoYW5kbGluZyBmdW5jdGlvbnMsIGZvciB0aGUgZGVidWcgXCJmb3JtYXRcIiBhcmd1bWVudC5cbiAgICpcbiAgICogVmFsaWQga2V5IG5hbWVzIGFyZSBhIHNpbmdsZSwgbG93ZXIgb3IgdXBwZXItY2FzZSBsZXR0ZXIsIGkuZS4gXCJuXCIgYW5kIFwiTlwiLlxuICAgKi9cblxuICBleHBvcnRzLmZvcm1hdHRlcnMgPSB7fTtcblxuICAvKipcbiAgICogUHJldmlvdXMgbG9nIHRpbWVzdGFtcC5cbiAgICovXG5cbiAgdmFyIHByZXZUaW1lO1xuXG4gIC8qKlxuICAgKiBTZWxlY3QgYSBjb2xvci5cbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cblxuICBmdW5jdGlvbiBzZWxlY3RDb2xvcihuYW1lc3BhY2UpIHtcbiAgICB2YXIgaGFzaCA9IDAsXG4gICAgICAgIGk7XG5cbiAgICBmb3IgKGkgaW4gbmFtZXNwYWNlKSB7XG4gICAgICBoYXNoID0gKGhhc2ggPDwgNSkgLSBoYXNoICsgbmFtZXNwYWNlLmNoYXJDb2RlQXQoaSk7XG4gICAgICBoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuICAgIH1cblxuICAgIHJldHVybiBleHBvcnRzLmNvbG9yc1tNYXRoLmFicyhoYXNoKSAlIGV4cG9ydHMuY29sb3JzLmxlbmd0aF07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgZGVidWdnZXIgd2l0aCB0aGUgZ2l2ZW4gYG5hbWVzcGFjZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VcbiAgICogQHJldHVybiB7RnVuY3Rpb259XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZURlYnVnKG5hbWVzcGFjZSkge1xuXG4gICAgZnVuY3Rpb24gZGVidWcoKSB7XG4gICAgICAvLyBkaXNhYmxlZD9cbiAgICAgIGlmICghZGVidWcuZW5hYmxlZCkgcmV0dXJuO1xuXG4gICAgICB2YXIgc2VsZiA9IGRlYnVnO1xuXG4gICAgICAvLyBzZXQgYGRpZmZgIHRpbWVzdGFtcFxuICAgICAgdmFyIGN1cnIgPSArbmV3IERhdGUoKTtcbiAgICAgIHZhciBtcyQkMSA9IGN1cnIgLSAocHJldlRpbWUgfHwgY3Vycik7XG4gICAgICBzZWxmLmRpZmYgPSBtcyQkMTtcbiAgICAgIHNlbGYucHJldiA9IHByZXZUaW1lO1xuICAgICAgc2VsZi5jdXJyID0gY3VycjtcbiAgICAgIHByZXZUaW1lID0gY3VycjtcblxuICAgICAgLy8gdHVybiB0aGUgYGFyZ3VtZW50c2AgaW50byBhIHByb3BlciBBcnJheVxuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIH1cblxuICAgICAgYXJnc1swXSA9IGV4cG9ydHMuY29lcmNlKGFyZ3NbMF0pO1xuXG4gICAgICBpZiAoJ3N0cmluZycgIT09IHR5cGVvZiBhcmdzWzBdKSB7XG4gICAgICAgIC8vIGFueXRoaW5nIGVsc2UgbGV0J3MgaW5zcGVjdCB3aXRoICVPXG4gICAgICAgIGFyZ3MudW5zaGlmdCgnJU8nKTtcbiAgICAgIH1cblxuICAgICAgLy8gYXBwbHkgYW55IGBmb3JtYXR0ZXJzYCB0cmFuc2Zvcm1hdGlvbnNcbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICBhcmdzWzBdID0gYXJnc1swXS5yZXBsYWNlKC8lKFthLXpBLVolXSkvZywgZnVuY3Rpb24gKG1hdGNoLCBmb3JtYXQpIHtcbiAgICAgICAgLy8gaWYgd2UgZW5jb3VudGVyIGFuIGVzY2FwZWQgJSB0aGVuIGRvbid0IGluY3JlYXNlIHRoZSBhcnJheSBpbmRleFxuICAgICAgICBpZiAobWF0Y2ggPT09ICclJScpIHJldHVybiBtYXRjaDtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgICAgdmFyIGZvcm1hdHRlciA9IGV4cG9ydHMuZm9ybWF0dGVyc1tmb3JtYXRdO1xuICAgICAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGZvcm1hdHRlcikge1xuICAgICAgICAgIHZhciB2YWwgPSBhcmdzW2luZGV4XTtcbiAgICAgICAgICBtYXRjaCA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIHZhbCk7XG5cbiAgICAgICAgICAvLyBub3cgd2UgbmVlZCB0byByZW1vdmUgYGFyZ3NbaW5kZXhdYCBzaW5jZSBpdCdzIGlubGluZWQgaW4gdGhlIGBmb3JtYXRgXG4gICAgICAgICAgYXJncy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIGluZGV4LS07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIGFwcGx5IGVudi1zcGVjaWZpYyBmb3JtYXR0aW5nIChjb2xvcnMsIGV0Yy4pXG4gICAgICBleHBvcnRzLmZvcm1hdEFyZ3MuY2FsbChzZWxmLCBhcmdzKTtcblxuICAgICAgdmFyIGxvZ0ZuID0gZGVidWcubG9nIHx8IGV4cG9ydHMubG9nIHx8IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSk7XG4gICAgICBsb2dGbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICB9XG5cbiAgICBkZWJ1Zy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG4gICAgZGVidWcuZW5hYmxlZCA9IGV4cG9ydHMuZW5hYmxlZChuYW1lc3BhY2UpO1xuICAgIGRlYnVnLnVzZUNvbG9ycyA9IGV4cG9ydHMudXNlQ29sb3JzKCk7XG4gICAgZGVidWcuY29sb3IgPSBzZWxlY3RDb2xvcihuYW1lc3BhY2UpO1xuXG4gICAgLy8gZW52LXNwZWNpZmljIGluaXRpYWxpemF0aW9uIGxvZ2ljIGZvciBkZWJ1ZyBpbnN0YW5jZXNcbiAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGV4cG9ydHMuaW5pdCkge1xuICAgICAgZXhwb3J0cy5pbml0KGRlYnVnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVidWc7XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyBhIGRlYnVnIG1vZGUgYnkgbmFtZXNwYWNlcy4gVGhpcyBjYW4gaW5jbHVkZSBtb2Rlc1xuICAgKiBzZXBhcmF0ZWQgYnkgYSBjb2xvbiBhbmQgd2lsZGNhcmRzLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBmdW5jdGlvbiBlbmFibGUobmFtZXNwYWNlcykge1xuICAgIGV4cG9ydHMuc2F2ZShuYW1lc3BhY2VzKTtcblxuICAgIGV4cG9ydHMubmFtZXMgPSBbXTtcbiAgICBleHBvcnRzLnNraXBzID0gW107XG5cbiAgICB2YXIgc3BsaXQgPSAodHlwZW9mIG5hbWVzcGFjZXMgPT09ICdzdHJpbmcnID8gbmFtZXNwYWNlcyA6ICcnKS5zcGxpdCgvW1xccyxdKy8pO1xuICAgIHZhciBsZW4gPSBzcGxpdC5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpZiAoIXNwbGl0W2ldKSBjb250aW51ZTsgLy8gaWdub3JlIGVtcHR5IHN0cmluZ3NcbiAgICAgIG5hbWVzcGFjZXMgPSBzcGxpdFtpXS5yZXBsYWNlKC9cXCovZywgJy4qPycpO1xuICAgICAgaWYgKG5hbWVzcGFjZXNbMF0gPT09ICctJykge1xuICAgICAgICBleHBvcnRzLnNraXBzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzLnN1YnN0cigxKSArICckJykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXhwb3J0cy5uYW1lcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcyArICckJykpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIGRlYnVnIG91dHB1dC5cbiAgICpcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgICBleHBvcnRzLmVuYWJsZSgnJyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBtb2RlIG5hbWUgaXMgZW5hYmxlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBmdW5jdGlvbiBlbmFibGVkKG5hbWUpIHtcbiAgICB2YXIgaSwgbGVuO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IGV4cG9ydHMuc2tpcHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGlmIChleHBvcnRzLnNraXBzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBleHBvcnRzLm5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpZiAoZXhwb3J0cy5uYW1lc1tpXS50ZXN0KG5hbWUpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQ29lcmNlIGB2YWxgLlxuICAgKlxuICAgKiBAcGFyYW0ge01peGVkfSB2YWxcbiAgICogQHJldHVybiB7TWl4ZWR9XG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cblxuICBmdW5jdGlvbiBjb2VyY2UodmFsKSB7XG4gICAgaWYgKHZhbCBpbnN0YW5jZW9mIEVycm9yKSByZXR1cm4gdmFsLnN0YWNrIHx8IHZhbC5tZXNzYWdlO1xuICAgIHJldHVybiB2YWw7XG4gIH1cbn0pO1xudmFyIGRlYnVnXzEgPSBkZWJ1Zy5jb2VyY2U7XG52YXIgZGVidWdfMiA9IGRlYnVnLmRpc2FibGU7XG52YXIgZGVidWdfMyA9IGRlYnVnLmVuYWJsZTtcbnZhciBkZWJ1Z180ID0gZGVidWcuZW5hYmxlZDtcbnZhciBkZWJ1Z181ID0gZGVidWcuaHVtYW5pemU7XG52YXIgZGVidWdfNiA9IGRlYnVnLm5hbWVzO1xudmFyIGRlYnVnXzcgPSBkZWJ1Zy5za2lwcztcbnZhciBkZWJ1Z184ID0gZGVidWcuZm9ybWF0dGVycztcblxudmFyIGJyb3dzZXIgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSB3ZWIgYnJvd3NlciBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gICAqXG4gICAqIEV4cG9zZSBgZGVidWcoKWAgYXMgdGhlIG1vZHVsZS5cbiAgICovXG5cbiAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZGVidWc7XG4gIGV4cG9ydHMubG9nID0gbG9nO1xuICBleHBvcnRzLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuICBleHBvcnRzLnNhdmUgPSBzYXZlO1xuICBleHBvcnRzLmxvYWQgPSBsb2FkO1xuICBleHBvcnRzLnVzZUNvbG9ycyA9IHVzZUNvbG9ycztcbiAgZXhwb3J0cy5zdG9yYWdlID0gJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIGNocm9tZSAmJiAndW5kZWZpbmVkJyAhPSB0eXBlb2YgY2hyb21lLnN0b3JhZ2UgPyBjaHJvbWUuc3RvcmFnZS5sb2NhbCA6IGxvY2Fsc3RvcmFnZSgpO1xuXG4gIC8qKlxuICAgKiBDb2xvcnMuXG4gICAqL1xuXG4gIGV4cG9ydHMuY29sb3JzID0gWydsaWdodHNlYWdyZWVuJywgJ2ZvcmVzdGdyZWVuJywgJ2dvbGRlbnJvZCcsICdkb2RnZXJibHVlJywgJ2RhcmtvcmNoaWQnLCAnY3JpbXNvbiddO1xuXG4gIC8qKlxuICAgKiBDdXJyZW50bHkgb25seSBXZWJLaXQtYmFzZWQgV2ViIEluc3BlY3RvcnMsIEZpcmVmb3ggPj0gdjMxLFxuICAgKiBhbmQgdGhlIEZpcmVidWcgZXh0ZW5zaW9uIChhbnkgRmlyZWZveCB2ZXJzaW9uKSBhcmUga25vd25cbiAgICogdG8gc3VwcG9ydCBcIiVjXCIgQ1NTIGN1c3RvbWl6YXRpb25zLlxuICAgKlxuICAgKiBUT0RPOiBhZGQgYSBgbG9jYWxTdG9yYWdlYCB2YXJpYWJsZSB0byBleHBsaWNpdGx5IGVuYWJsZS9kaXNhYmxlIGNvbG9yc1xuICAgKi9cblxuICBmdW5jdGlvbiB1c2VDb2xvcnMoKSB7XG4gICAgLy8gTkI6IEluIGFuIEVsZWN0cm9uIHByZWxvYWQgc2NyaXB0LCBkb2N1bWVudCB3aWxsIGJlIGRlZmluZWQgYnV0IG5vdCBmdWxseVxuICAgIC8vIGluaXRpYWxpemVkLiBTaW5jZSB3ZSBrbm93IHdlJ3JlIGluIENocm9tZSwgd2UnbGwganVzdCBkZXRlY3QgdGhpcyBjYXNlXG4gICAgLy8gZXhwbGljaXRseVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucHJvY2VzcyAmJiB3aW5kb3cucHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBpcyB3ZWJraXQ/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE2NDU5NjA2LzM3Njc3M1xuICAgIC8vIGRvY3VtZW50IGlzIHVuZGVmaW5lZCBpbiByZWFjdC1uYXRpdmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvcHVsbC8xNjMyXG4gICAgcmV0dXJuIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuV2Via2l0QXBwZWFyYW5jZSB8fFxuICAgIC8vIGlzIGZpcmVidWc/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5ODEyMC8zNzY3NzNcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuY29uc29sZSAmJiAod2luZG93LmNvbnNvbGUuZmlyZWJ1ZyB8fCB3aW5kb3cuY29uc29sZS5leGNlcHRpb24gJiYgd2luZG93LmNvbnNvbGUudGFibGUpIHx8XG4gICAgLy8gaXMgZmlyZWZveCA+PSB2MzE/XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Ub29scy9XZWJfQ29uc29sZSNTdHlsaW5nX21lc3NhZ2VzXG4gICAgdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvKSAmJiBwYXJzZUludChSZWdFeHAuJDEsIDEwKSA+PSAzMSB8fFxuICAgIC8vIGRvdWJsZSBjaGVjayB3ZWJraXQgaW4gdXNlckFnZW50IGp1c3QgaW4gY2FzZSB3ZSBhcmUgaW4gYSB3b3JrZXJcbiAgICB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvYXBwbGV3ZWJraXRcXC8oXFxkKykvKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXAgJWogdG8gYEpTT04uc3RyaW5naWZ5KClgLCBzaW5jZSBubyBXZWIgSW5zcGVjdG9ycyBkbyB0aGF0IGJ5IGRlZmF1bHQuXG4gICAqL1xuXG4gIGV4cG9ydHMuZm9ybWF0dGVycy5qID0gZnVuY3Rpb24gKHYpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHYpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuICdbVW5leHBlY3RlZEpTT05QYXJzZUVycm9yXTogJyArIGVyci5tZXNzYWdlO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ29sb3JpemUgbG9nIGFyZ3VtZW50cyBpZiBlbmFibGVkLlxuICAgKlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBmdW5jdGlvbiBmb3JtYXRBcmdzKGFyZ3MpIHtcbiAgICB2YXIgdXNlQ29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG5cbiAgICBhcmdzWzBdID0gKHVzZUNvbG9ycyA/ICclYycgOiAnJykgKyB0aGlzLm5hbWVzcGFjZSArICh1c2VDb2xvcnMgPyAnICVjJyA6ICcgJykgKyBhcmdzWzBdICsgKHVzZUNvbG9ycyA/ICclYyAnIDogJyAnKSArICcrJyArIGV4cG9ydHMuaHVtYW5pemUodGhpcy5kaWZmKTtcblxuICAgIGlmICghdXNlQ29sb3JzKSByZXR1cm47XG5cbiAgICB2YXIgYyA9ICdjb2xvcjogJyArIHRoaXMuY29sb3I7XG4gICAgYXJncy5zcGxpY2UoMSwgMCwgYywgJ2NvbG9yOiBpbmhlcml0Jyk7XG5cbiAgICAvLyB0aGUgZmluYWwgXCIlY1wiIGlzIHNvbWV3aGF0IHRyaWNreSwgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBvdGhlclxuICAgIC8vIGFyZ3VtZW50cyBwYXNzZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgJWMsIHNvIHdlIG5lZWQgdG9cbiAgICAvLyBmaWd1cmUgb3V0IHRoZSBjb3JyZWN0IGluZGV4IHRvIGluc2VydCB0aGUgQ1NTIGludG9cbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBsYXN0QyA9IDA7XG4gICAgYXJnc1swXS5yZXBsYWNlKC8lW2EtekEtWiVdL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgaWYgKCclJScgPT09IG1hdGNoKSByZXR1cm47XG4gICAgICBpbmRleCsrO1xuICAgICAgaWYgKCclYycgPT09IG1hdGNoKSB7XG4gICAgICAgIC8vIHdlIG9ubHkgYXJlIGludGVyZXN0ZWQgaW4gdGhlICpsYXN0KiAlY1xuICAgICAgICAvLyAodGhlIHVzZXIgbWF5IGhhdmUgcHJvdmlkZWQgdGhlaXIgb3duKVxuICAgICAgICBsYXN0QyA9IGluZGV4O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYXJncy5zcGxpY2UobGFzdEMsIDAsIGMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEludm9rZXMgYGNvbnNvbGUubG9nKClgIHdoZW4gYXZhaWxhYmxlLlxuICAgKiBOby1vcCB3aGVuIGBjb25zb2xlLmxvZ2AgaXMgbm90IGEgXCJmdW5jdGlvblwiLlxuICAgKlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBmdW5jdGlvbiBsb2coKSB7XG4gICAgLy8gdGhpcyBoYWNrZXJ5IGlzIHJlcXVpcmVkIGZvciBJRTgvOSwgd2hlcmVcbiAgICAvLyB0aGUgYGNvbnNvbGUubG9nYCBmdW5jdGlvbiBkb2Vzbid0IGhhdmUgJ2FwcGx5J1xuICAgIHJldHVybiAnb2JqZWN0JyA9PT0gKHR5cGVvZiBjb25zb2xlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihjb25zb2xlKSkgJiYgY29uc29sZS5sb2cgJiYgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZS5sb2csIGNvbnNvbGUsIGFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cblxuICBmdW5jdGlvbiBzYXZlKG5hbWVzcGFjZXMpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKG51bGwgPT0gbmFtZXNwYWNlcykge1xuICAgICAgICBleHBvcnRzLnN0b3JhZ2UucmVtb3ZlSXRlbSgnZGVidWcnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV4cG9ydHMuc3RvcmFnZS5kZWJ1ZyA9IG5hbWVzcGFjZXM7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIGBuYW1lc3BhY2VzYC5cbiAgICpcbiAgICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG5cbiAgZnVuY3Rpb24gbG9hZCgpIHtcbiAgICB2YXIgcjtcbiAgICB0cnkge1xuICAgICAgciA9IGV4cG9ydHMuc3RvcmFnZS5kZWJ1ZztcbiAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgLy8gSWYgZGVidWcgaXNuJ3Qgc2V0IGluIExTLCBhbmQgd2UncmUgaW4gRWxlY3Ryb24sIHRyeSB0byBsb2FkICRERUJVR1xuICAgIGlmICghciAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2VudicgaW4gcHJvY2Vzcykge1xuICAgICAgciA9IHByb2Nlc3MuZW52LkRFQlVHO1xuICAgIH1cblxuICAgIHJldHVybiByO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBuYW1lc3BhY2VzIGxpc3RlZCBpbiBgbG9jYWxTdG9yYWdlLmRlYnVnYCBpbml0aWFsbHkuXG4gICAqL1xuXG4gIGV4cG9ydHMuZW5hYmxlKGxvYWQoKSk7XG5cbiAgLyoqXG4gICAqIExvY2Fsc3RvcmFnZSBhdHRlbXB0cyB0byByZXR1cm4gdGhlIGxvY2Fsc3RvcmFnZS5cbiAgICpcbiAgICogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBzYWZhcmkgdGhyb3dzXG4gICAqIHdoZW4gYSB1c2VyIGRpc2FibGVzIGNvb2tpZXMvbG9jYWxzdG9yYWdlXG4gICAqIGFuZCB5b3UgYXR0ZW1wdCB0byBhY2Nlc3MgaXQuXG4gICAqXG4gICAqIEByZXR1cm4ge0xvY2FsU3RvcmFnZX1cbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGxvY2Fsc3RvcmFnZSgpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxufSk7XG52YXIgYnJvd3Nlcl8xID0gYnJvd3Nlci5sb2c7XG52YXIgYnJvd3Nlcl8yID0gYnJvd3Nlci5mb3JtYXRBcmdzO1xudmFyIGJyb3dzZXJfMyA9IGJyb3dzZXIuc2F2ZTtcbnZhciBicm93c2VyXzQgPSBicm93c2VyLmxvYWQ7XG52YXIgYnJvd3Nlcl81ID0gYnJvd3Nlci51c2VDb2xvcnM7XG52YXIgYnJvd3Nlcl82ID0gYnJvd3Nlci5zdG9yYWdlO1xudmFyIGJyb3dzZXJfNyA9IGJyb3dzZXIuY29sb3JzO1xuXG52YXIgRGVidWcgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7XG5cbiAgLypcbiAgICogYWRvbmlzLXdlYnNvY2tldC1jbGllbnRcbiAgICpcbiAgICogKGMpIEhhcm1pbmRlciBWaXJrIDx2aXJrQGFkb25pc2pzLmNvbT5cbiAgICpcbiAgICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAgICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gICovXG5cbiAge1xuICAgIHZhciBfRGVidWcgPSBicm93c2VyO1xuICAgIF9EZWJ1Zy5lbmFibGUoJ2Fkb25pczoqJyk7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfRGVidWcoJ2Fkb25pczp3ZWJzb2NrZXQnKTtcbiAgfVxufSk7XG5cbi8qKlxuICogU29ja2V0IGNsYXNzIGhvbGRzIGRldGFpbHMgZm9yIGEgc2luZ2xlIHN1YnNjcmlwdGlvbi4gVGhlIGluc3RhbmNlXG4gKiBvZiB0aGlzIGNsYXNzIGNhbiBiZSB1c2VkIHRvIGV4Y2hhbmdlIG1lc3NhZ2VzIHdpdGggdGhlIHNlcnZlclxuICogb24gYSBnaXZlbiB0b3BpYy5cbiAqXG4gKiBAY2xhc3MgU29ja2V0XG4gKi9cblxudmFyIFNvY2tldCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU29ja2V0KHRvcGljLCBjb25uZWN0aW9uKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgU29ja2V0KTtcblxuICAgIHRoaXMudG9waWMgPSB0b3BpYztcbiAgICB0aGlzLmNvbm5lY3Rpb24gPSBjb25uZWN0aW9uO1xuICAgIHRoaXMuZW1pdHRlciA9IG5ldyBlbWl0dGVyeSgpO1xuICAgIHRoaXMuX3N0YXRlID0gJ3BlbmRpbmcnO1xuICAgIHRoaXMuX2VtaXRCdWZmZXIgPSBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTb2NrZXQgc3RhdGVcbiAgICpcbiAgICogQGF0dHJpYnV0ZSBzdGF0ZVxuICAgKlxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuXG5cbiAgY3JlYXRlQ2xhc3MoU29ja2V0LCBbe1xuICAgIGtleTogJ2pvaW5BY2snLFxuXG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiBzdWJzY3JpcHRpb24gaXMgY29uZmlybWVkIGJ5IHRoZVxuICAgICAqIHNlcnZlclxuICAgICAqXG4gICAgICogQG1ldGhvZCBqb2luQWNrXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBqb2luQWNrKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdGhpcy5zdGF0ZSA9ICdvcGVuJztcbiAgICAgIHRoaXMuZW1pdHRlci5lbWl0KCdyZWFkeScsIHRoaXMpO1xuXG4gICAgICB7XG4gICAgICAgIERlYnVnKCdjbGVhcmluZyBlbWl0IGJ1ZmZlciBmb3IgJXMgdG9waWMgYWZ0ZXIgc3Vic2NyaXB0aW9uIGFjaycsIHRoaXMudG9waWMpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFByb2Nlc3MgcXVldWVkIGV2ZW50c1xuICAgICAgICovXG4gICAgICB0aGlzLl9lbWl0QnVmZmVyLmZvckVhY2goZnVuY3Rpb24gKGJ1Zikge1xuICAgICAgICByZXR1cm4gX3RoaXMuZW1pdChidWYuZXZlbnQsIGJ1Zi5kYXRhKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fZW1pdEJ1ZmZlciA9IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHN1YnNjcmlwdGlvbiBpcyByZWplY3RlZCBieSB0aGUgc2VydmVyXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIGpvaW5FcnJvclxuICAgICAqXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSAgcGFja2V0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdqb2luRXJyb3InLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBqb2luRXJyb3IocGFja2V0KSB7XG4gICAgICB0aGlzLnN0YXRlID0gJ2Vycm9yJztcbiAgICAgIHRoaXMuZW1pdHRlci5lbWl0KCdlcnJvcicsIHBhY2tldCk7XG4gICAgICB0aGlzLnNlcnZlckNsb3NlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gc3Vic2NyaXB0aW9uIGNsb3NlIGlzIGFja25vd2xlZGdlZFxuICAgICAqIGJ5IHRoZSBzZXJ2ZXJcbiAgICAgKlxuICAgICAqIEBtZXRob2QgbGVhdmVBY2tcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2xlYXZlQWNrJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGVhdmVBY2soKSB7XG4gICAgICB0aGlzLnN0YXRlID0gJ2Nsb3NlZCc7XG4gICAgICB0aGlzLnNlcnZlckNsb3NlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCwgd2hlbiBzZXJ2ZXIgcmVqZWN0cyB0byBjbG9zZVxuICAgICAqIHRoZSBzdWJzY3JpcHRpb24uIFRoZSBzdGF0ZSBvZiB0aGUgc29ja2V0IHNob3VsZCBub3RcbiAgICAgKiBjaGFuZ2UgaGVyZVxuICAgICAqXG4gICAgICogQG1ldGhvZCBsZWF2ZUVycm9yXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9ICAgcGFja2V0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdsZWF2ZUVycm9yJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGVhdmVFcnJvcihwYWNrZXQpIHtcbiAgICAgIHRoaXMuZW1pdHRlci5lbWl0KCdsZWF2ZUVycm9yJywgcGFja2V0KTtcbiAgICB9XG5cbiAgICAvKiBpc3RhbmJ1bC1pZ25vcmUgKi9cbiAgICAvKipcbiAgICAgKiBBZGQgYW4gZXZlbnQgbGlzdGVuZXJcbiAgICAgKlxuICAgICAqIEBtZXRob2Qgb25cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbigpIHtcbiAgICAgIHZhciBfZW1pdHRlcjtcblxuICAgICAgKF9lbWl0dGVyID0gdGhpcy5lbWl0dGVyKS5vbi5hcHBseShfZW1pdHRlciwgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICAvKiBpc3RhbmJ1bC1pZ25vcmUgKi9cbiAgICAvKipcbiAgICAgKiBBZGQgYW4gZXZlbnQgbGlzdGVuZXIgZm9yIG9uY2Ugb25seVxuICAgICAqXG4gICAgICogQG1ldGhvZCBvbmNlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ29uY2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbmNlKCkge1xuICAgICAgdmFyIF9lbWl0dGVyMjtcblxuICAgICAgKF9lbWl0dGVyMiA9IHRoaXMuZW1pdHRlcikub25jZS5hcHBseShfZW1pdHRlcjIsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgLyogaXN0YW5idWwtaWdub3JlICovXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGV2ZW50IGxpc3RlbmVyKHMpXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIG9mZlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdvZmYnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvZmYoKSB7XG4gICAgICB2YXIgX2VtaXR0ZXIzO1xuXG4gICAgICAoX2VtaXR0ZXIzID0gdGhpcy5lbWl0dGVyKS5vZmYuYXBwbHkoX2VtaXR0ZXIzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVtaXQgbWVzc2FnZSBvbiB0aGUgc3Vic2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIGVtaXRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gZXZlbnRcbiAgICAgKiBAcGFyYW0gIHtNaXhlZH0gZGF0YVxuICAgICAqXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZW1pdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVtaXQoZXZlbnQsIGRhdGEpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlID09PSAncGVuZGluZycpIHtcbiAgICAgICAgdGhpcy5fZW1pdEJ1ZmZlci5wdXNoKHsgZXZlbnQ6IGV2ZW50LCBkYXRhOiBkYXRhIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29ubmVjdGlvbi5zZW5kRXZlbnQodGhpcy50b3BpYywgZXZlbnQsIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlcyB0aGUgY29ubmVjdGlvbiBhbmQgcmVtb3ZlcyBhbGwgZXhpc3RpbmdcbiAgICAgKiBsaXN0ZW5lcnNcbiAgICAgKlxuICAgICAqIEBtZXRob2Qgc2VydmVyQ2xvc2VcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3NlcnZlckNsb3NlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VydmVyQ2xvc2UoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgcmV0dXJuIHRoaXMuZW1pdHRlci5lbWl0KCdjbG9zZScsIHRoaXMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIuX2VtaXRCdWZmZXIgPSBbXTtcbiAgICAgICAgX3RoaXMyLmVtaXR0ZXIuY2xlYXJMaXN0ZW5lcnMoKTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLl9lbWl0QnVmZmVyID0gW107XG4gICAgICAgIF90aGlzMi5lbWl0dGVyLmNsZWFyTGlzdGVuZXJzKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gYSBuZXcgZXZlbnQgaXMgcmVjZWl2ZWQgZnJvbSB0aGUgc2VydmVyXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIHNlcnZlckV2ZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgIG9wdGlvbnMuZXZlbnRcbiAgICAgKiBAcGFyYW0gIHtNaXhlZH0gICAgb3B0aW9ucy5kYXRhXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdzZXJ2ZXJFdmVudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlcnZlckV2ZW50KF9yZWYpIHtcbiAgICAgIHZhciBldmVudCA9IF9yZWYuZXZlbnQsXG4gICAgICAgICAgZGF0YSA9IF9yZWYuZGF0YTtcblxuICAgICAgdGhpcy5lbWl0dGVyLmVtaXQoZXZlbnQsIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlY2VpdmVkIGVycm9yIG9uIGNvbm5lY3Rpb25cbiAgICAgKlxuICAgICAqIEBtZXRob2Qgc2VydmVyRXJyb3JcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3NlcnZlckVycm9yJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VydmVyRXJyb3IoKSB7XG4gICAgICB0aGlzLnN0YXRlID0gJ2Vycm9yJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyB0aGUgcmVxdWVzdCBvbiBzZXJ2ZXIgdG8gY2xvc2UgdGhlIHN1YnNjcmlwdGlvbiwgd2VcbiAgICAgKiBoYXZlIHRvIHdhaXQgZm9yIGFja25vd2xlZGdtZW50IHRvb1xuICAgICAqXG4gICAgICogQG1ldGhvZCBjbG9zZVxuICAgICAqXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnY2xvc2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSAnY2xvc2luZyc7XG4gICAgICB7XG4gICAgICAgIERlYnVnKCdjbG9zaW5nIHN1YnNjcmlwdGlvbiBmb3IgJXMgdG9waWMgd2l0aCBzZXJ2ZXInLCB0aGlzLnRvcGljKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29ubmVjdGlvbi5zZW5kUGFja2V0KHdzcF9icm93c2VyLmxlYXZlUGFja2V0KHRoaXMudG9waWMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGb3JjZWZ1bGx5IHRlcm1pbmF0aW5nIHRoZSBzdWJzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBtZXRob2QgdGVybWluYXRlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICd0ZXJtaW5hdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0ZXJtaW5hdGUoKSB7XG4gICAgICB0aGlzLmxlYXZlQWNrKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc3RhdGUnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBzb2NrZXQgc3RhdGVcbiAgICAgKi9cbiAgICAsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQkJDEoc3RhdGUpIHtcbiAgICAgIGlmICghdGhpcy5jb25zdHJ1Y3Rvci5zdGF0ZXMuaW5kZXhPZihzdGF0ZSkgPT09IC0xKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihzdGF0ZSArICcgaXMgbm90IGEgdmFsaWQgc29ja2V0IHN0YXRlJyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgc3RhdGljIGFycmF5IG9mIGludGVybmFsIHN0YXRlc1xuICAgICAqXG4gICAgICogQG1ldGhvZCBzdGF0ZXNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqL1xuXG4gIH1dLCBbe1xuICAgIGtleTogJ3N0YXRlcycsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gWydwZW5kaW5nJywgJ29wZW4nLCAnY2xvc2VkJywgJ2Nsb3NpbmcnLCAnZXJyb3InXTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFNvY2tldDtcbn0oKTtcblxuLyoqXG4gKiBhZG9uaXMtd2Vic29ja2V0LWNsaWVudFxuICpcbiAqIChjKSBIYXJtaW5kZXIgVmlyayA8dmlya0BhZG9uaXNqcy5jb20+XG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuKi9cblxuLyoqXG4gKiBUaGUgZGVmYXVsdCBlbmNvZGVyIHRvIGVuY29kZSBwYWNrZXRzLlxuICovXG5cbnZhciBKc29uRW5jb2RlciA9IHtcbiAgbmFtZTogJ2pzb24nLFxuICAvKipcbiAgICogRW5jb2RlIGEgdmFsdWUgYnkgc3RyaW5naWZ5aW5nIGl0XG4gICAqXG4gICAqIEBtZXRob2QgZW5jb2RlXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gICBwYXlsb2FkXG4gICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgKlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgZW5jb2RlOiBmdW5jdGlvbiBlbmNvZGUocGF5bG9hZCwgY2FsbGJhY2spIHtcbiAgICB2YXIgZW5jb2RlZCA9IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgZW5jb2RlZCA9IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuICAgIH1cbiAgICBjYWxsYmFjayhudWxsLCBlbmNvZGVkKTtcbiAgfSxcblxuXG4gIC8qKlxuICAgKiBEZWNvZGUgdmFsdWUgYnkgcGFyc2luZyBpdFxuICAgKlxuICAgKiBAbWV0aG9kIGRlY29kZVxuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgcGF5bG9hZFxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICpcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGRlY29kZTogZnVuY3Rpb24gZGVjb2RlKHBheWxvYWQsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGRlY29kZWQgPSBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgIGRlY29kZWQgPSBKU09OLnBhcnNlKHBheWxvYWQpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuICAgIH1cbiAgICBjYWxsYmFjayhudWxsLCBkZWNvZGVkKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSB3cyBwcm90b2NvbCBiYXNlZCB1cG9uIEhUVFAgb3IgSFRUUFNcbiAqXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICpcbiAqL1xudmFyIHdzUHJvdG9jb2wgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwczonID8gJ3dzcycgOiAnd3MnO1xuXG4vKipcbiAqIENvbm5lY3Rpb24gY2xhc3MgaXMgdXNlZCB0byBtYWtlIGEgVENQL1NvY2tldCBjb25uZWN0aW9uXG4gKiB3aXRoIHRoZSBzZXJ2ZXIuIEl0IHJlbGllcyBvbiBOYXRpdmUgV2Vic29ja2V0IGJyb3dzZXJcbiAqIHN1cHBvcnQuXG4gKlxuICogQGNsYXNzIENvbm5lY3Rpb25cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5cbnZhciBDb25uZWN0aW9uID0gZnVuY3Rpb24gKF9FbWl0dGVyKSB7XG4gIGluaGVyaXRzKENvbm5lY3Rpb24sIF9FbWl0dGVyKTtcblxuICBmdW5jdGlvbiBDb25uZWN0aW9uKHVybCwgb3B0aW9ucykge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIENvbm5lY3Rpb24pO1xuXG4gICAgdmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ29ubmVjdGlvbi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENvbm5lY3Rpb24pKS5jYWxsKHRoaXMpKTtcblxuICAgIHVybCA9IHVybCB8fCB3c1Byb3RvY29sICsgJzovLycgKyB3aW5kb3cubG9jYXRpb24uaG9zdDtcblxuICAgIC8qKlxuICAgICAqIENvbm5lY3Rpb24gb3B0aW9uc1xuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICBfdGhpcy5vcHRpb25zID0gX2V4dGVuZHMoe1xuICAgICAgcGF0aDogJ2Fkb25pcy13cycsXG4gICAgICByZWNvbm5lY3Rpb246IHRydWUsXG4gICAgICByZWNvbm5lY3Rpb25BdHRlbXB0czogMTAsXG4gICAgICByZWNvbm5lY3Rpb25EZWxheTogMTAwMCxcbiAgICAgIHF1ZXJ5OiBudWxsLFxuICAgICAgZW5jb2RlcjogSnNvbkVuY29kZXJcbiAgICB9LCBvcHRpb25zKTtcblxuICAgIHtcbiAgICAgIERlYnVnKCdjb25uZWN0aW9uIG9wdGlvbnMgJW8nLCBfdGhpcy5vcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3RhdGUgY29ubmVjdGlvbiBpcyBpblxuICAgICAqXG4gICAgICogQHR5cGUge1N0cmluZ31cbiAgICAgKi9cbiAgICBfdGhpcy5fY29ubmVjdGlvblN0YXRlID0gJ2lkbGUnO1xuXG4gICAgLyoqXG4gICAgICogTnVtYmVyIG9mIHJlY29ubmVjdGlvbiBhdHRlbXB0cyBiZWluZyBtYWRlXG4gICAgICpcbiAgICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgICAqL1xuICAgIF90aGlzLl9yZWNvbm5lY3Rpb25BdHRlbXB0cyA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBBbGwgcGFja2V0cyBhcmUgc2VudCBpbiBzZXF1ZW5jZSB0byB0aGUgc2VydmVyLiBTbyB3ZSBuZWVkIHRvXG4gICAgICogbWFpbnRhaW4gYSBxdWV1ZSBhbmQgcHJvY2VzcyBvbmUgYXQgYSB0aW1lXG4gICAgICpcbiAgICAgKiBAdHlwZSB7QXJyYXl9XG4gICAgICovXG4gICAgX3RoaXMuX3BhY2tldHNRdWV1ZSA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgdGhlIHF1ZXVlIGlzIGluIHByb2Nlc3NcbiAgICAgKlxuICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAqL1xuICAgIF90aGlzLl9wcm9jZXNzaW5nUXVldWUgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEFzIHBlciBBZG9uaXMgcHJvdG9jb2wsIHRoZSBjbGllbnQgbXVzdCBwaW5nXG4gICAgICogdGhlIHNlcnZlciBhZnRlciB4IGludGVydmFsXG4gICAgICpcbiAgICAgKiBAdHlwZSB7VGltZXJ9XG4gICAgICovXG4gICAgX3RoaXMuX3BpbmdUaW1lciA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBFeHRlbmRlZCBxdWVyeSBpcyBtZXJnZWQgd2l0aCB0aGUgcXVlcnkgcGFyYW1zXG4gICAgICogdXNlciBwYXNzXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIF90aGlzLl9leHRlbmRlZFF1ZXJ5ID0ge307XG5cbiAgICAvKipcbiAgICAgKiBCYXNlIFVSTCBmb3IgdGhlIHdlYnNvY2tldCBjb25uZWN0aW9uXG4gICAgICpcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAqL1xuICAgIF90aGlzLl91cmwgPSB1cmwucmVwbGFjZSgvXFwvJC8sICcnKSArICcvJyArIF90aGlzLm9wdGlvbnMucGF0aDtcblxuICAgIC8qKlxuICAgICAqIFN1YnNjcmlwdGlvbnMgZm9yIGEgc2luZ2xlIGNvbm5lY3Rpb25cbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgX3RoaXMuc3Vic2NyaXB0aW9ucyA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogSGFuZGxlciBjYWxsZWQgd2hlbiBgY2xvc2VgIGlzIGVtaXR0ZWQgZnJvbSB0aGVcbiAgICAgKiBzdWJzY3JpcHRpb25cbiAgICAgKi9cbiAgICBfdGhpcy5yZW1vdmVTdWJzY3JpcHRpb24gPSBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIHRvcGljID0gX3JlZi50b3BpYztcblxuICAgICAgZGVsZXRlIF90aGlzLnN1YnNjcmlwdGlvbnNbdG9waWNdO1xuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXB1dGVkIHZhbHVlIHRvIGRlY2lkZSwgd2hldGhlciBvciBub3QgdG8gcmVjb25uZWN0XG4gICAqXG4gICAqIEBtZXRob2Qgc2hvdWxkUmVjb25uZWN0XG4gICAqXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuXG5cbiAgY3JlYXRlQ2xhc3MoQ29ubmVjdGlvbiwgW3tcbiAgICBrZXk6ICdfY2xlYW51cCcsXG5cblxuICAgIC8qKlxuICAgICAqIENsZWFuIHJlZmVyZW5jZXNcbiAgICAgKlxuICAgICAqIEBtZXRob2QgX2NsZWFudXBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBfY2xlYW51cCgpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fcGluZ1RpbWVyKTtcbiAgICAgIHRoaXMud3MgPSBudWxsO1xuICAgICAgdGhpcy5fcGluZ1RpbWVyID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxscyBhIGNhbGxiYWNrIHBhc3Npbmcgc3Vic2NyaXB0aW9uIHRvIGl0XG4gICAgICpcbiAgICAgKiBAbWV0aG9kIF9zdWJzY3JpcHRpb25zSXRlcmF0b3JcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSAgICAgICAgICAgICBjYWxsYmFja1xuICAgICAqXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ19zdWJzY3JpcHRpb25zSXRlcmF0b3InLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfc3Vic2NyaXB0aW9uc0l0ZXJhdG9yKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgT2JqZWN0LmtleXModGhpcy5zdWJzY3JpcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChzdWIpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKF90aGlzMi5zdWJzY3JpcHRpb25zW3N1Yl0sIHN1Yik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxscyB0aGUgY2FsbGJhY2sgd2hlbiB0aGVyZSBpcyBhIHN1YnNjcmlwdGlvbiBmb3JcbiAgICAgKiB0aGUgdG9waWMgbWVudGlvbmVkIGluIHRoZSBwYWNrZXRcbiAgICAgKlxuICAgICAqIEBtZXRob2QgX2Vuc3VyZVN1YnNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSAgICAgICAgICAgIHBhY2tldFxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSAgICAgICAgICBjYlxuICAgICAqXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ19lbnN1cmVTdWJzY3JpcHRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZW5zdXJlU3Vic2NyaXB0aW9uKHBhY2tldCwgY2IpIHtcbiAgICAgIHZhciBzb2NrZXQgPSB0aGlzLmdldFN1YnNjcmlwdGlvbihwYWNrZXQuZC50b3BpYyk7XG5cbiAgICAgIGlmICghc29ja2V0KSB7XG4gICAgICAgIHtcbiAgICAgICAgICBEZWJ1ZygnY2Fubm90IGNvbnN1bWUgcGFja2V0IHNpbmNlICVzIHRvcGljIGhhcyBubyBhY3RpdmUgc3Vic2NyaXB0aW9uICVqJywgcGFja2V0LmQudG9waWMsIHBhY2tldCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjYihzb2NrZXQsIHBhY2tldCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvY2VzcyB0aGUgcGFja2V0cyBxdWV1ZSBieSBzZW5kaW5nIG9uZSBwYWNrZXQgYXQgYSB0aW1lXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIF9wcm9jZXNzUXVldWVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdfcHJvY2Vzc1F1ZXVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3Byb2Nlc3NRdWV1ZSgpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5fcHJvY2Vzc2luZ1F1ZXVlIHx8ICF0aGlzLl9wYWNrZXRzUXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBUdXJuIG9uIHRoZSBwcm9jZXNzaW5nIGZsYWdcbiAgICAgICAqXG4gICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgICAqL1xuICAgICAgdGhpcy5fcHJvY2Vzc2luZ1F1ZXVlID0gdHJ1ZTtcblxuICAgICAgdGhpcy5vcHRpb25zLmVuY29kZXIuZW5jb2RlKHRoaXMuX3BhY2tldHNRdWV1ZS5zaGlmdCgpLCBmdW5jdGlvbiAoZXJyb3IsIHBheWxvYWQpIHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAge1xuICAgICAgICAgICAgRGVidWcoJ2VuY29kZSBlcnJvciAlaicsIGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzMy53cml0ZShwYXlsb2FkKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVHVybiBvZmYgdGhlIHByb2Nlc3NpbmcgZmxhZyBhbmQgcmUgY2FsbCB0aGUgcHJvY2Vzc1F1ZXVlIHRvIHNlbmRcbiAgICAgICAgICogdGhlIG5leHQgbWVzc2FnZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIF90aGlzMy5fcHJvY2Vzc2luZ1F1ZXVlID0gZmFsc2U7XG4gICAgICAgIF90aGlzMy5fcHJvY2Vzc1F1ZXVlKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcyBzb29uIGFzIGNvbm5lY3Rpb24gaXMgcmVhZHksIHdlIHN0YXJ0IGxpc3RlbmluZ1xuICAgICAqIGZvciBuZXcgbWVzc2FnZVxuICAgICAqXG4gICAgICogQG1ldGhvZCBfb25PcGVuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnX29uT3BlbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9vbk9wZW4oKSB7XG4gICAgICB7XG4gICAgICAgIERlYnVnKCdvcGVuZWQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHJlY2VpdmVkIGNvbm5lY3Rpb24gZXJyb3JcbiAgICAgKlxuICAgICAqIEBtZXRob2QgX29uRXJyb3JcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0V2ZW50fSBldmVudFxuICAgICAqXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ19vbkVycm9yJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX29uRXJyb3IoZXZlbnQpIHtcbiAgICAgIHtcbiAgICAgICAgRGVidWcoJ2Vycm9yICVPJywgZXZlbnQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9zdWJzY3JpcHRpb25zSXRlcmF0b3IoZnVuY3Rpb24gKHN1YnNjcmlwdGlvbikge1xuICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uLnNlcnZlckVycm9yKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBldmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhdGVzIHJlY29ubmVjdCB3aXRoIHRoZSBzZXJ2ZXIgYnkgbW92aW5nXG4gICAgICogYWxsIHN1YnNjcmlwdGlvbnMgdG8gcGVuZGluZyBzdGF0ZVxuICAgICAqXG4gICAgICogQG1ldGhvZCBfcmVjb25uZWN0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnX3JlY29ubmVjdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9yZWNvbm5lY3QoKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgdGhpcy5fcmVjb25uZWN0aW9uQXR0ZW1wdHMrKztcblxuICAgICAgdGhpcy5lbWl0KCdyZWNvbm5lY3QnLCB0aGlzLl9yZWNvbm5lY3Rpb25BdHRlbXB0cyk7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczQuX2Nvbm5lY3Rpb25TdGF0ZSA9ICdyZWNvbm5lY3QnO1xuICAgICAgICBfdGhpczQuY29ubmVjdCgpO1xuICAgICAgfSwgdGhpcy5vcHRpb25zLnJlY29ubmVjdGlvbkRlbGF5ICogdGhpcy5fcmVjb25uZWN0aW9uQXR0ZW1wdHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdoZW4gY29ubmVjdGlvbiBjbG9zZXNcbiAgICAgKlxuICAgICAqIEBtZXRob2QgX29uQ2xvc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0V2ZW50fSBldmVudFxuICAgICAqXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ19vbkNsb3NlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX29uQ2xvc2UoZXZlbnQpIHtcbiAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICB7XG4gICAgICAgIERlYnVnKCdjbG9zaW5nIGZyb20gJXMgc3RhdGUnLCB0aGlzLl9jb25uZWN0aW9uU3RhdGUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9jbGVhbnVwKCk7XG5cbiAgICAgIC8qKlxuICAgICAgICogRm9yY2Ugc3Vic2NyaXB0aW9ucyB0byB0ZXJtaW5hdGVcbiAgICAgICAqL1xuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uc0l0ZXJhdG9yKGZ1bmN0aW9uIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbi50ZXJtaW5hdGUoKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmVtaXQoJ2Nsb3NlJywgdGhpcykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzNS5zaG91bGRSZWNvbm5lY3QgPyBfdGhpczUuX3JlY29ubmVjdCgpIDogX3RoaXM1LmNsZWFyTGlzdGVuZXJzKCk7XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzNS5zaG91bGRSZWNvbm5lY3QgPyBfdGhpczUuX3JlY29ubmVjdCgpIDogX3RoaXM1LmNsZWFyTGlzdGVuZXJzKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaGVuIGEgbmV3IG1lc3NhZ2Ugd2FzIHJlY2VpdmVkXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIF9vbk1lc3NhZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0V2ZW50fSAgIGV2ZW50XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnX29uTWVzc2FnZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9vbk1lc3NhZ2UoZXZlbnQpIHtcbiAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgICB0aGlzLm9wdGlvbnMuZW5jb2Rlci5kZWNvZGUoZXZlbnQuZGF0YSwgZnVuY3Rpb24gKGRlY29kZUVycm9yLCBwYWNrZXQpIHtcbiAgICAgICAgaWYgKGRlY29kZUVycm9yKSB7XG4gICAgICAgICAge1xuICAgICAgICAgICAgRGVidWcoJ3BhY2tldCBkcm9wcGVkLCBkZWNvZGUgZXJyb3IgJW8nLCBkZWNvZGVFcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBfdGhpczYuX2hhbmRsZU1lc3NhZ2UocGFja2V0KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIG1lc3NhZ2UgcGFja2V0IGJhc2VkIHVwb24gaXQncyB0eXBlXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIF9oYW5kbGVNZXNzYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9ICAgICAgIHBhY2tldFxuICAgICAqXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ19oYW5kbGVNZXNzYWdlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZU1lc3NhZ2UocGFja2V0KSB7XG4gICAgICBpZiAod3NwX2Jyb3dzZXIuaXNPcGVuUGFja2V0KHBhY2tldCkpIHtcbiAgICAgICAge1xuICAgICAgICAgIERlYnVnKCdvcGVuIHBhY2tldCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2hhbmRsZU9wZW4ocGFja2V0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAod3NwX2Jyb3dzZXIuaXNKb2luQWNrUGFja2V0KHBhY2tldCkpIHtcbiAgICAgICAge1xuICAgICAgICAgIERlYnVnKCdqb2luIGFjayBwYWNrZXQnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9oYW5kbGVKb2luQWNrKHBhY2tldCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHdzcF9icm93c2VyLmlzSm9pbkVycm9yUGFja2V0KHBhY2tldCkpIHtcbiAgICAgICAge1xuICAgICAgICAgIERlYnVnKCdqb2luIGVycm9yIHBhY2tldCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2hhbmRsZUpvaW5FcnJvcihwYWNrZXQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh3c3BfYnJvd3Nlci5pc0xlYXZlQWNrUGFja2V0KHBhY2tldCkpIHtcbiAgICAgICAge1xuICAgICAgICAgIERlYnVnKCdsZWF2ZSBhY2sgcGFja2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faGFuZGxlTGVhdmVBY2socGFja2V0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAod3NwX2Jyb3dzZXIuaXNMZWF2ZUVycm9yUGFja2V0KHBhY2tldCkpIHtcbiAgICAgICAge1xuICAgICAgICAgIERlYnVnKCdsZWF2ZSBlcnJvciBwYWNrZXQnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9oYW5kbGVMZWF2ZUVycm9yKHBhY2tldCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHdzcF9icm93c2VyLmlzTGVhdmVQYWNrZXQocGFja2V0KSkge1xuICAgICAgICB7XG4gICAgICAgICAgRGVidWcoJ2xlYXZlIHBhY2tldCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2hhbmRsZVNlcnZlckxlYXZlKHBhY2tldCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHdzcF9icm93c2VyLmlzRXZlbnRQYWNrZXQocGFja2V0KSkge1xuICAgICAgICB7XG4gICAgICAgICAgRGVidWcoJ2V2ZW50IHBhY2tldCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2hhbmRsZUV2ZW50KHBhY2tldCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHdzcF9icm93c2VyLmlzUG9uZ1BhY2tldChwYWNrZXQpKSB7XG4gICAgICAgIHtcbiAgICAgICAgICBEZWJ1ZygncG9uZyBwYWNrZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHtcbiAgICAgICAgRGVidWcoJ2ludmFsaWQgcGFja2V0IHR5cGUgJWQnLCBwYWNrZXQudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW1pdHMgdGhlIG9wZW4gZW1pdCBhbmQgc2VuZCBzdWJzY3JpcHRpb24gcGFja2V0c1xuICAgICAqIGZvciBwcmUtZXhpc3Rpbmcgc3Vic2NyaXB0aW9uc1xuICAgICAqXG4gICAgICogQG1ldGhvZCBfaGFuZGxlT3BlblxuICAgICAqXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSAgICBwYWNrZXRcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdfaGFuZGxlT3BlbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVPcGVuKHBhY2tldCkge1xuICAgICAgdmFyIF90aGlzNyA9IHRoaXM7XG5cbiAgICAgIHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9ICdvcGVuJztcbiAgICAgIHRoaXMuZW1pdCgnb3BlbicsIHBhY2tldC5kKTtcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXR1cCBhIHRpbWVyIHRvIHBpbmcgdGhlIHNlcnZlciwgdGVsbGluZ1xuICAgICAgICogY2xpZW50IGlzIGF3YWtlXG4gICAgICAgKi9cbiAgICAgIHRoaXMuX3BpbmdUaW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXM3LnNlbmRQYWNrZXQod3NwX2Jyb3dzZXIucGluZ1BhY2tldCgpKTtcbiAgICAgIH0sIHBhY2tldC5kLmNsaWVudEludGVydmFsKTtcblxuICAgICAgLyoqXG4gICAgICAgKiBTZW5kaW5nIHBhY2tldHMgdG8gbWFrZSBwZW5kaW5nIHN1YnNjcmlwdGlvbnNcbiAgICAgICAqL1xuICAgICAge1xuICAgICAgICBEZWJ1ZygncHJvY2Vzc2luZyBwcmUgY29ubmVjdGlvbiBzdWJzY3JpcHRpb25zICVvJywgT2JqZWN0LmtleXModGhpcy5zdWJzY3JpcHRpb25zKSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnNJdGVyYXRvcihmdW5jdGlvbiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgIF90aGlzNy5fc2VuZFN1YnNjcmlwdGlvblBhY2tldChzdWJzY3JpcHRpb24udG9waWMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB0aGUgam9pbiBhY2tub3dsZWRnZW1lbnQgZm9yIGEgc3Vic2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIF9oYW5kbGVKb2luQWNrXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9ICAgICAgIHBhY2tldFxuICAgICAqXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ19oYW5kbGVKb2luQWNrJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZUpvaW5BY2socGFja2V0KSB7XG4gICAgICB0aGlzLl9lbnN1cmVTdWJzY3JpcHRpb24ocGFja2V0LCBmdW5jdGlvbiAoc29ja2V0KSB7XG4gICAgICAgIHJldHVybiBzb2NrZXQuam9pbkFjaygpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB0aGUgam9pbiBlcnJvciBmb3IgYSBzdWJzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBtZXRob2QgX2hhbmRsZUpvaW5FcnJvclxuICAgICAqXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSAgICAgICAgIHBhY2tldFxuICAgICAqXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ19oYW5kbGVKb2luRXJyb3InLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlSm9pbkVycm9yKHBhY2tldCkge1xuICAgICAgdGhpcy5fZW5zdXJlU3Vic2NyaXB0aW9uKHBhY2tldCwgZnVuY3Rpb24gKHNvY2tldCwgcGFja2V0KSB7XG4gICAgICAgIHJldHVybiBzb2NrZXQuam9pbkVycm9yKHBhY2tldC5kKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFja25vd2xlZGdlcyB0aGUgc3Vic2NyaXB0aW9uIGxlYXZlXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIF9oYW5kbGVMZWF2ZUFja1xuICAgICAqXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSAgICAgICAgcGFja2V0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnX2hhbmRsZUxlYXZlQWNrJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZUxlYXZlQWNrKHBhY2tldCkge1xuICAgICAgdGhpcy5fZW5zdXJlU3Vic2NyaXB0aW9uKHBhY2tldCwgZnVuY3Rpb24gKHNvY2tldCkge1xuICAgICAgICByZXR1cm4gc29ja2V0LmxlYXZlQWNrKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGxlYXZlIGVycm9yIGZvciBhIHN1YnNjcmlwdGlvblxuICAgICAqXG4gICAgICogQG1ldGhvZCBfaGFuZGxlTGVhdmVFcnJvclxuICAgICAqXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSAgICAgICAgICBwYWNrZXRcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdfaGFuZGxlTGVhdmVFcnJvcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVMZWF2ZUVycm9yKHBhY2tldCkge1xuICAgICAgdGhpcy5fZW5zdXJlU3Vic2NyaXB0aW9uKHBhY2tldCwgZnVuY3Rpb24gKHNvY2tldCwgcGFja2V0KSB7XG4gICAgICAgIHJldHVybiBzb2NrZXQubGVhdmVFcnJvcihwYWNrZXQuZCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIHdoZW4gc2VydmVyIGluaXRpYXRlcyB0aGUgc3Vic2NyaXB0aW9uIGxlYXZlXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIF9oYW5kbGVTZXJ2ZXJMZWF2ZVxuICAgICAqXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSAgICAgICAgICAgcGFja2V0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnX2hhbmRsZVNlcnZlckxlYXZlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZVNlcnZlckxlYXZlKHBhY2tldCkge1xuICAgICAgdGhpcy5fZW5zdXJlU3Vic2NyaXB0aW9uKHBhY2tldCwgZnVuY3Rpb24gKHNvY2tldCwgcGFja2V0KSB7XG4gICAgICAgIHJldHVybiBzb2NrZXQubGVhdmVBY2soKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIGV2ZW50IHBhY2tldCBmb3IgYSBzdWJzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBtZXRob2QgX2hhbmRsZUV2ZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9ICAgICBwYWNrZXRcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdfaGFuZGxlRXZlbnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlRXZlbnQocGFja2V0KSB7XG4gICAgICB0aGlzLl9lbnN1cmVTdWJzY3JpcHRpb24ocGFja2V0LCBmdW5jdGlvbiAoc29ja2V0LCBwYWNrZXQpIHtcbiAgICAgICAgcmV0dXJuIHNvY2tldC5zZXJ2ZXJFdmVudChwYWNrZXQuZCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyB0aGUgc3Vic2NyaXB0aW9uIHBhY2tldCBmb3IgYSBnaXZlbiB0b3BpY1xuICAgICAqXG4gICAgICogQG1ldGhvZCBzZW5kU3Vic2NyaXB0aW9uUGFja2V0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICAgICAgICAgdG9waWNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdfc2VuZFN1YnNjcmlwdGlvblBhY2tldCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9zZW5kU3Vic2NyaXB0aW9uUGFja2V0KHRvcGljKSB7XG4gICAgICB7XG4gICAgICAgIERlYnVnKCdpbml0aWF0aW5nIHN1YnNjcmlwdGlvbiBmb3IgJXMgdG9waWMgd2l0aCBzZXJ2ZXInLCB0b3BpYyk7XG4gICAgICB9XG4gICAgICB0aGlzLnNlbmRQYWNrZXQod3NwX2Jyb3dzZXIuam9pblBhY2tldCh0b3BpYykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluc3RhbnRpYXRlIHRoZSB3ZWJzb2NrZXQgY29ubmVjdGlvblxuICAgICAqXG4gICAgICogQG1ldGhvZCBjb25uZWN0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdjb25uZWN0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgICAgIHZhciBfdGhpczggPSB0aGlzO1xuXG4gICAgICB2YXIgcXVlcnkgPSBzdHJpbmdpZnkoX2V4dGVuZHMoe30sIHRoaXMub3B0aW9ucy5xdWVyeSwgdGhpcy5fZXh0ZW5kZWRRdWVyeSkpO1xuICAgICAgdmFyIHVybCA9IHF1ZXJ5ID8gdGhpcy5fdXJsICsgJz8nICsgcXVlcnkgOiB0aGlzLl91cmw7XG5cbiAgICAgIHtcbiAgICAgICAgRGVidWcoJ2NyZWF0aW5nIHNvY2tldCBjb25uZWN0aW9uIG9uICVzIHVybCcsIHVybCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMud3MgPSBuZXcgd2luZG93LldlYlNvY2tldCh1cmwpO1xuICAgICAgdGhpcy53cy5vbmNsb3NlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfdGhpczguX29uQ2xvc2UoZXZlbnQpO1xuICAgICAgfTtcbiAgICAgIHRoaXMud3Mub25lcnJvciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICByZXR1cm4gX3RoaXM4Ll9vbkVycm9yKGV2ZW50KTtcbiAgICAgIH07XG4gICAgICB0aGlzLndzLm9ub3BlbiA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICByZXR1cm4gX3RoaXM4Ll9vbk9wZW4oZXZlbnQpO1xuICAgICAgfTtcbiAgICAgIHRoaXMud3Mub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfdGhpczguX29uTWVzc2FnZShldmVudCk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcml0ZXMgdGhlIHBheWxvYWQgb24gdGhlIG9wZW4gY29ubmVjdGlvblxuICAgICAqXG4gICAgICogQG1ldGhvZCB3cml0ZVxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBwYXlsb2FkXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICd3cml0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdyaXRlKHBheWxvYWQpIHtcbiAgICAgIGlmICh0aGlzLndzLnJlYWR5U3RhdGUgIT09IHdpbmRvdy5XZWJTb2NrZXQuT1BFTikge1xuICAgICAgICB7XG4gICAgICAgICAgRGVidWcoJ2Nvbm5lY3Rpb24gaXMgbm90IGluIG9wZW4gc3RhdGUsIGN1cnJlbnQgc3RhdGUgJXMnLCB0aGlzLndzLnJlYWR5U3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy53cy5zZW5kKHBheWxvYWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgcGFja2V0IGJ5IGVuY29kaW5nIGl0IGZpcnN0XG4gICAgICpcbiAgICAgKiBAbWV0aG9kIF9zZW5kUGFja2V0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9ICAgIHBhY2tldFxuICAgICAqXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnc2VuZFBhY2tldCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlbmRQYWNrZXQocGFja2V0KSB7XG4gICAgICB0aGlzLl9wYWNrZXRzUXVldWUucHVzaChwYWNrZXQpO1xuICAgICAgdGhpcy5fcHJvY2Vzc1F1ZXVlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc3Vic2NyaXB0aW9uIGluc3RhbmNlIGZvciBhIGdpdmVuIHRvcGljXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIGdldFN1YnNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgdG9waWNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1NvY2tldH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0U3Vic2NyaXB0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U3Vic2NyaXB0aW9uKHRvcGljKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdWJzY3JpcHRpb25zW3RvcGljXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgYm9vbGVhbiB0ZWxsaW5nLCB3aGV0aGVyIGNvbm5lY3Rpb24gaGFzXG4gICAgICogYSBzdWJzY3JpcHRpb24gZm9yIGEgZ2l2ZW4gdG9waWMgb3Igbm90XG4gICAgICpcbiAgICAgKiBAbWV0aG9kIGhhc1N1YmNyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgIHRvcGljXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdoYXNTdWJjcmlwdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhc1N1YmNyaXB0aW9uKHRvcGljKSB7XG4gICAgICByZXR1cm4gISF0aGlzLmdldFN1YnNjcmlwdGlvbih0b3BpYyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IHN1YnNjcmlwdGlvbiB3aXRoIHRoZSBzZXJ2ZXJcbiAgICAgKlxuICAgICAqIEBtZXRob2Qgc3Vic2NyaWJlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9ICB0b3BpY1xuICAgICAqXG4gICAgICogQHJldHVybiB7U29ja2V0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdzdWJzY3JpYmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJzY3JpYmUodG9waWMpIHtcbiAgICAgIGlmICghdG9waWMgfHwgdHlwZW9mIHRvcGljICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3N1YnNjcmliZSBtZXRob2QgZXhwZWN0cyB0b3BpYyB0byBiZSBhIHZhbGlkIHN0cmluZycpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zdWJzY3JpcHRpb25zW3RvcGljXSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBzdWJzY3JpYmUgdG8gc2FtZSB0b3BpYyB0d2ljZS4gSW5zdGVhZCB1c2UgZ2V0U3Vic2NyaXB0aW9uJyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzb2NrZXQgPSBuZXcgU29ja2V0KHRvcGljLCB0aGlzKTtcbiAgICAgIHNvY2tldC5vbignY2xvc2UnLCB0aGlzLnJlbW92ZVN1YnNjcmlwdGlvbik7XG5cbiAgICAgIC8qKlxuICAgICAgICogU3RvcmluZyByZWZlcmVuY2UgdG8gdGhlIHNvY2tldFxuICAgICAgICovXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdG9waWNdID0gc29ja2V0O1xuXG4gICAgICAvKipcbiAgICAgICAqIFNlbmRpbmcgam9pbiByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIsIHRoZSBzdWJzY3JpcHRpb24gd2lsbFxuICAgICAgICogYmUgY29uc2lkZXJlZCByZWFkeSwgb25jZSBzZXJ2ZXIgYWNrbm93bGVkZ2VzIGl0XG4gICAgICAgKi9cbiAgICAgIGlmICh0aGlzLl9jb25uZWN0aW9uU3RhdGUgPT09ICdvcGVuJykge1xuICAgICAgICB0aGlzLl9zZW5kU3Vic2NyaXB0aW9uUGFja2V0KHRvcGljKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNvY2tldDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyBldmVudCBmb3IgYSBnaXZlbiB0b3BpY1xuICAgICAqXG4gICAgICogQG1ldGhvZCBzZW5kRXZlbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gIHRvcGljXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSAgZXZlbnRcbiAgICAgKiBAcGFyYW0gIHtNaXhlZH0gIGRhdGFcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICpcbiAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdG9waWMgb3IgZXZlbnQgYXJlIG5vdCBwYXNzZWRcbiAgICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlcmUgaXMgbm8gYWN0aXZlIHN1YnNjcmlwdGlvbiBmb3IgdGhlIGdpdmVuIHRvcGljXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3NlbmRFdmVudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlbmRFdmVudCh0b3BpYywgZXZlbnQsIGRhdGEpIHtcbiAgICAgIGlmICghdG9waWMgfHwgIWV2ZW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndG9waWMgYW5kIGV2ZW50IG5hbWUgaXMgcmVxdWlyZWQgdG8gY2FsbCBzZW5kRXZlbnQgbWV0aG9kJyk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogTWFrZSBzdXJlIHRoZXJlIGlzIGFuIGFjdGl2ZSBzdWJzY3JpcHRpb24gZm9yIHRoZSB0b3BpYy4gVGhvdWdoIHNlcnZlciB3aWxsXG4gICAgICAgKiBib3VuY2UgdGhlIG1lc3NhZ2UsIHRoZXJlIGlzIG5vIHBvaW50IGluIGhhbW1lcmluZyBpdFxuICAgICAgICovXG4gICAgICB2YXIgc3Vic2NyaXB0aW9uID0gdGhpcy5nZXRTdWJzY3JpcHRpb24odG9waWMpO1xuICAgICAgaWYgKCFzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGVyZSBpcyBubyBhY3RpdmUgc3Vic2NyaXB0aW9uIGZvciAnICsgdG9waWMgKyAnIHRvcGljJyk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgc3Vic2NyaXB0aW9uIHN0YXRlIGlzIG5vdCBvcGVuLCB0aGVuIHdlIHNob3VsZCBub3QgcHVibGlzaFxuICAgICAgICogbWVzc2FnZXMuXG4gICAgICAgKlxuICAgICAgICogVGhlIHJlYXNvbiB3ZSBoYXZlIHRoaXMgY2hlY2sgb24gY29ubmVjdGlvbiBhbmQgbm90IHNvY2tldCxcbiAgICAgICAqIGlzIGNveiB3ZSBkb24ndCB3YW50IGFueW9uZSB0byB1c2UgdGhlIGNvbm5lY3Rpb24gb2JqZWN0XG4gICAgICAgKiBhbmQgc2VuZCBwYWNrZXRzLCBldmVuIHdoZW4gc3Vic2NyaXB0aW9uIGlzIGNsb3NlZC5cbiAgICAgICAqL1xuICAgICAgaWYgKHN1YnNjcmlwdGlvbi5zdGF0ZSAhPT0gJ29wZW4nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGVtaXQgc2luY2Ugc3Vic2NyaXB0aW9uIHNvY2tldCBpcyBpbiAnICsgdGhpcy5zdGF0ZSArICcgc3RhdGUnKTtcbiAgICAgIH1cblxuICAgICAge1xuICAgICAgICBEZWJ1Zygnc2VuZGluZyBldmVudCBvbiAlcyB0b3BpYycsIHRvcGljKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZW5kUGFja2V0KHdzcF9icm93c2VyLmV2ZW50UGFja2V0KHRvcGljLCBldmVudCwgZGF0YSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZSBKV1QgdG9rZW4gdG8gYXV0aGVudGljYXRlIHRoZSB1c2VyXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIHdpdGhKd3RUb2tlblxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHRva2VuXG4gICAgICpcbiAgICAgKiBAY2hhaW5hYmxlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3dpdGhKd3RUb2tlbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdpdGhKd3RUb2tlbih0b2tlbikge1xuICAgICAgdGhpcy5fZXh0ZW5kZWRRdWVyeS50b2tlbiA9IHRva2VuO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlIGJhc2ljIGF1dGggY3JlZGVudGlhbHMgdG8gbG9naW4gdGhlIHVzZXJcbiAgICAgKlxuICAgICAqIEBtZXRob2Qgd2l0aEJhc2ljQXV0aFxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSAgdXNlcm5hbWVcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBwYXNzd29yZFxuICAgICAqXG4gICAgICogQGNoYWluYWJsZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICd3aXRoQmFzaWNBdXRoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gd2l0aEJhc2ljQXV0aCh1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgICAgIHRoaXMuX2V4dGVuZGVkUXVlcnkuYmFzaWMgPSB3aW5kb3cuYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZSBwZXJzb25hbCBBUEkgdG9rZW4gdG8gYXV0aGVudGljYXRlIHRoZSB1c2VyXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIHdpdGhBcGlUb2tlblxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHRva2VuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3dpdGhBcGlUb2tlbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdpdGhBcGlUb2tlbih0b2tlbikge1xuICAgICAgdGhpcy5fZXh0ZW5kZWRRdWVyeS50b2tlbiA9IHRva2VuO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRm9yY2VmdWxseSBjbG9zZSB0aGUgY29ubmVjdGlvblxuICAgICAqXG4gICAgICogQG1ldGhvZCBjbG9zZVxuICAgICAqXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnY2xvc2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgIHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9ICd0ZXJtaW5hdGVkJztcbiAgICAgIHRoaXMud3MuY2xvc2UoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzaG91bGRSZWNvbm5lY3QnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSAhPT0gJ3Rlcm1pbmF0ZWQnICYmIHRoaXMub3B0aW9ucy5yZWNvbm5lY3Rpb24gJiYgdGhpcy5vcHRpb25zLnJlY29ubmVjdGlvbkF0dGVtcHRzID4gdGhpcy5fcmVjb25uZWN0aW9uQXR0ZW1wdHM7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBDb25uZWN0aW9uO1xufShlbWl0dGVyeSk7XG5cbmZ1bmN0aW9uIGluZGV4ICh1cmwsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIG5ldyBDb25uZWN0aW9uKHVybCwgb3B0aW9ucyk7XG59XG5cbnJldHVybiBpbmRleDtcblxufSkpKTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGhvd2V2ZXIsIHRoZVxuICAgICAgICAgIC8vIHJlc3VsdCBmb3IgdGhpcyBpdGVyYXRpb24gd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lXG4gICAgICAgICAgLy8gcmVhc29uLiBOb3RlIHRoYXQgcmVqZWN0aW9ucyBvZiB5aWVsZGVkIFByb21pc2VzIGFyZSBub3RcbiAgICAgICAgICAvLyB0aHJvd24gYmFjayBpbnRvIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIGFzIGlzIHRoZSBjYXNlXG4gICAgICAgICAgLy8gd2hlbiBhbiBhd2FpdGVkIFByb21pc2UgaXMgcmVqZWN0ZWQuIFRoaXMgZGlmZmVyZW5jZSBpblxuICAgICAgICAgIC8vIGJlaGF2aW9yIGJldHdlZW4geWllbGQgYW5kIGF3YWl0IGlzIGltcG9ydGFudCwgYmVjYXVzZSBpdFxuICAgICAgICAgIC8vIGFsbG93cyB0aGUgY29uc3VtZXIgdG8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgeWllbGRlZFxuICAgICAgICAgIC8vIHJlamVjdGlvbiAoc3dhbGxvdyBpdCBhbmQgY29udGludWUsIG1hbnVhbGx5IC50aHJvdyBpdCBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgZ2VuZXJhdG9yLCBhYmFuZG9uIGl0ZXJhdGlvbiwgd2hhdGV2ZXIpLiBXaXRoXG4gICAgICAgICAgLy8gYXdhaXQsIGJ5IGNvbnRyYXN0LCB0aGVyZSBpcyBubyBvcHBvcnR1bml0eSB0byBleGFtaW5lIHRoZVxuICAgICAgICAgIC8vIHJlamVjdGlvbiByZWFzb24gb3V0c2lkZSB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBzbyB0aGVcbiAgICAgICAgICAvLyBvbmx5IG9wdGlvbiBpcyB0byB0aHJvdyBpdCBmcm9tIHRoZSBhd2FpdCBleHByZXNzaW9uLCBhbmRcbiAgICAgICAgICAvLyBsZXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBoYW5kbGUgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHJ1bnRpbWUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gSW4gc2xvcHB5IG1vZGUsIHVuYm91bmQgYHRoaXNgIHJlZmVycyB0byB0aGUgZ2xvYmFsIG9iamVjdCwgZmFsbGJhY2sgdG9cbiAgLy8gRnVuY3Rpb24gY29uc3RydWN0b3IgaWYgd2UncmUgaW4gZ2xvYmFsIHN0cmljdCBtb2RlLiBUaGF0IGlzIHNhZGx5IGEgZm9ybVxuICAvLyBvZiBpbmRpcmVjdCBldmFsIHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5LlxuICAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpXG4pO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzXCI7XHJcbmltcG9ydCBXcyBmcm9tICdAYWRvbmlzanMvd2Vic29ja2V0LWNsaWVudCdcclxuXHJcbmxldCBpc0Nvbm5lY3RlZCA9IGZhbHNlXHJcbmxldCB3cyA9IG51bGxcclxubGV0IGNoYXQgPSBudWxsXHJcbmxldCBpc1R5cGluZyA9IGZhbHNlXHJcbmNvbnN0IG1lc3NhZ2VJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZXNzYWdlJylcclxuY29uc3QgY2hhdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hhdC1mb3JtJylcclxuY29uc3QgbWVzc2FnZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVzc2FnZXMtY29udGFpbmVyJylcclxuXHJcbm1lc3NhZ2VzQ29udGFpbmVyLnNjcm9sbFRvcCA9IG1lc3NhZ2VzQ29udGFpbmVyLnNjcm9sbEhlaWdodFxyXG5cclxubGV0IHRvcGljID0gbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgnL2NoYW5uZWxzLycsICcnKTtcclxuXHJcbndzID0gV3MoKS5jb25uZWN0KClcclxuXHJcbndzLm9uKCdvcGVuJywgKCkgPT4ge1xyXG5cclxuICBjb25zb2xlLmxvZygnb3BlbicpXHJcblxyXG4gIGlzQ29ubmVjdGVkID0gdHJ1ZVxyXG4gIHN1YnNjcmliZVRvQ2hhbm5lbCgpXHJcblxyXG59KVxyXG5cclxud3Mub24oJ2Vycm9yJywgKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCd3cyBlcnJvcicpXHJcbiAgaXNDb25uZWN0ZWQgPSBmYWxzZVxyXG59KVxyXG5cclxud3Mub24oJ2Nsb3NlJywgKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCd3cyBjbG9zZScpXHJcbiAgaXNDb25uZWN0ZWQgPSBmYWxzZVxyXG59KVxyXG5cclxuY29uc3Qgc3Vic2NyaWJlVG9DaGFubmVsID0gKCkgPT4ge1xyXG5cclxuICBjaGF0ID0gd3Muc3Vic2NyaWJlKGBjaGF0OiR7dG9waWN9YClcclxuXHJcbiAgY2hhdC5vbigncmVhZHknLCAoKSA9PiB7XHJcbiAgICBjaGF0LmVtaXQoJ2Nvbm5lY3RlZCcpXHJcbiAgfSlcclxuXHJcbiAgY2hhdC5vbignZXJyb3InLCAoZXJyb3IpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdjaGF0IGVycm9yJywgZXJyb3IpXHJcbiAgfSlcclxuXHJcbiAgY2hhdC5vbignY2xvc2UnLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnY2hhdCBjbG9zZScpXHJcblxyXG4gICAgY2hhdC5jbG9zZSgpXHJcbiAgfSlcclxuXHJcbiAgY2hhdC5vbignbWVzc2FnZScsIChtZXNzYWdlKSA9PiB7XHJcbiAgICBjb25zdCBhcnRpY2xlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKVxyXG4gICAgYXJ0aWNsZU5vZGUuY2xhc3NMaXN0LmFkZCgnY2hhdC1tZXNzYWdlJywgJ21lZGlhJywgJ2hhcy1iYWNrZ3JvdW5kLWxpZ2h0JylcclxuXHJcbiAgICBjb25zdCBtZWRpYUNvbnRlbnROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIG1lZGlhQ29udGVudE5vZGUuY2xhc3NMaXN0LmFkZCgnbWVkaWEtY29udGVudCcpXHJcblxyXG4gICAgY29uc3QgY29udGVudE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29udGVudE5vZGUuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpXHJcblxyXG4gICAgY29uc3QgcGFyYWdyYXBoTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgY29uc3Qgc3Ryb25nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0cm9uZycpXHJcbiAgICBjb25zdCBzbWFsbE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFsbCcpXHJcbiAgICBjb25zdCBicjFOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKVxyXG4gICAgY29uc3QgYnIyTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJylcclxuXHJcbiAgICBjb25zdCBtZXNzYWdlVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShtZXNzYWdlLm1lc3NhZ2UuYm9keSlcclxuXHJcbiAgICBzdHJvbmdOb2RlLmlubmVySFRNTCA9IG1lc3NhZ2UudXNlcm5hbWUgKyAnICdcclxuICAgIHNtYWxsTm9kZS5pbm5lckhUTUwgPSBtZXNzYWdlLmRlbGl2ZXJlZEF0XHJcblxyXG4gICAgcGFyYWdyYXBoTm9kZS5hcHBlbmRDaGlsZChzdHJvbmdOb2RlKVxyXG4gICAgcGFyYWdyYXBoTm9kZS5hcHBlbmRDaGlsZChzbWFsbE5vZGUpXHJcbiAgICBwYXJhZ3JhcGhOb2RlLmFwcGVuZENoaWxkKGJyMU5vZGUpXHJcbiAgICBwYXJhZ3JhcGhOb2RlLmFwcGVuZENoaWxkKG1lc3NhZ2VWYWx1ZSlcclxuICAgIHBhcmFncmFwaE5vZGUuYXBwZW5kQ2hpbGQoYnIyTm9kZSlcclxuXHJcbiAgICBjb250ZW50Tm9kZS5hcHBlbmRDaGlsZChwYXJhZ3JhcGhOb2RlKVxyXG4gICAgbWVkaWFDb250ZW50Tm9kZS5hcHBlbmRDaGlsZChjb250ZW50Tm9kZSlcclxuICAgIGFydGljbGVOb2RlLmFwcGVuZENoaWxkKG1lZGlhQ29udGVudE5vZGUpXHJcblxyXG4gICAgbWVzc2FnZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoYXJ0aWNsZU5vZGUpXHJcblxyXG4gICAgbWVzc2FnZXNDb250YWluZXIuc2Nyb2xsVG9wID0gbWVzc2FnZXNDb250YWluZXIuc2Nyb2xsSGVpZ2h0XHJcbiAgfSlcclxuXHJcbiAgY2hhdC5vbigndHlwaW5nJywgKHVzZXJUeXBpbmcpID0+IHtcclxuXHJcbiAgICBjb25zdCBhcnRpY2xlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKVxyXG4gICAgYXJ0aWNsZU5vZGUuY2xhc3NMaXN0LmFkZCgnY2hhdC1tZXNzYWdlJywgJ21lZGlhJywgJ2hhcy1iYWNrZ3JvdW5kLWxpZ2h0JywgYHR5cGluZy0ke3VzZXJUeXBpbmcucmVwbGFjZSgvXFxzL2csICcnKX1gKVxyXG5cclxuICAgIGNvbnN0IG1lZGlhQ29udGVudE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgbWVkaWFDb250ZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdtZWRpYS1jb250ZW50JylcclxuXHJcbiAgICBjb25zdCBjb250ZW50Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb250ZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdjb250ZW50JylcclxuXHJcbiAgICBjb25zdCBwYXJhZ3JhcGhOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcblxyXG4gICAgY29uc3QgbWVzc2FnZVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7dXNlclR5cGluZ30gaXMgdHlwaW5nIC4uLmApXHJcblxyXG4gICAgcGFyYWdyYXBoTm9kZS5hcHBlbmRDaGlsZChtZXNzYWdlVmFsdWUpXHJcblxyXG4gICAgY29udGVudE5vZGUuYXBwZW5kQ2hpbGQocGFyYWdyYXBoTm9kZSlcclxuICAgIG1lZGlhQ29udGVudE5vZGUuYXBwZW5kQ2hpbGQoY29udGVudE5vZGUpXHJcbiAgICBhcnRpY2xlTm9kZS5hcHBlbmRDaGlsZChtZWRpYUNvbnRlbnROb2RlKVxyXG5cclxuICAgIG1lc3NhZ2VzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFydGljbGVOb2RlKVxyXG5cclxuICAgIG1lc3NhZ2VzQ29udGFpbmVyLnNjcm9sbFRvcCA9IG1lc3NhZ2VzQ29udGFpbmVyLnNjcm9sbEhlaWdodFxyXG4gIH0pXHJcblxyXG4gIGNoYXQub24oJ3N0b3BUeXBpbmcnLCAodXNlclR5cGluZykgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnR5cGluZy0ke3VzZXJUeXBpbmd9YCkucmVtb3ZlKClcclxuICB9KVxyXG59XHJcblxyXG5tZXNzYWdlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZXZlbnQpID0+IHtcclxuXHJcbiAgaWYgKCFpc1R5cGluZykge1xyXG4gICAgaXNUeXBpbmcgPSB0cnVlXHJcbiAgICBjaGF0LmVtaXQoJ3R5cGluZycpXHJcbiAgfVxyXG5cclxuICBsZXQgbGFzdFR5cGluZ1RpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xyXG5cclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGxldCB0eXBpbmdUaW1lciA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcbiAgICBsZXQgdGltZURpZmYgPSB0eXBpbmdUaW1lciAtIGxhc3RUeXBpbmdUaW1lO1xyXG4gICAgaWYgKHRpbWVEaWZmID49IDQwMDAgJiYgaXNUeXBpbmcpIHtcclxuICAgICAgY2hhdC5lbWl0KCdzdG9wVHlwaW5nJylcclxuICAgICAgaXNUeXBpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuICB9LCA0MDAwKTtcclxufSlcclxuXHJcbmNoYXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgaWYgKG1lc3NhZ2VJbnB1dC52YWx1ZS5sZW5ndGgpXHJcbiAgICBjaGF0LmVtaXQoJ21lc3NhZ2UnLCB7XHJcbiAgICAgIGJvZHk6IG1lc3NhZ2VJbnB1dC52YWx1ZSxcclxuICAgICAgY2hhbm5lbDogdG9waWNcclxuICB9KVxyXG5cclxuICBjaGF0LmVtaXQoJ3N0b3BUeXBpbmcnKVxyXG4gIGlzVHlwaW5nID0gZmFsc2U7XHJcblxyXG4gIG1lc3NhZ2VJbnB1dC52YWx1ZSA9ICcnO1xyXG4gIG1lc3NhZ2VJbnB1dC5mb2N1cygpXHJcblxyXG59KVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=