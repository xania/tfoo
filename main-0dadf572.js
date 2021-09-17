/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./mvc.js/outlet/outlet.scss":
/*!***********************************!*\
  !*** ./mvc.js/outlet/outlet.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "mvc.js/outlet/outlet-3c23e029e638bc7ea9a9136e6702f0a2.css");

/***/ }),

/***/ "./src/app/agents-planning/tracks/style.scss":
/*!***************************************************!*\
  !*** ./src/app/agents-planning/tracks/style.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/app/agents-planning/tracks/style-3c23e029e638bc7ea9a9136e6702f0a2.css");

/***/ }),

/***/ "./src/app/jennah/menu-card/menu-card.scss":
/*!*************************************************!*\
  !*** ./src/app/jennah/menu-card/menu-card.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/app/jennah/menu-card/menu-card-3c23e029e638bc7ea9a9136e6702f0a2.css");

/***/ }),

/***/ "./src/app/style.scss":
/*!****************************!*\
  !*** ./src/app/style.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/app/style-3c23e029e638bc7ea9a9136e6702f0a2.css");

/***/ }),

/***/ "./src/components/date-picker/style.scss":
/*!***********************************************!*\
  !*** ./src/components/date-picker/style.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/components/date-picker/style-3c23e029e638bc7ea9a9136e6702f0a2.css");

/***/ }),

/***/ "./src/components/spinner/style.scss":
/*!*******************************************!*\
  !*** ./src/components/spinner/style.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/components/spinner/style-3c23e029e638bc7ea9a9136e6702f0a2.css");

/***/ }),

/***/ "./src/components/text-field/style.scss":
/*!**********************************************!*\
  !*** ./src/components/text-field/style.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/components/text-field/style-3c23e029e638bc7ea9a9136e6702f0a2.css");

/***/ }),

/***/ "./src/components/time-table/style.scss":
/*!**********************************************!*\
  !*** ./src/components/time-table/style.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/components/time-table/style-3c23e029e638bc7ea9a9136e6702f0a2.css");

/***/ }),

/***/ "./src/app/jennah/scan-me 2.svg":
/*!**************************************!*\
  !*** ./src/app/jennah/scan-me 2.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/app/jennah/scan-me 2.svg");

/***/ }),

/***/ "./glow.js/components/css.ts":
/*!***********************************!*\
  !*** ./glow.js/components/css.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Css),
/* harmony export */   "Attr": () => (/* binding */ Attr)
/* harmony export */ });
function Css(props) {
    return {
        render: function (driver) {
            var when = props.when, value = props.value;
            if (when && typeof when.subscribe === 'function') {
                var binding_1 = driver.createAttribute('class', undefined);
                when.subscribe(function (e) {
                    if (e)
                        binding_1.next(value);
                    else
                        binding_1.next([]);
                });
                return binding_1;
            }
            else {
                return driver.createAttribute('class', value);
            }
        },
    };
}
function Attr(props) {
    return {
        render: function (driver) {
            var when = props.when, name = props.name, value = props.value;
            if (when && typeof when.subscribe === 'function') {
                var binding_2 = driver.createAttribute(name, undefined);
                when.subscribe(function (e) {
                    if (e)
                        binding_2.next(value);
                    else
                        binding_2.next([]);
                });
                return binding_2;
            }
            else {
                return driver.createAttribute(name, value);
            }
        },
    };
}


/***/ }),

/***/ "./glow.js/components/if.ts":
/*!**********************************!*\
  !*** ./glow.js/components/if.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ If)
/* harmony export */ });
/* harmony import */ var _lib_driver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/driver */ "./glow.js/lib/driver.ts");
/* harmony import */ var _lib_tpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/tpl */ "./glow.js/lib/tpl.ts");


function If(props, children) {
    if ((0,_lib_driver__WEBPACK_IMPORTED_MODULE_0__.isSubscribable)(props.condition)) {
        return new ConditionalTemplate(props.condition, (0,_lib_tpl__WEBPACK_IMPORTED_MODULE_1__.flatTree)(children, _lib_tpl__WEBPACK_IMPORTED_MODULE_1__.asTemplate));
    }
    else {
        if (props.condition)
            return new _lib_tpl__WEBPACK_IMPORTED_MODULE_1__.FragmentTemplate(children);
        else
            return new _lib_tpl__WEBPACK_IMPORTED_MODULE_1__.EmptyTemplate();
    }
}
var ConditionalTemplate = /** @class */ (function () {
    function ConditionalTemplate(expr, _children) {
        this.expr = expr;
        this._children = _children;
    }
    ConditionalTemplate.prototype.render = function (driver) {
        var scope = driver.createScope();
        var inner = null;
        var self = this;
        var subscr = self.expr.subscribe(function (visible) {
            var _children = self._children;
            if (visible) {
                inner = inner || (0,_lib_tpl__WEBPACK_IMPORTED_MODULE_1__.renderMany)(scope, _children);
            }
            else if (inner) {
                for (var _i = 0, inner_1 = inner; _i < inner_1.length; _i++) {
                    var b = inner_1[_i];
                    if (b.dispose) {
                        b.dispose();
                    }
                }
                inner = null;
            }
        });
        return {
            driver: function () {
                return scope;
            },
            dispose: function () {
                if (subscr && typeof subscr.unsubscribe === 'function')
                    subscr.unsubscribe();
                scope.dispose();
            },
        };
    };
    return ConditionalTemplate;
}());


/***/ }),

/***/ "./glow.js/components/index.ts":
/*!*************************************!*\
  !*** ./glow.js/components/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "List": () => (/* reexport safe */ _list__WEBPACK_IMPORTED_MODULE_0__.List)
/* harmony export */ });
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ "./glow.js/components/list/index.ts");
/* harmony import */ var _if__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./if */ "./glow.js/components/if.ts");




/***/ }),

/***/ "./glow.js/components/list/helpers.ts":
/*!********************************************!*\
  !*** ./glow.js/components/list/helpers.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "flatTree": () => (/* binding */ flatTree)
/* harmony export */ });
/* harmony import */ var _lib_tpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/tpl */ "./glow.js/lib/tpl.ts");

function flatTree(source, args) {
    var stack = [source];
    var result = [];
    while (stack.length > 0) {
        var curr = stack.pop();
        if (window.Array.isArray(curr)) {
            for (var i = curr.length - 1; i >= 0; i--) {
                stack.push(curr[i]);
            }
        }
        else if (typeof curr === 'function') {
            var fn = curr;
            var retval = fn.apply(null, args);
            stack.push(retval);
        }
        else {
            result.push((0,_lib_tpl__WEBPACK_IMPORTED_MODULE_0__.asTemplate)(curr));
        }
    }
    return result;
}
// type Tree<T> = T | [ Tree | Tree[] ]
// console.log(elements);


/***/ }),

/***/ "./glow.js/components/list/index.ts":
/*!******************************************!*\
  !*** ./glow.js/components/list/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "List": () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var _lib_driver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/driver */ "./glow.js/lib/driver.ts");
/* harmony import */ var _lib_tpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/tpl */ "./glow.js/lib/tpl.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./glow.js/components/list/helpers.ts");
/* harmony import */ var _mutabl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../mutabl.js */ "./mutabl.js/index.ts");




function List(props, _children) {
    var source = props.source;
    function itemTemplate(values, index) {
        return (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.flatTree)(_children, [
            (0,_mutabl_js__WEBPACK_IMPORTED_MODULE_3__.isExpression)(values) ? (0,_mutabl_js__WEBPACK_IMPORTED_MODULE_3__.asProxy)(values) : values,
            { index: index, dispose: dispose },
        ]);
        function dispose() {
            var idx = index();
            if (idx >= 0) {
                if (Array.isArray(source)) {
                    source.splice(idx, 1);
                }
                else {
                    source.add({
                        type: 'remove',
                        predicate: function (x) { return x == values; },
                    });
                }
            }
        }
    }
    return {
        render: function (driver) {
            var items = [];
            var source = props.source;
            var rootScope = driver.createScope();
            var disposable = {
                dispose: function () {
                    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                        var item = items_1[_i];
                        var scope = item.scope, bindings = item.bindings;
                        for (var _a = 0, bindings_1 = bindings; _a < bindings_1.length; _a++) {
                            var binding = bindings_1[_a];
                            if (binding.dispose) {
                                binding.dispose();
                            }
                        }
                        scope.dispose();
                    }
                },
            };
            if (Array.isArray(source)) {
                for (var i = 0; i < source.length; i++) {
                    applyMutation({
                        type: 'insert',
                        index: i,
                        values: source[i],
                    });
                }
                return disposable;
            }
            else {
                return [source.subscribe(applyMutation), disposable];
            }
            function applyMutation(m) {
                if (m.type === 'push') {
                    var values = m.values;
                    applyInsert(values, items.length);
                }
                else if (m.type === 'insert') {
                    var values = m.values, index = m.index;
                    applyInsert(values, index);
                }
                else if (m.type === 'remove') {
                    var idx = typeof m.predicate === 'number'
                        ? m.predicate
                        : items.findIndex(containerPredicate(m.predicate));
                    // const idx = items.findIndex((ci) => m.predicate(ci.values));
                    if (idx >= 0) {
                        var item = items[idx];
                        var scope = item.scope, bindings = item.bindings;
                        scope.dispose();
                        (0,_lib_driver__WEBPACK_IMPORTED_MODULE_0__.disposeMany)(bindings);
                        items.splice(idx, 1);
                    }
                }
                else if (m.type === 'reset') {
                    applyReset(m.items);
                }
                else if (m.type === 'move') {
                    // TODO implement!
                    var tmp = items[m.from];
                    items[m.from] = items[m.to];
                    items[m.to] = tmp;
                }
                else {
                    console.error('not a mutation ', m);
                }
                function applyInsert(values, idx) {
                    var itemScope = rootScope.createScope(idx);
                    var item = {
                        scope: itemScope,
                        values: values,
                        bindings: (0,_lib_tpl__WEBPACK_IMPORTED_MODULE_1__.renderStack)((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.flatTree)([itemTemplate], [values, index])
                            .map(function (template) { return ({
                            driver: itemScope,
                            template: template,
                        }); })
                            .reverse()),
                    };
                    items.splice(idx, 0, item);
                    function index() {
                        for (var i = 0; i < items.length; i++) {
                            var item_1 = items[i];
                            if (item_1.scope === itemScope) {
                                return i;
                            }
                        }
                        return idx;
                    }
                }
                function applyReset(newItems) {
                    var _loop_1 = function (i) {
                        // for (const snap of items) {
                        var snap = items[i];
                        var values = snap.values, scope = snap.scope, bindings = snap.bindings;
                        if (values) {
                            var idx = newItems.findIndex(function (x) { return x === snap.values; });
                            if (idx < 0) {
                                scope.dispose();
                                (0,_lib_driver__WEBPACK_IMPORTED_MODULE_0__.disposeMany)(bindings);
                                items.splice(i, 1);
                                i--;
                            }
                        }
                        out_i_1 = i;
                    };
                    var out_i_1;
                    for (var i = 0; i < items.length; i++) {
                        _loop_1(i);
                        i = out_i_1;
                    }
                    var _loop_2 = function (i) {
                        var values = newItems[i];
                        var index = items.findIndex(function (ci) { return ci.values === values; });
                        if (index < 0) {
                            applyMutation({
                                type: 'insert',
                                index: i,
                                values: values,
                            });
                        }
                        else if (index != i) {
                            // items[n].update(values);
                            applyMutation({
                                type: 'move',
                                from: index,
                                to: i,
                            });
                        }
                        else {
                            // items[n].update(values);
                        }
                    };
                    for (var i = 0; i < newItems.length; i++) {
                        _loop_2(i);
                    }
                }
            }
        },
    };
}
function containerPredicate(filter) {
    return function (ci) { return filter(ci.values); };
}


/***/ }),

/***/ "./glow.js/index.ts":
/*!**************************!*\
  !*** ./glow.js/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _lib_tpl__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "tpl": () => (/* reexport safe */ _lib_tpl__WEBPACK_IMPORTED_MODULE_0__.tpl),
/* harmony export */   "render": () => (/* reexport safe */ _lib_tpl__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "lazy": () => (/* reexport safe */ _lib_tpl__WEBPACK_IMPORTED_MODULE_0__.lazy),
/* harmony export */   "asTemplate": () => (/* reexport safe */ _lib_tpl__WEBPACK_IMPORTED_MODULE_0__.asTemplate),
/* harmony export */   "DomDriver": () => (/* reexport safe */ _lib_dom__WEBPACK_IMPORTED_MODULE_1__.DomDriver),
/* harmony export */   "children": () => (/* reexport safe */ _lib_driver__WEBPACK_IMPORTED_MODULE_2__.children),
/* harmony export */   "disposeMany": () => (/* reexport safe */ _lib_driver__WEBPACK_IMPORTED_MODULE_2__.disposeMany),
/* harmony export */   "init": () => (/* reexport safe */ _lib_driver__WEBPACK_IMPORTED_MODULE_2__.init),
/* harmony export */   "isPrimitive": () => (/* reexport safe */ _lib_driver__WEBPACK_IMPORTED_MODULE_2__.isPrimitive),
/* harmony export */   "isSubscribable": () => (/* reexport safe */ _lib_driver__WEBPACK_IMPORTED_MODULE_2__.isSubscribable),
/* harmony export */   "referenceNode": () => (/* reexport safe */ _lib_driver__WEBPACK_IMPORTED_MODULE_2__.referenceNode)
/* harmony export */ });
/* harmony import */ var _lib_tpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/tpl */ "./glow.js/lib/tpl.ts");
/* harmony import */ var _lib_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/dom */ "./glow.js/lib/dom.ts");
/* harmony import */ var _lib_driver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/driver */ "./glow.js/lib/driver.ts");






/***/ }),

/***/ "./glow.js/lib/dom.ts":
/*!****************************!*\
  !*** ./glow.js/lib/dom.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DomDriver": () => (/* binding */ DomDriver),
/* harmony export */   "isDomNode": () => (/* binding */ isDomNode)
/* harmony export */ });
/* harmony import */ var _driver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./driver */ "./glow.js/lib/driver.ts");
/* harmony import */ var _util_combineLatest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/combineLatest */ "./glow.js/lib/util/combineLatest.ts");
var _a;


var __emptyBinding = { dispose: function () { } };
var DomDriver = /** @class */ (function () {
    function DomDriver(target) {
        this.domElements = [];
        this.events = [];
        this[_a] = [];
        var dom = typeof target === 'string'
            ? document.querySelector(target)
            : target;
        if (!dom) {
            throw Error('target element is required');
        }
        this.target = dom;
    }
    DomDriver.prototype.bind = function (binder) {
        return binder(this.target);
    };
    DomDriver.prototype.createDriver = function (node) {
        return new DomDriver(node);
    };
    DomDriver.prototype.createScope = function (idx) {
        // const commentNode = document.createComment(`--- ${name} ---`);
        // this.target.appendChild(commentNode);
        var scope = createScope(this, this);
        if (typeof idx === 'number') {
            this[_driver__WEBPACK_IMPORTED_MODULE_0__.children].splice(idx, 0, scope);
        }
        else {
            this[_driver__WEBPACK_IMPORTED_MODULE_0__.children].push(scope);
        }
        return scope;
    };
    DomDriver.prototype.createEvent = function (name, value) {
        if (!value)
            return __emptyBinding;
        var target = this.target;
        if (!('on' + name.toLocaleLowerCase() in target)) {
            return null;
        }
        target.addEventListener(name, eventHandler);
        return {
            dispose: function () {
                target.removeEventListener(name, eventHandler);
            },
        };
        function eventHandler(evt) {
            if (typeof value === 'function') {
                value(evt);
            }
            else {
                value.execute(evt);
            }
        }
    };
    DomDriver.prototype.appendChild = function (child) {
        var _children = this[_driver__WEBPACK_IMPORTED_MODULE_0__.children];
        var scope = this;
        if (Array.isArray(_children)) {
            var component_1 = {
                insertBefore: function (node) {
                    scope.target.insertBefore(node, child);
                },
                dispose: function () {
                    child.dispose();
                    removeComponent(scope, component_1);
                },
            };
            _children.push(component_1);
            this.target.appendChild(child);
        }
        else {
            console.warn('ignore child, driver is disposed.');
        }
    };
    DomDriver.prototype.createElement = function (name, init) {
        var tagNode = createDOMElement(this.target, name);
        this.appendChild(tagNode);
        var driver = this.createDriver(tagNode);
        return {
            ready: function () {
                init && init(tagNode);
            },
            driver: function () {
                return driver;
            },
            dispose: function () {
                tagNode.remove();
            },
        };
    };
    // insertAt(tagNode, index, anchorNode) {
    //     insertNodeAt(this, this.domElements, anchorNode, tagNode, index);
    // }
    DomDriver.prototype.createNative = function (value) {
        var node = isDomNode(value)
            ? value
            : document.createTextNode(value);
        this.appendChild(node);
        return {
            next: function (value) {
                node.nodeValue = value;
            },
            dispose: function () {
                return node.remove();
            },
        };
    };
    DomDriver.prototype.createAttribute = function (name, value) {
        return createAttribute(this.target, name, value);
    };
    DomDriver.prototype.findEventBinding = function (target, eventName) {
        var events = this.events;
        var node = target;
        while (node) {
            var e = events.length;
            while (e--) {
                var ev = events[e];
                if (ev.dom === node && ev.eventName === eventName) {
                    return ev.eventBinding;
                }
            }
            node = node.parentNode;
        }
        return null;
    };
    DomDriver.prototype.on = function (eventName, dom, eventBinding) {
        var _this = this;
        var events = this.events, i = events.length, eventBound = false;
        while (i--) {
            var ev = events[i];
            if (ev.eventName === eventName) {
                if (ev.dom === dom)
                    return ev;
                else {
                    eventBound = true;
                    break;
                }
            }
        }
        if (!eventBound) {
            this.target.addEventListener(eventName, function (event) {
                var target = event.target;
                if (target) {
                    var eventBinding = _this.findEventBinding(target, eventName);
                    if (eventBinding) {
                        eventBinding.fire(event);
                        event.preventDefault();
                    }
                }
            });
        }
        var entry = {
            eventName: eventName,
            dom: dom,
            eventBinding: eventBinding,
            dispose: function () {
                var idx = events.indexOf(this);
                if (idx >= 0) {
                    events.splice(idx, 1);
                    return true;
                }
                return false;
            },
        };
        this.events.push(entry);
        return entry;
    };
    DomDriver.prototype.insert = function (_, dom, idx) {
        var domElements = this.domElements;
        var target = this.target;
        var curIdx = domElements.indexOf(dom);
        if (idx !== curIdx) {
            var childNodes = target.childNodes;
            if (idx < childNodes.length) {
                var current = childNodes[idx];
                if (current !== dom) {
                    target.insertBefore(dom, current);
                }
            }
            else {
                this.appendChild(dom);
            }
            var length = childNodes.length;
            domElements.length = length;
            for (var i = 0; i < length; i++) {
                domElements[i] = childNodes[i];
            }
            return true;
        }
        return false;
    };
    DomDriver.prototype.dispose = function () {
        var domElements = this.domElements, i = domElements.length;
        while (i--) {
            var a = domElements[i];
            if (a.remove) {
                a.remove();
            }
        }
        delete this[_driver__WEBPACK_IMPORTED_MODULE_0__.children];
    };
    return DomDriver;
}());

_a = _driver__WEBPACK_IMPORTED_MODULE_0__.children;
function createScope(root, parent) {
    var _b;
    var attributes = [];
    var scope = (_b = {},
        _b[_driver__WEBPACK_IMPORTED_MODULE_0__.children] = [],
        Object.defineProperty(_b, "target", {
            get: function () {
                return root.target;
            },
            enumerable: false,
            configurable: true
        }),
        _b.createEvent = function () {
            throw new Error('create Event is not (yet) supported');
        },
        _b.createAttribute = function (name, value) {
            var binding = createAttribute(root.target, name, value);
            attributes.push(binding);
            return binding;
        },
        _b.bind = function (binder) {
            return root.bind(binder);
        },
        _b.createElement = function (name, init) {
            var tagNode = createDOMElement(root.target, name);
            appendChild(tagNode);
            var component = {
                tagNode: tagNode,
                insertBefore: function (node) {
                    root.target.insertBefore(node, tagNode);
                },
                dispose: function () {
                    tagNode.remove();
                },
            };
            addComponent(component);
            var binding = {
                ready: function () {
                    init && init(tagNode);
                },
                driver: function () {
                    return root.createDriver(tagNode);
                },
                dispose: function () {
                    tagNode.remove();
                    removeComponent(scope, component);
                },
            };
            return binding;
        },
        _b.createNative = function (value) {
            var textNode = document.createTextNode(value);
            appendChild(textNode);
            var component = {
                textNode: textNode,
                insertBefore: function (node) {
                    root.target.insertBefore(node, textNode);
                },
                dispose: function () {
                    textNode.remove();
                },
            };
            addComponent(component);
            var binding = {
                next: function (value) {
                    textNode.nodeValue = value;
                },
                dispose: function () {
                    textNode.remove();
                    removeComponent(scope, component);
                },
            };
            return binding;
        },
        _b.createScope = function (idx) {
            // const comment = document.createComment(`-- ${name} --`);
            // scope.appendChild(comment);
            var subscope = createScope(root, scope);
            if (typeof idx === 'number') {
                scope[_driver__WEBPACK_IMPORTED_MODULE_0__.children].splice(idx, 0, subscope);
            }
            else {
                scope[_driver__WEBPACK_IMPORTED_MODULE_0__.children].push(subscope);
            }
            return subscope;
        },
        _b.dispose = function () {
            removeComponent(parent, scope);
            // deliberately use the children array instance instead of cloning it.
            // disposeChildren(scope[children]);
            delete scope[_driver__WEBPACK_IMPORTED_MODULE_0__.children]; // mark as disposed
        },
        _b);
    function appendChild(node) {
        var refNode = (0,_driver__WEBPACK_IMPORTED_MODULE_0__.referenceNode)(root, scope);
        if (refNode) {
            refNode.insertBefore(node);
        }
        else
            root.target.appendChild(node);
    }
    function addComponent(component) {
        var _children = scope[_driver__WEBPACK_IMPORTED_MODULE_0__.children];
        if (Array.isArray(_children)) {
            _children.push(component);
            return true;
        }
        else {
            console.warn('appending child is skipped because scope is disposed already.');
            return false;
        }
    }
    return scope;
}
function removeComponent(scope, node) {
    var _children = scope[_driver__WEBPACK_IMPORTED_MODULE_0__.children];
    if (!Array.isArray(_children)) {
        return;
    }
    var idx = _children.indexOf(node);
    if (idx >= 0) {
        _children.splice(idx, 1);
    }
}
function createAttribute(target, name, value) {
    var prevValues = [];
    if (name === 'disabled') {
        isDisabled(target, value);
        return {
            target: target,
            next: function (value) { return isDisabled(target, value); },
            dispose: function () {
                isDisabled(target, false);
            },
        };
    }
    else if (name === 'class') {
        var subscr_1 = (0,_util_combineLatest__WEBPACK_IMPORTED_MODULE_1__.combineLatest)(Array.isArray(value) ? value : [value]).subscribe(className);
        return {
            target: target,
            next: className,
            dispose: function () {
                subscr_1.unsubscribe();
                prevValues.forEach(function (cl) { return cl && target.classList.remove(cl); });
            },
        };
    }
    else if (name === 'value') {
        valueAttribute(toString(value));
        return {
            next: valueAttribute,
            dispose: function () {
                target.removeAttribute(name);
            },
        };
    }
    else {
        defaultAttribute(toString(value));
        return {
            next: defaultAttribute,
            dispose: function () {
                target.removeAttribute(name);
            },
        };
    }
    function className(value) {
        var nextValues = [];
        var stack = [value];
        while (stack.length) {
            var curr = stack.pop();
            if (curr === null || curr === undefined)
                continue;
            if (Array.isArray(curr)) {
                for (var i = 0; i < curr.length; i++) {
                    stack.push(curr[i]);
                }
            }
            else if (typeof curr === 'string') {
                var split = curr.split(' ');
                for (var i = 0; i < split.length; i++) {
                    var cl = split[i];
                    if (cl)
                        nextValues.push(cl);
                }
            }
            else {
                var split = curr.toString().split(' ');
                for (var i = 0; i < split.length; i++) {
                    var cl = split[i];
                    if (cl)
                        nextValues.push(cl);
                }
            }
        }
        prevValues.forEach(function (cl) { return target.classList.remove(cl); });
        nextValues.forEach(function (cl) { return target.classList.add(cl); });
        prevValues = nextValues;
    }
    function valueAttribute(value) {
        if (isInputElement(target)) {
            if (value === null || value === undefined) {
                target.value = '';
            }
            else if (target.type === 'date') {
                var d = new Date(value);
                // ensure GMT timezone
                // https://austinfrance.wordpress.com/2012/07/09/html5-date-input-field-and-valueasdate-timezone-gotcha-3/
                target.valueAsDate = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 12);
            }
            else
                target.value = value;
            return true;
        }
        else {
            return defaultAttribute(value);
        }
    }
    function defaultAttribute(value) {
        if (value === void 0 || value === null) {
            target.removeAttribute(name);
        }
        else {
            var attr = document.createAttributeNS(null, name);
            attr.value = value;
            target.setAttributeNode(attr);
        }
    }
}
function getNamespaceURI(target, name) {
    return name === 'svg'
        ? 'http://www.w3.org/2000/svg'
        : target
            ? target.namespaceURI
            : null;
}
function createDOMElement(target, name) {
    var namespaceURI = getNamespaceURI(target, name);
    var tagNode = document.createElementNS(namespaceURI, name);
    return tagNode;
}
function toString(value) {
    if (value === null || typeof value === 'undefined')
        return value;
    if (typeof value === 'string' || typeof value === 'boolean')
        return value;
    return value.toString();
}
function isDomNode(obj) {
    try {
        //Using W3 DOM2 (works for FF, Opera and Chrome)
        return obj instanceof HTMLElement;
    }
    catch (e) {
        //Browsers not supporting W3 DOM2 don't have HTMLElement and
        //an exception is thrown and we end up here. Testing some
        //properties that all elements have (works on IE7)
        return (typeof obj === 'object' &&
            obj.nodeType === 1 &&
            typeof obj.style === 'object' &&
            typeof obj.ownerDocument === 'object');
    }
}
function isInputElement(elt) {
    return elt && 'value' in elt && 'type' in elt;
}
function isDisabled(target, value) {
    if (isInputElement(target)) {
        target.disabled = !!value;
    }
}


/***/ }),

/***/ "./glow.js/lib/driver.ts":
/*!*******************************!*\
  !*** ./glow.js/lib/driver.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "children": () => (/* binding */ children),
/* harmony export */   "isPrimitive": () => (/* binding */ isPrimitive),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "isSubscribable": () => (/* binding */ isSubscribable),
/* harmony export */   "referenceNode": () => (/* binding */ referenceNode),
/* harmony export */   "disposeMany": () => (/* binding */ disposeMany)
/* harmony export */ });
var children = Symbol('children');
function isPrimitive(value) {
    if (value === null || value === undefined)
        return false;
    return (typeof value === 'number' ||
        typeof value === 'string' ||
        typeof value === 'boolean' ||
        value instanceof Date);
}
function init(view, callback) {
    return {
        children: view.children,
        render: function (driver) {
            return view.render(driver, callback);
        },
    };
}
function isSubscribable(value) {
    return value && typeof value.subscribe === 'function';
}
function isParent(node) {
    if (node == null)
        return false;
    if (typeof node === 'object')
        return children in node;
    return false;
}
function referenceNode(root, node) {
    var stack = [root];
    var found = false;
    while (stack.length) {
        var curr = stack.pop();
        if (curr === node) {
            found = true;
        }
        else if (isParent(curr)) {
            var _children = curr[children];
            for (var i = _children.length - 1; i >= 0; i--) {
                stack.push(_children[i]);
            }
        }
        else if (found === true) {
            return curr;
        }
    }
    return null;
}
function disposeMany(disposables) {
    if (!disposables) {
        return;
    }
    var stack = Array.isArray(disposables)
        ? disposables.slice(0)
        : [disposables];
    while (stack.length) {
        var curr = stack.pop();
        if (!curr)
            continue;
        if (typeof curr.dispose === 'function') {
            curr.dispose();
        }
        var _children = curr[children];
        if (Array.isArray(_children)) {
            for (var i = _children.length - 1; i >= 0; i--) {
                stack.push(_children[i]);
            }
        }
    }
}


/***/ }),

/***/ "./glow.js/lib/fragment.ts":
/*!*********************************!*\
  !*** ./glow.js/lib/fragment.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fragment": () => (/* binding */ Fragment),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function Fragment(_props, children) {
    return children;
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_props, children) {
    return children;
}


/***/ }),

/***/ "./glow.js/lib/tpl.ts":
/*!****************************!*\
  !*** ./glow.js/lib/tpl.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tpl": () => (/* binding */ tpl),
/* harmony export */   "lazy": () => (/* binding */ lazy),
/* harmony export */   "flatTree": () => (/* binding */ flatTree),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "FragmentTemplate": () => (/* binding */ FragmentTemplate),
/* harmony export */   "EmptyTemplate": () => (/* binding */ EmptyTemplate),
/* harmony export */   "TemplateObservable": () => (/* binding */ TemplateObservable),
/* harmony export */   "attributes": () => (/* binding */ attributes),
/* harmony export */   "asTemplate": () => (/* binding */ asTemplate),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "renderStack": () => (/* binding */ renderStack),
/* harmony export */   "renderMany": () => (/* binding */ renderMany)
/* harmony export */ });
/* harmony import */ var _driver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./driver */ "./glow.js/lib/driver.ts");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./glow.js/lib/dom.ts");
/* harmony import */ var _lib_util_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/util/helpers */ "./glow.js/lib/util/helpers.ts");
/* harmony import */ var _util_combineLatest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/combineLatest */ "./glow.js/lib/util/combineLatest.ts");




function tpl(name, props) {
    if (props === void 0) { props = null; }
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    if (typeof name === 'string') {
        var flatChildren = flatTree(children, function (e) { return e; });
        return new TagTemplate(name, props
            ? attributes(props).concat(flatChildren)
            : flatChildren);
    }
    if (typeof name === 'function') {
        return construct(name, [props, children]) || name(props, children);
    }
    return asTemplate(name);
}
function lazy(fn) {
    return {
        subscribe: function (observer) {
            var value = fn();
            if (isSubscribable(value)) {
                return value.subscribe(observer);
            }
            observer.next(value);
            return {
                unsubscribe: function () {
                    debugger;
                },
            };
        },
    };
}
function construct(func, args) {
    try {
        if (!func)
            return false;
        if (func === Symbol)
            return false;
        return Reflect.construct(func, args);
    }
    catch (e) {
        return false;
    }
}
function flatTree(tree, project) {
    if (!Array.isArray(tree))
        return [];
    var retval = [];
    var stack = [];
    // copy tree to stack reverse order
    for (var i = tree.length - 1; i >= 0; i--) {
        stack.push(tree[i]);
    }
    while (stack.length > 0) {
        var curr = stack.pop();
        if (Array.isArray(curr)) {
            stack.push.apply(stack, reverse(curr));
        }
        else if (curr !== null && curr !== undefined) {
            var projected = project(curr);
            if (Array.isArray(projected)) {
                retval.push.apply(retval, projected);
            }
            else if (projected !== undefined && projected !== null) {
                retval.push(projected);
            }
        }
    }
    return retval;
}
function hasProperty(obj, prop) {
    return typeof obj === 'object' && obj !== null && prop in obj;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tpl);
var FragmentTemplate = /** @class */ (function () {
    function FragmentTemplate(children) {
        this.children = children;
    }
    FragmentTemplate.prototype.render = function (driver) {
        return {
            driver: function () {
                return driver;
            },
            dispose: function () { },
        };
    };
    return FragmentTemplate;
}());

var EmptyTemplate = /** @class */ (function () {
    function EmptyTemplate() {
    }
    EmptyTemplate.prototype.render = function (driver) {
        return {
            driver: function () {
                return driver;
            },
            dispose: function () { },
        };
    };
    return EmptyTemplate;
}());

var TemplateAttachable = /** @class */ (function () {
    function TemplateAttachable(attachable) {
        this.attachable = attachable;
    }
    TemplateAttachable.prototype.render = function (driver) {
        return this.attachable.attachTo(driver.target);
    };
    return TemplateAttachable;
}());
var TemplateComponent = /** @class */ (function () {
    function TemplateComponent(component) {
        this.component = component;
    }
    TemplateComponent.prototype.render = function (driver) {
        var component = this.component;
        var template = asTemplate(component.view);
        var bindings = render(driver, template);
        return {
            dispose: function () {
                if (typeof component.dispose === 'function')
                    component.dispose();
                (0,_driver__WEBPACK_IMPORTED_MODULE_0__.disposeMany)(bindings);
            },
        };
    };
    return TemplateComponent;
}());
var TemplateSubscription = /** @class */ (function () {
    function TemplateSubscription(subscription) {
        this.subscription = subscription;
    }
    TemplateSubscription.prototype.dispose = function () {
        return this.subscription.unsubscribe();
    };
    TemplateSubscription.prototype.render = function () {
        return this;
    };
    return TemplateSubscription;
}());
var TemplateObservable = /** @class */ (function () {
    function TemplateObservable(observable) {
        this.observable = observable;
    }
    TemplateObservable.prototype.render = function (driver) {
        var observable = this.observable;
        var bindings = null;
        var scope = driver.createScope();
        var subscr = observable.subscribe(function (value) {
            if (bindings && bindings.length === 1 && (0,_driver__WEBPACK_IMPORTED_MODULE_0__.isPrimitive)(value)) {
                var binding = bindings[0];
                if ((0,_lib_util_helpers__WEBPACK_IMPORTED_MODULE_2__.isNextObserver)(binding)) {
                    binding.next(value);
                    return;
                }
            }
            (0,_driver__WEBPACK_IMPORTED_MODULE_0__.disposeMany)(bindings);
            bindings = render(scope, asTemplate(value));
        });
        return {
            dispose: function () {
                subscr.unsubscribe();
                scope.dispose();
                (0,_driver__WEBPACK_IMPORTED_MODULE_0__.disposeMany)(bindings);
            },
        };
    };
    return TemplateObservable;
}());

var TemplatePromise = /** @class */ (function () {
    function TemplatePromise(promise) {
        this.promise = promise;
    }
    TemplatePromise.prototype.then = function (fn) {
        return this.promise.then(fn);
    };
    TemplatePromise.prototype.render = function (driver) {
        var scope = driver.createScope();
        var disposed = false;
        var loaded = false;
        var loadingBinding = null;
        var promise = this.promise;
        setTimeout(function () {
            if (loaded || disposed)
                return;
            loadingBinding = render(scope, tpl('div', { class: 'loading-placeholder' }));
            promise.then(function (_) {
                (0,_driver__WEBPACK_IMPORTED_MODULE_0__.disposeMany)(loadingBinding);
            });
        }, 200);
        var bindingPromise = promise.then(function (item) {
            loaded = true;
            var template = asTemplate(item);
            return disposed ? null : render(scope, template);
        });
        return {
            driver: function () {
                return scope;
            },
            dispose: function () {
                disposed = true;
                scope.dispose();
                bindingPromise.then(_driver__WEBPACK_IMPORTED_MODULE_0__.disposeMany);
            },
        };
    };
    return TemplatePromise;
}());
function attributes(props) {
    return (props && Object.keys(props).map(function (key) { return new Attribute(key, props[key]); }));
}
var __emptyTemplate = {
    render: function () {
        return {
            dispose: function () { },
        };
    },
};
function asTemplate(name) {
    if (typeof name === 'undefined' || name === null) {
        return __emptyTemplate;
    }
    else if (isTemplate(name))
        return name;
    else if (isComponent(name))
        return new TemplateComponent(name);
    else if (isAttachable(name))
        return new TemplateAttachable(name);
    else if (typeof name === 'function')
        return name;
    else if (Array.isArray(name))
        return flatTree(name, asTemplate);
    else if (isPromise(name))
        return new TemplatePromise(name);
    else if (isSubscribable(name))
        return new TemplateObservable(name);
    else if (isSubscription(name))
        return new TemplateSubscription(name);
    else if (hasProperty(name, 'view'))
        return asTemplate(name.view);
    return new NativeTemplate(name);
}
function isComponent(value) {
    return value && typeof value.view === 'function';
}
function isAttachable(value) {
    return value && typeof value.attachTo === 'function';
}
function isSubscribable(value) {
    return value && typeof value.subscribe === 'function';
}
function isSubscription(value) {
    return value && typeof value.unsubscribe === 'function';
}
function isPromise(value) {
    return value && typeof value.then === 'function';
}
function isTemplate(value) {
    return typeof value['render'] === 'function';
}
function functionAsTemplate(func) {
    return {
        render: function (driver) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var tpl = func.apply(void 0, args);
            var template = asTemplate(tpl);
            if (Array.isArray(template)) {
                var bindings_1 = [];
                for (var i = 0; i < template.length; i++) {
                    var b = template[i].render(driver);
                    if (b) {
                        bindings_1.push();
                    }
                }
                return {
                    dispose: function () {
                        for (var i = 0; i < bindings_1.length; i++) {
                            var binding = bindings_1[i];
                            if (binding.dispose) {
                                binding.dispose();
                            }
                        }
                    },
                };
            }
            else {
                return template.render(driver);
            }
        },
    };
}
var TagTemplate = /** @class */ (function () {
    function TagTemplate(name, children) {
        this.name = name;
        this.children = children;
    }
    TagTemplate.prototype.render = function (driver, init) {
        var name = this.name;
        return driver.createElement(name, init);
    };
    return TagTemplate;
}());
var NativeTemplate = /** @class */ (function () {
    function NativeTemplate(value) {
        this.value = value;
    }
    NativeTemplate.prototype.render = function (driver) {
        var value = this.value;
        if ((0,_driver__WEBPACK_IMPORTED_MODULE_0__.isPrimitive)(value)) {
            return driver.createNative(value);
        }
        else if (isSubscribable(value)) {
            var expr = value;
            var textElement = driver.createNative(null);
            expr.subscribe(textElement);
            return textElement;
        }
        else {
            return driver.createNative(value);
        }
    };
    return NativeTemplate;
}());
var Attribute = /** @class */ (function () {
    function Attribute(name, value) {
        this.name = name;
        this.value = value;
    }
    Attribute.prototype.render = function (driver) {
        var _a = this, name = _a.name, value = _a.value;
        if (value === null || value === void 0) {
            return null;
        }
        if (typeof value === 'function') {
            var eventBinding = driver.createEvent(name, value);
            if (eventBinding)
                return eventBinding;
            console.error('not a valid event ' + name);
            value = value();
        }
        if (Array.isArray(value)) {
            var binding_1 = driver.createAttribute(name, undefined);
            var subscr_1 = (0,_util_combineLatest__WEBPACK_IMPORTED_MODULE_3__.combineLatest)(value).subscribe(binding_1);
            return {
                dispose: function () {
                    subscr_1.unsubscribe();
                    binding_1.dispose();
                },
            };
        }
        else if (isSubscribable(value)) {
            var expr = value;
            var binding_2 = driver.createAttribute(name, undefined);
            var subscr_2 = expr.subscribe(binding_2);
            return {
                dispose: function () {
                    subscr_2.unsubscribe();
                    binding_2.dispose();
                },
            };
        }
        else
            return driver.createAttribute(name, value);
    };
    return Attribute;
}());
function render(target, template) {
    var driver = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.isDomNode)(target) ? new _dom__WEBPACK_IMPORTED_MODULE_1__.DomDriver(target) : target;
    return renderStack([{ driver: driver, template: template }]);
}
function renderStack(roots) {
    var bindings = [];
    var stack = roots.slice(0);
    while (stack.length) {
        var curr = stack.pop();
        if (!curr) {
            break;
        }
        var driver = curr.driver, template = curr.template;
        if (template === null || template === undefined)
            continue;
        if (Array.isArray(template)) {
            for (var i_1 = template.length - 1; i_1 >= 0; i_1--) {
                stack.push({ driver: driver, template: template[i_1] });
            }
            continue;
        }
        else if (typeof template === 'function') {
            stack.push({
                driver: driver,
                template: asTemplate(template.name || '[ Function ]'),
            });
            continue;
        }
        else if (!isTemplate(template)) {
            stack.push({ driver: driver, template: asTemplate(template) });
            continue;
        }
        var binding = template.render(driver);
        if (binding) {
            bindings.push(binding);
            if (binding.driver) {
                var children = template.children;
                if (children) {
                    var childDriver = binding.driver();
                    if (childDriver) {
                        for (var i = children.length - 1; i >= 0; i--) {
                            stack.push({
                                driver: childDriver,
                                template: asTemplate(children[i]),
                            });
                        }
                    }
                }
            }
        }
    }
    for (var i = 0; i < bindings.length; i++) {
        var binding = bindings[i];
        if (isInitializable(binding))
            binding.ready();
    }
    return bindings;
}
function isInitializable(obj) {
    return obj && typeof obj['ready'] === 'function';
}
function renderMany(driver, children) {
    var stack = [];
    for (var i = children.length - 1; i >= 0; i--) {
        var template = children[i];
        stack.push({
            driver: driver,
            template: template,
        });
    }
    return renderStack(stack);
}
function reverse(arr) {
    var result = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}


/***/ }),

/***/ "./glow.js/lib/util/combineLatest.ts":
/*!*******************************************!*\
  !*** ./glow.js/lib/util/combineLatest.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "combineLatest": () => (/* binding */ combineLatest),
/* harmony export */   "isSubscribable": () => (/* binding */ isSubscribable)
/* harmony export */ });
function combineLatest(expressions) {
    return {
        subscribe: function (observer) {
            var state = new Array(expressions.length);
            var subscriptions = [];
            var _loop_1 = function (i) {
                var expr = expressions[i];
                if (isSubscribable(expr)) {
                    var subscr = expr.subscribe(function (v) {
                        if (state[i] !== v) {
                            state[i] = v;
                            emit();
                        }
                    });
                    subscriptions.push(subscr);
                }
                else {
                    state[i] = expr;
                }
            };
            for (var i = 0; i < expressions.length; i++) {
                _loop_1(i);
            }
            emit();
            function emit() {
                if (typeof observer === 'function')
                    observer(state);
                else if (observer.next)
                    observer.next(state);
            }
            return {
                unsubscribe: function () {
                    for (var i = 0; i < subscriptions.length; i++) {
                        subscriptions[i].unsubscribe();
                    }
                },
            };
        },
    };
}
function isSubscribable(o) {
    if (o === null || typeof o !== 'object')
        return false;
    if (typeof o.subscribe !== 'function')
        return false;
    return true;
}


/***/ }),

/***/ "./glow.js/lib/util/helpers.ts":
/*!*************************************!*\
  !*** ./glow.js/lib/util/helpers.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isUpdatable": () => (/* binding */ isUpdatable),
/* harmony export */   "isNextObserver": () => (/* binding */ isNextObserver)
/* harmony export */ });
function isUpdatable(binding) {
    if (binding === null)
        return false;
    if (typeof binding !== 'object')
        return false;
    return typeof binding.update === 'function';
}
function isNextObserver(binding) {
    if (binding === null)
        return false;
    if (typeof binding !== 'object')
        return false;
    return typeof binding.next === 'function';
}


/***/ }),

/***/ "./mutabl.js/index.ts":
/*!****************************!*\
  !*** ./mutabl.js/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListItem": () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.ListItem),
/* harmony export */   "ObjectProperty": () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.ObjectProperty),
/* harmony export */   "Store": () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.Store),
/* harmony export */   "Value": () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.Value),
/* harmony export */   "asProxy": () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.asProxy),
/* harmony export */   "digest": () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.digest),
/* harmony export */   "flush": () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.flush),
/* harmony export */   "refresh": () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.refresh),
/* harmony export */   "updateValue": () => (/* reexport safe */ _lib_store__WEBPACK_IMPORTED_MODULE_0__.updateValue),
/* harmony export */   "isExpression": () => (/* reexport safe */ _lib_observable__WEBPACK_IMPORTED_MODULE_1__.isExpression),
/* harmony export */   "isLiftable": () => (/* reexport safe */ _lib_observable__WEBPACK_IMPORTED_MODULE_1__.isLiftable),
/* harmony export */   "isNextObserver": () => (/* reexport safe */ _lib_observable__WEBPACK_IMPORTED_MODULE_1__.isNextObserver),
/* harmony export */   "isSubscribable": () => (/* reexport safe */ _lib_observable__WEBPACK_IMPORTED_MODULE_1__.isSubscribable),
/* harmony export */   "toSubscriber": () => (/* reexport safe */ _lib_observable__WEBPACK_IMPORTED_MODULE_1__.toSubscriber),
/* harmony export */   "asListStore": () => (/* reexport safe */ _lib_list__WEBPACK_IMPORTED_MODULE_2__.asListStore),
/* harmony export */   "insertItem": () => (/* reexport safe */ _lib_list_list_mutation__WEBPACK_IMPORTED_MODULE_3__.insertItem),
/* harmony export */   "isMutation": () => (/* reexport safe */ _lib_list_list_mutation__WEBPACK_IMPORTED_MODULE_3__.isMutation),
/* harmony export */   "pushItem": () => (/* reexport safe */ _lib_list_list_mutation__WEBPACK_IMPORTED_MODULE_3__.pushItem),
/* harmony export */   "removeItem": () => (/* reexport safe */ _lib_list_list_mutation__WEBPACK_IMPORTED_MODULE_3__.removeItem),
/* harmony export */   "resetItems": () => (/* reexport safe */ _lib_list_list_mutation__WEBPACK_IMPORTED_MODULE_3__.resetItems),
/* harmony export */   "updateItem": () => (/* reexport safe */ _lib_list_list_mutation__WEBPACK_IMPORTED_MODULE_3__.updateItem)
/* harmony export */ });
/* harmony import */ var _lib_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/store */ "./mutabl.js/lib/store.ts");
/* harmony import */ var _lib_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/observable */ "./mutabl.js/lib/observable.ts");
/* harmony import */ var _lib_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/list */ "./mutabl.js/lib/list/index.ts");
/* harmony import */ var _lib_list_list_mutation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/list/list-mutation */ "./mutabl.js/lib/list/list-mutation.ts");






/***/ }),

/***/ "./mutabl.js/lib/list/index.ts":
/*!*************************************!*\
  !*** ./mutabl.js/lib/list/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asListStore": () => (/* binding */ asListStore)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/internal/Subject.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/internal/operators/startWith.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./mutabl.js/lib/store.ts");
/* harmony import */ var _list_mutation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-mutation */ "./mutabl.js/lib/list/list-mutation.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




function asListStore(source) {
    if (Array.isArray(source))
        return fromArray(source);
    return fromBindable(source);
}
function fromBindable(bindable) {
    var snapshot = bindable.peek(function (e) { return e; }) || [];
    var listItems = snapshot.map(createItem);
    var mutations = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    return {
        peek: function (fn) {
            return fn(snapshot);
        },
        get length() {
            return listItems.length;
        },
        add: function (m) {
            applyMutation(m);
        },
        subscribe: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var result = mutations.pipe(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.startWith(resetItems(listItems)));
            return result.subscribe.apply(result, args);
        },
    };
    function flushChanges() {
        bindable.update(snapshot);
        var dirty = [];
        var parent = bindable;
        while (parent) {
            dirty.push(parent);
            parent = parent.parent;
        }
        (0,_store__WEBPACK_IMPORTED_MODULE_0__.flush)(dirty);
    }
    function createItem(v, i) {
        var item = new ListItem(snapshot, i, v);
        item.subscribe(flushChanges);
        return item;
    }
    function resetItems(items) {
        return {
            type: 'reset',
            items: items,
        };
    }
    function applyMutation(mut) {
        if (mut.type === 'insert') {
            var index = mut.index, values = mut.values;
            var item = createItem(values, index);
            listItems.splice(index, 0, item);
            snapshot.splice(index, 0, values);
            mutations.next((0,_list_mutation__WEBPACK_IMPORTED_MODULE_1__.pushItem)(item));
        }
        else if (mut.type === 'push') {
            var values = mut.values;
            var index = listItems.length;
            var item = createItem(values, index);
            listItems.push(item);
            snapshot.push(values);
            mutations.next((0,_list_mutation__WEBPACK_IMPORTED_MODULE_1__.pushItem)(item));
        }
        else if (mut.type === 'remove') {
            var index = typeof mut.predicate === 'number'
                ? mut.predicate
                : listItems.findIndex(mut.predicate);
            if (index >= 0) {
                listItems.splice(index, 1);
                snapshot.splice(index, 1);
                for (var i = index; i < listItems.length; i++) {
                    listItems[i].index = i;
                }
            }
            flushChanges();
            mutations.next({ type: 'remove', predicate: index });
        }
        else if (mut.type === 'move') {
            var from = mut.from, to = mut.to;
            swapItems(listItems, from, to);
            swapItems(snapshot, from, to);
            mutations.next(mut);
        }
        else if (mut.type == 'update') {
            var index = mut.index;
            var listItem = listItems[index];
            listItem.update(mut.callback);
            var dirty = (0,_store__WEBPACK_IMPORTED_MODULE_0__.digest)(listItem);
            (0,_store__WEBPACK_IMPORTED_MODULE_0__.flush)(dirty);
        }
    }
}
function fromArray(snapshot) {
    var mutations = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    return {
        peek: function (fn) {
            return fn(snapshot);
        },
        get length() {
            return snapshot.length;
        },
        add: function (values) {
            if ((0,_list_mutation__WEBPACK_IMPORTED_MODULE_1__.isMutation)(values)) {
                applyMutation(values);
            }
            else {
                applyMutation({
                    type: 'push',
                    values: values,
                });
            }
        },
        subscribe: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var result = mutations.pipe(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.startWith(resetItems(snapshot)));
            return result.subscribe.apply(result, args);
        },
    };
    function applyMutation(mut) {
        if (mut.type === 'insert') {
            var index = mut.index, values = mut.values;
            snapshot.splice(index, 0, values);
            mutations.next(mut);
        }
        else if (mut.type === 'push') {
            var values = mut.values;
            snapshot.push(values);
            mutations.next(mut);
        }
        else if (mut.type === 'remove') {
            var index = typeof mut.predicate === 'number'
                ? mut.predicate
                : snapshot.findIndex(mut.predicate);
            if (index >= 0) {
                snapshot.splice(index, 1);
            }
            mutations.next({ type: 'remove', predicate: index });
        }
        else if (mut.type === 'move') {
            var from = mut.from, to = mut.to;
            var tmp = snapshot[from];
            snapshot[from] = snapshot[to];
            snapshot[to] = tmp;
            mutations.next(mut);
        }
    }
    function resetItems(items) {
        return {
            type: 'reset',
            items: items,
        };
    }
}
var ListItem = /** @class */ (function (_super) {
    __extends(ListItem, _super);
    function ListItem(list, index, value) {
        var _this = _super.call(this, undefined, value) || this;
        _this.list = list;
        _this.index = index;
        return _this;
    }
    ListItem.prototype.update = function (newValueOrCallback) {
        var _a = this, list = _a.list, index = _a.index;
        if (typeof newValueOrCallback === 'function') {
            Object.assign(list[index], newValueOrCallback(list[index]));
        }
        else
            list[index] = newValueOrCallback;
    };
    return ListItem;
}(_store__WEBPACK_IMPORTED_MODULE_0__.Value));
function swapItems(arr, from, to) {
    var tmp = arr[from];
    arr[from] = arr[to];
    arr[to] = tmp;
}


/***/ }),

/***/ "./mutabl.js/lib/list/list-mutation.ts":
/*!*********************************************!*\
  !*** ./mutabl.js/lib/list/list-mutation.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateItem": () => (/* binding */ updateItem),
/* harmony export */   "pushItem": () => (/* binding */ pushItem),
/* harmony export */   "insertItem": () => (/* binding */ insertItem),
/* harmony export */   "removeItem": () => (/* binding */ removeItem),
/* harmony export */   "resetItems": () => (/* binding */ resetItems),
/* harmony export */   "isMutation": () => (/* binding */ isMutation)
/* harmony export */ });
function updateItem(index, callback) {
    return {
        type: 'update',
        index: index,
        callback: callback,
    };
}
function pushItem(values) {
    return {
        type: 'push',
        values: values,
    };
}
function insertItem(values, index) {
    return {
        type: 'insert',
        values: values,
        index: index,
    };
}
function removeItem(predicate) {
    return {
        type: 'remove',
        predicate: predicate,
    };
}
function resetItems(items) {
    return {
        type: 'reset',
        items: items,
    };
}
function isMutation(m) {
    if (!m) {
        return false;
    }
    var type = m.type;
    return (type === 'remove' ||
        type === 'push' ||
        type === 'insert' ||
        type === 'reset' ||
        type === 'move');
}


/***/ }),

/***/ "./mutabl.js/lib/observable.ts":
/*!*************************************!*\
  !*** ./mutabl.js/lib/observable.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isExpression": () => (/* binding */ isExpression),
/* harmony export */   "isLiftable": () => (/* binding */ isLiftable),
/* harmony export */   "isSubscribable": () => (/* binding */ isSubscribable),
/* harmony export */   "isNextObserver": () => (/* binding */ isNextObserver),
/* harmony export */   "toSubscriber": () => (/* binding */ toSubscriber)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");

function isExpression(o) {
    if (typeof o !== 'object')
        return false;
    if (typeof o.lift !== 'function')
        return false;
    return isSubscribable(o);
}
function isLiftable(o) {
    if (typeof o !== 'object')
        return false;
    return typeof o.lift === 'function';
}
function isSubscribable(o) {
    if (o === null || typeof o !== 'object')
        return false;
    if (typeof o.subscribe !== 'function')
        return false;
    return true;
}
function isNextObserver(value) {
    if (value === null)
        return false;
    if (typeof value === 'object')
        return typeof value.next === 'function';
    return false;
}
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__.Subscriber) {
            return nextOrObserver;
        }
    }
    if (!nextOrObserver && !error && !complete) {
        var emptyObserver = {
            closed: true,
            next: function () { },
            error: function (err) {
                console.error(err);
            },
            complete: function () { },
        };
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subscriber(emptyObserver);
    }
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subscriber(nextOrObserver, error, complete);
}


/***/ }),

/***/ "./mutabl.js/lib/store.ts":
/*!********************************!*\
  !*** ./mutabl.js/lib/store.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Value": () => (/* binding */ Value),
/* harmony export */   "ObjectProperty": () => (/* binding */ ObjectProperty),
/* harmony export */   "Store": () => (/* binding */ Store),
/* harmony export */   "asProxy": () => (/* binding */ asProxy),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "refresh": () => (/* binding */ refresh),
/* harmony export */   "digest": () => (/* binding */ digest),
/* harmony export */   "flush": () => (/* binding */ flush),
/* harmony export */   "ListItem": () => (/* binding */ ListItem),
/* harmony export */   "updateValue": () => (/* binding */ updateValue)
/* harmony export */ });
/* harmony import */ var _observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observable */ "./mutabl.js/lib/observable.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var __emptySubscription = {
    unsubscribe: function () { },
};
var observable = (typeof Symbol === 'function' && Symbol.observable) || '@@observable';
var empty = '';
var Value = /** @class */ (function () {
    function Value(parent, value) {
        var _this = this;
        this.parent = parent;
        this.value = value;
        this.properties = [];
        this.peek = function (project) {
            var value = _this.value;
            if (value !== undefined) {
                return project(value);
            }
            return;
        };
        this.subscribe = function (nextOrObserver, error, complete) {
            var sink = (0,_observable__WEBPACK_IMPORTED_MODULE_0__.toSubscriber)(nextOrObserver, error, complete);
            return _this.onChange(sink, false);
        };
    }
    Value.prototype[observable] = function () {
        return this;
    };
    Value.prototype.onChange = function (observer, skipCurrent) {
        if (typeof observer === 'function') {
            return this.onChange({ next: observer }, skipCurrent);
        }
        if (!(0,_observable__WEBPACK_IMPORTED_MODULE_0__.isNextObserver)(observer)) {
            return __emptySubscription;
        }
        if (!skipCurrent) {
            if (this.value !== undefined) {
                observer.next(this.value);
            }
        }
        var observers = this.observers;
        if (observers) {
            var length_1 = observers.length;
            observers[length_1] = observer;
        }
        else {
            this.observers = observers = [observer];
        }
        return {
            unsubscribe: function () {
                if (observers) {
                    var idx = observers.indexOf(observer);
                    observers.splice(idx, 1);
                }
            },
        };
    };
    Value.prototype.get = function (propertyName) {
        var properties = this.properties;
        var i = properties.length;
        while (i--) {
            var prop = properties[i];
            if (prop.name === propertyName) {
                return prop;
            }
        }
    };
    Value.prototype.property = function (propertyName) {
        var prop = this.get(propertyName);
        if (prop)
            return prop;
        var parentValue = this.value;
        var initValue = parentValue ? parentValue[propertyName] : void 0;
        var property = new ObjectProperty(this, propertyName, initValue);
        this.properties.push(property);
        return property;
    };
    Value.prototype.toString = function () {
        var value = this.value;
        if (typeof value === 'string')
            return value;
        else if (value === void 0 || value === null)
            return empty;
        else
            return value + '';
    };
    Value.prototype.lift = function (valueFrom) {
        var value = this.value;
        var p = new ValueObserver(this, valueFrom, value === undefined ? undefined : valueFrom(value));
        var properties = this.properties;
        properties.push(p);
        return p;
    };
    Value.prototype.dispose = function () {
        var parent = this.parent;
        if (parent) {
            var properties = parent.properties;
            if (properties) {
                var idx = properties.indexOf(this);
                if (idx >= 0) {
                    properties.splice(idx, 1);
                }
            }
        }
    };
    return Value;
}());

// type ArrayMutation =
//   | { type: 'insert'; index: number }
//   | { type: 'remove'; index: number }
//   | { type: 'move'; from: number; to: number };
// export interface ObservableArray<T> {
//   subscribe(observer: NextArrayMutationsObserver<T>): Rx.Subscription;
// }
// type ArrayMutationsCallback<T> = (array: T, mutations?: ArrayMutation[]) => any;
// type NextArrayMutationsObserver<T> = {
//   next: ArrayMutationsCallback<T>;
// };
var ObjectProperty = /** @class */ (function (_super) {
    __extends(ObjectProperty, _super);
    function ObjectProperty(parent, name, value) {
        var _this = _super.call(this, parent, value) || this;
        _this.parent = parent;
        _this.name = name;
        _this.update = function (updater, autoRefresh) {
            var _a;
            if (autoRefresh === void 0) { autoRefresh = true; }
            if (!updateValue(_this, updater))
                return false;
            var parentValue = _this.parent.value;
            if (parentValue) {
                parentValue[_this.name] = _this.value;
            }
            else {
                mergeParent(_this.parent, (_a = {}, _a[_this.name] = _this.value, _a));
            }
            if (autoRefresh) {
                var dirty = digest(_this);
                var parent_1 = _this;
                while (parent_1) {
                    dirty.push(parent_1);
                    parent_1 = parent_1.parent;
                }
                flush(dirty);
            }
            return true;
            function mergeParent(parent, value) {
                parent.update(value, false);
            }
        };
        return _this;
    }
    ObjectProperty.prototype.valueFrom = function (parentValue) {
        return parentValue && parentValue[this.name];
    };
    ObjectProperty.prototype.asProxy = function () {
        return asProxy(this);
    };
    return ObjectProperty;
}(Value));

var Store = /** @class */ (function (_super) {
    __extends(Store, _super);
    function Store(value, autoRefresh) {
        if (autoRefresh === void 0) { autoRefresh = true; }
        var _this = _super.call(this, null, value) || this;
        _this.autoRefresh = autoRefresh;
        _this.update = function (newValue, autoRefresh, partial) {
            if (autoRefresh === void 0) { autoRefresh = true; }
            if (!updateValue(_this, newValue, partial)) {
                return false;
            }
            if (autoRefresh) {
                var dirty = digest(_this);
                // TODO do we still need this?
                dirty.push(_this);
                flush(dirty);
            }
            return true;
        };
        return _this;
    }
    //   expr(expr: string) {
    //     var parts = expr.split('.');
    //     return (value: T) => {
    //       var obj = this.value;
    //       var len = parts.length - 1;
    //       for (var i = 0; i < len; i++) {
    //         var prop = parts[i];
    //         var child = obj[prop];
    //         if (!child) {
    //           obj[prop] = child = {};
    //         }
    //         obj = child;
    //       }
    //       var last = parts[len];
    //       obj[last] = value;
    //     };
    //   }
    Store.prototype.asProxy = function () {
        return asProxy(this);
    };
    Store.prototype.refresh = function () {
        return refresh(this);
    };
    Store.prototype.next = function (values) {
        this.update(values);
    };
    return Store;
}(Value));

function asProxy(self) {
    return new Proxy(self, {
        get: function (parent, name) {
            if (typeof name === 'symbol' || name in self)
                return self[name];
            var result = parent.property(name);
            if (typeof result === 'function')
                return result;
            return asProxy(result);
        },
        set: function (parent, name, value) {
            return parent.property(name).update(value);
        },
    });
    // function subscribe(observer): Unsubscribable {
    //     return self.subscribe(observer);
    // }
    // function update(value: Updater<T>): boolean {
    //     return self.update(value);
    // }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Store);
var ValueObserver = /** @class */ (function (_super) {
    __extends(ValueObserver, _super);
    function ValueObserver(parent, valueFrom, initValue) {
        var _this = _super.call(this, parent, initValue) || this;
        _this.valueFrom = valueFrom;
        return _this;
    }
    return ValueObserver;
}(Value));
function refresh(root) {
    var dirty = digest(root);
    if (dirty.length) {
        flush(dirty);
        return true;
    }
    return false;
}
function digest(root) {
    if (!root) {
        return [];
    }
    var stack = [root];
    var stackLength = stack.length;
    var dirtyLength = 0;
    var dirty = [];
    while (stackLength--) {
        var parent_2 = stack[stackLength];
        var parentValue = parent_2.value;
        var properties = parent_2.properties;
        if (properties) {
            var propIdx = properties.length | 0;
            while (propIdx) {
                propIdx = (propIdx - 1) | 0;
                var prop = properties[propIdx];
                //recurse
                stack[stackLength] = prop;
                stackLength = (stackLength + 1) | 0;
                var prevValue = prop.value;
                var childValue = prevValue === null
                    ? prop.valueFrom(parentValue)
                    : prop.valueFrom(parentValue, prevValue);
                if (prevValue !== childValue) {
                    prop.value = childValue;
                    dirty[dirtyLength] = prop;
                    dirtyLength = (dirtyLength + 1) | 0;
                }
            }
        }
    }
    // expand with parents
    return dirty;
}
// TODO refactor / merge with refreshStack
function flush(dirty) {
    var listLength = dirty.length;
    while (listLength--) {
        var item = dirty[listLength];
        var itemValue = item.value;
        var observers = item.observers;
        if (observers) {
            var e = observers.length | 0;
            while (e--) {
                var observer = observers[e];
                observer.next(itemValue);
            }
        }
    }
}

var ListItem = /** @class */ (function (_super) {
    __extends(ListItem, _super);
    function ListItem(value, index) {
        var _this = _super.call(this, null, value) || this;
        _this.value = value;
        _this.index = index;
        _this.update = function (newValue, autoRefresh) {
            if (autoRefresh === void 0) { autoRefresh = true; }
            if (!updateValue(_this, newValue)) {
                return false;
            }
            if (autoRefresh) {
                var dirty = digest(_this);
                dirty.push(_this);
                flush(dirty);
                return true;
            }
            return true;
        };
        return _this;
    }
    return ListItem;
}(Value));
function updateValue(target, newValue, partial) {
    // ignore undefined
    if (newValue === undefined)
        return false;
    var targetValue = target.value;
    if (targetValue === newValue) {
        return false;
    }
    else if (isFunction(newValue)) {
        var retval = newValue.apply(null, [targetValue]);
        // when returned value is undefined
        if (retval === undefined) {
            // assume prevValue is being mutated (e.g a new item is pushed to list)
            return true;
        }
        else {
            return updateValue(target, retval);
        }
    }
    else if (partial === true &&
        !!targetValue &&
        typeof targetValue === 'object' &&
        !!newValue &&
        typeof newValue === 'object') {
        var b = false;
        var stack = [[targetValue, newValue]];
        var merged = new Set();
        while (stack.length > 0) {
            var _a = stack.pop(), targetValue_1 = _a[0], sourceValue = _a[1];
            if (!merged.add(targetValue_1))
                // stop recursion
                continue;
            for (var prop in sourceValue) {
                var sourcePropValue = sourceValue[prop];
                var targetPropValue = targetValue_1[prop];
                if (sourcePropValue === targetPropValue ||
                    typeof targetPropValue === 'function')
                    continue;
                if (targetPropValue &&
                    typeof targetPropValue === 'object' &&
                    sourcePropValue &&
                    typeof sourcePropValue === 'object') {
                    stack.push([targetPropValue, sourcePropValue]);
                }
                else {
                    if (targetPropValue !== sourcePropValue) {
                        targetValue_1[prop] = sourcePropValue;
                        b = true;
                    }
                }
            }
        }
        return b;
    }
    else {
        target.value = newValue;
        return true;
    }
}
function isFunction(fn) {
    return typeof fn === 'function';
}


/***/ }),

/***/ "./mvc.js/outlet/index.ts":
/*!********************************!*\
  !*** ./mvc.js/outlet/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouterOutlet": () => (/* binding */ RouterOutlet)
/* harmony export */ });
/* harmony import */ var glow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! glow.js */ "./glow.js/index.ts");
/* harmony import */ var glow_js_lib_tpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! glow.js/lib/tpl */ "./glow.js/lib/tpl.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router */ "./mvc.js/router/index.ts");
/* harmony import */ var _outlet_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./outlet.scss */ "./mvc.js/outlet/outlet.scss");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/internal/BehaviorSubject.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/internal/observable/forkJoin.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/internal/operators/startWith.js");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};






function RouterOutlet(props, children) {
    return {
        render: function (driver) {
            var childRoutes$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
            var router = props.router, onResolved = props.onResolved;
            var subsc = router.start(executeView).subscribe({
                next: function (_a) {
                    var viewResults = _a[0], remaining = _a[1];
                    childRoutes$.next(remaining);
                    if (typeof onResolved !== "function") {
                        return;
                    }
                    if (Array.isArray(viewResults) && viewResults.length > 0) {
                        onResolved(viewResults.map(function (e) { return e.url.path; }));
                    }
                    else {
                        onResolved([]);
                    }
                },
            });
            return {
                dispose: function () {
                    subsc.unsubscribe();
                },
            };
            function executeView(resolution, url) {
                var view = resolution.view, params = resolution.params;
                var context = {
                    url: url,
                    params: params,
                    childRouter: function (map) {
                        return (0,_router__WEBPACK_IMPORTED_MODULE_2__.createRouter)(router.navigator, childRoutes$, map, this);
                    },
                };
                var templates = (0,glow_js_lib_tpl__WEBPACK_IMPORTED_MODULE_1__.flatTree)(__spreadArray(__spreadArray([], children), [view]), function (item) {
                    return applyChild(item, context);
                });
                var scope = driver.createScope();
                var bindings = (0,glow_js_lib_tpl__WEBPACK_IMPORTED_MODULE_1__.render)(scope, withLoader(templates, props.loader || "loading..."));
                return {
                    dispose: function () {
                        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.disposeMany)(bindings);
                        scope.dispose();
                    },
                };
            }
        },
    };
}
function applyChild(child, context) {
    return typeof child === "function" ? child(context) : child;
}
function withLoader(templates, loader) {
    var promises = templates.filter(isPromise);
    if (promises.length == 0) {
        return templates;
    }
    return (0,glow_js_lib_tpl__WEBPACK_IMPORTED_MODULE_1__.asTemplate)(rxjs__WEBPACK_IMPORTED_MODULE_5__.forkJoin(promises).pipe(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith(loader)));
}
function isPromise(x) {
    return !!x && typeof x.then == "function";
}


/***/ }),

/***/ "./mvc.js/router/index.ts":
/*!********************************!*\
  !*** ./mvc.js/router/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBrowser": () => (/* binding */ createBrowser),
/* harmony export */   "createRouter": () => (/* binding */ createRouter),
/* harmony export */   "createViewResolver": () => (/* binding */ createViewResolver)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/internal/observable/timer.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/internal/operators/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/internal/operators/filter.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/internal/operators/scan.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/internal/operators/concatMap.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/internal/operators/share.js");
/* harmony import */ var _path_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./path-template */ "./mvc.js/router/path-template.ts");
/* harmony import */ var _url_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url-helper */ "./mvc.js/router/url-helper.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};




function isRouteDescriptor(value) {
    return value && "path" in value;
}
function isRoute(value) {
    return value && typeof value.match === "function";
}
function isComponentRoute(value) {
    return "component" in value;
}
function isViewResolver(value) {
    return typeof value === "function";
}
function pathMatcher(pathTemplate) {
    var matchers = (0,_path_template__WEBPACK_IMPORTED_MODULE_0__.compilePathTemplate)(pathTemplate);
    return function (path) {
        var length = pathTemplate.length;
        if (length === 0 && path.length > 0) {
            return null;
        }
        var params = {};
        for (var i = 0; i < length; i++) {
            var match = matchers[i](path[i]);
            if (!match) {
                return null;
            }
            else if (match !== true) {
                Object.assign(params, match);
            }
        }
        return {
            id: self,
            path: path.slice(0, length),
            params: params,
        };
    };
}
function createRoute(path, view, routes) {
    var self = {
        match: pathMatcher(path),
        view: view,
        resolve: createViewResolver(routes),
    };
    return self;
}
function traverse(remainingPath, resolve) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!resolve) {
                        return [2 /*return*/, null];
                    }
                    return [4 /*yield*/, resolve(remainingPath)];
                case 1:
                    result = _b.sent();
                    if (!("view" in result)) return [3 /*break*/, 3];
                    if (result.appliedPath.length === 0) {
                        return [2 /*return*/, {
                                head: result,
                            }];
                    }
                    _a = {
                        head: result
                    };
                    return [4 /*yield*/, traverse(remainingPath.slice(result.appliedPath.length), result.resolve)];
                case 2: return [2 /*return*/, (_a.tail = _b.sent(),
                        _a)];
                case 3: return [2 /*return*/, null];
            }
        });
    });
}
function createBrowser(virtualPath) {
    return {
        routes: rxjs__WEBPACK_IMPORTED_MODULE_2__.timer(0, 50).pipe(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map(function () { return location.pathname; }), rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged(), rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map(function (pathname) { return pathname.split("/").filter(function (x) { return !!x; }); }), rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter(function (route) { return startsWith(route, virtualPath); }), rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map(function (route) { return route.slice(virtualPath.length); })),
        execute: function (path) {
            pushPath(path.join("/"));
        },
    };
}
function startsWith(route, base) {
    if (base.length === 0)
        return true;
    if (base.length > route.length)
        return false;
    for (var i = 0; i < base.length; i++) {
        if (pathCompare(base[i], route[i]) === false)
            return false;
    }
    return true;
    function pathCompare(prev, next) {
        if (prev !== next) {
            if (typeof prev === "string")
                return false;
            if (prev.toString() !== next)
                return false;
        }
        return true;
    }
}
function createRouter(navigator, routes$, mapping, parentContext) {
    var viewResolver = isViewResolver(mapping)
        ? mapping
        : createViewResolver(mapping);
    return {
        navigator: navigator,
        parentContext: parentContext,
        start: function (executor) {
            return startRouter(routes$, viewResolver).pipe(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.scan(createScanner(executor, parentContext), [[], []]));
        },
    };
    function createScanner(executor, parentContext) {
        return function scan(_a, next) {
            var prev = _a[0];
            var unchanged = next[0], added = next[1], remaining = next[2];
            var offset = length(unchanged);
            var entries = prev.slice(0, offset);
            for (var i = offset; i < prev.length; i++) {
                var curr = prev[i];
                if (curr.result) {
                    curr.result.dispose();
                }
            }
            map(added, execute);
            return [entries, remaining];
            function execute(res, idx) {
                var parentEntry = entries[idx + offset - 1];
                var url = new _url_helper__WEBPACK_IMPORTED_MODULE_1__.UrlHelper(navigator, res.appliedPath, (parentEntry && parentEntry.url) ||
                    (parentContext && parentContext.url));
                entries[idx + offset] = {
                    url: url,
                    result: executor(res, url),
                };
            }
        };
    }
}
function startRouter(routes$, rootResolve) {
    var _this = this;
    var prev = null;
    return routes$.pipe(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.concatMap(function (route) { return __awaiter(_this, void 0, void 0, function () {
        var _a, unchanged, remainingRoute, resolve, newResolutions, appliedLength, remainingPath;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = unchangedResolutions(route, prev), unchanged = _a.unchanged, remainingRoute = _a.remainingRoute, resolve = _a.resolve;
                    return [4 /*yield*/, traverse(remainingRoute, resolve || rootResolve)];
                case 1:
                    newResolutions = _b.sent();
                    prev = concat(unchanged, newResolutions);
                    appliedLength = reduce(function (p, n) { return p + n.appliedPath.length; }, prev, 0);
                    remainingPath = route.slice(appliedLength);
                    return [2 /*return*/, [unchanged, newResolutions, remainingPath]];
            }
        });
    }); }), rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.share());
}
function unchangedResolutions(route, prevlist) {
    if (!prevlist) {
        return { remainingRoute: route };
    }
    var head = prevlist.head;
    if (isValidResolution(head, route)) {
        var _a = unchangedResolutions(route.slice(head.appliedPath.length), prevlist.tail), unchanged = _a.unchanged, remainingRoute = _a.remainingRoute, resolve = _a.resolve;
        return {
            unchanged: cons(head, unchanged),
            remainingRoute: remainingRoute,
            resolve: resolve || head.resolve,
        };
    }
    else {
        return {
            remainingRoute: route,
            resolve: head.resolve,
        };
    }
}
function isValidResolution(result, remainingPath) {
    if (!remainingPath || remainingPath.length === 0) {
        return false;
    }
    if (result && "view" in result) {
        var appliedPath = result.appliedPath;
        if (appliedPath.length === 0 && remainingPath.length > 0) {
            return false;
        }
        for (var i = 0; i < appliedPath.length; i++) {
            if (appliedPath[i] !== remainingPath[i])
                return false;
        }
        return true;
    }
    return false;
}
function createViewResolver(routes) {
    if (isArrayEmpty(routes)) {
        return null;
    }
    var compiled = compile(routes);
    if (isArrayEmpty(compiled)) {
        return function (remainingPath) {
            return Promise.resolve({
                appliedPath: remainingPath,
            });
        };
    }
    return function (remainingPath) {
        for (var _i = 0, compiled_1 = compiled; _i < compiled_1.length; _i++) {
            var route = compiled_1[_i];
            var segment = route.match(remainingPath);
            if (segment) {
                var view = route.view;
                var appliedPath = segment.path;
                return Promise.resolve({
                    appliedPath: appliedPath,
                    view: view,
                    params: segment.params,
                    resolve: route.resolve,
                });
            }
        }
        var notFound = {
            appliedPath: remainingPath,
        };
        return Promise.resolve(notFound);
    };
    function compile(routes) {
        var results = [];
        if (Array.isArray(routes)) {
            for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
                var route = routes_1[_i];
                if (isRouteDescriptor(route)) {
                    if (isComponentRoute(route)) {
                        results.push(fromComponentRoute(route.path, route.component));
                    }
                    else {
                        results.push(createRoute(route.path, route.view, route.routes));
                    }
                }
                else if (isRoute(route)) {
                    results.push(route);
                }
                else {
                    console.error("unsupported route", route);
                }
            }
        }
        return results;
    }
}
function isArrayEmpty(arr) {
    return !Array.isArray(arr) || arr.length === 0;
}
function map(list, project) {
    return _map(list, 0);
    function _map(l, index) {
        if (!l) {
            return null;
        }
        return {
            head: project(l.head, index, list),
            tail: _map(l.tail, index + 1),
        };
    }
}
function last(list) {
    if (!list) {
        return null;
    }
    if (list.tail) {
        return last(list.tail);
    }
    return list;
}
function cons(head, tail) {
    return { head: head, tail: tail };
}
function concat(x, y) {
    if (!x) {
        return y;
    }
    return {
        head: x.head,
        tail: x.tail ? concat(x.tail, y) : y,
    };
}
function reduce(callback, list, seed) {
    if (!list) {
        return seed;
    }
    var result = seed;
    var l = list;
    var idx = 0;
    while (l) {
        result = callback(result, l.head, idx++);
        l = l.tail;
    }
    return result;
}
function length(x) {
    if (!x) {
        return 0;
    }
    return 1 + length(x.tail);
}
function append(head, list) {
    if (!list) {
        return { head: head };
    }
    return {
        head: list.head,
        tail: append(head, list.tail),
    };
}
function zip(left, right, project) {
    if (!left || !right) {
        return null;
    }
    return cons(project(left.head, right.head), zip(left.tail, right.tail, project));
}
function empty() {
    return null;
}
function memoize(fn) {
    var result = null;
    var invoked = false;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (invoked) {
            return result;
        }
        invoked = true;
        return (result = fn());
    };
}
function fromComponentRoute(path, component) {
    var mem = memoize(function () {
        var comp = typeof component === "function" ? component() : component;
        var view = "view" in comp ? comp.view : comp;
        return {
            view: view,
            resolve: createViewResolver(comp.routes),
        };
    });
    return {
        match: pathMatcher(path),
        get view() {
            return mem().view;
        },
        get resolve() {
            return mem().resolve;
        },
    };
}
function isSameResolution(x, y) {
    if (x.view === null || y.view === null) {
        return false;
    }
    if (x.view !== y.view) {
        return false;
    }
    if (x.appliedPath.length !== y.appliedPath.length) {
        return false;
    }
    for (var i = 0; i < x.appliedPath.length; i++) {
        if (x.appliedPath[i] !== y.appliedPath[i]) {
            return false;
        }
    }
    return true;
}
function pushPath(pathname) {
    var old = window.location.pathname;
    if (old + "/" === pathname) {
        console.log("replaceState", pathname);
        window.history.replaceState(null, null, pathname);
    }
    else if (old !== pathname) {
        window.history.pushState(null, null, pathname);
    }
    else {
        // console.error("same as ", pathname);
    }
}


/***/ }),

/***/ "./mvc.js/router/link.ts":
/*!*******************************!*\
  !*** ./mvc.js/router/link.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkListener": () => (/* binding */ LinkListener)
/* harmony export */ });
function LinkListener() {
    return {
        attachTo: function (dom) {
            return addClickListener(dom);
        },
    };
}
function addClickListener(selectors) {
    var target = typeof selectors === "string"
        ? document.querySelector(selectors)
        : selectors;
    target.addEventListener("click", routerClick);
    return {
        dispose: function () {
            target.removeEventListener("click", routerClick);
        },
    };
    function routerClick(event) {
        if (event.target) {
            var anchor = event.target.closest("a");
            if (anchor && anchor.classList.contains("router-link")) {
                event.preventDefault();
                var href = anchor.getAttribute("href");
                if (href &&
                    anchor["pathname"] &&
                    location.host === anchor["host"]) {
                    var pathname = anchor["pathname"];
                    pushPath(pathname);
                    // router.execute(pathname);
                    // subject.next(pathname);
                    event.returnValue = false;
                    return false;
                }
            }
        }
    }
}
function pushPath(pathname) {
    var old = window.location.pathname;
    if (old + "/" === pathname) {
        console.log("replaceState", pathname);
        window.history.replaceState(null, null, pathname);
    }
    else if (old !== pathname) {
        window.history.pushState(null, null, pathname);
    }
    else {
        // console.error("same as ", pathname);
    }
}


/***/ }),

/***/ "./mvc.js/router/path-template.ts":
/*!****************************************!*\
  !*** ./mvc.js/router/path-template.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compilePathTemplate": () => (/* binding */ compilePathTemplate)
/* harmony export */ });
function compilePathTemplate(pathTemplate) {
    // compile path template
    var segmentMatchers = [];
    for (var _i = 0, pathTemplate_1 = pathTemplate; _i < pathTemplate_1.length; _i++) {
        var segment = pathTemplate_1[_i];
        if (typeof segment === "string") {
            segmentMatchers.push(fromString(segment));
        }
        else if (segment instanceof RegExp) {
            segmentMatchers.push(segment.test);
        }
        else {
            segmentMatchers.push(segment);
        }
    }
    return segmentMatchers;
}
function fromString(segment) {
    if (segment.startsWith(":")) {
        var propName_1 = segment.substring(1);
        return function (s) {
            var _a;
            return _a = {},
                _a[propName_1] = s,
                _a;
        };
    }
    else {
        return function (s) {
            return s == segment;
        };
    }
}


/***/ }),

/***/ "./mvc.js/router/url-helper.ts":
/*!*************************************!*\
  !*** ./mvc.js/router/url-helper.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UrlHelper": () => (/* binding */ UrlHelper)
/* harmony export */ });
var UrlHelper = /** @class */ (function () {
    function UrlHelper(navigator, path, parent) {
        var _this = this;
        this.navigator = navigator;
        this.path = path;
        this.parent = parent;
        this.navigate = function () {
            var path = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                path[_i] = arguments[_i];
            }
            var route = _this.route.apply(_this, path);
            _this.navigator.execute(route);
        };
    }
    UrlHelper.prototype.stringify = function () {
        var path = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            path[_i] = arguments[_i];
        }
        var result = fullPath(this);
        result.push.apply(result, path);
        return "/" + result.join("/");
    };
    UrlHelper.prototype.route = function () {
        var path = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            path[_i] = arguments[_i];
        }
        var result = fullPath(this);
        result.push.apply(result, path);
        return result;
    };
    return UrlHelper;
}());

function fullPath(url) {
    var stack = [];
    while (url) {
        stack.push(url);
        url = url.parent;
    }
    var result = [];
    while (stack.length) {
        var curr = stack.pop();
        result.push.apply(result, curr.path);
    }
    return result;
}


/***/ }),

/***/ "./src/app/agents-planning/by-agents/index.tsx":
/*!*****************************************************!*\
  !*** ./src/app/agents-planning/by-agents/index.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlanningByAgents)
/* harmony export */ });
/* harmony import */ var glow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! glow.js */ "./glow.js/index.ts");
/* harmony import */ var glow_js_components_if__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! glow.js/components/if */ "./glow.js/components/if.ts");
/* harmony import */ var glow_js_lib_fragment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! glow.js/lib/fragment */ "./glow.js/lib/fragment.ts");
/* harmony import */ var _components_time_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/time-table */ "./src/components/time-table/index.tsx");
/* harmony import */ var _core_group_by__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/group-by */ "./src/core/group-by.ts");
/* harmony import */ var _services_planning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/planning */ "./src/app/agents-planning/services/planning.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};






function PlanningByAgents(props) {
    return __awaiter(this, void 0, void 0, function () {
        function cellTemplate(cell) {
            if (!cell) {
                return null;
            }
            return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(glow_js_lib_fragment__WEBPACK_IMPORTED_MODULE_2__.Fragment, null,
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { class: "tc", class_d: "!c?.available", ngIf: "item.children" },
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("span", { ngIf: "!row.toggled" }, cell.supply || null),
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { class: "b", ngIf: "row.toggled" })),
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { class: "tc", class_d: "!c?.available", class_absent: "c?.absent", class_overstay: "maxStandingTimeEnabled && c?.overstay == 1", class_overstay_position: "maxPositionStandingTimeEnabled && c?.overstay == 2", class_substitute: "c?.substituteMode", class_target: "c?.substituteMode === 1", class_no_show: "c?.status == 'NoShow'", style_background: "c?.highlight", ngIf: "!item.children" },
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { class: "pos", ngIf: "c?.position", matTooltip: "hiddenPlanIndicatorEnabled && !!getTooltip(item, i)? getTooltip(item, i): c?.tooltip" },
                        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(glow_js_components_if__WEBPACK_IMPORTED_MODULE_1__.default, { condition: !!cell.position },
                            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("span", null, cell.position)),
                        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(glow_js_components_if__WEBPACK_IMPORTED_MODULE_1__.default, { condition: cell.delta > 0 },
                            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("span", { class: ["delta", cell.delta && "overflow"] }, cell.delta))))));
        }
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var _j;
        return __generator(this, function (_k) {
            switch (_k.label) {
                case 0:
                    _a = glow_js__WEBPACK_IMPORTED_MODULE_0__.default;
                    _b = [glow_js_lib_fragment__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("header", { style: "display: flex; gap: 12px;" }, "Planning By Agents")];
                    _c = glow_js__WEBPACK_IMPORTED_MODULE_0__.default;
                    _d = ["main", null];
                    _e = glow_js__WEBPACK_IMPORTED_MODULE_0__.default;
                    _f = [_components_time_table__WEBPACK_IMPORTED_MODULE_3__.default];
                    _j = { label: "Position" };
                    _g = getRows;
                    return [4 /*yield*/, props.employees];
                case 1:
                    _h = [_k.sent()];
                    return [4 /*yield*/, props.positions];
                case 2: return [4 /*yield*/, _g.apply(void 0, _h.concat([_k.sent()]))];
                case 3: return [2 /*return*/, (_a.apply(void 0, _b.concat([_c.apply(void 0, _d.concat([_e.apply(void 0, _f.concat([(_j.rows = _k.sent(), _j.cellContentTemplate = cellTemplate, _j)]))]))])))];
            }
        });
    });
}
function getRows(employees, positions) {
    return __awaiter(this, void 0, void 0, function () {
        var supply, rows, groups, _loop_1, _i, groups_1, group;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0,_services_planning__WEBPACK_IMPORTED_MODULE_5__.fetchSupply)()];
                case 1:
                    supply = _a.sent();
                    rows = [];
                    groups = (0,_core_group_by__WEBPACK_IMPORTED_MODULE_4__.default)(supply, function (e) { return e.employeeId; }, function (k, s) { return ({
                        key: k,
                        employee: employees.find(function (e) { return e.id == k; }),
                        items: [s],
                    }); });
                    groups.sort(function (x, y) {
                        return employeeName(x.employee).localeCompare(employeeName(y.employee));
                    });
                    _loop_1 = function (group) {
                        var empl = group.employee;
                        if (empl) {
                            var employeeSupply_1 = supply.filter(function (e) { return e.employeeId === empl.id && !!e.positionId; });
                            rows.push({
                                identifier: group.key,
                                label: (0,_services_planning__WEBPACK_IMPORTED_MODULE_5__.fullName)(empl),
                                values: function (hour, minute) {
                                    var start = hour * 60 + minute;
                                    var end = start + _components_time_table__WEBPACK_IMPORTED_MODULE_3__.timeUnit;
                                    var supply = employeeSupply_1.filter(function (e) {
                                        return (0,_services_planning__WEBPACK_IMPORTED_MODULE_5__.isInRange)(e.timeLine, start, end);
                                    });
                                    return {
                                        position: supply
                                            .map(function (e) { return getShorthand(positions, e.positionId); })
                                            .join(","),
                                        delta: 0,
                                        supply: 0,
                                        hasShift: empl.shifts.filter(function (e) {
                                            return (0,_services_planning__WEBPACK_IMPORTED_MODULE_5__.isInRange)(e.timeLine, start, end);
                                        }).length > 0,
                                    };
                                },
                                bgColor: function (cell) {
                                    if (cell.hasShift) {
                                        return "#FFFFFF90";
                                    }
                                    else {
                                        return "#66666649";
                                    }
                                },
                            });
                        }
                    };
                    for (_i = 0, groups_1 = groups; _i < groups_1.length; _i++) {
                        group = groups_1[_i];
                        _loop_1(group);
                    }
                    return [2 /*return*/, rows];
            }
        });
    });
}
function getShorthand(positions, positionId) {
    var stack = positions.slice(0);
    while (stack.length) {
        var p = stack.pop();
        if (p.id == positionId) {
            return p.shorthand;
        }
        else if (!!p.children) {
            for (var _i = 0, _a = p.children; _i < _a.length; _i++) {
                var c = _a[_i];
                stack.push(c);
            }
        }
    }
}
function employeeName(x) {
    return (0,_services_planning__WEBPACK_IMPORTED_MODULE_5__.fullName)(x) || "";
}


/***/ }),

/***/ "./src/app/agents-planning/by-positions/index.tsx":
/*!********************************************************!*\
  !*** ./src/app/agents-planning/by-positions/index.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlanningPerPosition),
/* harmony export */   "countSupplyInRange": () => (/* binding */ countSupplyInRange),
/* harmony export */   "countDemandInRange": () => (/* binding */ countDemandInRange)
/* harmony export */ });
/* harmony import */ var glow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! glow.js */ "./glow.js/index.ts");
/* harmony import */ var glow_js_components_if__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! glow.js/components/if */ "./glow.js/components/if.ts");
/* harmony import */ var glow_js_lib_fragment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! glow.js/lib/fragment */ "./glow.js/lib/fragment.ts");
/* harmony import */ var _components_time_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/time-table */ "./src/components/time-table/index.tsx");
/* harmony import */ var _services_planning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/planning */ "./src/app/agents-planning/services/planning.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};





function PlanningPerPosition(props) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, _d, _e, _f, _g;
        var _h;
        return __generator(this, function (_j) {
            switch (_j.label) {
                case 0:
                    _a = glow_js__WEBPACK_IMPORTED_MODULE_0__.default;
                    _b = [glow_js_lib_fragment__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("header", { style: "display: flex; gap: 12px;" }, "Planning Per Position")];
                    _c = glow_js__WEBPACK_IMPORTED_MODULE_0__.default;
                    _d = ["main", null];
                    _e = glow_js__WEBPACK_IMPORTED_MODULE_0__.default;
                    _f = [_components_time_table__WEBPACK_IMPORTED_MODULE_3__.default];
                    _h = { label: "Position" };
                    _g = getRows;
                    return [4 /*yield*/, props.positions];
                case 1: return [4 /*yield*/, _g.apply(void 0, [_j.sent()])];
                case 2: return [2 /*return*/, (_a.apply(void 0, _b.concat([_c.apply(void 0, _d.concat([_e.apply(void 0, _f.concat([(_h.rows = _j.sent(), _h.cellContentTemplate = function (cell) {
                                    if (!cell) {
                                        return null;
                                    }
                                    return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(glow_js_lib_fragment__WEBPACK_IMPORTED_MODULE_2__.Fragment, null,
                                        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("span", null,
                                            "D: ",
                                            cell.demand),
                                        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(glow_js_components_if__WEBPACK_IMPORTED_MODULE_1__.default, { condition: cell.supply !== cell.demand },
                                            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("span", { class: "rom-time-table-cell__delta" }, cell.supply - cell.demand))));
                                }, _h)]))]))])))];
            }
        });
    });
}
function getRows(positions) {
    return __awaiter(this, void 0, void 0, function () {
        function toRow(pos) {
            var positionSupply = supply.filter(function (e) { return e.positionId === pos.id; });
            var positionDemand = demands.find(function (e) { return e.positionId === pos.id; });
            var children = pos.children.map(toRow).filter(function (e) { return e != null; });
            if (children.length == 0 && positionSupply.length == 0) {
                return null;
            }
            return {
                identifier: pos.id,
                label: pos.name,
                children: children,
                values: function (hour, minute) {
                    var start = hour * 60 + minute;
                    var end = start + _components_time_table__WEBPACK_IMPORTED_MODULE_3__.timeUnit;
                    var cell = {
                        supply: countSupplyInRange(positionSupply, start, end),
                        demand: countDemandInRange(positionDemand, start, end),
                    };
                    if (!!cell.demand || !!cell.supply) {
                        return cell;
                    }
                    return null;
                },
                bgColor: function (cell) {
                    if (!cell) {
                        return null;
                    }
                    var supply = cell.supply;
                    if (supply) {
                        return "rgba(255,0,0," + 0.03 * Math.abs(supply) + ")";
                    }
                    return null;
                },
            };
        }
        var supply, demands, rows, i, pos, row;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0,_services_planning__WEBPACK_IMPORTED_MODULE_4__.fetchSupply)()];
                case 1:
                    supply = _a.sent();
                    return [4 /*yield*/, (0,_services_planning__WEBPACK_IMPORTED_MODULE_4__.fetchDemands)()];
                case 2:
                    demands = _a.sent();
                    rows = [];
                    for (i = 0; i < positions.length; i++) {
                        pos = positions[i];
                        row = toRow(pos);
                        if (row) {
                            rows.push(row);
                        }
                    }
                    return [2 /*return*/, rows];
            }
        });
    });
}
function countSupplyInRange(positionSupply, start, end) {
    var count = 0;
    for (var _i = 0, positionSupply_1 = positionSupply; _i < positionSupply_1.length; _i++) {
        var pl = positionSupply_1[_i];
        if (!(0,_services_planning__WEBPACK_IMPORTED_MODULE_4__.isInRange)(pl.timeLine, start, end))
            continue;
        count++;
    }
    return count;
}
function countDemandInRange(demand, startTime, endTime) {
    var result = 0;
    if (demand) {
        var startIndex = timeToIndex(startTime);
        var endIndex = timeToIndex(endTime);
        for (var i = startIndex; i < endIndex; i++) {
            var x = demand.values[(i * _components_time_table__WEBPACK_IMPORTED_MODULE_3__.timeUnit) / 5];
            if (x > result) {
                result = x;
            }
        }
    }
    return result;
}
function timeToIndex(t) {
    var totalMinutes = t;
    return Math.floor(totalMinutes / _components_time_table__WEBPACK_IMPORTED_MODULE_3__.timeUnit);
}


/***/ }),

/***/ "./src/app/agents-planning/demands/index.tsx":
/*!***************************************************!*\
  !*** ./src/app/agents-planning/demands/index.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DemandPlanning)
/* harmony export */ });
/* harmony import */ var glow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! glow.js */ "./glow.js/index.ts");
/* harmony import */ var glow_js_lib_fragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! glow.js/lib/fragment */ "./glow.js/lib/fragment.ts");
/* harmony import */ var _components_time_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/time-table */ "./src/components/time-table/index.tsx");
/* harmony import */ var _services_planning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/planning */ "./src/app/agents-planning/services/planning.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};




function DemandPlanning(props) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, _d, _e, _f, _g;
        var _h;
        return __generator(this, function (_j) {
            switch (_j.label) {
                case 0:
                    _a = glow_js__WEBPACK_IMPORTED_MODULE_0__.default;
                    _b = [glow_js_lib_fragment__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("header", { style: "display: flex; gap: 12px;" },
                            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("input", { type: "date" }),
                            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("button", { class: "mdc-button mdc-button--raised", style: "--mdc-theme-primary: blue" }, "Set demand"),
                            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("button", { class: "mdc-button mdc-button--raised mdc-button--danger", style: "--mdc-theme-primary: red" },
                                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("span", { class: "mdc-button__ripple" }),
                                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("i", { class: "material-icons mdc-button__icon", "aria-hidden": "true" }, "bookmark"),
                                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("span", { class: "mdc-button__label" }, "Upload file")))];
                    _c = glow_js__WEBPACK_IMPORTED_MODULE_0__.default;
                    _d = ["main", null];
                    _e = glow_js__WEBPACK_IMPORTED_MODULE_0__.default;
                    _f = [_components_time_table__WEBPACK_IMPORTED_MODULE_2__.default];
                    _h = { label: "Position" };
                    _g = getRows;
                    return [4 /*yield*/, props.positions];
                case 1: return [4 /*yield*/, _g.apply(void 0, [_j.sent()])];
                case 2: return [2 /*return*/, (_a.apply(void 0, _b.concat([_c.apply(void 0, _d.concat([_e.apply(void 0, _f.concat([(_h.rows = _j.sent(), _h.cellContentTemplate = function (cell) {
                                    return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(glow_js_lib_fragment__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
                                        cell && cell.demand,
                                        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("span", { class: "rom-datatable-cell__content__delta" }, formatDelta(cell))));
                                }, _h)]))]))])))];
            }
        });
    });
}
function getRows(positions) {
    return __awaiter(this, void 0, void 0, function () {
        function toRow(pos) {
            var demand = demands.find(function (e) { return e.positionId === pos.id; });
            return {
                identifier: pos.id,
                label: pos.name,
                children: pos.children.map(toRow),
                values: function (hour, minute) {
                    if (!demand) {
                        return null;
                    }
                    var idx = Math.floor((hour * 60 + minute) / 5);
                    var value = demand.values[idx] || 0;
                    if (!value) {
                        return null;
                    }
                    return {
                        demand: value,
                        implicit: value - 1,
                    };
                },
                bgColor: function (cell) {
                    if (!cell) {
                        return null;
                    }
                    var demand = cell.demand, implicit = cell.implicit;
                    if (demand) {
                        if (implicit) {
                            var delta = demand - implicit;
                            if (delta) {
                                return "rgba(255,0,0," + 0.03 * Math.abs(delta) + ")";
                            }
                            else {
                                return "rgba(0,255,0,0.2)";
                            }
                        }
                        return "rgba(0,200,222,0.1)";
                    }
                    else if (implicit) {
                        return "rgba(255,0,0," + 0.03 * Math.abs(implicit) + ")";
                    }
                    return null;
                },
            };
        }
        var demands, rows, i, pos;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0,_services_planning__WEBPACK_IMPORTED_MODULE_3__.fetchDemands)()];
                case 1:
                    demands = _a.sent();
                    rows = [];
                    for (i = 0; i < positions.length; i++) {
                        pos = positions[i];
                        rows.push(toRow(pos));
                    }
                    return [2 /*return*/, rows];
            }
        });
    });
}
function formatDelta(cell) {
    if (!cell) {
        return null;
    }
    var demand = cell.demand, implicit = cell.implicit;
    if (!demand || !implicit) {
        return null;
    }
    var delta = (cell.demand || 0) - (cell.implicit || 0);
    return delta ? "(" + delta + ")" : null;
}


/***/ }),

/***/ "./src/app/agents-planning/index.tsx":
/*!*******************************************!*\
  !*** ./src/app/agents-planning/index.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgentsPlanning": () => (/* binding */ AgentsPlanning)
/* harmony export */ });
/* harmony import */ var glow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! glow.js */ "./glow.js/index.ts");
/* harmony import */ var mvc_js_outlet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mvc.js/outlet */ "./mvc.js/outlet/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .. */ "./src/app/index.tsx");
/* harmony import */ var _components_tab_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/tab-bar */ "./src/components/tab-bar.tsx");
/* harmony import */ var _by_agents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./by-agents */ "./src/app/agents-planning/by-agents/index.tsx");
/* harmony import */ var _tracks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tracks */ "./src/app/agents-planning/tracks/index.tsx");
/* harmony import */ var _by_positions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./by-positions */ "./src/app/agents-planning/by-positions/index.tsx");
/* harmony import */ var _demands__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demands */ "./src/app/agents-planning/demands/index.tsx");
/* harmony import */ var _mutabl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../mutabl.js */ "./mutabl.js/index.ts");
/* harmony import */ var _services_planning__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/planning */ "./src/app/agents-planning/services/planning.ts");
/* harmony import */ var _components_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/spinner */ "./src/components/spinner/index.tsx");











function nav() {
    var employees = (0,_services_planning__WEBPACK_IMPORTED_MODULE_9__.fetchEmployees)();
    var positions = (0,_services_planning__WEBPACK_IMPORTED_MODULE_9__.fetchPositions)();
    return [
        {
            path: ["demands"],
            component: function () { return (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(_demands__WEBPACK_IMPORTED_MODULE_7__.default, { positions: positions }); },
        },
        {
            path: ["per-position"],
            component: function () { return (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(_by_positions__WEBPACK_IMPORTED_MODULE_6__.default, { positions: positions }); },
        },
        {
            path: ["tracks"],
            component: function () { return (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(_tracks__WEBPACK_IMPORTED_MODULE_5__.default, { positions: positions }); },
        },
        {
            path: [],
            component: function () { return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(_by_agents__WEBPACK_IMPORTED_MODULE_4__.default, { employees: employees, positions: positions })); },
        },
    ];
}
function AgentsPlanning() {
    return {
        view: function (context) {
            var currentRoute = new _mutabl_js__WEBPACK_IMPORTED_MODULE_8__.Store([]);
            return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(___WEBPACK_IMPORTED_MODULE_2__.RouterPage, null,
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { class: "router-page__content" },
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("header", { style: "max-width: 900px;" },
                        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(_components_tab_bar__WEBPACK_IMPORTED_MODULE_3__.default, { selected: currentRoute })),
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(mvc_js_outlet__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, { onResolved: onResolved, router: context.childRouter(nav()), loader: (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(_components_spinner__WEBPACK_IMPORTED_MODULE_10__.default, null) }))));
            function onResolved(paths) {
                var first = paths[0];
                if (first) {
                    currentRoute.next(first);
                }
            }
        },
    };
}


/***/ }),

/***/ "./src/app/agents-planning/services/planning.ts":
/*!******************************************************!*\
  !*** ./src/app/agents-planning/services/planning.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isInRange": () => (/* binding */ isInRange),
/* harmony export */   "fullName": () => (/* binding */ fullName),
/* harmony export */   "fetchSupply": () => (/* binding */ fetchSupply),
/* harmony export */   "fetchDemands": () => (/* binding */ fetchDemands),
/* harmony export */   "fetchEmployees": () => (/* binding */ fetchEmployees),
/* harmony export */   "fetchPositions": () => (/* binding */ fetchPositions)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core */ "./src/core/index.ts");

function isInRange(tl, start, end) {
    return tl.startTime < end && tl.endTime > start;
}
function fullName(e) {
    if (!e || !e.firstName || !e.lastName) {
        return null;
    }
    return e.firstName + " " + e.lastName;
}
function fetchSupply() {
    return (0,_core__WEBPACK_IMPORTED_MODULE_0__.fetchJson)("/planning/position-supply").then(function (e) { return e.json(); });
}
function fetchDemands() {
    return (0,_core__WEBPACK_IMPORTED_MODULE_0__.fetchJson)("/planning/demands").then(function (e) { return e.json(); });
}
function fetchEmployees() {
    return (0,_core__WEBPACK_IMPORTED_MODULE_0__.fetchJson)("/planning/employees").then(function (e) { return e.json(); });
}
function fetchPositions() {
    return (0,_core__WEBPACK_IMPORTED_MODULE_0__.fetchJson)("/planning/positions").then(function (e) { return e.json(); });
}


/***/ }),

/***/ "./src/app/agents-planning/tracks/index.tsx":
/*!**************************************************!*\
  !*** ./src/app/agents-planning/tracks/index.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TracksPlanning)
/* harmony export */ });
/* harmony import */ var glow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! glow.js */ "./glow.js/index.ts");
/* harmony import */ var glow_js_components_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! glow.js/components/css */ "./glow.js/components/css.ts");
/* harmony import */ var glow_js_components_if__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! glow.js/components/if */ "./glow.js/components/if.ts");
/* harmony import */ var glow_js_lib_fragment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! glow.js/lib/fragment */ "./glow.js/lib/fragment.ts");
/* harmony import */ var _components_time_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/time-table */ "./src/components/time-table/index.tsx");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core */ "./src/core/index.ts");
/* harmony import */ var _core_group_by__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/group-by */ "./src/core/group-by.ts");
/* harmony import */ var _services_planning__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/planning */ "./src/app/agents-planning/services/planning.ts");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.scss */ "./src/app/agents-planning/tracks/style.scss");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};









function TracksPlanning(props) {
    return {
        view: function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _c, _d, _e, _f, _g;
                var _h;
                return __generator(this, function (_j) {
                    switch (_j.label) {
                        case 0:
                            _a = glow_js__WEBPACK_IMPORTED_MODULE_0__.default;
                            _b = [glow_js_lib_fragment__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("header", { style: "display: flex; gap: 12px;" }, "Planning Per Track")];
                            _c = glow_js__WEBPACK_IMPORTED_MODULE_0__.default;
                            _d = ["main", null];
                            _e = glow_js__WEBPACK_IMPORTED_MODULE_0__.default;
                            _f = [_components_time_table__WEBPACK_IMPORTED_MODULE_4__.default];
                            _h = { label: "Agent" };
                            _g = getRows;
                            return [4 /*yield*/, props.positions];
                        case 1: return [4 /*yield*/, _g.apply(void 0, [_j.sent()])];
                        case 2: return [2 /*return*/, (_a.apply(void 0, _b.concat([_c.apply(void 0, _d.concat([_e.apply(void 0, _f.concat([(_h.rows = _j.sent(), _h.cellContentTemplate = trackCellTemplate, _h)]))]))])))];
                    }
                });
            });
        },
    };
    function trackCellTemplate(cell, row) {
        if (row.children) {
            return (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(glow_js_components_css__WEBPACK_IMPORTED_MODULE_1__.default, { value: "grouping-track" });
        }
        if (!cell || !("shorthand" in cell)) {
            return null;
        }
        var classList = [
            "tc",
            cell.shorthand && "d",
            cell.absent && "absent",
            cell.substituted && "substituted",
        ];
        return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { class: classList, matTooltip: "c?.tooltip", style: "background-color: " + cell.bgColor + "80" },
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { class: "pos" },
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("span", null, cell.shorthand),
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("span", { class: "delta", ngIf: "c.delta", class_overflow: "c.delta > 0" }, "0"),
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(glow_js_components_if__WEBPACK_IMPORTED_MODULE_2__.default, { condition: !!cell.remark },
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("span", { class: "remark", matTooltip: "c.remark" }, "!")))));
    }
}
function getRows(positions) {
    return __awaiter(this, void 0, void 0, function () {
        function toRow(trackGroup) {
            var children = [];
            var subTracks = (0,_core_group_by__WEBPACK_IMPORTED_MODULE_6__.default)(trackGroup.items, function (e) { return (0,_services_planning__WEBPACK_IMPORTED_MODULE_7__.fullName)(e.employee) || e.trackId; });
            subTracks.sort(function (x, y) { return x.key.localeCompare(y.key); });
            var _loop_1 = function (subTrack) {
                children.push({
                    identifier: subTrack.key,
                    label: subTrack.key,
                    values: function (h, m) {
                        var start = h * 60 + m;
                        var end = start + _components_time_table__WEBPACK_IMPORTED_MODULE_4__.timeUnit;
                        for (var _i = 0, _a = subTrack.items; _i < _a.length; _i++) {
                            var sub = _a[_i];
                            if (sub.timeLine.startTime >= end ||
                                sub.timeLine.endTime <= start) {
                                continue;
                            }
                            var pos = positionMap[sub.positionId];
                            if (pos) {
                                return {
                                    shorthand: pos.shorthand,
                                    absent: false,
                                    bgColor: pos.defaultColor,
                                    substituted: false,
                                };
                            }
                        }
                        return null;
                    },
                });
            };
            for (var _i = 0, subTracks_1 = subTracks; _i < subTracks_1.length; _i++) {
                var subTrack = subTracks_1[_i];
                _loop_1(subTrack);
            }
            return {
                identifier: trackGroup.key,
                bgColor: function () {
                    return null;
                },
                children: children,
                label: trackGroup.key,
                values: function () {
                    return {};
                },
            };
        }
        var tracks, positionMap, _i, positions_1, pos, rows, trackGroups, _a, trackGroups_1, trackGroup, row;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0,_core__WEBPACK_IMPORTED_MODULE_5__.fetchJson)("./planning/tracks").then(function (e) {
                        return e.json();
                    })];
                case 1:
                    tracks = _b.sent();
                    positionMap = {};
                    for (_i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
                        pos = positions_1[_i];
                        positionMap[pos.id] = pos;
                    }
                    rows = [];
                    trackGroups = (0,_core_group_by__WEBPACK_IMPORTED_MODULE_6__.default)(tracks, function (e) { return e.groupingTrackId; });
                    trackGroups.sort(function (x, y) { return x.key.localeCompare(y.key); });
                    for (_a = 0, trackGroups_1 = trackGroups; _a < trackGroups_1.length; _a++) {
                        trackGroup = trackGroups_1[_a];
                        row = toRow(trackGroup);
                        if (row) {
                            rows.push(row);
                        }
                    }
                    return [2 /*return*/, rows];
            }
        });
    });
}
function randomColor() {
    var hex = "0123456789ABCDEF";
    var result = "#";
    for (var i = 0; i < 6; i++) {
        result += randomChar(hex);
    }
    return result + "10";
}
function randomChar(hex) {
    var i = Math.floor(Math.random() * hex.length);
    return hex[i];
}


/***/ }),

/***/ "./src/app/employees/index.tsx":
/*!*************************************!*\
  !*** ./src/app/employees/index.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Employees": () => (/* binding */ Employees)
/* harmony export */ });
/* harmony import */ var glow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! glow.js */ "./glow.js/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ "./src/app/index.tsx");
/* harmony import */ var _components_date_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/date-picker */ "./src/components/date-picker/index.tsx");
/* harmony import */ var _components_text_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/text-field */ "./src/components/text-field/index.tsx");




function Employees() {
    return {
        view: function (context) {
            return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(___WEBPACK_IMPORTED_MODULE_1__.RouterPage, null,
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { class: "router-page__content" },
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("header", null, "Users"),
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("main", null,
                        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("form", { class: "form-group" },
                            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(_components_text_field__WEBPACK_IMPORTED_MODULE_3__.default, { label: "Text" })),
                        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(_components_date_picker__WEBPACK_IMPORTED_MODULE_2__.default, { label: "End date" })))));
        },
    };
}


/***/ }),

/***/ "./src/app/index.tsx":
/*!***************************!*\
  !*** ./src/app/index.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouterPage": () => (/* binding */ RouterPage),
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var glow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! glow.js */ "./glow.js/index.ts");
/* harmony import */ var glow_js_lib_fragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! glow.js/lib/fragment */ "./glow.js/lib/fragment.ts");
/* harmony import */ var mvc_js_outlet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mvc.js/outlet */ "./mvc.js/outlet/index.ts");
/* harmony import */ var _material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material/list */ "./node_modules/@material/list/component.js");
/* harmony import */ var _material_drawer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material/drawer */ "./node_modules/@material/drawer/component.js");
/* harmony import */ var _material_top_app_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material/top-app-bar */ "./node_modules/@material/top-app-bar/component.js");
/* harmony import */ var glow_js_lib_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! glow.js/lib/dom */ "./glow.js/lib/dom.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login */ "./src/login/index.tsx");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/internal/Subject.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/internal/operators/startWith.js");
/* harmony import */ var mvc_js_router_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mvc.js/router/link */ "./mvc.js/router/link.ts");
/* harmony import */ var mvc_js_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mvc.js/router */ "./mvc.js/router/index.ts");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.scss */ "./src/app/style.scss");
/* harmony import */ var _agents_planning__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./agents-planning */ "./src/app/agents-planning/index.tsx");
/* harmony import */ var _employees__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./employees */ "./src/app/employees/index.tsx");
/* harmony import */ var _invoices_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./invoices/index */ "./src/app/invoices/index.tsx");
/* harmony import */ var _jennah_menu_card_main__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./jennah/menu-card/main */ "./src/app/jennah/menu-card/main.tsx");
/* harmony import */ var _jennah_demo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./jennah/demo */ "./src/app/jennah/demo.tsx");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


















function TopBar() {
    return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("header", { class: "mdc-top-app-bar app-bar", id: "app-bar" },
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("div", { class: "mdc-top-app-bar__row" },
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("section", { class: "mdc-top-app-bar__section mdc-top-app-bar__section--align-start" },
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("button", { class: "material-icons mdc-top-app-bar__navigation-icon mdc-icon-button" }, "menu"),
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("span", { class: "mdc-top-app-bar__title" }, "Real-time Operation Management")),
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("section", { class: "mdc-top-app-bar__section mdc-top-app-bar__section--align-end" },
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("button", { class: "mdc-icon-button material-icons mdc-top-app-bar__action-item mdc-ripple-upgraded--unbounded mdc-ripple-upgraded", "aria-label": "Download", style: "--mdc-ripple-fg-size:28px; --mdc-ripple-fg-scale:1.71418; --mdc-ripple-left:10px; --mdc-ripple-top:10px;" }, "search"),
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("button", { class: "mdc-icon-button material-icons mdc-top-app-bar__action-item mdc-ripple-upgraded--unbounded mdc-ripple-upgraded", "aria-label": "Download", style: "--mdc-ripple-fg-size:28px; --mdc-ripple-fg-scale:1.71418; --mdc-ripple-left:10px; --mdc-ripple-top:10px;" }, "add")))));
}
function Aside(props) {
    var url = props.url;
    return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("aside", { class: [
            "mdc-drawer mdc-drawer--modal mdc-top-app-bar--fixed-adjust",
            props.open ? "mdc-drawer--open" : null,
        ] },
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("div", { class: "mdc-drawer__content" },
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("nav", { class: "mdc-list", tabindex: "0" },
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("hr", { class: "mdc-list-divider" }),
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(MainLink, { text: "Employees", url: url.stringify("employees"), icon: "group", color: "darkgreen" }),
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(MainLink, { text: "Invoices", url: url.stringify("invoices"), icon: "domain" }),
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(MainLink, { text: "Agents Planning", url: url.stringify("agents-planning"), icon: "schedule", color: "black" }),
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(MainLink, { text: "Assign card to agent", url: url.stringify("card-assignment"), icon: "credit_card" }),
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(MainLink, { text: "Settings", url: url.stringify("settings"), icon: "settings" }),
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(MainLink, { text: "Administration", url: url.stringify("security"), icon: "security", color: "red" }),
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("hr", { class: "mdc-list-divider" }),
                _material_list__WEBPACK_IMPORTED_MODULE_13__.MDCList))));
}
function RouterPage(props, children) {
    return (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("section", { class: "router-page" }, children);
}
function adminRoutes() {
    return [
        {
            path: ["agents-plannig"],
            component: _agents_planning__WEBPACK_IMPORTED_MODULE_8__.AgentsPlanning,
        },
        {
            path: ["employees"],
            component: _employees__WEBPACK_IMPORTED_MODULE_9__.Employees,
        },
        {
            path: ["invoices"],
            component: _invoices_index__WEBPACK_IMPORTED_MODULE_10__.Invoices,
        },
    ];
}
"";
function App() {
    var browser = (0,mvc_js_router__WEBPACK_IMPORTED_MODULE_6__.createBrowser)([]);
    var router = (0,mvc_js_router__WEBPACK_IMPORTED_MODULE_6__.createRouter)(browser, browser.routes, [
        { path: ["admin"], component: AdminComponent },
        { path: ["jennah", "demo"], component: _jennah_demo__WEBPACK_IMPORTED_MODULE_12__.default },
        { path: ["jennah"], component: _jennah_menu_card_main__WEBPACK_IMPORTED_MODULE_11__.MainMenuCard },
    ]);
    return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(glow_js_lib_fragment__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(mvc_js_router_link__WEBPACK_IMPORTED_MODULE_5__.LinkListener, null),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(mvc_js_outlet__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, { router: router })));
}
function AdminComponent() {
    return {
        view: function (context) {
            return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(glow_js_lib_fragment__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(mvc_js_router_link__WEBPACK_IMPORTED_MODULE_5__.LinkListener, null),
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(Aside, { open: location.pathname == "/admin", url: context.url }),
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("div", { class: "mdc-drawer-scrim" }),
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("div", { class: "mdc-drawer-app-content", style: "height: 100%;" },
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(TopBar, null),
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("main", { class: "main-content mdc-top-app-bar--fixed-adjust router-outlet-container" },
                        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(mvc_js_outlet__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, { router: context.childRouter(adminRoutes()) }))),
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(Drawer, null)));
            function Drawer() {
                return {
                    attachTo: function (container) {
                        var drawer = _material_drawer__WEBPACK_IMPORTED_MODULE_14__.MDCDrawer.attachTo(container.querySelector(".mdc-drawer"));
                        var topAppBar = _material_top_app_bar__WEBPACK_IMPORTED_MODULE_15__.MDCTopAppBar.attachTo(container.querySelector(".mdc-top-app-bar"));
                        var mainContentEl = document.querySelector(".main-content");
                        topAppBar.setScrollTarget(mainContentEl);
                        topAppBar.listen("MDCTopAppBar:nav", function () {
                            drawer.open = !drawer.open;
                        });
                        container.addEventListener("MDCDrawer:closed", function () {
                            var elt = mainContentEl.querySelector("input, button");
                            if ((0,glow_js_lib_dom__WEBPACK_IMPORTED_MODULE_3__.isDomNode)(elt)) {
                                elt.focus();
                            }
                        });
                        container.addEventListener("click", onContainerClick);
                        return {
                            dispose: function () {
                                container.removeEventListener("click", onContainerClick);
                            },
                        };
                        function onContainerClick(e) {
                            var target = e.target;
                            if ((0,glow_js_lib_dom__WEBPACK_IMPORTED_MODULE_3__.isDomNode)(target)) {
                                if (target.classList.contains("router-link")) {
                                    drawer.open = false;
                                }
                            }
                        }
                    },
                };
            }
        },
    };
}
function login() {
    return {
        execute: function () {
            return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("div", null,
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(_login__WEBPACK_IMPORTED_MODULE_4__.Login, { click: function () { } })));
        },
    };
}
function notFound(context) {
    return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("div", { class: "router-page__content" },
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("main", { style: "color: red;" },
            "NOT FOUND ",
            context.url.path.join("/"))));
}
function authorized(action) {
    return {
        execute: function (context) {
            var subject = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subject();
            return subject.pipe(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.startWith((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("div", { class: "router-page__content" },
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(_login__WEBPACK_IMPORTED_MODULE_4__.Login, { click: onLogin }))));
            function onLogin() {
                subject.next(action.execute(context));
            }
        },
        resolve: action.resolve,
    };
}
function MainLink(props) {
    return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("a", { class: "mdc-list-item router-link", href: props.url, "aria-current": "page" },
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("i", { class: "material-icons mdc-list-item__graphic", style: props.color && "color: " + props.color, "aria-hidden": "true" }, props.icon),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("span", { class: "mdc-list-item__text" }, props.text)));
}
function input(name, value) {
    return {
        name: name,
        value: value,
        blur: function (e) { },
    };
}
function Control(props) {
    return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("input", __assign({ style: "border: 2px solid blue;" }, input(props.name, props.value)), "box"));
}
function ToggleButton(props) {
    return (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("a", { class: "mdc-button mdc-button--outline" }, "toggle");
}


/***/ }),

/***/ "./src/app/invoices/active-entity.ts":
/*!*******************************************!*\
  !*** ./src/app/invoices/active-entity.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activeEntity": () => (/* binding */ activeEntity)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ "./src/core/index.ts");
/* harmony import */ var mutabl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mutabl.js */ "./mutabl.js/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/internal/operators/skip.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/internal/operators/switchMap.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};




function activeEntity(path) {
    return __awaiter(this, void 0, void 0, function () {
        var url, deleted, entity, store, version;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = path;
                    deleted = false;
                    return [4 /*yield*/, (0,_core__WEBPACK_IMPORTED_MODULE_0__.fetchJson)(url)
                            .then(function (e) { return e.json(); })
                            .catch(function (_) { })];
                case 1:
                    entity = (_a.sent());
                    store = new mutabl_js__WEBPACK_IMPORTED_MODULE_1__.Store(entity && entity.values);
                    version = entity && entity.version;
                    return [2 /*return*/, {
                            get values() {
                                return store.asProxy();
                            },
                            reset: function (values) {
                                store.update(values);
                            },
                            update: function (values) {
                                return !deleted
                                    ? (0,_core__WEBPACK_IMPORTED_MODULE_0__.putJson)(url, { values: values, version: version }).then(function (resp) { return resp.json(); })
                                    : Promise.resolve(null);
                            },
                            save: function () { return (0,_core__WEBPACK_IMPORTED_MODULE_0__.postJson)(url, store.value); },
                            delete: function () {
                                return (0,_core__WEBPACK_IMPORTED_MODULE_0__.deleteJson)(url).then(function () {
                                    deleted = true;
                                });
                            },
                            autoUpdate: function () {
                                var _this = this;
                                var subscr = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(store.subscribe)
                                    .pipe(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.skip(1), rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime(1000), rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap(this.update))
                                    .subscribe(function (entity) {
                                    version = entity.version;
                                });
                                function onBeforeUnload(e) {
                                    this.update(store.value);
                                }
                                document.body.addEventListener("beforeunload", onBeforeUnload);
                                return {
                                    unsubscribe: function () {
                                        subscr.unsubscribe();
                                        document.body.removeEventListener("beforeunload", onBeforeUnload);
                                        return _this.update(store.value);
                                    },
                                };
                            },
                        }];
            }
        });
    });
}


/***/ }),

/***/ "./src/app/invoices/index.tsx":
/*!************************************!*\
  !*** ./src/app/invoices/index.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Invoices": () => (/* binding */ Invoices),
/* harmony export */   "InvoiceComponent": () => (/* binding */ InvoiceComponent)
/* harmony export */ });
/* harmony import */ var glow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! glow.js */ "./glow.js/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ "./src/app/index.tsx");
/* harmony import */ var mutabl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mutabl.js */ "./mutabl.js/index.ts");
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/select */ "./src/components/select/index.tsx");
/* harmony import */ var _components_text_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/text-field */ "./src/components/text-field/index.tsx");
/* harmony import */ var _active_entity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./active-entity */ "./src/app/invoices/active-entity.ts");
/* harmony import */ var glow_js_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! glow.js/components */ "./glow.js/components/index.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core */ "./src/core/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};








var rider = { label: "Rider International", value: "rider" };
var alfa = { label: "Alfa Pro IT", value: "alfa" };
var partech = { label: "Partech IT BV", value: "partech" };
var r2group = { label: "R2 Group B.V.", value: "r2group" };
function Invoices() {
    return {
        routes: [
            {
                path: [":id"],
                component: InvoiceComponent,
            },
        ],
        view: function (context) {
            return __awaiter(this, void 0, void 0, function () {
                var invoices;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0,_core__WEBPACK_IMPORTED_MODULE_7__.fetchJson)("/api/invoice").then(function (e) { return e.json(); })];
                        case 1:
                            invoices = _a.sent();
                            return [2 /*return*/, ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(___WEBPACK_IMPORTED_MODULE_1__.RouterPage, null,
                                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { class: "router-page__content" },
                                        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("header", null, "Invoices"),
                                        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("main", null,
                                            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(glow_js_components__WEBPACK_IMPORTED_MODULE_6__.List, { source: invoices }, invoiceListItem(context.url))))))];
                    }
                });
            });
        },
    };
    function invoiceListItem(url) {
        return function (invoice) { return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", null,
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("a", { class: "router-link", href: url.stringify(invoice.id) }, invoice.values.description))); };
    }
}
function InvoiceComponent() {
    return {
        view: function (context) {
            return __awaiter(this, void 0, void 0, function () {
                var id, entity, lines;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            id = context.params.id;
                            return [4 /*yield*/, (0,_active_entity__WEBPACK_IMPORTED_MODULE_5__.activeEntity)("/api/invoice/" + id)];
                        case 1:
                            entity = _a.sent();
                            lines = (0,mutabl_js__WEBPACK_IMPORTED_MODULE_2__.asListStore)(entity.values.declarations);
                            return [2 /*return*/, ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(___WEBPACK_IMPORTED_MODULE_1__.RouterPage, null,
                                    entity.autoUpdate(),
                                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { class: "router-page__content" },
                                        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("header", null,
                                            "Factuur ",
                                            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("span", null, entity.values.invoiceNumber),
                                            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("a", { href: "/api/invoice/" + id + "/pdf" }, "download"),
                                            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("button", { click: function () {
                                                    return lines.add((0,mutabl_js__WEBPACK_IMPORTED_MODULE_2__.pushItem)({
                                                        hours: lines.length,
                                                        description: "invoice line " + (lines.length + 1),
                                                    }));
                                                } }, "add"),
                                            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("button", { click: function () {
                                                    return lines.add({
                                                        type: "remove",
                                                        predicate: lines.length - 1,
                                                    });
                                                } }, "remove")),
                                        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("main", null,
                                            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", null,
                                                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(_components_text_field__WEBPACK_IMPORTED_MODULE_4__.default, { label: "Invoice number", value: entity.values.invoiceNumber })),
                                            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", null,
                                                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(_components_text_field__WEBPACK_IMPORTED_MODULE_4__.default, { label: "Description", value: entity.values.description })),
                                            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", null,
                                                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(_components_text_field__WEBPACK_IMPORTED_MODULE_4__.default, { label: "Owner", value: entity.values.owner })),
                                            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", null,
                                                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(_components_select__WEBPACK_IMPORTED_MODULE_3__.default, { options: [r2group, rider, alfa, partech], label: "Company", value: entity.values.companyId })),
                                            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", null,
                                                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("input", { type: "date", value: entity.values.date, change: function (evt) { return entity.values.date.update(evt.target.value); } })),
                                            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("hr", null),
                                            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(glow_js_components__WEBPACK_IMPORTED_MODULE_6__.List, { source: lines }, invoiceLineView)))))];
                    }
                });
            });
        },
    };
    function invoiceLineView(e) {
        return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", null,
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(_components_text_field__WEBPACK_IMPORTED_MODULE_4__.default, { label: "Description", value: e.description }),
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(_components_text_field__WEBPACK_IMPORTED_MODULE_4__.default, { label: "Hours", value: e.hours, parse: parseInt })));
    }
}


/***/ }),

/***/ "./src/app/jennah/demo.tsx":
/*!*********************************!*\
  !*** ./src/app/jennah/demo.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DemoComponent)
/* harmony export */ });
/* harmony import */ var _glow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../glow.js */ "./glow.js/index.ts");
/* harmony import */ var _scan_me_2_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scan-me 2.svg */ "./src/app/jennah/scan-me 2.svg");


function DemoComponent() {
    return {
        view: function () {
            return (0,_glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("img", { src: _scan_me_2_svg__WEBPACK_IMPORTED_MODULE_1__.default });
        },
    };
}


/***/ }),

/***/ "./src/app/jennah/menu-card/main.tsx":
/*!*******************************************!*\
  !*** ./src/app/jennah/menu-card/main.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainMenuCard": () => (/* binding */ MainMenuCard)
/* harmony export */ });
/* harmony import */ var glow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! glow.js */ "./glow.js/index.ts");
/* harmony import */ var glow_js_lib_fragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! glow.js/lib/fragment */ "./glow.js/lib/fragment.ts");
/* harmony import */ var glow_js_components_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! glow.js/components/css */ "./glow.js/components/css.ts");
/* harmony import */ var _menu_card_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-card.scss */ "./src/app/jennah/menu-card/menu-card.scss");
/* harmony import */ var mutabl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mutabl.js */ "./mutabl.js/index.ts");
/* harmony import */ var glow_js_components_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! glow.js/components/list */ "./glow.js/components/list/index.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};






function option(title) {
    return {
        type: "option",
        title: title,
    };
}
var friet = {
    title: "Friet",
    price: 2.5,
};
var huisfriet = {
    title: "Huis friet",
    price: 3,
};
function choice(title, products) {
    return {
        type: "choice",
        title: title,
        products: products,
    };
}
var colddrinks = [
    { title: "Cola", price: 2.5 },
    { title: "Fanta", price: 2.5 },
    { title: "Sprite", price: 2.5 },
    { title: "Bitter Lemon", price: 2.5 },
    { title: "Spa", price: 2.5 },
    { title: "Ginger Ale", price: 2.5 },
    { title: "Ice Tea", price: 2.5 },
    { title: "Red bull", price: 3 },
];
var products = {
    starters: [
        { title: "Harira", price: 4.5 },
        { title: "Bisara", price: 4.5 },
        { title: "Loempia", price: 3.5 },
        { title: "Tortilla", price: 5.0 },
        { title: "Nacho's", price: 7.5 },
    ],
    sandwiches: [
        {
            title: "Kip (of hete kip)",
            price: 6.5,
            options: [
                option("Heet"),
                choice("Drank", discount(colddrinks, 1)),
                choice("Friet", [friet, huisfriet]),
            ],
        },
        { title: "Kefta", price: 6.5 },
        { title: "Kip tenders (van de grill)", price: 7.5 },
        { title: "Sausage / Merquez", price: 7 },
        { title: "Garnalen", price: 7.5 },
    ],
    burgers: [
        { title: "Jennah Burger", price: 10.5, description: "bla" },
        { title: "Cheese Burger", price: 9 },
        { title: "Kipfilet Burger", price: 8 },
        { title: "Kipgehakt Burger", price: 8 },
    ],
    salads: [
        { title: "Tonijn Salade", price: 8 },
        { title: "Ceasar Salade", price: 9 },
        { title: "Zalm Salade", price: 9 },
        { title: "Garnalen Slade", price: 9 },
    ],
    colddrinks: colddrinks,
    tajines: [
        { title: "Tajine kip", price: 12.5 },
        { title: "Tajine Vlees", price: 14.5 },
        { title: "Tajine Pilpil", price: 14 },
        { title: "Tajine Kefta", price: 11 },
    ],
    couscous: [
        { title: "Vegie", price: 10 },
        { title: "Kip", price: 12 },
        { title: "Vlees", price: 13 },
        { title: "Royaal", price: 14.5 },
    ],
    desserts: [
        {
            title: "Cheese cake",
            price: 5.5,
            description: "Informeer naar onze variaties",
        },
        { title: "Redvelvet", price: 5.5 },
        { title: "Worteltaart", price: 5.5 },
    ],
    grill: [
        { title: "Kip Filet", price: 13.5 },
        { title: "Kalfs Spies", price: 14 },
        { title: "Kip Sate", price: 13.5 },
        { title: "Mix Grill", price: 17.5 },
        { title: "Kefta Schotel", price: 13 },
        { title: "Zalm Schotel", price: 13 },
        { title: "Garnalen Schotel", price: 14 },
        { title: "Sausage / Merquez Schotel", price: 14 },
    ],
    pasta: [
        { title: "Kip", price: 12.5 },
        { title: "Garnalen en/of zalm", price: 13.5 },
        { title: "Bolognese", price: 13.5 },
        { title: "Arabiatta", price: 10 },
    ],
};
function productViewFactory(product, onSelect) {
    return {
        view: function (context) {
            var selection = [];
            var options = product.options;
            return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("div", { class: "product-detail" },
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("header", null,
                    product.title,
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("a", { href: "/jennah", class: "router-link close-button" }, "\u00D7")),
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("div", { class: "product-detail__content" }, options.map(function (o) { return optionView(o, selection); })),
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("button", { click: compose(onClick, context.url.parent.navigate) }, "toevoegen")));
            function onClick() {
                onSelect(product, __spreadArray([], selection));
            }
        },
    };
    function optionView(o, selection) {
        if (o.type == "choice") {
            var products_1 = o.products;
            return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("div", null,
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("select", { name: o.title, change: function (e) { return selection.push({ title: e.target.value, price: 1 }); } },
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("option", { value: "" },
                        "[ Selecteer ",
                        o.title,
                        " ]"),
                    products_1.map(function (p) { return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("option", { value: p.title }, p.title)); }))));
        }
        else {
            var id = "checkbox_" + new Date().getTime();
            return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("div", null,
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("input", { type: "checkbox", id: id }),
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("label", { for: id }, o.title)));
        }
    }
}
var dummyOrder = {
    title: "Dummy order",
    count: 3,
    options: [{ title: "Cola", price: 1 }],
};
function MainMenuCard() {
    var store = new mutabl_js__WEBPACK_IMPORTED_MODULE_4__.Store({
        orders: [dummyOrder],
    });
    var orderStore = (0,mutabl_js__WEBPACK_IMPORTED_MODULE_4__.asListStore)(store.property("orders"));
    var allProducts = [];
    for (var cat in products) {
        allProducts.push.apply(allProducts, products[cat]);
    }
    function pushOrder(product, options) {
        var title = product.title;
        var index = orderStore.peek(function (orders) {
            return orders.findIndex(function (o) { return o.title === title && equalOrderOptions(o.options, options); });
        });
        if (index >= 0) {
            orderStore.add((0,mutabl_js__WEBPACK_IMPORTED_MODULE_4__.updateItem)(index, function (c) { return c.count++; }));
        }
        else {
            orderStore.add((0,mutabl_js__WEBPACK_IMPORTED_MODULE_4__.pushItem)({
                title: title,
                count: 1,
                options: options,
            }));
        }
    }
    function deleteOrder(order, index) {
        if (order.count > 1)
            orderStore.add((0,mutabl_js__WEBPACK_IMPORTED_MODULE_4__.updateItem)(index, function (c) { return c.count--; }));
        else
            orderStore.add((0,mutabl_js__WEBPACK_IMPORTED_MODULE_4__.removeItem)(index));
    }
    return {
        routes: allProducts.map(function (pr) { return ({
            path: productPath(pr),
            component: productViewFactory(pr, pushOrder),
        }); }),
        view: function (context) {
            var events = {
                onSelect: function (product) {
                    var _a;
                    if (product.options) {
                        (_a = context.url).navigate.apply(_a, productPath(product));
                    }
                    else {
                        pushOrder(product, []);
                    }
                },
            };
            return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(glow_js_lib_fragment__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(glow_js_components_css__WEBPACK_IMPORTED_MODULE_2__.default, { value: "jennah" }),
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("div", { class: "topbar" },
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("h1", null, "Restaurant & Cafe Jennah"),
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("span", { class: "halal" }, "100% Halal"),
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("span", { class: "topbar-wifi" },
                        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("span", { class: "material-icons" }, "rss_feed"),
                        "Jennah2021 |",
                        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("span", { class: "material-icons", style: "color: #128C7E" }, "whatsapp"),
                        "+31 6 87120348")),
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("div", { class: "menu-card" },
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(Starters, __assign({}, events)),
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(Sandwich, __assign({}, events)),
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(Burgers, __assign({}, events)),
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(Salad, __assign({}, events)),
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(Traditional, null),
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(Pasta, __assign({}, events)),
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(Grill, __assign({}, events)),
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(Tajine, __assign({}, events)),
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(Couscous, __assign({}, events)),
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(Desserts, __assign({}, events)),
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(HotDrinks, __assign({}, events)),
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(ColdDrinks, __assign({}, events))),
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("div", { class: "menu-card__order" },
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(glow_js_components_list__WEBPACK_IMPORTED_MODULE_5__.List, { source: orderStore }, function (order, _a) {
                        var index = _a.index;
                        return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(glow_js_lib_fragment__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
                            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("div", { class: "menu-card__order-item" },
                                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("span", { class: "menu-card__order-item__count" }, order.count),
                                "\u00A0",
                                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("span", { class: "menu-card__order-item__text" }, order.title),
                                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("a", { click: function () { return deleteOrder(order, index()); }, class: "menu-card__order-item__button" }, "\u00D7")),
                            order.options.peek(function (options) { return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("div", { class: "menu-card__order-option" }, options.map(function (entry) { return entry.title; }))); })));
                    }))));
        },
    };
}
function AdhocProduct(events) {
    var store = new mutabl_js__WEBPACK_IMPORTED_MODULE_4__.Store({
        title: "",
        price: 2,
    });
    return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("div", null,
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("input", { type: "text", value: store.property("title"), blur: onTitleChange, change: onTitleChange }),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("input", { type: "number", value: store.property("price"), blur: onPriceChange, change: onPriceChange }),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("button", { click: onSubmit }, "+")));
    function onTitleChange(e) {
        store.property("title").update(e.target.value);
    }
    function onPriceChange(e) {
        store.property("price").update(parseFloat(e.target.value));
    }
    function onSubmit() {
        store.peek(events.onSelect);
        store.update(null);
    }
}
function Salad(events) {
    return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("section", null,
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("h1", null, "Salades"),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(ProductList, __assign({}, events, { products: products.salads }))));
}
function ProductList(options) {
    var products = options.products;
    return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("ul", { class: "mdc-list" }, products.map(function (product) {
        return product.description ? ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("a", { class: "mdc-list-item router-link mdc-list--two-line", tabindex: "0", click: function () { return options.onSelect(product); } },
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("span", { class: "mdc-list-item__ripple" }),
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("span", { class: "mdc-list-item__text" },
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("span", { class: "mdc-list-item__primary-text" },
                    product.title,
                    " ",
                    product.price),
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("span", { class: "mdc-list-item__secondary-text" }, product.description)))) : ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("a", { class: "mdc-list-item router-link", tabindex: "0", click: function () { return options.onSelect(product); } },
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("span", { class: "mdc-list-item__ripple" }),
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("span", { class: "mdc-list-item__text" },
                product.title,
                " ",
                product.price)));
    })));
}
function Starters(events) {
    return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("section", null,
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("h1", null, "Starters"),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(ProductList, __assign({ products: products.starters }, events))));
}
function Traditional() {
    return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("section", { class: "call-out call-out-traditioneel" },
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("h1", null, "Traditioneel"),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("div", null,
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("h2", null, "Starters"),
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("div", null, "Harira of Bisara")),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("div", null,
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("h2", null, "Tajine"),
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("i", null, "geserveerd met marokkaanse tarwe brood"),
            ")",
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("div", null, "Tajine Kip, Kefta of Vlees ("),
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("h2", null, "Couscous"),
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("div", null, "Couscous Kip of Vlees met mix van groente en optie voor gekaramelisserde rozijnen"))));
}
function Taarten() {
    return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("section", null,
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("h1", { class: "Tangerine" }, "Taarten"),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("div", null,
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("span", null, "Chocoladetaart 4"),
            ", ",
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("span", null, "Wortel taart 5"),
            ",",
            " ",
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("span", null, "Red velvet 5"),
            ",",
            " ",
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("span", null, "Cheesecake (oreo, snicker, citroen, stroopwafel) 5.5"))));
}
function Smoothies() {
    return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("section", null,
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("h1", { class: "bungee" }, "Smoothies"),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("div", null, "Appel-banaan, Aarbei, Avocado-banaan, Jus D'orange 4"),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("div", null, "Avocado, Ace, Ananas-mango 5"),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("div", null, "Mojito (alcoholvrij cocktail) 4")));
}
function HotDrinks() {
    return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("section", null,
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("h1", null, "Hot drinks"),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("div", { class: "section__content" }, "Pickwick thee 2.5"),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("div", { class: "section__content" },
            "Marokkaanse munt thee (",
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("span", { class: "nowrap" }, "glas 2.5"),
            ",",
            " ",
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("span", { class: "nowrap" }, "kleine pot 4"),
            ",",
            " ",
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("span", { class: "nowrap" }, "grote pot 5"),
            ")"),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("div", { class: "section__content" }, "Warme chocolademelk 3"),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("div", { class: "section__content" }, "Espresso, Cappuccino 2.5"),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("div", { class: "section__content" }, "Caffe Latte Macchiato 3.5")));
}
function ColdDrinks(options) {
    return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("section", null,
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("h1", null, "Cold drinks"),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("div", { class: "section__content product__tiles" }, products.colddrinks.map(function (p) { return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("a", { click: function () { return options.onSelect(p); }, class: "list-item" }, p.title)); }))));
}
function Tajine(events) {
    return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("section", null,
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("h1", null, "Tajine"),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("i", null, "Wordt gereserveerd met marokkaanse brood (wit of bruin)"),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(ProductList, __assign({ products: products.tajines }, events))));
    return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("section", null,
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("h1", null, "Tajine"),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("div", null,
            "Tajine Kip 12.5, Vlees 14.5, Pilpil 14, of",
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("span", { class: "nowrap" }, "Kefta 13"))));
}
function Couscous(events) {
    return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("section", null,
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("h1", null, "Couscous"),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(ProductList, __assign({ products: products.couscous }, events))));
    return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("section", null,
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("h1", null, "Couscous"),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("div", null,
            "Couscous Vegie 10, ",
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("span", { class: "nowrap" }, "Kip 13"),
            " of",
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("span", { class: "nowrap" }, "Vlees 14")),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("hr", null),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("i", null, "Met keuze uit zoete uien / rozijnen en kikkererwten")));
}
function Desserts(events) {
    return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("section", null,
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("h1", null, "Desserts"),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(ProductList, __assign({ products: products.desserts }, events)),
        ";"));
}
function Grill(events) {
    return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("section", null,
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("h1", null, "Grill & Schotels"),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("i", null, "Al onze grill gerechten worden geserveerd met friet of rijst"),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(ProductList, __assign({ products: products.grill }, events))));
}
function Sandwich(events) {
    return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("section", null,
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("h1", null, "Sandwich (broodjes)"),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("i", null, "In combinatie met friet en een drankje vanaf 9"),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(ProductList, __assign({ products: products.sandwiches }, events))));
}
function Burgers(events) {
    return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("section", null,
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("h1", null, "Burgers (van de grill)"),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("i", null, "Al onze burgers worden geserveerd cheddar kaas uien en met huisfrietjes"),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(ProductList, __assign({ products: products.burgers }, events))));
}
function Pasta(events) {
    return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("section", null,
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)("h1", null, "Pasta"),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.tpl)(ProductList, __assign({ products: products.pasta }, events))));
}
function productPath(product) {
    return [product.title.replace(/(\s|[^\w])+/gi, "-").toLocaleLowerCase()];
}
function discount(products, discount) {
    return products.map(function (product) {
        return __assign(__assign({}, product), { price: product.price - discount });
    });
}
function compose() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function () {
        for (var _i = 0, fns_1 = fns; _i < fns_1.length; _i++) {
            var fn = fns_1[_i];
            fn();
        }
    };
}
function equalOrderOptions(o1, o2) {
    if (!o1 || !o2)
        return false;
    if (o1.length != o2.length)
        return false;
    var _loop_1 = function (entry) {
        if (!o2.find(function (x) { return x.title == entry.title; }))
            return { value: false };
    };
    for (var _i = 0, o1_1 = o1; _i < o1_1.length; _i++) {
        var entry = o1_1[_i];
        var state_1 = _loop_1(entry);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    var _loop_2 = function (entry) {
        if (!o1.find(function (x) { return x.title == entry.title; }))
            return { value: false };
    };
    for (var _a = 0, o2_1 = o2; _a < o2_1.length; _a++) {
        var entry = o2_1[_a];
        var state_2 = _loop_2(entry);
        if (typeof state_2 === "object")
            return state_2.value;
    }
    return true;
}


/***/ }),

/***/ "./src/components/core/date-time/date-adapter.ts":
/*!*******************************************************!*\
  !*** ./src/components/core/date-time/date-adapter.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateAdapter": () => (/* binding */ DateAdapter)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/internal/Subject.js");

var DateAdapter = /** @class */ (function () {
    function DateAdapter() {
        this._localeChanges = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        /** A stream that emits when the locale changes. */
        this.localeChanges = this._localeChanges;
    }
    /**
     * Given a potential date object, returns that same date object if it is
     * a valid date, or `null` if it's not a valid date.
     * @param obj The object to check.
     * @returns A date or `null`.
     */
    DateAdapter.prototype.getValidDateOrNull = function (obj) {
        return this.isDateInstance(obj) && this.isValid(obj)
            ? obj
            : null;
    };
    /**
     * Attempts to deserialize a value to a valid date object. This is different from parsing in that
     * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
     * string). The default implementation does not allow any deserialization, it simply checks that
     * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
     * method on all of its `@Input()` properties that accept dates. It is therefore possible to
     * support passing values from your backend directly to these properties by overriding this method
     * to also deserialize the format used by your backend.
     * @param value The value to be deserialized into a date object.
     * @returns The deserialized date object, either a valid date, null if the value can be
     *     deserialized into a null date (e.g. the empty string), or an invalid date.
     */
    DateAdapter.prototype.deserialize = function (value) {
        if (value == null ||
            (this.isDateInstance(value) && this.isValid(value))) {
            return value;
        }
        return this.invalid();
    };
    /**
     * Sets the locale used for all dates.
     * @param locale The new locale.
     */
    DateAdapter.prototype.setLocale = function (locale) {
        this.locale = locale;
        this._localeChanges.next();
    };
    /**
     * Compares two dates.
     * @param first The first date to compare.
     * @param second The second date to compare.
     * @returns 0 if the dates are equal, a number less than 0 if the first date is earlier,
     *     a number greater than 0 if the first date is later.
     */
    DateAdapter.prototype.compareDate = function (first, second) {
        return (this.getYear(first) - this.getYear(second) ||
            this.getMonth(first) - this.getMonth(second) ||
            this.getDate(first) - this.getDate(second));
    };
    /**
     * Checks if two dates are equal.
     * @param first The first date to check.
     * @param second The second date to check.
     * @returns Whether the two dates are equal.
     *     Null dates are considered equal to other null dates.
     */
    DateAdapter.prototype.sameDate = function (first, second) {
        if (first && second) {
            var firstValid = this.isValid(first);
            var secondValid = this.isValid(second);
            if (firstValid && secondValid) {
                return !this.compareDate(first, second);
            }
            return firstValid == secondValid;
        }
        return first == second;
    };
    /**
     * Clamp the given date between min and max dates.
     * @param date The date to clamp.
     * @param min The minimum value to allow. If null or omitted no min is enforced.
     * @param max The maximum value to allow. If null or omitted no max is enforced.
     * @returns `min` if `date` is less than `min`, `max` if date is greater than `max`,
     *     otherwise `date`.
     */
    DateAdapter.prototype.clampDate = function (date, min, max) {
        if (min && this.compareDate(date, min) < 0) {
            return min;
        }
        if (max && this.compareDate(date, max) > 0) {
            return max;
        }
        return date;
    };
    return DateAdapter;
}());



/***/ }),

/***/ "./src/components/date-picker/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/date-picker/index.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DatePicker)
/* harmony export */ });
/* harmony import */ var _material_menu_surface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/menu-surface */ "./node_modules/@material/menu-surface/component.js");
/* harmony import */ var glow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! glow.js */ "./glow.js/index.ts");
/* harmony import */ var _core_date_time_date_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/date-time/date-adapter */ "./src/components/core/date-time/date-adapter.ts");
/* harmony import */ var _text_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../text-field */ "./src/components/text-field/index.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/components/date-picker/style.scss");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};





function DatePicker(props) {
    var _a = (props || {}).label, label = _a === void 0 ? null : _a;
    var surfaceView = new ChildView(_material_menu_surface__WEBPACK_IMPORTED_MODULE_4__.MDCMenuSurface.attachTo);
    // const elt = createCustomElement(MatCalendar, { injector: null });
    // console.log(elt);
    fetch("https://www.sepay.nl/mysepay/Transactions.aspx", {
        headers: {
            accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "en,en-US;q=0.9,nl;q=0.8,ar;q=0.7",
            "cache-control": "max-age=0",
            "content-type": "application/x-www-form-urlencoded",
            "sec-ch-ua": '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
        },
        referrer: "https://www.sepay.nl/mysepay/Transactions.aspx",
        referrerPolicy: "strict-origin-when-cross-origin",
        body: "viewstatekey=77240164-f835-47f9-99a6-daf2c3a3018b&ctl00%24hidPageID=f55287f1-880a-4d50-9d87-efbaea5ad249&ctl00%24ContentPlaceHolder1%24tbDateFrom=21-04-2021+00%3A00&ctl00%24ContentPlaceHolder1%24tbDateTo=01-05-2021+00%3A00&ctl00%24ContentPlaceHolder1%24tbAmountMin=&ctl00%24ContentPlaceHolder1%24tbAmountMax=&ctl00%24ContentPlaceHolder1%24lstDownloadType=CSV&ctl00%24ContentPlaceHolder1%24btnDownload=Download&__EVENTTARGET=&__EVENTARGUMENT=&__VIEWSTATE=&__SCROLLPOSITIONX=0&__SCROLLPOSITIONY=0&__EVENTVALIDATION=%2FwEdABmvVXD1oYELeveMr0vHCmYP1BcR4IQKU%2FN%2FmJan6AT4FxoelvNk8V12GEez%2BkZvF88SIkf31abdD2k7vds0J8m482iMaitz6%2Bv1d0EIZg0Rhim1TAakfKozq1SXIQw34wKHQp9TUIS%2FwOmNI5z5tJZRJGPa5%2FY1hAkErbROroFMVZfMTS5lZ8pvvm%2F4ZhUdp3gi%2F2OAVs8zDA2w4C9AM9w7G0OX1cPRSiahZqNBlGInm9K0tYQX6E1J3apaOXoBUDPyR%2Fyp9K1P4rDimmJ5pgcfV3SVwCzae0m4A5H2lh3A8kQwr0KZx0dLRhTcTC1F%2FLqAasvFAkMO02AI1HwJR98%2FOIxNxu9f7htthfNKaz3piBTVkyyEShPXUuWfpHyqJ7qDIQ9ZmnSbZGM3J1RZ5zDRj5oLjgavrwy9hAdO31OjH%2F8vXHXRCSwSlC9VlLc1BokESF1eL4D%2BPa8gDSO02PwxkrQ%2BjbuJgXbtQO0MHmKJAnpMIFzpE9voX2%2FFdgxGXRMGdk0AyMo5L7R9pncoWpw0a6wEqw5Gz%2BzYmaEyyIFVpcH4SUZgy2Pf1CM0XuDUE2E%3D",
        method: "POST",
        mode: "cors",
        credentials: "include",
    });
    return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", null,
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(_text_field__WEBPACK_IMPORTED_MODULE_2__.default, { label: label, events: { mouseup: toggleOpen } }),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { class: "mdc-menu-surface--anchor", style: "position: relative;" },
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { class: "mdc-menu-surface", style: "padding: 20px" },
                surfaceView,
                "surface"))));
    function toggleOpen(e) {
        surfaceView.call(function (elt) { return elt.isOpen && elt.open(); });
    }
}
var ChildView = /** @class */ (function () {
    function ChildView(fn) {
        this.fn = fn;
    }
    ChildView.prototype.call = function (fn) {
        var element = this.element;
        if (element) {
            fn(element);
        }
    };
    ChildView.prototype.attachTo = function (dom) {
        this.element = this.fn(dom);
    };
    return ChildView;
}());
var InvariantDateAdapter = /** @class */ (function (_super) {
    __extends(InvariantDateAdapter, _super);
    function InvariantDateAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InvariantDateAdapter.prototype.getYear = function (date) {
        return date.year;
    };
    InvariantDateAdapter.prototype.getMonth = function (date) {
        return date.month;
    };
    InvariantDateAdapter.prototype.getDate = function (date) {
        return date.date;
    };
    InvariantDateAdapter.prototype.getDayOfWeek = function (date) {
        return new Date(date.year, date.month, date.date).getDay();
    };
    InvariantDateAdapter.prototype.getMonthNames = function (style) {
        return [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "Mei",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
    };
    InvariantDateAdapter.prototype.getDateNames = function () {
        return ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"];
    };
    InvariantDateAdapter.prototype.getDayOfWeekNames = function (style) {
        return ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"];
    };
    InvariantDateAdapter.prototype.getYearName = function (date) {
        return date.year.toString();
    };
    InvariantDateAdapter.prototype.getFirstDayOfWeek = function () {
        return 0;
    };
    InvariantDateAdapter.prototype.getNumDaysInMonth = function (date) {
        return 30;
    };
    InvariantDateAdapter.prototype.clone = function (date) {
        return __assign({}, date);
    };
    InvariantDateAdapter.prototype.createDate = function (year, month, date) {
        return { year: year, month: month, date: date };
    };
    InvariantDateAdapter.prototype.today = function () {
        var d = new Date();
        return {
            year: d.getFullYear(),
            month: d.getMonth(),
            date: d.getDate(),
        };
    };
    InvariantDateAdapter.prototype.parse = function (value, parseFormat) {
        throw new Error("Method not implemented.");
    };
    InvariantDateAdapter.prototype.format = function (date, displayFormat) {
        throw new Error("Method not implemented.");
    };
    InvariantDateAdapter.prototype.addCalendarYears = function (date, years) {
        return __assign(__assign({}, date), { year: date.year + years });
    };
    InvariantDateAdapter.prototype.addCalendarMonths = function (date, months) {
        return __assign(__assign({}, date), { month: date.month + months });
    };
    InvariantDateAdapter.prototype.addCalendarDays = function (date, days) {
        return __assign(__assign({}, date), { date: date.date + days });
    };
    InvariantDateAdapter.prototype.toIso8601 = function (date) {
        throw new Error("Method not implemented.");
    };
    InvariantDateAdapter.prototype.isDateInstance = function (obj) {
        return obj && "year" in obj && "month" in obj && "date" in obj;
    };
    InvariantDateAdapter.prototype.isValid = function (date) {
        return !!date;
    };
    InvariantDateAdapter.prototype.invalid = function () {
        return null;
    };
    return InvariantDateAdapter;
}(_core_date_time_date_adapter__WEBPACK_IMPORTED_MODULE_1__.DateAdapter));


/***/ }),

/***/ "./src/components/select/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/select/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var glow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! glow.js */ "./glow.js/index.ts");
/* harmony import */ var _material_ripple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/ripple */ "./node_modules/@material/ripple/component.js");
/* harmony import */ var _glow_js_components_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../glow.js/components/css */ "./glow.js/components/css.ts");



function Select(props) {
    var id = new Date().getTime();
    return [
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { class: "mdc-select mdc-ripple-upgraded", style: "display: block;" },
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("i", { class: "mdc-select__dropdown-icon" }),
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("select", { change: onChange, id: id, class: "mdc-select__native-control", value: props.value },
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("option", { value: "" }),
                props.options.map(function (e) { return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("option", { value: e.value }, e.label)); }),
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(_glow_js_components_css__WEBPACK_IMPORTED_MODULE_1__.Attr, { name: "value", value: props.value })),
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("label", { for: id, class: "mdc-floating-label mdc-floating-label--float-above" }, props.label),
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { class: "mdc-line-ripple" })),
        _material_ripple__WEBPACK_IMPORTED_MODULE_2__.MDCRipple,
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("p", { class: "mdc-text-field-helper-text mdc-text-field-helper-text--persistent mdc-text-field-helper-text--validation-msg", id: id + "_helper_text" }),
    ];
    function onChange(evt) {
        props.value.update(evt.target.value);
    }
}


/***/ }),

/***/ "./src/components/spinner/index.tsx":
/*!******************************************!*\
  !*** ./src/components/spinner/index.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Spinner)
/* harmony export */ });
/* harmony import */ var glow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! glow.js */ "./glow.js/index.ts");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/components/spinner/style.scss");


function Spinner() {
    return (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { class: "loader-spinner" });
}


/***/ }),

/***/ "./src/components/tab-bar.tsx":
/*!************************************!*\
  !*** ./src/components/tab-bar.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TabBar)
/* harmony export */ });
/* harmony import */ var glow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! glow.js */ "./glow.js/index.ts");

function TabBar(props) {
    var selected = (props || {}).selected;
    return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { class: "mdc-tab-bar", role: "tablist" },
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { class: "mdc-tab-scroller" },
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { class: "mdc-tab-scroller__scroll-area mdc-tab-scroller__scroll-area--scroll", style: "margin-bottom: 0px;" },
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { class: "mdc-tab-scroller__scroll-content", style: "padding: 10px;" },
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(Tab, { title: "Planning By Employee", url: "/agents-plannig", active: selected.lift(function (s) { return s.length === 0; }) }),
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(Tab, { title: "Track Planning", url: "/agents-plannig/tracks", active: selected.lift(function (s) { return s[0] === "tracks"; }) }),
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(Tab, { title: "Planning By Position", url: "/agents-plannig/per-position", active: selected.lift(function (s) { return s[0] === "per-position"; }) }),
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(Tab, { title: "Demand Per Position", url: "/agents-plannig/demands", active: selected.lift(function (s) { return s[0] === "demands"; }) }))))));
}
function Tab(props) {
    var random = new Date().getTime();
    return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("a", { role: "tab", class: "router-link mdc-tab", "aria-selected": "false", tabindex: "-1", id: "tab_" + random, href: props.url },
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("span", { class: "mdc-tab__content" },
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("span", { class: "mdc-tab__text-label" }, props.title)),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("span", { class: [
                "mdc-tab-indicator",
                props.active
                    ? props.active.lift(function (b) { return b && "mdc-tab-indicator--active"; })
                    : null,
            ] },
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("span", { class: "mdc-tab-indicator__content mdc-tab-indicator__content--underline" })),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("span", { class: "mdc-tab__ripple mdc-ripple-upgraded" })));
}


/***/ }),

/***/ "./src/components/text-field/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/text-field/index.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TextField)
/* harmony export */ });
/* harmony import */ var glow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! glow.js */ "./glow.js/index.ts");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/components/text-field/style.scss");
/* harmony import */ var _material_textfield__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/textfield */ "./node_modules/@material/textfield/component.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



function TextField(props) {
    var value = props.value, parse = props.parse;
    return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("label", __assign({ class: "mdc-text-field mdc-text-field--fullwidth mdc-text-field--filled mdc-text-field--with-trailing-icon" }, props.events),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("span", { class: "mdc-text-field__ripple" }),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("span", { id: "label", class: "mdc-floating-label" }, props.label),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("input", { "aria-labelledby": "label", class: "mdc-text-field__input", type: props.type || "text", value: value, keyup: defaultUpdate, change: defaultUpdate }),
        props.icon && ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("i", { class: "material-icons mdc-text-field__icon mdc-text-field__icon--trailing" }, "event")),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("span", { class: "mdc-line-ripple" }),
        _material_textfield__WEBPACK_IMPORTED_MODULE_2__.MDCTextField));
    function defaultUpdate(e) {
        if (typeof value === "object" && "update" in value) {
            value.update(typeof parse === "function" ? parse(e.target.value) : e.target.value);
        }
    }
}
// export function Input(props: InputProps) {
//     const { label, readonly, value, autofocus, type, ...css } = props || {
//         readonly: false,
//         label: "",
//         css: "",
//         autofocus: false,
//         value: null,
//         type: "text",
//     };
//     const id = "__" + Math.random();
//     return (
//         <Fragment>
//             <div
//                 class={["mdc-text-field", "text-field", "mdc-ripple-upgraded"]}
//                 {...css}
//             >
//                 <input
//                     type={props.type}
//                     autofocus={autofocus}
//                     readonly={readonly}
//                     id={id}
//                     class="mdc-text-field__input"
//                     value={value}
//                     keyup={update}
//                     change={update}
//                 />
//                 <label class="mdc-floating-label" for={id}>
//                     {label}
//                 </label>
//                 <div class="mdc-line-ripple" />
//                 {MDCRipple}
//                 {MDCTextField}
//             </div>
//             <p
//                 class="mdc-text-field-helper-text mdc-text-field-helper-text--persistent mdc-text-field-helper-text--validation-msg"
//                 id={id + "_helper_text"}
//             ></p>
//         </Fragment>
//     );
//     function update(e) {
//         if (value && value.update) {
//             value.update(e.target.value);
//         }
//     }
// }


/***/ }),

/***/ "./src/components/time-table/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/time-table/index.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timeUnit": () => (/* binding */ timeUnit),
/* harmony export */   "hourColumns": () => (/* binding */ hourColumns),
/* harmony export */   "minuteColumns": () => (/* binding */ minuteColumns),
/* harmony export */   "default": () => (/* binding */ TimeTable)
/* harmony export */ });
/* harmony import */ var glow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! glow.js */ "./glow.js/index.ts");
/* harmony import */ var glow_js_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! glow.js/components */ "./glow.js/components/index.ts");
/* harmony import */ var glow_js_components_if__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! glow.js/components/if */ "./glow.js/components/if.ts");
/* harmony import */ var _mutabl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../mutabl.js */ "./mutabl.js/index.ts");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/components/time-table/style.scss");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};





var timeUnit = 15;
var hourColumns = new Array(24);
for (var h = 0; h < hourColumns.length; h++) {
    hourColumns[h] = h;
}
var minuteColumns = getMinuteCells(timeUnit);
function TimeTable(props) {
    var cellContentTemplate = props.cellContentTemplate;
    var collapsed = new _mutabl_js__WEBPACK_IMPORTED_MODULE_3__.Store([]);
    var rows = flatten(props.rows, collapsed);
    var selection = new _mutabl_js__WEBPACK_IMPORTED_MODULE_3__.Store(null);
    return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { class: "rom-time-table-container" },
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { If: "timeUnit$ | async as timeUnit", class: "rom-time-table", click: timeTableClick, ngClass: "{'rom-time-table--loading': isLoading}" },
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { class: "rom-time-table-column" },
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { class: "rom-time-table-position__header" },
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("span", { class: "rom-time-table-position__content" },
                        props.label,
                        " (",
                        rows.length,
                        ")"),
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(TimeUnits, null)),
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(glow_js_components__WEBPACK_IMPORTED_MODULE_1__.List, { source: rows }, function (row) { return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(glow_js_components_if__WEBPACK_IMPORTED_MODULE_2__.default, { condition: row.visible },
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(glow_js_components_if__WEBPACK_IMPORTED_MODULE_2__.default, { condition: row.depth === 0 },
                        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { class: "rom-time-table-row--separator" })),
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { class: "rom-time-table-position", style_display: "row.visible ? null : 'none'", "data-identifier": row.data.identifier },
                        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("span", { class: "rom-time-table-position__content", style: "margin-left: " +
                                (+row.depth * 18 + 24) +
                                "px" },
                            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(glow_js_components_if__WEBPACK_IMPORTED_MODULE_2__.default, { condition: !row.isLeaf },
                                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("i", { class: "material-icons", style: "margin: auto auto auto -24px;" }, collapsed.lift(function (l) {
                                    return l.includes(row)
                                        ? "keyboard_arrow_right"
                                        : "keyboard_arrow_down";
                                }))),
                            row.data.label)))); }),
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { class: "rom-time-table-row--separator" })),
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(glow_js_components__WEBPACK_IMPORTED_MODULE_1__.List, { source: hourColumns }, function (hour) { return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { class: "rom-time-table-column" },
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { class: "rom-time-table-column__hour" }, prependZeros(hour)),
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { class: "rom-time-table-column__minutes" },
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(glow_js_components__WEBPACK_IMPORTED_MODULE_1__.List, { source: minuteColumns }, function (min) { return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", null,
                        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { class: "rom-time-table-column__minutes__content" }, min ? prependZeros(min) : null))); })),
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(glow_js_components__WEBPACK_IMPORTED_MODULE_1__.List, { source: rows }, function (row) { return (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(Row, { hour: hour, row: row }); }),
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { class: "rom-time-table-row--separator" }))); }))));
    function timeTableClick(evt) {
        var target = evt.target;
        if (isTag(target)) {
            var cell = target.closest(".rom-time-table-cell");
            if (cell) {
                var _a = cell.parentElement.dataset, hour = _a.hour, identifier = _a.identifier;
                var minute = cell.dataset.minute;
                var minuteOffset = +hour * 60 + +minute;
                selectCell(identifier, minuteOffset);
                return;
            }
            var rowHeader = target.closest(".rom-time-table-position");
            if (rowHeader) {
                var identifier_1 = rowHeader.dataset.identifier;
                var row_1 = rows.find(function (n) { return n.data.identifier === identifier_1; });
                if (row_1) {
                    collapsed.update(function (l) {
                        var idx = l.indexOf(row_1);
                        if (idx >= 0) {
                            l.splice(idx, 1);
                        }
                        else {
                            l.push(row_1);
                        }
                    });
                    var stack = [row_1.data];
                    while (stack.length) {
                        var curr = stack.pop();
                        // const { childrenIdentifiers } = curr;
                        // if (childrenIdentifiers) {
                        //     const childVisible =
                        //         curr.visible && curr.mode !== "collapsed";
                        //     for (const childIdentifier of childrenIdentifiers) {
                        //         const child = findRow(dataRows, childIdentifier);
                        //         child.visible = childVisible;
                        //         stack.push(child);
                        //     }
                        // }
                    }
                }
            }
            var row = target.closest(".rom-time-table-row");
            if (row) {
                var _b = row.dataset, hour = _b.hour, identifier = _b.identifier;
                var offsetX = evt.offsetX;
                var columnIndex = Math.floor((+hour * 60) / timeUnit) +
                    Math.floor(offsetX / 40);
                var minuteOffset = columnIndex * timeUnit;
                selectCell(identifier, minuteOffset);
            }
        }
        function isTag(target) {
            if (!target) {
                return false;
            }
            var element = target;
            var classList = element.classList;
            return classList && !!classList.contains;
        }
        function selectCell(rowIdentifier, minuteOffset) {
            var sel = selection.peek(function (e) { return e; });
            var targetSelection = {
                rowIdentifier: rowIdentifier,
                fromTime: {
                    minuteOffset: minuteOffset,
                },
                toTime: {
                    minuteOffset: minuteOffset + timeUnit,
                },
            };
            if (!sel || sel.rowIdentifier !== rowIdentifier) {
                selection.update(targetSelection);
            }
            else {
                var fromTime = sel.fromTime, toTime = sel.toTime;
                if (isTimeRangeOverlapping(minuteOffset, minuteOffset + timeUnit, fromTime.minuteOffset, toTime.minuteOffset)) {
                    selection.update(null);
                }
                else {
                    selection.update({
                        rowIdentifier: rowIdentifier,
                        fromTime: {
                            minuteOffset: Math.min(+fromTime.minuteOffset, minuteOffset),
                        },
                        toTime: {
                            minuteOffset: Math.max(+toTime.minuteOffset, minuteOffset + timeUnit),
                        },
                    });
                }
            }
        }
    }
    function Row(props) {
        var row = props.row, hour = props.hour;
        var hv = hasValues(row, hour);
        return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(glow_js_components_if__WEBPACK_IMPORTED_MODULE_2__.default, { condition: row.visible },
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(glow_js_components_if__WEBPACK_IMPORTED_MODULE_2__.default, { condition: row.depth === 0 },
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { class: "rom-time-table-row--separator" })),
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { "data-hour": hour, "data-identifier": row.data.identifier, 
                // style={visible.lift((b) => b && "display: none")}
                class: ["rom-time-table-row"] },
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(glow_js_components_if__WEBPACK_IMPORTED_MODULE_2__.default, { condition: isColumnSelected(row.data, hour).lift(function (cs) { return cs || hv; }) },
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(glow_js_components__WEBPACK_IMPORTED_MODULE_1__.List, { source: minuteColumns }, function (minute) { return (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(Cell, __assign({}, props, { minute: minute })); }))))
        //     <ng-container
        //     If="
        //         row.visible &&
        //         ((isColumnSelected
        //             | apply: selection:row.identifier:hour) ||
        //             (hasValues | apply: row[hour]:minuteColumns))
        //     "
        // >
        // </ng-container>
        );
    }
    function isColumnSelected(row, hour) {
        var expr = selection.lift(function (sel) {
            if (!sel) {
                return false;
            }
            if (row.identifier !== sel.rowIdentifier) {
                return false;
            }
            var fromTime = sel.fromTime, toTime = sel.toTime;
            var timeOffset = hour * 60;
            return isTimeRangeOverlapping(timeOffset, timeOffset + 60, fromTime.minuteOffset, toTime.minuteOffset);
        });
        return expr;
    }
    function isCellSelected(row, hour, minute, sel) {
        if (!sel) {
            return null;
        }
        return (row.data.identifier == sel.rowIdentifier &&
            isTimeInSelection({ minuteOffset: hour * 60 + minute }, sel));
    }
    function hasValues(row, hour) {
        for (var _i = 0, minuteColumns_1 = minuteColumns; _i < minuteColumns_1.length; _i++) {
            var m = minuteColumns_1[_i];
            if (row.data.values(hour, m)) {
                return true;
            }
        }
        return false;
    }
    function Cell(props) {
        var row = props.row, hour = props.hour, minute = props.minute;
        var isSelected = selection.lift(function (sel) {
            return isCellSelected(row, hour, minute, sel);
        });
        var cell = row.data.values(hour, minute);
        return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { class: [
                "rom-time-table-cell",
                isSelected.lift(function (b) { return b && "rom-time-table-cell--selected"; }),
            ], style: isSelected.lift(function (b) {
                var bgColor = row.data.bgColor && row.data.bgColor(cell);
                if (!bgColor) {
                    return null;
                }
                if (b) {
                    return "color: white";
                }
                return "background-color: " + bgColor;
            }), "data-minute": minute },
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("a", { class: "rom-time-table-cell__content" }, cellContentTemplate(cell, row.data))));
    }
}
function getMinuteCells(ptu) {
    var result = [];
    for (var i = 0; i < 60; i += ptu) {
        result.push(i);
    }
    return result;
}
function prependZeros(value) {
    return ("00" + value).slice(-2);
}
function TimeUnits() {
    return (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("span", null);
}
// function isColumnSelected(
//     selection: TimeSelection,
//     rowIdentifier: string,
//     hour: number
// ) {
//     if (!selection) {
//         return false;
//     }
//     if (rowIdentifier !== selection.rowIdentifier) {
//         return false;
//     }
//     const { fromTime, toTime } = selection;
//     const timeOffset = hour * 60;
//     return isTimeRangeOverlapping(
//         timeOffset,
//         timeOffset + 60,
//         fromTime.minuteOffset,
//         toTime.minuteOffset
//     );
// };
function isTimeRangeOverlapping(x1, y1, x2, y2) {
    return Math.max(x1, x2) < Math.min(y1, y2);
}
function isTimeInSelection(t1, s1) {
    var minuteOffset = t1.minuteOffset;
    if (minuteOffset < s1.fromTime.minuteOffset) {
        return false;
    }
    if (minuteOffset >= s1.toTime.minuteOffset) {
        return false;
    }
    return true;
}
function flatten(rows, collapsed) {
    var stack = reverse(rows).map(function (r) { return [0, r, null]; });
    var result = [];
    var _loop_1 = function () {
        var _a = stack.pop(), depth = _a[0], curr = _a[1], parent_1 = _a[2];
        var children = curr.children;
        var row = {
            depth: depth,
            isLeaf: !children || children.length == 0,
            data: curr,
            parent: parent_1,
            visible: collapsed.lift(function (col) {
                var p = parent_1;
                while (p) {
                    if (col.includes(p)) {
                        return false;
                    }
                    p = p.parent;
                }
                return true;
            }),
        };
        result.push(row);
        if (children)
            for (var _i = 0, _b = reverse(children); _i < _b.length; _i++) {
                var child = _b[_i];
                stack.push([depth + 1, child, row]);
            }
    };
    while (stack.length > 0) {
        _loop_1();
    }
    return result;
}
function reverse(arr) {
    var result = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}


/***/ }),

/***/ "./src/core/group-by.ts":
/*!******************************!*\
  !*** ./src/core/group-by.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ groupBy)
/* harmony export */ });
function groupBy(arr, selector, construct) {
    var groups = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        var key = selector(item);
        var group = findGroup(key);
        if (group) {
            group.items.push(item);
        }
        else if (construct) {
            groups.push(construct(key, item));
        }
        else {
            groups.push({
                key: key,
                items: [item],
            });
        }
    }
    return groups;
    function findGroup(key) {
        for (var _i = 0, groups_1 = groups; _i < groups_1.length; _i++) {
            var group = groups_1[_i];
            if (group.key == key) {
                return group;
            }
        }
        return null;
    }
}


/***/ }),

/***/ "./src/core/index.ts":
/*!***************************!*\
  !*** ./src/core/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchJson": () => (/* binding */ fetchJson),
/* harmony export */   "putJson": () => (/* binding */ putJson),
/* harmony export */   "postJson": () => (/* binding */ postJson),
/* harmony export */   "deleteJson": () => (/* binding */ deleteJson)
/* harmony export */ });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var defaultRequestInit = {
    headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "nl,en;q=0.9,en-US;q=0.8,ar;q=0.7",
        "cache-control": "no-cache",
        "content-type": "application/json;charset=UTF-8",
        pragma: "no-cache",
    },
    method: "GET",
    mode: "cors",
    credentials: "same-origin",
};
function fetchJson(url, init) {
    if (init === void 0) { init = {}; }
    return fetch(url, __assign(__assign({}, defaultRequestInit), init));
}
function putJson(url, data, init) {
    if (init === void 0) { init = {}; }
    var body = JSON.stringify(data);
    return fetch(url, __assign(__assign(__assign({}, defaultRequestInit), init), { method: "PUT", body: body }));
}
function postJson(url, data, init) {
    if (init === void 0) { init = {}; }
    var body = JSON.stringify(data);
    return fetch(url, __assign(__assign(__assign({}, defaultRequestInit), init), { method: "POST", body: body }));
}
function deleteJson(url, init) {
    if (init === void 0) { init = {}; }
    return fetch(url, __assign(__assign(__assign({}, defaultRequestInit), init), { method: "DELETE" }));
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var glow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! glow.js */ "./glow.js/index.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/app/index.tsx");


(0,glow_js__WEBPACK_IMPORTED_MODULE_0__.render)(new glow_js__WEBPACK_IMPORTED_MODULE_0__.DomDriver("#app"), (0,_app__WEBPACK_IMPORTED_MODULE_1__.default)());


/***/ }),

/***/ "./src/login/index.tsx":
/*!*****************************!*\
  !*** ./src/login/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Login": () => (/* binding */ Login)
/* harmony export */ });
/* harmony import */ var glow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! glow.js */ "./glow.js/index.ts");
/* harmony import */ var _material_textfield__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/textfield */ "./node_modules/@material/textfield/component.js");


function Login(props) {
    var click = props.click;
    return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { class: "login-card-container" },
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("section", { class: "login-card mdc-elevation--z3" },
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("main", null,
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { style: "margin: 16px 0;" },
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(Input, { label: "User" })),
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { style: "margin: 16px 0;" },
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)(Input, { label: "Password" }))),
            (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { class: "login-card-toolbar" },
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("a", { tabindex: "-1", href: "./forgot", class: "forgot-password" }),
                (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("button", { click: click, class: "mdc-button--raised mdc-ripple-upgraded mdc-button" },
                    (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("span", { class: "mdc-button__label" }, "Login"))))));
}
function Input(props) {
    var _a = (props || {}).label, label = _a === void 0 ? "Unnamed" : _a;
    var id = "_" + new Date().getTime();
    return ((0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { class: "mdc-text-field", style: "width: 100%;" },
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("input", { class: "mdc-text-field__input", id: id }),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("div", { class: "mdc-line-ripple" }),
        (0,glow_js__WEBPACK_IMPORTED_MODULE_0__.default)("label", { for: id, class: "mdc-floating-label" }, label),
        _material_textfield__WEBPACK_IMPORTED_MODULE_1__.MDCTextField));
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkjs_app_001"] = self["webpackChunkjs_app_001"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_material_drawer_component_js-node_modules_material_menu-surface_componen-9da086"], () => (__webpack_require__("./src/index.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi0wZGFkZjU3Mi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlLHFCQUF1Qiw4REFBOEQ7Ozs7Ozs7Ozs7Ozs7O0FDQXBHLGlFQUFlLHFCQUF1Qiw4RUFBOEU7Ozs7Ozs7Ozs7Ozs7O0FDQXBILGlFQUFlLHFCQUF1Qiw0RUFBNEU7Ozs7Ozs7Ozs7Ozs7O0FDQWxILGlFQUFlLHFCQUF1Qix1REFBdUQ7Ozs7Ozs7Ozs7Ozs7O0FDQTdGLGlFQUFlLHFCQUF1QiwwRUFBMEU7Ozs7Ozs7Ozs7Ozs7O0FDQWhILGlFQUFlLHFCQUF1QixzRUFBc0U7Ozs7Ozs7Ozs7Ozs7O0FDQTVHLGlFQUFlLHFCQUF1Qix5RUFBeUU7Ozs7Ozs7Ozs7Ozs7O0FDQS9HLGlFQUFlLHFCQUF1Qix5RUFBeUU7Ozs7Ozs7Ozs7Ozs7O0FDQS9HLGlFQUFlLHFCQUF1QixpQ0FBaUM7Ozs7Ozs7Ozs7Ozs7OztBQ1F4RCxTQUFTLEdBQUcsQ0FBQyxLQUFlO0lBQ3pDLE9BQU87UUFDTCxNQUFNLEVBQU4sVUFBTyxNQUFlO1lBQ1osUUFBSSxHQUFZLEtBQUssS0FBakIsRUFBRSxLQUFLLEdBQUssS0FBSyxNQUFWLENBQVc7WUFDOUIsSUFBSSxJQUFJLElBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLFVBQVUsRUFBRTtnQkFDaEQsSUFBTSxTQUFPLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBRTNELElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQyxDQUFDO29CQUNmLElBQUksQ0FBQzt3QkFBRSxTQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzt3QkFDdEIsU0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDeEIsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsT0FBTyxTQUFPLENBQUM7YUFDaEI7aUJBQU07Z0JBQ0wsT0FBTyxNQUFNLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQzthQUMvQztRQUNILENBQUM7S0FDRixDQUFDO0FBQ0osQ0FBQztBQU9NLFNBQVMsSUFBSSxDQUFDLEtBQWdCO0lBQ25DLE9BQU87UUFDTCxNQUFNLEVBQU4sVUFBTyxNQUFlO1lBQ1osUUFBSSxHQUFrQixLQUFLLEtBQXZCLEVBQUUsSUFBSSxHQUFZLEtBQUssS0FBakIsRUFBRSxLQUFLLEdBQUssS0FBSyxNQUFWLENBQVc7WUFDcEMsSUFBSSxJQUFJLElBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLFVBQVUsRUFBRTtnQkFDaEQsSUFBTSxTQUFPLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBRXhELElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQyxDQUFDO29CQUNmLElBQUksQ0FBQzt3QkFBRSxTQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzt3QkFDdEIsU0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDeEIsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsT0FBTyxTQUFPLENBQUM7YUFDaEI7aUJBQU07Z0JBQ0wsT0FBTyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQzthQUM1QztRQUNILENBQUM7S0FDRixDQUFDO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q3NCO0FBT0g7QUFHTCxTQUFTLEVBQUUsQ0FDdEIsS0FBMkMsRUFDM0MsUUFBcUI7SUFFckIsSUFBSSwyREFBYyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRTtRQUNqQyxPQUFPLElBQUksbUJBQW1CLENBQzFCLEtBQUssQ0FBQyxTQUFTLEVBQ2Ysa0RBQVEsQ0FBQyxRQUFRLEVBQUUsZ0RBQVUsQ0FBQyxDQUNqQyxDQUFDO0tBQ0w7U0FBTTtRQUNILElBQUksS0FBSyxDQUFDLFNBQVM7WUFBRSxPQUFPLElBQUksc0RBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7O1lBQ3RELE9BQU8sSUFBSSxtREFBYSxFQUFFLENBQUM7S0FDbkM7QUFDTCxDQUFDO0FBRUQ7SUFDSSw2QkFDVyxJQUEyQixFQUMzQixTQUFzQjtRQUR0QixTQUFJLEdBQUosSUFBSSxDQUF1QjtRQUMzQixjQUFTLEdBQVQsU0FBUyxDQUFhO0lBQzlCLENBQUM7SUFFSixvQ0FBTSxHQUFOLFVBQU8sTUFBZTtRQUNsQixJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkMsSUFBSSxLQUFLLEdBQXFCLElBQUksQ0FBQztRQUNuQyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQyxPQUFPO1lBQzdCLGFBQVMsR0FBSyxJQUFJLFVBQVQsQ0FBVTtZQUMzQixJQUFJLE9BQU8sRUFBRTtnQkFDVCxLQUFLLEdBQUcsS0FBSyxJQUFJLG9EQUFVLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQ2pEO2lCQUFNLElBQUksS0FBSyxFQUFFO2dCQUNkLEtBQWdCLFVBQUssRUFBTCxlQUFLLEVBQUwsbUJBQUssRUFBTCxJQUFLLEVBQUU7b0JBQWxCLElBQU0sQ0FBQztvQkFDUixJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUU7d0JBQ1gsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO3FCQUNmO2lCQUNKO2dCQUNELEtBQUssR0FBRyxJQUFJLENBQUM7YUFDaEI7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU87WUFDSCxNQUFNO2dCQUNGLE9BQU8sS0FBSyxDQUFDO1lBQ2pCLENBQUM7WUFDRCxPQUFPO2dCQUNILElBQUksTUFBTSxJQUFJLE9BQU8sTUFBTSxDQUFDLFdBQVcsS0FBSyxVQUFVO29CQUNsRCxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3pCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQixDQUFDO1NBQ0osQ0FBQztJQUNOLENBQUM7SUFDTCwwQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEVzQjtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBRXBDLFNBQVMsUUFBUSxDQUFJLE1BQWUsRUFBRSxJQUFXO0lBQ3BELElBQU0sS0FBSyxHQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsSUFBTSxNQUFNLEdBQWdCLEVBQUUsQ0FBQztJQUUvQixPQUFPLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ3JCLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzVCLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDdkMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN2QjtTQUNKO2FBQU0sSUFBSSxPQUFPLElBQUksS0FBSyxVQUFVLEVBQUU7WUFDbkMsSUFBTSxFQUFFLEdBQVEsSUFBSSxDQUFDO1lBQ3JCLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3BDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdEI7YUFBTTtZQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsb0RBQVUsQ0FBQyxJQUFJLENBQWMsQ0FBQyxDQUFDO1NBQzlDO0tBQ0o7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBSUQsdUNBQXVDO0FBRXZDLHlCQUF5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCbUQ7QUFDaEM7QUFDUDtBQUU2QjtBQVEzRCxTQUFTLElBQUksQ0FBSSxLQUFtQixFQUFFLFNBQTRCO0lBQy9ELFVBQU0sR0FBSyxLQUFLLE9BQVYsQ0FBVztJQUV6QixTQUFTLFlBQVksQ0FBQyxNQUFTLEVBQUUsS0FBbUI7UUFDbEQsT0FBTyxrREFBUSxDQUFDLFNBQVMsRUFBRTtZQUN6Qix3REFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxtREFBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNO1lBQy9DLEVBQUUsS0FBSyxTQUFFLE9BQU8sV0FBRTtTQUNuQixDQUFDLENBQUM7UUFFSCxTQUFTLE9BQU87WUFDZCxJQUFNLEdBQUcsR0FBRyxLQUFLLEVBQUUsQ0FBQztZQUNwQixJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUU7Z0JBQ1osSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO29CQUN6QixNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDdkI7cUJBQU07b0JBQ0wsTUFBTSxDQUFDLEdBQUcsQ0FBQzt3QkFDVCxJQUFJLEVBQUUsUUFBUTt3QkFDZCxTQUFTLEVBQUUsVUFBQyxDQUFDLElBQUssUUFBQyxJQUFJLE1BQU0sRUFBWCxDQUFXO3FCQUM5QixDQUFDLENBQUM7aUJBQ0o7YUFDRjtRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsT0FBTztRQUNMLE1BQU0sRUFBTixVQUFPLE1BQWU7WUFDcEIsSUFBTSxLQUFLLEdBQXVCLEVBQUUsQ0FBQztZQUM3QixVQUFNLEdBQUssS0FBSyxPQUFWLENBQVc7WUFDekIsSUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3ZDLElBQU0sVUFBVSxHQUFHO2dCQUNqQixPQUFPO29CQUNMLEtBQW1CLFVBQUssRUFBTCxlQUFLLEVBQUwsbUJBQUssRUFBTCxJQUFLLEVBQUU7d0JBQXJCLElBQU0sSUFBSTt3QkFDTCxTQUFLLEdBQWUsSUFBSSxNQUFuQixFQUFFLFFBQVEsR0FBSyxJQUFJLFNBQVQsQ0FBVTt3QkFDakMsS0FBc0IsVUFBUSxFQUFSLHFCQUFRLEVBQVIsc0JBQVEsRUFBUixJQUFRLEVBQUU7NEJBQTNCLElBQU0sT0FBTzs0QkFDaEIsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO2dDQUNuQixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7NkJBQ25CO3lCQUNGO3dCQUNELEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztxQkFDakI7Z0JBQ0gsQ0FBQzthQUNGLENBQUM7WUFFRixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUN0QyxhQUFhLENBQUM7d0JBQ1osSUFBSSxFQUFFLFFBQVE7d0JBQ2QsS0FBSyxFQUFFLENBQUM7d0JBQ1IsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7cUJBQ2xCLENBQUMsQ0FBQztpQkFDSjtnQkFDRCxPQUFPLFVBQVUsQ0FBQzthQUNuQjtpQkFBTTtnQkFDTCxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQzthQUN0RDtZQUVELFNBQVMsYUFBYSxDQUFDLENBQW9CO2dCQUN6QyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO29CQUNiLFVBQU0sR0FBSyxDQUFDLE9BQU4sQ0FBTztvQkFDckIsV0FBVyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ25DO3FCQUFNLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7b0JBQ3RCLFVBQU0sR0FBWSxDQUFDLE9BQWIsRUFBRSxLQUFLLEdBQUssQ0FBQyxNQUFOLENBQU87b0JBQzVCLFdBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQzVCO3FCQUFNLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7b0JBQzlCLElBQU0sR0FBRyxHQUNQLE9BQU8sQ0FBQyxDQUFDLFNBQVMsS0FBSyxRQUFRO3dCQUM3QixDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7d0JBQ2IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZELCtEQUErRDtvQkFDL0QsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFO3dCQUNaLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDaEIsU0FBSyxHQUFlLElBQUksTUFBbkIsRUFBRSxRQUFRLEdBQUssSUFBSSxTQUFULENBQVU7d0JBQ2pDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQzt3QkFDaEIsd0RBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDdEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7cUJBQ3RCO2lCQUNGO3FCQUFNLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7b0JBQzdCLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3JCO3FCQUFNLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7b0JBQzVCLGtCQUFrQjtvQkFDbEIsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDMUIsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUM1QixLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztpQkFDbkI7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDckM7Z0JBRUQsU0FBUyxXQUFXLENBQUMsTUFBUyxFQUFFLEdBQVc7b0JBQ3pDLElBQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzdDLElBQU0sSUFBSSxHQUFxQjt3QkFDN0IsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLE1BQU07d0JBQ04sUUFBUSxFQUFFLHFEQUFXLENBQ25CLGtEQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQzs2QkFDdEMsR0FBRyxDQUFDLFVBQUMsUUFBUSxJQUFLLFFBQUM7NEJBQ2xCLE1BQU0sRUFBRSxTQUFTOzRCQUNqQixRQUFRO3lCQUNULENBQUMsRUFIaUIsQ0FHakIsQ0FBQzs2QkFDRixPQUFPLEVBQUUsQ0FDYjtxQkFDRixDQUFDO29CQUNGLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFFM0IsU0FBUyxLQUFLO3dCQUNaLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOzRCQUNyQyxJQUFNLE1BQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3RCLElBQUksTUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7Z0NBQzVCLE9BQU8sQ0FBQyxDQUFDOzZCQUNWO3lCQUNGO3dCQUNELE9BQU8sR0FBRyxDQUFDO29CQUNiLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxTQUFTLFVBQVUsQ0FBQyxRQUFhOzRDQUN0QixDQUFDO3dCQUNSLDhCQUE4Qjt3QkFDOUIsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNkLFVBQU0sR0FBc0IsSUFBSSxPQUExQixFQUFFLEtBQUssR0FBZSxJQUFJLE1BQW5CLEVBQUUsUUFBUSxHQUFLLElBQUksU0FBVCxDQUFVO3dCQUN6QyxJQUFJLE1BQU0sRUFBRTs0QkFDVixJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQUMsQ0FBQyxJQUFLLFFBQUMsS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFqQixDQUFpQixDQUFDLENBQUM7NEJBQ3pELElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtnQ0FDWCxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7Z0NBQ2hCLHdEQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7Z0NBQ3RCLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dDQUNuQixDQUFDLEVBQUUsQ0FBQzs2QkFDTDt5QkFDRjtrQ0FaTSxDQUFDOzs7b0JBQVYsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO2dDQUE1QixDQUFDO3dCQUFELENBQUM7cUJBYVQ7NENBQ1EsQ0FBQzt3QkFDUixJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzNCLElBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFFLElBQUssU0FBRSxDQUFDLE1BQU0sS0FBSyxNQUFNLEVBQXBCLENBQW9CLENBQUMsQ0FBQzt3QkFDNUQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFOzRCQUNiLGFBQWEsQ0FBQztnQ0FDWixJQUFJLEVBQUUsUUFBUTtnQ0FDZCxLQUFLLEVBQUUsQ0FBQztnQ0FDUixNQUFNOzZCQUNQLENBQUMsQ0FBQzt5QkFDSjs2QkFBTSxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7NEJBQ3JCLDJCQUEyQjs0QkFDM0IsYUFBYSxDQUFDO2dDQUNaLElBQUksRUFBRSxNQUFNO2dDQUNaLElBQUksRUFBRSxLQUFLO2dDQUNYLEVBQUUsRUFBRSxDQUFDOzZCQUNOLENBQUMsQ0FBQzt5QkFDSjs2QkFBTTs0QkFDTCwyQkFBMkI7eUJBQzVCOztvQkFsQkgsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO2dDQUEvQixDQUFDO3FCQW1CVDtnQkFDSCxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7S0FDRixDQUFDO0FBQ0osQ0FBQztBQWFELFNBQVMsa0JBQWtCLENBQUksTUFBeUI7SUFDdEQsT0FBTyxVQUFDLEVBQW9CLElBQUssYUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBakIsQ0FBaUIsQ0FBQztBQUNyRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BMbUM7QUFDc0I7QUFDcEI7QUFDVDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ09YO0FBQ21DO0FBRXJELElBQU0sY0FBYyxHQUFHLEVBQUUsT0FBTyxnQkFBSSxDQUFDLEVBQUUsQ0FBQztBQUN4QztJQU1FLG1CQUFZLE1BQTRCO1FBSmpDLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLFdBQU0sR0FBeUQsRUFBRSxDQUFDO1FBQzFFLFFBQVUsR0FBZ0IsRUFBRSxDQUFDO1FBRzNCLElBQU0sR0FBRyxHQUNQLE9BQU8sTUFBTSxLQUFLLFFBQVE7WUFDeEIsQ0FBQyxDQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFpQjtZQUNqRCxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNSLE1BQU0sS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7U0FDM0M7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUNwQixDQUFDO0lBRUQsd0JBQUksR0FBSixVQUFRLE1BQStCO1FBQ3JDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsZ0NBQVksR0FBWixVQUFhLElBQWlCO1FBQzVCLE9BQU8sSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELCtCQUFXLEdBQVgsVUFBWSxHQUFZO1FBQ3RCLGlFQUFpRTtRQUNqRSx3Q0FBd0M7UUFFeEMsSUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUMzQixJQUFJLENBQUMsNkNBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3RDO2FBQU07WUFDTCxJQUFJLENBQUMsNkNBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1QjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELCtCQUFXLEdBQVgsVUFBWSxJQUFZLEVBQUUsS0FBaUM7UUFDekQsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPLGNBQWMsQ0FBQztRQUUxQixVQUFNLEdBQUssSUFBSSxPQUFULENBQVU7UUFFeEIsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLE1BQU0sQ0FBQyxFQUFFO1lBQ2hELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRTVDLE9BQU87WUFDTCxPQUFPO2dCQUNMLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDakQsQ0FBQztTQUNGLENBQUM7UUFFRixTQUFTLFlBQVksQ0FBQyxHQUFVO1lBQzlCLElBQUksT0FBTyxLQUFLLEtBQUssVUFBVSxFQUFFO2dCQUMvQixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDWjtpQkFBTTtnQkFDTCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3BCO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCwrQkFBVyxHQUFYLFVBQVksS0FBVTtRQUNwQixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsNkNBQVEsQ0FBQyxDQUFDO1FBQ2pDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDNUIsSUFBTSxXQUFTLEdBQUc7Z0JBQ2hCLFlBQVksRUFBWixVQUFhLElBQVU7b0JBQ3JCLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDekMsQ0FBQztnQkFDRCxPQUFPO29CQUNMLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDaEIsZUFBZSxDQUFDLEtBQUssRUFBRSxXQUFTLENBQUMsQ0FBQztnQkFDcEMsQ0FBQzthQUNGLENBQUM7WUFDRixTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2hDO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDO0lBRUQsaUNBQWEsR0FBYixVQUFjLElBQVksRUFBRSxJQUFnQztRQUMxRCxJQUFNLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBZ0IsQ0FBQztRQUNuRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFMUMsT0FBTztZQUNMLEtBQUs7Z0JBQ0gsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4QixDQUFDO1lBQ0QsTUFBTTtnQkFDSixPQUFPLE1BQU0sQ0FBQztZQUNoQixDQUFDO1lBQ0QsT0FBTztnQkFDTCxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDbkIsQ0FBQztTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQseUNBQXlDO0lBQ3pDLHdFQUF3RTtJQUN4RSxJQUFJO0lBRUosZ0NBQVksR0FBWixVQUFhLEtBQThCO1FBQ3pDLElBQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDM0IsQ0FBQyxDQUFDLEtBQUs7WUFDUCxDQUFDLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFlLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZCLE9BQU87WUFDTCxJQUFJLEVBQUosVUFBSyxLQUFjO2dCQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQWUsQ0FBQztZQUNuQyxDQUFDO1lBQ0QsT0FBTztnQkFDTCxPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN2QixDQUFDO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxtQ0FBZSxHQUFmLFVBQWdCLElBQVksRUFBRSxLQUFnQjtRQUM1QyxPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsb0NBQWdCLEdBQWhCLFVBQWlCLE1BQW1CLEVBQUUsU0FBaUI7UUFDckQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN6QixJQUFJLElBQUksR0FBRyxNQUFNLENBQUM7UUFDbEIsT0FBTyxJQUFJLEVBQUU7WUFDWCxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ3RCLE9BQU8sQ0FBQyxFQUFFLEVBQUU7Z0JBQ1YsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixJQUFJLEVBQUUsQ0FBQyxHQUFHLEtBQUssSUFBSSxJQUFJLEVBQUUsQ0FBQyxTQUFTLEtBQUssU0FBUyxFQUFFO29CQUNqRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3hCO2FBQ0Y7WUFDRCxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUN4QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELHNCQUFFLEdBQUYsVUFBRyxTQUFpQixFQUFFLEdBQWdCLEVBQUUsWUFBcUI7UUFBN0QsaUJBNENDO1FBM0NDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQ3RCLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUNqQixVQUFVLEdBQUcsS0FBSyxDQUFDO1FBRXJCLE9BQU8sQ0FBQyxFQUFFLEVBQUU7WUFDVixJQUFJLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxFQUFFLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRTtnQkFDOUIsSUFBSSxFQUFFLENBQUMsR0FBRyxLQUFLLEdBQUc7b0JBQUUsT0FBTyxFQUFFLENBQUM7cUJBQ3pCO29CQUNILFVBQVUsR0FBRyxJQUFJLENBQUM7b0JBQ2xCLE1BQU07aUJBQ1A7YUFDRjtTQUNGO1FBRUQsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQUMsS0FBSztnQkFDcEMsVUFBTSxHQUFLLEtBQUssT0FBVixDQUFXO2dCQUN6QixJQUFJLE1BQU0sRUFBRTtvQkFDVixJQUFJLFlBQVksR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBYyxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUNwRSxJQUFJLFlBQVksRUFBRTt3QkFDaEIsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDekIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO3FCQUN4QjtpQkFDRjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLEtBQUssR0FBRztZQUNWLFNBQVM7WUFDVCxHQUFHO1lBQ0gsWUFBWTtZQUNaLE9BQU87Z0JBQ0wsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFO29CQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN0QixPQUFPLElBQUksQ0FBQztpQkFDYjtnQkFDRCxPQUFPLEtBQUssQ0FBQztZQUNmLENBQUM7U0FDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsMEJBQU0sR0FBTixVQUFPLENBQVUsRUFBRSxHQUFTLEVBQUUsR0FBVztRQUN2QyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ25DLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFekIsSUFBSSxNQUFNLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxJQUFJLEdBQUcsS0FBSyxNQUFNLEVBQUU7WUFDbEIsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUNuQyxJQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFO2dCQUMzQixJQUFJLE9BQU8sR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzlCLElBQUksT0FBTyxLQUFLLEdBQUcsRUFBRTtvQkFDbkIsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7aUJBQ25DO2FBQ0Y7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN2QjtZQUNELElBQUksTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7WUFDL0IsV0FBVyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDNUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDL0IsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNoQztZQUNELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCwyQkFBTyxHQUFQO1FBQ0UsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFDaEMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFDekIsT0FBTyxDQUFDLEVBQUUsRUFBRTtZQUNWLElBQU0sQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQVksQ0FBQztZQUNwQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ1osQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ1o7U0FDRjtRQUVELE9BQU8sSUFBSSxDQUFDLDZDQUFRLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDOztLQTdORSw2Q0FBUTtBQStOWCxTQUFTLFdBQVcsQ0FBQyxJQUFlLEVBQUUsTUFBYzs7SUFDbEQsSUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLElBQU0sS0FBSztRQUNULEdBQUMsNkNBQVEsSUFBRyxFQUFpQjs4QkFDekIsWUFBTTtpQkFBVjtnQkFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDckIsQ0FBQzs7OztRQUNELGNBQVcsR0FBWDtZQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQztRQUN6RCxDQUFDO1FBQ0Qsa0JBQWUsR0FBZixVQUFnQixJQUFZLEVBQUUsS0FBOEI7WUFDMUQsSUFBTSxPQUFPLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzFELFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDekIsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQztRQUNELE9BQUksR0FBSixVQUFRLE1BQStCO1lBQ3JDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQixDQUFDO1FBQ0QsZ0JBQWEsR0FBYixVQUFjLElBQVksRUFBRSxJQUFTO1lBQ25DLElBQU0sT0FBTyxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFnQixDQUFDO1lBQ25FLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUVyQixJQUFNLFNBQVMsR0FBRztnQkFDaEIsT0FBTztnQkFDUCxZQUFZLEVBQVosVUFBYSxJQUFVO29CQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQzFDLENBQUM7Z0JBQ0QsT0FBTztvQkFDTCxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ25CLENBQUM7YUFDRixDQUFDO1lBQ0YsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3hCLElBQU0sT0FBTyxHQUFHO2dCQUNkLEtBQUs7b0JBQ0gsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDeEIsQ0FBQztnQkFDRCxNQUFNO29CQUNKLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFDRCxPQUFPO29CQUNMLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDakIsZUFBZSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDcEMsQ0FBQzthQUNGLENBQUM7WUFDRixPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDO1FBQ0QsZUFBWSxHQUFaLFVBQWEsS0FBZ0I7WUFDM0IsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFlLENBQUMsQ0FBQztZQUMxRCxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEIsSUFBTSxTQUFTLEdBQUc7Z0JBQ2hCLFFBQVE7Z0JBQ1IsWUFBWSxFQUFaLFVBQWEsSUFBVTtvQkFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO2dCQUNELE9BQU87b0JBQ0wsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNwQixDQUFDO2FBQ0YsQ0FBQztZQUNGLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUV4QixJQUFNLE9BQU8sR0FBRztnQkFDZCxJQUFJLEVBQUosVUFBSyxLQUFhO29CQUNoQixRQUFRLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDN0IsQ0FBQztnQkFDRCxPQUFPO29CQUNMLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDbEIsZUFBZSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDcEMsQ0FBQzthQUNGLENBQUM7WUFDRixPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDO1FBQ0QsY0FBVyxHQUFYLFVBQVksR0FBWTtZQUN0QiwyREFBMkQ7WUFDM0QsOEJBQThCO1lBQzlCLElBQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDMUMsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7Z0JBQzNCLEtBQUssQ0FBQyw2Q0FBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDMUM7aUJBQU07Z0JBQ0wsS0FBSyxDQUFDLDZDQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDaEM7WUFDRCxPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDO1FBQ0QsVUFBTyxHQUFQO1lBQ0UsZUFBZSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMvQixzRUFBc0U7WUFDdEUsb0NBQW9DO1lBQ3BDLE9BQU8sS0FBSyxDQUFDLDZDQUFRLENBQUMsQ0FBQyxDQUFDLG1CQUFtQjtRQUM3QyxDQUFDO1dBQ0YsQ0FBQztJQUVGLFNBQVMsV0FBVyxDQUFDLElBQTJCO1FBQzlDLElBQU0sT0FBTyxHQUFHLHNEQUFhLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNDLElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1Qjs7WUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsU0FBUyxZQUFZLENBQUMsU0FBb0I7UUFDeEMsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLDZDQUFRLENBQUMsQ0FBQztRQUNsQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDNUIsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMxQixPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBSSxDQUNWLCtEQUErRCxDQUNoRSxDQUFDO1lBQ0YsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFFRCxTQUFTLGVBQWUsQ0FBQyxLQUFhLEVBQUUsSUFBZTtJQUNyRCxJQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsNkNBQVEsQ0FBQyxDQUFDO0lBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1FBQzdCLE9BQU87S0FDUjtJQUVELElBQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFO1FBQ1osU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDMUI7QUFDSCxDQUFDO0FBRUQsU0FBUyxlQUFlLENBQ3RCLE1BQW1CLEVBQ25CLElBQVksRUFDWixLQUE4QjtJQUU5QixJQUFJLFVBQVUsR0FBYSxFQUFFLENBQUM7SUFDOUIsSUFBSSxJQUFJLEtBQUssVUFBVSxFQUFFO1FBQ3ZCLFVBQVUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUIsT0FBTztZQUNMLE1BQU07WUFDTixJQUFJLEVBQUUsVUFBQyxLQUFVLElBQUssaUJBQVUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQXpCLENBQXlCO1lBQy9DLE9BQU87Z0JBQ0wsVUFBVSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM1QixDQUFDO1NBQ0YsQ0FBQztLQUNIO1NBQU0sSUFBSSxJQUFJLEtBQUssT0FBTyxFQUFFO1FBQzNCLElBQU0sUUFBTSxHQUFHLGtFQUFhLENBQzFCLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FDdkMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsT0FBTztZQUNMLE1BQU07WUFDTixJQUFJLEVBQUUsU0FBUztZQUNmLE9BQU87Z0JBQ0wsUUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNyQixVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBRSxJQUFLLFNBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBakMsQ0FBaUMsQ0FBQyxDQUFDO1lBQ2hFLENBQUM7U0FDRixDQUFDO0tBQ0g7U0FBTSxJQUFJLElBQUksS0FBSyxPQUFPLEVBQUU7UUFDM0IsY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLE9BQU87WUFDTCxJQUFJLEVBQUUsY0FBYztZQUNwQixPQUFPO2dCQUNMLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0IsQ0FBQztTQUNGLENBQUM7S0FDSDtTQUFNO1FBQ0wsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbEMsT0FBTztZQUNMLElBQUksRUFBRSxnQkFBZ0I7WUFDdEIsT0FBTztnQkFDTCxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9CLENBQUM7U0FDRixDQUFDO0tBQ0g7SUFFRCxTQUFTLFNBQVMsQ0FBQyxLQUFVO1FBQzNCLElBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUV0QixJQUFNLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNuQixJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDekIsSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxTQUFTO2dCQUFFLFNBQVM7WUFFbEQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN2QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDcEMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDckI7YUFDRjtpQkFBTSxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDbkMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDOUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3JDLElBQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDcEIsSUFBSSxFQUFFO3dCQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQzdCO2FBQ0Y7aUJBQU07Z0JBQ0wsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDekMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3JDLElBQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDcEIsSUFBSSxFQUFFO3dCQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQzdCO2FBQ0Y7U0FDRjtRQUVELFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFFLElBQUssYUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQTNCLENBQTJCLENBQUMsQ0FBQztRQUN4RCxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBRSxJQUFLLGFBQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUM7UUFDckQsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMxQixDQUFDO0lBRUQsU0FBUyxjQUFjLENBQUMsS0FBYTtRQUNuQyxJQUFJLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMxQixJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtnQkFDekMsTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7YUFDbkI7aUJBQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtnQkFDakMsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hCLHNCQUFzQjtnQkFDdEIsMEdBQTBHO2dCQUMxRyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxDQUMzQixDQUFDLENBQUMsV0FBVyxFQUFFLEVBQ2YsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUNaLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFDWCxFQUFFLENBQ0gsQ0FBQzthQUNIOztnQkFBTSxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUU1QixPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxPQUFPLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztJQUVELFNBQVMsZ0JBQWdCLENBQUMsS0FBYTtRQUNyQyxJQUFJLEtBQUssS0FBSyxLQUFLLENBQUMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3RDLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDOUI7YUFBTTtZQUNMLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCxTQUFTLGVBQWUsQ0FBQyxNQUFtQixFQUFFLElBQVk7SUFDeEQsT0FBTyxJQUFJLEtBQUssS0FBSztRQUNuQixDQUFDLENBQUMsNEJBQTRCO1FBQzlCLENBQUMsQ0FBQyxNQUFNO1lBQ1IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZO1lBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDWCxDQUFDO0FBQ0QsU0FBUyxnQkFBZ0IsQ0FBQyxNQUFtQixFQUFFLElBQVk7SUFDekQsSUFBTSxZQUFZLEdBQUcsZUFBZSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRCxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUU3RCxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDO0FBRUQsU0FBUyxRQUFRLENBQUMsS0FBVTtJQUMxQixJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksT0FBTyxLQUFLLEtBQUssV0FBVztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBRWpFLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLE9BQU8sS0FBSyxLQUFLLFNBQVM7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUUxRSxPQUFPLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUMxQixDQUFDO0FBRU0sU0FBUyxTQUFTLENBQUMsR0FBUTtJQUNoQyxJQUFJO1FBQ0YsZ0RBQWdEO1FBQ2hELE9BQU8sR0FBRyxZQUFZLFdBQVcsQ0FBQztLQUNuQztJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1YsNERBQTREO1FBQzVELHlEQUF5RDtRQUN6RCxrREFBa0Q7UUFDbEQsT0FBTyxDQUNMLE9BQU8sR0FBRyxLQUFLLFFBQVE7WUFDdkIsR0FBRyxDQUFDLFFBQVEsS0FBSyxDQUFDO1lBQ2xCLE9BQU8sR0FBRyxDQUFDLEtBQUssS0FBSyxRQUFRO1lBQzdCLE9BQU8sR0FBRyxDQUFDLGFBQWEsS0FBSyxRQUFRLENBQ3RDLENBQUM7S0FDSDtBQUNILENBQUM7QUFFRCxTQUFTLGNBQWMsQ0FBQyxHQUFRO0lBQzlCLE9BQU8sR0FBRyxJQUFJLE9BQU8sSUFBSSxHQUFHLElBQUksTUFBTSxJQUFJLEdBQUcsQ0FBQztBQUNoRCxDQUFDO0FBRUQsU0FBUyxVQUFVLENBQUMsTUFBbUIsRUFBRSxLQUFVO0lBQ2pELElBQUksY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQzFCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztLQUMzQjtBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcmdCTSxJQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7QUFzQ3BDLFNBQVMsV0FBVyxDQUFDLEtBQVU7SUFDbEMsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFFeEQsT0FBTyxDQUNILE9BQU8sS0FBSyxLQUFLLFFBQVE7UUFDekIsT0FBTyxLQUFLLEtBQUssUUFBUTtRQUN6QixPQUFPLEtBQUssS0FBSyxTQUFTO1FBQzFCLEtBQUssWUFBWSxJQUFJLENBQ3hCLENBQUM7QUFDTixDQUFDO0FBY00sU0FBUyxJQUFJLENBQUMsSUFBZSxFQUFFLFFBQTJCO0lBQzdELE9BQU87UUFDSCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7UUFDdkIsTUFBTSxFQUFOLFVBQU8sTUFBZTtZQUNsQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7S0FDSixDQUFDO0FBQ04sQ0FBQztBQUVNLFNBQVMsY0FBYyxDQUFJLEtBQVU7SUFDeEMsT0FBTyxLQUFLLElBQUksT0FBTyxLQUFLLENBQUMsU0FBUyxLQUFLLFVBQVUsQ0FBQztBQUMxRCxDQUFDO0FBWUQsU0FBUyxRQUFRLENBQUMsSUFBUztJQUN2QixJQUFJLElBQUksSUFBSSxJQUFJO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFDL0IsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRO1FBQUUsT0FBTyxRQUFRLElBQUksSUFBSSxDQUFDO0lBQ3RELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUM7QUFFTSxTQUFTLGFBQWEsQ0FBQyxJQUFZLEVBQUUsSUFBZTtJQUN2RCxJQUFNLEtBQUssR0FBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDbEIsT0FBTyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQ2pCLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFJLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDZixLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ2hCO2FBQU0sSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdkIsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pDLEtBQUssSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDNUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM1QjtTQUNKO2FBQU0sSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3ZCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7S0FDSjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFNTSxTQUFTLFdBQVcsQ0FBQyxXQUE2QztJQUNyRSxJQUFJLENBQUMsV0FBVyxFQUFFO1FBQ2QsT0FBTztLQUNWO0lBQ0QsSUFBTSxLQUFLLEdBQWlCLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBQ2xELENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwQixPQUFPLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDakIsSUFBTSxJQUFJLEdBQVEsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxJQUFJO1lBQUUsU0FBUztRQUNwQixJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxVQUFVLEVBQUU7WUFDcEMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2xCO1FBRUQsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUMxQixLQUFLLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzVDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDNUI7U0FDSjtLQUNKO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pJTSxTQUFTLFFBQVEsQ0FBQyxNQUFVLEVBQUUsUUFBZ0I7SUFDakQsT0FBTyxRQUFRLENBQUM7QUFDcEIsQ0FBQztBQUVELDZCQUFlLG9DQUNYLE1BQVUsRUFDVixRQUFnQjtJQUVoQixPQUFPLFFBQVEsQ0FBQztBQUNwQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIaUI7QUFDMkI7QUFDUTtBQUVBO0FBc0I5QyxTQUFTLEdBQUcsQ0FDZixJQUFtQixFQUNuQixLQUEwQjtJQUExQixvQ0FBMEI7SUFDMUIsa0JBQWtCO1NBQWxCLFVBQWtCLEVBQWxCLHFCQUFrQixFQUFsQixJQUFrQjtRQUFsQixpQ0FBa0I7O0lBRWxCLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1FBQzFCLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxRQUFRLEVBQUUsVUFBQyxDQUFDLElBQUssUUFBQyxFQUFELENBQUMsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sSUFBSSxXQUFXLENBQ2xCLElBQUksRUFDSixLQUFLO1lBQ0QsQ0FBQyxDQUFFLFVBQVUsQ0FBQyxLQUFLLENBQWlCLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztZQUN6RCxDQUFDLENBQUMsWUFBWSxDQUNyQixDQUFDO0tBQ0w7SUFFRCxJQUFJLE9BQU8sSUFBSSxLQUFLLFVBQVUsRUFBRTtRQUM1QixPQUFPLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQ3RFO0lBRUQsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDNUIsQ0FBQztBQUVNLFNBQVMsSUFBSSxDQUFJLEVBQTZCO0lBQ2pELE9BQU87UUFDSCxTQUFTLEVBQVQsVUFBVSxRQUFxQjtZQUMzQixJQUFJLEtBQUssR0FBRyxFQUFFLEVBQUUsQ0FBQztZQUNqQixJQUFJLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDdkIsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3BDO1lBQ0QsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQixPQUFPO2dCQUNILFdBQVc7b0JBQ1AsUUFBUSxDQUFDO2dCQUNiLENBQUM7YUFDSixDQUFDO1FBQ04sQ0FBQztLQUNKLENBQUM7QUFDTixDQUFDO0FBRUQsU0FBUyxTQUFTLENBQUMsSUFBYyxFQUFFLElBQVc7SUFDMUMsSUFBSTtRQUNBLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDeEIsSUFBSSxJQUFJLEtBQUssTUFBTTtZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ2xDLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDeEM7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0FBQ0wsQ0FBQztBQUVNLFNBQVMsUUFBUSxDQUNwQixJQUFXLEVBQ1gsT0FBK0I7SUFFL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFFcEMsSUFBSSxNQUFNLEdBQVEsRUFBRSxDQUFDO0lBQ3JCLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNmLG1DQUFtQztJQUNuQyxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDdkMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN2QjtJQUVELE9BQU8sS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDckIsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDMUM7YUFBTSxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUM1QyxJQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFDeEM7aUJBQU0sSUFBSSxTQUFTLEtBQUssU0FBUyxJQUFJLFNBQVMsS0FBSyxJQUFJLEVBQUU7Z0JBQ3RELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDMUI7U0FDSjtLQUNKO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQUVELFNBQVMsV0FBVyxDQUNoQixHQUFRLEVBQ1IsSUFBTztJQUVQLE9BQU8sT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQztBQUNsRSxDQUFDO0FBRUQsaUVBQWUsR0FBRyxFQUFDO0FBRW5CO0lBQ0ksMEJBQW1CLFFBQXNCO1FBQXRCLGFBQVEsR0FBUixRQUFRLENBQWM7SUFBRyxDQUFDO0lBRTdDLGlDQUFNLEdBQU4sVUFBTyxNQUFlO1FBQ2xCLE9BQU87WUFDSCxNQUFNO2dCQUNGLE9BQU8sTUFBTSxDQUFDO1lBQ2xCLENBQUM7WUFDRCxPQUFPLGdCQUFJLENBQUM7U0FDZixDQUFDO0lBQ04sQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQzs7QUFFRDtJQUNJO0lBQWUsQ0FBQztJQUVoQiw4QkFBTSxHQUFOLFVBQU8sTUFBZTtRQUNsQixPQUFPO1lBQ0gsTUFBTTtnQkFDRixPQUFPLE1BQU0sQ0FBQztZQUNsQixDQUFDO1lBQ0QsT0FBTyxnQkFBSSxDQUFDO1NBQ2YsQ0FBQztJQUNOLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUM7O0FBRUQ7SUFDSSw0QkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUFHLENBQUM7SUFFOUMsbUNBQU0sR0FBTixVQUFPLE1BQWlCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDTCx5QkFBQztBQUFELENBQUM7QUFFRDtJQUNJLDJCQUFvQixTQUFvQjtRQUFwQixjQUFTLEdBQVQsU0FBUyxDQUFXO0lBQUcsQ0FBQztJQUU1QyxrQ0FBTSxHQUFOLFVBQU8sTUFBaUI7UUFDWixhQUFTLEdBQUssSUFBSSxVQUFULENBQVU7UUFDM0IsSUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTFDLE9BQU87WUFDSCxPQUFPO2dCQUNILElBQUksT0FBTyxTQUFTLENBQUMsT0FBTyxLQUFLLFVBQVU7b0JBQ3ZDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDeEIsb0RBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMxQixDQUFDO1NBQ0osQ0FBQztJQUNOLENBQUM7SUFDTCx3QkFBQztBQUFELENBQUM7QUFDRDtJQUNJLDhCQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFHLENBQUM7SUFFbEQsc0NBQU8sR0FBUDtRQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUQscUNBQU0sR0FBTjtRQUNJLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTCwyQkFBQztBQUFELENBQUM7QUFFRDtJQUNJLDRCQUFtQixVQUEyQjtRQUEzQixlQUFVLEdBQVYsVUFBVSxDQUFpQjtJQUFHLENBQUM7SUFFbEQsbUNBQU0sR0FBTixVQUFPLE1BQWU7UUFDVixjQUFVLEdBQUssSUFBSSxXQUFULENBQVU7UUFDNUIsSUFBSSxRQUFRLEdBQXFCLElBQUksQ0FBQztRQUN0QyxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkMsSUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQUs7WUFDdEMsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksb0RBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDekQsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixJQUFJLGlFQUFjLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ3pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3BCLE9BQU87aUJBQ1Y7YUFDSjtZQUNELG9EQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEIsUUFBUSxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPO1lBQ0gsT0FBTztnQkFDSCxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3JCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDaEIsb0RBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMxQixDQUFDO1NBQ0osQ0FBQztJQUNOLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUM7O0FBRUQ7SUFDSSx5QkFBbUIsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtJQUFHLENBQUM7SUFFMUMsOEJBQUksR0FBSixVQUFRLEVBQW9DO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELGdDQUFNLEdBQU4sVUFBTyxNQUFlO1FBQ2xCLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqQyxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksY0FBYyxHQUErQixJQUFJLENBQUM7UUFDdEQsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUU3QixVQUFVLENBQUM7WUFDUCxJQUFJLE1BQU0sSUFBSSxRQUFRO2dCQUFFLE9BQU87WUFFL0IsY0FBYyxHQUFHLE1BQU0sQ0FDbkIsS0FBSyxFQUNMLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUUsQ0FBQyxDQUMvQyxDQUFDO1lBQ0YsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUM7Z0JBQ1gsb0RBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNoQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVSLElBQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJO1lBQ3JDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDZCxJQUFNLFFBQVEsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEMsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU87WUFDSCxNQUFNO2dCQUNGLE9BQU8sS0FBSyxDQUFDO1lBQ2pCLENBQUM7WUFDRCxPQUFPO2dCQUNILFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ2hCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDaEIsY0FBYyxDQUFDLElBQUksQ0FBQyxnREFBVyxDQUFDLENBQUM7WUFDckMsQ0FBQztTQUNKLENBQUM7SUFDTixDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDO0FBRU0sU0FBUyxVQUFVLENBQUMsS0FBWTtJQUNuQyxPQUFPLENBQ0gsS0FBSyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBRyxJQUFLLFdBQUksU0FBUyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUMzRSxDQUFDO0FBQ04sQ0FBQztBQUVELElBQU0sZUFBZSxHQUFjO0lBQy9CLE1BQU0sRUFBTjtRQUNJLE9BQU87WUFDSCxPQUFPLGdCQUFJLENBQUM7U0FDSixDQUFDO0lBQ2pCLENBQUM7Q0FDSixDQUFDO0FBRUssU0FBUyxVQUFVLENBQUMsSUFBUztJQUNoQyxJQUFJLE9BQU8sSUFBSSxLQUFLLFdBQVcsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO1FBQzlDLE9BQU8sZUFBZSxDQUFDO0tBQzFCO1NBQU0sSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQUUsT0FBTyxJQUFJLENBQUM7U0FDcEMsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQUUsT0FBTyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzFELElBQUksWUFBWSxDQUFDLElBQUksQ0FBQztRQUFFLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1RCxJQUFJLE9BQU8sSUFBSSxLQUFLLFVBQVU7UUFBRSxPQUFPLElBQUksQ0FBQztTQUM1QyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQUUsT0FBTyxRQUFRLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQzNELElBQUksU0FBUyxDQUFnQixJQUFJLENBQUM7UUFBRSxPQUFPLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JFLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQztRQUFFLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM5RCxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUM7UUFBRSxPQUFPLElBQUksb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEUsSUFBSSxXQUFXLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQztRQUFFLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVqRSxPQUFPLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BDLENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxLQUFVO0lBQzNCLE9BQU8sS0FBSyxJQUFJLE9BQU8sS0FBSyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUM7QUFDckQsQ0FBQztBQUVELFNBQVMsWUFBWSxDQUFDLEtBQVU7SUFDNUIsT0FBTyxLQUFLLElBQUksT0FBTyxLQUFLLENBQUMsUUFBUSxLQUFLLFVBQVUsQ0FBQztBQUN6RCxDQUFDO0FBRUQsU0FBUyxjQUFjLENBQUMsS0FBVTtJQUM5QixPQUFPLEtBQUssSUFBSSxPQUFPLEtBQUssQ0FBQyxTQUFTLEtBQUssVUFBVSxDQUFDO0FBQzFELENBQUM7QUFFRCxTQUFTLGNBQWMsQ0FBQyxLQUFVO0lBQzlCLE9BQU8sS0FBSyxJQUFJLE9BQU8sS0FBSyxDQUFDLFdBQVcsS0FBSyxVQUFVLENBQUM7QUFDNUQsQ0FBQztBQUVELFNBQVMsU0FBUyxDQUFjLEtBQVU7SUFDdEMsT0FBTyxLQUFLLElBQUksT0FBTyxLQUFLLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQztBQUNyRCxDQUFDO0FBRUQsU0FBUyxVQUFVLENBQUMsS0FBVTtJQUMxQixPQUFPLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLFVBQVUsQ0FBQztBQUNqRCxDQUFDO0FBRUQsU0FBUyxrQkFBa0IsQ0FBQyxJQUFjO0lBQ3RDLE9BQU87UUFDSCxNQUFNLEVBQU4sVUFBTyxNQUFlO1lBQUUsY0FBTztpQkFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO2dCQUFQLDZCQUFPOztZQUMzQixJQUFNLEdBQUcsR0FBRyxJQUFJLGVBQUksSUFBSSxDQUFDLENBQUM7WUFDMUIsSUFBSSxRQUFRLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQy9CLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDekIsSUFBTSxVQUFRLEdBQWMsRUFBRSxDQUFDO2dCQUMvQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDdEMsSUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDckMsSUFBSSxDQUFDLEVBQUU7d0JBQ0gsVUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO3FCQUNuQjtpQkFDSjtnQkFDRCxPQUFPO29CQUNILE9BQU87d0JBQ0gsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7NEJBQ3RDLElBQU0sT0FBTyxHQUFHLFVBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDNUIsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO2dDQUNqQixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7NkJBQ3JCO3lCQUNKO29CQUNMLENBQUM7aUJBQ0osQ0FBQzthQUNMO2lCQUFNO2dCQUNILE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNsQztRQUNMLENBQUM7S0FDSixDQUFDO0FBQ04sQ0FBQztBQUVEO0lBQ0kscUJBQW1CLElBQVksRUFBUyxRQUFxQjtRQUExQyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBYTtJQUFHLENBQUM7SUFFakUsNEJBQU0sR0FBTixVQUFPLE1BQWUsRUFBRSxJQUFnQjtRQUM5QixRQUFJLEdBQUssSUFBSSxLQUFULENBQVU7UUFDcEIsT0FBTyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDO0FBRUQ7SUFDSSx3QkFDVyxLQUF3RDtRQUF4RCxVQUFLLEdBQUwsS0FBSyxDQUFtRDtJQUNoRSxDQUFDO0lBRUosK0JBQU0sR0FBTixVQUFPLE1BQWU7UUFDWixTQUFLLEdBQUssSUFBSSxNQUFULENBQVU7UUFFckIsSUFBSSxvREFBVyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNyQzthQUFNLElBQUksY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzlCLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQztZQUNqQixJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBa0IsQ0FBQyxDQUFDO1lBQ25DLE9BQU8sV0FBVyxDQUFDO1NBQ3RCO2FBQU07WUFDSCxPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckM7SUFDTCxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDO0FBSUQ7SUFDSSxtQkFDVyxJQUFZLEVBQ1osS0FFd0M7UUFIeEMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFVBQUssR0FBTCxLQUFLLENBRW1DO0lBQ2hELENBQUM7SUFFSiwwQkFBTSxHQUFOLFVBQU8sTUFBZTtRQUNkLFNBQWtCLElBQUksRUFBcEIsSUFBSSxZQUFFLEtBQUssV0FBUyxDQUFDO1FBRTNCLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDcEMsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELElBQUksT0FBTyxLQUFLLEtBQUssVUFBVSxFQUFFO1lBQzdCLElBQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksWUFBWTtnQkFBRSxPQUFPLFlBQVksQ0FBQztZQUV0QyxPQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxDQUFDO1lBQzNDLEtBQUssR0FBRyxLQUFLLEVBQUUsQ0FBQztTQUNuQjtRQUVELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN0QixJQUFNLFNBQU8sR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztZQUN4RCxJQUFNLFFBQU0sR0FBRyxrRUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFPLENBQUMsQ0FBQztZQUV2RCxPQUFPO2dCQUNILE9BQU87b0JBQ0gsUUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNyQixTQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3RCLENBQUM7YUFDSixDQUFDO1NBQ0w7YUFBTSxJQUFJLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM5QixJQUFNLElBQUksR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBTSxTQUFPLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDeEQsSUFBTSxRQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFPLENBQUMsQ0FBQztZQUN2QyxPQUFPO2dCQUNILE9BQU87b0JBQ0gsUUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNyQixTQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3RCLENBQUM7YUFDSixDQUFDO1NBQ0w7O1lBQU0sT0FBTyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDO0FBRU0sU0FBUyxNQUFNLENBQ2xCLE1BQTZCLEVBQzdCLFFBQWlDO0lBRWpDLElBQU0sTUFBTSxHQUFZLCtDQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksMkNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQzNFLE9BQU8sV0FBVyxDQUFDLENBQUMsRUFBRSxNQUFNLFVBQUUsUUFBUSxZQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9DLENBQUM7QUFNTSxTQUFTLFdBQVcsQ0FBQyxLQUFrQjtJQUMxQyxJQUFNLFFBQVEsR0FBYyxFQUFFLENBQUM7SUFDL0IsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU3QixPQUFPLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDakIsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDUCxNQUFNO1NBQ1Q7UUFDTyxVQUFNLEdBQWUsSUFBSSxPQUFuQixFQUFFLFFBQVEsR0FBSyxJQUFJLFNBQVQsQ0FBVTtRQUNsQyxJQUFJLFFBQVEsS0FBSyxJQUFJLElBQUksUUFBUSxLQUFLLFNBQVM7WUFBRSxTQUFTO1FBRTFELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN6QixLQUFLLElBQUksR0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEdBQUMsSUFBSSxDQUFDLEVBQUUsR0FBQyxFQUFFLEVBQUU7Z0JBQzNDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLFVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDakQ7WUFDRCxTQUFTO1NBQ1o7YUFBTSxJQUFJLE9BQU8sUUFBUSxLQUFLLFVBQVUsRUFBRTtZQUN2QyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNQLE1BQU07Z0JBQ04sUUFBUSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLGNBQWMsQ0FBQzthQUN4RCxDQUFDLENBQUM7WUFDSCxTQUFTO1NBQ1o7YUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzlCLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLFVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdkQsU0FBUztTQUNaO1FBRUQsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QyxJQUFJLE9BQU8sRUFBRTtZQUNULFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkIsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO2dCQUNSLFlBQVEsR0FBSyxRQUFRLFNBQWIsQ0FBYztnQkFDOUIsSUFBSSxRQUFRLEVBQUU7b0JBQ1YsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUNuQyxJQUFJLFdBQVcsRUFBRTt3QkFDYixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7NEJBQzNDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0NBQ1AsTUFBTSxFQUFFLFdBQVc7Z0NBQ25CLFFBQVEsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDOzZCQUNwQyxDQUFDLENBQUM7eUJBQ047cUJBQ0o7aUJBQ0o7YUFDSjtTQUNKO0tBQ0o7SUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN0QyxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxlQUFlLENBQUMsT0FBTyxDQUFDO1lBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ2pEO0lBRUQsT0FBTyxRQUFRLENBQUM7QUFDcEIsQ0FBQztBQU1ELFNBQVMsZUFBZSxDQUFDLEdBQVE7SUFDN0IsT0FBTyxHQUFHLElBQUksT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssVUFBVSxDQUFDO0FBQ3JELENBQUM7QUFFTSxTQUFTLFVBQVUsQ0FBQyxNQUFlLEVBQUUsUUFBcUI7SUFDN0QsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBRWpCLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMzQyxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNQLE1BQU07WUFDTixRQUFRO1NBQ1gsQ0FBQyxDQUFDO0tBQ047SUFFRCxPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM5QixDQUFDO0FBRUQsU0FBUyxPQUFPLENBQUksR0FBUTtJQUN4QixJQUFNLE1BQU0sR0FBUSxFQUFFLENBQUM7SUFFdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDdkI7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDNWZNLFNBQVMsYUFBYSxDQUFrQixXQUFjO0lBRTNELE9BQU87UUFDTCxTQUFTLEVBQVQsVUFBVSxRQUF3QztZQUNoRCxJQUFNLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFNLENBQUM7WUFDakQsSUFBTSxhQUFhLEdBQXFCLEVBQUUsQ0FBQztvQ0FFbEMsQ0FBQztnQkFDUixJQUFNLElBQUksR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUN4QixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQUM7d0JBQzdCLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTs0QkFDbEIsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDYixJQUFJLEVBQUUsQ0FBQzt5QkFDUjtvQkFDSCxDQUFDLENBQUMsQ0FBQztvQkFDSCxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUM1QjtxQkFBTTtvQkFDTCxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO2lCQUNqQjs7WUFaSCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7d0JBQWxDLENBQUM7YUFhVDtZQUNELElBQUksRUFBRSxDQUFDO1lBRVAsU0FBUyxJQUFJO2dCQUNYLElBQUksT0FBTyxRQUFRLEtBQUssVUFBVTtvQkFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQy9DLElBQUksUUFBUSxDQUFDLElBQUk7b0JBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQyxDQUFDO1lBRUQsT0FBTztnQkFDTCxXQUFXO29CQUNULEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUM3QyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7cUJBQ2hDO2dCQUNILENBQUM7YUFDRixDQUFDO1FBQ0osQ0FBQztLQUNGLENBQUM7QUFDSixDQUFDO0FBRU0sU0FBUyxjQUFjLENBQUMsQ0FBTTtJQUNuQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUTtRQUFFLE9BQU8sS0FBSyxDQUFDO0lBRXRELElBQUksT0FBTyxDQUFDLENBQUMsU0FBUyxLQUFLLFVBQVU7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUVwRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRE0sU0FBUyxXQUFXLENBQUMsT0FBWTtJQUN0QyxJQUFJLE9BQU8sS0FBSyxJQUFJO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFDbkMsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFFOUMsT0FBTyxPQUFPLE9BQU8sQ0FBQyxNQUFNLEtBQUssVUFBVSxDQUFDO0FBQzlDLENBQUM7QUFFTSxTQUFTLGNBQWMsQ0FBQyxPQUFZO0lBQ3pDLElBQUksT0FBTyxLQUFLLElBQUk7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUNuQyxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVE7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUU5QyxPQUFPLE9BQU8sT0FBTyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUM7QUFDNUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEIyQjtBQUNLO0FBQ047QUFDYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hkO0FBQ1U7QUFFVztBQUNxQjtBQVk5RCxTQUFTLFdBQVcsQ0FDekIsTUFBZ0Q7SUFFaEQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUFFLE9BQU8sU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXBELE9BQU8sWUFBWSxDQUFJLE1BQU0sQ0FBQyxDQUFDO0FBQ2pDLENBQUM7QUFFRCxTQUFTLFlBQVksQ0FDbkIsUUFBMEM7SUFFMUMsSUFBSSxRQUFRLEdBQVEsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsSUFBSyxRQUFDLEVBQUQsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2xELElBQUksU0FBUyxHQUFrQixRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3hELElBQU0sU0FBUyxHQUFHLElBQUkseUNBQVUsRUFBNkIsQ0FBQztJQUU5RCxPQUFPO1FBQ0wsSUFBSSxZQUFDLEVBQUU7WUFDTCxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QixDQUFDO1FBQ0QsSUFBSSxNQUFNO1lBQ1IsT0FBTyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQzFCLENBQUM7UUFDRCxHQUFHLEVBQUgsVUFBSSxDQUFrQjtZQUNwQixhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkIsQ0FBQztRQUNELFNBQVMsRUFBVDtZQUFVLGNBQWM7aUJBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztnQkFBZCx5QkFBYzs7WUFDdEIsSUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxxREFBWSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkUsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBVyxDQUFDLENBQUM7UUFDckQsQ0FBQztLQUNGLENBQUM7SUFFRixTQUFTLFlBQVk7UUFDbkIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxQixJQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxNQUFNLEdBQVEsUUFBUSxDQUFDO1FBQzNCLE9BQU8sTUFBTSxFQUFFO1lBQ2IsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUN4QjtRQUNELDZDQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDZixDQUFDO0lBRUQsU0FBUyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDdEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxRQUFRLENBQUksUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzdCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELFNBQVMsVUFBVSxDQUFDLEtBQW9CO1FBQ3RDLE9BQU87WUFDTCxJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUs7U0FDTixDQUFDO0lBQ0osQ0FBQztJQUVELFNBQVMsYUFBYSxDQUFDLEdBQW9CO1FBQ3pDLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDakIsU0FBSyxHQUFhLEdBQUcsTUFBaEIsRUFBRSxNQUFNLEdBQUssR0FBRyxPQUFSLENBQVM7WUFDOUIsSUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN2QyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDakMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ2xDLFNBQVMsQ0FBQyxJQUFJLENBQUMsd0RBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ2hDO2FBQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUN0QixVQUFNLEdBQUssR0FBRyxPQUFSLENBQVM7WUFDdkIsSUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUMvQixJQUFNLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckIsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0QixTQUFTLENBQUMsSUFBSSxDQUFDLHdEQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNoQzthQUFNLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDaEMsSUFBTSxLQUFLLEdBQ1QsT0FBTyxHQUFHLENBQUMsU0FBUyxLQUFLLFFBQVE7Z0JBQy9CLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUztnQkFDZixDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDekMsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO2dCQUNkLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQzdDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2lCQUN4QjthQUNGO1lBQ0QsWUFBWSxFQUFFLENBQUM7WUFDZixTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUN0RDthQUFNLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDdEIsUUFBSSxHQUFTLEdBQUcsS0FBWixFQUFFLEVBQUUsR0FBSyxHQUFHLEdBQVIsQ0FBUztZQUN6QixTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMvQixTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM5QixTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3JCO2FBQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLFFBQVEsRUFBRTtZQUN2QixTQUFLLEdBQUssR0FBRyxNQUFSLENBQVM7WUFDdEIsSUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlCLElBQU0sS0FBSyxHQUFHLDhDQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0IsNkNBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNkO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCxTQUFTLFNBQVMsQ0FBSSxRQUFhO0lBQ2pDLElBQU0sU0FBUyxHQUFHLElBQUkseUNBQVUsRUFBbUIsQ0FBQztJQUVwRCxPQUFPO1FBQ0wsSUFBSSxZQUFDLEVBQUU7WUFDTCxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QixDQUFDO1FBQ0QsSUFBSSxNQUFNO1lBQ1IsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ3pCLENBQUM7UUFDRCxHQUFHLEVBQUgsVUFBSSxNQUEyQjtZQUM3QixJQUFJLDBEQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3RCLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN2QjtpQkFBTTtnQkFDTCxhQUFhLENBQUM7b0JBQ1osSUFBSSxFQUFFLE1BQU07b0JBQ1osTUFBTTtpQkFDUCxDQUFDLENBQUM7YUFDSjtRQUNILENBQUM7UUFDRCxTQUFTLEVBQVQ7WUFBVSxjQUFjO2lCQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7Z0JBQWQseUJBQWM7O1lBQ3RCLElBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMscURBQVksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQVcsQ0FBQyxDQUFDO1FBQ3JELENBQUM7S0FDRixDQUFDO0lBRUYsU0FBUyxhQUFhLENBQUMsR0FBb0I7UUFDekMsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUNqQixTQUFLLEdBQWEsR0FBRyxNQUFoQixFQUFFLE1BQU0sR0FBSyxHQUFHLE9BQVIsQ0FBUztZQUM5QixRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDbEMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNyQjthQUFNLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDdEIsVUFBTSxHQUFLLEdBQUcsT0FBUixDQUFTO1lBQ3ZCLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEIsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNyQjthQUFNLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDaEMsSUFBTSxLQUFLLEdBQ1QsT0FBTyxHQUFHLENBQUMsU0FBUyxLQUFLLFFBQVE7Z0JBQy9CLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUztnQkFDZixDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDeEMsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO2dCQUNkLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzNCO1lBQ0QsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDdEQ7YUFBTSxJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO1lBQ3RCLFFBQUksR0FBUyxHQUFHLEtBQVosRUFBRSxFQUFFLEdBQUssR0FBRyxHQUFSLENBQVM7WUFDekIsSUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNCLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUNuQixTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUVELFNBQVMsVUFBVSxDQUFDLEtBQVU7UUFDNUIsT0FBTztZQUNMLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSztTQUNOLENBQUM7SUFDSixDQUFDO0FBQ0gsQ0FBQztBQUlEO0lBQTBCLDRCQUFRO0lBQ2hDLGtCQUFvQixJQUFTLEVBQVMsS0FBYSxFQUFFLEtBQVM7UUFBOUQsWUFDRSxrQkFBTSxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQ3hCO1FBRm1CLFVBQUksR0FBSixJQUFJLENBQUs7UUFBUyxXQUFLLEdBQUwsS0FBSyxDQUFROztJQUVuRCxDQUFDO0lBSUQseUJBQU0sR0FBTixVQUFPLGtCQUF1QjtRQUN0QixTQUFrQixJQUFJLEVBQXBCLElBQUksWUFBRSxLQUFLLFdBQVMsQ0FBQztRQUM3QixJQUFJLE9BQU8sa0JBQWtCLEtBQUssVUFBVSxFQUFFO1lBQzVDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDN0Q7O1lBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLGtCQUFrQixDQUFDO0lBQzFDLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxDQWJ5Qix5Q0FBSyxHQWE5QjtBQUVELFNBQVMsU0FBUyxDQUFJLEdBQVEsRUFBRSxJQUFZLEVBQUUsRUFBVTtJQUN0RCxJQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNwQixHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUpNLFNBQVMsVUFBVSxDQUN4QixLQUFhLEVBQ2IsUUFBMkI7SUFFM0IsT0FBTztRQUNMLElBQUksRUFBRSxRQUFRO1FBQ2QsS0FBSztRQUNMLFFBQVE7S0FDVCxDQUFDO0FBQ0osQ0FBQztBQUVNLFNBQVMsUUFBUSxDQUFJLE1BQVM7SUFDbkMsT0FBTztRQUNMLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTTtLQUNQLENBQUM7QUFDSixDQUFDO0FBQ00sU0FBUyxVQUFVLENBQUksTUFBUyxFQUFFLEtBQWE7SUFDcEQsT0FBTztRQUNMLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTTtRQUNOLEtBQUs7S0FDTixDQUFDO0FBQ0osQ0FBQztBQUNNLFNBQVMsVUFBVSxDQUN4QixTQUF1QztJQUV2QyxPQUFPO1FBQ0wsSUFBSSxFQUFFLFFBQVE7UUFDZCxTQUFTO0tBQ1YsQ0FBQztBQUNKLENBQUM7QUFFTSxTQUFTLFVBQVUsQ0FBSSxLQUFVO0lBQ3RDLE9BQU87UUFDTCxJQUFJLEVBQUUsT0FBTztRQUNiLEtBQUs7S0FDTixDQUFDO0FBQ0osQ0FBQztBQUlNLFNBQVMsVUFBVSxDQUN4QixDQUFNO0lBRU4sSUFBSSxDQUFDLENBQUMsRUFBRTtRQUNOLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFDRCxJQUFNLElBQUksR0FBK0IsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNoRCxPQUFPLENBQ0wsSUFBSSxLQUFLLFFBQVE7UUFDakIsSUFBSSxLQUFLLE1BQU07UUFDZixJQUFJLEtBQUssUUFBUTtRQUNqQixJQUFJLEtBQUssT0FBTztRQUNoQixJQUFJLEtBQUssTUFBTSxDQUNoQixDQUFDO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRzBCO0FBNEJwQixTQUFTLFlBQVksQ0FBQyxDQUFNO0lBQ2pDLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUTtRQUFFLE9BQU8sS0FBSyxDQUFDO0lBRXhDLElBQUksT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLFVBQVU7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUUvQyxPQUFPLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMzQixDQUFDO0FBTU0sU0FBUyxVQUFVLENBQUMsQ0FBTTtJQUMvQixJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVE7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUV4QyxPQUFPLE9BQU8sQ0FBQyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUM7QUFDdEMsQ0FBQztBQUVNLFNBQVMsY0FBYyxDQUFDLENBQU07SUFDbkMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVE7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUV0RCxJQUFJLE9BQU8sQ0FBQyxDQUFDLFNBQVMsS0FBSyxVQUFVO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFFcEQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBU00sU0FBUyxjQUFjLENBQUksS0FBVTtJQUMxQyxJQUFJLEtBQUssS0FBSyxJQUFJO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFDakMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRO1FBQUUsT0FBTyxPQUFPLEtBQUssQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDO0lBRXZFLE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQVNNLFNBQVMsWUFBWSxDQUFDLGNBQW1CLEVBQUUsS0FBVSxFQUFFLFFBQWE7SUFDekUsSUFBSSxjQUFjLEVBQUU7UUFDbEIsSUFBSSxjQUFjLFlBQVksNENBQWEsRUFBRTtZQUMzQyxPQUFPLGNBQWMsQ0FBQztTQUN2QjtLQUNGO0lBQ0QsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUMxQyxJQUFNLGFBQWEsR0FBRztZQUNwQixNQUFNLEVBQUUsSUFBSTtZQUNaLElBQUksZ0JBQUksQ0FBQztZQUNULEtBQUssRUFBTCxVQUFNLEdBQVE7Z0JBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQixDQUFDO1lBQ0QsUUFBUSxnQkFBSSxDQUFDO1NBQ2QsQ0FBQztRQUNGLE9BQU8sSUFBSSw0Q0FBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQ3pDO0lBQ0QsT0FBTyxJQUFJLDRDQUFhLENBQUMsY0FBYyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztBQUM1RCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckZxQjtBQU90QixJQUFNLG1CQUFtQixHQUFtQjtJQUMxQyxXQUFXLGdCQUFJLENBQUM7Q0FDakIsQ0FBQztBQUNGLElBQU0sVUFBVSxHQUNkLENBQUMsT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxjQUFjLENBQUM7QUFFeEUsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBT2pCO0lBSUUsZUFBbUIsTUFBMEIsRUFBUyxLQUFTO1FBQS9ELGlCQUFtRTtRQUFoRCxXQUFNLEdBQU4sTUFBTSxDQUFvQjtRQUFTLFVBQUssR0FBTCxLQUFLLENBQUk7UUFIeEQsZUFBVSxHQUEyQixFQUFFLENBQUM7UUFTL0MsU0FBSSxHQUFHLFVBQUksT0FBbUI7WUFDcEIsU0FBSyxHQUFLLEtBQUksTUFBVCxDQUFVO1lBQ3ZCLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtnQkFDdkIsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDdkI7WUFFRCxPQUFPO1FBQ1QsQ0FBQyxDQUFDO1FBc0NGLGNBQVMsR0FBRyxVQUFDLGNBQW9CLEVBQUUsS0FBVyxFQUFFLFFBQWM7WUFDNUQsSUFBTSxJQUFJLEdBQUcseURBQVksQ0FBQyxjQUFjLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzNELE9BQU8sS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFtQixDQUFDO1FBQ3RELENBQUMsQ0FBQztJQXREZ0UsQ0FBQztJQUVuRSxnQkFBQyxVQUFVLENBQUMsR0FBWjtRQUNFLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQVdELHdCQUFRLEdBQVIsVUFDRSxRQUF3QyxFQUN4QyxXQUFvQjtRQUVwQixJQUFJLE9BQU8sUUFBUSxLQUFLLFVBQVUsRUFBRTtZQUNsQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsV0FBVyxDQUFtQixDQUFDO1NBQ3pFO1FBRUQsSUFBSSxDQUFDLDJEQUFjLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDN0IsT0FBTyxtQkFBbUIsQ0FBQztTQUM1QjtRQUVELElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtnQkFDNUIsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDM0I7U0FDRjtRQUVELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDL0IsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLFFBQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO1lBQzlCLFNBQVMsQ0FBQyxRQUFNLENBQUMsR0FBRyxRQUFRLENBQUM7U0FDOUI7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDekM7UUFFRCxPQUFPO1lBQ0wsV0FBVztnQkFDVCxJQUFJLFNBQVMsRUFBRTtvQkFDYixJQUFJLEdBQUcsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN0QyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDMUI7WUFDSCxDQUFDO1NBQ2dCLENBQUM7SUFDdEIsQ0FBQztJQU9ELG1CQUFHLEdBQUgsVUFBdUIsWUFBZTtRQUM1QixjQUFVLEdBQUssSUFBSSxXQUFULENBQVU7UUFDNUIsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUMxQixPQUFPLENBQUMsRUFBRSxFQUFFO1lBQ1YsSUFBTSxJQUFJLEdBQVEsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxZQUFZLEVBQUU7Z0JBQzlCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjtJQUNILENBQUM7SUFHRCx3QkFBUSxHQUFSLFVBQTRCLFlBQWU7UUFDekMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwQyxJQUFJLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQztRQUV0QixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzdCLElBQUksU0FBUyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVqRSxJQUFNLFFBQVEsR0FBRyxJQUFJLGNBQWMsQ0FDakMsSUFBSSxFQUNKLFlBQXNCLEVBQ3RCLFNBQVMsQ0FDVixDQUFDO1FBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBZSxDQUFDLENBQUM7UUFDdEMsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVELHdCQUFRLEdBQVI7UUFDRSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3ZCLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUTtZQUFFLE9BQU8sS0FBSyxDQUFDO2FBQ3ZDLElBQUksS0FBSyxLQUFLLEtBQUssQ0FBQyxJQUFJLEtBQUssS0FBSyxJQUFJO1lBQUUsT0FBTyxLQUFLLENBQUM7O1lBQ3JELE9BQU8sS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsb0JBQUksR0FBSixVQUFRLFNBQTRDO1FBQzFDLFNBQUssR0FBSyxJQUFJLE1BQVQsQ0FBVTtRQUN2QixJQUFNLENBQUMsR0FBRyxJQUFJLGFBQWEsQ0FDekIsSUFBSSxFQUNKLFNBQVMsRUFDVCxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FDbkQsQ0FBQztRQUNNLGNBQVUsR0FBSyxJQUFJLFdBQVQsQ0FBVTtRQUM1QixVQUFVLENBQUMsSUFBSSxDQUFDLENBQVEsQ0FBQyxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELHVCQUFPLEdBQVA7UUFDVSxVQUFNLEdBQUssSUFBSSxPQUFULENBQVU7UUFDeEIsSUFBSSxNQUFNLEVBQUU7WUFDRixjQUFVLEdBQUssTUFBTSxXQUFYLENBQVk7WUFDOUIsSUFBSSxVQUFVLEVBQUU7Z0JBQ2QsSUFBSSxHQUFHLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFXLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFO29CQUNaLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUMzQjthQUNGO1NBQ0Y7SUFDSCxDQUFDO0lBQ0gsWUFBQztBQUFELENBQUM7O0FBRUQsdUJBQXVCO0FBQ3ZCLHdDQUF3QztBQUN4Qyx3Q0FBd0M7QUFDeEMsa0RBQWtEO0FBRWxELHdDQUF3QztBQUN4Qyx5RUFBeUU7QUFDekUsSUFBSTtBQUNKLG1GQUFtRjtBQUVuRix5Q0FBeUM7QUFDekMscUNBQXFDO0FBQ3JDLEtBQUs7QUFFTDtJQUF1QyxrQ0FBUTtJQUM3Qyx3QkFDa0IsTUFBbUIsRUFDbkIsSUFBcUIsRUFDckMsS0FBUztRQUhYLFlBS0Usa0JBQU0sTUFBTSxFQUFFLEtBQUssQ0FBQyxTQUNyQjtRQUxpQixZQUFNLEdBQU4sTUFBTSxDQUFhO1FBQ25CLFVBQUksR0FBSixJQUFJLENBQWlCO1FBVXZDLFlBQU0sR0FBRyxVQUFDLE9BQW1CLEVBQUUsV0FBMkI7O1lBQTNCLGdEQUEyQjtZQUN4RCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUksRUFBRSxPQUFPLENBQUM7Z0JBQUUsT0FBTyxLQUFLLENBQUM7WUFFOUMsSUFBSSxXQUFXLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDcEMsSUFBSSxXQUFXLEVBQUU7Z0JBQ2YsV0FBVyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDO2FBQ3JDO2lCQUFNO2dCQUNMLFdBQVcsQ0FBQyxLQUFJLENBQUMsTUFBTSxZQUFJLEdBQUMsS0FBSSxDQUFDLElBQUksSUFBRyxLQUFJLENBQUMsS0FBSyxNQUFHLENBQUM7YUFDdkQ7WUFFRCxJQUFJLFdBQVcsRUFBRTtnQkFDZixJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSSxDQUFDLENBQUM7Z0JBQzNCLElBQUksUUFBTSxHQUFRLEtBQUksQ0FBQztnQkFDdkIsT0FBTyxRQUFNLEVBQUU7b0JBQ2IsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFNLENBQUMsQ0FBQztvQkFDbkIsUUFBTSxHQUFHLFFBQU0sQ0FBQyxNQUFNLENBQUM7aUJBQ3hCO2dCQUNELEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNkO1lBRUQsT0FBTyxJQUFJLENBQUM7WUFFWixTQUFTLFdBQVcsQ0FBQyxNQUFXLEVBQUUsS0FBVTtnQkFDMUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDOUIsQ0FBQztRQUNILENBQUMsQ0FBQzs7SUEvQkYsQ0FBQztJQUVELGtDQUFTLEdBQVQsVUFBVSxXQUFnQjtRQUN4QixPQUFPLFdBQVcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUE2QkQsZ0NBQU8sR0FBUDtRQUNFLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQ0EzQ3NDLEtBQUssR0EyQzNDOztBQUVEO0lBQThCLHlCQUFRO0lBQ3BDLGVBQVksS0FBUyxFQUFTLFdBQTJCO1FBQTNCLGdEQUEyQjtRQUF6RCxZQUNFLGtCQUFNLElBQUksRUFBRSxLQUFLLENBQUMsU0FDbkI7UUFGNkIsaUJBQVcsR0FBWCxXQUFXLENBQWdCO1FBMEJ6RCxZQUFNLEdBQUcsVUFDUCxRQUFvQixFQUNwQixXQUEyQixFQUMzQixPQUFpQjtZQURqQixnREFBMkI7WUFHM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFO2dCQUN6QyxPQUFPLEtBQUssQ0FBQzthQUNkO1lBRUQsSUFBSSxXQUFXLEVBQUU7Z0JBQ2YsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUksQ0FBQyxDQUFDO2dCQUMzQiw4QkFBOEI7Z0JBQzlCLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7Z0JBQ2pCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNkO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUM7O0lBeENGLENBQUM7SUFFRCx5QkFBeUI7SUFDekIsbUNBQW1DO0lBQ25DLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsb0NBQW9DO0lBQ3BDLHdDQUF3QztJQUN4QywrQkFBK0I7SUFDL0IsaUNBQWlDO0lBQ2pDLHdCQUF3QjtJQUN4QixvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsK0JBQStCO0lBQy9CLDJCQUEyQjtJQUMzQixTQUFTO0lBQ1QsTUFBTTtJQUVOLHVCQUFPLEdBQVA7UUFDRSxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBb0JELHVCQUFPLEdBQVA7UUFDRSxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsb0JBQUksR0FBSixVQUFLLE1BQVM7UUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQyxDQXBENkIsS0FBSyxHQW9EbEM7O0FBRU0sU0FBUyxPQUFPLENBQUksSUFBbUI7SUFDNUMsT0FBTyxJQUFJLEtBQUssQ0FBTSxJQUFJLEVBQUU7UUFDMUIsR0FBRyxFQUFILFVBQUksTUFBcUIsRUFBRSxJQUFxQjtZQUM5QyxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxJQUFJLElBQUksSUFBSTtnQkFBRSxPQUFRLElBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUV6RSxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQWUsQ0FBQyxDQUFDO1lBQzlDLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVTtnQkFBRSxPQUFPLE1BQU0sQ0FBQztZQUVoRCxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QixDQUFDO1FBQ0QsR0FBRyxFQUFILFVBQ0UsTUFBZ0IsRUFDaEIsSUFBcUIsRUFDckIsS0FBb0I7WUFFcEIsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQWUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RCxDQUFDO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsaURBQWlEO0lBQ2pELHVDQUF1QztJQUN2QyxJQUFJO0lBRUosZ0RBQWdEO0lBQ2hELGlDQUFpQztJQUNqQyxJQUFJO0FBQ04sQ0FBQztBQUVELGlFQUFlLEtBQUssRUFBQztBQUVyQjtJQUFrQyxpQ0FBUTtJQUN4Qyx1QkFDRSxNQUFrQixFQUNYLFNBQTJDLEVBQ2xELFNBQWE7UUFIZixZQUtFLGtCQUFNLE1BQU0sRUFBRSxTQUFTLENBQUMsU0FDekI7UUFKUSxlQUFTLEdBQVQsU0FBUyxDQUFrQzs7SUFJcEQsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxDQVJpQyxLQUFLLEdBUXRDO0FBRU0sU0FBUyxPQUFPLENBQUksSUFBYztJQUN2QyxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQ2hCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNiLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFFTSxTQUFTLE1BQU0sQ0FBQyxJQUd0QjtJQUNDLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDVCxPQUFPLEVBQUUsQ0FBQztLQUNYO0lBQ0QsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQixJQUFJLFdBQVcsR0FBVyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ3ZDLElBQUksV0FBVyxHQUFXLENBQUMsQ0FBQztJQUM1QixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7SUFFZixPQUFPLFdBQVcsRUFBRSxFQUFFO1FBQ3BCLElBQU0sUUFBTSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsQyxJQUFNLFdBQVcsR0FBRyxRQUFNLENBQUMsS0FBSyxDQUFDO1FBRTNCLGNBQVUsR0FBSyxRQUFNLFdBQVgsQ0FBWTtRQUU1QixJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksT0FBTyxHQUFXLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQzVDLE9BQU8sT0FBTyxFQUFFO2dCQUNkLE9BQU8sR0FBRyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzVCLElBQUksSUFBSSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDL0IsU0FBUztnQkFDVCxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixXQUFXLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUVwQyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUM3QixJQUFNLFVBQVUsR0FDZCxTQUFTLEtBQUssSUFBSTtvQkFDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO29CQUM3QixDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQzdDLElBQUksU0FBUyxLQUFLLFVBQVUsRUFBRTtvQkFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7b0JBQ3hCLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQzFCLFdBQVcsR0FBRyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3JDO2FBQ0Y7U0FDRjtLQUNGO0lBRUQsc0JBQXNCO0lBQ3RCLE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQUVELDBDQUEwQztBQUNuQyxTQUFTLEtBQUssQ0FBQyxLQUFZO0lBQ2hDLElBQUksVUFBVSxHQUFXLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFFdEMsT0FBTyxVQUFVLEVBQUUsRUFBRTtRQUNuQixJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0IsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUVyQixhQUFTLEdBQUssSUFBSSxVQUFULENBQVU7UUFDM0IsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUM3QixPQUFPLENBQUMsRUFBRSxFQUFFO2dCQUNWLElBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMxQjtTQUNGO0tBQ0Y7QUFDSCxDQUFDO0FBRW1CO0FBRXBCO0lBQTBCLDRCQUFRO0lBQ2hDLGtCQUFtQixLQUFRLEVBQVMsS0FBYTtRQUFqRCxZQUNFLGtCQUFNLElBQUksRUFBRSxLQUFLLENBQUMsU0FDbkI7UUFGa0IsV0FBSyxHQUFMLEtBQUssQ0FBRztRQUFTLFdBQUssR0FBTCxLQUFLLENBQVE7UUFJakQsWUFBTSxHQUFHLFVBQUMsUUFBK0IsRUFBRSxXQUEyQjtZQUEzQixnREFBMkI7WUFDcEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFJLEVBQUUsUUFBUSxDQUFDLEVBQUU7Z0JBQ2hDLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFFRCxJQUFJLFdBQVcsRUFBRTtnQkFDZixJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSSxDQUFDLENBQUM7Z0JBQzNCLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7Z0JBQ2pCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDYixPQUFPLElBQUksQ0FBQzthQUNiO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUM7O0lBZEYsQ0FBQztJQWVILGVBQUM7QUFBRCxDQUFDLENBbEJ5QixLQUFLLEdBa0I5QjtBQUVNLFNBQVMsV0FBVyxDQUN6QixNQUFxQixFQUNyQixRQUFvQixFQUNwQixPQUFpQjtJQUVqQixtQkFBbUI7SUFDbkIsSUFBSSxRQUFRLEtBQUssU0FBUztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBRXpDLElBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakMsSUFBSSxXQUFXLEtBQUssUUFBUSxFQUFFO1FBQzVCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7U0FBTSxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUMvQixJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDbkQsbUNBQW1DO1FBQ25DLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN4Qix1RUFBdUU7WUFDdkUsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsT0FBTyxXQUFXLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3BDO0tBQ0Y7U0FBTSxJQUNMLE9BQU8sS0FBSyxJQUFJO1FBQ2hCLENBQUMsQ0FBQyxXQUFXO1FBQ2IsT0FBTyxXQUFXLEtBQUssUUFBUTtRQUMvQixDQUFDLENBQUMsUUFBUTtRQUNWLE9BQU8sUUFBUSxLQUFLLFFBQVEsRUFDNUI7UUFDQSxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDZCxJQUFNLEtBQUssR0FBVSxDQUFDLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQU8sQ0FBQztRQUM5QixPQUFPLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2pCLFNBQTZCLEtBQUssQ0FBQyxHQUFHLEVBQUUsRUFBdkMsYUFBVyxVQUFFLFdBQVcsUUFBZSxDQUFDO1lBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQVcsQ0FBQztnQkFDMUIsaUJBQWlCO2dCQUNqQixTQUFTO1lBRVgsS0FBSyxJQUFJLElBQUksSUFBSSxXQUFXLEVBQUU7Z0JBQzVCLElBQU0sZUFBZSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUMsSUFBTSxlQUFlLEdBQUcsYUFBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMxQyxJQUNFLGVBQWUsS0FBSyxlQUFlO29CQUNuQyxPQUFPLGVBQWUsS0FBSyxVQUFVO29CQUVyQyxTQUFTO2dCQUNYLElBQ0UsZUFBZTtvQkFDZixPQUFPLGVBQWUsS0FBSyxRQUFRO29CQUNuQyxlQUFlO29CQUNmLE9BQU8sZUFBZSxLQUFLLFFBQVEsRUFDbkM7b0JBQ0EsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLGVBQWUsRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDO2lCQUNoRDtxQkFBTTtvQkFDTCxJQUFJLGVBQWUsS0FBSyxlQUFlLEVBQUU7d0JBQ3ZDLGFBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxlQUFlLENBQUM7d0JBQ3BDLENBQUMsR0FBRyxJQUFJLENBQUM7cUJBQ1Y7aUJBQ0Y7YUFDRjtTQUNGO1FBQ0QsT0FBTyxDQUFDLENBQUM7S0FDVjtTQUFNO1FBQ0wsTUFBTSxDQUFDLEtBQUssR0FBRyxRQUFlLENBQUM7UUFDL0IsT0FBTyxJQUFJLENBQUM7S0FDYjtBQUNILENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxFQUFPO0lBQ3pCLE9BQU8sT0FBTyxFQUFFLEtBQUssVUFBVSxDQUFDO0FBQ2xDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pkOEM7QUFDNEI7QUFDSDtBQUNqRDtBQUNJO0FBQ1U7QUFTOUIsU0FBUyxZQUFZLENBQzFCLEtBQStCLEVBQy9CLFFBQWU7SUFFZixPQUFPO1FBQ0wsTUFBTSxFQUFOLFVBQU8sTUFBZTtZQUNwQixJQUFNLFlBQVksR0FBRyxJQUFJLGlEQUFrQixDQUFXLEVBQUUsQ0FBQyxDQUFDO1lBQ2xELFVBQU0sR0FBaUIsS0FBSyxPQUF0QixFQUFFLFVBQVUsR0FBSyxLQUFLLFdBQVYsQ0FBVztZQUNyQyxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFDaEQsSUFBSSxZQUFDLEVBQXdCO3dCQUF2QixXQUFXLFVBQUUsU0FBUztvQkFDMUIsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFFN0IsSUFBSSxPQUFPLFVBQVUsS0FBSyxVQUFVLEVBQUU7d0JBQ3BDLE9BQU87cUJBQ1I7b0JBQ0QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO3dCQUN4RCxVQUFVLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsSUFBSyxRQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBVixDQUFVLENBQUMsQ0FBQyxDQUFDO3FCQUNoRDt5QkFBTTt3QkFDTCxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7cUJBQ2hCO2dCQUNILENBQUM7YUFDRixDQUFDLENBQUM7WUFDSCxPQUFPO2dCQUNMLE9BQU87b0JBQ0wsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUN0QixDQUFDO2FBQ0YsQ0FBQztZQUVGLFNBQVMsV0FBVyxDQUFDLFVBQTZCLEVBQUUsR0FBYztnQkFDeEQsUUFBSSxHQUFhLFVBQVUsS0FBdkIsRUFBRSxNQUFNLEdBQUssVUFBVSxPQUFmLENBQWdCO2dCQUVwQyxJQUFNLE9BQU8sR0FBRztvQkFDZCxHQUFHO29CQUNILE1BQU07b0JBQ04sV0FBVyxZQUFDLEdBQUc7d0JBQ2IsT0FBTyxxREFBWSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDakUsQ0FBQztpQkFDRixDQUFDO2dCQUNGLElBQU0sU0FBUyxHQUFHLHlEQUFRLGlDQUFLLFFBQVEsSUFBRSxJQUFJLElBQUcsVUFBQyxJQUFJO29CQUNuRCxpQkFBVSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUM7Z0JBQXpCLENBQXlCLENBQzFCLENBQUM7Z0JBQ0YsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNuQyxJQUFNLFFBQVEsR0FBRyx1REFBTSxDQUNyQixLQUFLLEVBQ0wsVUFBVSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsTUFBTSxJQUFJLFlBQVksQ0FBQyxDQUNwRCxDQUFDO2dCQUNGLE9BQU87b0JBQ0wsT0FBTzt3QkFDTCxvREFBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUN0QixLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ2xCLENBQUM7aUJBQ0YsQ0FBQztZQUNKLENBQUM7UUFDSCxDQUFDO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxLQUFLLEVBQUUsT0FBb0I7SUFDN0MsT0FBTyxPQUFPLEtBQUssS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQzlELENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxTQUFnQixFQUFFLE1BQVc7SUFDL0MsSUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3QyxJQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1FBQ3hCLE9BQU8sU0FBUyxDQUFDO0tBQ2xCO0lBRUQsT0FBTywyREFBVSxDQUFDLDBDQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLHFEQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RFLENBQUM7QUFFRCxTQUFTLFNBQVMsQ0FBQyxDQUFDO0lBQ2xCLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxJQUFJLElBQUksVUFBVSxDQUFDO0FBQzVDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEYwQjtBQUNVO0FBQytCO0FBQzNCO0FBbUN6QyxTQUFTLGlCQUFpQixDQUFDLEtBQVU7SUFDbkMsT0FBTyxLQUFLLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQztBQUNsQyxDQUFDO0FBQ0QsU0FBUyxPQUFPLENBQUMsS0FBVTtJQUN6QixPQUFPLEtBQUssSUFBSSxPQUFPLEtBQUssQ0FBQyxLQUFLLEtBQUssVUFBVSxDQUFDO0FBQ3BELENBQUM7QUFDRCxTQUFTLGdCQUFnQixDQUFDLEtBQVU7SUFDbEMsT0FBTyxXQUFXLElBQUksS0FBSyxDQUFDO0FBQzlCLENBQUM7QUFpQ0QsU0FBUyxjQUFjLENBQUMsS0FBVTtJQUNoQyxPQUFPLE9BQU8sS0FBSyxLQUFLLFVBQVUsQ0FBQztBQUNyQyxDQUFDO0FBRUQsU0FBUyxXQUFXLENBQUMsWUFBMEI7SUFDN0MsSUFBTSxRQUFRLEdBQUcsbUVBQW1CLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbkQsT0FBTyxVQUFDLElBQVU7UUFDUixVQUFNLEdBQUssWUFBWSxPQUFqQixDQUFrQjtRQUNoQyxJQUFJLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbkMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQy9CLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNWLE9BQU8sSUFBSSxDQUFDO2FBQ2I7aUJBQU0sSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO2dCQUN6QixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQzthQUM5QjtTQUNGO1FBQ0QsT0FBTztZQUNMLEVBQUUsRUFBRSxJQUFJO1lBQ1IsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQztZQUMzQixNQUFNO1NBQ1AsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FDbEIsSUFBa0IsRUFDbEIsSUFBVyxFQUNYLE1BQTRCO0lBRTVCLElBQU0sSUFBSSxHQUFHO1FBQ1gsS0FBSyxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDeEIsSUFBSTtRQUNKLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxNQUFNLENBQUM7S0FDcEMsQ0FBQztJQUVGLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVELFNBQWUsUUFBUSxDQUNyQixhQUFtQixFQUNuQixPQUE0Qjs7Ozs7OztvQkFFNUIsSUFBSSxDQUFDLE9BQU8sRUFBRTt3QkFDWixzQkFBTyxJQUFJLEVBQUM7cUJBQ2I7b0JBRWMscUJBQU0sT0FBTyxDQUFDLGFBQWEsQ0FBQzs7b0JBQXJDLE1BQU0sR0FBRyxTQUE0Qjt5QkFDdkMsT0FBTSxJQUFJLE1BQU0sR0FBaEIsd0JBQWdCO29CQUNsQixJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTt3QkFDbkMsc0JBQU87Z0NBQ0wsSUFBSSxFQUFFLE1BQU07NkJBQ2IsRUFBQztxQkFDSDs7d0JBR0MsSUFBSSxFQUFFLE1BQU07O29CQUNOLHFCQUFNLFFBQVEsQ0FDbEIsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUM5QyxNQUFNLENBQUMsT0FBTyxDQUNmO3dCQUxILHVCQUVFLE9BQUksR0FBRSxTQUdMOzZCQUNEO3dCQUVGLHNCQUFPLElBQUksRUFBQzs7OztDQUVmO0FBb0JNLFNBQVMsYUFBYSxDQUFDLFdBQWlCO0lBQzdDLE9BQU87UUFDTCxNQUFNLEVBQUUsdUNBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUMxQiwrQ0FBTSxDQUFDLGNBQU0sZUFBUSxDQUFDLFFBQVEsRUFBakIsQ0FBaUIsQ0FBQyxFQUMvQixnRUFBdUIsRUFBRSxFQUN6QiwrQ0FBTSxDQUFDLFVBQUMsUUFBZ0IsSUFBSyxlQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUMsSUFBSyxRQUFDLENBQUMsQ0FBQyxFQUFILENBQUcsQ0FBQyxFQUF0QyxDQUFzQyxDQUFDLEVBQ3BFLGtEQUFTLENBQUMsVUFBQyxLQUFLLElBQUssaUJBQVUsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLEVBQTlCLENBQThCLENBQUMsRUFDcEQsK0NBQU0sQ0FBQyxVQUFDLEtBQUssSUFBSyxZQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxDQUNuRDtRQUNELE9BQU8sRUFBUCxVQUFRLElBQWM7WUFDcEIsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMzQixDQUFDO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxLQUFXLEVBQUUsSUFBVTtJQUN6QyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBRW5DLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTTtRQUFFLE9BQU8sS0FBSyxDQUFDO0lBRTdDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3BDLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLO1lBQUUsT0FBTyxLQUFLLENBQUM7S0FDNUQ7SUFFRCxPQUFPLElBQUksQ0FBQztJQUVaLFNBQVMsV0FBVyxDQUFDLElBQVMsRUFBRSxJQUFTO1FBQ3ZDLElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtZQUNqQixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVE7Z0JBQUUsT0FBTyxLQUFLLENBQUM7WUFFM0MsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssSUFBSTtnQkFBRSxPQUFPLEtBQUssQ0FBQztTQUM1QztRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztBQUNILENBQUM7QUFpQk0sU0FBUyxZQUFZLENBQzFCLFNBQW9CLEVBQ3BCLE9BQTRCLEVBQzVCLE9BQWtELEVBQ2xELGFBQTZCO0lBRTdCLElBQU0sWUFBWSxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUM7UUFDMUMsQ0FBQyxDQUFDLE9BQU87UUFDVCxDQUFDLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFaEMsT0FBTztRQUNMLFNBQVM7UUFDVCxhQUFhO1FBQ2IsS0FBSyxFQUFMLFVBQU0sUUFBNkI7WUFDakMsT0FBTyxXQUFXLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FDNUMsZ0RBQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQzFELENBQUM7UUFDSixDQUFDO0tBQ0YsQ0FBQztJQU9GLFNBQVMsYUFBYSxDQUNwQixRQUE2QixFQUM3QixhQUE0QjtRQUU1QixPQUFPLFNBQVMsSUFBSSxDQUNsQixFQUE0QixFQUM1QixJQUFxQjtnQkFEcEIsSUFBSTtZQUdFLGFBQVMsR0FBc0IsSUFBSSxHQUExQixFQUFFLEtBQUssR0FBZSxJQUFJLEdBQW5CLEVBQUUsU0FBUyxHQUFJLElBQUksR0FBUixDQUFTO1lBQzNDLElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNqQyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN0QyxLQUFLLElBQUksQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDekMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDdkI7YUFDRjtZQUNELEdBQUcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFFcEIsT0FBTyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztZQUU1QixTQUFTLE9BQU8sQ0FBQyxHQUFvQixFQUFFLEdBQVc7Z0JBQ2hELElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxJQUFNLEdBQUcsR0FBRyxJQUFJLGtEQUFTLENBQ3ZCLFNBQVMsRUFDVCxHQUFHLENBQUMsV0FBVyxFQUNmLENBQUMsV0FBVyxJQUFJLFdBQVcsQ0FBQyxHQUFHLENBQUM7b0JBQzlCLENBQUMsYUFBYSxJQUFJLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FDdkMsQ0FBQztnQkFDRixPQUFPLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHO29CQUN0QixHQUFHO29CQUNILE1BQU0sRUFBRSxRQUFRLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztpQkFDM0IsQ0FBQztZQUNKLENBQUM7UUFDSCxDQUFDLENBQUM7SUFDSixDQUFDO0FBQ0gsQ0FBQztBQUVELFNBQVMsV0FBVyxDQUNsQixPQUE0QixFQUM1QixXQUFnQztJQUZsQyxpQkFzQkM7SUFsQkMsSUFBSSxJQUFJLEdBQWdDLElBQUksQ0FBQztJQUM3QyxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQ2pCLHFEQUFZLENBQUMsVUFBTyxLQUFLOzs7OztvQkFDakIsS0FDSixvQkFBb0IsQ0FBUSxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBRGxDLFNBQVMsaUJBQUUsY0FBYyxzQkFBRSxPQUFPLGNBQ0M7b0JBQ3BCLHFCQUFNLFFBQVEsQ0FDbkMsY0FBYyxFQUNkLE9BQU8sSUFBSSxXQUFXLENBQ3ZCOztvQkFISyxjQUFjLEdBQUcsU0FHdEI7b0JBRUQsSUFBSSxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQUM7b0JBQ25DLGFBQWEsR0FBRyxNQUFNLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLFFBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBeEIsQ0FBd0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBRXBFLGFBQWEsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUNqRCxzQkFBTyxDQUFDLFNBQVMsRUFBRSxjQUFjLEVBQUUsYUFBYSxDQUFDLEVBQUM7OztTQUNuRCxDQUFDLEVBQ0YsaURBQVEsRUFBRSxDQUNYLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxvQkFBb0IsQ0FDM0IsS0FBZSxFQUNmLFFBQXFDO0lBTXJDLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFDYixPQUFPLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxDQUFDO0tBQ2xDO0lBRU8sUUFBSSxHQUFLLFFBQVEsS0FBYixDQUFjO0lBQzFCLElBQUksaUJBQWlCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFO1FBQzVCLFNBQXlDLG9CQUFvQixDQUNqRSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQ3BDLFFBQVEsQ0FBQyxJQUFJLENBQ2QsRUFITyxTQUFTLGlCQUFFLGNBQWMsc0JBQUUsT0FBTyxhQUd6QyxDQUFDO1FBQ0YsT0FBTztZQUNMLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQztZQUNoQyxjQUFjO1lBQ2QsT0FBTyxFQUFFLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTztTQUNqQyxDQUFDO0tBQ0g7U0FBTTtRQUNMLE9BQU87WUFDTCxjQUFjLEVBQUUsS0FBSztZQUNyQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDdEIsQ0FBQztLQUNIO0FBQ0gsQ0FBQztBQUVELFNBQVMsaUJBQWlCLENBQ3hCLE1BQTZCLEVBQzdCLGFBQXVCO0lBRXZCLElBQUksQ0FBQyxhQUFhLElBQUksYUFBYSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDaEQsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQUksTUFBTSxJQUFJLE1BQU0sSUFBSSxNQUFNLEVBQUU7UUFDdEIsZUFBVyxHQUFLLE1BQU0sWUFBWCxDQUFZO1FBQy9CLElBQUksV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDeEQsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNDLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQUUsT0FBTyxLQUFLLENBQUM7U0FDdkQ7UUFDRCxPQUFPLElBQUksQ0FBQztLQUNiO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBRU0sU0FBUyxrQkFBa0IsQ0FDaEMsTUFBMkI7SUFFM0IsSUFBSSxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDeEIsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUVELElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxJQUFJLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUMxQixPQUFPLFVBQUMsYUFBYTtZQUNuQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQXdCO2dCQUM1QyxXQUFXLEVBQUUsYUFBYTthQUMzQixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7S0FDSDtJQUNELE9BQU8sVUFBQyxhQUF1QjtRQUM3QixLQUFvQixVQUFRLEVBQVIscUJBQVEsRUFBUixzQkFBUSxFQUFSLElBQVEsRUFBRTtZQUF6QixJQUFNLEtBQUs7WUFDZCxJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzNDLElBQUksT0FBTyxFQUFFO2dCQUNILFFBQUksR0FBSyxLQUFLLEtBQVYsQ0FBVztnQkFDdkIsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDakMsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUF3QjtvQkFDNUMsV0FBVztvQkFDWCxJQUFJO29CQUNKLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtvQkFDdEIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO2lCQUN2QixDQUFDLENBQUM7YUFDSjtTQUNGO1FBQ0QsSUFBTSxRQUFRLEdBQWE7WUFDekIsV0FBVyxFQUFFLGFBQWE7U0FDM0IsQ0FBQztRQUNGLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuQyxDQUFDLENBQUM7SUFFRixTQUFTLE9BQU8sQ0FBQyxNQUEyQjtRQUMxQyxJQUFNLE9BQU8sR0FBbUIsRUFBRSxDQUFDO1FBQ25DLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN6QixLQUFvQixVQUFNLEVBQU4saUJBQU0sRUFBTixvQkFBTSxFQUFOLElBQU0sRUFBRTtnQkFBdkIsSUFBTSxLQUFLO2dCQUNkLElBQUksaUJBQWlCLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQzVCLElBQUksZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQzNCLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztxQkFDL0Q7eUJBQU07d0JBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3FCQUNqRTtpQkFDRjtxQkFBTSxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDekIsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDckI7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDM0M7YUFDRjtTQUNGO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztBQUNILENBQUM7QUFFRCxTQUFTLFlBQVksQ0FBQyxHQUFVO0lBQzlCLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0FBQ2pELENBQUM7QUFFRCxTQUFTLEdBQUcsQ0FDVixJQUFtQixFQUNuQixPQUE0RDtJQUU1RCxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFckIsU0FBUyxJQUFJLENBQUMsQ0FBZ0IsRUFBRSxLQUFhO1FBQzNDLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDTixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTztZQUNMLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDO1lBQ2xDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1NBQzlCLENBQUM7SUFDSixDQUFDO0FBQ0gsQ0FBQztBQUVELFNBQVMsSUFBSSxDQUFJLElBQW1CO0lBQ2xDLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDVCxPQUFPLElBQUksQ0FBQztLQUNiO0lBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ2IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3hCO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBRUQsU0FBUyxJQUFJLENBQUksSUFBTyxFQUFFLElBQW1CO0lBQzNDLE9BQU8sRUFBRSxJQUFJLFFBQUUsSUFBSSxRQUFFLENBQUM7QUFDeEIsQ0FBQztBQUVELFNBQVMsTUFBTSxDQUFJLENBQWdCLEVBQUUsQ0FBZ0I7SUFDbkQsSUFBSSxDQUFDLENBQUMsRUFBRTtRQUNOLE9BQU8sQ0FBQyxDQUFDO0tBQ1Y7SUFDRCxPQUFPO1FBQ0wsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJO1FBQ1osSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3JDLENBQUM7QUFDSixDQUFDO0FBR0QsU0FBUyxNQUFNLENBQ2IsUUFBOEIsRUFDOUIsSUFBbUIsRUFDbkIsSUFBTztJQUVQLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDVCxPQUFPLElBQUksQ0FBQztLQUNiO0lBQ0QsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztJQUNiLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNaLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO0tBQ1o7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBRUQsU0FBUyxNQUFNLENBQUksQ0FBZ0I7SUFDakMsSUFBSSxDQUFDLENBQUMsRUFBRTtRQUNOLE9BQU8sQ0FBQyxDQUFDO0tBQ1Y7SUFDRCxPQUFPLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzVCLENBQUM7QUFFRCxTQUFTLE1BQU0sQ0FBSSxJQUFPLEVBQUUsSUFBbUI7SUFDN0MsSUFBSSxDQUFDLElBQUksRUFBRTtRQUNULE9BQU8sRUFBRSxJQUFJLFFBQUUsQ0FBQztLQUNqQjtJQUNELE9BQU87UUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7UUFDZixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDO0tBQzlCLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxHQUFHLENBQ1YsSUFBbUIsRUFDbkIsS0FBb0IsRUFDcEIsT0FBMEI7SUFFMUIsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNuQixPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsT0FBTyxJQUFJLENBQ1QsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUM5QixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUNwQyxDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsS0FBSztJQUNaLE9BQU8sSUFBcUIsQ0FBQztBQUMvQixDQUFDO0FBRUQsU0FBUyxPQUFPLENBQXFDLEVBQU07SUFDekQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQztJQUNwQixPQUFPO1FBQVUsY0FBdUI7YUFBdkIsVUFBdUIsRUFBdkIscUJBQXVCLEVBQXZCLElBQXVCO1lBQXZCLHlCQUF1Qjs7UUFDdEMsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLE1BQU0sQ0FBQztTQUNmO1FBQ0QsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNmLE9BQU8sQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QixDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxrQkFBa0IsQ0FDekIsSUFBa0IsRUFDbEIsU0FBdUM7SUFFdkMsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDO1FBQ2xCLElBQU0sSUFBSSxHQUFHLE9BQU8sU0FBUyxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN2RSxJQUFNLElBQUksR0FBRyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDL0MsT0FBTztZQUNMLElBQUk7WUFDSixPQUFPLEVBQUUsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUN6QyxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPO1FBQ0wsS0FBSyxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDeEIsSUFBSSxJQUFJO1lBQ04sT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDcEIsQ0FBQztRQUNELElBQUksT0FBTztZQUNULE9BQU8sR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDO1FBQ3ZCLENBQUM7S0FDRixDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsZ0JBQWdCLENBQVEsQ0FBa0IsRUFBRSxDQUFrQjtJQUNyRSxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1FBQ3RDLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRTtRQUNyQixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRTtRQUNqRCxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzdDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3pDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7S0FDRjtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFDLFFBQWdCO0lBQzFCLElBQVUsR0FBRyxHQUFLLE1BQU0sQ0FBQyxRQUFRLFNBQXBCLENBQXFCO0lBRXhDLElBQUksR0FBRyxHQUFHLEdBQUcsS0FBSyxRQUFRLEVBQUU7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztLQUNuRDtTQUFNLElBQUksR0FBRyxLQUFLLFFBQVEsRUFBRTtRQUMzQixNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQ2hEO1NBQU07UUFDTCx1Q0FBdUM7S0FDeEM7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN0a0JNLFNBQVMsWUFBWTtJQUN4QixPQUFPO1FBQ0gsUUFBUSxFQUFSLFVBQVMsR0FBZ0I7WUFDckIsT0FBTyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDO0tBQ0osQ0FBQztBQUNOLENBQUM7QUFFRCxTQUFTLGdCQUFnQixDQUFDLFNBQStCO0lBQ3JELElBQU0sTUFBTSxHQUNSLE9BQU8sU0FBUyxLQUFLLFFBQVE7UUFDekIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDcEIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM5QyxPQUFPO1FBQ0gsT0FBTztZQUNILE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDckQsQ0FBQztLQUNKLENBQUM7SUFFRixTQUFTLFdBQVcsQ0FBQyxLQUFVO1FBQzNCLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNkLElBQUksTUFBTSxHQUFzQixLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUUxRCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDcEQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN2QixJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUV6QyxJQUNJLElBQUk7b0JBQ0osTUFBTSxDQUFDLFVBQVUsQ0FBQztvQkFDbEIsUUFBUSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQ2xDO29CQUNFLElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDcEMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNuQiw0QkFBNEI7b0JBQzVCLDBCQUEwQjtvQkFFMUIsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7b0JBQzFCLE9BQU8sS0FBSyxDQUFDO2lCQUNoQjthQUNKO1NBQ0o7SUFDTCxDQUFDO0FBQ0wsQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFDLFFBQWdCO0lBQ3hCLElBQVUsR0FBRyxHQUFLLE1BQU0sQ0FBQyxRQUFRLFNBQXBCLENBQXFCO0lBRXhDLElBQUksR0FBRyxHQUFHLEdBQUcsS0FBSyxRQUFRLEVBQUU7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztLQUNyRDtTQUFNLElBQUksR0FBRyxLQUFLLFFBQVEsRUFBRTtRQUN6QixNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQ2xEO1NBQU07UUFDSCx1Q0FBdUM7S0FDMUM7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNyRE0sU0FBUyxtQkFBbUIsQ0FBQyxZQUEwQjtJQUM1RCx3QkFBd0I7SUFDeEIsSUFBSSxlQUFlLEdBQXFCLEVBQUUsQ0FBQztJQUMzQyxLQUFzQixVQUFZLEVBQVosNkJBQVksRUFBWiwwQkFBWSxFQUFaLElBQVksRUFBRTtRQUEvQixJQUFNLE9BQU87UUFDaEIsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFDL0IsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUMzQzthQUFNLElBQUksT0FBTyxZQUFZLE1BQU0sRUFBRTtZQUNwQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwQzthQUFNO1lBQ0wsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMvQjtLQUNGO0lBQ0QsT0FBTyxlQUFlLENBQUM7QUFDekIsQ0FBQztBQUVELFNBQVMsVUFBVSxDQUFDLE9BQWU7SUFDakMsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQzNCLElBQU0sVUFBUSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEMsT0FBTyxVQUFTLENBQVM7O1lBQ3ZCO2dCQUNFLEdBQUMsVUFBUSxJQUFHLENBQUM7bUJBQ2I7UUFDSixDQUFDLENBQUM7S0FDSDtTQUFNO1FBQ0wsT0FBTyxVQUFTLENBQVM7WUFDdkIsT0FBTyxDQUFDLElBQUksT0FBTyxDQUFDO1FBQ3RCLENBQUMsQ0FBQztLQUNIO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDN0JEO0lBQ0UsbUJBQ1MsU0FBb0IsRUFDcEIsSUFBYyxFQUNkLE1BQWtCO1FBSDNCLGlCQUlJO1FBSEssY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixTQUFJLEdBQUosSUFBSSxDQUFVO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQWUzQixhQUFRLEdBQUc7WUFBQyxjQUFpQjtpQkFBakIsVUFBaUIsRUFBakIscUJBQWlCLEVBQWpCLElBQWlCO2dCQUFqQix5QkFBaUI7O1lBQzNCLElBQU0sS0FBSyxHQUFHLEtBQUksQ0FBQyxLQUFLLE9BQVYsS0FBSSxFQUFVLElBQUksQ0FBQyxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQztJQWpCQyxDQUFDO0lBRUosNkJBQVMsR0FBVDtRQUFVLGNBQWlCO2FBQWpCLFVBQWlCLEVBQWpCLHFCQUFpQixFQUFqQixJQUFpQjtZQUFqQix5QkFBaUI7O1FBQ3pCLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEMsT0FBTyxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQseUJBQUssR0FBTDtRQUFNLGNBQWlCO2FBQWpCLFVBQWlCLEVBQWpCLHFCQUFpQixFQUFqQixJQUFpQjtZQUFqQix5QkFBaUI7O1FBQ3JCLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEMsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQU1ILGdCQUFDO0FBQUQsQ0FBQzs7QUFFRCxTQUFTLFFBQVEsQ0FBQyxHQUFjO0lBQzlCLElBQU0sS0FBSyxHQUFnQixFQUFFLENBQUM7SUFDOUIsT0FBTyxHQUFHLEVBQUU7UUFDVixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0tBQ2xCO0lBRUQsSUFBTSxNQUFNLEdBQWEsRUFBRSxDQUFDO0lBQzVCLE9BQU8sS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUNuQixJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN0QztJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDeUI7QUFDYTtBQUNTO0FBSVI7QUFDSztBQU9mO0FBY2YsU0FBZSxnQkFBZ0IsQ0FBQyxLQUFvQjs7UUFxQi9ELFNBQVMsWUFBWSxDQUFDLElBQWtCO1lBQ3BDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1AsT0FBTyxJQUFJLENBQUM7YUFDZjtZQUVELE9BQU8sQ0FDSCxpREFBQywwREFBUTtnQkFDTCwwREFBSyxLQUFLLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxlQUFlLEVBQUMsSUFBSSxFQUFDLGVBQWU7b0JBQ3hELDJEQUFNLElBQUksRUFBQyxjQUFjLElBQUUsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQVE7b0JBQ3RELDBEQUFLLEtBQUssRUFBQyxHQUFHLEVBQUMsSUFBSSxFQUFDLGFBQWEsR0FBTyxDQUN0QztnQkFDTiwwREFDSSxLQUFLLEVBQUMsSUFBSSxFQUNWLE9BQU8sRUFBQyxlQUFlLEVBQ3ZCLFlBQVksRUFBQyxXQUFXLEVBQ3hCLGNBQWMsRUFBQyw0Q0FBNEMsRUFDM0QsdUJBQXVCLEVBQUMsb0RBQW9ELEVBQzVFLGdCQUFnQixFQUFDLG1CQUFtQixFQUNwQyxZQUFZLEVBQUMseUJBQXlCLEVBQ3RDLGFBQWEsRUFBQyx1QkFBdUIsRUFDckMsZ0JBQWdCLEVBQUMsY0FBYyxFQUMvQixJQUFJLEVBQUMsZ0JBQWdCO29CQUVyQiwwREFDSSxLQUFLLEVBQUMsS0FBSyxFQUNYLElBQUksRUFBQyxhQUFhLEVBQ2xCLFVBQVUsRUFBQyxzRkFBc0Y7d0JBUWpHLGlEQUFDLDBEQUFFLElBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUTs0QkFDMUIsK0RBQU8sSUFBSSxDQUFDLFFBQVEsQ0FBUSxDQUMzQjt3QkFDTCxpREFBQywwREFBRSxJQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUM7NEJBQ3pCLDJEQUFNLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxJQUFJLFVBQVUsQ0FBQyxJQUMzQyxJQUFJLENBQUMsS0FBSyxDQUNSLENBQ04sQ0FRSCxDQUNKLENBQ0MsQ0FDZCxDQUFDO1FBQ04sQ0FBQzs7Ozs7OzswQkF4RUksMERBQVEsUUFDTCw2REFBUSxLQUFLLEVBQUMsMkJBQTJCLHlCQUVoQzs7OzswQkFFSiwyREFBUzsyQkFDTixLQUFLLEVBQUMsVUFBVTtvQkFFTixZQUFPO29CQUNULHFCQUFNLEtBQUssQ0FBQyxTQUFTOzswQkFBckIsU0FBcUI7b0JBQ3JCLHFCQUFNLEtBQUssQ0FBQyxTQUFTO3dCQUZ6QixxQkFBTSw0QkFFRixTQUFxQixHQUN4Qjt3QkFackIsc0JBQU8sQ0FDSCw0QkFJSSw0QkFDSSw2QkFFSSxPQUFJLEdBQ0EsU0FHQyxFQUVMLHNCQUFtQixHQUFFLFlBQVksUUFDbkMsR0FDQyxHQUNBLENBQ2QsRUFBQzs7OztDQXdETDtBQUVELFNBQWUsT0FBTyxDQUFDLFNBQXFCLEVBQUUsU0FBcUI7Ozs7O3dCQUNoRCxxQkFBTSwrREFBVyxFQUFFOztvQkFBNUIsTUFBTSxHQUFHLFNBQW1CO29CQUU1QixJQUFJLEdBQWtDLEVBQUUsQ0FBQztvQkFDekMsTUFBTSxHQUFHLHVEQUFPLENBQ2xCLE1BQU0sRUFDTixVQUFDLENBQUMsSUFBSyxRQUFDLENBQUMsVUFBVSxFQUFaLENBQVksRUFDbkIsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLFFBQUM7d0JBQ1AsR0FBRyxFQUFFLENBQUM7d0JBQ04sUUFBUSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLElBQUssUUFBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQVQsQ0FBUyxDQUFDO3dCQUMxQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7cUJBQ2IsQ0FBQyxFQUpRLENBSVIsQ0FDTCxDQUFDO29CQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQzt3QkFDYixtQkFBWSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFBaEUsQ0FBZ0UsQ0FDbkUsQ0FBQzt3Q0FFUyxLQUFLO3dCQUNaLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7d0JBQzVCLElBQUksSUFBSSxFQUFFOzRCQUNOLElBQU0sZ0JBQWMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUNoQyxVQUFDLENBQUMsSUFBSyxRQUFDLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQTFDLENBQTBDLENBQ3BELENBQUM7NEJBRUYsSUFBSSxDQUFDLElBQUksQ0FBQztnQ0FDTixVQUFVLEVBQUUsS0FBSyxDQUFDLEdBQUc7Z0NBQ3JCLEtBQUssRUFBRSw0REFBUSxDQUFDLElBQUksQ0FBQztnQ0FDckIsTUFBTSxFQUFOLFVBQU8sSUFBWSxFQUFFLE1BQWM7b0NBQy9CLElBQU0sS0FBSyxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsTUFBTSxDQUFDO29DQUNqQyxJQUFNLEdBQUcsR0FBRyxLQUFLLEdBQUcsNERBQVEsQ0FBQztvQ0FFN0IsSUFBTSxNQUFNLEdBQUcsZ0JBQWMsQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDO3dDQUNuQyxvRUFBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQztvQ0FBakMsQ0FBaUMsQ0FDcEMsQ0FBQztvQ0FDRixPQUFPO3dDQUNILFFBQVEsRUFBRSxNQUFNOzZDQUNYLEdBQUcsQ0FBQyxVQUFDLENBQUMsSUFBSyxtQkFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQXJDLENBQXFDLENBQUM7NkNBQ2pELElBQUksQ0FBQyxHQUFHLENBQUM7d0NBQ2QsS0FBSyxFQUFFLENBQUM7d0NBQ1IsTUFBTSxFQUFFLENBQUM7d0NBQ1QsUUFBUSxFQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBQzs0Q0FDakIsb0VBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUM7d0NBQWpDLENBQWlDLENBQ3BDLENBQUMsTUFBTSxHQUFHLENBQUM7cUNBQ0gsQ0FBQztnQ0FDdEIsQ0FBQztnQ0FDRCxPQUFPLEVBQVAsVUFBUSxJQUFrQjtvQ0FDdEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO3dDQUNmLE9BQU8sV0FBVyxDQUFDO3FDQUN0Qjt5Q0FBTTt3Q0FDSCxPQUFPLFdBQVcsQ0FBQztxQ0FDdEI7Z0NBQ0wsQ0FBQzs2QkFDSixDQUFDLENBQUM7eUJBQ047O29CQXJDTCxXQUEwQixFQUFOLGlCQUFNLEVBQU4sb0JBQU0sRUFBTixJQUFNO3dCQUFmLEtBQUs7Z0NBQUwsS0FBSztxQkFzQ2Y7b0JBRUQsc0JBQU8sSUFBSSxFQUFDOzs7O0NBQ2Y7QUFFRCxTQUFTLFlBQVksQ0FBQyxTQUFxQixFQUFFLFVBQWtCO0lBQzNELElBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakMsT0FBTyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQ2pCLElBQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksVUFBVSxFQUFFO1lBQ3BCLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQztTQUN0QjthQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDckIsS0FBZ0IsVUFBVSxFQUFWLE1BQUMsQ0FBQyxRQUFRLEVBQVYsY0FBVSxFQUFWLElBQVUsRUFBRTtnQkFBdkIsSUFBTSxDQUFDO2dCQUNSLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakI7U0FDSjtLQUNKO0FBQ0wsQ0FBQztBQUVELFNBQVMsWUFBWSxDQUFDLENBQVc7SUFDN0IsT0FBTyw0REFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUM3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckx5QjtBQUNhO0FBQ1M7QUFJUjtBQVFWO0FBTWYsU0FBZSxtQkFBbUIsQ0FBQyxLQUFvQjs7Ozs7Ozs7MEJBRTdELDBEQUFRLFFBQ0wsNkRBQVEsS0FBSyxFQUFDLDJCQUEyQiw0QkFFaEM7Ozs7MEJBRUosMkRBQVM7MkJBQ04sS0FBSyxFQUFDLFVBQVU7b0JBQ0osWUFBTztvQkFBQyxxQkFBTSxLQUFLLENBQUMsU0FBUzt3QkFBbkMscUJBQU0sa0JBQVEsU0FBcUIsRUFBQzt3QkFSMUQsc0JBQU8sQ0FDSCw0QkFJSSw0QkFDSSw2QkFFSSxPQUFJLEdBQUUsU0FBb0MsRUFDMUMsc0JBQW1CLEdBQUUsVUFBQyxJQUFJO29DQUN0QixJQUFJLENBQUMsSUFBSSxFQUFFO3dDQUNQLE9BQU8sSUFBSSxDQUFDO3FDQUNmO29DQUNELE9BQU8sQ0FDSCxpREFBQywwREFBUTt3Q0FDTDs7NENBQVUsSUFBSSxDQUFDLE1BQU0sQ0FBUTt3Q0FDN0IsaURBQUMsMERBQUUsSUFBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsTUFBTTs0Q0FDdEMsMkRBQU0sS0FBSyxFQUFDLDRCQUE0QixJQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQ3ZCLENBQ04sQ0FDRSxDQUNkLENBQUM7Z0NBQ04sQ0FBQyxRQUNILEdBQ0MsR0FDQSxDQUNkLEVBQUM7Ozs7Q0FDTDtBQUVELFNBQWUsT0FBTyxDQUFDLFNBQXFCOztRQWV4QyxTQUFTLEtBQUssQ0FBQyxHQUFhO1lBQ3hCLElBQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDLElBQUssUUFBQyxDQUFDLFVBQVUsS0FBSyxHQUFHLENBQUMsRUFBRSxFQUF2QixDQUF1QixDQUFDLENBQUM7WUFDckUsSUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsSUFBSyxRQUFDLENBQUMsVUFBVSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEVBQXZCLENBQXVCLENBQUMsQ0FBQztZQUNwRSxJQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDLElBQUssUUFBQyxJQUFJLElBQUksRUFBVCxDQUFTLENBQUMsQ0FBQztZQUNsRSxJQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLGNBQWMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUNwRCxPQUFPLElBQUksQ0FBQzthQUNmO1lBRUQsT0FBTztnQkFDSCxVQUFVLEVBQUUsR0FBRyxDQUFDLEVBQUU7Z0JBQ2xCLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSTtnQkFDZixRQUFRO2dCQUNSLE1BQU0sRUFBTixVQUFPLElBQVksRUFBRSxNQUFjO29CQUMvQixJQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQztvQkFDakMsSUFBTSxHQUFHLEdBQUcsS0FBSyxHQUFHLDREQUFRLENBQUM7b0JBRTdCLElBQU0sSUFBSSxHQUFhO3dCQUNuQixNQUFNLEVBQUUsa0JBQWtCLENBQUMsY0FBYyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUM7d0JBQ3RELE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxjQUFjLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQztxQkFDekQsQ0FBQztvQkFFRixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO3dCQUNoQyxPQUFPLElBQUksQ0FBQztxQkFDZjtvQkFFRCxPQUFPLElBQUksQ0FBQztnQkFDaEIsQ0FBQztnQkFDRCxPQUFPLFlBQUMsSUFBSTtvQkFDUixJQUFJLENBQUMsSUFBSSxFQUFFO3dCQUNQLE9BQU8sSUFBSSxDQUFDO3FCQUNmO29CQUNPLFVBQU0sR0FBSyxJQUFJLE9BQVQsQ0FBVTtvQkFDeEIsSUFBSSxNQUFNLEVBQUU7d0JBQ1IsT0FBTyxrQkFBZ0IsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQUcsQ0FBQztxQkFDckQ7b0JBRUQsT0FBTyxJQUFJLENBQUM7Z0JBQ2hCLENBQUM7YUFDSixDQUFDO1FBQ04sQ0FBQzs7Ozt3QkFyRGMscUJBQU0sK0RBQVcsRUFBRTs7b0JBQTVCLE1BQU0sR0FBRyxTQUFtQjtvQkFDbEIscUJBQU0sZ0VBQVksRUFBRTs7b0JBQTlCLE9BQU8sR0FBRyxTQUFvQjtvQkFDOUIsSUFBSSxHQUE4QixFQUFFLENBQUM7b0JBRTNDLEtBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTt3QkFDakMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDbkIsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDdkIsSUFBSSxHQUFHLEVBQUU7NEJBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzt5QkFDbEI7cUJBQ0o7b0JBRUQsc0JBQU8sSUFBSSxFQUFDOzs7O0NBMENmO0FBRU0sU0FBUyxrQkFBa0IsQ0FDOUIsY0FBZ0MsRUFDaEMsS0FBYSxFQUNiLEdBQVc7SUFFWCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7SUFFZCxLQUFpQixVQUFjLEVBQWQsaUNBQWMsRUFBZCw0QkFBYyxFQUFkLElBQWMsRUFBRTtRQUE1QixJQUFNLEVBQUU7UUFDVCxJQUFJLENBQUMsNkRBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUM7WUFBRSxTQUFTO1FBQ2xELEtBQUssRUFBRSxDQUFDO0tBQ1g7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBRU0sU0FBUyxrQkFBa0IsQ0FDOUIsTUFBbUIsRUFDbkIsU0FBaUIsRUFDakIsT0FBZTtJQUVmLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNmLElBQUksTUFBTSxFQUFFO1FBQ1IsSUFBTSxVQUFVLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFDLElBQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxLQUFLLElBQUksQ0FBQyxHQUFHLFVBQVUsRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLElBQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsNERBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxHQUFHLE1BQU0sRUFBRTtnQkFDWixNQUFNLEdBQUcsQ0FBQyxDQUFDO2FBQ2Q7U0FDSjtLQUNKO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQUVELFNBQVMsV0FBVyxDQUFDLENBQVM7SUFDMUIsSUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsNERBQVEsQ0FBQyxDQUFDO0FBQy9DLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSnlCO0FBQ3NCO0FBQzBCO0FBQ1o7QUFXL0MsU0FBZSxjQUFjLENBQUMsS0FBb0I7Ozs7Ozs7OzBCQUV4RCwwREFBUSxRQUNMLDZEQUFRLEtBQUssRUFBQywyQkFBMkI7NEJBQ3JDLDREQUFPLElBQUksRUFBQyxNQUFNLEdBQUc7NEJBQ3JCLDZEQUNJLEtBQUssRUFBQywrQkFBK0IsRUFDckMsS0FBSyxFQUFDLDJCQUEyQixpQkFHNUI7NEJBQ1QsNkRBQ0ksS0FBSyxFQUFDLGtEQUFrRCxFQUN4RCxLQUFLLEVBQUMsMEJBQTBCO2dDQUVoQywyREFBTSxLQUFLLEVBQUMsb0JBQW9CLEdBQVE7Z0NBQ3hDLHdEQUNJLEtBQUssRUFBQyxpQ0FBaUMsaUJBQzNCLE1BQU0sZUFHbEI7Z0NBQ0osMkRBQU0sS0FBSyxFQUFDLG1CQUFtQixrQkFBbUIsQ0FDN0MsQ0FDSjs7OzswQkFFSiwyREFBUzsyQkFDTixLQUFLLEVBQUMsVUFBVTtvQkFDSixZQUFPO29CQUFDLHFCQUFNLEtBQUssQ0FBQyxTQUFTO3dCQUFuQyxxQkFBTSxrQkFBUSxTQUFxQixFQUFDO3dCQTNCMUQsc0JBQU8sQ0FDSCw0QkF1QkksNEJBQ0ksNkJBRUksT0FBSSxHQUFFLFNBQW9DLEVBQzFDLHNCQUFtQixHQUFFLFVBQUMsSUFBSTtvQ0FDdEIsT0FBTyxDQUNILGlEQUFDLDBEQUFRO3dDQUNKLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTTt3Q0FDcEIsMkRBQU0sS0FBSyxFQUFDLG9DQUFvQyxJQUMzQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQ2YsQ0FDQSxDQUNkLENBQUM7Z0NBQ04sQ0FBQyxRQUNILEdBQ0MsR0FDQSxDQUNkLEVBQUM7Ozs7Q0FDTDtBQUVELFNBQWUsT0FBTyxDQUFDLFNBQXFCOztRQVV4QyxTQUFTLEtBQUssQ0FBQyxHQUFhO1lBQ3hCLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLElBQUssUUFBQyxDQUFDLFVBQVUsS0FBSyxHQUFHLENBQUMsRUFBRSxFQUF2QixDQUF1QixDQUFDLENBQUM7WUFDNUQsT0FBTztnQkFDSCxVQUFVLEVBQUUsR0FBRyxDQUFDLEVBQUU7Z0JBQ2xCLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSTtnQkFDZixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUNqQyxNQUFNLEVBQU4sVUFBTyxJQUFZLEVBQUUsTUFBYztvQkFDL0IsSUFBSSxDQUFDLE1BQU0sRUFBRTt3QkFDVCxPQUFPLElBQUksQ0FBQztxQkFDZjtvQkFDRCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUUsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDakQsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxLQUFLLEVBQUU7d0JBQ1IsT0FBTyxJQUFJLENBQUM7cUJBQ2Y7b0JBQ0QsT0FBTzt3QkFDSCxNQUFNLEVBQUUsS0FBSzt3QkFDYixRQUFRLEVBQUUsS0FBSyxHQUFHLENBQUM7cUJBQ3RCLENBQUM7Z0JBQ04sQ0FBQztnQkFDRCxPQUFPLFlBQUMsSUFBSTtvQkFDUixJQUFJLENBQUMsSUFBSSxFQUFFO3dCQUNQLE9BQU8sSUFBSSxDQUFDO3FCQUNmO29CQUNPLFVBQU0sR0FBZSxJQUFJLE9BQW5CLEVBQUUsUUFBUSxHQUFLLElBQUksU0FBVCxDQUFVO29CQUNsQyxJQUFJLE1BQU0sRUFBRTt3QkFDUixJQUFJLFFBQVEsRUFBRTs0QkFDVixJQUFNLEtBQUssR0FBRyxNQUFNLEdBQUcsUUFBUSxDQUFDOzRCQUNoQyxJQUFJLEtBQUssRUFBRTtnQ0FDUCxPQUFPLGtCQUFnQixJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBRyxDQUFDOzZCQUNwRDtpQ0FBTTtnQ0FDSCxPQUFPLG1CQUFtQixDQUFDOzZCQUM5Qjt5QkFDSjt3QkFDRCxPQUFPLHFCQUFxQixDQUFDO3FCQUNoQzt5QkFBTSxJQUFJLFFBQVEsRUFBRTt3QkFDakIsT0FBTyxrQkFBZ0IsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQUcsQ0FBQztxQkFDdkQ7b0JBRUQsT0FBTyxJQUFJLENBQUM7Z0JBQ2hCLENBQUM7YUFDSixDQUFDO1FBQ04sQ0FBQzs7Ozt3QkFuRGUscUJBQU0sZ0VBQVksRUFBRTs7b0JBQTlCLE9BQU8sR0FBRyxTQUFvQjtvQkFDOUIsSUFBSSxHQUFnQyxFQUFFLENBQUM7b0JBQzdDLEtBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTt3QkFDakMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDekI7b0JBRUQsc0JBQU8sSUFBSSxFQUFDOzs7O0NBNkNmO0FBRUQsU0FBUyxXQUFXLENBQUMsSUFBZ0I7SUFDakMsSUFBSSxDQUFDLElBQUksRUFBRTtRQUNQLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFFTyxVQUFNLEdBQWUsSUFBSSxPQUFuQixFQUFFLFFBQVEsR0FBSyxJQUFJLFNBQVQsQ0FBVTtJQUNsQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsUUFBUSxFQUFFO1FBQ3RCLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFFRCxJQUFNLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3hELE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFJLEtBQUssTUFBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDdkMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SHlCO0FBQ21CO0FBRWI7QUFDYztBQUNIO0FBQ0w7QUFDVTtBQUNUO0FBQ0k7QUFDMEI7QUFDdEI7QUFFL0MsU0FBUyxHQUFHO0lBQ1YsSUFBTSxTQUFTLEdBQUcsa0VBQWMsRUFBRSxDQUFDO0lBQ25DLElBQU0sU0FBUyxHQUFHLGtFQUFjLEVBQUUsQ0FBQztJQUVuQyxPQUFPO1FBQ0w7WUFDRSxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDakIsU0FBUyxFQUFFLGNBQU0sd0RBQUMsNkNBQWMsSUFBQyxTQUFTLEVBQUUsU0FBUyxHQUFJLEVBQXhDLENBQXdDO1NBQzFEO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsQ0FBQyxjQUFjLENBQUM7WUFDdEIsU0FBUyxFQUFFLGNBQU0sd0RBQUMsa0RBQWtCLElBQUMsU0FBUyxFQUFFLFNBQVMsR0FBSSxFQUE1QyxDQUE0QztTQUM5RDtRQUNEO1lBQ0UsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ2hCLFNBQVMsRUFBRSxjQUFNLHdEQUFDLDRDQUFjLElBQUMsU0FBUyxFQUFFLFNBQVMsR0FBSSxFQUF4QyxDQUF3QztTQUMxRDtRQUNEO1lBQ0UsSUFBSSxFQUFFLEVBQUU7WUFDUixTQUFTLEVBQUUsY0FBTSxRQUNmLGlEQUFDLCtDQUFnQixJQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsR0FBSSxDQUNqRSxFQUZnQixDQUVoQjtTQUNGO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFFTSxTQUFTLGNBQWM7SUFDNUIsT0FBTztRQUNMLElBQUksRUFBSixVQUFLLE9BQW9CO1lBQ3ZCLElBQU0sWUFBWSxHQUFHLElBQUksNkNBQUssQ0FBVyxFQUFFLENBQUMsQ0FBQztZQUM3QyxPQUFPLENBQ0wsaURBQUMseUNBQVU7Z0JBQ1QsMERBQUssS0FBSyxFQUFDLHNCQUFzQjtvQkFDL0IsNkRBQVEsS0FBSyxFQUFDLG1CQUFtQjt3QkFDL0IsaURBQUMsd0RBQU0sSUFBQyxRQUFRLEVBQUUsWUFBWSxHQUFJLENBQzNCO29CQUNULGlEQUFDLHVEQUFZLElBQ1gsVUFBVSxFQUFFLFVBQVUsRUFDdEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsRUFDbEMsTUFBTSxFQUFFLGlEQUFDLHlEQUFPLE9BQUcsR0FDbkIsQ0FDRSxDQUNLLENBQ2QsQ0FBQztZQUVGLFNBQVMsVUFBVSxDQUFDLEtBQWlCO2dCQUNuQyxJQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLElBQUksS0FBSyxFQUFFO29CQUNULFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQzFCO1lBQ0gsQ0FBQztRQUNILENBQUM7S0FDRixDQUFDO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEV5QztBQWtCbkMsU0FBUyxTQUFTLENBQUMsRUFBWSxFQUFFLEtBQWEsRUFBRSxHQUFXO0lBQzlELE9BQU8sRUFBRSxDQUFDLFNBQVMsR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDcEQsQ0FBQztBQWdDTSxTQUFTLFFBQVEsQ0FBQyxDQUFXO0lBQ2hDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRTtRQUNuQyxPQUFPLElBQUksQ0FBQztLQUNmO0lBRUQsT0FBTyxDQUFDLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDO0FBQzFDLENBQUM7QUFFTSxTQUFTLFdBQVc7SUFDdkIsT0FBTyxnREFBUyxDQUFDLDJCQUEyQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxJQUFLLFFBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBUixDQUFRLENBQUMsQ0FBQztBQUN4RSxDQUFDO0FBRU0sU0FBUyxZQUFZO0lBQ3hCLE9BQU8sZ0RBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsSUFBSyxRQUFDLENBQUMsSUFBSSxFQUFFLEVBQVIsQ0FBUSxDQUFDLENBQUM7QUFDaEUsQ0FBQztBQUVNLFNBQVMsY0FBYztJQUMxQixPQUFPLGdEQUFTLENBQUMscUJBQXFCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLElBQUssUUFBQyxDQUFDLElBQUksRUFBRSxFQUFSLENBQVEsQ0FBQyxDQUFDO0FBQ2xFLENBQUM7QUFFTSxTQUFTLGNBQWM7SUFDMUIsT0FBTyxnREFBUyxDQUFDLHFCQUFxQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxJQUFLLFFBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBUixDQUFRLENBQUMsQ0FBQztBQUNsRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRXlCO0FBQ2U7QUFDRjtBQUNTO0FBS1I7QUFDRTtBQUNjO0FBQ1M7QUFDM0M7QUFNUCxTQUFTLGNBQWMsQ0FBQyxLQUFvQjtJQUN6RCxPQUFPO1FBQ0MsSUFBSTs7Ozs7Ozs7a0NBRUwsMERBQVEsUUFDUCw2REFBUSxLQUFLLEVBQUMsMkJBQTJCLHlCQUE0Qjs7OztrQ0FFbEUsMkRBQVM7bUNBQ1IsS0FBSyxFQUFDLE9BQU87NEJBQ0QsWUFBTzs0QkFBQyxxQkFBTSxLQUFLLENBQUMsU0FBUztnQ0FBbkMscUJBQU0sa0JBQVEsU0FBcUIsRUFBQztnQ0FObEQsc0JBQU8sQ0FDTCw0QkFFRSw0QkFDRSw2QkFFRSxPQUFJLEdBQUUsU0FBb0MsRUFDMUMsc0JBQW1CLEdBQUUsaUJBQWlCLFFBQ3RDLEdBQ0csR0FDRSxDQUNaLEVBQUM7Ozs7U0FDSDtLQUNGLENBQUM7SUFFRixTQUFTLGlCQUFpQixDQUN4QixJQUFvQixFQUNwQixHQUE2QjtRQUU3QixJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDaEIsT0FBTyxpREFBQywyREFBRyxJQUFDLEtBQUssRUFBQyxnQkFBZ0IsR0FBRyxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQ25DLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxJQUFNLFNBQVMsR0FBRztZQUNoQixJQUFJO1lBQ0osSUFBSSxDQUFDLFNBQVMsSUFBSSxHQUFHO1lBQ3JCLElBQUksQ0FBQyxNQUFNLElBQUksUUFBUTtZQUN2QixJQUFJLENBQUMsV0FBVyxJQUFJLGFBQWE7U0FDbEMsQ0FBQztRQUNGLE9BQU8sQ0FDTCwwREFDRSxLQUFLLEVBQUUsU0FBUyxFQUNoQixVQUFVLEVBQUMsWUFBWSxFQUN2QixLQUFLLEVBQUUsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJO1lBRWpELDBEQUFLLEtBQUssRUFBQyxLQUFLO2dCQUNkLCtEQUFPLElBQUksQ0FBQyxTQUFTLENBQVE7Z0JBQzdCLDJEQUFNLEtBQUssRUFBQyxPQUFPLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxjQUFjLEVBQUMsYUFBYSxRQUV4RDtnQkFDUCxpREFBQywwREFBRSxJQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU07b0JBQzFCLDJEQUFNLEtBQUssRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLFVBQVUsUUFFbkMsQ0FDSixDQUNELENBQ0YsQ0FDUCxDQUFDO0lBQ0osQ0FBQztBQUNILENBQUM7QUFFRCxTQUFlLE9BQU8sQ0FDcEIsU0FBcUI7O1FBeUJyQixTQUFTLEtBQUssQ0FBQyxVQUF3QjtZQUNyQyxJQUFNLFFBQVEsR0FBK0IsRUFBRSxDQUFDO1lBRWhELElBQU0sU0FBUyxHQUFHLHVEQUFPLENBQ3ZCLFVBQVUsQ0FBQyxLQUFLLEVBQ2hCLFVBQUMsQ0FBQyxJQUFLLG1FQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQWpDLENBQWlDLENBQ3pDLENBQUM7WUFFRixTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxRQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQTFCLENBQTBCLENBQUMsQ0FBQztvQ0FFMUMsUUFBUTtnQkFDakIsUUFBUSxDQUFDLElBQUksQ0FBQztvQkFDWixVQUFVLEVBQUUsUUFBUSxDQUFDLEdBQUc7b0JBQ3hCLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRztvQkFDbkIsTUFBTSxFQUFOLFVBQU8sQ0FBUyxFQUFFLENBQVM7d0JBQ3pCLElBQU0sS0FBSyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO3dCQUN6QixJQUFNLEdBQUcsR0FBRyxLQUFLLEdBQUcsNERBQVEsQ0FBQzt3QkFFN0IsS0FBa0IsVUFBYyxFQUFkLGFBQVEsQ0FBQyxLQUFLLEVBQWQsY0FBYyxFQUFkLElBQWMsRUFBRTs0QkFBN0IsSUFBTSxHQUFHOzRCQUNaLElBQ0UsR0FBRyxDQUFDLFFBQVEsQ0FBQyxTQUFTLElBQUksR0FBRztnQ0FDN0IsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksS0FBSyxFQUM3QjtnQ0FDQSxTQUFTOzZCQUNWOzRCQUNELElBQU0sR0FBRyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7NEJBQ3hDLElBQUksR0FBRyxFQUFFO2dDQUNQLE9BQU87b0NBQ0wsU0FBUyxFQUFFLEdBQUcsQ0FBQyxTQUFTO29DQUN4QixNQUFNLEVBQUUsS0FBSztvQ0FDYixPQUFPLEVBQUUsR0FBRyxDQUFDLFlBQVk7b0NBQ3pCLFdBQVcsRUFBRSxLQUFLO2lDQUNuQixDQUFDOzZCQUNIO3lCQUNGO3dCQUNELE9BQU8sSUFBSSxDQUFDO29CQUNkLENBQUM7aUJBQ0YsQ0FBQyxDQUFDOztZQTNCTCxLQUF1QixVQUFTLEVBQVQsdUJBQVMsRUFBVCx1QkFBUyxFQUFULElBQVM7Z0JBQTNCLElBQU0sUUFBUTt3QkFBUixRQUFRO2FBNEJsQjtZQUVELE9BQU87Z0JBQ0wsVUFBVSxFQUFFLFVBQVUsQ0FBQyxHQUFHO2dCQUMxQixPQUFPO29CQUNMLE9BQU8sSUFBSSxDQUFDO2dCQUNkLENBQUM7Z0JBQ0QsUUFBUTtnQkFDUixLQUFLLEVBQUUsVUFBVSxDQUFDLEdBQUc7Z0JBQ3JCLE1BQU07b0JBQ0osT0FBTyxFQUFFLENBQUM7Z0JBQ1osQ0FBQzthQUNGLENBQUM7UUFDSixDQUFDOzs7O3dCQTFFdUIscUJBQU0sZ0RBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUM7d0JBQ2xFLFFBQUMsQ0FBQyxJQUFJLEVBQUU7b0JBQVIsQ0FBUSxDQUNUOztvQkFGSyxNQUFNLEdBQVksU0FFdkI7b0JBRUssV0FBVyxHQUErQixFQUFFLENBQUM7b0JBQ25ELFdBQTJCLEVBQVQsdUJBQVMsRUFBVCx1QkFBUyxFQUFULElBQVMsRUFBRTt3QkFBbEIsR0FBRzt3QkFDWixXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztxQkFDM0I7b0JBRUssSUFBSSxHQUFvQyxFQUFFLENBQUM7b0JBRTNDLFdBQVcsR0FBbUIsdURBQU8sQ0FBQyxNQUFNLEVBQUUsVUFBQyxDQUFDLElBQUssUUFBQyxDQUFDLGVBQWUsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO29CQUM5RSxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxRQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQTFCLENBQTBCLENBQUMsQ0FBQztvQkFFdkQsV0FBb0MsRUFBWCwyQkFBVyxFQUFYLHlCQUFXLEVBQVgsSUFBVyxFQUFFO3dCQUEzQixVQUFVO3dCQUNiLEdBQUcsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQzlCLElBQUksR0FBRyxFQUFFOzRCQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7eUJBQ2hCO3FCQUNGO29CQUVELHNCQUFPLElBQUksRUFBQzs7OztDQXNEYjtBQVVELFNBQVMsV0FBVztJQUNsQixJQUFNLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQztJQUMvQixJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFDakIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMxQixNQUFNLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzNCO0lBQ0QsT0FBTyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxHQUFXO0lBQzdCLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRCxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0t5QjtBQUVNO0FBQ3NCO0FBQ0Y7QUFFN0MsU0FBUyxTQUFTO0lBQ3ZCLE9BQU87UUFDTCxJQUFJLEVBQUosVUFBSyxPQUFvQjtZQUN2QixPQUFPLENBQ0wsaURBQUMseUNBQVU7Z0JBQ1QsMERBQUssS0FBSyxFQUFDLHNCQUFzQjtvQkFDL0IseUVBQXNCO29CQUN0Qjt3QkFDRSwyREFBTSxLQUFLLEVBQUMsWUFBWTs0QkFDdEIsaURBQUMsMkRBQVMsSUFBQyxLQUFLLEVBQUMsTUFBTSxHQUFHLENBQ3JCO3dCQUNQLGlEQUFDLDREQUFVLElBQUMsS0FBSyxFQUFDLFVBQVUsR0FBRyxDQUMxQixDQUNILENBQ0ssQ0FDZCxDQUFDO1FBQ0osQ0FBQztLQUNGLENBQUM7QUFDSixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QjZCO0FBRWtCO0FBQ0g7QUFDSjtBQUNJO0FBQ1E7QUFDVDtBQUNYO0FBQ047QUFDVTtBQUNhO0FBTTNCO0FBRUQ7QUFDNkI7QUFDWDtBQUNJO0FBRVc7QUFDYjtBQUUxQyxTQUFTLE1BQU07SUFDYixPQUFPLENBQ0wseURBQVEsS0FBSyxFQUFDLHlCQUF5QixFQUFDLEVBQUUsRUFBQyxTQUFTO1FBQ2xELHNEQUFLLEtBQUssRUFBQyxzQkFBc0I7WUFDL0IsMERBQVMsS0FBSyxFQUFDLGdFQUFnRTtnQkFDN0UseURBQVEsS0FBSyxFQUFDLGlFQUFpRSxXQUV0RTtnQkFDVCx1REFBTSxLQUFLLEVBQUMsd0JBQXdCLHFDQUU3QixDQUNDO1lBQ1YsMERBQVMsS0FBSyxFQUFDLDhEQUE4RDtnQkFDM0UseURBQ0UsS0FBSyxFQUFDLGdIQUFnSCxnQkFDM0csVUFBVSxFQUNyQixLQUFLLEVBQUMsMEdBQTBHLGFBR3pHO2dCQUNULHlEQUNFLEtBQUssRUFBQyxnSEFBZ0gsZ0JBQzNHLFVBQVUsRUFDckIsS0FBSyxFQUFDLDBHQUEwRyxVQUd6RyxDQUNELENBQ04sQ0FDQyxDQUNWLENBQUM7QUFDSixDQUFDO0FBTUQsU0FBUyxLQUFLLENBQUMsS0FBaUI7SUFDdEIsT0FBRyxHQUFLLEtBQUssSUFBVixDQUFXO0lBQ3RCLE9BQU8sQ0FDTCx3REFDRSxLQUFLLEVBQUU7WUFDTCw0REFBNEQ7WUFDNUQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLElBQUk7U0FDdkM7UUFFRCxzREFBSyxLQUFLLEVBQUMscUJBQXFCO1lBQzlCLHNEQUFLLEtBQUssRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDLEdBQUc7Z0JBQ2hDLHFEQUFJLEtBQUssRUFBQyxrQkFBa0IsR0FBRztnQkFDL0IsNkNBQUMsUUFBUSxJQUNQLElBQUksRUFBQyxXQUFXLEVBQ2hCLEdBQUcsRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxFQUMvQixJQUFJLEVBQUMsT0FBTyxFQUNaLEtBQUssRUFBQyxXQUFXLEdBQ2pCO2dCQUNGLDZDQUFDLFFBQVEsSUFDUCxJQUFJLEVBQUMsVUFBVSxFQUNmLEdBQUcsRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUM5QixJQUFJLEVBQUMsUUFBUSxHQUNiO2dCQUNGLDZDQUFDLFFBQVEsSUFDUCxJQUFJLEVBQUMsaUJBQWlCLEVBQ3RCLEdBQUcsRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLEVBQ3JDLElBQUksRUFBQyxVQUFVLEVBQ2YsS0FBSyxFQUFDLE9BQU8sR0FDYjtnQkFDRiw2Q0FBQyxRQUFRLElBQ1AsSUFBSSxFQUFDLHNCQUFzQixFQUMzQixHQUFHLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUNyQyxJQUFJLEVBQUMsYUFBYSxHQUNsQjtnQkFDRiw2Q0FBQyxRQUFRLElBQ1AsSUFBSSxFQUFDLFVBQVUsRUFDZixHQUFHLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFDOUIsSUFBSSxFQUFDLFVBQVUsR0FDZjtnQkFDRiw2Q0FBQyxRQUFRLElBQ1AsSUFBSSxFQUFDLGdCQUFnQixFQUNyQixHQUFHLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFDOUIsSUFBSSxFQUFDLFVBQVUsRUFDZixLQUFLLEVBQUMsS0FBSyxHQUNYO2dCQUNGLHFEQUFJLEtBQUssRUFBQyxrQkFBa0IsR0FBRztnQkFDOUIsb0RBQU8sQ0FDSixDQUNGLENBQ0EsQ0FDVCxDQUFDO0FBQ0osQ0FBQztBQUVNLFNBQVMsVUFBVSxDQUFDLEtBQUssRUFBRSxRQUFhO0lBQzdDLE9BQU8sMERBQVMsS0FBSyxFQUFDLGFBQWEsSUFBRSxRQUFRLENBQVcsQ0FBQztBQUMzRCxDQUFDO0FBRUQsU0FBUyxXQUFXO0lBQ2xCLE9BQU87UUFDTDtZQUNFLElBQUksRUFBRSxDQUFDLGdCQUFnQixDQUFDO1lBQ3hCLFNBQVMsRUFBRSw0REFBYztTQUMxQjtRQUNEO1lBQ0UsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDO1lBQ25CLFNBQVMsRUFBRSxpREFBUztTQUNyQjtRQUNEO1lBQ0UsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2xCLFNBQVMsRUFBRSxzREFBUTtTQUNwQjtLQUNGLENBQUM7QUFDSixDQUFDO0FBQ0QsRUFBRSxDQUFDO0FBQ1ksU0FBUyxHQUFHO0lBQ3pCLElBQU0sT0FBTyxHQUFHLDREQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbEMsSUFBTSxNQUFNLEdBQUcsMkRBQVksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRTtRQUNuRCxFQUFFLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUU7UUFDOUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUUsU0FBUyxFQUFFLGtEQUFhLEVBQUU7UUFDdEQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxTQUFTLEVBQUUsaUVBQVksRUFBRTtLQUM5QyxDQUFDLENBQUM7SUFDSCxPQUFPLENBQ0wsNkNBQUMsMERBQVE7UUFDUCw2Q0FBQyw0REFBWSxPQUFHO1FBQ2hCLDZDQUFDLHVEQUFZLElBQUMsTUFBTSxFQUFFLE1BQU0sR0FBSSxDQUN2QixDQUNaLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxjQUFjO0lBQ3JCLE9BQU87UUFDTCxJQUFJLEVBQUosVUFBSyxPQUFvQjtZQUN2QixPQUFPLENBQ0wsNkNBQUMsMERBQVE7Z0JBQ1AsNkNBQUMsNERBQVksT0FBRztnQkFDaEIsNkNBQUMsS0FBSyxJQUFDLElBQUksRUFBRSxRQUFRLENBQUMsUUFBUSxJQUFJLFFBQVEsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsR0FBSTtnQkFDaEUsc0RBQUssS0FBSyxFQUFDLGtCQUFrQixHQUFPO2dCQUNwQyxzREFBSyxLQUFLLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLGVBQWU7b0JBQ3ZELDZDQUFDLE1BQU0sT0FBRztvQkFDVix1REFBTSxLQUFLLEVBQUMsb0VBQW9FO3dCQUM5RSw2Q0FBQyx1REFBWSxJQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUksQ0FDdkQsQ0FDSDtnQkFDTiw2Q0FBQyxNQUFNLE9BQUcsQ0FDRCxDQUNaLENBQUM7WUFFRixTQUFTLE1BQU07Z0JBQ2IsT0FBTztvQkFDTCxRQUFRLEVBQVIsVUFBUyxTQUFzQjt3QkFDN0IsSUFBTSxNQUFNLEdBQUcsaUVBQWtCLENBQy9CLFNBQVMsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQ3ZDLENBQUM7d0JBQ0YsSUFBTSxTQUFTLEdBQUcseUVBQXFCLENBQ3JDLFNBQVMsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FDNUMsQ0FBQzt3QkFDRixJQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO3dCQUM5RCxTQUFTLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO3dCQUN6QyxTQUFTLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFOzRCQUNuQyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzt3QkFDN0IsQ0FBQyxDQUFDLENBQUM7d0JBRUgsU0FBUyxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFOzRCQUM3QyxJQUFNLEdBQUcsR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDOzRCQUN6RCxJQUFJLDBEQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0NBQ2xCLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs2QkFDYjt3QkFDSCxDQUFDLENBQUMsQ0FBQzt3QkFDSCxTQUFTLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDLENBQUM7d0JBQ3RELE9BQU87NEJBQ0wsT0FBTztnQ0FDTCxTQUFTLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDLENBQUM7NEJBQzNELENBQUM7eUJBQ0YsQ0FBQzt3QkFDRixTQUFTLGdCQUFnQixDQUFDLENBQWE7NEJBQzdCLFVBQU0sR0FBSyxDQUFDLE9BQU4sQ0FBTzs0QkFDckIsSUFBSSwwREFBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dDQUNyQixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFO29DQUM1QyxNQUFNLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztpQ0FDckI7NkJBQ0Y7d0JBQ0gsQ0FBQztvQkFDSCxDQUFDO2lCQUNGLENBQUM7WUFDSixDQUFDO1FBQ0gsQ0FBQztLQUNGLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxLQUFLO0lBQ1osT0FBTztRQUNMLE9BQU87WUFDTCxPQUFPLENBQ0w7Z0JBQ0UsNkNBQUMseUNBQUssSUFBQyxLQUFLLEVBQUUsY0FBTyxDQUFDLEdBQUksQ0FDdEIsQ0FDUCxDQUFDO1FBQ0osQ0FBQztLQUNGLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxRQUFRLENBQUMsT0FBb0I7SUFDcEMsT0FBTyxDQUNMLHNEQUFLLEtBQUssRUFBQyxzQkFBc0I7UUFDL0IsdURBQU0sS0FBSyxFQUFDLGFBQWE7O1lBQVksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFRLENBQ25FLENBQ1AsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxNQUFvQjtJQUN0QyxPQUFPO1FBQ0wsT0FBTyxFQUFQLFVBQVEsT0FBdUI7WUFDN0IsSUFBTSxPQUFPLEdBQUcsSUFBSSwwQ0FBVSxFQUFFLENBQUM7WUFDakMsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUNqQixzREFBWSxDQUNWLHNEQUFLLEtBQUssRUFBQyxzQkFBc0I7Z0JBQy9CLDZDQUFDLHlDQUFLLElBQUMsS0FBSyxFQUFFLE9BQU8sR0FBSSxDQUNyQixDQUNQLENBQ0YsQ0FBQztZQUVGLFNBQVMsT0FBTztnQkFDZCxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QyxDQUFDO1FBQ0gsQ0FBQztRQUNELE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTztLQUN4QixDQUFDO0FBQ0osQ0FBQztBQWFELFNBQVMsUUFBUSxDQUFDLEtBQW9CO0lBQ3BDLE9BQU8sQ0FDTCxvREFBRyxLQUFLLEVBQUMsMkJBQTJCLEVBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLGtCQUFlLE1BQU07UUFDdkUsb0RBQ0UsS0FBSyxFQUFDLHVDQUF1QyxFQUM3QyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssaUJBQ2pDLE1BQU0sSUFFakIsS0FBSyxDQUFDLElBQUksQ0FDVDtRQUNKLHVEQUFNLEtBQUssRUFBQyxxQkFBcUIsSUFBRSxLQUFLLENBQUMsSUFBSSxDQUFRLENBQ25ELENBQ0wsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLEtBQUssQ0FBQyxJQUFZLEVBQUUsS0FBYTtJQUN4QyxPQUFPO1FBQ0wsSUFBSTtRQUNKLEtBQUs7UUFDTCxJQUFJLFlBQUMsQ0FBQyxJQUFHLENBQUM7S0FDWCxDQUFDO0FBQ0osQ0FBQztBQU1ELFNBQVMsT0FBTyxDQUFDLEtBQW1CO0lBQ2xDLE9BQU8sQ0FDTCxpRUFBTyxLQUFLLEVBQUMseUJBQXlCLElBQUssS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUVqRSxDQUNULENBQUM7QUFDSixDQUFDO0FBR0QsU0FBUyxZQUFZLENBQUMsS0FBd0I7SUFDNUMsT0FBTyxvREFBRyxLQUFLLEVBQUMsZ0NBQWdDLGFBQVcsQ0FBQztBQUM5RCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5U3FFO0FBQzdCO0FBQ2Q7QUFDVTtBQVE5QixTQUFlLFlBQVksQ0FBSSxJQUFZOzs7Ozs7b0JBQzFDLEdBQUcsR0FBRyxJQUFJLENBQUM7b0JBQ2IsT0FBTyxHQUFHLEtBQUssQ0FBQztvQkFFSixxQkFBTSxnREFBUyxDQUFDLEdBQUcsQ0FBQzs2QkFDakMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxJQUFLLFFBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBUixDQUFRLENBQUM7NkJBQ3JCLEtBQUssQ0FBQyxVQUFDLENBQUMsSUFBTSxDQUFDLENBQUM7O29CQUZiLE1BQU0sR0FBRyxDQUFDLFNBRUcsQ0FBYztvQkFFN0IsS0FBSyxHQUFHLElBQUksNENBQUssQ0FBSSxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUM5QyxPQUFPLEdBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUM7b0JBQ3ZDLHNCQUFPOzRCQUNMLElBQUksTUFBTTtnQ0FDUixPQUFPLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQzs0QkFDekIsQ0FBQzs0QkFDRCxLQUFLLEVBQUwsVUFBTSxNQUFTO2dDQUNiLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7NEJBQ3ZCLENBQUM7NEJBQ0QsTUFBTSxFQUFFLFVBQUMsTUFBTTtnQ0FDYixRQUFDLE9BQU87b0NBQ04sQ0FBQyxDQUFDLDhDQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxVQUFFLE9BQU8sV0FBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSSxJQUFLLFdBQUksQ0FBQyxJQUFJLEVBQUUsRUFBWCxDQUFXLENBQUM7b0NBQy9ELENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzs0QkFGekIsQ0FFeUI7NEJBQzNCLElBQUksRUFBRSxjQUFNLHNEQUFRLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBMUIsQ0FBMEI7NEJBQ3RDLE1BQU0sRUFBRTtnQ0FDTix3REFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQ0FDbkIsT0FBTyxHQUFHLElBQUksQ0FBQztnQ0FDakIsQ0FBQyxDQUFDOzRCQUZGLENBRUU7NEJBQ0osVUFBVTtnQ0FBVixpQkFtQkM7Z0NBbEJDLElBQUksTUFBTSxHQUFHLElBQUksNENBQWEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO3FDQUM1QyxJQUFJLENBQUMsZ0RBQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSx3REFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLHFEQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3FDQUNsRSxTQUFTLENBQUMsVUFBQyxNQUFNO29DQUNoQixPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztnQ0FDM0IsQ0FBQyxDQUFDLENBQUM7Z0NBRUwsU0FBUyxjQUFjLENBQUMsQ0FBQztvQ0FDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Z0NBQzNCLENBQUM7Z0NBQ0QsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQUM7Z0NBRS9ELE9BQU87b0NBQ0wsV0FBVyxFQUFFO3dDQUNYLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQzt3Q0FDckIsUUFBUSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQUM7d0NBQ2xFLE9BQU8sS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0NBQ2xDLENBQUM7aUNBQ0YsQ0FBQzs0QkFDSixDQUFDO3lCQUNGLEVBQUM7Ozs7Q0FDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUR5QjtBQUVNO0FBQytDO0FBQ2xDO0FBQ087QUFDRztBQUNiO0FBQ0g7QUFHdkMsSUFBTSxLQUFLLEdBQUcsRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDO0FBQy9ELElBQU0sSUFBSSxHQUFHLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUM7QUFDckQsSUFBTSxPQUFPLEdBQUcsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQztBQUM3RCxJQUFNLE9BQU8sR0FBRyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDO0FBRXRELFNBQVMsUUFBUTtJQUN0QixPQUFPO1FBQ0wsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDO2dCQUNiLFNBQVMsRUFBRSxnQkFBZ0I7YUFDNUI7U0FDRjtRQUNLLElBQUksRUFBVixVQUFXLE9BQW9COzs7OztnQ0FDTyxxQkFBTSxnREFBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FDdEUsVUFBQyxDQUFDLElBQUssUUFBQyxDQUFDLElBQUksRUFBRSxFQUFSLENBQVEsQ0FDaEI7OzRCQUZLLFFBQVEsR0FBc0IsU0FFbkM7NEJBQ0Qsc0JBQU8sQ0FDTCxpREFBQyx5Q0FBVTtvQ0FDVCwwREFBSyxLQUFLLEVBQUMsc0JBQXNCO3dDQUMvQiw0RUFBeUI7d0NBQ3pCOzRDQUNFLGlEQUFDLG9EQUFJLElBQUMsTUFBTSxFQUFFLFFBQVEsSUFBRyxlQUFlLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFRLENBQ3hELENBQ0gsQ0FDSyxDQUNkLEVBQUM7Ozs7U0FDSDtLQUNGLENBQUM7SUFFRixTQUFTLGVBQWUsQ0FBQyxHQUFjO1FBQ3JDLE9BQU8sVUFBQyxPQUF3QixJQUFLLFFBQ25DO1lBQ0Usd0RBQUcsS0FBSyxFQUFDLGFBQWEsRUFBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQ25ELE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUN6QixDQUNBLENBQ1AsRUFOb0MsQ0FNcEMsQ0FBQztJQUNKLENBQUM7QUFDSCxDQUFDO0FBQ00sU0FBUyxnQkFBZ0I7SUFDOUIsT0FBTztRQUNDLElBQUksRUFBVixVQUFXLE9BQW9COzs7Ozs7NEJBQ3JCLEVBQUUsR0FBSyxPQUFPLENBQUMsTUFBTSxHQUFuQixDQUFvQjs0QkFDakIscUJBQU0sNERBQVksQ0FBVSxlQUFlLEdBQUcsRUFBRSxDQUFDOzs0QkFBMUQsTUFBTSxHQUFHLFNBQWlEOzRCQUV4RCxLQUFLLEdBQUcsc0RBQVcsQ0FBa0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQzs0QkFFdkUsc0JBQU8sQ0FDTCxpREFBQyx5Q0FBVTtvQ0FDUixNQUFNLENBQUMsVUFBVSxFQUFFO29DQUNwQiwwREFBSyxLQUFLLEVBQUMsc0JBQXNCO3dDQUMvQjs7NENBQ1UsK0RBQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQVE7NENBQ2xELHdEQUFHLElBQUksRUFBRSxrQkFBZ0IsRUFBRSxTQUFNLGVBQWM7NENBQy9DLDZEQUNFLEtBQUssRUFBRTtvREFDTCxZQUFLLENBQUMsR0FBRyxDQUNQLG1EQUFRLENBQUM7d0RBQ1AsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNO3dEQUNuQixXQUFXLEVBQUUsbUJBQWdCLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFFO3FEQUNoRCxDQUFDLENBQ0g7Z0RBTEQsQ0FLQyxVQUlJOzRDQUNULDZEQUNFLEtBQUssRUFBRTtvREFDTCxZQUFLLENBQUMsR0FBRyxDQUFDO3dEQUNSLElBQUksRUFBRSxRQUFRO3dEQUNkLFNBQVMsRUFBRSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7cURBQzVCLENBQUM7Z0RBSEYsQ0FHRSxhQUlHLENBQ0Y7d0NBRVQ7NENBQ0U7Z0RBQ0UsaURBQUMsMkRBQVMsSUFDUixLQUFLLEVBQUMsZ0JBQWdCLEVBQ3RCLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FDdkIsQ0FDVDs0Q0FDTjtnREFDRSxpREFBQywyREFBUyxJQUNSLEtBQUssRUFBQyxhQUFhLEVBQ25CLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FDckIsQ0FDVDs0Q0FDTjtnREFDRSxpREFBQywyREFBUyxJQUNSLEtBQUssRUFBQyxPQUFPLEVBQ2IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUNmLENBQ1Q7NENBQ047Z0RBQ0UsaURBQUMsdURBQU0sSUFDTCxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsRUFDeEMsS0FBSyxFQUFDLFNBQVMsRUFDZixLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQ3RCLENBQ047NENBQ047Z0RBQ0UsNERBQ0UsSUFBSSxFQUFDLE1BQU0sRUFDWCxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQ3pCLE1BQU0sRUFBRSxVQUFDLEdBQUcsSUFBSyxhQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBM0MsQ0FBMkMsR0FDNUQsQ0FDRTs0Q0FDTiw0REFBTTs0Q0FDTixpREFBQyxvREFBSSxJQUFDLE1BQU0sRUFBRSxLQUFLLElBQUcsZUFBZSxDQUFRLENBQ3hDLENBQ0gsQ0FDSyxDQUNkLEVBQUM7Ozs7U0FDSDtLQUNGLENBQUM7SUFFRixTQUFTLGVBQWUsQ0FBQyxDQUFjO1FBQ3JDLE9BQU8sQ0FDTDtZQUNFLGlEQUFDLDJEQUFTLElBQUMsS0FBSyxFQUFDLGFBQWEsRUFBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLFdBQVcsR0FBSTtZQUN2RCxpREFBQywyREFBUyxJQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsR0FBSSxDQUN4RCxDQUNQLENBQUM7SUFDSixDQUFDO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SWtDO0FBQ0Q7QUFFbkIsU0FBUyxhQUFhO0lBQ25DLE9BQU87UUFDTCxJQUFJO1lBQ0YsT0FBTywyREFBSyxHQUFHLEVBQUUsbURBQUcsR0FBUSxDQUFDO1FBQy9CLENBQUM7S0FDRixDQUFDO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Q2QjtBQUNrQjtBQUNQO0FBQ2Y7QUFTUDtBQUM0QjtBQUUvQyxTQUFTLE1BQU0sQ0FBQyxLQUFhO0lBQzNCLE9BQU87UUFDTCxJQUFJLEVBQUUsUUFBUTtRQUNkLEtBQUs7S0FDTixDQUFDO0FBQ0osQ0FBQztBQUVELElBQU0sS0FBSyxHQUFZO0lBQ3JCLEtBQUssRUFBRSxPQUFPO0lBQ2QsS0FBSyxFQUFFLEdBQUc7Q0FDWCxDQUFDO0FBRUYsSUFBTSxTQUFTLEdBQVk7SUFDekIsS0FBSyxFQUFFLFlBQVk7SUFDbkIsS0FBSyxFQUFFLENBQUM7Q0FDVCxDQUFDO0FBRUYsU0FBUyxNQUFNLENBQUMsS0FBYSxFQUFFLFFBQW1CO0lBQ2hELE9BQU87UUFDTCxJQUFJLEVBQUUsUUFBUTtRQUNkLEtBQUs7UUFDTCxRQUFRO0tBQ1QsQ0FBQztBQUNKLENBQUM7QUFFRCxJQUFNLFVBQVUsR0FBRztJQUNqQixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUM3QixFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUM5QixFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMvQixFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUNyQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUM1QixFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUNuQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUNoQyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtDQUNoQyxDQUFDO0FBQ0YsSUFBTSxRQUFRLEdBQUc7SUFDZixRQUFRLEVBQUU7UUFDUixFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtRQUMvQixFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtRQUMvQixFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtRQUNoQyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtRQUNqQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtLQUNqQztJQUNELFVBQVUsRUFBRTtRQUNWO1lBQ0UsS0FBSyxFQUFFLG1CQUFtQjtZQUMxQixLQUFLLEVBQUUsR0FBRztZQUNWLE9BQU8sRUFBRTtnQkFDUCxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUNkLE1BQU0sQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDeEMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQzthQUNwQztTQUNGO1FBQ0QsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7UUFDOUIsRUFBRSxLQUFLLEVBQUUsNEJBQTRCLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtRQUNuRCxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3hDLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0tBQ2xDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRTtRQUMzRCxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwQyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RDLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7S0FDeEM7SUFDRCxNQUFNLEVBQUU7UUFDTixFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwQyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwQyxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsQyxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO0tBQ3RDO0lBQ0QsVUFBVTtJQUNWLE9BQU8sRUFBRTtRQUNQLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1FBQ3BDLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1FBQ3RDLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1FBQ3JDLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO0tBQ3JDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDN0IsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDM0IsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDN0IsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7S0FDakM7SUFDRCxRQUFRLEVBQUU7UUFDUjtZQUNFLEtBQUssRUFBRSxhQUFhO1lBQ3BCLEtBQUssRUFBRSxHQUFHO1lBQ1YsV0FBVyxFQUFFLCtCQUErQjtTQUM3QztRQUNELEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO1FBQ2xDLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0tBQ3JDO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7UUFDbkMsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDbkMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7UUFDbEMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7UUFDbkMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDckMsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDcEMsRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUN4QyxFQUFFLEtBQUssRUFBRSwyQkFBMkIsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO0tBQ2xEO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7UUFDN0IsRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtRQUM3QyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtRQUNuQyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtLQUNsQztDQUNGLENBQUM7QUFPRixTQUFTLGtCQUFrQixDQUFDLE9BQWdCLEVBQUUsUUFBK0I7SUFDM0UsT0FBTztRQUNMLElBQUksRUFBSixVQUFLLE9BQW9CO1lBQ3ZCLElBQU0sU0FBUyxHQUFrQixFQUFFLENBQUM7WUFDNUIsV0FBTyxHQUFLLE9BQU8sUUFBWixDQUFhO1lBQzVCLE9BQU8sQ0FDTCxzREFBSyxLQUFLLEVBQUMsZ0JBQWdCO2dCQUN6QjtvQkFDRyxPQUFPLENBQUMsS0FBSztvQkFDZCxvREFBRyxJQUFJLEVBQUMsU0FBUyxFQUFDLEtBQUssRUFBQywwQkFBMEIsYUFFOUMsQ0FDRztnQkFDVCxzREFBSyxLQUFLLEVBQUMseUJBQXlCLElBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLElBQUssaUJBQVUsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEVBQXhCLENBQXdCLENBQUMsQ0FDekM7Z0JBQ04seURBQVEsS0FBSyxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGdCQUVuRCxDQUNMLENBQ1AsQ0FBQztZQUNGLFNBQVMsT0FBTztnQkFDZCxRQUFRLENBQUMsT0FBTyxvQkFBTSxTQUFTLEVBQUUsQ0FBQztZQUNwQyxDQUFDO1FBQ0gsQ0FBQztLQUNGLENBQUM7SUFFRixTQUFTLFVBQVUsQ0FBQyxDQUFrQixFQUFFLFNBQXdCO1FBQzlELElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxRQUFRLEVBQUU7WUFDZCxjQUFRLEdBQUssQ0FBQyxTQUFOLENBQU87WUFDdkIsT0FBTyxDQUNMO2dCQUNFLHlEQUNFLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUNiLE1BQU0sRUFBRSxVQUFDLENBQUMsSUFBSyxnQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBbkQsQ0FBbUQ7b0JBRWxFLHlEQUFRLEtBQUssRUFBQyxFQUFFOzt3QkFBYyxDQUFDLENBQUMsS0FBSzs2QkFBWTtvQkFDaEQsVUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsSUFBSyxRQUNuQix5REFBUSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBRyxDQUFDLENBQUMsS0FBSyxDQUFVLENBQzNDLEVBRm9CLENBRXBCLENBQUMsQ0FDSyxDQUNMLENBQ1AsQ0FBQztTQUNIO2FBQU07WUFDTCxJQUFNLEVBQUUsR0FBRyxXQUFXLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM5QyxPQUFPLENBQ0w7Z0JBQ0Usd0RBQU8sSUFBSSxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUUsRUFBRSxHQUFJO2dCQUNqQyx3REFBTyxHQUFHLEVBQUUsRUFBRSxJQUFHLENBQUMsQ0FBQyxLQUFLLENBQVMsQ0FDN0IsQ0FDUCxDQUFDO1NBQ0g7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVELElBQU0sVUFBVSxHQUFVO0lBQ3hCLEtBQUssRUFBRSxhQUFhO0lBQ3BCLEtBQUssRUFBRSxDQUFDO0lBQ1IsT0FBTyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztDQUN2QyxDQUFDO0FBRUssU0FBUyxZQUFZO0lBQzFCLElBQU0sS0FBSyxHQUFHLElBQUksNENBQUssQ0FBc0I7UUFDM0MsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO0tBQ3JCLENBQUMsQ0FBQztJQUNILElBQU0sVUFBVSxHQUFHLHNEQUFXLENBQVEsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLElBQU0sV0FBVyxHQUFjLEVBQUUsQ0FBQztJQUNsQyxLQUFLLElBQU0sR0FBRyxJQUFJLFFBQVEsRUFBRTtRQUMxQixXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDcEQ7SUFFRCxTQUFTLFNBQVMsQ0FBQyxPQUFnQixFQUFFLE9BQXNCO1FBQ2pELFNBQUssR0FBSyxPQUFPLE1BQVosQ0FBYTtRQUUxQixJQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUNuQyxhQUFNLENBQUMsU0FBUyxDQUNkLFVBQUMsQ0FBQyxJQUFLLFFBQUMsQ0FBQyxLQUFLLEtBQUssS0FBSyxJQUFJLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQTFELENBQTBELENBQ2xFO1FBRkQsQ0FFQyxDQUNGLENBQUM7UUFDRixJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDZCxVQUFVLENBQUMsR0FBRyxDQUFDLHFEQUFVLENBQUMsS0FBSyxFQUFFLFVBQUMsQ0FBQyxJQUFLLFFBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBVCxDQUFTLENBQUMsQ0FBQyxDQUFDO1NBQ3JEO2FBQU07WUFDTCxVQUFVLENBQUMsR0FBRyxDQUNaLG1EQUFRLENBQVE7Z0JBQ2QsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osS0FBSyxFQUFFLENBQUM7Z0JBQ1IsT0FBTzthQUNSLENBQUMsQ0FDSCxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRUQsU0FBUyxXQUFXLENBQUMsS0FBWSxFQUFFLEtBQWE7UUFDOUMsSUFBSSxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUM7WUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLHFEQUFVLENBQUMsS0FBSyxFQUFFLFVBQUMsQ0FBQyxJQUFLLFFBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBVCxDQUFTLENBQUMsQ0FBQyxDQUFDOztZQUNwRSxVQUFVLENBQUMsR0FBRyxDQUFDLHFEQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsT0FBTztRQUNMLE1BQU0sRUFBRSxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBRSxJQUFLLFFBQUM7WUFDL0IsSUFBSSxFQUFFLFdBQVcsQ0FBQyxFQUFFLENBQUM7WUFDckIsU0FBUyxFQUFFLGtCQUFrQixDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUM7U0FDN0MsQ0FBQyxFQUg4QixDQUc5QixDQUFDO1FBQ0gsSUFBSSxFQUFKLFVBQUssT0FBb0I7WUFDdkIsSUFBTSxNQUFNLEdBQWtCO2dCQUM1QixRQUFRLEVBQVIsVUFBUyxPQUFnQjs7b0JBQ3ZCLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTt3QkFDbkIsYUFBTyxDQUFDLEdBQUcsRUFBQyxRQUFRLFdBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFO3FCQUMvQzt5QkFBTTt3QkFDTCxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO3FCQUN4QjtnQkFDSCxDQUFDO2FBQ0YsQ0FBQztZQUVGLE9BQU8sQ0FDTCw2Q0FBQywwREFBUTtnQkFDUCw2Q0FBQywyREFBRyxJQUFDLEtBQUssRUFBQyxRQUFRLEdBQUc7Z0JBQ3RCLHNEQUFLLEtBQUssRUFBQyxRQUFRO29CQUNqQixvRkFBaUM7b0JBQ2pDLHVEQUFNLEtBQUssRUFBQyxPQUFPLGlCQUFrQjtvQkFDckMsdURBQU0sS0FBSyxFQUFDLGFBQWE7d0JBQ3ZCLHVEQUFNLEtBQUssRUFBQyxnQkFBZ0IsZUFBZ0I7O3dCQUU1Qyx1REFBTSxLQUFLLEVBQUMsZ0JBQWdCLEVBQUMsS0FBSyxFQUFDLGdCQUFnQixlQUU1Qzt5Q0FFRixDQUNIO2dCQUNOLHNEQUFLLEtBQUssRUFBQyxXQUFXO29CQUNwQiw2Q0FBQyxRQUFRLGVBQUssTUFBTSxFQUFJO29CQUN4Qiw2Q0FBQyxRQUFRLGVBQUssTUFBTSxFQUFJO29CQUN4Qiw2Q0FBQyxPQUFPLGVBQUssTUFBTSxFQUFJO29CQUN2Qiw2Q0FBQyxLQUFLLGVBQUssTUFBTSxFQUFJO29CQUNyQiw2Q0FBQyxXQUFXLE9BQUc7b0JBQ2YsNkNBQUMsS0FBSyxlQUFLLE1BQU0sRUFBSTtvQkFDckIsNkNBQUMsS0FBSyxlQUFLLE1BQU0sRUFBSTtvQkFDckIsNkNBQUMsTUFBTSxlQUFLLE1BQU0sRUFBSTtvQkFDdEIsNkNBQUMsUUFBUSxlQUFLLE1BQU0sRUFBSTtvQkFDeEIsNkNBQUMsUUFBUSxlQUFLLE1BQU0sRUFBSTtvQkFDeEIsNkNBQUMsU0FBUyxlQUFLLE1BQU0sRUFBSTtvQkFDekIsNkNBQUMsVUFBVSxlQUFLLE1BQU0sRUFBSSxDQUl0QjtnQkFDTixzREFBSyxLQUFLLEVBQUMsa0JBQWtCO29CQUMzQiw2Q0FBQyx5REFBSSxJQUFDLE1BQU0sRUFBRSxVQUFVLElBQ3JCLFVBQUMsS0FBbUIsRUFBRSxFQUFTOzRCQUFQLEtBQUs7d0JBQU8sUUFDbkMsNkNBQUMsMERBQVE7NEJBQ1Asc0RBQUssS0FBSyxFQUFDLHVCQUF1QjtnQ0FDaEMsdURBQU0sS0FBSyxFQUFDLDhCQUE4QixJQUN2QyxLQUFLLENBQUMsS0FBSyxDQUNQOztnQ0FFUCx1REFBTSxLQUFLLEVBQUMsNkJBQTZCLElBQ3RDLEtBQUssQ0FBQyxLQUFLLENBQ1A7Z0NBQ1Asb0RBQ0UsS0FBSyxFQUFFLGNBQU0sa0JBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBM0IsQ0FBMkIsRUFDeEMsS0FBSyxFQUFDLCtCQUErQixhQUduQyxDQUNBOzRCQUNMLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBTyxJQUFLLFFBQy9CLHNEQUFLLEtBQUssRUFBQyx5QkFBeUIsSUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQUssSUFBSyxZQUFLLENBQUMsS0FBSyxFQUFYLENBQVcsQ0FBQyxDQUNoQyxDQUNQLEVBSmdDLENBSWhDLENBQUMsQ0FDTyxDQUNaO29CQXZCb0MsQ0F1QnBDLENBQ0ksQ0FDSCxDQUNHLENBQ1osQ0FBQztRQUNKLENBQUM7S0FDRixDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsWUFBWSxDQUFDLE1BQXFCO0lBQ3pDLElBQU0sS0FBSyxHQUFHLElBQUksNENBQUssQ0FBQztRQUN0QixLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxDQUFDO0tBQ1QsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxDQUNMO1FBQ0Usd0RBQ0UsSUFBSSxFQUFDLE1BQU0sRUFDWCxLQUFLLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFDOUIsSUFBSSxFQUFFLGFBQWEsRUFDbkIsTUFBTSxFQUFFLGFBQWEsR0FDckI7UUFDRix3REFDRSxJQUFJLEVBQUMsUUFBUSxFQUNiLEtBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUM5QixJQUFJLEVBQUUsYUFBYSxFQUNuQixNQUFNLEVBQUUsYUFBYSxHQUNyQjtRQUNGLHlEQUFRLEtBQUssRUFBRSxRQUFRLFFBQVksQ0FDL0IsQ0FDUCxDQUFDO0lBRUYsU0FBUyxhQUFhLENBQUMsQ0FBQztRQUN0QixLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxTQUFTLGFBQWEsQ0FBQyxDQUFDO1FBQ3RCLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELFNBQVMsUUFBUTtRQUNmLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVCLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQztBQUNILENBQUM7QUFFRCxTQUFTLEtBQUssQ0FBQyxNQUFxQjtJQUNsQyxPQUFPLENBQ0w7UUFDRSxtRUFBZ0I7UUFDaEIsNkNBQUMsV0FBVyxlQUFLLE1BQU0sSUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUM5QyxDQUNYLENBQUM7QUFDSixDQUFDO0FBVUQsU0FBUyxXQUFXLENBQUMsT0FBMkM7SUFDdEQsWUFBUSxHQUFLLE9BQU8sU0FBWixDQUFhO0lBRTdCLE9BQU8sQ0FDTCxxREFBSSxLQUFLLEVBQUMsVUFBVSxJQUNqQixRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUMsT0FBTztRQUNwQixjQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUNwQixvREFDRSxLQUFLLEVBQUMsOENBQThDLEVBQ3BELFFBQVEsRUFBQyxHQUFHLEVBQ1osS0FBSyxFQUFFLGNBQU0sY0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBekIsQ0FBeUI7WUFHdEMsdURBQU0sS0FBSyxFQUFDLHVCQUF1QixHQUFRO1lBQzNDLHVEQUFNLEtBQUssRUFBQyxxQkFBcUI7Z0JBQy9CLHVEQUFNLEtBQUssRUFBQyw2QkFBNkI7b0JBQ3RDLE9BQU8sQ0FBQyxLQUFLOztvQkFBRyxPQUFPLENBQUMsS0FBSyxDQUN6QjtnQkFDUCx1REFBTSxLQUFLLEVBQUMsK0JBQStCLElBQ3hDLE9BQU8sQ0FBQyxXQUFXLENBQ2YsQ0FDRixDQUNMLENBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FDRixvREFDRSxLQUFLLEVBQUMsMkJBQTJCLEVBQ2pDLFFBQVEsRUFBQyxHQUFHLEVBQ1osS0FBSyxFQUFFLGNBQU0sY0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBekIsQ0FBeUI7WUFFdEMsdURBQU0sS0FBSyxFQUFDLHVCQUF1QixHQUFRO1lBQzNDLHVEQUFNLEtBQUssRUFBQyxxQkFBcUI7Z0JBQzlCLE9BQU8sQ0FBQyxLQUFLOztnQkFBRyxPQUFPLENBQUMsS0FBSyxDQUN6QixDQUNMLENBQ0w7SUE1QkQsQ0E0QkMsQ0FDRixDQUNFLENBQ04sQ0FBQztBQUNKLENBQUM7QUEwQkQsU0FBUyxRQUFRLENBQUMsTUFBcUI7SUFDckMsT0FBTyxDQUNMO1FBQ0Usb0VBQWlCO1FBQ2pCLDZDQUFDLFdBQVcsYUFBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVEsSUFBTSxNQUFNLEVBQUksQ0FDaEQsQ0FDWCxDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsV0FBVztJQUNsQixPQUFPLENBQ0wsMERBQVMsS0FBSyxFQUFDLGdDQUFnQztRQUM3Qyx3RUFBcUI7UUFDckI7WUFDRSxvRUFBaUI7WUFDakIsNkVBQTJCLENBQ3ZCO1FBQ047WUFDRSxrRUFBZTtZQUNmLGlHQUE2Qzs7WUFDN0MseUZBQXVDO1lBQ3ZDLG9FQUFpQjtZQUNqQiw4SUFHTSxDQUNGLENBQ0UsQ0FDWCxDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsT0FBTztJQUNkLE9BQU8sQ0FDTDtRQUNFLHFEQUFJLEtBQUssRUFBQyxXQUFXLGNBQWE7UUFDbEM7WUFDRSw4RUFBNkI7O1lBQUUsNEVBQTJCOztZQUFFLEdBQUc7WUFDL0QsMEVBQXlCOztZQUFFLEdBQUc7WUFDOUIsa0hBQWlFLENBQzdELENBQ0UsQ0FDWCxDQUFDO0FBQ0osQ0FBQztBQUNELFNBQVMsU0FBUztJQUNoQixPQUFPLENBQ0w7UUFDRSxxREFBSSxLQUFLLEVBQUMsUUFBUSxnQkFBZTtRQUNqQyxpSEFBK0Q7UUFDL0QseUZBQXVDO1FBQ3ZDLDRGQUEwQyxDQUNsQyxDQUNYLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxTQUFTO0lBQ2hCLE9BQU8sQ0FDTDtRQUNFLHNFQUFtQjtRQUNuQixzREFBSyxLQUFLLEVBQUMsa0JBQWtCLHdCQUF3QjtRQUNyRCxzREFBSyxLQUFLLEVBQUMsa0JBQWtCOztZQUNKLHVEQUFNLEtBQUssRUFBQyxRQUFRLGVBQWdCOztZQUFFLEdBQUc7WUFDaEUsdURBQU0sS0FBSyxFQUFDLFFBQVEsbUJBQW9COztZQUFFLEdBQUc7WUFDN0MsdURBQU0sS0FBSyxFQUFDLFFBQVEsa0JBQW1CO2dCQUNuQztRQUNOLHNEQUFLLEtBQUssRUFBQyxrQkFBa0IsNEJBQTRCO1FBQ3pELHNEQUFLLEtBQUssRUFBQyxrQkFBa0IsK0JBQStCO1FBQzVELHNEQUFLLEtBQUssRUFBQyxrQkFBa0IsZ0NBQWdDLENBQ3JELENBQ1gsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxPQUFzQjtJQUN4QyxPQUFPLENBQ0w7UUFDRSx1RUFBb0I7UUFDcEIsc0RBQUssS0FBSyxFQUFDLGlDQUFpQyxJQUN6QyxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQVUsSUFBSyxRQUN2QyxvREFBRyxLQUFLLEVBQUUsY0FBTSxjQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFuQixDQUFtQixFQUFFLEtBQUssRUFBQyxXQUFXLElBQ25ELENBQUMsQ0FBQyxLQUFLLENBQ04sQ0FDTCxFQUp3QyxDQUl4QyxDQUFDLENBUUUsQ0FDRSxDQUNYLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxNQUFNLENBQUMsTUFBcUI7SUFDbkMsT0FBTyxDQUNMO1FBQ0Usa0VBQWU7UUFDZixrSEFBOEQ7UUFDOUQsNkNBQUMsV0FBVyxhQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsT0FBTyxJQUFNLE1BQU0sRUFBSSxDQUMvQyxDQUNYLENBQUM7SUFFRixPQUFPLENBQ0w7UUFDRSxrRUFBZTtRQUNmOztZQUVFLHVEQUFNLEtBQUssRUFBQyxRQUFRLGVBQWdCLENBQ2hDLENBQ0UsQ0FDWCxDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFDLE1BQXFCO0lBQ3JDLE9BQU8sQ0FDTDtRQUNFLG9FQUFpQjtRQUNqQiw2Q0FBQyxXQUFXLGFBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRLElBQU0sTUFBTSxFQUFJLENBQ2hELENBQ1gsQ0FBQztJQUNGLE9BQU8sQ0FDTDtRQUNFLG9FQUFpQjtRQUNqQjs7WUFDcUIsdURBQU0sS0FBSyxFQUFDLFFBQVEsYUFBYzs7WUFDckQsdURBQU0sS0FBSyxFQUFDLFFBQVEsZUFBZ0IsQ0FDaEM7UUFDTix3REFBTTtRQUNOLDhHQUEwRCxDQUNsRCxDQUNYLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxRQUFRLENBQUMsTUFBcUI7SUFDckMsT0FBTyxDQUNMO1FBQ0Usb0VBQWlCO1FBQ2pCLDZDQUFDLFdBQVcsYUFBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVEsSUFBTSxNQUFNLEVBQUk7WUFDaEQsQ0FDWCxDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsS0FBSyxDQUFDLE1BQXFCO0lBQ2xDLE9BQU8sQ0FDTDtRQUNFLDRFQUF5QjtRQUN6Qix1SEFBbUU7UUFDbkUsNkNBQUMsV0FBVyxhQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsS0FBSyxJQUFNLE1BQU0sRUFBSSxDQUM3QyxDQUNYLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxRQUFRLENBQUMsTUFBcUI7SUFDckMsT0FBTyxDQUNMO1FBQ0UsK0VBQTRCO1FBQzVCLHlHQUFxRDtRQUNyRCw2Q0FBQyxXQUFXLGFBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxVQUFVLElBQU0sTUFBTSxFQUFJLENBQ2xELENBQ1gsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLE9BQU8sQ0FBQyxNQUFxQjtJQUNwQyxPQUFPLENBQ0w7UUFDRSxrRkFBK0I7UUFDL0Isa0lBRUk7UUFDSiw2Q0FBQyxXQUFXLGFBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxPQUFPLElBQU0sTUFBTSxFQUFJLENBQy9DLENBQ1gsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLEtBQUssQ0FBQyxNQUFxQjtJQUNsQyxPQUFPLENBQ0w7UUFDRSxpRUFBYztRQUNkLDZDQUFDLFdBQVcsYUFBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLEtBQUssSUFBTSxNQUFNLEVBQUksQ0FDN0MsQ0FDWCxDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsV0FBVyxDQUFDLE9BQWdCO0lBQ25DLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO0FBQzNFLENBQUM7QUFRRCxTQUFTLFFBQVEsQ0FBQyxRQUFtQixFQUFFLFFBQWdCO0lBQ3JELE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFDLE9BQU87UUFDMUIsNkJBQ0ssT0FBTyxLQUNWLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxHQUFHLFFBQVEsSUFDL0I7SUFDSixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxTQUFTLE9BQU87SUFBQyxhQUFrQjtTQUFsQixVQUFrQixFQUFsQixxQkFBa0IsRUFBbEIsSUFBa0I7UUFBbEIsd0JBQWtCOztJQUNqQyxPQUFPO1FBQ0wsS0FBaUIsVUFBRyxFQUFILFdBQUcsRUFBSCxpQkFBRyxFQUFILElBQUcsRUFBRTtZQUFqQixJQUFNLEVBQUU7WUFDWCxFQUFFLEVBQUUsQ0FBQztTQUNOO0lBQ0gsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsaUJBQWlCLENBQUMsRUFBaUIsRUFBRSxFQUFpQjtJQUM3RCxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRTtRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQzdCLElBQUksRUFBRSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsTUFBTTtRQUFFLE9BQU8sS0FBSyxDQUFDOzRCQUU5QixLQUFLO1FBQ2QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLElBQUssUUFBQyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxFQUF0QixDQUFzQixDQUFDOzRCQUFTLEtBQUssR0FBQzs7SUFENUQsS0FBb0IsVUFBRSxFQUFGLFNBQUUsRUFBRixnQkFBRSxFQUFGLElBQUU7UUFBakIsSUFBTSxLQUFLOzhCQUFMLEtBQUs7OztLQUVmOzRCQUNVLEtBQUs7UUFDZCxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsSUFBSyxRQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQXRCLENBQXNCLENBQUM7NEJBQVMsS0FBSyxHQUFDOztJQUQ1RCxLQUFvQixVQUFFLEVBQUYsU0FBRSxFQUFGLGdCQUFFLEVBQUYsSUFBRTtRQUFqQixJQUFNLEtBQUs7OEJBQUwsS0FBSzs7O0tBRWY7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4b0IwQztBQUUzQztJQUFBO1FBR2MsbUJBQWMsR0FBRyxJQUFJLHlDQUFPLEVBQVEsQ0FBQztRQUUvQyxtREFBbUQ7UUFDMUMsa0JBQWEsR0FBcUIsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQXNRbkUsQ0FBQztJQTlGRzs7Ozs7T0FLRztJQUNILHdDQUFrQixHQUFsQixVQUFtQixHQUFZO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQVEsQ0FBQztZQUNyRCxDQUFDLENBQUUsR0FBUztZQUNaLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDZixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7O09BV0c7SUFDSCxpQ0FBVyxHQUFYLFVBQVksS0FBVTtRQUNsQixJQUNJLEtBQUssSUFBSSxJQUFJO1lBQ2IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDckQ7WUFDRSxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRDs7O09BR0c7SUFDSCwrQkFBUyxHQUFULFVBQVUsTUFBVztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxpQ0FBVyxHQUFYLFVBQVksS0FBUSxFQUFFLE1BQVM7UUFDM0IsT0FBTyxDQUNILElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQzdDLENBQUM7SUFDTixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsOEJBQVEsR0FBUixVQUFTLEtBQWUsRUFBRSxNQUFnQjtRQUN0QyxJQUFJLEtBQUssSUFBSSxNQUFNLEVBQUU7WUFDakIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZDLElBQUksVUFBVSxJQUFJLFdBQVcsRUFBRTtnQkFDM0IsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQzNDO1lBQ0QsT0FBTyxVQUFVLElBQUksV0FBVyxDQUFDO1NBQ3BDO1FBQ0QsT0FBTyxLQUFLLElBQUksTUFBTSxDQUFDO0lBQzNCLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsK0JBQVMsR0FBVCxVQUFVLElBQU8sRUFBRSxHQUFjLEVBQUUsR0FBYztRQUM3QyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDeEMsT0FBTyxHQUFHLENBQUM7U0FDZDtRQUNELElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN4QyxPQUFPLEdBQUcsQ0FBQztTQUNkO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5UXVEO0FBQzlCO0FBQ21DO0FBQ3ZCO0FBQ2hCO0FBS1AsU0FBUyxVQUFVLENBQUMsS0FBc0I7SUFDN0MsU0FBaUIsTUFBSyxJQUFJLEVBQUUsT0FBaEIsRUFBWixLQUFLLG1CQUFHLElBQUksTUFBaUI7SUFDckMsSUFBSSxXQUFXLEdBQUcsSUFBSSxTQUFTLENBQUMsMkVBQXVCLENBQUMsQ0FBQztJQUV6RCxvRUFBb0U7SUFDcEUsb0JBQW9CO0lBRXBCLEtBQUssQ0FBQyxnREFBZ0QsRUFBRTtRQUNwRCxPQUFPLEVBQUU7WUFDTCxNQUFNLEVBQ0YseUlBQXlJO1lBQzdJLGlCQUFpQixFQUFFLGtDQUFrQztZQUNyRCxlQUFlLEVBQUUsV0FBVztZQUM1QixjQUFjLEVBQUUsbUNBQW1DO1lBQ25ELFdBQVcsRUFDUCxrRUFBa0U7WUFDdEUsa0JBQWtCLEVBQUUsSUFBSTtZQUN4QixnQkFBZ0IsRUFBRSxVQUFVO1lBQzVCLGdCQUFnQixFQUFFLFVBQVU7WUFDNUIsZ0JBQWdCLEVBQUUsYUFBYTtZQUMvQixnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLDJCQUEyQixFQUFFLEdBQUc7U0FDbkM7UUFDRCxRQUFRLEVBQUUsZ0RBQWdEO1FBQzFELGNBQWMsRUFBRSxpQ0FBaUM7UUFDakQsSUFBSSxFQUNBLCttQ0FBK21DO1FBQ25uQyxNQUFNLEVBQUUsTUFBTTtRQUNkLElBQUksRUFBRSxNQUFNO1FBQ1osV0FBVyxFQUFFLFNBQVM7S0FDekIsQ0FBQyxDQUFDO0lBRUgsT0FBTyxDQUNIO1FBQ0ksaURBQUMsZ0RBQVMsSUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBSTtRQUM1RCwwREFBSyxLQUFLLEVBQUMsMEJBQTBCLEVBQUMsS0FBSyxFQUFDLHFCQUFxQjtZQUM3RCwwREFBSyxLQUFLLEVBQUMsa0JBQWtCLEVBQUMsS0FBSyxFQUFDLGVBQWU7Z0JBQzlDLFdBQVc7MEJBRVYsQ0FDSixDQUNKLENBQ1QsQ0FBQztJQUVGLFNBQVMsVUFBVSxDQUFDLENBQUM7UUFDakIsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUcsSUFBSyxVQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO0lBQ3hELENBQUM7QUFDTCxDQUFDO0FBRUQ7SUFHSSxtQkFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7SUFBRyxDQUFDO0lBRXRDLHdCQUFJLEdBQUosVUFBSyxFQUFtQjtRQUNaLFdBQU8sR0FBSyxJQUFJLFFBQVQsQ0FBVTtRQUN6QixJQUFJLE9BQU8sRUFBRTtZQUNULEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNmO0lBQ0wsQ0FBQztJQUVELDRCQUFRLEdBQVIsVUFBUyxHQUFHO1FBQ1IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUM7QUFPRDtJQUFtQyx3Q0FBMEI7SUFBN0Q7O0lBcUZBLENBQUM7SUFwRkcsc0NBQU8sR0FBUCxVQUFRLElBQW1CO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ0QsdUNBQVEsR0FBUixVQUFTLElBQW1CO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ0Qsc0NBQU8sR0FBUCxVQUFRLElBQW1CO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ0QsMkNBQVksR0FBWixVQUFhLElBQW1CO1FBQzVCLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMvRCxDQUFDO0lBQ0QsNENBQWEsR0FBYixVQUFjLEtBQWtDO1FBQzVDLE9BQU87WUFDSCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7U0FDUixDQUFDO0lBQ04sQ0FBQztJQUNELDJDQUFZLEdBQVo7UUFDSSxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUNELGdEQUFpQixHQUFqQixVQUFrQixLQUFrQztRQUNoRCxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUNELDBDQUFXLEdBQVgsVUFBWSxJQUFtQjtRQUMzQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUNELGdEQUFpQixHQUFqQjtRQUNJLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUNELGdEQUFpQixHQUFqQixVQUFrQixJQUFtQjtRQUNqQyxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFDRCxvQ0FBSyxHQUFMLFVBQU0sSUFBbUI7UUFDckIsb0JBQVksSUFBSSxFQUFHO0lBQ3ZCLENBQUM7SUFDRCx5Q0FBVSxHQUFWLFVBQVcsSUFBWSxFQUFFLEtBQWEsRUFBRSxJQUFZO1FBQ2hELE9BQU8sRUFBRSxJQUFJLFFBQUUsS0FBSyxTQUFFLElBQUksUUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFDRCxvQ0FBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNuQixPQUFPO1lBQ0gsSUFBSSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUU7WUFDckIsS0FBSyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDbkIsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUU7U0FDcEIsQ0FBQztJQUNOLENBQUM7SUFDRCxvQ0FBSyxHQUFMLFVBQU0sS0FBVSxFQUFFLFdBQWdCO1FBQzlCLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0QscUNBQU0sR0FBTixVQUFPLElBQW1CLEVBQUUsYUFBa0I7UUFDMUMsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCwrQ0FBZ0IsR0FBaEIsVUFBaUIsSUFBbUIsRUFBRSxLQUFhO1FBQy9DLDZCQUFZLElBQUksS0FBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLElBQUc7SUFDaEQsQ0FBQztJQUNELGdEQUFpQixHQUFqQixVQUFrQixJQUFtQixFQUFFLE1BQWM7UUFDakQsNkJBQVksSUFBSSxLQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sSUFBRztJQUNuRCxDQUFDO0lBQ0QsOENBQWUsR0FBZixVQUFnQixJQUFtQixFQUFFLElBQVk7UUFDN0MsNkJBQVksSUFBSSxLQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBRztJQUMvQyxDQUFDO0lBQ0Qsd0NBQVMsR0FBVCxVQUFVLElBQW1CO1FBQ3pCLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0QsNkNBQWMsR0FBZCxVQUFlLEdBQVE7UUFDbkIsT0FBTyxHQUFHLElBQUksTUFBTSxJQUFJLEdBQUcsSUFBSSxPQUFPLElBQUksR0FBRyxJQUFJLE1BQU0sSUFBSSxHQUFHLENBQUM7SUFDbkUsQ0FBQztJQUNELHNDQUFPLEdBQVAsVUFBUSxJQUFtQjtRQUN2QixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQztJQUNELHNDQUFPLEdBQVA7UUFDSSxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsMkJBQUM7QUFBRCxDQUFDLENBckZrQyxxRUFBVyxHQXFGN0M7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JLeUI7QUFHbUI7QUFDVTtBQWF4QyxTQUFTLE1BQU0sQ0FBSSxLQUFxQjtJQUNuRCxJQUFNLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2hDLE9BQU87UUFDSCwwREFBSyxLQUFLLEVBQUMsZ0NBQWdDLEVBQUMsS0FBSyxFQUFDLGlCQUFpQjtZQUMvRCx3REFBRyxLQUFLLEVBQUMsMkJBQTJCLEdBQUs7WUFDekMsNkRBQ0ksTUFBTSxFQUFFLFFBQVEsRUFDaEIsRUFBRSxFQUFFLEVBQUUsRUFDTixLQUFLLEVBQUMsNEJBQTRCLEVBQ2xDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztnQkFFbEIsNkRBQVEsS0FBSyxFQUFDLEVBQUUsR0FBVTtnQkFDekIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLElBQUssUUFDdEIsNkRBQVEsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBVSxDQUM3QyxFQUZ5QixDQUV6QixDQUFDO2dCQUNGLGlEQUFDLHlEQUFJLElBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssR0FBSSxDQUNwQztZQUNULDREQUNJLEdBQUcsRUFBRSxFQUFFLEVBQ1AsS0FBSyxFQUFDLG9EQUFvRCxJQUV6RCxLQUFLLENBQUMsS0FBSyxDQUNSO1lBQ1IsMERBQUssS0FBSyxFQUFDLGlCQUFpQixHQUFPLENBQ2pDO1FBQ04sdURBQVM7UUFDVCx3REFDSSxLQUFLLEVBQUMsOEdBQThHLEVBQ3BILEVBQUUsRUFBRSxFQUFFLEdBQUcsY0FBYyxHQUN0QjtLQUNSLENBQUM7SUFFRixTQUFTLFFBQVEsQ0FBQyxHQUFHO1FBQ2pCLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQztBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcER5QjtBQUNKO0FBRVAsU0FBUyxPQUFPO0lBQzNCLE9BQU8sMERBQUssS0FBSyxFQUFDLGdCQUFnQixHQUFPLENBQUM7QUFDOUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0x5QjtBQU9YLFNBQVMsTUFBTSxDQUFDLEtBQWtCO0lBQ3JDLFlBQVEsR0FBSyxNQUFLLElBQUksRUFBRSxVQUFoQixDQUFpQjtJQUNqQyxPQUFPLENBQ0gsMERBQUssS0FBSyxFQUFDLGFBQWEsRUFBQyxJQUFJLEVBQUMsU0FBUztRQUNuQywwREFBSyxLQUFLLEVBQUMsa0JBQWtCO1lBQ3pCLDBEQUNJLEtBQUssRUFBQyxxRUFBcUUsRUFDM0UsS0FBSyxFQUFDLHFCQUFxQjtnQkFFM0IsMERBQ0ksS0FBSyxFQUFDLGtDQUFrQyxFQUN4QyxLQUFLLEVBQUMsZ0JBQWdCO29CQUV0QixpREFBQyxHQUFHLElBQ0EsS0FBSyxFQUFDLHNCQUFzQixFQUM1QixHQUFHLEVBQUMsaUJBQWlCLEVBQ3JCLE1BQU0sRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxJQUFLLFFBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFkLENBQWMsQ0FBQyxHQUM5QztvQkFDRixpREFBQyxHQUFHLElBQ0EsS0FBSyxFQUFDLGdCQUFnQixFQUN0QixHQUFHLEVBQUMsd0JBQXdCLEVBQzVCLE1BQU0sRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxJQUFLLFFBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQWpCLENBQWlCLENBQUMsR0FDakQ7b0JBQ0YsaURBQUMsR0FBRyxJQUNBLEtBQUssRUFBQyxzQkFBc0IsRUFDNUIsR0FBRyxFQUFDLDhCQUE4QixFQUNsQyxNQUFNLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FDakIsVUFBQyxDQUFDLElBQUssUUFBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLGNBQWMsRUFBdkIsQ0FBdUIsQ0FDakMsR0FDSDtvQkFDRixpREFBQyxHQUFHLElBQ0EsS0FBSyxFQUFDLHFCQUFxQixFQUMzQixHQUFHLEVBQUMseUJBQXlCLEVBQzdCLE1BQU0sRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxJQUFLLFFBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLEVBQWxCLENBQWtCLENBQUMsR0FDbEQsQ0FDQSxDQUNKLENBQ0osQ0FDSixDQUNULENBQUM7QUFDTixDQUFDO0FBT0QsU0FBUyxHQUFHLENBQUMsS0FBZTtJQUN4QixJQUFJLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2xDLE9BQU8sQ0FDSCx3REFDSSxJQUFJLEVBQUMsS0FBSyxFQUNWLEtBQUssRUFBQyxxQkFBcUIsbUJBQ2IsT0FBTyxFQUNyQixRQUFRLEVBQUMsSUFBSSxFQUNiLEVBQUUsRUFBRSxNQUFNLEdBQUcsTUFBTSxFQUNuQixJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUc7UUFFZiwyREFBTSxLQUFLLEVBQUMsa0JBQWtCO1lBQzFCLDJEQUFNLEtBQUssRUFBQyxxQkFBcUIsSUFBRSxLQUFLLENBQUMsS0FBSyxDQUFRLENBQ25EO1FBQ1AsMkRBQ0ksS0FBSyxFQUFFO2dCQUNILG1CQUFtQjtnQkFDbkIsS0FBSyxDQUFDLE1BQU07b0JBQ1IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNiLFVBQUMsQ0FBQyxJQUFLLFFBQUMsSUFBSSwyQkFBMkIsRUFBaEMsQ0FBZ0MsQ0FDMUM7b0JBQ0gsQ0FBQyxDQUFDLElBQUk7YUFDYjtZQUVELDJEQUFNLEtBQUssRUFBQyxrRUFBa0UsR0FBUSxDQUNuRjtRQUNQLDJEQUFNLEtBQUssRUFBQyxxQ0FBcUMsR0FBUSxDQUN6RCxDQUNQLENBQUM7QUFDTixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25GeUI7QUFDSjtBQUM2QjtBQThCcEMsU0FBUyxTQUFTLENBQUMsS0FBcUI7SUFDN0MsU0FBSyxHQUFZLEtBQUssTUFBakIsRUFBRSxLQUFLLEdBQUssS0FBSyxNQUFWLENBQVc7SUFDL0IsT0FBTyxDQUNMLHFFQUNFLEtBQUssRUFBQyxvR0FBb0csSUFDdEcsS0FBSyxDQUFDLE1BQU07UUFFaEIsMkRBQU0sS0FBSyxFQUFDLHdCQUF3QixHQUFRO1FBRTVDLDJEQUFNLEVBQUUsRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUFDLG9CQUFvQixJQUN4QyxLQUFLLENBQUMsS0FBSyxDQUNQO1FBRVAsK0VBQ2tCLE9BQU8sRUFDdkIsS0FBSyxFQUFDLHVCQUF1QixFQUM3QixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksSUFBSSxNQUFNLEVBQzFCLEtBQUssRUFBRSxLQUFLLEVBQ1osS0FBSyxFQUFFLGFBQWEsRUFDcEIsTUFBTSxFQUFFLGFBQWEsR0FDckI7UUFFRCxLQUFLLENBQUMsSUFBSSxJQUFJLENBQ2Isd0RBQUcsS0FBSyxFQUFDLG9FQUFvRSxZQUV6RSxDQUNMO1FBRUQsMkRBQU0sS0FBSyxFQUFDLGlCQUFpQixHQUFRO1FBQ3BDLDZEQUFZLENBQ1AsQ0FDVCxDQUFDO0lBRUYsU0FBUyxhQUFhLENBQUMsQ0FBQztRQUN0QixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxRQUFRLElBQUksS0FBSyxFQUFFO1lBQ2xELEtBQUssQ0FBQyxNQUFNLENBQ1YsT0FBTyxLQUFLLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQ3JFLENBQUM7U0FDSDtJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQsNkNBQTZDO0FBQzdDLDZFQUE2RTtBQUM3RSwyQkFBMkI7QUFDM0IscUJBQXFCO0FBQ3JCLG1CQUFtQjtBQUNuQiw0QkFBNEI7QUFDNUIsdUJBQXVCO0FBQ3ZCLHdCQUF3QjtBQUN4QixTQUFTO0FBQ1QsdUNBQXVDO0FBQ3ZDLGVBQWU7QUFDZixxQkFBcUI7QUFDckIsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiwyQkFBMkI7QUFDM0IsZ0JBQWdCO0FBQ2hCLHlCQUF5QjtBQUN6Qix3Q0FBd0M7QUFDeEMsNENBQTRDO0FBQzVDLDBDQUEwQztBQUMxQyw4QkFBOEI7QUFDOUIsb0RBQW9EO0FBQ3BELG9DQUFvQztBQUNwQyxxQ0FBcUM7QUFDckMsc0NBQXNDO0FBQ3RDLHFCQUFxQjtBQUNyQiw4REFBOEQ7QUFDOUQsOEJBQThCO0FBQzlCLDJCQUEyQjtBQUMzQixrREFBa0Q7QUFDbEQsOEJBQThCO0FBQzlCLGlDQUFpQztBQUNqQyxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLHVJQUF1STtBQUN2SSwyQ0FBMkM7QUFDM0Msb0JBQW9CO0FBQ3BCLHNCQUFzQjtBQUN0QixTQUFTO0FBRVQsMkJBQTJCO0FBQzNCLHVDQUF1QztBQUN2Qyw0Q0FBNEM7QUFDNUMsWUFBWTtBQUNaLFFBQVE7QUFDUixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkhzQjtBQUNnQjtBQUNIO0FBQ0k7QUFFckI7QUFFZixJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFFcEIsSUFBTSxXQUFXLEdBQWEsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDbkQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDekMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUN0QjtBQUVNLElBQU0sYUFBYSxHQUFHLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQXdCdkMsU0FBUyxTQUFTLENBQUksS0FBd0I7SUFDakQsdUJBQW1CLEdBQUssS0FBSyxvQkFBVixDQUFXO0lBQ3RDLElBQU0sU0FBUyxHQUFHLElBQUksNkNBQUssQ0FBb0IsRUFBRSxDQUFDLENBQUM7SUFDbkQsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDNUMsSUFBTSxTQUFTLEdBQUcsSUFBSSw2Q0FBSyxDQUFnQixJQUFJLENBQUMsQ0FBQztJQUNqRCxPQUFPLENBQ0gsMERBQUssS0FBSyxFQUFDLDBCQUEwQjtRQUlqQywwREFDSSxFQUFFLEVBQUMsK0JBQStCLEVBQ2xDLEtBQUssRUFBQyxnQkFBZ0IsRUFDdEIsS0FBSyxFQUFFLGNBQWMsRUFDckIsT0FBTyxFQUFDLHdDQUF3QztZQUVoRCwwREFBSyxLQUFLLEVBQUMsdUJBQXVCO2dCQUM5QiwwREFBSyxLQUFLLEVBQUMsaUNBQWlDO29CQUN4QywyREFBTSxLQUFLLEVBQUMsa0NBQWtDO3dCQUN6QyxLQUFLLENBQUMsS0FBSzs7d0JBQUksSUFBSSxDQUFDLE1BQU07NEJBQ3hCO29CQUNQLGlEQUFDLFNBQVMsT0FBRyxDQUNYO2dCQUNOLGlEQUFDLG9EQUFJLElBQUMsTUFBTSxFQUFFLElBQUksSUFDYixVQUFDLEdBQW9CLElBQUssUUFDdkIsaURBQUMsMERBQUUsSUFBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLE9BQU87b0JBQ3RCLGlEQUFDLDBEQUFFLElBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxLQUFLLEtBQUssQ0FBQzt3QkFDMUIsMERBQUssS0FBSyxFQUFDLCtCQUErQixHQUFPLENBQ2hEO29CQUNMLDBEQUNJLEtBQUssRUFBQyx5QkFBeUIsRUFDL0IsYUFBYSxFQUFDLDZCQUE2QixxQkFDMUIsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVO3dCQUVwQywyREFDSSxLQUFLLEVBQUMsa0NBQWtDLEVBQ3hDLEtBQUssRUFDRCxlQUFlO2dDQUNmLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7Z0NBQ3RCLElBQUk7NEJBR1IsaURBQUMsMERBQUUsSUFBQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTTtnQ0FDdEIsd0RBQ0ksS0FBSyxFQUFDLGdCQUFnQixFQUN0QixLQUFLLEVBQUMsK0JBQStCLElBRXBDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDO29DQUNkLFFBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO3dDQUNYLENBQUMsQ0FBQyxzQkFBc0I7d0NBQ3hCLENBQUMsQ0FBQyxxQkFBcUI7Z0NBRjNCLENBRTJCLENBQzlCLENBQ0QsQ0FDSDs0QkFDSixHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FDWixDQUNMLENBQ0wsQ0FDUixFQWxDMEIsQ0FrQzFCLENBQ0U7Z0JBQ1AsMERBQUssS0FBSyxFQUFDLCtCQUErQixHQUFPLENBQy9DO1lBQ04saURBQUMsb0RBQUksSUFBQyxNQUFNLEVBQUUsV0FBVyxJQUNwQixVQUFDLElBQUksSUFBSyxRQUNQLDBEQUFLLEtBQUssRUFBQyx1QkFBdUI7Z0JBQzlCLDBEQUFLLEtBQUssRUFBQyw2QkFBNkIsSUFDbkMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUNqQjtnQkFDTiwwREFBSyxLQUFLLEVBQUMsZ0NBQWdDO29CQUN2QyxpREFBQyxvREFBSSxJQUFDLE1BQU0sRUFBRSxhQUFhLElBQ3RCLFVBQUMsR0FBRyxJQUFLLFFBQ047d0JBQ0ksMERBQUssS0FBSyxFQUFDLHlDQUF5QyxJQUMvQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUM3QixDQUNKLENBQ1QsRUFOUyxDQU1ULENBQ0UsQ0FDTDtnQkFDTixpREFBQyxvREFBSSxJQUFDLE1BQU0sRUFBRSxJQUFJLElBQ2IsVUFBQyxHQUFHLElBQUssd0RBQUMsR0FBRyxJQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsR0FBSSxFQUE3QixDQUE2QixDQUNwQztnQkFDUCwwREFBSyxLQUFLLEVBQUMsK0JBQStCLEdBQU8sQ0FDL0MsQ0FDVCxFQXJCVSxDQXFCVixDQUNFLENBRUwsQ0FDSixDQUNULENBQUM7SUFFRixTQUFTLGNBQWMsQ0FBQyxHQUFlO1FBQzNCLFVBQU0sR0FBSyxHQUFHLE9BQVIsQ0FBUztRQUN2QixJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNmLElBQU0sSUFBSSxHQUFnQixNQUFNLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDakUsSUFBSSxJQUFJLEVBQUU7Z0JBQ0EsU0FBdUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQS9DLElBQUksWUFBRSxVQUFVLGdCQUErQixDQUFDO2dCQUNoRCxVQUFNLEdBQUssSUFBSSxDQUFDLE9BQU8sT0FBakIsQ0FBa0I7Z0JBQ2hDLElBQU0sWUFBWSxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQztnQkFDMUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFDckMsT0FBTzthQUNWO1lBQ0QsSUFBTSxTQUFTLEdBQWdCLE1BQU0sQ0FBQyxPQUFPLENBQ3pDLDBCQUEwQixDQUM3QixDQUFDO1lBQ0YsSUFBSSxTQUFTLEVBQUU7Z0JBQ0gsZ0JBQVUsR0FBSyxTQUFTLENBQUMsT0FBTyxXQUF0QixDQUF1QjtnQkFDekMsSUFBTSxLQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsSUFBSyxRQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxZQUFVLEVBQWhDLENBQWdDLENBQUMsQ0FBQztnQkFDL0QsSUFBSSxLQUFHLEVBQUU7b0JBQ0wsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUM7d0JBQ2YsSUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFHLENBQUMsQ0FBQzt3QkFDM0IsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFOzRCQUNWLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO3lCQUNwQjs2QkFBTTs0QkFDSCxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUcsQ0FBQyxDQUFDO3lCQUNmO29CQUNMLENBQUMsQ0FBQyxDQUFDO29CQUVILElBQU0sS0FBSyxHQUF1QixDQUFDLEtBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDN0MsT0FBTyxLQUFLLENBQUMsTUFBTSxFQUFFO3dCQUNqQixJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7d0JBQ3pCLHdDQUF3Qzt3QkFDeEMsNkJBQTZCO3dCQUM3QiwyQkFBMkI7d0JBQzNCLHFEQUFxRDt3QkFDckQsMkRBQTJEO3dCQUMzRCw0REFBNEQ7d0JBQzVELHdDQUF3Qzt3QkFDeEMsNkJBQTZCO3dCQUM3QixRQUFRO3dCQUNSLElBQUk7cUJBQ1A7aUJBQ0o7YUFDSjtZQUNELElBQU0sR0FBRyxHQUFnQixNQUFNLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDL0QsSUFBSSxHQUFHLEVBQUU7Z0JBQ0MsU0FBdUIsR0FBRyxDQUFDLE9BQU8sRUFBaEMsSUFBSSxZQUFFLFVBQVUsZ0JBQWdCLENBQUM7Z0JBRWpDLFdBQU8sR0FBSyxHQUFHLFFBQVIsQ0FBUztnQkFDeEIsSUFBTSxXQUFXLEdBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQztvQkFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBRTdCLElBQU0sWUFBWSxHQUFHLFdBQVcsR0FBRyxRQUFRLENBQUM7Z0JBQzVDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUM7YUFDeEM7U0FDSjtRQUVELFNBQVMsS0FBSyxDQUFDLE1BQVc7WUFDdEIsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDVCxPQUFPLEtBQUssQ0FBQzthQUNoQjtZQUNELElBQU0sT0FBTyxHQUFHLE1BQXFCLENBQUM7WUFFOUIsYUFBUyxHQUFLLE9BQU8sVUFBWixDQUFhO1lBQzlCLE9BQU8sU0FBUyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBQzdDLENBQUM7UUFFRCxTQUFTLFVBQVUsQ0FBQyxhQUFxQixFQUFFLFlBQW9CO1lBQzNELElBQU0sR0FBRyxHQUFrQixTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxJQUFLLFFBQUMsRUFBRCxDQUFDLENBQUMsQ0FBQztZQUNwRCxJQUFNLGVBQWUsR0FBa0I7Z0JBQ25DLGFBQWE7Z0JBQ2IsUUFBUSxFQUFFO29CQUNOLFlBQVk7aUJBQ2Y7Z0JBQ0QsTUFBTSxFQUFFO29CQUNKLFlBQVksRUFBRSxZQUFZLEdBQUcsUUFBUTtpQkFDeEM7YUFDSixDQUFDO1lBRUYsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsYUFBYSxLQUFLLGFBQWEsRUFBRTtnQkFDN0MsU0FBUyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUNyQztpQkFBTTtnQkFDSyxZQUFRLEdBQWEsR0FBRyxTQUFoQixFQUFFLE1BQU0sR0FBSyxHQUFHLE9BQVIsQ0FBUztnQkFFakMsSUFDSSxzQkFBc0IsQ0FDbEIsWUFBWSxFQUNaLFlBQVksR0FBRyxRQUFRLEVBQ3ZCLFFBQVEsQ0FBQyxZQUFZLEVBQ3JCLE1BQU0sQ0FBQyxZQUFZLENBQ3RCLEVBQ0g7b0JBQ0UsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDMUI7cUJBQU07b0JBQ0gsU0FBUyxDQUFDLE1BQU0sQ0FBQzt3QkFDYixhQUFhO3dCQUNiLFFBQVEsRUFBRTs0QkFDTixZQUFZLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FDbEIsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUN0QixZQUFZLENBQ2Y7eUJBQ0o7d0JBQ0QsTUFBTSxFQUFFOzRCQUNKLFlBQVksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUNsQixDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQ3BCLFlBQVksR0FBRyxRQUFRLENBQzFCO3lCQUNKO3FCQUNKLENBQUMsQ0FBQztpQkFDTjthQUNKO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFNRCxTQUFTLEdBQUcsQ0FBQyxLQUFlO1FBQ2hCLE9BQUcsR0FBVyxLQUFLLElBQWhCLEVBQUUsSUFBSSxHQUFLLEtBQUssS0FBVixDQUFXO1FBQzVCLElBQU0sRUFBRSxHQUFHLFNBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEMsT0FBTyxDQUNILGlEQUFDLDBEQUFFLElBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxPQUFPO1lBQ3RCLGlEQUFDLDBEQUFFLElBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxLQUFLLEtBQUssQ0FBQztnQkFDMUIsMERBQUssS0FBSyxFQUFDLCtCQUErQixHQUFPLENBQ2hEO1lBQ0wsdUVBQ2UsSUFBSSxxQkFDRSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVU7Z0JBQ3BDLG9EQUFvRDtnQkFDcEQsS0FBSyxFQUFFLENBQUMsb0JBQW9CLENBQUM7Z0JBRTdCLGlEQUFDLDBEQUFFLElBQ0MsU0FBUyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUM1QyxVQUFDLEVBQUUsSUFBSyxTQUFFLElBQUksRUFBRSxFQUFSLENBQVEsQ0FDbkI7b0JBRUQsaURBQUMsb0RBQUksSUFBQyxNQUFNLEVBQUUsYUFBYSxJQUN0QixVQUFDLE1BQU0sSUFBSyx3REFBQyxJQUFJLGVBQUssS0FBSyxJQUFFLE1BQU0sRUFBRSxNQUFNLElBQUksRUFBbkMsQ0FBbUMsQ0FDN0MsQ0FDTixDQUNILENBQ0w7UUFDTCxvQkFBb0I7UUFDcEIsV0FBVztRQUNYLHlCQUF5QjtRQUN6Qiw2QkFBNkI7UUFDN0IseURBQXlEO1FBQ3pELDREQUE0RDtRQUM1RCxRQUFRO1FBQ1IsSUFBSTtRQUNKLGtCQUFrQjtTQUNyQixDQUFDO0lBQ04sQ0FBQztJQUVELFNBQVMsZ0JBQWdCLENBQUMsR0FBcUIsRUFBRSxJQUFZO1FBQ3pELElBQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFHO1lBQzVCLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ04sT0FBTyxLQUFLLENBQUM7YUFDaEI7WUFDRCxJQUFJLEdBQUcsQ0FBQyxVQUFVLEtBQUssR0FBRyxDQUFDLGFBQWEsRUFBRTtnQkFDdEMsT0FBTyxLQUFLLENBQUM7YUFDaEI7WUFFTyxZQUFRLEdBQWEsR0FBRyxTQUFoQixFQUFFLE1BQU0sR0FBSyxHQUFHLE9BQVIsQ0FBUztZQUNqQyxJQUFNLFVBQVUsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBRTdCLE9BQU8sc0JBQXNCLENBQ3pCLFVBQVUsRUFDVixVQUFVLEdBQUcsRUFBRSxFQUNmLFFBQVEsQ0FBQyxZQUFZLEVBQ3JCLE1BQU0sQ0FBQyxZQUFZLENBQ3RCLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxTQUFTLGNBQWMsQ0FDbkIsR0FBb0IsRUFDcEIsSUFBWSxFQUNaLE1BQWMsRUFDZCxHQUFrQjtRQUVsQixJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ04sT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELE9BQU8sQ0FDSCxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUMsYUFBYTtZQUN4QyxpQkFBaUIsQ0FBQyxFQUFFLFlBQVksRUFBRSxJQUFJLEdBQUcsRUFBRSxHQUFHLE1BQU0sRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUMvRCxDQUFDO0lBQ04sQ0FBQztJQUVELFNBQVMsU0FBUyxDQUFDLEdBQW9CLEVBQUUsSUFBWTtRQUNqRCxLQUFnQixVQUFhLEVBQWIsK0JBQWEsRUFBYiwyQkFBYSxFQUFiLElBQWEsRUFBRTtZQUExQixJQUFNLENBQUM7WUFDUixJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDMUIsT0FBTyxJQUFJLENBQUM7YUFDZjtTQUNKO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQU9ELFNBQVMsSUFBSSxDQUFDLEtBQWdCO1FBQ2xCLE9BQUcsR0FBbUIsS0FBSyxJQUF4QixFQUFFLElBQUksR0FBYSxLQUFLLEtBQWxCLEVBQUUsTUFBTSxHQUFLLEtBQUssT0FBVixDQUFXO1FBQ3BDLElBQU0sVUFBVSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFHO1lBQ2xDLHFCQUFjLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDO1FBQXRDLENBQXNDLENBQ3pDLENBQUM7UUFDRixJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDM0MsT0FBTyxDQUNILDBEQUNJLEtBQUssRUFBRTtnQkFDSCxxQkFBcUI7Z0JBQ3JCLFVBQVUsQ0FBQyxJQUFJLENBQ1gsVUFBQyxDQUFDLElBQUssUUFBQyxJQUFJLCtCQUErQixFQUFwQyxDQUFvQyxDQUM5QzthQUNKLEVBQ0QsS0FBSyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDO2dCQUNyQixJQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDM0QsSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDVixPQUFPLElBQUksQ0FBQztpQkFDZjtnQkFDRCxJQUFJLENBQUMsRUFBRTtvQkFDSCxPQUFPLGNBQWMsQ0FBQztpQkFDekI7Z0JBQ0QsT0FBTyxvQkFBb0IsR0FBRyxPQUFPLENBQUM7WUFDMUMsQ0FBQyxDQUFDLGlCQUNXLE1BQU07WUFFbkIsd0RBQUcsS0FBSyxFQUFDLDhCQUE4QixJQUNsQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUNwQyxDQUNGLENBQ1QsQ0FBQztJQUNOLENBQUM7QUFDTCxDQUFDO0FBRUQsU0FBUyxjQUFjLENBQUMsR0FBVztJQUMvQixJQUFNLE1BQU0sR0FBYSxFQUFFLENBQUM7SUFDNUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksR0FBRyxFQUFFO1FBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbEI7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBRUQsU0FBUyxZQUFZLENBQUMsS0FBSztJQUN2QixPQUFPLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BDLENBQUM7QUFFRCxTQUFTLFNBQVM7SUFDZCxPQUFPLDhEQUFhLENBQUM7QUFDekIsQ0FBQztBQVlELDZCQUE2QjtBQUM3QixnQ0FBZ0M7QUFDaEMsNkJBQTZCO0FBQzdCLG1CQUFtQjtBQUNuQixNQUFNO0FBQ04sd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4QixRQUFRO0FBQ1IsdURBQXVEO0FBQ3ZELHdCQUF3QjtBQUN4QixRQUFRO0FBRVIsOENBQThDO0FBQzlDLG9DQUFvQztBQUVwQyxxQ0FBcUM7QUFDckMsc0JBQXNCO0FBQ3RCLDJCQUEyQjtBQUMzQixpQ0FBaUM7QUFDakMsOEJBQThCO0FBQzlCLFNBQVM7QUFDVCxLQUFLO0FBRUwsU0FBUyxzQkFBc0IsQ0FDM0IsRUFBVSxFQUNWLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVTtJQUVWLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUVELFNBQVMsaUJBQWlCLENBQUMsRUFBUSxFQUFFLEVBQWlCO0lBQzFDLGdCQUFZLEdBQUssRUFBRSxhQUFQLENBQVE7SUFDNUIsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUU7UUFDekMsT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFDRCxJQUFJLFlBQVksSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTtRQUN4QyxPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFFRCxTQUFTLE9BQU8sQ0FDWixJQUF3QixFQUN4QixTQUFtQztJQUVuQyxJQUFNLEtBQUssR0FBbUQsT0FBTyxDQUNqRSxJQUFJLENBQ1AsQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLElBQUssUUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFaLENBQVksQ0FBQyxDQUFDO0lBQzNCLElBQU0sTUFBTSxHQUFzQixFQUFFLENBQUM7O1FBRzNCLFNBQXdCLEtBQUssQ0FBQyxHQUFHLEVBQUUsRUFBbEMsS0FBSyxVQUFFLElBQUksVUFBRSxRQUFNLFFBQWUsQ0FBQztRQUNsQyxZQUFRLEdBQUssSUFBSSxTQUFULENBQVU7UUFDMUIsSUFBTSxHQUFHLEdBQW9CO1lBQ3pCLEtBQUs7WUFDTCxNQUFNLEVBQUUsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDO1lBQ3pDLElBQUksRUFBRSxJQUFJO1lBQ1YsTUFBTTtZQUNOLE9BQU8sRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRztnQkFDeEIsSUFBSSxDQUFDLEdBQUcsUUFBTSxDQUFDO2dCQUNmLE9BQU8sQ0FBQyxFQUFFO29CQUNOLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTt3QkFDakIsT0FBTyxLQUFLLENBQUM7cUJBQ2hCO29CQUNELENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO2lCQUNoQjtnQkFDRCxPQUFPLElBQUksQ0FBQztZQUNoQixDQUFDLENBQUM7U0FDTCxDQUFDO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLFFBQVE7WUFDUixLQUFvQixVQUFpQixFQUFqQixZQUFPLENBQUMsUUFBUSxDQUFDLEVBQWpCLGNBQWlCLEVBQWpCLElBQWlCLEVBQUU7Z0JBQWxDLElBQU0sS0FBSztnQkFDWixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN2Qzs7SUF2QlQsT0FBTyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7O0tBd0J0QjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFFRCxTQUFTLE9BQU8sQ0FBSSxHQUFRO0lBQ3hCLElBQU0sTUFBTSxHQUFRLEVBQUUsQ0FBQztJQUV2QixLQUFLLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN2QjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzNkYyxTQUFTLE9BQU8sQ0FDM0IsR0FBUSxFQUNSLFFBQTZCLEVBQzdCLFNBQWtDO0lBRWxDLElBQU0sTUFBTSxHQUFVLEVBQUUsQ0FBQztJQUV6QixLQUFtQixVQUFHLEVBQUgsV0FBRyxFQUFILGlCQUFHLEVBQUgsSUFBRyxFQUFFO1FBQW5CLElBQU0sSUFBSTtRQUNYLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsSUFBSSxLQUFLLEVBQUU7WUFDUCxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxQjthQUFNLElBQUksU0FBUyxFQUFFO1lBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO2FBQU07WUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNSLEdBQUc7Z0JBQ0gsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO2FBQ2hCLENBQUMsQ0FBQztTQUNOO0tBQ0o7SUFFRCxPQUFPLE1BQU0sQ0FBQztJQUVkLFNBQVMsU0FBUyxDQUFDLEdBQVc7UUFDMUIsS0FBb0IsVUFBTSxFQUFOLGlCQUFNLEVBQU4sb0JBQU0sRUFBTixJQUFNLEVBQUU7WUFBdkIsSUFBTSxLQUFLO1lBQ1osSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRTtnQkFDbEIsT0FBTyxLQUFLLENBQUM7YUFDaEI7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDRCxJQUFNLGtCQUFrQixHQUFnQjtJQUNwQyxPQUFPLEVBQUU7UUFDTCxNQUFNLEVBQUUsbUNBQW1DO1FBQzNDLGlCQUFpQixFQUFFLGtDQUFrQztRQUNyRCxlQUFlLEVBQUUsVUFBVTtRQUMzQixjQUFjLEVBQUUsZ0NBQWdDO1FBQ2hELE1BQU0sRUFBRSxVQUFVO0tBQ3JCO0lBQ0QsTUFBTSxFQUFFLEtBQUs7SUFDYixJQUFJLEVBQUUsTUFBTTtJQUNaLFdBQVcsRUFBRSxhQUFhO0NBQzdCLENBQUM7QUFFSyxTQUFTLFNBQVMsQ0FBQyxHQUFXLEVBQUUsSUFBc0I7SUFBdEIsZ0NBQXNCO0lBQ3pELE9BQU8sS0FBSyxDQUFDLEdBQUcsd0JBQU8sa0JBQWtCLEdBQUssSUFBSSxFQUFHLENBQUM7QUFDMUQsQ0FBQztBQUVNLFNBQVMsT0FBTyxDQUFDLEdBQVcsRUFBRSxJQUFJLEVBQUUsSUFBc0I7SUFBdEIsZ0NBQXNCO0lBQzdELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsT0FBTyxLQUFLLENBQUMsR0FBRyxpQ0FBTyxrQkFBa0IsR0FBSyxJQUFJLEtBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLFVBQUcsQ0FBQztBQUMvRSxDQUFDO0FBRU0sU0FBUyxRQUFRLENBQUMsR0FBVyxFQUFFLElBQUksRUFBRSxJQUFzQjtJQUF0QixnQ0FBc0I7SUFDOUQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxPQUFPLEtBQUssQ0FBQyxHQUFHLGlDQUFPLGtCQUFrQixHQUFLLElBQUksS0FBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksVUFBRyxDQUFDO0FBQ2hGLENBQUM7QUFFTSxTQUFTLFVBQVUsQ0FBQyxHQUFXLEVBQUUsSUFBc0I7SUFBdEIsZ0NBQXNCO0lBQzFELE9BQU8sS0FBSyxDQUFDLEdBQUcsaUNBQU8sa0JBQWtCLEdBQUssSUFBSSxLQUFFLE1BQU0sRUFBRSxRQUFRLElBQUcsQ0FBQztBQUM1RSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQzdCMkM7QUFDcEI7QUFFeEIsK0NBQU0sQ0FBQyxJQUFJLDhDQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsNkNBQUcsRUFBRSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSFg7QUFDeUI7QUFLNUMsU0FBUyxLQUFLLENBQUMsS0FBaUI7SUFDM0IsU0FBSyxHQUFLLEtBQUssTUFBVixDQUFXO0lBQ3hCLE9BQU8sQ0FDSCwwREFBSyxLQUFLLEVBQUMsc0JBQXNCO1FBQzdCLDhEQUFTLEtBQUssRUFBQyw4QkFBOEI7WUFDekM7Z0JBQ0ksMERBQUssS0FBSyxFQUFDLGlCQUFpQjtvQkFDeEIsaURBQUMsS0FBSyxJQUFDLEtBQUssRUFBQyxNQUFNLEdBQUcsQ0FDcEI7Z0JBQ04sMERBQUssS0FBSyxFQUFDLGlCQUFpQjtvQkFDeEIsaURBQUMsS0FBSyxJQUFDLEtBQUssRUFBQyxVQUFVLEdBQUcsQ0FDeEIsQ0FDSDtZQUNQLDBEQUFLLEtBQUssRUFBQyxvQkFBb0I7Z0JBQzNCLHdEQUFHLFFBQVEsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBQyxLQUFLLEVBQUMsaUJBQWlCLEdBRXBEO2dCQUNKLDZEQUNJLEtBQUssRUFBRSxLQUFLLEVBQ1osS0FBSyxFQUFDLG1EQUFtRDtvQkFFekQsMkRBQU0sS0FBSyxFQUFDLG1CQUFtQixZQUFhLENBQ3ZDLENBQ1AsQ0FDQSxDQUNSLENBQ1QsQ0FBQztBQUNOLENBQUM7QUFNRCxTQUFTLEtBQUssQ0FBQyxLQUFpQjtJQUNwQixTQUFzQixNQUFLLElBQUksRUFBRSxPQUFoQixFQUFqQixLQUFLLG1CQUFHLFNBQVMsTUFBaUI7SUFDMUMsSUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdEMsT0FBTyxDQUNILDBEQUFLLEtBQUssRUFBQyxnQkFBZ0IsRUFBQyxLQUFLLEVBQUMsY0FBYztRQUM1Qyw0REFBTyxLQUFLLEVBQUMsdUJBQXVCLEVBQUMsRUFBRSxFQUFFLEVBQUUsR0FBSTtRQUMvQywwREFBSyxLQUFLLEVBQUMsaUJBQWlCLEdBQU87UUFDbkMsNERBQU8sR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUMsb0JBQW9CLElBQ3JDLEtBQUssQ0FDRjtRQUNQLDZEQUFZLENBQ1gsQ0FDVCxDQUFDO0FBQ04sQ0FBQzs7Ozs7OztVQ3BERDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRTlDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtYXBwLTAwMS8uL212Yy5qcy9vdXRsZXQvb3V0bGV0LnNjc3M/YmIzZSIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vc3JjL2FwcC9hZ2VudHMtcGxhbm5pbmcvdHJhY2tzL3N0eWxlLnNjc3M/ZmQ2MSIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vc3JjL2FwcC9qZW5uYWgvbWVudS1jYXJkL21lbnUtY2FyZC5zY3NzPzI0MDMiLCJ3ZWJwYWNrOi8vanMtYXBwLTAwMS8uL3NyYy9hcHAvc3R5bGUuc2Nzcz9kMWRlIiwid2VicGFjazovL2pzLWFwcC0wMDEvLi9zcmMvY29tcG9uZW50cy9kYXRlLXBpY2tlci9zdHlsZS5zY3NzPzI4MDMiLCJ3ZWJwYWNrOi8vanMtYXBwLTAwMS8uL3NyYy9jb21wb25lbnRzL3NwaW5uZXIvc3R5bGUuc2Nzcz8xNjUzIiwid2VicGFjazovL2pzLWFwcC0wMDEvLi9zcmMvY29tcG9uZW50cy90ZXh0LWZpZWxkL3N0eWxlLnNjc3M/OTI1NyIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vc3JjL2NvbXBvbmVudHMvdGltZS10YWJsZS9zdHlsZS5zY3NzP2NhOGUiLCJ3ZWJwYWNrOi8vanMtYXBwLTAwMS8uL3NyYy9hcHAvamVubmFoL3NjYW4tbWUgMi5zdmciLCJ3ZWJwYWNrOi8vanMtYXBwLTAwMS8uL2dsb3cuanMvY29tcG9uZW50cy9jc3MudHMiLCJ3ZWJwYWNrOi8vanMtYXBwLTAwMS8uL2dsb3cuanMvY29tcG9uZW50cy9pZi50cyIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vZ2xvdy5qcy9jb21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovL2pzLWFwcC0wMDEvLi9nbG93LmpzL2NvbXBvbmVudHMvbGlzdC9oZWxwZXJzLnRzIiwid2VicGFjazovL2pzLWFwcC0wMDEvLi9nbG93LmpzL2NvbXBvbmVudHMvbGlzdC9pbmRleC50cyIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vZ2xvdy5qcy9pbmRleC50cyIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vZ2xvdy5qcy9saWIvZG9tLnRzIiwid2VicGFjazovL2pzLWFwcC0wMDEvLi9nbG93LmpzL2xpYi9kcml2ZXIudHMiLCJ3ZWJwYWNrOi8vanMtYXBwLTAwMS8uL2dsb3cuanMvbGliL2ZyYWdtZW50LnRzIiwid2VicGFjazovL2pzLWFwcC0wMDEvLi9nbG93LmpzL2xpYi90cGwudHMiLCJ3ZWJwYWNrOi8vanMtYXBwLTAwMS8uL2dsb3cuanMvbGliL3V0aWwvY29tYmluZUxhdGVzdC50cyIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vZ2xvdy5qcy9saWIvdXRpbC9oZWxwZXJzLnRzIiwid2VicGFjazovL2pzLWFwcC0wMDEvLi9tdXRhYmwuanMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vanMtYXBwLTAwMS8uL211dGFibC5qcy9saWIvbGlzdC9pbmRleC50cyIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vbXV0YWJsLmpzL2xpYi9saXN0L2xpc3QtbXV0YXRpb24udHMiLCJ3ZWJwYWNrOi8vanMtYXBwLTAwMS8uL211dGFibC5qcy9saWIvb2JzZXJ2YWJsZS50cyIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vbXV0YWJsLmpzL2xpYi9zdG9yZS50cyIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vbXZjLmpzL291dGxldC9pbmRleC50cyIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vbXZjLmpzL3JvdXRlci9pbmRleC50cyIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vbXZjLmpzL3JvdXRlci9saW5rLnRzIiwid2VicGFjazovL2pzLWFwcC0wMDEvLi9tdmMuanMvcm91dGVyL3BhdGgtdGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vanMtYXBwLTAwMS8uL212Yy5qcy9yb3V0ZXIvdXJsLWhlbHBlci50cyIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vc3JjL2FwcC9hZ2VudHMtcGxhbm5pbmcvYnktYWdlbnRzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vc3JjL2FwcC9hZ2VudHMtcGxhbm5pbmcvYnktcG9zaXRpb25zL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vc3JjL2FwcC9hZ2VudHMtcGxhbm5pbmcvZGVtYW5kcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vanMtYXBwLTAwMS8uL3NyYy9hcHAvYWdlbnRzLXBsYW5uaW5nL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vc3JjL2FwcC9hZ2VudHMtcGxhbm5pbmcvc2VydmljZXMvcGxhbm5pbmcudHMiLCJ3ZWJwYWNrOi8vanMtYXBwLTAwMS8uL3NyYy9hcHAvYWdlbnRzLXBsYW5uaW5nL3RyYWNrcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vanMtYXBwLTAwMS8uL3NyYy9hcHAvZW1wbG95ZWVzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vc3JjL2FwcC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vanMtYXBwLTAwMS8uL3NyYy9hcHAvaW52b2ljZXMvYWN0aXZlLWVudGl0eS50cyIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vc3JjL2FwcC9pbnZvaWNlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vanMtYXBwLTAwMS8uL3NyYy9hcHAvamVubmFoL2RlbW8udHN4Iiwid2VicGFjazovL2pzLWFwcC0wMDEvLi9zcmMvYXBwL2plbm5haC9tZW51LWNhcmQvbWFpbi50c3giLCJ3ZWJwYWNrOi8vanMtYXBwLTAwMS8uL3NyYy9jb21wb25lbnRzL2NvcmUvZGF0ZS10aW1lL2RhdGUtYWRhcHRlci50cyIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vc3JjL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvaW5kZXgudHN4Iiwid2VicGFjazovL2pzLWFwcC0wMDEvLi9zcmMvY29tcG9uZW50cy9zZWxlY3QvaW5kZXgudHN4Iiwid2VicGFjazovL2pzLWFwcC0wMDEvLi9zcmMvY29tcG9uZW50cy9zcGlubmVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vc3JjL2NvbXBvbmVudHMvdGFiLWJhci50c3giLCJ3ZWJwYWNrOi8vanMtYXBwLTAwMS8uL3NyYy9jb21wb25lbnRzL3RleHQtZmllbGQvaW5kZXgudHN4Iiwid2VicGFjazovL2pzLWFwcC0wMDEvLi9zcmMvY29tcG9uZW50cy90aW1lLXRhYmxlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vc3JjL2NvcmUvZ3JvdXAtYnkudHMiLCJ3ZWJwYWNrOi8vanMtYXBwLTAwMS8uL3NyYy9jb3JlL2luZGV4LnRzIiwid2VicGFjazovL2pzLWFwcC0wMDEvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vanMtYXBwLTAwMS8uL3NyYy9sb2dpbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vanMtYXBwLTAwMS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vanMtYXBwLTAwMS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanMtYXBwLTAwMS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2pzLWFwcC0wMDEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanMtYXBwLTAwMS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2pzLWFwcC0wMDEvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibXZjLmpzL291dGxldC9vdXRsZXQtM2MyM2UwMjllNjM4YmM3ZWE5YTkxMzZlNjcwMmYwYTIuY3NzXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hcHAvYWdlbnRzLXBsYW5uaW5nL3RyYWNrcy9zdHlsZS0zYzIzZTAyOWU2MzhiYzdlYTlhOTEzNmU2NzAyZjBhMi5jc3NcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2FwcC9qZW5uYWgvbWVudS1jYXJkL21lbnUtY2FyZC0zYzIzZTAyOWU2MzhiYzdlYTlhOTEzNmU2NzAyZjBhMi5jc3NcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2FwcC9zdHlsZS0zYzIzZTAyOWU2MzhiYzdlYTlhOTEzNmU2NzAyZjBhMi5jc3NcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvc3R5bGUtM2MyM2UwMjllNjM4YmM3ZWE5YTkxMzZlNjcwMmYwYTIuY3NzXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9jb21wb25lbnRzL3NwaW5uZXIvc3R5bGUtM2MyM2UwMjllNjM4YmM3ZWE5YTkxMzZlNjcwMmYwYTIuY3NzXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9jb21wb25lbnRzL3RleHQtZmllbGQvc3R5bGUtM2MyM2UwMjllNjM4YmM3ZWE5YTkxMzZlNjcwMmYwYTIuY3NzXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9jb21wb25lbnRzL3RpbWUtdGFibGUvc3R5bGUtM2MyM2UwMjllNjM4YmM3ZWE5YTkxMzZlNjcwMmYwYTIuY3NzXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9hcHAvamVubmFoL3NjYW4tbWUgMi5zdmdcIjsiLCJpbXBvcnQgeyBJRHJpdmVyIH0gZnJvbSAnLi4vbGliL2RyaXZlcic7XHJcbmltcG9ydCB7IFN1YnNjcmliYWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW50ZXJmYWNlIENzc1Byb3BzIHtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG4gIHdoZW4/OiBTdWJzY3JpYmFibGU8Ym9vbGVhbj47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENzcyhwcm9wczogQ3NzUHJvcHMpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcmVuZGVyKGRyaXZlcjogSURyaXZlcikge1xyXG4gICAgICBjb25zdCB7IHdoZW4sIHZhbHVlIH0gPSBwcm9wcztcclxuICAgICAgaWYgKHdoZW4gJiYgdHlwZW9mIHdoZW4uc3Vic2NyaWJlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgY29uc3QgYmluZGluZyA9IGRyaXZlci5jcmVhdGVBdHRyaWJ1dGUoJ2NsYXNzJywgdW5kZWZpbmVkKTtcclxuXHJcbiAgICAgICAgd2hlbi5zdWJzY3JpYmUoKGUpID0+IHtcclxuICAgICAgICAgIGlmIChlKSBiaW5kaW5nLm5leHQodmFsdWUpO1xyXG4gICAgICAgICAgZWxzZSBiaW5kaW5nLm5leHQoW10pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gYmluZGluZztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZHJpdmVyLmNyZWF0ZUF0dHJpYnV0ZSgnY2xhc3MnLCB2YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuaW50ZXJmYWNlIEF0dHJQcm9wcyB7XHJcbiAgdmFsdWU6IGFueTtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgd2hlbj86IFN1YnNjcmliYWJsZTxib29sZWFuPjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gQXR0cihwcm9wczogQXR0clByb3BzKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHJlbmRlcihkcml2ZXI6IElEcml2ZXIpIHtcclxuICAgICAgY29uc3QgeyB3aGVuLCBuYW1lLCB2YWx1ZSB9ID0gcHJvcHM7XHJcbiAgICAgIGlmICh3aGVuICYmIHR5cGVvZiB3aGVuLnN1YnNjcmliZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIGNvbnN0IGJpbmRpbmcgPSBkcml2ZXIuY3JlYXRlQXR0cmlidXRlKG5hbWUsIHVuZGVmaW5lZCk7XHJcblxyXG4gICAgICAgIHdoZW4uc3Vic2NyaWJlKChlKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZSkgYmluZGluZy5uZXh0KHZhbHVlKTtcclxuICAgICAgICAgIGVsc2UgYmluZGluZy5uZXh0KFtdKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGJpbmRpbmc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGRyaXZlci5jcmVhdGVBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICAgIElUZW1wbGF0ZSxcclxuICAgIElEcml2ZXIsXHJcbiAgICBCaW5kaW5nLFxyXG4gICAgQmluZGluZ1ZhbHVlLFxyXG4gICAgaXNTdWJzY3JpYmFibGUsXHJcbn0gZnJvbSAnLi4vbGliL2RyaXZlcic7XHJcbmltcG9ydCB7XHJcbiAgICBhc1RlbXBsYXRlLFxyXG4gICAgRnJhZ21lbnRUZW1wbGF0ZSxcclxuICAgIEVtcHR5VGVtcGxhdGUsXHJcbiAgICByZW5kZXJNYW55LFxyXG4gICAgZmxhdFRyZWUsXHJcbn0gZnJvbSAnLi4vbGliL3RwbCc7XHJcbmltcG9ydCB7IFN1YnNjcmliYWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSWYoXHJcbiAgICBwcm9wczogeyBjb25kaXRpb246IEJpbmRpbmdWYWx1ZTxib29sZWFuPiB9LFxyXG4gICAgY2hpbGRyZW46IElUZW1wbGF0ZVtdXHJcbikge1xyXG4gICAgaWYgKGlzU3Vic2NyaWJhYmxlKHByb3BzLmNvbmRpdGlvbikpIHtcclxuICAgICAgICByZXR1cm4gbmV3IENvbmRpdGlvbmFsVGVtcGxhdGUoXHJcbiAgICAgICAgICAgIHByb3BzLmNvbmRpdGlvbixcclxuICAgICAgICAgICAgZmxhdFRyZWUoY2hpbGRyZW4sIGFzVGVtcGxhdGUpXHJcbiAgICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHByb3BzLmNvbmRpdGlvbikgcmV0dXJuIG5ldyBGcmFnbWVudFRlbXBsYXRlKGNoaWxkcmVuKTtcclxuICAgICAgICBlbHNlIHJldHVybiBuZXcgRW1wdHlUZW1wbGF0ZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDb25kaXRpb25hbFRlbXBsYXRlIGltcGxlbWVudHMgSVRlbXBsYXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBleHByOiBTdWJzY3JpYmFibGU8Ym9vbGVhbj4sXHJcbiAgICAgICAgcHVibGljIF9jaGlsZHJlbjogSVRlbXBsYXRlW11cclxuICAgICkge31cclxuXHJcbiAgICByZW5kZXIoZHJpdmVyOiBJRHJpdmVyKTogQmluZGluZyB7XHJcbiAgICAgICAgY29uc3Qgc2NvcGUgPSBkcml2ZXIuY3JlYXRlU2NvcGUoKTtcclxuICAgICAgICBsZXQgaW5uZXI6IEJpbmRpbmdbXSB8IG51bGwgPSBudWxsO1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBzdWJzY3IgPSBzZWxmLmV4cHIuc3Vic2NyaWJlKCh2aXNpYmxlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgX2NoaWxkcmVuIH0gPSBzZWxmO1xyXG4gICAgICAgICAgICBpZiAodmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgaW5uZXIgPSBpbm5lciB8fCByZW5kZXJNYW55KHNjb3BlLCBfY2hpbGRyZW4pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlubmVyKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGIgb2YgaW5uZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYi5kaXNwb3NlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGIuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlubmVyID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkcml2ZXIoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3Vic2NyICYmIHR5cGVvZiBzdWJzY3IudW5zdWJzY3JpYmUgPT09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgICAgICBzY29wZS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgKiBmcm9tICcuL2xpc3QnO1xyXG5leHBvcnQgKiBmcm9tICcuL2lmJztcclxuIiwiaW1wb3J0IHsgSVRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vbGliL2RyaXZlcic7XHJcbmltcG9ydCB7IGFzVGVtcGxhdGUgfSBmcm9tICcuLi8uLi9saWIvdHBsJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmbGF0VHJlZTxUPihzb3VyY2U6IFRyZWU8VD4sIGFyZ3M6IGFueVtdKTogSVRlbXBsYXRlW10ge1xyXG4gICAgY29uc3Qgc3RhY2s6IFRyZWU8VD4gPSBbc291cmNlXTtcclxuICAgIGNvbnN0IHJlc3VsdDogSVRlbXBsYXRlW10gPSBbXTtcclxuXHJcbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IGN1cnIgPSBzdGFjay5wb3AoKTtcclxuICAgICAgICBpZiAod2luZG93LkFycmF5LmlzQXJyYXkoY3VycikpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGN1cnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goY3VycltpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBjdXJyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZuOiBhbnkgPSBjdXJyO1xyXG4gICAgICAgICAgICBjb25zdCByZXR2YWwgPSBmbi5hcHBseShudWxsLCBhcmdzKTtcclxuICAgICAgICAgICAgc3RhY2sucHVzaChyZXR2YWwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGFzVGVtcGxhdGUoY3VycikgYXMgSVRlbXBsYXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxudHlwZSBGdW5jPFQ+ID0gKC4uLmFyZ3M6IGFueVtdKSA9PiBUcmVlPFQ+O1xyXG50eXBlIFRyZWU8VD4gPSBUIHwgRnVuYzxUPiB8IFRyZWU8VD5bXTtcclxuLy8gdHlwZSBUcmVlPFQ+ID0gVCB8IFsgVHJlZSB8IFRyZWVbXSBdXHJcblxyXG4vLyBjb25zb2xlLmxvZyhlbGVtZW50cyk7XHJcbiIsImltcG9ydCB7IElUZW1wbGF0ZSwgSURyaXZlciwgQmluZGluZywgZGlzcG9zZU1hbnkgfSBmcm9tICcuLi8uLi9saWIvZHJpdmVyJztcclxuaW1wb3J0IHsgcmVuZGVyU3RhY2sgfSBmcm9tICcuLi8uLi9saWIvdHBsJztcclxuaW1wb3J0IHsgZmxhdFRyZWUgfSBmcm9tICcuL2hlbHBlcnMnO1xyXG5pbXBvcnQgKiBhcyBNIGZyb20gJy4uLy4uLy4uL211dGFibC5qcyc7XHJcbmltcG9ydCB7IGFzUHJveHksIGlzRXhwcmVzc2lvbiwgVmFsdWUgfSBmcm9tICcuLi8uLi8uLi9tdXRhYmwuanMnO1xyXG5cclxudHlwZSBEaXNwb3NhYmxlID0geyBkaXNwb3NlKCk6IGFueSB9O1xyXG5cclxudHlwZSBJdGVtVGVtcGxhdGU8VD4gPSAoa2V5LCB2YWx1ZXM6IFQsIGluZGV4OiAoKSA9PiBudW1iZXIpID0+IElUZW1wbGF0ZVtdO1xyXG5pbnRlcmZhY2UgTGlzdFByb3BzPFQ+IHtcclxuICBzb3VyY2U6IE0uTGlzdFN0b3JlPFQ+IHwgVFtdO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBMaXN0PFQ+KHByb3BzOiBMaXN0UHJvcHM8VD4sIF9jaGlsZHJlbjogSXRlbVRlbXBsYXRlPFQ+W10pIHtcclxuICBjb25zdCB7IHNvdXJjZSB9ID0gcHJvcHM7XHJcblxyXG4gIGZ1bmN0aW9uIGl0ZW1UZW1wbGF0ZSh2YWx1ZXM6IFQsIGluZGV4OiAoKSA9PiBudW1iZXIpIHtcclxuICAgIHJldHVybiBmbGF0VHJlZShfY2hpbGRyZW4sIFtcclxuICAgICAgaXNFeHByZXNzaW9uKHZhbHVlcykgPyBhc1Byb3h5KHZhbHVlcykgOiB2YWx1ZXMsXHJcbiAgICAgIHsgaW5kZXgsIGRpc3Bvc2UgfSxcclxuICAgIF0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XHJcbiAgICAgIGNvbnN0IGlkeCA9IGluZGV4KCk7XHJcbiAgICAgIGlmIChpZHggPj0gMCkge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNvdXJjZSkpIHtcclxuICAgICAgICAgIHNvdXJjZS5zcGxpY2UoaWR4LCAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc291cmNlLmFkZCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdyZW1vdmUnLFxyXG4gICAgICAgICAgICBwcmVkaWNhdGU6ICh4KSA9PiB4ID09IHZhbHVlcyxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlbmRlcihkcml2ZXI6IElEcml2ZXIpIHtcclxuICAgICAgY29uc3QgaXRlbXM6IENvbnRhaW5lckl0ZW08VD5bXSA9IFtdO1xyXG4gICAgICBjb25zdCB7IHNvdXJjZSB9ID0gcHJvcHM7XHJcbiAgICAgIGNvbnN0IHJvb3RTY29wZSA9IGRyaXZlci5jcmVhdGVTY29wZSgpO1xyXG4gICAgICBjb25zdCBkaXNwb3NhYmxlID0ge1xyXG4gICAgICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcclxuICAgICAgICAgICAgY29uc3QgeyBzY29wZSwgYmluZGluZ3MgfSA9IGl0ZW07XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYmluZGluZyBvZiBiaW5kaW5ncykge1xyXG4gICAgICAgICAgICAgIGlmIChiaW5kaW5nLmRpc3Bvc2UpIHtcclxuICAgICAgICAgICAgICAgIGJpbmRpbmcuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzY29wZS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHNvdXJjZSkpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvdXJjZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgYXBwbHlNdXRhdGlvbih7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnNlcnQnLFxyXG4gICAgICAgICAgICBpbmRleDogaSxcclxuICAgICAgICAgICAgdmFsdWVzOiBzb3VyY2VbaV0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRpc3Bvc2FibGU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFtzb3VyY2Uuc3Vic2NyaWJlKGFwcGx5TXV0YXRpb24pLCBkaXNwb3NhYmxlXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gYXBwbHlNdXRhdGlvbihtOiBNLkxpc3RNdXRhdGlvbjxUPikge1xyXG4gICAgICAgIGlmIChtLnR5cGUgPT09ICdwdXNoJykge1xyXG4gICAgICAgICAgY29uc3QgeyB2YWx1ZXMgfSA9IG07XHJcbiAgICAgICAgICBhcHBseUluc2VydCh2YWx1ZXMsIGl0ZW1zLmxlbmd0aCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChtLnR5cGUgPT09ICdpbnNlcnQnKSB7XHJcbiAgICAgICAgICBjb25zdCB7IHZhbHVlcywgaW5kZXggfSA9IG07XHJcbiAgICAgICAgICBhcHBseUluc2VydCh2YWx1ZXMsIGluZGV4KTtcclxuICAgICAgICB9IGVsc2UgaWYgKG0udHlwZSA9PT0gJ3JlbW92ZScpIHtcclxuICAgICAgICAgIGNvbnN0IGlkeCA9XHJcbiAgICAgICAgICAgIHR5cGVvZiBtLnByZWRpY2F0ZSA9PT0gJ251bWJlcidcclxuICAgICAgICAgICAgICA/IG0ucHJlZGljYXRlXHJcbiAgICAgICAgICAgICAgOiBpdGVtcy5maW5kSW5kZXgoY29udGFpbmVyUHJlZGljYXRlKG0ucHJlZGljYXRlKSk7XHJcbiAgICAgICAgICAvLyBjb25zdCBpZHggPSBpdGVtcy5maW5kSW5kZXgoKGNpKSA9PiBtLnByZWRpY2F0ZShjaS52YWx1ZXMpKTtcclxuICAgICAgICAgIGlmIChpZHggPj0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gaXRlbXNbaWR4XTtcclxuICAgICAgICAgICAgY29uc3QgeyBzY29wZSwgYmluZGluZ3MgfSA9IGl0ZW07XHJcbiAgICAgICAgICAgIHNjb3BlLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgZGlzcG9zZU1hbnkoYmluZGluZ3MpO1xyXG4gICAgICAgICAgICBpdGVtcy5zcGxpY2UoaWR4LCAxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKG0udHlwZSA9PT0gJ3Jlc2V0Jykge1xyXG4gICAgICAgICAgYXBwbHlSZXNldChtLml0ZW1zKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG0udHlwZSA9PT0gJ21vdmUnKSB7XHJcbiAgICAgICAgICAvLyBUT0RPIGltcGxlbWVudCFcclxuICAgICAgICAgIGNvbnN0IHRtcCA9IGl0ZW1zW20uZnJvbV07XHJcbiAgICAgICAgICBpdGVtc1ttLmZyb21dID0gaXRlbXNbbS50b107XHJcbiAgICAgICAgICBpdGVtc1ttLnRvXSA9IHRtcDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignbm90IGEgbXV0YXRpb24gJywgbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBhcHBseUluc2VydCh2YWx1ZXM6IFQsIGlkeDogbnVtYmVyKSB7XHJcbiAgICAgICAgICBjb25zdCBpdGVtU2NvcGUgPSByb290U2NvcGUuY3JlYXRlU2NvcGUoaWR4KTtcclxuICAgICAgICAgIGNvbnN0IGl0ZW06IENvbnRhaW5lckl0ZW08VD4gPSB7XHJcbiAgICAgICAgICAgIHNjb3BlOiBpdGVtU2NvcGUsXHJcbiAgICAgICAgICAgIHZhbHVlcyxcclxuICAgICAgICAgICAgYmluZGluZ3M6IHJlbmRlclN0YWNrKFxyXG4gICAgICAgICAgICAgIGZsYXRUcmVlKFtpdGVtVGVtcGxhdGVdLCBbdmFsdWVzLCBpbmRleF0pXHJcbiAgICAgICAgICAgICAgICAubWFwKCh0ZW1wbGF0ZSkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgZHJpdmVyOiBpdGVtU2NvcGUsXHJcbiAgICAgICAgICAgICAgICAgIHRlbXBsYXRlLFxyXG4gICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICAucmV2ZXJzZSgpXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgaXRlbXMuc3BsaWNlKGlkeCwgMCwgaXRlbSk7XHJcblxyXG4gICAgICAgICAgZnVuY3Rpb24gaW5kZXgoKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICBjb25zdCBpdGVtID0gaXRlbXNbaV07XHJcbiAgICAgICAgICAgICAgaWYgKGl0ZW0uc2NvcGUgPT09IGl0ZW1TY29wZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBpZHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBhcHBseVJlc2V0KG5ld0l0ZW1zOiBUW10pIHtcclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gZm9yIChjb25zdCBzbmFwIG9mIGl0ZW1zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNuYXAgPSBpdGVtc1tpXTtcclxuICAgICAgICAgICAgY29uc3QgeyB2YWx1ZXMsIHNjb3BlLCBiaW5kaW5ncyB9ID0gc25hcDtcclxuICAgICAgICAgICAgaWYgKHZhbHVlcykge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGlkeCA9IG5ld0l0ZW1zLmZpbmRJbmRleCgoeCkgPT4geCA9PT0gc25hcC52YWx1ZXMpO1xyXG4gICAgICAgICAgICAgIGlmIChpZHggPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBzY29wZS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICBkaXNwb3NlTWFueShiaW5kaW5ncyk7XHJcbiAgICAgICAgICAgICAgICBpdGVtcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0l0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IG5ld0l0ZW1zW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGl0ZW1zLmZpbmRJbmRleCgoY2kpID0+IGNpLnZhbHVlcyA9PT0gdmFsdWVzKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICAgIGFwcGx5TXV0YXRpb24oe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2luc2VydCcsXHJcbiAgICAgICAgICAgICAgICBpbmRleDogaSxcclxuICAgICAgICAgICAgICAgIHZhbHVlcyxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCAhPSBpKSB7XHJcbiAgICAgICAgICAgICAgLy8gaXRlbXNbbl0udXBkYXRlKHZhbHVlcyk7XHJcbiAgICAgICAgICAgICAgYXBwbHlNdXRhdGlvbih7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnbW92ZScsXHJcbiAgICAgICAgICAgICAgICBmcm9tOiBpbmRleCxcclxuICAgICAgICAgICAgICAgIHRvOiBpLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vIGl0ZW1zW25dLnVwZGF0ZSh2YWx1ZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmludGVyZmFjZSBDb250YWluZXJJdGVtPFQ+IHtcclxuICBiaW5kaW5nczogQmluZGluZ1tdO1xyXG4gIHNjb3BlOiBEaXNwb3NhYmxlO1xyXG4gIHZhbHVlczogVDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb250YWluZXJJdGVtQ29udGV4dCB7XHJcbiAgZGlzcG9zZSgpOiBhbnk7XHJcbiAgaW5kZXg6ICgpID0+IG51bWJlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY29udGFpbmVyUHJlZGljYXRlPFQ+KGZpbHRlcjogKHQ6IFQpID0+IGJvb2xlYW4pIHtcclxuICByZXR1cm4gKGNpOiBDb250YWluZXJJdGVtPFQ+KSA9PiBmaWx0ZXIoY2kudmFsdWVzKTtcclxufVxyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9saWIvdHBsJztcclxuZXhwb3J0IHsgdHBsLCByZW5kZXIsIGxhenksIGFzVGVtcGxhdGUgfSBmcm9tICcuL2xpYi90cGwnO1xyXG5leHBvcnQgeyBEb21Ecml2ZXIgfSBmcm9tICcuL2xpYi9kb20nO1xyXG5leHBvcnQgKiBmcm9tICcuL2xpYi9kcml2ZXInO1xyXG4iLCJpbXBvcnQge1xyXG4gIElEcml2ZXIsXHJcbiAgUHJpbWl0aXZlLFxyXG4gIEV4ZWN1dGFibGUsXHJcbiAgVGV4dEVsZW1lbnQsXHJcbiAgY2hpbGRyZW4sXHJcbiAgUGFyZW50LFxyXG4gIENvbXBvbmVudCxcclxuICByZWZlcmVuY2VOb2RlLFxyXG4gIEJpbmRpbmcsXHJcbn0gZnJvbSAnLi9kcml2ZXInO1xyXG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0IH0gZnJvbSAnLi91dGlsL2NvbWJpbmVMYXRlc3QnO1xyXG5cclxuY29uc3QgX19lbXB0eUJpbmRpbmcgPSB7IGRpc3Bvc2UoKSB7fSB9O1xyXG5leHBvcnQgY2xhc3MgRG9tRHJpdmVyIGltcGxlbWVudHMgSURyaXZlciB7XHJcbiAgcHVibGljIHRhcmdldDogSFRNTEVsZW1lbnQ7XHJcbiAgcHVibGljIGRvbUVsZW1lbnRzOiBOb2RlW10gPSBbXTtcclxuICBwcml2YXRlIGV2ZW50czogeyBldmVudE5hbWU6IHN0cmluZzsgZXZlbnRCaW5kaW5nOiBhbnk7IGRvbTogYW55IH1bXSA9IFtdO1xyXG4gIFtjaGlsZHJlbl06IENvbXBvbmVudFtdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHRhcmdldDogc3RyaW5nIHwgSFRNTEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGRvbSA9XHJcbiAgICAgIHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnXHJcbiAgICAgICAgPyAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpIGFzIEhUTUxFbGVtZW50KVxyXG4gICAgICAgIDogdGFyZ2V0O1xyXG4gICAgaWYgKCFkb20pIHtcclxuICAgICAgdGhyb3cgRXJyb3IoJ3RhcmdldCBlbGVtZW50IGlzIHJlcXVpcmVkJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRhcmdldCA9IGRvbTtcclxuICB9XHJcblxyXG4gIGJpbmQ8Uj4oYmluZGVyOiAoZG9tOiBIVE1MRWxlbWVudCkgPT4gUik6IFIge1xyXG4gICAgcmV0dXJuIGJpbmRlcih0aGlzLnRhcmdldCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVEcml2ZXIobm9kZTogSFRNTEVsZW1lbnQpOiBJRHJpdmVyIHtcclxuICAgIHJldHVybiBuZXcgRG9tRHJpdmVyKG5vZGUpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlU2NvcGUoaWR4PzogbnVtYmVyKTogSURyaXZlciB7XHJcbiAgICAvLyBjb25zdCBjb21tZW50Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoYC0tLSAke25hbWV9IC0tLWApO1xyXG4gICAgLy8gdGhpcy50YXJnZXQuYXBwZW5kQ2hpbGQoY29tbWVudE5vZGUpO1xyXG5cclxuICAgIGNvbnN0IHNjb3BlID0gY3JlYXRlU2NvcGUodGhpcywgdGhpcyk7XHJcbiAgICBpZiAodHlwZW9mIGlkeCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgdGhpc1tjaGlsZHJlbl0uc3BsaWNlKGlkeCwgMCwgc2NvcGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpc1tjaGlsZHJlbl0ucHVzaChzY29wZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2NvcGU7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVFdmVudChuYW1lOiBzdHJpbmcsIHZhbHVlOiBGdW5jdGlvbiB8IEV4ZWN1dGFibGU8YW55Pikge1xyXG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuIF9fZW1wdHlCaW5kaW5nO1xyXG5cclxuICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSB0aGlzO1xyXG5cclxuICAgIGlmICghKCdvbicgKyBuYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCkgaW4gdGFyZ2V0KSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBldmVudEhhbmRsZXIpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgZXZlbnRIYW5kbGVyKTtcclxuICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gZXZlbnRIYW5kbGVyKGV2dDogRXZlbnQpIHtcclxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHZhbHVlKGV2dCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFsdWUuZXhlY3V0ZShldnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhcHBlbmRDaGlsZChjaGlsZDogYW55KSB7XHJcbiAgICBjb25zdCBfY2hpbGRyZW4gPSB0aGlzW2NoaWxkcmVuXTtcclxuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcclxuICAgIGlmIChBcnJheS5pc0FycmF5KF9jaGlsZHJlbikpIHtcclxuICAgICAgY29uc3QgY29tcG9uZW50ID0ge1xyXG4gICAgICAgIGluc2VydEJlZm9yZShub2RlOiBOb2RlKSB7XHJcbiAgICAgICAgICBzY29wZS50YXJnZXQuaW5zZXJ0QmVmb3JlKG5vZGUsIGNoaWxkKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgICBjaGlsZC5kaXNwb3NlKCk7XHJcbiAgICAgICAgICByZW1vdmVDb21wb25lbnQoc2NvcGUsIGNvbXBvbmVudCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgICAgX2NoaWxkcmVuLnB1c2goY29tcG9uZW50KTtcclxuICAgICAgdGhpcy50YXJnZXQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS53YXJuKCdpZ25vcmUgY2hpbGQsIGRyaXZlciBpcyBkaXNwb3NlZC4nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZUVsZW1lbnQobmFtZTogc3RyaW5nLCBpbml0OiAoZG9tOiBIVE1MRWxlbWVudCkgPT4gdm9pZCkge1xyXG4gICAgY29uc3QgdGFnTm9kZSA9IGNyZWF0ZURPTUVsZW1lbnQodGhpcy50YXJnZXQsIG5hbWUpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgdGhpcy5hcHBlbmRDaGlsZCh0YWdOb2RlKTtcclxuICAgIGNvbnN0IGRyaXZlciA9IHRoaXMuY3JlYXRlRHJpdmVyKHRhZ05vZGUpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlYWR5KCkge1xyXG4gICAgICAgIGluaXQgJiYgaW5pdCh0YWdOb2RlKTtcclxuICAgICAgfSxcclxuICAgICAgZHJpdmVyKCkge1xyXG4gICAgICAgIHJldHVybiBkcml2ZXI7XHJcbiAgICAgIH0sXHJcbiAgICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgdGFnTm9kZS5yZW1vdmUoKTtcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvLyBpbnNlcnRBdCh0YWdOb2RlLCBpbmRleCwgYW5jaG9yTm9kZSkge1xyXG4gIC8vICAgICBpbnNlcnROb2RlQXQodGhpcywgdGhpcy5kb21FbGVtZW50cywgYW5jaG9yTm9kZSwgdGFnTm9kZSwgaW5kZXgpO1xyXG4gIC8vIH1cclxuXHJcbiAgY3JlYXRlTmF0aXZlKHZhbHVlOiBQcmltaXRpdmUgfCBIVE1MRWxlbWVudCkge1xyXG4gICAgY29uc3Qgbm9kZSA9IGlzRG9tTm9kZSh2YWx1ZSlcclxuICAgICAgPyB2YWx1ZVxyXG4gICAgICA6IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlIGFzIHN0cmluZyk7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKG5vZGUpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5leHQodmFsdWU6IHVua25vd24pIHtcclxuICAgICAgICBub2RlLm5vZGVWYWx1ZSA9IHZhbHVlIGFzIHN0cmluZztcclxuICAgICAgfSxcclxuICAgICAgZGlzcG9zZSgpIHtcclxuICAgICAgICByZXR1cm4gbm9kZS5yZW1vdmUoKTtcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjcmVhdGVBdHRyaWJ1dGUobmFtZTogc3RyaW5nLCB2YWx1ZTogUHJpbWl0aXZlKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlQXR0cmlidXRlKHRoaXMudGFyZ2V0LCBuYW1lLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBmaW5kRXZlbnRCaW5kaW5nKHRhcmdldDogTm9kZSB8IG51bGwsIGV2ZW50TmFtZTogc3RyaW5nKSB7XHJcbiAgICB2YXIgZXZlbnRzID0gdGhpcy5ldmVudHM7XHJcbiAgICBsZXQgbm9kZSA9IHRhcmdldDtcclxuICAgIHdoaWxlIChub2RlKSB7XHJcbiAgICAgIHZhciBlID0gZXZlbnRzLmxlbmd0aDtcclxuICAgICAgd2hpbGUgKGUtLSkge1xyXG4gICAgICAgIHZhciBldiA9IGV2ZW50c1tlXTtcclxuICAgICAgICBpZiAoZXYuZG9tID09PSBub2RlICYmIGV2LmV2ZW50TmFtZSA9PT0gZXZlbnROYW1lKSB7XHJcbiAgICAgICAgICByZXR1cm4gZXYuZXZlbnRCaW5kaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBvbihldmVudE5hbWU6IHN0cmluZywgZG9tOiBIVE1MRWxlbWVudCwgZXZlbnRCaW5kaW5nOiBCaW5kaW5nKSB7XHJcbiAgICB2YXIgZXZlbnRzID0gdGhpcy5ldmVudHMsXHJcbiAgICAgIGkgPSBldmVudHMubGVuZ3RoLFxyXG4gICAgICBldmVudEJvdW5kID0gZmFsc2U7XHJcblxyXG4gICAgd2hpbGUgKGktLSkge1xyXG4gICAgICB2YXIgZXYgPSBldmVudHNbaV07XHJcbiAgICAgIGlmIChldi5ldmVudE5hbWUgPT09IGV2ZW50TmFtZSkge1xyXG4gICAgICAgIGlmIChldi5kb20gPT09IGRvbSkgcmV0dXJuIGV2O1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgZXZlbnRCb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWV2ZW50Qm91bmQpIHtcclxuICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudDtcclxuICAgICAgICBpZiAodGFyZ2V0KSB7XHJcbiAgICAgICAgICB2YXIgZXZlbnRCaW5kaW5nID0gdGhpcy5maW5kRXZlbnRCaW5kaW5nKHRhcmdldCBhcyBOb2RlLCBldmVudE5hbWUpO1xyXG4gICAgICAgICAgaWYgKGV2ZW50QmluZGluZykge1xyXG4gICAgICAgICAgICBldmVudEJpbmRpbmcuZmlyZShldmVudCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZW50cnkgPSB7XHJcbiAgICAgIGV2ZW50TmFtZSxcclxuICAgICAgZG9tLFxyXG4gICAgICBldmVudEJpbmRpbmcsXHJcbiAgICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgdmFyIGlkeCA9IGV2ZW50cy5pbmRleE9mKHRoaXMpO1xyXG4gICAgICAgIGlmIChpZHggPj0gMCkge1xyXG4gICAgICAgICAgZXZlbnRzLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgICB0aGlzLmV2ZW50cy5wdXNoKGVudHJ5KTtcclxuICAgIHJldHVybiBlbnRyeTtcclxuICB9XHJcblxyXG4gIGluc2VydChfOiB1bmtub3duLCBkb206IE5vZGUsIGlkeDogbnVtYmVyKSB7XHJcbiAgICB2YXIgZG9tRWxlbWVudHMgPSB0aGlzLmRvbUVsZW1lbnRzO1xyXG4gICAgdmFyIHRhcmdldCA9IHRoaXMudGFyZ2V0O1xyXG5cclxuICAgIHZhciBjdXJJZHggPSBkb21FbGVtZW50cy5pbmRleE9mKGRvbSk7XHJcbiAgICBpZiAoaWR4ICE9PSBjdXJJZHgpIHtcclxuICAgICAgdmFyIGNoaWxkTm9kZXMgPSB0YXJnZXQuY2hpbGROb2RlcztcclxuICAgICAgaWYgKGlkeCA8IGNoaWxkTm9kZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnQgPSBjaGlsZE5vZGVzW2lkeF07XHJcbiAgICAgICAgaWYgKGN1cnJlbnQgIT09IGRvbSkge1xyXG4gICAgICAgICAgdGFyZ2V0Lmluc2VydEJlZm9yZShkb20sIGN1cnJlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKGRvbSk7XHJcbiAgICAgIH1cclxuICAgICAgdmFyIGxlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xyXG4gICAgICBkb21FbGVtZW50cy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBkb21FbGVtZW50c1tpXSA9IGNoaWxkTm9kZXNbaV07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBkaXNwb3NlKCkge1xyXG4gICAgdmFyIGRvbUVsZW1lbnRzID0gdGhpcy5kb21FbGVtZW50cyxcclxuICAgICAgaSA9IGRvbUVsZW1lbnRzLmxlbmd0aDtcclxuICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgY29uc3QgYSA9IGRvbUVsZW1lbnRzW2ldIGFzIEVsZW1lbnQ7XHJcbiAgICAgIGlmIChhLnJlbW92ZSkge1xyXG4gICAgICAgIGEucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWxldGUgdGhpc1tjaGlsZHJlbl07XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTY29wZShyb290OiBEb21Ecml2ZXIsIHBhcmVudDogUGFyZW50KSB7XHJcbiAgY29uc3QgYXR0cmlidXRlcyA9IFtdO1xyXG4gIGNvbnN0IHNjb3BlID0ge1xyXG4gICAgW2NoaWxkcmVuXTogW10gYXMgQ29tcG9uZW50W10sXHJcbiAgICBnZXQgdGFyZ2V0KCkge1xyXG4gICAgICByZXR1cm4gcm9vdC50YXJnZXQ7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlRXZlbnQoKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3JlYXRlIEV2ZW50IGlzIG5vdCAoeWV0KSBzdXBwb3J0ZWQnKTtcclxuICAgIH0sXHJcbiAgICBjcmVhdGVBdHRyaWJ1dGUobmFtZTogc3RyaW5nLCB2YWx1ZTogUHJpbWl0aXZlIHwgUHJpbWl0aXZlW10pIHtcclxuICAgICAgY29uc3QgYmluZGluZyA9IGNyZWF0ZUF0dHJpYnV0ZShyb290LnRhcmdldCwgbmFtZSwgdmFsdWUpO1xyXG4gICAgICBhdHRyaWJ1dGVzLnB1c2goYmluZGluZyk7XHJcbiAgICAgIHJldHVybiBiaW5kaW5nO1xyXG4gICAgfSxcclxuICAgIGJpbmQ8Uj4oYmluZGVyOiAoZG9tOiBIVE1MRWxlbWVudCkgPT4gUik6IFIge1xyXG4gICAgICByZXR1cm4gcm9vdC5iaW5kKGJpbmRlcik7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlRWxlbWVudChuYW1lOiBzdHJpbmcsIGluaXQ6IGFueSkge1xyXG4gICAgICBjb25zdCB0YWdOb2RlID0gY3JlYXRlRE9NRWxlbWVudChyb290LnRhcmdldCwgbmFtZSkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIGFwcGVuZENoaWxkKHRhZ05vZGUpO1xyXG5cclxuICAgICAgY29uc3QgY29tcG9uZW50ID0ge1xyXG4gICAgICAgIHRhZ05vZGUsXHJcbiAgICAgICAgaW5zZXJ0QmVmb3JlKG5vZGU6IE5vZGUpIHtcclxuICAgICAgICAgIHJvb3QudGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCB0YWdOb2RlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgICB0YWdOb2RlLnJlbW92ZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICAgIGFkZENvbXBvbmVudChjb21wb25lbnQpO1xyXG4gICAgICBjb25zdCBiaW5kaW5nID0ge1xyXG4gICAgICAgIHJlYWR5KCkge1xyXG4gICAgICAgICAgaW5pdCAmJiBpbml0KHRhZ05vZGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZHJpdmVyKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHJvb3QuY3JlYXRlRHJpdmVyKHRhZ05vZGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGlzcG9zZSgpIHtcclxuICAgICAgICAgIHRhZ05vZGUucmVtb3ZlKCk7XHJcbiAgICAgICAgICByZW1vdmVDb21wb25lbnQoc2NvcGUsIGNvbXBvbmVudCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuIGJpbmRpbmc7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlTmF0aXZlKHZhbHVlOiBQcmltaXRpdmUpOiBUZXh0RWxlbWVudCB7XHJcbiAgICAgIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUgYXMgc3RyaW5nKTtcclxuICAgICAgYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xyXG4gICAgICBjb25zdCBjb21wb25lbnQgPSB7XHJcbiAgICAgICAgdGV4dE5vZGUsXHJcbiAgICAgICAgaW5zZXJ0QmVmb3JlKG5vZGU6IE5vZGUpIHtcclxuICAgICAgICAgIHJvb3QudGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCB0ZXh0Tm9kZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkaXNwb3NlKCkge1xyXG4gICAgICAgICAgdGV4dE5vZGUucmVtb3ZlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgICAgYWRkQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcblxyXG4gICAgICBjb25zdCBiaW5kaW5nID0ge1xyXG4gICAgICAgIG5leHQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgICAgdGV4dE5vZGUubm9kZVZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkaXNwb3NlKCkge1xyXG4gICAgICAgICAgdGV4dE5vZGUucmVtb3ZlKCk7XHJcbiAgICAgICAgICByZW1vdmVDb21wb25lbnQoc2NvcGUsIGNvbXBvbmVudCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuIGJpbmRpbmc7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlU2NvcGUoaWR4PzogbnVtYmVyKSB7XHJcbiAgICAgIC8vIGNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KGAtLSAke25hbWV9IC0tYCk7XHJcbiAgICAgIC8vIHNjb3BlLmFwcGVuZENoaWxkKGNvbW1lbnQpO1xyXG4gICAgICBjb25zdCBzdWJzY29wZSA9IGNyZWF0ZVNjb3BlKHJvb3QsIHNjb3BlKTtcclxuICAgICAgaWYgKHR5cGVvZiBpZHggPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgc2NvcGVbY2hpbGRyZW5dLnNwbGljZShpZHgsIDAsIHN1YnNjb3BlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzY29wZVtjaGlsZHJlbl0ucHVzaChzdWJzY29wZSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHN1YnNjb3BlO1xyXG4gICAgfSxcclxuICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgIHJlbW92ZUNvbXBvbmVudChwYXJlbnQsIHNjb3BlKTtcclxuICAgICAgLy8gZGVsaWJlcmF0ZWx5IHVzZSB0aGUgY2hpbGRyZW4gYXJyYXkgaW5zdGFuY2UgaW5zdGVhZCBvZiBjbG9uaW5nIGl0LlxyXG4gICAgICAvLyBkaXNwb3NlQ2hpbGRyZW4oc2NvcGVbY2hpbGRyZW5dKTtcclxuICAgICAgZGVsZXRlIHNjb3BlW2NoaWxkcmVuXTsgLy8gbWFyayBhcyBkaXNwb3NlZFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBhcHBlbmRDaGlsZChub2RlOiBDb21tZW50IHwgSFRNTEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IHJlZk5vZGUgPSByZWZlcmVuY2VOb2RlKHJvb3QsIHNjb3BlKTtcclxuICAgIGlmIChyZWZOb2RlKSB7XHJcbiAgICAgIHJlZk5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUpO1xyXG4gICAgfSBlbHNlIHJvb3QudGFyZ2V0LmFwcGVuZENoaWxkKG5vZGUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkQ29tcG9uZW50KGNvbXBvbmVudDogQ29tcG9uZW50KSB7XHJcbiAgICBjb25zdCBfY2hpbGRyZW4gPSBzY29wZVtjaGlsZHJlbl07XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShfY2hpbGRyZW4pKSB7XHJcbiAgICAgIF9jaGlsZHJlbi5wdXNoKGNvbXBvbmVudCk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICdhcHBlbmRpbmcgY2hpbGQgaXMgc2tpcHBlZCBiZWNhdXNlIHNjb3BlIGlzIGRpc3Bvc2VkIGFscmVhZHkuJ1xyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBzY29wZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQ29tcG9uZW50KHNjb3BlOiBQYXJlbnQsIG5vZGU6IENvbXBvbmVudCkge1xyXG4gIGNvbnN0IF9jaGlsZHJlbiA9IHNjb3BlW2NoaWxkcmVuXTtcclxuICBpZiAoIUFycmF5LmlzQXJyYXkoX2NoaWxkcmVuKSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaWR4ID0gX2NoaWxkcmVuLmluZGV4T2Yobm9kZSk7XHJcbiAgaWYgKGlkeCA+PSAwKSB7XHJcbiAgICBfY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBdHRyaWJ1dGUoXHJcbiAgdGFyZ2V0OiBIVE1MRWxlbWVudCxcclxuICBuYW1lOiBzdHJpbmcsXHJcbiAgdmFsdWU6IFByaW1pdGl2ZSB8IFByaW1pdGl2ZVtdXHJcbikge1xyXG4gIHZhciBwcmV2VmFsdWVzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIGlmIChuYW1lID09PSAnZGlzYWJsZWQnKSB7XHJcbiAgICBpc0Rpc2FibGVkKHRhcmdldCwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGFyZ2V0LFxyXG4gICAgICBuZXh0OiAodmFsdWU6IGFueSkgPT4gaXNEaXNhYmxlZCh0YXJnZXQsIHZhbHVlKSxcclxuICAgICAgZGlzcG9zZSgpIHtcclxuICAgICAgICBpc0Rpc2FibGVkKHRhcmdldCwgZmFsc2UpO1xyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9IGVsc2UgaWYgKG5hbWUgPT09ICdjbGFzcycpIHtcclxuICAgIGNvbnN0IHN1YnNjciA9IGNvbWJpbmVMYXRlc3QoXHJcbiAgICAgIEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdXHJcbiAgICApLnN1YnNjcmliZShjbGFzc05hbWUpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGFyZ2V0LFxyXG4gICAgICBuZXh0OiBjbGFzc05hbWUsXHJcbiAgICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgc3Vic2NyLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgcHJldlZhbHVlcy5mb3JFYWNoKChjbCkgPT4gY2wgJiYgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoY2wpKTtcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfSBlbHNlIGlmIChuYW1lID09PSAndmFsdWUnKSB7XHJcbiAgICB2YWx1ZUF0dHJpYnV0ZSh0b1N0cmluZyh2YWx1ZSkpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmV4dDogdmFsdWVBdHRyaWJ1dGUsXHJcbiAgICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfSBlbHNlIHtcclxuICAgIGRlZmF1bHRBdHRyaWJ1dGUodG9TdHJpbmcodmFsdWUpKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5leHQ6IGRlZmF1bHRBdHRyaWJ1dGUsXHJcbiAgICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbGFzc05hbWUodmFsdWU6IGFueSkge1xyXG4gICAgY29uc3QgbmV4dFZhbHVlcyA9IFtdO1xyXG5cclxuICAgIGNvbnN0IHN0YWNrID0gW3ZhbHVlXTtcclxuICAgIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgY3VyciA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICBpZiAoY3VyciA9PT0gbnVsbCB8fCBjdXJyID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY3VycikpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGN1cnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIHN0YWNrLnB1c2goY3VycltpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBjdXJyID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGNvbnN0IHNwbGl0ID0gY3Vyci5zcGxpdCgnICcpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3BsaXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGNvbnN0IGNsID0gc3BsaXRbaV07XHJcbiAgICAgICAgICBpZiAoY2wpIG5leHRWYWx1ZXMucHVzaChjbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHNwbGl0ID0gY3Vyci50b1N0cmluZygpLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzcGxpdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgY29uc3QgY2wgPSBzcGxpdFtpXTtcclxuICAgICAgICAgIGlmIChjbCkgbmV4dFZhbHVlcy5wdXNoKGNsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcmV2VmFsdWVzLmZvckVhY2goKGNsKSA9PiB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShjbCkpO1xyXG4gICAgbmV4dFZhbHVlcy5mb3JFYWNoKChjbCkgPT4gdGFyZ2V0LmNsYXNzTGlzdC5hZGQoY2wpKTtcclxuICAgIHByZXZWYWx1ZXMgPSBuZXh0VmFsdWVzO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdmFsdWVBdHRyaWJ1dGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgaWYgKGlzSW5wdXRFbGVtZW50KHRhcmdldCkpIHtcclxuICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0YXJnZXQudmFsdWUgPSAnJztcclxuICAgICAgfSBlbHNlIGlmICh0YXJnZXQudHlwZSA9PT0gJ2RhdGUnKSB7XHJcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgLy8gZW5zdXJlIEdNVCB0aW1lem9uZVxyXG4gICAgICAgIC8vIGh0dHBzOi8vYXVzdGluZnJhbmNlLndvcmRwcmVzcy5jb20vMjAxMi8wNy8wOS9odG1sNS1kYXRlLWlucHV0LWZpZWxkLWFuZC12YWx1ZWFzZGF0ZS10aW1lem9uZS1nb3RjaGEtMy9cclxuICAgICAgICB0YXJnZXQudmFsdWVBc0RhdGUgPSBuZXcgRGF0ZShcclxuICAgICAgICAgIGQuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgICAgIGQuZ2V0TW9udGgoKSxcclxuICAgICAgICAgIGQuZ2V0RGF0ZSgpLFxyXG4gICAgICAgICAgMTJcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2UgdGFyZ2V0LnZhbHVlID0gdmFsdWU7XHJcblxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBkZWZhdWx0QXR0cmlidXRlKHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRlZmF1bHRBdHRyaWJ1dGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgaWYgKHZhbHVlID09PSB2b2lkIDAgfHwgdmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgdGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciBhdHRyID0gZG9jdW1lbnQuY3JlYXRlQXR0cmlidXRlTlMobnVsbCwgbmFtZSk7XHJcbiAgICAgIGF0dHIudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZU5vZGUoYXR0cik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXROYW1lc3BhY2VVUkkodGFyZ2V0OiBIVE1MRWxlbWVudCwgbmFtZTogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIG5hbWUgPT09ICdzdmcnXHJcbiAgICA/ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgIDogdGFyZ2V0XHJcbiAgICA/IHRhcmdldC5uYW1lc3BhY2VVUklcclxuICAgIDogbnVsbDtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVET01FbGVtZW50KHRhcmdldDogSFRNTEVsZW1lbnQsIG5hbWU6IHN0cmluZykge1xyXG4gIGNvbnN0IG5hbWVzcGFjZVVSSSA9IGdldE5hbWVzcGFjZVVSSSh0YXJnZXQsIG5hbWUpO1xyXG4gIGNvbnN0IHRhZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlVVJJLCBuYW1lKTtcclxuXHJcbiAgcmV0dXJuIHRhZ05vZGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlOiBhbnkpIHtcclxuICBpZiAodmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykgcmV0dXJuIHZhbHVlO1xyXG5cclxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykgcmV0dXJuIHZhbHVlO1xyXG5cclxuICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRG9tTm9kZShvYmo6IGFueSk6IG9iaiBpcyBIVE1MRWxlbWVudCB7XHJcbiAgdHJ5IHtcclxuICAgIC8vVXNpbmcgVzMgRE9NMiAod29ya3MgZm9yIEZGLCBPcGVyYSBhbmQgQ2hyb21lKVxyXG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIC8vQnJvd3NlcnMgbm90IHN1cHBvcnRpbmcgVzMgRE9NMiBkb24ndCBoYXZlIEhUTUxFbGVtZW50IGFuZFxyXG4gICAgLy9hbiBleGNlcHRpb24gaXMgdGhyb3duIGFuZCB3ZSBlbmQgdXAgaGVyZS4gVGVzdGluZyBzb21lXHJcbiAgICAvL3Byb3BlcnRpZXMgdGhhdCBhbGwgZWxlbWVudHMgaGF2ZSAod29ya3Mgb24gSUU3KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiZcclxuICAgICAgb2JqLm5vZGVUeXBlID09PSAxICYmXHJcbiAgICAgIHR5cGVvZiBvYmouc3R5bGUgPT09ICdvYmplY3QnICYmXHJcbiAgICAgIHR5cGVvZiBvYmoub3duZXJEb2N1bWVudCA9PT0gJ29iamVjdCdcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc0lucHV0RWxlbWVudChlbHQ6IGFueSk6IGVsdCBpcyBIVE1MSW5wdXRFbGVtZW50IHtcclxuICByZXR1cm4gZWx0ICYmICd2YWx1ZScgaW4gZWx0ICYmICd0eXBlJyBpbiBlbHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRGlzYWJsZWQodGFyZ2V0OiBIVE1MRWxlbWVudCwgdmFsdWU6IGFueSkge1xyXG4gIGlmIChpc0lucHV0RWxlbWVudCh0YXJnZXQpKSB7XHJcbiAgICB0YXJnZXQuZGlzYWJsZWQgPSAhIXZhbHVlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTdWJzY3JpYmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCB0eXBlIEV4ZWN1dGFibGU8VD4gPSB7IGV4ZWN1dGU6IChlOiBUKSA9PiBhbnkgfSB8IEZ1bmN0aW9uO1xyXG5leHBvcnQgdHlwZSBCaW5kaW5nVmFsdWU8VD4gPSBUIHwgU3Vic2NyaWJhYmxlPFQ+O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoaWxkcmVuID0gU3ltYm9sKCdjaGlsZHJlbicpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRHJpdmVyIHtcclxuICAgIGJpbmQ8Uj4oYmluZGVyOiAoZG9tOiBIVE1MRWxlbWVudCkgPT4gUik6IFI7XHJcbiAgICBjcmVhdGVFbGVtZW50KG5hbWU6IHN0cmluZywgaW5pdD86IEFjdGlvbjxhbnk+KTogVGFnRWxlbWVudDtcclxuICAgIGNyZWF0ZU5hdGl2ZSh2YWx1ZTogYW55KTogVGV4dEVsZW1lbnQ7XHJcbiAgICBjcmVhdGVBdHRyaWJ1dGUobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55IHwgYW55W10pOiBUZXh0RWxlbWVudDtcclxuICAgIGNyZWF0ZUV2ZW50KFxyXG4gICAgICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAgICB2YWx1ZTogRXhlY3V0YWJsZTxhbnk+IHwgRnVuY3Rpb25cclxuICAgICk6IFRhZ0V2ZW50IHwgbnVsbDtcclxuICAgIGNyZWF0ZVNjb3BlKGlkeD86IG51bWJlcik6IElEcml2ZXI7XHJcbiAgICBkaXNwb3NlKCk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFnRXZlbnQge1xyXG4gICAgZGlzcG9zZSgpOiBhbnk7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBUYWdFbGVtZW50IHtcclxuICAgIHJlYWR5PygpOiBhbnk7XHJcbiAgICBkcml2ZXI/KCk6IElEcml2ZXI7XHJcbiAgICBkaXNwb3NlKCk6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUZXh0RWxlbWVudCB7XHJcbiAgICBkaXNwb3NlKCk6IHZvaWQ7XHJcbiAgICBuZXh0KHZhbHVlOiBQcmltaXRpdmUgfCBQcmltaXRpdmVbXSk6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTY29wZUVsZW1lbnQge1xyXG4gICAgZHJpdmVyKGluZGV4PzogbnVtYmVyKTogSURyaXZlcjtcclxuICAgIGRpc3Bvc2UoKTogYW55O1xyXG59XHJcblxyXG5leHBvcnQgZGVjbGFyZSB0eXBlIFByb3BzID0geyBba2V5OiBzdHJpbmddOiBhbnkgfTtcclxuZXhwb3J0IGRlY2xhcmUgdHlwZSBFbGVtZW50ID0gVGFnRWxlbWVudCB8IFRleHRFbGVtZW50IHwgU2NvcGVFbGVtZW50O1xyXG5leHBvcnQgdHlwZSBQcmltaXRpdmUgPSBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgRGF0ZTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1ByaW1pdGl2ZSh2YWx1ZTogYW55KTogdmFsdWUgaXMgUHJpbWl0aXZlIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8XHJcbiAgICAgICAgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fFxyXG4gICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nIHx8XHJcbiAgICAgICAgdmFsdWUgaW5zdGFuY2VvZiBEYXRlXHJcbiAgICApO1xyXG59XHJcblxyXG5kZWNsYXJlIHR5cGUgQWN0aW9uPFQ+ID0gKGFyZzogVCkgPT4gYW55O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVGVtcGxhdGUge1xyXG4gICAgcmVuZGVyKGRyaXZlcjogSURyaXZlciwgaW5pdD86IEFjdGlvbjxhbnk+KTogQmluZGluZyB8IG51bGw7XHJcbiAgICBjaGlsZHJlbj86IElUZW1wbGF0ZVtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJpbmRpbmcge1xyXG4gICAgZHJpdmVyPygpOiBJRHJpdmVyO1xyXG4gICAgZGlzcG9zZT8oKTogYW55O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdCh2aWV3OiBJVGVtcGxhdGUsIGNhbGxiYWNrOiAoZG9tOiBhbnkpID0+IGFueSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjaGlsZHJlbjogdmlldy5jaGlsZHJlbixcclxuICAgICAgICByZW5kZXIoZHJpdmVyOiBJRHJpdmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2aWV3LnJlbmRlcihkcml2ZXIsIGNhbGxiYWNrKTtcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU3Vic2NyaWJhYmxlPFQ+KHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBTdWJzY3JpYmFibGU8VD4ge1xyXG4gICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZS5zdWJzY3JpYmUgPT09ICdmdW5jdGlvbic7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFyZW50IHtcclxuICAgIFtjaGlsZHJlbl06IENvbXBvbmVudFtdO1xyXG59XHJcbmludGVyZmFjZSBMZWFmIHtcclxuICAgIGluc2VydEJlZm9yZShub2RlOiBDb21tZW50IHwgSFRNTEVsZW1lbnQpOiBhbnk7XHJcbiAgICBkaXNwb3NlKCk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIENvbXBvbmVudCA9IExlYWYgfCBQYXJlbnQ7XHJcblxyXG5mdW5jdGlvbiBpc1BhcmVudChub2RlOiBhbnkpOiBub2RlIGlzIFBhcmVudCB7XHJcbiAgICBpZiAobm9kZSA9PSBudWxsKSByZXR1cm4gZmFsc2U7XHJcbiAgICBpZiAodHlwZW9mIG5vZGUgPT09ICdvYmplY3QnKSByZXR1cm4gY2hpbGRyZW4gaW4gbm9kZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZmVyZW5jZU5vZGUocm9vdDogUGFyZW50LCBub2RlOiBDb21wb25lbnQpIHtcclxuICAgIGNvbnN0IHN0YWNrOiBDb21wb25lbnRbXSA9IFtyb290XTtcclxuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IGN1cnIgPSBzdGFjay5wb3AoKTtcclxuICAgICAgICBpZiAoY3VyciA9PT0gbm9kZSkge1xyXG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpc1BhcmVudChjdXJyKSkge1xyXG4gICAgICAgICAgICBjb25zdCBfY2hpbGRyZW4gPSBjdXJyW2NoaWxkcmVuXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IF9jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChfY2hpbGRyZW5baV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChmb3VuZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY3VycjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuaW50ZXJmYWNlIERpc3Bvc2FibGUge1xyXG4gICAgZGlzcG9zZT8oKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3Bvc2VNYW55KGRpc3Bvc2FibGVzOiBudWxsIHwgRGlzcG9zYWJsZSB8IERpc3Bvc2FibGVbXSkge1xyXG4gICAgaWYgKCFkaXNwb3NhYmxlcykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHN0YWNrOiBEaXNwb3NhYmxlW10gPSBBcnJheS5pc0FycmF5KGRpc3Bvc2FibGVzKVxyXG4gICAgICAgID8gZGlzcG9zYWJsZXMuc2xpY2UoMClcclxuICAgICAgICA6IFtkaXNwb3NhYmxlc107XHJcbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgY3VycjogYW55ID0gc3RhY2sucG9wKCk7XHJcbiAgICAgICAgaWYgKCFjdXJyKSBjb250aW51ZTtcclxuICAgICAgICBpZiAodHlwZW9mIGN1cnIuZGlzcG9zZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBjdXJyLmRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IF9jaGlsZHJlbiA9IGN1cnJbY2hpbGRyZW5dO1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KF9jaGlsZHJlbikpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IF9jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChfY2hpbGRyZW5baV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IElUZW1wbGF0ZSB9IGZyb20gJy4vZHJpdmVyLmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBGcmFnbWVudChfcHJvcHM6IHt9LCBjaGlsZHJlbj86IGFueVtdKTogYW55W10gfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIGNoaWxkcmVuO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoXHJcbiAgICBfcHJvcHM6IHt9LFxyXG4gICAgY2hpbGRyZW4/OiBhbnlbXVxyXG4pOiBJVGVtcGxhdGVbXSB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gY2hpbGRyZW47XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICAgIEJpbmRpbmcsXHJcbiAgICBQcm9wcyxcclxuICAgIElUZW1wbGF0ZSxcclxuICAgIElEcml2ZXIsXHJcbiAgICBQcmltaXRpdmUsXHJcbiAgICBpc1ByaW1pdGl2ZSxcclxuICAgIGRpc3Bvc2VNYW55LFxyXG59IGZyb20gJy4vZHJpdmVyJztcclxuaW1wb3J0IHsgaXNEb21Ob2RlLCBEb21Ecml2ZXIgfSBmcm9tICcuL2RvbSc7XHJcbmltcG9ydCB7IGlzTmV4dE9ic2VydmVyIH0gZnJvbSAnLi4vbGliL3V0aWwvaGVscGVycyc7XHJcbmltcG9ydCB7IFN1YnNjcmliYWJsZSwgT2JzZXJ2ZXIsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0IH0gZnJvbSAnLi91dGlsL2NvbWJpbmVMYXRlc3QnO1xyXG5cclxuZGVjbGFyZSB0eXBlIFB1cmVDb21wb25lbnQgPSAoLi4uYXJnczogYW55KSA9PiBhbnk7XHJcbmRlY2xhcmUgdHlwZSBGdW5jPFQ+ID0gKGFyZzogVCkgPT4gYW55O1xyXG5kZWNsYXJlIHR5cGUgQXR0YWNoYWJsZSA9IHtcclxuICAgIGF0dGFjaFRvOiAoZG9tOiBIVE1MRWxlbWVudCkgPT4geyBkaXNwb3NlKCk6IGFueSB9O1xyXG59O1xyXG5leHBvcnQgZGVjbGFyZSB0eXBlIENvbXBvbmVudCA9IHtcclxuICAgIHZpZXc6IGFueTtcclxuICAgIGRpc3Bvc2U/KCk6IHZvaWQ7XHJcbn07XHJcblxyXG50eXBlIFRlbXBsYXRlRWxlbWVudCA9XHJcbiAgICB8IFByaW1pdGl2ZVxyXG4gICAgfCBTdWJzY3JpYmFibGU8UHJpbWl0aXZlPlxyXG4gICAgfCBzdHJpbmdcclxuICAgIHwgUHVyZUNvbXBvbmVudFxyXG4gICAgfCBJVGVtcGxhdGVcclxuICAgIHwgeyB2aWV3OiBUZW1wbGF0ZUVsZW1lbnQgfVxyXG4gICAgfCBIVE1MRWxlbWVudDtcclxudHlwZSBUZW1wbGF0ZUlucHV0ID0gVGVtcGxhdGVFbGVtZW50IHwgVGVtcGxhdGVFbGVtZW50W107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdHBsKFxyXG4gICAgbmFtZTogVGVtcGxhdGVJbnB1dCxcclxuICAgIHByb3BzOiBQcm9wcyB8IG51bGwgPSBudWxsLFxyXG4gICAgLi4uY2hpbGRyZW46IGFueVtdXHJcbik6IElUZW1wbGF0ZSB8IElUZW1wbGF0ZVtdIHtcclxuICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBjb25zdCBmbGF0Q2hpbGRyZW4gPSBmbGF0VHJlZShjaGlsZHJlbiwgKGUpID0+IGUpO1xyXG4gICAgICAgIHJldHVybiBuZXcgVGFnVGVtcGxhdGUoXHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIHByb3BzXHJcbiAgICAgICAgICAgICAgICA/IChhdHRyaWJ1dGVzKHByb3BzKSBhcyBJVGVtcGxhdGVbXSkuY29uY2F0KGZsYXRDaGlsZHJlbilcclxuICAgICAgICAgICAgICAgIDogZmxhdENoaWxkcmVuXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICByZXR1cm4gY29uc3RydWN0KG5hbWUsIFtwcm9wcywgY2hpbGRyZW5dKSB8fCBuYW1lKHByb3BzLCBjaGlsZHJlbik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFzVGVtcGxhdGUobmFtZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsYXp5PFQ+KGZuOiAoKSA9PiBUIHwgU3Vic2NyaWJhYmxlPFQ+KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1YnNjcmliZShvYnNlcnZlcjogT2JzZXJ2ZXI8VD4pIHtcclxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZm4oKTtcclxuICAgICAgICAgICAgaWYgKGlzU3Vic2NyaWJhYmxlKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnN1YnNjcmliZShvYnNlcnZlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB1bnN1YnNjcmliZSgpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnN0cnVjdChmdW5jOiBGdW5jdGlvbiwgYXJnczogYW55W10pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKCFmdW5jKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKGZ1bmMgPT09IFN5bWJvbCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBSZWZsZWN0LmNvbnN0cnVjdChmdW5jLCBhcmdzKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmbGF0VHJlZTxUID0gYW55PihcclxuICAgIHRyZWU6IGFueVtdLFxyXG4gICAgcHJvamVjdDogKGl0ZW06IGFueSkgPT4gVCB8IFRbXVxyXG4pIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheSh0cmVlKSkgcmV0dXJuIFtdO1xyXG5cclxuICAgIHZhciByZXR2YWw6IFRbXSA9IFtdO1xyXG4gICAgdmFyIHN0YWNrID0gW107XHJcbiAgICAvLyBjb3B5IHRyZWUgdG8gc3RhY2sgcmV2ZXJzZSBvcmRlclxyXG4gICAgZm9yIChsZXQgaSA9IHRyZWUubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICBzdGFjay5wdXNoKHRyZWVbaV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHdoaWxlIChzdGFjay5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdmFyIGN1cnIgPSBzdGFjay5wb3AoKTtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjdXJyKSkge1xyXG4gICAgICAgICAgICBzdGFjay5wdXNoLmFwcGx5KHN0YWNrLCByZXZlcnNlKGN1cnIpKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGN1cnIgIT09IG51bGwgJiYgY3VyciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RlZCA9IHByb2plY3QoY3Vycik7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb2plY3RlZCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHZhbC5wdXNoLmFwcGx5KHJldHZhbCwgcHJvamVjdGVkKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9qZWN0ZWQgIT09IHVuZGVmaW5lZCAmJiBwcm9qZWN0ZWQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHZhbC5wdXNoKHByb2plY3RlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0dmFsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYXNQcm9wZXJ0eTxQIGV4dGVuZHMgc3RyaW5nPihcclxuICAgIG9iajogYW55LFxyXG4gICAgcHJvcDogUFxyXG4pOiBvYmogaXMgeyBbSyBpbiBQXTogYW55IH0ge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iaiAhPT0gbnVsbCAmJiBwcm9wIGluIG9iajtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdHBsO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZyYWdtZW50VGVtcGxhdGUgaW1wbGVtZW50cyBJVGVtcGxhdGUge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGNoaWxkcmVuPzogSVRlbXBsYXRlW10pIHt9XHJcblxyXG4gICAgcmVuZGVyKGRyaXZlcjogSURyaXZlcikge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRyaXZlcigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkcml2ZXI7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRpc3Bvc2UoKSB7fSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRW1wdHlUZW1wbGF0ZSBpbXBsZW1lbnRzIElUZW1wbGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gICAgcmVuZGVyKGRyaXZlcjogSURyaXZlcikge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRyaXZlcigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkcml2ZXI7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRpc3Bvc2UoKSB7fSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBUZW1wbGF0ZUF0dGFjaGFibGUgaW1wbGVtZW50cyBJVGVtcGxhdGUge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhdHRhY2hhYmxlOiBBdHRhY2hhYmxlKSB7fVxyXG5cclxuICAgIHJlbmRlcihkcml2ZXI6IERvbURyaXZlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF0dGFjaGFibGUuYXR0YWNoVG8oZHJpdmVyLnRhcmdldCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFRlbXBsYXRlQ29tcG9uZW50IGltcGxlbWVudHMgSVRlbXBsYXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50OiBDb21wb25lbnQpIHt9XHJcblxyXG4gICAgcmVuZGVyKGRyaXZlcjogRG9tRHJpdmVyKSB7XHJcbiAgICAgICAgY29uc3QgeyBjb21wb25lbnQgfSA9IHRoaXM7XHJcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBhc1RlbXBsYXRlKGNvbXBvbmVudC52aWV3KTtcclxuICAgICAgICBjb25zdCBiaW5kaW5ncyA9IHJlbmRlcihkcml2ZXIsIHRlbXBsYXRlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZGlzcG9zZSgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50LmRpc3Bvc2UgPT09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgIGRpc3Bvc2VNYW55KGJpbmRpbmdzKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIFRlbXBsYXRlU3Vic2NyaXB0aW9uIGltcGxlbWVudHMgSVRlbXBsYXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24pIHt9XHJcblxyXG4gICAgZGlzcG9zZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZU9ic2VydmFibGU8VD4gaW1wbGVtZW50cyBJVGVtcGxhdGUge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIG9ic2VydmFibGU6IFN1YnNjcmliYWJsZTxUPikge31cclxuXHJcbiAgICByZW5kZXIoZHJpdmVyOiBJRHJpdmVyKTogQmluZGluZyB7XHJcbiAgICAgICAgY29uc3QgeyBvYnNlcnZhYmxlIH0gPSB0aGlzO1xyXG4gICAgICAgIGxldCBiaW5kaW5nczogbnVsbCB8IEJpbmRpbmdbXSA9IG51bGw7XHJcbiAgICAgICAgY29uc3Qgc2NvcGUgPSBkcml2ZXIuY3JlYXRlU2NvcGUoKTtcclxuICAgICAgICBjb25zdCBzdWJzY3IgPSBvYnNlcnZhYmxlLnN1YnNjcmliZSgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGJpbmRpbmdzICYmIGJpbmRpbmdzLmxlbmd0aCA9PT0gMSAmJiBpc1ByaW1pdGl2ZSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJpbmRpbmcgPSBiaW5kaW5nc1swXTtcclxuICAgICAgICAgICAgICAgIGlmIChpc05leHRPYnNlcnZlcihiaW5kaW5nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJpbmRpbmcubmV4dCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3Bvc2VNYW55KGJpbmRpbmdzKTtcclxuICAgICAgICAgICAgYmluZGluZ3MgPSByZW5kZXIoc2NvcGUsIGFzVGVtcGxhdGUodmFsdWUpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZGlzcG9zZSgpIHtcclxuICAgICAgICAgICAgICAgIHN1YnNjci51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICAgICAgc2NvcGUuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgZGlzcG9zZU1hbnkoYmluZGluZ3MpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFRlbXBsYXRlUHJvbWlzZTxUIGV4dGVuZHMgVGVtcGxhdGVJbnB1dD4gaW1wbGVtZW50cyBJVGVtcGxhdGUge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHByb21pc2U6IFByb21pc2U8VD4pIHt9XHJcblxyXG4gICAgdGhlbjxVPihmbjogKHZhbHVlOiBUKSA9PiBVIHwgUHJvbWlzZUxpa2U8VT4pOiBQcm9taXNlPFU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9taXNlLnRoZW4oZm4pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihkcml2ZXI6IElEcml2ZXIpOiBCaW5kaW5nIHtcclxuICAgICAgICB2YXIgc2NvcGUgPSBkcml2ZXIuY3JlYXRlU2NvcGUoKTtcclxuICAgICAgICB2YXIgZGlzcG9zZWQgPSBmYWxzZTtcclxuICAgICAgICB2YXIgbG9hZGVkID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGxvYWRpbmdCaW5kaW5nOiBCaW5kaW5nW10gfCBCaW5kaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMucHJvbWlzZTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChsb2FkZWQgfHwgZGlzcG9zZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGxvYWRpbmdCaW5kaW5nID0gcmVuZGVyKFxyXG4gICAgICAgICAgICAgICAgc2NvcGUsXHJcbiAgICAgICAgICAgICAgICB0cGwoJ2RpdicsIHsgY2xhc3M6ICdsb2FkaW5nLXBsYWNlaG9sZGVyJyB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBwcm9taXNlLnRoZW4oKF8pID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3Bvc2VNYW55KGxvYWRpbmdCaW5kaW5nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgMjAwKTtcclxuXHJcbiAgICAgICAgY29uc3QgYmluZGluZ1Byb21pc2UgPSBwcm9taXNlLnRoZW4oKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgbG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBhc1RlbXBsYXRlKGl0ZW0pO1xyXG4gICAgICAgICAgICByZXR1cm4gZGlzcG9zZWQgPyBudWxsIDogcmVuZGVyKHNjb3BlLCB0ZW1wbGF0ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZHJpdmVyKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkaXNwb3NlKCkge1xyXG4gICAgICAgICAgICAgICAgZGlzcG9zZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgc2NvcGUuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgYmluZGluZ1Byb21pc2UudGhlbihkaXNwb3NlTWFueSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGF0dHJpYnV0ZXMocHJvcHM6IFByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIHByb3BzICYmIE9iamVjdC5rZXlzKHByb3BzKS5tYXAoKGtleSkgPT4gbmV3IEF0dHJpYnV0ZShrZXksIHByb3BzW2tleV0pKVxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgX19lbXB0eVRlbXBsYXRlOiBJVGVtcGxhdGUgPSB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZGlzcG9zZSgpIHt9LFxyXG4gICAgICAgIH0gYXMgQmluZGluZztcclxuICAgIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXNUZW1wbGF0ZShuYW1lOiBhbnkpOiBJVGVtcGxhdGUgfCBJVGVtcGxhdGVbXSB7XHJcbiAgICBpZiAodHlwZW9mIG5hbWUgPT09ICd1bmRlZmluZWQnIHx8IG5hbWUgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gX19lbXB0eVRlbXBsYXRlO1xyXG4gICAgfSBlbHNlIGlmIChpc1RlbXBsYXRlKG5hbWUpKSByZXR1cm4gbmFtZTtcclxuICAgIGVsc2UgaWYgKGlzQ29tcG9uZW50KG5hbWUpKSByZXR1cm4gbmV3IFRlbXBsYXRlQ29tcG9uZW50KG5hbWUpO1xyXG4gICAgZWxzZSBpZiAoaXNBdHRhY2hhYmxlKG5hbWUpKSByZXR1cm4gbmV3IFRlbXBsYXRlQXR0YWNoYWJsZShuYW1lKTtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiBuYW1lID09PSAnZnVuY3Rpb24nKSByZXR1cm4gbmFtZTtcclxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobmFtZSkpIHJldHVybiBmbGF0VHJlZShuYW1lLCBhc1RlbXBsYXRlKTtcclxuICAgIGVsc2UgaWYgKGlzUHJvbWlzZTxUZW1wbGF0ZUlucHV0PihuYW1lKSkgcmV0dXJuIG5ldyBUZW1wbGF0ZVByb21pc2UobmFtZSk7XHJcbiAgICBlbHNlIGlmIChpc1N1YnNjcmliYWJsZShuYW1lKSkgcmV0dXJuIG5ldyBUZW1wbGF0ZU9ic2VydmFibGUobmFtZSk7XHJcbiAgICBlbHNlIGlmIChpc1N1YnNjcmlwdGlvbihuYW1lKSkgcmV0dXJuIG5ldyBUZW1wbGF0ZVN1YnNjcmlwdGlvbihuYW1lKTtcclxuICAgIGVsc2UgaWYgKGhhc1Byb3BlcnR5KG5hbWUsICd2aWV3JykpIHJldHVybiBhc1RlbXBsYXRlKG5hbWUudmlldyk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBOYXRpdmVUZW1wbGF0ZShuYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNDb21wb25lbnQodmFsdWU6IGFueSk6IHZhbHVlIGlzIENvbXBvbmVudCB7XHJcbiAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLnZpZXcgPT09ICdmdW5jdGlvbic7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQXR0YWNoYWJsZSh2YWx1ZTogYW55KTogdmFsdWUgaXMgQXR0YWNoYWJsZSB7XHJcbiAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLmF0dGFjaFRvID09PSAnZnVuY3Rpb24nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1N1YnNjcmliYWJsZSh2YWx1ZTogYW55KTogdmFsdWUgaXMgU3Vic2NyaWJhYmxlPHVua25vd24+IHtcclxuICAgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUuc3Vic2NyaWJlID09PSAnZnVuY3Rpb24nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1N1YnNjcmlwdGlvbih2YWx1ZTogYW55KTogdmFsdWUgaXMgU3Vic2NyaXB0aW9uIHtcclxuICAgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUudW5zdWJzY3JpYmUgPT09ICdmdW5jdGlvbic7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzUHJvbWlzZTxUID0gdW5rbm93bj4odmFsdWU6IGFueSk6IHZhbHVlIGlzIFByb21pc2U8VD4ge1xyXG4gICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1RlbXBsYXRlKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBJVGVtcGxhdGUge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZVsncmVuZGVyJ10gPT09ICdmdW5jdGlvbic7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZ1bmN0aW9uQXNUZW1wbGF0ZShmdW5jOiBGdW5jdGlvbik6IElUZW1wbGF0ZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlbmRlcihkcml2ZXI6IElEcml2ZXIsIC4uLmFyZ3MpIHtcclxuICAgICAgICAgICAgY29uc3QgdHBsID0gZnVuYyguLi5hcmdzKTtcclxuICAgICAgICAgICAgdmFyIHRlbXBsYXRlID0gYXNUZW1wbGF0ZSh0cGwpO1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0ZW1wbGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJpbmRpbmdzOiBCaW5kaW5nW10gPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVtcGxhdGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiID0gdGVtcGxhdGVbaV0ucmVuZGVyKGRyaXZlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmluZGluZ3MucHVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcG9zZSgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiaW5kaW5ncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmluZGluZyA9IGJpbmRpbmdzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJpbmRpbmcuZGlzcG9zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpbmRpbmcuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGVtcGxhdGUucmVuZGVyKGRyaXZlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufVxyXG5cclxuY2xhc3MgVGFnVGVtcGxhdGUgaW1wbGVtZW50cyBJVGVtcGxhdGUge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIGNoaWxkcmVuOiBJVGVtcGxhdGVbXSkge31cclxuXHJcbiAgICByZW5kZXIoZHJpdmVyOiBJRHJpdmVyLCBpbml0PzogRnVuYzxhbnk+KSB7XHJcbiAgICAgICAgbGV0IHsgbmFtZSB9ID0gdGhpcztcclxuICAgICAgICByZXR1cm4gZHJpdmVyLmNyZWF0ZUVsZW1lbnQobmFtZSwgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIE5hdGl2ZVRlbXBsYXRlIGltcGxlbWVudHMgSVRlbXBsYXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyB2YWx1ZTogUHJpbWl0aXZlIHwgU3Vic2NyaWJhYmxlPFByaW1pdGl2ZT4gfCBIVE1MRWxlbWVudFxyXG4gICAgKSB7fVxyXG5cclxuICAgIHJlbmRlcihkcml2ZXI6IElEcml2ZXIpOiBCaW5kaW5nIHtcclxuICAgICAgICBsZXQgeyB2YWx1ZSB9ID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKGlzUHJpbWl0aXZlKHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZHJpdmVyLmNyZWF0ZU5hdGl2ZSh2YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpc1N1YnNjcmliYWJsZSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgbGV0IGV4cHIgPSB2YWx1ZTtcclxuICAgICAgICAgICAgbGV0IHRleHRFbGVtZW50ID0gZHJpdmVyLmNyZWF0ZU5hdGl2ZShudWxsKTtcclxuICAgICAgICAgICAgZXhwci5zdWJzY3JpYmUodGV4dEVsZW1lbnQgYXMgYW55KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRleHRFbGVtZW50O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkcml2ZXIuY3JlYXRlTmF0aXZlKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbnR5cGUgQXR0cmlidXRlVmFsdWUgPSBQcmltaXRpdmUgfCBTdWJzY3JpYmFibGU8UHJpbWl0aXZlPjtcclxuXHJcbmNsYXNzIEF0dHJpYnV0ZSBpbXBsZW1lbnRzIElUZW1wbGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyB2YWx1ZTpcclxuICAgICAgICAgICAgfCAoQXR0cmlidXRlVmFsdWUgfCBBdHRyaWJ1dGVWYWx1ZVtdKVxyXG4gICAgICAgICAgICB8ICgoKSA9PiBBdHRyaWJ1dGVWYWx1ZSB8IEF0dHJpYnV0ZVZhbHVlW10pXHJcbiAgICApIHt9XHJcblxyXG4gICAgcmVuZGVyKGRyaXZlcjogSURyaXZlcik6IEJpbmRpbmcgfCBudWxsIHtcclxuICAgICAgICBsZXQgeyBuYW1lLCB2YWx1ZSB9ID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB2b2lkIDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50QmluZGluZyA9IGRyaXZlci5jcmVhdGVFdmVudChuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIGlmIChldmVudEJpbmRpbmcpIHJldHVybiBldmVudEJpbmRpbmc7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdub3QgYSB2YWxpZCBldmVudCAnICsgbmFtZSk7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgICAgICBjb25zdCBiaW5kaW5nID0gZHJpdmVyLmNyZWF0ZUF0dHJpYnV0ZShuYW1lLCB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICBjb25zdCBzdWJzY3IgPSBjb21iaW5lTGF0ZXN0KHZhbHVlKS5zdWJzY3JpYmUoYmluZGluZyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcG9zZSgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWJzY3IudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBiaW5kaW5nLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIGlmIChpc1N1YnNjcmliYWJsZSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgZXhwciA9IHZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBiaW5kaW5nID0gZHJpdmVyLmNyZWF0ZUF0dHJpYnV0ZShuYW1lLCB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICBjb25zdCBzdWJzY3IgPSBleHByLnN1YnNjcmliZShiaW5kaW5nKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmluZGluZy5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSByZXR1cm4gZHJpdmVyLmNyZWF0ZUF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoXHJcbiAgICB0YXJnZXQ6IElEcml2ZXIgfCBIVE1MRWxlbWVudCxcclxuICAgIHRlbXBsYXRlOiBJVGVtcGxhdGUgfCBJVGVtcGxhdGVbXVxyXG4pOiBCaW5kaW5nW10ge1xyXG4gICAgY29uc3QgZHJpdmVyOiBJRHJpdmVyID0gaXNEb21Ob2RlKHRhcmdldCkgPyBuZXcgRG9tRHJpdmVyKHRhcmdldCkgOiB0YXJnZXQ7XHJcbiAgICByZXR1cm4gcmVuZGVyU3RhY2soW3sgZHJpdmVyLCB0ZW1wbGF0ZSB9XSk7XHJcbn1cclxuXHJcbnR5cGUgU3RhY2tJdGVtID0ge1xyXG4gICAgZHJpdmVyOiBJRHJpdmVyO1xyXG4gICAgdGVtcGxhdGU6IElUZW1wbGF0ZSB8IElUZW1wbGF0ZVtdIHwgKCgpID0+IGFueSk7XHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTdGFjayhyb290czogU3RhY2tJdGVtW10pIHtcclxuICAgIGNvbnN0IGJpbmRpbmdzOiBCaW5kaW5nW10gPSBbXTtcclxuICAgIGNvbnN0IHN0YWNrID0gcm9vdHMuc2xpY2UoMCk7XHJcblxyXG4gICAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IGN1cnIgPSBzdGFjay5wb3AoKTtcclxuICAgICAgICBpZiAoIWN1cnIpIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHsgZHJpdmVyLCB0ZW1wbGF0ZSB9ID0gY3VycjtcclxuICAgICAgICBpZiAodGVtcGxhdGUgPT09IG51bGwgfHwgdGVtcGxhdGUgPT09IHVuZGVmaW5lZCkgY29udGludWU7XHJcblxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRlbXBsYXRlKSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdGVtcGxhdGUubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goeyBkcml2ZXIsIHRlbXBsYXRlOiB0ZW1wbGF0ZVtpXSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0ZW1wbGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBzdGFjay5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGRyaXZlcixcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBhc1RlbXBsYXRlKHRlbXBsYXRlLm5hbWUgfHwgJ1sgRnVuY3Rpb24gXScpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfSBlbHNlIGlmICghaXNUZW1wbGF0ZSh0ZW1wbGF0ZSkpIHtcclxuICAgICAgICAgICAgc3RhY2sucHVzaCh7IGRyaXZlciwgdGVtcGxhdGU6IGFzVGVtcGxhdGUodGVtcGxhdGUpIH0pO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJpbmRpbmcgPSB0ZW1wbGF0ZS5yZW5kZXIoZHJpdmVyKTtcclxuICAgICAgICBpZiAoYmluZGluZykge1xyXG4gICAgICAgICAgICBiaW5kaW5ncy5wdXNoKGJpbmRpbmcpO1xyXG4gICAgICAgICAgICBpZiAoYmluZGluZy5kcml2ZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRlbXBsYXRlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkRHJpdmVyID0gYmluZGluZy5kcml2ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGREcml2ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IGNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcml2ZXI6IGNoaWxkRHJpdmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBhc1RlbXBsYXRlKGNoaWxkcmVuW2ldKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmluZGluZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBiaW5kaW5nID0gYmluZGluZ3NbaV07XHJcbiAgICAgICAgaWYgKGlzSW5pdGlhbGl6YWJsZShiaW5kaW5nKSkgYmluZGluZy5yZWFkeSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBiaW5kaW5ncztcclxufVxyXG5cclxuaW50ZXJmYWNlIEluaXRpYWxpemFibGUge1xyXG4gICAgcmVhZHkoKTogdm9pZDtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNJbml0aWFsaXphYmxlKG9iajogYW55KTogb2JqIGlzIEluaXRpYWxpemFibGUge1xyXG4gICAgcmV0dXJuIG9iaiAmJiB0eXBlb2Ygb2JqWydyZWFkeSddID09PSAnZnVuY3Rpb24nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyTWFueShkcml2ZXI6IElEcml2ZXIsIGNoaWxkcmVuOiBJVGVtcGxhdGVbXSk6IEJpbmRpbmdbXSB7XHJcbiAgICBjb25zdCBzdGFjayA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSBjaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gY2hpbGRyZW5baV07XHJcbiAgICAgICAgc3RhY2sucHVzaCh7XHJcbiAgICAgICAgICAgIGRyaXZlcixcclxuICAgICAgICAgICAgdGVtcGxhdGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlbmRlclN0YWNrKHN0YWNrKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmV2ZXJzZTxUPihhcnI6IFRbXSk6IFRbXSB7XHJcbiAgICBjb25zdCByZXN1bHQ6IFRbXSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICByZXN1bHQucHVzaChhcnJbaV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgU3Vic2NyaWJhYmxlLCBQYXJ0aWFsT2JzZXJ2ZXIsIFVuc3Vic2NyaWJhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG50eXBlIEFjdGlvbjxUPiA9ICh2YWx1ZTogVCkgPT4gdm9pZDtcclxudHlwZSBFeHByZXNzaW9uVHlwZTxUPiA9IFQgZXh0ZW5kcyBTdWJzY3JpYmFibGU8aW5mZXIgVT4gPyBVIDogVDtcclxuZXhwb3J0IHR5cGUgVW5wYWNrU3Vic2NyaWJhYmxlczxUPiA9IHtcclxuICBbSyBpbiBrZXlvZiBUXTpcclxuICAgIHwgRXhjbHVkZTxUW0tdLCBTdWJzY3JpYmFibGU8YW55Pj5cclxuICAgIHwgRXhwcmVzc2lvblR5cGU8RXh0cmFjdDxUW0tdLCBTdWJzY3JpYmFibGU8YW55Pj4+O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVMYXRlc3Q8VCBleHRlbmRzIGFueVtdPihleHByZXNzaW9uczogVCkge1xyXG4gIHR5cGUgVSA9IFVucGFja1N1YnNjcmliYWJsZXM8VD47XHJcbiAgcmV0dXJuIHtcclxuICAgIHN1YnNjcmliZShvYnNlcnZlcjogUGFydGlhbE9ic2VydmVyPFU+IHwgQWN0aW9uPFU+KSB7XHJcbiAgICAgIGNvbnN0IHN0YXRlID0gbmV3IEFycmF5KGV4cHJlc3Npb25zLmxlbmd0aCkgYXMgVTtcclxuICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uczogVW5zdWJzY3JpYmFibGVbXSA9IFtdO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBleHByZXNzaW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGV4cHIgPSBleHByZXNzaW9uc1tpXTtcclxuICAgICAgICBpZiAoaXNTdWJzY3JpYmFibGUoZXhwcikpIHtcclxuICAgICAgICAgIGNvbnN0IHN1YnNjciA9IGV4cHIuc3Vic2NyaWJlKHYgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3RhdGVbaV0gIT09IHYpIHtcclxuICAgICAgICAgICAgICBzdGF0ZVtpXSA9IHY7XHJcbiAgICAgICAgICAgICAgZW1pdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHN1YnNjcmlwdGlvbnMucHVzaChzdWJzY3IpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0ZVtpXSA9IGV4cHI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVtaXQoKTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIGVtaXQoKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvYnNlcnZlciA9PT0gJ2Z1bmN0aW9uJykgb2JzZXJ2ZXIoc3RhdGUpO1xyXG4gICAgICAgIGVsc2UgaWYgKG9ic2VydmVyLm5leHQpIG9ic2VydmVyLm5leHQoc3RhdGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHVuc3Vic2NyaWJlKCkge1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJzY3JpcHRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbnNbaV0udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNTdWJzY3JpYmFibGUobzogYW55KTogbyBpcyBTdWJzY3JpYmFibGU8dW5rbm93bj4ge1xyXG4gIGlmIChvID09PSBudWxsIHx8IHR5cGVvZiBvICE9PSAnb2JqZWN0JykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICBpZiAodHlwZW9mIG8uc3Vic2NyaWJlICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIFJ4IGZyb20gJ3J4anMnO1xyXG5cclxuaW50ZXJmYWNlIFVwZGF0YWJsZSB7XHJcbiAgdXBkYXRlKHZhbHVlOiBhbnkpOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNVcGRhdGFibGUoYmluZGluZzogYW55KTogYmluZGluZyBpcyBVcGRhdGFibGUge1xyXG4gIGlmIChiaW5kaW5nID09PSBudWxsKSByZXR1cm4gZmFsc2U7XHJcbiAgaWYgKHR5cGVvZiBiaW5kaW5nICE9PSAnb2JqZWN0JykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICByZXR1cm4gdHlwZW9mIGJpbmRpbmcudXBkYXRlID09PSAnZnVuY3Rpb24nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNOZXh0T2JzZXJ2ZXIoYmluZGluZzogYW55KTogYmluZGluZyBpcyBSeC5OZXh0T2JzZXJ2ZXI8YW55PiB7XHJcbiAgaWYgKGJpbmRpbmcgPT09IG51bGwpIHJldHVybiBmYWxzZTtcclxuICBpZiAodHlwZW9mIGJpbmRpbmcgIT09ICdvYmplY3QnKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gIHJldHVybiB0eXBlb2YgYmluZGluZy5uZXh0ID09PSAnZnVuY3Rpb24nO1xyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vbGliL3N0b3JlJztcclxuZXhwb3J0ICogZnJvbSAnLi9saWIvb2JzZXJ2YWJsZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbGliL2xpc3QnO1xyXG5leHBvcnQgKiBmcm9tICcuL2xpYi9saXN0L2xpc3QtbXV0YXRpb24nO1xyXG4iLCJpbXBvcnQgKiBhcyBSeCBmcm9tICdyeGpzJztcclxuaW1wb3J0ICogYXMgUm8gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBFeHByZXNzaW9uLCBVcGRhdGFibGUgfSBmcm9tICcuLi9vYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgZGlnZXN0LCBmbHVzaCwgVmFsdWUgfSBmcm9tICcuLi9zdG9yZSc7XHJcbmltcG9ydCB7IExpc3RNdXRhdGlvbiwgaXNNdXRhdGlvbiwgcHVzaEl0ZW0gfSBmcm9tICcuL2xpc3QtbXV0YXRpb24nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMaXN0U3RvcmU8VD4gZXh0ZW5kcyBSeC5TdWJzY3JpYmFibGU8TGlzdE11dGF0aW9uPFQ+PiB7XHJcbiAgYWRkKG06IExpc3RNdXRhdGlvbjxUPik6IHZvaWQ7XHJcbiAgcmVhZG9ubHkgbGVuZ3RoOiBudW1iZXI7XHJcbiAgcGVlazxSPihmdW46IChzbmFwc2hvdDogVFtdKSA9PiBSKTogUjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFzTGlzdFN0b3JlPFQ+KHNvdXJjZTogVFtdKTogTGlzdFN0b3JlPFQ+O1xyXG5leHBvcnQgZnVuY3Rpb24gYXNMaXN0U3RvcmU8VD4oXHJcbiAgc291cmNlOiBFeHByZXNzaW9uPFRbXT4gJiBVcGRhdGFibGU8VFtdPlxyXG4pOiBMaXN0U3RvcmU8VD47XHJcbmV4cG9ydCBmdW5jdGlvbiBhc0xpc3RTdG9yZTxUPihcclxuICBzb3VyY2U6IFRbXSB8IChFeHByZXNzaW9uPFRbXT4gJiBVcGRhdGFibGU8VFtdPilcclxuKTogTGlzdFN0b3JlPFQ+IHtcclxuICBpZiAoQXJyYXkuaXNBcnJheShzb3VyY2UpKSByZXR1cm4gZnJvbUFycmF5KHNvdXJjZSk7XHJcblxyXG4gIHJldHVybiBmcm9tQmluZGFibGU8VD4oc291cmNlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZnJvbUJpbmRhYmxlPFQ+KFxyXG4gIGJpbmRhYmxlOiBFeHByZXNzaW9uPFRbXT4gJiBVcGRhdGFibGU8VFtdPlxyXG4pOiBMaXN0U3RvcmU8VD4ge1xyXG4gIHZhciBzbmFwc2hvdDogVFtdID0gYmluZGFibGUucGVlaygoZSkgPT4gZSkgfHwgW107XHJcbiAgdmFyIGxpc3RJdGVtczogTGlzdEl0ZW08VD5bXSA9IHNuYXBzaG90Lm1hcChjcmVhdGVJdGVtKTtcclxuICBjb25zdCBtdXRhdGlvbnMgPSBuZXcgUnguU3ViamVjdDxMaXN0TXV0YXRpb248TGlzdEl0ZW08VD4+PigpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGVlayhmbikge1xyXG4gICAgICByZXR1cm4gZm4oc25hcHNob3QpO1xyXG4gICAgfSxcclxuICAgIGdldCBsZW5ndGgoKSB7XHJcbiAgICAgIHJldHVybiBsaXN0SXRlbXMubGVuZ3RoO1xyXG4gICAgfSxcclxuICAgIGFkZChtOiBMaXN0TXV0YXRpb248VD4pIHtcclxuICAgICAgYXBwbHlNdXRhdGlvbihtKTtcclxuICAgIH0sXHJcbiAgICBzdWJzY3JpYmUoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gbXV0YXRpb25zLnBpcGUoUm8uc3RhcnRXaXRoKHJlc2V0SXRlbXMobGlzdEl0ZW1zKSkpO1xyXG4gICAgICByZXR1cm4gcmVzdWx0LnN1YnNjcmliZS5hcHBseShyZXN1bHQsIGFyZ3MgYXMgYW55KTtcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gZmx1c2hDaGFuZ2VzKCkge1xyXG4gICAgYmluZGFibGUudXBkYXRlKHNuYXBzaG90KTtcclxuICAgIGNvbnN0IGRpcnR5ID0gW107XHJcbiAgICBsZXQgcGFyZW50OiBhbnkgPSBiaW5kYWJsZTtcclxuICAgIHdoaWxlIChwYXJlbnQpIHtcclxuICAgICAgZGlydHkucHVzaChwYXJlbnQpO1xyXG4gICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xyXG4gICAgfVxyXG4gICAgZmx1c2goZGlydHkpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlSXRlbSh2LCBpKSB7XHJcbiAgICBjb25zdCBpdGVtID0gbmV3IExpc3RJdGVtPFQ+KHNuYXBzaG90LCBpLCB2KTtcclxuICAgIGl0ZW0uc3Vic2NyaWJlKGZsdXNoQ2hhbmdlcyk7XHJcbiAgICByZXR1cm4gaXRlbTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlc2V0SXRlbXMoaXRlbXM6IExpc3RJdGVtPFQ+W10pOiBMaXN0TXV0YXRpb248TGlzdEl0ZW08VD4+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6ICdyZXNldCcsXHJcbiAgICAgIGl0ZW1zLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFwcGx5TXV0YXRpb24obXV0OiBMaXN0TXV0YXRpb248VD4pIHtcclxuICAgIGlmIChtdXQudHlwZSA9PT0gJ2luc2VydCcpIHtcclxuICAgICAgY29uc3QgeyBpbmRleCwgdmFsdWVzIH0gPSBtdXQ7XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBjcmVhdGVJdGVtKHZhbHVlcywgaW5kZXgpO1xyXG4gICAgICBsaXN0SXRlbXMuc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcclxuICAgICAgc25hcHNob3Quc3BsaWNlKGluZGV4LCAwLCB2YWx1ZXMpO1xyXG4gICAgICBtdXRhdGlvbnMubmV4dChwdXNoSXRlbShpdGVtKSk7XHJcbiAgICB9IGVsc2UgaWYgKG11dC50eXBlID09PSAncHVzaCcpIHtcclxuICAgICAgY29uc3QgeyB2YWx1ZXMgfSA9IG11dDtcclxuICAgICAgY29uc3QgaW5kZXggPSBsaXN0SXRlbXMubGVuZ3RoO1xyXG4gICAgICBjb25zdCBpdGVtID0gY3JlYXRlSXRlbSh2YWx1ZXMsIGluZGV4KTtcclxuICAgICAgbGlzdEl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgIHNuYXBzaG90LnB1c2godmFsdWVzKTtcclxuICAgICAgbXV0YXRpb25zLm5leHQocHVzaEl0ZW0oaXRlbSkpO1xyXG4gICAgfSBlbHNlIGlmIChtdXQudHlwZSA9PT0gJ3JlbW92ZScpIHtcclxuICAgICAgY29uc3QgaW5kZXggPVxyXG4gICAgICAgIHR5cGVvZiBtdXQucHJlZGljYXRlID09PSAnbnVtYmVyJ1xyXG4gICAgICAgICAgPyBtdXQucHJlZGljYXRlXHJcbiAgICAgICAgICA6IGxpc3RJdGVtcy5maW5kSW5kZXgobXV0LnByZWRpY2F0ZSk7XHJcbiAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgbGlzdEl0ZW1zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgc25hcHNob3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gaW5kZXg7IGkgPCBsaXN0SXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGxpc3RJdGVtc1tpXS5pbmRleCA9IGk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGZsdXNoQ2hhbmdlcygpO1xyXG4gICAgICBtdXRhdGlvbnMubmV4dCh7IHR5cGU6ICdyZW1vdmUnLCBwcmVkaWNhdGU6IGluZGV4IH0pO1xyXG4gICAgfSBlbHNlIGlmIChtdXQudHlwZSA9PT0gJ21vdmUnKSB7XHJcbiAgICAgIGNvbnN0IHsgZnJvbSwgdG8gfSA9IG11dDtcclxuICAgICAgc3dhcEl0ZW1zKGxpc3RJdGVtcywgZnJvbSwgdG8pO1xyXG4gICAgICBzd2FwSXRlbXMoc25hcHNob3QsIGZyb20sIHRvKTtcclxuICAgICAgbXV0YXRpb25zLm5leHQobXV0KTtcclxuICAgIH0gZWxzZSBpZiAobXV0LnR5cGUgPT0gJ3VwZGF0ZScpIHtcclxuICAgICAgY29uc3QgeyBpbmRleCB9ID0gbXV0O1xyXG4gICAgICBjb25zdCBsaXN0SXRlbSA9IGxpc3RJdGVtc1tpbmRleF07XHJcbiAgICAgIGxpc3RJdGVtLnVwZGF0ZShtdXQuY2FsbGJhY2spO1xyXG4gICAgICBjb25zdCBkaXJ0eSA9IGRpZ2VzdChsaXN0SXRlbSk7XHJcbiAgICAgIGZsdXNoKGRpcnR5KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZyb21BcnJheTxUPihzbmFwc2hvdDogVFtdKTogTGlzdFN0b3JlPFQ+IHtcclxuICBjb25zdCBtdXRhdGlvbnMgPSBuZXcgUnguU3ViamVjdDxMaXN0TXV0YXRpb248VD4+KCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwZWVrKGZuKSB7XHJcbiAgICAgIHJldHVybiBmbihzbmFwc2hvdCk7XHJcbiAgICB9LFxyXG4gICAgZ2V0IGxlbmd0aCgpIHtcclxuICAgICAgcmV0dXJuIHNuYXBzaG90Lmxlbmd0aDtcclxuICAgIH0sXHJcbiAgICBhZGQodmFsdWVzOiBUIHwgTGlzdE11dGF0aW9uPFQ+KSB7XHJcbiAgICAgIGlmIChpc011dGF0aW9uKHZhbHVlcykpIHtcclxuICAgICAgICBhcHBseU11dGF0aW9uKHZhbHVlcyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYXBwbHlNdXRhdGlvbih7XHJcbiAgICAgICAgICB0eXBlOiAncHVzaCcsXHJcbiAgICAgICAgICB2YWx1ZXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzdWJzY3JpYmUoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gbXV0YXRpb25zLnBpcGUoUm8uc3RhcnRXaXRoKHJlc2V0SXRlbXMoc25hcHNob3QpKSk7XHJcbiAgICAgIHJldHVybiByZXN1bHQuc3Vic2NyaWJlLmFwcGx5KHJlc3VsdCwgYXJncyBhcyBhbnkpO1xyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBhcHBseU11dGF0aW9uKG11dDogTGlzdE11dGF0aW9uPFQ+KSB7XHJcbiAgICBpZiAobXV0LnR5cGUgPT09ICdpbnNlcnQnKSB7XHJcbiAgICAgIGNvbnN0IHsgaW5kZXgsIHZhbHVlcyB9ID0gbXV0O1xyXG4gICAgICBzbmFwc2hvdC5zcGxpY2UoaW5kZXgsIDAsIHZhbHVlcyk7XHJcbiAgICAgIG11dGF0aW9ucy5uZXh0KG11dCk7XHJcbiAgICB9IGVsc2UgaWYgKG11dC50eXBlID09PSAncHVzaCcpIHtcclxuICAgICAgY29uc3QgeyB2YWx1ZXMgfSA9IG11dDtcclxuICAgICAgc25hcHNob3QucHVzaCh2YWx1ZXMpO1xyXG4gICAgICBtdXRhdGlvbnMubmV4dChtdXQpO1xyXG4gICAgfSBlbHNlIGlmIChtdXQudHlwZSA9PT0gJ3JlbW92ZScpIHtcclxuICAgICAgY29uc3QgaW5kZXggPVxyXG4gICAgICAgIHR5cGVvZiBtdXQucHJlZGljYXRlID09PSAnbnVtYmVyJ1xyXG4gICAgICAgICAgPyBtdXQucHJlZGljYXRlXHJcbiAgICAgICAgICA6IHNuYXBzaG90LmZpbmRJbmRleChtdXQucHJlZGljYXRlKTtcclxuICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICBzbmFwc2hvdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIG11dGF0aW9ucy5uZXh0KHsgdHlwZTogJ3JlbW92ZScsIHByZWRpY2F0ZTogaW5kZXggfSk7XHJcbiAgICB9IGVsc2UgaWYgKG11dC50eXBlID09PSAnbW92ZScpIHtcclxuICAgICAgY29uc3QgeyBmcm9tLCB0byB9ID0gbXV0O1xyXG4gICAgICBjb25zdCB0bXAgPSBzbmFwc2hvdFtmcm9tXTtcclxuICAgICAgc25hcHNob3RbZnJvbV0gPSBzbmFwc2hvdFt0b107XHJcbiAgICAgIHNuYXBzaG90W3RvXSA9IHRtcDtcclxuICAgICAgbXV0YXRpb25zLm5leHQobXV0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlc2V0SXRlbXMoaXRlbXM6IFRbXSk6IExpc3RNdXRhdGlvbjxUPiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiAncmVzZXQnLFxyXG4gICAgICBpdGVtcyxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG50eXBlIFVwZGF0ZUNhbGxiYWNrPFQ+ID0gKGl0ZW06IFQpID0+IFQ7XHJcblxyXG5jbGFzcyBMaXN0SXRlbTxUPiBleHRlbmRzIFZhbHVlPFQ+IHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxpc3Q6IFRbXSwgcHVibGljIGluZGV4OiBudW1iZXIsIHZhbHVlPzogVCkge1xyXG4gICAgc3VwZXIodW5kZWZpbmVkLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUobmV3VmFsdWU6IFQpO1xyXG4gIHVwZGF0ZShjYWxsYmFjazogVXBkYXRlQ2FsbGJhY2s8VD4pO1xyXG4gIHVwZGF0ZShuZXdWYWx1ZU9yQ2FsbGJhY2s6IGFueSkge1xyXG4gICAgY29uc3QgeyBsaXN0LCBpbmRleCB9ID0gdGhpcztcclxuICAgIGlmICh0eXBlb2YgbmV3VmFsdWVPckNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIE9iamVjdC5hc3NpZ24obGlzdFtpbmRleF0sIG5ld1ZhbHVlT3JDYWxsYmFjayhsaXN0W2luZGV4XSkpO1xyXG4gICAgfSBlbHNlIGxpc3RbaW5kZXhdID0gbmV3VmFsdWVPckNhbGxiYWNrO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc3dhcEl0ZW1zPFQ+KGFycjogVFtdLCBmcm9tOiBudW1iZXIsIHRvOiBudW1iZXIpIHtcclxuICBjb25zdCB0bXAgPSBhcnJbZnJvbV07XHJcbiAgYXJyW2Zyb21dID0gYXJyW3RvXTtcclxuICBhcnJbdG9dID0gdG1wO1xyXG59XHJcbiIsImV4cG9ydCB0eXBlIExpc3RNdXRhdGlvbjxUID0gdW5rbm93bj4gPVxyXG4gIHwgUHVzaEl0ZW08VD5cclxuICB8IEluc2VydEl0ZW08VD5cclxuICB8IE1vdmVJdGVtXHJcbiAgfCBSZW1vdmVJdGVtPFQ+XHJcbiAgfCBSZXNldEl0ZW1zPFQ+XHJcbiAgfCBVcGRhdGVJdGVtPFQ+O1xyXG5cclxuaW50ZXJmYWNlIFB1c2hJdGVtPFQ+IHtcclxuICB0eXBlOiAncHVzaCc7XHJcbiAgdmFsdWVzOiBUO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgTW92ZUl0ZW0ge1xyXG4gIHR5cGU6ICdtb3ZlJztcclxuICBmcm9tOiBudW1iZXI7XHJcbiAgdG86IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIEluc2VydEl0ZW08VD4ge1xyXG4gIHR5cGU6ICdpbnNlcnQnO1xyXG4gIHZhbHVlczogVDtcclxuICBpbmRleDogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUmVtb3ZlSXRlbTxUPiB7XHJcbiAgdHlwZTogJ3JlbW92ZSc7XHJcbiAgcHJlZGljYXRlO1xyXG59XHJcbmludGVyZmFjZSBSZXNldEl0ZW1zPFQ+IHtcclxuICB0eXBlOiAncmVzZXQnO1xyXG4gIGl0ZW1zOiBUW107XHJcbn1cclxuXHJcbmludGVyZmFjZSBVcGRhdGVJdGVtPFQ+IHtcclxuICB0eXBlOiAndXBkYXRlJztcclxuICBpbmRleDogbnVtYmVyO1xyXG4gIGNhbGxiYWNrKGl0ZW06IFQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSXRlbTxUPihcclxuICBpbmRleDogbnVtYmVyLFxyXG4gIGNhbGxiYWNrOiAoaXRlbTogVCkgPT4gdm9pZFxyXG4pOiBVcGRhdGVJdGVtPFQ+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogJ3VwZGF0ZScsXHJcbiAgICBpbmRleCxcclxuICAgIGNhbGxiYWNrLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwdXNoSXRlbTxUPih2YWx1ZXM6IFQpOiBQdXNoSXRlbTxUPiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6ICdwdXNoJyxcclxuICAgIHZhbHVlcyxcclxuICB9O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnRJdGVtPFQ+KHZhbHVlczogVCwgaW5kZXg6IG51bWJlcik6IEluc2VydEl0ZW08VD4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiAnaW5zZXJ0JyxcclxuICAgIHZhbHVlcyxcclxuICAgIGluZGV4LFxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUl0ZW08VD4oXHJcbiAgcHJlZGljYXRlOiBudW1iZXIgfCAoKHQ6IFQpID0+IGJvb2xlYW4pXHJcbik6IFJlbW92ZUl0ZW08VD4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiAncmVtb3ZlJyxcclxuICAgIHByZWRpY2F0ZSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRJdGVtczxUPihpdGVtczogVFtdKTogUmVzZXRJdGVtczxUPiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6ICdyZXNldCcsXHJcbiAgICBpdGVtcyxcclxuICB9O1xyXG59XHJcblxyXG50eXBlIFByb3A8VCwgSyBleHRlbmRzIGtleW9mIFQ+ID0gVFtLXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc011dGF0aW9uPFQgPSB1bmtub3duPihcclxuICBtOiBhbnlcclxuKTogbSBpcyBMaXN0TXV0YXRpb248VD4gfCBSZW1vdmVJdGVtPFQ+IHtcclxuICBpZiAoIW0pIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgY29uc3QgdHlwZTogUHJvcDxMaXN0TXV0YXRpb24sICd0eXBlJz4gPSBtLnR5cGU7XHJcbiAgcmV0dXJuIChcclxuICAgIHR5cGUgPT09ICdyZW1vdmUnIHx8XHJcbiAgICB0eXBlID09PSAncHVzaCcgfHxcclxuICAgIHR5cGUgPT09ICdpbnNlcnQnIHx8XHJcbiAgICB0eXBlID09PSAncmVzZXQnIHx8XHJcbiAgICB0eXBlID09PSAnbW92ZSdcclxuICApO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIFJ4IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQZWVrYWJsZTxUPiB7XHJcbiAgcGVlazxVPihwcm9qZWN0OiAodmFsdWU6IFQpID0+IFUpOiBVO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBVcGRhdGVyPFQ+ID0gVCB8ICgoYTogVCkgPT4gVCB8IHZvaWQpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGFibGU8VD4ge1xyXG4gIHVwZGF0ZSh2YWx1ZTogVXBkYXRlcjxUPik6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcGVydHk8VD4gZXh0ZW5kcyBFeHByZXNzaW9uPFQ+LCBVcGRhdGFibGU8VD4ge1xyXG4gIG5hbWU6IHN0cmluZyB8IG51bWJlcjtcclxuICB2YWx1ZUZyb20ocGFyZW50VmFsdWU6IGFueSwgcHJldlZhbHVlPzogVCk6IFQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXhwcmVzc2lvbjxUID0gdW5rbm93bj5cclxuICBleHRlbmRzIFJ4LlN1YnNjcmliYWJsZTxUPixcclxuICAgIFBlZWthYmxlPFQ+LFxyXG4gICAgTGlmdGFibGU8VD4ge1xyXG4gIHByb3BlcnR5PEsgZXh0ZW5kcyBrZXlvZiBUPihwcm9wZXJ0eU5hbWU6IEspOiBQcm9wZXJ0eTxUW0tdPjtcclxuICBkaXNwb3NlKCk6IGFueTtcclxuICB2YWx1ZT86IFQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEFjdGlvbjxUPiA9ICh2YWx1ZTogVCkgPT4gdm9pZDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0V4cHJlc3Npb24obzogYW55KTogbyBpcyBFeHByZXNzaW9uPHVua25vd24+IHtcclxuICBpZiAodHlwZW9mIG8gIT09ICdvYmplY3QnKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gIGlmICh0eXBlb2Ygby5saWZ0ICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gIHJldHVybiBpc1N1YnNjcmliYWJsZShvKTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMaWZ0YWJsZTxUPiB7XHJcbiAgbGlmdDxVPihwcm9qZWN0OiAodmFsdWU6IFQsIHByZXY/OiBVKSA9PiBVKTogRXhwcmVzc2lvbjxVPjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTGlmdGFibGUobzogYW55KTogbyBpcyBFeHByZXNzaW9uPHVua25vd24+IHtcclxuICBpZiAodHlwZW9mIG8gIT09ICdvYmplY3QnKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gIHJldHVybiB0eXBlb2Ygby5saWZ0ID09PSAnZnVuY3Rpb24nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNTdWJzY3JpYmFibGUobzogYW55KTogbyBpcyBSeC5TdWJzY3JpYmFibGU8dW5rbm93bj4ge1xyXG4gIGlmIChvID09PSBudWxsIHx8IHR5cGVvZiBvICE9PSAnb2JqZWN0JykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICBpZiAodHlwZW9mIG8uc3Vic2NyaWJlICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTdGF0ZVZpZXc8VD4gPSB7XHJcbiAgW0sgaW4ga2V5b2YgVF06IFRbS10gZXh0ZW5kcyAoLi4uYXJnczogYW55KSA9PiBhbnkgPyBUW0tdIDogU3RhdGU8VFtLXT47XHJcbn0gJlxyXG4gIEV4cHJlc3Npb248VD47XHJcblxyXG5leHBvcnQgdHlwZSBTdGF0ZTxUPiA9IFN0YXRlVmlldzxUPiAmIFVwZGF0YWJsZTxUPiAmIEV4cHJlc3Npb248VD47XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNOZXh0T2JzZXJ2ZXI8VD4odmFsdWU6IGFueSk6IHZhbHVlIGlzIFJ4Lk5leHRPYnNlcnZlcjxUPiB7XHJcbiAgaWYgKHZhbHVlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHJldHVybiB0eXBlb2YgdmFsdWUubmV4dCA9PT0gJ2Z1bmN0aW9uJztcclxuXHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG4vKiogU3ltYm9sLm9ic2VydmFibGUgYWRkaXRpb24gKi9cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIGludGVyZmFjZSBTeW1ib2xDb25zdHJ1Y3RvciB7XHJcbiAgICByZWFkb25seSBvYnNlcnZhYmxlOiBzeW1ib2w7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9TdWJzY3JpYmVyKG5leHRPck9ic2VydmVyOiBhbnksIGVycm9yOiBhbnksIGNvbXBsZXRlOiBhbnkpIHtcclxuICBpZiAobmV4dE9yT2JzZXJ2ZXIpIHtcclxuICAgIGlmIChuZXh0T3JPYnNlcnZlciBpbnN0YW5jZW9mIFJ4LlN1YnNjcmliZXIpIHtcclxuICAgICAgcmV0dXJuIG5leHRPck9ic2VydmVyO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoIW5leHRPck9ic2VydmVyICYmICFlcnJvciAmJiAhY29tcGxldGUpIHtcclxuICAgIGNvbnN0IGVtcHR5T2JzZXJ2ZXIgPSB7XHJcbiAgICAgIGNsb3NlZDogdHJ1ZSxcclxuICAgICAgbmV4dCgpIHt9LFxyXG4gICAgICBlcnJvcihlcnI6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgfSxcclxuICAgICAgY29tcGxldGUoKSB7fSxcclxuICAgIH07XHJcbiAgICByZXR1cm4gbmV3IFJ4LlN1YnNjcmliZXIoZW1wdHlPYnNlcnZlcik7XHJcbiAgfVxyXG4gIHJldHVybiBuZXcgUnguU3Vic2NyaWJlcihuZXh0T3JPYnNlcnZlciwgZXJyb3IsIGNvbXBsZXRlKTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIEV4cHJlc3Npb24sXHJcbiAgQWN0aW9uLFxyXG4gIFVwZGF0ZXIsXHJcbiAgUHJvcGVydHksXHJcbiAgU3RhdGUsXHJcbiAgaXNOZXh0T2JzZXJ2ZXIsXHJcbiAgdG9TdWJzY3JpYmVyLFxyXG59IGZyb20gJy4vb2JzZXJ2YWJsZSc7XHJcblxyXG5pbXBvcnQgKiBhcyBSeCBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgUGFydGlhbE9ic2VydmVyLCBVbnN1YnNjcmliYWJsZSB9IGZyb20gJ3J4anMvaW50ZXJuYWwvdHlwZXMnO1xyXG5cclxudHlwZSBGdW5jPFQsIFU+ID0gKGE6IFQpID0+IFU7XHJcblxyXG5jb25zdCBfX2VtcHR5U3Vic2NyaXB0aW9uOiBVbnN1YnNjcmliYWJsZSA9IHtcclxuICB1bnN1YnNjcmliZSgpIHt9LFxyXG59O1xyXG5jb25zdCBvYnNlcnZhYmxlID1cclxuICAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wub2JzZXJ2YWJsZSkgfHwgJ0BAb2JzZXJ2YWJsZSc7XHJcblxyXG5jb25zdCBlbXB0eSA9ICcnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYXJlbnQ8VD4ge1xyXG4gIHByb3BlcnRpZXM/OiBFeHByZXNzaW9uPFRba2V5b2YgVF0+W107XHJcbiAgdmFsdWU/OiBUO1xyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVmFsdWU8VD4gaW1wbGVtZW50cyBFeHByZXNzaW9uPFQ+IHtcclxuICBwdWJsaWMgcHJvcGVydGllczogUHJvcGVydHk8VFtrZXlvZiBUXT5bXSA9IFtdO1xyXG4gIHB1YmxpYyBvYnNlcnZlcnM/OiBQYXJ0aWFsT2JzZXJ2ZXI8VD5bXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHBhcmVudDogUGFyZW50PGFueT4gfCBudWxsLCBwdWJsaWMgdmFsdWU/OiBUKSB7fVxyXG5cclxuICBbb2JzZXJ2YWJsZV0oKSB7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHBlZWsgPSA8VT4ocHJvamVjdDogRnVuYzxULCBVPikgPT4ge1xyXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcztcclxuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiBwcm9qZWN0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuXHJcbiAgb25DaGFuZ2UoXHJcbiAgICBvYnNlcnZlcjogUGFydGlhbE9ic2VydmVyPFQ+IHwgQWN0aW9uPFQ+LFxyXG4gICAgc2tpcEN1cnJlbnQ6IGJvb2xlYW5cclxuICApOiBVbnN1YnNjcmliYWJsZSB7XHJcbiAgICBpZiAodHlwZW9mIG9ic2VydmVyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm9uQ2hhbmdlKHsgbmV4dDogb2JzZXJ2ZXIgfSwgc2tpcEN1cnJlbnQpIGFzIFVuc3Vic2NyaWJhYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghaXNOZXh0T2JzZXJ2ZXIob2JzZXJ2ZXIpKSB7XHJcbiAgICAgIHJldHVybiBfX2VtcHR5U3Vic2NyaXB0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghc2tpcEN1cnJlbnQpIHtcclxuICAgICAgaWYgKHRoaXMudmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIG9ic2VydmVyLm5leHQodGhpcy52YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgb2JzZXJ2ZXJzID0gdGhpcy5vYnNlcnZlcnM7XHJcbiAgICBpZiAob2JzZXJ2ZXJzKSB7XHJcbiAgICAgIGxldCBsZW5ndGggPSBvYnNlcnZlcnMubGVuZ3RoO1xyXG4gICAgICBvYnNlcnZlcnNbbGVuZ3RoXSA9IG9ic2VydmVyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5vYnNlcnZlcnMgPSBvYnNlcnZlcnMgPSBbb2JzZXJ2ZXJdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVuc3Vic2NyaWJlKCkge1xyXG4gICAgICAgIGlmIChvYnNlcnZlcnMpIHtcclxuICAgICAgICAgIHZhciBpZHggPSBvYnNlcnZlcnMuaW5kZXhPZihvYnNlcnZlcik7XHJcbiAgICAgICAgICBvYnNlcnZlcnMuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSBhcyBVbnN1YnNjcmliYWJsZTtcclxuICB9XHJcblxyXG4gIHN1YnNjcmliZSA9IChuZXh0T3JPYnNlcnZlcj86IGFueSwgZXJyb3I/OiBhbnksIGNvbXBsZXRlPzogYW55KSA9PiB7XHJcbiAgICBjb25zdCBzaW5rID0gdG9TdWJzY3JpYmVyKG5leHRPck9ic2VydmVyLCBlcnJvciwgY29tcGxldGUpO1xyXG4gICAgcmV0dXJuIHRoaXMub25DaGFuZ2Uoc2luaywgZmFsc2UpIGFzIFVuc3Vic2NyaWJhYmxlO1xyXG4gIH07XHJcblxyXG4gIGdldDxLIGV4dGVuZHMga2V5b2YgVD4ocHJvcGVydHlOYW1lOiBLKTogUHJvcGVydHk8VFtLXT4gfCB2b2lkIHtcclxuICAgIGNvbnN0IHsgcHJvcGVydGllcyB9ID0gdGhpcztcclxuICAgIGxldCBpID0gcHJvcGVydGllcy5sZW5ndGg7XHJcbiAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgIGNvbnN0IHByb3A6IGFueSA9IHByb3BlcnRpZXNbaV07XHJcbiAgICAgIGlmIChwcm9wLm5hbWUgPT09IHByb3BlcnR5TmFtZSkge1xyXG4gICAgICAgIHJldHVybiBwcm9wO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm9wZXJ0eTxLIGV4dGVuZHMga2V5b2YgVD4ocHJvcGVydHlOYW1lOiBLKTogUHJvcGVydHk8VFtLXT47XHJcbiAgcHJvcGVydHk8SyBleHRlbmRzIGtleW9mIFQ+KHByb3BlcnR5TmFtZTogSykge1xyXG4gICAgY29uc3QgcHJvcCA9IHRoaXMuZ2V0KHByb3BlcnR5TmFtZSk7XHJcbiAgICBpZiAocHJvcCkgcmV0dXJuIHByb3A7XHJcblxyXG4gICAgdmFyIHBhcmVudFZhbHVlID0gdGhpcy52YWx1ZTtcclxuICAgIHZhciBpbml0VmFsdWUgPSBwYXJlbnRWYWx1ZSA/IHBhcmVudFZhbHVlW3Byb3BlcnR5TmFtZV0gOiB2b2lkIDA7XHJcblxyXG4gICAgY29uc3QgcHJvcGVydHkgPSBuZXcgT2JqZWN0UHJvcGVydHk8VFtLXT4oXHJcbiAgICAgIHRoaXMsXHJcbiAgICAgIHByb3BlcnR5TmFtZSBhcyBzdHJpbmcsXHJcbiAgICAgIGluaXRWYWx1ZVxyXG4gICAgKTtcclxuICAgIHRoaXMucHJvcGVydGllcy5wdXNoKHByb3BlcnR5IGFzIGFueSk7XHJcbiAgICByZXR1cm4gcHJvcGVydHk7XHJcbiAgfVxyXG5cclxuICB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZTtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSByZXR1cm4gdmFsdWU7XHJcbiAgICBlbHNlIGlmICh2YWx1ZSA9PT0gdm9pZCAwIHx8IHZhbHVlID09PSBudWxsKSByZXR1cm4gZW1wdHk7XHJcbiAgICBlbHNlIHJldHVybiB2YWx1ZSArICcnO1xyXG4gIH1cclxuXHJcbiAgbGlmdDxVPih2YWx1ZUZyb206IChuZXdWYWx1ZTogVCwgcHJldlZhbHVlPzogVSkgPT4gVSk6IEV4cHJlc3Npb248VT4ge1xyXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcztcclxuICAgIGNvbnN0IHAgPSBuZXcgVmFsdWVPYnNlcnZlcihcclxuICAgICAgdGhpcyxcclxuICAgICAgdmFsdWVGcm9tLFxyXG4gICAgICB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogdmFsdWVGcm9tKHZhbHVlKVxyXG4gICAgKTtcclxuICAgIGNvbnN0IHsgcHJvcGVydGllcyB9ID0gdGhpcztcclxuICAgIHByb3BlcnRpZXMucHVzaChwIGFzIGFueSk7XHJcbiAgICByZXR1cm4gcDtcclxuICB9XHJcblxyXG4gIGRpc3Bvc2UoKSB7XHJcbiAgICBjb25zdCB7IHBhcmVudCB9ID0gdGhpcztcclxuICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgY29uc3QgeyBwcm9wZXJ0aWVzIH0gPSBwYXJlbnQ7XHJcbiAgICAgIGlmIChwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgdmFyIGlkeCA9IHByb3BlcnRpZXMuaW5kZXhPZih0aGlzIGFzIGFueSk7XHJcbiAgICAgICAgaWYgKGlkeCA+PSAwKSB7XHJcbiAgICAgICAgICBwcm9wZXJ0aWVzLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gdHlwZSBBcnJheU11dGF0aW9uID1cclxuLy8gICB8IHsgdHlwZTogJ2luc2VydCc7IGluZGV4OiBudW1iZXIgfVxyXG4vLyAgIHwgeyB0eXBlOiAncmVtb3ZlJzsgaW5kZXg6IG51bWJlciB9XHJcbi8vICAgfCB7IHR5cGU6ICdtb3ZlJzsgZnJvbTogbnVtYmVyOyB0bzogbnVtYmVyIH07XHJcblxyXG4vLyBleHBvcnQgaW50ZXJmYWNlIE9ic2VydmFibGVBcnJheTxUPiB7XHJcbi8vICAgc3Vic2NyaWJlKG9ic2VydmVyOiBOZXh0QXJyYXlNdXRhdGlvbnNPYnNlcnZlcjxUPik6IFJ4LlN1YnNjcmlwdGlvbjtcclxuLy8gfVxyXG4vLyB0eXBlIEFycmF5TXV0YXRpb25zQ2FsbGJhY2s8VD4gPSAoYXJyYXk6IFQsIG11dGF0aW9ucz86IEFycmF5TXV0YXRpb25bXSkgPT4gYW55O1xyXG5cclxuLy8gdHlwZSBOZXh0QXJyYXlNdXRhdGlvbnNPYnNlcnZlcjxUPiA9IHtcclxuLy8gICBuZXh0OiBBcnJheU11dGF0aW9uc0NhbGxiYWNrPFQ+O1xyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGNsYXNzIE9iamVjdFByb3BlcnR5PFQ+IGV4dGVuZHMgVmFsdWU8VD4gaW1wbGVtZW50cyBQcm9wZXJ0eTxUPiB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgcGFyZW50OiBQYXJlbnQ8YW55PixcclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmcgfCBudW1iZXIsXHJcbiAgICB2YWx1ZT86IFRcclxuICApIHtcclxuICAgIHN1cGVyKHBhcmVudCwgdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgdmFsdWVGcm9tKHBhcmVudFZhbHVlOiBhbnkpIHtcclxuICAgIHJldHVybiBwYXJlbnRWYWx1ZSAmJiBwYXJlbnRWYWx1ZVt0aGlzLm5hbWVdO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlID0gKHVwZGF0ZXI6IFVwZGF0ZXI8VD4sIGF1dG9SZWZyZXNoOiBib29sZWFuID0gdHJ1ZSkgPT4ge1xyXG4gICAgaWYgKCF1cGRhdGVWYWx1ZSh0aGlzLCB1cGRhdGVyKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIHZhciBwYXJlbnRWYWx1ZSA9IHRoaXMucGFyZW50LnZhbHVlO1xyXG4gICAgaWYgKHBhcmVudFZhbHVlKSB7XHJcbiAgICAgIHBhcmVudFZhbHVlW3RoaXMubmFtZV0gPSB0aGlzLnZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWVyZ2VQYXJlbnQodGhpcy5wYXJlbnQsIHsgW3RoaXMubmFtZV06IHRoaXMudmFsdWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGF1dG9SZWZyZXNoKSB7XHJcbiAgICAgIGNvbnN0IGRpcnR5ID0gZGlnZXN0KHRoaXMpO1xyXG4gICAgICBsZXQgcGFyZW50OiBhbnkgPSB0aGlzO1xyXG4gICAgICB3aGlsZSAocGFyZW50KSB7XHJcbiAgICAgICAgZGlydHkucHVzaChwYXJlbnQpO1xyXG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XHJcbiAgICAgIH1cclxuICAgICAgZmx1c2goZGlydHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGZ1bmN0aW9uIG1lcmdlUGFyZW50KHBhcmVudDogYW55LCB2YWx1ZTogYW55KSB7XHJcbiAgICAgIHBhcmVudC51cGRhdGUodmFsdWUsIGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBhc1Byb3h5KCk6IFN0YXRlPFQ+IHtcclxuICAgIHJldHVybiBhc1Byb3h5KHRoaXMpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN0b3JlPFQ+IGV4dGVuZHMgVmFsdWU8VD4ge1xyXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogVCwgcHVibGljIGF1dG9SZWZyZXNoOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgc3VwZXIobnVsbCwgdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLy8gICBleHByKGV4cHI6IHN0cmluZykge1xyXG4gIC8vICAgICB2YXIgcGFydHMgPSBleHByLnNwbGl0KCcuJyk7XHJcbiAgLy8gICAgIHJldHVybiAodmFsdWU6IFQpID0+IHtcclxuICAvLyAgICAgICB2YXIgb2JqID0gdGhpcy52YWx1ZTtcclxuICAvLyAgICAgICB2YXIgbGVuID0gcGFydHMubGVuZ3RoIC0gMTtcclxuICAvLyAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgLy8gICAgICAgICB2YXIgcHJvcCA9IHBhcnRzW2ldO1xyXG4gIC8vICAgICAgICAgdmFyIGNoaWxkID0gb2JqW3Byb3BdO1xyXG4gIC8vICAgICAgICAgaWYgKCFjaGlsZCkge1xyXG4gIC8vICAgICAgICAgICBvYmpbcHJvcF0gPSBjaGlsZCA9IHt9O1xyXG4gIC8vICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgb2JqID0gY2hpbGQ7XHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICAgIHZhciBsYXN0ID0gcGFydHNbbGVuXTtcclxuICAvLyAgICAgICBvYmpbbGFzdF0gPSB2YWx1ZTtcclxuICAvLyAgICAgfTtcclxuICAvLyAgIH1cclxuXHJcbiAgYXNQcm94eSgpOiBTdGF0ZTxUPiB7XHJcbiAgICByZXR1cm4gYXNQcm94eSh0aGlzKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSA9IChcclxuICAgIG5ld1ZhbHVlOiBVcGRhdGVyPFQ+LFxyXG4gICAgYXV0b1JlZnJlc2g6IGJvb2xlYW4gPSB0cnVlLFxyXG4gICAgcGFydGlhbD86IGJvb2xlYW5cclxuICApID0+IHtcclxuICAgIGlmICghdXBkYXRlVmFsdWUodGhpcywgbmV3VmFsdWUsIHBhcnRpYWwpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYXV0b1JlZnJlc2gpIHtcclxuICAgICAgY29uc3QgZGlydHkgPSBkaWdlc3QodGhpcyk7XHJcbiAgICAgIC8vIFRPRE8gZG8gd2Ugc3RpbGwgbmVlZCB0aGlzP1xyXG4gICAgICBkaXJ0eS5wdXNoKHRoaXMpO1xyXG4gICAgICBmbHVzaChkaXJ0eSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9O1xyXG5cclxuICByZWZyZXNoKCkge1xyXG4gICAgcmV0dXJuIHJlZnJlc2godGhpcyk7XHJcbiAgfVxyXG5cclxuICBuZXh0KHZhbHVlczogVCkge1xyXG4gICAgdGhpcy51cGRhdGUodmFsdWVzKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhc1Byb3h5PFQ+KHNlbGY6IEV4cHJlc3Npb248VD4pOiBTdGF0ZTxUPiB7XHJcbiAgcmV0dXJuIG5ldyBQcm94eTxhbnk+KHNlbGYsIHtcclxuICAgIGdldChwYXJlbnQ6IEV4cHJlc3Npb248VD4sIG5hbWU6IHN0cmluZyB8IHN5bWJvbCkge1xyXG4gICAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdzeW1ib2wnIHx8IG5hbWUgaW4gc2VsZikgcmV0dXJuIChzZWxmIGFzIGFueSlbbmFtZV07XHJcblxyXG4gICAgICB2YXIgcmVzdWx0ID0gcGFyZW50LnByb3BlcnR5KG5hbWUgYXMga2V5b2YgVCk7XHJcbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSAnZnVuY3Rpb24nKSByZXR1cm4gcmVzdWx0O1xyXG5cclxuICAgICAgcmV0dXJuIGFzUHJveHkocmVzdWx0KTtcclxuICAgIH0sXHJcbiAgICBzZXQ8SyBleHRlbmRzIGtleW9mIFQ+KFxyXG4gICAgICBwYXJlbnQ6IFZhbHVlPFQ+LFxyXG4gICAgICBuYW1lOiBzdHJpbmcgfCBzeW1ib2wsXHJcbiAgICAgIHZhbHVlOiBVcGRhdGVyPFRbS10+XHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIHBhcmVudC5wcm9wZXJ0eShuYW1lIGFzIGtleW9mIFQpLnVwZGF0ZSh2YWx1ZSk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICAvLyBmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpOiBVbnN1YnNjcmliYWJsZSB7XHJcbiAgLy8gICAgIHJldHVybiBzZWxmLnN1YnNjcmliZShvYnNlcnZlcik7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBmdW5jdGlvbiB1cGRhdGUodmFsdWU6IFVwZGF0ZXI8VD4pOiBib29sZWFuIHtcclxuICAvLyAgICAgcmV0dXJuIHNlbGYudXBkYXRlKHZhbHVlKTtcclxuICAvLyB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3JlO1xyXG5cclxuY2xhc3MgVmFsdWVPYnNlcnZlcjxULCBVPiBleHRlbmRzIFZhbHVlPFU+IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHBhcmVudDogVmFsdWU8YW55PixcclxuICAgIHB1YmxpYyB2YWx1ZUZyb206IChuZXdWYWx1ZTogVCwgcHJldlZhbHVlOiBVKSA9PiBVLFxyXG4gICAgaW5pdFZhbHVlPzogVVxyXG4gICkge1xyXG4gICAgc3VwZXIocGFyZW50LCBpbml0VmFsdWUpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZnJlc2g8VD4ocm9vdDogVmFsdWU8VD4pIHtcclxuICBjb25zdCBkaXJ0eSA9IGRpZ2VzdChyb290KTtcclxuICBpZiAoZGlydHkubGVuZ3RoKSB7XHJcbiAgICBmbHVzaChkaXJ0eSk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlnZXN0KHJvb3Q6IHtcclxuICBwcm9wZXJ0aWVzPzogUHJvcGVydHk8YW55PltdO1xyXG4gIHZhbHVlPzogYW55O1xyXG59KTogYW55W10ge1xyXG4gIGlmICghcm9vdCkge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuICB2YXIgc3RhY2sgPSBbcm9vdF07XHJcbiAgdmFyIHN0YWNrTGVuZ3RoOiBudW1iZXIgPSBzdGFjay5sZW5ndGg7XHJcbiAgdmFyIGRpcnR5TGVuZ3RoOiBudW1iZXIgPSAwO1xyXG4gIHZhciBkaXJ0eSA9IFtdO1xyXG5cclxuICB3aGlsZSAoc3RhY2tMZW5ndGgtLSkge1xyXG4gICAgY29uc3QgcGFyZW50ID0gc3RhY2tbc3RhY2tMZW5ndGhdO1xyXG4gICAgY29uc3QgcGFyZW50VmFsdWUgPSBwYXJlbnQudmFsdWU7XHJcblxyXG4gICAgdmFyIHsgcHJvcGVydGllcyB9ID0gcGFyZW50O1xyXG5cclxuICAgIGlmIChwcm9wZXJ0aWVzKSB7XHJcbiAgICAgIGxldCBwcm9wSWR4OiBudW1iZXIgPSBwcm9wZXJ0aWVzLmxlbmd0aCB8IDA7XHJcbiAgICAgIHdoaWxlIChwcm9wSWR4KSB7XHJcbiAgICAgICAgcHJvcElkeCA9IChwcm9wSWR4IC0gMSkgfCAwO1xyXG4gICAgICAgIHZhciBwcm9wID0gcHJvcGVydGllc1twcm9wSWR4XTtcclxuICAgICAgICAvL3JlY3Vyc2VcclxuICAgICAgICBzdGFja1tzdGFja0xlbmd0aF0gPSBwcm9wO1xyXG4gICAgICAgIHN0YWNrTGVuZ3RoID0gKHN0YWNrTGVuZ3RoICsgMSkgfCAwO1xyXG5cclxuICAgICAgICBjb25zdCBwcmV2VmFsdWUgPSBwcm9wLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGNoaWxkVmFsdWUgPVxyXG4gICAgICAgICAgcHJldlZhbHVlID09PSBudWxsXHJcbiAgICAgICAgICAgID8gcHJvcC52YWx1ZUZyb20ocGFyZW50VmFsdWUpXHJcbiAgICAgICAgICAgIDogcHJvcC52YWx1ZUZyb20ocGFyZW50VmFsdWUsIHByZXZWYWx1ZSk7XHJcbiAgICAgICAgaWYgKHByZXZWYWx1ZSAhPT0gY2hpbGRWYWx1ZSkge1xyXG4gICAgICAgICAgcHJvcC52YWx1ZSA9IGNoaWxkVmFsdWU7XHJcbiAgICAgICAgICBkaXJ0eVtkaXJ0eUxlbmd0aF0gPSBwcm9wO1xyXG4gICAgICAgICAgZGlydHlMZW5ndGggPSAoZGlydHlMZW5ndGggKyAxKSB8IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBleHBhbmQgd2l0aCBwYXJlbnRzXHJcbiAgcmV0dXJuIGRpcnR5O1xyXG59XHJcblxyXG4vLyBUT0RPIHJlZmFjdG9yIC8gbWVyZ2Ugd2l0aCByZWZyZXNoU3RhY2tcclxuZXhwb3J0IGZ1bmN0aW9uIGZsdXNoKGRpcnR5OiBhbnlbXSkge1xyXG4gIHZhciBsaXN0TGVuZ3RoOiBudW1iZXIgPSBkaXJ0eS5sZW5ndGg7XHJcblxyXG4gIHdoaWxlIChsaXN0TGVuZ3RoLS0pIHtcclxuICAgIGNvbnN0IGl0ZW0gPSBkaXJ0eVtsaXN0TGVuZ3RoXTtcclxuICAgIGNvbnN0IGl0ZW1WYWx1ZSA9IGl0ZW0udmFsdWU7XHJcblxyXG4gICAgY29uc3QgeyBvYnNlcnZlcnMgfSA9IGl0ZW07XHJcbiAgICBpZiAob2JzZXJ2ZXJzKSB7XHJcbiAgICAgIHZhciBlID0gb2JzZXJ2ZXJzLmxlbmd0aCB8IDA7XHJcbiAgICAgIHdoaWxlIChlLS0pIHtcclxuICAgICAgICBsZXQgb2JzZXJ2ZXIgPSBvYnNlcnZlcnNbZV07XHJcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChpdGVtVmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBMaXN0SXRlbSB9O1xyXG5cclxuY2xhc3MgTGlzdEl0ZW08VD4gZXh0ZW5kcyBWYWx1ZTxUPiB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHZhbHVlOiBULCBwdWJsaWMgaW5kZXg6IG51bWJlcikge1xyXG4gICAgc3VwZXIobnVsbCwgdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlID0gKG5ld1ZhbHVlOiBUIHwgRnVuYzxULCB2b2lkIHwgVD4sIGF1dG9SZWZyZXNoOiBib29sZWFuID0gdHJ1ZSkgPT4ge1xyXG4gICAgaWYgKCF1cGRhdGVWYWx1ZSh0aGlzLCBuZXdWYWx1ZSkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChhdXRvUmVmcmVzaCkge1xyXG4gICAgICBjb25zdCBkaXJ0eSA9IGRpZ2VzdCh0aGlzKTtcclxuICAgICAgZGlydHkucHVzaCh0aGlzKTtcclxuICAgICAgZmx1c2goZGlydHkpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVWYWx1ZTxUPihcclxuICB0YXJnZXQ6IHsgdmFsdWU/OiBUIH0sXHJcbiAgbmV3VmFsdWU6IFVwZGF0ZXI8VD4sXHJcbiAgcGFydGlhbD86IGJvb2xlYW5cclxuKTogYm9vbGVhbiB7XHJcbiAgLy8gaWdub3JlIHVuZGVmaW5lZFxyXG4gIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gIGNvbnN0IHRhcmdldFZhbHVlID0gdGFyZ2V0LnZhbHVlO1xyXG4gIGlmICh0YXJnZXRWYWx1ZSA9PT0gbmV3VmFsdWUpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24obmV3VmFsdWUpKSB7XHJcbiAgICBjb25zdCByZXR2YWwgPSBuZXdWYWx1ZS5hcHBseShudWxsLCBbdGFyZ2V0VmFsdWVdKTtcclxuICAgIC8vIHdoZW4gcmV0dXJuZWQgdmFsdWUgaXMgdW5kZWZpbmVkXHJcbiAgICBpZiAocmV0dmFsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgLy8gYXNzdW1lIHByZXZWYWx1ZSBpcyBiZWluZyBtdXRhdGVkIChlLmcgYSBuZXcgaXRlbSBpcyBwdXNoZWQgdG8gbGlzdClcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdXBkYXRlVmFsdWUodGFyZ2V0LCByZXR2YWwpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoXHJcbiAgICBwYXJ0aWFsID09PSB0cnVlICYmXHJcbiAgICAhIXRhcmdldFZhbHVlICYmXHJcbiAgICB0eXBlb2YgdGFyZ2V0VmFsdWUgPT09ICdvYmplY3QnICYmXHJcbiAgICAhIW5ld1ZhbHVlICYmXHJcbiAgICB0eXBlb2YgbmV3VmFsdWUgPT09ICdvYmplY3QnXHJcbiAgKSB7XHJcbiAgICBsZXQgYiA9IGZhbHNlO1xyXG4gICAgY29uc3Qgc3RhY2s6IGFueVtdID0gW1t0YXJnZXRWYWx1ZSwgbmV3VmFsdWVdXTtcclxuICAgIGNvbnN0IG1lcmdlZCA9IG5ldyBTZXQ8YW55PigpO1xyXG4gICAgd2hpbGUgKHN0YWNrLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgW3RhcmdldFZhbHVlLCBzb3VyY2VWYWx1ZV0gPSBzdGFjay5wb3AoKTtcclxuICAgICAgaWYgKCFtZXJnZWQuYWRkKHRhcmdldFZhbHVlKSlcclxuICAgICAgICAvLyBzdG9wIHJlY3Vyc2lvblxyXG4gICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgZm9yIChsZXQgcHJvcCBpbiBzb3VyY2VWYWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IHNvdXJjZVByb3BWYWx1ZSA9IHNvdXJjZVZhbHVlW3Byb3BdO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldFByb3BWYWx1ZSA9IHRhcmdldFZhbHVlW3Byb3BdO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHNvdXJjZVByb3BWYWx1ZSA9PT0gdGFyZ2V0UHJvcFZhbHVlIHx8XHJcbiAgICAgICAgICB0eXBlb2YgdGFyZ2V0UHJvcFZhbHVlID09PSAnZnVuY3Rpb24nXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgdGFyZ2V0UHJvcFZhbHVlICYmXHJcbiAgICAgICAgICB0eXBlb2YgdGFyZ2V0UHJvcFZhbHVlID09PSAnb2JqZWN0JyAmJlxyXG4gICAgICAgICAgc291cmNlUHJvcFZhbHVlICYmXHJcbiAgICAgICAgICB0eXBlb2Ygc291cmNlUHJvcFZhbHVlID09PSAnb2JqZWN0J1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgc3RhY2sucHVzaChbdGFyZ2V0UHJvcFZhbHVlLCBzb3VyY2VQcm9wVmFsdWVdKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHRhcmdldFByb3BWYWx1ZSAhPT0gc291cmNlUHJvcFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRhcmdldFZhbHVlW3Byb3BdID0gc291cmNlUHJvcFZhbHVlO1xyXG4gICAgICAgICAgICBiID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0YXJnZXQudmFsdWUgPSBuZXdWYWx1ZSBhcyBhbnk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRnVuY3Rpb24oZm46IGFueSk6IGZuIGlzIChhOiBhbnkpID0+IGFueSB7XHJcbiAgcmV0dXJuIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJztcclxufVxyXG4iLCJpbXBvcnQgeyBJRHJpdmVyLCBkaXNwb3NlTWFueSB9IGZyb20gXCJnbG93LmpzXCI7XHJcbmltcG9ydCB7IGFzVGVtcGxhdGUsIGZsYXRUcmVlLCByZW5kZXIsIHJlbmRlck1hbnkgfSBmcm9tIFwiZ2xvdy5qcy9saWIvdHBsXCI7XHJcbmltcG9ydCB7IFZpZXdDb250ZXh0LCBjcmVhdGVSb3V0ZXIsIFJvdXRlciwgUmVzb2x2ZWQgfSBmcm9tIFwiLi4vcm91dGVyXCI7XHJcbmltcG9ydCBcIi4vb3V0bGV0LnNjc3NcIjtcclxuaW1wb3J0ICogYXMgUnggZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0ICogYXMgUm8gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFVybEhlbHBlciwgTmF2aWdhdG9yIH0gZnJvbSBcIi4uL3JvdXRlci91cmwtaGVscGVyXCI7XHJcblxyXG5pbnRlcmZhY2UgUm91dGVyT3V0bGV0UHJvcHM8VFZpZXc+IHtcclxuICByb3V0ZXI6IFJvdXRlcjxUVmlldz47XHJcbiAgbG9hZGVyPzogYW55O1xyXG4gIG9uUmVzb2x2ZWQ/OiAocGF0aHM6IHN0cmluZ1tdW10pID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSb3V0ZXJPdXRsZXQ8VFZpZXc+KFxyXG4gIHByb3BzOiBSb3V0ZXJPdXRsZXRQcm9wczxUVmlldz4sXHJcbiAgY2hpbGRyZW46IGFueVtdXHJcbikge1xyXG4gIHJldHVybiB7XHJcbiAgICByZW5kZXIoZHJpdmVyOiBJRHJpdmVyKSB7XHJcbiAgICAgIGNvbnN0IGNoaWxkUm91dGVzJCA9IG5ldyBSeC5CZWhhdmlvclN1YmplY3Q8c3RyaW5nW10+KFtdKTtcclxuICAgICAgY29uc3QgeyByb3V0ZXIsIG9uUmVzb2x2ZWQgfSA9IHByb3BzO1xyXG4gICAgICBjb25zdCBzdWJzYyA9IHJvdXRlci5zdGFydChleGVjdXRlVmlldykuc3Vic2NyaWJlKHtcclxuICAgICAgICBuZXh0KFt2aWV3UmVzdWx0cywgcmVtYWluaW5nXSkge1xyXG4gICAgICAgICAgY2hpbGRSb3V0ZXMkLm5leHQocmVtYWluaW5nKTtcclxuXHJcbiAgICAgICAgICBpZiAodHlwZW9mIG9uUmVzb2x2ZWQgIT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2aWV3UmVzdWx0cykgJiYgdmlld1Jlc3VsdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBvblJlc29sdmVkKHZpZXdSZXN1bHRzLm1hcCgoZSkgPT4gZS51cmwucGF0aCkpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb25SZXNvbHZlZChbXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZGlzcG9zZSgpIHtcclxuICAgICAgICAgIHN1YnNjLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIGV4ZWN1dGVWaWV3KHJlc29sdXRpb246IFJlc29sdmVkPHVua25vd24+LCB1cmw6IFVybEhlbHBlcikge1xyXG4gICAgICAgIGNvbnN0IHsgdmlldywgcGFyYW1zIH0gPSByZXNvbHV0aW9uO1xyXG5cclxuICAgICAgICBjb25zdCBjb250ZXh0ID0ge1xyXG4gICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgcGFyYW1zLFxyXG4gICAgICAgICAgY2hpbGRSb3V0ZXIobWFwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVSb3V0ZXIocm91dGVyLm5hdmlnYXRvciwgY2hpbGRSb3V0ZXMkLCBtYXAsIHRoaXMpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlcyA9IGZsYXRUcmVlKFsuLi5jaGlsZHJlbiwgdmlld10sIChpdGVtKSA9PlxyXG4gICAgICAgICAgYXBwbHlDaGlsZChpdGVtLCBjb250ZXh0KVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3Qgc2NvcGUgPSBkcml2ZXIuY3JlYXRlU2NvcGUoKTtcclxuICAgICAgICBjb25zdCBiaW5kaW5ncyA9IHJlbmRlcihcclxuICAgICAgICAgIHNjb3BlLFxyXG4gICAgICAgICAgd2l0aExvYWRlcih0ZW1wbGF0ZXMsIHByb3BzLmxvYWRlciB8fCBcImxvYWRpbmcuLi5cIilcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBkaXNwb3NlKCkge1xyXG4gICAgICAgICAgICBkaXNwb3NlTWFueShiaW5kaW5ncyk7XHJcbiAgICAgICAgICAgIHNjb3BlLmRpc3Bvc2UoKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseUNoaWxkKGNoaWxkLCBjb250ZXh0OiBWaWV3Q29udGV4dCkge1xyXG4gIHJldHVybiB0eXBlb2YgY2hpbGQgPT09IFwiZnVuY3Rpb25cIiA/IGNoaWxkKGNvbnRleHQpIDogY2hpbGQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdpdGhMb2FkZXIodGVtcGxhdGVzOiBhbnlbXSwgbG9hZGVyOiBhbnkpIHtcclxuICBjb25zdCBwcm9taXNlcyA9IHRlbXBsYXRlcy5maWx0ZXIoaXNQcm9taXNlKTtcclxuICBpZiAocHJvbWlzZXMubGVuZ3RoID09IDApIHtcclxuICAgIHJldHVybiB0ZW1wbGF0ZXM7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYXNUZW1wbGF0ZShSeC5mb3JrSm9pbihwcm9taXNlcykucGlwZShSby5zdGFydFdpdGgobG9hZGVyKSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1Byb21pc2UoeCk6IHggaXMgUHJvbWlzZTxhbnk+IHtcclxuICByZXR1cm4gISF4ICYmIHR5cGVvZiB4LnRoZW4gPT0gXCJmdW5jdGlvblwiO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIFJ4IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCAqIGFzIFJvIGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBjb21waWxlUGF0aFRlbXBsYXRlLCBQYXRoVGVtcGxhdGUgfSBmcm9tIFwiLi9wYXRoLXRlbXBsYXRlXCI7XHJcbmltcG9ydCB7IFVybEhlbHBlciB9IGZyb20gXCIuL3VybC1oZWxwZXJcIjtcclxuXHJcbnR5cGUgUGF0aCA9IHN0cmluZ1tdO1xyXG5cclxuaW50ZXJmYWNlIFJvdXRlUGFyYW1zIHtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBSb3V0ZVNlZ21lbnQge1xyXG4gIHBhdGg6IFBhdGg7XHJcbiAgcGFyYW1zOiBSb3V0ZVBhcmFtcztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZTxUVmlldz4ge1xyXG4gIG1hdGNoKHBhdGg6IFBhdGgpOiBSb3V0ZVNlZ21lbnQ7XHJcbiAgdmlldz86IFRWaWV3O1xyXG4gIHJlc29sdmU/OiBWaWV3UmVzb2x2ZXI8VFZpZXc+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlRGVzY3JpcHRvcjxUVmlldz4ge1xyXG4gIHBhdGg6IFBhdGhUZW1wbGF0ZTtcclxuICB2aWV3PzogVFZpZXc7XHJcbiAgcm91dGVzPzogUm91dGVJbnB1dDxUVmlldz5bXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZXJDb21wb25lbnQ8VFZpZXcgPSB1bmtub3duPiB7XHJcbiAgdmlldzogVFZpZXc7XHJcbiAgcm91dGVzPzogUm91dGVJbnB1dDxUVmlldz5bXTtcclxufVxyXG5cclxuaW50ZXJmYWNlIENvbXBvbmVudFJvdXRlPFRWaWV3PiB7XHJcbiAgcGF0aDogUGF0aDtcclxuICBjb21wb25lbnQ6ICgpID0+IFJvdXRlckNvbXBvbmVudDxUVmlldz47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzUm91dGVEZXNjcmlwdG9yKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBSb3V0ZURlc2NyaXB0b3I8YW55PiB7XHJcbiAgcmV0dXJuIHZhbHVlICYmIFwicGF0aFwiIGluIHZhbHVlO1xyXG59XHJcbmZ1bmN0aW9uIGlzUm91dGUodmFsdWU6IGFueSk6IHZhbHVlIGlzIFJvdXRlPGFueT4ge1xyXG4gIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUubWF0Y2ggPT09IFwiZnVuY3Rpb25cIjtcclxufVxyXG5mdW5jdGlvbiBpc0NvbXBvbmVudFJvdXRlKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBDb21wb25lbnRSb3V0ZTxhbnk+IHtcclxuICByZXR1cm4gXCJjb21wb25lbnRcIiBpbiB2YWx1ZTtcclxufVxyXG5leHBvcnQgdHlwZSBSb3V0ZUlucHV0PFRWaWV3PiA9XHJcbiAgfCBSb3V0ZURlc2NyaXB0b3I8VFZpZXc+XHJcbiAgfCBSb3V0ZTxUVmlldz5cclxuICB8IENvbXBvbmVudFJvdXRlPFRWaWV3PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVmlld1Jlc3VsdCB7XHJcbiAgdXJsOiBVcmxIZWxwZXI7XHJcbiAgcmVzdWx0OiBEaXNwb3NhYmxlO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgRGlzcG9zYWJsZSB7XHJcbiAgZGlzcG9zZSgpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBWaWV3UmVzb2x1dGlvbjxUVmlldz4gPSBSZXNvbHZlZDxUVmlldz4gfCBOb3RGb3VuZDtcclxuZXhwb3J0IGludGVyZmFjZSBSZXNvbHZlZDxUVmlldz4ge1xyXG4gIGFwcGxpZWRQYXRoOiBzdHJpbmdbXTtcclxuICBwYXJhbXM/OiBSb3V0ZVBhcmFtcztcclxuICB2aWV3OiBUVmlldyB8IG51bGw7XHJcbiAgcmVzb2x2ZT86IFZpZXdSZXNvbHZlcjxUVmlldz47XHJcbn1cclxuXHJcbmludGVyZmFjZSBOb3RGb3VuZCB7XHJcbiAgYXBwbGllZFBhdGg6IHN0cmluZ1tdO1xyXG59XHJcblxyXG50eXBlIFZpZXdSZXNvbHZlcjxUVmlldz4gPSAocm91dGU6IHN0cmluZ1tdKSA9PiBQcm9taXNlPFZpZXdSZXNvbHV0aW9uPFRWaWV3Pj47XHJcbnR5cGUgTGlua2VkTGlzdDxUPiA9IHtcclxuICBoZWFkOiBUO1xyXG4gIHRhaWw/OiBMaW5rZWRMaXN0PFQ+O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gaXNWaWV3UmVzb2x2ZXIodmFsdWU6IGFueSk6IHZhbHVlIGlzIFZpZXdSZXNvbHZlcjxhbnk+IHtcclxuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhdGhNYXRjaGVyKHBhdGhUZW1wbGF0ZTogUGF0aFRlbXBsYXRlKSB7XHJcbiAgY29uc3QgbWF0Y2hlcnMgPSBjb21waWxlUGF0aFRlbXBsYXRlKHBhdGhUZW1wbGF0ZSk7XHJcbiAgcmV0dXJuIChwYXRoOiBQYXRoKSA9PiB7XHJcbiAgICBjb25zdCB7IGxlbmd0aCB9ID0gcGF0aFRlbXBsYXRlO1xyXG4gICAgaWYgKGxlbmd0aCA9PT0gMCAmJiBwYXRoLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBwYXJhbXMgPSB7fTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgbWF0Y2ggPSBtYXRjaGVyc1tpXShwYXRoW2ldKTtcclxuICAgICAgaWYgKCFtYXRjaCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9IGVsc2UgaWYgKG1hdGNoICE9PSB0cnVlKSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihwYXJhbXMsIG1hdGNoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IHNlbGYsXHJcbiAgICAgIHBhdGg6IHBhdGguc2xpY2UoMCwgbGVuZ3RoKSxcclxuICAgICAgcGFyYW1zLFxyXG4gICAgfTtcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZTxUVmlldz4oXHJcbiAgcGF0aDogUGF0aFRlbXBsYXRlLFxyXG4gIHZpZXc6IFRWaWV3LFxyXG4gIHJvdXRlcz86IFJvdXRlSW5wdXQ8VFZpZXc+W11cclxuKTogUm91dGU8VFZpZXc+IHtcclxuICBjb25zdCBzZWxmID0ge1xyXG4gICAgbWF0Y2g6IHBhdGhNYXRjaGVyKHBhdGgpLFxyXG4gICAgdmlldyxcclxuICAgIHJlc29sdmU6IGNyZWF0ZVZpZXdSZXNvbHZlcihyb3V0ZXMpLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiBzZWxmO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiB0cmF2ZXJzZTxUVmlldz4oXHJcbiAgcmVtYWluaW5nUGF0aDogUGF0aCxcclxuICByZXNvbHZlOiBWaWV3UmVzb2x2ZXI8VFZpZXc+XHJcbik6IFByb21pc2U8TGlua2VkTGlzdDxSZXNvbHZlZDxUVmlldz4+PiB7XHJcbiAgaWYgKCFyZXNvbHZlKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc29sdmUocmVtYWluaW5nUGF0aCk7XHJcbiAgaWYgKFwidmlld1wiIGluIHJlc3VsdCkge1xyXG4gICAgaWYgKHJlc3VsdC5hcHBsaWVkUGF0aC5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBoZWFkOiByZXN1bHQsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaGVhZDogcmVzdWx0LFxyXG4gICAgICB0YWlsOiBhd2FpdCB0cmF2ZXJzZShcclxuICAgICAgICByZW1haW5pbmdQYXRoLnNsaWNlKHJlc3VsdC5hcHBsaWVkUGF0aC5sZW5ndGgpLFxyXG4gICAgICAgIHJlc3VsdC5yZXNvbHZlXHJcbiAgICAgICksXHJcbiAgICB9O1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVmlld0NvbnRleHQge1xyXG4gIHVybDogVXJsSGVscGVyO1xyXG4gIHBhcmFtczogUm91dGVQYXJhbXM7XHJcbiAgY2hpbGRSb3V0ZXI8VFZpZXc+KFxyXG4gICAgbWFwOiBWaWV3UmVzb2x2ZXI8VFZpZXc+IHwgUm91dGVJbnB1dDxUVmlldz5bXVxyXG4gICk6IFJvdXRlcjxUVmlldz47XHJcbn1cclxuXHJcbnR5cGUgVmlld0V4ZWN1dG9yPFRWaWV3PiA9IChcclxuICByZXNvbHV0aW9uOiBWaWV3UmVzb2x1dGlvbjxUVmlldz4sXHJcbiAgdXJsOiBVcmxIZWxwZXJcclxuKSA9PiBEaXNwb3NhYmxlO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCcm93c2VyIHtcclxuICByb3V0ZXM6IFJ4Lk9ic2VydmFibGU8UGF0aD47XHJcbiAgZXhlY3V0ZShwYXRoOiBzdHJpbmdbXSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCcm93c2VyKHZpcnR1YWxQYXRoOiBQYXRoKTogQnJvd3NlciB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHJvdXRlczogUngudGltZXIoMCwgNTApLnBpcGUoXHJcbiAgICAgIFJvLm1hcCgoKSA9PiBsb2NhdGlvbi5wYXRobmFtZSksXHJcbiAgICAgIFJvLmRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICAgIFJvLm1hcCgocGF0aG5hbWU6IHN0cmluZykgPT4gcGF0aG5hbWUuc3BsaXQoXCIvXCIpLmZpbHRlcigoeCkgPT4gISF4KSksXHJcbiAgICAgIFJvLmZpbHRlcigocm91dGUpID0+IHN0YXJ0c1dpdGgocm91dGUsIHZpcnR1YWxQYXRoKSksXHJcbiAgICAgIFJvLm1hcCgocm91dGUpID0+IHJvdXRlLnNsaWNlKHZpcnR1YWxQYXRoLmxlbmd0aCkpXHJcbiAgICApLFxyXG4gICAgZXhlY3V0ZShwYXRoOiBzdHJpbmdbXSkge1xyXG4gICAgICBwdXNoUGF0aChwYXRoLmpvaW4oXCIvXCIpKTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRzV2l0aChyb3V0ZTogUGF0aCwgYmFzZTogUGF0aCkge1xyXG4gIGlmIChiYXNlLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHRydWU7XHJcblxyXG4gIGlmIChiYXNlLmxlbmd0aCA+IHJvdXRlLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGJhc2UubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChwYXRoQ29tcGFyZShiYXNlW2ldLCByb3V0ZVtpXSkgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgZnVuY3Rpb24gcGF0aENvbXBhcmUocHJldjogYW55LCBuZXh0OiBhbnkpIHtcclxuICAgIGlmIChwcmV2ICE9PSBuZXh0KSB7XHJcbiAgICAgIGlmICh0eXBlb2YgcHJldiA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgaWYgKHByZXYudG9TdHJpbmcoKSAhPT0gbmV4dCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZXI8VFZpZXc+IHtcclxuICBzdGFydChleGVjdXRvcjogVmlld0V4ZWN1dG9yPFRWaWV3Pik6IFJ4Lk9ic2VydmFibGU8W1ZpZXdSZXN1bHRbXSwgUGF0aF0+O1xyXG4gIHBhcmVudENvbnRleHQ6IFJvdXRlckNvbnRleHQ7XHJcbiAgbmF2aWdhdG9yOiBOYXZpZ2F0b3I7XHJcbn1cclxuXHJcbmludGVyZmFjZSBOYXZpZ2F0b3Ige1xyXG4gIGV4ZWN1dGUocGF0aDogc3RyaW5nW10pO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUm91dGVyQ29udGV4dCB7XHJcbiAgdXJsOiBVcmxIZWxwZXI7XHJcbiAgbmF2aWdhdG9yOiBOYXZpZ2F0b3I7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSb3V0ZXI8VFZpZXc+KFxyXG4gIG5hdmlnYXRvcjogTmF2aWdhdG9yLFxyXG4gIHJvdXRlcyQ6IFJ4Lk9ic2VydmFibGU8UGF0aD4sXHJcbiAgbWFwcGluZzogVmlld1Jlc29sdmVyPFRWaWV3PiB8IFJvdXRlSW5wdXQ8VFZpZXc+W10sXHJcbiAgcGFyZW50Q29udGV4dD86IFJvdXRlckNvbnRleHRcclxuKSB7XHJcbiAgY29uc3Qgdmlld1Jlc29sdmVyID0gaXNWaWV3UmVzb2x2ZXIobWFwcGluZylcclxuICAgID8gbWFwcGluZ1xyXG4gICAgOiBjcmVhdGVWaWV3UmVzb2x2ZXIobWFwcGluZyk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBuYXZpZ2F0b3IsXHJcbiAgICBwYXJlbnRDb250ZXh0LFxyXG4gICAgc3RhcnQoZXhlY3V0b3I6IFZpZXdFeGVjdXRvcjxUVmlldz4pIHtcclxuICAgICAgcmV0dXJuIHN0YXJ0Um91dGVyKHJvdXRlcyQsIHZpZXdSZXNvbHZlcikucGlwZShcclxuICAgICAgICBSby5zY2FuKGNyZWF0ZVNjYW5uZXIoZXhlY3V0b3IsIHBhcmVudENvbnRleHQpLCBbW10sIFtdXSlcclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgdHlwZSBSb3V0ZVJlc29sdXRpb24gPSBbXHJcbiAgICBMaW5rZWRMaXN0PFJlc29sdmVkPFRWaWV3Pj4sXHJcbiAgICBMaW5rZWRMaXN0PFJlc29sdmVkPFRWaWV3Pj4sXHJcbiAgICBQYXRoXHJcbiAgXTtcclxuICBmdW5jdGlvbiBjcmVhdGVTY2FubmVyKFxyXG4gICAgZXhlY3V0b3I6IFZpZXdFeGVjdXRvcjxUVmlldz4sXHJcbiAgICBwYXJlbnRDb250ZXh0OiBSb3V0ZXJDb250ZXh0XHJcbiAgKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gc2NhbihcclxuICAgICAgW3ByZXZdOiBbVmlld1Jlc3VsdFtdLCBQYXRoXSxcclxuICAgICAgbmV4dDogUm91dGVSZXNvbHV0aW9uXHJcbiAgICApOiBbVmlld1Jlc3VsdFtdLCBQYXRoXSB7XHJcbiAgICAgIGNvbnN0IFt1bmNoYW5nZWQsIGFkZGVkLCByZW1haW5pbmddID0gbmV4dDtcclxuICAgICAgY29uc3Qgb2Zmc2V0ID0gbGVuZ3RoKHVuY2hhbmdlZCk7XHJcbiAgICAgIGNvbnN0IGVudHJpZXMgPSBwcmV2LnNsaWNlKDAsIG9mZnNldCk7XHJcbiAgICAgIGZvciAobGV0IGkgPSBvZmZzZXQ7IGkgPCBwcmV2Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY3VyciA9IHByZXZbaV07XHJcbiAgICAgICAgaWYgKGN1cnIucmVzdWx0KSB7XHJcbiAgICAgICAgICBjdXJyLnJlc3VsdC5kaXNwb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIG1hcChhZGRlZCwgZXhlY3V0ZSk7XHJcblxyXG4gICAgICByZXR1cm4gW2VudHJpZXMsIHJlbWFpbmluZ107XHJcblxyXG4gICAgICBmdW5jdGlvbiBleGVjdXRlKHJlczogUmVzb2x2ZWQ8VFZpZXc+LCBpZHg6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudEVudHJ5ID0gZW50cmllc1tpZHggKyBvZmZzZXQgLSAxXTtcclxuICAgICAgICBjb25zdCB1cmwgPSBuZXcgVXJsSGVscGVyKFxyXG4gICAgICAgICAgbmF2aWdhdG9yLFxyXG4gICAgICAgICAgcmVzLmFwcGxpZWRQYXRoLFxyXG4gICAgICAgICAgKHBhcmVudEVudHJ5ICYmIHBhcmVudEVudHJ5LnVybCkgfHxcclxuICAgICAgICAgICAgKHBhcmVudENvbnRleHQgJiYgcGFyZW50Q29udGV4dC51cmwpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBlbnRyaWVzW2lkeCArIG9mZnNldF0gPSB7XHJcbiAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICByZXN1bHQ6IGV4ZWN1dG9yKHJlcywgdXJsKSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRSb3V0ZXI8VFZpZXc+KFxyXG4gIHJvdXRlcyQ6IFJ4Lk9ic2VydmFibGU8UGF0aD4sXHJcbiAgcm9vdFJlc29sdmU6IFZpZXdSZXNvbHZlcjxUVmlldz5cclxuKSB7XHJcbiAgbGV0IHByZXY6IExpbmtlZExpc3Q8UmVzb2x2ZWQ8VFZpZXc+PiA9IG51bGw7XHJcbiAgcmV0dXJuIHJvdXRlcyQucGlwZShcclxuICAgIFJvLmNvbmNhdE1hcChhc3luYyAocm91dGUpID0+IHtcclxuICAgICAgY29uc3QgeyB1bmNoYW5nZWQsIHJlbWFpbmluZ1JvdXRlLCByZXNvbHZlIH0gPVxyXG4gICAgICAgIHVuY2hhbmdlZFJlc29sdXRpb25zPFRWaWV3Pihyb3V0ZSwgcHJldik7XHJcbiAgICAgIGNvbnN0IG5ld1Jlc29sdXRpb25zID0gYXdhaXQgdHJhdmVyc2UoXHJcbiAgICAgICAgcmVtYWluaW5nUm91dGUsXHJcbiAgICAgICAgcmVzb2x2ZSB8fCByb290UmVzb2x2ZVxyXG4gICAgICApO1xyXG5cclxuICAgICAgcHJldiA9IGNvbmNhdCh1bmNoYW5nZWQsIG5ld1Jlc29sdXRpb25zKTtcclxuICAgICAgY29uc3QgYXBwbGllZExlbmd0aCA9IHJlZHVjZSgocCwgbikgPT4gcCArIG4uYXBwbGllZFBhdGgubGVuZ3RoLCBwcmV2LCAwKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlbWFpbmluZ1BhdGggPSByb3V0ZS5zbGljZShhcHBsaWVkTGVuZ3RoKTtcclxuICAgICAgcmV0dXJuIFt1bmNoYW5nZWQsIG5ld1Jlc29sdXRpb25zLCByZW1haW5pbmdQYXRoXTtcclxuICAgIH0pLFxyXG4gICAgUm8uc2hhcmUoKVxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuY2hhbmdlZFJlc29sdXRpb25zPFRWaWV3PihcclxuICByb3V0ZTogc3RyaW5nW10sXHJcbiAgcHJldmxpc3Q6IExpbmtlZExpc3Q8UmVzb2x2ZWQ8VFZpZXc+PlxyXG4pOiB7XHJcbiAgcmVtYWluaW5nUm91dGU6IFBhdGg7XHJcbiAgdW5jaGFuZ2VkPzogTGlua2VkTGlzdDxSZXNvbHZlZDxUVmlldz4+O1xyXG4gIHJlc29sdmU/OiBWaWV3UmVzb2x2ZXI8VFZpZXc+O1xyXG59IHtcclxuICBpZiAoIXByZXZsaXN0KSB7XHJcbiAgICByZXR1cm4geyByZW1haW5pbmdSb3V0ZTogcm91dGUgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgaGVhZCB9ID0gcHJldmxpc3Q7XHJcbiAgaWYgKGlzVmFsaWRSZXNvbHV0aW9uKGhlYWQsIHJvdXRlKSkge1xyXG4gICAgY29uc3QgeyB1bmNoYW5nZWQsIHJlbWFpbmluZ1JvdXRlLCByZXNvbHZlIH0gPSB1bmNoYW5nZWRSZXNvbHV0aW9uczxUVmlldz4oXHJcbiAgICAgIHJvdXRlLnNsaWNlKGhlYWQuYXBwbGllZFBhdGgubGVuZ3RoKSxcclxuICAgICAgcHJldmxpc3QudGFpbFxyXG4gICAgKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVuY2hhbmdlZDogY29ucyhoZWFkLCB1bmNoYW5nZWQpLFxyXG4gICAgICByZW1haW5pbmdSb3V0ZSxcclxuICAgICAgcmVzb2x2ZTogcmVzb2x2ZSB8fCBoZWFkLnJlc29sdmUsXHJcbiAgICB9O1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZW1haW5pbmdSb3V0ZTogcm91dGUsXHJcbiAgICAgIHJlc29sdmU6IGhlYWQucmVzb2x2ZSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc1ZhbGlkUmVzb2x1dGlvbjxUVmlldz4oXHJcbiAgcmVzdWx0OiBWaWV3UmVzb2x1dGlvbjxUVmlldz4sXHJcbiAgcmVtYWluaW5nUGF0aDogc3RyaW5nW11cclxuKTogYm9vbGVhbiB7XHJcbiAgaWYgKCFyZW1haW5pbmdQYXRoIHx8IHJlbWFpbmluZ1BhdGgubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAocmVzdWx0ICYmIFwidmlld1wiIGluIHJlc3VsdCkge1xyXG4gICAgY29uc3QgeyBhcHBsaWVkUGF0aCB9ID0gcmVzdWx0O1xyXG4gICAgaWYgKGFwcGxpZWRQYXRoLmxlbmd0aCA9PT0gMCAmJiByZW1haW5pbmdQYXRoLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcHBsaWVkUGF0aC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoYXBwbGllZFBhdGhbaV0gIT09IHJlbWFpbmluZ1BhdGhbaV0pIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWaWV3UmVzb2x2ZXI8VFZpZXc+KFxyXG4gIHJvdXRlczogUm91dGVJbnB1dDxUVmlldz5bXVxyXG4pOiBWaWV3UmVzb2x2ZXI8VFZpZXc+IHtcclxuICBpZiAoaXNBcnJheUVtcHR5KHJvdXRlcykpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY29tcGlsZWQgPSBjb21waWxlKHJvdXRlcyk7XHJcbiAgaWYgKGlzQXJyYXlFbXB0eShjb21waWxlZCkpIHtcclxuICAgIHJldHVybiAocmVtYWluaW5nUGF0aCkgPT4ge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlPFZpZXdSZXNvbHV0aW9uPFRWaWV3Pj4oe1xyXG4gICAgICAgIGFwcGxpZWRQYXRoOiByZW1haW5pbmdQYXRoLFxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgfVxyXG4gIHJldHVybiAocmVtYWluaW5nUGF0aDogc3RyaW5nW10pID0+IHtcclxuICAgIGZvciAoY29uc3Qgcm91dGUgb2YgY29tcGlsZWQpIHtcclxuICAgICAgY29uc3Qgc2VnbWVudCA9IHJvdXRlLm1hdGNoKHJlbWFpbmluZ1BhdGgpO1xyXG4gICAgICBpZiAoc2VnbWVudCkge1xyXG4gICAgICAgIGNvbnN0IHsgdmlldyB9ID0gcm91dGU7XHJcbiAgICAgICAgY29uc3QgYXBwbGllZFBhdGggPSBzZWdtZW50LnBhdGg7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZTxWaWV3UmVzb2x1dGlvbjxUVmlldz4+KHtcclxuICAgICAgICAgIGFwcGxpZWRQYXRoLFxyXG4gICAgICAgICAgdmlldyxcclxuICAgICAgICAgIHBhcmFtczogc2VnbWVudC5wYXJhbXMsXHJcbiAgICAgICAgICByZXNvbHZlOiByb3V0ZS5yZXNvbHZlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBub3RGb3VuZDogTm90Rm91bmQgPSB7XHJcbiAgICAgIGFwcGxpZWRQYXRoOiByZW1haW5pbmdQYXRoLFxyXG4gICAgfTtcclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobm90Rm91bmQpO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGNvbXBpbGUocm91dGVzOiBSb3V0ZUlucHV0PFRWaWV3PltdKTogUm91dGU8VFZpZXc+W10ge1xyXG4gICAgY29uc3QgcmVzdWx0czogUm91dGU8VFZpZXc+W10gPSBbXTtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KHJvdXRlcykpIHtcclxuICAgICAgZm9yIChjb25zdCByb3V0ZSBvZiByb3V0ZXMpIHtcclxuICAgICAgICBpZiAoaXNSb3V0ZURlc2NyaXB0b3Iocm91dGUpKSB7XHJcbiAgICAgICAgICBpZiAoaXNDb21wb25lbnRSb3V0ZShyb3V0ZSkpIHtcclxuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKGZyb21Db21wb25lbnRSb3V0ZShyb3V0ZS5wYXRoLCByb3V0ZS5jb21wb25lbnQpKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChjcmVhdGVSb3V0ZShyb3V0ZS5wYXRoLCByb3V0ZS52aWV3LCByb3V0ZS5yb3V0ZXMpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGlzUm91dGUocm91dGUpKSB7XHJcbiAgICAgICAgICByZXN1bHRzLnB1c2gocm91dGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwidW5zdXBwb3J0ZWQgcm91dGVcIiwgcm91dGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc0FycmF5RW1wdHkoYXJyOiBhbnlbXSkge1xyXG4gIHJldHVybiAhQXJyYXkuaXNBcnJheShhcnIpIHx8IGFyci5sZW5ndGggPT09IDA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcDxULCBVPihcclxuICBsaXN0OiBMaW5rZWRMaXN0PFQ+LFxyXG4gIHByb2plY3Q6ICh0OiBULCBpbmRleD86IG51bWJlciwgc291cmNlPzogTGlua2VkTGlzdDxUPikgPT4gVVxyXG4pOiBMaW5rZWRMaXN0PFU+IHtcclxuICByZXR1cm4gX21hcChsaXN0LCAwKTtcclxuXHJcbiAgZnVuY3Rpb24gX21hcChsOiBMaW5rZWRMaXN0PFQ+LCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICBpZiAoIWwpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBoZWFkOiBwcm9qZWN0KGwuaGVhZCwgaW5kZXgsIGxpc3QpLFxyXG4gICAgICB0YWlsOiBfbWFwKGwudGFpbCwgaW5kZXggKyAxKSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsYXN0PFQ+KGxpc3Q6IExpbmtlZExpc3Q8VD4pOiBMaW5rZWRMaXN0PFQ+IHtcclxuICBpZiAoIWxpc3QpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICBpZiAobGlzdC50YWlsKSB7XHJcbiAgICByZXR1cm4gbGFzdChsaXN0LnRhaWwpO1xyXG4gIH1cclxuICByZXR1cm4gbGlzdDtcclxufVxyXG5cclxuZnVuY3Rpb24gY29uczxUPihoZWFkOiBULCB0YWlsOiBMaW5rZWRMaXN0PFQ+KTogTGlua2VkTGlzdDxUPiB7XHJcbiAgcmV0dXJuIHsgaGVhZCwgdGFpbCB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb25jYXQ8VD4oeDogTGlua2VkTGlzdDxUPiwgeTogTGlua2VkTGlzdDxUPik6IExpbmtlZExpc3Q8VD4ge1xyXG4gIGlmICgheCkge1xyXG4gICAgcmV0dXJuIHk7XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBoZWFkOiB4LmhlYWQsXHJcbiAgICB0YWlsOiB4LnRhaWwgPyBjb25jYXQoeC50YWlsLCB5KSA6IHksXHJcbiAgfTtcclxufVxyXG5cclxudHlwZSBSZWR1Y2VDYWxsQmFjazxULCBVPiA9IChwcmV2OiBVLCBuZXh0OiBULCBpZHg6IG51bWJlcikgPT4gVTtcclxuZnVuY3Rpb24gcmVkdWNlPFQsIFU+KFxyXG4gIGNhbGxiYWNrOiBSZWR1Y2VDYWxsQmFjazxULCBVPixcclxuICBsaXN0OiBMaW5rZWRMaXN0PFQ+LFxyXG4gIHNlZWQ6IFVcclxuKTogVSB7XHJcbiAgaWYgKCFsaXN0KSB7XHJcbiAgICByZXR1cm4gc2VlZDtcclxuICB9XHJcbiAgbGV0IHJlc3VsdCA9IHNlZWQ7XHJcbiAgbGV0IGwgPSBsaXN0O1xyXG4gIGxldCBpZHggPSAwO1xyXG4gIHdoaWxlIChsKSB7XHJcbiAgICByZXN1bHQgPSBjYWxsYmFjayhyZXN1bHQsIGwuaGVhZCwgaWR4KyspO1xyXG4gICAgbCA9IGwudGFpbDtcclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gbGVuZ3RoPFQ+KHg6IExpbmtlZExpc3Q8VD4pOiBudW1iZXIge1xyXG4gIGlmICgheCkge1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG4gIHJldHVybiAxICsgbGVuZ3RoKHgudGFpbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGVuZDxUPihoZWFkOiBULCBsaXN0OiBMaW5rZWRMaXN0PFQ+KTogTGlua2VkTGlzdDxUPiB7XHJcbiAgaWYgKCFsaXN0KSB7XHJcbiAgICByZXR1cm4geyBoZWFkIH07XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBoZWFkOiBsaXN0LmhlYWQsXHJcbiAgICB0YWlsOiBhcHBlbmQoaGVhZCwgbGlzdC50YWlsKSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiB6aXA8UywgVCwgUj4oXHJcbiAgbGVmdDogTGlua2VkTGlzdDxTPixcclxuICByaWdodDogTGlua2VkTGlzdDxUPixcclxuICBwcm9qZWN0OiAoeDogUywgeTogVCkgPT4gUlxyXG4pOiBMaW5rZWRMaXN0PFI+IHtcclxuICBpZiAoIWxlZnQgfHwgIXJpZ2h0KSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb25zKFxyXG4gICAgcHJvamVjdChsZWZ0LmhlYWQsIHJpZ2h0LmhlYWQpLFxyXG4gICAgemlwKGxlZnQudGFpbCwgcmlnaHQudGFpbCwgcHJvamVjdClcclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlbXB0eTxUPigpIHtcclxuICByZXR1cm4gbnVsbCBhcyBMaW5rZWRMaXN0PFQ+O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtZW1vaXplPFRGIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnk+KGZuOiBURikge1xyXG4gIGxldCByZXN1bHQgPSBudWxsO1xyXG4gIGxldCBpbnZva2VkID0gZmFsc2U7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzOiBQYXJhbWV0ZXJzPFRGPik6IFJldHVyblR5cGU8VEY+IHtcclxuICAgIGlmIChpbnZva2VkKSB7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBpbnZva2VkID0gdHJ1ZTtcclxuICAgIHJldHVybiAocmVzdWx0ID0gZm4oKSk7XHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZnJvbUNvbXBvbmVudFJvdXRlPFRWaWV3PihcclxuICBwYXRoOiBQYXRoVGVtcGxhdGUsXHJcbiAgY29tcG9uZW50OiAoKSA9PiBSb3V0ZXJDb21wb25lbnQ8VFZpZXc+XHJcbik6IFJvdXRlPFRWaWV3IHwgUm91dGVyQ29tcG9uZW50PFRWaWV3Pj4ge1xyXG4gIGNvbnN0IG1lbSA9IG1lbW9pemUoKCkgPT4ge1xyXG4gICAgY29uc3QgY29tcCA9IHR5cGVvZiBjb21wb25lbnQgPT09IFwiZnVuY3Rpb25cIiA/IGNvbXBvbmVudCgpIDogY29tcG9uZW50O1xyXG4gICAgY29uc3QgdmlldyA9IFwidmlld1wiIGluIGNvbXAgPyBjb21wLnZpZXcgOiBjb21wO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmlldyxcclxuICAgICAgcmVzb2x2ZTogY3JlYXRlVmlld1Jlc29sdmVyKGNvbXAucm91dGVzKSxcclxuICAgIH07XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIG1hdGNoOiBwYXRoTWF0Y2hlcihwYXRoKSxcclxuICAgIGdldCB2aWV3KCkge1xyXG4gICAgICByZXR1cm4gbWVtKCkudmlldztcclxuICAgIH0sXHJcbiAgICBnZXQgcmVzb2x2ZSgpIHtcclxuICAgICAgcmV0dXJuIG1lbSgpLnJlc29sdmU7XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzU2FtZVJlc29sdXRpb248VFZpZXc+KHg6IFJlc29sdmVkPFRWaWV3PiwgeTogUmVzb2x2ZWQ8VFZpZXc+KSB7XHJcbiAgaWYgKHgudmlldyA9PT0gbnVsbCB8fCB5LnZpZXcgPT09IG51bGwpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlmICh4LnZpZXcgIT09IHkudmlldykge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaWYgKHguYXBwbGllZFBhdGgubGVuZ3RoICE9PSB5LmFwcGxpZWRQYXRoLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB4LmFwcGxpZWRQYXRoLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoeC5hcHBsaWVkUGF0aFtpXSAhPT0geS5hcHBsaWVkUGF0aFtpXSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHVzaFBhdGgocGF0aG5hbWU6IHN0cmluZykge1xyXG4gIGxldCB7IHBhdGhuYW1lOiBvbGQgfSA9IHdpbmRvdy5sb2NhdGlvbjtcclxuXHJcbiAgaWYgKG9sZCArIFwiL1wiID09PSBwYXRobmFtZSkge1xyXG4gICAgY29uc29sZS5sb2coXCJyZXBsYWNlU3RhdGVcIiwgcGF0aG5hbWUpO1xyXG4gICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIG51bGwsIHBhdGhuYW1lKTtcclxuICB9IGVsc2UgaWYgKG9sZCAhPT0gcGF0aG5hbWUpIHtcclxuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBwYXRobmFtZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIGNvbnNvbGUuZXJyb3IoXCJzYW1lIGFzIFwiLCBwYXRobmFtZSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBMaW5rTGlzdGVuZXIoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGF0dGFjaFRvKGRvbTogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFkZENsaWNrTGlzdGVuZXIoZG9tKTtcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ2xpY2tMaXN0ZW5lcihzZWxlY3RvcnM6IHN0cmluZyB8IEhUTUxFbGVtZW50KSB7XHJcbiAgICBjb25zdCB0YXJnZXQgPVxyXG4gICAgICAgIHR5cGVvZiBzZWxlY3RvcnMgPT09IFwic3RyaW5nXCJcclxuICAgICAgICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9ycylcclxuICAgICAgICAgICAgOiBzZWxlY3RvcnM7XHJcbiAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJvdXRlckNsaWNrKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZGlzcG9zZSgpIHtcclxuICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByb3V0ZXJDbGljayk7XHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gcm91dGVyQ2xpY2soZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQpIHtcclxuICAgICAgICAgICAgbGV0IGFuY2hvcjogSFRNTEFuY2hvckVsZW1lbnQgPSBldmVudC50YXJnZXQuY2xvc2VzdChcImFcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAoYW5jaG9yICYmIGFuY2hvci5jbGFzc0xpc3QuY29udGFpbnMoXCJyb3V0ZXItbGlua1wiKSkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBhbmNob3IuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGFuY2hvcltcInBhdGhuYW1lXCJdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uaG9zdCA9PT0gYW5jaG9yW1wiaG9zdFwiXVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBhbmNob3JbXCJwYXRobmFtZVwiXTtcclxuICAgICAgICAgICAgICAgICAgICBwdXNoUGF0aChwYXRobmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcm91dGVyLmV4ZWN1dGUocGF0aG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN1YmplY3QubmV4dChwYXRobmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwdXNoUGF0aChwYXRobmFtZTogc3RyaW5nKSB7XHJcbiAgICBsZXQgeyBwYXRobmFtZTogb2xkIH0gPSB3aW5kb3cubG9jYXRpb247XHJcblxyXG4gICAgaWYgKG9sZCArIFwiL1wiID09PSBwYXRobmFtZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVwbGFjZVN0YXRlXCIsIHBhdGhuYW1lKTtcclxuICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgbnVsbCwgcGF0aG5hbWUpO1xyXG4gICAgfSBlbHNlIGlmIChvbGQgIT09IHBhdGhuYW1lKSB7XHJcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIHBhdGhuYW1lKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5lcnJvcihcInNhbWUgYXMgXCIsIHBhdGhuYW1lKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgdHlwZSBTZWdtZW50TWF0Y2hlciA9IChzOiBzdHJpbmcpID0+IGJvb2xlYW4gfCB7IFtvOiBzdHJpbmddOiBhbnkgfTtcclxuZXhwb3J0IHR5cGUgU2VnbWVudCA9IFJlZ0V4cCB8IHN0cmluZyB8IFNlZ21lbnRNYXRjaGVyO1xyXG5leHBvcnQgdHlwZSBQYXRoVGVtcGxhdGUgPSBTZWdtZW50W107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZVBhdGhUZW1wbGF0ZShwYXRoVGVtcGxhdGU6IFBhdGhUZW1wbGF0ZSkge1xyXG4gIC8vIGNvbXBpbGUgcGF0aCB0ZW1wbGF0ZVxyXG4gIHZhciBzZWdtZW50TWF0Y2hlcnM6IFNlZ21lbnRNYXRjaGVyW10gPSBbXTtcclxuICBmb3IgKGNvbnN0IHNlZ21lbnQgb2YgcGF0aFRlbXBsYXRlKSB7XHJcbiAgICBpZiAodHlwZW9mIHNlZ21lbnQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgc2VnbWVudE1hdGNoZXJzLnB1c2goZnJvbVN0cmluZyhzZWdtZW50KSk7XHJcbiAgICB9IGVsc2UgaWYgKHNlZ21lbnQgaW5zdGFuY2VvZiBSZWdFeHApIHtcclxuICAgICAgc2VnbWVudE1hdGNoZXJzLnB1c2goc2VnbWVudC50ZXN0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNlZ21lbnRNYXRjaGVycy5wdXNoKHNlZ21lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gc2VnbWVudE1hdGNoZXJzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmcm9tU3RyaW5nKHNlZ21lbnQ6IHN0cmluZyk6IFNlZ21lbnRNYXRjaGVyIHtcclxuICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKFwiOlwiKSkge1xyXG4gICAgY29uc3QgcHJvcE5hbWUgPSBzZWdtZW50LnN1YnN0cmluZygxKTtcclxuICAgIHJldHVybiBmdW5jdGlvbihzOiBzdHJpbmcpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBbcHJvcE5hbWVdOiBzLFxyXG4gICAgICB9O1xyXG4gICAgfTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHM6IHN0cmluZykge1xyXG4gICAgICByZXR1cm4gcyA9PSBzZWdtZW50O1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGludGVyZmFjZSBOYXZpZ2F0b3Ige1xyXG4gIGV4ZWN1dGUocGF0aDogc3RyaW5nW10pO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBVcmxIZWxwZXIge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIG5hdmlnYXRvcjogTmF2aWdhdG9yLFxyXG4gICAgcHVibGljIHBhdGg6IHN0cmluZ1tdLFxyXG4gICAgcHVibGljIHBhcmVudD86IFVybEhlbHBlclxyXG4gICkge31cclxuXHJcbiAgc3RyaW5naWZ5KC4uLnBhdGg6IHN0cmluZ1tdKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBmdWxsUGF0aCh0aGlzKTtcclxuICAgIHJlc3VsdC5wdXNoLmFwcGx5KHJlc3VsdCwgcGF0aCk7XHJcbiAgICByZXR1cm4gXCIvXCIgKyByZXN1bHQuam9pbihcIi9cIik7XHJcbiAgfVxyXG5cclxuICByb3V0ZSguLi5wYXRoOiBzdHJpbmdbXSkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gZnVsbFBhdGgodGhpcyk7XHJcbiAgICByZXN1bHQucHVzaC5hcHBseShyZXN1bHQsIHBhdGgpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIG5hdmlnYXRlID0gKC4uLnBhdGg6IHN0cmluZ1tdKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZSA9IHRoaXMucm91dGUoLi4ucGF0aCk7XHJcbiAgICB0aGlzLm5hdmlnYXRvci5leGVjdXRlKHJvdXRlKTtcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBmdWxsUGF0aCh1cmw6IFVybEhlbHBlcikge1xyXG4gIGNvbnN0IHN0YWNrOiBVcmxIZWxwZXJbXSA9IFtdO1xyXG4gIHdoaWxlICh1cmwpIHtcclxuICAgIHN0YWNrLnB1c2godXJsKTtcclxuICAgIHVybCA9IHVybC5wYXJlbnQ7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XHJcbiAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xyXG4gICAgY29uc3QgY3VyciA9IHN0YWNrLnBvcCgpO1xyXG4gICAgcmVzdWx0LnB1c2guYXBwbHkocmVzdWx0LCBjdXJyLnBhdGgpO1xyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbiIsImltcG9ydCB0cGwgZnJvbSBcImdsb3cuanNcIjtcclxuaW1wb3J0IElmIGZyb20gXCJnbG93LmpzL2NvbXBvbmVudHMvaWZcIjtcclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwiZ2xvdy5qcy9saWIvZnJhZ21lbnRcIjtcclxuaW1wb3J0IFRpbWVUYWJsZSwge1xyXG4gICAgVGltZVRhYmxlRGF0YSxcclxuICAgIHRpbWVVbml0LFxyXG59IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3RpbWUtdGFibGVcIjtcclxuaW1wb3J0IGdyb3VwQnkgZnJvbSBcIi4uLy4uLy4uL2NvcmUvZ3JvdXAtYnlcIjtcclxuaW1wb3J0IHtcclxuICAgIEVtcGxveWVlLFxyXG4gICAgZmV0Y2hTdXBwbHksXHJcbiAgICBmdWxsTmFtZSxcclxuICAgIGlzSW5SYW5nZSxcclxuICAgIFBvc2l0aW9uLFxyXG59IGZyb20gXCIuLi9zZXJ2aWNlcy9wbGFubmluZ1wiO1xyXG5cclxuaW50ZXJmYWNlIFBsYW5uaW5nUHJvcHMge1xyXG4gICAgcG9zaXRpb25zOiBQcm9taXNlPFBvc2l0aW9uW10+O1xyXG4gICAgZW1wbG95ZWVzOiBQcm9taXNlPEVtcGxveWVlW10+O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgRW1wbG95ZWVDZWxsIHtcclxuICAgIGRlbHRhOiBudW1iZXI7XHJcbiAgICBwb3NpdGlvbjogc3RyaW5nO1xyXG4gICAgc3VwcGx5OiBudW1iZXI7XHJcbiAgICBoYXNTaGlmdDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gUGxhbm5pbmdCeUFnZW50cyhwcm9wczogUGxhbm5pbmdQcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxoZWFkZXIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBnYXA6IDEycHg7XCI+XHJcbiAgICAgICAgICAgICAgICBQbGFubmluZyBCeSBBZ2VudHNcclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgPFRpbWVUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUG9zaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3M9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBnZXRSb3dzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcHJvcHMuZW1wbG95ZWVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcHJvcHMucG9zaXRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbENvbnRlbnRUZW1wbGF0ZT17Y2VsbFRlbXBsYXRlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICApO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNlbGxUZW1wbGF0ZShjZWxsOiBFbXBsb3llZUNlbGwpIHtcclxuICAgICAgICBpZiAoIWNlbGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGNcIiBjbGFzc19kPVwiIWM/LmF2YWlsYWJsZVwiIG5nSWY9XCJpdGVtLmNoaWxkcmVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gbmdJZj1cIiFyb3cudG9nZ2xlZFwiPntjZWxsLnN1cHBseSB8fCBudWxsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYlwiIG5nSWY9XCJyb3cudG9nZ2xlZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0Y1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NfZD1cIiFjPy5hdmFpbGFibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzX2Fic2VudD1cImM/LmFic2VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3Nfb3ZlcnN0YXk9XCJtYXhTdGFuZGluZ1RpbWVFbmFibGVkICYmIGM/Lm92ZXJzdGF5ID09IDFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzX292ZXJzdGF5X3Bvc2l0aW9uPVwibWF4UG9zaXRpb25TdGFuZGluZ1RpbWVFbmFibGVkICYmIGM/Lm92ZXJzdGF5ID09IDJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzX3N1YnN0aXR1dGU9XCJjPy5zdWJzdGl0dXRlTW9kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NfdGFyZ2V0PVwiYz8uc3Vic3RpdHV0ZU1vZGUgPT09IDFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzX25vX3Nob3c9XCJjPy5zdGF0dXMgPT0gJ05vU2hvdydcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlX2JhY2tncm91bmQ9XCJjPy5oaWdobGlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5nSWY9XCIhaXRlbS5jaGlsZHJlblwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInBvc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5nSWY9XCJjPy5wb3NpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdFRvb2x0aXA9XCJoaWRkZW5QbGFuSW5kaWNhdG9yRW5hYmxlZCAmJiAhIWdldFRvb2x0aXAoaXRlbSwgaSk/IGdldFRvb2x0aXAoaXRlbSwgaSk6IGM/LnRvb2x0aXBcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGhpZGRlbi1wbGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5nSWY9XCJoaWRkZW5QbGFuSW5kaWNhdG9yRW5hYmxlZCAmJiAhIWdldFRvb2x0aXAoaXRlbSwgaSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5X29mZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWYgY29uZGl0aW9uPXshIWNlbGwucG9zaXRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2NlbGwucG9zaXRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWYgY29uZGl0aW9uPXtjZWxsLmRlbHRhID4gMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz17W1wiZGVsdGFcIiwgY2VsbC5kZWx0YSAmJiBcIm92ZXJmbG93XCJdfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2VsbC5kZWx0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JZj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJlbWFya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRUb29sdGlwPVwiYz8ucmVtYXJrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5nSWY9XCJjPy5yZW1hcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRSb3dzKGVtcGxveWVlczogRW1wbG95ZWVbXSwgcG9zaXRpb25zOiBQb3NpdGlvbltdKSB7XHJcbiAgICBjb25zdCBzdXBwbHkgPSBhd2FpdCBmZXRjaFN1cHBseSgpO1xyXG5cclxuICAgIGNvbnN0IHJvd3M6IFRpbWVUYWJsZURhdGE8RW1wbG95ZWVDZWxsPltdID0gW107XHJcbiAgICBjb25zdCBncm91cHMgPSBncm91cEJ5KFxyXG4gICAgICAgIHN1cHBseSxcclxuICAgICAgICAoZSkgPT4gZS5lbXBsb3llZUlkLFxyXG4gICAgICAgIChrLCBzKSA9PiAoe1xyXG4gICAgICAgICAgICBrZXk6IGssXHJcbiAgICAgICAgICAgIGVtcGxveWVlOiBlbXBsb3llZXMuZmluZCgoZSkgPT4gZS5pZCA9PSBrKSxcclxuICAgICAgICAgICAgaXRlbXM6IFtzXSxcclxuICAgICAgICB9KVxyXG4gICAgKTtcclxuICAgIGdyb3Vwcy5zb3J0KCh4LCB5KSA9PlxyXG4gICAgICAgIGVtcGxveWVlTmFtZSh4LmVtcGxveWVlKS5sb2NhbGVDb21wYXJlKGVtcGxveWVlTmFtZSh5LmVtcGxveWVlKSlcclxuICAgICk7XHJcblxyXG4gICAgZm9yIChjb25zdCBncm91cCBvZiBncm91cHMpIHtcclxuICAgICAgICBjb25zdCBlbXBsID0gZ3JvdXAuZW1wbG95ZWU7XHJcbiAgICAgICAgaWYgKGVtcGwpIHtcclxuICAgICAgICAgICAgY29uc3QgZW1wbG95ZWVTdXBwbHkgPSBzdXBwbHkuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgKGUpID0+IGUuZW1wbG95ZWVJZCA9PT0gZW1wbC5pZCAmJiAhIWUucG9zaXRpb25JZFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgcm93cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGlkZW50aWZpZXI6IGdyb3VwLmtleSxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBmdWxsTmFtZShlbXBsKSxcclxuICAgICAgICAgICAgICAgIHZhbHVlcyhob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBob3VyICogNjAgKyBtaW51dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW5kID0gc3RhcnQgKyB0aW1lVW5pdDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VwcGx5ID0gZW1wbG95ZWVTdXBwbHkuZmlsdGVyKChlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0luUmFuZ2UoZS50aW1lTGluZSwgc3RhcnQsIGVuZClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdXBwbHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGUpID0+IGdldFNob3J0aGFuZChwb3NpdGlvbnMsIGUucG9zaXRpb25JZCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuam9pbihcIixcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdXBwbHk6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc1NoaWZ0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1wbC5zaGlmdHMuZmlsdGVyKChlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW5SYW5nZShlLnRpbWVMaW5lLCBzdGFydCwgZW5kKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5sZW5ndGggPiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIH0gYXMgRW1wbG95ZWVDZWxsO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJnQ29sb3IoY2VsbDogRW1wbG95ZWVDZWxsKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2VsbC5oYXNTaGlmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIjRkZGRkZGOTBcIjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIjNjY2NjY2NDlcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJvd3M7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNob3J0aGFuZChwb3NpdGlvbnM6IFBvc2l0aW9uW10sIHBvc2l0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc3RhY2sgPSBwb3NpdGlvbnMuc2xpY2UoMCk7XHJcbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgcCA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICAgIGlmIChwLmlkID09IHBvc2l0aW9uSWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHAuc2hvcnRoYW5kO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoISFwLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYyBvZiBwLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKGMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlbXBsb3llZU5hbWUoeDogRW1wbG95ZWUpIHtcclxuICAgIHJldHVybiBmdWxsTmFtZSh4KSB8fCBcIlwiO1xyXG59XHJcbiIsImltcG9ydCB0cGwgZnJvbSBcImdsb3cuanNcIjtcclxuaW1wb3J0IElmIGZyb20gXCJnbG93LmpzL2NvbXBvbmVudHMvaWZcIjtcclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwiZ2xvdy5qcy9saWIvZnJhZ21lbnRcIjtcclxuaW1wb3J0IFRpbWVUYWJsZSwge1xyXG4gICAgVGltZVRhYmxlRGF0YSxcclxuICAgIHRpbWVVbml0LFxyXG59IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3RpbWUtdGFibGVcIjtcclxuaW1wb3J0IHtcclxuICAgIERhaWx5RGVtYW5kLFxyXG4gICAgZmV0Y2hEZW1hbmRzLFxyXG4gICAgZmV0Y2hTdXBwbHksXHJcbiAgICBpc0luUmFuZ2UsXHJcbiAgICBQb3NpdGlvbixcclxuICAgIFBvc2l0aW9uU3VwcGx5LFxyXG59IGZyb20gXCIuLi9zZXJ2aWNlcy9wbGFubmluZ1wiO1xyXG5cclxuaW50ZXJmYWNlIFBsYW5uaW5nUHJvcHMge1xyXG4gICAgcG9zaXRpb25zOiBQcm9taXNlPFBvc2l0aW9uW10+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBQbGFubmluZ1BlclBvc2l0aW9uKHByb3BzOiBQbGFubmluZ1Byb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgPGhlYWRlciBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGdhcDogMTJweDtcIj5cclxuICAgICAgICAgICAgICAgIFBsYW5uaW5nIFBlciBQb3NpdGlvblxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICA8VGltZVRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQb3NpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgcm93cz17YXdhaXQgZ2V0Um93cyhhd2FpdCBwcm9wcy5wb3NpdGlvbnMpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNlbGxDb250ZW50VGVtcGxhdGU9eyhjZWxsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2VsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5EOiB7Y2VsbC5kZW1hbmR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJZiBjb25kaXRpb249e2NlbGwuc3VwcGx5ICE9PSBjZWxsLmRlbWFuZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicm9tLXRpbWUtdGFibGUtY2VsbF9fZGVsdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjZWxsLnN1cHBseSAtIGNlbGwuZGVtYW5kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JZj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Um93cyhwb3NpdGlvbnM6IFBvc2l0aW9uW10pIHtcclxuICAgIGNvbnN0IHN1cHBseSA9IGF3YWl0IGZldGNoU3VwcGx5KCk7XHJcbiAgICBjb25zdCBkZW1hbmRzID0gYXdhaXQgZmV0Y2hEZW1hbmRzKCk7XHJcbiAgICBjb25zdCByb3dzOiBUaW1lVGFibGVEYXRhPFBsYW5DZWxsPltdID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBwb3MgPSBwb3NpdGlvbnNbaV07XHJcbiAgICAgICAgY29uc3Qgcm93ID0gdG9Sb3cocG9zKTtcclxuICAgICAgICBpZiAocm93KSB7XHJcbiAgICAgICAgICAgIHJvd3MucHVzaChyb3cpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcm93cztcclxuXHJcbiAgICBmdW5jdGlvbiB0b1Jvdyhwb3M6IFBvc2l0aW9uKTogVGltZVRhYmxlRGF0YTxQbGFuQ2VsbD4ge1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uU3VwcGx5ID0gc3VwcGx5LmZpbHRlcigoZSkgPT4gZS5wb3NpdGlvbklkID09PSBwb3MuaWQpO1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uRGVtYW5kID0gZGVtYW5kcy5maW5kKChlKSA9PiBlLnBvc2l0aW9uSWQgPT09IHBvcy5pZCk7XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBwb3MuY2hpbGRyZW4ubWFwKHRvUm93KS5maWx0ZXIoKGUpID0+IGUgIT0gbnVsbCk7XHJcbiAgICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA9PSAwICYmIHBvc2l0aW9uU3VwcGx5Lmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWRlbnRpZmllcjogcG9zLmlkLFxyXG4gICAgICAgICAgICBsYWJlbDogcG9zLm5hbWUsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuLFxyXG4gICAgICAgICAgICB2YWx1ZXMoaG91cjogbnVtYmVyLCBtaW51dGU6IG51bWJlcikge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBob3VyICogNjAgKyBtaW51dGU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbmQgPSBzdGFydCArIHRpbWVVbml0O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGw6IFBsYW5DZWxsID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1cHBseTogY291bnRTdXBwbHlJblJhbmdlKHBvc2l0aW9uU3VwcGx5LCBzdGFydCwgZW5kKSxcclxuICAgICAgICAgICAgICAgICAgICBkZW1hbmQ6IGNvdW50RGVtYW5kSW5SYW5nZShwb3NpdGlvbkRlbWFuZCwgc3RhcnQsIGVuZCksXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghIWNlbGwuZGVtYW5kIHx8ICEhY2VsbC5zdXBwbHkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2VsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYmdDb2xvcihjZWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNlbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgc3VwcGx5IH0gPSBjZWxsO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN1cHBseSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgcmdiYSgyNTUsMCwwLCR7MC4wMyAqIE1hdGguYWJzKHN1cHBseSl9KWA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvdW50U3VwcGx5SW5SYW5nZShcclxuICAgIHBvc2l0aW9uU3VwcGx5OiBQb3NpdGlvblN1cHBseVtdLFxyXG4gICAgc3RhcnQ6IG51bWJlcixcclxuICAgIGVuZDogbnVtYmVyXHJcbikge1xyXG4gICAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHBsIG9mIHBvc2l0aW9uU3VwcGx5KSB7XHJcbiAgICAgICAgaWYgKCFpc0luUmFuZ2UocGwudGltZUxpbmUsIHN0YXJ0LCBlbmQpKSBjb250aW51ZTtcclxuICAgICAgICBjb3VudCsrO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb3VudDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvdW50RGVtYW5kSW5SYW5nZShcclxuICAgIGRlbWFuZDogRGFpbHlEZW1hbmQsXHJcbiAgICBzdGFydFRpbWU6IG51bWJlcixcclxuICAgIGVuZFRpbWU6IG51bWJlclxyXG4pIHtcclxuICAgIGxldCByZXN1bHQgPSAwO1xyXG4gICAgaWYgKGRlbWFuZCkge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSB0aW1lVG9JbmRleChzdGFydFRpbWUpO1xyXG4gICAgICAgIGNvbnN0IGVuZEluZGV4ID0gdGltZVRvSW5kZXgoZW5kVGltZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXg7IGkgPCBlbmRJbmRleDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBkZW1hbmQudmFsdWVzWyhpICogdGltZVVuaXQpIC8gNV07XHJcbiAgICAgICAgICAgIGlmICh4ID4gcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gdGltZVRvSW5kZXgodDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCB0b3RhbE1pbnV0ZXMgPSB0O1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IodG90YWxNaW51dGVzIC8gdGltZVVuaXQpO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBsYW5DZWxsIHtcclxuICAgIHN1cHBseTogbnVtYmVyO1xyXG4gICAgZGVtYW5kOiBudW1iZXI7XHJcbn1cclxuIiwiaW1wb3J0IHRwbCBmcm9tIFwiZ2xvdy5qc1wiO1xyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJnbG93LmpzL2xpYi9mcmFnbWVudFwiO1xyXG5pbXBvcnQgVGltZVRhYmxlLCB7IFRpbWVUYWJsZURhdGEgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy90aW1lLXRhYmxlXCI7XHJcbmltcG9ydCB7IGZldGNoRGVtYW5kcywgUG9zaXRpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvcGxhbm5pbmdcIjtcclxuXHJcbmludGVyZmFjZSBEZW1hbmRDZWxsIHtcclxuICAgIGRlbWFuZDogbnVtYmVyO1xyXG4gICAgaW1wbGljaXQ/OiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBQbGFubmluZ1Byb3BzIHtcclxuICAgIHBvc2l0aW9uczogUHJvbWlzZTxQb3NpdGlvbltdPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gRGVtYW5kUGxhbm5pbmcocHJvcHM6IFBsYW5uaW5nUHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICA8aGVhZGVyIHN0eWxlPVwiZGlzcGxheTogZmxleDsgZ2FwOiAxMnB4O1wiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1kYy1idXR0b24gbWRjLWJ1dHRvbi0tcmFpc2VkXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIi0tbWRjLXRoZW1lLXByaW1hcnk6IGJsdWVcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFNldCBkZW1hbmRcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWRjLWJ1dHRvbiBtZGMtYnV0dG9uLS1yYWlzZWQgbWRjLWJ1dHRvbi0tZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIi0tbWRjLXRoZW1lLXByaW1hcnk6IHJlZFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGMtYnV0dG9uX19yaXBwbGVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBtZGMtYnV0dG9uX19pY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvb2ttYXJrXHJcbiAgICAgICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWRjLWJ1dHRvbl9fbGFiZWxcIj5VcGxvYWQgZmlsZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICA8VGltZVRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQb3NpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgcm93cz17YXdhaXQgZ2V0Um93cyhhd2FpdCBwcm9wcy5wb3NpdGlvbnMpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNlbGxDb250ZW50VGVtcGxhdGU9eyhjZWxsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NlbGwgJiYgY2VsbC5kZW1hbmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyb20tZGF0YXRhYmxlLWNlbGxfX2NvbnRlbnRfX2RlbHRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXREZWx0YShjZWxsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFJvd3MocG9zaXRpb25zOiBQb3NpdGlvbltdKSB7XHJcbiAgICBjb25zdCBkZW1hbmRzID0gYXdhaXQgZmV0Y2hEZW1hbmRzKCk7XHJcbiAgICBjb25zdCByb3dzOiBUaW1lVGFibGVEYXRhPERlbWFuZENlbGw+W10gPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgcG9zID0gcG9zaXRpb25zW2ldO1xyXG4gICAgICAgIHJvd3MucHVzaCh0b1Jvdyhwb3MpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcm93cztcclxuXHJcbiAgICBmdW5jdGlvbiB0b1Jvdyhwb3M6IFBvc2l0aW9uKTogVGltZVRhYmxlRGF0YTxEZW1hbmRDZWxsPiB7XHJcbiAgICAgICAgY29uc3QgZGVtYW5kID0gZGVtYW5kcy5maW5kKChlKSA9PiBlLnBvc2l0aW9uSWQgPT09IHBvcy5pZCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWRlbnRpZmllcjogcG9zLmlkLFxyXG4gICAgICAgICAgICBsYWJlbDogcG9zLm5hbWUsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBwb3MuY2hpbGRyZW4ubWFwKHRvUm93KSxcclxuICAgICAgICAgICAgdmFsdWVzKGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghZGVtYW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZHggPSBNYXRoLmZsb29yKChob3VyICogNjAgKyBtaW51dGUpIC8gNSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGRlbWFuZC52YWx1ZXNbaWR4XSB8fCAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBkZW1hbmQ6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGltcGxpY2l0OiB2YWx1ZSAtIDEsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiZ0NvbG9yKGNlbGwpIHtcclxuICAgICAgICAgICAgICAgIGlmICghY2VsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBkZW1hbmQsIGltcGxpY2l0IH0gPSBjZWxsO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRlbWFuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbXBsaWNpdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWx0YSA9IGRlbWFuZCAtIGltcGxpY2l0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVsdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgcmdiYSgyNTUsMCwwLCR7MC4wMyAqIE1hdGguYWJzKGRlbHRhKX0pYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJnYmEoMCwyNTUsMCwwLjIpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicmdiYSgwLDIwMCwyMjIsMC4xKVwiO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbXBsaWNpdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgcmdiYSgyNTUsMCwwLCR7MC4wMyAqIE1hdGguYWJzKGltcGxpY2l0KX0pYDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXREZWx0YShjZWxsOiBEZW1hbmRDZWxsKSB7XHJcbiAgICBpZiAoIWNlbGwpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRlbWFuZCwgaW1wbGljaXQgfSA9IGNlbGw7XHJcbiAgICBpZiAoIWRlbWFuZCB8fCAhaW1wbGljaXQpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWx0YSA9IChjZWxsLmRlbWFuZCB8fCAwKSAtIChjZWxsLmltcGxpY2l0IHx8IDApO1xyXG4gICAgcmV0dXJuIGRlbHRhID8gYCgke2RlbHRhfSlgIDogbnVsbDtcclxufVxyXG4iLCJpbXBvcnQgdHBsIGZyb20gXCJnbG93LmpzXCI7XHJcbmltcG9ydCB7IFJvdXRlck91dGxldCB9IGZyb20gXCJtdmMuanMvb3V0bGV0XCI7XHJcbmltcG9ydCB7IFJvdXRlckNvbXBvbmVudCwgVmlld0NvbnRleHQgfSBmcm9tIFwibXZjLmpzL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJQYWdlIH0gZnJvbSBcIi4uXCI7XHJcbmltcG9ydCBUYWJCYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdGFiLWJhclwiO1xyXG5pbXBvcnQgUGxhbm5pbmdCeUFnZW50cyBmcm9tIFwiLi9ieS1hZ2VudHNcIjtcclxuaW1wb3J0IFRyYWNrc1BsYW5uaW5nIGZyb20gXCIuL3RyYWNrc1wiO1xyXG5pbXBvcnQgUGxhbm5pbmdCeVBvc2l0aW9uIGZyb20gXCIuL2J5LXBvc2l0aW9uc1wiO1xyXG5pbXBvcnQgRGVtYW5kUGxhbm5pbmcgZnJvbSBcIi4vZGVtYW5kc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCIuLi8uLi8uLi9tdXRhYmwuanNcIjtcclxuaW1wb3J0IHsgZmV0Y2hFbXBsb3llZXMsIGZldGNoUG9zaXRpb25zIH0gZnJvbSBcIi4vc2VydmljZXMvcGxhbm5pbmdcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3Bpbm5lclwiO1xyXG5cclxuZnVuY3Rpb24gbmF2KCkge1xyXG4gIGNvbnN0IGVtcGxveWVlcyA9IGZldGNoRW1wbG95ZWVzKCk7XHJcbiAgY29uc3QgcG9zaXRpb25zID0gZmV0Y2hQb3NpdGlvbnMoKTtcclxuXHJcbiAgcmV0dXJuIFtcclxuICAgIHtcclxuICAgICAgcGF0aDogW1wiZGVtYW5kc1wiXSxcclxuICAgICAgY29tcG9uZW50OiAoKSA9PiA8RGVtYW5kUGxhbm5pbmcgcG9zaXRpb25zPXtwb3NpdGlvbnN9IC8+LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcGF0aDogW1wicGVyLXBvc2l0aW9uXCJdLFxyXG4gICAgICBjb21wb25lbnQ6ICgpID0+IDxQbGFubmluZ0J5UG9zaXRpb24gcG9zaXRpb25zPXtwb3NpdGlvbnN9IC8+LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcGF0aDogW1widHJhY2tzXCJdLFxyXG4gICAgICBjb21wb25lbnQ6ICgpID0+IDxUcmFja3NQbGFubmluZyBwb3NpdGlvbnM9e3Bvc2l0aW9uc30gLz4sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwYXRoOiBbXSxcclxuICAgICAgY29tcG9uZW50OiAoKSA9PiAoXHJcbiAgICAgICAgPFBsYW5uaW5nQnlBZ2VudHMgZW1wbG95ZWVzPXtlbXBsb3llZXN9IHBvc2l0aW9ucz17cG9zaXRpb25zfSAvPlxyXG4gICAgICApLFxyXG4gICAgfSxcclxuICBdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQWdlbnRzUGxhbm5pbmcoKTogUm91dGVyQ29tcG9uZW50IHtcclxuICByZXR1cm4ge1xyXG4gICAgdmlldyhjb250ZXh0OiBWaWV3Q29udGV4dCkge1xyXG4gICAgICBjb25zdCBjdXJyZW50Um91dGUgPSBuZXcgU3RvcmU8c3RyaW5nW10+KFtdKTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8Um91dGVyUGFnZT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3V0ZXItcGFnZV9fY29udGVudFwiPlxyXG4gICAgICAgICAgICA8aGVhZGVyIHN0eWxlPVwibWF4LXdpZHRoOiA5MDBweDtcIj5cclxuICAgICAgICAgICAgICA8VGFiQmFyIHNlbGVjdGVkPXtjdXJyZW50Um91dGV9IC8+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICA8Um91dGVyT3V0bGV0XHJcbiAgICAgICAgICAgICAgb25SZXNvbHZlZD17b25SZXNvbHZlZH1cclxuICAgICAgICAgICAgICByb3V0ZXI9e2NvbnRleHQuY2hpbGRSb3V0ZXIobmF2KCkpfVxyXG4gICAgICAgICAgICAgIGxvYWRlcj17PFNwaW5uZXIgLz59XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JvdXRlclBhZ2U+XHJcbiAgICAgICk7XHJcblxyXG4gICAgICBmdW5jdGlvbiBvblJlc29sdmVkKHBhdGhzOiBzdHJpbmdbXVtdKSB7XHJcbiAgICAgICAgY29uc3QgZmlyc3QgPSBwYXRoc1swXTtcclxuICAgICAgICBpZiAoZmlyc3QpIHtcclxuICAgICAgICAgIGN1cnJlbnRSb3V0ZS5uZXh0KGZpcnN0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBmZXRjaEpzb24gfSBmcm9tIFwiLi4vLi4vLi4vY29yZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb3NpdGlvblN1cHBseSB7XHJcbiAgICByZWFkb25seSBwb3NpdGlvbklkOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBlbXBsb3llZUlkOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSB0aW1lTGluZTogVGltZUxpbmU7XHJcbn1cclxuXHJcbmludGVyZmFjZSBUaW1lTGluZSB7XHJcbiAgICBzdGFydFRpbWU6IG51bWJlcjtcclxuICAgIGVuZFRpbWU6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFNoaWZ0IHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHRpbWVMaW5lOiBUaW1lTGluZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSW5SYW5nZSh0bDogVGltZUxpbmUsIHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdGwuc3RhcnRUaW1lIDwgZW5kICYmIHRsLmVuZFRpbWUgPiBzdGFydDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUcmFjayB7XHJcbiAgICBncm91cGluZ1RyYWNrSWQ6IHN0cmluZztcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICB0cmFja0lkOiBzdHJpbmc7XHJcbiAgICBlbXBsb3llZTogRW1wbG95ZWU7XHJcbiAgICB0aW1lTGluZTogVGltZUxpbmU7XHJcbiAgICB0cmFja0d1aWQ6IHN0cmluZztcclxuICAgIHBvc2l0aW9uSWQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb3NpdGlvbiB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgc2hvcnRoYW5kOiBzdHJpbmc7XHJcbiAgICBkZWZhdWx0Q29sb3I6IHN0cmluZztcclxuICAgIGNoaWxkcmVuOiBQb3NpdGlvbltdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERhaWx5RGVtYW5kIHtcclxuICAgIHBvc2l0aW9uSWQ6IHN0cmluZztcclxuICAgIHZhbHVlczogbnVtYmVyW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRW1wbG95ZWUge1xyXG4gICAgc2hpZnRzOiBTaGlmdFtdO1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gICAgbGFzdE5hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZ1bGxOYW1lKGU6IEVtcGxveWVlKSB7XHJcbiAgICBpZiAoIWUgfHwgIWUuZmlyc3ROYW1lIHx8ICFlLmxhc3ROYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGUuZmlyc3ROYW1lICsgXCIgXCIgKyBlLmxhc3ROYW1lO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hTdXBwbHkoKTogUHJvbWlzZTxQb3NpdGlvblN1cHBseVtdPiB7XHJcbiAgICByZXR1cm4gZmV0Y2hKc29uKFwiL3BsYW5uaW5nL3Bvc2l0aW9uLXN1cHBseVwiKS50aGVuKChlKSA9PiBlLmpzb24oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaERlbWFuZHMoKTogUHJvbWlzZTxEYWlseURlbWFuZFtdPiB7XHJcbiAgICByZXR1cm4gZmV0Y2hKc29uKFwiL3BsYW5uaW5nL2RlbWFuZHNcIikudGhlbigoZSkgPT4gZS5qc29uKCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hFbXBsb3llZXMoKTogUHJvbWlzZTxFbXBsb3llZVtdPiB7XHJcbiAgICByZXR1cm4gZmV0Y2hKc29uKFwiL3BsYW5uaW5nL2VtcGxveWVlc1wiKS50aGVuKChlKSA9PiBlLmpzb24oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFBvc2l0aW9ucygpOiBQcm9taXNlPFBvc2l0aW9uW10+IHtcclxuICAgIHJldHVybiBmZXRjaEpzb24oXCIvcGxhbm5pbmcvcG9zaXRpb25zXCIpLnRoZW4oKGUpID0+IGUuanNvbigpKTtcclxufVxyXG4iLCJpbXBvcnQgdHBsIGZyb20gXCJnbG93LmpzXCI7XHJcbmltcG9ydCBDc3MgZnJvbSBcImdsb3cuanMvY29tcG9uZW50cy9jc3NcIjtcclxuaW1wb3J0IElmIGZyb20gXCJnbG93LmpzL2NvbXBvbmVudHMvaWZcIjtcclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwiZ2xvdy5qcy9saWIvZnJhZ21lbnRcIjtcclxuaW1wb3J0IHsgUm91dGVyQ29tcG9uZW50IH0gZnJvbSBcIm12Yy5qcy9yb3V0ZXJcIjtcclxuaW1wb3J0IFRpbWVUYWJsZSwge1xyXG4gIFRpbWVUYWJsZURhdGEsXHJcbiAgdGltZVVuaXQsXHJcbn0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvdGltZS10YWJsZVwiO1xyXG5pbXBvcnQgeyBmZXRjaEpzb24gfSBmcm9tIFwiLi4vLi4vLi4vY29yZVwiO1xyXG5pbXBvcnQgZ3JvdXBCeSwgeyBHcm91cCB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL2dyb3VwLWJ5XCI7XHJcbmltcG9ydCB7IGZ1bGxOYW1lLCBQb3NpdGlvbiwgVHJhY2sgfSBmcm9tIFwiLi4vc2VydmljZXMvcGxhbm5pbmdcIjtcclxuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XHJcblxyXG5pbnRlcmZhY2UgUGxhbm5pbmdQcm9wcyB7XHJcbiAgcG9zaXRpb25zOiBQcm9taXNlPFBvc2l0aW9uW10+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUcmFja3NQbGFubmluZyhwcm9wczogUGxhbm5pbmdQcm9wcyk6IFJvdXRlckNvbXBvbmVudCB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGFzeW5jIHZpZXcoKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgPGhlYWRlciBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGdhcDogMTJweDtcIj5QbGFubmluZyBQZXIgVHJhY2s8L2hlYWRlcj5cclxuICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICA8VGltZVRhYmxlXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJBZ2VudFwiXHJcbiAgICAgICAgICAgICAgcm93cz17YXdhaXQgZ2V0Um93cyhhd2FpdCBwcm9wcy5wb3NpdGlvbnMpfVxyXG4gICAgICAgICAgICAgIGNlbGxDb250ZW50VGVtcGxhdGU9e3RyYWNrQ2VsbFRlbXBsYXRlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIHRyYWNrQ2VsbFRlbXBsYXRlKFxyXG4gICAgY2VsbDogVHJhY2tDZWxsIHwge30sXHJcbiAgICByb3c6IFRpbWVUYWJsZURhdGE8VHJhY2tDZWxsPlxyXG4gICkge1xyXG4gICAgaWYgKHJvdy5jaGlsZHJlbikge1xyXG4gICAgICByZXR1cm4gPENzcyB2YWx1ZT1cImdyb3VwaW5nLXRyYWNrXCIgLz47XHJcbiAgICB9XHJcbiAgICBpZiAoIWNlbGwgfHwgIShcInNob3J0aGFuZFwiIGluIGNlbGwpKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsYXNzTGlzdCA9IFtcclxuICAgICAgXCJ0Y1wiLFxyXG4gICAgICBjZWxsLnNob3J0aGFuZCAmJiBcImRcIixcclxuICAgICAgY2VsbC5hYnNlbnQgJiYgXCJhYnNlbnRcIixcclxuICAgICAgY2VsbC5zdWJzdGl0dXRlZCAmJiBcInN1YnN0aXR1dGVkXCIsXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzPXtjbGFzc0xpc3R9XHJcbiAgICAgICAgbWF0VG9vbHRpcD1cImM/LnRvb2x0aXBcIlxyXG4gICAgICAgIHN0eWxlPXtcImJhY2tncm91bmQtY29sb3I6IFwiICsgY2VsbC5iZ0NvbG9yICsgXCI4MFwifVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBvc1wiPlxyXG4gICAgICAgICAgPHNwYW4+e2NlbGwuc2hvcnRoYW5kfTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVsdGFcIiBuZ0lmPVwiYy5kZWx0YVwiIGNsYXNzX292ZXJmbG93PVwiYy5kZWx0YSA+IDBcIj5cclxuICAgICAgICAgICAgMFxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPElmIGNvbmRpdGlvbj17ISFjZWxsLnJlbWFya30+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVtYXJrXCIgbWF0VG9vbHRpcD1cImMucmVtYXJrXCI+XHJcbiAgICAgICAgICAgICAgIVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L0lmPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRSb3dzKFxyXG4gIHBvc2l0aW9uczogUG9zaXRpb25bXVxyXG4pOiBQcm9taXNlPFRpbWVUYWJsZURhdGE8VHJhY2tDZWxsIHwge30+W10+IHtcclxuICBjb25zdCB0cmFja3M6IFRyYWNrW10gPSBhd2FpdCBmZXRjaEpzb24oXCIuL3BsYW5uaW5nL3RyYWNrc1wiKS50aGVuKChlKSA9PlxyXG4gICAgZS5qc29uKClcclxuICApO1xyXG5cclxuICBjb25zdCBwb3NpdGlvbk1hcDogeyBbaWQ6IHN0cmluZ106IFBvc2l0aW9uIH0gPSB7fTtcclxuICBmb3IgKGNvbnN0IHBvcyBvZiBwb3NpdGlvbnMpIHtcclxuICAgIHBvc2l0aW9uTWFwW3Bvcy5pZF0gPSBwb3M7XHJcbiAgfVxyXG5cclxuICBjb25zdCByb3dzOiBUaW1lVGFibGVEYXRhPFRyYWNrQ2VsbCB8IHt9PltdID0gW107XHJcblxyXG4gIGNvbnN0IHRyYWNrR3JvdXBzOiBHcm91cDxUcmFjaz5bXSA9IGdyb3VwQnkodHJhY2tzLCAoZSkgPT4gZS5ncm91cGluZ1RyYWNrSWQpO1xyXG4gIHRyYWNrR3JvdXBzLnNvcnQoKHgsIHkpID0+IHgua2V5LmxvY2FsZUNvbXBhcmUoeS5rZXkpKTtcclxuXHJcbiAgZm9yIChjb25zdCB0cmFja0dyb3VwIG9mIHRyYWNrR3JvdXBzKSB7XHJcbiAgICBjb25zdCByb3cgPSB0b1Jvdyh0cmFja0dyb3VwKTtcclxuICAgIGlmIChyb3cpIHtcclxuICAgICAgcm93cy5wdXNoKHJvdyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcm93cztcclxuXHJcbiAgZnVuY3Rpb24gdG9Sb3codHJhY2tHcm91cDogR3JvdXA8VHJhY2s+KTogVGltZVRhYmxlRGF0YTxUcmFja0NlbGwgfCB7fT4ge1xyXG4gICAgY29uc3QgY2hpbGRyZW46IFRpbWVUYWJsZURhdGE8VHJhY2tDZWxsPltdID0gW107XHJcblxyXG4gICAgY29uc3Qgc3ViVHJhY2tzID0gZ3JvdXBCeShcclxuICAgICAgdHJhY2tHcm91cC5pdGVtcyxcclxuICAgICAgKGUpID0+IGZ1bGxOYW1lKGUuZW1wbG95ZWUpIHx8IGUudHJhY2tJZFxyXG4gICAgKTtcclxuXHJcbiAgICBzdWJUcmFja3Muc29ydCgoeCwgeSkgPT4geC5rZXkubG9jYWxlQ29tcGFyZSh5LmtleSkpO1xyXG5cclxuICAgIGZvciAoY29uc3Qgc3ViVHJhY2sgb2Ygc3ViVHJhY2tzKSB7XHJcbiAgICAgIGNoaWxkcmVuLnB1c2goe1xyXG4gICAgICAgIGlkZW50aWZpZXI6IHN1YlRyYWNrLmtleSxcclxuICAgICAgICBsYWJlbDogc3ViVHJhY2sua2V5LFxyXG4gICAgICAgIHZhbHVlcyhoOiBudW1iZXIsIG06IG51bWJlcik6IFRyYWNrQ2VsbCB7XHJcbiAgICAgICAgICBjb25zdCBzdGFydCA9IGggKiA2MCArIG07XHJcbiAgICAgICAgICBjb25zdCBlbmQgPSBzdGFydCArIHRpbWVVbml0O1xyXG5cclxuICAgICAgICAgIGZvciAoY29uc3Qgc3ViIG9mIHN1YlRyYWNrLml0ZW1zKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICBzdWIudGltZUxpbmUuc3RhcnRUaW1lID49IGVuZCB8fFxyXG4gICAgICAgICAgICAgIHN1Yi50aW1lTGluZS5lbmRUaW1lIDw9IHN0YXJ0XHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IHBvc2l0aW9uTWFwW3N1Yi5wb3NpdGlvbklkXTtcclxuICAgICAgICAgICAgaWYgKHBvcykge1xyXG4gICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzaG9ydGhhbmQ6IHBvcy5zaG9ydGhhbmQsXHJcbiAgICAgICAgICAgICAgICBhYnNlbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYmdDb2xvcjogcG9zLmRlZmF1bHRDb2xvcixcclxuICAgICAgICAgICAgICAgIHN1YnN0aXR1dGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZGVudGlmaWVyOiB0cmFja0dyb3VwLmtleSxcclxuICAgICAgYmdDb2xvcigpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfSxcclxuICAgICAgY2hpbGRyZW4sXHJcbiAgICAgIGxhYmVsOiB0cmFja0dyb3VwLmtleSxcclxuICAgICAgdmFsdWVzKCkge1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgVHJhY2tDZWxsIHtcclxuICBiZ0NvbG9yOiBzdHJpbmc7XHJcbiAgc3Vic3RpdHV0ZWQ6IGJvb2xlYW47XHJcbiAgc2hvcnRoYW5kOiBzdHJpbmc7XHJcbiAgYWJzZW50OiBib29sZWFuO1xyXG4gIHJlbWFyaz86IHN0cmluZztcclxufVxyXG5cclxuZnVuY3Rpb24gcmFuZG9tQ29sb3IoKSB7XHJcbiAgY29uc3QgaGV4ID0gXCIwMTIzNDU2Nzg5QUJDREVGXCI7XHJcbiAgbGV0IHJlc3VsdCA9IFwiI1wiO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XHJcbiAgICByZXN1bHQgKz0gcmFuZG9tQ2hhcihoZXgpO1xyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0ICsgXCIxMFwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiByYW5kb21DaGFyKGhleDogc3RyaW5nKSB7XHJcbiAgY29uc3QgaSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGhleC5sZW5ndGgpO1xyXG4gIHJldHVybiBoZXhbaV07XHJcbn1cclxuIiwiaW1wb3J0IHRwbCBmcm9tIFwiZ2xvdy5qc1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXJDb21wb25lbnQsIFZpZXdDb250ZXh0IH0gZnJvbSBcIm12Yy5qcy9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyUGFnZSB9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9kYXRlLXBpY2tlclwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RleHQtZmllbGRcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBFbXBsb3llZXMoKTogUm91dGVyQ29tcG9uZW50IHtcclxuICByZXR1cm4ge1xyXG4gICAgdmlldyhjb250ZXh0OiBWaWV3Q29udGV4dCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSb3V0ZXJQYWdlPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvdXRlci1wYWdlX19jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxoZWFkZXI+VXNlcnM8L2hlYWRlcj5cclxuICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGxhYmVsPVwiVGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgIDxEYXRlUGlja2VyIGxhYmVsPVwiRW5kIGRhdGVcIiAvPlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JvdXRlclBhZ2U+XHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgdHBsIH0gZnJvbSBcImdsb3cuanNcIjtcclxuaW1wb3J0IHsgSUFjdGlvbkNvbnRleHQsIElBY3Rpb24gfSBmcm9tIFwibXZjLmpzXCI7XHJcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcImdsb3cuanMvbGliL2ZyYWdtZW50XCI7XHJcbmltcG9ydCB7IFJvdXRlck91dGxldCB9IGZyb20gXCJtdmMuanMvb3V0bGV0XCI7XHJcbmltcG9ydCB7IE1EQ0xpc3QgfSBmcm9tIFwiQG1hdGVyaWFsL2xpc3RcIjtcclxuaW1wb3J0IHsgTURDRHJhd2VyIH0gZnJvbSBcIkBtYXRlcmlhbC9kcmF3ZXJcIjtcclxuaW1wb3J0IHsgTURDVG9wQXBwQmFyIH0gZnJvbSBcIkBtYXRlcmlhbC90b3AtYXBwLWJhclwiO1xyXG5pbXBvcnQgeyBpc0RvbU5vZGUgfSBmcm9tIFwiZ2xvdy5qcy9saWIvZG9tXCI7XHJcbmltcG9ydCB7IExvZ2luIH0gZnJvbSBcIi4uL2xvZ2luXCI7XHJcbmltcG9ydCAqIGFzIFJ4IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCAqIGFzIFJvIGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBMaW5rTGlzdGVuZXIgfSBmcm9tIFwibXZjLmpzL3JvdXRlci9saW5rXCI7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlQnJvd3NlcixcclxuICBjcmVhdGVSb3V0ZXIsXHJcbiAgUm91dGVJbnB1dCxcclxuICBWaWV3Q29udGV4dCxcclxufSBmcm9tIFwibXZjLmpzL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XHJcbmltcG9ydCB7IEFnZW50c1BsYW5uaW5nIH0gZnJvbSBcIi4vYWdlbnRzLXBsYW5uaW5nXCI7XHJcbmltcG9ydCB7IEVtcGxveWVlcyB9IGZyb20gXCIuL2VtcGxveWVlc1wiO1xyXG5pbXBvcnQgeyBJbnZvaWNlcyB9IGZyb20gXCIuL2ludm9pY2VzL2luZGV4XCI7XHJcbmltcG9ydCB7IFVybEhlbHBlciB9IGZyb20gXCIuLi8uLi9tdmMuanMvcm91dGVyL3VybC1oZWxwZXJcIjtcclxuaW1wb3J0IHsgTWFpbk1lbnVDYXJkIH0gZnJvbSBcIi4vamVubmFoL21lbnUtY2FyZC9tYWluXCI7XHJcbmltcG9ydCBEZW1vQ29tcG9uZW50IGZyb20gXCIuL2plbm5haC9kZW1vXCI7XHJcblxyXG5mdW5jdGlvbiBUb3BCYXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3M9XCJtZGMtdG9wLWFwcC1iYXIgYXBwLWJhclwiIGlkPVwiYXBwLWJhclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibWRjLXRvcC1hcHAtYmFyX19yb3dcIj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIm1kYy10b3AtYXBwLWJhcl9fc2VjdGlvbiBtZGMtdG9wLWFwcC1iYXJfX3NlY3Rpb24tLWFsaWduLXN0YXJ0XCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgbWRjLXRvcC1hcHAtYmFyX19uYXZpZ2F0aW9uLWljb24gbWRjLWljb24tYnV0dG9uXCI+XHJcbiAgICAgICAgICAgIG1lbnVcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGMtdG9wLWFwcC1iYXJfX3RpdGxlXCI+XHJcbiAgICAgICAgICAgIFJlYWwtdGltZSBPcGVyYXRpb24gTWFuYWdlbWVudFxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIm1kYy10b3AtYXBwLWJhcl9fc2VjdGlvbiBtZGMtdG9wLWFwcC1iYXJfX3NlY3Rpb24tLWFsaWduLWVuZFwiPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzcz1cIm1kYy1pY29uLWJ1dHRvbiBtYXRlcmlhbC1pY29ucyBtZGMtdG9wLWFwcC1iYXJfX2FjdGlvbi1pdGVtIG1kYy1yaXBwbGUtdXBncmFkZWQtLXVuYm91bmRlZCBtZGMtcmlwcGxlLXVwZ3JhZGVkXCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkRvd25sb2FkXCJcclxuICAgICAgICAgICAgc3R5bGU9XCItLW1kYy1yaXBwbGUtZmctc2l6ZToyOHB4OyAtLW1kYy1yaXBwbGUtZmctc2NhbGU6MS43MTQxODsgLS1tZGMtcmlwcGxlLWxlZnQ6MTBweDsgLS1tZGMtcmlwcGxlLXRvcDoxMHB4O1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHNlYXJjaFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzPVwibWRjLWljb24tYnV0dG9uIG1hdGVyaWFsLWljb25zIG1kYy10b3AtYXBwLWJhcl9fYWN0aW9uLWl0ZW0gbWRjLXJpcHBsZS11cGdyYWRlZC0tdW5ib3VuZGVkIG1kYy1yaXBwbGUtdXBncmFkZWRcIlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiRG93bmxvYWRcIlxyXG4gICAgICAgICAgICBzdHlsZT1cIi0tbWRjLXJpcHBsZS1mZy1zaXplOjI4cHg7IC0tbWRjLXJpcHBsZS1mZy1zY2FsZToxLjcxNDE4OyAtLW1kYy1yaXBwbGUtbGVmdDoxMHB4OyAtLW1kYy1yaXBwbGUtdG9wOjEwcHg7XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgYWRkXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuaW50ZXJmYWNlIEFzaWRlUHJvcHMge1xyXG4gIG9wZW46IGJvb2xlYW47XHJcbiAgdXJsOiBVcmxIZWxwZXI7XHJcbn1cclxuZnVuY3Rpb24gQXNpZGUocHJvcHM6IEFzaWRlUHJvcHMpIHtcclxuICBjb25zdCB7IHVybCB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxhc2lkZVxyXG4gICAgICBjbGFzcz17W1xyXG4gICAgICAgIFwibWRjLWRyYXdlciBtZGMtZHJhd2VyLS1tb2RhbCBtZGMtdG9wLWFwcC1iYXItLWZpeGVkLWFkanVzdFwiLFxyXG4gICAgICAgIHByb3BzLm9wZW4gPyBcIm1kYy1kcmF3ZXItLW9wZW5cIiA6IG51bGwsXHJcbiAgICAgIF19XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtZGMtZHJhd2VyX19jb250ZW50XCI+XHJcbiAgICAgICAgPG5hdiBjbGFzcz1cIm1kYy1saXN0XCIgdGFiaW5kZXg9XCIwXCI+XHJcbiAgICAgICAgICA8aHIgY2xhc3M9XCJtZGMtbGlzdC1kaXZpZGVyXCIgLz5cclxuICAgICAgICAgIDxNYWluTGlua1xyXG4gICAgICAgICAgICB0ZXh0PVwiRW1wbG95ZWVzXCJcclxuICAgICAgICAgICAgdXJsPXt1cmwuc3RyaW5naWZ5KFwiZW1wbG95ZWVzXCIpfVxyXG4gICAgICAgICAgICBpY29uPVwiZ3JvdXBcIlxyXG4gICAgICAgICAgICBjb2xvcj1cImRhcmtncmVlblwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPE1haW5MaW5rXHJcbiAgICAgICAgICAgIHRleHQ9XCJJbnZvaWNlc1wiXHJcbiAgICAgICAgICAgIHVybD17dXJsLnN0cmluZ2lmeShcImludm9pY2VzXCIpfVxyXG4gICAgICAgICAgICBpY29uPVwiZG9tYWluXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8TWFpbkxpbmtcclxuICAgICAgICAgICAgdGV4dD1cIkFnZW50cyBQbGFubmluZ1wiXHJcbiAgICAgICAgICAgIHVybD17dXJsLnN0cmluZ2lmeShcImFnZW50cy1wbGFubmluZ1wiKX1cclxuICAgICAgICAgICAgaWNvbj1cInNjaGVkdWxlXCJcclxuICAgICAgICAgICAgY29sb3I9XCJibGFja1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPE1haW5MaW5rXHJcbiAgICAgICAgICAgIHRleHQ9XCJBc3NpZ24gY2FyZCB0byBhZ2VudFwiXHJcbiAgICAgICAgICAgIHVybD17dXJsLnN0cmluZ2lmeShcImNhcmQtYXNzaWdubWVudFwiKX1cclxuICAgICAgICAgICAgaWNvbj1cImNyZWRpdF9jYXJkXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8TWFpbkxpbmtcclxuICAgICAgICAgICAgdGV4dD1cIlNldHRpbmdzXCJcclxuICAgICAgICAgICAgdXJsPXt1cmwuc3RyaW5naWZ5KFwic2V0dGluZ3NcIil9XHJcbiAgICAgICAgICAgIGljb249XCJzZXR0aW5nc1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPE1haW5MaW5rXHJcbiAgICAgICAgICAgIHRleHQ9XCJBZG1pbmlzdHJhdGlvblwiXHJcbiAgICAgICAgICAgIHVybD17dXJsLnN0cmluZ2lmeShcInNlY3VyaXR5XCIpfVxyXG4gICAgICAgICAgICBpY29uPVwic2VjdXJpdHlcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInJlZFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGhyIGNsYXNzPVwibWRjLWxpc3QtZGl2aWRlclwiIC8+XHJcbiAgICAgICAgICB7TURDTGlzdH1cclxuICAgICAgICA8L25hdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2FzaWRlPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSb3V0ZXJQYWdlKHByb3BzLCBjaGlsZHJlbjogYW55KSB7XHJcbiAgcmV0dXJuIDxzZWN0aW9uIGNsYXNzPVwicm91dGVyLXBhZ2VcIj57Y2hpbGRyZW59PC9zZWN0aW9uPjtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRtaW5Sb3V0ZXMoKSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHtcclxuICAgICAgcGF0aDogW1wiYWdlbnRzLXBsYW5uaWdcIl0sXHJcbiAgICAgIGNvbXBvbmVudDogQWdlbnRzUGxhbm5pbmcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwYXRoOiBbXCJlbXBsb3llZXNcIl0sXHJcbiAgICAgIGNvbXBvbmVudDogRW1wbG95ZWVzLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcGF0aDogW1wiaW52b2ljZXNcIl0sXHJcbiAgICAgIGNvbXBvbmVudDogSW52b2ljZXMsXHJcbiAgICB9LFxyXG4gIF07XHJcbn1cclxuYGA7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcclxuICBjb25zdCBicm93c2VyID0gY3JlYXRlQnJvd3NlcihbXSk7XHJcbiAgY29uc3Qgcm91dGVyID0gY3JlYXRlUm91dGVyKGJyb3dzZXIsIGJyb3dzZXIucm91dGVzLCBbXHJcbiAgICB7IHBhdGg6IFtcImFkbWluXCJdLCBjb21wb25lbnQ6IEFkbWluQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFtcImplbm5haFwiLCBcImRlbW9cIl0sIGNvbXBvbmVudDogRGVtb0NvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBbXCJqZW5uYWhcIl0sIGNvbXBvbmVudDogTWFpbk1lbnVDYXJkIH0sXHJcbiAgXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPExpbmtMaXN0ZW5lciAvPlxyXG4gICAgICA8Um91dGVyT3V0bGV0IHJvdXRlcj17cm91dGVyfSAvPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBBZG1pbkNvbXBvbmVudCgpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdmlldyhjb250ZXh0OiBWaWV3Q29udGV4dCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgIDxMaW5rTGlzdGVuZXIgLz5cclxuICAgICAgICAgIDxBc2lkZSBvcGVuPXtsb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9hZG1pblwifSB1cmw9e2NvbnRleHQudXJsfSAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1kYy1kcmF3ZXItc2NyaW1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGMtZHJhd2VyLWFwcC1jb250ZW50XCIgc3R5bGU9XCJoZWlnaHQ6IDEwMCU7XCI+XHJcbiAgICAgICAgICAgIDxUb3BCYXIgLz5cclxuICAgICAgICAgICAgPG1haW4gY2xhc3M9XCJtYWluLWNvbnRlbnQgbWRjLXRvcC1hcHAtYmFyLS1maXhlZC1hZGp1c3Qgcm91dGVyLW91dGxldC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8Um91dGVyT3V0bGV0IHJvdXRlcj17Y29udGV4dC5jaGlsZFJvdXRlcihhZG1pblJvdXRlcygpKX0gLz5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8RHJhd2VyIC8+XHJcbiAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgKTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIERyYXdlcigpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgYXR0YWNoVG8oY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBkcmF3ZXIgPSBNRENEcmF3ZXIuYXR0YWNoVG8oXHJcbiAgICAgICAgICAgICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIubWRjLWRyYXdlclwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCB0b3BBcHBCYXIgPSBNRENUb3BBcHBCYXIuYXR0YWNoVG8oXHJcbiAgICAgICAgICAgICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIubWRjLXRvcC1hcHAtYmFyXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5Db250ZW50RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKTtcclxuICAgICAgICAgICAgdG9wQXBwQmFyLnNldFNjcm9sbFRhcmdldChtYWluQ29udGVudEVsKTtcclxuICAgICAgICAgICAgdG9wQXBwQmFyLmxpc3RlbihcIk1EQ1RvcEFwcEJhcjpuYXZcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRyYXdlci5vcGVuID0gIWRyYXdlci5vcGVuO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiTURDRHJhd2VyOmNsb3NlZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZWx0ID0gbWFpbkNvbnRlbnRFbC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQsIGJ1dHRvblwiKTtcclxuICAgICAgICAgICAgICBpZiAoaXNEb21Ob2RlKGVsdCkpIHtcclxuICAgICAgICAgICAgICAgIGVsdC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25Db250YWluZXJDbGljayk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgZGlzcG9zZSgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25Db250YWluZXJDbGljayk7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gb25Db250YWluZXJDbGljayhlOiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgeyB0YXJnZXQgfSA9IGU7XHJcbiAgICAgICAgICAgICAgaWYgKGlzRG9tTm9kZSh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInJvdXRlci1saW5rXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgIGRyYXdlci5vcGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9naW4oKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGV4ZWN1dGUoKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxMb2dpbiBjbGljaz17KCkgPT4ge319IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5vdEZvdW5kKGNvbnRleHQ6IFZpZXdDb250ZXh0KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3M9XCJyb3V0ZXItcGFnZV9fY29udGVudFwiPlxyXG4gICAgICA8bWFpbiBzdHlsZT1cImNvbG9yOiByZWQ7XCI+Tk9UIEZPVU5EIHtjb250ZXh0LnVybC5wYXRoLmpvaW4oXCIvXCIpfTwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF1dGhvcml6ZWQoYWN0aW9uOiBJQWN0aW9uPGFueT4pIHtcclxuICByZXR1cm4ge1xyXG4gICAgZXhlY3V0ZShjb250ZXh0OiBJQWN0aW9uQ29udGV4dCkge1xyXG4gICAgICBjb25zdCBzdWJqZWN0ID0gbmV3IFJ4LlN1YmplY3QoKTtcclxuICAgICAgcmV0dXJuIHN1YmplY3QucGlwZShcclxuICAgICAgICBSby5zdGFydFdpdGgoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm91dGVyLXBhZ2VfX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgPExvZ2luIGNsaWNrPXtvbkxvZ2lufSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgZnVuY3Rpb24gb25Mb2dpbigpIHtcclxuICAgICAgICBzdWJqZWN0Lm5leHQoYWN0aW9uLmV4ZWN1dGUoY29udGV4dCkpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVzb2x2ZTogYWN0aW9uLnJlc29sdmUsXHJcbiAgfTtcclxufVxyXG5cclxuaW50ZXJmYWNlIEFjdGlvbiB7XHJcbiAgdmlldyhjb250ZXh0OiBWaWV3Q29udGV4dCk6IGFueTtcclxuICByb3V0ZXM/OiBSb3V0ZUlucHV0PGFueT5bXTtcclxufVxyXG5cclxuaW50ZXJmYWNlIE1haW5MaW5rUHJvcHMge1xyXG4gIHRleHQ6IHN0cmluZztcclxuICB1cmw6IHN0cmluZztcclxuICBpY29uOiBzdHJpbmc7XHJcbiAgY29sb3I/OiBzdHJpbmc7XHJcbn1cclxuZnVuY3Rpb24gTWFpbkxpbmsocHJvcHM6IE1haW5MaW5rUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGEgY2xhc3M9XCJtZGMtbGlzdC1pdGVtIHJvdXRlci1saW5rXCIgaHJlZj17cHJvcHMudXJsfSBhcmlhLWN1cnJlbnQ9XCJwYWdlXCI+XHJcbiAgICAgIDxpXHJcbiAgICAgICAgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBtZGMtbGlzdC1pdGVtX19ncmFwaGljXCJcclxuICAgICAgICBzdHlsZT17cHJvcHMuY29sb3IgJiYgXCJjb2xvcjogXCIgKyBwcm9wcy5jb2xvcn1cclxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICA+XHJcbiAgICAgICAge3Byb3BzLmljb259XHJcbiAgICAgIDwvaT5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJtZGMtbGlzdC1pdGVtX190ZXh0XCI+e3Byb3BzLnRleHR9PC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlucHV0KG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lLFxyXG4gICAgdmFsdWUsXHJcbiAgICBibHVyKGUpIHt9LFxyXG4gIH07XHJcbn1cclxuXHJcbmludGVyZmFjZSBDb250cm9sUHJvcHMge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICB2YWx1ZTogc3RyaW5nO1xyXG59XHJcbmZ1bmN0aW9uIENvbnRyb2wocHJvcHM6IENvbnRyb2xQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aW5wdXQgc3R5bGU9XCJib3JkZXI6IDJweCBzb2xpZCBibHVlO1wiIHsuLi5pbnB1dChwcm9wcy5uYW1lLCBwcm9wcy52YWx1ZSl9PlxyXG4gICAgICBib3hcclxuICAgIDwvaW5wdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFRvZ2dsZUJ1dHRvblByb3BzIHt9XHJcbmZ1bmN0aW9uIFRvZ2dsZUJ1dHRvbihwcm9wczogVG9nZ2xlQnV0dG9uUHJvcHMpIHtcclxuICByZXR1cm4gPGEgY2xhc3M9XCJtZGMtYnV0dG9uIG1kYy1idXR0b24tLW91dGxpbmVcIj50b2dnbGU8L2E+O1xyXG59XHJcbiIsImltcG9ydCB7IHBvc3RKc29uLCBkZWxldGVKc29uLCBwdXRKc29uLCBmZXRjaEpzb24gfSBmcm9tIFwiLi4vLi4vY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSwgU3RhdGUgfSBmcm9tIFwibXV0YWJsLmpzXCI7XHJcbmltcG9ydCAqIGFzIFJ4IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCAqIGFzIFJvIGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFbnRpdHk8VD4ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgdmFsdWVzOiBUO1xyXG4gIHZlcnNpb246IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFjdGl2ZUVudGl0eTxUPihwYXRoOiBzdHJpbmcpIHtcclxuICBjb25zdCB1cmwgPSBwYXRoO1xyXG4gIGxldCBkZWxldGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0IGVudGl0eSA9IChhd2FpdCBmZXRjaEpzb24odXJsKVxyXG4gICAgLnRoZW4oKGUpID0+IGUuanNvbigpKVxyXG4gICAgLmNhdGNoKChfKSA9PiB7fSkpIGFzIEVudGl0eTxUPjtcclxuXHJcbiAgdmFyIHN0b3JlID0gbmV3IFN0b3JlPFQ+KGVudGl0eSAmJiBlbnRpdHkudmFsdWVzKTtcclxuICBsZXQgdmVyc2lvbiA9IGVudGl0eSAmJiBlbnRpdHkudmVyc2lvbjtcclxuICByZXR1cm4ge1xyXG4gICAgZ2V0IHZhbHVlcygpOiBTdGF0ZTxUPiB7XHJcbiAgICAgIHJldHVybiBzdG9yZS5hc1Byb3h5KCk7XHJcbiAgICB9LFxyXG4gICAgcmVzZXQodmFsdWVzOiBUKSB7XHJcbiAgICAgIHN0b3JlLnVwZGF0ZSh2YWx1ZXMpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZTogKHZhbHVlcykgPT5cclxuICAgICAgIWRlbGV0ZWRcclxuICAgICAgICA/IHB1dEpzb24odXJsLCB7IHZhbHVlcywgdmVyc2lvbiB9KS50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSlcclxuICAgICAgICA6IFByb21pc2UucmVzb2x2ZShudWxsKSwgLy8gcHV0RGlmZih1cmwsIHN0b3JlLnZhbHVlKSxcclxuICAgIHNhdmU6ICgpID0+IHBvc3RKc29uKHVybCwgc3RvcmUudmFsdWUpLFxyXG4gICAgZGVsZXRlOiAoKSA9PlxyXG4gICAgICBkZWxldGVKc29uKHVybCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgZGVsZXRlZCA9IHRydWU7XHJcbiAgICAgIH0pLFxyXG4gICAgYXV0b1VwZGF0ZSgpIHtcclxuICAgICAgdmFyIHN1YnNjciA9IG5ldyBSeC5PYnNlcnZhYmxlKHN0b3JlLnN1YnNjcmliZSlcclxuICAgICAgICAucGlwZShSby5za2lwKDEpLCBSby5kZWJvdW5jZVRpbWUoMTAwMCksIFJvLnN3aXRjaE1hcCh0aGlzLnVwZGF0ZSkpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoZW50aXR5KSA9PiB7XHJcbiAgICAgICAgICB2ZXJzaW9uID0gZW50aXR5LnZlcnNpb247XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICBmdW5jdGlvbiBvbkJlZm9yZVVubG9hZChlKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoc3RvcmUudmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLCBvbkJlZm9yZVVubG9hZCk7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHVuc3Vic2NyaWJlOiAoKSA9PiB7XHJcbiAgICAgICAgICBzdWJzY3IudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLCBvbkJlZm9yZVVubG9hZCk7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy51cGRhdGUoc3RvcmUudmFsdWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHRwbCBmcm9tIFwiZ2xvdy5qc1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXJDb21wb25lbnQsIFZpZXdDb250ZXh0IH0gZnJvbSBcIm12Yy5qcy9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyUGFnZSB9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQgeyBTdG9yZSwgYXNMaXN0U3RvcmUgYXMgYXNMaXN0U3RvcmUsIHB1c2hJdGVtLCBTdGF0ZSB9IGZyb20gXCJtdXRhYmwuanNcIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zZWxlY3RcIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCB7IGFjdGl2ZUVudGl0eSwgRW50aXR5IH0gZnJvbSBcIi4vYWN0aXZlLWVudGl0eVwiO1xyXG5pbXBvcnQgeyBMaXN0IH0gZnJvbSBcImdsb3cuanMvY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBmZXRjaEpzb24gfSBmcm9tIFwiLi4vLi4vY29yZVwiO1xyXG5pbXBvcnQgeyBVcmxIZWxwZXIgfSBmcm9tIFwiLi4vLi4vLi4vbXZjLmpzL3JvdXRlci91cmwtaGVscGVyXCI7XHJcblxyXG5jb25zdCByaWRlciA9IHsgbGFiZWw6IFwiUmlkZXIgSW50ZXJuYXRpb25hbFwiLCB2YWx1ZTogXCJyaWRlclwiIH07XHJcbmNvbnN0IGFsZmEgPSB7IGxhYmVsOiBcIkFsZmEgUHJvIElUXCIsIHZhbHVlOiBcImFsZmFcIiB9O1xyXG5jb25zdCBwYXJ0ZWNoID0geyBsYWJlbDogXCJQYXJ0ZWNoIElUIEJWXCIsIHZhbHVlOiBcInBhcnRlY2hcIiB9O1xyXG5jb25zdCByMmdyb3VwID0geyBsYWJlbDogXCJSMiBHcm91cCBCLlYuXCIsIHZhbHVlOiBcInIyZ3JvdXBcIiB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEludm9pY2VzKCk6IFJvdXRlckNvbXBvbmVudCB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHJvdXRlczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogW1wiOmlkXCJdLFxyXG4gICAgICAgIGNvbXBvbmVudDogSW52b2ljZUNvbXBvbmVudCxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBhc3luYyB2aWV3KGNvbnRleHQ6IFZpZXdDb250ZXh0KSB7XHJcbiAgICAgIGNvbnN0IGludm9pY2VzOiBFbnRpdHk8SW52b2ljZT5bXSA9IGF3YWl0IGZldGNoSnNvbihcIi9hcGkvaW52b2ljZVwiKS50aGVuKFxyXG4gICAgICAgIChlKSA9PiBlLmpzb24oKVxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSb3V0ZXJQYWdlPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvdXRlci1wYWdlX19jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxoZWFkZXI+SW52b2ljZXM8L2hlYWRlcj5cclxuICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgPExpc3Qgc291cmNlPXtpbnZvaWNlc30+e2ludm9pY2VMaXN0SXRlbShjb250ZXh0LnVybCl9PC9MaXN0PlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JvdXRlclBhZ2U+XHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGludm9pY2VMaXN0SXRlbSh1cmw6IFVybEhlbHBlcikge1xyXG4gICAgcmV0dXJuIChpbnZvaWNlOiBFbnRpdHk8SW52b2ljZT4pID0+IChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8YSBjbGFzcz1cInJvdXRlci1saW5rXCIgaHJlZj17dXJsLnN0cmluZ2lmeShpbnZvaWNlLmlkKX0+XHJcbiAgICAgICAgICB7aW52b2ljZS52YWx1ZXMuZGVzY3JpcHRpb259XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBJbnZvaWNlQ29tcG9uZW50KCk6IFJvdXRlckNvbXBvbmVudCB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGFzeW5jIHZpZXcoY29udGV4dDogVmlld0NvbnRleHQpIHtcclxuICAgICAgY29uc3QgeyBpZCB9ID0gY29udGV4dC5wYXJhbXM7XHJcbiAgICAgIHZhciBlbnRpdHkgPSBhd2FpdCBhY3RpdmVFbnRpdHk8SW52b2ljZT4oXCIvYXBpL2ludm9pY2UvXCIgKyBpZCk7XHJcblxyXG4gICAgICBjb25zdCBsaW5lcyA9IGFzTGlzdFN0b3JlPEhvdXJEZWNsYXJhdGlvbj4oZW50aXR5LnZhbHVlcy5kZWNsYXJhdGlvbnMpO1xyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8Um91dGVyUGFnZT5cclxuICAgICAgICAgIHtlbnRpdHkuYXV0b1VwZGF0ZSgpfVxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvdXRlci1wYWdlX19jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgRmFjdHV1ciA8c3Bhbj57ZW50aXR5LnZhbHVlcy5pbnZvaWNlTnVtYmVyfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8YSBocmVmPXtgL2FwaS9pbnZvaWNlLyR7aWR9L3BkZmB9PmRvd25sb2FkPC9hPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICBsaW5lcy5hZGQoXHJcbiAgICAgICAgICAgICAgICAgICAgcHVzaEl0ZW0oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgaG91cnM6IGxpbmVzLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgaW52b2ljZSBsaW5lICR7bGluZXMubGVuZ3RoICsgMX1gLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBhZGRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgbGluZXMuYWRkKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInJlbW92ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByZWRpY2F0ZTogbGluZXMubGVuZ3RoIC0gMSxcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICByZW1vdmVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkludm9pY2UgbnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2VudGl0eS52YWx1ZXMuaW52b2ljZU51bWJlcn1cclxuICAgICAgICAgICAgICAgID48L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2VudGl0eS52YWx1ZXMuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICA+PC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJPd25lclwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbnRpdHkudmFsdWVzLm93bmVyfVxyXG4gICAgICAgICAgICAgICAgPjwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e1tyMmdyb3VwLCByaWRlciwgYWxmYSwgcGFydGVjaF19XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29tcGFueVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbnRpdHkudmFsdWVzLmNvbXBhbnlJZH1cclxuICAgICAgICAgICAgICAgID48L1NlbGVjdD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2VudGl0eS52YWx1ZXMuZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgY2hhbmdlPXsoZXZ0KSA9PiBlbnRpdHkudmFsdWVzLmRhdGUudXBkYXRlKGV2dC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICA8TGlzdCBzb3VyY2U9e2xpbmVzfT57aW52b2ljZUxpbmVWaWV3fTwvTGlzdD5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Sb3V0ZXJQYWdlPlxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBpbnZvaWNlTGluZVZpZXcoZTogSW52b2ljZUxpbmUpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPFRleHRGaWVsZCBsYWJlbD1cIkRlc2NyaXB0aW9uXCIgdmFsdWU9e2UuZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgPFRleHRGaWVsZCBsYWJlbD1cIkhvdXJzXCIgdmFsdWU9e2UuaG91cnN9IHBhcnNlPXtwYXJzZUludH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIEludm9pY2VMaW5lIHtcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIGhvdXJzOiBzdHJpbmc7XHJcbn1cclxuaW50ZXJmYWNlIEludm9pY2Uge1xyXG4gIGludm9pY2VOdW1iZXI6IHN0cmluZztcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIG93bmVyOiBzdHJpbmc7XHJcbiAgY29tcGFueUlkOiBzdHJpbmc7XHJcbiAgZGF0ZTogc3RyaW5nO1xyXG4gIGRlY2xhcmF0aW9uczogSG91ckRlY2xhcmF0aW9uW107XHJcbn1cclxuXHJcbmludGVyZmFjZSBIb3VyRGVjbGFyYXRpb24ge1xyXG4gIGhvdXJzOiBudW1iZXI7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxufVxyXG4iLCJpbXBvcnQgdHBsIGZyb20gXCIuLi8uLi8uLi9nbG93LmpzXCI7XHJcbmltcG9ydCBzdmcgZnJvbSBcIi4vc2Nhbi1tZSAyLnN2Z1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbXBvbmVudCgpIHtcclxuICByZXR1cm4ge1xyXG4gICAgdmlldygpIHtcclxuICAgICAgcmV0dXJuIDxpbWcgc3JjPXtzdmd9PjwvaW1nPjtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyB0cGwgfSBmcm9tIFwiZ2xvdy5qc1wiO1xyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJnbG93LmpzL2xpYi9mcmFnbWVudFwiO1xyXG5pbXBvcnQgQ3NzIGZyb20gXCJnbG93LmpzL2NvbXBvbmVudHMvY3NzXCI7XHJcbmltcG9ydCBcIi4vbWVudS1jYXJkLnNjc3NcIjtcclxuaW1wb3J0IHsgUm91dGVyQ29tcG9uZW50LCBWaWV3Q29udGV4dCB9IGZyb20gXCJtdmMuanMvcm91dGVyXCI7XHJcbmltcG9ydCB7XHJcbiAgYXNMaXN0U3RvcmUsXHJcbiAgcHVzaEl0ZW0sXHJcbiAgcmVtb3ZlSXRlbSxcclxuICBTdGF0ZSxcclxuICBTdG9yZSxcclxuICB1cGRhdGVJdGVtLFxyXG59IGZyb20gXCJtdXRhYmwuanNcIjtcclxuaW1wb3J0IHsgTGlzdCB9IGZyb20gXCJnbG93LmpzL2NvbXBvbmVudHMvbGlzdFwiO1xyXG5cclxuZnVuY3Rpb24gb3B0aW9uKHRpdGxlOiBzdHJpbmcpOiBQcm9kdWN0T3B0aW9uIHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogXCJvcHRpb25cIixcclxuICAgIHRpdGxlLFxyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IGZyaWV0OiBQcm9kdWN0ID0ge1xyXG4gIHRpdGxlOiBcIkZyaWV0XCIsXHJcbiAgcHJpY2U6IDIuNSxcclxufTtcclxuXHJcbmNvbnN0IGh1aXNmcmlldDogUHJvZHVjdCA9IHtcclxuICB0aXRsZTogXCJIdWlzIGZyaWV0XCIsXHJcbiAgcHJpY2U6IDMsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBjaG9pY2UodGl0bGU6IHN0cmluZywgcHJvZHVjdHM6IFByb2R1Y3RbXSk6IFByb2R1Y3RDaG9pY2Uge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBcImNob2ljZVwiLFxyXG4gICAgdGl0bGUsXHJcbiAgICBwcm9kdWN0cyxcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBjb2xkZHJpbmtzID0gW1xyXG4gIHsgdGl0bGU6IFwiQ29sYVwiLCBwcmljZTogMi41IH0sXHJcbiAgeyB0aXRsZTogXCJGYW50YVwiLCBwcmljZTogMi41IH0sXHJcbiAgeyB0aXRsZTogXCJTcHJpdGVcIiwgcHJpY2U6IDIuNSB9LFxyXG4gIHsgdGl0bGU6IFwiQml0dGVyIExlbW9uXCIsIHByaWNlOiAyLjUgfSxcclxuICB7IHRpdGxlOiBcIlNwYVwiLCBwcmljZTogMi41IH0sXHJcbiAgeyB0aXRsZTogXCJHaW5nZXIgQWxlXCIsIHByaWNlOiAyLjUgfSxcclxuICB7IHRpdGxlOiBcIkljZSBUZWFcIiwgcHJpY2U6IDIuNSB9LFxyXG4gIHsgdGl0bGU6IFwiUmVkIGJ1bGxcIiwgcHJpY2U6IDMgfSxcclxuXTtcclxuY29uc3QgcHJvZHVjdHMgPSB7XHJcbiAgc3RhcnRlcnM6IFtcclxuICAgIHsgdGl0bGU6IFwiSGFyaXJhXCIsIHByaWNlOiA0LjUgfSxcclxuICAgIHsgdGl0bGU6IFwiQmlzYXJhXCIsIHByaWNlOiA0LjUgfSxcclxuICAgIHsgdGl0bGU6IFwiTG9lbXBpYVwiLCBwcmljZTogMy41IH0sXHJcbiAgICB7IHRpdGxlOiBcIlRvcnRpbGxhXCIsIHByaWNlOiA1LjAgfSxcclxuICAgIHsgdGl0bGU6IFwiTmFjaG8nc1wiLCBwcmljZTogNy41IH0sXHJcbiAgXSxcclxuICBzYW5kd2ljaGVzOiBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIktpcCAob2YgaGV0ZSBraXApXCIsXHJcbiAgICAgIHByaWNlOiA2LjUsXHJcbiAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICBvcHRpb24oXCJIZWV0XCIpLFxyXG4gICAgICAgIGNob2ljZShcIkRyYW5rXCIsIGRpc2NvdW50KGNvbGRkcmlua3MsIDEpKSxcclxuICAgICAgICBjaG9pY2UoXCJGcmlldFwiLCBbZnJpZXQsIGh1aXNmcmlldF0pLFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHsgdGl0bGU6IFwiS2VmdGFcIiwgcHJpY2U6IDYuNSB9LFxyXG4gICAgeyB0aXRsZTogXCJLaXAgdGVuZGVycyAodmFuIGRlIGdyaWxsKVwiLCBwcmljZTogNy41IH0sXHJcbiAgICB7IHRpdGxlOiBcIlNhdXNhZ2UgLyBNZXJxdWV6XCIsIHByaWNlOiA3IH0sXHJcbiAgICB7IHRpdGxlOiBcIkdhcm5hbGVuXCIsIHByaWNlOiA3LjUgfSxcclxuICBdLFxyXG4gIGJ1cmdlcnM6IFtcclxuICAgIHsgdGl0bGU6IFwiSmVubmFoIEJ1cmdlclwiLCBwcmljZTogMTAuNSwgZGVzY3JpcHRpb246IFwiYmxhXCIgfSxcclxuICAgIHsgdGl0bGU6IFwiQ2hlZXNlIEJ1cmdlclwiLCBwcmljZTogOSB9LFxyXG4gICAgeyB0aXRsZTogXCJLaXBmaWxldCBCdXJnZXJcIiwgcHJpY2U6IDggfSxcclxuICAgIHsgdGl0bGU6IFwiS2lwZ2VoYWt0IEJ1cmdlclwiLCBwcmljZTogOCB9LFxyXG4gIF0sXHJcbiAgc2FsYWRzOiBbXHJcbiAgICB7IHRpdGxlOiBcIlRvbmlqbiBTYWxhZGVcIiwgcHJpY2U6IDggfSxcclxuICAgIHsgdGl0bGU6IFwiQ2Vhc2FyIFNhbGFkZVwiLCBwcmljZTogOSB9LFxyXG4gICAgeyB0aXRsZTogXCJaYWxtIFNhbGFkZVwiLCBwcmljZTogOSB9LFxyXG4gICAgeyB0aXRsZTogXCJHYXJuYWxlbiBTbGFkZVwiLCBwcmljZTogOSB9LFxyXG4gIF0sXHJcbiAgY29sZGRyaW5rcyxcclxuICB0YWppbmVzOiBbXHJcbiAgICB7IHRpdGxlOiBcIlRhamluZSBraXBcIiwgcHJpY2U6IDEyLjUgfSxcclxuICAgIHsgdGl0bGU6IFwiVGFqaW5lIFZsZWVzXCIsIHByaWNlOiAxNC41IH0sXHJcbiAgICB7IHRpdGxlOiBcIlRhamluZSBQaWxwaWxcIiwgcHJpY2U6IDE0IH0sXHJcbiAgICB7IHRpdGxlOiBcIlRhamluZSBLZWZ0YVwiLCBwcmljZTogMTEgfSxcclxuICBdLFxyXG4gIGNvdXNjb3VzOiBbXHJcbiAgICB7IHRpdGxlOiBcIlZlZ2llXCIsIHByaWNlOiAxMCB9LFxyXG4gICAgeyB0aXRsZTogXCJLaXBcIiwgcHJpY2U6IDEyIH0sXHJcbiAgICB7IHRpdGxlOiBcIlZsZWVzXCIsIHByaWNlOiAxMyB9LFxyXG4gICAgeyB0aXRsZTogXCJSb3lhYWxcIiwgcHJpY2U6IDE0LjUgfSxcclxuICBdLFxyXG4gIGRlc3NlcnRzOiBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkNoZWVzZSBjYWtlXCIsXHJcbiAgICAgIHByaWNlOiA1LjUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkluZm9ybWVlciBuYWFyIG9uemUgdmFyaWF0aWVzXCIsXHJcbiAgICB9LFxyXG4gICAgeyB0aXRsZTogXCJSZWR2ZWx2ZXRcIiwgcHJpY2U6IDUuNSB9LFxyXG4gICAgeyB0aXRsZTogXCJXb3J0ZWx0YWFydFwiLCBwcmljZTogNS41IH0sXHJcbiAgXSxcclxuICBncmlsbDogW1xyXG4gICAgeyB0aXRsZTogXCJLaXAgRmlsZXRcIiwgcHJpY2U6IDEzLjUgfSxcclxuICAgIHsgdGl0bGU6IFwiS2FsZnMgU3BpZXNcIiwgcHJpY2U6IDE0IH0sXHJcbiAgICB7IHRpdGxlOiBcIktpcCBTYXRlXCIsIHByaWNlOiAxMy41IH0sXHJcbiAgICB7IHRpdGxlOiBcIk1peCBHcmlsbFwiLCBwcmljZTogMTcuNSB9LFxyXG4gICAgeyB0aXRsZTogXCJLZWZ0YSBTY2hvdGVsXCIsIHByaWNlOiAxMyB9LFxyXG4gICAgeyB0aXRsZTogXCJaYWxtIFNjaG90ZWxcIiwgcHJpY2U6IDEzIH0sXHJcbiAgICB7IHRpdGxlOiBcIkdhcm5hbGVuIFNjaG90ZWxcIiwgcHJpY2U6IDE0IH0sXHJcbiAgICB7IHRpdGxlOiBcIlNhdXNhZ2UgLyBNZXJxdWV6IFNjaG90ZWxcIiwgcHJpY2U6IDE0IH0sXHJcbiAgXSxcclxuICBwYXN0YTogW1xyXG4gICAgeyB0aXRsZTogXCJLaXBcIiwgcHJpY2U6IDEyLjUgfSxcclxuICAgIHsgdGl0bGU6IFwiR2FybmFsZW4gZW4vb2YgemFsbVwiLCBwcmljZTogMTMuNSB9LFxyXG4gICAgeyB0aXRsZTogXCJCb2xvZ25lc2VcIiwgcHJpY2U6IDEzLjUgfSxcclxuICAgIHsgdGl0bGU6IFwiQXJhYmlhdHRhXCIsIHByaWNlOiAxMCB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG50eXBlIFB1c2hPcmRlckV2ZW50SGFuZGxlciA9IChvOiBQcm9kdWN0LCBvcHRpb25zPykgPT4gdm9pZDtcclxuaW50ZXJmYWNlIE1lbnVDYWxsYmFja3Mge1xyXG4gIG9uU2VsZWN0KHByb2R1Y3Q6IFByb2R1Y3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9kdWN0Vmlld0ZhY3RvcnkocHJvZHVjdDogUHJvZHVjdCwgb25TZWxlY3Q6IFB1c2hPcmRlckV2ZW50SGFuZGxlcikge1xyXG4gIHJldHVybiB7XHJcbiAgICB2aWV3KGNvbnRleHQ6IFZpZXdDb250ZXh0KSB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGlvbjogT3JkZXJPcHRpb25bXSA9IFtdO1xyXG4gICAgICBjb25zdCB7IG9wdGlvbnMgfSA9IHByb2R1Y3Q7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtZGV0YWlsXCI+XHJcbiAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICB7cHJvZHVjdC50aXRsZX1cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9qZW5uYWhcIiBjbGFzcz1cInJvdXRlci1saW5rIGNsb3NlLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICZ0aW1lcztcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1kZXRhaWxfX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAge29wdGlvbnMubWFwKChvKSA9PiBvcHRpb25WaWV3KG8sIHNlbGVjdGlvbikpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsaWNrPXtjb21wb3NlKG9uQ2xpY2ssIGNvbnRleHQudXJsLnBhcmVudC5uYXZpZ2F0ZSl9PlxyXG4gICAgICAgICAgICB0b2V2b2VnZW5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgICBmdW5jdGlvbiBvbkNsaWNrKCkge1xyXG4gICAgICAgIG9uU2VsZWN0KHByb2R1Y3QsIFsuLi5zZWxlY3Rpb25dKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBvcHRpb25WaWV3KG86IFByb2R1Y3RBZGRlbmR1bSwgc2VsZWN0aW9uOiBPcmRlck9wdGlvbltdKSB7XHJcbiAgICBpZiAoby50eXBlID09IFwiY2hvaWNlXCIpIHtcclxuICAgICAgY29uc3QgeyBwcm9kdWN0cyB9ID0gbztcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICBuYW1lPXtvLnRpdGxlfVxyXG4gICAgICAgICAgICBjaGFuZ2U9eyhlKSA9PiBzZWxlY3Rpb24ucHVzaCh7IHRpdGxlOiBlLnRhcmdldC52YWx1ZSwgcHJpY2U6IDEgfSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5bIFNlbGVjdGVlciB7by50aXRsZX0gXTwvb3B0aW9uPlxyXG4gICAgICAgICAgICB7cHJvZHVjdHMubWFwKChwKSA9PiAoXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17cC50aXRsZX0+e3AudGl0bGV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpZCA9IFwiY2hlY2tib3hfXCIgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPXtpZH0gLz5cclxuICAgICAgICAgIDxsYWJlbCBmb3I9e2lkfT57by50aXRsZX08L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZHVtbXlPcmRlcjogT3JkZXIgPSB7XHJcbiAgdGl0bGU6IFwiRHVtbXkgb3JkZXJcIixcclxuICBjb3VudDogMyxcclxuICBvcHRpb25zOiBbeyB0aXRsZTogXCJDb2xhXCIsIHByaWNlOiAxIH1dLFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1haW5NZW51Q2FyZCgpOiBSb3V0ZXJDb21wb25lbnQge1xyXG4gIGNvbnN0IHN0b3JlID0gbmV3IFN0b3JlPHsgb3JkZXJzOiBPcmRlcltdIH0+KHtcclxuICAgIG9yZGVyczogW2R1bW15T3JkZXJdLFxyXG4gIH0pO1xyXG4gIGNvbnN0IG9yZGVyU3RvcmUgPSBhc0xpc3RTdG9yZTxPcmRlcj4oc3RvcmUucHJvcGVydHkoXCJvcmRlcnNcIikpO1xyXG4gIGNvbnN0IGFsbFByb2R1Y3RzOiBQcm9kdWN0W10gPSBbXTtcclxuICBmb3IgKGNvbnN0IGNhdCBpbiBwcm9kdWN0cykge1xyXG4gICAgYWxsUHJvZHVjdHMucHVzaC5hcHBseShhbGxQcm9kdWN0cywgcHJvZHVjdHNbY2F0XSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwdXNoT3JkZXIocHJvZHVjdDogUHJvZHVjdCwgb3B0aW9uczogT3JkZXJPcHRpb25bXSkge1xyXG4gICAgY29uc3QgeyB0aXRsZSB9ID0gcHJvZHVjdDtcclxuXHJcbiAgICBjb25zdCBpbmRleCA9IG9yZGVyU3RvcmUucGVlaygob3JkZXJzKSA9PlxyXG4gICAgICBvcmRlcnMuZmluZEluZGV4KFxyXG4gICAgICAgIChvKSA9PiBvLnRpdGxlID09PSB0aXRsZSAmJiBlcXVhbE9yZGVyT3B0aW9ucyhvLm9wdGlvbnMsIG9wdGlvbnMpXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICBvcmRlclN0b3JlLmFkZCh1cGRhdGVJdGVtKGluZGV4LCAoYykgPT4gYy5jb3VudCsrKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvcmRlclN0b3JlLmFkZChcclxuICAgICAgICBwdXNoSXRlbTxPcmRlcj4oe1xyXG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgICAgY291bnQ6IDEsXHJcbiAgICAgICAgICBvcHRpb25zLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkZWxldGVPcmRlcihvcmRlcjogT3JkZXIsIGluZGV4OiBudW1iZXIpIHtcclxuICAgIGlmIChvcmRlci5jb3VudCA+IDEpIG9yZGVyU3RvcmUuYWRkKHVwZGF0ZUl0ZW0oaW5kZXgsIChjKSA9PiBjLmNvdW50LS0pKTtcclxuICAgIGVsc2Ugb3JkZXJTdG9yZS5hZGQocmVtb3ZlSXRlbShpbmRleCkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJvdXRlczogYWxsUHJvZHVjdHMubWFwKChwcikgPT4gKHtcclxuICAgICAgcGF0aDogcHJvZHVjdFBhdGgocHIpLFxyXG4gICAgICBjb21wb25lbnQ6IHByb2R1Y3RWaWV3RmFjdG9yeShwciwgcHVzaE9yZGVyKSxcclxuICAgIH0pKSxcclxuICAgIHZpZXcoY29udGV4dDogVmlld0NvbnRleHQpIHtcclxuICAgICAgY29uc3QgZXZlbnRzOiBQcm9kdWN0RXZlbnRzID0ge1xyXG4gICAgICAgIG9uU2VsZWN0KHByb2R1Y3Q6IFByb2R1Y3QpIHtcclxuICAgICAgICAgIGlmIChwcm9kdWN0Lm9wdGlvbnMpIHtcclxuICAgICAgICAgICAgY29udGV4dC51cmwubmF2aWdhdGUoLi4ucHJvZHVjdFBhdGgocHJvZHVjdCkpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcHVzaE9yZGVyKHByb2R1Y3QsIFtdKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICA8Q3NzIHZhbHVlPVwiamVubmFoXCIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3BiYXJcIj5cclxuICAgICAgICAgICAgPGgxPlJlc3RhdXJhbnQgJiBDYWZlIEplbm5haDwvaDE+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGFsYWxcIj4xMDAlIEhhbGFsPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvcGJhci13aWZpXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnJzc19mZWVkPC9zcGFuPlxyXG4gICAgICAgICAgICAgIEplbm5haDIwMjEgfFxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiBzdHlsZT1cImNvbG9yOiAjMTI4QzdFXCI+XHJcbiAgICAgICAgICAgICAgICB3aGF0c2FwcFxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICArMzEgNiA4NzEyMDM0OFxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWNhcmRcIj5cclxuICAgICAgICAgICAgPFN0YXJ0ZXJzIHsuLi5ldmVudHN9IC8+XHJcbiAgICAgICAgICAgIDxTYW5kd2ljaCB7Li4uZXZlbnRzfSAvPlxyXG4gICAgICAgICAgICA8QnVyZ2VycyB7Li4uZXZlbnRzfSAvPlxyXG4gICAgICAgICAgICA8U2FsYWQgey4uLmV2ZW50c30gLz5cclxuICAgICAgICAgICAgPFRyYWRpdGlvbmFsIC8+XHJcbiAgICAgICAgICAgIDxQYXN0YSB7Li4uZXZlbnRzfSAvPlxyXG4gICAgICAgICAgICA8R3JpbGwgey4uLmV2ZW50c30gLz5cclxuICAgICAgICAgICAgPFRhamluZSB7Li4uZXZlbnRzfSAvPlxyXG4gICAgICAgICAgICA8Q291c2NvdXMgey4uLmV2ZW50c30gLz5cclxuICAgICAgICAgICAgPERlc3NlcnRzIHsuLi5ldmVudHN9IC8+XHJcbiAgICAgICAgICAgIDxIb3REcmlua3Mgey4uLmV2ZW50c30gLz5cclxuICAgICAgICAgICAgPENvbGREcmlua3Mgey4uLmV2ZW50c30gLz5cclxuICAgICAgICAgICAgey8qIDxkaXYgc3R5bGU9XCJmbGV4OiAxOyBkaXNwbGF5OiBpbmxpbmUtZmxleFwiPlxyXG4gICAgICAgICAgPGltZyBzdHlsZT1cIndpZHRoOiAxMDAlOyBtYXJnaW46IGF1dG8gMCAwIDBcIiBzcmM9e2J1cmdlclNyY30gLz5cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWNhcmRfX29yZGVyXCI+XHJcbiAgICAgICAgICAgIDxMaXN0IHNvdXJjZT17b3JkZXJTdG9yZX0+XHJcbiAgICAgICAgICAgICAgeyhvcmRlcjogU3RhdGU8T3JkZXI+LCB7IGluZGV4IH0pID0+IChcclxuICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtY2FyZF9fb3JkZXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWVudS1jYXJkX19vcmRlci1pdGVtX19jb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge29yZGVyLmNvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1lbnUtY2FyZF9fb3JkZXItaXRlbV9fdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge29yZGVyLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s9eygpID0+IGRlbGV0ZU9yZGVyKG9yZGVyLCBpbmRleCgpKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWVudS1jYXJkX19vcmRlci1pdGVtX19idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICZ0aW1lcztcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7b3JkZXIub3B0aW9ucy5wZWVrKChvcHRpb25zKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtY2FyZF9fb3JkZXItb3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9ucy5tYXAoKGVudHJ5KSA9PiBlbnRyeS50aXRsZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBBZGhvY1Byb2R1Y3QoZXZlbnRzOiBQcm9kdWN0RXZlbnRzKSB7XHJcbiAgY29uc3Qgc3RvcmUgPSBuZXcgU3RvcmUoe1xyXG4gICAgdGl0bGU6IFwiXCIsXHJcbiAgICBwcmljZTogMixcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHZhbHVlPXtzdG9yZS5wcm9wZXJ0eShcInRpdGxlXCIpfVxyXG4gICAgICAgIGJsdXI9e29uVGl0bGVDaGFuZ2V9XHJcbiAgICAgICAgY2hhbmdlPXtvblRpdGxlQ2hhbmdlfVxyXG4gICAgICAvPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICB2YWx1ZT17c3RvcmUucHJvcGVydHkoXCJwcmljZVwiKX1cclxuICAgICAgICBibHVyPXtvblByaWNlQ2hhbmdlfVxyXG4gICAgICAgIGNoYW5nZT17b25QcmljZUNoYW5nZX1cclxuICAgICAgLz5cclxuICAgICAgPGJ1dHRvbiBjbGljaz17b25TdWJtaXR9Pis8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG4gIGZ1bmN0aW9uIG9uVGl0bGVDaGFuZ2UoZSkge1xyXG4gICAgc3RvcmUucHJvcGVydHkoXCJ0aXRsZVwiKS51cGRhdGUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb25QcmljZUNoYW5nZShlKSB7XHJcbiAgICBzdG9yZS5wcm9wZXJ0eShcInByaWNlXCIpLnVwZGF0ZShwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvblN1Ym1pdCgpIHtcclxuICAgIHN0b3JlLnBlZWsoZXZlbnRzLm9uU2VsZWN0KTtcclxuICAgIHN0b3JlLnVwZGF0ZShudWxsKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNhbGFkKGV2ZW50czogUHJvZHVjdEV2ZW50cykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgPGgxPlNhbGFkZXM8L2gxPlxyXG4gICAgICA8UHJvZHVjdExpc3Qgey4uLmV2ZW50c30gcHJvZHVjdHM9e3Byb2R1Y3RzLnNhbGFkc30gLz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUHJvZHVjdExpc3RPcHRpb25zIHtcclxuICBwcm9kdWN0czogUHJvZHVjdFtdO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUHJvZHVjdEV2ZW50cyB7XHJcbiAgb25TZWxlY3QocHJvZHVjdDogUHJvZHVjdCk6IHZvaWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RMaXN0KG9wdGlvbnM6IFByb2R1Y3RMaXN0T3B0aW9ucyAmIFByb2R1Y3RFdmVudHMpIHtcclxuICBjb25zdCB7IHByb2R1Y3RzIH0gPSBvcHRpb25zO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHVsIGNsYXNzPVwibWRjLWxpc3RcIj5cclxuICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT5cclxuICAgICAgICBwcm9kdWN0LmRlc2NyaXB0aW9uID8gKFxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgY2xhc3M9XCJtZGMtbGlzdC1pdGVtIHJvdXRlci1saW5rIG1kYy1saXN0LS10d28tbGluZVwiXHJcbiAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiXHJcbiAgICAgICAgICAgIGNsaWNrPXsoKSA9PiBvcHRpb25zLm9uU2VsZWN0KHByb2R1Y3QpfVxyXG4gICAgICAgICAgICAvLyBocmVmPXtcIi9qZW5uYWgvXCIgKyBwcm9kdWN0UGF0aChwcm9kdWN0KS5qb2luKFwiL1wiKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGMtbGlzdC1pdGVtX19yaXBwbGVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWRjLWxpc3QtaXRlbV9fdGV4dFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWRjLWxpc3QtaXRlbV9fcHJpbWFyeS10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvZHVjdC50aXRsZX0ge3Byb2R1Y3QucHJpY2V9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWRjLWxpc3QtaXRlbV9fc2Vjb25kYXJ5LXRleHRcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9kdWN0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBjbGFzcz1cIm1kYy1saXN0LWl0ZW0gcm91dGVyLWxpbmtcIlxyXG4gICAgICAgICAgICB0YWJpbmRleD1cIjBcIlxyXG4gICAgICAgICAgICBjbGljaz17KCkgPT4gb3B0aW9ucy5vblNlbGVjdChwcm9kdWN0KX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGMtbGlzdC1pdGVtX19yaXBwbGVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWRjLWxpc3QtaXRlbV9fdGV4dFwiPlxyXG4gICAgICAgICAgICAgIHtwcm9kdWN0LnRpdGxlfSB7cHJvZHVjdC5wcmljZX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIClcclxuICAgICAgKX1cclxuICAgIDwvdWw+XHJcbiAgKTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFByb2R1Y3RPcHRpb24ge1xyXG4gIHR5cGU6IFwib3B0aW9uXCI7XHJcbiAgdGl0bGU6IHN0cmluZztcclxufVxyXG5pbnRlcmZhY2UgUHJvZHVjdENob2ljZSB7XHJcbiAgdHlwZTogXCJjaG9pY2VcIjtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHByb2R1Y3RzOiBQcm9kdWN0W107XHJcbn1cclxuXHJcbmludGVyZmFjZSBQcm9kdWN0IHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHByaWNlOiBudW1iZXI7XHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgb3B0aW9ucz86IFByb2R1Y3RBZGRlbmR1bVtdO1xyXG59XHJcblxyXG50eXBlIFByb2R1Y3RBZGRlbmR1bSA9IFByb2R1Y3RPcHRpb24gfCBQcm9kdWN0Q2hvaWNlO1xyXG5cclxuaW50ZXJmYWNlIE9yZGVyT3B0aW9uIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHByaWNlOiBudW1iZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFN0YXJ0ZXJzKGV2ZW50czogUHJvZHVjdEV2ZW50cykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgPGgxPlN0YXJ0ZXJzPC9oMT5cclxuICAgICAgPFByb2R1Y3RMaXN0IHByb2R1Y3RzPXtwcm9kdWN0cy5zdGFydGVyc30gey4uLmV2ZW50c30gLz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBUcmFkaXRpb25hbCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjYWxsLW91dCBjYWxsLW91dC10cmFkaXRpb25lZWxcIj5cclxuICAgICAgPGgxPlRyYWRpdGlvbmVlbDwvaDE+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgyPlN0YXJ0ZXJzPC9oMj5cclxuICAgICAgICA8ZGl2PkhhcmlyYSBvZiBCaXNhcmE8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgyPlRhamluZTwvaDI+XHJcbiAgICAgICAgPGk+Z2VzZXJ2ZWVyZCBtZXQgbWFyb2trYWFuc2UgdGFyd2UgYnJvb2Q8L2k+KVxyXG4gICAgICAgIDxkaXY+VGFqaW5lIEtpcCwgS2VmdGEgb2YgVmxlZXMgKDwvZGl2PlxyXG4gICAgICAgIDxoMj5Db3VzY291czwvaDI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIENvdXNjb3VzIEtpcCBvZiBWbGVlcyBtZXQgbWl4IHZhbiBncm9lbnRlIGVuIG9wdGllIHZvb3JcclxuICAgICAgICAgIGdla2FyYW1lbGlzc2VyZGUgcm96aWpuZW5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gVGFhcnRlbigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICAgIDxoMSBjbGFzcz1cIlRhbmdlcmluZVwiPlRhYXJ0ZW48L2gxPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxzcGFuPkNob2NvbGFkZXRhYXJ0IDQ8L3NwYW4+LCA8c3Bhbj5Xb3J0ZWwgdGFhcnQgNTwvc3Bhbj4se1wiIFwifVxyXG4gICAgICAgIDxzcGFuPlJlZCB2ZWx2ZXQgNTwvc3Bhbj4se1wiIFwifVxyXG4gICAgICAgIDxzcGFuPkNoZWVzZWNha2UgKG9yZW8sIHNuaWNrZXIsIGNpdHJvZW4sIHN0cm9vcHdhZmVsKSA1LjU8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuZnVuY3Rpb24gU21vb3RoaWVzKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgPGgxIGNsYXNzPVwiYnVuZ2VlXCI+U21vb3RoaWVzPC9oMT5cclxuICAgICAgPGRpdj5BcHBlbC1iYW5hYW4sIEFhcmJlaSwgQXZvY2Fkby1iYW5hYW4sIEp1cyBEJ29yYW5nZSA0PC9kaXY+XHJcbiAgICAgIDxkaXY+QXZvY2FkbywgQWNlLCBBbmFuYXMtbWFuZ28gNTwvZGl2PlxyXG4gICAgICA8ZGl2Pk1vaml0byAoYWxjb2hvbHZyaWogY29ja3RhaWwpIDQ8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBIb3REcmlua3MoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICA8aDE+SG90IGRyaW5rczwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19jb250ZW50XCI+UGlja3dpY2sgdGhlZSAyLjU8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2NvbnRlbnRcIj5cclxuICAgICAgICBNYXJva2thYW5zZSBtdW50IHRoZWUgKDxzcGFuIGNsYXNzPVwibm93cmFwXCI+Z2xhcyAyLjU8L3NwYW4+LHtcIiBcIn1cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm5vd3JhcFwiPmtsZWluZSBwb3QgNDwvc3Bhbj4se1wiIFwifVxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibm93cmFwXCI+Z3JvdGUgcG90IDU8L3NwYW4+KVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2NvbnRlbnRcIj5XYXJtZSBjaG9jb2xhZGVtZWxrIDM8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2NvbnRlbnRcIj5Fc3ByZXNzbywgQ2FwcHVjY2lubyAyLjU8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2NvbnRlbnRcIj5DYWZmZSBMYXR0ZSBNYWNjaGlhdG8gMy41PC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQ29sZERyaW5rcyhvcHRpb25zOiBNZW51Q2FsbGJhY2tzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICA8aDE+Q29sZCBkcmlua3M8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fY29udGVudCBwcm9kdWN0X190aWxlc1wiPlxyXG4gICAgICAgIHtwcm9kdWN0cy5jb2xkZHJpbmtzLm1hcCgocDogUHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgPGEgY2xpY2s9eygpID0+IG9wdGlvbnMub25TZWxlY3QocCl9IGNsYXNzPVwibGlzdC1pdGVtXCI+XHJcbiAgICAgICAgICAgIHtwLnRpdGxlfVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIHsvKiA8c3Bhbj5Db2xhICh6ZXJvLCBsaWdodCk8L3NwYW4+LCA8c3Bhbj5GYW50YTwvc3Bhbj4sIDxzcGFuPlNwcml0ZTwvc3Bhbj5cclxuICAgICAgICAsIDxzcGFuPkJpdHRlciBsZW1vbjwvc3Bhbj4sIDxzcGFuPlNwYSAocm9vZCwgYmxhdXcpPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPkdpbmdlcmFsZTwvc3Bhbj4sIDxzcGFuPlRvbmljPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPkljZSBUZWEgKExlbW9uLCBHcmVlbiwgUGVhY2gpPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPkZlcm5hbmRlcyAoR2VlbCwgR3JvZW4sIEJsYXV3IG9mIHJvb2QpPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPkFwcGVsc2FwPC9zcGFuPiwgPHNwYW4+Q2hvY29tZWw8L3NwYW4+LCA8c3Bhbj5GcmlzdGk8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+SGF3YWk8L3NwYW4+LCA8c3Bhbj5Qb21zPC9zcGFuPiAyLjUgKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRhamluZShldmVudHM6IFByb2R1Y3RFdmVudHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICAgIDxoMT5UYWppbmU8L2gxPlxyXG4gICAgICA8aT5Xb3JkdCBnZXJlc2VydmVlcmQgbWV0IG1hcm9ra2FhbnNlIGJyb29kICh3aXQgb2YgYnJ1aW4pPC9pPlxyXG4gICAgICA8UHJvZHVjdExpc3QgcHJvZHVjdHM9e3Byb2R1Y3RzLnRhamluZXN9IHsuLi5ldmVudHN9IC8+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICA8aDE+VGFqaW5lPC9oMT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICBUYWppbmUgS2lwIDEyLjUsIFZsZWVzIDE0LjUsIFBpbHBpbCAxNCwgb2ZcclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm5vd3JhcFwiPktlZnRhIDEzPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDb3VzY291cyhldmVudHM6IFByb2R1Y3RFdmVudHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICAgIDxoMT5Db3VzY291czwvaDE+XHJcbiAgICAgIDxQcm9kdWN0TGlzdCBwcm9kdWN0cz17cHJvZHVjdHMuY291c2NvdXN9IHsuLi5ldmVudHN9IC8+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICAgIDxoMT5Db3VzY291czwvaDE+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgQ291c2NvdXMgVmVnaWUgMTAsIDxzcGFuIGNsYXNzPVwibm93cmFwXCI+S2lwIDEzPC9zcGFuPiBvZlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibm93cmFwXCI+VmxlZXMgMTQ8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aHIgLz5cclxuICAgICAgPGk+TWV0IGtldXplIHVpdCB6b2V0ZSB1aWVuIC8gcm96aWpuZW4gZW4ga2lra2VyZXJ3dGVuPC9pPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERlc3NlcnRzKGV2ZW50czogUHJvZHVjdEV2ZW50cykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgPGgxPkRlc3NlcnRzPC9oMT5cclxuICAgICAgPFByb2R1Y3RMaXN0IHByb2R1Y3RzPXtwcm9kdWN0cy5kZXNzZXJ0c30gey4uLmV2ZW50c30gLz47XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gR3JpbGwoZXZlbnRzOiBQcm9kdWN0RXZlbnRzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICA8aDE+R3JpbGwgJiBTY2hvdGVsczwvaDE+XHJcbiAgICAgIDxpPkFsIG9uemUgZ3JpbGwgZ2VyZWNodGVuIHdvcmRlbiBnZXNlcnZlZXJkIG1ldCBmcmlldCBvZiByaWpzdDwvaT5cclxuICAgICAgPFByb2R1Y3RMaXN0IHByb2R1Y3RzPXtwcm9kdWN0cy5ncmlsbH0gey4uLmV2ZW50c30gLz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTYW5kd2ljaChldmVudHM6IFByb2R1Y3RFdmVudHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICAgIDxoMT5TYW5kd2ljaCAoYnJvb2RqZXMpPC9oMT5cclxuICAgICAgPGk+SW4gY29tYmluYXRpZSBtZXQgZnJpZXQgZW4gZWVuIGRyYW5ramUgdmFuYWYgOTwvaT5cclxuICAgICAgPFByb2R1Y3RMaXN0IHByb2R1Y3RzPXtwcm9kdWN0cy5zYW5kd2ljaGVzfSB7Li4uZXZlbnRzfSAvPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJ1cmdlcnMoZXZlbnRzOiBQcm9kdWN0RXZlbnRzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICA8aDE+QnVyZ2VycyAodmFuIGRlIGdyaWxsKTwvaDE+XHJcbiAgICAgIDxpPlxyXG4gICAgICAgIEFsIG9uemUgYnVyZ2VycyB3b3JkZW4gZ2VzZXJ2ZWVyZCBjaGVkZGFyIGthYXMgdWllbiBlbiBtZXQgaHVpc2ZyaWV0amVzXHJcbiAgICAgIDwvaT5cclxuICAgICAgPFByb2R1Y3RMaXN0IHByb2R1Y3RzPXtwcm9kdWN0cy5idXJnZXJzfSB7Li4uZXZlbnRzfSAvPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFBhc3RhKGV2ZW50czogUHJvZHVjdEV2ZW50cykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgPGgxPlBhc3RhPC9oMT5cclxuICAgICAgPFByb2R1Y3RMaXN0IHByb2R1Y3RzPXtwcm9kdWN0cy5wYXN0YX0gey4uLmV2ZW50c30gLz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9kdWN0UGF0aChwcm9kdWN0OiBQcm9kdWN0KSB7XHJcbiAgcmV0dXJuIFtwcm9kdWN0LnRpdGxlLnJlcGxhY2UoLyhcXHN8W15cXHddKSsvZ2ksIFwiLVwiKS50b0xvY2FsZUxvd2VyQ2FzZSgpXTtcclxufVxyXG5cclxuaW50ZXJmYWNlIE9yZGVyIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGNvdW50OiBudW1iZXI7XHJcbiAgb3B0aW9uczogT3JkZXJPcHRpb25bXTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzY291bnQocHJvZHVjdHM6IFByb2R1Y3RbXSwgZGlzY291bnQ6IG51bWJlcikge1xyXG4gIHJldHVybiBwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnByb2R1Y3QsXHJcbiAgICAgIHByaWNlOiBwcm9kdWN0LnByaWNlIC0gZGlzY291bnQsXHJcbiAgICB9O1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb21wb3NlKC4uLmZuczogRnVuY3Rpb25bXSkge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3IgKGNvbnN0IGZuIG9mIGZucykge1xyXG4gICAgICBmbigpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVxdWFsT3JkZXJPcHRpb25zKG8xOiBPcmRlck9wdGlvbltdLCBvMjogT3JkZXJPcHRpb25bXSkge1xyXG4gIGlmICghbzEgfHwgIW8yKSByZXR1cm4gZmFsc2U7XHJcbiAgaWYgKG8xLmxlbmd0aCAhPSBvMi5sZW5ndGgpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgZm9yIChjb25zdCBlbnRyeSBvZiBvMSkge1xyXG4gICAgaWYgKCFvMi5maW5kKCh4KSA9PiB4LnRpdGxlID09IGVudHJ5LnRpdGxlKSkgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBmb3IgKGNvbnN0IGVudHJ5IG9mIG8yKSB7XHJcbiAgICBpZiAoIW8xLmZpbmQoKHgpID0+IHgudGl0bGUgPT0gZW50cnkudGl0bGUpKSByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcbiIsImltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERhdGVBZGFwdGVyPEQ+IHtcclxuICAgIC8qKiBUaGUgbG9jYWxlIHRvIHVzZSBmb3IgYWxsIGRhdGVzLiAqL1xyXG4gICAgcHJvdGVjdGVkIGxvY2FsZTogYW55O1xyXG4gICAgcHJvdGVjdGVkIF9sb2NhbGVDaGFuZ2VzID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgICAvKiogQSBzdHJlYW0gdGhhdCBlbWl0cyB3aGVuIHRoZSBsb2NhbGUgY2hhbmdlcy4gKi9cclxuICAgIHJlYWRvbmx5IGxvY2FsZUNoYW5nZXM6IE9ic2VydmFibGU8dm9pZD4gPSB0aGlzLl9sb2NhbGVDaGFuZ2VzO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgeWVhciBjb21wb25lbnQgb2YgdGhlIGdpdmVuIGRhdGUuXHJcbiAgICAgKiBAcGFyYW0gZGF0ZSBUaGUgZGF0ZSB0byBleHRyYWN0IHRoZSB5ZWFyIGZyb20uXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgeWVhciBjb21wb25lbnQuXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IGdldFllYXIoZGF0ZTogRCk6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIG1vbnRoIGNvbXBvbmVudCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cclxuICAgICAqIEBwYXJhbSBkYXRlIFRoZSBkYXRlIHRvIGV4dHJhY3QgdGhlIG1vbnRoIGZyb20uXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgbW9udGggY29tcG9uZW50ICgwLWluZGV4ZWQsIDAgPSBKYW51YXJ5KS5cclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgZ2V0TW9udGgoZGF0ZTogRCk6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGRhdGUgb2YgdGhlIG1vbnRoIGNvbXBvbmVudCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cclxuICAgICAqIEBwYXJhbSBkYXRlIFRoZSBkYXRlIHRvIGV4dHJhY3QgdGhlIGRhdGUgb2YgdGhlIG1vbnRoIGZyb20uXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgbW9udGggY29tcG9uZW50ICgxLWluZGV4ZWQsIDEgPSBmaXJzdCBvZiBtb250aCkuXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IGdldERhdGUoZGF0ZTogRCk6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGRheSBvZiB0aGUgd2VlayBjb21wb25lbnQgb2YgdGhlIGdpdmVuIGRhdGUuXHJcbiAgICAgKiBAcGFyYW0gZGF0ZSBUaGUgZGF0ZSB0byBleHRyYWN0IHRoZSBkYXkgb2YgdGhlIHdlZWsgZnJvbS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBtb250aCBjb21wb25lbnQgKDAtaW5kZXhlZCwgMCA9IFN1bmRheSkuXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IGdldERheU9mV2VlayhkYXRlOiBEKTogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBhIGxpc3Qgb2YgbmFtZXMgZm9yIHRoZSBtb250aHMuXHJcbiAgICAgKiBAcGFyYW0gc3R5bGUgVGhlIG5hbWluZyBzdHlsZSAoZS5nLiBsb25nID0gJ0phbnVhcnknLCBzaG9ydCA9ICdKYW4nLCBuYXJyb3cgPSAnSicpLlxyXG4gICAgICogQHJldHVybnMgQW4gb3JkZXJlZCBsaXN0IG9mIGFsbCBtb250aCBuYW1lcywgc3RhcnRpbmcgd2l0aCBKYW51YXJ5LlxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBnZXRNb250aE5hbWVzKHN0eWxlOiBcImxvbmdcIiB8IFwic2hvcnRcIiB8IFwibmFycm93XCIpOiBzdHJpbmdbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYSBsaXN0IG9mIG5hbWVzIGZvciB0aGUgZGF0ZXMgb2YgdGhlIG1vbnRoLlxyXG4gICAgICogQHJldHVybnMgQW4gb3JkZXJlZCBsaXN0IG9mIGFsbCBkYXRlIG9mIHRoZSBtb250aCBuYW1lcywgc3RhcnRpbmcgd2l0aCAnMScuXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IGdldERhdGVOYW1lcygpOiBzdHJpbmdbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYSBsaXN0IG9mIG5hbWVzIGZvciB0aGUgZGF5cyBvZiB0aGUgd2Vlay5cclxuICAgICAqIEBwYXJhbSBzdHlsZSBUaGUgbmFtaW5nIHN0eWxlIChlLmcuIGxvbmcgPSAnU3VuZGF5Jywgc2hvcnQgPSAnU3VuJywgbmFycm93ID0gJ1MnKS5cclxuICAgICAqIEByZXR1cm5zIEFuIG9yZGVyZWQgbGlzdCBvZiBhbGwgd2Vla2RheSBuYW1lcywgc3RhcnRpbmcgd2l0aCBTdW5kYXkuXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IGdldERheU9mV2Vla05hbWVzKHN0eWxlOiBcImxvbmdcIiB8IFwic2hvcnRcIiB8IFwibmFycm93XCIpOiBzdHJpbmdbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIG5hbWUgZm9yIHRoZSB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxyXG4gICAgICogQHBhcmFtIGRhdGUgVGhlIGRhdGUgdG8gZ2V0IHRoZSB5ZWFyIG5hbWUgZm9yLlxyXG4gICAgICogQHJldHVybnMgVGhlIG5hbWUgb2YgdGhlIGdpdmVuIHllYXIgKGUuZy4gJzIwMTcnKS5cclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgZ2V0WWVhck5hbWUoZGF0ZTogRCk6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cclxuICAgICAqIEByZXR1cm5zIFRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAtaW5kZXhlZCwgMCA9IFN1bmRheSkuXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IGdldEZpcnN0RGF5T2ZXZWVrKCk6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIG51bWJlciBvZiBkYXlzIGluIHRoZSBtb250aCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cclxuICAgICAqIEBwYXJhbSBkYXRlIFRoZSBkYXRlIHdob3NlIG1vbnRoIHNob3VsZCBiZSBjaGVja2VkLlxyXG4gICAgICogQHJldHVybnMgVGhlIG51bWJlciBvZiBkYXlzIGluIHRoZSBtb250aCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgZ2V0TnVtRGF5c0luTW9udGgoZGF0ZTogRCk6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENsb25lcyB0aGUgZ2l2ZW4gZGF0ZS5cclxuICAgICAqIEBwYXJhbSBkYXRlIFRoZSBkYXRlIHRvIGNsb25lXHJcbiAgICAgKiBAcmV0dXJucyBBIG5ldyBkYXRlIGVxdWFsIHRvIHRoZSBnaXZlbiBkYXRlLlxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBjbG9uZShkYXRlOiBEKTogRDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBkYXRlIHdpdGggdGhlIGdpdmVuIHllYXIsIG1vbnRoLCBhbmQgZGF0ZS4gRG9lcyBub3QgYWxsb3cgb3Zlci91bmRlci1mbG93IG9mIHRoZVxyXG4gICAgICogbW9udGggYW5kIGRhdGUuXHJcbiAgICAgKiBAcGFyYW0geWVhciBUaGUgZnVsbCB5ZWFyIG9mIHRoZSBkYXRlLiAoZS5nLiA4OSBtZWFucyB0aGUgeWVhciA4OSwgbm90IHRoZSB5ZWFyIDE5ODkpLlxyXG4gICAgICogQHBhcmFtIG1vbnRoIFRoZSBtb250aCBvZiB0aGUgZGF0ZSAoMC1pbmRleGVkLCAwID0gSmFudWFyeSkuIE11c3QgYmUgYW4gaW50ZWdlciAwIC0gMTEuXHJcbiAgICAgKiBAcGFyYW0gZGF0ZSBUaGUgZGF0ZSBvZiBtb250aCBvZiB0aGUgZGF0ZS4gTXVzdCBiZSBhbiBpbnRlZ2VyIDEgLSBsZW5ndGggb2YgdGhlIGdpdmVuIG1vbnRoLlxyXG4gICAgICogQHJldHVybnMgVGhlIG5ldyBkYXRlLCBvciBudWxsIGlmIGludmFsaWQuXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IGNyZWF0ZURhdGUoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyLCBkYXRlOiBudW1iZXIpOiBEO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0b2RheSdzIGRhdGUuXHJcbiAgICAgKiBAcmV0dXJucyBUb2RheSdzIGRhdGUuXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IHRvZGF5KCk6IEQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQYXJzZXMgYSBkYXRlIGZyb20gYSB1c2VyLXByb3ZpZGVkIHZhbHVlLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBwYXJzZS5cclxuICAgICAqIEBwYXJhbSBwYXJzZUZvcm1hdCBUaGUgZXhwZWN0ZWQgZm9ybWF0IG9mIHRoZSB2YWx1ZSBiZWluZyBwYXJzZWRcclxuICAgICAqICAgICAodHlwZSBpcyBpbXBsZW1lbnRhdGlvbi1kZXBlbmRlbnQpLlxyXG4gICAgICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlLlxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBwYXJzZSh2YWx1ZTogYW55LCBwYXJzZUZvcm1hdDogYW55KTogRCB8IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGb3JtYXRzIGEgZGF0ZSBhcyBhIHN0cmluZyBhY2NvcmRpbmcgdG8gdGhlIGdpdmVuIGZvcm1hdC5cclxuICAgICAqIEBwYXJhbSBkYXRlIFRoZSB2YWx1ZSB0byBmb3JtYXQuXHJcbiAgICAgKiBAcGFyYW0gZGlzcGxheUZvcm1hdCBUaGUgZm9ybWF0IHRvIHVzZSB0byBkaXNwbGF5IHRoZSBkYXRlIGFzIGEgc3RyaW5nLlxyXG4gICAgICogQHJldHVybnMgVGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgZm9ybWF0KGRhdGU6IEQsIGRpc3BsYXlGb3JtYXQ6IGFueSk6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgdGhlIGdpdmVuIG51bWJlciBvZiB5ZWFycyB0byB0aGUgZGF0ZS4gWWVhcnMgYXJlIGNvdW50ZWQgYXMgaWYgZmxpcHBpbmcgMTIgcGFnZXMgb24gdGhlXHJcbiAgICAgKiBjYWxlbmRhciBmb3IgZWFjaCB5ZWFyIGFuZCB0aGVuIGZpbmRpbmcgdGhlIGNsb3Nlc3QgZGF0ZSBpbiB0aGUgbmV3IG1vbnRoLiBGb3IgZXhhbXBsZSB3aGVuXHJcbiAgICAgKiBhZGRpbmcgMSB5ZWFyIHRvIEZlYiAyOSwgMjAxNiwgdGhlIHJlc3VsdGluZyBkYXRlIHdpbGwgYmUgRmViIDI4LCAyMDE3LlxyXG4gICAgICogQHBhcmFtIGRhdGUgVGhlIGRhdGUgdG8gYWRkIHllYXJzIHRvLlxyXG4gICAgICogQHBhcmFtIHllYXJzIFRoZSBudW1iZXIgb2YgeWVhcnMgdG8gYWRkIChtYXkgYmUgbmVnYXRpdmUpLlxyXG4gICAgICogQHJldHVybnMgQSBuZXcgZGF0ZSBlcXVhbCB0byB0aGUgZ2l2ZW4gb25lIHdpdGggdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgeWVhcnMgYWRkZWQuXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IGFkZENhbGVuZGFyWWVhcnMoZGF0ZTogRCwgeWVhcnM6IG51bWJlcik6IEQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIHRoZSBnaXZlbiBudW1iZXIgb2YgbW9udGhzIHRvIHRoZSBkYXRlLiBNb250aHMgYXJlIGNvdW50ZWQgYXMgaWYgZmxpcHBpbmcgYSBwYWdlIG9uIHRoZVxyXG4gICAgICogY2FsZW5kYXIgZm9yIGVhY2ggbW9udGggYW5kIHRoZW4gZmluZGluZyB0aGUgY2xvc2VzdCBkYXRlIGluIHRoZSBuZXcgbW9udGguIEZvciBleGFtcGxlIHdoZW5cclxuICAgICAqIGFkZGluZyAxIG1vbnRoIHRvIEphbiAzMSwgMjAxNywgdGhlIHJlc3VsdGluZyBkYXRlIHdpbGwgYmUgRmViIDI4LCAyMDE3LlxyXG4gICAgICogQHBhcmFtIGRhdGUgVGhlIGRhdGUgdG8gYWRkIG1vbnRocyB0by5cclxuICAgICAqIEBwYXJhbSBtb250aHMgVGhlIG51bWJlciBvZiBtb250aHMgdG8gYWRkIChtYXkgYmUgbmVnYXRpdmUpLlxyXG4gICAgICogQHJldHVybnMgQSBuZXcgZGF0ZSBlcXVhbCB0byB0aGUgZ2l2ZW4gb25lIHdpdGggdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbW9udGhzIGFkZGVkLlxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBhZGRDYWxlbmRhck1vbnRocyhkYXRlOiBELCBtb250aHM6IG51bWJlcik6IEQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIHRoZSBnaXZlbiBudW1iZXIgb2YgZGF5cyB0byB0aGUgZGF0ZS4gRGF5cyBhcmUgY291bnRlZCBhcyBpZiBtb3Zpbmcgb25lIGNlbGwgb24gdGhlXHJcbiAgICAgKiBjYWxlbmRhciBmb3IgZWFjaCBkYXkuXHJcbiAgICAgKiBAcGFyYW0gZGF0ZSBUaGUgZGF0ZSB0byBhZGQgZGF5cyB0by5cclxuICAgICAqIEBwYXJhbSBkYXlzIFRoZSBudW1iZXIgb2YgZGF5cyB0byBhZGQgKG1heSBiZSBuZWdhdGl2ZSkuXHJcbiAgICAgKiBAcmV0dXJucyBBIG5ldyBkYXRlIGVxdWFsIHRvIHRoZSBnaXZlbiBvbmUgd2l0aCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIGFkZGVkLlxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBhZGRDYWxlbmRhckRheXMoZGF0ZTogRCwgZGF5czogbnVtYmVyKTogRDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIFJGQyAzMzM5IGNvbXBhdGlibGUgc3RyaW5nIChodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzMzOSkgZm9yIHRoZSBnaXZlbiBkYXRlLlxyXG4gICAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBnZW5lcmF0ZSBkYXRlIHN0cmluZ3MgdGhhdCBhcmUgY29tcGF0aWJsZSB3aXRoIG5hdGl2ZSBIVE1MIGF0dHJpYnV0ZXNcclxuICAgICAqIHN1Y2ggYXMgdGhlIGBtaW5gIG9yIGBtYXhgIGF0dHJpYnV0ZSBvZiBhbiBgPGlucHV0PmAuXHJcbiAgICAgKiBAcGFyYW0gZGF0ZSBUaGUgZGF0ZSB0byBnZXQgdGhlIElTTyBkYXRlIHN0cmluZyBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgSVNPIGRhdGUgc3RyaW5nIGRhdGUgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCB0b0lzbzg2MDEoZGF0ZTogRCk6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBvYmplY3QgaXMgY29uc2lkZXJlZCBhIGRhdGUgaW5zdGFuY2UgYnkgdGhpcyBEYXRlQWRhcHRlci5cclxuICAgICAqIEBwYXJhbSBvYmogVGhlIG9iamVjdCB0byBjaGVja1xyXG4gICAgICogQHJldHVybnMgV2hldGhlciB0aGUgb2JqZWN0IGlzIGEgZGF0ZSBpbnN0YW5jZS5cclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgaXNEYXRlSW5zdGFuY2Uob2JqOiBhbnkpOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIGRhdGUgaXMgdmFsaWQuXHJcbiAgICAgKiBAcGFyYW0gZGF0ZSBUaGUgZGF0ZSB0byBjaGVjay5cclxuICAgICAqIEByZXR1cm5zIFdoZXRoZXIgdGhlIGRhdGUgaXMgdmFsaWQuXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IGlzVmFsaWQoZGF0ZTogRCk6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGRhdGUgaW5zdGFuY2UgdGhhdCBpcyBub3QgdmFsaWQuXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnZhbGlkIGRhdGUuXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IGludmFsaWQoKTogRDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdpdmVuIGEgcG90ZW50aWFsIGRhdGUgb2JqZWN0LCByZXR1cm5zIHRoYXQgc2FtZSBkYXRlIG9iamVjdCBpZiBpdCBpc1xyXG4gICAgICogYSB2YWxpZCBkYXRlLCBvciBgbnVsbGAgaWYgaXQncyBub3QgYSB2YWxpZCBkYXRlLlxyXG4gICAgICogQHBhcmFtIG9iaiBUaGUgb2JqZWN0IHRvIGNoZWNrLlxyXG4gICAgICogQHJldHVybnMgQSBkYXRlIG9yIGBudWxsYC5cclxuICAgICAqL1xyXG4gICAgZ2V0VmFsaWREYXRlT3JOdWxsKG9iajogdW5rbm93bik6IEQgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0RhdGVJbnN0YW5jZShvYmopICYmIHRoaXMuaXNWYWxpZChvYmogYXMgRClcclxuICAgICAgICAgICAgPyAob2JqIGFzIEQpXHJcbiAgICAgICAgICAgIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEF0dGVtcHRzIHRvIGRlc2VyaWFsaXplIGEgdmFsdWUgdG8gYSB2YWxpZCBkYXRlIG9iamVjdC4gVGhpcyBpcyBkaWZmZXJlbnQgZnJvbSBwYXJzaW5nIGluIHRoYXRcclxuICAgICAqIGRlc2VyaWFsaXplIHNob3VsZCBvbmx5IGFjY2VwdCBub24tYW1iaWd1b3VzLCBsb2NhbGUtaW5kZXBlbmRlbnQgZm9ybWF0cyAoZS5nLiBhIElTTyA4NjAxXHJcbiAgICAgKiBzdHJpbmcpLiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBkb2VzIG5vdCBhbGxvdyBhbnkgZGVzZXJpYWxpemF0aW9uLCBpdCBzaW1wbHkgY2hlY2tzIHRoYXRcclxuICAgICAqIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbHJlYWR5IGEgdmFsaWQgZGF0ZSBvYmplY3Qgb3IgbnVsbC4gVGhlIGA8bWF0LWRhdGVwaWNrZXI+YCB3aWxsIGNhbGwgdGhpc1xyXG4gICAgICogbWV0aG9kIG9uIGFsbCBvZiBpdHMgYEBJbnB1dCgpYCBwcm9wZXJ0aWVzIHRoYXQgYWNjZXB0IGRhdGVzLiBJdCBpcyB0aGVyZWZvcmUgcG9zc2libGUgdG9cclxuICAgICAqIHN1cHBvcnQgcGFzc2luZyB2YWx1ZXMgZnJvbSB5b3VyIGJhY2tlbmQgZGlyZWN0bHkgdG8gdGhlc2UgcHJvcGVydGllcyBieSBvdmVycmlkaW5nIHRoaXMgbWV0aG9kXHJcbiAgICAgKiB0byBhbHNvIGRlc2VyaWFsaXplIHRoZSBmb3JtYXQgdXNlZCBieSB5b3VyIGJhY2tlbmQuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIGRlc2VyaWFsaXplZCBpbnRvIGEgZGF0ZSBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZGVzZXJpYWxpemVkIGRhdGUgb2JqZWN0LCBlaXRoZXIgYSB2YWxpZCBkYXRlLCBudWxsIGlmIHRoZSB2YWx1ZSBjYW4gYmVcclxuICAgICAqICAgICBkZXNlcmlhbGl6ZWQgaW50byBhIG51bGwgZGF0ZSAoZS5nLiB0aGUgZW1wdHkgc3RyaW5nKSwgb3IgYW4gaW52YWxpZCBkYXRlLlxyXG4gICAgICovXHJcbiAgICBkZXNlcmlhbGl6ZSh2YWx1ZTogYW55KTogRCB8IG51bGwge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdmFsdWUgPT0gbnVsbCB8fFxyXG4gICAgICAgICAgICAodGhpcy5pc0RhdGVJbnN0YW5jZSh2YWx1ZSkgJiYgdGhpcy5pc1ZhbGlkKHZhbHVlKSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnZhbGlkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBsb2NhbGUgdXNlZCBmb3IgYWxsIGRhdGVzLlxyXG4gICAgICogQHBhcmFtIGxvY2FsZSBUaGUgbmV3IGxvY2FsZS5cclxuICAgICAqL1xyXG4gICAgc2V0TG9jYWxlKGxvY2FsZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XHJcbiAgICAgICAgdGhpcy5fbG9jYWxlQ2hhbmdlcy5uZXh0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb21wYXJlcyB0d28gZGF0ZXMuXHJcbiAgICAgKiBAcGFyYW0gZmlyc3QgVGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZS5cclxuICAgICAqIEBwYXJhbSBzZWNvbmQgVGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmUuXHJcbiAgICAgKiBAcmV0dXJucyAwIGlmIHRoZSBkYXRlcyBhcmUgZXF1YWwsIGEgbnVtYmVyIGxlc3MgdGhhbiAwIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGVhcmxpZXIsXHJcbiAgICAgKiAgICAgYSBudW1iZXIgZ3JlYXRlciB0aGFuIDAgaWYgdGhlIGZpcnN0IGRhdGUgaXMgbGF0ZXIuXHJcbiAgICAgKi9cclxuICAgIGNvbXBhcmVEYXRlKGZpcnN0OiBELCBzZWNvbmQ6IEQpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0WWVhcihmaXJzdCkgLSB0aGlzLmdldFllYXIoc2Vjb25kKSB8fFxyXG4gICAgICAgICAgICB0aGlzLmdldE1vbnRoKGZpcnN0KSAtIHRoaXMuZ2V0TW9udGgoc2Vjb25kKSB8fFxyXG4gICAgICAgICAgICB0aGlzLmdldERhdGUoZmlyc3QpIC0gdGhpcy5nZXREYXRlKHNlY29uZClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIGlmIHR3byBkYXRlcyBhcmUgZXF1YWwuXHJcbiAgICAgKiBAcGFyYW0gZmlyc3QgVGhlIGZpcnN0IGRhdGUgdG8gY2hlY2suXHJcbiAgICAgKiBAcGFyYW0gc2Vjb25kIFRoZSBzZWNvbmQgZGF0ZSB0byBjaGVjay5cclxuICAgICAqIEByZXR1cm5zIFdoZXRoZXIgdGhlIHR3byBkYXRlcyBhcmUgZXF1YWwuXHJcbiAgICAgKiAgICAgTnVsbCBkYXRlcyBhcmUgY29uc2lkZXJlZCBlcXVhbCB0byBvdGhlciBudWxsIGRhdGVzLlxyXG4gICAgICovXHJcbiAgICBzYW1lRGF0ZShmaXJzdDogRCB8IG51bGwsIHNlY29uZDogRCB8IG51bGwpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoZmlyc3QgJiYgc2Vjb25kKSB7XHJcbiAgICAgICAgICAgIGxldCBmaXJzdFZhbGlkID0gdGhpcy5pc1ZhbGlkKGZpcnN0KTtcclxuICAgICAgICAgICAgbGV0IHNlY29uZFZhbGlkID0gdGhpcy5pc1ZhbGlkKHNlY29uZCk7XHJcbiAgICAgICAgICAgIGlmIChmaXJzdFZhbGlkICYmIHNlY29uZFZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMuY29tcGFyZURhdGUoZmlyc3QsIHNlY29uZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZpcnN0VmFsaWQgPT0gc2Vjb25kVmFsaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmaXJzdCA9PSBzZWNvbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbGFtcCB0aGUgZ2l2ZW4gZGF0ZSBiZXR3ZWVuIG1pbiBhbmQgbWF4IGRhdGVzLlxyXG4gICAgICogQHBhcmFtIGRhdGUgVGhlIGRhdGUgdG8gY2xhbXAuXHJcbiAgICAgKiBAcGFyYW0gbWluIFRoZSBtaW5pbXVtIHZhbHVlIHRvIGFsbG93LiBJZiBudWxsIG9yIG9taXR0ZWQgbm8gbWluIGlzIGVuZm9yY2VkLlxyXG4gICAgICogQHBhcmFtIG1heCBUaGUgbWF4aW11bSB2YWx1ZSB0byBhbGxvdy4gSWYgbnVsbCBvciBvbWl0dGVkIG5vIG1heCBpcyBlbmZvcmNlZC5cclxuICAgICAqIEByZXR1cm5zIGBtaW5gIGlmIGBkYXRlYCBpcyBsZXNzIHRoYW4gYG1pbmAsIGBtYXhgIGlmIGRhdGUgaXMgZ3JlYXRlciB0aGFuIGBtYXhgLFxyXG4gICAgICogICAgIG90aGVyd2lzZSBgZGF0ZWAuXHJcbiAgICAgKi9cclxuICAgIGNsYW1wRGF0ZShkYXRlOiBELCBtaW4/OiBEIHwgbnVsbCwgbWF4PzogRCB8IG51bGwpOiBEIHtcclxuICAgICAgICBpZiAobWluICYmIHRoaXMuY29tcGFyZURhdGUoZGF0ZSwgbWluKSA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1pbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1heCAmJiB0aGlzLmNvbXBhcmVEYXRlKGRhdGUsIG1heCkgPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtYXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1EQ01lbnVTdXJmYWNlIH0gZnJvbSBcIkBtYXRlcmlhbC9tZW51LXN1cmZhY2VcIjtcclxuaW1wb3J0IHRwbCBmcm9tIFwiZ2xvdy5qc1wiO1xyXG5pbXBvcnQgeyBEYXRlQWRhcHRlciB9IGZyb20gXCIuLi9jb3JlL2RhdGUtdGltZS9kYXRlLWFkYXB0ZXJcIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiLi4vdGV4dC1maWVsZFwiO1xyXG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcclxuXHJcbmludGVyZmFjZSBEYXRlUGlja2VyUHJvcHMge1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRlUGlja2VyKHByb3BzOiBEYXRlUGlja2VyUHJvcHMpIHtcclxuICAgIGNvbnN0IHsgbGFiZWwgPSBudWxsIH0gPSBwcm9wcyB8fCB7fTtcclxuICAgIGxldCBzdXJmYWNlVmlldyA9IG5ldyBDaGlsZFZpZXcoTURDTWVudVN1cmZhY2UuYXR0YWNoVG8pO1xyXG5cclxuICAgIC8vIGNvbnN0IGVsdCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoTWF0Q2FsZW5kYXIsIHsgaW5qZWN0b3I6IG51bGwgfSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlbHQpO1xyXG5cclxuICAgIGZldGNoKFwiaHR0cHM6Ly93d3cuc2VwYXkubmwvbXlzZXBheS9UcmFuc2FjdGlvbnMuYXNweFwiLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBhY2NlcHQ6XHJcbiAgICAgICAgICAgICAgICBcInRleHQvaHRtbCxhcHBsaWNhdGlvbi94aHRtbCt4bWwsYXBwbGljYXRpb24veG1sO3E9MC45LGltYWdlL2F2aWYsaW1hZ2Uvd2VicCxpbWFnZS9hcG5nLCovKjtxPTAuOCxhcHBsaWNhdGlvbi9zaWduZWQtZXhjaGFuZ2U7dj1iMztxPTAuOVwiLFxyXG4gICAgICAgICAgICBcImFjY2VwdC1sYW5ndWFnZVwiOiBcImVuLGVuLVVTO3E9MC45LG5sO3E9MC44LGFyO3E9MC43XCIsXHJcbiAgICAgICAgICAgIFwiY2FjaGUtY29udHJvbFwiOiBcIm1heC1hZ2U9MFwiLFxyXG4gICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxyXG4gICAgICAgICAgICBcInNlYy1jaC11YVwiOlxyXG4gICAgICAgICAgICAgICAgJ1wiIE5vdCBBO0JyYW5kXCI7dj1cIjk5XCIsIFwiQ2hyb21pdW1cIjt2PVwiOTBcIiwgXCJHb29nbGUgQ2hyb21lXCI7dj1cIjkwXCInLFxyXG4gICAgICAgICAgICBcInNlYy1jaC11YS1tb2JpbGVcIjogXCI/MFwiLFxyXG4gICAgICAgICAgICBcInNlYy1mZXRjaC1kZXN0XCI6IFwiZG9jdW1lbnRcIixcclxuICAgICAgICAgICAgXCJzZWMtZmV0Y2gtbW9kZVwiOiBcIm5hdmlnYXRlXCIsXHJcbiAgICAgICAgICAgIFwic2VjLWZldGNoLXNpdGVcIjogXCJzYW1lLW9yaWdpblwiLFxyXG4gICAgICAgICAgICBcInNlYy1mZXRjaC11c2VyXCI6IFwiPzFcIixcclxuICAgICAgICAgICAgXCJ1cGdyYWRlLWluc2VjdXJlLXJlcXVlc3RzXCI6IFwiMVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVmZXJyZXI6IFwiaHR0cHM6Ly93d3cuc2VwYXkubmwvbXlzZXBheS9UcmFuc2FjdGlvbnMuYXNweFwiLFxyXG4gICAgICAgIHJlZmVycmVyUG9saWN5OiBcInN0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW5cIixcclxuICAgICAgICBib2R5OlxyXG4gICAgICAgICAgICBcInZpZXdzdGF0ZWtleT03NzI0MDE2NC1mODM1LTQ3ZjktOTlhNi1kYWYyYzNhMzAxOGImY3RsMDAlMjRoaWRQYWdlSUQ9ZjU1Mjg3ZjEtODgwYS00ZDUwLTlkODctZWZiYWVhNWFkMjQ5JmN0bDAwJTI0Q29udGVudFBsYWNlSG9sZGVyMSUyNHRiRGF0ZUZyb209MjEtMDQtMjAyMSswMCUzQTAwJmN0bDAwJTI0Q29udGVudFBsYWNlSG9sZGVyMSUyNHRiRGF0ZVRvPTAxLTA1LTIwMjErMDAlM0EwMCZjdGwwMCUyNENvbnRlbnRQbGFjZUhvbGRlcjElMjR0YkFtb3VudE1pbj0mY3RsMDAlMjRDb250ZW50UGxhY2VIb2xkZXIxJTI0dGJBbW91bnRNYXg9JmN0bDAwJTI0Q29udGVudFBsYWNlSG9sZGVyMSUyNGxzdERvd25sb2FkVHlwZT1DU1YmY3RsMDAlMjRDb250ZW50UGxhY2VIb2xkZXIxJTI0YnRuRG93bmxvYWQ9RG93bmxvYWQmX19FVkVOVFRBUkdFVD0mX19FVkVOVEFSR1VNRU5UPSZfX1ZJRVdTVEFURT0mX19TQ1JPTExQT1NJVElPTlg9MCZfX1NDUk9MTFBPU0lUSU9OWT0wJl9fRVZFTlRWQUxJREFUSU9OPSUyRndFZEFCbXZWWEQxb1lFTGV2ZU1yMHZIQ21ZUDFCY1I0SVFLVSUyRk4lMkZtSmFuNkFUNEZ4b2Vsdk5rOFYxMkdFZXolMkJrWnZGODhTSWtmMzFhYmREMms3dmRzMEo4bTQ4MmlNYWl0ejYlMkJ2MWQwRUlaZzBSaGltMVRBYWtmS296cTFTWElRdzM0d0tIUXA5VFVJUyUyRndPbU5JNXo1dEpaUkpHUGE1JTJGWTFoQWtFcmJST3JvRk1WWmZNVFM1bFo4cHZ2bSUyRjRaaFVkcDNnaSUyRjJPQVZzOHpEQTJ3NEM5QU05dzdHME9YMWNQUlNpYWhacU5CbEdJbm05SzB0WVFYNkUxSjNhcGFPWG9CVURQeVIlMkZ5cDlLMVA0ckRpbW1KNXBnY2ZWM1NWd0N6YWUwbTRBNUgybGgzQThrUXdyMEtaeDBkTFJoVGNUQzFGJTJGTHFBYXN2RkFrTU8wMkFJMUh3SlI5OCUyRk9JeE54dTlmN2h0dGhmTkthejNwaUJUVmt5eUVTaFBYVXVXZnBIeXFKN3FESVE5Wm1uU2JaR00zSjFSWjV6RFJqNW9MamdhdnJ3eTloQWRPMzFPakglMkY4dlhIWFJDU3dTbEM5VmxMYzFCb2tFU0YxZUw0RCUyQlBhOGdEU08wMlB3eGtyUSUyQmpidUpnWGJ0UU8wTUhtS0pBbnBNSUZ6cEU5dm9YMiUyRkZkZ3hHWFJNR2RrMEF5TW81TDdSOXBuY29XcHcwYTZ3RXF3NUd6JTJCelltYUV5eUlGVnBjSDRTVVpneTJQZjFDTTBYdURVRTJFJTNEXCIsXHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBtb2RlOiBcImNvcnNcIixcclxuICAgICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGQgbGFiZWw9e2xhYmVsfSBldmVudHM9e3sgbW91c2V1cDogdG9nZ2xlT3BlbiB9fSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRjLW1lbnUtc3VyZmFjZS0tYW5jaG9yXCIgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmU7XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRjLW1lbnUtc3VyZmFjZVwiIHN0eWxlPVwicGFkZGluZzogMjBweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdXJmYWNlVmlld31cclxuICAgICAgICAgICAgICAgICAgICBzdXJmYWNlXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZU9wZW4oZSkge1xyXG4gICAgICAgIHN1cmZhY2VWaWV3LmNhbGwoKGVsdCkgPT4gZWx0LmlzT3BlbiAmJiBlbHQub3BlbigpKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ2hpbGRWaWV3PFQ+IHtcclxuICAgIHB1YmxpYyBlbGVtZW50PzogVDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZuOiAoZG9tKSA9PiBUKSB7fVxyXG5cclxuICAgIGNhbGwoZm46IChlbHQ6IFQpID0+IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gdGhpcztcclxuICAgICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICBmbihlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoVG8oZG9tKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5mbihkb20pO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgSW52YXJpYW50RGF0ZSB7XHJcbiAgICB5ZWFyOiBudW1iZXI7XHJcbiAgICBtb250aDogbnVtYmVyO1xyXG4gICAgZGF0ZTogbnVtYmVyO1xyXG59XHJcbmNsYXNzIEludmFyaWFudERhdGVBZGFwdGVyIGV4dGVuZHMgRGF0ZUFkYXB0ZXI8SW52YXJpYW50RGF0ZT4ge1xyXG4gICAgZ2V0WWVhcihkYXRlOiBJbnZhcmlhbnREYXRlKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gZGF0ZS55ZWFyO1xyXG4gICAgfVxyXG4gICAgZ2V0TW9udGgoZGF0ZTogSW52YXJpYW50RGF0ZSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGUubW9udGg7XHJcbiAgICB9XHJcbiAgICBnZXREYXRlKGRhdGU6IEludmFyaWFudERhdGUpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBkYXRlLmRhdGU7XHJcbiAgICB9XHJcbiAgICBnZXREYXlPZldlZWsoZGF0ZTogSW52YXJpYW50RGF0ZSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCwgZGF0ZS5kYXRlKS5nZXREYXkoKTtcclxuICAgIH1cclxuICAgIGdldE1vbnRoTmFtZXMoc3R5bGU6IFwibG9uZ1wiIHwgXCJzaG9ydFwiIHwgXCJuYXJyb3dcIik6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICBcIkphblwiLFxyXG4gICAgICAgICAgICBcIkZlYlwiLFxyXG4gICAgICAgICAgICBcIk1hclwiLFxyXG4gICAgICAgICAgICBcIkFwclwiLFxyXG4gICAgICAgICAgICBcIk1laVwiLFxyXG4gICAgICAgICAgICBcIkp1blwiLFxyXG4gICAgICAgICAgICBcIkp1bFwiLFxyXG4gICAgICAgICAgICBcIkF1Z1wiLFxyXG4gICAgICAgICAgICBcIlNlcFwiLFxyXG4gICAgICAgICAgICBcIk9jdFwiLFxyXG4gICAgICAgICAgICBcIk5vdlwiLFxyXG4gICAgICAgICAgICBcIkRlY1wiLFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbiAgICBnZXREYXRlTmFtZXMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBbXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHJcIiwgXCJGcmlcIiwgXCJTYXRcIiwgXCJTdW5cIl07XHJcbiAgICB9XHJcbiAgICBnZXREYXlPZldlZWtOYW1lcyhzdHlsZTogXCJsb25nXCIgfCBcInNob3J0XCIgfCBcIm5hcnJvd1wiKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBbXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHJcIiwgXCJGcmlcIiwgXCJTYXRcIiwgXCJTdW5cIl07XHJcbiAgICB9XHJcbiAgICBnZXRZZWFyTmFtZShkYXRlOiBJbnZhcmlhbnREYXRlKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gZGF0ZS55ZWFyLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBnZXRGaXJzdERheU9mV2VlaygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgZ2V0TnVtRGF5c0luTW9udGgoZGF0ZTogSW52YXJpYW50RGF0ZSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDMwO1xyXG4gICAgfVxyXG4gICAgY2xvbmUoZGF0ZTogSW52YXJpYW50RGF0ZSk6IEludmFyaWFudERhdGUge1xyXG4gICAgICAgIHJldHVybiB7IC4uLmRhdGUgfTtcclxuICAgIH1cclxuICAgIGNyZWF0ZURhdGUoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyLCBkYXRlOiBudW1iZXIpOiBJbnZhcmlhbnREYXRlIHtcclxuICAgICAgICByZXR1cm4geyB5ZWFyLCBtb250aCwgZGF0ZSB9O1xyXG4gICAgfVxyXG4gICAgdG9kYXkoKTogSW52YXJpYW50RGF0ZSB7XHJcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHllYXI6IGQuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgICAgICAgbW9udGg6IGQuZ2V0TW9udGgoKSxcclxuICAgICAgICAgICAgZGF0ZTogZC5nZXREYXRlKCksXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHBhcnNlKHZhbHVlOiBhbnksIHBhcnNlRm9ybWF0OiBhbnkpOiBJbnZhcmlhbnREYXRlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuICAgIGZvcm1hdChkYXRlOiBJbnZhcmlhbnREYXRlLCBkaXNwbGF5Rm9ybWF0OiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG4gICAgYWRkQ2FsZW5kYXJZZWFycyhkYXRlOiBJbnZhcmlhbnREYXRlLCB5ZWFyczogbnVtYmVyKTogSW52YXJpYW50RGF0ZSB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uZGF0ZSwgeWVhcjogZGF0ZS55ZWFyICsgeWVhcnMgfTtcclxuICAgIH1cclxuICAgIGFkZENhbGVuZGFyTW9udGhzKGRhdGU6IEludmFyaWFudERhdGUsIG1vbnRoczogbnVtYmVyKTogSW52YXJpYW50RGF0ZSB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uZGF0ZSwgbW9udGg6IGRhdGUubW9udGggKyBtb250aHMgfTtcclxuICAgIH1cclxuICAgIGFkZENhbGVuZGFyRGF5cyhkYXRlOiBJbnZhcmlhbnREYXRlLCBkYXlzOiBudW1iZXIpOiBJbnZhcmlhbnREYXRlIHtcclxuICAgICAgICByZXR1cm4geyAuLi5kYXRlLCBkYXRlOiBkYXRlLmRhdGUgKyBkYXlzIH07XHJcbiAgICB9XHJcbiAgICB0b0lzbzg2MDEoZGF0ZTogSW52YXJpYW50RGF0ZSk6IHN0cmluZyB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbiAgICBpc0RhdGVJbnN0YW5jZShvYmo6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBvYmogJiYgXCJ5ZWFyXCIgaW4gb2JqICYmIFwibW9udGhcIiBpbiBvYmogJiYgXCJkYXRlXCIgaW4gb2JqO1xyXG4gICAgfVxyXG4gICAgaXNWYWxpZChkYXRlOiBJbnZhcmlhbnREYXRlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEhZGF0ZTtcclxuICAgIH1cclxuICAgIGludmFsaWQoKTogSW52YXJpYW50RGF0ZSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHRwbCBmcm9tIFwiZ2xvdy5qc1wiO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9tdXRhYmwuanNcIjtcclxuaW1wb3J0IHsgTURDU2VsZWN0IH0gZnJvbSBcIkBtYXRlcmlhbC9zZWxlY3RcIjtcclxuaW1wb3J0IHsgTURDUmlwcGxlIH0gZnJvbSBcIkBtYXRlcmlhbC9yaXBwbGVcIjtcclxuaW1wb3J0IHsgQXR0ciB9IGZyb20gXCIuLi8uLi8uLi9nbG93LmpzL2NvbXBvbmVudHMvY3NzXCI7XHJcblxyXG50eXBlIFNlbGVjdFByb3BzPFQ+ID0ge1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIHZhbHVlOiBTdGF0ZTxUPjtcclxuICAgIG9wdGlvbnM6IFNlbGVjdE9wdGlvbjxUPltdO1xyXG59O1xyXG5cclxudHlwZSBTZWxlY3RPcHRpb248VD4gPSB7XHJcbiAgICB2YWx1ZTogVDtcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWxlY3Q8VD4ocHJvcHM6IFNlbGVjdFByb3BzPFQ+KSB7XHJcbiAgICBjb25zdCBpZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWRjLXNlbGVjdCBtZGMtcmlwcGxlLXVwZ3JhZGVkXCIgc3R5bGU9XCJkaXNwbGF5OiBibG9jaztcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJtZGMtc2VsZWN0X19kcm9wZG93bi1pY29uXCI+PC9pPlxyXG4gICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJtZGMtc2VsZWN0X19uYXRpdmUtY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5vcHRpb25zLm1hcCgoZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2UudmFsdWV9PntlLmxhYmVsfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8QXR0ciBuYW1lPVwidmFsdWVcIiB2YWx1ZT17cHJvcHMudmFsdWV9IC8+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgIGZvcj17aWR9XHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm1kYy1mbG9hdGluZy1sYWJlbCBtZGMtZmxvYXRpbmctbGFiZWwtLWZsb2F0LWFib3ZlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmxhYmVsfVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRjLWxpbmUtcmlwcGxlXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+LFxyXG4gICAgICAgIE1EQ1JpcHBsZSxcclxuICAgICAgICA8cFxyXG4gICAgICAgICAgICBjbGFzcz1cIm1kYy10ZXh0LWZpZWxkLWhlbHBlci10ZXh0IG1kYy10ZXh0LWZpZWxkLWhlbHBlci10ZXh0LS1wZXJzaXN0ZW50IG1kYy10ZXh0LWZpZWxkLWhlbHBlci10ZXh0LS12YWxpZGF0aW9uLW1zZ1wiXHJcbiAgICAgICAgICAgIGlkPXtpZCArIFwiX2hlbHBlcl90ZXh0XCJ9XHJcbiAgICAgICAgPjwvcD4sXHJcbiAgICBdO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlKGV2dCkge1xyXG4gICAgICAgIHByb3BzLnZhbHVlLnVwZGF0ZShldnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdHBsIGZyb20gXCJnbG93LmpzXCI7XHJcbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3Bpbm5lcigpIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzPVwibG9hZGVyLXNwaW5uZXJcIj48L2Rpdj47XHJcbn1cclxuIiwiaW1wb3J0IHRwbCBmcm9tIFwiZ2xvdy5qc1wiO1xyXG5pbXBvcnQgKiBhcyBSeCBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBFeHByZXNzaW9uIH0gZnJvbSBcIi4uLy4uL211dGFibC5qcy9saWIvb2JzZXJ2YWJsZVwiO1xyXG5cclxuaW50ZXJmYWNlIFRhYkJhclByb3BzIHtcclxuICAgIHNlbGVjdGVkOiBFeHByZXNzaW9uPHN0cmluZ1tdPjtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJCYXIocHJvcHM6IFRhYkJhclByb3BzKSB7XHJcbiAgICBjb25zdCB7IHNlbGVjdGVkIH0gPSBwcm9wcyB8fCB7fTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1kYy10YWItYmFyXCIgcm9sZT1cInRhYmxpc3RcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kYy10YWItc2Nyb2xsZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1kYy10YWItc2Nyb2xsZXJfX3Njcm9sbC1hcmVhIG1kYy10YWItc2Nyb2xsZXJfX3Njcm9sbC1hcmVhLS1zY3JvbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMHB4O1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1kYy10YWItc2Nyb2xsZXJfX3Njcm9sbC1jb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJwYWRkaW5nOiAxMHB4O1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlBsYW5uaW5nIEJ5IEVtcGxveWVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD1cIi9hZ2VudHMtcGxhbm5pZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3NlbGVjdGVkLmxpZnQoKHMpID0+IHMubGVuZ3RoID09PSAwKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJUcmFjayBQbGFubmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9XCIvYWdlbnRzLXBsYW5uaWcvdHJhY2tzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17c2VsZWN0ZWQubGlmdCgocykgPT4gc1swXSA9PT0gXCJ0cmFja3NcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUGxhbm5pbmcgQnkgUG9zaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsPVwiL2FnZW50cy1wbGFubmlnL3Blci1wb3NpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3NlbGVjdGVkLmxpZnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHMpID0+IHNbMF0gPT09IFwicGVyLXBvc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRGVtYW5kIFBlciBQb3NpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9XCIvYWdlbnRzLXBsYW5uaWcvZGVtYW5kc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3NlbGVjdGVkLmxpZnQoKHMpID0+IHNbMF0gPT09IFwiZGVtYW5kc1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBUYWJQcm9wcyB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgYWN0aXZlPzogRXhwcmVzc2lvbjxib29sZWFuPjtcclxuICAgIHVybD86IHN0cmluZztcclxufVxyXG5mdW5jdGlvbiBUYWIocHJvcHM6IFRhYlByb3BzKSB7XHJcbiAgICB2YXIgcmFuZG9tID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICAgIHJvbGU9XCJ0YWJcIlxyXG4gICAgICAgICAgICBjbGFzcz1cInJvdXRlci1saW5rIG1kYy10YWJcIlxyXG4gICAgICAgICAgICBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcclxuICAgICAgICAgICAgaWQ9e1widGFiX1wiICsgcmFuZG9tfVxyXG4gICAgICAgICAgICBocmVmPXtwcm9wcy51cmx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1kYy10YWJfX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWRjLXRhYl9fdGV4dC1sYWJlbFwiPntwcm9wcy50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIGNsYXNzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtZGMtdGFiLWluZGljYXRvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHByb3BzLmFjdGl2ZS5saWZ0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYikgPT4gYiAmJiBcIm1kYy10YWItaW5kaWNhdG9yLS1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGMtdGFiLWluZGljYXRvcl9fY29udGVudCBtZGMtdGFiLWluZGljYXRvcl9fY29udGVudC0tdW5kZXJsaW5lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWRjLXRhYl9fcmlwcGxlIG1kYy1yaXBwbGUtdXBncmFkZWRcIj48L3NwYW4+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgdHBsIGZyb20gXCJnbG93LmpzXCI7XHJcbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyBNRENUZXh0RmllbGQgfSBmcm9tIFwiQG1hdGVyaWFsL3RleHRmaWVsZFwiO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9tdXRhYmwuanNcIjtcclxuXHJcbmludGVyZmFjZSBUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0Q29udHJvbGxlckNhbGxiYWNrPE8+IHtcclxuICAoY29udHJvbGxlcjogVHJhbnNmb3JtU3RyZWFtRGVmYXVsdENvbnRyb2xsZXI8Tz4pOiB2b2lkIHwgUHJvbWlzZUxpa2U8dm9pZD47XHJcbn1cclxuXHJcbmludGVyZmFjZSBLZXlib2FyZEV2ZW50SGFuZGxlciB7XHJcbiAgKGV2OiBLZXlib2FyZEV2ZW50KTogdm9pZDtcclxufVxyXG5pbnRlcmZhY2UgTW91c2VFdmVudEhhbmRsZXIge1xyXG4gIChldjogTW91c2VFdmVudCk6IHZvaWQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJbnB1dEV2ZW50cyB7XHJcbiAga2V5dXA6IEtleWJvYXJkRXZlbnRIYW5kbGVyO1xyXG4gIG1vdXNldXA6IE1vdXNlRXZlbnRIYW5kbGVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVGV4dEZpZWxkUHJvcHMge1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgdmFsdWU/OiBzdHJpbmcgfCBTdGF0ZTx1bmtub3duPjtcclxuICByZWFkb25seT86IGJvb2xlYW47XHJcbiAgYXV0b2ZvY3VzPzogYm9vbGVhbjtcclxuICB0eXBlPzogXCJkYXRlXCIgfCBcInBhc3N3b3JkXCI7XHJcbiAgZXZlbnRzPzogUGFydGlhbDxJbnB1dEV2ZW50cz47XHJcbiAgaWNvbj86IHN0cmluZztcclxuICBwYXJzZT8odmFsdWU6IHVua25vd24pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXh0RmllbGQocHJvcHM6IFRleHRGaWVsZFByb3BzKSB7XHJcbiAgY29uc3QgeyB2YWx1ZSwgcGFyc2UgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8bGFiZWxcclxuICAgICAgY2xhc3M9XCJtZGMtdGV4dC1maWVsZCBtZGMtdGV4dC1maWVsZC0tZnVsbHdpZHRoIG1kYy10ZXh0LWZpZWxkLS1maWxsZWQgbWRjLXRleHQtZmllbGQtLXdpdGgtdHJhaWxpbmctaWNvblwiXHJcbiAgICAgIHsuLi5wcm9wcy5ldmVudHN9XHJcbiAgICA+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwibWRjLXRleHQtZmllbGRfX3JpcHBsZVwiPjwvc3Bhbj5cclxuXHJcbiAgICAgIDxzcGFuIGlkPVwibGFiZWxcIiBjbGFzcz1cIm1kYy1mbG9hdGluZy1sYWJlbFwiPlxyXG4gICAgICAgIHtwcm9wcy5sYWJlbH1cclxuICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibGFiZWxcIlxyXG4gICAgICAgIGNsYXNzPVwibWRjLXRleHQtZmllbGRfX2lucHV0XCJcclxuICAgICAgICB0eXBlPXtwcm9wcy50eXBlIHx8IFwidGV4dFwifVxyXG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICBrZXl1cD17ZGVmYXVsdFVwZGF0ZX1cclxuICAgICAgICBjaGFuZ2U9e2RlZmF1bHRVcGRhdGV9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICB7cHJvcHMuaWNvbiAmJiAoXHJcbiAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBtZGMtdGV4dC1maWVsZF9faWNvbiBtZGMtdGV4dC1maWVsZF9faWNvbi0tdHJhaWxpbmdcIj5cclxuICAgICAgICAgIGV2ZW50XHJcbiAgICAgICAgPC9pPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJtZGMtbGluZS1yaXBwbGVcIj48L3NwYW4+XHJcbiAgICAgIHtNRENUZXh0RmllbGR9XHJcbiAgICA8L2xhYmVsPlxyXG4gICk7XHJcblxyXG4gIGZ1bmN0aW9uIGRlZmF1bHRVcGRhdGUoZSkge1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiBcInVwZGF0ZVwiIGluIHZhbHVlKSB7XHJcbiAgICAgIHZhbHVlLnVwZGF0ZShcclxuICAgICAgICB0eXBlb2YgcGFyc2UgPT09IFwiZnVuY3Rpb25cIiA/IHBhcnNlKGUudGFyZ2V0LnZhbHVlKSA6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gSW5wdXQocHJvcHM6IElucHV0UHJvcHMpIHtcclxuLy8gICAgIGNvbnN0IHsgbGFiZWwsIHJlYWRvbmx5LCB2YWx1ZSwgYXV0b2ZvY3VzLCB0eXBlLCAuLi5jc3MgfSA9IHByb3BzIHx8IHtcclxuLy8gICAgICAgICByZWFkb25seTogZmFsc2UsXHJcbi8vICAgICAgICAgbGFiZWw6IFwiXCIsXHJcbi8vICAgICAgICAgY3NzOiBcIlwiLFxyXG4vLyAgICAgICAgIGF1dG9mb2N1czogZmFsc2UsXHJcbi8vICAgICAgICAgdmFsdWU6IG51bGwsXHJcbi8vICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbi8vICAgICB9O1xyXG4vLyAgICAgY29uc3QgaWQgPSBcIl9fXCIgKyBNYXRoLnJhbmRvbSgpO1xyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8RnJhZ21lbnQ+XHJcbi8vICAgICAgICAgICAgIDxkaXZcclxuLy8gICAgICAgICAgICAgICAgIGNsYXNzPXtbXCJtZGMtdGV4dC1maWVsZFwiLCBcInRleHQtZmllbGRcIiwgXCJtZGMtcmlwcGxlLXVwZ3JhZGVkXCJdfVxyXG4vLyAgICAgICAgICAgICAgICAgey4uLmNzc31cclxuLy8gICAgICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgICAgICAgPGlucHV0XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdHlwZT17cHJvcHMudHlwZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBhdXRvZm9jdXM9e2F1dG9mb2N1c31cclxuLy8gICAgICAgICAgICAgICAgICAgICByZWFkb25seT17cmVhZG9ubHl9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgaWQ9e2lkfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWRjLXRleHQtZmllbGRfX2lucHV0XCJcclxuLy8gICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAga2V5dXA9e3VwZGF0ZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBjaGFuZ2U9e3VwZGF0ZX1cclxuLy8gICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJtZGMtZmxvYXRpbmctbGFiZWxcIiBmb3I9e2lkfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbi8vICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4vLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kYy1saW5lLXJpcHBsZVwiIC8+XHJcbi8vICAgICAgICAgICAgICAgICB7TURDUmlwcGxlfVxyXG4vLyAgICAgICAgICAgICAgICAge01EQ1RleHRGaWVsZH1cclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgIDxwXHJcbi8vICAgICAgICAgICAgICAgICBjbGFzcz1cIm1kYy10ZXh0LWZpZWxkLWhlbHBlci10ZXh0IG1kYy10ZXh0LWZpZWxkLWhlbHBlci10ZXh0LS1wZXJzaXN0ZW50IG1kYy10ZXh0LWZpZWxkLWhlbHBlci10ZXh0LS12YWxpZGF0aW9uLW1zZ1wiXHJcbi8vICAgICAgICAgICAgICAgICBpZD17aWQgKyBcIl9oZWxwZXJfdGV4dFwifVxyXG4vLyAgICAgICAgICAgICA+PC9wPlxyXG4vLyAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbi8vICAgICApO1xyXG5cclxuLy8gICAgIGZ1bmN0aW9uIHVwZGF0ZShlKSB7XHJcbi8vICAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlLnVwZGF0ZSkge1xyXG4vLyAgICAgICAgICAgICB2YWx1ZS51cGRhdGUoZS50YXJnZXQudmFsdWUpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG4iLCJpbXBvcnQgdHBsIGZyb20gXCJnbG93LmpzXCI7XHJcbmltcG9ydCB7IExpc3QgfSBmcm9tIFwiZ2xvdy5qcy9jb21wb25lbnRzXCI7XHJcbmltcG9ydCBJZiBmcm9tIFwiZ2xvdy5qcy9jb21wb25lbnRzL2lmXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIi4uLy4uLy4uL211dGFibC5qc1wiO1xyXG5pbXBvcnQgeyBFeHByZXNzaW9uIH0gZnJvbSBcIi4uLy4uLy4uL211dGFibC5qcy9saWIvb2JzZXJ2YWJsZS5qc1wiO1xyXG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB0aW1lVW5pdCA9IDE1O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhvdXJDb2x1bW5zOiBudW1iZXJbXSA9IG5ldyBBcnJheSgyNCk7XHJcbmZvciAobGV0IGggPSAwOyBoIDwgaG91ckNvbHVtbnMubGVuZ3RoOyBoKyspIHtcclxuICAgIGhvdXJDb2x1bW5zW2hdID0gaDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1pbnV0ZUNvbHVtbnMgPSBnZXRNaW51dGVDZWxscyh0aW1lVW5pdCk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbWVUYWJsZURhdGE8VD4ge1xyXG4gICAgaWRlbnRpZmllcjogc3RyaW5nO1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIGNoaWxkcmVuPzogVGltZVRhYmxlRGF0YTxUPltdO1xyXG4gICAgdmFsdWVzKGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIpOiBUO1xyXG4gICAgYmdDb2xvcj8odmFsdWU6IFQpO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVGltZVRhYmxlUHJvcHM8VD4ge1xyXG4gICAgY2VsbENvbnRlbnRUZW1wbGF0ZShjZWxsOiBULCByb3c6IFRpbWVUYWJsZURhdGE8VD4pOiBhbnk7XHJcbiAgICByb3dzOiBUaW1lVGFibGVEYXRhPFQ+W107XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVGltZVRhYmxlUm93PFQ+IHtcclxuICAgIGRhdGE6IFRpbWVUYWJsZURhdGE8VD47XHJcbiAgICBkZXB0aDogbnVtYmVyO1xyXG4gICAgaXNMZWFmOiBib29sZWFuO1xyXG4gICAgdmlzaWJsZTogRXhwcmVzc2lvbjxib29sZWFuPjtcclxuICAgIHBhcmVudD86IFRpbWVUYWJsZVJvdzxUPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGltZVRhYmxlPFQ+KHByb3BzOiBUaW1lVGFibGVQcm9wczxUPikge1xyXG4gICAgY29uc3QgeyBjZWxsQ29udGVudFRlbXBsYXRlIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IGNvbGxhcHNlZCA9IG5ldyBTdG9yZTxUaW1lVGFibGVSb3c8VD5bXT4oW10pO1xyXG4gICAgY29uc3Qgcm93cyA9IGZsYXR0ZW4ocHJvcHMucm93cywgY29sbGFwc2VkKTtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IG5ldyBTdG9yZTxUaW1lU2VsZWN0aW9uPihudWxsKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvbS10aW1lLXRhYmxlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzcz1cInJvbS10aW1lLXRhYmxlX19sb2FkZXJcIiBJZj1cImlzTG9hZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvbS10aW1lLXRhYmxlX19sb2FkZXJfX2NvbnRlbnRcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBJZj1cInRpbWVVbml0JCB8IGFzeW5jIGFzIHRpbWVVbml0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwicm9tLXRpbWUtdGFibGVcIlxyXG4gICAgICAgICAgICAgICAgY2xpY2s9e3RpbWVUYWJsZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgbmdDbGFzcz1cInsncm9tLXRpbWUtdGFibGUtLWxvYWRpbmcnOiBpc0xvYWRpbmd9XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvbS10aW1lLXRhYmxlLWNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb20tdGltZS10YWJsZS1wb3NpdGlvbl9faGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicm9tLXRpbWUtdGFibGUtcG9zaXRpb25fX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5sYWJlbH0gKHtyb3dzLmxlbmd0aH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRpbWVVbml0cyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0IHNvdXJjZT17cm93c30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsocm93OiBUaW1lVGFibGVSb3c8VD4pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJZiBjb25kaXRpb249e3Jvdy52aXNpYmxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWYgY29uZGl0aW9uPXtyb3cuZGVwdGggPT09IDB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm9tLXRpbWUtdGFibGUtcm93LS1zZXBhcmF0b3JcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyb20tdGltZS10YWJsZS1wb3NpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlX2Rpc3BsYXk9XCJyb3cudmlzaWJsZSA/IG51bGwgOiAnbm9uZSdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWlkZW50aWZpZXI9e3Jvdy5kYXRhLmlkZW50aWZpZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyb20tdGltZS10YWJsZS1wb3NpdGlvbl9fY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW4tbGVmdDogXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgrcm93LmRlcHRoICogMTggKyAyNCkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWYgY29uZGl0aW9uPXshcm93LmlzTGVhZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwibWFyZ2luOiBhdXRvIGF1dG8gYXV0byAtMjRweDtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbGxhcHNlZC5saWZ0KChsKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbC5pbmNsdWRlcyhyb3cpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImtleWJvYXJkX2Fycm93X3JpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwia2V5Ym9hcmRfYXJyb3dfZG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JZj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuZGF0YS5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JZj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvbS10aW1lLXRhYmxlLXJvdy0tc2VwYXJhdG9yXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxMaXN0IHNvdXJjZT17aG91ckNvbHVtbnN9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsoaG91cikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm9tLXRpbWUtdGFibGUtY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm9tLXRpbWUtdGFibGUtY29sdW1uX19ob3VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ByZXBlbmRaZXJvcyhob3VyKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvbS10aW1lLXRhYmxlLWNvbHVtbl9fbWludXRlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0IHNvdXJjZT17bWludXRlQ29sdW1uc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsobWluKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb20tdGltZS10YWJsZS1jb2x1bW5fX21pbnV0ZXNfX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21pbiA/IHByZXBlbmRaZXJvcyhtaW4pIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3Qgc291cmNlPXtyb3dzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHJvdykgPT4gPFJvdyBob3VyPXtob3VyfSByb3c9e3Jvd30gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm9tLXRpbWUtdGFibGUtcm93LS1zZXBhcmF0b3JcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbiAgICBmdW5jdGlvbiB0aW1lVGFibGVDbGljayhldnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICBjb25zdCB7IHRhcmdldCB9ID0gZXZ0O1xyXG4gICAgICAgIGlmIChpc1RhZyh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNlbGw6IEhUTUxFbGVtZW50ID0gdGFyZ2V0LmNsb3Nlc3QoXCIucm9tLXRpbWUtdGFibGUtY2VsbFwiKTtcclxuICAgICAgICAgICAgaWYgKGNlbGwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgaG91ciwgaWRlbnRpZmllciB9ID0gY2VsbC5wYXJlbnRFbGVtZW50LmRhdGFzZXQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IG1pbnV0ZSB9ID0gY2VsbC5kYXRhc2V0O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWludXRlT2Zmc2V0ID0gK2hvdXIgKiA2MCArICttaW51dGU7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RDZWxsKGlkZW50aWZpZXIsIG1pbnV0ZU9mZnNldCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qgcm93SGVhZGVyOiBIVE1MRWxlbWVudCA9IHRhcmdldC5jbG9zZXN0KFxyXG4gICAgICAgICAgICAgICAgXCIucm9tLXRpbWUtdGFibGUtcG9zaXRpb25cIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAocm93SGVhZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlkZW50aWZpZXIgfSA9IHJvd0hlYWRlci5kYXRhc2V0O1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm93ID0gcm93cy5maW5kKChuKSA9PiBuLmRhdGEuaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcik7XHJcbiAgICAgICAgICAgICAgICBpZiAocm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VkLnVwZGF0ZSgobCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpZHggPSBsLmluZGV4T2Yocm93KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlkeCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbC5wdXNoKHJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhY2s6IFRpbWVUYWJsZURhdGE8VD5bXSA9IFtyb3cuZGF0YV07XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyID0gc3RhY2sucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHsgY2hpbGRyZW5JZGVudGlmaWVycyB9ID0gY3VycjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGNoaWxkcmVuSWRlbnRpZmllcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IGNoaWxkVmlzaWJsZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY3Vyci52aXNpYmxlICYmIGN1cnIubW9kZSAhPT0gXCJjb2xsYXBzZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGZvciAoY29uc3QgY2hpbGRJZGVudGlmaWVyIG9mIGNoaWxkcmVuSWRlbnRpZmllcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCBjaGlsZCA9IGZpbmRSb3coZGF0YVJvd3MsIGNoaWxkSWRlbnRpZmllcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY2hpbGQudmlzaWJsZSA9IGNoaWxkVmlzaWJsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBzdGFjay5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCByb3c6IEhUTUxFbGVtZW50ID0gdGFyZ2V0LmNsb3Nlc3QoXCIucm9tLXRpbWUtdGFibGUtcm93XCIpO1xyXG4gICAgICAgICAgICBpZiAocm93KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGhvdXIsIGlkZW50aWZpZXIgfSA9IHJvdy5kYXRhc2V0O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgb2Zmc2V0WCB9ID0gZXZ0O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sdW1uSW5kZXggPVxyXG4gICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoKCtob3VyICogNjApIC8gdGltZVVuaXQpICtcclxuICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKG9mZnNldFggLyA0MCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWludXRlT2Zmc2V0ID0gY29sdW1uSW5kZXggKiB0aW1lVW5pdDtcclxuICAgICAgICAgICAgICAgIHNlbGVjdENlbGwoaWRlbnRpZmllciwgbWludXRlT2Zmc2V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaXNUYWcodGFyZ2V0OiBhbnkpOiB0YXJnZXQgaXMgSFRNTEVsZW1lbnQge1xyXG4gICAgICAgICAgICBpZiAoIXRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB7IGNsYXNzTGlzdCB9ID0gZWxlbWVudDtcclxuICAgICAgICAgICAgcmV0dXJuIGNsYXNzTGlzdCAmJiAhIWNsYXNzTGlzdC5jb250YWlucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNlbGVjdENlbGwocm93SWRlbnRpZmllcjogc3RyaW5nLCBtaW51dGVPZmZzZXQ6IG51bWJlcikge1xyXG4gICAgICAgICAgICBjb25zdCBzZWw6IFRpbWVTZWxlY3Rpb24gPSBzZWxlY3Rpb24ucGVlaygoZSkgPT4gZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFNlbGVjdGlvbjogVGltZVNlbGVjdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgIHJvd0lkZW50aWZpZXIsXHJcbiAgICAgICAgICAgICAgICBmcm9tVGltZToge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbnV0ZU9mZnNldCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0b1RpbWU6IHtcclxuICAgICAgICAgICAgICAgICAgICBtaW51dGVPZmZzZXQ6IG1pbnV0ZU9mZnNldCArIHRpbWVVbml0LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGlmICghc2VsIHx8IHNlbC5yb3dJZGVudGlmaWVyICE9PSByb3dJZGVudGlmaWVyKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24udXBkYXRlKHRhcmdldFNlbGVjdGlvbik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGZyb21UaW1lLCB0b1RpbWUgfSA9IHNlbDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgaXNUaW1lUmFuZ2VPdmVybGFwcGluZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlT2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW51dGVPZmZzZXQgKyB0aW1lVW5pdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbVRpbWUubWludXRlT2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b1RpbWUubWludXRlT2Zmc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uLnVwZGF0ZShudWxsKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd0lkZW50aWZpZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb21UaW1lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW51dGVPZmZzZXQ6IE1hdGgubWluKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICtmcm9tVGltZS5taW51dGVPZmZzZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlT2Zmc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b1RpbWU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZU9mZnNldDogTWF0aC5tYXgoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgK3RvVGltZS5taW51dGVPZmZzZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlT2Zmc2V0ICsgdGltZVVuaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW50ZXJmYWNlIFJvd1Byb3BzIHtcclxuICAgICAgICByb3c6IFRpbWVUYWJsZVJvdzxUPjtcclxuICAgICAgICBob3VyOiBudW1iZXI7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBSb3cocHJvcHM6IFJvd1Byb3BzKSB7XHJcbiAgICAgICAgY29uc3QgeyByb3csIGhvdXIgfSA9IHByb3BzO1xyXG4gICAgICAgIGNvbnN0IGh2ID0gaGFzVmFsdWVzKHJvdywgaG91cik7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPElmIGNvbmRpdGlvbj17cm93LnZpc2libGV9PlxyXG4gICAgICAgICAgICAgICAgPElmIGNvbmRpdGlvbj17cm93LmRlcHRoID09PSAwfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm9tLXRpbWUtdGFibGUtcm93LS1zZXBhcmF0b3JcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvSWY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1ob3VyPXtob3VyfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtaWRlbnRpZmllcj17cm93LmRhdGEuaWRlbnRpZmllcn1cclxuICAgICAgICAgICAgICAgICAgICAvLyBzdHlsZT17dmlzaWJsZS5saWZ0KChiKSA9PiBiICYmIFwiZGlzcGxheTogbm9uZVwiKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz17W1wicm9tLXRpbWUtdGFibGUtcm93XCJdfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb249e2lzQ29sdW1uU2VsZWN0ZWQocm93LmRhdGEsIGhvdXIpLmxpZnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY3MpID0+IGNzIHx8IGh2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdCBzb3VyY2U9e21pbnV0ZUNvbHVtbnN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhtaW51dGUpID0+IDxDZWxsIHsuLi5wcm9wc30gbWludXRlPXttaW51dGV9IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JZj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0lmPlxyXG4gICAgICAgICAgICAvLyAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAvLyAgICAgSWY9XCJcclxuICAgICAgICAgICAgLy8gICAgICAgICByb3cudmlzaWJsZSAmJlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICgoaXNDb2x1bW5TZWxlY3RlZFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB8IGFwcGx5OiBzZWxlY3Rpb246cm93LmlkZW50aWZpZXI6aG91cikgfHxcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgKGhhc1ZhbHVlcyB8IGFwcGx5OiByb3dbaG91cl06bWludXRlQ29sdW1ucykpXHJcbiAgICAgICAgICAgIC8vICAgICBcIlxyXG4gICAgICAgICAgICAvLyA+XHJcbiAgICAgICAgICAgIC8vIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNDb2x1bW5TZWxlY3RlZChyb3c6IFRpbWVUYWJsZURhdGE8VD4sIGhvdXI6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGV4cHIgPSBzZWxlY3Rpb24ubGlmdCgoc2VsKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc2VsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJvdy5pZGVudGlmaWVyICE9PSBzZWwucm93SWRlbnRpZmllcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB7IGZyb21UaW1lLCB0b1RpbWUgfSA9IHNlbDtcclxuICAgICAgICAgICAgY29uc3QgdGltZU9mZnNldCA9IGhvdXIgKiA2MDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBpc1RpbWVSYW5nZU92ZXJsYXBwaW5nKFxyXG4gICAgICAgICAgICAgICAgdGltZU9mZnNldCxcclxuICAgICAgICAgICAgICAgIHRpbWVPZmZzZXQgKyA2MCxcclxuICAgICAgICAgICAgICAgIGZyb21UaW1lLm1pbnV0ZU9mZnNldCxcclxuICAgICAgICAgICAgICAgIHRvVGltZS5taW51dGVPZmZzZXRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNDZWxsU2VsZWN0ZWQoXHJcbiAgICAgICAgcm93OiBUaW1lVGFibGVSb3c8VD4sXHJcbiAgICAgICAgaG91cjogbnVtYmVyLFxyXG4gICAgICAgIG1pbnV0ZTogbnVtYmVyLFxyXG4gICAgICAgIHNlbDogVGltZVNlbGVjdGlvblxyXG4gICAgKSB7XHJcbiAgICAgICAgaWYgKCFzZWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICByb3cuZGF0YS5pZGVudGlmaWVyID09IHNlbC5yb3dJZGVudGlmaWVyICYmXHJcbiAgICAgICAgICAgIGlzVGltZUluU2VsZWN0aW9uKHsgbWludXRlT2Zmc2V0OiBob3VyICogNjAgKyBtaW51dGUgfSwgc2VsKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFzVmFsdWVzKHJvdzogVGltZVRhYmxlUm93PFQ+LCBob3VyOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICBmb3IgKGNvbnN0IG0gb2YgbWludXRlQ29sdW1ucykge1xyXG4gICAgICAgICAgICBpZiAocm93LmRhdGEudmFsdWVzKGhvdXIsIG0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaW50ZXJmYWNlIENlbGxQcm9wcyB7XHJcbiAgICAgICAgcm93OiBUaW1lVGFibGVSb3c8VD47XHJcbiAgICAgICAgaG91cjogbnVtYmVyO1xyXG4gICAgICAgIG1pbnV0ZTogbnVtYmVyO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gQ2VsbChwcm9wczogQ2VsbFByb3BzKSB7XHJcbiAgICAgICAgY29uc3QgeyByb3csIGhvdXIsIG1pbnV0ZSB9ID0gcHJvcHM7XHJcbiAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IHNlbGVjdGlvbi5saWZ0KChzZWwpID0+XHJcbiAgICAgICAgICAgIGlzQ2VsbFNlbGVjdGVkKHJvdywgaG91ciwgbWludXRlLCBzZWwpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBjZWxsID0gcm93LmRhdGEudmFsdWVzKGhvdXIsIG1pbnV0ZSk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9e1tcclxuICAgICAgICAgICAgICAgICAgICBcInJvbS10aW1lLXRhYmxlLWNlbGxcIixcclxuICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkLmxpZnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChiKSA9PiBiICYmIFwicm9tLXRpbWUtdGFibGUtY2VsbC0tc2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e2lzU2VsZWN0ZWQubGlmdCgoYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJnQ29sb3IgPSByb3cuZGF0YS5iZ0NvbG9yICYmIHJvdy5kYXRhLmJnQ29sb3IoY2VsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFiZ0NvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJjb2xvcjogd2hpdGVcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiYmFja2dyb3VuZC1jb2xvcjogXCIgKyBiZ0NvbG9yO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICBkYXRhLW1pbnV0ZT17bWludXRlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInJvbS10aW1lLXRhYmxlLWNlbGxfX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y2VsbENvbnRlbnRUZW1wbGF0ZShjZWxsLCByb3cuZGF0YSl9XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE1pbnV0ZUNlbGxzKHB0dTogbnVtYmVyKTogbnVtYmVyW10ge1xyXG4gICAgY29uc3QgcmVzdWx0OiBudW1iZXJbXSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2MDsgaSArPSBwdHUpIHtcclxuICAgICAgICByZXN1bHQucHVzaChpKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZXBlbmRaZXJvcyh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIChcIjAwXCIgKyB2YWx1ZSkuc2xpY2UoLTIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBUaW1lVW5pdHMoKSB7XHJcbiAgICByZXR1cm4gPHNwYW4+PC9zcGFuPjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFRpbWUge1xyXG4gICAgbWludXRlT2Zmc2V0OiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBUaW1lU2VsZWN0aW9uIHtcclxuICAgIHJvd0lkZW50aWZpZXI6IHN0cmluZztcclxuICAgIGZyb21UaW1lOiBUaW1lO1xyXG4gICAgdG9UaW1lOiBUaW1lO1xyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBpc0NvbHVtblNlbGVjdGVkKFxyXG4vLyAgICAgc2VsZWN0aW9uOiBUaW1lU2VsZWN0aW9uLFxyXG4vLyAgICAgcm93SWRlbnRpZmllcjogc3RyaW5nLFxyXG4vLyAgICAgaG91cjogbnVtYmVyXHJcbi8vICkge1xyXG4vLyAgICAgaWYgKCFzZWxlY3Rpb24pIHtcclxuLy8gICAgICAgICByZXR1cm4gZmFsc2U7XHJcbi8vICAgICB9XHJcbi8vICAgICBpZiAocm93SWRlbnRpZmllciAhPT0gc2VsZWN0aW9uLnJvd0lkZW50aWZpZXIpIHtcclxuLy8gICAgICAgICByZXR1cm4gZmFsc2U7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgY29uc3QgeyBmcm9tVGltZSwgdG9UaW1lIH0gPSBzZWxlY3Rpb247XHJcbi8vICAgICBjb25zdCB0aW1lT2Zmc2V0ID0gaG91ciAqIDYwO1xyXG5cclxuLy8gICAgIHJldHVybiBpc1RpbWVSYW5nZU92ZXJsYXBwaW5nKFxyXG4vLyAgICAgICAgIHRpbWVPZmZzZXQsXHJcbi8vICAgICAgICAgdGltZU9mZnNldCArIDYwLFxyXG4vLyAgICAgICAgIGZyb21UaW1lLm1pbnV0ZU9mZnNldCxcclxuLy8gICAgICAgICB0b1RpbWUubWludXRlT2Zmc2V0XHJcbi8vICAgICApO1xyXG4vLyB9O1xyXG5cclxuZnVuY3Rpb24gaXNUaW1lUmFuZ2VPdmVybGFwcGluZyhcclxuICAgIHgxOiBudW1iZXIsXHJcbiAgICB5MTogbnVtYmVyLFxyXG4gICAgeDI6IG51bWJlcixcclxuICAgIHkyOiBudW1iZXJcclxuKSB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgoeDEsIHgyKSA8IE1hdGgubWluKHkxLCB5Mik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzVGltZUluU2VsZWN0aW9uKHQxOiBUaW1lLCBzMTogVGltZVNlbGVjdGlvbikge1xyXG4gICAgY29uc3QgeyBtaW51dGVPZmZzZXQgfSA9IHQxO1xyXG4gICAgaWYgKG1pbnV0ZU9mZnNldCA8IHMxLmZyb21UaW1lLm1pbnV0ZU9mZnNldCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChtaW51dGVPZmZzZXQgPj0gczEudG9UaW1lLm1pbnV0ZU9mZnNldCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmbGF0dGVuPFQ+KFxyXG4gICAgcm93czogVGltZVRhYmxlRGF0YTxUPltdLFxyXG4gICAgY29sbGFwc2VkOiBTdG9yZTxUaW1lVGFibGVSb3c8VD5bXT5cclxuKSB7XHJcbiAgICBjb25zdCBzdGFjazogW251bWJlciwgVGltZVRhYmxlRGF0YTxUPiwgVGltZVRhYmxlUm93PFQ+P11bXSA9IHJldmVyc2UoXHJcbiAgICAgICAgcm93c1xyXG4gICAgKS5tYXAoKHIpID0+IFswLCByLCBudWxsXSk7XHJcbiAgICBjb25zdCByZXN1bHQ6IFRpbWVUYWJsZVJvdzxUPltdID0gW107XHJcblxyXG4gICAgd2hpbGUgKHN0YWNrLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBbZGVwdGgsIGN1cnIsIHBhcmVudF0gPSBzdGFjay5wb3AoKTtcclxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBjdXJyO1xyXG4gICAgICAgIGNvbnN0IHJvdzogVGltZVRhYmxlUm93PFQ+ID0ge1xyXG4gICAgICAgICAgICBkZXB0aCxcclxuICAgICAgICAgICAgaXNMZWFmOiAhY2hpbGRyZW4gfHwgY2hpbGRyZW4ubGVuZ3RoID09IDAsXHJcbiAgICAgICAgICAgIGRhdGE6IGN1cnIsXHJcbiAgICAgICAgICAgIHBhcmVudCxcclxuICAgICAgICAgICAgdmlzaWJsZTogY29sbGFwc2VkLmxpZnQoKGNvbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHAgPSBwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAocCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2wuaW5jbHVkZXMocCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwID0gcC5wYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXN1bHQucHVzaChyb3cpO1xyXG4gICAgICAgIGlmIChjaGlsZHJlbilcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiByZXZlcnNlKGNoaWxkcmVuKSkge1xyXG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChbZGVwdGggKyAxLCBjaGlsZCwgcm93XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXZlcnNlPFQ+KGFycjogVFtdKTogVFtdIHtcclxuICAgIGNvbnN0IHJlc3VsdDogVFtdID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKGFycltpXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG4iLCJleHBvcnQgdHlwZSBHcm91cDxUPiA9IHsga2V5OiBzdHJpbmc7IGl0ZW1zOiBUW10gfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdyb3VwQnk8VCwgVSBleHRlbmRzIEdyb3VwPFQ+PihcclxuICAgIGFycjogVFtdLFxyXG4gICAgc2VsZWN0b3I6IChpdGVtOiBUKSA9PiBzdHJpbmcsXHJcbiAgICBjb25zdHJ1Y3Q6IChrOiBzdHJpbmcsIHQ6IFQpID0+IFVcclxuKTogVVtdO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBncm91cEJ5PFQ+KFxyXG4gICAgYXJyOiBUW10sXHJcbiAgICBzZWxlY3RvcjogKGl0ZW06IFQpID0+IHN0cmluZ1xyXG4pOiBHcm91cDxUPltdO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBncm91cEJ5PFQsIFUgZXh0ZW5kcyBHcm91cDxUPj4oXHJcbiAgICBhcnI6IFRbXSxcclxuICAgIHNlbGVjdG9yOiAoaXRlbTogVCkgPT4gc3RyaW5nLFxyXG4gICAgY29uc3RydWN0PzogKGs6IHN0cmluZywgdDogVCkgPT4gVVxyXG4pIHtcclxuICAgIGNvbnN0IGdyb3VwczogYW55W10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgYXJyKSB7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gc2VsZWN0b3IoaXRlbSk7XHJcbiAgICAgICAgY29uc3QgZ3JvdXAgPSBmaW5kR3JvdXAoa2V5KTtcclxuICAgICAgICBpZiAoZ3JvdXApIHtcclxuICAgICAgICAgICAgZ3JvdXAuaXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNvbnN0cnVjdCkge1xyXG4gICAgICAgICAgICBncm91cHMucHVzaChjb25zdHJ1Y3Qoa2V5LCBpdGVtKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZ3JvdXBzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAga2V5LFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtpdGVtXSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBncm91cHM7XHJcblxyXG4gICAgZnVuY3Rpb24gZmluZEdyb3VwKGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBncm91cCBvZiBncm91cHMpIHtcclxuICAgICAgICAgICAgaWYgKGdyb3VwLmtleSA9PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBncm91cDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG4iLCJjb25zdCBkZWZhdWx0UmVxdWVzdEluaXQ6IFJlcXVlc3RJbml0ID0ge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLypcIixcclxuICAgICAgICBcImFjY2VwdC1sYW5ndWFnZVwiOiBcIm5sLGVuO3E9MC45LGVuLVVTO3E9MC44LGFyO3E9MC43XCIsXHJcbiAgICAgICAgXCJjYWNoZS1jb250cm9sXCI6IFwibm8tY2FjaGVcIixcclxuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOFwiLFxyXG4gICAgICAgIHByYWdtYTogXCJuby1jYWNoZVwiLFxyXG4gICAgfSxcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIG1vZGU6IFwiY29yc1wiLFxyXG4gICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEpzb24odXJsOiBzdHJpbmcsIGluaXQ6IFJlcXVlc3RJbml0ID0ge30pIHtcclxuICAgIHJldHVybiBmZXRjaCh1cmwsIHsgLi4uZGVmYXVsdFJlcXVlc3RJbml0LCAuLi5pbml0IH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHV0SnNvbih1cmw6IHN0cmluZywgZGF0YSwgaW5pdDogUmVxdWVzdEluaXQgPSB7fSkge1xyXG4gICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgIHJldHVybiBmZXRjaCh1cmwsIHsgLi4uZGVmYXVsdFJlcXVlc3RJbml0LCAuLi5pbml0LCBtZXRob2Q6IFwiUFVUXCIsIGJvZHkgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3N0SnNvbih1cmw6IHN0cmluZywgZGF0YSwgaW5pdDogUmVxdWVzdEluaXQgPSB7fSkge1xyXG4gICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgIHJldHVybiBmZXRjaCh1cmwsIHsgLi4uZGVmYXVsdFJlcXVlc3RJbml0LCAuLi5pbml0LCBtZXRob2Q6IFwiUE9TVFwiLCBib2R5IH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlSnNvbih1cmw6IHN0cmluZywgaW5pdDogUmVxdWVzdEluaXQgPSB7fSkge1xyXG4gICAgcmV0dXJuIGZldGNoKHVybCwgeyAuLi5kZWZhdWx0UmVxdWVzdEluaXQsIC4uLmluaXQsIG1ldGhvZDogXCJERUxFVEVcIiB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyByZW5kZXIsIERvbURyaXZlciB9IGZyb20gXCJnbG93LmpzXCI7XHJcbmltcG9ydCBBcHAgZnJvbSBcIi4vYXBwXCI7XHJcblxyXG5yZW5kZXIobmV3IERvbURyaXZlcihcIiNhcHBcIiksIEFwcCgpKTtcclxuIiwiaW1wb3J0IHRwbCBmcm9tIFwiZ2xvdy5qc1wiO1xyXG5pbXBvcnQgeyBNRENUZXh0RmllbGQgfSBmcm9tIFwiQG1hdGVyaWFsL3RleHRmaWVsZFwiO1xyXG5cclxuaW50ZXJmYWNlIExvZ2luUHJvcHMge1xyXG4gICAgY2xpY2soKTogYW55O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBMb2dpbihwcm9wczogTG9naW5Qcm9wcykge1xyXG4gICAgY29uc3QgeyBjbGljayB9ID0gcHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1jYXJkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImxvZ2luLWNhcmQgbWRjLWVsZXZhdGlvbi0tejNcIj5cclxuICAgICAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW46IDE2cHggMDtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IGxhYmVsPVwiVXNlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbjogMTZweCAwO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCJQYXNzd29yZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tY2FyZC10b29sYmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgdGFiaW5kZXg9XCItMVwiIGhyZWY9XCIuL2ZvcmdvdFwiIGNsYXNzPVwiZm9yZ290LXBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBmb3Jnb3QgcGFzc3dvcmQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s9e2NsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1kYy1idXR0b24tLXJhaXNlZCBtZGMtcmlwcGxlLXVwZ3JhZGVkIG1kYy1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGMtYnV0dG9uX19sYWJlbFwiPkxvZ2luPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJbnB1dFByb3BzIHtcclxuICAgIGxhYmVsPzogc3RyaW5nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBJbnB1dChwcm9wczogSW5wdXRQcm9wcykge1xyXG4gICAgY29uc3QgeyBsYWJlbCA9IFwiVW5uYW1lZFwiIH0gPSBwcm9wcyB8fCB7fTtcclxuICAgIGNvbnN0IGlkID0gXCJfXCIgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1kYy10ZXh0LWZpZWxkXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTtcIj5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwibWRjLXRleHQtZmllbGRfX2lucHV0XCIgaWQ9e2lkfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRjLWxpbmUtcmlwcGxlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9e2lkfSBjbGFzcz1cIm1kYy1mbG9hdGluZy1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICB7TURDVGV4dEZpZWxkfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2pzX2FwcF8wMDFcIl0gPSBzZWxmW1wid2VicGFja0NodW5ranNfYXBwXzAwMVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfbWF0ZXJpYWxfZHJhd2VyX2NvbXBvbmVudF9qcy1ub2RlX21vZHVsZXNfbWF0ZXJpYWxfbWVudS1zdXJmYWNlX2NvbXBvbmVuLTlkYTA4NlwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9