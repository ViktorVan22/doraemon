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
})({"doraemon.js":[function(require,module,exports) {
!function () {
  var n = 0;
  var duration = 50;
  $(".actions").on("click", "button", function (e) {
    var $button = $(e.currentTarget);
    var option = $button.attr("option");
    $button.addClass("active").siblings(".active").removeClass(".active");
    switch (option) {
      case "slow":
        duration = 100;
        break;
      case "normal":
        duration = 50;
        break;
      case "fast":
        duration = 5;
        break;
      case "play":
        writeCode(code, n);
        break;
      case "pause":
        window.clearInterval();
        break;
    }
  });

  function writeCode(code, start, fn) {
    var container = document.querySelector("#code");
    var styleTag = document.querySelector("#styleTag");
    var id = void 0;
    id = setTimeout(function run() {
      start += 1;
      container.innerHTML = code.substring(0, start);
      styleTag.innerHTML = code.substring(0, start);
      container.scrollTop = container.scrollHeight;
      if (start < code.length) {
        id = setTimeout(run, duration);
      } else {
        fn && fn.call();
      }
    }, duration);
  }

  var code = "\n* {\nmargin: 0;\npadding: 0;\nbox-sizing: border-box;\n}\n*::after,\n*::before {\nbox-sizing: border-box;\n}\nul,\nol {\nlist-style: none;\n}\n\n/* z-index\u7BA1\u7406 */\n.head {\nz-index: 50;\n}\n.body {\nz-index: 30;\n}\n.necklace {\nz-index: 25;\n}\n.bell {\nz-index: 26;\n}\n.belly {\nz-index: 20;\n}\n.arm{\nz-index: 21;\n}\n.hands{\nz-index: 22;\n}\n.feet{\nz-index: 19;\n}\n/* \u4E0D\u91CD\u8981\u7684z-index */\n.flight-vehicle > .base {\nz-index: 5;\n}\n.flight-vehicle > .cap {\nz-index: 5;\n}\n.flight-vehicle > .wing {\nz-index: 3;\n}\n\n#wrapper {\nbackground: rgb(212, 236, 249);\nwidth: 100vw;\nheight: 90vh;\nposition: relative;\n}\n/* \u6211\u6765\u7EC4\u6210\u5934\u90E8 */\n.head {\nborder: 2px solid black;\nwidth: 200px;\nheight: 200px;\nborder-radius: 50%;\nposition: relative;\nbackground: #35a1c9;\n}\n.head {\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nleft: 50%;\nmargin-left: -100px;\ntop: 100px;\n}\n/* \u6211\u6765\u7EC4\u6210\u8138\u90E8 */\n.face {\nborder: 2px solid black;\nwidth: 170px;\nheight: 170px;\nborder-radius: 50%;\nposition: absolute;\nbackground: white;\n}\n/* \u6211\u6765\u7EC4\u6210\u773C\u775B */\n.eye {\nborder: 1px solid black;\nwidth: 48px;\nheight: 48px;\nborder-radius: 50%;\nposition: absolute;\nbackground: white;\ntop: 15px;\n}\n.eye.left {\nright: 50%;\nmargin-left: 24px;\n}\n.eye.right {\nleft: 50%;\nmargin-right: 24px;\n}\n/* \u6211\u6765\u7EC4\u6210\u77B3\u5B54 */\n.eye.left > .pupil {\ncontent: \"\";\ndisplay: block;\nwidth: 14px;\nheight: 21px;\nposition: relative;\nbackground: black;\nborder-radius: 48% 48% 48% 48%;\ntop: 13.5px;\nleft: 28px;\n}\n.eye.right > .pupil {\ncontent: \"\";\ndisplay: block;\nwidth: 14px;\nheight: 21px;\nposition: relative;\nbackground: black;\nborder-radius: 48% 48% 48% 48%;\ntop: 13.5px;\nleft: 5px;\n}\n/* \u6211\u6765\u7EC4\u6210\u77B3\u4EC1 */\n.pupil::before {\ncontent: \"\";\ndisplay: block;\nwidth: 6px;\nheight: 9px;\nbackground: white;\nborder-radius: 48% 48% 48% 48%;\nposition: relative;\n/* \u8FD1\u4F3C\u5C45\u4E2D\u653E\u7F6E */\ntop: 6px;\nleft: 4px;\n}\n/* \u6211\u6765\u7EC4\u6210\u9F3B\u5B50 */\n.nose {\nborder: 1px solid black;\nwidth: 34px;\nheight: 34px;\nposition: relative;\nborder-radius: 50%;\nbackground: rgb(177, 23, 53);\ntop: -26px;\n}\n.nose > .lunar {\nborder: 1px solid #fff;\nwidth: 10px;\nheight: 10px;\nposition: absolute;\nbackground: white;\nborder-radius: 50%;\ntop: 6px;\nleft: 8px;\n}\n/* \u6211\u6765\u7EC4\u6210\u5634\u5DF4 */\n.mouth {\nwidth: 140px;\nheight: 70px;\nbackground: #b11635;\nposition: absolute;\ntop: 103px;\nborder-radius: 140px 140px 0 0;\ntransform: rotate(180deg);\noverflow: hidden;\n}\n/* \u6211\u6765\u7EC4\u6210\u820C\u5934 */\n.mouth > .tongue {\n/* border: 1px solid black; */\nwidth: 55px;\nheight: 55px;\nborder-radius: 50%;\nposition: absolute;\nbackground: rgb(202, 37, 51);\ntop: 15px;\noverflow: hidden;\n}\n.mouth > .tongue.left {\nleft: 50%;\ntop: -10px;\nleft: 65px;\n}\n.mouth > .tongue.right {\nright: 50%;\ntop: -10px;\nright: 65px;\n}\n/* \u6211\u6765\u7EC4\u6210\u80E1\u5B50 */\n.moustache {\nbackground: black;\nwidth: 2px;\nheight: 14.8px;\nposition: absolute;\nleft: 50%;\nmargin-left: -1px;\nbottom: 47.4%;\n}\n/* \u6211\u6765\u7EC4\u6210\u8138\u988A */\n.cheek {\nwidth: 167px;\nheight: 200px;\nposition: absolute;\ndisplay: flex;\nflex-direction: row;\njustify-content: space-between;\ntop: 47px;\n}\nli {\nwidth: 60px;\nheight: 2px;\nmargin: 14px 0;\nbackground: black;\n}\n.leftCheek > .b1 {\ntransform: rotate(20deg);\n}\n.leftCheek > .b3 {\ntransform: rotate(-10deg);\n}\n.rightCheek > .b1_ {\ntransform: rotate(-20deg);\n}\n.rightCheek > .b3_ {\ntransform: rotate(10deg);\n}\n/* /* \u6211\u6765\u7EC4\u6210\u7AF9\u873B\u8713\uFF01 */\n.flight-vehicle {\nbackground: rgb(186, 143, 39);\n}\n.flight-vehicle > .base {\nwidth: 7px;\nheight: 30px;\nposition: absolute;\ntop: -31px;\nleft: 50%;\nmargin-left: -3.5px;\nbackground: rgb(186, 143, 39);\nborder: 2px solid black;\n}\n.flight-vehicle > .cap {\nwidth: 20px;\nheight: 10px;\nbackground: rgb(186, 143, 39);\nborder: 2px solid black;\nposition: absolute;\nborder-radius: 100px 100px 0 0;\nleft: 50%;\nmargin-left: -10px;\ntop: -31px;\n}\n.flight-vehicle > .wing {\nwidth: 100px;\nheight: 5px;\nborder: 2px solid #555;\nposition: absolute;\nbackground: #bd8d22;\nborder-radius: 5px;\nleft: 50%;\nmargin-left: -50px;\ntop: -25px;\n}\n.flight-vehicle > .wing > .leftWing {\n}\n.flight-vehicle > .wing > .rightWing {\n}\n/* \u6211\u6765\u7EC4\u6210\u8EAF\u5E72 */\n\n.necklace {\nwidth: 100px;\nheight: 50px;\nbackground: #a1172e;\nborder-radius: 100px/50px;\nposition: absolute;\nleft: 50%;\nmargin-left: -50px;\ntop: 260px;\n}\n.bell {\nwidth: 35px;\nheight: 35px;\nbackground: #f19629;\nborder: 2px solid black;\nborder-radius: 50%;\nposition: absolute;\nleft: 50%;\nmargin-left: -17.5px;\ntop: 300px;\n}\n.bell > .hole {\nwidth: 8px;\nheight: 8px;\nbackground: black;\nborder-radius: 50%;\nposition: relative;\ntop: 60%;\nleft: 50%;\nmargin-left: -4px;\n/* margin: auto; */\n}\n.belly {\nwidth: 150px;\nheight: 150px;\nborder-radius: 50%;\nborder: 2px solid black;\nbackground: #35a1c9;\nposition: absolute;\nleft: 50%;\nmargin-left: -75px;\ntop: 230px;\n}\n.belly > .inside {\nwidth: 100px;\nheight: 60px;\nbackground: #fff;\nborder-radius: 60%;\nposition: absolute;\nleft: 50%;\nmargin-left: -50px;\ntop: 65px;\n}\n.belly > .magicPocket {\nwidth: 60px;\nheight: 30px;\nborder: 2px solid black;\nbackground: #fff;\nborder-radius: 0 0 100px 100px;\nposition: absolute;\nleft: 50%;\nmargin-left: -30px;\ntop: 88px;\n}\n.arm {\nwidth: 280px;\ndisplay: flex;\nflex-direction: row;\njustify-content: space-between;\nposition: absolute;\nleft: 50%;\nmargin-left: -140px;\ntop: 225px;\n}\n.arm > .leftArm {\nwidth: 100px;\nheight: 50px;\nborder: 2px solid black;\nbackground: #35a1c9;\ntransform: rotate(45deg);\nborder-radius: 120px / 65px;\n}\n.arm > .rightArm {\nwidth: 100px;\nheight: 50px;\nborder: 2px solid black;\nbackground: #35a1c9;\ntransform: rotate(-45deg);\nborder-radius: 120px / 65px;\n}\n.hands {\nwidth: 300px;\nleft: 50%;\nmargin-left: -150px;\ndisplay: flex;\nflex-direction: row;\njustify-content: space-between;\nposition: absolute;\ntop: 160px;\n}\n.leftHand {\nwidth: 75px;\nheight: 75px;\nborder: 2px solid black;\nbackground: #fff;\nborder-radius: 50%;\n}\n.rightHand {\nwidth: 75px;\nheight: 75px;\nborder: 2px solid black;\nbackground: #fff;\nborder-radius: 50%;\n}\n.feet {\nwidth: 120px;\nleft: 50%;\nmargin-left: -60px;\ndisplay: flex;\nflex-direction: row;\njustify-content: space-between;\nposition: absolute;\ntop: 320px;\n}\n.leftFoot {\nwidth: 60px;\nheight: 90px;\nborder: 2px solid black;\nbackground: #fff;\nborder-radius: 50px/75px;\n}\n.rightFoot {\nwidth: 60px;\nheight: 90px;\nborder: 2px solid black;\nbackground: #fff;\nborder-radius: 50px/75px;\n}\n\n/* \u505A\u4E2A\u52A8\u753B\u5427\uFF01 */\n#doraemon{\nanimation: doraemon 2s infinite alternate;\n}\n@keyframes doraemon{\n50%{\n  transform: translateY(150px);\n}\n100%{\n  transform: scale(1.3);\n  /* transform: rotate(360deg); */\n}\n}\n";
  writeCode(code, n);
}.call();
},{}],"C:\\Users\\郑成功\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["C:\\Users\\郑成功\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js","doraemon.js"], null)
//# sourceMappingURL=/doraemon.4f51c973.map