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
    document.querySelector('#messages-container').appendChild(articleNode); // message.value = '';
    // message.focus()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3Njc3MvbWFpbi5zY3NzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoYXRGb3JtIiwicXVlcnlTZWxlY3RvciIsIiRuYXZiYXJCdXJnZXJzIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiZm9yRWFjaCIsImVsIiwidGFyZ2V0IiwiZGF0YXNldCIsIiR0YXJnZXQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInJlbW92ZSIsImV2ZW50IiwibWVzc2FnZSIsImFydGljbGVOb2RlIiwiY3JlYXRlRWxlbWVudCIsImFkZCIsIm1lZGlhQ29udGVudE5vZGUiLCJjb250ZW50Tm9kZSIsInBhcmFncmFwaE5vZGUiLCJzdHJvbmdOb2RlIiwic21hbGxOb2RlIiwiYnIxTm9kZSIsImJyMk5vZGUiLCJtZXNzYWdlVmFsdWUiLCJjcmVhdGVUZXh0Tm9kZSIsInZhbHVlIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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LENBQUNpQyxjQUFULENBQXdCWixPQUFPLENBQUNhLEtBQWhDLENBQXJCO0FBRUFOLGNBQVUsQ0FBQ08sU0FBWCxHQUF1QixPQUF2QjtBQUNBTixhQUFTLENBQUNNLFNBQVYsR0FBc0IsU0FBdEI7QUFFQVIsaUJBQWEsQ0FBQ1MsV0FBZCxDQUEwQlIsVUFBMUI7QUFDQUQsaUJBQWEsQ0FBQ1MsV0FBZCxDQUEwQlAsU0FBMUI7QUFDQUYsaUJBQWEsQ0FBQ1MsV0FBZCxDQUEwQk4sT0FBMUI7QUFDQUgsaUJBQWEsQ0FBQ1MsV0FBZCxDQUEwQkosWUFBMUI7QUFDQUwsaUJBQWEsQ0FBQ1MsV0FBZCxDQUEwQkwsT0FBMUI7QUFFQUwsZUFBVyxDQUFDVSxXQUFaLENBQXdCVCxhQUF4QjtBQUNBRixvQkFBZ0IsQ0FBQ1csV0FBakIsQ0FBNkJWLFdBQTdCO0FBQ0FKLGVBQVcsQ0FBQ2MsV0FBWixDQUF3QlgsZ0JBQXhCO0FBRUF6QixZQUFRLENBQUNHLGFBQVQsQ0FBdUIscUJBQXZCLEVBQThDaUMsV0FBOUMsQ0FBMERkLFdBQTFELEVBakM2QyxDQW1DN0M7QUFDQTtBQUVELEdBdENELEVBM0NrRCxDQW1GbEQ7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxDQWxJRCxFOzs7Ozs7Ozs7OztBQ0ZBLHlDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIGltcG9ydCBXcyBmcm9tICdAYWRvbmlzanMvd2Vic29ja2V0LWNsaWVudCdcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IGNoYXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoYXQtZm9ybScpXHJcbiAgY29uc3QgJG5hdmJhckJ1cmdlcnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZiYXItYnVyZ2VyJyksXHJcbiAgICAwXHJcbiAgKVxyXG5cclxuICBpZiAoJG5hdmJhckJ1cmdlcnMubGVuZ3RoID4gMCkge1xyXG5cclxuICAgICRuYXZiYXJCdXJnZXJzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBlbC5kYXRhc2V0LnRhcmdldFxyXG4gICAgICAgIGNvbnN0ICR0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXQpXHJcblxyXG4gICAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpXHJcbiAgICAgICAgJHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlJykpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UnKS5yZW1vdmUoKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG57Lyo8YXJ0aWNsZSBjbGFzcz1cImNoYXQtbWVzc2FnZSBtZWRpYSBoYXMtYmFja2dyb3VuZC1saWdodFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJtZWRpYS1jb250ZW50XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICA8cD5cclxuICAgICAgICA8c3Ryb25nPkJhcmJhcmEgTWlkZGxldG9uPC9zdHJvbmc+XHJcbiAgICAgICAgPHNtYWxsPjI6NTIgcG08L3NtYWxsPlxyXG4gICAgICAgIDxicj5cclxuICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBEdWlzIHBvcnRhIGVyb3MgbGFjdXMsIG5lYyB1bHRyaWNpZXMgZWxpdCBibGFuZGl0IG5vbi4gU3VwZWxsZW50ZXNxdWUgbWF1cmlzIHNpdCBhbWV0IGRvbG9yIGJsYW5kaXQgcnV0cnVtLiBOdW5jIGluIHRlbXB1cyB0dXJwaXMuXHJcbiAgICAgICAgPGJyPlxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9hcnRpY2xlPlxyXG4qL31cclxuXHJcbiAgY2hhdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lc3NhZ2UnKVxyXG5cclxuICAgIGNvbnN0IGFydGljbGVOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpXHJcbiAgICBhcnRpY2xlTm9kZS5jbGFzc0xpc3QuYWRkKCdjaGF0LW1lc3NhZ2UnLCAnbWVkaWEnLCAnaGFzLWJhY2tncm91bmQtbGlnaHQnKVxyXG5cclxuICAgIGNvbnN0IG1lZGlhQ29udGVudE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgbWVkaWFDb250ZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdtZWRpYS1jb250ZW50JylcclxuXHJcbiAgICBjb25zdCBjb250ZW50Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb250ZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdjb250ZW50JylcclxuXHJcbiAgICBjb25zdCBwYXJhZ3JhcGhOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBjb25zdCBzdHJvbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3Ryb25nJylcclxuICAgIGNvbnN0IHNtYWxsTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYWxsJylcclxuICAgIGNvbnN0IGJyMU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpXHJcbiAgICBjb25zdCBicjJOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKVxyXG5cclxuICAgIGNvbnN0IG1lc3NhZ2VWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG1lc3NhZ2UudmFsdWUpXHJcblxyXG4gICAgc3Ryb25nTm9kZS5pbm5lckhUTUwgPSAnTmFtZSAnXHJcbiAgICBzbWFsbE5vZGUuaW5uZXJIVE1MID0gJzI6NTAgcG0nXHJcblxyXG4gICAgcGFyYWdyYXBoTm9kZS5hcHBlbmRDaGlsZChzdHJvbmdOb2RlKVxyXG4gICAgcGFyYWdyYXBoTm9kZS5hcHBlbmRDaGlsZChzbWFsbE5vZGUpXHJcbiAgICBwYXJhZ3JhcGhOb2RlLmFwcGVuZENoaWxkKGJyMU5vZGUpXHJcbiAgICBwYXJhZ3JhcGhOb2RlLmFwcGVuZENoaWxkKG1lc3NhZ2VWYWx1ZSlcclxuICAgIHBhcmFncmFwaE5vZGUuYXBwZW5kQ2hpbGQoYnIyTm9kZSlcclxuXHJcbiAgICBjb250ZW50Tm9kZS5hcHBlbmRDaGlsZChwYXJhZ3JhcGhOb2RlKVxyXG4gICAgbWVkaWFDb250ZW50Tm9kZS5hcHBlbmRDaGlsZChjb250ZW50Tm9kZSlcclxuICAgIGFydGljbGVOb2RlLmFwcGVuZENoaWxkKG1lZGlhQ29udGVudE5vZGUpXHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lc3NhZ2VzLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGFydGljbGVOb2RlKVxyXG5cclxuICAgIC8vIG1lc3NhZ2UudmFsdWUgPSAnJztcclxuICAgIC8vIG1lc3NhZ2UuZm9jdXMoKVxyXG5cclxuICB9KVxyXG5cclxuICAvLyBsZXQgd3MgPSBudWxsXHJcblxyXG4gIC8vIGNvbnN0IHN0YXJ0Q2hhdCA9ICgpID0+IHtcclxuICAvLyAgIHdzID0gV3MoKS5jb25uZWN0KClcclxuXHJcbiAgLy8gICB3cy5vbignb3BlbicsICgpID0+IHtcclxuICAvLyAgICAgJCgnLmNvbm5lY3Rpb24tc3RhdHVzJykuYWRkQ2xhc3MoJ2Nvbm5lY3RlZCcpXHJcbiAgLy8gICAgIHN1YnNjcmliZVRvQ2hhbm5lbCgpXHJcbiAgLy8gICB9KVxyXG5cclxuICAvLyAgIHdzLm9uKCdlcnJvcicsICgpID0+IHtcclxuICAvLyAgICAgJCgnLmNvbm5lY3Rpb24tc3RhdHVzJykucmVtb3ZlQ2xhc3MoJ2Nvbm5lY3RlZCcpXHJcbiAgLy8gICB9KVxyXG4gIC8vIH1cclxuXHJcbiAgLy8gaWYod2luZG93LnVzZXJuYW1lKSB7XHJcbiAgLy8gICBzdGFydENoYXQoKVxyXG4gIC8vIH1cclxuXHJcbiAgLy8gY29uc3Qgc3Vic2NyaWJlVG9DaGFubmVsID0gKCkgPT4ge1xyXG4gIC8vICAgY29uc3QgY2hhdCA9IHdzLnN1YnNjcmliZSgnY2hhdCcpXHJcblxyXG4gIC8vICAgY2hhdC5vbignZXJyb3InLCAoKSA9PiB7XHJcbiAgLy8gICAgICQoJy5jb25uZWN0aW9uLXN0YXR1cycpLnJlbW92ZUNsYXNzKCdjb25uZWN0ZWQnKVxyXG4gIC8vICAgfSlcclxuXHJcbiAgLy8gICBjaGF0Lm9uKCdtZXNzYWdlJywgKG1lc3NhZ2UpID0+IHtcclxuICAvLyAgICAgJCgnLm1lc3NhZ2VzJykuYXBwZW5kKGBcclxuICAvLyAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2VcIj48aDM+ICR7bWVzc2FnZS51c2VybmFtZX0gPC9oMz4gPHA+ICR7bWVzc2FnZS5ib2R5fSA8L3A+IDwvZGl2PlxyXG4gIC8vICAgYClcclxuICAvLyAgIH0pXHJcbiAgLy8gfVxyXG5cclxuICAvLyAkKCcjbWVzc2FnZScpLmtleXVwKGZ1bmN0aW9uKGUpIHtcclxuICAvLyAgIGlmIChlLndoaWNoID09PSAxMykge1xyXG4gIC8vICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgLy8gICAgIGNvbnN0IG1lc3NhZ2UgPSAkKHRoaXMpLnZhbCgpXHJcbiAgLy8gICAgICQodGhpcykudmFsKCcnKVxyXG5cclxuICAvLyAgICAgd3MuZ2V0U3Vic2NyaXB0aW9uKCdjaGF0JykuZW1pdCgnbWVzc2FnZScsIHtcclxuICAvLyAgICAgICB1c2VybmFtZTogd2luZG93LnVzZXJuYW1lLFxyXG4gIC8vICAgICAgIGJvZHk6IG1lc3NhZ2UsXHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICAgIHJldHVyblxyXG4gIC8vICAgfVxyXG4gIC8vIH0pXHJcbn0pXHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==