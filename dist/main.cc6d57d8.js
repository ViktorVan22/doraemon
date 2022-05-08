// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var string = "\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  *::after,\n  *::before {\n    box-sizing: border-box;\n  }\n  ul,\n  ol {\n    list-style: none;\n  }\n  \n  /* z-index\u7BA1\u7406 */\n  .head {\n    z-index: 50;\n  }\n  .body {\n    z-index: 30;\n  }\n  .necklace {\n    z-index: 25;\n  }\n  .bell {\n    z-index: 26;\n  }\n  .belly {\n    z-index: 20;\n  }\n  .arm{\n    z-index: 21;\n  }\n  .hands{\n    z-index: 22;\n  }\n  .feet{\n    z-index: 19;\n  }\n  /* \u4E0D\u91CD\u8981\u7684z-index */\n  .flight-vehicle > .base {\n    z-index: 5;\n  }\n  .flight-vehicle > .cap {\n    z-index: 5;\n  }\n  .flight-vehicle > .wing {\n    z-index: 3;\n  }\n  \n  #wrapper {\n    background: rgb(212, 236, 249);\n    width: 100vw;\n    /* height: 100%; */\n    position: relative;\n  }\n  /* \u6211\u6765\u7EC4\u6210\u5934\u90E8 */\n  .head {\n    border: 2px solid black;\n    width: 200px;\n    height: 200px;\n    border-radius: 50%;\n    position: relative;\n    background: #35a1c9;\n  }\n  .head {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    left: 50%;\n    margin-left: -100px;\n    top: 100px;\n  }\n  /* \u6211\u6765\u7EC4\u6210\u8138\u90E8 */\n  .face {\n    border: 2px solid black;\n    width: 170px;\n    height: 170px;\n    border-radius: 50%;\n    position: absolute;\n    background: white;\n  }\n  /* \u6211\u6765\u7EC4\u6210\u773C\u775B */\n  .eye {\n    border: 1px solid black;\n    width: 48px;\n    height: 48px;\n    border-radius: 50%;\n    position: absolute;\n    background: white;\n    top: 15px;\n  }\n  .eye.left {\n    right: 50%;\n    margin-left: 24px;\n  }\n  .eye.right {\n    left: 50%;\n    margin-right: 24px;\n  }\n  /* \u6211\u6765\u7EC4\u6210\u77B3\u5B54 */\n  .eye.left > .pupil {\n    content: \"\";\n    display: block;\n    width: 14px;\n    height: 21px;\n    position: relative;\n    background: black;\n    border-radius: 48% 48% 48% 48%;\n    top: 13.5px;\n    left: 28px;\n  }\n  .eye.right > .pupil {\n    content: \"\";\n    display: block;\n    width: 14px;\n    height: 21px;\n    position: relative;\n    background: black;\n    border-radius: 48% 48% 48% 48%;\n    top: 13.5px;\n    left: 5px;\n  }\n  /* \u6211\u6765\u7EC4\u6210\u77B3\u4EC1 */\n  .pupil::before {\n    content: \"\";\n    display: block;\n    width: 6px;\n    height: 9px;\n    background: white;\n    border-radius: 48% 48% 48% 48%;\n    position: relative;\n    /* \u8FD1\u4F3C\u5C45\u4E2D\u653E\u7F6E */\n    top: 6px;\n    left: 4px;\n  }\n  /* \u6211\u6765\u7EC4\u6210\u9F3B\u5B50 */\n  .nose {\n    border: 1px solid black;\n    width: 34px;\n    height: 34px;\n    position: relative;\n    border-radius: 50%;\n    background: rgb(177, 23, 53);\n    top: -26px;\n  }\n  .nose > .lunar {\n    border: 1px solid #fff;\n    width: 10px;\n    height: 10px;\n    position: absolute;\n    background: white;\n    border-radius: 50%;\n    top: 6px;\n    left: 8px;\n  }\n  /* \u6211\u6765\u7EC4\u6210\u5634\u5DF4 */\n  .mouth {\n    width: 140px;\n    height: 70px;\n    background: #b11635;\n    position: absolute;\n    top: 103px;\n    border-radius: 140px 140px 0 0;\n    transform: rotate(180deg);\n    overflow: hidden;\n  }\n  /* \u6211\u6765\u7EC4\u6210\u820C\u5934 */\n  .mouth > .tongue {\n    /* border: 1px solid black; */\n    width: 55px;\n    height: 55px;\n    border-radius: 50%;\n    position: absolute;\n    background: rgb(202, 37, 51);\n    top: 15px;\n    overflow: hidden;\n  }\n  .mouth > .tongue.left {\n    left: 50%;\n    top: -10px;\n    left: 65px;\n  }\n  .mouth > .tongue.right {\n    right: 50%;\n    top: -10px;\n    right: 65px;\n  }\n  /* \u6211\u6765\u7EC4\u6210\u80E1\u5B50 */\n  .moustache {\n    background: black;\n    width: 2px;\n    height: 14.8px;\n    position: absolute;\n    left: 50%;\n    margin-left: -1px;\n    bottom: 47.4%;\n  }\n  /* \u6211\u6765\u7EC4\u6210\u8138\u988A */\n  .cheek {\n    width: 167px;\n    height: 200px;\n    position: absolute;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    top: 47px;\n  }\n  li {\n    width: 60px;\n    height: 2px;\n    margin: 14px 0;\n    background: black;\n  }\n  .leftCheek > .b1 {\n    transform: rotate(20deg);\n  }\n  .leftCheek > .b3 {\n    transform: rotate(-10deg);\n  }\n  .rightCheek > .b1_ {\n    transform: rotate(-20deg);\n  }\n  .rightCheek > .b3_ {\n    transform: rotate(10deg);\n  }\n  /* /* \u6211\u6765\u7EC4\u6210\u7AF9\u873B\u8713\uFF01 */\n  .flight-vehicle {\n    background: rgb(186, 143, 39);\n  }\n  .flight-vehicle > .base {\n    width: 7px;\n    height: 30px;\n    position: absolute;\n    top: -31px;\n    left: 50%;\n    margin-left: -3.5px;\n    background: rgb(186, 143, 39);\n    border: 2px solid black;\n  }\n  .flight-vehicle > .cap {\n    width: 20px;\n    height: 10px;\n    background: rgb(186, 143, 39);\n    border: 2px solid black;\n    position: absolute;\n    border-radius: 100px 100px 0 0;\n    left: 50%;\n    margin-left: -10px;\n    top: -31px;\n  }\n  .flight-vehicle > .wing {\n    width: 100px;\n    height: 5px;\n    border: 2px solid #555;\n    position: absolute;\n    background: #bd8d22;\n    border-radius: 5px;\n    left: 50%;\n    margin-left: -50px;\n    top: -25px;\n  }\n  .flight-vehicle > .wing > .leftWing {\n  }\n  .flight-vehicle > .wing > .rightWing {\n  }\n  /* \u6211\u6765\u7EC4\u6210\u8EAF\u5E72 */\n  \n  .necklace {\n    width: 100px;\n    height: 50px;\n    background: #a1172e;\n    border-radius: 100px/50px;\n    position: absolute;\n    left: 50%;\n    margin-left: -50px;\n    top: 260px;\n  }\n  .bell {\n    width: 35px;\n    height: 35px;\n    background: #f19629;\n    border: 2px solid black;\n    border-radius: 50%;\n    position: absolute;\n    left: 50%;\n    margin-left: -17.5px;\n    top: 300px;\n  }\n  .bell > .hole {\n    width: 8px;\n    height: 8px;\n    background: black;\n    border-radius: 50%;\n    position: relative;\n    top: 60%;\n    left: 50%;\n    margin-left: -4px;\n    /* margin: auto; */\n  }\n  .belly {\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    border: 2px solid black;\n    background: #35a1c9;\n    position: absolute;\n    left: 50%;\n    margin-left: -75px;\n    top: 230px;\n  }\n  .belly > .inside {\n    width: 100px;\n    height: 60px;\n    background: #fff;\n    border-radius: 60%;\n    position: absolute;\n    left: 50%;\n    margin-left: -50px;\n    top: 65px;\n  }\n  .belly > .magicPocket {\n    width: 60px;\n    height: 30px;\n    border: 2px solid black;\n    background: #fff;\n    border-radius: 0 0 100px 100px;\n    position: absolute;\n    left: 50%;\n    margin-left: -30px;\n    top: 88px;\n  }\n  .arm {\n    width: 280px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    position: absolute;\n    left: 50%;\n    margin-left: -140px;\n    top: 225px;\n  }\n  .arm > .leftArm {\n    width: 100px;\n    height: 50px;\n    border: 2px solid black;\n    background: #35a1c9;\n    transform: rotate(45deg);\n    border-radius: 120px / 65px;\n  }\n  .arm > .rightArm {\n    width: 100px;\n    height: 50px;\n    border: 2px solid black;\n    background: #35a1c9;\n    transform: rotate(-45deg);\n    border-radius: 120px / 65px;\n  }\n  .hands {\n    width: 300px;\n    left: 50%;\n    margin-left: -150px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    position: absolute;\n    top: 160px;\n  }\n  .leftHand {\n    width: 75px;\n    height: 75px;\n    border: 2px solid black;\n    background: #fff;\n    border-radius: 50%;\n  }\n  .rightHand {\n    width: 75px;\n    height: 75px;\n    border: 2px solid black;\n    background: #fff;\n    border-radius: 50%;\n  }\n  .feet {\n    width: 120px;\n    left: 50%;\n    margin-left: -60px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    position: absolute;\n    top: 320px;\n  }\n  .leftFoot {\n    width: 60px;\n    height: 90px;\n    border: 2px solid black;\n    background: #fff;\n    border-radius: 50px/75px;\n  }\n  .rightFoot {\n    width: 60px;\n    height: 90px;\n    border: 2px solid black;\n    background: #fff;\n    border-radius: 50px/75px;\n  }\n\n  /*\u5DF2\u7ECF\u5230\u5E95\u4E86\uFF01*/\n  /*\u8FD9\u4E2A\u54C6\u5566A\u68A6\u9001\u7ED9\u4F60\uFF01*/\n  ";
exports.default = string;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _css = require("./css.js");

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var n = 0;
var duration = 50;
var container = document.querySelector("#code");
var styleTag = document.querySelector("#styleTag");

container.innerHTML = _css2.default.substring(0, n);
styleTag.innerHTML = _css2.default.substring(0, n);

var run = function run() {
  n += 1;
  if (n > _css2.default.length) {
    window.clearInterval(id);
    return;
  }
  container.innerHTML = _css2.default.substring(0, n);
  styleTag.innerHTML = _css2.default.substring(0, n);
  container.scrollTop = container.scrollHeight;
};

var id = setInterval(function () {
  run();
}, duration);

$(".actions").on("click", "button", function (e) {
  var $button = $(e.currentTarget);
  var option = $button.attr("option");
  $button.addClass("active").siblings(".active").removeClass(".active");
  switch (option) {
    case "pause":
      window.clearInterval(id);
      break;
    case "play":
      id = setInterval(function () {
        run();
      }, duration);
      break;
    case "slow":
      window.clearInterval(id);
      duration = 100;
      id = setInterval(function () {
        run();
      }, duration);
      break;
    case "fast":
      window.clearInterval(id);
      duration = 7;
      id = setInterval(function () {
        run();
      }, duration);
      break;
    case "normal":
      window.clearInterval(id);
      duration = 50;
      id = setInterval(function () {
        run();
      }, duration);
      break;
    case "reset":
      window.clearInterval(id);
      n = 0;
      id = setInterval(function () {
        run();
      }, duration);
      break;
    case "skip":
      n = _css2.default.length;
      container.innerHTML = _css2.default.substring(0, n);
      styleTag.innerHTML = _css2.default.substring(0, n);
      container.scrollTop = container.scrollHeight;
      break;
  }
});
},{"./css.js":"css.js"}],"C:\\Users\\郑成功\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '61197' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["C:\\Users\\郑成功\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.cc6d57d8.map