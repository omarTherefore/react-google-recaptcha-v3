'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var GoogleRecaptchaError;
(function (GoogleRecaptchaError) {
    GoogleRecaptchaError["SCRIPT_NOT_AVAILABLE"] = "Google recaptcha is not available";
})(GoogleRecaptchaError || (GoogleRecaptchaError = {}));
var GoogleReCaptchaContext = React.createContext({
// dummy default context;
});
var GoogleReCaptchaConsumer = GoogleReCaptchaContext.Consumer;
var GoogleReCaptchaProvider = /** @class */ (function (_super) {
    __extends(GoogleReCaptchaProvider, _super);
    function GoogleReCaptchaProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scriptId = 'google-recaptcha-v3';
        _this.googleRecaptchaSrc = 'https://www.google.com/recaptcha/api.js';
        _this.resolver = undefined;
        _this.rejecter = undefined;
        _this.grecaptcha = new Promise(function (resolve, reject) {
            _this.resolver = resolve;
            _this.rejecter = reject;
        });
        _this.executeRecaptcha = function (action) { return __awaiter(_this, void 0, void 0, function () {
            var reCaptchaKey;
            return __generator(this, function (_a) {
                reCaptchaKey = this.props.reCaptchaKey;
                return [2 /*return*/, this.grecaptcha.then(function (_grecaptcha) {
                        return _grecaptcha.execute(reCaptchaKey, { action: action });
                    })];
            });
        }); };
        _this.handleOnLoad = function () {
            if (!window || !window.grecaptcha) {
                console.warn(GoogleRecaptchaError.SCRIPT_NOT_AVAILABLE);
                return;
            }
            window.grecaptcha.ready(function () {
                _this.resolver(window.grecaptcha);
            });
        };
        _this.injectGoogleReCaptchaScript = function () {
            /**
             * Scripts has already been injected script,
             * return to avoid duplicated scripts
             */
            if (document.getElementById(_this.scriptId)) {
                _this.handleOnLoad();
                return;
            }
            var _a = _this.props, reCaptchaKey = _a.reCaptchaKey, language = _a.language, nonce = _a.nonce;
            var head = document.getElementsByTagName('head')[0];
            var js = document.createElement('script');
            js.id = _this.scriptId;
            if (nonce && nonce !== '') {
                js.setAttribute('nonce', "" + nonce);
            }
            js.src = _this.googleRecaptchaSrc + "?render=" + reCaptchaKey + (language ? "&hl=" + language : '');
            js.onload = _this.handleOnLoad;
            head.appendChild(js);
        };
        return _this;
    }
    GoogleReCaptchaProvider.prototype.componentDidMount = function () {
        if (!this.props.reCaptchaKey) {
            return;
        }
        this.injectGoogleReCaptchaScript();
    };
    GoogleReCaptchaProvider.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.reCaptchaKey || !this.props.reCaptchaKey) {
            return;
        }
        this.injectGoogleReCaptchaScript();
    };
    Object.defineProperty(GoogleReCaptchaProvider.prototype, "googleReCaptchaContextValue", {
        get: function () {
            return { executeRecaptcha: this.executeRecaptcha };
        },
        enumerable: true,
        configurable: true
    });
    GoogleReCaptchaProvider.prototype.render = function () {
        var children = this.props.children;
        return (React.createElement(GoogleReCaptchaContext.Provider, { value: this.googleReCaptchaContextValue }, children));
    };
    return GoogleReCaptchaProvider;
}(React.Component));

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics;

// tslint:disable-next-line:only-arrow-functions
var withGoogleReCaptcha = function (Component) {
    var WithGoogleReCaptchaComponent = function (props) { return (React.createElement(GoogleReCaptchaConsumer, null, function (googleReCaptchaValues) { return (React.createElement(Component, __assign({}, props, { googleReCaptchaProps: googleReCaptchaValues }))); })); };
    WithGoogleReCaptchaComponent.displayName = "withGoogleReCaptcha(" + (Component.displayName ||
        Component.name ||
        'Component') + ")";
    hoistNonReactStatics_cjs(WithGoogleReCaptchaComponent, Component);
    return WithGoogleReCaptchaComponent;
};

var GoogleReCaptcha = /** @class */ (function (_super) {
    __extends(GoogleReCaptcha, _super);
    function GoogleReCaptcha() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GoogleReCaptcha.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, googleReCaptchaProps, action, onVerify, executeRecaptcha, token;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.injectedProps, googleReCaptchaProps = _a.googleReCaptchaProps, action = _a.action, onVerify = _a.onVerify;
                        executeRecaptcha = googleReCaptchaProps.executeRecaptcha;
                        if (!executeRecaptcha) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, executeRecaptcha(action)];
                    case 1:
                        token = _b.sent();
                        if (!onVerify) {
                            return [2 /*return*/];
                        }
                        onVerify(token);
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(GoogleReCaptcha.prototype, "injectedProps", {
        get: function () {
            return this.props;
        },
        enumerable: true,
        configurable: true
    });
    GoogleReCaptcha.prototype.render = function () {
        return null;
    };
    return GoogleReCaptcha;
}(React.Component));
var WrappedGoogleRecaptcha = withGoogleReCaptcha(GoogleReCaptcha);

var useGoogleReCaptcha = function () {
    return React.useContext(GoogleReCaptchaContext);
};

exports.GoogleReCaptcha = WrappedGoogleRecaptcha;
exports.GoogleReCaptchaConsumer = GoogleReCaptchaConsumer;
exports.GoogleReCaptchaContext = GoogleReCaptchaContext;
exports.GoogleReCaptchaProvider = GoogleReCaptchaProvider;
exports.useGoogleReCaptcha = useGoogleReCaptcha;
exports.withGoogleReCaptcha = withGoogleReCaptcha;
//# sourceMappingURL=react-google-recaptcha-v3.cjs.js.map
