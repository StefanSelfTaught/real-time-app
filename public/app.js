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

/***/ "./resources/assets/scripts/app.js":
/*!*****************************************!*\
  !*** ./resources/assets/scripts/app.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import Ws from '@adonisjs/websocket-client'
document.addEventListener('DOMContentLoaded', function () {
  var chatForm = document.querySelector('#chat-form');
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
  }

  if (document.querySelector('.delete')) {
    document.querySelector('.delete').addEventListener('click', function () {
      document.querySelector('.message').remove();
    });
  }

  {
    /*<article class="chat-message media has-background-light">
     <div class="media-content">
       <div class="content">
         <p>
           <strong>Barbara Middleton</strong>
           <small>2:52 pm</small>
           <br>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Supellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
           <br>
         </p>
       </div>
     </div>
    </article>
    */
  }
  chatForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var message = document.querySelector('#message');
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
    var messageValue = document.createTextNode(message.value);
    strongNode.innerHTML = 'Name ';
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
    message.value = '';
    message.focus();
  }); // let ws = null
  // const startChat = () => {
  //   ws = Ws().connect()
  //   ws.on('open', () => {
  //     $('.connection-status').addClass('connected')
  //     subscribeToChannel()
  //   })
  //   ws.on('error', () => {
  //     $('.connection-status').removeClass('connected')
  //   })
  // }
  // if(window.username) {
  //   startChat()
  // }
  // const subscribeToChannel = () => {
  //   const chat = ws.subscribe('chat')
  //   chat.on('error', () => {
  //     $('.connection-status').removeClass('connected')
  //   })
  //   chat.on('message', (message) => {
  //     $('.messages').append(`
  //     <div class="message"><h3> ${message.username} </h3> <p> ${message.body} </p> </div>
  //   `)
  //   })
  // }
  // $('#message').keyup(function(e) {
  //   if (e.which === 13) {
  //     e.preventDefault()
  //     const message = $(this).val()
  //     $(this).val('')
  //     ws.getSubscription('chat').emit('message', {
  //       username: window.username,
  //       body: message,
  //     })
  //     return
  //   }
  // })
});

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
/*!*********************************************************************************!*\
  !*** multi ./resources/assets/scss/main.scss ./resources/assets/scripts/app.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./resources/assets/scss/main.scss */"./resources/assets/scss/main.scss");
module.exports = __webpack_require__(/*! ./resources/assets/scripts/app.js */"./resources/assets/scripts/app.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3Njc3MvbWFpbi5zY3NzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoYXRGb3JtIiwicXVlcnlTZWxlY3RvciIsIiRuYXZiYXJCdXJnZXJzIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiZm9yRWFjaCIsImVsIiwidGFyZ2V0IiwiZGF0YXNldCIsIiR0YXJnZXQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInJlbW92ZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJtZXNzYWdlIiwiYXJ0aWNsZU5vZGUiLCJjcmVhdGVFbGVtZW50IiwiYWRkIiwibWVkaWFDb250ZW50Tm9kZSIsImNvbnRlbnROb2RlIiwicGFyYWdyYXBoTm9kZSIsInN0cm9uZ05vZGUiLCJzbWFsbE5vZGUiLCJicjFOb2RlIiwiYnIyTm9kZSIsIm1lc3NhZ2VWYWx1ZSIsImNyZWF0ZVRleHROb2RlIiwidmFsdWUiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsImZvY3VzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtR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VCxDQUF1QixJQUF2QixDQUFoQjtBQUVBLFFBQU1TLFlBQVksR0FBR2pDLFFBQVEsQ0FBQ2tDLGNBQVQsQ0FBd0JaLE9BQU8sQ0FBQ2EsS0FBaEMsQ0FBckI7QUFFQU4sY0FBVSxDQUFDTyxTQUFYLEdBQXVCLE9BQXZCO0FBQ0FOLGFBQVMsQ0FBQ00sU0FBVixHQUFzQixTQUF0QjtBQUVBUixpQkFBYSxDQUFDUyxXQUFkLENBQTBCUixVQUExQjtBQUNBRCxpQkFBYSxDQUFDUyxXQUFkLENBQTBCUCxTQUExQjtBQUNBRixpQkFBYSxDQUFDUyxXQUFkLENBQTBCTixPQUExQjtBQUNBSCxpQkFBYSxDQUFDUyxXQUFkLENBQTBCSixZQUExQjtBQUNBTCxpQkFBYSxDQUFDUyxXQUFkLENBQTBCTCxPQUExQjtBQUVBTCxlQUFXLENBQUNVLFdBQVosQ0FBd0JULGFBQXhCO0FBQ0FGLG9CQUFnQixDQUFDVyxXQUFqQixDQUE2QlYsV0FBN0I7QUFDQUosZUFBVyxDQUFDYyxXQUFaLENBQXdCWCxnQkFBeEI7QUFFQTFCLFlBQVEsQ0FBQ0csYUFBVCxDQUF1QixxQkFBdkIsRUFBOENrQyxXQUE5QyxDQUEwRGQsV0FBMUQ7QUFFQUQsV0FBTyxDQUFDYSxLQUFSLEdBQWdCLEVBQWhCO0FBQ0FiLFdBQU8sQ0FBQ2dCLEtBQVI7QUFFRCxHQXZDRCxFQTNDa0QsQ0FvRmxEO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsQ0FuSUQsRTs7Ozs7Ozs7Ozs7QUNGQSx5QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvLyBpbXBvcnQgV3MgZnJvbSAnQGFkb25pc2pzL3dlYnNvY2tldC1jbGllbnQnXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG5cclxuICBjb25zdCBjaGF0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGF0LWZvcm0nKVxyXG4gIGNvbnN0ICRuYXZiYXJCdXJnZXJzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2YmFyLWJ1cmdlcicpLFxyXG4gICAgMFxyXG4gIClcclxuXHJcbiAgaWYgKCRuYXZiYXJCdXJnZXJzLmxlbmd0aCA+IDApIHtcclxuXHJcbiAgICAkbmF2YmFyQnVyZ2Vycy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZWwuZGF0YXNldC50YXJnZXRcclxuICAgICAgICBjb25zdCAkdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0KVxyXG5cclxuICAgICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKVxyXG4gICAgICAgICR0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJylcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZScpKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJykucmVtb3ZlKClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuey8qPGFydGljbGUgY2xhc3M9XCJjaGF0LW1lc3NhZ2UgbWVkaWEgaGFzLWJhY2tncm91bmQtbGlnaHRcIj5cclxuICA8ZGl2IGNsYXNzPVwibWVkaWEtY29udGVudFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgPHA+XHJcbiAgICAgICAgPHN0cm9uZz5CYXJiYXJhIE1pZGRsZXRvbjwvc3Ryb25nPlxyXG4gICAgICAgIDxzbWFsbD4yOjUyIHBtPC9zbWFsbD5cclxuICAgICAgICA8YnI+XHJcbiAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gRHVpcyBwb3J0YSBlcm9zIGxhY3VzLCBuZWMgdWx0cmljaWVzIGVsaXQgYmxhbmRpdCBub24uIFN1cGVsbGVudGVzcXVlIG1hdXJpcyBzaXQgYW1ldCBkb2xvciBibGFuZGl0IHJ1dHJ1bS4gTnVuYyBpbiB0ZW1wdXMgdHVycGlzLlxyXG4gICAgICAgIDxicj5cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvYXJ0aWNsZT5cclxuKi99XHJcblxyXG4gIGNoYXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZXNzYWdlJylcclxuXHJcbiAgICBjb25zdCBhcnRpY2xlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKVxyXG4gICAgYXJ0aWNsZU5vZGUuY2xhc3NMaXN0LmFkZCgnY2hhdC1tZXNzYWdlJywgJ21lZGlhJywgJ2hhcy1iYWNrZ3JvdW5kLWxpZ2h0JylcclxuXHJcbiAgICBjb25zdCBtZWRpYUNvbnRlbnROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIG1lZGlhQ29udGVudE5vZGUuY2xhc3NMaXN0LmFkZCgnbWVkaWEtY29udGVudCcpXHJcblxyXG4gICAgY29uc3QgY29udGVudE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29udGVudE5vZGUuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpXHJcblxyXG4gICAgY29uc3QgcGFyYWdyYXBoTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgY29uc3Qgc3Ryb25nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0cm9uZycpXHJcbiAgICBjb25zdCBzbWFsbE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFsbCcpXHJcbiAgICBjb25zdCBicjFOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKVxyXG4gICAgY29uc3QgYnIyTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJylcclxuXHJcbiAgICBjb25zdCBtZXNzYWdlVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShtZXNzYWdlLnZhbHVlKVxyXG5cclxuICAgIHN0cm9uZ05vZGUuaW5uZXJIVE1MID0gJ05hbWUgJ1xyXG4gICAgc21hbGxOb2RlLmlubmVySFRNTCA9ICcyOjUwIHBtJ1xyXG5cclxuICAgIHBhcmFncmFwaE5vZGUuYXBwZW5kQ2hpbGQoc3Ryb25nTm9kZSlcclxuICAgIHBhcmFncmFwaE5vZGUuYXBwZW5kQ2hpbGQoc21hbGxOb2RlKVxyXG4gICAgcGFyYWdyYXBoTm9kZS5hcHBlbmRDaGlsZChicjFOb2RlKVxyXG4gICAgcGFyYWdyYXBoTm9kZS5hcHBlbmRDaGlsZChtZXNzYWdlVmFsdWUpXHJcbiAgICBwYXJhZ3JhcGhOb2RlLmFwcGVuZENoaWxkKGJyMk5vZGUpXHJcblxyXG4gICAgY29udGVudE5vZGUuYXBwZW5kQ2hpbGQocGFyYWdyYXBoTm9kZSlcclxuICAgIG1lZGlhQ29udGVudE5vZGUuYXBwZW5kQ2hpbGQoY29udGVudE5vZGUpXHJcbiAgICBhcnRpY2xlTm9kZS5hcHBlbmRDaGlsZChtZWRpYUNvbnRlbnROb2RlKVxyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZXNzYWdlcy1jb250YWluZXInKS5hcHBlbmRDaGlsZChhcnRpY2xlTm9kZSlcclxuXHJcbiAgICBtZXNzYWdlLnZhbHVlID0gJyc7XHJcbiAgICBtZXNzYWdlLmZvY3VzKClcclxuXHJcbiAgfSlcclxuXHJcbiAgLy8gbGV0IHdzID0gbnVsbFxyXG5cclxuICAvLyBjb25zdCBzdGFydENoYXQgPSAoKSA9PiB7XHJcbiAgLy8gICB3cyA9IFdzKCkuY29ubmVjdCgpXHJcblxyXG4gIC8vICAgd3Mub24oJ29wZW4nLCAoKSA9PiB7XHJcbiAgLy8gICAgICQoJy5jb25uZWN0aW9uLXN0YXR1cycpLmFkZENsYXNzKCdjb25uZWN0ZWQnKVxyXG4gIC8vICAgICBzdWJzY3JpYmVUb0NoYW5uZWwoKVxyXG4gIC8vICAgfSlcclxuXHJcbiAgLy8gICB3cy5vbignZXJyb3InLCAoKSA9PiB7XHJcbiAgLy8gICAgICQoJy5jb25uZWN0aW9uLXN0YXR1cycpLnJlbW92ZUNsYXNzKCdjb25uZWN0ZWQnKVxyXG4gIC8vICAgfSlcclxuICAvLyB9XHJcblxyXG4gIC8vIGlmKHdpbmRvdy51c2VybmFtZSkge1xyXG4gIC8vICAgc3RhcnRDaGF0KClcclxuICAvLyB9XHJcblxyXG4gIC8vIGNvbnN0IHN1YnNjcmliZVRvQ2hhbm5lbCA9ICgpID0+IHtcclxuICAvLyAgIGNvbnN0IGNoYXQgPSB3cy5zdWJzY3JpYmUoJ2NoYXQnKVxyXG5cclxuICAvLyAgIGNoYXQub24oJ2Vycm9yJywgKCkgPT4ge1xyXG4gIC8vICAgICAkKCcuY29ubmVjdGlvbi1zdGF0dXMnKS5yZW1vdmVDbGFzcygnY29ubmVjdGVkJylcclxuICAvLyAgIH0pXHJcblxyXG4gIC8vICAgY2hhdC5vbignbWVzc2FnZScsIChtZXNzYWdlKSA9PiB7XHJcbiAgLy8gICAgICQoJy5tZXNzYWdlcycpLmFwcGVuZChgXHJcbiAgLy8gICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlXCI+PGgzPiAke21lc3NhZ2UudXNlcm5hbWV9IDwvaDM+IDxwPiAke21lc3NhZ2UuYm9keX0gPC9wPiA8L2Rpdj5cclxuICAvLyAgIGApXHJcbiAgLy8gICB9KVxyXG4gIC8vIH1cclxuXHJcbiAgLy8gJCgnI21lc3NhZ2UnKS5rZXl1cChmdW5jdGlvbihlKSB7XHJcbiAgLy8gICBpZiAoZS53aGljaCA9PT0gMTMpIHtcclxuICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gIC8vICAgICBjb25zdCBtZXNzYWdlID0gJCh0aGlzKS52YWwoKVxyXG4gIC8vICAgICAkKHRoaXMpLnZhbCgnJylcclxuXHJcbiAgLy8gICAgIHdzLmdldFN1YnNjcmlwdGlvbignY2hhdCcpLmVtaXQoJ21lc3NhZ2UnLCB7XHJcbiAgLy8gICAgICAgdXNlcm5hbWU6IHdpbmRvdy51c2VybmFtZSxcclxuICAvLyAgICAgICBib2R5OiBtZXNzYWdlLFxyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgICByZXR1cm5cclxuICAvLyAgIH1cclxuICAvLyB9KVxyXG59KVxyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=