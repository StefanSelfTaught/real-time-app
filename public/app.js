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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ "./resources/assets/scripts/burgerToggle.js":
/*!**************************************************!*\
  !*** ./resources/assets/scripts/burgerToggle.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Toggle navbar in mobile view
var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

if ($navbarBurgers.length > 0) {
  $navbarBurgers.forEach(function (el) {
    el.addEventListener('click', function () {
      var target = el.dataset.target;
      var $target = document.getElementById(target);
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');
    });
  });
} // Remove flash/alert message 


if (document.querySelector('.delete')) {
  document.querySelector('.delete').addEventListener('click', function () {
    document.querySelector('.message').remove();
  });
}

/***/ }),

/***/ "./resources/assets/scripts/chat.js":
/*!******************************************!*\
  !*** ./resources/assets/scripts/chat.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adonisjs_websocket_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adonisjs/websocket-client */ "./node_modules/@adonisjs/websocket-client/dist/Ws.browser.js");
/* harmony import */ var _adonisjs_websocket_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_adonisjs_websocket_client__WEBPACK_IMPORTED_MODULE_0__);

var isConnected = false;
var ws = null;
var chatForm = document.querySelector('#chat-form');
ws = _adonisjs_websocket_client__WEBPACK_IMPORTED_MODULE_0___default()().connect();
ws.on('open', function () {
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
  var topic = location.pathname.replace('/channels/', '');
  var chat = ws.subscribe("chat:".concat(topic));
  chat.on('error', function (error) {
    console.log('chat error', error);
  });
  chat.on('close', function () {
    console.log('chat close');
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
    smallNode.innerHTML = '2:50 pm';
    paragraphNode.appendChild(strongNode);
    paragraphNode.appendChild(smallNode);
    paragraphNode.appendChild(br1Node);
    paragraphNode.appendChild(messageValue);
    paragraphNode.appendChild(br2Node);
    contentNode.appendChild(paragraphNode);
    mediaContentNode.appendChild(contentNode);
    articleNode.appendChild(mediaContentNode);
    document.querySelector('#messages-container').appendChild(articleNode);
  });
};

chatForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var message = document.querySelector('#message');
  var topic = location.pathname.replace('/channels/', '');
  console.log(message.value.length);
  if (message.value.length) ws.getSubscription("chat:".concat(topic)).emit('message', {
    body: message.value,
    channel: topic
  });
  message.value = '';
  message.focus();
});

/***/ }),

/***/ "./resources/assets/scripts/index.js":
/*!*******************************************!*\
  !*** ./resources/assets/scripts/index.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _burgerToggle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burgerToggle.js */ "./resources/assets/scripts/burgerToggle.js");
/* harmony import */ var _burgerToggle_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_burgerToggle_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.js */ "./resources/assets/scripts/chat.js");



/***/ }),

/***/ "./resources/assets/scss/main.scss":
/*!*****************************************!*\
  !*** ./resources/assets/scss/main.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!***********************************************************************************!*\
  !*** multi ./resources/assets/scss/main.scss ./resources/assets/scripts/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./resources/assets/scss/main.scss */"./resources/assets/scss/main.scss");
module.exports = __webpack_require__(/*! ./resources/assets/scripts/index.js */"./resources/assets/scripts/index.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhZG9uaXNqcy93ZWJzb2NrZXQtY2xpZW50L2Rpc3QvV3MuYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL2J1cmdlclRvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvY2hhdC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zY3NzL21haW4uc2NzcyJdLCJuYW1lcyI6WyIkbmF2YmFyQnVyZ2VycyIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiZm9yRWFjaCIsImVsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRhcmdldCIsImRhdGFzZXQiLCIkdGFyZ2V0IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJxdWVyeVNlbGVjdG9yIiwicmVtb3ZlIiwiaXNDb25uZWN0ZWQiLCJ3cyIsImNoYXRGb3JtIiwiV3MiLCJjb25uZWN0Iiwib24iLCJzdWJzY3JpYmVUb0NoYW5uZWwiLCJjb25zb2xlIiwibG9nIiwidG9waWMiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicmVwbGFjZSIsImNoYXQiLCJzdWJzY3JpYmUiLCJlcnJvciIsIm1lc3NhZ2UiLCJhcnRpY2xlTm9kZSIsImNyZWF0ZUVsZW1lbnQiLCJhZGQiLCJtZWRpYUNvbnRlbnROb2RlIiwiY29udGVudE5vZGUiLCJwYXJhZ3JhcGhOb2RlIiwic3Ryb25nTm9kZSIsInNtYWxsTm9kZSIsImJyMU5vZGUiLCJicjJOb2RlIiwibWVzc2FnZVZhbHVlIiwiY3JlYXRlVGV4dE5vZGUiLCJib2R5IiwiaW5uZXJIVE1MIiwidXNlcm5hbWUiLCJhcHBlbmRDaGlsZCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsImdldFN1YnNjcmlwdGlvbiIsImVtaXQiLCJjaGFubmVsIiwiZm9jdXMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLENBQUMsS0FBNEQ7QUFDN0QsQ0FBQyxTQUNtRTtBQUNwRSxDQUFDLHFCQUFxQjs7QUFFdEI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkMsZ0JBQWdCOztBQUU3RDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1GQUFtRixtRUFBbUU7QUFDdEo7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtGQUFrRixtRUFBbUU7QUFDcko7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLENBQUM7O0FBRUQ7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1FQUFtRSxtRUFBbUU7QUFDdEk7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7O0FBRUE7QUFDQSxrQkFBa0IsWUFBWSxFQUFFO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMLGFBQWEsb0hBQW9IO0FBQ2pJO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPLElBQUk7QUFDWCxLQUFLLFdBQVc7QUFDaEI7QUFDQTtBQUNBLE9BQU8sRUFBRTtBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0wsd0JBQXdCLFdBQVc7QUFDbkMsS0FBSztBQUNMLHlCQUF5QixXQUFXO0FBQ3BDLEtBQUs7QUFDTCw0QkFBNEIsV0FBVztBQUN2QyxLQUFLO0FBQ0wsOEJBQThCLHVCQUF1QjtBQUNyRCxLQUFLO0FBQ0wsNkJBQTZCLFdBQVc7QUFDeEMsS0FBSztBQUNMLCtCQUErQix1QkFBdUI7QUFDdEQsS0FBSztBQUNMLHlCQUF5Qix3Q0FBd0M7QUFDakUsS0FBSztBQUNMLGNBQWM7QUFDZCxLQUFLO0FBQ0wsY0FBYztBQUNkLEtBQUssWUFBWSxXQUFXO0FBQzVCLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsT0FBTztBQUNsQixZQUFZLE1BQU07QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixjQUFjO0FBQ2Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLFNBQVM7QUFDNUIsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQyxTQUFTO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLFNBQVM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQixjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdC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O0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLHVDQUF1QztBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0EsTUFBTWxCLE9BQU8sR0FBRzlCLFFBQVEsQ0FBQ1ksYUFBVCxDQUF1QixVQUF2QixDQUFoQjtBQUVBLE1BQU1XLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxRQUFULENBQWtCQyxPQUFsQixDQUEwQixZQUExQixFQUF3QyxFQUF4QyxDQUFkO0FBRUFMLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUSxPQUFPLENBQUNtQixLQUFSLENBQWMvQyxNQUExQjtBQUVBLE1BQUk0QixPQUFPLENBQUNtQixLQUFSLENBQWMvQyxNQUFsQixFQUNFYSxFQUFFLENBQUNtQyxlQUFILGdCQUEyQjNCLEtBQTNCLEdBQW9DNEIsSUFBcEMsQ0FBeUMsU0FBekMsRUFBb0Q7QUFDbERSLFFBQUksRUFBRWIsT0FBTyxDQUFDbUIsS0FEb0M7QUFFbERHLFdBQU8sRUFBRTdCO0FBRnlDLEdBQXBEO0FBS0ZPLFNBQU8sQ0FBQ21CLEtBQVIsR0FBZ0IsRUFBaEI7QUFDQW5CLFNBQU8sQ0FBQ3VCLEtBQVI7QUFFRCxDQWpCRCxFOzs7Ozs7Ozs7Ozs7QUMxRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcblx0dHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuXHQoZ2xvYmFsLmFkb25pcyA9IGdsb2JhbC5hZG9uaXMgfHwge30sIGdsb2JhbC5hZG9uaXMuV3MgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG59O1xuXG52YXIgYXN5bmNUb0dlbmVyYXRvciA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBnZW4gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBmdW5jdGlvbiBzdGVwKGtleSwgYXJnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHN0ZXAoXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBzdGVwKFwidGhyb3dcIiwgZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RlcChcIm5leHRcIik7XG4gICAgfSk7XG4gIH07XG59O1xuXG52YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxudmFyIGNyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxudmFyIGluaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxudmFyIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn07XG5cbnZhciB0b0NvbnN1bWFibGVBcnJheSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShhcnIpO1xuICB9XG59O1xuXG52YXIgYW55TWFwID0gbmV3IFdlYWtNYXAoKTtcbnZhciBldmVudHNNYXAgPSBuZXcgV2Vha01hcCgpO1xudmFyIHJlc29sdmVkUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuXG5mdW5jdGlvbiBhc3NlcnRFdmVudE5hbWUoZXZlbnROYW1lKSB7XG5cdGlmICh0eXBlb2YgZXZlbnROYW1lICE9PSAnc3RyaW5nJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ2V2ZW50TmFtZSBtdXN0IGJlIGEgc3RyaW5nJyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0TGlzdGVuZXIobGlzdGVuZXIpIHtcblx0aWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGdldExpc3RlbmVycyhpbnN0YW5jZSwgZXZlbnROYW1lKSB7XG5cdHZhciBldmVudHMgPSBldmVudHNNYXAuZ2V0KGluc3RhbmNlKTtcblx0aWYgKCFldmVudHMuaGFzKGV2ZW50TmFtZSkpIHtcblx0XHRldmVudHMuc2V0KGV2ZW50TmFtZSwgbmV3IFNldCgpKTtcblx0fVxuXG5cdHJldHVybiBldmVudHMuZ2V0KGV2ZW50TmFtZSk7XG59XG5cbnZhciBFbWl0dGVyeSA9IGZ1bmN0aW9uICgpIHtcblx0ZnVuY3Rpb24gRW1pdHRlcnkoKSB7XG5cdFx0Y2xhc3NDYWxsQ2hlY2sodGhpcywgRW1pdHRlcnkpO1xuXG5cdFx0YW55TWFwLnNldCh0aGlzLCBuZXcgU2V0KCkpO1xuXHRcdGV2ZW50c01hcC5zZXQodGhpcywgbmV3IE1hcCgpKTtcblx0fVxuXG5cdGNyZWF0ZUNsYXNzKEVtaXR0ZXJ5LCBbe1xuXHRcdGtleTogJ29uJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gb24oZXZlbnROYW1lLCBsaXN0ZW5lcikge1xuXHRcdFx0YXNzZXJ0RXZlbnROYW1lKGV2ZW50TmFtZSk7XG5cdFx0XHRhc3NlcnRMaXN0ZW5lcihsaXN0ZW5lcik7XG5cdFx0XHRnZXRMaXN0ZW5lcnModGhpcywgZXZlbnROYW1lKS5hZGQobGlzdGVuZXIpO1xuXHRcdFx0cmV0dXJuIHRoaXMub2ZmLmJpbmQodGhpcywgZXZlbnROYW1lLCBsaXN0ZW5lcik7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnb2ZmJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gb2ZmKGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcblx0XHRcdGFzc2VydEV2ZW50TmFtZShldmVudE5hbWUpO1xuXHRcdFx0YXNzZXJ0TGlzdGVuZXIobGlzdGVuZXIpO1xuXHRcdFx0Z2V0TGlzdGVuZXJzKHRoaXMsIGV2ZW50TmFtZSkuZGVsZXRlKGxpc3RlbmVyKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdvbmNlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gb25jZShldmVudE5hbWUpIHtcblx0XHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuXHRcdFx0XHRhc3NlcnRFdmVudE5hbWUoZXZlbnROYW1lKTtcblx0XHRcdFx0dmFyIG9mZiA9IF90aGlzLm9uKGV2ZW50TmFtZSwgZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRcdFx0XHRvZmYoKTtcblx0XHRcdFx0XHRyZXNvbHZlKGRhdGEpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2VtaXQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgX3JlZiA9IGFzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlMyhldmVudE5hbWUsIGV2ZW50RGF0YSkge1xuXHRcdFx0XHR2YXIgX3RoaXMyID0gdGhpcztcblxuXHRcdFx0XHR2YXIgbGlzdGVuZXJzLCBhbnlMaXN0ZW5lcnMsIHN0YXRpY0xpc3RlbmVycywgc3RhdGljQW55TGlzdGVuZXJzO1xuXHRcdFx0XHRyZXR1cm4gcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTMkKF9jb250ZXh0Mykge1xuXHRcdFx0XHRcdHdoaWxlICgxKSB7XG5cdFx0XHRcdFx0XHRzd2l0Y2ggKF9jb250ZXh0My5wcmV2ID0gX2NvbnRleHQzLm5leHQpIHtcblx0XHRcdFx0XHRcdFx0Y2FzZSAwOlxuXHRcdFx0XHRcdFx0XHRcdGFzc2VydEV2ZW50TmFtZShldmVudE5hbWUpO1xuXG5cdFx0XHRcdFx0XHRcdFx0bGlzdGVuZXJzID0gZ2V0TGlzdGVuZXJzKHRoaXMsIGV2ZW50TmFtZSk7XG5cdFx0XHRcdFx0XHRcdFx0YW55TGlzdGVuZXJzID0gYW55TWFwLmdldCh0aGlzKTtcblx0XHRcdFx0XHRcdFx0XHRzdGF0aWNMaXN0ZW5lcnMgPSBbXS5jb25jYXQodG9Db25zdW1hYmxlQXJyYXkobGlzdGVuZXJzKSk7XG5cdFx0XHRcdFx0XHRcdFx0c3RhdGljQW55TGlzdGVuZXJzID0gW10uY29uY2F0KHRvQ29uc3VtYWJsZUFycmF5KGFueUxpc3RlbmVycykpO1xuXHRcdFx0XHRcdFx0XHRcdF9jb250ZXh0My5uZXh0ID0gNztcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzb2x2ZWRQcm9taXNlO1xuXG5cdFx0XHRcdFx0XHRcdGNhc2UgNzpcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gX2NvbnRleHQzLmFicnVwdCgncmV0dXJuJywgUHJvbWlzZS5hbGwoW10uY29uY2F0KHRvQ29uc3VtYWJsZUFycmF5KHN0YXRpY0xpc3RlbmVycy5tYXAoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIF9yZWYyID0gYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUobGlzdGVuZXIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2hpbGUgKDEpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAwOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmICghbGlzdGVuZXJzLmhhcyhsaXN0ZW5lcikpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9jb250ZXh0Lm5leHQgPSAyO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIF9jb250ZXh0LmFicnVwdCgncmV0dXJuJywgbGlzdGVuZXIoZXZlbnREYXRhKSk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXNlICdlbmQnOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBfY29udGV4dC5zdG9wKCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LCBfY2FsbGVlLCBfdGhpczIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSkpO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24gKF94Mykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gX3JlZjIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdFx0fSgpKSksIHRvQ29uc3VtYWJsZUFycmF5KHN0YXRpY0FueUxpc3RlbmVycy5tYXAoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIF9yZWYzID0gYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUyKGxpc3RlbmVyKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiByZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlMiQoX2NvbnRleHQyKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2hpbGUgKDEpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN3aXRjaCAoX2NvbnRleHQyLnByZXYgPSBfY29udGV4dDIubmV4dCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXNlIDA6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCFhbnlMaXN0ZW5lcnMuaGFzKGxpc3RlbmVyKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X2NvbnRleHQyLm5leHQgPSAyO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIF9jb250ZXh0Mi5hYnJ1cHQoJ3JldHVybicsIGxpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnREYXRhKSk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXNlICdlbmQnOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBfY29udGV4dDIuc3RvcCgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSwgX2NhbGxlZTIsIF90aGlzMik7XG5cdFx0XHRcdFx0XHRcdFx0XHR9KSk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBmdW5jdGlvbiAoX3g0KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBfcmVmMy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0XHR9KCkpKSkpKTtcblxuXHRcdFx0XHRcdFx0XHRjYXNlIDg6XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ2VuZCc6XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIF9jb250ZXh0My5zdG9wKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCBfY2FsbGVlMywgdGhpcyk7XG5cdFx0XHR9KSk7XG5cblx0XHRcdGZ1bmN0aW9uIGVtaXQoX3gsIF94Mikge1xuXHRcdFx0XHRyZXR1cm4gX3JlZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZW1pdDtcblx0XHR9KClcblx0fSwge1xuXHRcdGtleTogJ2VtaXRTZXJpYWwnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgX3JlZjQgPSBhc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTQoZXZlbnROYW1lLCBldmVudERhdGEpIHtcblx0XHRcdFx0dmFyIGxpc3RlbmVycywgYW55TGlzdGVuZXJzLCBzdGF0aWNMaXN0ZW5lcnMsIHN0YXRpY0FueUxpc3RlbmVycywgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiwgX2RpZEl0ZXJhdG9yRXJyb3IsIF9pdGVyYXRvckVycm9yLCBfaXRlcmF0b3IsIF9zdGVwLCBsaXN0ZW5lciwgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIsIF9kaWRJdGVyYXRvckVycm9yMiwgX2l0ZXJhdG9yRXJyb3IyLCBfaXRlcmF0b3IyLCBfc3RlcDIsIF9saXN0ZW5lcjtcblxuXHRcdFx0XHRyZXR1cm4gcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTQkKF9jb250ZXh0NCkge1xuXHRcdFx0XHRcdHdoaWxlICgxKSB7XG5cdFx0XHRcdFx0XHRzd2l0Y2ggKF9jb250ZXh0NC5wcmV2ID0gX2NvbnRleHQ0Lm5leHQpIHtcblx0XHRcdFx0XHRcdFx0Y2FzZSAwOlxuXHRcdFx0XHRcdFx0XHRcdGFzc2VydEV2ZW50TmFtZShldmVudE5hbWUpO1xuXG5cdFx0XHRcdFx0XHRcdFx0bGlzdGVuZXJzID0gZ2V0TGlzdGVuZXJzKHRoaXMsIGV2ZW50TmFtZSk7XG5cdFx0XHRcdFx0XHRcdFx0YW55TGlzdGVuZXJzID0gYW55TWFwLmdldCh0aGlzKTtcblx0XHRcdFx0XHRcdFx0XHRzdGF0aWNMaXN0ZW5lcnMgPSBbXS5jb25jYXQodG9Db25zdW1hYmxlQXJyYXkobGlzdGVuZXJzKSk7XG5cdFx0XHRcdFx0XHRcdFx0c3RhdGljQW55TGlzdGVuZXJzID0gW10uY29uY2F0KHRvQ29uc3VtYWJsZUFycmF5KGFueUxpc3RlbmVycykpO1xuXHRcdFx0XHRcdFx0XHRcdF9jb250ZXh0NC5uZXh0ID0gNztcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzb2x2ZWRQcm9taXNlO1xuXG5cdFx0XHRcdFx0XHRcdGNhc2UgNzpcblx0XHRcdFx0XHRcdFx0XHQvKiBlc2xpbnQtZGlzYWJsZSBuby1hd2FpdC1pbi1sb29wICovXG5cdFx0XHRcdFx0XHRcdFx0X2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0X2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0XHRfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0XHRfY29udGV4dDQucHJldiA9IDEwO1xuXHRcdFx0XHRcdFx0XHRcdF9pdGVyYXRvciA9IHN0YXRpY0xpc3RlbmVyc1tTeW1ib2wuaXRlcmF0b3JdKCk7XG5cblx0XHRcdFx0XHRcdFx0Y2FzZSAxMjpcblx0XHRcdFx0XHRcdFx0XHRpZiAoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdF9jb250ZXh0NC5uZXh0ID0gMjA7XG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRsaXN0ZW5lciA9IF9zdGVwLnZhbHVlO1xuXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFsaXN0ZW5lcnMuaGFzKGxpc3RlbmVyKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0X2NvbnRleHQ0Lm5leHQgPSAxNztcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdF9jb250ZXh0NC5uZXh0ID0gMTc7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGxpc3RlbmVyKGV2ZW50RGF0YSk7XG5cblx0XHRcdFx0XHRcdFx0Y2FzZSAxNzpcblx0XHRcdFx0XHRcdFx0XHRfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHRfY29udGV4dDQubmV4dCA9IDEyO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0XHRcdGNhc2UgMjA6XG5cdFx0XHRcdFx0XHRcdFx0X2NvbnRleHQ0Lm5leHQgPSAyNjtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdFx0XHRjYXNlIDIyOlxuXHRcdFx0XHRcdFx0XHRcdF9jb250ZXh0NC5wcmV2ID0gMjI7XG5cdFx0XHRcdFx0XHRcdFx0X2NvbnRleHQ0LnQwID0gX2NvbnRleHQ0WydjYXRjaCddKDEwKTtcblx0XHRcdFx0XHRcdFx0XHRfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0X2l0ZXJhdG9yRXJyb3IgPSBfY29udGV4dDQudDA7XG5cblx0XHRcdFx0XHRcdFx0Y2FzZSAyNjpcblx0XHRcdFx0XHRcdFx0XHRfY29udGV4dDQucHJldiA9IDI2O1xuXHRcdFx0XHRcdFx0XHRcdF9jb250ZXh0NC5wcmV2ID0gMjc7XG5cblx0XHRcdFx0XHRcdFx0XHRpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuXHRcdFx0XHRcdFx0XHRcdFx0X2l0ZXJhdG9yLnJldHVybigpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRjYXNlIDI5OlxuXHRcdFx0XHRcdFx0XHRcdF9jb250ZXh0NC5wcmV2ID0gMjk7XG5cblx0XHRcdFx0XHRcdFx0XHRpZiAoIV9kaWRJdGVyYXRvckVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRfY29udGV4dDQubmV4dCA9IDMyO1xuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0dGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG5cblx0XHRcdFx0XHRcdFx0Y2FzZSAzMjpcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gX2NvbnRleHQ0LmZpbmlzaCgyOSk7XG5cblx0XHRcdFx0XHRcdFx0Y2FzZSAzMzpcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gX2NvbnRleHQ0LmZpbmlzaCgyNik7XG5cblx0XHRcdFx0XHRcdFx0Y2FzZSAzNDpcblx0XHRcdFx0XHRcdFx0XHRfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0X2RpZEl0ZXJhdG9yRXJyb3IyID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdFx0X2l0ZXJhdG9yRXJyb3IyID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRcdF9jb250ZXh0NC5wcmV2ID0gMzc7XG5cdFx0XHRcdFx0XHRcdFx0X2l0ZXJhdG9yMiA9IHN0YXRpY0FueUxpc3RlbmVyc1tTeW1ib2wuaXRlcmF0b3JdKCk7XG5cblx0XHRcdFx0XHRcdFx0Y2FzZSAzOTpcblx0XHRcdFx0XHRcdFx0XHRpZiAoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSAoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uZXh0KCkpLmRvbmUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdF9jb250ZXh0NC5uZXh0ID0gNDc7XG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRfbGlzdGVuZXIgPSBfc3RlcDIudmFsdWU7XG5cblx0XHRcdFx0XHRcdFx0XHRpZiAoIWFueUxpc3RlbmVycy5oYXMoX2xpc3RlbmVyKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0X2NvbnRleHQ0Lm5leHQgPSA0NDtcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdF9jb250ZXh0NC5uZXh0ID0gNDQ7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIF9saXN0ZW5lcihldmVudE5hbWUsIGV2ZW50RGF0YSk7XG5cblx0XHRcdFx0XHRcdFx0Y2FzZSA0NDpcblx0XHRcdFx0XHRcdFx0XHRfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0X2NvbnRleHQ0Lm5leHQgPSAzOTtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdFx0XHRjYXNlIDQ3OlxuXHRcdFx0XHRcdFx0XHRcdF9jb250ZXh0NC5uZXh0ID0gNTM7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRcdFx0Y2FzZSA0OTpcblx0XHRcdFx0XHRcdFx0XHRfY29udGV4dDQucHJldiA9IDQ5O1xuXHRcdFx0XHRcdFx0XHRcdF9jb250ZXh0NC50MSA9IF9jb250ZXh0NFsnY2F0Y2gnXSgzNyk7XG5cdFx0XHRcdFx0XHRcdFx0X2RpZEl0ZXJhdG9yRXJyb3IyID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHRfaXRlcmF0b3JFcnJvcjIgPSBfY29udGV4dDQudDE7XG5cblx0XHRcdFx0XHRcdFx0Y2FzZSA1Mzpcblx0XHRcdFx0XHRcdFx0XHRfY29udGV4dDQucHJldiA9IDUzO1xuXHRcdFx0XHRcdFx0XHRcdF9jb250ZXh0NC5wcmV2ID0gNTQ7XG5cblx0XHRcdFx0XHRcdFx0XHRpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yICYmIF9pdGVyYXRvcjIucmV0dXJuKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRfaXRlcmF0b3IyLnJldHVybigpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRjYXNlIDU2OlxuXHRcdFx0XHRcdFx0XHRcdF9jb250ZXh0NC5wcmV2ID0gNTY7XG5cblx0XHRcdFx0XHRcdFx0XHRpZiAoIV9kaWRJdGVyYXRvckVycm9yMikge1xuXHRcdFx0XHRcdFx0XHRcdFx0X2NvbnRleHQ0Lm5leHQgPSA1OTtcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdHRocm93IF9pdGVyYXRvckVycm9yMjtcblxuXHRcdFx0XHRcdFx0XHRjYXNlIDU5OlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBfY29udGV4dDQuZmluaXNoKDU2KTtcblxuXHRcdFx0XHRcdFx0XHRjYXNlIDYwOlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBfY29udGV4dDQuZmluaXNoKDUzKTtcblxuXHRcdFx0XHRcdFx0XHRjYXNlIDYxOlxuXHRcdFx0XHRcdFx0XHRjYXNlICdlbmQnOlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBfY29udGV4dDQuc3RvcCgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgX2NhbGxlZTQsIHRoaXMsIFtbMTAsIDIyLCAyNiwgMzRdLCBbMjcsLCAyOSwgMzNdLCBbMzcsIDQ5LCA1MywgNjFdLCBbNTQsLCA1NiwgNjBdXSk7XG5cdFx0XHR9KSk7XG5cblx0XHRcdGZ1bmN0aW9uIGVtaXRTZXJpYWwoX3g1LCBfeDYpIHtcblx0XHRcdFx0cmV0dXJuIF9yZWY0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBlbWl0U2VyaWFsO1xuXHRcdH0oKVxuXHR9LCB7XG5cdFx0a2V5OiAnb25BbnknLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBvbkFueShsaXN0ZW5lcikge1xuXHRcdFx0YXNzZXJ0TGlzdGVuZXIobGlzdGVuZXIpO1xuXHRcdFx0YW55TWFwLmdldCh0aGlzKS5hZGQobGlzdGVuZXIpO1xuXHRcdFx0cmV0dXJuIHRoaXMub2ZmQW55LmJpbmQodGhpcywgbGlzdGVuZXIpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ29mZkFueScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIG9mZkFueShsaXN0ZW5lcikge1xuXHRcdFx0YXNzZXJ0TGlzdGVuZXIobGlzdGVuZXIpO1xuXHRcdFx0YW55TWFwLmdldCh0aGlzKS5kZWxldGUobGlzdGVuZXIpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2NsZWFyTGlzdGVuZXJzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY2xlYXJMaXN0ZW5lcnMoZXZlbnROYW1lKSB7XG5cdFx0XHRpZiAodHlwZW9mIGV2ZW50TmFtZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0Z2V0TGlzdGVuZXJzKHRoaXMsIGV2ZW50TmFtZSkuY2xlYXIoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGFueU1hcC5nZXQodGhpcykuY2xlYXIoKTtcblx0XHRcdFx0dmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gdHJ1ZTtcblx0XHRcdFx0dmFyIF9kaWRJdGVyYXRvckVycm9yMyA9IGZhbHNlO1xuXHRcdFx0XHR2YXIgX2l0ZXJhdG9yRXJyb3IzID0gdW5kZWZpbmVkO1xuXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Zm9yICh2YXIgX2l0ZXJhdG9yMyA9IGV2ZW50c01hcC5nZXQodGhpcykudmFsdWVzKClbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDM7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSAoX3N0ZXAzID0gX2l0ZXJhdG9yMy5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IHRydWUpIHtcblx0XHRcdFx0XHRcdHZhciBsaXN0ZW5lcnMgPSBfc3RlcDMudmFsdWU7XG5cblx0XHRcdFx0XHRcdGxpc3RlbmVycy5jbGVhcigpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0X2RpZEl0ZXJhdG9yRXJyb3IzID0gdHJ1ZTtcblx0XHRcdFx0XHRfaXRlcmF0b3JFcnJvcjMgPSBlcnI7XG5cdFx0XHRcdH0gZmluYWxseSB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgJiYgX2l0ZXJhdG9yMy5yZXR1cm4pIHtcblx0XHRcdFx0XHRcdFx0X2l0ZXJhdG9yMy5yZXR1cm4oKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGZpbmFsbHkge1xuXHRcdFx0XHRcdFx0aWYgKF9kaWRJdGVyYXRvckVycm9yMykge1xuXHRcdFx0XHRcdFx0XHR0aHJvdyBfaXRlcmF0b3JFcnJvcjM7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnbGlzdGVuZXJDb3VudCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGxpc3RlbmVyQ291bnQoZXZlbnROYW1lKSB7XG5cdFx0XHRpZiAodHlwZW9mIGV2ZW50TmFtZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0cmV0dXJuIGFueU1hcC5nZXQodGhpcykuc2l6ZSArIGdldExpc3RlbmVycyh0aGlzLCBldmVudE5hbWUpLnNpemU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0eXBlb2YgZXZlbnROYW1lICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRhc3NlcnRFdmVudE5hbWUoZXZlbnROYW1lKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGNvdW50ID0gYW55TWFwLmdldCh0aGlzKS5zaXplO1xuXG5cdFx0XHR2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjQgPSB0cnVlO1xuXHRcdFx0dmFyIF9kaWRJdGVyYXRvckVycm9yNCA9IGZhbHNlO1xuXHRcdFx0dmFyIF9pdGVyYXRvckVycm9yNCA9IHVuZGVmaW5lZDtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Zm9yICh2YXIgX2l0ZXJhdG9yNCA9IGV2ZW50c01hcC5nZXQodGhpcykudmFsdWVzKClbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDQ7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjQgPSAoX3N0ZXA0ID0gX2l0ZXJhdG9yNC5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNCA9IHRydWUpIHtcblx0XHRcdFx0XHR2YXIgdmFsdWUgPSBfc3RlcDQudmFsdWU7XG5cblx0XHRcdFx0XHRjb3VudCArPSB2YWx1ZS5zaXplO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0X2RpZEl0ZXJhdG9yRXJyb3I0ID0gdHJ1ZTtcblx0XHRcdFx0X2l0ZXJhdG9yRXJyb3I0ID0gZXJyO1xuXHRcdFx0fSBmaW5hbGx5IHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ICYmIF9pdGVyYXRvcjQucmV0dXJuKSB7XG5cdFx0XHRcdFx0XHRfaXRlcmF0b3I0LnJldHVybigpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBmaW5hbGx5IHtcblx0XHRcdFx0XHRpZiAoX2RpZEl0ZXJhdG9yRXJyb3I0KSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBfaXRlcmF0b3JFcnJvcjQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBjb3VudDtcblx0XHR9XG5cdH1dKTtcblx0cmV0dXJuIEVtaXR0ZXJ5O1xufSgpO1xuXG4vLyBTdWJjbGFzcyB1c2VkIHRvIGVuY291cmFnZSBUUyB1c2VycyB0byB0eXBlIHRoZWlyIGV2ZW50cy5cblxuXG5FbWl0dGVyeS5UeXBlZCA9IGZ1bmN0aW9uIChfRW1pdHRlcnkpIHtcblx0aW5oZXJpdHMoX2NsYXNzLCBfRW1pdHRlcnkpO1xuXG5cdGZ1bmN0aW9uIF9jbGFzcygpIHtcblx0XHRjbGFzc0NhbGxDaGVjayh0aGlzLCBfY2xhc3MpO1xuXHRcdHJldHVybiBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfY2xhc3MuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihfY2xhc3MpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblx0fVxuXG5cdHJldHVybiBfY2xhc3M7XG59KEVtaXR0ZXJ5KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFbWl0dGVyeS5UeXBlZCwgJ1R5cGVkJywge1xuXHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0dmFsdWU6IHVuZGVmaW5lZFxufSk7XG5cbnZhciBlbWl0dGVyeSA9IEVtaXR0ZXJ5O1xuXG52YXIgc3RyaWN0VXJpRW5jb2RlID0gZnVuY3Rpb24gc3RyaWN0VXJpRW5jb2RlKHN0cikge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvWyEnKCkqXS9nLCBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiAnJScgKyB4LmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gZW5jb2RlckZvckFycmF5Rm9ybWF0KG9wdGlvbnMpIHtcblx0c3dpdGNoIChvcHRpb25zLmFycmF5Rm9ybWF0KSB7XG5cdFx0Y2FzZSAnaW5kZXgnOlxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlLCBpbmRleCkge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWUgPT09IG51bGwgPyBbZW5jb2RlKGtleSwgb3B0aW9ucyksICdbJywgaW5kZXgsICddJ10uam9pbignJykgOiBbZW5jb2RlKGtleSwgb3B0aW9ucyksICdbJywgZW5jb2RlKGluZGV4LCBvcHRpb25zKSwgJ109JywgZW5jb2RlKHZhbHVlLCBvcHRpb25zKV0uam9pbignJyk7XG5cdFx0XHR9O1xuXHRcdGNhc2UgJ2JyYWNrZXQnOlxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZSA9PT0gbnVsbCA/IGVuY29kZShrZXksIG9wdGlvbnMpIDogW2VuY29kZShrZXksIG9wdGlvbnMpLCAnW109JywgZW5jb2RlKHZhbHVlLCBvcHRpb25zKV0uam9pbignJyk7XG5cdFx0XHR9O1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlID09PSBudWxsID8gZW5jb2RlKGtleSwgb3B0aW9ucykgOiBbZW5jb2RlKGtleSwgb3B0aW9ucyksICc9JywgZW5jb2RlKHZhbHVlLCBvcHRpb25zKV0uam9pbignJyk7XG5cdFx0XHR9O1xuXHR9XG59XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWx1ZSwgb3B0aW9ucykge1xuXHRpZiAob3B0aW9ucy5lbmNvZGUpIHtcblx0XHRyZXR1cm4gb3B0aW9ucy5zdHJpY3QgPyBzdHJpY3RVcmlFbmNvZGUodmFsdWUpIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxudmFyIHN0cmluZ2lmeSA9IGZ1bmN0aW9uIHN0cmluZ2lmeShvYmosIG9wdGlvbnMpIHtcblx0dmFyIGRlZmF1bHRzJCQxID0ge1xuXHRcdGVuY29kZTogdHJ1ZSxcblx0XHRzdHJpY3Q6IHRydWUsXG5cdFx0YXJyYXlGb3JtYXQ6ICdub25lJ1xuXHR9O1xuXG5cdG9wdGlvbnMgPSBfZXh0ZW5kcyhkZWZhdWx0cyQkMSwgb3B0aW9ucyk7XG5cblx0aWYgKG9wdGlvbnMuc29ydCA9PT0gZmFsc2UpIHtcblx0XHRvcHRpb25zLnNvcnQgPSBmdW5jdGlvbiAoKSB7fTtcblx0fVxuXG5cdHZhciBmb3JtYXR0ZXIgPSBlbmNvZGVyRm9yQXJyYXlGb3JtYXQob3B0aW9ucyk7XG5cblx0cmV0dXJuIG9iaiA/IE9iamVjdC5rZXlzKG9iaikuc29ydChvcHRpb25zLnNvcnQpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0dmFyIHZhbHVlID0gb2JqW2tleV07XG5cblx0XHRpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblxuXHRcdGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGVuY29kZShrZXksIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdFx0dmFyIHJlc3VsdCA9IFtdO1xuXG5cdFx0XHR2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlO1xuXHRcdFx0dmFyIF9kaWRJdGVyYXRvckVycm9yMiA9IGZhbHNlO1xuXHRcdFx0dmFyIF9pdGVyYXRvckVycm9yMiA9IHVuZGVmaW5lZDtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Zm9yICh2YXIgX2l0ZXJhdG9yMiA9IHZhbHVlLnNsaWNlKClbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDI7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSAoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWUpIHtcblx0XHRcdFx0XHR2YXIgdmFsdWUyID0gX3N0ZXAyLnZhbHVlO1xuXG5cdFx0XHRcdFx0aWYgKHZhbHVlMiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXN1bHQucHVzaChmb3JtYXR0ZXIoa2V5LCB2YWx1ZTIsIHJlc3VsdC5sZW5ndGgpKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdF9kaWRJdGVyYXRvckVycm9yMiA9IHRydWU7XG5cdFx0XHRcdF9pdGVyYXRvckVycm9yMiA9IGVycjtcblx0XHRcdH0gZmluYWxseSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiAmJiBfaXRlcmF0b3IyLnJldHVybikge1xuXHRcdFx0XHRcdFx0X2l0ZXJhdG9yMi5yZXR1cm4oKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZmluYWxseSB7XG5cdFx0XHRcdFx0aWYgKF9kaWRJdGVyYXRvckVycm9yMikge1xuXHRcdFx0XHRcdFx0dGhyb3cgX2l0ZXJhdG9yRXJyb3IyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oJyYnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZW5jb2RlKGtleSwgb3B0aW9ucykgKyAnPScgKyBlbmNvZGUodmFsdWUsIG9wdGlvbnMpO1xuXHR9KS5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcblx0XHRyZXR1cm4geC5sZW5ndGggPiAwO1xuXHR9KS5qb2luKCcmJykgOiAnJztcbn07XG5cbnZhciBjb21tb25qc0dsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDoge307XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZuLCBtb2R1bGUpIHtcblx0cmV0dXJuIG1vZHVsZSA9IHsgZXhwb3J0czoge30gfSwgZm4obW9kdWxlLCBtb2R1bGUuZXhwb3J0cyksIG1vZHVsZS5leHBvcnRzO1xufVxuXG52YXIgd3NwX2Jyb3dzZXIgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG4gICFmdW5jdGlvbiAodCwgZSkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZSgpO1xuICB9KGNvbW1vbmpzR2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IF90eXBlb2YoU3ltYm9sLml0ZXJhdG9yKSA/IGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHQgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHQpO1xuICAgIH0gOiBmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHQgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgdC5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIHQgIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIHQgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHQpO1xuICAgIH0sXG4gICAgICAgIGUgPSB7IE9QRU46IDAsIEpPSU46IDEsIExFQVZFOiAyLCBKT0lOX0FDSzogMywgSk9JTl9FUlJPUjogNCwgTEVBVkVfQUNLOiA1LCBMRUFWRV9FUlJPUjogNiwgRVZFTlQ6IDcsIFBJTkc6IDgsIFBPTkc6IDkgfTtmdW5jdGlvbiBvKHQsIGUsIG8pIHtcbiAgICAgIHJldHVybiBvLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgIWZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgICAgaWYgKCF0IHx8IFwic3RyaW5nXCIgIT0gdHlwZW9mIHQpIHRocm93IG5ldyBFcnJvcihlKTtcbiAgICAgICAgfShlW3RdLCBcImV4cGVjdGVkIFwiICsgdCArIFwiIHRvIGJlIGEgdmFsaWQgc3RyaW5nXCIpO1xuICAgICAgfSksIHsgdDogdCwgZDogZSB9O1xuICAgIH12YXIgbiA9IHt9O3JldHVybiBPYmplY3Qua2V5cyhlKS5mb3JFYWNoKGZ1bmN0aW9uIChvKSB7XG4gICAgICB2YXIgaSA9IG8udG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9eXFx3fF8oXFx3KS9nLCBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgICByZXR1cm4gZSA/IGUudG9VcHBlckNhc2UoKSA6IHQudG9VcHBlckNhc2UoKTtcbiAgICAgIH0pO25bXCJpc1wiICsgaSArIFwiUGFja2V0XCJdID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgcmV0dXJuICEoIW4gfHwgXCJvYmplY3RcIiAhPT0gKHZvaWQgMCA9PT0gbiA/IFwidW5kZWZpbmVkXCIgOiB0KG4pKSB8fCBuLnQgIT09IGVbb10pO1xuICAgICAgfTtcbiAgICB9KSwgbi5oYXNUb3BpYyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gISEodCAmJiB0LmQgJiYgdC5kLnRvcGljKTtcbiAgICB9LCBuLmlzVmFsaWRKb2luUGFja2V0ID0gbi5oYXNUb3BpYywgbi5pc1ZhbGlkTGVhdmVQYWNrZXQgPSBuLmhhc1RvcGljLCBuLmlzVmFsaWRFdmVudFBhY2tldCA9IG4uaGFzVG9waWMsIG4uam9pblBhY2tldCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gbyhlLkpPSU4sIHsgdG9waWM6IHQgfSwgW1widG9waWNcIl0pO1xuICAgIH0sIG4ubGVhdmVQYWNrZXQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIG8oZS5MRUFWRSwgeyB0b3BpYzogdCB9LCBbXCJ0b3BpY1wiXSk7XG4gICAgfSwgbi5qb2luQWNrUGFja2V0ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiBvKGUuSk9JTl9BQ0ssIHsgdG9waWM6IHQgfSwgW1widG9waWNcIl0pO1xuICAgIH0sIG4uam9pbkVycm9yUGFja2V0ID0gZnVuY3Rpb24gKHQsIG4pIHtcbiAgICAgIHJldHVybiBvKGUuSk9JTl9FUlJPUiwgeyB0b3BpYzogdCwgbWVzc2FnZTogbiB9LCBbXCJ0b3BpY1wiLCBcIm1lc3NhZ2VcIl0pO1xuICAgIH0sIG4ubGVhdmVBY2tQYWNrZXQgPSBmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIG8oZS5MRUFWRV9BQ0ssIHsgdG9waWM6IHQgfSwgW1widG9waWNcIl0pO1xuICAgIH0sIG4ubGVhdmVFcnJvclBhY2tldCA9IGZ1bmN0aW9uICh0LCBuKSB7XG4gICAgICByZXR1cm4gbyhlLkxFQVZFX0VSUk9SLCB7IHRvcGljOiB0LCBtZXNzYWdlOiBuIH0sIFtcInRvcGljXCIsIFwibWVzc2FnZVwiXSk7XG4gICAgfSwgbi5ldmVudFBhY2tldCA9IGZ1bmN0aW9uICh0LCBuLCBpKSB7XG4gICAgICByZXR1cm4gbyhlLkVWRU5ULCB7IHRvcGljOiB0LCBldmVudDogbiwgZGF0YTogaSA9IGkgfHwgXCJcIiB9LCBbXCJ0b3BpY1wiLCBcImV2ZW50XCJdKTtcbiAgICB9LCBuLnBpbmdQYWNrZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4geyB0OiBlLlBJTkcgfTtcbiAgICB9LCBuLnBvbmdQYWNrZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4geyB0OiBlLlBPTkcgfTtcbiAgICB9LCBfZXh0ZW5kcyh7IGNvZGVzOiBlIH0sIG4pO1xuICB9KTtcbn0pO1xuXG4vKipcbiAqIEhlbHBlcnMuXG4gKi9cblxudmFyIHMgPSAxMDAwO1xudmFyIG0gPSBzICogNjA7XG52YXIgaCA9IG0gKiA2MDtcbnZhciBkID0gaCAqIDI0O1xudmFyIHkgPSBkICogMzY1LjI1O1xuXG4vKipcbiAqIFBhcnNlIG9yIGZvcm1hdCB0aGUgZ2l2ZW4gYHZhbGAuXG4gKlxuICogT3B0aW9uczpcbiAqXG4gKiAgLSBgbG9uZ2AgdmVyYm9zZSBmb3JtYXR0aW5nIFtmYWxzZV1cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IHZhbFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHRocm93cyB7RXJyb3J9IHRocm93IGFuIGVycm9yIGlmIHZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgbnVtYmVyXG4gKiBAcmV0dXJuIHtTdHJpbmd8TnVtYmVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG52YXIgbXMgPSBmdW5jdGlvbiBtcyh2YWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsKTtcbiAgaWYgKHR5cGUgPT09ICdzdHJpbmcnICYmIHZhbC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlJDEodmFsKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiBpc05hTih2YWwpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBvcHRpb25zLmxvbmcgPyBmbXRMb25nKHZhbCkgOiBmbXRTaG9ydCh2YWwpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcigndmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSB2YWxpZCBudW1iZXIuIHZhbD0nICsgSlNPTi5zdHJpbmdpZnkodmFsKSk7XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBgc3RyYCBhbmQgcmV0dXJuIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZSQxKHN0cikge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHN0ci5sZW5ndGggPiAxMDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG1hdGNoID0gL14oKD86XFxkKyk/XFwuP1xcZCspICoobWlsbGlzZWNvbmRzP3xtc2Vjcz98bXN8c2Vjb25kcz98c2Vjcz98c3xtaW51dGVzP3xtaW5zP3xtfGhvdXJzP3xocnM/fGh8ZGF5cz98ZHx5ZWFycz98eXJzP3x5KT8kL2kuZXhlYyhzdHIpO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuID0gcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIHZhciB0eXBlID0gKG1hdGNoWzJdIHx8ICdtcycpLnRvTG93ZXJDYXNlKCk7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3llYXJzJzpcbiAgICBjYXNlICd5ZWFyJzpcbiAgICBjYXNlICd5cnMnOlxuICAgIGNhc2UgJ3lyJzpcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiBuICogeTtcbiAgICBjYXNlICdkYXlzJzpcbiAgICBjYXNlICdkYXknOlxuICAgIGNhc2UgJ2QnOlxuICAgICAgcmV0dXJuIG4gKiBkO1xuICAgIGNhc2UgJ2hvdXJzJzpcbiAgICBjYXNlICdob3VyJzpcbiAgICBjYXNlICdocnMnOlxuICAgIGNhc2UgJ2hyJzpcbiAgICBjYXNlICdoJzpcbiAgICAgIHJldHVybiBuICogaDtcbiAgICBjYXNlICdtaW51dGVzJzpcbiAgICBjYXNlICdtaW51dGUnOlxuICAgIGNhc2UgJ21pbnMnOlxuICAgIGNhc2UgJ21pbic6XG4gICAgY2FzZSAnbSc6XG4gICAgICByZXR1cm4gbiAqIG07XG4gICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgY2FzZSAnc2Vjb25kJzpcbiAgICBjYXNlICdzZWNzJzpcbiAgICBjYXNlICdzZWMnOlxuICAgIGNhc2UgJ3MnOlxuICAgICAgcmV0dXJuIG4gKiBzO1xuICAgIGNhc2UgJ21pbGxpc2Vjb25kcyc6XG4gICAgY2FzZSAnbWlsbGlzZWNvbmQnOlxuICAgIGNhc2UgJ21zZWNzJzpcbiAgICBjYXNlICdtc2VjJzpcbiAgICBjYXNlICdtcyc6XG4gICAgICByZXR1cm4gbjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG4vKipcbiAqIFNob3J0IGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdFNob3J0KG1zKSB7XG4gIGlmIChtcyA+PSBkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBkKSArICdkJztcbiAgfVxuICBpZiAobXMgPj0gaCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gaCkgKyAnaCc7XG4gIH1cbiAgaWYgKG1zID49IG0pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG0pICsgJ20nO1xuICB9XG4gIGlmIChtcyA+PSBzKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBzKSArICdzJztcbiAgfVxuICByZXR1cm4gbXMgKyAnbXMnO1xufVxuXG4vKipcbiAqIExvbmcgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10TG9uZyhtcykge1xuICByZXR1cm4gcGx1cmFsKG1zLCBkLCAnZGF5JykgfHwgcGx1cmFsKG1zLCBoLCAnaG91cicpIHx8IHBsdXJhbChtcywgbSwgJ21pbnV0ZScpIHx8IHBsdXJhbChtcywgcywgJ3NlY29uZCcpIHx8IG1zICsgJyBtcyc7XG59XG5cbi8qKlxuICogUGx1cmFsaXphdGlvbiBoZWxwZXIuXG4gKi9cblxuZnVuY3Rpb24gcGx1cmFsKG1zLCBuLCBuYW1lKSB7XG4gIGlmIChtcyA8IG4pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKG1zIDwgbiAqIDEuNSkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKG1zIC8gbikgKyAnICcgKyBuYW1lO1xuICB9XG4gIHJldHVybiBNYXRoLmNlaWwobXMgLyBuKSArICcgJyArIG5hbWUgKyAncyc7XG59XG5cbnZhciBkZWJ1ZyA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIGNvbW1vbiBsb2dpYyBmb3IgYm90aCB0aGUgTm9kZS5qcyBhbmQgd2ViIGJyb3dzZXJcbiAgICogaW1wbGVtZW50YXRpb25zIG9mIGBkZWJ1ZygpYC5cbiAgICpcbiAgICogRXhwb3NlIGBkZWJ1ZygpYCBhcyB0aGUgbW9kdWxlLlxuICAgKi9cblxuICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVEZWJ1Zy5kZWJ1ZyA9IGNyZWF0ZURlYnVnWydkZWZhdWx0J10gPSBjcmVhdGVEZWJ1ZztcbiAgZXhwb3J0cy5jb2VyY2UgPSBjb2VyY2U7XG4gIGV4cG9ydHMuZGlzYWJsZSA9IGRpc2FibGU7XG4gIGV4cG9ydHMuZW5hYmxlID0gZW5hYmxlO1xuICBleHBvcnRzLmVuYWJsZWQgPSBlbmFibGVkO1xuICBleHBvcnRzLmh1bWFuaXplID0gbXM7XG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50bHkgYWN0aXZlIGRlYnVnIG1vZGUgbmFtZXMsIGFuZCBuYW1lcyB0byBza2lwLlxuICAgKi9cblxuICBleHBvcnRzLm5hbWVzID0gW107XG4gIGV4cG9ydHMuc2tpcHMgPSBbXTtcblxuICAvKipcbiAgICogTWFwIG9mIHNwZWNpYWwgXCIlblwiIGhhbmRsaW5nIGZ1bmN0aW9ucywgZm9yIHRoZSBkZWJ1ZyBcImZvcm1hdFwiIGFyZ3VtZW50LlxuICAgKlxuICAgKiBWYWxpZCBrZXkgbmFtZXMgYXJlIGEgc2luZ2xlLCBsb3dlciBvciB1cHBlci1jYXNlIGxldHRlciwgaS5lLiBcIm5cIiBhbmQgXCJOXCIuXG4gICAqL1xuXG4gIGV4cG9ydHMuZm9ybWF0dGVycyA9IHt9O1xuXG4gIC8qKlxuICAgKiBQcmV2aW91cyBsb2cgdGltZXN0YW1wLlxuICAgKi9cblxuICB2YXIgcHJldlRpbWU7XG5cbiAgLyoqXG4gICAqIFNlbGVjdCBhIGNvbG9yLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG4gICAqIEByZXR1cm4ge051bWJlcn1cbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHNlbGVjdENvbG9yKG5hbWVzcGFjZSkge1xuICAgIHZhciBoYXNoID0gMCxcbiAgICAgICAgaTtcblxuICAgIGZvciAoaSBpbiBuYW1lc3BhY2UpIHtcbiAgICAgIGhhc2ggPSAoaGFzaCA8PCA1KSAtIGhhc2ggKyBuYW1lc3BhY2UuY2hhckNvZGVBdChpKTtcbiAgICAgIGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG4gICAgfVxuXG4gICAgcmV0dXJuIGV4cG9ydHMuY29sb3JzW01hdGguYWJzKGhhc2gpICUgZXhwb3J0cy5jb2xvcnMubGVuZ3RoXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBkZWJ1Z2dlciB3aXRoIHRoZSBnaXZlbiBgbmFtZXNwYWNlYC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuICAgKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgZnVuY3Rpb24gY3JlYXRlRGVidWcobmFtZXNwYWNlKSB7XG5cbiAgICBmdW5jdGlvbiBkZWJ1ZygpIHtcbiAgICAgIC8vIGRpc2FibGVkP1xuICAgICAgaWYgKCFkZWJ1Zy5lbmFibGVkKSByZXR1cm47XG5cbiAgICAgIHZhciBzZWxmID0gZGVidWc7XG5cbiAgICAgIC8vIHNldCBgZGlmZmAgdGltZXN0YW1wXG4gICAgICB2YXIgY3VyciA9ICtuZXcgRGF0ZSgpO1xuICAgICAgdmFyIG1zJCQxID0gY3VyciAtIChwcmV2VGltZSB8fCBjdXJyKTtcbiAgICAgIHNlbGYuZGlmZiA9IG1zJCQxO1xuICAgICAgc2VsZi5wcmV2ID0gcHJldlRpbWU7XG4gICAgICBzZWxmLmN1cnIgPSBjdXJyO1xuICAgICAgcHJldlRpbWUgPSBjdXJyO1xuXG4gICAgICAvLyB0dXJuIHRoZSBgYXJndW1lbnRzYCBpbnRvIGEgcHJvcGVyIEFycmF5XG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgICAgfVxuXG4gICAgICBhcmdzWzBdID0gZXhwb3J0cy5jb2VyY2UoYXJnc1swXSk7XG5cbiAgICAgIGlmICgnc3RyaW5nJyAhPT0gdHlwZW9mIGFyZ3NbMF0pIHtcbiAgICAgICAgLy8gYW55dGhpbmcgZWxzZSBsZXQncyBpbnNwZWN0IHdpdGggJU9cbiAgICAgICAgYXJncy51bnNoaWZ0KCclTycpO1xuICAgICAgfVxuXG4gICAgICAvLyBhcHBseSBhbnkgYGZvcm1hdHRlcnNgIHRyYW5zZm9ybWF0aW9uc1xuICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgIGFyZ3NbMF0gPSBhcmdzWzBdLnJlcGxhY2UoLyUoW2EtekEtWiVdKS9nLCBmdW5jdGlvbiAobWF0Y2gsIGZvcm1hdCkge1xuICAgICAgICAvLyBpZiB3ZSBlbmNvdW50ZXIgYW4gZXNjYXBlZCAlIHRoZW4gZG9uJ3QgaW5jcmVhc2UgdGhlIGFycmF5IGluZGV4XG4gICAgICAgIGlmIChtYXRjaCA9PT0gJyUlJykgcmV0dXJuIG1hdGNoO1xuICAgICAgICBpbmRleCsrO1xuICAgICAgICB2YXIgZm9ybWF0dGVyID0gZXhwb3J0cy5mb3JtYXR0ZXJzW2Zvcm1hdF07XG4gICAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZm9ybWF0dGVyKSB7XG4gICAgICAgICAgdmFyIHZhbCA9IGFyZ3NbaW5kZXhdO1xuICAgICAgICAgIG1hdGNoID0gZm9ybWF0dGVyLmNhbGwoc2VsZiwgdmFsKTtcblxuICAgICAgICAgIC8vIG5vdyB3ZSBuZWVkIHRvIHJlbW92ZSBgYXJnc1tpbmRleF1gIHNpbmNlIGl0J3MgaW5saW5lZCBpbiB0aGUgYGZvcm1hdGBcbiAgICAgICAgICBhcmdzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgaW5kZXgtLTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICB9KTtcblxuICAgICAgLy8gYXBwbHkgZW52LXNwZWNpZmljIGZvcm1hdHRpbmcgKGNvbG9ycywgZXRjLilcbiAgICAgIGV4cG9ydHMuZm9ybWF0QXJncy5jYWxsKHNlbGYsIGFyZ3MpO1xuXG4gICAgICB2YXIgbG9nRm4gPSBkZWJ1Zy5sb2cgfHwgZXhwb3J0cy5sb2cgfHwgY29uc29sZS5sb2cuYmluZChjb25zb2xlKTtcbiAgICAgIGxvZ0ZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgIH1cblxuICAgIGRlYnVnLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcbiAgICBkZWJ1Zy5lbmFibGVkID0gZXhwb3J0cy5lbmFibGVkKG5hbWVzcGFjZSk7XG4gICAgZGVidWcudXNlQ29sb3JzID0gZXhwb3J0cy51c2VDb2xvcnMoKTtcbiAgICBkZWJ1Zy5jb2xvciA9IHNlbGVjdENvbG9yKG5hbWVzcGFjZSk7XG5cbiAgICAvLyBlbnYtc3BlY2lmaWMgaW5pdGlhbGl6YXRpb24gbG9naWMgZm9yIGRlYnVnIGluc3RhbmNlc1xuICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZXhwb3J0cy5pbml0KSB7XG4gICAgICBleHBvcnRzLmluaXQoZGVidWcpO1xuICAgIH1cblxuICAgIHJldHVybiBkZWJ1ZztcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIGEgZGVidWcgbW9kZSBieSBuYW1lc3BhY2VzLiBUaGlzIGNhbiBpbmNsdWRlIG1vZGVzXG4gICAqIHNlcGFyYXRlZCBieSBhIGNvbG9uIGFuZCB3aWxkY2FyZHMuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGVuYWJsZShuYW1lc3BhY2VzKSB7XG4gICAgZXhwb3J0cy5zYXZlKG5hbWVzcGFjZXMpO1xuXG4gICAgZXhwb3J0cy5uYW1lcyA9IFtdO1xuICAgIGV4cG9ydHMuc2tpcHMgPSBbXTtcblxuICAgIHZhciBzcGxpdCA9ICh0eXBlb2YgbmFtZXNwYWNlcyA9PT0gJ3N0cmluZycgPyBuYW1lc3BhY2VzIDogJycpLnNwbGl0KC9bXFxzLF0rLyk7XG4gICAgdmFyIGxlbiA9IHNwbGl0Lmxlbmd0aDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGlmICghc3BsaXRbaV0pIGNvbnRpbnVlOyAvLyBpZ25vcmUgZW1wdHkgc3RyaW5nc1xuICAgICAgbmFtZXNwYWNlcyA9IHNwbGl0W2ldLnJlcGxhY2UoL1xcKi9nLCAnLio/Jyk7XG4gICAgICBpZiAobmFtZXNwYWNlc1swXSA9PT0gJy0nKSB7XG4gICAgICAgIGV4cG9ydHMuc2tpcHMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMuc3Vic3RyKDEpICsgJyQnKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBleHBvcnRzLm5hbWVzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzICsgJyQnKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGUgZGVidWcgb3V0cHV0LlxuICAgKlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgIGV4cG9ydHMuZW5hYmxlKCcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG1vZGUgbmFtZSBpcyBlbmFibGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGVuYWJsZWQobmFtZSkge1xuICAgIHZhciBpLCBsZW47XG4gICAgZm9yIChpID0gMCwgbGVuID0gZXhwb3J0cy5za2lwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgaWYgKGV4cG9ydHMuc2tpcHNbaV0udGVzdChuYW1lKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoaSA9IDAsIGxlbiA9IGV4cG9ydHMubmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGlmIChleHBvcnRzLm5hbWVzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb2VyY2UgYHZhbGAuXG4gICAqXG4gICAqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuICAgKiBAcmV0dXJuIHtNaXhlZH1cbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGNvZXJjZSh2YWwpIHtcbiAgICBpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHJldHVybiB2YWwuc3RhY2sgfHwgdmFsLm1lc3NhZ2U7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxufSk7XG52YXIgZGVidWdfMSA9IGRlYnVnLmNvZXJjZTtcbnZhciBkZWJ1Z18yID0gZGVidWcuZGlzYWJsZTtcbnZhciBkZWJ1Z18zID0gZGVidWcuZW5hYmxlO1xudmFyIGRlYnVnXzQgPSBkZWJ1Zy5lbmFibGVkO1xudmFyIGRlYnVnXzUgPSBkZWJ1Zy5odW1hbml6ZTtcbnZhciBkZWJ1Z182ID0gZGVidWcubmFtZXM7XG52YXIgZGVidWdfNyA9IGRlYnVnLnNraXBzO1xudmFyIGRlYnVnXzggPSBkZWJ1Zy5mb3JtYXR0ZXJzO1xuXG52YXIgYnJvd3NlciA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIHdlYiBicm93c2VyIGltcGxlbWVudGF0aW9uIG9mIGBkZWJ1ZygpYC5cbiAgICpcbiAgICogRXhwb3NlIGBkZWJ1ZygpYCBhcyB0aGUgbW9kdWxlLlxuICAgKi9cblxuICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBkZWJ1ZztcbiAgZXhwb3J0cy5sb2cgPSBsb2c7XG4gIGV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG4gIGV4cG9ydHMuc2F2ZSA9IHNhdmU7XG4gIGV4cG9ydHMubG9hZCA9IGxvYWQ7XG4gIGV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuICBleHBvcnRzLnN0b3JhZ2UgPSAndW5kZWZpbmVkJyAhPSB0eXBlb2YgY2hyb21lICYmICd1bmRlZmluZWQnICE9IHR5cGVvZiBjaHJvbWUuc3RvcmFnZSA/IGNocm9tZS5zdG9yYWdlLmxvY2FsIDogbG9jYWxzdG9yYWdlKCk7XG5cbiAgLyoqXG4gICAqIENvbG9ycy5cbiAgICovXG5cbiAgZXhwb3J0cy5jb2xvcnMgPSBbJ2xpZ2h0c2VhZ3JlZW4nLCAnZm9yZXN0Z3JlZW4nLCAnZ29sZGVucm9kJywgJ2RvZGdlcmJsdWUnLCAnZGFya29yY2hpZCcsICdjcmltc29uJ107XG5cbiAgLyoqXG4gICAqIEN1cnJlbnRseSBvbmx5IFdlYktpdC1iYXNlZCBXZWIgSW5zcGVjdG9ycywgRmlyZWZveCA+PSB2MzEsXG4gICAqIGFuZCB0aGUgRmlyZWJ1ZyBleHRlbnNpb24gKGFueSBGaXJlZm94IHZlcnNpb24pIGFyZSBrbm93blxuICAgKiB0byBzdXBwb3J0IFwiJWNcIiBDU1MgY3VzdG9taXphdGlvbnMuXG4gICAqXG4gICAqIFRPRE86IGFkZCBhIGBsb2NhbFN0b3JhZ2VgIHZhcmlhYmxlIHRvIGV4cGxpY2l0bHkgZW5hYmxlL2Rpc2FibGUgY29sb3JzXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHVzZUNvbG9ycygpIHtcbiAgICAvLyBOQjogSW4gYW4gRWxlY3Ryb24gcHJlbG9hZCBzY3JpcHQsIGRvY3VtZW50IHdpbGwgYmUgZGVmaW5lZCBidXQgbm90IGZ1bGx5XG4gICAgLy8gaW5pdGlhbGl6ZWQuIFNpbmNlIHdlIGtub3cgd2UncmUgaW4gQ2hyb21lLCB3ZSdsbCBqdXN0IGRldGVjdCB0aGlzIGNhc2VcbiAgICAvLyBleHBsaWNpdGx5XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wcm9jZXNzICYmIHdpbmRvdy5wcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIGlzIHdlYmtpdD8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTY0NTk2MDYvMzc2NzczXG4gICAgLy8gZG9jdW1lbnQgaXMgdW5kZWZpbmVkIGluIHJlYWN0LW5hdGl2ZTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9wdWxsLzE2MzJcbiAgICByZXR1cm4gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5XZWJraXRBcHBlYXJhbmNlIHx8XG4gICAgLy8gaXMgZmlyZWJ1Zz8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk4MTIwLzM3Njc3M1xuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5jb25zb2xlICYmICh3aW5kb3cuY29uc29sZS5maXJlYnVnIHx8IHdpbmRvdy5jb25zb2xlLmV4Y2VwdGlvbiAmJiB3aW5kb3cuY29uc29sZS50YWJsZSkgfHxcbiAgICAvLyBpcyBmaXJlZm94ID49IHYzMT9cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1Rvb2xzL1dlYl9Db25zb2xlI1N0eWxpbmdfbWVzc2FnZXNcbiAgICB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvZmlyZWZveFxcLyhcXGQrKS8pICYmIHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApID49IDMxIHx8XG4gICAgLy8gZG91YmxlIGNoZWNrIHdlYmtpdCBpbiB1c2VyQWdlbnQganVzdCBpbiBjYXNlIHdlIGFyZSBpbiBhIHdvcmtlclxuICAgIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9hcHBsZXdlYmtpdFxcLyhcXGQrKS8pO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hcCAlaiB0byBgSlNPTi5zdHJpbmdpZnkoKWAsIHNpbmNlIG5vIFdlYiBJbnNwZWN0b3JzIGRvIHRoYXQgYnkgZGVmYXVsdC5cbiAgICovXG5cbiAgZXhwb3J0cy5mb3JtYXR0ZXJzLmogPSBmdW5jdGlvbiAodikge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gJ1tVbmV4cGVjdGVkSlNPTlBhcnNlRXJyb3JdOiAnICsgZXJyLm1lc3NhZ2U7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDb2xvcml6ZSBsb2cgYXJndW1lbnRzIGlmIGVuYWJsZWQuXG4gICAqXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuICAgIHZhciB1c2VDb2xvcnMgPSB0aGlzLnVzZUNvbG9ycztcblxuICAgIGFyZ3NbMF0gPSAodXNlQ29sb3JzID8gJyVjJyA6ICcnKSArIHRoaXMubmFtZXNwYWNlICsgKHVzZUNvbG9ycyA/ICcgJWMnIDogJyAnKSArIGFyZ3NbMF0gKyAodXNlQ29sb3JzID8gJyVjICcgOiAnICcpICsgJysnICsgZXhwb3J0cy5odW1hbml6ZSh0aGlzLmRpZmYpO1xuXG4gICAgaWYgKCF1c2VDb2xvcnMpIHJldHVybjtcblxuICAgIHZhciBjID0gJ2NvbG9yOiAnICsgdGhpcy5jb2xvcjtcbiAgICBhcmdzLnNwbGljZSgxLCAwLCBjLCAnY29sb3I6IGluaGVyaXQnKTtcblxuICAgIC8vIHRoZSBmaW5hbCBcIiVjXCIgaXMgc29tZXdoYXQgdHJpY2t5LCBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG90aGVyXG4gICAgLy8gYXJndW1lbnRzIHBhc3NlZCBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSAlYywgc28gd2UgbmVlZCB0b1xuICAgIC8vIGZpZ3VyZSBvdXQgdGhlIGNvcnJlY3QgaW5kZXggdG8gaW5zZXJ0IHRoZSBDU1MgaW50b1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGxhc3RDID0gMDtcbiAgICBhcmdzWzBdLnJlcGxhY2UoLyVbYS16QS1aJV0vZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICBpZiAoJyUlJyA9PT0gbWF0Y2gpIHJldHVybjtcbiAgICAgIGluZGV4Kys7XG4gICAgICBpZiAoJyVjJyA9PT0gbWF0Y2gpIHtcbiAgICAgICAgLy8gd2Ugb25seSBhcmUgaW50ZXJlc3RlZCBpbiB0aGUgKmxhc3QqICVjXG4gICAgICAgIC8vICh0aGUgdXNlciBtYXkgaGF2ZSBwcm92aWRlZCB0aGVpciBvd24pXG4gICAgICAgIGxhc3RDID0gaW5kZXg7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBhcmdzLnNwbGljZShsYXN0QywgMCwgYyk7XG4gIH1cblxuICAvKipcbiAgICogSW52b2tlcyBgY29uc29sZS5sb2coKWAgd2hlbiBhdmFpbGFibGUuXG4gICAqIE5vLW9wIHdoZW4gYGNvbnNvbGUubG9nYCBpcyBub3QgYSBcImZ1bmN0aW9uXCIuXG4gICAqXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGxvZygpIHtcbiAgICAvLyB0aGlzIGhhY2tlcnkgaXMgcmVxdWlyZWQgZm9yIElFOC85LCB3aGVyZVxuICAgIC8vIHRoZSBgY29uc29sZS5sb2dgIGZ1bmN0aW9uIGRvZXNuJ3QgaGF2ZSAnYXBwbHknXG4gICAgcmV0dXJuICdvYmplY3QnID09PSAodHlwZW9mIGNvbnNvbGUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGNvbnNvbGUpKSAmJiBjb25zb2xlLmxvZyAmJiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlLmxvZywgY29uc29sZSwgYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlIGBuYW1lc3BhY2VzYC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHNhdmUobmFtZXNwYWNlcykge1xuICAgIHRyeSB7XG4gICAgICBpZiAobnVsbCA9PSBuYW1lc3BhY2VzKSB7XG4gICAgICAgIGV4cG9ydHMuc3RvcmFnZS5yZW1vdmVJdGVtKCdkZWJ1ZycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXhwb3J0cy5zdG9yYWdlLmRlYnVnID0gbmFtZXNwYWNlcztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgYG5hbWVzcGFjZXNgLlxuICAgKlxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cblxuICBmdW5jdGlvbiBsb2FkKCkge1xuICAgIHZhciByO1xuICAgIHRyeSB7XG4gICAgICByID0gZXhwb3J0cy5zdG9yYWdlLmRlYnVnO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAvLyBJZiBkZWJ1ZyBpc24ndCBzZXQgaW4gTFMsIGFuZCB3ZSdyZSBpbiBFbGVjdHJvbiwgdHJ5IHRvIGxvYWQgJERFQlVHXG4gICAgaWYgKCFyICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAnZW52JyBpbiBwcm9jZXNzKSB7XG4gICAgICByID0gcHJvY2Vzcy5lbnYuREVCVUc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHI7XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIG5hbWVzcGFjZXMgbGlzdGVkIGluIGBsb2NhbFN0b3JhZ2UuZGVidWdgIGluaXRpYWxseS5cbiAgICovXG5cbiAgZXhwb3J0cy5lbmFibGUobG9hZCgpKTtcblxuICAvKipcbiAgICogTG9jYWxzdG9yYWdlIGF0dGVtcHRzIHRvIHJldHVybiB0aGUgbG9jYWxzdG9yYWdlLlxuICAgKlxuICAgKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHNhZmFyaSB0aHJvd3NcbiAgICogd2hlbiBhIHVzZXIgZGlzYWJsZXMgY29va2llcy9sb2NhbHN0b3JhZ2VcbiAgICogYW5kIHlvdSBhdHRlbXB0IHRvIGFjY2VzcyBpdC5cbiAgICpcbiAgICogQHJldHVybiB7TG9jYWxTdG9yYWdlfVxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG5cbiAgZnVuY3Rpb24gbG9jYWxzdG9yYWdlKCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG59KTtcbnZhciBicm93c2VyXzEgPSBicm93c2VyLmxvZztcbnZhciBicm93c2VyXzIgPSBicm93c2VyLmZvcm1hdEFyZ3M7XG52YXIgYnJvd3Nlcl8zID0gYnJvd3Nlci5zYXZlO1xudmFyIGJyb3dzZXJfNCA9IGJyb3dzZXIubG9hZDtcbnZhciBicm93c2VyXzUgPSBicm93c2VyLnVzZUNvbG9ycztcbnZhciBicm93c2VyXzYgPSBicm93c2VyLnN0b3JhZ2U7XG52YXIgYnJvd3Nlcl83ID0gYnJvd3Nlci5jb2xvcnM7XG5cbnZhciBEZWJ1ZyA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUpIHtcblxuICAvKlxuICAgKiBhZG9uaXMtd2Vic29ja2V0LWNsaWVudFxuICAgKlxuICAgKiAoYykgSGFybWluZGVyIFZpcmsgPHZpcmtAYWRvbmlzanMuY29tPlxuICAgKlxuICAgKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICAgKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAgKi9cblxuICB7XG4gICAgdmFyIF9EZWJ1ZyA9IGJyb3dzZXI7XG4gICAgX0RlYnVnLmVuYWJsZSgnYWRvbmlzOionKTtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9EZWJ1ZygnYWRvbmlzOndlYnNvY2tldCcpO1xuICB9XG59KTtcblxuLyoqXG4gKiBTb2NrZXQgY2xhc3MgaG9sZHMgZGV0YWlscyBmb3IgYSBzaW5nbGUgc3Vic2NyaXB0aW9uLiBUaGUgaW5zdGFuY2VcbiAqIG9mIHRoaXMgY2xhc3MgY2FuIGJlIHVzZWQgdG8gZXhjaGFuZ2UgbWVzc2FnZXMgd2l0aCB0aGUgc2VydmVyXG4gKiBvbiBhIGdpdmVuIHRvcGljLlxuICpcbiAqIEBjbGFzcyBTb2NrZXRcbiAqL1xuXG52YXIgU29ja2V0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTb2NrZXQodG9waWMsIGNvbm5lY3Rpb24pIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBTb2NrZXQpO1xuXG4gICAgdGhpcy50b3BpYyA9IHRvcGljO1xuICAgIHRoaXMuY29ubmVjdGlvbiA9IGNvbm5lY3Rpb247XG4gICAgdGhpcy5lbWl0dGVyID0gbmV3IGVtaXR0ZXJ5KCk7XG4gICAgdGhpcy5fc3RhdGUgPSAncGVuZGluZyc7XG4gICAgdGhpcy5fZW1pdEJ1ZmZlciA9IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFNvY2tldCBzdGF0ZVxuICAgKlxuICAgKiBAYXR0cmlidXRlIHN0YXRlXG4gICAqXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG5cblxuICBjcmVhdGVDbGFzcyhTb2NrZXQsIFt7XG4gICAga2V5OiAnam9pbkFjaycsXG5cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHN1YnNjcmlwdGlvbiBpcyBjb25maXJtZWQgYnkgdGhlXG4gICAgICogc2VydmVyXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIGpvaW5BY2tcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGpvaW5BY2soKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB0aGlzLnN0YXRlID0gJ29wZW4nO1xuICAgICAgdGhpcy5lbWl0dGVyLmVtaXQoJ3JlYWR5JywgdGhpcyk7XG5cbiAgICAgIHtcbiAgICAgICAgRGVidWcoJ2NsZWFyaW5nIGVtaXQgYnVmZmVyIGZvciAlcyB0b3BpYyBhZnRlciBzdWJzY3JpcHRpb24gYWNrJywgdGhpcy50b3BpYyk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUHJvY2VzcyBxdWV1ZWQgZXZlbnRzXG4gICAgICAgKi9cbiAgICAgIHRoaXMuX2VtaXRCdWZmZXIuZm9yRWFjaChmdW5jdGlvbiAoYnVmKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5lbWl0KGJ1Zi5ldmVudCwgYnVmLmRhdGEpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9lbWl0QnVmZmVyID0gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gc3Vic2NyaXB0aW9uIGlzIHJlamVjdGVkIGJ5IHRoZSBzZXJ2ZXJcbiAgICAgKlxuICAgICAqIEBtZXRob2Qgam9pbkVycm9yXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9ICBwYWNrZXRcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2pvaW5FcnJvcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGpvaW5FcnJvcihwYWNrZXQpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSAnZXJyb3InO1xuICAgICAgdGhpcy5lbWl0dGVyLmVtaXQoJ2Vycm9yJywgcGFja2V0KTtcbiAgICAgIHRoaXMuc2VydmVyQ2xvc2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiBzdWJzY3JpcHRpb24gY2xvc2UgaXMgYWNrbm93bGVkZ2VkXG4gICAgICogYnkgdGhlIHNlcnZlclxuICAgICAqXG4gICAgICogQG1ldGhvZCBsZWF2ZUFja1xuICAgICAqXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnbGVhdmVBY2snLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsZWF2ZUFjaygpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSAnY2xvc2VkJztcbiAgICAgIHRoaXMuc2VydmVyQ2xvc2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkLCB3aGVuIHNlcnZlciByZWplY3RzIHRvIGNsb3NlXG4gICAgICogdGhlIHN1YnNjcmlwdGlvbi4gVGhlIHN0YXRlIG9mIHRoZSBzb2NrZXQgc2hvdWxkIG5vdFxuICAgICAqIGNoYW5nZSBoZXJlXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIGxlYXZlRXJyb3JcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gICBwYWNrZXRcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2xlYXZlRXJyb3InLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsZWF2ZUVycm9yKHBhY2tldCkge1xuICAgICAgdGhpcy5lbWl0dGVyLmVtaXQoJ2xlYXZlRXJyb3InLCBwYWNrZXQpO1xuICAgIH1cblxuICAgIC8qIGlzdGFuYnVsLWlnbm9yZSAqL1xuICAgIC8qKlxuICAgICAqIEFkZCBhbiBldmVudCBsaXN0ZW5lclxuICAgICAqXG4gICAgICogQG1ldGhvZCBvblxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uKCkge1xuICAgICAgdmFyIF9lbWl0dGVyO1xuXG4gICAgICAoX2VtaXR0ZXIgPSB0aGlzLmVtaXR0ZXIpLm9uLmFwcGx5KF9lbWl0dGVyLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIC8qIGlzdGFuYnVsLWlnbm9yZSAqL1xuICAgIC8qKlxuICAgICAqIEFkZCBhbiBldmVudCBsaXN0ZW5lciBmb3Igb25jZSBvbmx5XG4gICAgICpcbiAgICAgKiBAbWV0aG9kIG9uY2VcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnb25jZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uY2UoKSB7XG4gICAgICB2YXIgX2VtaXR0ZXIyO1xuXG4gICAgICAoX2VtaXR0ZXIyID0gdGhpcy5lbWl0dGVyKS5vbmNlLmFwcGx5KF9lbWl0dGVyMiwgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICAvKiBpc3RhbmJ1bC1pZ25vcmUgKi9cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZXZlbnQgbGlzdGVuZXIocylcbiAgICAgKlxuICAgICAqIEBtZXRob2Qgb2ZmXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ29mZicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9mZigpIHtcbiAgICAgIHZhciBfZW1pdHRlcjM7XG5cbiAgICAgIChfZW1pdHRlcjMgPSB0aGlzLmVtaXR0ZXIpLm9mZi5hcHBseShfZW1pdHRlcjMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW1pdCBtZXNzYWdlIG9uIHRoZSBzdWJzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBtZXRob2QgZW1pdFxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBldmVudFxuICAgICAqIEBwYXJhbSAge01peGVkfSBkYXRhXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdlbWl0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW1pdChldmVudCwgZGF0YSkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUgPT09ICdwZW5kaW5nJykge1xuICAgICAgICB0aGlzLl9lbWl0QnVmZmVyLnB1c2goeyBldmVudDogZXZlbnQsIGRhdGE6IGRhdGEgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jb25uZWN0aW9uLnNlbmRFdmVudCh0aGlzLnRvcGljLCBldmVudCwgZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2VzIHRoZSBjb25uZWN0aW9uIGFuZCByZW1vdmVzIGFsbCBleGlzdGluZ1xuICAgICAqIGxpc3RlbmVyc1xuICAgICAqXG4gICAgICogQG1ldGhvZCBzZXJ2ZXJDbG9zZVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnc2VydmVyQ2xvc2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXJ2ZXJDbG9zZSgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gdGhpcy5lbWl0dGVyLmVtaXQoJ2Nsb3NlJywgdGhpcykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5fZW1pdEJ1ZmZlciA9IFtdO1xuICAgICAgICBfdGhpczIuZW1pdHRlci5jbGVhckxpc3RlbmVycygpO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIuX2VtaXRCdWZmZXIgPSBbXTtcbiAgICAgICAgX3RoaXMyLmVtaXR0ZXIuY2xlYXJMaXN0ZW5lcnMoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiBhIG5ldyBldmVudCBpcyByZWNlaXZlZCBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgKlxuICAgICAqIEBtZXRob2Qgc2VydmVyRXZlbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gICAgb3B0aW9ucy5ldmVudFxuICAgICAqIEBwYXJhbSAge01peGVkfSAgICBvcHRpb25zLmRhdGFcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3NlcnZlckV2ZW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VydmVyRXZlbnQoX3JlZikge1xuICAgICAgdmFyIGV2ZW50ID0gX3JlZi5ldmVudCxcbiAgICAgICAgICBkYXRhID0gX3JlZi5kYXRhO1xuXG4gICAgICB0aGlzLmVtaXR0ZXIuZW1pdChldmVudCwgZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVjZWl2ZWQgZXJyb3Igb24gY29ubmVjdGlvblxuICAgICAqXG4gICAgICogQG1ldGhvZCBzZXJ2ZXJFcnJvclxuICAgICAqXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnc2VydmVyRXJyb3InLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXJ2ZXJFcnJvcigpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSAnZXJyb3InO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbmRzIHRoZSByZXF1ZXN0IG9uIHNlcnZlciB0byBjbG9zZSB0aGUgc3Vic2NyaXB0aW9uLCB3ZVxuICAgICAqIGhhdmUgdG8gd2FpdCBmb3IgYWNrbm93bGVkZ21lbnQgdG9vXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIGNsb3NlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdjbG9zZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgICAgdGhpcy5zdGF0ZSA9ICdjbG9zaW5nJztcbiAgICAgIHtcbiAgICAgICAgRGVidWcoJ2Nsb3Npbmcgc3Vic2NyaXB0aW9uIGZvciAlcyB0b3BpYyB3aXRoIHNlcnZlcicsIHRoaXMudG9waWMpO1xuICAgICAgfVxuICAgICAgdGhpcy5jb25uZWN0aW9uLnNlbmRQYWNrZXQod3NwX2Jyb3dzZXIubGVhdmVQYWNrZXQodGhpcy50b3BpYykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZvcmNlZnVsbHkgdGVybWluYXRpbmcgdGhlIHN1YnNjcmlwdGlvblxuICAgICAqXG4gICAgICogQG1ldGhvZCB0ZXJtaW5hdGVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3Rlcm1pbmF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRlcm1pbmF0ZSgpIHtcbiAgICAgIHRoaXMubGVhdmVBY2soKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzdGF0ZScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHNvY2tldCBzdGF0ZVxuICAgICAqL1xuICAgICxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCQkMShzdGF0ZSkge1xuICAgICAgaWYgKCF0aGlzLmNvbnN0cnVjdG9yLnN0YXRlcy5pbmRleE9mKHN0YXRlKSA9PT0gLTEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHN0YXRlICsgJyBpcyBub3QgYSB2YWxpZCBzb2NrZXQgc3RhdGUnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSBzdGF0aWMgYXJyYXkgb2YgaW50ZXJuYWwgc3RhdGVzXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIHN0YXRlc1xuICAgICAqXG4gICAgICogQHJldHVybiB7QXJyYXl9XG4gICAgICovXG5cbiAgfV0sIFt7XG4gICAga2V5OiAnc3RhdGVzJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIHJldHVybiBbJ3BlbmRpbmcnLCAnb3BlbicsICdjbG9zZWQnLCAnY2xvc2luZycsICdlcnJvciddO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gU29ja2V0O1xufSgpO1xuXG4vKipcbiAqIGFkb25pcy13ZWJzb2NrZXQtY2xpZW50XG4gKlxuICogKGMpIEhhcm1pbmRlciBWaXJrIDx2aXJrQGFkb25pc2pzLmNvbT5cbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4qL1xuXG4vKipcbiAqIFRoZSBkZWZhdWx0IGVuY29kZXIgdG8gZW5jb2RlIHBhY2tldHMuXG4gKi9cblxudmFyIEpzb25FbmNvZGVyID0ge1xuICBuYW1lOiAnanNvbicsXG4gIC8qKlxuICAgKiBFbmNvZGUgYSB2YWx1ZSBieSBzdHJpbmdpZnlpbmcgaXRcbiAgICpcbiAgICogQG1ldGhvZCBlbmNvZGVcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgIHBheWxvYWRcbiAgICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAqXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBlbmNvZGU6IGZ1bmN0aW9uIGVuY29kZShwYXlsb2FkLCBjYWxsYmFjaykge1xuICAgIHZhciBlbmNvZGVkID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICBlbmNvZGVkID0gSlNPTi5zdHJpbmdpZnkocGF5bG9hZCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvcik7XG4gICAgfVxuICAgIGNhbGxiYWNrKG51bGwsIGVuY29kZWQpO1xuICB9LFxuXG5cbiAgLyoqXG4gICAqIERlY29kZSB2YWx1ZSBieSBwYXJzaW5nIGl0XG4gICAqXG4gICAqIEBtZXRob2QgZGVjb2RlXG4gICAqXG4gICAqIEBwYXJhbSAge1N0cmluZ30gICBwYXlsb2FkXG4gICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgKlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgZGVjb2RlOiBmdW5jdGlvbiBkZWNvZGUocGF5bG9hZCwgY2FsbGJhY2spIHtcbiAgICB2YXIgZGVjb2RlZCA9IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgZGVjb2RlZCA9IEpTT04ucGFyc2UocGF5bG9hZCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvcik7XG4gICAgfVxuICAgIGNhbGxiYWNrKG51bGwsIGRlY29kZWQpO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIHdzIHByb3RvY29sIGJhc2VkIHVwb24gSFRUUCBvciBIVFRQU1xuICpcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKlxuICovXG52YXIgd3NQcm90b2NvbCA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicgPyAnd3NzJyA6ICd3cyc7XG5cbi8qKlxuICogQ29ubmVjdGlvbiBjbGFzcyBpcyB1c2VkIHRvIG1ha2UgYSBUQ1AvU29ja2V0IGNvbm5lY3Rpb25cbiAqIHdpdGggdGhlIHNlcnZlci4gSXQgcmVsaWVzIG9uIE5hdGl2ZSBXZWJzb2NrZXQgYnJvd3NlclxuICogc3VwcG9ydC5cbiAqXG4gKiBAY2xhc3MgQ29ubmVjdGlvblxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cblxudmFyIENvbm5lY3Rpb24gPSBmdW5jdGlvbiAoX0VtaXR0ZXIpIHtcbiAgaW5oZXJpdHMoQ29ubmVjdGlvbiwgX0VtaXR0ZXIpO1xuXG4gIGZ1bmN0aW9uIENvbm5lY3Rpb24odXJsLCBvcHRpb25zKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29ubmVjdGlvbik7XG5cbiAgICB2YXIgX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDb25uZWN0aW9uLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ29ubmVjdGlvbikpLmNhbGwodGhpcykpO1xuXG4gICAgdXJsID0gdXJsIHx8IHdzUHJvdG9jb2wgKyAnOi8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0O1xuXG4gICAgLyoqXG4gICAgICogQ29ubmVjdGlvbiBvcHRpb25zXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIF90aGlzLm9wdGlvbnMgPSBfZXh0ZW5kcyh7XG4gICAgICBwYXRoOiAnYWRvbmlzLXdzJyxcbiAgICAgIHJlY29ubmVjdGlvbjogdHJ1ZSxcbiAgICAgIHJlY29ubmVjdGlvbkF0dGVtcHRzOiAxMCxcbiAgICAgIHJlY29ubmVjdGlvbkRlbGF5OiAxMDAwLFxuICAgICAgcXVlcnk6IG51bGwsXG4gICAgICBlbmNvZGVyOiBKc29uRW5jb2RlclxuICAgIH0sIG9wdGlvbnMpO1xuXG4gICAge1xuICAgICAgRGVidWcoJ2Nvbm5lY3Rpb24gb3B0aW9ucyAlbycsIF90aGlzLm9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBzdGF0ZSBjb25uZWN0aW9uIGlzIGluXG4gICAgICpcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAqL1xuICAgIF90aGlzLl9jb25uZWN0aW9uU3RhdGUgPSAnaWRsZSc7XG5cbiAgICAvKipcbiAgICAgKiBOdW1iZXIgb2YgcmVjb25uZWN0aW9uIGF0dGVtcHRzIGJlaW5nIG1hZGVcbiAgICAgKlxuICAgICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAgICovXG4gICAgX3RoaXMuX3JlY29ubmVjdGlvbkF0dGVtcHRzID0gMDtcblxuICAgIC8qKlxuICAgICAqIEFsbCBwYWNrZXRzIGFyZSBzZW50IGluIHNlcXVlbmNlIHRvIHRoZSBzZXJ2ZXIuIFNvIHdlIG5lZWQgdG9cbiAgICAgKiBtYWludGFpbiBhIHF1ZXVlIGFuZCBwcm9jZXNzIG9uZSBhdCBhIHRpbWVcbiAgICAgKlxuICAgICAqIEB0eXBlIHtBcnJheX1cbiAgICAgKi9cbiAgICBfdGhpcy5fcGFja2V0c1F1ZXVlID0gW107XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgcXVldWUgaXMgaW4gcHJvY2Vzc1xuICAgICAqXG4gICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICovXG4gICAgX3RoaXMuX3Byb2Nlc3NpbmdRdWV1ZSA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQXMgcGVyIEFkb25pcyBwcm90b2NvbCwgdGhlIGNsaWVudCBtdXN0IHBpbmdcbiAgICAgKiB0aGUgc2VydmVyIGFmdGVyIHggaW50ZXJ2YWxcbiAgICAgKlxuICAgICAqIEB0eXBlIHtUaW1lcn1cbiAgICAgKi9cbiAgICBfdGhpcy5fcGluZ1RpbWVyID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEV4dGVuZGVkIHF1ZXJ5IGlzIG1lcmdlZCB3aXRoIHRoZSBxdWVyeSBwYXJhbXNcbiAgICAgKiB1c2VyIHBhc3NcbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgX3RoaXMuX2V4dGVuZGVkUXVlcnkgPSB7fTtcblxuICAgIC8qKlxuICAgICAqIEJhc2UgVVJMIGZvciB0aGUgd2Vic29ja2V0IGNvbm5lY3Rpb25cbiAgICAgKlxuICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICovXG4gICAgX3RoaXMuX3VybCA9IHVybC5yZXBsYWNlKC9cXC8kLywgJycpICsgJy8nICsgX3RoaXMub3B0aW9ucy5wYXRoO1xuXG4gICAgLyoqXG4gICAgICogU3Vic2NyaXB0aW9ucyBmb3IgYSBzaW5nbGUgY29ubmVjdGlvblxuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICBfdGhpcy5zdWJzY3JpcHRpb25zID0ge307XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVyIGNhbGxlZCB3aGVuIGBjbG9zZWAgaXMgZW1pdHRlZCBmcm9tIHRoZVxuICAgICAqIHN1YnNjcmlwdGlvblxuICAgICAqL1xuICAgIF90aGlzLnJlbW92ZVN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgdG9waWMgPSBfcmVmLnRvcGljO1xuXG4gICAgICBkZWxldGUgX3RoaXMuc3Vic2NyaXB0aW9uc1t0b3BpY107XG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICAvKipcbiAgICogQ29tcHV0ZWQgdmFsdWUgdG8gZGVjaWRlLCB3aGV0aGVyIG9yIG5vdCB0byByZWNvbm5lY3RcbiAgICpcbiAgICogQG1ldGhvZCBzaG91bGRSZWNvbm5lY3RcbiAgICpcbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG5cblxuICBjcmVhdGVDbGFzcyhDb25uZWN0aW9uLCBbe1xuICAgIGtleTogJ19jbGVhbnVwJyxcblxuXG4gICAgLyoqXG4gICAgICogQ2xlYW4gcmVmZXJlbmNlc1xuICAgICAqXG4gICAgICogQG1ldGhvZCBfY2xlYW51cFxuICAgICAqXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9jbGVhbnVwKCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9waW5nVGltZXIpO1xuICAgICAgdGhpcy53cyA9IG51bGw7XG4gICAgICB0aGlzLl9waW5nVGltZXIgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxzIGEgY2FsbGJhY2sgcGFzc2luZyBzdWJzY3JpcHRpb24gdG8gaXRcbiAgICAgKlxuICAgICAqIEBtZXRob2QgX3N1YnNjcmlwdGlvbnNJdGVyYXRvclxuICAgICAqXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259ICAgICAgICAgICAgIGNhbGxiYWNrXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnX3N1YnNjcmlwdGlvbnNJdGVyYXRvcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9zdWJzY3JpcHRpb25zSXRlcmF0b3IoY2FsbGJhY2spIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLnN1YnNjcmlwdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKHN1Yikge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soX3RoaXMyLnN1YnNjcmlwdGlvbnNbc3ViXSwgc3ViKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxzIHRoZSBjYWxsYmFjayB3aGVuIHRoZXJlIGlzIGEgc3Vic2NyaXB0aW9uIGZvclxuICAgICAqIHRoZSB0b3BpYyBtZW50aW9uZWQgaW4gdGhlIHBhY2tldFxuICAgICAqXG4gICAgICogQG1ldGhvZCBfZW5zdXJlU3Vic2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9ICAgICAgICAgICAgcGFja2V0XG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259ICAgICAgICAgIGNiXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnX2Vuc3VyZVN1YnNjcmlwdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9lbnN1cmVTdWJzY3JpcHRpb24ocGFja2V0LCBjYikge1xuICAgICAgdmFyIHNvY2tldCA9IHRoaXMuZ2V0U3Vic2NyaXB0aW9uKHBhY2tldC5kLnRvcGljKTtcblxuICAgICAgaWYgKCFzb2NrZXQpIHtcbiAgICAgICAge1xuICAgICAgICAgIERlYnVnKCdjYW5ub3QgY29uc3VtZSBwYWNrZXQgc2luY2UgJXMgdG9waWMgaGFzIG5vIGFjdGl2ZSBzdWJzY3JpcHRpb24gJWonLCBwYWNrZXQuZC50b3BpYywgcGFja2V0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNiKHNvY2tldCwgcGFja2V0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzIHRoZSBwYWNrZXRzIHF1ZXVlIGJ5IHNlbmRpbmcgb25lIHBhY2tldCBhdCBhIHRpbWVcbiAgICAgKlxuICAgICAqIEBtZXRob2QgX3Byb2Nlc3NRdWV1ZVxuICAgICAqXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ19wcm9jZXNzUXVldWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcHJvY2Vzc1F1ZXVlKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLl9wcm9jZXNzaW5nUXVldWUgfHwgIXRoaXMuX3BhY2tldHNRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFR1cm4gb24gdGhlIHByb2Nlc3NpbmcgZmxhZ1xuICAgICAgICpcbiAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICovXG4gICAgICB0aGlzLl9wcm9jZXNzaW5nUXVldWUgPSB0cnVlO1xuXG4gICAgICB0aGlzLm9wdGlvbnMuZW5jb2Rlci5lbmNvZGUodGhpcy5fcGFja2V0c1F1ZXVlLnNoaWZ0KCksIGZ1bmN0aW9uIChlcnJvciwgcGF5bG9hZCkge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBEZWJ1ZygnZW5jb2RlIGVycm9yICVqJywgZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMzLndyaXRlKHBheWxvYWQpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUdXJuIG9mZiB0aGUgcHJvY2Vzc2luZyBmbGFnIGFuZCByZSBjYWxsIHRoZSBwcm9jZXNzUXVldWUgdG8gc2VuZFxuICAgICAgICAgKiB0aGUgbmV4dCBtZXNzYWdlXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMzLl9wcm9jZXNzaW5nUXVldWUgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMzLl9wcm9jZXNzUXVldWUoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFzIHNvb24gYXMgY29ubmVjdGlvbiBpcyByZWFkeSwgd2Ugc3RhcnQgbGlzdGVuaW5nXG4gICAgICogZm9yIG5ldyBtZXNzYWdlXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIF9vbk9wZW5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdfb25PcGVuJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX29uT3BlbigpIHtcbiAgICAgIHtcbiAgICAgICAgRGVidWcoJ29wZW5lZCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdoZW4gcmVjZWl2ZWQgY29ubmVjdGlvbiBlcnJvclxuICAgICAqXG4gICAgICogQG1ldGhvZCBfb25FcnJvclxuICAgICAqXG4gICAgICogQHBhcmFtICB7RXZlbnR9IGV2ZW50XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnX29uRXJyb3InLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfb25FcnJvcihldmVudCkge1xuICAgICAge1xuICAgICAgICBEZWJ1ZygnZXJyb3IgJU8nLCBldmVudCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnNJdGVyYXRvcihmdW5jdGlvbiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgIHJldHVybiBzdWJzY3JpcHRpb24uc2VydmVyRXJyb3IoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWF0ZXMgcmVjb25uZWN0IHdpdGggdGhlIHNlcnZlciBieSBtb3ZpbmdcbiAgICAgKiBhbGwgc3Vic2NyaXB0aW9ucyB0byBwZW5kaW5nIHN0YXRlXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIF9yZWNvbm5lY3RcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdfcmVjb25uZWN0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3JlY29ubmVjdCgpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICB0aGlzLl9yZWNvbm5lY3Rpb25BdHRlbXB0cysrO1xuXG4gICAgICB0aGlzLmVtaXQoJ3JlY29ubmVjdCcsIHRoaXMuX3JlY29ubmVjdGlvbkF0dGVtcHRzKTtcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzNC5fY29ubmVjdGlvblN0YXRlID0gJ3JlY29ubmVjdCc7XG4gICAgICAgIF90aGlzNC5jb25uZWN0KCk7XG4gICAgICB9LCB0aGlzLm9wdGlvbnMucmVjb25uZWN0aW9uRGVsYXkgKiB0aGlzLl9yZWNvbm5lY3Rpb25BdHRlbXB0cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2hlbiBjb25uZWN0aW9uIGNsb3Nlc1xuICAgICAqXG4gICAgICogQG1ldGhvZCBfb25DbG9zZVxuICAgICAqXG4gICAgICogQHBhcmFtICB7RXZlbnR9IGV2ZW50XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnX29uQ2xvc2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfb25DbG9zZShldmVudCkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIHtcbiAgICAgICAgRGVidWcoJ2Nsb3NpbmcgZnJvbSAlcyBzdGF0ZScsIHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NsZWFudXAoKTtcblxuICAgICAgLyoqXG4gICAgICAgKiBGb3JjZSBzdWJzY3JpcHRpb25zIHRvIHRlcm1pbmF0ZVxuICAgICAgICovXG4gICAgICB0aGlzLl9zdWJzY3JpcHRpb25zSXRlcmF0b3IoZnVuY3Rpb24gKHN1YnNjcmlwdGlvbikge1xuICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uLnRlcm1pbmF0ZSgpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZW1pdCgnY2xvc2UnLCB0aGlzKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXM1LnNob3VsZFJlY29ubmVjdCA/IF90aGlzNS5fcmVjb25uZWN0KCkgOiBfdGhpczUuY2xlYXJMaXN0ZW5lcnMoKTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXM1LnNob3VsZFJlY29ubmVjdCA/IF90aGlzNS5fcmVjb25uZWN0KCkgOiBfdGhpczUuY2xlYXJMaXN0ZW5lcnMoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdoZW4gYSBuZXcgbWVzc2FnZSB3YXMgcmVjZWl2ZWRcbiAgICAgKlxuICAgICAqIEBtZXRob2QgX29uTWVzc2FnZVxuICAgICAqXG4gICAgICogQHBhcmFtICB7RXZlbnR9ICAgZXZlbnRcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdfb25NZXNzYWdlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX29uTWVzc2FnZShldmVudCkge1xuICAgICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cbiAgICAgIHRoaXMub3B0aW9ucy5lbmNvZGVyLmRlY29kZShldmVudC5kYXRhLCBmdW5jdGlvbiAoZGVjb2RlRXJyb3IsIHBhY2tldCkge1xuICAgICAgICBpZiAoZGVjb2RlRXJyb3IpIHtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBEZWJ1ZygncGFja2V0IGRyb3BwZWQsIGRlY29kZSBlcnJvciAlbycsIGRlY29kZUVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzNi5faGFuZGxlTWVzc2FnZShwYWNrZXQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB0aGUgbWVzc2FnZSBwYWNrZXQgYmFzZWQgdXBvbiBpdCdzIHR5cGVcbiAgICAgKlxuICAgICAqIEBtZXRob2QgX2hhbmRsZU1lc3NhZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gICAgICAgcGFja2V0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnX2hhbmRsZU1lc3NhZ2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlTWVzc2FnZShwYWNrZXQpIHtcbiAgICAgIGlmICh3c3BfYnJvd3Nlci5pc09wZW5QYWNrZXQocGFja2V0KSkge1xuICAgICAgICB7XG4gICAgICAgICAgRGVidWcoJ29wZW4gcGFja2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faGFuZGxlT3BlbihwYWNrZXQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh3c3BfYnJvd3Nlci5pc0pvaW5BY2tQYWNrZXQocGFja2V0KSkge1xuICAgICAgICB7XG4gICAgICAgICAgRGVidWcoJ2pvaW4gYWNrIHBhY2tldCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2hhbmRsZUpvaW5BY2socGFja2V0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAod3NwX2Jyb3dzZXIuaXNKb2luRXJyb3JQYWNrZXQocGFja2V0KSkge1xuICAgICAgICB7XG4gICAgICAgICAgRGVidWcoJ2pvaW4gZXJyb3IgcGFja2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faGFuZGxlSm9pbkVycm9yKHBhY2tldCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHdzcF9icm93c2VyLmlzTGVhdmVBY2tQYWNrZXQocGFja2V0KSkge1xuICAgICAgICB7XG4gICAgICAgICAgRGVidWcoJ2xlYXZlIGFjayBwYWNrZXQnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9oYW5kbGVMZWF2ZUFjayhwYWNrZXQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh3c3BfYnJvd3Nlci5pc0xlYXZlRXJyb3JQYWNrZXQocGFja2V0KSkge1xuICAgICAgICB7XG4gICAgICAgICAgRGVidWcoJ2xlYXZlIGVycm9yIHBhY2tldCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2hhbmRsZUxlYXZlRXJyb3IocGFja2V0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAod3NwX2Jyb3dzZXIuaXNMZWF2ZVBhY2tldChwYWNrZXQpKSB7XG4gICAgICAgIHtcbiAgICAgICAgICBEZWJ1ZygnbGVhdmUgcGFja2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faGFuZGxlU2VydmVyTGVhdmUocGFja2V0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAod3NwX2Jyb3dzZXIuaXNFdmVudFBhY2tldChwYWNrZXQpKSB7XG4gICAgICAgIHtcbiAgICAgICAgICBEZWJ1ZygnZXZlbnQgcGFja2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faGFuZGxlRXZlbnQocGFja2V0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAod3NwX2Jyb3dzZXIuaXNQb25nUGFja2V0KHBhY2tldCkpIHtcbiAgICAgICAge1xuICAgICAgICAgIERlYnVnKCdwb25nIHBhY2tldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAge1xuICAgICAgICBEZWJ1ZygnaW52YWxpZCBwYWNrZXQgdHlwZSAlZCcsIHBhY2tldC50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbWl0cyB0aGUgb3BlbiBlbWl0IGFuZCBzZW5kIHN1YnNjcmlwdGlvbiBwYWNrZXRzXG4gICAgICogZm9yIHByZS1leGlzdGluZyBzdWJzY3JpcHRpb25zXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIF9oYW5kbGVPcGVuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9ICAgIHBhY2tldFxuICAgICAqXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ19oYW5kbGVPcGVuJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZU9wZW4ocGFja2V0KSB7XG4gICAgICB2YXIgX3RoaXM3ID0gdGhpcztcblxuICAgICAgdGhpcy5fY29ubmVjdGlvblN0YXRlID0gJ29wZW4nO1xuICAgICAgdGhpcy5lbWl0KCdvcGVuJywgcGFja2V0LmQpO1xuXG4gICAgICAvKipcbiAgICAgICAqIFNldHVwIGEgdGltZXIgdG8gcGluZyB0aGUgc2VydmVyLCB0ZWxsaW5nXG4gICAgICAgKiBjbGllbnQgaXMgYXdha2VcbiAgICAgICAqL1xuICAgICAgdGhpcy5fcGluZ1RpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczcuc2VuZFBhY2tldCh3c3BfYnJvd3Nlci5waW5nUGFja2V0KCkpO1xuICAgICAgfSwgcGFja2V0LmQuY2xpZW50SW50ZXJ2YWwpO1xuXG4gICAgICAvKipcbiAgICAgICAqIFNlbmRpbmcgcGFja2V0cyB0byBtYWtlIHBlbmRpbmcgc3Vic2NyaXB0aW9uc1xuICAgICAgICovXG4gICAgICB7XG4gICAgICAgIERlYnVnKCdwcm9jZXNzaW5nIHByZSBjb25uZWN0aW9uIHN1YnNjcmlwdGlvbnMgJW8nLCBPYmplY3Qua2V5cyh0aGlzLnN1YnNjcmlwdGlvbnMpKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uc0l0ZXJhdG9yKGZ1bmN0aW9uIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgX3RoaXM3Ll9zZW5kU3Vic2NyaXB0aW9uUGFja2V0KHN1YnNjcmlwdGlvbi50b3BpYyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIHRoZSBqb2luIGFja25vd2xlZGdlbWVudCBmb3IgYSBzdWJzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBtZXRob2QgX2hhbmRsZUpvaW5BY2tcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gICAgICAgcGFja2V0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnX2hhbmRsZUpvaW5BY2snLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlSm9pbkFjayhwYWNrZXQpIHtcbiAgICAgIHRoaXMuX2Vuc3VyZVN1YnNjcmlwdGlvbihwYWNrZXQsIGZ1bmN0aW9uIChzb2NrZXQpIHtcbiAgICAgICAgcmV0dXJuIHNvY2tldC5qb2luQWNrKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIHRoZSBqb2luIGVycm9yIGZvciBhIHN1YnNjcmlwdGlvblxuICAgICAqXG4gICAgICogQG1ldGhvZCBfaGFuZGxlSm9pbkVycm9yXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9ICAgICAgICAgcGFja2V0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnX2hhbmRsZUpvaW5FcnJvcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVKb2luRXJyb3IocGFja2V0KSB7XG4gICAgICB0aGlzLl9lbnN1cmVTdWJzY3JpcHRpb24ocGFja2V0LCBmdW5jdGlvbiAoc29ja2V0LCBwYWNrZXQpIHtcbiAgICAgICAgcmV0dXJuIHNvY2tldC5qb2luRXJyb3IocGFja2V0LmQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWNrbm93bGVkZ2VzIHRoZSBzdWJzY3JpcHRpb24gbGVhdmVcbiAgICAgKlxuICAgICAqIEBtZXRob2QgX2hhbmRsZUxlYXZlQWNrXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9ICAgICAgICBwYWNrZXRcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdfaGFuZGxlTGVhdmVBY2snLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlTGVhdmVBY2socGFja2V0KSB7XG4gICAgICB0aGlzLl9lbnN1cmVTdWJzY3JpcHRpb24ocGFja2V0LCBmdW5jdGlvbiAoc29ja2V0KSB7XG4gICAgICAgIHJldHVybiBzb2NrZXQubGVhdmVBY2soKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgbGVhdmUgZXJyb3IgZm9yIGEgc3Vic2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIF9oYW5kbGVMZWF2ZUVycm9yXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9ICAgICAgICAgIHBhY2tldFxuICAgICAqXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ19oYW5kbGVMZWF2ZUVycm9yJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZUxlYXZlRXJyb3IocGFja2V0KSB7XG4gICAgICB0aGlzLl9lbnN1cmVTdWJzY3JpcHRpb24ocGFja2V0LCBmdW5jdGlvbiAoc29ja2V0LCBwYWNrZXQpIHtcbiAgICAgICAgcmV0dXJuIHNvY2tldC5sZWF2ZUVycm9yKHBhY2tldC5kKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgd2hlbiBzZXJ2ZXIgaW5pdGlhdGVzIHRoZSBzdWJzY3JpcHRpb24gbGVhdmVcbiAgICAgKlxuICAgICAqIEBtZXRob2QgX2hhbmRsZVNlcnZlckxlYXZlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9ICAgICAgICAgICBwYWNrZXRcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdfaGFuZGxlU2VydmVyTGVhdmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlU2VydmVyTGVhdmUocGFja2V0KSB7XG4gICAgICB0aGlzLl9lbnN1cmVTdWJzY3JpcHRpb24ocGFja2V0LCBmdW5jdGlvbiAoc29ja2V0LCBwYWNrZXQpIHtcbiAgICAgICAgcmV0dXJuIHNvY2tldC5sZWF2ZUFjaygpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB0aGUgZXZlbnQgcGFja2V0IGZvciBhIHN1YnNjcmlwdGlvblxuICAgICAqXG4gICAgICogQG1ldGhvZCBfaGFuZGxlRXZlbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gICAgIHBhY2tldFxuICAgICAqXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ19oYW5kbGVFdmVudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVFdmVudChwYWNrZXQpIHtcbiAgICAgIHRoaXMuX2Vuc3VyZVN1YnNjcmlwdGlvbihwYWNrZXQsIGZ1bmN0aW9uIChzb2NrZXQsIHBhY2tldCkge1xuICAgICAgICByZXR1cm4gc29ja2V0LnNlcnZlckV2ZW50KHBhY2tldC5kKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbmRzIHRoZSBzdWJzY3JpcHRpb24gcGFja2V0IGZvciBhIGdpdmVuIHRvcGljXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIHNlbmRTdWJzY3JpcHRpb25QYWNrZXRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgICAgICAgICB0b3BpY1xuICAgICAqXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ19zZW5kU3Vic2NyaXB0aW9uUGFja2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3NlbmRTdWJzY3JpcHRpb25QYWNrZXQodG9waWMpIHtcbiAgICAgIHtcbiAgICAgICAgRGVidWcoJ2luaXRpYXRpbmcgc3Vic2NyaXB0aW9uIGZvciAlcyB0b3BpYyB3aXRoIHNlcnZlcicsIHRvcGljKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VuZFBhY2tldCh3c3BfYnJvd3Nlci5qb2luUGFja2V0KHRvcGljKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5zdGFudGlhdGUgdGhlIHdlYnNvY2tldCBjb25uZWN0aW9uXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIGNvbm5lY3RcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2Nvbm5lY3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb25uZWN0KCkge1xuICAgICAgdmFyIF90aGlzOCA9IHRoaXM7XG5cbiAgICAgIHZhciBxdWVyeSA9IHN0cmluZ2lmeShfZXh0ZW5kcyh7fSwgdGhpcy5vcHRpb25zLnF1ZXJ5LCB0aGlzLl9leHRlbmRlZFF1ZXJ5KSk7XG4gICAgICB2YXIgdXJsID0gcXVlcnkgPyB0aGlzLl91cmwgKyAnPycgKyBxdWVyeSA6IHRoaXMuX3VybDtcblxuICAgICAge1xuICAgICAgICBEZWJ1ZygnY3JlYXRpbmcgc29ja2V0IGNvbm5lY3Rpb24gb24gJXMgdXJsJywgdXJsKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy53cyA9IG5ldyB3aW5kb3cuV2ViU29ja2V0KHVybCk7XG4gICAgICB0aGlzLndzLm9uY2xvc2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzOC5fb25DbG9zZShldmVudCk7XG4gICAgICB9O1xuICAgICAgdGhpcy53cy5vbmVycm9yID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfdGhpczguX29uRXJyb3IoZXZlbnQpO1xuICAgICAgfTtcbiAgICAgIHRoaXMud3Mub25vcGVuID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfdGhpczguX29uT3BlbihldmVudCk7XG4gICAgICB9O1xuICAgICAgdGhpcy53cy5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzOC5fb25NZXNzYWdlKGV2ZW50KTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdyaXRlcyB0aGUgcGF5bG9hZCBvbiB0aGUgb3BlbiBjb25uZWN0aW9uXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIHdyaXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IHBheWxvYWRcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3dyaXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gd3JpdGUocGF5bG9hZCkge1xuICAgICAgaWYgKHRoaXMud3MucmVhZHlTdGF0ZSAhPT0gd2luZG93LldlYlNvY2tldC5PUEVOKSB7XG4gICAgICAgIHtcbiAgICAgICAgICBEZWJ1ZygnY29ubmVjdGlvbiBpcyBub3QgaW4gb3BlbiBzdGF0ZSwgY3VycmVudCBzdGF0ZSAlcycsIHRoaXMud3MucmVhZHlTdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLndzLnNlbmQocGF5bG9hZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBwYWNrZXQgYnkgZW5jb2RpbmcgaXQgZmlyc3RcbiAgICAgKlxuICAgICAqIEBtZXRob2QgX3NlbmRQYWNrZXRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gICAgcGFja2V0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdzZW5kUGFja2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VuZFBhY2tldChwYWNrZXQpIHtcbiAgICAgIHRoaXMuX3BhY2tldHNRdWV1ZS5wdXNoKHBhY2tldCk7XG4gICAgICB0aGlzLl9wcm9jZXNzUXVldWUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzdWJzY3JpcHRpb24gaW5zdGFuY2UgZm9yIGEgZ2l2ZW4gdG9waWNcbiAgICAgKlxuICAgICAqIEBtZXRob2QgZ2V0U3Vic2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICB0b3BpY1xuICAgICAqXG4gICAgICogQHJldHVybiB7U29ja2V0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXRTdWJzY3JpcHRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTdWJzY3JpcHRpb24odG9waWMpIHtcbiAgICAgIHJldHVybiB0aGlzLnN1YnNjcmlwdGlvbnNbdG9waWNdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBib29sZWFuIHRlbGxpbmcsIHdoZXRoZXIgY29ubmVjdGlvbiBoYXNcbiAgICAgKiBhIHN1YnNjcmlwdGlvbiBmb3IgYSBnaXZlbiB0b3BpYyBvciBub3RcbiAgICAgKlxuICAgICAqIEBtZXRob2QgaGFzU3ViY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgdG9waWNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2hhc1N1YmNyaXB0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFzU3ViY3JpcHRpb24odG9waWMpIHtcbiAgICAgIHJldHVybiAhIXRoaXMuZ2V0U3Vic2NyaXB0aW9uKHRvcGljKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgc3Vic2NyaXB0aW9uIHdpdGggdGhlIHNlcnZlclxuICAgICAqXG4gICAgICogQG1ldGhvZCBzdWJzY3JpYmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gIHRvcGljXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtTb2NrZXR9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3N1YnNjcmliZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZSh0b3BpYykge1xuICAgICAgaWYgKCF0b3BpYyB8fCB0eXBlb2YgdG9waWMgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignc3Vic2NyaWJlIG1ldGhvZCBleHBlY3RzIHRvcGljIHRvIGJlIGEgdmFsaWQgc3RyaW5nJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbnNbdG9waWNdKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHN1YnNjcmliZSB0byBzYW1lIHRvcGljIHR3aWNlLiBJbnN0ZWFkIHVzZSBnZXRTdWJzY3JpcHRpb24nKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNvY2tldCA9IG5ldyBTb2NrZXQodG9waWMsIHRoaXMpO1xuICAgICAgc29ja2V0Lm9uKCdjbG9zZScsIHRoaXMucmVtb3ZlU3Vic2NyaXB0aW9uKTtcblxuICAgICAgLyoqXG4gICAgICAgKiBTdG9yaW5nIHJlZmVyZW5jZSB0byB0aGUgc29ja2V0XG4gICAgICAgKi9cbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0b3BpY10gPSBzb2NrZXQ7XG5cbiAgICAgIC8qKlxuICAgICAgICogU2VuZGluZyBqb2luIHJlcXVlc3QgdG8gdGhlIHNlcnZlciwgdGhlIHN1YnNjcmlwdGlvbiB3aWxsXG4gICAgICAgKiBiZSBjb25zaWRlcmVkIHJlYWR5LCBvbmNlIHNlcnZlciBhY2tub3dsZWRnZXMgaXRcbiAgICAgICAqL1xuICAgICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25TdGF0ZSA9PT0gJ29wZW4nKSB7XG4gICAgICAgIHRoaXMuX3NlbmRTdWJzY3JpcHRpb25QYWNrZXQodG9waWMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc29ja2V0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbmRzIGV2ZW50IGZvciBhIGdpdmVuIHRvcGljXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIHNlbmRFdmVudFxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSAgdG9waWNcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBldmVudFxuICAgICAqIEBwYXJhbSAge01peGVkfSAgZGF0YVxuICAgICAqXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKlxuICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0b3BpYyBvciBldmVudCBhcmUgbm90IHBhc3NlZFxuICAgICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGVyZSBpcyBubyBhY3RpdmUgc3Vic2NyaXB0aW9uIGZvciB0aGUgZ2l2ZW4gdG9waWNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnc2VuZEV2ZW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VuZEV2ZW50KHRvcGljLCBldmVudCwgZGF0YSkge1xuICAgICAgaWYgKCF0b3BpYyB8fCAhZXZlbnQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd0b3BpYyBhbmQgZXZlbnQgbmFtZSBpcyByZXF1aXJlZCB0byBjYWxsIHNlbmRFdmVudCBtZXRob2QnKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBNYWtlIHN1cmUgdGhlcmUgaXMgYW4gYWN0aXZlIHN1YnNjcmlwdGlvbiBmb3IgdGhlIHRvcGljLiBUaG91Z2ggc2VydmVyIHdpbGxcbiAgICAgICAqIGJvdW5jZSB0aGUgbWVzc2FnZSwgdGhlcmUgaXMgbm8gcG9pbnQgaW4gaGFtbWVyaW5nIGl0XG4gICAgICAgKi9cbiAgICAgIHZhciBzdWJzY3JpcHRpb24gPSB0aGlzLmdldFN1YnNjcmlwdGlvbih0b3BpYyk7XG4gICAgICBpZiAoIXN1YnNjcmlwdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIGlzIG5vIGFjdGl2ZSBzdWJzY3JpcHRpb24gZm9yICcgKyB0b3BpYyArICcgdG9waWMnKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBJZiBzdWJzY3JpcHRpb24gc3RhdGUgaXMgbm90IG9wZW4sIHRoZW4gd2Ugc2hvdWxkIG5vdCBwdWJsaXNoXG4gICAgICAgKiBtZXNzYWdlcy5cbiAgICAgICAqXG4gICAgICAgKiBUaGUgcmVhc29uIHdlIGhhdmUgdGhpcyBjaGVjayBvbiBjb25uZWN0aW9uIGFuZCBub3Qgc29ja2V0LFxuICAgICAgICogaXMgY296IHdlIGRvbid0IHdhbnQgYW55b25lIHRvIHVzZSB0aGUgY29ubmVjdGlvbiBvYmplY3RcbiAgICAgICAqIGFuZCBzZW5kIHBhY2tldHMsIGV2ZW4gd2hlbiBzdWJzY3JpcHRpb24gaXMgY2xvc2VkLlxuICAgICAgICovXG4gICAgICBpZiAoc3Vic2NyaXB0aW9uLnN0YXRlICE9PSAnb3BlbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZW1pdCBzaW5jZSBzdWJzY3JpcHRpb24gc29ja2V0IGlzIGluICcgKyB0aGlzLnN0YXRlICsgJyBzdGF0ZScpO1xuICAgICAgfVxuXG4gICAgICB7XG4gICAgICAgIERlYnVnKCdzZW5kaW5nIGV2ZW50IG9uICVzIHRvcGljJywgdG9waWMpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNlbmRQYWNrZXQod3NwX2Jyb3dzZXIuZXZlbnRQYWNrZXQodG9waWMsIGV2ZW50LCBkYXRhKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlIEpXVCB0b2tlbiB0byBhdXRoZW50aWNhdGUgdGhlIHVzZXJcbiAgICAgKlxuICAgICAqIEBtZXRob2Qgd2l0aEp3dFRva2VuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdG9rZW5cbiAgICAgKlxuICAgICAqIEBjaGFpbmFibGVcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnd2l0aEp3dFRva2VuJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gd2l0aEp3dFRva2VuKHRva2VuKSB7XG4gICAgICB0aGlzLl9leHRlbmRlZFF1ZXJ5LnRva2VuID0gdG9rZW47XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2UgYmFzaWMgYXV0aCBjcmVkZW50aWFscyB0byBsb2dpbiB0aGUgdXNlclxuICAgICAqXG4gICAgICogQG1ldGhvZCB3aXRoQmFzaWNBdXRoXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9ICB1c2VybmFtZVxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gIHBhc3N3b3JkXG4gICAgICpcbiAgICAgKiBAY2hhaW5hYmxlXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3dpdGhCYXNpY0F1dGgnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB3aXRoQmFzaWNBdXRoKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgICAgdGhpcy5fZXh0ZW5kZWRRdWVyeS5iYXNpYyA9IHdpbmRvdy5idG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlIHBlcnNvbmFsIEFQSSB0b2tlbiB0byBhdXRoZW50aWNhdGUgdGhlIHVzZXJcbiAgICAgKlxuICAgICAqIEBtZXRob2Qgd2l0aEFwaVRva2VuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdG9rZW5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnd2l0aEFwaVRva2VuJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gd2l0aEFwaVRva2VuKHRva2VuKSB7XG4gICAgICB0aGlzLl9leHRlbmRlZFF1ZXJ5LnRva2VuID0gdG9rZW47XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGb3JjZWZ1bGx5IGNsb3NlIHRoZSBjb25uZWN0aW9uXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIGNsb3NlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdjbG9zZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgICAgdGhpcy5fY29ubmVjdGlvblN0YXRlID0gJ3Rlcm1pbmF0ZWQnO1xuICAgICAgdGhpcy53cy5jbG9zZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Nob3VsZFJlY29ubmVjdCcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29ubmVjdGlvblN0YXRlICE9PSAndGVybWluYXRlZCcgJiYgdGhpcy5vcHRpb25zLnJlY29ubmVjdGlvbiAmJiB0aGlzLm9wdGlvbnMucmVjb25uZWN0aW9uQXR0ZW1wdHMgPiB0aGlzLl9yZWNvbm5lY3Rpb25BdHRlbXB0cztcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIENvbm5lY3Rpb247XG59KGVtaXR0ZXJ5KTtcblxuZnVuY3Rpb24gaW5kZXggKHVybCwgb3B0aW9ucykge1xuICByZXR1cm4gbmV3IENvbm5lY3Rpb24odXJsLCBvcHRpb25zKTtcbn1cblxucmV0dXJuIGluZGV4O1xuXG59KSkpO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIlxyXG4vLyBUb2dnbGUgbmF2YmFyIGluIG1vYmlsZSB2aWV3XHJcblxyXG5jb25zdCAkbmF2YmFyQnVyZ2VycyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKFxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZiYXItYnVyZ2VyJyksXHJcbiAgMFxyXG4pXHJcblxyXG5pZiAoJG5hdmJhckJ1cmdlcnMubGVuZ3RoID4gMCkge1xyXG5cclxuICAkbmF2YmFyQnVyZ2Vycy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG4gICAgICBjb25zdCB0YXJnZXQgPSBlbC5kYXRhc2V0LnRhcmdldFxyXG4gICAgICBjb25zdCAkdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0KVxyXG5cclxuICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJylcclxuICAgICAgJHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKVxyXG4gICAgfSlcclxuICB9KVxyXG59XHJcblxyXG4vLyBSZW1vdmUgZmxhc2gvYWxlcnQgbWVzc2FnZSBcclxuXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlJykpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZScpLnJlbW92ZSgpXHJcbiAgfSlcclxufVxyXG4iLCJpbXBvcnQgV3MgZnJvbSAnQGFkb25pc2pzL3dlYnNvY2tldC1jbGllbnQnXHJcblxyXG5sZXQgaXNDb25uZWN0ZWQgPSBmYWxzZVxyXG5sZXQgd3MgPSBudWxsXHJcbmNvbnN0IGNoYXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoYXQtZm9ybScpXHJcblxyXG53cyA9IFdzKCkuY29ubmVjdCgpXHJcblxyXG53cy5vbignb3BlbicsICgpID0+IHtcclxuXHJcbiAgaXNDb25uZWN0ZWQgPSB0cnVlXHJcbiAgc3Vic2NyaWJlVG9DaGFubmVsKClcclxuXHJcbn0pXHJcblxyXG53cy5vbignZXJyb3InLCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ3dzIGVycm9yJylcclxuICBpc0Nvbm5lY3RlZCA9IGZhbHNlXHJcbn0pXHJcblxyXG53cy5vbignY2xvc2UnLCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ3dzIGNsb3NlJylcclxuICBpc0Nvbm5lY3RlZCA9IGZhbHNlXHJcbn0pXHJcblxyXG5jb25zdCBzdWJzY3JpYmVUb0NoYW5uZWwgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IHRvcGljID0gbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgnL2NoYW5uZWxzLycsICcnKTtcclxuXHJcbiAgY29uc3QgY2hhdCA9IHdzLnN1YnNjcmliZShgY2hhdDoke3RvcGljfWApXHJcblxyXG4gIGNoYXQub24oJ2Vycm9yJywgKGVycm9yKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnY2hhdCBlcnJvcicsIGVycm9yKVxyXG4gIH0pXHJcblxyXG4gIGNoYXQub24oJ2Nsb3NlJywgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2NoYXQgY2xvc2UnKVxyXG4gIH0pXHJcblxyXG4gIGNoYXQub24oJ21lc3NhZ2UnLCAobWVzc2FnZSkgPT4ge1xyXG4gICAgY29uc3QgYXJ0aWNsZU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJylcclxuICAgIGFydGljbGVOb2RlLmNsYXNzTGlzdC5hZGQoJ2NoYXQtbWVzc2FnZScsICdtZWRpYScsICdoYXMtYmFja2dyb3VuZC1saWdodCcpXHJcblxyXG4gICAgY29uc3QgbWVkaWFDb250ZW50Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBtZWRpYUNvbnRlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ21lZGlhLWNvbnRlbnQnKVxyXG5cclxuICAgIGNvbnN0IGNvbnRlbnROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnRlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKVxyXG5cclxuICAgIGNvbnN0IHBhcmFncmFwaE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGNvbnN0IHN0cm9uZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHJvbmcnKVxyXG4gICAgY29uc3Qgc21hbGxOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hbGwnKVxyXG4gICAgY29uc3QgYnIxTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJylcclxuICAgIGNvbnN0IGJyMk5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpXHJcblxyXG4gICAgY29uc3QgbWVzc2FnZVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobWVzc2FnZS5tZXNzYWdlLmJvZHkpXHJcblxyXG4gICAgc3Ryb25nTm9kZS5pbm5lckhUTUwgPSBtZXNzYWdlLnVzZXJuYW1lICsgJyAnXHJcbiAgICBzbWFsbE5vZGUuaW5uZXJIVE1MID0gJzI6NTAgcG0nXHJcblxyXG4gICAgcGFyYWdyYXBoTm9kZS5hcHBlbmRDaGlsZChzdHJvbmdOb2RlKVxyXG4gICAgcGFyYWdyYXBoTm9kZS5hcHBlbmRDaGlsZChzbWFsbE5vZGUpXHJcbiAgICBwYXJhZ3JhcGhOb2RlLmFwcGVuZENoaWxkKGJyMU5vZGUpXHJcbiAgICBwYXJhZ3JhcGhOb2RlLmFwcGVuZENoaWxkKG1lc3NhZ2VWYWx1ZSlcclxuICAgIHBhcmFncmFwaE5vZGUuYXBwZW5kQ2hpbGQoYnIyTm9kZSlcclxuXHJcbiAgICBjb250ZW50Tm9kZS5hcHBlbmRDaGlsZChwYXJhZ3JhcGhOb2RlKVxyXG4gICAgbWVkaWFDb250ZW50Tm9kZS5hcHBlbmRDaGlsZChjb250ZW50Tm9kZSlcclxuICAgIGFydGljbGVOb2RlLmFwcGVuZENoaWxkKG1lZGlhQ29udGVudE5vZGUpXHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lc3NhZ2VzLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGFydGljbGVOb2RlKVxyXG4gIH0pXHJcbn1cclxuXHJcbmNoYXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lc3NhZ2UnKVxyXG5cclxuICBjb25zdCB0b3BpYyA9IGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoJy9jaGFubmVscy8nLCAnJylcclxuXHJcbiAgY29uc29sZS5sb2cobWVzc2FnZS52YWx1ZS5sZW5ndGgpXHJcblxyXG4gIGlmIChtZXNzYWdlLnZhbHVlLmxlbmd0aClcclxuICAgIHdzLmdldFN1YnNjcmlwdGlvbihgY2hhdDoke3RvcGljfWApLmVtaXQoJ21lc3NhZ2UnLCB7XHJcbiAgICAgIGJvZHk6IG1lc3NhZ2UudmFsdWUsXHJcbiAgICAgIGNoYW5uZWw6IHRvcGljXHJcbiAgfSlcclxuXHJcbiAgbWVzc2FnZS52YWx1ZSA9ICcnO1xyXG4gIG1lc3NhZ2UuZm9jdXMoKVxyXG5cclxufSlcclxuXHJcblxyXG4iLCJpbXBvcnQgJy4vYnVyZ2VyVG9nZ2xlLmpzJ1xyXG5pbXBvcnQgJy4vY2hhdC5qcyciLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=