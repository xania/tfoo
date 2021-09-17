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
        { path: [""], component: _jennah_menu_card_main__WEBPACK_IMPORTED_MODULE_11__.MainMenuCard },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1kYzcxMTNlMi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlLHFCQUF1Qiw4REFBOEQ7Ozs7Ozs7Ozs7Ozs7O0FDQXBHLGlFQUFlLHFCQUF1Qiw4RUFBOEU7Ozs7Ozs7Ozs7Ozs7O0FDQXBILGlFQUFlLHFCQUF1Qiw0RUFBNEU7Ozs7Ozs7Ozs7Ozs7O0FDQWxILGlFQUFlLHFCQUF1Qix1REFBdUQ7Ozs7Ozs7Ozs7Ozs7O0FDQTdGLGlFQUFlLHFCQUF1QiwwRUFBMEU7Ozs7Ozs7Ozs7Ozs7O0FDQWhILGlFQUFlLHFCQUF1QixzRUFBc0U7Ozs7Ozs7Ozs7Ozs7O0FDQTVHLGlFQUFlLHFCQUF1Qix5RUFBeUU7Ozs7Ozs7Ozs7Ozs7O0FDQS9HLGlFQUFlLHFCQUF1Qix5RUFBeUU7Ozs7Ozs7Ozs7Ozs7O0FDQS9HLGlFQUFlLHFCQUF1QixpQ0FBaUM7Ozs7Ozs7Ozs7Ozs7OztBQ1F4RCxTQUFTLEdBQUcsQ0FBQyxLQUFlO0lBQ3pDLE9BQU87UUFDTCxNQUFNLEVBQU4sVUFBTyxNQUFlO1lBQ1osUUFBSSxHQUFZLEtBQUssS0FBakIsRUFBRSxLQUFLLEdBQUssS0FBSyxNQUFWLENBQVc7WUFDOUIsSUFBSSxJQUFJLElBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLFVBQVUsRUFBRTtnQkFDaEQsSUFBTSxTQUFPLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBRTNELElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQyxDQUFDO29CQUNmLElBQUksQ0FBQzt3QkFBRSxTQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzt3QkFDdEIsU0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDeEIsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsT0FBTyxTQUFPLENBQUM7YUFDaEI7aUJBQU07Z0JBQ0wsT0FBTyxNQUFNLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQzthQUMvQztRQUNILENBQUM7S0FDRixDQUFDO0FBQ0osQ0FBQztBQU9NLFNBQVMsSUFBSSxDQUFDLEtBQWdCO0lBQ25DLE9BQU87UUFDTCxNQUFNLEVBQU4sVUFBTyxNQUFlO1lBQ1osUUFBSSxHQUFrQixLQUFLLEtBQXZCLEVBQUUsSUFBSSxHQUFZLEtBQUssS0FBakIsRUFBRSxLQUFLLEdBQUssS0FBSyxNQUFWLENBQVc7WUFDcEMsSUFBSSxJQUFJLElBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLFVBQVUsRUFBRTtnQkFDaEQsSUFBTSxTQUFPLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBRXhELElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQyxDQUFDO29CQUNmLElBQUksQ0FBQzt3QkFBRSxTQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzt3QkFDdEIsU0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDeEIsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsT0FBTyxTQUFPLENBQUM7YUFDaEI7aUJBQU07Z0JBQ0wsT0FBTyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQzthQUM1QztRQUNILENBQUM7S0FDRixDQUFDO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q3NCO0FBT0g7QUFHTCxTQUFTLEVBQUUsQ0FDdEIsS0FBMkMsRUFDM0MsUUFBcUI7SUFFckIsSUFBSSwyREFBYyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRTtRQUNqQyxPQUFPLElBQUksbUJBQW1CLENBQzFCLEtBQUssQ0FBQyxTQUFTLEVBQ2Ysa0RBQVEsQ0FBQyxRQUFRLEVBQUUsZ0RBQVUsQ0FBQyxDQUNqQyxDQUFDO0tBQ0w7U0FBTTtRQUNILElBQUksS0FBSyxDQUFDLFNBQVM7WUFBRSxPQUFPLElBQUksc0RBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7O1lBQ3RELE9BQU8sSUFBSSxtREFBYSxFQUFFLENBQUM7S0FDbkM7QUFDTCxDQUFDO0FBRUQ7SUFDSSw2QkFDVyxJQUEyQixFQUMzQixTQUFzQjtRQUR0QixTQUFJLEdBQUosSUFBSSxDQUF1QjtRQUMzQixjQUFTLEdBQVQsU0FBUyxDQUFhO0lBQzlCLENBQUM7SUFFSixvQ0FBTSxHQUFOLFVBQU8sTUFBZTtRQUNsQixJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkMsSUFBSSxLQUFLLEdBQXFCLElBQUksQ0FBQztRQUNuQyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQyxPQUFPO1lBQzdCLGFBQVMsR0FBSyxJQUFJLFVBQVQsQ0FBVTtZQUMzQixJQUFJLE9BQU8sRUFBRTtnQkFDVCxLQUFLLEdBQUcsS0FBSyxJQUFJLG9EQUFVLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQ2pEO2lCQUFNLElBQUksS0FBSyxFQUFFO2dCQUNkLEtBQWdCLFVBQUssRUFBTCxlQUFLLEVBQUwsbUJBQUssRUFBTCxJQUFLLEVBQUU7b0JBQWxCLElBQU0sQ0FBQztvQkFDUixJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUU7d0JBQ1gsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO3FCQUNmO2lCQUNKO2dCQUNELEtBQUssR0FBRyxJQUFJLENBQUM7YUFDaEI7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU87WUFDSCxNQUFNO2dCQUNGLE9BQU8sS0FBSyxDQUFDO1lBQ2pCLENBQUM7WUFDRCxPQUFPO2dCQUNILElBQUksTUFBTSxJQUFJLE9BQU8sTUFBTSxDQUFDLFdBQVcsS0FBSyxVQUFVO29CQUNsRCxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3pCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQixDQUFDO1NBQ0osQ0FBQztJQUNOLENBQUM7SUFDTCwwQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEVzQjtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBRXBDLFNBQVMsUUFBUSxDQUFJLE1BQWUsRUFBRSxJQUFXO0lBQ3BELElBQU0sS0FBSyxHQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsSUFBTSxNQUFNLEdBQWdCLEVBQUUsQ0FBQztJQUUvQixPQUFPLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ3JCLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzVCLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDdkMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN2QjtTQUNKO2FBQU0sSUFBSSxPQUFPLElBQUksS0FBSyxVQUFVLEVBQUU7WUFDbkMsSUFBTSxFQUFFLEdBQVEsSUFBSSxDQUFDO1lBQ3JCLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3BDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdEI7YUFBTTtZQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsb0RBQVUsQ0FBQyxJQUFJLENBQWMsQ0FBQyxDQUFDO1NBQzlDO0tBQ0o7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBSUQsdUNBQXVDO0FBRXZDLHlCQUF5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCbUQ7QUFDaEM7QUFDUDtBQUU2QjtBQVEzRCxTQUFTLElBQUksQ0FBSSxLQUFtQixFQUFFLFNBQTRCO0lBQy9ELFVBQU0sR0FBSyxLQUFLLE9BQVYsQ0FBVztJQUV6QixTQUFTLFlBQVksQ0FBQyxNQUFTLEVBQUUsS0FBbUI7UUFDbEQsT0FBTyxrREFBUSxDQUFDLFNBQVMsRUFBRTtZQUN6Qix3REFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxtREFBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNO1lBQy9DLEVBQUUsS0FBSyxTQUFFLE9BQU8sV0FBRTtTQUNuQixDQUFDLENBQUM7UUFFSCxTQUFTLE9BQU87WUFDZCxJQUFNLEdBQUcsR0FBRyxLQUFLLEVBQUUsQ0FBQztZQUNwQixJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUU7Z0JBQ1osSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO29CQUN6QixNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDdkI7cUJBQU07b0JBQ0wsTUFBTSxDQUFDLEdBQUcsQ0FBQzt3QkFDVCxJQUFJLEVBQUUsUUFBUTt3QkFDZCxTQUFTLEVBQUUsVUFBQyxDQUFDLElBQUssUUFBQyxJQUFJLE1BQU0sRUFBWCxDQUFXO3FCQUM5QixDQUFDLENBQUM7aUJBQ0o7YUFDRjtRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsT0FBTztRQUNMLE1BQU0sRUFBTixVQUFPLE1BQWU7WUFDcEIsSUFBTSxLQUFLLEdBQXVCLEVBQUUsQ0FBQztZQUM3QixVQUFNLEdBQUssS0FBSyxPQUFWLENBQVc7WUFDekIsSUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3ZDLElBQU0sVUFBVSxHQUFHO2dCQUNqQixPQUFPO29CQUNMLEtBQW1CLFVBQUssRUFBTCxlQUFLLEVBQUwsbUJBQUssRUFBTCxJQUFLLEVBQUU7d0JBQXJCLElBQU0sSUFBSTt3QkFDTCxTQUFLLEdBQWUsSUFBSSxNQUFuQixFQUFFLFFBQVEsR0FBSyxJQUFJLFNBQVQsQ0FBVTt3QkFDakMsS0FBc0IsVUFBUSxFQUFSLHFCQUFRLEVBQVIsc0JBQVEsRUFBUixJQUFRLEVBQUU7NEJBQTNCLElBQU0sT0FBTzs0QkFDaEIsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO2dDQUNuQixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7NkJBQ25CO3lCQUNGO3dCQUNELEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztxQkFDakI7Z0JBQ0gsQ0FBQzthQUNGLENBQUM7WUFFRixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUN0QyxhQUFhLENBQUM7d0JBQ1osSUFBSSxFQUFFLFFBQVE7d0JBQ2QsS0FBSyxFQUFFLENBQUM7d0JBQ1IsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7cUJBQ2xCLENBQUMsQ0FBQztpQkFDSjtnQkFDRCxPQUFPLFVBQVUsQ0FBQzthQUNuQjtpQkFBTTtnQkFDTCxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQzthQUN0RDtZQUVELFNBQVMsYUFBYSxDQUFDLENBQW9CO2dCQUN6QyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO29CQUNiLFVBQU0sR0FBSyxDQUFDLE9BQU4sQ0FBTztvQkFDckIsV0FBVyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ25DO3FCQUFNLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7b0JBQ3RCLFVBQU0sR0FBWSxDQUFDLE9BQWIsRUFBRSxLQUFLLEdBQUssQ0FBQyxNQUFOLENBQU87b0JBQzVCLFdBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQzVCO3FCQUFNLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7b0JBQzlCLElBQU0sR0FBRyxHQUNQLE9BQU8sQ0FBQyxDQUFDLFNBQVMsS0FBSyxRQUFRO3dCQUM3QixDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7d0JBQ2IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZELCtEQUErRDtvQkFDL0QsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFO3dCQUNaLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDaEIsU0FBSyxHQUFlLElBQUksTUFBbkIsRUFBRSxRQUFRLEdBQUssSUFBSSxTQUFULENBQVU7d0JBQ2pDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQzt3QkFDaEIsd0RBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDdEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7cUJBQ3RCO2lCQUNGO3FCQUFNLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7b0JBQzdCLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3JCO3FCQUFNLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7b0JBQzVCLGtCQUFrQjtvQkFDbEIsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDMUIsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUM1QixLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztpQkFDbkI7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDckM7Z0JBRUQsU0FBUyxXQUFXLENBQUMsTUFBUyxFQUFFLEdBQVc7b0JBQ3pDLElBQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzdDLElBQU0sSUFBSSxHQUFxQjt3QkFDN0IsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLE1BQU07d0JBQ04sUUFBUSxFQUFFLHFEQUFXLENBQ25CLGtEQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQzs2QkFDdEMsR0FBRyxDQUFDLFVBQUMsUUFBUSxJQUFLLFFBQUM7NEJBQ2xCLE1BQU0sRUFBRSxTQUFTOzRCQUNqQixRQUFRO3lCQUNULENBQUMsRUFIaUIsQ0FHakIsQ0FBQzs2QkFDRixPQUFPLEVBQUUsQ0FDYjtxQkFDRixDQUFDO29CQUNGLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFFM0IsU0FBUyxLQUFLO3dCQUNaLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOzRCQUNyQyxJQUFNLE1BQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3RCLElBQUksTUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7Z0NBQzVCLE9BQU8sQ0FBQyxDQUFDOzZCQUNWO3lCQUNGO3dCQUNELE9BQU8sR0FBRyxDQUFDO29CQUNiLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxTQUFTLFVBQVUsQ0FBQyxRQUFhOzRDQUN0QixDQUFDO3dCQUNSLDhCQUE4Qjt3QkFDOUIsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNkLFVBQU0sR0FBc0IsSUFBSSxPQUExQixFQUFFLEtBQUssR0FBZSxJQUFJLE1BQW5CLEVBQUUsUUFBUSxHQUFLLElBQUksU0FBVCxDQUFVO3dCQUN6QyxJQUFJLE1BQU0sRUFBRTs0QkFDVixJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQUMsQ0FBQyxJQUFLLFFBQUMsS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFqQixDQUFpQixDQUFDLENBQUM7NEJBQ3pELElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtnQ0FDWCxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7Z0NBQ2hCLHdEQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7Z0NBQ3RCLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dDQUNuQixDQUFDLEVBQUUsQ0FBQzs2QkFDTDt5QkFDRjtrQ0FaTSxDQUFDOzs7b0JBQVYsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO2dDQUE1QixDQUFDO3dCQUFELENBQUM7cUJBYVQ7NENBQ1EsQ0FBQzt3QkFDUixJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzNCLElBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUFFLElBQUssU0FBRSxDQUFDLE1BQU0sS0FBSyxNQUFNLEVBQXBCLENBQW9CLENBQUMsQ0FBQzt3QkFDNUQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFOzRCQUNiLGFBQWEsQ0FBQztnQ0FDWixJQUFJLEVBQUUsUUFBUTtnQ0FDZCxLQUFLLEVBQUUsQ0FBQztnQ0FDUixNQUFNOzZCQUNQLENBQUMsQ0FBQzt5QkFDSjs2QkFBTSxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7NEJBQ3JCLDJCQUEyQjs0QkFDM0IsYUFBYSxDQUFDO2dDQUNaLElBQUksRUFBRSxNQUFNO2dDQUNaLElBQUksRUFBRSxLQUFLO2dDQUNYLEVBQUUsRUFBRSxDQUFDOzZCQUNOLENBQUMsQ0FBQzt5QkFDSjs2QkFBTTs0QkFDTCwyQkFBMkI7eUJBQzVCOztvQkFsQkgsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO2dDQUEvQixDQUFDO3FCQW1CVDtnQkFDSCxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7S0FDRixDQUFDO0FBQ0osQ0FBQztBQWFELFNBQVMsa0JBQWtCLENBQUksTUFBeUI7SUFDdEQsT0FBTyxVQUFDLEVBQW9CLElBQUssYUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBakIsQ0FBaUIsQ0FBQztBQUNyRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BMbUM7QUFDc0I7QUFDcEI7QUFDVDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ09YO0FBQ21DO0FBRXJELElBQU0sY0FBYyxHQUFHLEVBQUUsT0FBTyxnQkFBSSxDQUFDLEVBQUUsQ0FBQztBQUN4QztJQU1FLG1CQUFZLE1BQTRCO1FBSmpDLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLFdBQU0sR0FBeUQsRUFBRSxDQUFDO1FBQzFFLFFBQVUsR0FBZ0IsRUFBRSxDQUFDO1FBRzNCLElBQU0sR0FBRyxHQUNQLE9BQU8sTUFBTSxLQUFLLFFBQVE7WUFDeEIsQ0FBQyxDQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFpQjtZQUNqRCxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNSLE1BQU0sS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7U0FDM0M7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUNwQixDQUFDO0lBRUQsd0JBQUksR0FBSixVQUFRLE1BQStCO1FBQ3JDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsZ0NBQVksR0FBWixVQUFhLElBQWlCO1FBQzVCLE9BQU8sSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELCtCQUFXLEdBQVgsVUFBWSxHQUFZO1FBQ3RCLGlFQUFpRTtRQUNqRSx3Q0FBd0M7UUFFeEMsSUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUMzQixJQUFJLENBQUMsNkNBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3RDO2FBQU07WUFDTCxJQUFJLENBQUMsNkNBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1QjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELCtCQUFXLEdBQVgsVUFBWSxJQUFZLEVBQUUsS0FBaUM7UUFDekQsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPLGNBQWMsQ0FBQztRQUUxQixVQUFNLEdBQUssSUFBSSxPQUFULENBQVU7UUFFeEIsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLE1BQU0sQ0FBQyxFQUFFO1lBQ2hELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRTVDLE9BQU87WUFDTCxPQUFPO2dCQUNMLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDakQsQ0FBQztTQUNGLENBQUM7UUFFRixTQUFTLFlBQVksQ0FBQyxHQUFVO1lBQzlCLElBQUksT0FBTyxLQUFLLEtBQUssVUFBVSxFQUFFO2dCQUMvQixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDWjtpQkFBTTtnQkFDTCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3BCO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCwrQkFBVyxHQUFYLFVBQVksS0FBVTtRQUNwQixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsNkNBQVEsQ0FBQyxDQUFDO1FBQ2pDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDNUIsSUFBTSxXQUFTLEdBQUc7Z0JBQ2hCLFlBQVksRUFBWixVQUFhLElBQVU7b0JBQ3JCLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDekMsQ0FBQztnQkFDRCxPQUFPO29CQUNMLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDaEIsZUFBZSxDQUFDLEtBQUssRUFBRSxXQUFTLENBQUMsQ0FBQztnQkFDcEMsQ0FBQzthQUNGLENBQUM7WUFDRixTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2hDO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDO0lBRUQsaUNBQWEsR0FBYixVQUFjLElBQVksRUFBRSxJQUFnQztRQUMxRCxJQUFNLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBZ0IsQ0FBQztRQUNuRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFMUMsT0FBTztZQUNMLEtBQUs7Z0JBQ0gsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4QixDQUFDO1lBQ0QsTUFBTTtnQkFDSixPQUFPLE1BQU0sQ0FBQztZQUNoQixDQUFDO1lBQ0QsT0FBTztnQkFDTCxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDbkIsQ0FBQztTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQseUNBQXlDO0lBQ3pDLHdFQUF3RTtJQUN4RSxJQUFJO0lBRUosZ0NBQVksR0FBWixVQUFhLEtBQThCO1FBQ3pDLElBQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDM0IsQ0FBQyxDQUFDLEtBQUs7WUFDUCxDQUFDLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFlLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZCLE9BQU87WUFDTCxJQUFJLEVBQUosVUFBSyxLQUFjO2dCQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQWUsQ0FBQztZQUNuQyxDQUFDO1lBQ0QsT0FBTztnQkFDTCxPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN2QixDQUFDO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxtQ0FBZSxHQUFmLFVBQWdCLElBQVksRUFBRSxLQUFnQjtRQUM1QyxPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsb0NBQWdCLEdBQWhCLFVBQWlCLE1BQW1CLEVBQUUsU0FBaUI7UUFDckQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN6QixJQUFJLElBQUksR0FBRyxNQUFNLENBQUM7UUFDbEIsT0FBTyxJQUFJLEVBQUU7WUFDWCxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ3RCLE9BQU8sQ0FBQyxFQUFFLEVBQUU7Z0JBQ1YsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixJQUFJLEVBQUUsQ0FBQyxHQUFHLEtBQUssSUFBSSxJQUFJLEVBQUUsQ0FBQyxTQUFTLEtBQUssU0FBUyxFQUFFO29CQUNqRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3hCO2FBQ0Y7WUFDRCxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUN4QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELHNCQUFFLEdBQUYsVUFBRyxTQUFpQixFQUFFLEdBQWdCLEVBQUUsWUFBcUI7UUFBN0QsaUJBNENDO1FBM0NDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQ3RCLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUNqQixVQUFVLEdBQUcsS0FBSyxDQUFDO1FBRXJCLE9BQU8sQ0FBQyxFQUFFLEVBQUU7WUFDVixJQUFJLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxFQUFFLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRTtnQkFDOUIsSUFBSSxFQUFFLENBQUMsR0FBRyxLQUFLLEdBQUc7b0JBQUUsT0FBTyxFQUFFLENBQUM7cUJBQ3pCO29CQUNILFVBQVUsR0FBRyxJQUFJLENBQUM7b0JBQ2xCLE1BQU07aUJBQ1A7YUFDRjtTQUNGO1FBRUQsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQUMsS0FBSztnQkFDcEMsVUFBTSxHQUFLLEtBQUssT0FBVixDQUFXO2dCQUN6QixJQUFJLE1BQU0sRUFBRTtvQkFDVixJQUFJLFlBQVksR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBYyxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUNwRSxJQUFJLFlBQVksRUFBRTt3QkFDaEIsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDekIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO3FCQUN4QjtpQkFDRjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLEtBQUssR0FBRztZQUNWLFNBQVM7WUFDVCxHQUFHO1lBQ0gsWUFBWTtZQUNaLE9BQU87Z0JBQ0wsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFO29CQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN0QixPQUFPLElBQUksQ0FBQztpQkFDYjtnQkFDRCxPQUFPLEtBQUssQ0FBQztZQUNmLENBQUM7U0FDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsMEJBQU0sR0FBTixVQUFPLENBQVUsRUFBRSxHQUFTLEVBQUUsR0FBVztRQUN2QyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ25DLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFekIsSUFBSSxNQUFNLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxJQUFJLEdBQUcsS0FBSyxNQUFNLEVBQUU7WUFDbEIsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUNuQyxJQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFO2dCQUMzQixJQUFJLE9BQU8sR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzlCLElBQUksT0FBTyxLQUFLLEdBQUcsRUFBRTtvQkFDbkIsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7aUJBQ25DO2FBQ0Y7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN2QjtZQUNELElBQUksTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7WUFDL0IsV0FBVyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDNUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDL0IsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNoQztZQUNELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCwyQkFBTyxHQUFQO1FBQ0UsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFDaEMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFDekIsT0FBTyxDQUFDLEVBQUUsRUFBRTtZQUNWLElBQU0sQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQVksQ0FBQztZQUNwQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ1osQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ1o7U0FDRjtRQUVELE9BQU8sSUFBSSxDQUFDLDZDQUFRLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDOztLQTdORSw2Q0FBUTtBQStOWCxTQUFTLFdBQVcsQ0FBQyxJQUFlLEVBQUUsTUFBYzs7SUFDbEQsSUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLElBQU0sS0FBSztRQUNULEdBQUMsNkNBQVEsSUFBRyxFQUFpQjs4QkFDekIsWUFBTTtpQkFBVjtnQkFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDckIsQ0FBQzs7OztRQUNELGNBQVcsR0FBWDtZQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQztRQUN6RCxDQUFDO1FBQ0Qsa0JBQWUsR0FBZixVQUFnQixJQUFZLEVBQUUsS0FBOEI7WUFDMUQsSUFBTSxPQUFPLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzFELFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDekIsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQztRQUNELE9BQUksR0FBSixVQUFRLE1BQStCO1lBQ3JDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQixDQUFDO1FBQ0QsZ0JBQWEsR0FBYixVQUFjLElBQVksRUFBRSxJQUFTO1lBQ25DLElBQU0sT0FBTyxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFnQixDQUFDO1lBQ25FLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUVyQixJQUFNLFNBQVMsR0FBRztnQkFDaEIsT0FBTztnQkFDUCxZQUFZLEVBQVosVUFBYSxJQUFVO29CQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQzFDLENBQUM7Z0JBQ0QsT0FBTztvQkFDTCxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ25CLENBQUM7YUFDRixDQUFDO1lBQ0YsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3hCLElBQU0sT0FBTyxHQUFHO2dCQUNkLEtBQUs7b0JBQ0gsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDeEIsQ0FBQztnQkFDRCxNQUFNO29CQUNKLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFDRCxPQUFPO29CQUNMLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDakIsZUFBZSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDcEMsQ0FBQzthQUNGLENBQUM7WUFDRixPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDO1FBQ0QsZUFBWSxHQUFaLFVBQWEsS0FBZ0I7WUFDM0IsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFlLENBQUMsQ0FBQztZQUMxRCxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEIsSUFBTSxTQUFTLEdBQUc7Z0JBQ2hCLFFBQVE7Z0JBQ1IsWUFBWSxFQUFaLFVBQWEsSUFBVTtvQkFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO2dCQUNELE9BQU87b0JBQ0wsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNwQixDQUFDO2FBQ0YsQ0FBQztZQUNGLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUV4QixJQUFNLE9BQU8sR0FBRztnQkFDZCxJQUFJLEVBQUosVUFBSyxLQUFhO29CQUNoQixRQUFRLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDN0IsQ0FBQztnQkFDRCxPQUFPO29CQUNMLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDbEIsZUFBZSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDcEMsQ0FBQzthQUNGLENBQUM7WUFDRixPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDO1FBQ0QsY0FBVyxHQUFYLFVBQVksR0FBWTtZQUN0QiwyREFBMkQ7WUFDM0QsOEJBQThCO1lBQzlCLElBQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDMUMsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7Z0JBQzNCLEtBQUssQ0FBQyw2Q0FBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDMUM7aUJBQU07Z0JBQ0wsS0FBSyxDQUFDLDZDQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDaEM7WUFDRCxPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDO1FBQ0QsVUFBTyxHQUFQO1lBQ0UsZUFBZSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMvQixzRUFBc0U7WUFDdEUsb0NBQW9DO1lBQ3BDLE9BQU8sS0FBSyxDQUFDLDZDQUFRLENBQUMsQ0FBQyxDQUFDLG1CQUFtQjtRQUM3QyxDQUFDO1dBQ0YsQ0FBQztJQUVGLFNBQVMsV0FBVyxDQUFDLElBQTJCO1FBQzlDLElBQU0sT0FBTyxHQUFHLHNEQUFhLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNDLElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1Qjs7WUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsU0FBUyxZQUFZLENBQUMsU0FBb0I7UUFDeEMsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLDZDQUFRLENBQUMsQ0FBQztRQUNsQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDNUIsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMxQixPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBSSxDQUNWLCtEQUErRCxDQUNoRSxDQUFDO1lBQ0YsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFFRCxTQUFTLGVBQWUsQ0FBQyxLQUFhLEVBQUUsSUFBZTtJQUNyRCxJQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsNkNBQVEsQ0FBQyxDQUFDO0lBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1FBQzdCLE9BQU87S0FDUjtJQUVELElBQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFO1FBQ1osU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDMUI7QUFDSCxDQUFDO0FBRUQsU0FBUyxlQUFlLENBQ3RCLE1BQW1CLEVBQ25CLElBQVksRUFDWixLQUE4QjtJQUU5QixJQUFJLFVBQVUsR0FBYSxFQUFFLENBQUM7SUFDOUIsSUFBSSxJQUFJLEtBQUssVUFBVSxFQUFFO1FBQ3ZCLFVBQVUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUIsT0FBTztZQUNMLE1BQU07WUFDTixJQUFJLEVBQUUsVUFBQyxLQUFVLElBQUssaUJBQVUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQXpCLENBQXlCO1lBQy9DLE9BQU87Z0JBQ0wsVUFBVSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM1QixDQUFDO1NBQ0YsQ0FBQztLQUNIO1NBQU0sSUFBSSxJQUFJLEtBQUssT0FBTyxFQUFFO1FBQzNCLElBQU0sUUFBTSxHQUFHLGtFQUFhLENBQzFCLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FDdkMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsT0FBTztZQUNMLE1BQU07WUFDTixJQUFJLEVBQUUsU0FBUztZQUNmLE9BQU87Z0JBQ0wsUUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNyQixVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBRSxJQUFLLFNBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBakMsQ0FBaUMsQ0FBQyxDQUFDO1lBQ2hFLENBQUM7U0FDRixDQUFDO0tBQ0g7U0FBTSxJQUFJLElBQUksS0FBSyxPQUFPLEVBQUU7UUFDM0IsY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLE9BQU87WUFDTCxJQUFJLEVBQUUsY0FBYztZQUNwQixPQUFPO2dCQUNMLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0IsQ0FBQztTQUNGLENBQUM7S0FDSDtTQUFNO1FBQ0wsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbEMsT0FBTztZQUNMLElBQUksRUFBRSxnQkFBZ0I7WUFDdEIsT0FBTztnQkFDTCxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9CLENBQUM7U0FDRixDQUFDO0tBQ0g7SUFFRCxTQUFTLFNBQVMsQ0FBQyxLQUFVO1FBQzNCLElBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUV0QixJQUFNLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNuQixJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDekIsSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxTQUFTO2dCQUFFLFNBQVM7WUFFbEQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN2QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDcEMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDckI7YUFDRjtpQkFBTSxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDbkMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDOUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3JDLElBQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDcEIsSUFBSSxFQUFFO3dCQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQzdCO2FBQ0Y7aUJBQU07Z0JBQ0wsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDekMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3JDLElBQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDcEIsSUFBSSxFQUFFO3dCQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQzdCO2FBQ0Y7U0FDRjtRQUVELFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFFLElBQUssYUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQTNCLENBQTJCLENBQUMsQ0FBQztRQUN4RCxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBRSxJQUFLLGFBQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUM7UUFDckQsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMxQixDQUFDO0lBRUQsU0FBUyxjQUFjLENBQUMsS0FBYTtRQUNuQyxJQUFJLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMxQixJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtnQkFDekMsTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7YUFDbkI7aUJBQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtnQkFDakMsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hCLHNCQUFzQjtnQkFDdEIsMEdBQTBHO2dCQUMxRyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxDQUMzQixDQUFDLENBQUMsV0FBVyxFQUFFLEVBQ2YsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUNaLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFDWCxFQUFFLENBQ0gsQ0FBQzthQUNIOztnQkFBTSxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUU1QixPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxPQUFPLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztJQUVELFNBQVMsZ0JBQWdCLENBQUMsS0FBYTtRQUNyQyxJQUFJLEtBQUssS0FBSyxLQUFLLENBQUMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3RDLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDOUI7YUFBTTtZQUNMLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCxTQUFTLGVBQWUsQ0FBQyxNQUFtQixFQUFFLElBQVk7SUFDeEQsT0FBTyxJQUFJLEtBQUssS0FBSztRQUNuQixDQUFDLENBQUMsNEJBQTRCO1FBQzlCLENBQUMsQ0FBQyxNQUFNO1lBQ1IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZO1lBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDWCxDQUFDO0FBQ0QsU0FBUyxnQkFBZ0IsQ0FBQyxNQUFtQixFQUFFLElBQVk7SUFDekQsSUFBTSxZQUFZLEdBQUcsZUFBZSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRCxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUU3RCxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDO0FBRUQsU0FBUyxRQUFRLENBQUMsS0FBVTtJQUMxQixJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksT0FBTyxLQUFLLEtBQUssV0FBVztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBRWpFLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLE9BQU8sS0FBSyxLQUFLLFNBQVM7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUUxRSxPQUFPLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUMxQixDQUFDO0FBRU0sU0FBUyxTQUFTLENBQUMsR0FBUTtJQUNoQyxJQUFJO1FBQ0YsZ0RBQWdEO1FBQ2hELE9BQU8sR0FBRyxZQUFZLFdBQVcsQ0FBQztLQUNuQztJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1YsNERBQTREO1FBQzVELHlEQUF5RDtRQUN6RCxrREFBa0Q7UUFDbEQsT0FBTyxDQUNMLE9BQU8sR0FBRyxLQUFLLFFBQVE7WUFDdkIsR0FBRyxDQUFDLFFBQVEsS0FBSyxDQUFDO1lBQ2xCLE9BQU8sR0FBRyxDQUFDLEtBQUssS0FBSyxRQUFRO1lBQzdCLE9BQU8sR0FBRyxDQUFDLGFBQWEsS0FBSyxRQUFRLENBQ3RDLENBQUM7S0FDSDtBQUNILENBQUM7QUFFRCxTQUFTLGNBQWMsQ0FBQyxHQUFRO0lBQzlCLE9BQU8sR0FBRyxJQUFJLE9BQU8sSUFBSSxHQUFHLElBQUksTUFBTSxJQUFJLEdBQUcsQ0FBQztBQUNoRCxDQUFDO0FBRUQsU0FBUyxVQUFVLENBQUMsTUFBbUIsRUFBRSxLQUFVO0lBQ2pELElBQUksY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQzFCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztLQUMzQjtBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcmdCTSxJQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7QUFzQ3BDLFNBQVMsV0FBVyxDQUFDLEtBQVU7SUFDbEMsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFFeEQsT0FBTyxDQUNILE9BQU8sS0FBSyxLQUFLLFFBQVE7UUFDekIsT0FBTyxLQUFLLEtBQUssUUFBUTtRQUN6QixPQUFPLEtBQUssS0FBSyxTQUFTO1FBQzFCLEtBQUssWUFBWSxJQUFJLENBQ3hCLENBQUM7QUFDTixDQUFDO0FBY00sU0FBUyxJQUFJLENBQUMsSUFBZSxFQUFFLFFBQTJCO0lBQzdELE9BQU87UUFDSCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7UUFDdkIsTUFBTSxFQUFOLFVBQU8sTUFBZTtZQUNsQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7S0FDSixDQUFDO0FBQ04sQ0FBQztBQUVNLFNBQVMsY0FBYyxDQUFJLEtBQVU7SUFDeEMsT0FBTyxLQUFLLElBQUksT0FBTyxLQUFLLENBQUMsU0FBUyxLQUFLLFVBQVUsQ0FBQztBQUMxRCxDQUFDO0FBWUQsU0FBUyxRQUFRLENBQUMsSUFBUztJQUN2QixJQUFJLElBQUksSUFBSSxJQUFJO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFDL0IsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRO1FBQUUsT0FBTyxRQUFRLElBQUksSUFBSSxDQUFDO0lBQ3RELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUM7QUFFTSxTQUFTLGFBQWEsQ0FBQyxJQUFZLEVBQUUsSUFBZTtJQUN2RCxJQUFNLEtBQUssR0FBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDbEIsT0FBTyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQ2pCLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFJLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDZixLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ2hCO2FBQU0sSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdkIsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pDLEtBQUssSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDNUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM1QjtTQUNKO2FBQU0sSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3ZCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7S0FDSjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFNTSxTQUFTLFdBQVcsQ0FBQyxXQUE2QztJQUNyRSxJQUFJLENBQUMsV0FBVyxFQUFFO1FBQ2QsT0FBTztLQUNWO0lBQ0QsSUFBTSxLQUFLLEdBQWlCLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBQ2xELENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwQixPQUFPLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDakIsSUFBTSxJQUFJLEdBQVEsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxJQUFJO1lBQUUsU0FBUztRQUNwQixJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxVQUFVLEVBQUU7WUFDcEMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2xCO1FBRUQsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUMxQixLQUFLLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzVDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDNUI7U0FDSjtLQUNKO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pJTSxTQUFTLFFBQVEsQ0FBQyxNQUFVLEVBQUUsUUFBZ0I7SUFDakQsT0FBTyxRQUFRLENBQUM7QUFDcEIsQ0FBQztBQUVELDZCQUFlLG9DQUNYLE1BQVUsRUFDVixRQUFnQjtJQUVoQixPQUFPLFFBQVEsQ0FBQztBQUNwQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIaUI7QUFDMkI7QUFDUTtBQUVBO0FBc0I5QyxTQUFTLEdBQUcsQ0FDZixJQUFtQixFQUNuQixLQUEwQjtJQUExQixvQ0FBMEI7SUFDMUIsa0JBQWtCO1NBQWxCLFVBQWtCLEVBQWxCLHFCQUFrQixFQUFsQixJQUFrQjtRQUFsQixpQ0FBa0I7O0lBRWxCLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1FBQzFCLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxRQUFRLEVBQUUsVUFBQyxDQUFDLElBQUssUUFBQyxFQUFELENBQUMsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sSUFBSSxXQUFXLENBQ2xCLElBQUksRUFDSixLQUFLO1lBQ0QsQ0FBQyxDQUFFLFVBQVUsQ0FBQyxLQUFLLENBQWlCLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztZQUN6RCxDQUFDLENBQUMsWUFBWSxDQUNyQixDQUFDO0tBQ0w7SUFFRCxJQUFJLE9BQU8sSUFBSSxLQUFLLFVBQVUsRUFBRTtRQUM1QixPQUFPLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQ3RFO0lBRUQsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDNUIsQ0FBQztBQUVNLFNBQVMsSUFBSSxDQUFJLEVBQTZCO0lBQ2pELE9BQU87UUFDSCxTQUFTLEVBQVQsVUFBVSxRQUFxQjtZQUMzQixJQUFJLEtBQUssR0FBRyxFQUFFLEVBQUUsQ0FBQztZQUNqQixJQUFJLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDdkIsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3BDO1lBQ0QsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQixPQUFPO2dCQUNILFdBQVc7b0JBQ1AsUUFBUSxDQUFDO2dCQUNiLENBQUM7YUFDSixDQUFDO1FBQ04sQ0FBQztLQUNKLENBQUM7QUFDTixDQUFDO0FBRUQsU0FBUyxTQUFTLENBQUMsSUFBYyxFQUFFLElBQVc7SUFDMUMsSUFBSTtRQUNBLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDeEIsSUFBSSxJQUFJLEtBQUssTUFBTTtZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ2xDLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDeEM7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0FBQ0wsQ0FBQztBQUVNLFNBQVMsUUFBUSxDQUNwQixJQUFXLEVBQ1gsT0FBK0I7SUFFL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFFcEMsSUFBSSxNQUFNLEdBQVEsRUFBRSxDQUFDO0lBQ3JCLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNmLG1DQUFtQztJQUNuQyxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDdkMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN2QjtJQUVELE9BQU8sS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDckIsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDMUM7YUFBTSxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUM1QyxJQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFDeEM7aUJBQU0sSUFBSSxTQUFTLEtBQUssU0FBUyxJQUFJLFNBQVMsS0FBSyxJQUFJLEVBQUU7Z0JBQ3RELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDMUI7U0FDSjtLQUNKO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQUVELFNBQVMsV0FBVyxDQUNoQixHQUFRLEVBQ1IsSUFBTztJQUVQLE9BQU8sT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQztBQUNsRSxDQUFDO0FBRUQsaUVBQWUsR0FBRyxFQUFDO0FBRW5CO0lBQ0ksMEJBQW1CLFFBQXNCO1FBQXRCLGFBQVEsR0FBUixRQUFRLENBQWM7SUFBRyxDQUFDO0lBRTdDLGlDQUFNLEdBQU4sVUFBTyxNQUFlO1FBQ2xCLE9BQU87WUFDSCxNQUFNO2dCQUNGLE9BQU8sTUFBTSxDQUFDO1lBQ2xCLENBQUM7WUFDRCxPQUFPLGdCQUFJLENBQUM7U0FDZixDQUFDO0lBQ04sQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQzs7QUFFRDtJQUNJO0lBQWUsQ0FBQztJQUVoQiw4QkFBTSxHQUFOLFVBQU8sTUFBZTtRQUNsQixPQUFPO1lBQ0gsTUFBTTtnQkFDRixPQUFPLE1BQU0sQ0FBQztZQUNsQixDQUFDO1lBQ0QsT0FBTyxnQkFBSSxDQUFDO1NBQ2YsQ0FBQztJQUNOLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUM7O0FBRUQ7SUFDSSw0QkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUFHLENBQUM7SUFFOUMsbUNBQU0sR0FBTixVQUFPLE1BQWlCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDTCx5QkFBQztBQUFELENBQUM7QUFFRDtJQUNJLDJCQUFvQixTQUFvQjtRQUFwQixjQUFTLEdBQVQsU0FBUyxDQUFXO0lBQUcsQ0FBQztJQUU1QyxrQ0FBTSxHQUFOLFVBQU8sTUFBaUI7UUFDWixhQUFTLEdBQUssSUFBSSxVQUFULENBQVU7UUFDM0IsSUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTFDLE9BQU87WUFDSCxPQUFPO2dCQUNILElBQUksT0FBTyxTQUFTLENBQUMsT0FBTyxLQUFLLFVBQVU7b0JBQ3ZDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDeEIsb0RBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMxQixDQUFDO1NBQ0osQ0FBQztJQUNOLENBQUM7SUFDTCx3QkFBQztBQUFELENBQUM7QUFDRDtJQUNJLDhCQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFHLENBQUM7SUFFbEQsc0NBQU8sR0FBUDtRQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUQscUNBQU0sR0FBTjtRQUNJLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTCwyQkFBQztBQUFELENBQUM7QUFFRDtJQUNJLDRCQUFtQixVQUEyQjtRQUEzQixlQUFVLEdBQVYsVUFBVSxDQUFpQjtJQUFHLENBQUM7SUFFbEQsbUNBQU0sR0FBTixVQUFPLE1BQWU7UUFDVixjQUFVLEdBQUssSUFBSSxXQUFULENBQVU7UUFDNUIsSUFBSSxRQUFRLEdBQXFCLElBQUksQ0FBQztRQUN0QyxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkMsSUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQUs7WUFDdEMsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksb0RBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDekQsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixJQUFJLGlFQUFjLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ3pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3BCLE9BQU87aUJBQ1Y7YUFDSjtZQUNELG9EQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEIsUUFBUSxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPO1lBQ0gsT0FBTztnQkFDSCxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3JCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDaEIsb0RBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMxQixDQUFDO1NBQ0osQ0FBQztJQUNOLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUM7O0FBRUQ7SUFDSSx5QkFBbUIsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtJQUFHLENBQUM7SUFFMUMsOEJBQUksR0FBSixVQUFRLEVBQW9DO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELGdDQUFNLEdBQU4sVUFBTyxNQUFlO1FBQ2xCLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqQyxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksY0FBYyxHQUErQixJQUFJLENBQUM7UUFDdEQsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUU3QixVQUFVLENBQUM7WUFDUCxJQUFJLE1BQU0sSUFBSSxRQUFRO2dCQUFFLE9BQU87WUFFL0IsY0FBYyxHQUFHLE1BQU0sQ0FDbkIsS0FBSyxFQUNMLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUUsQ0FBQyxDQUMvQyxDQUFDO1lBQ0YsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUM7Z0JBQ1gsb0RBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNoQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVSLElBQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJO1lBQ3JDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDZCxJQUFNLFFBQVEsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEMsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU87WUFDSCxNQUFNO2dCQUNGLE9BQU8sS0FBSyxDQUFDO1lBQ2pCLENBQUM7WUFDRCxPQUFPO2dCQUNILFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ2hCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDaEIsY0FBYyxDQUFDLElBQUksQ0FBQyxnREFBVyxDQUFDLENBQUM7WUFDckMsQ0FBQztTQUNKLENBQUM7SUFDTixDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDO0FBRU0sU0FBUyxVQUFVLENBQUMsS0FBWTtJQUNuQyxPQUFPLENBQ0gsS0FBSyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBRyxJQUFLLFdBQUksU0FBUyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUMzRSxDQUFDO0FBQ04sQ0FBQztBQUVELElBQU0sZUFBZSxHQUFjO0lBQy9CLE1BQU0sRUFBTjtRQUNJLE9BQU87WUFDSCxPQUFPLGdCQUFJLENBQUM7U0FDSixDQUFDO0lBQ2pCLENBQUM7Q0FDSixDQUFDO0FBRUssU0FBUyxVQUFVLENBQUMsSUFBUztJQUNoQyxJQUFJLE9BQU8sSUFBSSxLQUFLLFdBQVcsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO1FBQzlDLE9BQU8sZUFBZSxDQUFDO0tBQzFCO1NBQU0sSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQUUsT0FBTyxJQUFJLENBQUM7U0FDcEMsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQUUsT0FBTyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzFELElBQUksWUFBWSxDQUFDLElBQUksQ0FBQztRQUFFLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1RCxJQUFJLE9BQU8sSUFBSSxLQUFLLFVBQVU7UUFBRSxPQUFPLElBQUksQ0FBQztTQUM1QyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQUUsT0FBTyxRQUFRLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQzNELElBQUksU0FBUyxDQUFnQixJQUFJLENBQUM7UUFBRSxPQUFPLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JFLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQztRQUFFLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM5RCxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUM7UUFBRSxPQUFPLElBQUksb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEUsSUFBSSxXQUFXLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQztRQUFFLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVqRSxPQUFPLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BDLENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxLQUFVO0lBQzNCLE9BQU8sS0FBSyxJQUFJLE9BQU8sS0FBSyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUM7QUFDckQsQ0FBQztBQUVELFNBQVMsWUFBWSxDQUFDLEtBQVU7SUFDNUIsT0FBTyxLQUFLLElBQUksT0FBTyxLQUFLLENBQUMsUUFBUSxLQUFLLFVBQVUsQ0FBQztBQUN6RCxDQUFDO0FBRUQsU0FBUyxjQUFjLENBQUMsS0FBVTtJQUM5QixPQUFPLEtBQUssSUFBSSxPQUFPLEtBQUssQ0FBQyxTQUFTLEtBQUssVUFBVSxDQUFDO0FBQzFELENBQUM7QUFFRCxTQUFTLGNBQWMsQ0FBQyxLQUFVO0lBQzlCLE9BQU8sS0FBSyxJQUFJLE9BQU8sS0FBSyxDQUFDLFdBQVcsS0FBSyxVQUFVLENBQUM7QUFDNUQsQ0FBQztBQUVELFNBQVMsU0FBUyxDQUFjLEtBQVU7SUFDdEMsT0FBTyxLQUFLLElBQUksT0FBTyxLQUFLLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQztBQUNyRCxDQUFDO0FBRUQsU0FBUyxVQUFVLENBQUMsS0FBVTtJQUMxQixPQUFPLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLFVBQVUsQ0FBQztBQUNqRCxDQUFDO0FBRUQsU0FBUyxrQkFBa0IsQ0FBQyxJQUFjO0lBQ3RDLE9BQU87UUFDSCxNQUFNLEVBQU4sVUFBTyxNQUFlO1lBQUUsY0FBTztpQkFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO2dCQUFQLDZCQUFPOztZQUMzQixJQUFNLEdBQUcsR0FBRyxJQUFJLGVBQUksSUFBSSxDQUFDLENBQUM7WUFDMUIsSUFBSSxRQUFRLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQy9CLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDekIsSUFBTSxVQUFRLEdBQWMsRUFBRSxDQUFDO2dCQUMvQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDdEMsSUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDckMsSUFBSSxDQUFDLEVBQUU7d0JBQ0gsVUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO3FCQUNuQjtpQkFDSjtnQkFDRCxPQUFPO29CQUNILE9BQU87d0JBQ0gsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7NEJBQ3RDLElBQU0sT0FBTyxHQUFHLFVBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDNUIsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO2dDQUNqQixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7NkJBQ3JCO3lCQUNKO29CQUNMLENBQUM7aUJBQ0osQ0FBQzthQUNMO2lCQUFNO2dCQUNILE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNsQztRQUNMLENBQUM7S0FDSixDQUFDO0FBQ04sQ0FBQztBQUVEO0lBQ0kscUJBQW1CLElBQVksRUFBUyxRQUFxQjtRQUExQyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBYTtJQUFHLENBQUM7SUFFakUsNEJBQU0sR0FBTixVQUFPLE1BQWUsRUFBRSxJQUFnQjtRQUM5QixRQUFJLEdBQUssSUFBSSxLQUFULENBQVU7UUFDcEIsT0FBTyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDO0FBRUQ7SUFDSSx3QkFDVyxLQUF3RDtRQUF4RCxVQUFLLEdBQUwsS0FBSyxDQUFtRDtJQUNoRSxDQUFDO0lBRUosK0JBQU0sR0FBTixVQUFPLE1BQWU7UUFDWixTQUFLLEdBQUssSUFBSSxNQUFULENBQVU7UUFFckIsSUFBSSxvREFBVyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNyQzthQUFNLElBQUksY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzlCLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQztZQUNqQixJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBa0IsQ0FBQyxDQUFDO1lBQ25DLE9BQU8sV0FBVyxDQUFDO1NBQ3RCO2FBQU07WUFDSCxPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckM7SUFDTCxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDO0FBSUQ7SUFDSSxtQkFDVyxJQUFZLEVBQ1osS0FFd0M7UUFIeEMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFVBQUssR0FBTCxLQUFLLENBRW1DO0lBQ2hELENBQUM7SUFFSiwwQkFBTSxHQUFOLFVBQU8sTUFBZTtRQUNkLFNBQWtCLElBQUksRUFBcEIsSUFBSSxZQUFFLEtBQUssV0FBUyxDQUFDO1FBRTNCLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDcEMsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELElBQUksT0FBTyxLQUFLLEtBQUssVUFBVSxFQUFFO1lBQzdCLElBQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksWUFBWTtnQkFBRSxPQUFPLFlBQVksQ0FBQztZQUV0QyxPQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxDQUFDO1lBQzNDLEtBQUssR0FBRyxLQUFLLEVBQUUsQ0FBQztTQUNuQjtRQUVELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN0QixJQUFNLFNBQU8sR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztZQUN4RCxJQUFNLFFBQU0sR0FBRyxrRUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFPLENBQUMsQ0FBQztZQUV2RCxPQUFPO2dCQUNILE9BQU87b0JBQ0gsUUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNyQixTQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3RCLENBQUM7YUFDSixDQUFDO1NBQ0w7YUFBTSxJQUFJLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM5QixJQUFNLElBQUksR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBTSxTQUFPLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDeEQsSUFBTSxRQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFPLENBQUMsQ0FBQztZQUN2QyxPQUFPO2dCQUNILE9BQU87b0JBQ0gsUUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNyQixTQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3RCLENBQUM7YUFDSixDQUFDO1NBQ0w7O1lBQU0sT0FBTyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDO0FBRU0sU0FBUyxNQUFNLENBQ2xCLE1BQTZCLEVBQzdCLFFBQWlDO0lBRWpDLElBQU0sTUFBTSxHQUFZLCtDQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksMkNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQzNFLE9BQU8sV0FBVyxDQUFDLENBQUMsRUFBRSxNQUFNLFVBQUUsUUFBUSxZQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9DLENBQUM7QUFNTSxTQUFTLFdBQVcsQ0FBQyxLQUFrQjtJQUMxQyxJQUFNLFFBQVEsR0FBYyxFQUFFLENBQUM7SUFDL0IsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU3QixPQUFPLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDakIsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDUCxNQUFNO1NBQ1Q7UUFDTyxVQUFNLEdBQWUsSUFBSSxPQUFuQixFQUFFLFFBQVEsR0FBSyxJQUFJLFNBQVQsQ0FBVTtRQUNsQyxJQUFJLFFBQVEsS0FBSyxJQUFJLElBQUksUUFBUSxLQUFLLFNBQVM7WUFBRSxTQUFTO1FBRTFELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN6QixLQUFLLElBQUksR0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEdBQUMsSUFBSSxDQUFDLEVBQUUsR0FBQyxFQUFFLEVBQUU7Z0JBQzNDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLFVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDakQ7WUFDRCxTQUFTO1NBQ1o7YUFBTSxJQUFJLE9BQU8sUUFBUSxLQUFLLFVBQVUsRUFBRTtZQUN2QyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNQLE1BQU07Z0JBQ04sUUFBUSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLGNBQWMsQ0FBQzthQUN4RCxDQUFDLENBQUM7WUFDSCxTQUFTO1NBQ1o7YUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzlCLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLFVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdkQsU0FBUztTQUNaO1FBRUQsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QyxJQUFJLE9BQU8sRUFBRTtZQUNULFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkIsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO2dCQUNSLFlBQVEsR0FBSyxRQUFRLFNBQWIsQ0FBYztnQkFDOUIsSUFBSSxRQUFRLEVBQUU7b0JBQ1YsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUNuQyxJQUFJLFdBQVcsRUFBRTt3QkFDYixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7NEJBQzNDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0NBQ1AsTUFBTSxFQUFFLFdBQVc7Z0NBQ25CLFFBQVEsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDOzZCQUNwQyxDQUFDLENBQUM7eUJBQ047cUJBQ0o7aUJBQ0o7YUFDSjtTQUNKO0tBQ0o7SUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN0QyxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxlQUFlLENBQUMsT0FBTyxDQUFDO1lBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ2pEO0lBRUQsT0FBTyxRQUFRLENBQUM7QUFDcEIsQ0FBQztBQU1ELFNBQVMsZUFBZSxDQUFDLEdBQVE7SUFDN0IsT0FBTyxHQUFHLElBQUksT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssVUFBVSxDQUFDO0FBQ3JELENBQUM7QUFFTSxTQUFTLFVBQVUsQ0FBQyxNQUFlLEVBQUUsUUFBcUI7SUFDN0QsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBRWpCLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMzQyxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNQLE1BQU07WUFDTixRQUFRO1NBQ1gsQ0FBQyxDQUFDO0tBQ047SUFFRCxPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM5QixDQUFDO0FBRUQsU0FBUyxPQUFPLENBQUksR0FBUTtJQUN4QixJQUFNLE1BQU0sR0FBUSxFQUFFLENBQUM7SUFFdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDdkI7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDNWZNLFNBQVMsYUFBYSxDQUFrQixXQUFjO0lBRTNELE9BQU87UUFDTCxTQUFTLEVBQVQsVUFBVSxRQUF3QztZQUNoRCxJQUFNLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFNLENBQUM7WUFDakQsSUFBTSxhQUFhLEdBQXFCLEVBQUUsQ0FBQztvQ0FFbEMsQ0FBQztnQkFDUixJQUFNLElBQUksR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUN4QixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQUM7d0JBQzdCLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTs0QkFDbEIsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDYixJQUFJLEVBQUUsQ0FBQzt5QkFDUjtvQkFDSCxDQUFDLENBQUMsQ0FBQztvQkFDSCxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUM1QjtxQkFBTTtvQkFDTCxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO2lCQUNqQjs7WUFaSCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7d0JBQWxDLENBQUM7YUFhVDtZQUNELElBQUksRUFBRSxDQUFDO1lBRVAsU0FBUyxJQUFJO2dCQUNYLElBQUksT0FBTyxRQUFRLEtBQUssVUFBVTtvQkFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQy9DLElBQUksUUFBUSxDQUFDLElBQUk7b0JBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQyxDQUFDO1lBRUQsT0FBTztnQkFDTCxXQUFXO29CQUNULEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUM3QyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7cUJBQ2hDO2dCQUNILENBQUM7YUFDRixDQUFDO1FBQ0osQ0FBQztLQUNGLENBQUM7QUFDSixDQUFDO0FBRU0sU0FBUyxjQUFjLENBQUMsQ0FBTTtJQUNuQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUTtRQUFFLE9BQU8sS0FBSyxDQUFDO0lBRXRELElBQUksT0FBTyxDQUFDLENBQUMsU0FBUyxLQUFLLFVBQVU7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUVwRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRE0sU0FBUyxXQUFXLENBQUMsT0FBWTtJQUN0QyxJQUFJLE9BQU8sS0FBSyxJQUFJO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFDbkMsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFFOUMsT0FBTyxPQUFPLE9BQU8sQ0FBQyxNQUFNLEtBQUssVUFBVSxDQUFDO0FBQzlDLENBQUM7QUFFTSxTQUFTLGNBQWMsQ0FBQyxPQUFZO0lBQ3pDLElBQUksT0FBTyxLQUFLLElBQUk7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUNuQyxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVE7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUU5QyxPQUFPLE9BQU8sT0FBTyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUM7QUFDNUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEIyQjtBQUNLO0FBQ047QUFDYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hkO0FBQ1U7QUFFVztBQUNxQjtBQVk5RCxTQUFTLFdBQVcsQ0FDekIsTUFBZ0Q7SUFFaEQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUFFLE9BQU8sU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXBELE9BQU8sWUFBWSxDQUFJLE1BQU0sQ0FBQyxDQUFDO0FBQ2pDLENBQUM7QUFFRCxTQUFTLFlBQVksQ0FDbkIsUUFBMEM7SUFFMUMsSUFBSSxRQUFRLEdBQVEsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsSUFBSyxRQUFDLEVBQUQsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2xELElBQUksU0FBUyxHQUFrQixRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3hELElBQU0sU0FBUyxHQUFHLElBQUkseUNBQVUsRUFBNkIsQ0FBQztJQUU5RCxPQUFPO1FBQ0wsSUFBSSxZQUFDLEVBQUU7WUFDTCxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QixDQUFDO1FBQ0QsSUFBSSxNQUFNO1lBQ1IsT0FBTyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQzFCLENBQUM7UUFDRCxHQUFHLEVBQUgsVUFBSSxDQUFrQjtZQUNwQixhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkIsQ0FBQztRQUNELFNBQVMsRUFBVDtZQUFVLGNBQWM7aUJBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztnQkFBZCx5QkFBYzs7WUFDdEIsSUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxxREFBWSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkUsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBVyxDQUFDLENBQUM7UUFDckQsQ0FBQztLQUNGLENBQUM7SUFFRixTQUFTLFlBQVk7UUFDbkIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxQixJQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxNQUFNLEdBQVEsUUFBUSxDQUFDO1FBQzNCLE9BQU8sTUFBTSxFQUFFO1lBQ2IsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUN4QjtRQUNELDZDQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDZixDQUFDO0lBRUQsU0FBUyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDdEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxRQUFRLENBQUksUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzdCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELFNBQVMsVUFBVSxDQUFDLEtBQW9CO1FBQ3RDLE9BQU87WUFDTCxJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUs7U0FDTixDQUFDO0lBQ0osQ0FBQztJQUVELFNBQVMsYUFBYSxDQUFDLEdBQW9CO1FBQ3pDLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDakIsU0FBSyxHQUFhLEdBQUcsTUFBaEIsRUFBRSxNQUFNLEdBQUssR0FBRyxPQUFSLENBQVM7WUFDOUIsSUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN2QyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDakMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ2xDLFNBQVMsQ0FBQyxJQUFJLENBQUMsd0RBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ2hDO2FBQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUN0QixVQUFNLEdBQUssR0FBRyxPQUFSLENBQVM7WUFDdkIsSUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUMvQixJQUFNLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckIsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0QixTQUFTLENBQUMsSUFBSSxDQUFDLHdEQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNoQzthQUFNLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDaEMsSUFBTSxLQUFLLEdBQ1QsT0FBTyxHQUFHLENBQUMsU0FBUyxLQUFLLFFBQVE7Z0JBQy9CLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUztnQkFDZixDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDekMsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO2dCQUNkLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQzdDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2lCQUN4QjthQUNGO1lBQ0QsWUFBWSxFQUFFLENBQUM7WUFDZixTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUN0RDthQUFNLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDdEIsUUFBSSxHQUFTLEdBQUcsS0FBWixFQUFFLEVBQUUsR0FBSyxHQUFHLEdBQVIsQ0FBUztZQUN6QixTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMvQixTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM5QixTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3JCO2FBQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLFFBQVEsRUFBRTtZQUN2QixTQUFLLEdBQUssR0FBRyxNQUFSLENBQVM7WUFDdEIsSUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlCLElBQU0sS0FBSyxHQUFHLDhDQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0IsNkNBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNkO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCxTQUFTLFNBQVMsQ0FBSSxRQUFhO0lBQ2pDLElBQU0sU0FBUyxHQUFHLElBQUkseUNBQVUsRUFBbUIsQ0FBQztJQUVwRCxPQUFPO1FBQ0wsSUFBSSxZQUFDLEVBQUU7WUFDTCxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QixDQUFDO1FBQ0QsSUFBSSxNQUFNO1lBQ1IsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ3pCLENBQUM7UUFDRCxHQUFHLEVBQUgsVUFBSSxNQUEyQjtZQUM3QixJQUFJLDBEQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3RCLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN2QjtpQkFBTTtnQkFDTCxhQUFhLENBQUM7b0JBQ1osSUFBSSxFQUFFLE1BQU07b0JBQ1osTUFBTTtpQkFDUCxDQUFDLENBQUM7YUFDSjtRQUNILENBQUM7UUFDRCxTQUFTLEVBQVQ7WUFBVSxjQUFjO2lCQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7Z0JBQWQseUJBQWM7O1lBQ3RCLElBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMscURBQVksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQVcsQ0FBQyxDQUFDO1FBQ3JELENBQUM7S0FDRixDQUFDO0lBRUYsU0FBUyxhQUFhLENBQUMsR0FBb0I7UUFDekMsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUNqQixTQUFLLEdBQWEsR0FBRyxNQUFoQixFQUFFLE1BQU0sR0FBSyxHQUFHLE9BQVIsQ0FBUztZQUM5QixRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDbEMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNyQjthQUFNLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDdEIsVUFBTSxHQUFLLEdBQUcsT0FBUixDQUFTO1lBQ3ZCLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEIsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNyQjthQUFNLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDaEMsSUFBTSxLQUFLLEdBQ1QsT0FBTyxHQUFHLENBQUMsU0FBUyxLQUFLLFFBQVE7Z0JBQy9CLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUztnQkFDZixDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDeEMsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO2dCQUNkLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzNCO1lBQ0QsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDdEQ7YUFBTSxJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO1lBQ3RCLFFBQUksR0FBUyxHQUFHLEtBQVosRUFBRSxFQUFFLEdBQUssR0FBRyxHQUFSLENBQVM7WUFDekIsSUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNCLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUNuQixTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUVELFNBQVMsVUFBVSxDQUFDLEtBQVU7UUFDNUIsT0FBTztZQUNMLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSztTQUNOLENBQUM7SUFDSixDQUFDO0FBQ0gsQ0FBQztBQUlEO0lBQTBCLDRCQUFRO0lBQ2hDLGtCQUFvQixJQUFTLEVBQVMsS0FBYSxFQUFFLEtBQVM7UUFBOUQsWUFDRSxrQkFBTSxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQ3hCO1FBRm1CLFVBQUksR0FBSixJQUFJLENBQUs7UUFBUyxXQUFLLEdBQUwsS0FBSyxDQUFROztJQUVuRCxDQUFDO0lBSUQseUJBQU0sR0FBTixVQUFPLGtCQUF1QjtRQUN0QixTQUFrQixJQUFJLEVBQXBCLElBQUksWUFBRSxLQUFLLFdBQVMsQ0FBQztRQUM3QixJQUFJLE9BQU8sa0JBQWtCLEtBQUssVUFBVSxFQUFFO1lBQzVDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDN0Q7O1lBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLGtCQUFrQixDQUFDO0lBQzFDLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxDQWJ5Qix5Q0FBSyxHQWE5QjtBQUVELFNBQVMsU0FBUyxDQUFJLEdBQVEsRUFBRSxJQUFZLEVBQUUsRUFBVTtJQUN0RCxJQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNwQixHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUpNLFNBQVMsVUFBVSxDQUN4QixLQUFhLEVBQ2IsUUFBMkI7SUFFM0IsT0FBTztRQUNMLElBQUksRUFBRSxRQUFRO1FBQ2QsS0FBSztRQUNMLFFBQVE7S0FDVCxDQUFDO0FBQ0osQ0FBQztBQUVNLFNBQVMsUUFBUSxDQUFJLE1BQVM7SUFDbkMsT0FBTztRQUNMLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTTtLQUNQLENBQUM7QUFDSixDQUFDO0FBQ00sU0FBUyxVQUFVLENBQUksTUFBUyxFQUFFLEtBQWE7SUFDcEQsT0FBTztRQUNMLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTTtRQUNOLEtBQUs7S0FDTixDQUFDO0FBQ0osQ0FBQztBQUNNLFNBQVMsVUFBVSxDQUN4QixTQUF1QztJQUV2QyxPQUFPO1FBQ0wsSUFBSSxFQUFFLFFBQVE7UUFDZCxTQUFTO0tBQ1YsQ0FBQztBQUNKLENBQUM7QUFFTSxTQUFTLFVBQVUsQ0FBSSxLQUFVO0lBQ3RDLE9BQU87UUFDTCxJQUFJLEVBQUUsT0FBTztRQUNiLEtBQUs7S0FDTixDQUFDO0FBQ0osQ0FBQztBQUlNLFNBQVMsVUFBVSxDQUN4QixDQUFNO0lBRU4sSUFBSSxDQUFDLENBQUMsRUFBRTtRQUNOLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFDRCxJQUFNLElBQUksR0FBK0IsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNoRCxPQUFPLENBQ0wsSUFBSSxLQUFLLFFBQVE7UUFDakIsSUFBSSxLQUFLLE1BQU07UUFDZixJQUFJLEtBQUssUUFBUTtRQUNqQixJQUFJLEtBQUssT0FBTztRQUNoQixJQUFJLEtBQUssTUFBTSxDQUNoQixDQUFDO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRzBCO0FBNEJwQixTQUFTLFlBQVksQ0FBQyxDQUFNO0lBQ2pDLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUTtRQUFFLE9BQU8sS0FBSyxDQUFDO0lBRXhDLElBQUksT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLFVBQVU7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUUvQyxPQUFPLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMzQixDQUFDO0FBTU0sU0FBUyxVQUFVLENBQUMsQ0FBTTtJQUMvQixJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVE7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUV4QyxPQUFPLE9BQU8sQ0FBQyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUM7QUFDdEMsQ0FBQztBQUVNLFNBQVMsY0FBYyxDQUFDLENBQU07SUFDbkMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVE7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUV0RCxJQUFJLE9BQU8sQ0FBQyxDQUFDLFNBQVMsS0FBSyxVQUFVO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFFcEQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBU00sU0FBUyxjQUFjLENBQUksS0FBVTtJQUMxQyxJQUFJLEtBQUssS0FBSyxJQUFJO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFDakMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRO1FBQUUsT0FBTyxPQUFPLEtBQUssQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDO0lBRXZFLE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQVNNLFNBQVMsWUFBWSxDQUFDLGNBQW1CLEVBQUUsS0FBVSxFQUFFLFFBQWE7SUFDekUsSUFBSSxjQUFjLEVBQUU7UUFDbEIsSUFBSSxjQUFjLFlBQVksNENBQWEsRUFBRTtZQUMzQyxPQUFPLGNBQWMsQ0FBQztTQUN2QjtLQUNGO0lBQ0QsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUMxQyxJQUFNLGFBQWEsR0FBRztZQUNwQixNQUFNLEVBQUUsSUFBSTtZQUNaLElBQUksZ0JBQUksQ0FBQztZQUNULEtBQUssRUFBTCxVQUFNLEdBQVE7Z0JBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQixDQUFDO1lBQ0QsUUFBUSxnQkFBSSxDQUFDO1NBQ2QsQ0FBQztRQUNGLE9BQU8sSUFBSSw0Q0FBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQ3pDO0lBQ0QsT0FBTyxJQUFJLDRDQUFhLENBQUMsY0FBYyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztBQUM1RCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckZxQjtBQU90QixJQUFNLG1CQUFtQixHQUFtQjtJQUMxQyxXQUFXLGdCQUFJLENBQUM7Q0FDakIsQ0FBQztBQUNGLElBQU0sVUFBVSxHQUNkLENBQUMsT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxjQUFjLENBQUM7QUFFeEUsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBT2pCO0lBSUUsZUFBbUIsTUFBMEIsRUFBUyxLQUFTO1FBQS9ELGlCQUFtRTtRQUFoRCxXQUFNLEdBQU4sTUFBTSxDQUFvQjtRQUFTLFVBQUssR0FBTCxLQUFLLENBQUk7UUFIeEQsZUFBVSxHQUEyQixFQUFFLENBQUM7UUFTL0MsU0FBSSxHQUFHLFVBQUksT0FBbUI7WUFDcEIsU0FBSyxHQUFLLEtBQUksTUFBVCxDQUFVO1lBQ3ZCLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtnQkFDdkIsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDdkI7WUFFRCxPQUFPO1FBQ1QsQ0FBQyxDQUFDO1FBc0NGLGNBQVMsR0FBRyxVQUFDLGNBQW9CLEVBQUUsS0FBVyxFQUFFLFFBQWM7WUFDNUQsSUFBTSxJQUFJLEdBQUcseURBQVksQ0FBQyxjQUFjLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzNELE9BQU8sS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFtQixDQUFDO1FBQ3RELENBQUMsQ0FBQztJQXREZ0UsQ0FBQztJQUVuRSxnQkFBQyxVQUFVLENBQUMsR0FBWjtRQUNFLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQVdELHdCQUFRLEdBQVIsVUFDRSxRQUF3QyxFQUN4QyxXQUFvQjtRQUVwQixJQUFJLE9BQU8sUUFBUSxLQUFLLFVBQVUsRUFBRTtZQUNsQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsV0FBVyxDQUFtQixDQUFDO1NBQ3pFO1FBRUQsSUFBSSxDQUFDLDJEQUFjLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDN0IsT0FBTyxtQkFBbUIsQ0FBQztTQUM1QjtRQUVELElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtnQkFDNUIsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDM0I7U0FDRjtRQUVELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDL0IsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLFFBQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO1lBQzlCLFNBQVMsQ0FBQyxRQUFNLENBQUMsR0FBRyxRQUFRLENBQUM7U0FDOUI7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDekM7UUFFRCxPQUFPO1lBQ0wsV0FBVztnQkFDVCxJQUFJLFNBQVMsRUFBRTtvQkFDYixJQUFJLEdBQUcsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN0QyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDMUI7WUFDSCxDQUFDO1NBQ2dCLENBQUM7SUFDdEIsQ0FBQztJQU9ELG1CQUFHLEdBQUgsVUFBdUIsWUFBZTtRQUM1QixjQUFVLEdBQUssSUFBSSxXQUFULENBQVU7UUFDNUIsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUMxQixPQUFPLENBQUMsRUFBRSxFQUFFO1lBQ1YsSUFBTSxJQUFJLEdBQVEsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxZQUFZLEVBQUU7Z0JBQzlCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjtJQUNILENBQUM7SUFHRCx3QkFBUSxHQUFSLFVBQTRCLFlBQWU7UUFDekMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwQyxJQUFJLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQztRQUV0QixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzdCLElBQUksU0FBUyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVqRSxJQUFNLFFBQVEsR0FBRyxJQUFJLGNBQWMsQ0FDakMsSUFBSSxFQUNKLFlBQXNCLEVBQ3RCLFNBQVMsQ0FDVixDQUFDO1FBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBZSxDQUFDLENBQUM7UUFDdEMsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVELHdCQUFRLEdBQVI7UUFDRSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3ZCLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUTtZQUFFLE9BQU8sS0FBSyxDQUFDO2FBQ3ZDLElBQUksS0FBSyxLQUFLLEtBQUssQ0FBQyxJQUFJLEtBQUssS0FBSyxJQUFJO1lBQUUsT0FBTyxLQUFLLENBQUM7O1lBQ3JELE9BQU8sS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsb0JBQUksR0FBSixVQUFRLFNBQTRDO1FBQzFDLFNBQUssR0FBSyxJQUFJLE1BQVQsQ0FBVTtRQUN2QixJQUFNLENBQUMsR0FBRyxJQUFJLGFBQWEsQ0FDekIsSUFBSSxFQUNKLFNBQVMsRUFDVCxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FDbkQsQ0FBQztRQUNNLGNBQVUsR0FBSyxJQUFJLFdBQVQsQ0FBVTtRQUM1QixVQUFVLENBQUMsSUFBSSxDQUFDLENBQVEsQ0FBQyxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELHVCQUFPLEdBQVA7UUFDVSxVQUFNLEdBQUssSUFBSSxPQUFULENBQVU7UUFDeEIsSUFBSSxNQUFNLEVBQUU7WUFDRixjQUFVLEdBQUssTUFBTSxXQUFYLENBQVk7WUFDOUIsSUFBSSxVQUFVLEVBQUU7Z0JBQ2QsSUFBSSxHQUFHLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFXLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFO29CQUNaLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUMzQjthQUNGO1NBQ0Y7SUFDSCxDQUFDO0lBQ0gsWUFBQztBQUFELENBQUM7O0FBRUQsdUJBQXVCO0FBQ3ZCLHdDQUF3QztBQUN4Qyx3Q0FBd0M7QUFDeEMsa0RBQWtEO0FBRWxELHdDQUF3QztBQUN4Qyx5RUFBeUU7QUFDekUsSUFBSTtBQUNKLG1GQUFtRjtBQUVuRix5Q0FBeUM7QUFDekMscUNBQXFDO0FBQ3JDLEtBQUs7QUFFTDtJQUF1QyxrQ0FBUTtJQUM3Qyx3QkFDa0IsTUFBbUIsRUFDbkIsSUFBcUIsRUFDckMsS0FBUztRQUhYLFlBS0Usa0JBQU0sTUFBTSxFQUFFLEtBQUssQ0FBQyxTQUNyQjtRQUxpQixZQUFNLEdBQU4sTUFBTSxDQUFhO1FBQ25CLFVBQUksR0FBSixJQUFJLENBQWlCO1FBVXZDLFlBQU0sR0FBRyxVQUFDLE9BQW1CLEVBQUUsV0FBMkI7O1lBQTNCLGdEQUEyQjtZQUN4RCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUksRUFBRSxPQUFPLENBQUM7Z0JBQUUsT0FBTyxLQUFLLENBQUM7WUFFOUMsSUFBSSxXQUFXLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDcEMsSUFBSSxXQUFXLEVBQUU7Z0JBQ2YsV0FBVyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDO2FBQ3JDO2lCQUFNO2dCQUNMLFdBQVcsQ0FBQyxLQUFJLENBQUMsTUFBTSxZQUFJLEdBQUMsS0FBSSxDQUFDLElBQUksSUFBRyxLQUFJLENBQUMsS0FBSyxNQUFHLENBQUM7YUFDdkQ7WUFFRCxJQUFJLFdBQVcsRUFBRTtnQkFDZixJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSSxDQUFDLENBQUM7Z0JBQzNCLElBQUksUUFBTSxHQUFRLEtBQUksQ0FBQztnQkFDdkIsT0FBTyxRQUFNLEVBQUU7b0JBQ2IsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFNLENBQUMsQ0FBQztvQkFDbkIsUUFBTSxHQUFHLFFBQU0sQ0FBQyxNQUFNLENBQUM7aUJBQ3hCO2dCQUNELEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNkO1lBRUQsT0FBTyxJQUFJLENBQUM7WUFFWixTQUFTLFdBQVcsQ0FBQyxNQUFXLEVBQUUsS0FBVTtnQkFDMUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDOUIsQ0FBQztRQUNILENBQUMsQ0FBQzs7SUEvQkYsQ0FBQztJQUVELGtDQUFTLEdBQVQsVUFBVSxXQUFnQjtRQUN4QixPQUFPLFdBQVcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUE2QkQsZ0NBQU8sR0FBUDtRQUNFLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQ0EzQ3NDLEtBQUssR0EyQzNDOztBQUVEO0lBQThCLHlCQUFRO0lBQ3BDLGVBQVksS0FBUyxFQUFTLFdBQTJCO1FBQTNCLGdEQUEyQjtRQUF6RCxZQUNFLGtCQUFNLElBQUksRUFBRSxLQUFLLENBQUMsU0FDbkI7UUFGNkIsaUJBQVcsR0FBWCxXQUFXLENBQWdCO1FBMEJ6RCxZQUFNLEdBQUcsVUFDUCxRQUFvQixFQUNwQixXQUEyQixFQUMzQixPQUFpQjtZQURqQixnREFBMkI7WUFHM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFO2dCQUN6QyxPQUFPLEtBQUssQ0FBQzthQUNkO1lBRUQsSUFBSSxXQUFXLEVBQUU7Z0JBQ2YsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUksQ0FBQyxDQUFDO2dCQUMzQiw4QkFBOEI7Z0JBQzlCLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7Z0JBQ2pCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNkO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUM7O0lBeENGLENBQUM7SUFFRCx5QkFBeUI7SUFDekIsbUNBQW1DO0lBQ25DLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsb0NBQW9DO0lBQ3BDLHdDQUF3QztJQUN4QywrQkFBK0I7SUFDL0IsaUNBQWlDO0lBQ2pDLHdCQUF3QjtJQUN4QixvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsK0JBQStCO0lBQy9CLDJCQUEyQjtJQUMzQixTQUFTO0lBQ1QsTUFBTTtJQUVOLHVCQUFPLEdBQVA7UUFDRSxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBb0JELHVCQUFPLEdBQVA7UUFDRSxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsb0JBQUksR0FBSixVQUFLLE1BQVM7UUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQyxDQXBENkIsS0FBSyxHQW9EbEM7O0FBRU0sU0FBUyxPQUFPLENBQUksSUFBbUI7SUFDNUMsT0FBTyxJQUFJLEtBQUssQ0FBTSxJQUFJLEVBQUU7UUFDMUIsR0FBRyxFQUFILFVBQUksTUFBcUIsRUFBRSxJQUFxQjtZQUM5QyxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxJQUFJLElBQUksSUFBSTtnQkFBRSxPQUFRLElBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUV6RSxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQWUsQ0FBQyxDQUFDO1lBQzlDLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVTtnQkFBRSxPQUFPLE1BQU0sQ0FBQztZQUVoRCxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QixDQUFDO1FBQ0QsR0FBRyxFQUFILFVBQ0UsTUFBZ0IsRUFDaEIsSUFBcUIsRUFDckIsS0FBb0I7WUFFcEIsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQWUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RCxDQUFDO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsaURBQWlEO0lBQ2pELHVDQUF1QztJQUN2QyxJQUFJO0lBRUosZ0RBQWdEO0lBQ2hELGlDQUFpQztJQUNqQyxJQUFJO0FBQ04sQ0FBQztBQUVELGlFQUFlLEtBQUssRUFBQztBQUVyQjtJQUFrQyxpQ0FBUTtJQUN4Qyx1QkFDRSxNQUFrQixFQUNYLFNBQTJDLEVBQ2xELFNBQWE7UUFIZixZQUtFLGtCQUFNLE1BQU0sRUFBRSxTQUFTLENBQUMsU0FDekI7UUFKUSxlQUFTLEdBQVQsU0FBUyxDQUFrQzs7SUFJcEQsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxDQVJpQyxLQUFLLEdBUXRDO0FBRU0sU0FBUyxPQUFPLENBQUksSUFBYztJQUN2QyxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQ2hCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNiLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFFTSxTQUFTLE1BQU0sQ0FBQyxJQUd0QjtJQUNDLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDVCxPQUFPLEVBQUUsQ0FBQztLQUNYO0lBQ0QsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQixJQUFJLFdBQVcsR0FBVyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ3ZDLElBQUksV0FBVyxHQUFXLENBQUMsQ0FBQztJQUM1QixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7SUFFZixPQUFPLFdBQVcsRUFBRSxFQUFFO1FBQ3BCLElBQU0sUUFBTSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsQyxJQUFNLFdBQVcsR0FBRyxRQUFNLENBQUMsS0FBSyxDQUFDO1FBRTNCLGNBQVUsR0FBSyxRQUFNLFdBQVgsQ0FBWTtRQUU1QixJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksT0FBTyxHQUFXLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQzVDLE9BQU8sT0FBTyxFQUFFO2dCQUNkLE9BQU8sR0FBRyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzVCLElBQUksSUFBSSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDL0IsU0FBUztnQkFDVCxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixXQUFXLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUVwQyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUM3QixJQUFNLFVBQVUsR0FDZCxTQUFTLEtBQUssSUFBSTtvQkFDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO29CQUM3QixDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQzdDLElBQUksU0FBUyxLQUFLLFVBQVUsRUFBRTtvQkFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7b0JBQ3hCLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQzFCLFdBQVcsR0FBRyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3JDO2FBQ0Y7U0FDRjtLQUNGO0lBRUQsc0JBQXNCO0lBQ3RCLE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQUVELDBDQUEwQztBQUNuQyxTQUFTLEtBQUssQ0FBQyxLQUFZO0lBQ2hDLElBQUksVUFBVSxHQUFXLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFFdEMsT0FBTyxVQUFVLEVBQUUsRUFBRTtRQUNuQixJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0IsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUVyQixhQUFTLEdBQUssSUFBSSxVQUFULENBQVU7UUFDM0IsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUM3QixPQUFPLENBQUMsRUFBRSxFQUFFO2dCQUNWLElBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMxQjtTQUNGO0tBQ0Y7QUFDSCxDQUFDO0FBRW1CO0FBRXBCO0lBQTBCLDRCQUFRO0lBQ2hDLGtCQUFtQixLQUFRLEVBQVMsS0FBYTtRQUFqRCxZQUNFLGtCQUFNLElBQUksRUFBRSxLQUFLLENBQUMsU0FDbkI7UUFGa0IsV0FBSyxHQUFMLEtBQUssQ0FBRztRQUFTLFdBQUssR0FBTCxLQUFLLENBQVE7UUFJakQsWUFBTSxHQUFHLFVBQUMsUUFBK0IsRUFBRSxXQUEyQjtZQUEzQixnREFBMkI7WUFDcEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFJLEVBQUUsUUFBUSxDQUFDLEVBQUU7Z0JBQ2hDLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFFRCxJQUFJLFdBQVcsRUFBRTtnQkFDZixJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSSxDQUFDLENBQUM7Z0JBQzNCLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7Z0JBQ2pCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDYixPQUFPLElBQUksQ0FBQzthQUNiO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUM7O0lBZEYsQ0FBQztJQWVILGVBQUM7QUFBRCxDQUFDLENBbEJ5QixLQUFLLEdBa0I5QjtBQUVNLFNBQVMsV0FBVyxDQUN6QixNQUFxQixFQUNyQixRQUFvQixFQUNwQixPQUFpQjtJQUVqQixtQkFBbUI7SUFDbkIsSUFBSSxRQUFRLEtBQUssU0FBUztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBRXpDLElBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakMsSUFBSSxXQUFXLEtBQUssUUFBUSxFQUFFO1FBQzVCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7U0FBTSxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUMvQixJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDbkQsbUNBQW1DO1FBQ25DLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN4Qix1RUFBdUU7WUFDdkUsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsT0FBTyxXQUFXLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3BDO0tBQ0Y7U0FBTSxJQUNMLE9BQU8sS0FBSyxJQUFJO1FBQ2hCLENBQUMsQ0FBQyxXQUFXO1FBQ2IsT0FBTyxXQUFXLEtBQUssUUFBUTtRQUMvQixDQUFDLENBQUMsUUFBUTtRQUNWLE9BQU8sUUFBUSxLQUFLLFFBQVEsRUFDNUI7UUFDQSxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDZCxJQUFNLEtBQUssR0FBVSxDQUFDLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQU8sQ0FBQztRQUM5QixPQUFPLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2pCLFNBQTZCLEtBQUssQ0FBQyxHQUFHLEVBQUUsRUFBdkMsYUFBVyxVQUFFLFdBQVcsUUFBZSxDQUFDO1lBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQVcsQ0FBQztnQkFDMUIsaUJBQWlCO2dCQUNqQixTQUFTO1lBRVgsS0FBSyxJQUFJLElBQUksSUFBSSxXQUFXLEVBQUU7Z0JBQzVCLElBQU0sZUFBZSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUMsSUFBTSxlQUFlLEdBQUcsYUFBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMxQyxJQUNFLGVBQWUsS0FBSyxlQUFlO29CQUNuQyxPQUFPLGVBQWUsS0FBSyxVQUFVO29CQUVyQyxTQUFTO2dCQUNYLElBQ0UsZUFBZTtvQkFDZixPQUFPLGVBQWUsS0FBSyxRQUFRO29CQUNuQyxlQUFlO29CQUNmLE9BQU8sZUFBZSxLQUFLLFFBQVEsRUFDbkM7b0JBQ0EsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLGVBQWUsRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDO2lCQUNoRDtxQkFBTTtvQkFDTCxJQUFJLGVBQWUsS0FBSyxlQUFlLEVBQUU7d0JBQ3ZDLGFBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxlQUFlLENBQUM7d0JBQ3BDLENBQUMsR0FBRyxJQUFJLENBQUM7cUJBQ1Y7aUJBQ0Y7YUFDRjtTQUNGO1FBQ0QsT0FBTyxDQUFDLENBQUM7S0FDVjtTQUFNO1FBQ0wsTUFBTSxDQUFDLEtBQUssR0FBRyxRQUFlLENBQUM7UUFDL0IsT0FBTyxJQUFJLENBQUM7S0FDYjtBQUNILENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxFQUFPO0lBQ3pCLE9BQU8sT0FBTyxFQUFFLEtBQUssVUFBVSxDQUFDO0FBQ2xDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pkOEM7QUFDNEI7QUFDSDtBQUNqRDtBQUNJO0FBQ1U7QUFTOUIsU0FBUyxZQUFZLENBQzFCLEtBQStCLEVBQy9CLFFBQWU7SUFFZixPQUFPO1FBQ0wsTUFBTSxFQUFOLFVBQU8sTUFBZTtZQUNwQixJQUFNLFlBQVksR0FBRyxJQUFJLGlEQUFrQixDQUFXLEVBQUUsQ0FBQyxDQUFDO1lBQ2xELFVBQU0sR0FBaUIsS0FBSyxPQUF0QixFQUFFLFVBQVUsR0FBSyxLQUFLLFdBQVYsQ0FBVztZQUNyQyxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFDaEQsSUFBSSxZQUFDLEVBQXdCO3dCQUF2QixXQUFXLFVBQUUsU0FBUztvQkFDMUIsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFFN0IsSUFBSSxPQUFPLFVBQVUsS0FBSyxVQUFVLEVBQUU7d0JBQ3BDLE9BQU87cUJBQ1I7b0JBQ0QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO3dCQUN4RCxVQUFVLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsSUFBSyxRQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBVixDQUFVLENBQUMsQ0FBQyxDQUFDO3FCQUNoRDt5QkFBTTt3QkFDTCxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7cUJBQ2hCO2dCQUNILENBQUM7YUFDRixDQUFDLENBQUM7WUFDSCxPQUFPO2dCQUNMLE9BQU87b0JBQ0wsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUN0QixDQUFDO2FBQ0YsQ0FBQztZQUVGLFNBQVMsV0FBVyxDQUFDLFVBQTZCLEVBQUUsR0FBYztnQkFDeEQsUUFBSSxHQUFhLFVBQVUsS0FBdkIsRUFBRSxNQUFNLEdBQUssVUFBVSxPQUFmLENBQWdCO2dCQUVwQyxJQUFNLE9BQU8sR0FBRztvQkFDZCxHQUFHO29CQUNILE1BQU07b0JBQ04sV0FBVyxZQUFDLEdBQUc7d0JBQ2IsT0FBTyxxREFBWSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDakUsQ0FBQztpQkFDRixDQUFDO2dCQUNGLElBQU0sU0FBUyxHQUFHLHlEQUFRLGlDQUFLLFFBQVEsSUFBRSxJQUFJLElBQUcsVUFBQyxJQUFJO29CQUNuRCxpQkFBVSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUM7Z0JBQXpCLENBQXlCLENBQzFCLENBQUM7Z0JBQ0YsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNuQyxJQUFNLFFBQVEsR0FBRyx1REFBTSxDQUNyQixLQUFLLEVBQ0wsVUFBVSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsTUFBTSxJQUFJLFlBQVksQ0FBQyxDQUNwRCxDQUFDO2dCQUNGLE9BQU87b0JBQ0wsT0FBTzt3QkFDTCxvREFBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUN0QixLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ2xCLENBQUM7aUJBQ0YsQ0FBQztZQUNKLENBQUM7UUFDSCxDQUFDO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxLQUFLLEVBQUUsT0FBb0I7SUFDN0MsT0FBTyxPQUFPLEtBQUssS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQzlELENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxTQUFnQixFQUFFLE1BQVc7SUFDL0MsSUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3QyxJQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1FBQ3hCLE9BQU8sU0FBUyxDQUFDO0tBQ2xCO0lBRUQsT0FBTywyREFBVSxDQUFDLDBDQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLHFEQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RFLENBQUM7QUFFRCxTQUFTLFNBQVMsQ0FBQyxDQUFDO0lBQ2xCLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxJQUFJLElBQUksVUFBVSxDQUFDO0FBQzVDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEYwQjtBQUNVO0FBQytCO0FBQzNCO0FBbUN6QyxTQUFTLGlCQUFpQixDQUFDLEtBQVU7SUFDbkMsT0FBTyxLQUFLLElBQUksTUFBTSxJQUFJLEtBQUssQ0FBQztBQUNsQyxDQUFDO0FBQ0QsU0FBUyxPQUFPLENBQUMsS0FBVTtJQUN6QixPQUFPLEtBQUssSUFBSSxPQUFPLEtBQUssQ0FBQyxLQUFLLEtBQUssVUFBVSxDQUFDO0FBQ3BELENBQUM7QUFDRCxTQUFTLGdCQUFnQixDQUFDLEtBQVU7SUFDbEMsT0FBTyxXQUFXLElBQUksS0FBSyxDQUFDO0FBQzlCLENBQUM7QUFpQ0QsU0FBUyxjQUFjLENBQUMsS0FBVTtJQUNoQyxPQUFPLE9BQU8sS0FBSyxLQUFLLFVBQVUsQ0FBQztBQUNyQyxDQUFDO0FBRUQsU0FBUyxXQUFXLENBQUMsWUFBMEI7SUFDN0MsSUFBTSxRQUFRLEdBQUcsbUVBQW1CLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbkQsT0FBTyxVQUFDLElBQVU7UUFDUixVQUFNLEdBQUssWUFBWSxPQUFqQixDQUFrQjtRQUNoQyxJQUFJLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbkMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQy9CLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNWLE9BQU8sSUFBSSxDQUFDO2FBQ2I7aUJBQU0sSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO2dCQUN6QixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQzthQUM5QjtTQUNGO1FBQ0QsT0FBTztZQUNMLEVBQUUsRUFBRSxJQUFJO1lBQ1IsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQztZQUMzQixNQUFNO1NBQ1AsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FDbEIsSUFBa0IsRUFDbEIsSUFBVyxFQUNYLE1BQTRCO0lBRTVCLElBQU0sSUFBSSxHQUFHO1FBQ1gsS0FBSyxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDeEIsSUFBSTtRQUNKLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxNQUFNLENBQUM7S0FDcEMsQ0FBQztJQUVGLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVELFNBQWUsUUFBUSxDQUNyQixhQUFtQixFQUNuQixPQUE0Qjs7Ozs7OztvQkFFNUIsSUFBSSxDQUFDLE9BQU8sRUFBRTt3QkFDWixzQkFBTyxJQUFJLEVBQUM7cUJBQ2I7b0JBRWMscUJBQU0sT0FBTyxDQUFDLGFBQWEsQ0FBQzs7b0JBQXJDLE1BQU0sR0FBRyxTQUE0Qjt5QkFDdkMsT0FBTSxJQUFJLE1BQU0sR0FBaEIsd0JBQWdCO29CQUNsQixJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTt3QkFDbkMsc0JBQU87Z0NBQ0wsSUFBSSxFQUFFLE1BQU07NkJBQ2IsRUFBQztxQkFDSDs7d0JBR0MsSUFBSSxFQUFFLE1BQU07O29CQUNOLHFCQUFNLFFBQVEsQ0FDbEIsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUM5QyxNQUFNLENBQUMsT0FBTyxDQUNmO3dCQUxILHVCQUVFLE9BQUksR0FBRSxTQUdMOzZCQUNEO3dCQUVGLHNCQUFPLElBQUksRUFBQzs7OztDQUVmO0FBb0JNLFNBQVMsYUFBYSxDQUFDLFdBQWlCO0lBQzdDLE9BQU87UUFDTCxNQUFNLEVBQUUsdUNBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUMxQiwrQ0FBTSxDQUFDLGNBQU0sZUFBUSxDQUFDLFFBQVEsRUFBakIsQ0FBaUIsQ0FBQyxFQUMvQixnRUFBdUIsRUFBRSxFQUN6QiwrQ0FBTSxDQUFDLFVBQUMsUUFBZ0IsSUFBSyxlQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUMsSUFBSyxRQUFDLENBQUMsQ0FBQyxFQUFILENBQUcsQ0FBQyxFQUF0QyxDQUFzQyxDQUFDLEVBQ3BFLGtEQUFTLENBQUMsVUFBQyxLQUFLLElBQUssaUJBQVUsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLEVBQTlCLENBQThCLENBQUMsRUFDcEQsK0NBQU0sQ0FBQyxVQUFDLEtBQUssSUFBSyxZQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxDQUNuRDtRQUNELE9BQU8sRUFBUCxVQUFRLElBQWM7WUFDcEIsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMzQixDQUFDO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxLQUFXLEVBQUUsSUFBVTtJQUN6QyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBRW5DLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTTtRQUFFLE9BQU8sS0FBSyxDQUFDO0lBRTdDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3BDLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLO1lBQUUsT0FBTyxLQUFLLENBQUM7S0FDNUQ7SUFFRCxPQUFPLElBQUksQ0FBQztJQUVaLFNBQVMsV0FBVyxDQUFDLElBQVMsRUFBRSxJQUFTO1FBQ3ZDLElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtZQUNqQixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVE7Z0JBQUUsT0FBTyxLQUFLLENBQUM7WUFFM0MsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssSUFBSTtnQkFBRSxPQUFPLEtBQUssQ0FBQztTQUM1QztRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztBQUNILENBQUM7QUFpQk0sU0FBUyxZQUFZLENBQzFCLFNBQW9CLEVBQ3BCLE9BQTRCLEVBQzVCLE9BQWtELEVBQ2xELGFBQTZCO0lBRTdCLElBQU0sWUFBWSxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUM7UUFDMUMsQ0FBQyxDQUFDLE9BQU87UUFDVCxDQUFDLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFaEMsT0FBTztRQUNMLFNBQVM7UUFDVCxhQUFhO1FBQ2IsS0FBSyxFQUFMLFVBQU0sUUFBNkI7WUFDakMsT0FBTyxXQUFXLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FDNUMsZ0RBQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQzFELENBQUM7UUFDSixDQUFDO0tBQ0YsQ0FBQztJQU9GLFNBQVMsYUFBYSxDQUNwQixRQUE2QixFQUM3QixhQUE0QjtRQUU1QixPQUFPLFNBQVMsSUFBSSxDQUNsQixFQUE0QixFQUM1QixJQUFxQjtnQkFEcEIsSUFBSTtZQUdFLGFBQVMsR0FBc0IsSUFBSSxHQUExQixFQUFFLEtBQUssR0FBZSxJQUFJLEdBQW5CLEVBQUUsU0FBUyxHQUFJLElBQUksR0FBUixDQUFTO1lBQzNDLElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNqQyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN0QyxLQUFLLElBQUksQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDekMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDdkI7YUFDRjtZQUNELEdBQUcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFFcEIsT0FBTyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztZQUU1QixTQUFTLE9BQU8sQ0FBQyxHQUFvQixFQUFFLEdBQVc7Z0JBQ2hELElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxJQUFNLEdBQUcsR0FBRyxJQUFJLGtEQUFTLENBQ3ZCLFNBQVMsRUFDVCxHQUFHLENBQUMsV0FBVyxFQUNmLENBQUMsV0FBVyxJQUFJLFdBQVcsQ0FBQyxHQUFHLENBQUM7b0JBQzlCLENBQUMsYUFBYSxJQUFJLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FDdkMsQ0FBQztnQkFDRixPQUFPLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHO29CQUN0QixHQUFHO29CQUNILE1BQU0sRUFBRSxRQUFRLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztpQkFDM0IsQ0FBQztZQUNKLENBQUM7UUFDSCxDQUFDLENBQUM7SUFDSixDQUFDO0FBQ0gsQ0FBQztBQUVELFNBQVMsV0FBVyxDQUNsQixPQUE0QixFQUM1QixXQUFnQztJQUZsQyxpQkFzQkM7SUFsQkMsSUFBSSxJQUFJLEdBQWdDLElBQUksQ0FBQztJQUM3QyxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQ2pCLHFEQUFZLENBQUMsVUFBTyxLQUFLOzs7OztvQkFDakIsS0FDSixvQkFBb0IsQ0FBUSxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBRGxDLFNBQVMsaUJBQUUsY0FBYyxzQkFBRSxPQUFPLGNBQ0M7b0JBQ3BCLHFCQUFNLFFBQVEsQ0FDbkMsY0FBYyxFQUNkLE9BQU8sSUFBSSxXQUFXLENBQ3ZCOztvQkFISyxjQUFjLEdBQUcsU0FHdEI7b0JBRUQsSUFBSSxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQUM7b0JBQ25DLGFBQWEsR0FBRyxNQUFNLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLFFBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBeEIsQ0FBd0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBRXBFLGFBQWEsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUNqRCxzQkFBTyxDQUFDLFNBQVMsRUFBRSxjQUFjLEVBQUUsYUFBYSxDQUFDLEVBQUM7OztTQUNuRCxDQUFDLEVBQ0YsaURBQVEsRUFBRSxDQUNYLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxvQkFBb0IsQ0FDM0IsS0FBZSxFQUNmLFFBQXFDO0lBTXJDLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFDYixPQUFPLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxDQUFDO0tBQ2xDO0lBRU8sUUFBSSxHQUFLLFFBQVEsS0FBYixDQUFjO0lBQzFCLElBQUksaUJBQWlCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFO1FBQzVCLFNBQXlDLG9CQUFvQixDQUNqRSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQ3BDLFFBQVEsQ0FBQyxJQUFJLENBQ2QsRUFITyxTQUFTLGlCQUFFLGNBQWMsc0JBQUUsT0FBTyxhQUd6QyxDQUFDO1FBQ0YsT0FBTztZQUNMLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQztZQUNoQyxjQUFjO1lBQ2QsT0FBTyxFQUFFLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTztTQUNqQyxDQUFDO0tBQ0g7U0FBTTtRQUNMLE9BQU87WUFDTCxjQUFjLEVBQUUsS0FBSztZQUNyQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDdEIsQ0FBQztLQUNIO0FBQ0gsQ0FBQztBQUVELFNBQVMsaUJBQWlCLENBQ3hCLE1BQTZCLEVBQzdCLGFBQXVCO0lBRXZCLElBQUksQ0FBQyxhQUFhLElBQUksYUFBYSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDaEQsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQUksTUFBTSxJQUFJLE1BQU0sSUFBSSxNQUFNLEVBQUU7UUFDdEIsZUFBVyxHQUFLLE1BQU0sWUFBWCxDQUFZO1FBQy9CLElBQUksV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDeEQsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNDLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQUUsT0FBTyxLQUFLLENBQUM7U0FDdkQ7UUFDRCxPQUFPLElBQUksQ0FBQztLQUNiO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBRU0sU0FBUyxrQkFBa0IsQ0FDaEMsTUFBMkI7SUFFM0IsSUFBSSxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDeEIsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUVELElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxJQUFJLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUMxQixPQUFPLFVBQUMsYUFBYTtZQUNuQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQXdCO2dCQUM1QyxXQUFXLEVBQUUsYUFBYTthQUMzQixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7S0FDSDtJQUNELE9BQU8sVUFBQyxhQUF1QjtRQUM3QixLQUFvQixVQUFRLEVBQVIscUJBQVEsRUFBUixzQkFBUSxFQUFSLElBQVEsRUFBRTtZQUF6QixJQUFNLEtBQUs7WUFDZCxJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzNDLElBQUksT0FBTyxFQUFFO2dCQUNILFFBQUksR0FBSyxLQUFLLEtBQVYsQ0FBVztnQkFDdkIsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDakMsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUF3QjtvQkFDNUMsV0FBVztvQkFDWCxJQUFJO29CQUNKLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtvQkFDdEIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO2lCQUN2QixDQUFDLENBQUM7YUFDSjtTQUNGO1FBQ0QsSUFBTSxRQUFRLEdBQWE7WUFDekIsV0FBVyxFQUFFLGFBQWE7U0FDM0IsQ0FBQztRQUNGLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuQyxDQUFDLENBQUM7SUFFRixTQUFTLE9BQU8sQ0FBQyxNQUEyQjtRQUMxQyxJQUFNLE9BQU8sR0FBbUIsRUFBRSxDQUFDO1FBQ25DLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN6QixLQUFvQixVQUFNLEVBQU4saUJBQU0sRUFBTixvQkFBTSxFQUFOLElBQU0sRUFBRTtnQkFBdkIsSUFBTSxLQUFLO2dCQUNkLElBQUksaUJBQWlCLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQzVCLElBQUksZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQzNCLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztxQkFDL0Q7eUJBQU07d0JBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3FCQUNqRTtpQkFDRjtxQkFBTSxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDekIsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDckI7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDM0M7YUFDRjtTQUNGO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztBQUNILENBQUM7QUFFRCxTQUFTLFlBQVksQ0FBQyxHQUFVO0lBQzlCLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0FBQ2pELENBQUM7QUFFRCxTQUFTLEdBQUcsQ0FDVixJQUFtQixFQUNuQixPQUE0RDtJQUU1RCxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFckIsU0FBUyxJQUFJLENBQUMsQ0FBZ0IsRUFBRSxLQUFhO1FBQzNDLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDTixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTztZQUNMLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDO1lBQ2xDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1NBQzlCLENBQUM7SUFDSixDQUFDO0FBQ0gsQ0FBQztBQUVELFNBQVMsSUFBSSxDQUFJLElBQW1CO0lBQ2xDLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDVCxPQUFPLElBQUksQ0FBQztLQUNiO0lBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ2IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3hCO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBRUQsU0FBUyxJQUFJLENBQUksSUFBTyxFQUFFLElBQW1CO0lBQzNDLE9BQU8sRUFBRSxJQUFJLFFBQUUsSUFBSSxRQUFFLENBQUM7QUFDeEIsQ0FBQztBQUVELFNBQVMsTUFBTSxDQUFJLENBQWdCLEVBQUUsQ0FBZ0I7SUFDbkQsSUFBSSxDQUFDLENBQUMsRUFBRTtRQUNOLE9BQU8sQ0FBQyxDQUFDO0tBQ1Y7SUFDRCxPQUFPO1FBQ0wsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJO1FBQ1osSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3JDLENBQUM7QUFDSixDQUFDO0FBR0QsU0FBUyxNQUFNLENBQ2IsUUFBOEIsRUFDOUIsSUFBbUIsRUFDbkIsSUFBTztJQUVQLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDVCxPQUFPLElBQUksQ0FBQztLQUNiO0lBQ0QsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztJQUNiLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNaLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO0tBQ1o7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBRUQsU0FBUyxNQUFNLENBQUksQ0FBZ0I7SUFDakMsSUFBSSxDQUFDLENBQUMsRUFBRTtRQUNOLE9BQU8sQ0FBQyxDQUFDO0tBQ1Y7SUFDRCxPQUFPLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzVCLENBQUM7QUFFRCxTQUFTLE1BQU0sQ0FBSSxJQUFPLEVBQUUsSUFBbUI7SUFDN0MsSUFBSSxDQUFDLElBQUksRUFBRTtRQUNULE9BQU8sRUFBRSxJQUFJLFFBQUUsQ0FBQztLQUNqQjtJQUNELE9BQU87UUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7UUFDZixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDO0tBQzlCLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxHQUFHLENBQ1YsSUFBbUIsRUFDbkIsS0FBb0IsRUFDcEIsT0FBMEI7SUFFMUIsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNuQixPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsT0FBTyxJQUFJLENBQ1QsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUM5QixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUNwQyxDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsS0FBSztJQUNaLE9BQU8sSUFBcUIsQ0FBQztBQUMvQixDQUFDO0FBRUQsU0FBUyxPQUFPLENBQXFDLEVBQU07SUFDekQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQztJQUNwQixPQUFPO1FBQVUsY0FBdUI7YUFBdkIsVUFBdUIsRUFBdkIscUJBQXVCLEVBQXZCLElBQXVCO1lBQXZCLHlCQUF1Qjs7UUFDdEMsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLE1BQU0sQ0FBQztTQUNmO1FBQ0QsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNmLE9BQU8sQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QixDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxrQkFBa0IsQ0FDekIsSUFBa0IsRUFDbEIsU0FBdUM7SUFFdkMsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDO1FBQ2xCLElBQU0sSUFBSSxHQUFHLE9BQU8sU0FBUyxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN2RSxJQUFNLElBQUksR0FBRyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDL0MsT0FBTztZQUNMLElBQUk7WUFDSixPQUFPLEVBQUUsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUN6QyxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPO1FBQ0wsS0FBSyxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDeEIsSUFBSSxJQUFJO1lBQ04sT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDcEIsQ0FBQztRQUNELElBQUksT0FBTztZQUNULE9BQU8sR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDO1FBQ3ZCLENBQUM7S0FDRixDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsZ0JBQWdCLENBQVEsQ0FBa0IsRUFBRSxDQUFrQjtJQUNyRSxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1FBQ3RDLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRTtRQUNyQixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRTtRQUNqRCxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzdDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3pDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7S0FDRjtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFDLFFBQWdCO0lBQzFCLElBQVUsR0FBRyxHQUFLLE1BQU0sQ0FBQyxRQUFRLFNBQXBCLENBQXFCO0lBRXhDLElBQUksR0FBRyxHQUFHLEdBQUcsS0FBSyxRQUFRLEVBQUU7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztLQUNuRDtTQUFNLElBQUksR0FBRyxLQUFLLFFBQVEsRUFBRTtRQUMzQixNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQ2hEO1NBQU07UUFDTCx1Q0FBdUM7S0FDeEM7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN0a0JNLFNBQVMsWUFBWTtJQUN4QixPQUFPO1FBQ0gsUUFBUSxFQUFSLFVBQVMsR0FBZ0I7WUFDckIsT0FBTyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDO0tBQ0osQ0FBQztBQUNOLENBQUM7QUFFRCxTQUFTLGdCQUFnQixDQUFDLFNBQStCO0lBQ3JELElBQU0sTUFBTSxHQUNSLE9BQU8sU0FBUyxLQUFLLFFBQVE7UUFDekIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDcEIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM5QyxPQUFPO1FBQ0gsT0FBTztZQUNILE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDckQsQ0FBQztLQUNKLENBQUM7SUFFRixTQUFTLFdBQVcsQ0FBQyxLQUFVO1FBQzNCLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNkLElBQUksTUFBTSxHQUFzQixLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUUxRCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDcEQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN2QixJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUV6QyxJQUNJLElBQUk7b0JBQ0osTUFBTSxDQUFDLFVBQVUsQ0FBQztvQkFDbEIsUUFBUSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQ2xDO29CQUNFLElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDcEMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNuQiw0QkFBNEI7b0JBQzVCLDBCQUEwQjtvQkFFMUIsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7b0JBQzFCLE9BQU8sS0FBSyxDQUFDO2lCQUNoQjthQUNKO1NBQ0o7SUFDTCxDQUFDO0FBQ0wsQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFDLFFBQWdCO0lBQ3hCLElBQVUsR0FBRyxHQUFLLE1BQU0sQ0FBQyxRQUFRLFNBQXBCLENBQXFCO0lBRXhDLElBQUksR0FBRyxHQUFHLEdBQUcsS0FBSyxRQUFRLEVBQUU7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztLQUNyRDtTQUFNLElBQUksR0FBRyxLQUFLLFFBQVEsRUFBRTtRQUN6QixNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQ2xEO1NBQU07UUFDSCx1Q0FBdUM7S0FDMUM7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNyRE0sU0FBUyxtQkFBbUIsQ0FBQyxZQUEwQjtJQUM1RCx3QkFBd0I7SUFDeEIsSUFBSSxlQUFlLEdBQXFCLEVBQUUsQ0FBQztJQUMzQyxLQUFzQixVQUFZLEVBQVosNkJBQVksRUFBWiwwQkFBWSxFQUFaLElBQVksRUFBRTtRQUEvQixJQUFNLE9BQU87UUFDaEIsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFDL0IsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUMzQzthQUFNLElBQUksT0FBTyxZQUFZLE1BQU0sRUFBRTtZQUNwQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwQzthQUFNO1lBQ0wsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMvQjtLQUNGO0lBQ0QsT0FBTyxlQUFlLENBQUM7QUFDekIsQ0FBQztBQUVELFNBQVMsVUFBVSxDQUFDLE9BQWU7SUFDakMsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQzNCLElBQU0sVUFBUSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEMsT0FBTyxVQUFTLENBQVM7O1lBQ3ZCO2dCQUNFLEdBQUMsVUFBUSxJQUFHLENBQUM7bUJBQ2I7UUFDSixDQUFDLENBQUM7S0FDSDtTQUFNO1FBQ0wsT0FBTyxVQUFTLENBQVM7WUFDdkIsT0FBTyxDQUFDLElBQUksT0FBTyxDQUFDO1FBQ3RCLENBQUMsQ0FBQztLQUNIO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDN0JEO0lBQ0UsbUJBQ1MsU0FBb0IsRUFDcEIsSUFBYyxFQUNkLE1BQWtCO1FBSDNCLGlCQUlJO1FBSEssY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixTQUFJLEdBQUosSUFBSSxDQUFVO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQWUzQixhQUFRLEdBQUc7WUFBQyxjQUFpQjtpQkFBakIsVUFBaUIsRUFBakIscUJBQWlCLEVBQWpCLElBQWlCO2dCQUFqQix5QkFBaUI7O1lBQzNCLElBQU0sS0FBSyxHQUFHLEtBQUksQ0FBQyxLQUFLLE9BQVYsS0FBSSxFQUFVLElBQUksQ0FBQyxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQztJQWpCQyxDQUFDO0lBRUosNkJBQVMsR0FBVDtRQUFVLGNBQWlCO2FBQWpCLFVBQWlCLEVBQWpCLHFCQUFpQixFQUFqQixJQUFpQjtZQUFqQix5QkFBaUI7O1FBQ3pCLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEMsT0FBTyxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQseUJBQUssR0FBTDtRQUFNLGNBQWlCO2FBQWpCLFVBQWlCLEVBQWpCLHFCQUFpQixFQUFqQixJQUFpQjtZQUFqQix5QkFBaUI7O1FBQ3JCLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEMsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQU1ILGdCQUFDO0FBQUQsQ0FBQzs7QUFFRCxTQUFTLFFBQVEsQ0FBQyxHQUFjO0lBQzlCLElBQU0sS0FBSyxHQUFnQixFQUFFLENBQUM7SUFDOUIsT0FBTyxHQUFHLEVBQUU7UUFDVixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0tBQ2xCO0lBRUQsSUFBTSxNQUFNLEdBQWEsRUFBRSxDQUFDO0lBQzVCLE9BQU8sS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUNuQixJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN0QztJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDeUI7QUFDYTtBQUNTO0FBSVI7QUFDSztBQU9mO0FBY2YsU0FBZSxnQkFBZ0IsQ0FBQyxLQUFvQjs7UUFxQi9ELFNBQVMsWUFBWSxDQUFDLElBQWtCO1lBQ3BDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1AsT0FBTyxJQUFJLENBQUM7YUFDZjtZQUVELE9BQU8sQ0FDSCxpREFBQywwREFBUTtnQkFDTCwwREFBSyxLQUFLLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxlQUFlLEVBQUMsSUFBSSxFQUFDLGVBQWU7b0JBQ3hELDJEQUFNLElBQUksRUFBQyxjQUFjLElBQUUsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQVE7b0JBQ3RELDBEQUFLLEtBQUssRUFBQyxHQUFHLEVBQUMsSUFBSSxFQUFDLGFBQWEsR0FBTyxDQUN0QztnQkFDTiwwREFDSSxLQUFLLEVBQUMsSUFBSSxFQUNWLE9BQU8sRUFBQyxlQUFlLEVBQ3ZCLFlBQVksRUFBQyxXQUFXLEVBQ3hCLGNBQWMsRUFBQyw0Q0FBNEMsRUFDM0QsdUJBQXVCLEVBQUMsb0RBQW9ELEVBQzVFLGdCQUFnQixFQUFDLG1CQUFtQixFQUNwQyxZQUFZLEVBQUMseUJBQXlCLEVBQ3RDLGFBQWEsRUFBQyx1QkFBdUIsRUFDckMsZ0JBQWdCLEVBQUMsY0FBYyxFQUMvQixJQUFJLEVBQUMsZ0JBQWdCO29CQUVyQiwwREFDSSxLQUFLLEVBQUMsS0FBSyxFQUNYLElBQUksRUFBQyxhQUFhLEVBQ2xCLFVBQVUsRUFBQyxzRkFBc0Y7d0JBUWpHLGlEQUFDLDBEQUFFLElBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUTs0QkFDMUIsK0RBQU8sSUFBSSxDQUFDLFFBQVEsQ0FBUSxDQUMzQjt3QkFDTCxpREFBQywwREFBRSxJQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUM7NEJBQ3pCLDJEQUFNLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxJQUFJLFVBQVUsQ0FBQyxJQUMzQyxJQUFJLENBQUMsS0FBSyxDQUNSLENBQ04sQ0FRSCxDQUNKLENBQ0MsQ0FDZCxDQUFDO1FBQ04sQ0FBQzs7Ozs7OzswQkF4RUksMERBQVEsUUFDTCw2REFBUSxLQUFLLEVBQUMsMkJBQTJCLHlCQUVoQzs7OzswQkFFSiwyREFBUzsyQkFDTixLQUFLLEVBQUMsVUFBVTtvQkFFTixZQUFPO29CQUNULHFCQUFNLEtBQUssQ0FBQyxTQUFTOzswQkFBckIsU0FBcUI7b0JBQ3JCLHFCQUFNLEtBQUssQ0FBQyxTQUFTO3dCQUZ6QixxQkFBTSw0QkFFRixTQUFxQixHQUN4Qjt3QkFackIsc0JBQU8sQ0FDSCw0QkFJSSw0QkFDSSw2QkFFSSxPQUFJLEdBQ0EsU0FHQyxFQUVMLHNCQUFtQixHQUFFLFlBQVksUUFDbkMsR0FDQyxHQUNBLENBQ2QsRUFBQzs7OztDQXdETDtBQUVELFNBQWUsT0FBTyxDQUFDLFNBQXFCLEVBQUUsU0FBcUI7Ozs7O3dCQUNoRCxxQkFBTSwrREFBVyxFQUFFOztvQkFBNUIsTUFBTSxHQUFHLFNBQW1CO29CQUU1QixJQUFJLEdBQWtDLEVBQUUsQ0FBQztvQkFDekMsTUFBTSxHQUFHLHVEQUFPLENBQ2xCLE1BQU0sRUFDTixVQUFDLENBQUMsSUFBSyxRQUFDLENBQUMsVUFBVSxFQUFaLENBQVksRUFDbkIsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLFFBQUM7d0JBQ1AsR0FBRyxFQUFFLENBQUM7d0JBQ04sUUFBUSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLElBQUssUUFBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQVQsQ0FBUyxDQUFDO3dCQUMxQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7cUJBQ2IsQ0FBQyxFQUpRLENBSVIsQ0FDTCxDQUFDO29CQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQzt3QkFDYixtQkFBWSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFBaEUsQ0FBZ0UsQ0FDbkUsQ0FBQzt3Q0FFUyxLQUFLO3dCQUNaLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7d0JBQzVCLElBQUksSUFBSSxFQUFFOzRCQUNOLElBQU0sZ0JBQWMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUNoQyxVQUFDLENBQUMsSUFBSyxRQUFDLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQTFDLENBQTBDLENBQ3BELENBQUM7NEJBRUYsSUFBSSxDQUFDLElBQUksQ0FBQztnQ0FDTixVQUFVLEVBQUUsS0FBSyxDQUFDLEdBQUc7Z0NBQ3JCLEtBQUssRUFBRSw0REFBUSxDQUFDLElBQUksQ0FBQztnQ0FDckIsTUFBTSxFQUFOLFVBQU8sSUFBWSxFQUFFLE1BQWM7b0NBQy9CLElBQU0sS0FBSyxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsTUFBTSxDQUFDO29DQUNqQyxJQUFNLEdBQUcsR0FBRyxLQUFLLEdBQUcsNERBQVEsQ0FBQztvQ0FFN0IsSUFBTSxNQUFNLEdBQUcsZ0JBQWMsQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDO3dDQUNuQyxvRUFBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQztvQ0FBakMsQ0FBaUMsQ0FDcEMsQ0FBQztvQ0FDRixPQUFPO3dDQUNILFFBQVEsRUFBRSxNQUFNOzZDQUNYLEdBQUcsQ0FBQyxVQUFDLENBQUMsSUFBSyxtQkFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQXJDLENBQXFDLENBQUM7NkNBQ2pELElBQUksQ0FBQyxHQUFHLENBQUM7d0NBQ2QsS0FBSyxFQUFFLENBQUM7d0NBQ1IsTUFBTSxFQUFFLENBQUM7d0NBQ1QsUUFBUSxFQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBQzs0Q0FDakIsb0VBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUM7d0NBQWpDLENBQWlDLENBQ3BDLENBQUMsTUFBTSxHQUFHLENBQUM7cUNBQ0gsQ0FBQztnQ0FDdEIsQ0FBQztnQ0FDRCxPQUFPLEVBQVAsVUFBUSxJQUFrQjtvQ0FDdEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO3dDQUNmLE9BQU8sV0FBVyxDQUFDO3FDQUN0Qjt5Q0FBTTt3Q0FDSCxPQUFPLFdBQVcsQ0FBQztxQ0FDdEI7Z0NBQ0wsQ0FBQzs2QkFDSixDQUFDLENBQUM7eUJBQ047O29CQXJDTCxXQUEwQixFQUFOLGlCQUFNLEVBQU4sb0JBQU0sRUFBTixJQUFNO3dCQUFmLEtBQUs7Z0NBQUwsS0FBSztxQkFzQ2Y7b0JBRUQsc0JBQU8sSUFBSSxFQUFDOzs7O0NBQ2Y7QUFFRCxTQUFTLFlBQVksQ0FBQyxTQUFxQixFQUFFLFVBQWtCO0lBQzNELElBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakMsT0FBTyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQ2pCLElBQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksVUFBVSxFQUFFO1lBQ3BCLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQztTQUN0QjthQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDckIsS0FBZ0IsVUFBVSxFQUFWLE1BQUMsQ0FBQyxRQUFRLEVBQVYsY0FBVSxFQUFWLElBQVUsRUFBRTtnQkFBdkIsSUFBTSxDQUFDO2dCQUNSLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakI7U0FDSjtLQUNKO0FBQ0wsQ0FBQztBQUVELFNBQVMsWUFBWSxDQUFDLENBQVc7SUFDN0IsT0FBTyw0REFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUM3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckx5QjtBQUNhO0FBQ1M7QUFJUjtBQVFWO0FBTWYsU0FBZSxtQkFBbUIsQ0FBQyxLQUFvQjs7Ozs7Ozs7MEJBRTdELDBEQUFRLFFBQ0wsNkRBQVEsS0FBSyxFQUFDLDJCQUEyQiw0QkFFaEM7Ozs7MEJBRUosMkRBQVM7MkJBQ04sS0FBSyxFQUFDLFVBQVU7b0JBQ0osWUFBTztvQkFBQyxxQkFBTSxLQUFLLENBQUMsU0FBUzt3QkFBbkMscUJBQU0sa0JBQVEsU0FBcUIsRUFBQzt3QkFSMUQsc0JBQU8sQ0FDSCw0QkFJSSw0QkFDSSw2QkFFSSxPQUFJLEdBQUUsU0FBb0MsRUFDMUMsc0JBQW1CLEdBQUUsVUFBQyxJQUFJO29DQUN0QixJQUFJLENBQUMsSUFBSSxFQUFFO3dDQUNQLE9BQU8sSUFBSSxDQUFDO3FDQUNmO29DQUNELE9BQU8sQ0FDSCxpREFBQywwREFBUTt3Q0FDTDs7NENBQVUsSUFBSSxDQUFDLE1BQU0sQ0FBUTt3Q0FDN0IsaURBQUMsMERBQUUsSUFBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsTUFBTTs0Q0FDdEMsMkRBQU0sS0FBSyxFQUFDLDRCQUE0QixJQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQ3ZCLENBQ04sQ0FDRSxDQUNkLENBQUM7Z0NBQ04sQ0FBQyxRQUNILEdBQ0MsR0FDQSxDQUNkLEVBQUM7Ozs7Q0FDTDtBQUVELFNBQWUsT0FBTyxDQUFDLFNBQXFCOztRQWV4QyxTQUFTLEtBQUssQ0FBQyxHQUFhO1lBQ3hCLElBQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDLElBQUssUUFBQyxDQUFDLFVBQVUsS0FBSyxHQUFHLENBQUMsRUFBRSxFQUF2QixDQUF1QixDQUFDLENBQUM7WUFDckUsSUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsSUFBSyxRQUFDLENBQUMsVUFBVSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEVBQXZCLENBQXVCLENBQUMsQ0FBQztZQUNwRSxJQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDLElBQUssUUFBQyxJQUFJLElBQUksRUFBVCxDQUFTLENBQUMsQ0FBQztZQUNsRSxJQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLGNBQWMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUNwRCxPQUFPLElBQUksQ0FBQzthQUNmO1lBRUQsT0FBTztnQkFDSCxVQUFVLEVBQUUsR0FBRyxDQUFDLEVBQUU7Z0JBQ2xCLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSTtnQkFDZixRQUFRO2dCQUNSLE1BQU0sRUFBTixVQUFPLElBQVksRUFBRSxNQUFjO29CQUMvQixJQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQztvQkFDakMsSUFBTSxHQUFHLEdBQUcsS0FBSyxHQUFHLDREQUFRLENBQUM7b0JBRTdCLElBQU0sSUFBSSxHQUFhO3dCQUNuQixNQUFNLEVBQUUsa0JBQWtCLENBQUMsY0FBYyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUM7d0JBQ3RELE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxjQUFjLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQztxQkFDekQsQ0FBQztvQkFFRixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO3dCQUNoQyxPQUFPLElBQUksQ0FBQztxQkFDZjtvQkFFRCxPQUFPLElBQUksQ0FBQztnQkFDaEIsQ0FBQztnQkFDRCxPQUFPLFlBQUMsSUFBSTtvQkFDUixJQUFJLENBQUMsSUFBSSxFQUFFO3dCQUNQLE9BQU8sSUFBSSxDQUFDO3FCQUNmO29CQUNPLFVBQU0sR0FBSyxJQUFJLE9BQVQsQ0FBVTtvQkFDeEIsSUFBSSxNQUFNLEVBQUU7d0JBQ1IsT0FBTyxrQkFBZ0IsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQUcsQ0FBQztxQkFDckQ7b0JBRUQsT0FBTyxJQUFJLENBQUM7Z0JBQ2hCLENBQUM7YUFDSixDQUFDO1FBQ04sQ0FBQzs7Ozt3QkFyRGMscUJBQU0sK0RBQVcsRUFBRTs7b0JBQTVCLE1BQU0sR0FBRyxTQUFtQjtvQkFDbEIscUJBQU0sZ0VBQVksRUFBRTs7b0JBQTlCLE9BQU8sR0FBRyxTQUFvQjtvQkFDOUIsSUFBSSxHQUE4QixFQUFFLENBQUM7b0JBRTNDLEtBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTt3QkFDakMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDbkIsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDdkIsSUFBSSxHQUFHLEVBQUU7NEJBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzt5QkFDbEI7cUJBQ0o7b0JBRUQsc0JBQU8sSUFBSSxFQUFDOzs7O0NBMENmO0FBRU0sU0FBUyxrQkFBa0IsQ0FDOUIsY0FBZ0MsRUFDaEMsS0FBYSxFQUNiLEdBQVc7SUFFWCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7SUFFZCxLQUFpQixVQUFjLEVBQWQsaUNBQWMsRUFBZCw0QkFBYyxFQUFkLElBQWMsRUFBRTtRQUE1QixJQUFNLEVBQUU7UUFDVCxJQUFJLENBQUMsNkRBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUM7WUFBRSxTQUFTO1FBQ2xELEtBQUssRUFBRSxDQUFDO0tBQ1g7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBRU0sU0FBUyxrQkFBa0IsQ0FDOUIsTUFBbUIsRUFDbkIsU0FBaUIsRUFDakIsT0FBZTtJQUVmLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNmLElBQUksTUFBTSxFQUFFO1FBQ1IsSUFBTSxVQUFVLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFDLElBQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxLQUFLLElBQUksQ0FBQyxHQUFHLFVBQVUsRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLElBQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsNERBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxHQUFHLE1BQU0sRUFBRTtnQkFDWixNQUFNLEdBQUcsQ0FBQyxDQUFDO2FBQ2Q7U0FDSjtLQUNKO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQUVELFNBQVMsV0FBVyxDQUFDLENBQVM7SUFDMUIsSUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsNERBQVEsQ0FBQyxDQUFDO0FBQy9DLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSnlCO0FBQ3NCO0FBQzBCO0FBQ1o7QUFXL0MsU0FBZSxjQUFjLENBQUMsS0FBb0I7Ozs7Ozs7OzBCQUV4RCwwREFBUSxRQUNMLDZEQUFRLEtBQUssRUFBQywyQkFBMkI7NEJBQ3JDLDREQUFPLElBQUksRUFBQyxNQUFNLEdBQUc7NEJBQ3JCLDZEQUNJLEtBQUssRUFBQywrQkFBK0IsRUFDckMsS0FBSyxFQUFDLDJCQUEyQixpQkFHNUI7NEJBQ1QsNkRBQ0ksS0FBSyxFQUFDLGtEQUFrRCxFQUN4RCxLQUFLLEVBQUMsMEJBQTBCO2dDQUVoQywyREFBTSxLQUFLLEVBQUMsb0JBQW9CLEdBQVE7Z0NBQ3hDLHdEQUNJLEtBQUssRUFBQyxpQ0FBaUMsaUJBQzNCLE1BQU0sZUFHbEI7Z0NBQ0osMkRBQU0sS0FBSyxFQUFDLG1CQUFtQixrQkFBbUIsQ0FDN0MsQ0FDSjs7OzswQkFFSiwyREFBUzsyQkFDTixLQUFLLEVBQUMsVUFBVTtvQkFDSixZQUFPO29CQUFDLHFCQUFNLEtBQUssQ0FBQyxTQUFTO3dCQUFuQyxxQkFBTSxrQkFBUSxTQUFxQixFQUFDO3dCQTNCMUQsc0JBQU8sQ0FDSCw0QkF1QkksNEJBQ0ksNkJBRUksT0FBSSxHQUFFLFNBQW9DLEVBQzFDLHNCQUFtQixHQUFFLFVBQUMsSUFBSTtvQ0FDdEIsT0FBTyxDQUNILGlEQUFDLDBEQUFRO3dDQUNKLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTTt3Q0FDcEIsMkRBQU0sS0FBSyxFQUFDLG9DQUFvQyxJQUMzQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQ2YsQ0FDQSxDQUNkLENBQUM7Z0NBQ04sQ0FBQyxRQUNILEdBQ0MsR0FDQSxDQUNkLEVBQUM7Ozs7Q0FDTDtBQUVELFNBQWUsT0FBTyxDQUFDLFNBQXFCOztRQVV4QyxTQUFTLEtBQUssQ0FBQyxHQUFhO1lBQ3hCLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLElBQUssUUFBQyxDQUFDLFVBQVUsS0FBSyxHQUFHLENBQUMsRUFBRSxFQUF2QixDQUF1QixDQUFDLENBQUM7WUFDNUQsT0FBTztnQkFDSCxVQUFVLEVBQUUsR0FBRyxDQUFDLEVBQUU7Z0JBQ2xCLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSTtnQkFDZixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUNqQyxNQUFNLEVBQU4sVUFBTyxJQUFZLEVBQUUsTUFBYztvQkFDL0IsSUFBSSxDQUFDLE1BQU0sRUFBRTt3QkFDVCxPQUFPLElBQUksQ0FBQztxQkFDZjtvQkFDRCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUUsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDakQsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxLQUFLLEVBQUU7d0JBQ1IsT0FBTyxJQUFJLENBQUM7cUJBQ2Y7b0JBQ0QsT0FBTzt3QkFDSCxNQUFNLEVBQUUsS0FBSzt3QkFDYixRQUFRLEVBQUUsS0FBSyxHQUFHLENBQUM7cUJBQ3RCLENBQUM7Z0JBQ04sQ0FBQztnQkFDRCxPQUFPLFlBQUMsSUFBSTtvQkFDUixJQUFJLENBQUMsSUFBSSxFQUFFO3dCQUNQLE9BQU8sSUFBSSxDQUFDO3FCQUNmO29CQUNPLFVBQU0sR0FBZSxJQUFJLE9BQW5CLEVBQUUsUUFBUSxHQUFLLElBQUksU0FBVCxDQUFVO29CQUNsQyxJQUFJLE1BQU0sRUFBRTt3QkFDUixJQUFJLFFBQVEsRUFBRTs0QkFDVixJQUFNLEtBQUssR0FBRyxNQUFNLEdBQUcsUUFBUSxDQUFDOzRCQUNoQyxJQUFJLEtBQUssRUFBRTtnQ0FDUCxPQUFPLGtCQUFnQixJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBRyxDQUFDOzZCQUNwRDtpQ0FBTTtnQ0FDSCxPQUFPLG1CQUFtQixDQUFDOzZCQUM5Qjt5QkFDSjt3QkFDRCxPQUFPLHFCQUFxQixDQUFDO3FCQUNoQzt5QkFBTSxJQUFJLFFBQVEsRUFBRTt3QkFDakIsT0FBTyxrQkFBZ0IsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQUcsQ0FBQztxQkFDdkQ7b0JBRUQsT0FBTyxJQUFJLENBQUM7Z0JBQ2hCLENBQUM7YUFDSixDQUFDO1FBQ04sQ0FBQzs7Ozt3QkFuRGUscUJBQU0sZ0VBQVksRUFBRTs7b0JBQTlCLE9BQU8sR0FBRyxTQUFvQjtvQkFDOUIsSUFBSSxHQUFnQyxFQUFFLENBQUM7b0JBQzdDLEtBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTt3QkFDakMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDekI7b0JBRUQsc0JBQU8sSUFBSSxFQUFDOzs7O0NBNkNmO0FBRUQsU0FBUyxXQUFXLENBQUMsSUFBZ0I7SUFDakMsSUFBSSxDQUFDLElBQUksRUFBRTtRQUNQLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFFTyxVQUFNLEdBQWUsSUFBSSxPQUFuQixFQUFFLFFBQVEsR0FBSyxJQUFJLFNBQVQsQ0FBVTtJQUNsQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsUUFBUSxFQUFFO1FBQ3RCLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFFRCxJQUFNLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3hELE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFJLEtBQUssTUFBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDdkMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SHlCO0FBQ21CO0FBRWI7QUFDYztBQUNIO0FBQ0w7QUFDVTtBQUNUO0FBQ0k7QUFDMEI7QUFDdEI7QUFFL0MsU0FBUyxHQUFHO0lBQ1YsSUFBTSxTQUFTLEdBQUcsa0VBQWMsRUFBRSxDQUFDO0lBQ25DLElBQU0sU0FBUyxHQUFHLGtFQUFjLEVBQUUsQ0FBQztJQUVuQyxPQUFPO1FBQ0w7WUFDRSxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDakIsU0FBUyxFQUFFLGNBQU0sd0RBQUMsNkNBQWMsSUFBQyxTQUFTLEVBQUUsU0FBUyxHQUFJLEVBQXhDLENBQXdDO1NBQzFEO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsQ0FBQyxjQUFjLENBQUM7WUFDdEIsU0FBUyxFQUFFLGNBQU0sd0RBQUMsa0RBQWtCLElBQUMsU0FBUyxFQUFFLFNBQVMsR0FBSSxFQUE1QyxDQUE0QztTQUM5RDtRQUNEO1lBQ0UsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ2hCLFNBQVMsRUFBRSxjQUFNLHdEQUFDLDRDQUFjLElBQUMsU0FBUyxFQUFFLFNBQVMsR0FBSSxFQUF4QyxDQUF3QztTQUMxRDtRQUNEO1lBQ0UsSUFBSSxFQUFFLEVBQUU7WUFDUixTQUFTLEVBQUUsY0FBTSxRQUNmLGlEQUFDLCtDQUFnQixJQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsR0FBSSxDQUNqRSxFQUZnQixDQUVoQjtTQUNGO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFFTSxTQUFTLGNBQWM7SUFDNUIsT0FBTztRQUNMLElBQUksRUFBSixVQUFLLE9BQW9CO1lBQ3ZCLElBQU0sWUFBWSxHQUFHLElBQUksNkNBQUssQ0FBVyxFQUFFLENBQUMsQ0FBQztZQUM3QyxPQUFPLENBQ0wsaURBQUMseUNBQVU7Z0JBQ1QsMERBQUssS0FBSyxFQUFDLHNCQUFzQjtvQkFDL0IsNkRBQVEsS0FBSyxFQUFDLG1CQUFtQjt3QkFDL0IsaURBQUMsd0RBQU0sSUFBQyxRQUFRLEVBQUUsWUFBWSxHQUFJLENBQzNCO29CQUNULGlEQUFDLHVEQUFZLElBQ1gsVUFBVSxFQUFFLFVBQVUsRUFDdEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsRUFDbEMsTUFBTSxFQUFFLGlEQUFDLHlEQUFPLE9BQUcsR0FDbkIsQ0FDRSxDQUNLLENBQ2QsQ0FBQztZQUVGLFNBQVMsVUFBVSxDQUFDLEtBQWlCO2dCQUNuQyxJQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLElBQUksS0FBSyxFQUFFO29CQUNULFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQzFCO1lBQ0gsQ0FBQztRQUNILENBQUM7S0FDRixDQUFDO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEV5QztBQWtCbkMsU0FBUyxTQUFTLENBQUMsRUFBWSxFQUFFLEtBQWEsRUFBRSxHQUFXO0lBQzlELE9BQU8sRUFBRSxDQUFDLFNBQVMsR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDcEQsQ0FBQztBQWdDTSxTQUFTLFFBQVEsQ0FBQyxDQUFXO0lBQ2hDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRTtRQUNuQyxPQUFPLElBQUksQ0FBQztLQUNmO0lBRUQsT0FBTyxDQUFDLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDO0FBQzFDLENBQUM7QUFFTSxTQUFTLFdBQVc7SUFDdkIsT0FBTyxnREFBUyxDQUFDLDJCQUEyQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxJQUFLLFFBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBUixDQUFRLENBQUMsQ0FBQztBQUN4RSxDQUFDO0FBRU0sU0FBUyxZQUFZO0lBQ3hCLE9BQU8sZ0RBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsSUFBSyxRQUFDLENBQUMsSUFBSSxFQUFFLEVBQVIsQ0FBUSxDQUFDLENBQUM7QUFDaEUsQ0FBQztBQUVNLFNBQVMsY0FBYztJQUMxQixPQUFPLGdEQUFTLENBQUMscUJBQXFCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLElBQUssUUFBQyxDQUFDLElBQUksRUFBRSxFQUFSLENBQVEsQ0FBQyxDQUFDO0FBQ2xFLENBQUM7QUFFTSxTQUFTLGNBQWM7SUFDMUIsT0FBTyxnREFBUyxDQUFDLHFCQUFxQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxJQUFLLFFBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBUixDQUFRLENBQUMsQ0FBQztBQUNsRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRXlCO0FBQ2U7QUFDRjtBQUNTO0FBS1I7QUFDRTtBQUNjO0FBQ1M7QUFDM0M7QUFNUCxTQUFTLGNBQWMsQ0FBQyxLQUFvQjtJQUN6RCxPQUFPO1FBQ0MsSUFBSTs7Ozs7Ozs7a0NBRUwsMERBQVEsUUFDUCw2REFBUSxLQUFLLEVBQUMsMkJBQTJCLHlCQUE0Qjs7OztrQ0FFbEUsMkRBQVM7bUNBQ1IsS0FBSyxFQUFDLE9BQU87NEJBQ0QsWUFBTzs0QkFBQyxxQkFBTSxLQUFLLENBQUMsU0FBUztnQ0FBbkMscUJBQU0sa0JBQVEsU0FBcUIsRUFBQztnQ0FObEQsc0JBQU8sQ0FDTCw0QkFFRSw0QkFDRSw2QkFFRSxPQUFJLEdBQUUsU0FBb0MsRUFDMUMsc0JBQW1CLEdBQUUsaUJBQWlCLFFBQ3RDLEdBQ0csR0FDRSxDQUNaLEVBQUM7Ozs7U0FDSDtLQUNGLENBQUM7SUFFRixTQUFTLGlCQUFpQixDQUN4QixJQUFvQixFQUNwQixHQUE2QjtRQUU3QixJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDaEIsT0FBTyxpREFBQywyREFBRyxJQUFDLEtBQUssRUFBQyxnQkFBZ0IsR0FBRyxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQ25DLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxJQUFNLFNBQVMsR0FBRztZQUNoQixJQUFJO1lBQ0osSUFBSSxDQUFDLFNBQVMsSUFBSSxHQUFHO1lBQ3JCLElBQUksQ0FBQyxNQUFNLElBQUksUUFBUTtZQUN2QixJQUFJLENBQUMsV0FBVyxJQUFJLGFBQWE7U0FDbEMsQ0FBQztRQUNGLE9BQU8sQ0FDTCwwREFDRSxLQUFLLEVBQUUsU0FBUyxFQUNoQixVQUFVLEVBQUMsWUFBWSxFQUN2QixLQUFLLEVBQUUsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJO1lBRWpELDBEQUFLLEtBQUssRUFBQyxLQUFLO2dCQUNkLCtEQUFPLElBQUksQ0FBQyxTQUFTLENBQVE7Z0JBQzdCLDJEQUFNLEtBQUssRUFBQyxPQUFPLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxjQUFjLEVBQUMsYUFBYSxRQUV4RDtnQkFDUCxpREFBQywwREFBRSxJQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU07b0JBQzFCLDJEQUFNLEtBQUssRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLFVBQVUsUUFFbkMsQ0FDSixDQUNELENBQ0YsQ0FDUCxDQUFDO0lBQ0osQ0FBQztBQUNILENBQUM7QUFFRCxTQUFlLE9BQU8sQ0FDcEIsU0FBcUI7O1FBeUJyQixTQUFTLEtBQUssQ0FBQyxVQUF3QjtZQUNyQyxJQUFNLFFBQVEsR0FBK0IsRUFBRSxDQUFDO1lBRWhELElBQU0sU0FBUyxHQUFHLHVEQUFPLENBQ3ZCLFVBQVUsQ0FBQyxLQUFLLEVBQ2hCLFVBQUMsQ0FBQyxJQUFLLG1FQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQWpDLENBQWlDLENBQ3pDLENBQUM7WUFFRixTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxRQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQTFCLENBQTBCLENBQUMsQ0FBQztvQ0FFMUMsUUFBUTtnQkFDakIsUUFBUSxDQUFDLElBQUksQ0FBQztvQkFDWixVQUFVLEVBQUUsUUFBUSxDQUFDLEdBQUc7b0JBQ3hCLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRztvQkFDbkIsTUFBTSxFQUFOLFVBQU8sQ0FBUyxFQUFFLENBQVM7d0JBQ3pCLElBQU0sS0FBSyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO3dCQUN6QixJQUFNLEdBQUcsR0FBRyxLQUFLLEdBQUcsNERBQVEsQ0FBQzt3QkFFN0IsS0FBa0IsVUFBYyxFQUFkLGFBQVEsQ0FBQyxLQUFLLEVBQWQsY0FBYyxFQUFkLElBQWMsRUFBRTs0QkFBN0IsSUFBTSxHQUFHOzRCQUNaLElBQ0UsR0FBRyxDQUFDLFFBQVEsQ0FBQyxTQUFTLElBQUksR0FBRztnQ0FDN0IsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksS0FBSyxFQUM3QjtnQ0FDQSxTQUFTOzZCQUNWOzRCQUNELElBQU0sR0FBRyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7NEJBQ3hDLElBQUksR0FBRyxFQUFFO2dDQUNQLE9BQU87b0NBQ0wsU0FBUyxFQUFFLEdBQUcsQ0FBQyxTQUFTO29DQUN4QixNQUFNLEVBQUUsS0FBSztvQ0FDYixPQUFPLEVBQUUsR0FBRyxDQUFDLFlBQVk7b0NBQ3pCLFdBQVcsRUFBRSxLQUFLO2lDQUNuQixDQUFDOzZCQUNIO3lCQUNGO3dCQUNELE9BQU8sSUFBSSxDQUFDO29CQUNkLENBQUM7aUJBQ0YsQ0FBQyxDQUFDOztZQTNCTCxLQUF1QixVQUFTLEVBQVQsdUJBQVMsRUFBVCx1QkFBUyxFQUFULElBQVM7Z0JBQTNCLElBQU0sUUFBUTt3QkFBUixRQUFRO2FBNEJsQjtZQUVELE9BQU87Z0JBQ0wsVUFBVSxFQUFFLFVBQVUsQ0FBQyxHQUFHO2dCQUMxQixPQUFPO29CQUNMLE9BQU8sSUFBSSxDQUFDO2dCQUNkLENBQUM7Z0JBQ0QsUUFBUTtnQkFDUixLQUFLLEVBQUUsVUFBVSxDQUFDLEdBQUc7Z0JBQ3JCLE1BQU07b0JBQ0osT0FBTyxFQUFFLENBQUM7Z0JBQ1osQ0FBQzthQUNGLENBQUM7UUFDSixDQUFDOzs7O3dCQTFFdUIscUJBQU0sZ0RBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUM7d0JBQ2xFLFFBQUMsQ0FBQyxJQUFJLEVBQUU7b0JBQVIsQ0FBUSxDQUNUOztvQkFGSyxNQUFNLEdBQVksU0FFdkI7b0JBRUssV0FBVyxHQUErQixFQUFFLENBQUM7b0JBQ25ELFdBQTJCLEVBQVQsdUJBQVMsRUFBVCx1QkFBUyxFQUFULElBQVMsRUFBRTt3QkFBbEIsR0FBRzt3QkFDWixXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztxQkFDM0I7b0JBRUssSUFBSSxHQUFvQyxFQUFFLENBQUM7b0JBRTNDLFdBQVcsR0FBbUIsdURBQU8sQ0FBQyxNQUFNLEVBQUUsVUFBQyxDQUFDLElBQUssUUFBQyxDQUFDLGVBQWUsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO29CQUM5RSxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxRQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQTFCLENBQTBCLENBQUMsQ0FBQztvQkFFdkQsV0FBb0MsRUFBWCwyQkFBVyxFQUFYLHlCQUFXLEVBQVgsSUFBVyxFQUFFO3dCQUEzQixVQUFVO3dCQUNiLEdBQUcsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQzlCLElBQUksR0FBRyxFQUFFOzRCQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7eUJBQ2hCO3FCQUNGO29CQUVELHNCQUFPLElBQUksRUFBQzs7OztDQXNEYjtBQVVELFNBQVMsV0FBVztJQUNsQixJQUFNLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQztJQUMvQixJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFDakIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMxQixNQUFNLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzNCO0lBQ0QsT0FBTyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxHQUFXO0lBQzdCLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRCxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0t5QjtBQUVNO0FBQ3NCO0FBQ0Y7QUFFN0MsU0FBUyxTQUFTO0lBQ3ZCLE9BQU87UUFDTCxJQUFJLEVBQUosVUFBSyxPQUFvQjtZQUN2QixPQUFPLENBQ0wsaURBQUMseUNBQVU7Z0JBQ1QsMERBQUssS0FBSyxFQUFDLHNCQUFzQjtvQkFDL0IseUVBQXNCO29CQUN0Qjt3QkFDRSwyREFBTSxLQUFLLEVBQUMsWUFBWTs0QkFDdEIsaURBQUMsMkRBQVMsSUFBQyxLQUFLLEVBQUMsTUFBTSxHQUFHLENBQ3JCO3dCQUNQLGlEQUFDLDREQUFVLElBQUMsS0FBSyxFQUFDLFVBQVUsR0FBRyxDQUMxQixDQUNILENBQ0ssQ0FDZCxDQUFDO1FBQ0osQ0FBQztLQUNGLENBQUM7QUFDSixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QjZCO0FBRWtCO0FBQ0g7QUFDSjtBQUNJO0FBQ1E7QUFDVDtBQUNYO0FBQ047QUFDVTtBQUNhO0FBTTNCO0FBRUQ7QUFDNkI7QUFDWDtBQUNJO0FBRVc7QUFDYjtBQUUxQyxTQUFTLE1BQU07SUFDYixPQUFPLENBQ0wseURBQVEsS0FBSyxFQUFDLHlCQUF5QixFQUFDLEVBQUUsRUFBQyxTQUFTO1FBQ2xELHNEQUFLLEtBQUssRUFBQyxzQkFBc0I7WUFDL0IsMERBQVMsS0FBSyxFQUFDLGdFQUFnRTtnQkFDN0UseURBQVEsS0FBSyxFQUFDLGlFQUFpRSxXQUV0RTtnQkFDVCx1REFBTSxLQUFLLEVBQUMsd0JBQXdCLHFDQUU3QixDQUNDO1lBQ1YsMERBQVMsS0FBSyxFQUFDLDhEQUE4RDtnQkFDM0UseURBQ0UsS0FBSyxFQUFDLGdIQUFnSCxnQkFDM0csVUFBVSxFQUNyQixLQUFLLEVBQUMsMEdBQTBHLGFBR3pHO2dCQUNULHlEQUNFLEtBQUssRUFBQyxnSEFBZ0gsZ0JBQzNHLFVBQVUsRUFDckIsS0FBSyxFQUFDLDBHQUEwRyxVQUd6RyxDQUNELENBQ04sQ0FDQyxDQUNWLENBQUM7QUFDSixDQUFDO0FBTUQsU0FBUyxLQUFLLENBQUMsS0FBaUI7SUFDdEIsT0FBRyxHQUFLLEtBQUssSUFBVixDQUFXO0lBQ3RCLE9BQU8sQ0FDTCx3REFDRSxLQUFLLEVBQUU7WUFDTCw0REFBNEQ7WUFDNUQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLElBQUk7U0FDdkM7UUFFRCxzREFBSyxLQUFLLEVBQUMscUJBQXFCO1lBQzlCLHNEQUFLLEtBQUssRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDLEdBQUc7Z0JBQ2hDLHFEQUFJLEtBQUssRUFBQyxrQkFBa0IsR0FBRztnQkFDL0IsNkNBQUMsUUFBUSxJQUNQLElBQUksRUFBQyxXQUFXLEVBQ2hCLEdBQUcsRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxFQUMvQixJQUFJLEVBQUMsT0FBTyxFQUNaLEtBQUssRUFBQyxXQUFXLEdBQ2pCO2dCQUNGLDZDQUFDLFFBQVEsSUFDUCxJQUFJLEVBQUMsVUFBVSxFQUNmLEdBQUcsRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUM5QixJQUFJLEVBQUMsUUFBUSxHQUNiO2dCQUNGLDZDQUFDLFFBQVEsSUFDUCxJQUFJLEVBQUMsaUJBQWlCLEVBQ3RCLEdBQUcsRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLEVBQ3JDLElBQUksRUFBQyxVQUFVLEVBQ2YsS0FBSyxFQUFDLE9BQU8sR0FDYjtnQkFDRiw2Q0FBQyxRQUFRLElBQ1AsSUFBSSxFQUFDLHNCQUFzQixFQUMzQixHQUFHLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUNyQyxJQUFJLEVBQUMsYUFBYSxHQUNsQjtnQkFDRiw2Q0FBQyxRQUFRLElBQ1AsSUFBSSxFQUFDLFVBQVUsRUFDZixHQUFHLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFDOUIsSUFBSSxFQUFDLFVBQVUsR0FDZjtnQkFDRiw2Q0FBQyxRQUFRLElBQ1AsSUFBSSxFQUFDLGdCQUFnQixFQUNyQixHQUFHLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFDOUIsSUFBSSxFQUFDLFVBQVUsRUFDZixLQUFLLEVBQUMsS0FBSyxHQUNYO2dCQUNGLHFEQUFJLEtBQUssRUFBQyxrQkFBa0IsR0FBRztnQkFDOUIsb0RBQU8sQ0FDSixDQUNGLENBQ0EsQ0FDVCxDQUFDO0FBQ0osQ0FBQztBQUVNLFNBQVMsVUFBVSxDQUFDLEtBQUssRUFBRSxRQUFhO0lBQzdDLE9BQU8sMERBQVMsS0FBSyxFQUFDLGFBQWEsSUFBRSxRQUFRLENBQVcsQ0FBQztBQUMzRCxDQUFDO0FBRUQsU0FBUyxXQUFXO0lBQ2xCLE9BQU87UUFDTDtZQUNFLElBQUksRUFBRSxDQUFDLGdCQUFnQixDQUFDO1lBQ3hCLFNBQVMsRUFBRSw0REFBYztTQUMxQjtRQUNEO1lBQ0UsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDO1lBQ25CLFNBQVMsRUFBRSxpREFBUztTQUNyQjtRQUNEO1lBQ0UsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2xCLFNBQVMsRUFBRSxzREFBUTtTQUNwQjtLQUNGLENBQUM7QUFDSixDQUFDO0FBQ0QsRUFBRSxDQUFDO0FBQ1ksU0FBUyxHQUFHO0lBQ3pCLElBQU0sT0FBTyxHQUFHLDREQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbEMsSUFBTSxNQUFNLEdBQUcsMkRBQVksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRTtRQUNuRCxFQUFFLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUU7UUFDOUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUUsU0FBUyxFQUFFLGtEQUFhLEVBQUU7UUFDdEQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsaUVBQVksRUFBRTtLQUN4QyxDQUFDLENBQUM7SUFDSCxPQUFPLENBQ0wsNkNBQUMsMERBQVE7UUFDUCw2Q0FBQyw0REFBWSxPQUFHO1FBQ2hCLDZDQUFDLHVEQUFZLElBQUMsTUFBTSxFQUFFLE1BQU0sR0FBSSxDQUN2QixDQUNaLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxjQUFjO0lBQ3JCLE9BQU87UUFDTCxJQUFJLEVBQUosVUFBSyxPQUFvQjtZQUN2QixPQUFPLENBQ0wsNkNBQUMsMERBQVE7Z0JBQ1AsNkNBQUMsNERBQVksT0FBRztnQkFDaEIsNkNBQUMsS0FBSyxJQUFDLElBQUksRUFBRSxRQUFRLENBQUMsUUFBUSxJQUFJLFFBQVEsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsR0FBSTtnQkFDaEUsc0RBQUssS0FBSyxFQUFDLGtCQUFrQixHQUFPO2dCQUNwQyxzREFBSyxLQUFLLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFDLGVBQWU7b0JBQ3ZELDZDQUFDLE1BQU0sT0FBRztvQkFDVix1REFBTSxLQUFLLEVBQUMsb0VBQW9FO3dCQUM5RSw2Q0FBQyx1REFBWSxJQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUksQ0FDdkQsQ0FDSDtnQkFDTiw2Q0FBQyxNQUFNLE9BQUcsQ0FDRCxDQUNaLENBQUM7WUFFRixTQUFTLE1BQU07Z0JBQ2IsT0FBTztvQkFDTCxRQUFRLEVBQVIsVUFBUyxTQUFzQjt3QkFDN0IsSUFBTSxNQUFNLEdBQUcsaUVBQWtCLENBQy9CLFNBQVMsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQ3ZDLENBQUM7d0JBQ0YsSUFBTSxTQUFTLEdBQUcseUVBQXFCLENBQ3JDLFNBQVMsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FDNUMsQ0FBQzt3QkFDRixJQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO3dCQUM5RCxTQUFTLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO3dCQUN6QyxTQUFTLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFOzRCQUNuQyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzt3QkFDN0IsQ0FBQyxDQUFDLENBQUM7d0JBRUgsU0FBUyxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFOzRCQUM3QyxJQUFNLEdBQUcsR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDOzRCQUN6RCxJQUFJLDBEQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0NBQ2xCLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs2QkFDYjt3QkFDSCxDQUFDLENBQUMsQ0FBQzt3QkFDSCxTQUFTLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDLENBQUM7d0JBQ3RELE9BQU87NEJBQ0wsT0FBTztnQ0FDTCxTQUFTLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDLENBQUM7NEJBQzNELENBQUM7eUJBQ0YsQ0FBQzt3QkFDRixTQUFTLGdCQUFnQixDQUFDLENBQWE7NEJBQzdCLFVBQU0sR0FBSyxDQUFDLE9BQU4sQ0FBTzs0QkFDckIsSUFBSSwwREFBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dDQUNyQixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFO29DQUM1QyxNQUFNLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztpQ0FDckI7NkJBQ0Y7d0JBQ0gsQ0FBQztvQkFDSCxDQUFDO2lCQUNGLENBQUM7WUFDSixDQUFDO1FBQ0gsQ0FBQztLQUNGLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxLQUFLO0lBQ1osT0FBTztRQUNMLE9BQU87WUFDTCxPQUFPLENBQ0w7Z0JBQ0UsNkNBQUMseUNBQUssSUFBQyxLQUFLLEVBQUUsY0FBTyxDQUFDLEdBQUksQ0FDdEIsQ0FDUCxDQUFDO1FBQ0osQ0FBQztLQUNGLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxRQUFRLENBQUMsT0FBb0I7SUFDcEMsT0FBTyxDQUNMLHNEQUFLLEtBQUssRUFBQyxzQkFBc0I7UUFDL0IsdURBQU0sS0FBSyxFQUFDLGFBQWE7O1lBQVksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFRLENBQ25FLENBQ1AsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxNQUFvQjtJQUN0QyxPQUFPO1FBQ0wsT0FBTyxFQUFQLFVBQVEsT0FBdUI7WUFDN0IsSUFBTSxPQUFPLEdBQUcsSUFBSSwwQ0FBVSxFQUFFLENBQUM7WUFDakMsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUNqQixzREFBWSxDQUNWLHNEQUFLLEtBQUssRUFBQyxzQkFBc0I7Z0JBQy9CLDZDQUFDLHlDQUFLLElBQUMsS0FBSyxFQUFFLE9BQU8sR0FBSSxDQUNyQixDQUNQLENBQ0YsQ0FBQztZQUVGLFNBQVMsT0FBTztnQkFDZCxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QyxDQUFDO1FBQ0gsQ0FBQztRQUNELE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTztLQUN4QixDQUFDO0FBQ0osQ0FBQztBQWFELFNBQVMsUUFBUSxDQUFDLEtBQW9CO0lBQ3BDLE9BQU8sQ0FDTCxvREFBRyxLQUFLLEVBQUMsMkJBQTJCLEVBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLGtCQUFlLE1BQU07UUFDdkUsb0RBQ0UsS0FBSyxFQUFDLHVDQUF1QyxFQUM3QyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssaUJBQ2pDLE1BQU0sSUFFakIsS0FBSyxDQUFDLElBQUksQ0FDVDtRQUNKLHVEQUFNLEtBQUssRUFBQyxxQkFBcUIsSUFBRSxLQUFLLENBQUMsSUFBSSxDQUFRLENBQ25ELENBQ0wsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLEtBQUssQ0FBQyxJQUFZLEVBQUUsS0FBYTtJQUN4QyxPQUFPO1FBQ0wsSUFBSTtRQUNKLEtBQUs7UUFDTCxJQUFJLFlBQUMsQ0FBQyxJQUFHLENBQUM7S0FDWCxDQUFDO0FBQ0osQ0FBQztBQU1ELFNBQVMsT0FBTyxDQUFDLEtBQW1CO0lBQ2xDLE9BQU8sQ0FDTCxpRUFBTyxLQUFLLEVBQUMseUJBQXlCLElBQUssS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUVqRSxDQUNULENBQUM7QUFDSixDQUFDO0FBR0QsU0FBUyxZQUFZLENBQUMsS0FBd0I7SUFDNUMsT0FBTyxvREFBRyxLQUFLLEVBQUMsZ0NBQWdDLGFBQVcsQ0FBQztBQUM5RCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5U3FFO0FBQzdCO0FBQ2Q7QUFDVTtBQVE5QixTQUFlLFlBQVksQ0FBSSxJQUFZOzs7Ozs7b0JBQzFDLEdBQUcsR0FBRyxJQUFJLENBQUM7b0JBQ2IsT0FBTyxHQUFHLEtBQUssQ0FBQztvQkFFSixxQkFBTSxnREFBUyxDQUFDLEdBQUcsQ0FBQzs2QkFDakMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxJQUFLLFFBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBUixDQUFRLENBQUM7NkJBQ3JCLEtBQUssQ0FBQyxVQUFDLENBQUMsSUFBTSxDQUFDLENBQUM7O29CQUZiLE1BQU0sR0FBRyxDQUFDLFNBRUcsQ0FBYztvQkFFN0IsS0FBSyxHQUFHLElBQUksNENBQUssQ0FBSSxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUM5QyxPQUFPLEdBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUM7b0JBQ3ZDLHNCQUFPOzRCQUNMLElBQUksTUFBTTtnQ0FDUixPQUFPLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQzs0QkFDekIsQ0FBQzs0QkFDRCxLQUFLLEVBQUwsVUFBTSxNQUFTO2dDQUNiLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7NEJBQ3ZCLENBQUM7NEJBQ0QsTUFBTSxFQUFFLFVBQUMsTUFBTTtnQ0FDYixRQUFDLE9BQU87b0NBQ04sQ0FBQyxDQUFDLDhDQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxVQUFFLE9BQU8sV0FBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSSxJQUFLLFdBQUksQ0FBQyxJQUFJLEVBQUUsRUFBWCxDQUFXLENBQUM7b0NBQy9ELENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzs0QkFGekIsQ0FFeUI7NEJBQzNCLElBQUksRUFBRSxjQUFNLHNEQUFRLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBMUIsQ0FBMEI7NEJBQ3RDLE1BQU0sRUFBRTtnQ0FDTix3REFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQ0FDbkIsT0FBTyxHQUFHLElBQUksQ0FBQztnQ0FDakIsQ0FBQyxDQUFDOzRCQUZGLENBRUU7NEJBQ0osVUFBVTtnQ0FBVixpQkFtQkM7Z0NBbEJDLElBQUksTUFBTSxHQUFHLElBQUksNENBQWEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO3FDQUM1QyxJQUFJLENBQUMsZ0RBQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSx3REFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLHFEQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3FDQUNsRSxTQUFTLENBQUMsVUFBQyxNQUFNO29DQUNoQixPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztnQ0FDM0IsQ0FBQyxDQUFDLENBQUM7Z0NBRUwsU0FBUyxjQUFjLENBQUMsQ0FBQztvQ0FDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Z0NBQzNCLENBQUM7Z0NBQ0QsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQUM7Z0NBRS9ELE9BQU87b0NBQ0wsV0FBVyxFQUFFO3dDQUNYLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQzt3Q0FDckIsUUFBUSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQUM7d0NBQ2xFLE9BQU8sS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0NBQ2xDLENBQUM7aUNBQ0YsQ0FBQzs0QkFDSixDQUFDO3lCQUNGLEVBQUM7Ozs7Q0FDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUR5QjtBQUVNO0FBQytDO0FBQ2xDO0FBQ087QUFDRztBQUNiO0FBQ0g7QUFHdkMsSUFBTSxLQUFLLEdBQUcsRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDO0FBQy9ELElBQU0sSUFBSSxHQUFHLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUM7QUFDckQsSUFBTSxPQUFPLEdBQUcsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQztBQUM3RCxJQUFNLE9BQU8sR0FBRyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDO0FBRXRELFNBQVMsUUFBUTtJQUN0QixPQUFPO1FBQ0wsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDO2dCQUNiLFNBQVMsRUFBRSxnQkFBZ0I7YUFDNUI7U0FDRjtRQUNLLElBQUksRUFBVixVQUFXLE9BQW9COzs7OztnQ0FDTyxxQkFBTSxnREFBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FDdEUsVUFBQyxDQUFDLElBQUssUUFBQyxDQUFDLElBQUksRUFBRSxFQUFSLENBQVEsQ0FDaEI7OzRCQUZLLFFBQVEsR0FBc0IsU0FFbkM7NEJBQ0Qsc0JBQU8sQ0FDTCxpREFBQyx5Q0FBVTtvQ0FDVCwwREFBSyxLQUFLLEVBQUMsc0JBQXNCO3dDQUMvQiw0RUFBeUI7d0NBQ3pCOzRDQUNFLGlEQUFDLG9EQUFJLElBQUMsTUFBTSxFQUFFLFFBQVEsSUFBRyxlQUFlLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFRLENBQ3hELENBQ0gsQ0FDSyxDQUNkLEVBQUM7Ozs7U0FDSDtLQUNGLENBQUM7SUFFRixTQUFTLGVBQWUsQ0FBQyxHQUFjO1FBQ3JDLE9BQU8sVUFBQyxPQUF3QixJQUFLLFFBQ25DO1lBQ0Usd0RBQUcsS0FBSyxFQUFDLGFBQWEsRUFBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQ25ELE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUN6QixDQUNBLENBQ1AsRUFOb0MsQ0FNcEMsQ0FBQztJQUNKLENBQUM7QUFDSCxDQUFDO0FBQ00sU0FBUyxnQkFBZ0I7SUFDOUIsT0FBTztRQUNDLElBQUksRUFBVixVQUFXLE9BQW9COzs7Ozs7NEJBQ3JCLEVBQUUsR0FBSyxPQUFPLENBQUMsTUFBTSxHQUFuQixDQUFvQjs0QkFDakIscUJBQU0sNERBQVksQ0FBVSxlQUFlLEdBQUcsRUFBRSxDQUFDOzs0QkFBMUQsTUFBTSxHQUFHLFNBQWlEOzRCQUV4RCxLQUFLLEdBQUcsc0RBQVcsQ0FBa0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQzs0QkFFdkUsc0JBQU8sQ0FDTCxpREFBQyx5Q0FBVTtvQ0FDUixNQUFNLENBQUMsVUFBVSxFQUFFO29DQUNwQiwwREFBSyxLQUFLLEVBQUMsc0JBQXNCO3dDQUMvQjs7NENBQ1UsK0RBQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQVE7NENBQ2xELHdEQUFHLElBQUksRUFBRSxrQkFBZ0IsRUFBRSxTQUFNLGVBQWM7NENBQy9DLDZEQUNFLEtBQUssRUFBRTtvREFDTCxZQUFLLENBQUMsR0FBRyxDQUNQLG1EQUFRLENBQUM7d0RBQ1AsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNO3dEQUNuQixXQUFXLEVBQUUsbUJBQWdCLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFFO3FEQUNoRCxDQUFDLENBQ0g7Z0RBTEQsQ0FLQyxVQUlJOzRDQUNULDZEQUNFLEtBQUssRUFBRTtvREFDTCxZQUFLLENBQUMsR0FBRyxDQUFDO3dEQUNSLElBQUksRUFBRSxRQUFRO3dEQUNkLFNBQVMsRUFBRSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7cURBQzVCLENBQUM7Z0RBSEYsQ0FHRSxhQUlHLENBQ0Y7d0NBRVQ7NENBQ0U7Z0RBQ0UsaURBQUMsMkRBQVMsSUFDUixLQUFLLEVBQUMsZ0JBQWdCLEVBQ3RCLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FDdkIsQ0FDVDs0Q0FDTjtnREFDRSxpREFBQywyREFBUyxJQUNSLEtBQUssRUFBQyxhQUFhLEVBQ25CLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FDckIsQ0FDVDs0Q0FDTjtnREFDRSxpREFBQywyREFBUyxJQUNSLEtBQUssRUFBQyxPQUFPLEVBQ2IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUNmLENBQ1Q7NENBQ047Z0RBQ0UsaURBQUMsdURBQU0sSUFDTCxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsRUFDeEMsS0FBSyxFQUFDLFNBQVMsRUFDZixLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQ3RCLENBQ047NENBQ047Z0RBQ0UsNERBQ0UsSUFBSSxFQUFDLE1BQU0sRUFDWCxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQ3pCLE1BQU0sRUFBRSxVQUFDLEdBQUcsSUFBSyxhQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBM0MsQ0FBMkMsR0FDNUQsQ0FDRTs0Q0FDTiw0REFBTTs0Q0FDTixpREFBQyxvREFBSSxJQUFDLE1BQU0sRUFBRSxLQUFLLElBQUcsZUFBZSxDQUFRLENBQ3hDLENBQ0gsQ0FDSyxDQUNkLEVBQUM7Ozs7U0FDSDtLQUNGLENBQUM7SUFFRixTQUFTLGVBQWUsQ0FBQyxDQUFjO1FBQ3JDLE9BQU8sQ0FDTDtZQUNFLGlEQUFDLDJEQUFTLElBQUMsS0FBSyxFQUFDLGFBQWEsRUFBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLFdBQVcsR0FBSTtZQUN2RCxpREFBQywyREFBUyxJQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsR0FBSSxDQUN4RCxDQUNQLENBQUM7SUFDSixDQUFDO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SWtDO0FBQ0Q7QUFFbkIsU0FBUyxhQUFhO0lBQ25DLE9BQU87UUFDTCxJQUFJO1lBQ0YsT0FBTywyREFBSyxHQUFHLEVBQUUsbURBQUcsR0FBUSxDQUFDO1FBQy9CLENBQUM7S0FDRixDQUFDO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Q2QjtBQUNrQjtBQUNQO0FBQ2Y7QUFTUDtBQUM0QjtBQUUvQyxTQUFTLE1BQU0sQ0FBQyxLQUFhO0lBQzNCLE9BQU87UUFDTCxJQUFJLEVBQUUsUUFBUTtRQUNkLEtBQUs7S0FDTixDQUFDO0FBQ0osQ0FBQztBQUVELElBQU0sS0FBSyxHQUFZO0lBQ3JCLEtBQUssRUFBRSxPQUFPO0lBQ2QsS0FBSyxFQUFFLEdBQUc7Q0FDWCxDQUFDO0FBRUYsSUFBTSxTQUFTLEdBQVk7SUFDekIsS0FBSyxFQUFFLFlBQVk7SUFDbkIsS0FBSyxFQUFFLENBQUM7Q0FDVCxDQUFDO0FBRUYsU0FBUyxNQUFNLENBQUMsS0FBYSxFQUFFLFFBQW1CO0lBQ2hELE9BQU87UUFDTCxJQUFJLEVBQUUsUUFBUTtRQUNkLEtBQUs7UUFDTCxRQUFRO0tBQ1QsQ0FBQztBQUNKLENBQUM7QUFFRCxJQUFNLFVBQVUsR0FBRztJQUNqQixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUM3QixFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUM5QixFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMvQixFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUNyQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUM1QixFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUNuQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUNoQyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtDQUNoQyxDQUFDO0FBQ0YsSUFBTSxRQUFRLEdBQUc7SUFDZixRQUFRLEVBQUU7UUFDUixFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtRQUMvQixFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtRQUMvQixFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtRQUNoQyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtRQUNqQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtLQUNqQztJQUNELFVBQVUsRUFBRTtRQUNWO1lBQ0UsS0FBSyxFQUFFLG1CQUFtQjtZQUMxQixLQUFLLEVBQUUsR0FBRztZQUNWLE9BQU8sRUFBRTtnQkFDUCxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUNkLE1BQU0sQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDeEMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQzthQUNwQztTQUNGO1FBQ0QsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7UUFDOUIsRUFBRSxLQUFLLEVBQUUsNEJBQTRCLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtRQUNuRCxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3hDLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0tBQ2xDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRTtRQUMzRCxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwQyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1FBQ3RDLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7S0FDeEM7SUFDRCxNQUFNLEVBQUU7UUFDTixFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwQyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNwQyxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtRQUNsQyxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO0tBQ3RDO0lBQ0QsVUFBVTtJQUNWLE9BQU8sRUFBRTtRQUNQLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1FBQ3BDLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1FBQ3RDLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1FBQ3JDLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO0tBQ3JDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDN0IsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDM0IsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDN0IsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7S0FDakM7SUFDRCxRQUFRLEVBQUU7UUFDUjtZQUNFLEtBQUssRUFBRSxhQUFhO1lBQ3BCLEtBQUssRUFBRSxHQUFHO1lBQ1YsV0FBVyxFQUFFLCtCQUErQjtTQUM3QztRQUNELEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO1FBQ2xDLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0tBQ3JDO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7UUFDbkMsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDbkMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7UUFDbEMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7UUFDbkMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDckMsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDcEMsRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUN4QyxFQUFFLEtBQUssRUFBRSwyQkFBMkIsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO0tBQ2xEO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7UUFDN0IsRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtRQUM3QyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtRQUNuQyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtLQUNsQztDQUNGLENBQUM7QUFPRixTQUFTLGtCQUFrQixDQUFDLE9BQWdCLEVBQUUsUUFBK0I7SUFDM0UsT0FBTztRQUNMLElBQUksRUFBSixVQUFLLE9BQW9CO1lBQ3ZCLElBQU0sU0FBUyxHQUFrQixFQUFFLENBQUM7WUFDNUIsV0FBTyxHQUFLLE9BQU8sUUFBWixDQUFhO1lBQzVCLE9BQU8sQ0FDTCxzREFBSyxLQUFLLEVBQUMsZ0JBQWdCO2dCQUN6QjtvQkFDRyxPQUFPLENBQUMsS0FBSztvQkFDZCxvREFBRyxJQUFJLEVBQUMsU0FBUyxFQUFDLEtBQUssRUFBQywwQkFBMEIsYUFFOUMsQ0FDRztnQkFDVCxzREFBSyxLQUFLLEVBQUMseUJBQXlCLElBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLElBQUssaUJBQVUsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEVBQXhCLENBQXdCLENBQUMsQ0FDekM7Z0JBQ04seURBQVEsS0FBSyxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGdCQUVuRCxDQUNMLENBQ1AsQ0FBQztZQUNGLFNBQVMsT0FBTztnQkFDZCxRQUFRLENBQUMsT0FBTyxvQkFBTSxTQUFTLEVBQUUsQ0FBQztZQUNwQyxDQUFDO1FBQ0gsQ0FBQztLQUNGLENBQUM7SUFFRixTQUFTLFVBQVUsQ0FBQyxDQUFrQixFQUFFLFNBQXdCO1FBQzlELElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxRQUFRLEVBQUU7WUFDZCxjQUFRLEdBQUssQ0FBQyxTQUFOLENBQU87WUFDdkIsT0FBTyxDQUNMO2dCQUNFLHlEQUNFLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUNiLE1BQU0sRUFBRSxVQUFDLENBQUMsSUFBSyxnQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBbkQsQ0FBbUQ7b0JBRWxFLHlEQUFRLEtBQUssRUFBQyxFQUFFOzt3QkFBYyxDQUFDLENBQUMsS0FBSzs2QkFBWTtvQkFDaEQsVUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsSUFBSyxRQUNuQix5REFBUSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBRyxDQUFDLENBQUMsS0FBSyxDQUFVLENBQzNDLEVBRm9CLENBRXBCLENBQUMsQ0FDSyxDQUNMLENBQ1AsQ0FBQztTQUNIO2FBQU07WUFDTCxJQUFNLEVBQUUsR0FBRyxXQUFXLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM5QyxPQUFPLENBQ0w7Z0JBQ0Usd0RBQU8sSUFBSSxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUUsRUFBRSxHQUFJO2dCQUNqQyx3REFBTyxHQUFHLEVBQUUsRUFBRSxJQUFHLENBQUMsQ0FBQyxLQUFLLENBQVMsQ0FDN0IsQ0FDUCxDQUFDO1NBQ0g7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVELElBQU0sVUFBVSxHQUFVO0lBQ3hCLEtBQUssRUFBRSxhQUFhO0lBQ3BCLEtBQUssRUFBRSxDQUFDO0lBQ1IsT0FBTyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztDQUN2QyxDQUFDO0FBRUssU0FBUyxZQUFZO0lBQzFCLElBQU0sS0FBSyxHQUFHLElBQUksNENBQUssQ0FBc0I7UUFDM0MsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO0tBQ3JCLENBQUMsQ0FBQztJQUNILElBQU0sVUFBVSxHQUFHLHNEQUFXLENBQVEsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLElBQU0sV0FBVyxHQUFjLEVBQUUsQ0FBQztJQUNsQyxLQUFLLElBQU0sR0FBRyxJQUFJLFFBQVEsRUFBRTtRQUMxQixXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDcEQ7SUFFRCxTQUFTLFNBQVMsQ0FBQyxPQUFnQixFQUFFLE9BQXNCO1FBQ2pELFNBQUssR0FBSyxPQUFPLE1BQVosQ0FBYTtRQUUxQixJQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUNuQyxhQUFNLENBQUMsU0FBUyxDQUNkLFVBQUMsQ0FBQyxJQUFLLFFBQUMsQ0FBQyxLQUFLLEtBQUssS0FBSyxJQUFJLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQTFELENBQTBELENBQ2xFO1FBRkQsQ0FFQyxDQUNGLENBQUM7UUFDRixJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDZCxVQUFVLENBQUMsR0FBRyxDQUFDLHFEQUFVLENBQUMsS0FBSyxFQUFFLFVBQUMsQ0FBQyxJQUFLLFFBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBVCxDQUFTLENBQUMsQ0FBQyxDQUFDO1NBQ3JEO2FBQU07WUFDTCxVQUFVLENBQUMsR0FBRyxDQUNaLG1EQUFRLENBQVE7Z0JBQ2QsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osS0FBSyxFQUFFLENBQUM7Z0JBQ1IsT0FBTzthQUNSLENBQUMsQ0FDSCxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRUQsU0FBUyxXQUFXLENBQUMsS0FBWSxFQUFFLEtBQWE7UUFDOUMsSUFBSSxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUM7WUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLHFEQUFVLENBQUMsS0FBSyxFQUFFLFVBQUMsQ0FBQyxJQUFLLFFBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBVCxDQUFTLENBQUMsQ0FBQyxDQUFDOztZQUNwRSxVQUFVLENBQUMsR0FBRyxDQUFDLHFEQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsT0FBTztRQUNMLE1BQU0sRUFBRSxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBRSxJQUFLLFFBQUM7WUFDL0IsSUFBSSxFQUFFLFdBQVcsQ0FBQyxFQUFFLENBQUM7WUFDckIsU0FBUyxFQUFFLGtCQUFrQixDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUM7U0FDN0MsQ0FBQyxFQUg4QixDQUc5QixDQUFDO1FBQ0gsSUFBSSxFQUFKLFVBQUssT0FBb0I7WUFDdkIsSUFBTSxNQUFNLEdBQWtCO2dCQUM1QixRQUFRLEVBQVIsVUFBUyxPQUFnQjs7b0JBQ3ZCLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTt3QkFDbkIsYUFBTyxDQUFDLEdBQUcsRUFBQyxRQUFRLFdBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFO3FCQUMvQzt5QkFBTTt3QkFDTCxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO3FCQUN4QjtnQkFDSCxDQUFDO2FBQ0YsQ0FBQztZQUVGLE9BQU8sQ0FDTCw2Q0FBQywwREFBUTtnQkFDUCw2Q0FBQywyREFBRyxJQUFDLEtBQUssRUFBQyxRQUFRLEdBQUc7Z0JBQ3RCLHNEQUFLLEtBQUssRUFBQyxRQUFRO29CQUNqQixvRkFBaUM7b0JBQ2pDLHVEQUFNLEtBQUssRUFBQyxPQUFPLGlCQUFrQjtvQkFDckMsdURBQU0sS0FBSyxFQUFDLGFBQWE7d0JBQ3ZCLHVEQUFNLEtBQUssRUFBQyxnQkFBZ0IsZUFBZ0I7O3dCQUU1Qyx1REFBTSxLQUFLLEVBQUMsZ0JBQWdCLEVBQUMsS0FBSyxFQUFDLGdCQUFnQixlQUU1Qzt5Q0FFRixDQUNIO2dCQUNOLHNEQUFLLEtBQUssRUFBQyxXQUFXO29CQUNwQiw2Q0FBQyxRQUFRLGVBQUssTUFBTSxFQUFJO29CQUN4Qiw2Q0FBQyxRQUFRLGVBQUssTUFBTSxFQUFJO29CQUN4Qiw2Q0FBQyxPQUFPLGVBQUssTUFBTSxFQUFJO29CQUN2Qiw2Q0FBQyxLQUFLLGVBQUssTUFBTSxFQUFJO29CQUNyQiw2Q0FBQyxXQUFXLE9BQUc7b0JBQ2YsNkNBQUMsS0FBSyxlQUFLLE1BQU0sRUFBSTtvQkFDckIsNkNBQUMsS0FBSyxlQUFLLE1BQU0sRUFBSTtvQkFDckIsNkNBQUMsTUFBTSxlQUFLLE1BQU0sRUFBSTtvQkFDdEIsNkNBQUMsUUFBUSxlQUFLLE1BQU0sRUFBSTtvQkFDeEIsNkNBQUMsUUFBUSxlQUFLLE1BQU0sRUFBSTtvQkFDeEIsNkNBQUMsU0FBUyxlQUFLLE1BQU0sRUFBSTtvQkFDekIsNkNBQUMsVUFBVSxlQUFLLE1BQU0sRUFBSSxDQUl0QjtnQkFDTixzREFBSyxLQUFLLEVBQUMsa0JBQWtCO29CQUMzQiw2Q0FBQyx5REFBSSxJQUFDLE1BQU0sRUFBRSxVQUFVLElBQ3JCLFVBQUMsS0FBbUIsRUFBRSxFQUFTOzRCQUFQLEtBQUs7d0JBQU8sUUFDbkMsNkNBQUMsMERBQVE7NEJBQ1Asc0RBQUssS0FBSyxFQUFDLHVCQUF1QjtnQ0FDaEMsdURBQU0sS0FBSyxFQUFDLDhCQUE4QixJQUN2QyxLQUFLLENBQUMsS0FBSyxDQUNQOztnQ0FFUCx1REFBTSxLQUFLLEVBQUMsNkJBQTZCLElBQ3RDLEtBQUssQ0FBQyxLQUFLLENBQ1A7Z0NBQ1Asb0RBQ0UsS0FBSyxFQUFFLGNBQU0sa0JBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBM0IsQ0FBMkIsRUFDeEMsS0FBSyxFQUFDLCtCQUErQixhQUduQyxDQUNBOzRCQUNMLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBTyxJQUFLLFFBQy9CLHNEQUFLLEtBQUssRUFBQyx5QkFBeUIsSUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQUssSUFBSyxZQUFLLENBQUMsS0FBSyxFQUFYLENBQVcsQ0FBQyxDQUNoQyxDQUNQLEVBSmdDLENBSWhDLENBQUMsQ0FDTyxDQUNaO29CQXZCb0MsQ0F1QnBDLENBQ0ksQ0FDSCxDQUNHLENBQ1osQ0FBQztRQUNKLENBQUM7S0FDRixDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsWUFBWSxDQUFDLE1BQXFCO0lBQ3pDLElBQU0sS0FBSyxHQUFHLElBQUksNENBQUssQ0FBQztRQUN0QixLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxDQUFDO0tBQ1QsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxDQUNMO1FBQ0Usd0RBQ0UsSUFBSSxFQUFDLE1BQU0sRUFDWCxLQUFLLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFDOUIsSUFBSSxFQUFFLGFBQWEsRUFDbkIsTUFBTSxFQUFFLGFBQWEsR0FDckI7UUFDRix3REFDRSxJQUFJLEVBQUMsUUFBUSxFQUNiLEtBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUM5QixJQUFJLEVBQUUsYUFBYSxFQUNuQixNQUFNLEVBQUUsYUFBYSxHQUNyQjtRQUNGLHlEQUFRLEtBQUssRUFBRSxRQUFRLFFBQVksQ0FDL0IsQ0FDUCxDQUFDO0lBRUYsU0FBUyxhQUFhLENBQUMsQ0FBQztRQUN0QixLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxTQUFTLGFBQWEsQ0FBQyxDQUFDO1FBQ3RCLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELFNBQVMsUUFBUTtRQUNmLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVCLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQztBQUNILENBQUM7QUFFRCxTQUFTLEtBQUssQ0FBQyxNQUFxQjtJQUNsQyxPQUFPLENBQ0w7UUFDRSxtRUFBZ0I7UUFDaEIsNkNBQUMsV0FBVyxlQUFLLE1BQU0sSUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUM5QyxDQUNYLENBQUM7QUFDSixDQUFDO0FBVUQsU0FBUyxXQUFXLENBQUMsT0FBMkM7SUFDdEQsWUFBUSxHQUFLLE9BQU8sU0FBWixDQUFhO0lBRTdCLE9BQU8sQ0FDTCxxREFBSSxLQUFLLEVBQUMsVUFBVSxJQUNqQixRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUMsT0FBTztRQUNwQixjQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUNwQixvREFDRSxLQUFLLEVBQUMsOENBQThDLEVBQ3BELFFBQVEsRUFBQyxHQUFHLEVBQ1osS0FBSyxFQUFFLGNBQU0sY0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBekIsQ0FBeUI7WUFHdEMsdURBQU0sS0FBSyxFQUFDLHVCQUF1QixHQUFRO1lBQzNDLHVEQUFNLEtBQUssRUFBQyxxQkFBcUI7Z0JBQy9CLHVEQUFNLEtBQUssRUFBQyw2QkFBNkI7b0JBQ3RDLE9BQU8sQ0FBQyxLQUFLOztvQkFBRyxPQUFPLENBQUMsS0FBSyxDQUN6QjtnQkFDUCx1REFBTSxLQUFLLEVBQUMsK0JBQStCLElBQ3hDLE9BQU8sQ0FBQyxXQUFXLENBQ2YsQ0FDRixDQUNMLENBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FDRixvREFDRSxLQUFLLEVBQUMsMkJBQTJCLEVBQ2pDLFFBQVEsRUFBQyxHQUFHLEVBQ1osS0FBSyxFQUFFLGNBQU0sY0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBekIsQ0FBeUI7WUFFdEMsdURBQU0sS0FBSyxFQUFDLHVCQUF1QixHQUFRO1lBQzNDLHVEQUFNLEtBQUssRUFBQyxxQkFBcUI7Z0JBQzlCLE9BQU8sQ0FBQyxLQUFLOztnQkFBRyxPQUFPLENBQUMsS0FBSyxDQUN6QixDQUNMLENBQ0w7SUE1QkQsQ0E0QkMsQ0FDRixDQUNFLENBQ04sQ0FBQztBQUNKLENBQUM7QUEwQkQsU0FBUyxRQUFRLENBQUMsTUFBcUI7SUFDckMsT0FBTyxDQUNMO1FBQ0Usb0VBQWlCO1FBQ2pCLDZDQUFDLFdBQVcsYUFBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVEsSUFBTSxNQUFNLEVBQUksQ0FDaEQsQ0FDWCxDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsV0FBVztJQUNsQixPQUFPLENBQ0wsMERBQVMsS0FBSyxFQUFDLGdDQUFnQztRQUM3Qyx3RUFBcUI7UUFDckI7WUFDRSxvRUFBaUI7WUFDakIsNkVBQTJCLENBQ3ZCO1FBQ047WUFDRSxrRUFBZTtZQUNmLGlHQUE2Qzs7WUFDN0MseUZBQXVDO1lBQ3ZDLG9FQUFpQjtZQUNqQiw4SUFHTSxDQUNGLENBQ0UsQ0FDWCxDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsT0FBTztJQUNkLE9BQU8sQ0FDTDtRQUNFLHFEQUFJLEtBQUssRUFBQyxXQUFXLGNBQWE7UUFDbEM7WUFDRSw4RUFBNkI7O1lBQUUsNEVBQTJCOztZQUFFLEdBQUc7WUFDL0QsMEVBQXlCOztZQUFFLEdBQUc7WUFDOUIsa0hBQWlFLENBQzdELENBQ0UsQ0FDWCxDQUFDO0FBQ0osQ0FBQztBQUNELFNBQVMsU0FBUztJQUNoQixPQUFPLENBQ0w7UUFDRSxxREFBSSxLQUFLLEVBQUMsUUFBUSxnQkFBZTtRQUNqQyxpSEFBK0Q7UUFDL0QseUZBQXVDO1FBQ3ZDLDRGQUEwQyxDQUNsQyxDQUNYLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxTQUFTO0lBQ2hCLE9BQU8sQ0FDTDtRQUNFLHNFQUFtQjtRQUNuQixzREFBSyxLQUFLLEVBQUMsa0JBQWtCLHdCQUF3QjtRQUNyRCxzREFBSyxLQUFLLEVBQUMsa0JBQWtCOztZQUNKLHVEQUFNLEtBQUssRUFBQyxRQUFRLGVBQWdCOztZQUFFLEdBQUc7WUFDaEUsdURBQU0sS0FBSyxFQUFDLFFBQVEsbUJBQW9COztZQUFFLEdBQUc7WUFDN0MsdURBQU0sS0FBSyxFQUFDLFFBQVEsa0JBQW1CO2dCQUNuQztRQUNOLHNEQUFLLEtBQUssRUFBQyxrQkFBa0IsNEJBQTRCO1FBQ3pELHNEQUFLLEtBQUssRUFBQyxrQkFBa0IsK0JBQStCO1FBQzVELHNEQUFLLEtBQUssRUFBQyxrQkFBa0IsZ0NBQWdDLENBQ3JELENBQ1gsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxPQUFzQjtJQUN4QyxPQUFPLENBQ0w7UUFDRSx1RUFBb0I7UUFDcEIsc0RBQUssS0FBSyxFQUFDLGlDQUFpQyxJQUN6QyxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQVUsSUFBSyxRQUN2QyxvREFBRyxLQUFLLEVBQUUsY0FBTSxjQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFuQixDQUFtQixFQUFFLEtBQUssRUFBQyxXQUFXLElBQ25ELENBQUMsQ0FBQyxLQUFLLENBQ04sQ0FDTCxFQUp3QyxDQUl4QyxDQUFDLENBUUUsQ0FDRSxDQUNYLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxNQUFNLENBQUMsTUFBcUI7SUFDbkMsT0FBTyxDQUNMO1FBQ0Usa0VBQWU7UUFDZixrSEFBOEQ7UUFDOUQsNkNBQUMsV0FBVyxhQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsT0FBTyxJQUFNLE1BQU0sRUFBSSxDQUMvQyxDQUNYLENBQUM7SUFFRixPQUFPLENBQ0w7UUFDRSxrRUFBZTtRQUNmOztZQUVFLHVEQUFNLEtBQUssRUFBQyxRQUFRLGVBQWdCLENBQ2hDLENBQ0UsQ0FDWCxDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFDLE1BQXFCO0lBQ3JDLE9BQU8sQ0FDTDtRQUNFLG9FQUFpQjtRQUNqQiw2Q0FBQyxXQUFXLGFBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRLElBQU0sTUFBTSxFQUFJLENBQ2hELENBQ1gsQ0FBQztJQUNGLE9BQU8sQ0FDTDtRQUNFLG9FQUFpQjtRQUNqQjs7WUFDcUIsdURBQU0sS0FBSyxFQUFDLFFBQVEsYUFBYzs7WUFDckQsdURBQU0sS0FBSyxFQUFDLFFBQVEsZUFBZ0IsQ0FDaEM7UUFDTix3REFBTTtRQUNOLDhHQUEwRCxDQUNsRCxDQUNYLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxRQUFRLENBQUMsTUFBcUI7SUFDckMsT0FBTyxDQUNMO1FBQ0Usb0VBQWlCO1FBQ2pCLDZDQUFDLFdBQVcsYUFBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVEsSUFBTSxNQUFNLEVBQUk7WUFDaEQsQ0FDWCxDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsS0FBSyxDQUFDLE1BQXFCO0lBQ2xDLE9BQU8sQ0FDTDtRQUNFLDRFQUF5QjtRQUN6Qix1SEFBbUU7UUFDbkUsNkNBQUMsV0FBVyxhQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsS0FBSyxJQUFNLE1BQU0sRUFBSSxDQUM3QyxDQUNYLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxRQUFRLENBQUMsTUFBcUI7SUFDckMsT0FBTyxDQUNMO1FBQ0UsK0VBQTRCO1FBQzVCLHlHQUFxRDtRQUNyRCw2Q0FBQyxXQUFXLGFBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxVQUFVLElBQU0sTUFBTSxFQUFJLENBQ2xELENBQ1gsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLE9BQU8sQ0FBQyxNQUFxQjtJQUNwQyxPQUFPLENBQ0w7UUFDRSxrRkFBK0I7UUFDL0Isa0lBRUk7UUFDSiw2Q0FBQyxXQUFXLGFBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxPQUFPLElBQU0sTUFBTSxFQUFJLENBQy9DLENBQ1gsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLEtBQUssQ0FBQyxNQUFxQjtJQUNsQyxPQUFPLENBQ0w7UUFDRSxpRUFBYztRQUNkLDZDQUFDLFdBQVcsYUFBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLEtBQUssSUFBTSxNQUFNLEVBQUksQ0FDN0MsQ0FDWCxDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsV0FBVyxDQUFDLE9BQWdCO0lBQ25DLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO0FBQzNFLENBQUM7QUFRRCxTQUFTLFFBQVEsQ0FBQyxRQUFtQixFQUFFLFFBQWdCO0lBQ3JELE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFDLE9BQU87UUFDMUIsNkJBQ0ssT0FBTyxLQUNWLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxHQUFHLFFBQVEsSUFDL0I7SUFDSixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxTQUFTLE9BQU87SUFBQyxhQUFrQjtTQUFsQixVQUFrQixFQUFsQixxQkFBa0IsRUFBbEIsSUFBa0I7UUFBbEIsd0JBQWtCOztJQUNqQyxPQUFPO1FBQ0wsS0FBaUIsVUFBRyxFQUFILFdBQUcsRUFBSCxpQkFBRyxFQUFILElBQUcsRUFBRTtZQUFqQixJQUFNLEVBQUU7WUFDWCxFQUFFLEVBQUUsQ0FBQztTQUNOO0lBQ0gsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsaUJBQWlCLENBQUMsRUFBaUIsRUFBRSxFQUFpQjtJQUM3RCxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRTtRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQzdCLElBQUksRUFBRSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsTUFBTTtRQUFFLE9BQU8sS0FBSyxDQUFDOzRCQUU5QixLQUFLO1FBQ2QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLElBQUssUUFBQyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxFQUF0QixDQUFzQixDQUFDOzRCQUFTLEtBQUssR0FBQzs7SUFENUQsS0FBb0IsVUFBRSxFQUFGLFNBQUUsRUFBRixnQkFBRSxFQUFGLElBQUU7UUFBakIsSUFBTSxLQUFLOzhCQUFMLEtBQUs7OztLQUVmOzRCQUNVLEtBQUs7UUFDZCxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsSUFBSyxRQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQXRCLENBQXNCLENBQUM7NEJBQVMsS0FBSyxHQUFDOztJQUQ1RCxLQUFvQixVQUFFLEVBQUYsU0FBRSxFQUFGLGdCQUFFLEVBQUYsSUFBRTtRQUFqQixJQUFNLEtBQUs7OEJBQUwsS0FBSzs7O0tBRWY7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4b0IwQztBQUUzQztJQUFBO1FBR2MsbUJBQWMsR0FBRyxJQUFJLHlDQUFPLEVBQVEsQ0FBQztRQUUvQyxtREFBbUQ7UUFDMUMsa0JBQWEsR0FBcUIsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQXNRbkUsQ0FBQztJQTlGRzs7Ozs7T0FLRztJQUNILHdDQUFrQixHQUFsQixVQUFtQixHQUFZO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQVEsQ0FBQztZQUNyRCxDQUFDLENBQUUsR0FBUztZQUNaLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDZixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7O09BV0c7SUFDSCxpQ0FBVyxHQUFYLFVBQVksS0FBVTtRQUNsQixJQUNJLEtBQUssSUFBSSxJQUFJO1lBQ2IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDckQ7WUFDRSxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRDs7O09BR0c7SUFDSCwrQkFBUyxHQUFULFVBQVUsTUFBVztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxpQ0FBVyxHQUFYLFVBQVksS0FBUSxFQUFFLE1BQVM7UUFDM0IsT0FBTyxDQUNILElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQzdDLENBQUM7SUFDTixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsOEJBQVEsR0FBUixVQUFTLEtBQWUsRUFBRSxNQUFnQjtRQUN0QyxJQUFJLEtBQUssSUFBSSxNQUFNLEVBQUU7WUFDakIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZDLElBQUksVUFBVSxJQUFJLFdBQVcsRUFBRTtnQkFDM0IsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQzNDO1lBQ0QsT0FBTyxVQUFVLElBQUksV0FBVyxDQUFDO1NBQ3BDO1FBQ0QsT0FBTyxLQUFLLElBQUksTUFBTSxDQUFDO0lBQzNCLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsK0JBQVMsR0FBVCxVQUFVLElBQU8sRUFBRSxHQUFjLEVBQUUsR0FBYztRQUM3QyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDeEMsT0FBTyxHQUFHLENBQUM7U0FDZDtRQUNELElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN4QyxPQUFPLEdBQUcsQ0FBQztTQUNkO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5UXVEO0FBQzlCO0FBQ21DO0FBQ3ZCO0FBQ2hCO0FBS1AsU0FBUyxVQUFVLENBQUMsS0FBc0I7SUFDN0MsU0FBaUIsTUFBSyxJQUFJLEVBQUUsT0FBaEIsRUFBWixLQUFLLG1CQUFHLElBQUksTUFBaUI7SUFDckMsSUFBSSxXQUFXLEdBQUcsSUFBSSxTQUFTLENBQUMsMkVBQXVCLENBQUMsQ0FBQztJQUV6RCxvRUFBb0U7SUFDcEUsb0JBQW9CO0lBRXBCLEtBQUssQ0FBQyxnREFBZ0QsRUFBRTtRQUNwRCxPQUFPLEVBQUU7WUFDTCxNQUFNLEVBQ0YseUlBQXlJO1lBQzdJLGlCQUFpQixFQUFFLGtDQUFrQztZQUNyRCxlQUFlLEVBQUUsV0FBVztZQUM1QixjQUFjLEVBQUUsbUNBQW1DO1lBQ25ELFdBQVcsRUFDUCxrRUFBa0U7WUFDdEUsa0JBQWtCLEVBQUUsSUFBSTtZQUN4QixnQkFBZ0IsRUFBRSxVQUFVO1lBQzVCLGdCQUFnQixFQUFFLFVBQVU7WUFDNUIsZ0JBQWdCLEVBQUUsYUFBYTtZQUMvQixnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLDJCQUEyQixFQUFFLEdBQUc7U0FDbkM7UUFDRCxRQUFRLEVBQUUsZ0RBQWdEO1FBQzFELGNBQWMsRUFBRSxpQ0FBaUM7UUFDakQsSUFBSSxFQUNBLCttQ0FBK21DO1FBQ25uQyxNQUFNLEVBQUUsTUFBTTtRQUNkLElBQUksRUFBRSxNQUFNO1FBQ1osV0FBVyxFQUFFLFNBQVM7S0FDekIsQ0FBQyxDQUFDO0lBRUgsT0FBTyxDQUNIO1FBQ0ksaURBQUMsZ0RBQVMsSUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBSTtRQUM1RCwwREFBSyxLQUFLLEVBQUMsMEJBQTBCLEVBQUMsS0FBSyxFQUFDLHFCQUFxQjtZQUM3RCwwREFBSyxLQUFLLEVBQUMsa0JBQWtCLEVBQUMsS0FBSyxFQUFDLGVBQWU7Z0JBQzlDLFdBQVc7MEJBRVYsQ0FDSixDQUNKLENBQ1QsQ0FBQztJQUVGLFNBQVMsVUFBVSxDQUFDLENBQUM7UUFDakIsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUcsSUFBSyxVQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO0lBQ3hELENBQUM7QUFDTCxDQUFDO0FBRUQ7SUFHSSxtQkFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7SUFBRyxDQUFDO0lBRXRDLHdCQUFJLEdBQUosVUFBSyxFQUFtQjtRQUNaLFdBQU8sR0FBSyxJQUFJLFFBQVQsQ0FBVTtRQUN6QixJQUFJLE9BQU8sRUFBRTtZQUNULEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNmO0lBQ0wsQ0FBQztJQUVELDRCQUFRLEdBQVIsVUFBUyxHQUFHO1FBQ1IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUM7QUFPRDtJQUFtQyx3Q0FBMEI7SUFBN0Q7O0lBcUZBLENBQUM7SUFwRkcsc0NBQU8sR0FBUCxVQUFRLElBQW1CO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ0QsdUNBQVEsR0FBUixVQUFTLElBQW1CO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ0Qsc0NBQU8sR0FBUCxVQUFRLElBQW1CO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ0QsMkNBQVksR0FBWixVQUFhLElBQW1CO1FBQzVCLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMvRCxDQUFDO0lBQ0QsNENBQWEsR0FBYixVQUFjLEtBQWtDO1FBQzVDLE9BQU87WUFDSCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7U0FDUixDQUFDO0lBQ04sQ0FBQztJQUNELDJDQUFZLEdBQVo7UUFDSSxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUNELGdEQUFpQixHQUFqQixVQUFrQixLQUFrQztRQUNoRCxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUNELDBDQUFXLEdBQVgsVUFBWSxJQUFtQjtRQUMzQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUNELGdEQUFpQixHQUFqQjtRQUNJLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUNELGdEQUFpQixHQUFqQixVQUFrQixJQUFtQjtRQUNqQyxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFDRCxvQ0FBSyxHQUFMLFVBQU0sSUFBbUI7UUFDckIsb0JBQVksSUFBSSxFQUFHO0lBQ3ZCLENBQUM7SUFDRCx5Q0FBVSxHQUFWLFVBQVcsSUFBWSxFQUFFLEtBQWEsRUFBRSxJQUFZO1FBQ2hELE9BQU8sRUFBRSxJQUFJLFFBQUUsS0FBSyxTQUFFLElBQUksUUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFDRCxvQ0FBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNuQixPQUFPO1lBQ0gsSUFBSSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUU7WUFDckIsS0FBSyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDbkIsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUU7U0FDcEIsQ0FBQztJQUNOLENBQUM7SUFDRCxvQ0FBSyxHQUFMLFVBQU0sS0FBVSxFQUFFLFdBQWdCO1FBQzlCLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0QscUNBQU0sR0FBTixVQUFPLElBQW1CLEVBQUUsYUFBa0I7UUFDMUMsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCwrQ0FBZ0IsR0FBaEIsVUFBaUIsSUFBbUIsRUFBRSxLQUFhO1FBQy9DLDZCQUFZLElBQUksS0FBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLElBQUc7SUFDaEQsQ0FBQztJQUNELGdEQUFpQixHQUFqQixVQUFrQixJQUFtQixFQUFFLE1BQWM7UUFDakQsNkJBQVksSUFBSSxLQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sSUFBRztJQUNuRCxDQUFDO0lBQ0QsOENBQWUsR0FBZixVQUFnQixJQUFtQixFQUFFLElBQVk7UUFDN0MsNkJBQVksSUFBSSxLQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBRztJQUMvQyxDQUFDO0lBQ0Qsd0NBQVMsR0FBVCxVQUFVLElBQW1CO1FBQ3pCLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0QsNkNBQWMsR0FBZCxVQUFlLEdBQVE7UUFDbkIsT0FBTyxHQUFHLElBQUksTUFBTSxJQUFJLEdBQUcsSUFBSSxPQUFPLElBQUksR0FBRyxJQUFJLE1BQU0sSUFBSSxHQUFHLENBQUM7SUFDbkUsQ0FBQztJQUNELHNDQUFPLEdBQVAsVUFBUSxJQUFtQjtRQUN2QixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQztJQUNELHNDQUFPLEdBQVA7UUFDSSxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsMkJBQUM7QUFBRCxDQUFDLENBckZrQyxxRUFBVyxHQXFGN0M7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JLeUI7QUFHbUI7QUFDVTtBQWF4QyxTQUFTLE1BQU0sQ0FBSSxLQUFxQjtJQUNuRCxJQUFNLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2hDLE9BQU87UUFDSCwwREFBSyxLQUFLLEVBQUMsZ0NBQWdDLEVBQUMsS0FBSyxFQUFDLGlCQUFpQjtZQUMvRCx3REFBRyxLQUFLLEVBQUMsMkJBQTJCLEdBQUs7WUFDekMsNkRBQ0ksTUFBTSxFQUFFLFFBQVEsRUFDaEIsRUFBRSxFQUFFLEVBQUUsRUFDTixLQUFLLEVBQUMsNEJBQTRCLEVBQ2xDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztnQkFFbEIsNkRBQVEsS0FBSyxFQUFDLEVBQUUsR0FBVTtnQkFDekIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLElBQUssUUFDdEIsNkRBQVEsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBVSxDQUM3QyxFQUZ5QixDQUV6QixDQUFDO2dCQUNGLGlEQUFDLHlEQUFJLElBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssR0FBSSxDQUNwQztZQUNULDREQUNJLEdBQUcsRUFBRSxFQUFFLEVBQ1AsS0FBSyxFQUFDLG9EQUFvRCxJQUV6RCxLQUFLLENBQUMsS0FBSyxDQUNSO1lBQ1IsMERBQUssS0FBSyxFQUFDLGlCQUFpQixHQUFPLENBQ2pDO1FBQ04sdURBQVM7UUFDVCx3REFDSSxLQUFLLEVBQUMsOEdBQThHLEVBQ3BILEVBQUUsRUFBRSxFQUFFLEdBQUcsY0FBYyxHQUN0QjtLQUNSLENBQUM7SUFFRixTQUFTLFFBQVEsQ0FBQyxHQUFHO1FBQ2pCLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQztBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcER5QjtBQUNKO0FBRVAsU0FBUyxPQUFPO0lBQzNCLE9BQU8sMERBQUssS0FBSyxFQUFDLGdCQUFnQixHQUFPLENBQUM7QUFDOUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0x5QjtBQU9YLFNBQVMsTUFBTSxDQUFDLEtBQWtCO0lBQ3JDLFlBQVEsR0FBSyxNQUFLLElBQUksRUFBRSxVQUFoQixDQUFpQjtJQUNqQyxPQUFPLENBQ0gsMERBQUssS0FBSyxFQUFDLGFBQWEsRUFBQyxJQUFJLEVBQUMsU0FBUztRQUNuQywwREFBSyxLQUFLLEVBQUMsa0JBQWtCO1lBQ3pCLDBEQUNJLEtBQUssRUFBQyxxRUFBcUUsRUFDM0UsS0FBSyxFQUFDLHFCQUFxQjtnQkFFM0IsMERBQ0ksS0FBSyxFQUFDLGtDQUFrQyxFQUN4QyxLQUFLLEVBQUMsZ0JBQWdCO29CQUV0QixpREFBQyxHQUFHLElBQ0EsS0FBSyxFQUFDLHNCQUFzQixFQUM1QixHQUFHLEVBQUMsaUJBQWlCLEVBQ3JCLE1BQU0sRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxJQUFLLFFBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFkLENBQWMsQ0FBQyxHQUM5QztvQkFDRixpREFBQyxHQUFHLElBQ0EsS0FBSyxFQUFDLGdCQUFnQixFQUN0QixHQUFHLEVBQUMsd0JBQXdCLEVBQzVCLE1BQU0sRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxJQUFLLFFBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQWpCLENBQWlCLENBQUMsR0FDakQ7b0JBQ0YsaURBQUMsR0FBRyxJQUNBLEtBQUssRUFBQyxzQkFBc0IsRUFDNUIsR0FBRyxFQUFDLDhCQUE4QixFQUNsQyxNQUFNLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FDakIsVUFBQyxDQUFDLElBQUssUUFBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLGNBQWMsRUFBdkIsQ0FBdUIsQ0FDakMsR0FDSDtvQkFDRixpREFBQyxHQUFHLElBQ0EsS0FBSyxFQUFDLHFCQUFxQixFQUMzQixHQUFHLEVBQUMseUJBQXlCLEVBQzdCLE1BQU0sRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxJQUFLLFFBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLEVBQWxCLENBQWtCLENBQUMsR0FDbEQsQ0FDQSxDQUNKLENBQ0osQ0FDSixDQUNULENBQUM7QUFDTixDQUFDO0FBT0QsU0FBUyxHQUFHLENBQUMsS0FBZTtJQUN4QixJQUFJLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2xDLE9BQU8sQ0FDSCx3REFDSSxJQUFJLEVBQUMsS0FBSyxFQUNWLEtBQUssRUFBQyxxQkFBcUIsbUJBQ2IsT0FBTyxFQUNyQixRQUFRLEVBQUMsSUFBSSxFQUNiLEVBQUUsRUFBRSxNQUFNLEdBQUcsTUFBTSxFQUNuQixJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUc7UUFFZiwyREFBTSxLQUFLLEVBQUMsa0JBQWtCO1lBQzFCLDJEQUFNLEtBQUssRUFBQyxxQkFBcUIsSUFBRSxLQUFLLENBQUMsS0FBSyxDQUFRLENBQ25EO1FBQ1AsMkRBQ0ksS0FBSyxFQUFFO2dCQUNILG1CQUFtQjtnQkFDbkIsS0FBSyxDQUFDLE1BQU07b0JBQ1IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNiLFVBQUMsQ0FBQyxJQUFLLFFBQUMsSUFBSSwyQkFBMkIsRUFBaEMsQ0FBZ0MsQ0FDMUM7b0JBQ0gsQ0FBQyxDQUFDLElBQUk7YUFDYjtZQUVELDJEQUFNLEtBQUssRUFBQyxrRUFBa0UsR0FBUSxDQUNuRjtRQUNQLDJEQUFNLEtBQUssRUFBQyxxQ0FBcUMsR0FBUSxDQUN6RCxDQUNQLENBQUM7QUFDTixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25GeUI7QUFDSjtBQUM2QjtBQThCcEMsU0FBUyxTQUFTLENBQUMsS0FBcUI7SUFDN0MsU0FBSyxHQUFZLEtBQUssTUFBakIsRUFBRSxLQUFLLEdBQUssS0FBSyxNQUFWLENBQVc7SUFDL0IsT0FBTyxDQUNMLHFFQUNFLEtBQUssRUFBQyxvR0FBb0csSUFDdEcsS0FBSyxDQUFDLE1BQU07UUFFaEIsMkRBQU0sS0FBSyxFQUFDLHdCQUF3QixHQUFRO1FBRTVDLDJEQUFNLEVBQUUsRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUFDLG9CQUFvQixJQUN4QyxLQUFLLENBQUMsS0FBSyxDQUNQO1FBRVAsK0VBQ2tCLE9BQU8sRUFDdkIsS0FBSyxFQUFDLHVCQUF1QixFQUM3QixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksSUFBSSxNQUFNLEVBQzFCLEtBQUssRUFBRSxLQUFLLEVBQ1osS0FBSyxFQUFFLGFBQWEsRUFDcEIsTUFBTSxFQUFFLGFBQWEsR0FDckI7UUFFRCxLQUFLLENBQUMsSUFBSSxJQUFJLENBQ2Isd0RBQUcsS0FBSyxFQUFDLG9FQUFvRSxZQUV6RSxDQUNMO1FBRUQsMkRBQU0sS0FBSyxFQUFDLGlCQUFpQixHQUFRO1FBQ3BDLDZEQUFZLENBQ1AsQ0FDVCxDQUFDO0lBRUYsU0FBUyxhQUFhLENBQUMsQ0FBQztRQUN0QixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxRQUFRLElBQUksS0FBSyxFQUFFO1lBQ2xELEtBQUssQ0FBQyxNQUFNLENBQ1YsT0FBTyxLQUFLLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQ3JFLENBQUM7U0FDSDtJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQsNkNBQTZDO0FBQzdDLDZFQUE2RTtBQUM3RSwyQkFBMkI7QUFDM0IscUJBQXFCO0FBQ3JCLG1CQUFtQjtBQUNuQiw0QkFBNEI7QUFDNUIsdUJBQXVCO0FBQ3ZCLHdCQUF3QjtBQUN4QixTQUFTO0FBQ1QsdUNBQXVDO0FBQ3ZDLGVBQWU7QUFDZixxQkFBcUI7QUFDckIsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiwyQkFBMkI7QUFDM0IsZ0JBQWdCO0FBQ2hCLHlCQUF5QjtBQUN6Qix3Q0FBd0M7QUFDeEMsNENBQTRDO0FBQzVDLDBDQUEwQztBQUMxQyw4QkFBOEI7QUFDOUIsb0RBQW9EO0FBQ3BELG9DQUFvQztBQUNwQyxxQ0FBcUM7QUFDckMsc0NBQXNDO0FBQ3RDLHFCQUFxQjtBQUNyQiw4REFBOEQ7QUFDOUQsOEJBQThCO0FBQzlCLDJCQUEyQjtBQUMzQixrREFBa0Q7QUFDbEQsOEJBQThCO0FBQzlCLGlDQUFpQztBQUNqQyxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLHVJQUF1STtBQUN2SSwyQ0FBMkM7QUFDM0Msb0JBQW9CO0FBQ3BCLHNCQUFzQjtBQUN0QixTQUFTO0FBRVQsMkJBQTJCO0FBQzNCLHVDQUF1QztBQUN2Qyw0Q0FBNEM7QUFDNUMsWUFBWTtBQUNaLFFBQVE7QUFDUixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkhzQjtBQUNnQjtBQUNIO0FBQ0k7QUFFckI7QUFFZixJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFFcEIsSUFBTSxXQUFXLEdBQWEsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDbkQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDekMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUN0QjtBQUVNLElBQU0sYUFBYSxHQUFHLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQXdCdkMsU0FBUyxTQUFTLENBQUksS0FBd0I7SUFDakQsdUJBQW1CLEdBQUssS0FBSyxvQkFBVixDQUFXO0lBQ3RDLElBQU0sU0FBUyxHQUFHLElBQUksNkNBQUssQ0FBb0IsRUFBRSxDQUFDLENBQUM7SUFDbkQsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDNUMsSUFBTSxTQUFTLEdBQUcsSUFBSSw2Q0FBSyxDQUFnQixJQUFJLENBQUMsQ0FBQztJQUNqRCxPQUFPLENBQ0gsMERBQUssS0FBSyxFQUFDLDBCQUEwQjtRQUlqQywwREFDSSxFQUFFLEVBQUMsK0JBQStCLEVBQ2xDLEtBQUssRUFBQyxnQkFBZ0IsRUFDdEIsS0FBSyxFQUFFLGNBQWMsRUFDckIsT0FBTyxFQUFDLHdDQUF3QztZQUVoRCwwREFBSyxLQUFLLEVBQUMsdUJBQXVCO2dCQUM5QiwwREFBSyxLQUFLLEVBQUMsaUNBQWlDO29CQUN4QywyREFBTSxLQUFLLEVBQUMsa0NBQWtDO3dCQUN6QyxLQUFLLENBQUMsS0FBSzs7d0JBQUksSUFBSSxDQUFDLE1BQU07NEJBQ3hCO29CQUNQLGlEQUFDLFNBQVMsT0FBRyxDQUNYO2dCQUNOLGlEQUFDLG9EQUFJLElBQUMsTUFBTSxFQUFFLElBQUksSUFDYixVQUFDLEdBQW9CLElBQUssUUFDdkIsaURBQUMsMERBQUUsSUFBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLE9BQU87b0JBQ3RCLGlEQUFDLDBEQUFFLElBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxLQUFLLEtBQUssQ0FBQzt3QkFDMUIsMERBQUssS0FBSyxFQUFDLCtCQUErQixHQUFPLENBQ2hEO29CQUNMLDBEQUNJLEtBQUssRUFBQyx5QkFBeUIsRUFDL0IsYUFBYSxFQUFDLDZCQUE2QixxQkFDMUIsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVO3dCQUVwQywyREFDSSxLQUFLLEVBQUMsa0NBQWtDLEVBQ3hDLEtBQUssRUFDRCxlQUFlO2dDQUNmLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7Z0NBQ3RCLElBQUk7NEJBR1IsaURBQUMsMERBQUUsSUFBQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTTtnQ0FDdEIsd0RBQ0ksS0FBSyxFQUFDLGdCQUFnQixFQUN0QixLQUFLLEVBQUMsK0JBQStCLElBRXBDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDO29DQUNkLFFBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO3dDQUNYLENBQUMsQ0FBQyxzQkFBc0I7d0NBQ3hCLENBQUMsQ0FBQyxxQkFBcUI7Z0NBRjNCLENBRTJCLENBQzlCLENBQ0QsQ0FDSDs0QkFDSixHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FDWixDQUNMLENBQ0wsQ0FDUixFQWxDMEIsQ0FrQzFCLENBQ0U7Z0JBQ1AsMERBQUssS0FBSyxFQUFDLCtCQUErQixHQUFPLENBQy9DO1lBQ04saURBQUMsb0RBQUksSUFBQyxNQUFNLEVBQUUsV0FBVyxJQUNwQixVQUFDLElBQUksSUFBSyxRQUNQLDBEQUFLLEtBQUssRUFBQyx1QkFBdUI7Z0JBQzlCLDBEQUFLLEtBQUssRUFBQyw2QkFBNkIsSUFDbkMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUNqQjtnQkFDTiwwREFBSyxLQUFLLEVBQUMsZ0NBQWdDO29CQUN2QyxpREFBQyxvREFBSSxJQUFDLE1BQU0sRUFBRSxhQUFhLElBQ3RCLFVBQUMsR0FBRyxJQUFLLFFBQ047d0JBQ0ksMERBQUssS0FBSyxFQUFDLHlDQUF5QyxJQUMvQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUM3QixDQUNKLENBQ1QsRUFOUyxDQU1ULENBQ0UsQ0FDTDtnQkFDTixpREFBQyxvREFBSSxJQUFDLE1BQU0sRUFBRSxJQUFJLElBQ2IsVUFBQyxHQUFHLElBQUssd0RBQUMsR0FBRyxJQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsR0FBSSxFQUE3QixDQUE2QixDQUNwQztnQkFDUCwwREFBSyxLQUFLLEVBQUMsK0JBQStCLEdBQU8sQ0FDL0MsQ0FDVCxFQXJCVSxDQXFCVixDQUNFLENBRUwsQ0FDSixDQUNULENBQUM7SUFFRixTQUFTLGNBQWMsQ0FBQyxHQUFlO1FBQzNCLFVBQU0sR0FBSyxHQUFHLE9BQVIsQ0FBUztRQUN2QixJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNmLElBQU0sSUFBSSxHQUFnQixNQUFNLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDakUsSUFBSSxJQUFJLEVBQUU7Z0JBQ0EsU0FBdUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQS9DLElBQUksWUFBRSxVQUFVLGdCQUErQixDQUFDO2dCQUNoRCxVQUFNLEdBQUssSUFBSSxDQUFDLE9BQU8sT0FBakIsQ0FBa0I7Z0JBQ2hDLElBQU0sWUFBWSxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQztnQkFDMUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFDckMsT0FBTzthQUNWO1lBQ0QsSUFBTSxTQUFTLEdBQWdCLE1BQU0sQ0FBQyxPQUFPLENBQ3pDLDBCQUEwQixDQUM3QixDQUFDO1lBQ0YsSUFBSSxTQUFTLEVBQUU7Z0JBQ0gsZ0JBQVUsR0FBSyxTQUFTLENBQUMsT0FBTyxXQUF0QixDQUF1QjtnQkFDekMsSUFBTSxLQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsSUFBSyxRQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxZQUFVLEVBQWhDLENBQWdDLENBQUMsQ0FBQztnQkFDL0QsSUFBSSxLQUFHLEVBQUU7b0JBQ0wsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUM7d0JBQ2YsSUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFHLENBQUMsQ0FBQzt3QkFDM0IsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFOzRCQUNWLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO3lCQUNwQjs2QkFBTTs0QkFDSCxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUcsQ0FBQyxDQUFDO3lCQUNmO29CQUNMLENBQUMsQ0FBQyxDQUFDO29CQUVILElBQU0sS0FBSyxHQUF1QixDQUFDLEtBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDN0MsT0FBTyxLQUFLLENBQUMsTUFBTSxFQUFFO3dCQUNqQixJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7d0JBQ3pCLHdDQUF3Qzt3QkFDeEMsNkJBQTZCO3dCQUM3QiwyQkFBMkI7d0JBQzNCLHFEQUFxRDt3QkFDckQsMkRBQTJEO3dCQUMzRCw0REFBNEQ7d0JBQzVELHdDQUF3Qzt3QkFDeEMsNkJBQTZCO3dCQUM3QixRQUFRO3dCQUNSLElBQUk7cUJBQ1A7aUJBQ0o7YUFDSjtZQUNELElBQU0sR0FBRyxHQUFnQixNQUFNLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDL0QsSUFBSSxHQUFHLEVBQUU7Z0JBQ0MsU0FBdUIsR0FBRyxDQUFDLE9BQU8sRUFBaEMsSUFBSSxZQUFFLFVBQVUsZ0JBQWdCLENBQUM7Z0JBRWpDLFdBQU8sR0FBSyxHQUFHLFFBQVIsQ0FBUztnQkFDeEIsSUFBTSxXQUFXLEdBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQztvQkFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBRTdCLElBQU0sWUFBWSxHQUFHLFdBQVcsR0FBRyxRQUFRLENBQUM7Z0JBQzVDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUM7YUFDeEM7U0FDSjtRQUVELFNBQVMsS0FBSyxDQUFDLE1BQVc7WUFDdEIsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDVCxPQUFPLEtBQUssQ0FBQzthQUNoQjtZQUNELElBQU0sT0FBTyxHQUFHLE1BQXFCLENBQUM7WUFFOUIsYUFBUyxHQUFLLE9BQU8sVUFBWixDQUFhO1lBQzlCLE9BQU8sU0FBUyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBQzdDLENBQUM7UUFFRCxTQUFTLFVBQVUsQ0FBQyxhQUFxQixFQUFFLFlBQW9CO1lBQzNELElBQU0sR0FBRyxHQUFrQixTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxJQUFLLFFBQUMsRUFBRCxDQUFDLENBQUMsQ0FBQztZQUNwRCxJQUFNLGVBQWUsR0FBa0I7Z0JBQ25DLGFBQWE7Z0JBQ2IsUUFBUSxFQUFFO29CQUNOLFlBQVk7aUJBQ2Y7Z0JBQ0QsTUFBTSxFQUFFO29CQUNKLFlBQVksRUFBRSxZQUFZLEdBQUcsUUFBUTtpQkFDeEM7YUFDSixDQUFDO1lBRUYsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsYUFBYSxLQUFLLGFBQWEsRUFBRTtnQkFDN0MsU0FBUyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUNyQztpQkFBTTtnQkFDSyxZQUFRLEdBQWEsR0FBRyxTQUFoQixFQUFFLE1BQU0sR0FBSyxHQUFHLE9BQVIsQ0FBUztnQkFFakMsSUFDSSxzQkFBc0IsQ0FDbEIsWUFBWSxFQUNaLFlBQVksR0FBRyxRQUFRLEVBQ3ZCLFFBQVEsQ0FBQyxZQUFZLEVBQ3JCLE1BQU0sQ0FBQyxZQUFZLENBQ3RCLEVBQ0g7b0JBQ0UsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDMUI7cUJBQU07b0JBQ0gsU0FBUyxDQUFDLE1BQU0sQ0FBQzt3QkFDYixhQUFhO3dCQUNiLFFBQVEsRUFBRTs0QkFDTixZQUFZLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FDbEIsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUN0QixZQUFZLENBQ2Y7eUJBQ0o7d0JBQ0QsTUFBTSxFQUFFOzRCQUNKLFlBQVksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUNsQixDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQ3BCLFlBQVksR0FBRyxRQUFRLENBQzFCO3lCQUNKO3FCQUNKLENBQUMsQ0FBQztpQkFDTjthQUNKO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFNRCxTQUFTLEdBQUcsQ0FBQyxLQUFlO1FBQ2hCLE9BQUcsR0FBVyxLQUFLLElBQWhCLEVBQUUsSUFBSSxHQUFLLEtBQUssS0FBVixDQUFXO1FBQzVCLElBQU0sRUFBRSxHQUFHLFNBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEMsT0FBTyxDQUNILGlEQUFDLDBEQUFFLElBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxPQUFPO1lBQ3RCLGlEQUFDLDBEQUFFLElBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxLQUFLLEtBQUssQ0FBQztnQkFDMUIsMERBQUssS0FBSyxFQUFDLCtCQUErQixHQUFPLENBQ2hEO1lBQ0wsdUVBQ2UsSUFBSSxxQkFDRSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVU7Z0JBQ3BDLG9EQUFvRDtnQkFDcEQsS0FBSyxFQUFFLENBQUMsb0JBQW9CLENBQUM7Z0JBRTdCLGlEQUFDLDBEQUFFLElBQ0MsU0FBUyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUM1QyxVQUFDLEVBQUUsSUFBSyxTQUFFLElBQUksRUFBRSxFQUFSLENBQVEsQ0FDbkI7b0JBRUQsaURBQUMsb0RBQUksSUFBQyxNQUFNLEVBQUUsYUFBYSxJQUN0QixVQUFDLE1BQU0sSUFBSyx3REFBQyxJQUFJLGVBQUssS0FBSyxJQUFFLE1BQU0sRUFBRSxNQUFNLElBQUksRUFBbkMsQ0FBbUMsQ0FDN0MsQ0FDTixDQUNILENBQ0w7UUFDTCxvQkFBb0I7UUFDcEIsV0FBVztRQUNYLHlCQUF5QjtRQUN6Qiw2QkFBNkI7UUFDN0IseURBQXlEO1FBQ3pELDREQUE0RDtRQUM1RCxRQUFRO1FBQ1IsSUFBSTtRQUNKLGtCQUFrQjtTQUNyQixDQUFDO0lBQ04sQ0FBQztJQUVELFNBQVMsZ0JBQWdCLENBQUMsR0FBcUIsRUFBRSxJQUFZO1FBQ3pELElBQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFHO1lBQzVCLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ04sT0FBTyxLQUFLLENBQUM7YUFDaEI7WUFDRCxJQUFJLEdBQUcsQ0FBQyxVQUFVLEtBQUssR0FBRyxDQUFDLGFBQWEsRUFBRTtnQkFDdEMsT0FBTyxLQUFLLENBQUM7YUFDaEI7WUFFTyxZQUFRLEdBQWEsR0FBRyxTQUFoQixFQUFFLE1BQU0sR0FBSyxHQUFHLE9BQVIsQ0FBUztZQUNqQyxJQUFNLFVBQVUsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBRTdCLE9BQU8sc0JBQXNCLENBQ3pCLFVBQVUsRUFDVixVQUFVLEdBQUcsRUFBRSxFQUNmLFFBQVEsQ0FBQyxZQUFZLEVBQ3JCLE1BQU0sQ0FBQyxZQUFZLENBQ3RCLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxTQUFTLGNBQWMsQ0FDbkIsR0FBb0IsRUFDcEIsSUFBWSxFQUNaLE1BQWMsRUFDZCxHQUFrQjtRQUVsQixJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ04sT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELE9BQU8sQ0FDSCxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUMsYUFBYTtZQUN4QyxpQkFBaUIsQ0FBQyxFQUFFLFlBQVksRUFBRSxJQUFJLEdBQUcsRUFBRSxHQUFHLE1BQU0sRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUMvRCxDQUFDO0lBQ04sQ0FBQztJQUVELFNBQVMsU0FBUyxDQUFDLEdBQW9CLEVBQUUsSUFBWTtRQUNqRCxLQUFnQixVQUFhLEVBQWIsK0JBQWEsRUFBYiwyQkFBYSxFQUFiLElBQWEsRUFBRTtZQUExQixJQUFNLENBQUM7WUFDUixJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDMUIsT0FBTyxJQUFJLENBQUM7YUFDZjtTQUNKO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQU9ELFNBQVMsSUFBSSxDQUFDLEtBQWdCO1FBQ2xCLE9BQUcsR0FBbUIsS0FBSyxJQUF4QixFQUFFLElBQUksR0FBYSxLQUFLLEtBQWxCLEVBQUUsTUFBTSxHQUFLLEtBQUssT0FBVixDQUFXO1FBQ3BDLElBQU0sVUFBVSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFHO1lBQ2xDLHFCQUFjLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDO1FBQXRDLENBQXNDLENBQ3pDLENBQUM7UUFDRixJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDM0MsT0FBTyxDQUNILDBEQUNJLEtBQUssRUFBRTtnQkFDSCxxQkFBcUI7Z0JBQ3JCLFVBQVUsQ0FBQyxJQUFJLENBQ1gsVUFBQyxDQUFDLElBQUssUUFBQyxJQUFJLCtCQUErQixFQUFwQyxDQUFvQyxDQUM5QzthQUNKLEVBQ0QsS0FBSyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDO2dCQUNyQixJQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDM0QsSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDVixPQUFPLElBQUksQ0FBQztpQkFDZjtnQkFDRCxJQUFJLENBQUMsRUFBRTtvQkFDSCxPQUFPLGNBQWMsQ0FBQztpQkFDekI7Z0JBQ0QsT0FBTyxvQkFBb0IsR0FBRyxPQUFPLENBQUM7WUFDMUMsQ0FBQyxDQUFDLGlCQUNXLE1BQU07WUFFbkIsd0RBQUcsS0FBSyxFQUFDLDhCQUE4QixJQUNsQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUNwQyxDQUNGLENBQ1QsQ0FBQztJQUNOLENBQUM7QUFDTCxDQUFDO0FBRUQsU0FBUyxjQUFjLENBQUMsR0FBVztJQUMvQixJQUFNLE1BQU0sR0FBYSxFQUFFLENBQUM7SUFDNUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksR0FBRyxFQUFFO1FBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbEI7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBRUQsU0FBUyxZQUFZLENBQUMsS0FBSztJQUN2QixPQUFPLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BDLENBQUM7QUFFRCxTQUFTLFNBQVM7SUFDZCxPQUFPLDhEQUFhLENBQUM7QUFDekIsQ0FBQztBQVlELDZCQUE2QjtBQUM3QixnQ0FBZ0M7QUFDaEMsNkJBQTZCO0FBQzdCLG1CQUFtQjtBQUNuQixNQUFNO0FBQ04sd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4QixRQUFRO0FBQ1IsdURBQXVEO0FBQ3ZELHdCQUF3QjtBQUN4QixRQUFRO0FBRVIsOENBQThDO0FBQzlDLG9DQUFvQztBQUVwQyxxQ0FBcUM7QUFDckMsc0JBQXNCO0FBQ3RCLDJCQUEyQjtBQUMzQixpQ0FBaUM7QUFDakMsOEJBQThCO0FBQzlCLFNBQVM7QUFDVCxLQUFLO0FBRUwsU0FBUyxzQkFBc0IsQ0FDM0IsRUFBVSxFQUNWLEVBQVUsRUFDVixFQUFVLEVBQ1YsRUFBVTtJQUVWLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUVELFNBQVMsaUJBQWlCLENBQUMsRUFBUSxFQUFFLEVBQWlCO0lBQzFDLGdCQUFZLEdBQUssRUFBRSxhQUFQLENBQVE7SUFDNUIsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUU7UUFDekMsT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFDRCxJQUFJLFlBQVksSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTtRQUN4QyxPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFFRCxTQUFTLE9BQU8sQ0FDWixJQUF3QixFQUN4QixTQUFtQztJQUVuQyxJQUFNLEtBQUssR0FBbUQsT0FBTyxDQUNqRSxJQUFJLENBQ1AsQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLElBQUssUUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFaLENBQVksQ0FBQyxDQUFDO0lBQzNCLElBQU0sTUFBTSxHQUFzQixFQUFFLENBQUM7O1FBRzNCLFNBQXdCLEtBQUssQ0FBQyxHQUFHLEVBQUUsRUFBbEMsS0FBSyxVQUFFLElBQUksVUFBRSxRQUFNLFFBQWUsQ0FBQztRQUNsQyxZQUFRLEdBQUssSUFBSSxTQUFULENBQVU7UUFDMUIsSUFBTSxHQUFHLEdBQW9CO1lBQ3pCLEtBQUs7WUFDTCxNQUFNLEVBQUUsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDO1lBQ3pDLElBQUksRUFBRSxJQUFJO1lBQ1YsTUFBTTtZQUNOLE9BQU8sRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRztnQkFDeEIsSUFBSSxDQUFDLEdBQUcsUUFBTSxDQUFDO2dCQUNmLE9BQU8sQ0FBQyxFQUFFO29CQUNOLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTt3QkFDakIsT0FBTyxLQUFLLENBQUM7cUJBQ2hCO29CQUNELENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO2lCQUNoQjtnQkFDRCxPQUFPLElBQUksQ0FBQztZQUNoQixDQUFDLENBQUM7U0FDTCxDQUFDO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLFFBQVE7WUFDUixLQUFvQixVQUFpQixFQUFqQixZQUFPLENBQUMsUUFBUSxDQUFDLEVBQWpCLGNBQWlCLEVBQWpCLElBQWlCLEVBQUU7Z0JBQWxDLElBQU0sS0FBSztnQkFDWixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN2Qzs7SUF2QlQsT0FBTyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7O0tBd0J0QjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFFRCxTQUFTLE9BQU8sQ0FBSSxHQUFRO0lBQ3hCLElBQU0sTUFBTSxHQUFRLEVBQUUsQ0FBQztJQUV2QixLQUFLLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN2QjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzNkYyxTQUFTLE9BQU8sQ0FDM0IsR0FBUSxFQUNSLFFBQTZCLEVBQzdCLFNBQWtDO0lBRWxDLElBQU0sTUFBTSxHQUFVLEVBQUUsQ0FBQztJQUV6QixLQUFtQixVQUFHLEVBQUgsV0FBRyxFQUFILGlCQUFHLEVBQUgsSUFBRyxFQUFFO1FBQW5CLElBQU0sSUFBSTtRQUNYLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsSUFBSSxLQUFLLEVBQUU7WUFDUCxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxQjthQUFNLElBQUksU0FBUyxFQUFFO1lBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO2FBQU07WUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNSLEdBQUc7Z0JBQ0gsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO2FBQ2hCLENBQUMsQ0FBQztTQUNOO0tBQ0o7SUFFRCxPQUFPLE1BQU0sQ0FBQztJQUVkLFNBQVMsU0FBUyxDQUFDLEdBQVc7UUFDMUIsS0FBb0IsVUFBTSxFQUFOLGlCQUFNLEVBQU4sb0JBQU0sRUFBTixJQUFNLEVBQUU7WUFBdkIsSUFBTSxLQUFLO1lBQ1osSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRTtnQkFDbEIsT0FBTyxLQUFLLENBQUM7YUFDaEI7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDRCxJQUFNLGtCQUFrQixHQUFnQjtJQUNwQyxPQUFPLEVBQUU7UUFDTCxNQUFNLEVBQUUsbUNBQW1DO1FBQzNDLGlCQUFpQixFQUFFLGtDQUFrQztRQUNyRCxlQUFlLEVBQUUsVUFBVTtRQUMzQixjQUFjLEVBQUUsZ0NBQWdDO1FBQ2hELE1BQU0sRUFBRSxVQUFVO0tBQ3JCO0lBQ0QsTUFBTSxFQUFFLEtBQUs7SUFDYixJQUFJLEVBQUUsTUFBTTtJQUNaLFdBQVcsRUFBRSxhQUFhO0NBQzdCLENBQUM7QUFFSyxTQUFTLFNBQVMsQ0FBQyxHQUFXLEVBQUUsSUFBc0I7SUFBdEIsZ0NBQXNCO0lBQ3pELE9BQU8sS0FBSyxDQUFDLEdBQUcsd0JBQU8sa0JBQWtCLEdBQUssSUFBSSxFQUFHLENBQUM7QUFDMUQsQ0FBQztBQUVNLFNBQVMsT0FBTyxDQUFDLEdBQVcsRUFBRSxJQUFJLEVBQUUsSUFBc0I7SUFBdEIsZ0NBQXNCO0lBQzdELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsT0FBTyxLQUFLLENBQUMsR0FBRyxpQ0FBTyxrQkFBa0IsR0FBSyxJQUFJLEtBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLFVBQUcsQ0FBQztBQUMvRSxDQUFDO0FBRU0sU0FBUyxRQUFRLENBQUMsR0FBVyxFQUFFLElBQUksRUFBRSxJQUFzQjtJQUF0QixnQ0FBc0I7SUFDOUQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxPQUFPLEtBQUssQ0FBQyxHQUFHLGlDQUFPLGtCQUFrQixHQUFLLElBQUksS0FBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksVUFBRyxDQUFDO0FBQ2hGLENBQUM7QUFFTSxTQUFTLFVBQVUsQ0FBQyxHQUFXLEVBQUUsSUFBc0I7SUFBdEIsZ0NBQXNCO0lBQzFELE9BQU8sS0FBSyxDQUFDLEdBQUcsaUNBQU8sa0JBQWtCLEdBQUssSUFBSSxLQUFFLE1BQU0sRUFBRSxRQUFRLElBQUcsQ0FBQztBQUM1RSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQzdCMkM7QUFDcEI7QUFFeEIsK0NBQU0sQ0FBQyxJQUFJLDhDQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsNkNBQUcsRUFBRSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSFg7QUFDeUI7QUFLNUMsU0FBUyxLQUFLLENBQUMsS0FBaUI7SUFDM0IsU0FBSyxHQUFLLEtBQUssTUFBVixDQUFXO0lBQ3hCLE9BQU8sQ0FDSCwwREFBSyxLQUFLLEVBQUMsc0JBQXNCO1FBQzdCLDhEQUFTLEtBQUssRUFBQyw4QkFBOEI7WUFDekM7Z0JBQ0ksMERBQUssS0FBSyxFQUFDLGlCQUFpQjtvQkFDeEIsaURBQUMsS0FBSyxJQUFDLEtBQUssRUFBQyxNQUFNLEdBQUcsQ0FDcEI7Z0JBQ04sMERBQUssS0FBSyxFQUFDLGlCQUFpQjtvQkFDeEIsaURBQUMsS0FBSyxJQUFDLEtBQUssRUFBQyxVQUFVLEdBQUcsQ0FDeEIsQ0FDSDtZQUNQLDBEQUFLLEtBQUssRUFBQyxvQkFBb0I7Z0JBQzNCLHdEQUFHLFFBQVEsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBQyxLQUFLLEVBQUMsaUJBQWlCLEdBRXBEO2dCQUNKLDZEQUNJLEtBQUssRUFBRSxLQUFLLEVBQ1osS0FBSyxFQUFDLG1EQUFtRDtvQkFFekQsMkRBQU0sS0FBSyxFQUFDLG1CQUFtQixZQUFhLENBQ3ZDLENBQ1AsQ0FDQSxDQUNSLENBQ1QsQ0FBQztBQUNOLENBQUM7QUFNRCxTQUFTLEtBQUssQ0FBQyxLQUFpQjtJQUNwQixTQUFzQixNQUFLLElBQUksRUFBRSxPQUFoQixFQUFqQixLQUFLLG1CQUFHLFNBQVMsTUFBaUI7SUFDMUMsSUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdEMsT0FBTyxDQUNILDBEQUFLLEtBQUssRUFBQyxnQkFBZ0IsRUFBQyxLQUFLLEVBQUMsY0FBYztRQUM1Qyw0REFBTyxLQUFLLEVBQUMsdUJBQXVCLEVBQUMsRUFBRSxFQUFFLEVBQUUsR0FBSTtRQUMvQywwREFBSyxLQUFLLEVBQUMsaUJBQWlCLEdBQU87UUFDbkMsNERBQU8sR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUMsb0JBQW9CLElBQ3JDLEtBQUssQ0FDRjtRQUNQLDZEQUFZLENBQ1gsQ0FDVCxDQUFDO0FBQ04sQ0FBQzs7Ozs7OztVQ3BERDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRTlDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtYXBwLTAwMS8uL212Yy5qcy9vdXRsZXQvb3V0bGV0LnNjc3MiLCJ3ZWJwYWNrOi8vanMtYXBwLTAwMS8uL3NyYy9hcHAvYWdlbnRzLXBsYW5uaW5nL3RyYWNrcy9zdHlsZS5zY3NzIiwid2VicGFjazovL2pzLWFwcC0wMDEvLi9zcmMvYXBwL2plbm5haC9tZW51LWNhcmQvbWVudS1jYXJkLnNjc3MiLCJ3ZWJwYWNrOi8vanMtYXBwLTAwMS8uL3NyYy9hcHAvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vc3JjL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vc3JjL2NvbXBvbmVudHMvc3Bpbm5lci9zdHlsZS5zY3NzIiwid2VicGFjazovL2pzLWFwcC0wMDEvLi9zcmMvY29tcG9uZW50cy90ZXh0LWZpZWxkL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vanMtYXBwLTAwMS8uL3NyYy9jb21wb25lbnRzL3RpbWUtdGFibGUvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vc3JjL2FwcC9qZW5uYWgvc2Nhbi1tZSAyLnN2ZyIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vZ2xvdy5qcy9jb21wb25lbnRzL2Nzcy50cyIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vZ2xvdy5qcy9jb21wb25lbnRzL2lmLnRzIiwid2VicGFjazovL2pzLWFwcC0wMDEvLi9nbG93LmpzL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vanMtYXBwLTAwMS8uL2dsb3cuanMvY29tcG9uZW50cy9saXN0L2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vanMtYXBwLTAwMS8uL2dsb3cuanMvY29tcG9uZW50cy9saXN0L2luZGV4LnRzIiwid2VicGFjazovL2pzLWFwcC0wMDEvLi9nbG93LmpzL2luZGV4LnRzIiwid2VicGFjazovL2pzLWFwcC0wMDEvLi9nbG93LmpzL2xpYi9kb20udHMiLCJ3ZWJwYWNrOi8vanMtYXBwLTAwMS8uL2dsb3cuanMvbGliL2RyaXZlci50cyIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vZ2xvdy5qcy9saWIvZnJhZ21lbnQudHMiLCJ3ZWJwYWNrOi8vanMtYXBwLTAwMS8uL2dsb3cuanMvbGliL3RwbC50cyIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vZ2xvdy5qcy9saWIvdXRpbC9jb21iaW5lTGF0ZXN0LnRzIiwid2VicGFjazovL2pzLWFwcC0wMDEvLi9nbG93LmpzL2xpYi91dGlsL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vanMtYXBwLTAwMS8uL211dGFibC5qcy9pbmRleC50cyIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vbXV0YWJsLmpzL2xpYi9saXN0L2luZGV4LnRzIiwid2VicGFjazovL2pzLWFwcC0wMDEvLi9tdXRhYmwuanMvbGliL2xpc3QvbGlzdC1tdXRhdGlvbi50cyIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vbXV0YWJsLmpzL2xpYi9vYnNlcnZhYmxlLnRzIiwid2VicGFjazovL2pzLWFwcC0wMDEvLi9tdXRhYmwuanMvbGliL3N0b3JlLnRzIiwid2VicGFjazovL2pzLWFwcC0wMDEvLi9tdmMuanMvb3V0bGV0L2luZGV4LnRzIiwid2VicGFjazovL2pzLWFwcC0wMDEvLi9tdmMuanMvcm91dGVyL2luZGV4LnRzIiwid2VicGFjazovL2pzLWFwcC0wMDEvLi9tdmMuanMvcm91dGVyL2xpbmsudHMiLCJ3ZWJwYWNrOi8vanMtYXBwLTAwMS8uL212Yy5qcy9yb3V0ZXIvcGF0aC10ZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vbXZjLmpzL3JvdXRlci91cmwtaGVscGVyLnRzIiwid2VicGFjazovL2pzLWFwcC0wMDEvLi9zcmMvYXBwL2FnZW50cy1wbGFubmluZy9ieS1hZ2VudHMvaW5kZXgudHN4Iiwid2VicGFjazovL2pzLWFwcC0wMDEvLi9zcmMvYXBwL2FnZW50cy1wbGFubmluZy9ieS1wb3NpdGlvbnMvaW5kZXgudHN4Iiwid2VicGFjazovL2pzLWFwcC0wMDEvLi9zcmMvYXBwL2FnZW50cy1wbGFubmluZy9kZW1hbmRzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vc3JjL2FwcC9hZ2VudHMtcGxhbm5pbmcvaW5kZXgudHN4Iiwid2VicGFjazovL2pzLWFwcC0wMDEvLi9zcmMvYXBwL2FnZW50cy1wbGFubmluZy9zZXJ2aWNlcy9wbGFubmluZy50cyIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vc3JjL2FwcC9hZ2VudHMtcGxhbm5pbmcvdHJhY2tzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vc3JjL2FwcC9lbXBsb3llZXMvaW5kZXgudHN4Iiwid2VicGFjazovL2pzLWFwcC0wMDEvLi9zcmMvYXBwL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vc3JjL2FwcC9pbnZvaWNlcy9hY3RpdmUtZW50aXR5LnRzIiwid2VicGFjazovL2pzLWFwcC0wMDEvLi9zcmMvYXBwL2ludm9pY2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vc3JjL2FwcC9qZW5uYWgvZGVtby50c3giLCJ3ZWJwYWNrOi8vanMtYXBwLTAwMS8uL3NyYy9hcHAvamVubmFoL21lbnUtY2FyZC9tYWluLnRzeCIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vc3JjL2NvbXBvbmVudHMvY29yZS9kYXRlLXRpbWUvZGF0ZS1hZGFwdGVyLnRzIiwid2VicGFjazovL2pzLWFwcC0wMDEvLi9zcmMvY29tcG9uZW50cy9kYXRlLXBpY2tlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vanMtYXBwLTAwMS8uL3NyYy9jb21wb25lbnRzL3NlbGVjdC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vanMtYXBwLTAwMS8uL3NyYy9jb21wb25lbnRzL3NwaW5uZXIvaW5kZXgudHN4Iiwid2VicGFjazovL2pzLWFwcC0wMDEvLi9zcmMvY29tcG9uZW50cy90YWItYmFyLnRzeCIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vc3JjL2NvbXBvbmVudHMvdGV4dC1maWVsZC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vanMtYXBwLTAwMS8uL3NyYy9jb21wb25lbnRzL3RpbWUtdGFibGUvaW5kZXgudHN4Iiwid2VicGFjazovL2pzLWFwcC0wMDEvLi9zcmMvY29yZS9ncm91cC1ieS50cyIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vc3JjL2NvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vanMtYXBwLTAwMS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxLy4vc3JjL2xvZ2luL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzLWFwcC0wMDEvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vanMtYXBwLTAwMS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pzLWFwcC0wMDEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qcy1hcHAtMDAxL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2pzLWFwcC0wMDEvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vanMtYXBwLTAwMS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2pzLWFwcC0wMDEvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2pzLWFwcC0wMDEvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJtdmMuanMvb3V0bGV0L291dGxldC0zYzIzZTAyOWU2MzhiYzdlYTlhOTEzNmU2NzAyZjBhMi5jc3NcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2FwcC9hZ2VudHMtcGxhbm5pbmcvdHJhY2tzL3N0eWxlLTNjMjNlMDI5ZTYzOGJjN2VhOWE5MTM2ZTY3MDJmMGEyLmNzc1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXBwL2plbm5haC9tZW51LWNhcmQvbWVudS1jYXJkLTNjMjNlMDI5ZTYzOGJjN2VhOWE5MTM2ZTY3MDJmMGEyLmNzc1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvYXBwL3N0eWxlLTNjMjNlMDI5ZTYzOGJjN2VhOWE5MTM2ZTY3MDJmMGEyLmNzc1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvY29tcG9uZW50cy9kYXRlLXBpY2tlci9zdHlsZS0zYzIzZTAyOWU2MzhiYzdlYTlhOTEzNmU2NzAyZjBhMi5jc3NcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2NvbXBvbmVudHMvc3Bpbm5lci9zdHlsZS0zYzIzZTAyOWU2MzhiYzdlYTlhOTEzNmU2NzAyZjBhMi5jc3NcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2NvbXBvbmVudHMvdGV4dC1maWVsZC9zdHlsZS0zYzIzZTAyOWU2MzhiYzdlYTlhOTEzNmU2NzAyZjBhMi5jc3NcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2NvbXBvbmVudHMvdGltZS10YWJsZS9zdHlsZS0zYzIzZTAyOWU2MzhiYzdlYTlhOTEzNmU2NzAyZjBhMi5jc3NcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2FwcC9qZW5uYWgvc2Nhbi1tZSAyLnN2Z1wiOyIsImltcG9ydCB7IElEcml2ZXIgfSBmcm9tICcuLi9saWIvZHJpdmVyJztcclxuaW1wb3J0IHsgU3Vic2NyaWJhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbnRlcmZhY2UgQ3NzUHJvcHMge1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcbiAgd2hlbj86IFN1YnNjcmliYWJsZTxib29sZWFuPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3NzKHByb3BzOiBDc3NQcm9wcykge1xyXG4gIHJldHVybiB7XHJcbiAgICByZW5kZXIoZHJpdmVyOiBJRHJpdmVyKSB7XHJcbiAgICAgIGNvbnN0IHsgd2hlbiwgdmFsdWUgfSA9IHByb3BzO1xyXG4gICAgICBpZiAod2hlbiAmJiB0eXBlb2Ygd2hlbi5zdWJzY3JpYmUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICBjb25zdCBiaW5kaW5nID0gZHJpdmVyLmNyZWF0ZUF0dHJpYnV0ZSgnY2xhc3MnLCB1bmRlZmluZWQpO1xyXG5cclxuICAgICAgICB3aGVuLnN1YnNjcmliZSgoZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGUpIGJpbmRpbmcubmV4dCh2YWx1ZSk7XHJcbiAgICAgICAgICBlbHNlIGJpbmRpbmcubmV4dChbXSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBiaW5kaW5nO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBkcml2ZXIuY3JlYXRlQXR0cmlidXRlKCdjbGFzcycsIHZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQXR0clByb3BzIHtcclxuICB2YWx1ZTogYW55O1xyXG4gIG5hbWU6IHN0cmluZztcclxuICB3aGVuPzogU3Vic2NyaWJhYmxlPGJvb2xlYW4+O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBBdHRyKHByb3BzOiBBdHRyUHJvcHMpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcmVuZGVyKGRyaXZlcjogSURyaXZlcikge1xyXG4gICAgICBjb25zdCB7IHdoZW4sIG5hbWUsIHZhbHVlIH0gPSBwcm9wcztcclxuICAgICAgaWYgKHdoZW4gJiYgdHlwZW9mIHdoZW4uc3Vic2NyaWJlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgY29uc3QgYmluZGluZyA9IGRyaXZlci5jcmVhdGVBdHRyaWJ1dGUobmFtZSwgdW5kZWZpbmVkKTtcclxuXHJcbiAgICAgICAgd2hlbi5zdWJzY3JpYmUoKGUpID0+IHtcclxuICAgICAgICAgIGlmIChlKSBiaW5kaW5nLm5leHQodmFsdWUpO1xyXG4gICAgICAgICAgZWxzZSBiaW5kaW5nLm5leHQoW10pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gYmluZGluZztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZHJpdmVyLmNyZWF0ZUF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gICAgSVRlbXBsYXRlLFxyXG4gICAgSURyaXZlcixcclxuICAgIEJpbmRpbmcsXHJcbiAgICBCaW5kaW5nVmFsdWUsXHJcbiAgICBpc1N1YnNjcmliYWJsZSxcclxufSBmcm9tICcuLi9saWIvZHJpdmVyJztcclxuaW1wb3J0IHtcclxuICAgIGFzVGVtcGxhdGUsXHJcbiAgICBGcmFnbWVudFRlbXBsYXRlLFxyXG4gICAgRW1wdHlUZW1wbGF0ZSxcclxuICAgIHJlbmRlck1hbnksXHJcbiAgICBmbGF0VHJlZSxcclxufSBmcm9tICcuLi9saWIvdHBsJztcclxuaW1wb3J0IHsgU3Vic2NyaWJhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJZihcclxuICAgIHByb3BzOiB7IGNvbmRpdGlvbjogQmluZGluZ1ZhbHVlPGJvb2xlYW4+IH0sXHJcbiAgICBjaGlsZHJlbjogSVRlbXBsYXRlW11cclxuKSB7XHJcbiAgICBpZiAoaXNTdWJzY3JpYmFibGUocHJvcHMuY29uZGl0aW9uKSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ29uZGl0aW9uYWxUZW1wbGF0ZShcclxuICAgICAgICAgICAgcHJvcHMuY29uZGl0aW9uLFxyXG4gICAgICAgICAgICBmbGF0VHJlZShjaGlsZHJlbiwgYXNUZW1wbGF0ZSlcclxuICAgICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAocHJvcHMuY29uZGl0aW9uKSByZXR1cm4gbmV3IEZyYWdtZW50VGVtcGxhdGUoY2hpbGRyZW4pO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIG5ldyBFbXB0eVRlbXBsYXRlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENvbmRpdGlvbmFsVGVtcGxhdGUgaW1wbGVtZW50cyBJVGVtcGxhdGUge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGV4cHI6IFN1YnNjcmliYWJsZTxib29sZWFuPixcclxuICAgICAgICBwdWJsaWMgX2NoaWxkcmVuOiBJVGVtcGxhdGVbXVxyXG4gICAgKSB7fVxyXG5cclxuICAgIHJlbmRlcihkcml2ZXI6IElEcml2ZXIpOiBCaW5kaW5nIHtcclxuICAgICAgICBjb25zdCBzY29wZSA9IGRyaXZlci5jcmVhdGVTY29wZSgpO1xyXG4gICAgICAgIGxldCBpbm5lcjogQmluZGluZ1tdIHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHN1YnNjciA9IHNlbGYuZXhwci5zdWJzY3JpYmUoKHZpc2libGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeyBfY2hpbGRyZW4gfSA9IHNlbGY7XHJcbiAgICAgICAgICAgIGlmICh2aXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBpbm5lciA9IGlubmVyIHx8IHJlbmRlck1hbnkoc2NvcGUsIF9jaGlsZHJlbik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5uZXIpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYiBvZiBpbm5lcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChiLmRpc3Bvc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYi5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW5uZXIgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRyaXZlcigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGlzcG9zZSgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdWJzY3IgJiYgdHlwZW9mIHN1YnNjci51bnN1YnNjcmliZSA9PT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICAgICAgICAgICAgICBzdWJzY3IudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgICAgIHNjb3BlLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vbGlzdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vaWYnO1xyXG4iLCJpbXBvcnQgeyBJVGVtcGxhdGUgfSBmcm9tICcuLi8uLi9saWIvZHJpdmVyJztcclxuaW1wb3J0IHsgYXNUZW1wbGF0ZSB9IGZyb20gJy4uLy4uL2xpYi90cGwnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZsYXRUcmVlPFQ+KHNvdXJjZTogVHJlZTxUPiwgYXJnczogYW55W10pOiBJVGVtcGxhdGVbXSB7XHJcbiAgICBjb25zdCBzdGFjazogVHJlZTxUPiA9IFtzb3VyY2VdO1xyXG4gICAgY29uc3QgcmVzdWx0OiBJVGVtcGxhdGVbXSA9IFtdO1xyXG5cclxuICAgIHdoaWxlIChzdGFjay5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3QgY3VyciA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICAgIGlmICh3aW5kb3cuQXJyYXkuaXNBcnJheShjdXJyKSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gY3Vyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChjdXJyW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGN1cnIgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgY29uc3QgZm46IGFueSA9IGN1cnI7XHJcbiAgICAgICAgICAgIGNvbnN0IHJldHZhbCA9IGZuLmFwcGx5KG51bGwsIGFyZ3MpO1xyXG4gICAgICAgICAgICBzdGFjay5wdXNoKHJldHZhbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goYXNUZW1wbGF0ZShjdXJyKSBhcyBJVGVtcGxhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG50eXBlIEZ1bmM8VD4gPSAoLi4uYXJnczogYW55W10pID0+IFRyZWU8VD47XHJcbnR5cGUgVHJlZTxUPiA9IFQgfCBGdW5jPFQ+IHwgVHJlZTxUPltdO1xyXG4vLyB0eXBlIFRyZWU8VD4gPSBUIHwgWyBUcmVlIHwgVHJlZVtdIF1cclxuXHJcbi8vIGNvbnNvbGUubG9nKGVsZW1lbnRzKTtcclxuIiwiaW1wb3J0IHsgSVRlbXBsYXRlLCBJRHJpdmVyLCBCaW5kaW5nLCBkaXNwb3NlTWFueSB9IGZyb20gJy4uLy4uL2xpYi9kcml2ZXInO1xyXG5pbXBvcnQgeyByZW5kZXJTdGFjayB9IGZyb20gJy4uLy4uL2xpYi90cGwnO1xyXG5pbXBvcnQgeyBmbGF0VHJlZSB9IGZyb20gJy4vaGVscGVycyc7XHJcbmltcG9ydCAqIGFzIE0gZnJvbSAnLi4vLi4vLi4vbXV0YWJsLmpzJztcclxuaW1wb3J0IHsgYXNQcm94eSwgaXNFeHByZXNzaW9uLCBWYWx1ZSB9IGZyb20gJy4uLy4uLy4uL211dGFibC5qcyc7XHJcblxyXG50eXBlIERpc3Bvc2FibGUgPSB7IGRpc3Bvc2UoKTogYW55IH07XHJcblxyXG50eXBlIEl0ZW1UZW1wbGF0ZTxUPiA9IChrZXksIHZhbHVlczogVCwgaW5kZXg6ICgpID0+IG51bWJlcikgPT4gSVRlbXBsYXRlW107XHJcbmludGVyZmFjZSBMaXN0UHJvcHM8VD4ge1xyXG4gIHNvdXJjZTogTS5MaXN0U3RvcmU8VD4gfCBUW107XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIExpc3Q8VD4ocHJvcHM6IExpc3RQcm9wczxUPiwgX2NoaWxkcmVuOiBJdGVtVGVtcGxhdGU8VD5bXSkge1xyXG4gIGNvbnN0IHsgc291cmNlIH0gPSBwcm9wcztcclxuXHJcbiAgZnVuY3Rpb24gaXRlbVRlbXBsYXRlKHZhbHVlczogVCwgaW5kZXg6ICgpID0+IG51bWJlcikge1xyXG4gICAgcmV0dXJuIGZsYXRUcmVlKF9jaGlsZHJlbiwgW1xyXG4gICAgICBpc0V4cHJlc3Npb24odmFsdWVzKSA/IGFzUHJveHkodmFsdWVzKSA6IHZhbHVlcyxcclxuICAgICAgeyBpbmRleCwgZGlzcG9zZSB9LFxyXG4gICAgXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcG9zZSgpIHtcclxuICAgICAgY29uc3QgaWR4ID0gaW5kZXgoKTtcclxuICAgICAgaWYgKGlkeCA+PSAwKSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc291cmNlKSkge1xyXG4gICAgICAgICAgc291cmNlLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzb3VyY2UuYWRkKHtcclxuICAgICAgICAgICAgdHlwZTogJ3JlbW92ZScsXHJcbiAgICAgICAgICAgIHByZWRpY2F0ZTogKHgpID0+IHggPT0gdmFsdWVzLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcmVuZGVyKGRyaXZlcjogSURyaXZlcikge1xyXG4gICAgICBjb25zdCBpdGVtczogQ29udGFpbmVySXRlbTxUPltdID0gW107XHJcbiAgICAgIGNvbnN0IHsgc291cmNlIH0gPSBwcm9wcztcclxuICAgICAgY29uc3Qgcm9vdFNjb3BlID0gZHJpdmVyLmNyZWF0ZVNjb3BlKCk7XHJcbiAgICAgIGNvbnN0IGRpc3Bvc2FibGUgPSB7XHJcbiAgICAgICAgZGlzcG9zZSgpIHtcclxuICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xyXG4gICAgICAgICAgICBjb25zdCB7IHNjb3BlLCBiaW5kaW5ncyB9ID0gaXRlbTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBiaW5kaW5nIG9mIGJpbmRpbmdzKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGJpbmRpbmcuZGlzcG9zZSkge1xyXG4gICAgICAgICAgICAgICAgYmluZGluZy5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNjb3BlLmRpc3Bvc2UoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc291cmNlKSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc291cmNlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBhcHBseU11dGF0aW9uKHtcclxuICAgICAgICAgICAgdHlwZTogJ2luc2VydCcsXHJcbiAgICAgICAgICAgIGluZGV4OiBpLFxyXG4gICAgICAgICAgICB2YWx1ZXM6IHNvdXJjZVtpXSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGlzcG9zYWJsZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gW3NvdXJjZS5zdWJzY3JpYmUoYXBwbHlNdXRhdGlvbiksIGRpc3Bvc2FibGVdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBhcHBseU11dGF0aW9uKG06IE0uTGlzdE11dGF0aW9uPFQ+KSB7XHJcbiAgICAgICAgaWYgKG0udHlwZSA9PT0gJ3B1c2gnKSB7XHJcbiAgICAgICAgICBjb25zdCB7IHZhbHVlcyB9ID0gbTtcclxuICAgICAgICAgIGFwcGx5SW5zZXJ0KHZhbHVlcywgaXRlbXMubGVuZ3RoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG0udHlwZSA9PT0gJ2luc2VydCcpIHtcclxuICAgICAgICAgIGNvbnN0IHsgdmFsdWVzLCBpbmRleCB9ID0gbTtcclxuICAgICAgICAgIGFwcGx5SW5zZXJ0KHZhbHVlcywgaW5kZXgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobS50eXBlID09PSAncmVtb3ZlJykge1xyXG4gICAgICAgICAgY29uc3QgaWR4ID1cclxuICAgICAgICAgICAgdHlwZW9mIG0ucHJlZGljYXRlID09PSAnbnVtYmVyJ1xyXG4gICAgICAgICAgICAgID8gbS5wcmVkaWNhdGVcclxuICAgICAgICAgICAgICA6IGl0ZW1zLmZpbmRJbmRleChjb250YWluZXJQcmVkaWNhdGUobS5wcmVkaWNhdGUpKTtcclxuICAgICAgICAgIC8vIGNvbnN0IGlkeCA9IGl0ZW1zLmZpbmRJbmRleCgoY2kpID0+IG0ucHJlZGljYXRlKGNpLnZhbHVlcykpO1xyXG4gICAgICAgICAgaWYgKGlkeCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1tpZHhdO1xyXG4gICAgICAgICAgICBjb25zdCB7IHNjb3BlLCBiaW5kaW5ncyB9ID0gaXRlbTtcclxuICAgICAgICAgICAgc2NvcGUuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICBkaXNwb3NlTWFueShiaW5kaW5ncyk7XHJcbiAgICAgICAgICAgIGl0ZW1zLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAobS50eXBlID09PSAncmVzZXQnKSB7XHJcbiAgICAgICAgICBhcHBseVJlc2V0KG0uaXRlbXMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobS50eXBlID09PSAnbW92ZScpIHtcclxuICAgICAgICAgIC8vIFRPRE8gaW1wbGVtZW50IVxyXG4gICAgICAgICAgY29uc3QgdG1wID0gaXRlbXNbbS5mcm9tXTtcclxuICAgICAgICAgIGl0ZW1zW20uZnJvbV0gPSBpdGVtc1ttLnRvXTtcclxuICAgICAgICAgIGl0ZW1zW20udG9dID0gdG1wO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdub3QgYSBtdXRhdGlvbiAnLCBtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGFwcGx5SW5zZXJ0KHZhbHVlczogVCwgaWR4OiBudW1iZXIpIHtcclxuICAgICAgICAgIGNvbnN0IGl0ZW1TY29wZSA9IHJvb3RTY29wZS5jcmVhdGVTY29wZShpZHgpO1xyXG4gICAgICAgICAgY29uc3QgaXRlbTogQ29udGFpbmVySXRlbTxUPiA9IHtcclxuICAgICAgICAgICAgc2NvcGU6IGl0ZW1TY29wZSxcclxuICAgICAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgICAgICBiaW5kaW5nczogcmVuZGVyU3RhY2soXHJcbiAgICAgICAgICAgICAgZmxhdFRyZWUoW2l0ZW1UZW1wbGF0ZV0sIFt2YWx1ZXMsIGluZGV4XSlcclxuICAgICAgICAgICAgICAgIC5tYXAoKHRlbXBsYXRlKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICBkcml2ZXI6IGl0ZW1TY29wZSxcclxuICAgICAgICAgICAgICAgICAgdGVtcGxhdGUsXHJcbiAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgIC5yZXZlcnNlKClcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBpdGVtcy5zcGxpY2UoaWR4LCAwLCBpdGVtKTtcclxuXHJcbiAgICAgICAgICBmdW5jdGlvbiBpbmRleCgpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1tpXTtcclxuICAgICAgICAgICAgICBpZiAoaXRlbS5zY29wZSA9PT0gaXRlbVNjb3BlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGlkeDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGFwcGx5UmVzZXQobmV3SXRlbXM6IFRbXSkge1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAvLyBmb3IgKGNvbnN0IHNuYXAgb2YgaXRlbXMpIHtcclxuICAgICAgICAgICAgY29uc3Qgc25hcCA9IGl0ZW1zW2ldO1xyXG4gICAgICAgICAgICBjb25zdCB7IHZhbHVlcywgc2NvcGUsIGJpbmRpbmdzIH0gPSBzbmFwO1xyXG4gICAgICAgICAgICBpZiAodmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgaWR4ID0gbmV3SXRlbXMuZmluZEluZGV4KCh4KSA9PiB4ID09PSBzbmFwLnZhbHVlcyk7XHJcbiAgICAgICAgICAgICAgaWYgKGlkeCA8IDApIHtcclxuICAgICAgICAgICAgICAgIHNjb3BlLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgIGRpc3Bvc2VNYW55KGJpbmRpbmdzKTtcclxuICAgICAgICAgICAgICAgIGl0ZW1zLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIGktLTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3SXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gbmV3SXRlbXNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gaXRlbXMuZmluZEluZGV4KChjaSkgPT4gY2kudmFsdWVzID09PSB2YWx1ZXMpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgICAgYXBwbHlNdXRhdGlvbih7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW5zZXJ0JyxcclxuICAgICAgICAgICAgICAgIGluZGV4OiBpLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4ICE9IGkpIHtcclxuICAgICAgICAgICAgICAvLyBpdGVtc1tuXS51cGRhdGUodmFsdWVzKTtcclxuICAgICAgICAgICAgICBhcHBseU11dGF0aW9uKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdtb3ZlJyxcclxuICAgICAgICAgICAgICAgIGZyb206IGluZGV4LFxyXG4gICAgICAgICAgICAgICAgdG86IGksXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgLy8gaXRlbXNbbl0udXBkYXRlKHZhbHVlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuaW50ZXJmYWNlIENvbnRhaW5lckl0ZW08VD4ge1xyXG4gIGJpbmRpbmdzOiBCaW5kaW5nW107XHJcbiAgc2NvcGU6IERpc3Bvc2FibGU7XHJcbiAgdmFsdWVzOiBUO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbnRhaW5lckl0ZW1Db250ZXh0IHtcclxuICBkaXNwb3NlKCk6IGFueTtcclxuICBpbmRleDogKCkgPT4gbnVtYmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb250YWluZXJQcmVkaWNhdGU8VD4oZmlsdGVyOiAodDogVCkgPT4gYm9vbGVhbikge1xyXG4gIHJldHVybiAoY2k6IENvbnRhaW5lckl0ZW08VD4pID0+IGZpbHRlcihjaS52YWx1ZXMpO1xyXG59XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL2xpYi90cGwnO1xyXG5leHBvcnQgeyB0cGwsIHJlbmRlciwgbGF6eSwgYXNUZW1wbGF0ZSB9IGZyb20gJy4vbGliL3RwbCc7XHJcbmV4cG9ydCB7IERvbURyaXZlciB9IGZyb20gJy4vbGliL2RvbSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbGliL2RyaXZlcic7XHJcbiIsImltcG9ydCB7XHJcbiAgSURyaXZlcixcclxuICBQcmltaXRpdmUsXHJcbiAgRXhlY3V0YWJsZSxcclxuICBUZXh0RWxlbWVudCxcclxuICBjaGlsZHJlbixcclxuICBQYXJlbnQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIHJlZmVyZW5jZU5vZGUsXHJcbiAgQmluZGluZyxcclxufSBmcm9tICcuL2RyaXZlcic7XHJcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QgfSBmcm9tICcuL3V0aWwvY29tYmluZUxhdGVzdCc7XHJcblxyXG5jb25zdCBfX2VtcHR5QmluZGluZyA9IHsgZGlzcG9zZSgpIHt9IH07XHJcbmV4cG9ydCBjbGFzcyBEb21Ecml2ZXIgaW1wbGVtZW50cyBJRHJpdmVyIHtcclxuICBwdWJsaWMgdGFyZ2V0OiBIVE1MRWxlbWVudDtcclxuICBwdWJsaWMgZG9tRWxlbWVudHM6IE5vZGVbXSA9IFtdO1xyXG4gIHByaXZhdGUgZXZlbnRzOiB7IGV2ZW50TmFtZTogc3RyaW5nOyBldmVudEJpbmRpbmc6IGFueTsgZG9tOiBhbnkgfVtdID0gW107XHJcbiAgW2NoaWxkcmVuXTogQ29tcG9uZW50W10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IodGFyZ2V0OiBzdHJpbmcgfCBIVE1MRWxlbWVudCkge1xyXG4gICAgY29uc3QgZG9tID1cclxuICAgICAgdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZydcclxuICAgICAgICA/IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCkgYXMgSFRNTEVsZW1lbnQpXHJcbiAgICAgICAgOiB0YXJnZXQ7XHJcbiAgICBpZiAoIWRvbSkge1xyXG4gICAgICB0aHJvdyBFcnJvcigndGFyZ2V0IGVsZW1lbnQgaXMgcmVxdWlyZWQnKTtcclxuICAgIH1cclxuICAgIHRoaXMudGFyZ2V0ID0gZG9tO1xyXG4gIH1cclxuXHJcbiAgYmluZDxSPihiaW5kZXI6IChkb206IEhUTUxFbGVtZW50KSA9PiBSKTogUiB7XHJcbiAgICByZXR1cm4gYmluZGVyKHRoaXMudGFyZ2V0KTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZURyaXZlcihub2RlOiBIVE1MRWxlbWVudCk6IElEcml2ZXIge1xyXG4gICAgcmV0dXJuIG5ldyBEb21Ecml2ZXIobm9kZSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVTY29wZShpZHg/OiBudW1iZXIpOiBJRHJpdmVyIHtcclxuICAgIC8vIGNvbnN0IGNvbW1lbnROb2RlID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudChgLS0tICR7bmFtZX0gLS0tYCk7XHJcbiAgICAvLyB0aGlzLnRhcmdldC5hcHBlbmRDaGlsZChjb21tZW50Tm9kZSk7XHJcblxyXG4gICAgY29uc3Qgc2NvcGUgPSBjcmVhdGVTY29wZSh0aGlzLCB0aGlzKTtcclxuICAgIGlmICh0eXBlb2YgaWR4ID09PSAnbnVtYmVyJykge1xyXG4gICAgICB0aGlzW2NoaWxkcmVuXS5zcGxpY2UoaWR4LCAwLCBzY29wZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzW2NoaWxkcmVuXS5wdXNoKHNjb3BlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzY29wZTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUV2ZW50KG5hbWU6IHN0cmluZywgdmFsdWU6IEZ1bmN0aW9uIHwgRXhlY3V0YWJsZTxhbnk+KSB7XHJcbiAgICBpZiAoIXZhbHVlKSByZXR1cm4gX19lbXB0eUJpbmRpbmc7XHJcblxyXG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IHRoaXM7XHJcblxyXG4gICAgaWYgKCEoJ29uJyArIG5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKSBpbiB0YXJnZXQpKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGV2ZW50SGFuZGxlcik7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGlzcG9zZSgpIHtcclxuICAgICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBldmVudEhhbmRsZXIpO1xyXG4gICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBldmVudEhhbmRsZXIoZXZ0OiBFdmVudCkge1xyXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgdmFsdWUoZXZ0KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YWx1ZS5leGVjdXRlKGV2dCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFwcGVuZENoaWxkKGNoaWxkOiBhbnkpIHtcclxuICAgIGNvbnN0IF9jaGlsZHJlbiA9IHRoaXNbY2hpbGRyZW5dO1xyXG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoX2NoaWxkcmVuKSkge1xyXG4gICAgICBjb25zdCBjb21wb25lbnQgPSB7XHJcbiAgICAgICAgaW5zZXJ0QmVmb3JlKG5vZGU6IE5vZGUpIHtcclxuICAgICAgICAgIHNjb3BlLnRhcmdldC5pbnNlcnRCZWZvcmUobm9kZSwgY2hpbGQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGlzcG9zZSgpIHtcclxuICAgICAgICAgIGNoaWxkLmRpc3Bvc2UoKTtcclxuICAgICAgICAgIHJlbW92ZUNvbXBvbmVudChzY29wZSwgY29tcG9uZW50KTtcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgICBfY2hpbGRyZW4ucHVzaChjb21wb25lbnQpO1xyXG4gICAgICB0aGlzLnRhcmdldC5hcHBlbmRDaGlsZChjaGlsZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ2lnbm9yZSBjaGlsZCwgZHJpdmVyIGlzIGRpc3Bvc2VkLicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlRWxlbWVudChuYW1lOiBzdHJpbmcsIGluaXQ6IChkb206IEhUTUxFbGVtZW50KSA9PiB2b2lkKSB7XHJcbiAgICBjb25zdCB0YWdOb2RlID0gY3JlYXRlRE9NRWxlbWVudCh0aGlzLnRhcmdldCwgbmFtZSkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICB0aGlzLmFwcGVuZENoaWxkKHRhZ05vZGUpO1xyXG4gICAgY29uc3QgZHJpdmVyID0gdGhpcy5jcmVhdGVEcml2ZXIodGFnTm9kZSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVhZHkoKSB7XHJcbiAgICAgICAgaW5pdCAmJiBpbml0KHRhZ05vZGUpO1xyXG4gICAgICB9LFxyXG4gICAgICBkcml2ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRyaXZlcjtcclxuICAgICAgfSxcclxuICAgICAgZGlzcG9zZSgpIHtcclxuICAgICAgICB0YWdOb2RlLnJlbW92ZSgpO1xyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8vIGluc2VydEF0KHRhZ05vZGUsIGluZGV4LCBhbmNob3JOb2RlKSB7XHJcbiAgLy8gICAgIGluc2VydE5vZGVBdCh0aGlzLCB0aGlzLmRvbUVsZW1lbnRzLCBhbmNob3JOb2RlLCB0YWdOb2RlLCBpbmRleCk7XHJcbiAgLy8gfVxyXG5cclxuICBjcmVhdGVOYXRpdmUodmFsdWU6IFByaW1pdGl2ZSB8IEhUTUxFbGVtZW50KSB7XHJcbiAgICBjb25zdCBub2RlID0gaXNEb21Ob2RlKHZhbHVlKVxyXG4gICAgICA/IHZhbHVlXHJcbiAgICAgIDogZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUgYXMgc3RyaW5nKTtcclxuICAgIHRoaXMuYXBwZW5kQ2hpbGQobm9kZSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmV4dCh2YWx1ZTogdW5rbm93bikge1xyXG4gICAgICAgIG5vZGUubm9kZVZhbHVlID0gdmFsdWUgYXMgc3RyaW5nO1xyXG4gICAgICB9LFxyXG4gICAgICBkaXNwb3NlKCkge1xyXG4gICAgICAgIHJldHVybiBub2RlLnJlbW92ZSgpO1xyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUF0dHJpYnV0ZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBQcmltaXRpdmUpIHtcclxuICAgIHJldHVybiBjcmVhdGVBdHRyaWJ1dGUodGhpcy50YXJnZXQsIG5hbWUsIHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGZpbmRFdmVudEJpbmRpbmcodGFyZ2V0OiBOb2RlIHwgbnVsbCwgZXZlbnROYW1lOiBzdHJpbmcpIHtcclxuICAgIHZhciBldmVudHMgPSB0aGlzLmV2ZW50cztcclxuICAgIGxldCBub2RlID0gdGFyZ2V0O1xyXG4gICAgd2hpbGUgKG5vZGUpIHtcclxuICAgICAgdmFyIGUgPSBldmVudHMubGVuZ3RoO1xyXG4gICAgICB3aGlsZSAoZS0tKSB7XHJcbiAgICAgICAgdmFyIGV2ID0gZXZlbnRzW2VdO1xyXG4gICAgICAgIGlmIChldi5kb20gPT09IG5vZGUgJiYgZXYuZXZlbnROYW1lID09PSBldmVudE5hbWUpIHtcclxuICAgICAgICAgIHJldHVybiBldi5ldmVudEJpbmRpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIG9uKGV2ZW50TmFtZTogc3RyaW5nLCBkb206IEhUTUxFbGVtZW50LCBldmVudEJpbmRpbmc6IEJpbmRpbmcpIHtcclxuICAgIHZhciBldmVudHMgPSB0aGlzLmV2ZW50cyxcclxuICAgICAgaSA9IGV2ZW50cy5sZW5ndGgsXHJcbiAgICAgIGV2ZW50Qm91bmQgPSBmYWxzZTtcclxuXHJcbiAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgIHZhciBldiA9IGV2ZW50c1tpXTtcclxuICAgICAgaWYgKGV2LmV2ZW50TmFtZSA9PT0gZXZlbnROYW1lKSB7XHJcbiAgICAgICAgaWYgKGV2LmRvbSA9PT0gZG9tKSByZXR1cm4gZXY7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBldmVudEJvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghZXZlbnRCb3VuZCkge1xyXG4gICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50O1xyXG4gICAgICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgICAgIHZhciBldmVudEJpbmRpbmcgPSB0aGlzLmZpbmRFdmVudEJpbmRpbmcodGFyZ2V0IGFzIE5vZGUsIGV2ZW50TmFtZSk7XHJcbiAgICAgICAgICBpZiAoZXZlbnRCaW5kaW5nKSB7XHJcbiAgICAgICAgICAgIGV2ZW50QmluZGluZy5maXJlKGV2ZW50KTtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBlbnRyeSA9IHtcclxuICAgICAgZXZlbnROYW1lLFxyXG4gICAgICBkb20sXHJcbiAgICAgIGV2ZW50QmluZGluZyxcclxuICAgICAgZGlzcG9zZSgpIHtcclxuICAgICAgICB2YXIgaWR4ID0gZXZlbnRzLmluZGV4T2YodGhpcyk7XHJcbiAgICAgICAgaWYgKGlkeCA+PSAwKSB7XHJcbiAgICAgICAgICBldmVudHMuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICAgIHRoaXMuZXZlbnRzLnB1c2goZW50cnkpO1xyXG4gICAgcmV0dXJuIGVudHJ5O1xyXG4gIH1cclxuXHJcbiAgaW5zZXJ0KF86IHVua25vd24sIGRvbTogTm9kZSwgaWR4OiBudW1iZXIpIHtcclxuICAgIHZhciBkb21FbGVtZW50cyA9IHRoaXMuZG9tRWxlbWVudHM7XHJcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XHJcblxyXG4gICAgdmFyIGN1cklkeCA9IGRvbUVsZW1lbnRzLmluZGV4T2YoZG9tKTtcclxuICAgIGlmIChpZHggIT09IGN1cklkeCkge1xyXG4gICAgICB2YXIgY2hpbGROb2RlcyA9IHRhcmdldC5jaGlsZE5vZGVzO1xyXG4gICAgICBpZiAoaWR4IDwgY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuICAgICAgICB2YXIgY3VycmVudCA9IGNoaWxkTm9kZXNbaWR4XTtcclxuICAgICAgICBpZiAoY3VycmVudCAhPT0gZG9tKSB7XHJcbiAgICAgICAgICB0YXJnZXQuaW5zZXJ0QmVmb3JlKGRvbSwgY3VycmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoZG9tKTtcclxuICAgICAgfVxyXG4gICAgICB2YXIgbGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGg7XHJcbiAgICAgIGRvbUVsZW1lbnRzLmxlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGRvbUVsZW1lbnRzW2ldID0gY2hpbGROb2Rlc1tpXTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGRpc3Bvc2UoKSB7XHJcbiAgICB2YXIgZG9tRWxlbWVudHMgPSB0aGlzLmRvbUVsZW1lbnRzLFxyXG4gICAgICBpID0gZG9tRWxlbWVudHMubGVuZ3RoO1xyXG4gICAgd2hpbGUgKGktLSkge1xyXG4gICAgICBjb25zdCBhID0gZG9tRWxlbWVudHNbaV0gYXMgRWxlbWVudDtcclxuICAgICAgaWYgKGEucmVtb3ZlKSB7XHJcbiAgICAgICAgYS5yZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZSB0aGlzW2NoaWxkcmVuXTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNjb3BlKHJvb3Q6IERvbURyaXZlciwgcGFyZW50OiBQYXJlbnQpIHtcclxuICBjb25zdCBhdHRyaWJ1dGVzID0gW107XHJcbiAgY29uc3Qgc2NvcGUgPSB7XHJcbiAgICBbY2hpbGRyZW5dOiBbXSBhcyBDb21wb25lbnRbXSxcclxuICAgIGdldCB0YXJnZXQoKSB7XHJcbiAgICAgIHJldHVybiByb290LnRhcmdldDtcclxuICAgIH0sXHJcbiAgICBjcmVhdGVFdmVudCgpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcmVhdGUgRXZlbnQgaXMgbm90ICh5ZXQpIHN1cHBvcnRlZCcpO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZUF0dHJpYnV0ZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBQcmltaXRpdmUgfCBQcmltaXRpdmVbXSkge1xyXG4gICAgICBjb25zdCBiaW5kaW5nID0gY3JlYXRlQXR0cmlidXRlKHJvb3QudGFyZ2V0LCBuYW1lLCB2YWx1ZSk7XHJcbiAgICAgIGF0dHJpYnV0ZXMucHVzaChiaW5kaW5nKTtcclxuICAgICAgcmV0dXJuIGJpbmRpbmc7XHJcbiAgICB9LFxyXG4gICAgYmluZDxSPihiaW5kZXI6IChkb206IEhUTUxFbGVtZW50KSA9PiBSKTogUiB7XHJcbiAgICAgIHJldHVybiByb290LmJpbmQoYmluZGVyKTtcclxuICAgIH0sXHJcbiAgICBjcmVhdGVFbGVtZW50KG5hbWU6IHN0cmluZywgaW5pdDogYW55KSB7XHJcbiAgICAgIGNvbnN0IHRhZ05vZGUgPSBjcmVhdGVET01FbGVtZW50KHJvb3QudGFyZ2V0LCBuYW1lKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgYXBwZW5kQ2hpbGQodGFnTm9kZSk7XHJcblxyXG4gICAgICBjb25zdCBjb21wb25lbnQgPSB7XHJcbiAgICAgICAgdGFnTm9kZSxcclxuICAgICAgICBpbnNlcnRCZWZvcmUobm9kZTogTm9kZSkge1xyXG4gICAgICAgICAgcm9vdC50YXJnZXQuaW5zZXJ0QmVmb3JlKG5vZGUsIHRhZ05vZGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGlzcG9zZSgpIHtcclxuICAgICAgICAgIHRhZ05vZGUucmVtb3ZlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgICAgYWRkQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcbiAgICAgIGNvbnN0IGJpbmRpbmcgPSB7XHJcbiAgICAgICAgcmVhZHkoKSB7XHJcbiAgICAgICAgICBpbml0ICYmIGluaXQodGFnTm9kZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkcml2ZXIoKSB7XHJcbiAgICAgICAgICByZXR1cm4gcm9vdC5jcmVhdGVEcml2ZXIodGFnTm9kZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkaXNwb3NlKCkge1xyXG4gICAgICAgICAgdGFnTm9kZS5yZW1vdmUoKTtcclxuICAgICAgICAgIHJlbW92ZUNvbXBvbmVudChzY29wZSwgY29tcG9uZW50KTtcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgICByZXR1cm4gYmluZGluZztcclxuICAgIH0sXHJcbiAgICBjcmVhdGVOYXRpdmUodmFsdWU6IFByaW1pdGl2ZSk6IFRleHRFbGVtZW50IHtcclxuICAgICAgY29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSBhcyBzdHJpbmcpO1xyXG4gICAgICBhcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XHJcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHtcclxuICAgICAgICB0ZXh0Tm9kZSxcclxuICAgICAgICBpbnNlcnRCZWZvcmUobm9kZTogTm9kZSkge1xyXG4gICAgICAgICAgcm9vdC50YXJnZXQuaW5zZXJ0QmVmb3JlKG5vZGUsIHRleHROb2RlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgICB0ZXh0Tm9kZS5yZW1vdmUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgICBhZGRDb21wb25lbnQoY29tcG9uZW50KTtcclxuXHJcbiAgICAgIGNvbnN0IGJpbmRpbmcgPSB7XHJcbiAgICAgICAgbmV4dCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgICB0ZXh0Tm9kZS5ub2RlVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgICB0ZXh0Tm9kZS5yZW1vdmUoKTtcclxuICAgICAgICAgIHJlbW92ZUNvbXBvbmVudChzY29wZSwgY29tcG9uZW50KTtcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgICByZXR1cm4gYmluZGluZztcclxuICAgIH0sXHJcbiAgICBjcmVhdGVTY29wZShpZHg/OiBudW1iZXIpIHtcclxuICAgICAgLy8gY29uc3QgY29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoYC0tICR7bmFtZX0gLS1gKTtcclxuICAgICAgLy8gc2NvcGUuYXBwZW5kQ2hpbGQoY29tbWVudCk7XHJcbiAgICAgIGNvbnN0IHN1YnNjb3BlID0gY3JlYXRlU2NvcGUocm9vdCwgc2NvcGUpO1xyXG4gICAgICBpZiAodHlwZW9mIGlkeCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICBzY29wZVtjaGlsZHJlbl0uc3BsaWNlKGlkeCwgMCwgc3Vic2NvcGUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNjb3BlW2NoaWxkcmVuXS5wdXNoKHN1YnNjb3BlKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc3Vic2NvcGU7XHJcbiAgICB9LFxyXG4gICAgZGlzcG9zZSgpIHtcclxuICAgICAgcmVtb3ZlQ29tcG9uZW50KHBhcmVudCwgc2NvcGUpO1xyXG4gICAgICAvLyBkZWxpYmVyYXRlbHkgdXNlIHRoZSBjaGlsZHJlbiBhcnJheSBpbnN0YW5jZSBpbnN0ZWFkIG9mIGNsb25pbmcgaXQuXHJcbiAgICAgIC8vIGRpc3Bvc2VDaGlsZHJlbihzY29wZVtjaGlsZHJlbl0pO1xyXG4gICAgICBkZWxldGUgc2NvcGVbY2hpbGRyZW5dOyAvLyBtYXJrIGFzIGRpc3Bvc2VkXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGFwcGVuZENoaWxkKG5vZGU6IENvbW1lbnQgfCBIVE1MRWxlbWVudCkge1xyXG4gICAgY29uc3QgcmVmTm9kZSA9IHJlZmVyZW5jZU5vZGUocm9vdCwgc2NvcGUpO1xyXG4gICAgaWYgKHJlZk5vZGUpIHtcclxuICAgICAgcmVmTm9kZS5pbnNlcnRCZWZvcmUobm9kZSk7XHJcbiAgICB9IGVsc2Ugcm9vdC50YXJnZXQuYXBwZW5kQ2hpbGQobm9kZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhZGRDb21wb25lbnQoY29tcG9uZW50OiBDb21wb25lbnQpIHtcclxuICAgIGNvbnN0IF9jaGlsZHJlbiA9IHNjb3BlW2NoaWxkcmVuXTtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KF9jaGlsZHJlbikpIHtcclxuICAgICAgX2NoaWxkcmVuLnB1c2goY29tcG9uZW50KTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgJ2FwcGVuZGluZyBjaGlsZCBpcyBza2lwcGVkIGJlY2F1c2Ugc2NvcGUgaXMgZGlzcG9zZWQgYWxyZWFkeS4nXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHNjb3BlO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVDb21wb25lbnQoc2NvcGU6IFBhcmVudCwgbm9kZTogQ29tcG9uZW50KSB7XHJcbiAgY29uc3QgX2NoaWxkcmVuID0gc2NvcGVbY2hpbGRyZW5dO1xyXG4gIGlmICghQXJyYXkuaXNBcnJheShfY2hpbGRyZW4pKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBpZHggPSBfY2hpbGRyZW4uaW5kZXhPZihub2RlKTtcclxuICBpZiAoaWR4ID49IDApIHtcclxuICAgIF9jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUF0dHJpYnV0ZShcclxuICB0YXJnZXQ6IEhUTUxFbGVtZW50LFxyXG4gIG5hbWU6IHN0cmluZyxcclxuICB2YWx1ZTogUHJpbWl0aXZlIHwgUHJpbWl0aXZlW11cclxuKSB7XHJcbiAgdmFyIHByZXZWYWx1ZXM6IHN0cmluZ1tdID0gW107XHJcbiAgaWYgKG5hbWUgPT09ICdkaXNhYmxlZCcpIHtcclxuICAgIGlzRGlzYWJsZWQodGFyZ2V0LCB2YWx1ZSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0YXJnZXQsXHJcbiAgICAgIG5leHQ6ICh2YWx1ZTogYW55KSA9PiBpc0Rpc2FibGVkKHRhcmdldCwgdmFsdWUpLFxyXG4gICAgICBkaXNwb3NlKCkge1xyXG4gICAgICAgIGlzRGlzYWJsZWQodGFyZ2V0LCBmYWxzZSk7XHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0gZWxzZSBpZiAobmFtZSA9PT0gJ2NsYXNzJykge1xyXG4gICAgY29uc3Qgc3Vic2NyID0gY29tYmluZUxhdGVzdChcclxuICAgICAgQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV1cclxuICAgICkuc3Vic2NyaWJlKGNsYXNzTmFtZSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0YXJnZXQsXHJcbiAgICAgIG5leHQ6IGNsYXNzTmFtZSxcclxuICAgICAgZGlzcG9zZSgpIHtcclxuICAgICAgICBzdWJzY3IudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICBwcmV2VmFsdWVzLmZvckVhY2goKGNsKSA9PiBjbCAmJiB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShjbCkpO1xyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9IGVsc2UgaWYgKG5hbWUgPT09ICd2YWx1ZScpIHtcclxuICAgIHZhbHVlQXR0cmlidXRlKHRvU3RyaW5nKHZhbHVlKSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZXh0OiB2YWx1ZUF0dHJpYnV0ZSxcclxuICAgICAgZGlzcG9zZSgpIHtcclxuICAgICAgICB0YXJnZXQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9IGVsc2Uge1xyXG4gICAgZGVmYXVsdEF0dHJpYnV0ZSh0b1N0cmluZyh2YWx1ZSkpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmV4dDogZGVmYXVsdEF0dHJpYnV0ZSxcclxuICAgICAgZGlzcG9zZSgpIHtcclxuICAgICAgICB0YXJnZXQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsYXNzTmFtZSh2YWx1ZTogYW55KSB7XHJcbiAgICBjb25zdCBuZXh0VmFsdWVzID0gW107XHJcblxyXG4gICAgY29uc3Qgc3RhY2sgPSBbdmFsdWVdO1xyXG4gICAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBjdXJyID0gc3RhY2sucG9wKCk7XHJcbiAgICAgIGlmIChjdXJyID09PSBudWxsIHx8IGN1cnIgPT09IHVuZGVmaW5lZCkgY29udGludWU7XHJcblxyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjdXJyKSkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY3Vyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgc3RhY2sucHVzaChjdXJyW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGN1cnIgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgY29uc3Qgc3BsaXQgPSBjdXJyLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzcGxpdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgY29uc3QgY2wgPSBzcGxpdFtpXTtcclxuICAgICAgICAgIGlmIChjbCkgbmV4dFZhbHVlcy5wdXNoKGNsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3Qgc3BsaXQgPSBjdXJyLnRvU3RyaW5nKCkuc3BsaXQoJyAnKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNwbGl0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBjb25zdCBjbCA9IHNwbGl0W2ldO1xyXG4gICAgICAgICAgaWYgKGNsKSBuZXh0VmFsdWVzLnB1c2goY2wpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByZXZWYWx1ZXMuZm9yRWFjaCgoY2wpID0+IHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKGNsKSk7XHJcbiAgICBuZXh0VmFsdWVzLmZvckVhY2goKGNsKSA9PiB0YXJnZXQuY2xhc3NMaXN0LmFkZChjbCkpO1xyXG4gICAgcHJldlZhbHVlcyA9IG5leHRWYWx1ZXM7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB2YWx1ZUF0dHJpYnV0ZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoaXNJbnB1dEVsZW1lbnQodGFyZ2V0KSkge1xyXG4gICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRhcmdldC52YWx1ZSA9ICcnO1xyXG4gICAgICB9IGVsc2UgaWYgKHRhcmdldC50eXBlID09PSAnZGF0ZScpIHtcclxuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKHZhbHVlKTtcclxuICAgICAgICAvLyBlbnN1cmUgR01UIHRpbWV6b25lXHJcbiAgICAgICAgLy8gaHR0cHM6Ly9hdXN0aW5mcmFuY2Uud29yZHByZXNzLmNvbS8yMDEyLzA3LzA5L2h0bWw1LWRhdGUtaW5wdXQtZmllbGQtYW5kLXZhbHVlYXNkYXRlLXRpbWV6b25lLWdvdGNoYS0zL1xyXG4gICAgICAgIHRhcmdldC52YWx1ZUFzRGF0ZSA9IG5ldyBEYXRlKFxyXG4gICAgICAgICAgZC5nZXRGdWxsWWVhcigpLFxyXG4gICAgICAgICAgZC5nZXRNb250aCgpLFxyXG4gICAgICAgICAgZC5nZXREYXRlKCksXHJcbiAgICAgICAgICAxMlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB0YXJnZXQudmFsdWUgPSB2YWx1ZTtcclxuXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGRlZmF1bHRBdHRyaWJ1dGUodmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGVmYXVsdEF0dHJpYnV0ZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBpZiAodmFsdWUgPT09IHZvaWQgMCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICB0YXJnZXQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIGF0dHIgPSBkb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGVOUyhudWxsLCBuYW1lKTtcclxuICAgICAgYXR0ci52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICB0YXJnZXQuc2V0QXR0cmlidXRlTm9kZShhdHRyKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE5hbWVzcGFjZVVSSSh0YXJnZXQ6IEhUTUxFbGVtZW50LCBuYW1lOiBzdHJpbmcpIHtcclxuICByZXR1cm4gbmFtZSA9PT0gJ3N2ZydcclxuICAgID8gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgOiB0YXJnZXRcclxuICAgID8gdGFyZ2V0Lm5hbWVzcGFjZVVSSVxyXG4gICAgOiBudWxsO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZURPTUVsZW1lbnQodGFyZ2V0OiBIVE1MRWxlbWVudCwgbmFtZTogc3RyaW5nKSB7XHJcbiAgY29uc3QgbmFtZXNwYWNlVVJJID0gZ2V0TmFtZXNwYWNlVVJJKHRhcmdldCwgbmFtZSk7XHJcbiAgY29uc3QgdGFnTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2VVUkksIG5hbWUpO1xyXG5cclxuICByZXR1cm4gdGFnTm9kZTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9TdHJpbmcodmFsdWU6IGFueSkge1xyXG4gIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gdmFsdWU7XHJcblxyXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSByZXR1cm4gdmFsdWU7XHJcblxyXG4gIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNEb21Ob2RlKG9iajogYW55KTogb2JqIGlzIEhUTUxFbGVtZW50IHtcclxuICB0cnkge1xyXG4gICAgLy9Vc2luZyBXMyBET00yICh3b3JrcyBmb3IgRkYsIE9wZXJhIGFuZCBDaHJvbWUpXHJcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgLy9Ccm93c2VycyBub3Qgc3VwcG9ydGluZyBXMyBET00yIGRvbid0IGhhdmUgSFRNTEVsZW1lbnQgYW5kXHJcbiAgICAvL2FuIGV4Y2VwdGlvbiBpcyB0aHJvd24gYW5kIHdlIGVuZCB1cCBoZXJlLiBUZXN0aW5nIHNvbWVcclxuICAgIC8vcHJvcGVydGllcyB0aGF0IGFsbCBlbGVtZW50cyBoYXZlICh3b3JrcyBvbiBJRTcpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJlxyXG4gICAgICBvYmoubm9kZVR5cGUgPT09IDEgJiZcclxuICAgICAgdHlwZW9mIG9iai5zdHlsZSA9PT0gJ29iamVjdCcgJiZcclxuICAgICAgdHlwZW9mIG9iai5vd25lckRvY3VtZW50ID09PSAnb2JqZWN0J1xyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzSW5wdXRFbGVtZW50KGVsdDogYW55KTogZWx0IGlzIEhUTUxJbnB1dEVsZW1lbnQge1xyXG4gIHJldHVybiBlbHQgJiYgJ3ZhbHVlJyBpbiBlbHQgJiYgJ3R5cGUnIGluIGVsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNEaXNhYmxlZCh0YXJnZXQ6IEhUTUxFbGVtZW50LCB2YWx1ZTogYW55KSB7XHJcbiAgaWYgKGlzSW5wdXRFbGVtZW50KHRhcmdldCkpIHtcclxuICAgIHRhcmdldC5kaXNhYmxlZCA9ICEhdmFsdWU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFN1YnNjcmliYWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IHR5cGUgRXhlY3V0YWJsZTxUPiA9IHsgZXhlY3V0ZTogKGU6IFQpID0+IGFueSB9IHwgRnVuY3Rpb247XHJcbmV4cG9ydCB0eXBlIEJpbmRpbmdWYWx1ZTxUPiA9IFQgfCBTdWJzY3JpYmFibGU8VD47XHJcblxyXG5leHBvcnQgY29uc3QgY2hpbGRyZW4gPSBTeW1ib2woJ2NoaWxkcmVuJyk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEcml2ZXIge1xyXG4gICAgYmluZDxSPihiaW5kZXI6IChkb206IEhUTUxFbGVtZW50KSA9PiBSKTogUjtcclxuICAgIGNyZWF0ZUVsZW1lbnQobmFtZTogc3RyaW5nLCBpbml0PzogQWN0aW9uPGFueT4pOiBUYWdFbGVtZW50O1xyXG4gICAgY3JlYXRlTmF0aXZlKHZhbHVlOiBhbnkpOiBUZXh0RWxlbWVudDtcclxuICAgIGNyZWF0ZUF0dHJpYnV0ZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkgfCBhbnlbXSk6IFRleHRFbGVtZW50O1xyXG4gICAgY3JlYXRlRXZlbnQoXHJcbiAgICAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHZhbHVlOiBFeGVjdXRhYmxlPGFueT4gfCBGdW5jdGlvblxyXG4gICAgKTogVGFnRXZlbnQgfCBudWxsO1xyXG4gICAgY3JlYXRlU2NvcGUoaWR4PzogbnVtYmVyKTogSURyaXZlcjtcclxuICAgIGRpc3Bvc2UoKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYWdFdmVudCB7XHJcbiAgICBkaXNwb3NlKCk6IGFueTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFRhZ0VsZW1lbnQge1xyXG4gICAgcmVhZHk/KCk6IGFueTtcclxuICAgIGRyaXZlcj8oKTogSURyaXZlcjtcclxuICAgIGRpc3Bvc2UoKTogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRleHRFbGVtZW50IHtcclxuICAgIGRpc3Bvc2UoKTogdm9pZDtcclxuICAgIG5leHQodmFsdWU6IFByaW1pdGl2ZSB8IFByaW1pdGl2ZVtdKTogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNjb3BlRWxlbWVudCB7XHJcbiAgICBkcml2ZXIoaW5kZXg/OiBudW1iZXIpOiBJRHJpdmVyO1xyXG4gICAgZGlzcG9zZSgpOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgUHJvcHMgPSB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xyXG5leHBvcnQgZGVjbGFyZSB0eXBlIEVsZW1lbnQgPSBUYWdFbGVtZW50IHwgVGV4dEVsZW1lbnQgfCBTY29wZUVsZW1lbnQ7XHJcbmV4cG9ydCB0eXBlIFByaW1pdGl2ZSA9IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfCBEYXRlO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJpbWl0aXZlKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBQcmltaXRpdmUge1xyXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHxcclxuICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8XHJcbiAgICAgICAgdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgfHxcclxuICAgICAgICB2YWx1ZSBpbnN0YW5jZW9mIERhdGVcclxuICAgICk7XHJcbn1cclxuXHJcbmRlY2xhcmUgdHlwZSBBY3Rpb248VD4gPSAoYXJnOiBUKSA9PiBhbnk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUZW1wbGF0ZSB7XHJcbiAgICByZW5kZXIoZHJpdmVyOiBJRHJpdmVyLCBpbml0PzogQWN0aW9uPGFueT4pOiBCaW5kaW5nIHwgbnVsbDtcclxuICAgIGNoaWxkcmVuPzogSVRlbXBsYXRlW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmluZGluZyB7XHJcbiAgICBkcml2ZXI/KCk6IElEcml2ZXI7XHJcbiAgICBkaXNwb3NlPygpOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KHZpZXc6IElUZW1wbGF0ZSwgY2FsbGJhY2s6IChkb206IGFueSkgPT4gYW55KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNoaWxkcmVuOiB2aWV3LmNoaWxkcmVuLFxyXG4gICAgICAgIHJlbmRlcihkcml2ZXI6IElEcml2ZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZpZXcucmVuZGVyKGRyaXZlciwgY2FsbGJhY2spO1xyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNTdWJzY3JpYmFibGU8VD4odmFsdWU6IGFueSk6IHZhbHVlIGlzIFN1YnNjcmliYWJsZTxUPiB7XHJcbiAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLnN1YnNjcmliZSA9PT0gJ2Z1bmN0aW9uJztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYXJlbnQge1xyXG4gICAgW2NoaWxkcmVuXTogQ29tcG9uZW50W107XHJcbn1cclxuaW50ZXJmYWNlIExlYWYge1xyXG4gICAgaW5zZXJ0QmVmb3JlKG5vZGU6IENvbW1lbnQgfCBIVE1MRWxlbWVudCk6IGFueTtcclxuICAgIGRpc3Bvc2UoKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQ29tcG9uZW50ID0gTGVhZiB8IFBhcmVudDtcclxuXHJcbmZ1bmN0aW9uIGlzUGFyZW50KG5vZGU6IGFueSk6IG5vZGUgaXMgUGFyZW50IHtcclxuICAgIGlmIChub2RlID09IG51bGwpIHJldHVybiBmYWxzZTtcclxuICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gJ29iamVjdCcpIHJldHVybiBjaGlsZHJlbiBpbiBub2RlO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVmZXJlbmNlTm9kZShyb290OiBQYXJlbnQsIG5vZGU6IENvbXBvbmVudCkge1xyXG4gICAgY29uc3Qgc3RhY2s6IENvbXBvbmVudFtdID0gW3Jvb3RdO1xyXG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgY3VyciA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICAgIGlmIChjdXJyID09PSBub2RlKSB7XHJcbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGlzUGFyZW50KGN1cnIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IF9jaGlsZHJlbiA9IGN1cnJbY2hpbGRyZW5dO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gX2NoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKF9jaGlsZHJlbltpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGZvdW5kID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjdXJyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgRGlzcG9zYWJsZSB7XHJcbiAgICBkaXNwb3NlPygpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcG9zZU1hbnkoZGlzcG9zYWJsZXM6IG51bGwgfCBEaXNwb3NhYmxlIHwgRGlzcG9zYWJsZVtdKSB7XHJcbiAgICBpZiAoIWRpc3Bvc2FibGVzKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc3RhY2s6IERpc3Bvc2FibGVbXSA9IEFycmF5LmlzQXJyYXkoZGlzcG9zYWJsZXMpXHJcbiAgICAgICAgPyBkaXNwb3NhYmxlcy5zbGljZSgwKVxyXG4gICAgICAgIDogW2Rpc3Bvc2FibGVzXTtcclxuICAgIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBjdXJyOiBhbnkgPSBzdGFjay5wb3AoKTtcclxuICAgICAgICBpZiAoIWN1cnIpIGNvbnRpbnVlO1xyXG4gICAgICAgIGlmICh0eXBlb2YgY3Vyci5kaXNwb3NlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGN1cnIuZGlzcG9zZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgX2NoaWxkcmVuID0gY3VycltjaGlsZHJlbl07XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoX2NoaWxkcmVuKSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gX2NoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKF9jaGlsZHJlbltpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSVRlbXBsYXRlIH0gZnJvbSAnLi9kcml2ZXIuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEZyYWdtZW50KF9wcm9wczoge30sIGNoaWxkcmVuPzogYW55W10pOiBhbnlbXSB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gY2hpbGRyZW47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChcclxuICAgIF9wcm9wczoge30sXHJcbiAgICBjaGlsZHJlbj86IGFueVtdXHJcbik6IElUZW1wbGF0ZVtdIHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiBjaGlsZHJlbjtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gICAgQmluZGluZyxcclxuICAgIFByb3BzLFxyXG4gICAgSVRlbXBsYXRlLFxyXG4gICAgSURyaXZlcixcclxuICAgIFByaW1pdGl2ZSxcclxuICAgIGlzUHJpbWl0aXZlLFxyXG4gICAgZGlzcG9zZU1hbnksXHJcbn0gZnJvbSAnLi9kcml2ZXInO1xyXG5pbXBvcnQgeyBpc0RvbU5vZGUsIERvbURyaXZlciB9IGZyb20gJy4vZG9tJztcclxuaW1wb3J0IHsgaXNOZXh0T2JzZXJ2ZXIgfSBmcm9tICcuLi9saWIvdXRpbC9oZWxwZXJzJztcclxuaW1wb3J0IHsgU3Vic2NyaWJhYmxlLCBPYnNlcnZlciwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QgfSBmcm9tICcuL3V0aWwvY29tYmluZUxhdGVzdCc7XHJcblxyXG5kZWNsYXJlIHR5cGUgUHVyZUNvbXBvbmVudCA9ICguLi5hcmdzOiBhbnkpID0+IGFueTtcclxuZGVjbGFyZSB0eXBlIEZ1bmM8VD4gPSAoYXJnOiBUKSA9PiBhbnk7XHJcbmRlY2xhcmUgdHlwZSBBdHRhY2hhYmxlID0ge1xyXG4gICAgYXR0YWNoVG86IChkb206IEhUTUxFbGVtZW50KSA9PiB7IGRpc3Bvc2UoKTogYW55IH07XHJcbn07XHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgQ29tcG9uZW50ID0ge1xyXG4gICAgdmlldzogYW55O1xyXG4gICAgZGlzcG9zZT8oKTogdm9pZDtcclxufTtcclxuXHJcbnR5cGUgVGVtcGxhdGVFbGVtZW50ID1cclxuICAgIHwgUHJpbWl0aXZlXHJcbiAgICB8IFN1YnNjcmliYWJsZTxQcmltaXRpdmU+XHJcbiAgICB8IHN0cmluZ1xyXG4gICAgfCBQdXJlQ29tcG9uZW50XHJcbiAgICB8IElUZW1wbGF0ZVxyXG4gICAgfCB7IHZpZXc6IFRlbXBsYXRlRWxlbWVudCB9XHJcbiAgICB8IEhUTUxFbGVtZW50O1xyXG50eXBlIFRlbXBsYXRlSW5wdXQgPSBUZW1wbGF0ZUVsZW1lbnQgfCBUZW1wbGF0ZUVsZW1lbnRbXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0cGwoXHJcbiAgICBuYW1lOiBUZW1wbGF0ZUlucHV0LFxyXG4gICAgcHJvcHM6IFByb3BzIHwgbnVsbCA9IG51bGwsXHJcbiAgICAuLi5jaGlsZHJlbjogYW55W11cclxuKTogSVRlbXBsYXRlIHwgSVRlbXBsYXRlW10ge1xyXG4gICAgaWYgKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGNvbnN0IGZsYXRDaGlsZHJlbiA9IGZsYXRUcmVlKGNoaWxkcmVuLCAoZSkgPT4gZSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUYWdUZW1wbGF0ZShcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgcHJvcHNcclxuICAgICAgICAgICAgICAgID8gKGF0dHJpYnV0ZXMocHJvcHMpIGFzIElUZW1wbGF0ZVtdKS5jb25jYXQoZmxhdENoaWxkcmVuKVxyXG4gICAgICAgICAgICAgICAgOiBmbGF0Q2hpbGRyZW5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3QobmFtZSwgW3Byb3BzLCBjaGlsZHJlbl0pIHx8IG5hbWUocHJvcHMsIGNoaWxkcmVuKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXNUZW1wbGF0ZShuYW1lKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxhenk8VD4oZm46ICgpID0+IFQgfCBTdWJzY3JpYmFibGU8VD4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc3Vic2NyaWJlKG9ic2VydmVyOiBPYnNlcnZlcjxUPikge1xyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBmbigpO1xyXG4gICAgICAgICAgICBpZiAoaXNTdWJzY3JpYmFibGUodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUuc3Vic2NyaWJlKG9ic2VydmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KHZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29uc3RydWN0KGZ1bmM6IEZ1bmN0aW9uLCBhcmdzOiBhbnlbXSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZiAoIWZ1bmMpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAoZnVuYyA9PT0gU3ltYm9sKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuY29uc3RydWN0KGZ1bmMsIGFyZ3MpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZsYXRUcmVlPFQgPSBhbnk+KFxyXG4gICAgdHJlZTogYW55W10sXHJcbiAgICBwcm9qZWN0OiAoaXRlbTogYW55KSA9PiBUIHwgVFtdXHJcbikge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRyZWUpKSByZXR1cm4gW107XHJcblxyXG4gICAgdmFyIHJldHZhbDogVFtdID0gW107XHJcbiAgICB2YXIgc3RhY2sgPSBbXTtcclxuICAgIC8vIGNvcHkgdHJlZSB0byBzdGFjayByZXZlcnNlIG9yZGVyXHJcbiAgICBmb3IgKGxldCBpID0gdHJlZS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgIHN0YWNrLnB1c2godHJlZVtpXSk7XHJcbiAgICB9XHJcblxyXG4gICAgd2hpbGUgKHN0YWNrLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB2YXIgY3VyciA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGN1cnIpKSB7XHJcbiAgICAgICAgICAgIHN0YWNrLnB1c2guYXBwbHkoc3RhY2ssIHJldmVyc2UoY3VycikpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY3VyciAhPT0gbnVsbCAmJiBjdXJyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdGVkID0gcHJvamVjdChjdXJyKTtcclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvamVjdGVkKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dmFsLnB1c2guYXBwbHkocmV0dmFsLCBwcm9qZWN0ZWQpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb2plY3RlZCAhPT0gdW5kZWZpbmVkICYmIHByb2plY3RlZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dmFsLnB1c2gocHJvamVjdGVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXR2YWw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhc1Byb3BlcnR5PFAgZXh0ZW5kcyBzdHJpbmc+KFxyXG4gICAgb2JqOiBhbnksXHJcbiAgICBwcm9wOiBQXHJcbik6IG9iaiBpcyB7IFtLIGluIFBdOiBhbnkgfSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqICE9PSBudWxsICYmIHByb3AgaW4gb2JqO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0cGw7XHJcblxyXG5leHBvcnQgY2xhc3MgRnJhZ21lbnRUZW1wbGF0ZSBpbXBsZW1lbnRzIElUZW1wbGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY2hpbGRyZW4/OiBJVGVtcGxhdGVbXSkge31cclxuXHJcbiAgICByZW5kZXIoZHJpdmVyOiBJRHJpdmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZHJpdmVyKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRyaXZlcjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGlzcG9zZSgpIHt9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFbXB0eVRlbXBsYXRlIGltcGxlbWVudHMgSVRlbXBsYXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgICByZW5kZXIoZHJpdmVyOiBJRHJpdmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZHJpdmVyKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRyaXZlcjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGlzcG9zZSgpIHt9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFRlbXBsYXRlQXR0YWNoYWJsZSBpbXBsZW1lbnRzIElUZW1wbGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF0dGFjaGFibGU6IEF0dGFjaGFibGUpIHt9XHJcblxyXG4gICAgcmVuZGVyKGRyaXZlcjogRG9tRHJpdmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0YWNoYWJsZS5hdHRhY2hUbyhkcml2ZXIudGFyZ2V0KTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgVGVtcGxhdGVDb21wb25lbnQgaW1wbGVtZW50cyBJVGVtcGxhdGUge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21wb25lbnQ6IENvbXBvbmVudCkge31cclxuXHJcbiAgICByZW5kZXIoZHJpdmVyOiBEb21Ecml2ZXIpIHtcclxuICAgICAgICBjb25zdCB7IGNvbXBvbmVudCB9ID0gdGhpcztcclxuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGFzVGVtcGxhdGUoY29tcG9uZW50LnZpZXcpO1xyXG4gICAgICAgIGNvbnN0IGJpbmRpbmdzID0gcmVuZGVyKGRyaXZlciwgdGVtcGxhdGUpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkaXNwb3NlKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnQuZGlzcG9zZSA9PT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgZGlzcG9zZU1hbnkoYmluZGluZ3MpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgVGVtcGxhdGVTdWJzY3JpcHRpb24gaW1wbGVtZW50cyBJVGVtcGxhdGUge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbikge31cclxuXHJcbiAgICBkaXNwb3NlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlT2JzZXJ2YWJsZTxUPiBpbXBsZW1lbnRzIElUZW1wbGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgb2JzZXJ2YWJsZTogU3Vic2NyaWJhYmxlPFQ+KSB7fVxyXG5cclxuICAgIHJlbmRlcihkcml2ZXI6IElEcml2ZXIpOiBCaW5kaW5nIHtcclxuICAgICAgICBjb25zdCB7IG9ic2VydmFibGUgfSA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGJpbmRpbmdzOiBudWxsIHwgQmluZGluZ1tdID0gbnVsbDtcclxuICAgICAgICBjb25zdCBzY29wZSA9IGRyaXZlci5jcmVhdGVTY29wZSgpO1xyXG4gICAgICAgIGNvbnN0IHN1YnNjciA9IG9ic2VydmFibGUuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYmluZGluZ3MgJiYgYmluZGluZ3MubGVuZ3RoID09PSAxICYmIGlzUHJpbWl0aXZlKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmluZGluZyA9IGJpbmRpbmdzWzBdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzTmV4dE9ic2VydmVyKGJpbmRpbmcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmluZGluZy5uZXh0KHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGlzcG9zZU1hbnkoYmluZGluZ3MpO1xyXG4gICAgICAgICAgICBiaW5kaW5ncyA9IHJlbmRlcihzY29wZSwgYXNUZW1wbGF0ZSh2YWx1ZSkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkaXNwb3NlKCkge1xyXG4gICAgICAgICAgICAgICAgc3Vic2NyLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgICAgICBzY29wZS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICBkaXNwb3NlTWFueShiaW5kaW5ncyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgVGVtcGxhdGVQcm9taXNlPFQgZXh0ZW5kcyBUZW1wbGF0ZUlucHV0PiBpbXBsZW1lbnRzIElUZW1wbGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcHJvbWlzZTogUHJvbWlzZTxUPikge31cclxuXHJcbiAgICB0aGVuPFU+KGZuOiAodmFsdWU6IFQpID0+IFUgfCBQcm9taXNlTGlrZTxVPik6IFByb21pc2U8VT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb21pc2UudGhlbihmbik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKGRyaXZlcjogSURyaXZlcik6IEJpbmRpbmcge1xyXG4gICAgICAgIHZhciBzY29wZSA9IGRyaXZlci5jcmVhdGVTY29wZSgpO1xyXG4gICAgICAgIHZhciBkaXNwb3NlZCA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBsb2FkZWQgPSBmYWxzZTtcclxuICAgICAgICB2YXIgbG9hZGluZ0JpbmRpbmc6IEJpbmRpbmdbXSB8IEJpbmRpbmcgfCBudWxsID0gbnVsbDtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5wcm9taXNlO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGxvYWRlZCB8fCBkaXNwb3NlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgbG9hZGluZ0JpbmRpbmcgPSByZW5kZXIoXHJcbiAgICAgICAgICAgICAgICBzY29wZSxcclxuICAgICAgICAgICAgICAgIHRwbCgnZGl2JywgeyBjbGFzczogJ2xvYWRpbmctcGxhY2Vob2xkZXInIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHByb21pc2UudGhlbigoXykgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcG9zZU1hbnkobG9hZGluZ0JpbmRpbmcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCAyMDApO1xyXG5cclxuICAgICAgICBjb25zdCBiaW5kaW5nUHJvbWlzZSA9IHByb21pc2UudGhlbigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBsb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGFzVGVtcGxhdGUoaXRlbSk7XHJcbiAgICAgICAgICAgIHJldHVybiBkaXNwb3NlZCA/IG51bGwgOiByZW5kZXIoc2NvcGUsIHRlbXBsYXRlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkcml2ZXIoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwb3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBzY29wZS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICBiaW5kaW5nUHJvbWlzZS50aGVuKGRpc3Bvc2VNYW55KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXR0cmlidXRlcyhwcm9wczogUHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgcHJvcHMgJiYgT2JqZWN0LmtleXMocHJvcHMpLm1hcCgoa2V5KSA9PiBuZXcgQXR0cmlidXRlKGtleSwgcHJvcHNba2V5XSkpXHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBfX2VtcHR5VGVtcGxhdGU6IElUZW1wbGF0ZSA9IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkaXNwb3NlKCkge30sXHJcbiAgICAgICAgfSBhcyBCaW5kaW5nO1xyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhc1RlbXBsYXRlKG5hbWU6IGFueSk6IElUZW1wbGF0ZSB8IElUZW1wbGF0ZVtdIHtcclxuICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3VuZGVmaW5lZCcgfHwgbmFtZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBfX2VtcHR5VGVtcGxhdGU7XHJcbiAgICB9IGVsc2UgaWYgKGlzVGVtcGxhdGUobmFtZSkpIHJldHVybiBuYW1lO1xyXG4gICAgZWxzZSBpZiAoaXNDb21wb25lbnQobmFtZSkpIHJldHVybiBuZXcgVGVtcGxhdGVDb21wb25lbnQobmFtZSk7XHJcbiAgICBlbHNlIGlmIChpc0F0dGFjaGFibGUobmFtZSkpIHJldHVybiBuZXcgVGVtcGxhdGVBdHRhY2hhYmxlKG5hbWUpO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIG5hbWUgPT09ICdmdW5jdGlvbicpIHJldHVybiBuYW1lO1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShuYW1lKSkgcmV0dXJuIGZsYXRUcmVlKG5hbWUsIGFzVGVtcGxhdGUpO1xyXG4gICAgZWxzZSBpZiAoaXNQcm9taXNlPFRlbXBsYXRlSW5wdXQ+KG5hbWUpKSByZXR1cm4gbmV3IFRlbXBsYXRlUHJvbWlzZShuYW1lKTtcclxuICAgIGVsc2UgaWYgKGlzU3Vic2NyaWJhYmxlKG5hbWUpKSByZXR1cm4gbmV3IFRlbXBsYXRlT2JzZXJ2YWJsZShuYW1lKTtcclxuICAgIGVsc2UgaWYgKGlzU3Vic2NyaXB0aW9uKG5hbWUpKSByZXR1cm4gbmV3IFRlbXBsYXRlU3Vic2NyaXB0aW9uKG5hbWUpO1xyXG4gICAgZWxzZSBpZiAoaGFzUHJvcGVydHkobmFtZSwgJ3ZpZXcnKSkgcmV0dXJuIGFzVGVtcGxhdGUobmFtZS52aWV3KTtcclxuXHJcbiAgICByZXR1cm4gbmV3IE5hdGl2ZVRlbXBsYXRlKG5hbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0NvbXBvbmVudCh2YWx1ZTogYW55KTogdmFsdWUgaXMgQ29tcG9uZW50IHtcclxuICAgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUudmlldyA9PT0gJ2Z1bmN0aW9uJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNBdHRhY2hhYmxlKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBBdHRhY2hhYmxlIHtcclxuICAgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUuYXR0YWNoVG8gPT09ICdmdW5jdGlvbic7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzU3Vic2NyaWJhYmxlKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBTdWJzY3JpYmFibGU8dW5rbm93bj4ge1xyXG4gICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZS5zdWJzY3JpYmUgPT09ICdmdW5jdGlvbic7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzU3Vic2NyaXB0aW9uKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBTdWJzY3JpcHRpb24ge1xyXG4gICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZS51bnN1YnNjcmliZSA9PT0gJ2Z1bmN0aW9uJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNQcm9taXNlPFQgPSB1bmtub3duPih2YWx1ZTogYW55KTogdmFsdWUgaXMgUHJvbWlzZTxUPiB7XHJcbiAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbic7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzVGVtcGxhdGUodmFsdWU6IGFueSk6IHZhbHVlIGlzIElUZW1wbGF0ZSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlWydyZW5kZXInXSA9PT0gJ2Z1bmN0aW9uJztcclxufVxyXG5cclxuZnVuY3Rpb24gZnVuY3Rpb25Bc1RlbXBsYXRlKGZ1bmM6IEZ1bmN0aW9uKTogSVRlbXBsYXRlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVuZGVyKGRyaXZlcjogSURyaXZlciwgLi4uYXJncykge1xyXG4gICAgICAgICAgICBjb25zdCB0cGwgPSBmdW5jKC4uLmFyZ3MpO1xyXG4gICAgICAgICAgICB2YXIgdGVtcGxhdGUgPSBhc1RlbXBsYXRlKHRwbCk7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRlbXBsYXRlKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmluZGluZ3M6IEJpbmRpbmdbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZW1wbGF0ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGIgPSB0ZW1wbGF0ZVtpXS5yZW5kZXIoZHJpdmVyKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiaW5kaW5ncy5wdXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwb3NlKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJpbmRpbmdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiaW5kaW5nID0gYmluZGluZ3NbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmluZGluZy5kaXNwb3NlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmluZGluZy5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZS5yZW5kZXIoZHJpdmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XHJcblxyXG5jbGFzcyBUYWdUZW1wbGF0ZSBpbXBsZW1lbnRzIElUZW1wbGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgY2hpbGRyZW46IElUZW1wbGF0ZVtdKSB7fVxyXG5cclxuICAgIHJlbmRlcihkcml2ZXI6IElEcml2ZXIsIGluaXQ/OiBGdW5jPGFueT4pIHtcclxuICAgICAgICBsZXQgeyBuYW1lIH0gPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBkcml2ZXIuY3JlYXRlRWxlbWVudChuYW1lLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgTmF0aXZlVGVtcGxhdGUgaW1wbGVtZW50cyBJVGVtcGxhdGUge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHZhbHVlOiBQcmltaXRpdmUgfCBTdWJzY3JpYmFibGU8UHJpbWl0aXZlPiB8IEhUTUxFbGVtZW50XHJcbiAgICApIHt9XHJcblxyXG4gICAgcmVuZGVyKGRyaXZlcjogSURyaXZlcik6IEJpbmRpbmcge1xyXG4gICAgICAgIGxldCB7IHZhbHVlIH0gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoaXNQcmltaXRpdmUodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkcml2ZXIuY3JlYXRlTmF0aXZlKHZhbHVlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGlzU3Vic2NyaWJhYmxlKHZhbHVlKSkge1xyXG4gICAgICAgICAgICBsZXQgZXhwciA9IHZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgdGV4dEVsZW1lbnQgPSBkcml2ZXIuY3JlYXRlTmF0aXZlKG51bGwpO1xyXG4gICAgICAgICAgICBleHByLnN1YnNjcmliZSh0ZXh0RWxlbWVudCBhcyBhbnkpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGV4dEVsZW1lbnQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRyaXZlci5jcmVhdGVOYXRpdmUodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxudHlwZSBBdHRyaWJ1dGVWYWx1ZSA9IFByaW1pdGl2ZSB8IFN1YnNjcmliYWJsZTxQcmltaXRpdmU+O1xyXG5cclxuY2xhc3MgQXR0cmlidXRlIGltcGxlbWVudHMgSVRlbXBsYXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIHZhbHVlOlxyXG4gICAgICAgICAgICB8IChBdHRyaWJ1dGVWYWx1ZSB8IEF0dHJpYnV0ZVZhbHVlW10pXHJcbiAgICAgICAgICAgIHwgKCgpID0+IEF0dHJpYnV0ZVZhbHVlIHwgQXR0cmlidXRlVmFsdWVbXSlcclxuICAgICkge31cclxuXHJcbiAgICByZW5kZXIoZHJpdmVyOiBJRHJpdmVyKTogQmluZGluZyB8IG51bGwge1xyXG4gICAgICAgIGxldCB7IG5hbWUsIHZhbHVlIH0gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHZvaWQgMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgY29uc3QgZXZlbnRCaW5kaW5nID0gZHJpdmVyLmNyZWF0ZUV2ZW50KG5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKGV2ZW50QmluZGluZykgcmV0dXJuIGV2ZW50QmluZGluZztcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ25vdCBhIHZhbGlkIGV2ZW50ICcgKyBuYW1lKTtcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJpbmRpbmcgPSBkcml2ZXIuY3JlYXRlQXR0cmlidXRlKG5hbWUsIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1YnNjciA9IGNvbWJpbmVMYXRlc3QodmFsdWUpLnN1YnNjcmliZShiaW5kaW5nKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwb3NlKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YnNjci51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJpbmRpbmcuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2UgaWYgKGlzU3Vic2NyaWJhYmxlKHZhbHVlKSkge1xyXG4gICAgICAgICAgICBjb25zdCBleHByID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGJpbmRpbmcgPSBkcml2ZXIuY3JlYXRlQXR0cmlidXRlKG5hbWUsIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1YnNjciA9IGV4cHIuc3Vic2NyaWJlKGJpbmRpbmcpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcG9zZSgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWJzY3IudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBiaW5kaW5nLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIHJldHVybiBkcml2ZXIuY3JlYXRlQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihcclxuICAgIHRhcmdldDogSURyaXZlciB8IEhUTUxFbGVtZW50LFxyXG4gICAgdGVtcGxhdGU6IElUZW1wbGF0ZSB8IElUZW1wbGF0ZVtdXHJcbik6IEJpbmRpbmdbXSB7XHJcbiAgICBjb25zdCBkcml2ZXI6IElEcml2ZXIgPSBpc0RvbU5vZGUodGFyZ2V0KSA/IG5ldyBEb21Ecml2ZXIodGFyZ2V0KSA6IHRhcmdldDtcclxuICAgIHJldHVybiByZW5kZXJTdGFjayhbeyBkcml2ZXIsIHRlbXBsYXRlIH1dKTtcclxufVxyXG5cclxudHlwZSBTdGFja0l0ZW0gPSB7XHJcbiAgICBkcml2ZXI6IElEcml2ZXI7XHJcbiAgICB0ZW1wbGF0ZTogSVRlbXBsYXRlIHwgSVRlbXBsYXRlW10gfCAoKCkgPT4gYW55KTtcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclN0YWNrKHJvb3RzOiBTdGFja0l0ZW1bXSkge1xyXG4gICAgY29uc3QgYmluZGluZ3M6IEJpbmRpbmdbXSA9IFtdO1xyXG4gICAgY29uc3Qgc3RhY2sgPSByb290cy5zbGljZSgwKTtcclxuXHJcbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgY3VyciA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICAgIGlmICghY3Vycikge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgeyBkcml2ZXIsIHRlbXBsYXRlIH0gPSBjdXJyO1xyXG4gICAgICAgIGlmICh0ZW1wbGF0ZSA9PT0gbnVsbCB8fCB0ZW1wbGF0ZSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGVtcGxhdGUpKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB0ZW1wbGF0ZS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaCh7IGRyaXZlciwgdGVtcGxhdGU6IHRlbXBsYXRlW2ldIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRlbXBsYXRlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHN0YWNrLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZHJpdmVyLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IGFzVGVtcGxhdGUodGVtcGxhdGUubmFtZSB8fCAnWyBGdW5jdGlvbiBdJyksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKCFpc1RlbXBsYXRlKHRlbXBsYXRlKSkge1xyXG4gICAgICAgICAgICBzdGFjay5wdXNoKHsgZHJpdmVyLCB0ZW1wbGF0ZTogYXNUZW1wbGF0ZSh0ZW1wbGF0ZSkgfSk7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYmluZGluZyA9IHRlbXBsYXRlLnJlbmRlcihkcml2ZXIpO1xyXG4gICAgICAgIGlmIChiaW5kaW5nKSB7XHJcbiAgICAgICAgICAgIGJpbmRpbmdzLnB1c2goYmluZGluZyk7XHJcbiAgICAgICAgICAgIGlmIChiaW5kaW5nLmRyaXZlcikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGVtcGxhdGU7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGREcml2ZXIgPSBiaW5kaW5nLmRyaXZlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZERyaXZlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyaXZlcjogY2hpbGREcml2ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IGFzVGVtcGxhdGUoY2hpbGRyZW5baV0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBiaW5kaW5ncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGJpbmRpbmcgPSBiaW5kaW5nc1tpXTtcclxuICAgICAgICBpZiAoaXNJbml0aWFsaXphYmxlKGJpbmRpbmcpKSBiaW5kaW5nLnJlYWR5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGJpbmRpbmdzO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSW5pdGlhbGl6YWJsZSB7XHJcbiAgICByZWFkeSgpOiB2b2lkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0luaXRpYWxpemFibGUob2JqOiBhbnkpOiBvYmogaXMgSW5pdGlhbGl6YWJsZSB7XHJcbiAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBvYmpbJ3JlYWR5J10gPT09ICdmdW5jdGlvbic7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJNYW55KGRyaXZlcjogSURyaXZlciwgY2hpbGRyZW46IElUZW1wbGF0ZVtdKTogQmluZGluZ1tdIHtcclxuICAgIGNvbnN0IHN0YWNrID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IGNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBjaGlsZHJlbltpXTtcclxuICAgICAgICBzdGFjay5wdXNoKHtcclxuICAgICAgICAgICAgZHJpdmVyLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVuZGVyU3RhY2soc3RhY2spO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXZlcnNlPFQ+KGFycjogVFtdKTogVFtdIHtcclxuICAgIGNvbnN0IHJlc3VsdDogVFtdID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKGFycltpXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG4iLCJpbXBvcnQgeyBTdWJzY3JpYmFibGUsIFBhcnRpYWxPYnNlcnZlciwgVW5zdWJzY3JpYmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbnR5cGUgQWN0aW9uPFQ+ID0gKHZhbHVlOiBUKSA9PiB2b2lkO1xyXG50eXBlIEV4cHJlc3Npb25UeXBlPFQ+ID0gVCBleHRlbmRzIFN1YnNjcmliYWJsZTxpbmZlciBVPiA/IFUgOiBUO1xyXG5leHBvcnQgdHlwZSBVbnBhY2tTdWJzY3JpYmFibGVzPFQ+ID0ge1xyXG4gIFtLIGluIGtleW9mIFRdOlxyXG4gICAgfCBFeGNsdWRlPFRbS10sIFN1YnNjcmliYWJsZTxhbnk+PlxyXG4gICAgfCBFeHByZXNzaW9uVHlwZTxFeHRyYWN0PFRbS10sIFN1YnNjcmliYWJsZTxhbnk+Pj47XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdDxUIGV4dGVuZHMgYW55W10+KGV4cHJlc3Npb25zOiBUKSB7XHJcbiAgdHlwZSBVID0gVW5wYWNrU3Vic2NyaWJhYmxlczxUPjtcclxuICByZXR1cm4ge1xyXG4gICAgc3Vic2NyaWJlKG9ic2VydmVyOiBQYXJ0aWFsT2JzZXJ2ZXI8VT4gfCBBY3Rpb248VT4pIHtcclxuICAgICAgY29uc3Qgc3RhdGUgPSBuZXcgQXJyYXkoZXhwcmVzc2lvbnMubGVuZ3RoKSBhcyBVO1xyXG4gICAgICBjb25zdCBzdWJzY3JpcHRpb25zOiBVbnN1YnNjcmliYWJsZVtdID0gW107XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4cHJlc3Npb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgZXhwciA9IGV4cHJlc3Npb25zW2ldO1xyXG4gICAgICAgIGlmIChpc1N1YnNjcmliYWJsZShleHByKSkge1xyXG4gICAgICAgICAgY29uc3Qgc3Vic2NyID0gZXhwci5zdWJzY3JpYmUodiA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZVtpXSAhPT0gdikge1xyXG4gICAgICAgICAgICAgIHN0YXRlW2ldID0gdjtcclxuICAgICAgICAgICAgICBlbWl0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgc3Vic2NyaXB0aW9ucy5wdXNoKHN1YnNjcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YXRlW2ldID0gZXhwcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZW1pdCgpO1xyXG5cclxuICAgICAgZnVuY3Rpb24gZW1pdCgpIHtcclxuICAgICAgICBpZiAodHlwZW9mIG9ic2VydmVyID09PSAnZnVuY3Rpb24nKSBvYnNlcnZlcihzdGF0ZSk7XHJcbiAgICAgICAgZWxzZSBpZiAob2JzZXJ2ZXIubmV4dCkgb2JzZXJ2ZXIubmV4dChzdGF0ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdW5zdWJzY3JpYmUoKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNjcmlwdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uc1tpXS51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N1YnNjcmliYWJsZShvOiBhbnkpOiBvIGlzIFN1YnNjcmliYWJsZTx1bmtub3duPiB7XHJcbiAgaWYgKG8gPT09IG51bGwgfHwgdHlwZW9mIG8gIT09ICdvYmplY3QnKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gIGlmICh0eXBlb2Ygby5zdWJzY3JpYmUgIT09ICdmdW5jdGlvbicpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgUnggZnJvbSAncnhqcyc7XHJcblxyXG5pbnRlcmZhY2UgVXBkYXRhYmxlIHtcclxuICB1cGRhdGUodmFsdWU6IGFueSk6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1VwZGF0YWJsZShiaW5kaW5nOiBhbnkpOiBiaW5kaW5nIGlzIFVwZGF0YWJsZSB7XHJcbiAgaWYgKGJpbmRpbmcgPT09IG51bGwpIHJldHVybiBmYWxzZTtcclxuICBpZiAodHlwZW9mIGJpbmRpbmcgIT09ICdvYmplY3QnKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gIHJldHVybiB0eXBlb2YgYmluZGluZy51cGRhdGUgPT09ICdmdW5jdGlvbic7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc05leHRPYnNlcnZlcihiaW5kaW5nOiBhbnkpOiBiaW5kaW5nIGlzIFJ4Lk5leHRPYnNlcnZlcjxhbnk+IHtcclxuICBpZiAoYmluZGluZyA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xyXG4gIGlmICh0eXBlb2YgYmluZGluZyAhPT0gJ29iamVjdCcpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgcmV0dXJuIHR5cGVvZiBiaW5kaW5nLm5leHQgPT09ICdmdW5jdGlvbic7XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi9saWIvc3RvcmUnO1xyXG5leHBvcnQgKiBmcm9tICcuL2xpYi9vYnNlcnZhYmxlJztcclxuZXhwb3J0ICogZnJvbSAnLi9saWIvbGlzdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbGliL2xpc3QvbGlzdC1tdXRhdGlvbic7XHJcbiIsImltcG9ydCAqIGFzIFJ4IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgKiBhcyBSbyBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEV4cHJlc3Npb24sIFVwZGF0YWJsZSB9IGZyb20gJy4uL29ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBkaWdlc3QsIGZsdXNoLCBWYWx1ZSB9IGZyb20gJy4uL3N0b3JlJztcclxuaW1wb3J0IHsgTGlzdE11dGF0aW9uLCBpc011dGF0aW9uLCBwdXNoSXRlbSB9IGZyb20gJy4vbGlzdC1tdXRhdGlvbic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExpc3RTdG9yZTxUPiBleHRlbmRzIFJ4LlN1YnNjcmliYWJsZTxMaXN0TXV0YXRpb248VD4+IHtcclxuICBhZGQobTogTGlzdE11dGF0aW9uPFQ+KTogdm9pZDtcclxuICByZWFkb25seSBsZW5ndGg6IG51bWJlcjtcclxuICBwZWVrPFI+KGZ1bjogKHNuYXBzaG90OiBUW10pID0+IFIpOiBSO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXNMaXN0U3RvcmU8VD4oc291cmNlOiBUW10pOiBMaXN0U3RvcmU8VD47XHJcbmV4cG9ydCBmdW5jdGlvbiBhc0xpc3RTdG9yZTxUPihcclxuICBzb3VyY2U6IEV4cHJlc3Npb248VFtdPiAmIFVwZGF0YWJsZTxUW10+XHJcbik6IExpc3RTdG9yZTxUPjtcclxuZXhwb3J0IGZ1bmN0aW9uIGFzTGlzdFN0b3JlPFQ+KFxyXG4gIHNvdXJjZTogVFtdIHwgKEV4cHJlc3Npb248VFtdPiAmIFVwZGF0YWJsZTxUW10+KVxyXG4pOiBMaXN0U3RvcmU8VD4ge1xyXG4gIGlmIChBcnJheS5pc0FycmF5KHNvdXJjZSkpIHJldHVybiBmcm9tQXJyYXkoc291cmNlKTtcclxuXHJcbiAgcmV0dXJuIGZyb21CaW5kYWJsZTxUPihzb3VyY2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmcm9tQmluZGFibGU8VD4oXHJcbiAgYmluZGFibGU6IEV4cHJlc3Npb248VFtdPiAmIFVwZGF0YWJsZTxUW10+XHJcbik6IExpc3RTdG9yZTxUPiB7XHJcbiAgdmFyIHNuYXBzaG90OiBUW10gPSBiaW5kYWJsZS5wZWVrKChlKSA9PiBlKSB8fCBbXTtcclxuICB2YXIgbGlzdEl0ZW1zOiBMaXN0SXRlbTxUPltdID0gc25hcHNob3QubWFwKGNyZWF0ZUl0ZW0pO1xyXG4gIGNvbnN0IG11dGF0aW9ucyA9IG5ldyBSeC5TdWJqZWN0PExpc3RNdXRhdGlvbjxMaXN0SXRlbTxUPj4+KCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwZWVrKGZuKSB7XHJcbiAgICAgIHJldHVybiBmbihzbmFwc2hvdCk7XHJcbiAgICB9LFxyXG4gICAgZ2V0IGxlbmd0aCgpIHtcclxuICAgICAgcmV0dXJuIGxpc3RJdGVtcy5sZW5ndGg7XHJcbiAgICB9LFxyXG4gICAgYWRkKG06IExpc3RNdXRhdGlvbjxUPikge1xyXG4gICAgICBhcHBseU11dGF0aW9uKG0pO1xyXG4gICAgfSxcclxuICAgIHN1YnNjcmliZSguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBtdXRhdGlvbnMucGlwZShSby5zdGFydFdpdGgocmVzZXRJdGVtcyhsaXN0SXRlbXMpKSk7XHJcbiAgICAgIHJldHVybiByZXN1bHQuc3Vic2NyaWJlLmFwcGx5KHJlc3VsdCwgYXJncyBhcyBhbnkpO1xyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBmbHVzaENoYW5nZXMoKSB7XHJcbiAgICBiaW5kYWJsZS51cGRhdGUoc25hcHNob3QpO1xyXG4gICAgY29uc3QgZGlydHkgPSBbXTtcclxuICAgIGxldCBwYXJlbnQ6IGFueSA9IGJpbmRhYmxlO1xyXG4gICAgd2hpbGUgKHBhcmVudCkge1xyXG4gICAgICBkaXJ0eS5wdXNoKHBhcmVudCk7XHJcbiAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XHJcbiAgICB9XHJcbiAgICBmbHVzaChkaXJ0eSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVJdGVtKHYsIGkpIHtcclxuICAgIGNvbnN0IGl0ZW0gPSBuZXcgTGlzdEl0ZW08VD4oc25hcHNob3QsIGksIHYpO1xyXG4gICAgaXRlbS5zdWJzY3JpYmUoZmx1c2hDaGFuZ2VzKTtcclxuICAgIHJldHVybiBpdGVtO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVzZXRJdGVtcyhpdGVtczogTGlzdEl0ZW08VD5bXSk6IExpc3RNdXRhdGlvbjxMaXN0SXRlbTxUPj4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogJ3Jlc2V0JyxcclxuICAgICAgaXRlbXMsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYXBwbHlNdXRhdGlvbihtdXQ6IExpc3RNdXRhdGlvbjxUPikge1xyXG4gICAgaWYgKG11dC50eXBlID09PSAnaW5zZXJ0Jykge1xyXG4gICAgICBjb25zdCB7IGluZGV4LCB2YWx1ZXMgfSA9IG11dDtcclxuICAgICAgY29uc3QgaXRlbSA9IGNyZWF0ZUl0ZW0odmFsdWVzLCBpbmRleCk7XHJcbiAgICAgIGxpc3RJdGVtcy5zcGxpY2UoaW5kZXgsIDAsIGl0ZW0pO1xyXG4gICAgICBzbmFwc2hvdC5zcGxpY2UoaW5kZXgsIDAsIHZhbHVlcyk7XHJcbiAgICAgIG11dGF0aW9ucy5uZXh0KHB1c2hJdGVtKGl0ZW0pKTtcclxuICAgIH0gZWxzZSBpZiAobXV0LnR5cGUgPT09ICdwdXNoJykge1xyXG4gICAgICBjb25zdCB7IHZhbHVlcyB9ID0gbXV0O1xyXG4gICAgICBjb25zdCBpbmRleCA9IGxpc3RJdGVtcy5sZW5ndGg7XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBjcmVhdGVJdGVtKHZhbHVlcywgaW5kZXgpO1xyXG4gICAgICBsaXN0SXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgc25hcHNob3QucHVzaCh2YWx1ZXMpO1xyXG4gICAgICBtdXRhdGlvbnMubmV4dChwdXNoSXRlbShpdGVtKSk7XHJcbiAgICB9IGVsc2UgaWYgKG11dC50eXBlID09PSAncmVtb3ZlJykge1xyXG4gICAgICBjb25zdCBpbmRleCA9XHJcbiAgICAgICAgdHlwZW9mIG11dC5wcmVkaWNhdGUgPT09ICdudW1iZXInXHJcbiAgICAgICAgICA/IG11dC5wcmVkaWNhdGVcclxuICAgICAgICAgIDogbGlzdEl0ZW1zLmZpbmRJbmRleChtdXQucHJlZGljYXRlKTtcclxuICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICBsaXN0SXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICBzbmFwc2hvdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBpbmRleDsgaSA8IGxpc3RJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgbGlzdEl0ZW1zW2ldLmluZGV4ID0gaTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZmx1c2hDaGFuZ2VzKCk7XHJcbiAgICAgIG11dGF0aW9ucy5uZXh0KHsgdHlwZTogJ3JlbW92ZScsIHByZWRpY2F0ZTogaW5kZXggfSk7XHJcbiAgICB9IGVsc2UgaWYgKG11dC50eXBlID09PSAnbW92ZScpIHtcclxuICAgICAgY29uc3QgeyBmcm9tLCB0byB9ID0gbXV0O1xyXG4gICAgICBzd2FwSXRlbXMobGlzdEl0ZW1zLCBmcm9tLCB0byk7XHJcbiAgICAgIHN3YXBJdGVtcyhzbmFwc2hvdCwgZnJvbSwgdG8pO1xyXG4gICAgICBtdXRhdGlvbnMubmV4dChtdXQpO1xyXG4gICAgfSBlbHNlIGlmIChtdXQudHlwZSA9PSAndXBkYXRlJykge1xyXG4gICAgICBjb25zdCB7IGluZGV4IH0gPSBtdXQ7XHJcbiAgICAgIGNvbnN0IGxpc3RJdGVtID0gbGlzdEl0ZW1zW2luZGV4XTtcclxuICAgICAgbGlzdEl0ZW0udXBkYXRlKG11dC5jYWxsYmFjayk7XHJcbiAgICAgIGNvbnN0IGRpcnR5ID0gZGlnZXN0KGxpc3RJdGVtKTtcclxuICAgICAgZmx1c2goZGlydHkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZnJvbUFycmF5PFQ+KHNuYXBzaG90OiBUW10pOiBMaXN0U3RvcmU8VD4ge1xyXG4gIGNvbnN0IG11dGF0aW9ucyA9IG5ldyBSeC5TdWJqZWN0PExpc3RNdXRhdGlvbjxUPj4oKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBlZWsoZm4pIHtcclxuICAgICAgcmV0dXJuIGZuKHNuYXBzaG90KTtcclxuICAgIH0sXHJcbiAgICBnZXQgbGVuZ3RoKCkge1xyXG4gICAgICByZXR1cm4gc25hcHNob3QubGVuZ3RoO1xyXG4gICAgfSxcclxuICAgIGFkZCh2YWx1ZXM6IFQgfCBMaXN0TXV0YXRpb248VD4pIHtcclxuICAgICAgaWYgKGlzTXV0YXRpb24odmFsdWVzKSkge1xyXG4gICAgICAgIGFwcGx5TXV0YXRpb24odmFsdWVzKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhcHBseU11dGF0aW9uKHtcclxuICAgICAgICAgIHR5cGU6ICdwdXNoJyxcclxuICAgICAgICAgIHZhbHVlcyxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHN1YnNjcmliZSguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBtdXRhdGlvbnMucGlwZShSby5zdGFydFdpdGgocmVzZXRJdGVtcyhzbmFwc2hvdCkpKTtcclxuICAgICAgcmV0dXJuIHJlc3VsdC5zdWJzY3JpYmUuYXBwbHkocmVzdWx0LCBhcmdzIGFzIGFueSk7XHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGFwcGx5TXV0YXRpb24obXV0OiBMaXN0TXV0YXRpb248VD4pIHtcclxuICAgIGlmIChtdXQudHlwZSA9PT0gJ2luc2VydCcpIHtcclxuICAgICAgY29uc3QgeyBpbmRleCwgdmFsdWVzIH0gPSBtdXQ7XHJcbiAgICAgIHNuYXBzaG90LnNwbGljZShpbmRleCwgMCwgdmFsdWVzKTtcclxuICAgICAgbXV0YXRpb25zLm5leHQobXV0KTtcclxuICAgIH0gZWxzZSBpZiAobXV0LnR5cGUgPT09ICdwdXNoJykge1xyXG4gICAgICBjb25zdCB7IHZhbHVlcyB9ID0gbXV0O1xyXG4gICAgICBzbmFwc2hvdC5wdXNoKHZhbHVlcyk7XHJcbiAgICAgIG11dGF0aW9ucy5uZXh0KG11dCk7XHJcbiAgICB9IGVsc2UgaWYgKG11dC50eXBlID09PSAncmVtb3ZlJykge1xyXG4gICAgICBjb25zdCBpbmRleCA9XHJcbiAgICAgICAgdHlwZW9mIG11dC5wcmVkaWNhdGUgPT09ICdudW1iZXInXHJcbiAgICAgICAgICA/IG11dC5wcmVkaWNhdGVcclxuICAgICAgICAgIDogc25hcHNob3QuZmluZEluZGV4KG11dC5wcmVkaWNhdGUpO1xyXG4gICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgIHNuYXBzaG90LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgbXV0YXRpb25zLm5leHQoeyB0eXBlOiAncmVtb3ZlJywgcHJlZGljYXRlOiBpbmRleCB9KTtcclxuICAgIH0gZWxzZSBpZiAobXV0LnR5cGUgPT09ICdtb3ZlJykge1xyXG4gICAgICBjb25zdCB7IGZyb20sIHRvIH0gPSBtdXQ7XHJcbiAgICAgIGNvbnN0IHRtcCA9IHNuYXBzaG90W2Zyb21dO1xyXG4gICAgICBzbmFwc2hvdFtmcm9tXSA9IHNuYXBzaG90W3RvXTtcclxuICAgICAgc25hcHNob3RbdG9dID0gdG1wO1xyXG4gICAgICBtdXRhdGlvbnMubmV4dChtdXQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVzZXRJdGVtcyhpdGVtczogVFtdKTogTGlzdE11dGF0aW9uPFQ+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6ICdyZXNldCcsXHJcbiAgICAgIGl0ZW1zLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbnR5cGUgVXBkYXRlQ2FsbGJhY2s8VD4gPSAoaXRlbTogVCkgPT4gVDtcclxuXHJcbmNsYXNzIExpc3RJdGVtPFQ+IGV4dGVuZHMgVmFsdWU8VD4ge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbGlzdDogVFtdLCBwdWJsaWMgaW5kZXg6IG51bWJlciwgdmFsdWU/OiBUKSB7XHJcbiAgICBzdXBlcih1bmRlZmluZWQsIHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZShuZXdWYWx1ZTogVCk7XHJcbiAgdXBkYXRlKGNhbGxiYWNrOiBVcGRhdGVDYWxsYmFjazxUPik7XHJcbiAgdXBkYXRlKG5ld1ZhbHVlT3JDYWxsYmFjazogYW55KSB7XHJcbiAgICBjb25zdCB7IGxpc3QsIGluZGV4IH0gPSB0aGlzO1xyXG4gICAgaWYgKHR5cGVvZiBuZXdWYWx1ZU9yQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgT2JqZWN0LmFzc2lnbihsaXN0W2luZGV4XSwgbmV3VmFsdWVPckNhbGxiYWNrKGxpc3RbaW5kZXhdKSk7XHJcbiAgICB9IGVsc2UgbGlzdFtpbmRleF0gPSBuZXdWYWx1ZU9yQ2FsbGJhY2s7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzd2FwSXRlbXM8VD4oYXJyOiBUW10sIGZyb206IG51bWJlciwgdG86IG51bWJlcikge1xyXG4gIGNvbnN0IHRtcCA9IGFycltmcm9tXTtcclxuICBhcnJbZnJvbV0gPSBhcnJbdG9dO1xyXG4gIGFyclt0b10gPSB0bXA7XHJcbn1cclxuIiwiZXhwb3J0IHR5cGUgTGlzdE11dGF0aW9uPFQgPSB1bmtub3duPiA9XHJcbiAgfCBQdXNoSXRlbTxUPlxyXG4gIHwgSW5zZXJ0SXRlbTxUPlxyXG4gIHwgTW92ZUl0ZW1cclxuICB8IFJlbW92ZUl0ZW08VD5cclxuICB8IFJlc2V0SXRlbXM8VD5cclxuICB8IFVwZGF0ZUl0ZW08VD47XHJcblxyXG5pbnRlcmZhY2UgUHVzaEl0ZW08VD4ge1xyXG4gIHR5cGU6ICdwdXNoJztcclxuICB2YWx1ZXM6IFQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBNb3ZlSXRlbSB7XHJcbiAgdHlwZTogJ21vdmUnO1xyXG4gIGZyb206IG51bWJlcjtcclxuICB0bzogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSW5zZXJ0SXRlbTxUPiB7XHJcbiAgdHlwZTogJ2luc2VydCc7XHJcbiAgdmFsdWVzOiBUO1xyXG4gIGluZGV4OiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBSZW1vdmVJdGVtPFQ+IHtcclxuICB0eXBlOiAncmVtb3ZlJztcclxuICBwcmVkaWNhdGU7XHJcbn1cclxuaW50ZXJmYWNlIFJlc2V0SXRlbXM8VD4ge1xyXG4gIHR5cGU6ICdyZXNldCc7XHJcbiAgaXRlbXM6IFRbXTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFVwZGF0ZUl0ZW08VD4ge1xyXG4gIHR5cGU6ICd1cGRhdGUnO1xyXG4gIGluZGV4OiBudW1iZXI7XHJcbiAgY2FsbGJhY2soaXRlbTogVCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVJdGVtPFQ+KFxyXG4gIGluZGV4OiBudW1iZXIsXHJcbiAgY2FsbGJhY2s6IChpdGVtOiBUKSA9PiB2b2lkXHJcbik6IFVwZGF0ZUl0ZW08VD4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiAndXBkYXRlJyxcclxuICAgIGluZGV4LFxyXG4gICAgY2FsbGJhY2ssXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHB1c2hJdGVtPFQ+KHZhbHVlczogVCk6IFB1c2hJdGVtPFQ+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogJ3B1c2gnLFxyXG4gICAgdmFsdWVzLFxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGluc2VydEl0ZW08VD4odmFsdWVzOiBULCBpbmRleDogbnVtYmVyKTogSW5zZXJ0SXRlbTxUPiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6ICdpbnNlcnQnLFxyXG4gICAgdmFsdWVzLFxyXG4gICAgaW5kZXgsXHJcbiAgfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSXRlbTxUPihcclxuICBwcmVkaWNhdGU6IG51bWJlciB8ICgodDogVCkgPT4gYm9vbGVhbilcclxuKTogUmVtb3ZlSXRlbTxUPiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6ICdyZW1vdmUnLFxyXG4gICAgcHJlZGljYXRlLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNldEl0ZW1zPFQ+KGl0ZW1zOiBUW10pOiBSZXNldEl0ZW1zPFQ+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogJ3Jlc2V0JyxcclxuICAgIGl0ZW1zLFxyXG4gIH07XHJcbn1cclxuXHJcbnR5cGUgUHJvcDxULCBLIGV4dGVuZHMga2V5b2YgVD4gPSBUW0tdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTXV0YXRpb248VCA9IHVua25vd24+KFxyXG4gIG06IGFueVxyXG4pOiBtIGlzIExpc3RNdXRhdGlvbjxUPiB8IFJlbW92ZUl0ZW08VD4ge1xyXG4gIGlmICghbSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBjb25zdCB0eXBlOiBQcm9wPExpc3RNdXRhdGlvbiwgJ3R5cGUnPiA9IG0udHlwZTtcclxuICByZXR1cm4gKFxyXG4gICAgdHlwZSA9PT0gJ3JlbW92ZScgfHxcclxuICAgIHR5cGUgPT09ICdwdXNoJyB8fFxyXG4gICAgdHlwZSA9PT0gJ2luc2VydCcgfHxcclxuICAgIHR5cGUgPT09ICdyZXNldCcgfHxcclxuICAgIHR5cGUgPT09ICdtb3ZlJ1xyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgUnggZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBlZWthYmxlPFQ+IHtcclxuICBwZWVrPFU+KHByb2plY3Q6ICh2YWx1ZTogVCkgPT4gVSk6IFU7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFVwZGF0ZXI8VD4gPSBUIHwgKChhOiBUKSA9PiBUIHwgdm9pZCk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0YWJsZTxUPiB7XHJcbiAgdXBkYXRlKHZhbHVlOiBVcGRhdGVyPFQ+KTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wZXJ0eTxUPiBleHRlbmRzIEV4cHJlc3Npb248VD4sIFVwZGF0YWJsZTxUPiB7XHJcbiAgbmFtZTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIHZhbHVlRnJvbShwYXJlbnRWYWx1ZTogYW55LCBwcmV2VmFsdWU/OiBUKTogVDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFeHByZXNzaW9uPFQgPSB1bmtub3duPlxyXG4gIGV4dGVuZHMgUnguU3Vic2NyaWJhYmxlPFQ+LFxyXG4gICAgUGVla2FibGU8VD4sXHJcbiAgICBMaWZ0YWJsZTxUPiB7XHJcbiAgcHJvcGVydHk8SyBleHRlbmRzIGtleW9mIFQ+KHByb3BlcnR5TmFtZTogSyk6IFByb3BlcnR5PFRbS10+O1xyXG4gIGRpc3Bvc2UoKTogYW55O1xyXG4gIHZhbHVlPzogVDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQWN0aW9uPFQ+ID0gKHZhbHVlOiBUKSA9PiB2b2lkO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRXhwcmVzc2lvbihvOiBhbnkpOiBvIGlzIEV4cHJlc3Npb248dW5rbm93bj4ge1xyXG4gIGlmICh0eXBlb2YgbyAhPT0gJ29iamVjdCcpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgaWYgKHR5cGVvZiBvLmxpZnQgIT09ICdmdW5jdGlvbicpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgcmV0dXJuIGlzU3Vic2NyaWJhYmxlKG8pO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExpZnRhYmxlPFQ+IHtcclxuICBsaWZ0PFU+KHByb2plY3Q6ICh2YWx1ZTogVCwgcHJldj86IFUpID0+IFUpOiBFeHByZXNzaW9uPFU+O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNMaWZ0YWJsZShvOiBhbnkpOiBvIGlzIEV4cHJlc3Npb248dW5rbm93bj4ge1xyXG4gIGlmICh0eXBlb2YgbyAhPT0gJ29iamVjdCcpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgcmV0dXJuIHR5cGVvZiBvLmxpZnQgPT09ICdmdW5jdGlvbic7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N1YnNjcmliYWJsZShvOiBhbnkpOiBvIGlzIFJ4LlN1YnNjcmliYWJsZTx1bmtub3duPiB7XHJcbiAgaWYgKG8gPT09IG51bGwgfHwgdHlwZW9mIG8gIT09ICdvYmplY3QnKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gIGlmICh0eXBlb2Ygby5zdWJzY3JpYmUgIT09ICdmdW5jdGlvbicpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFN0YXRlVmlldzxUPiA9IHtcclxuICBbSyBpbiBrZXlvZiBUXTogVFtLXSBleHRlbmRzICguLi5hcmdzOiBhbnkpID0+IGFueSA/IFRbS10gOiBTdGF0ZTxUW0tdPjtcclxufSAmXHJcbiAgRXhwcmVzc2lvbjxUPjtcclxuXHJcbmV4cG9ydCB0eXBlIFN0YXRlPFQ+ID0gU3RhdGVWaWV3PFQ+ICYgVXBkYXRhYmxlPFQ+ICYgRXhwcmVzc2lvbjxUPjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc05leHRPYnNlcnZlcjxUPih2YWx1ZTogYW55KTogdmFsdWUgaXMgUnguTmV4dE9ic2VydmVyPFQ+IHtcclxuICBpZiAodmFsdWUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcclxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JykgcmV0dXJuIHR5cGVvZiB2YWx1ZS5uZXh0ID09PSAnZnVuY3Rpb24nO1xyXG5cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbi8qKiBTeW1ib2wub2JzZXJ2YWJsZSBhZGRpdGlvbiAqL1xyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgaW50ZXJmYWNlIFN5bWJvbENvbnN0cnVjdG9yIHtcclxuICAgIHJlYWRvbmx5IG9ic2VydmFibGU6IHN5bWJvbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b1N1YnNjcmliZXIobmV4dE9yT2JzZXJ2ZXI6IGFueSwgZXJyb3I6IGFueSwgY29tcGxldGU6IGFueSkge1xyXG4gIGlmIChuZXh0T3JPYnNlcnZlcikge1xyXG4gICAgaWYgKG5leHRPck9ic2VydmVyIGluc3RhbmNlb2YgUnguU3Vic2NyaWJlcikge1xyXG4gICAgICByZXR1cm4gbmV4dE9yT2JzZXJ2ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmICghbmV4dE9yT2JzZXJ2ZXIgJiYgIWVycm9yICYmICFjb21wbGV0ZSkge1xyXG4gICAgY29uc3QgZW1wdHlPYnNlcnZlciA9IHtcclxuICAgICAgY2xvc2VkOiB0cnVlLFxyXG4gICAgICBuZXh0KCkge30sXHJcbiAgICAgIGVycm9yKGVycjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICB9LFxyXG4gICAgICBjb21wbGV0ZSgpIHt9LFxyXG4gICAgfTtcclxuICAgIHJldHVybiBuZXcgUnguU3Vic2NyaWJlcihlbXB0eU9ic2VydmVyKTtcclxuICB9XHJcbiAgcmV0dXJuIG5ldyBSeC5TdWJzY3JpYmVyKG5leHRPck9ic2VydmVyLCBlcnJvciwgY29tcGxldGUpO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgRXhwcmVzc2lvbixcclxuICBBY3Rpb24sXHJcbiAgVXBkYXRlcixcclxuICBQcm9wZXJ0eSxcclxuICBTdGF0ZSxcclxuICBpc05leHRPYnNlcnZlcixcclxuICB0b1N1YnNjcmliZXIsXHJcbn0gZnJvbSAnLi9vYnNlcnZhYmxlJztcclxuXHJcbmltcG9ydCAqIGFzIFJ4IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBQYXJ0aWFsT2JzZXJ2ZXIsIFVuc3Vic2NyaWJhYmxlIH0gZnJvbSAncnhqcy9pbnRlcm5hbC90eXBlcyc7XHJcblxyXG50eXBlIEZ1bmM8VCwgVT4gPSAoYTogVCkgPT4gVTtcclxuXHJcbmNvbnN0IF9fZW1wdHlTdWJzY3JpcHRpb246IFVuc3Vic2NyaWJhYmxlID0ge1xyXG4gIHVuc3Vic2NyaWJlKCkge30sXHJcbn07XHJcbmNvbnN0IG9ic2VydmFibGUgPVxyXG4gICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5vYnNlcnZhYmxlKSB8fCAnQEBvYnNlcnZhYmxlJztcclxuXHJcbmNvbnN0IGVtcHR5ID0gJyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhcmVudDxUPiB7XHJcbiAgcHJvcGVydGllcz86IEV4cHJlc3Npb248VFtrZXlvZiBUXT5bXTtcclxuICB2YWx1ZT86IFQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBWYWx1ZTxUPiBpbXBsZW1lbnRzIEV4cHJlc3Npb248VD4ge1xyXG4gIHB1YmxpYyBwcm9wZXJ0aWVzOiBQcm9wZXJ0eTxUW2tleW9mIFRdPltdID0gW107XHJcbiAgcHVibGljIG9ic2VydmVycz86IFBhcnRpYWxPYnNlcnZlcjxUPltdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGFyZW50OiBQYXJlbnQ8YW55PiB8IG51bGwsIHB1YmxpYyB2YWx1ZT86IFQpIHt9XHJcblxyXG4gIFtvYnNlcnZhYmxlXSgpIHtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcGVlayA9IDxVPihwcm9qZWN0OiBGdW5jPFQsIFU+KSA9PiB7XHJcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzO1xyXG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHByb2plY3QodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybjtcclxuICB9O1xyXG5cclxuICBvbkNoYW5nZShcclxuICAgIG9ic2VydmVyOiBQYXJ0aWFsT2JzZXJ2ZXI8VD4gfCBBY3Rpb248VD4sXHJcbiAgICBza2lwQ3VycmVudDogYm9vbGVhblxyXG4gICk6IFVuc3Vic2NyaWJhYmxlIHtcclxuICAgIGlmICh0eXBlb2Ygb2JzZXJ2ZXIgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgcmV0dXJuIHRoaXMub25DaGFuZ2UoeyBuZXh0OiBvYnNlcnZlciB9LCBza2lwQ3VycmVudCkgYXMgVW5zdWJzY3JpYmFibGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFpc05leHRPYnNlcnZlcihvYnNlcnZlcikpIHtcclxuICAgICAgcmV0dXJuIF9fZW1wdHlTdWJzY3JpcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFza2lwQ3VycmVudCkge1xyXG4gICAgICBpZiAodGhpcy52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgb2JzZXJ2ZXIubmV4dCh0aGlzLnZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBvYnNlcnZlcnMgPSB0aGlzLm9ic2VydmVycztcclxuICAgIGlmIChvYnNlcnZlcnMpIHtcclxuICAgICAgbGV0IGxlbmd0aCA9IG9ic2VydmVycy5sZW5ndGg7XHJcbiAgICAgIG9ic2VydmVyc1tsZW5ndGhdID0gb2JzZXJ2ZXI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm9ic2VydmVycyA9IG9ic2VydmVycyA9IFtvYnNlcnZlcl07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdW5zdWJzY3JpYmUoKSB7XHJcbiAgICAgICAgaWYgKG9ic2VydmVycykge1xyXG4gICAgICAgICAgdmFyIGlkeCA9IG9ic2VydmVycy5pbmRleE9mKG9ic2VydmVyKTtcclxuICAgICAgICAgIG9ic2VydmVycy5zcGxpY2UoaWR4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9IGFzIFVuc3Vic2NyaWJhYmxlO1xyXG4gIH1cclxuXHJcbiAgc3Vic2NyaWJlID0gKG5leHRPck9ic2VydmVyPzogYW55LCBlcnJvcj86IGFueSwgY29tcGxldGU/OiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHNpbmsgPSB0b1N1YnNjcmliZXIobmV4dE9yT2JzZXJ2ZXIsIGVycm9yLCBjb21wbGV0ZSk7XHJcbiAgICByZXR1cm4gdGhpcy5vbkNoYW5nZShzaW5rLCBmYWxzZSkgYXMgVW5zdWJzY3JpYmFibGU7XHJcbiAgfTtcclxuXHJcbiAgZ2V0PEsgZXh0ZW5kcyBrZXlvZiBUPihwcm9wZXJ0eU5hbWU6IEspOiBQcm9wZXJ0eTxUW0tdPiB8IHZvaWQge1xyXG4gICAgY29uc3QgeyBwcm9wZXJ0aWVzIH0gPSB0aGlzO1xyXG4gICAgbGV0IGkgPSBwcm9wZXJ0aWVzLmxlbmd0aDtcclxuICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgY29uc3QgcHJvcDogYW55ID0gcHJvcGVydGllc1tpXTtcclxuICAgICAgaWYgKHByb3AubmFtZSA9PT0gcHJvcGVydHlOYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb3A7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3BlcnR5PEsgZXh0ZW5kcyBrZXlvZiBUPihwcm9wZXJ0eU5hbWU6IEspOiBQcm9wZXJ0eTxUW0tdPjtcclxuICBwcm9wZXJ0eTxLIGV4dGVuZHMga2V5b2YgVD4ocHJvcGVydHlOYW1lOiBLKSB7XHJcbiAgICBjb25zdCBwcm9wID0gdGhpcy5nZXQocHJvcGVydHlOYW1lKTtcclxuICAgIGlmIChwcm9wKSByZXR1cm4gcHJvcDtcclxuXHJcbiAgICB2YXIgcGFyZW50VmFsdWUgPSB0aGlzLnZhbHVlO1xyXG4gICAgdmFyIGluaXRWYWx1ZSA9IHBhcmVudFZhbHVlID8gcGFyZW50VmFsdWVbcHJvcGVydHlOYW1lXSA6IHZvaWQgMDtcclxuXHJcbiAgICBjb25zdCBwcm9wZXJ0eSA9IG5ldyBPYmplY3RQcm9wZXJ0eTxUW0tdPihcclxuICAgICAgdGhpcyxcclxuICAgICAgcHJvcGVydHlOYW1lIGFzIHN0cmluZyxcclxuICAgICAgaW5pdFZhbHVlXHJcbiAgICApO1xyXG4gICAgdGhpcy5wcm9wZXJ0aWVzLnB1c2gocHJvcGVydHkgYXMgYW55KTtcclxuICAgIHJldHVybiBwcm9wZXJ0eTtcclxuICB9XHJcblxyXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlO1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHJldHVybiB2YWx1ZTtcclxuICAgIGVsc2UgaWYgKHZhbHVlID09PSB2b2lkIDAgfHwgdmFsdWUgPT09IG51bGwpIHJldHVybiBlbXB0eTtcclxuICAgIGVsc2UgcmV0dXJuIHZhbHVlICsgJyc7XHJcbiAgfVxyXG5cclxuICBsaWZ0PFU+KHZhbHVlRnJvbTogKG5ld1ZhbHVlOiBULCBwcmV2VmFsdWU/OiBVKSA9PiBVKTogRXhwcmVzc2lvbjxVPiB7XHJcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzO1xyXG4gICAgY29uc3QgcCA9IG5ldyBWYWx1ZU9ic2VydmVyKFxyXG4gICAgICB0aGlzLFxyXG4gICAgICB2YWx1ZUZyb20sXHJcbiAgICAgIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiB2YWx1ZUZyb20odmFsdWUpXHJcbiAgICApO1xyXG4gICAgY29uc3QgeyBwcm9wZXJ0aWVzIH0gPSB0aGlzO1xyXG4gICAgcHJvcGVydGllcy5wdXNoKHAgYXMgYW55KTtcclxuICAgIHJldHVybiBwO1xyXG4gIH1cclxuXHJcbiAgZGlzcG9zZSgpIHtcclxuICAgIGNvbnN0IHsgcGFyZW50IH0gPSB0aGlzO1xyXG4gICAgaWYgKHBhcmVudCkge1xyXG4gICAgICBjb25zdCB7IHByb3BlcnRpZXMgfSA9IHBhcmVudDtcclxuICAgICAgaWYgKHByb3BlcnRpZXMpIHtcclxuICAgICAgICB2YXIgaWR4ID0gcHJvcGVydGllcy5pbmRleE9mKHRoaXMgYXMgYW55KTtcclxuICAgICAgICBpZiAoaWR4ID49IDApIHtcclxuICAgICAgICAgIHByb3BlcnRpZXMuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyB0eXBlIEFycmF5TXV0YXRpb24gPVxyXG4vLyAgIHwgeyB0eXBlOiAnaW5zZXJ0JzsgaW5kZXg6IG51bWJlciB9XHJcbi8vICAgfCB7IHR5cGU6ICdyZW1vdmUnOyBpbmRleDogbnVtYmVyIH1cclxuLy8gICB8IHsgdHlwZTogJ21vdmUnOyBmcm9tOiBudW1iZXI7IHRvOiBudW1iZXIgfTtcclxuXHJcbi8vIGV4cG9ydCBpbnRlcmZhY2UgT2JzZXJ2YWJsZUFycmF5PFQ+IHtcclxuLy8gICBzdWJzY3JpYmUob2JzZXJ2ZXI6IE5leHRBcnJheU11dGF0aW9uc09ic2VydmVyPFQ+KTogUnguU3Vic2NyaXB0aW9uO1xyXG4vLyB9XHJcbi8vIHR5cGUgQXJyYXlNdXRhdGlvbnNDYWxsYmFjazxUPiA9IChhcnJheTogVCwgbXV0YXRpb25zPzogQXJyYXlNdXRhdGlvbltdKSA9PiBhbnk7XHJcblxyXG4vLyB0eXBlIE5leHRBcnJheU11dGF0aW9uc09ic2VydmVyPFQ+ID0ge1xyXG4vLyAgIG5leHQ6IEFycmF5TXV0YXRpb25zQ2FsbGJhY2s8VD47XHJcbi8vIH07XHJcblxyXG5leHBvcnQgY2xhc3MgT2JqZWN0UHJvcGVydHk8VD4gZXh0ZW5kcyBWYWx1ZTxUPiBpbXBsZW1lbnRzIFByb3BlcnR5PFQ+IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyByZWFkb25seSBwYXJlbnQ6IFBhcmVudDxhbnk+LFxyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWU6IHN0cmluZyB8IG51bWJlcixcclxuICAgIHZhbHVlPzogVFxyXG4gICkge1xyXG4gICAgc3VwZXIocGFyZW50LCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICB2YWx1ZUZyb20ocGFyZW50VmFsdWU6IGFueSkge1xyXG4gICAgcmV0dXJuIHBhcmVudFZhbHVlICYmIHBhcmVudFZhbHVlW3RoaXMubmFtZV07XHJcbiAgfVxyXG5cclxuICB1cGRhdGUgPSAodXBkYXRlcjogVXBkYXRlcjxUPiwgYXV0b1JlZnJlc2g6IGJvb2xlYW4gPSB0cnVlKSA9PiB7XHJcbiAgICBpZiAoIXVwZGF0ZVZhbHVlKHRoaXMsIHVwZGF0ZXIpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgdmFyIHBhcmVudFZhbHVlID0gdGhpcy5wYXJlbnQudmFsdWU7XHJcbiAgICBpZiAocGFyZW50VmFsdWUpIHtcclxuICAgICAgcGFyZW50VmFsdWVbdGhpcy5uYW1lXSA9IHRoaXMudmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtZXJnZVBhcmVudCh0aGlzLnBhcmVudCwgeyBbdGhpcy5uYW1lXTogdGhpcy52YWx1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYXV0b1JlZnJlc2gpIHtcclxuICAgICAgY29uc3QgZGlydHkgPSBkaWdlc3QodGhpcyk7XHJcbiAgICAgIGxldCBwYXJlbnQ6IGFueSA9IHRoaXM7XHJcbiAgICAgIHdoaWxlIChwYXJlbnQpIHtcclxuICAgICAgICBkaXJ0eS5wdXNoKHBhcmVudCk7XHJcbiAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcclxuICAgICAgfVxyXG4gICAgICBmbHVzaChkaXJ0eSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgZnVuY3Rpb24gbWVyZ2VQYXJlbnQocGFyZW50OiBhbnksIHZhbHVlOiBhbnkpIHtcclxuICAgICAgcGFyZW50LnVwZGF0ZSh2YWx1ZSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGFzUHJveHkoKTogU3RhdGU8VD4ge1xyXG4gICAgcmV0dXJuIGFzUHJveHkodGhpcyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3RvcmU8VD4gZXh0ZW5kcyBWYWx1ZTxUPiB7XHJcbiAgY29uc3RydWN0b3IodmFsdWU/OiBULCBwdWJsaWMgYXV0b1JlZnJlc2g6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICBzdXBlcihudWxsLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvLyAgIGV4cHIoZXhwcjogc3RyaW5nKSB7XHJcbiAgLy8gICAgIHZhciBwYXJ0cyA9IGV4cHIuc3BsaXQoJy4nKTtcclxuICAvLyAgICAgcmV0dXJuICh2YWx1ZTogVCkgPT4ge1xyXG4gIC8vICAgICAgIHZhciBvYmogPSB0aGlzLnZhbHVlO1xyXG4gIC8vICAgICAgIHZhciBsZW4gPSBwYXJ0cy5sZW5ndGggLSAxO1xyXG4gIC8vICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAvLyAgICAgICAgIHZhciBwcm9wID0gcGFydHNbaV07XHJcbiAgLy8gICAgICAgICB2YXIgY2hpbGQgPSBvYmpbcHJvcF07XHJcbiAgLy8gICAgICAgICBpZiAoIWNoaWxkKSB7XHJcbiAgLy8gICAgICAgICAgIG9ialtwcm9wXSA9IGNoaWxkID0ge307XHJcbiAgLy8gICAgICAgICB9XHJcbiAgLy8gICAgICAgICBvYmogPSBjaGlsZDtcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgICAgdmFyIGxhc3QgPSBwYXJ0c1tsZW5dO1xyXG4gIC8vICAgICAgIG9ialtsYXN0XSA9IHZhbHVlO1xyXG4gIC8vICAgICB9O1xyXG4gIC8vICAgfVxyXG5cclxuICBhc1Byb3h5KCk6IFN0YXRlPFQ+IHtcclxuICAgIHJldHVybiBhc1Byb3h5KHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlID0gKFxyXG4gICAgbmV3VmFsdWU6IFVwZGF0ZXI8VD4sXHJcbiAgICBhdXRvUmVmcmVzaDogYm9vbGVhbiA9IHRydWUsXHJcbiAgICBwYXJ0aWFsPzogYm9vbGVhblxyXG4gICkgPT4ge1xyXG4gICAgaWYgKCF1cGRhdGVWYWx1ZSh0aGlzLCBuZXdWYWx1ZSwgcGFydGlhbCkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChhdXRvUmVmcmVzaCkge1xyXG4gICAgICBjb25zdCBkaXJ0eSA9IGRpZ2VzdCh0aGlzKTtcclxuICAgICAgLy8gVE9ETyBkbyB3ZSBzdGlsbCBuZWVkIHRoaXM/XHJcbiAgICAgIGRpcnR5LnB1c2godGhpcyk7XHJcbiAgICAgIGZsdXNoKGRpcnR5KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH07XHJcblxyXG4gIHJlZnJlc2goKSB7XHJcbiAgICByZXR1cm4gcmVmcmVzaCh0aGlzKTtcclxuICB9XHJcblxyXG4gIG5leHQodmFsdWVzOiBUKSB7XHJcbiAgICB0aGlzLnVwZGF0ZSh2YWx1ZXMpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFzUHJveHk8VD4oc2VsZjogRXhwcmVzc2lvbjxUPik6IFN0YXRlPFQ+IHtcclxuICByZXR1cm4gbmV3IFByb3h5PGFueT4oc2VsZiwge1xyXG4gICAgZ2V0KHBhcmVudDogRXhwcmVzc2lvbjxUPiwgbmFtZTogc3RyaW5nIHwgc3ltYm9sKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N5bWJvbCcgfHwgbmFtZSBpbiBzZWxmKSByZXR1cm4gKHNlbGYgYXMgYW55KVtuYW1lXTtcclxuXHJcbiAgICAgIHZhciByZXN1bHQgPSBwYXJlbnQucHJvcGVydHkobmFtZSBhcyBrZXlvZiBUKTtcclxuICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdmdW5jdGlvbicpIHJldHVybiByZXN1bHQ7XHJcblxyXG4gICAgICByZXR1cm4gYXNQcm94eShyZXN1bHQpO1xyXG4gICAgfSxcclxuICAgIHNldDxLIGV4dGVuZHMga2V5b2YgVD4oXHJcbiAgICAgIHBhcmVudDogVmFsdWU8VD4sXHJcbiAgICAgIG5hbWU6IHN0cmluZyB8IHN5bWJvbCxcclxuICAgICAgdmFsdWU6IFVwZGF0ZXI8VFtLXT5cclxuICAgICkge1xyXG4gICAgICByZXR1cm4gcGFyZW50LnByb3BlcnR5KG5hbWUgYXMga2V5b2YgVCkudXBkYXRlKHZhbHVlKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIC8vIGZ1bmN0aW9uIHN1YnNjcmliZShvYnNlcnZlcik6IFVuc3Vic2NyaWJhYmxlIHtcclxuICAvLyAgICAgcmV0dXJuIHNlbGYuc3Vic2NyaWJlKG9ic2VydmVyKTtcclxuICAvLyB9XHJcblxyXG4gIC8vIGZ1bmN0aW9uIHVwZGF0ZSh2YWx1ZTogVXBkYXRlcjxUPik6IGJvb2xlYW4ge1xyXG4gIC8vICAgICByZXR1cm4gc2VsZi51cGRhdGUodmFsdWUpO1xyXG4gIC8vIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmU7XHJcblxyXG5jbGFzcyBWYWx1ZU9ic2VydmVyPFQsIFU+IGV4dGVuZHMgVmFsdWU8VT4ge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcGFyZW50OiBWYWx1ZTxhbnk+LFxyXG4gICAgcHVibGljIHZhbHVlRnJvbTogKG5ld1ZhbHVlOiBULCBwcmV2VmFsdWU6IFUpID0+IFUsXHJcbiAgICBpbml0VmFsdWU/OiBVXHJcbiAgKSB7XHJcbiAgICBzdXBlcihwYXJlbnQsIGluaXRWYWx1ZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVmcmVzaDxUPihyb290OiBWYWx1ZTxUPikge1xyXG4gIGNvbnN0IGRpcnR5ID0gZGlnZXN0KHJvb3QpO1xyXG4gIGlmIChkaXJ0eS5sZW5ndGgpIHtcclxuICAgIGZsdXNoKGRpcnR5KTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaWdlc3Qocm9vdDoge1xyXG4gIHByb3BlcnRpZXM/OiBQcm9wZXJ0eTxhbnk+W107XHJcbiAgdmFsdWU/OiBhbnk7XHJcbn0pOiBhbnlbXSB7XHJcbiAgaWYgKCFyb290KSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG4gIHZhciBzdGFjayA9IFtyb290XTtcclxuICB2YXIgc3RhY2tMZW5ndGg6IG51bWJlciA9IHN0YWNrLmxlbmd0aDtcclxuICB2YXIgZGlydHlMZW5ndGg6IG51bWJlciA9IDA7XHJcbiAgdmFyIGRpcnR5ID0gW107XHJcblxyXG4gIHdoaWxlIChzdGFja0xlbmd0aC0tKSB7XHJcbiAgICBjb25zdCBwYXJlbnQgPSBzdGFja1tzdGFja0xlbmd0aF07XHJcbiAgICBjb25zdCBwYXJlbnRWYWx1ZSA9IHBhcmVudC52YWx1ZTtcclxuXHJcbiAgICB2YXIgeyBwcm9wZXJ0aWVzIH0gPSBwYXJlbnQ7XHJcblxyXG4gICAgaWYgKHByb3BlcnRpZXMpIHtcclxuICAgICAgbGV0IHByb3BJZHg6IG51bWJlciA9IHByb3BlcnRpZXMubGVuZ3RoIHwgMDtcclxuICAgICAgd2hpbGUgKHByb3BJZHgpIHtcclxuICAgICAgICBwcm9wSWR4ID0gKHByb3BJZHggLSAxKSB8IDA7XHJcbiAgICAgICAgdmFyIHByb3AgPSBwcm9wZXJ0aWVzW3Byb3BJZHhdO1xyXG4gICAgICAgIC8vcmVjdXJzZVxyXG4gICAgICAgIHN0YWNrW3N0YWNrTGVuZ3RoXSA9IHByb3A7XHJcbiAgICAgICAgc3RhY2tMZW5ndGggPSAoc3RhY2tMZW5ndGggKyAxKSB8IDA7XHJcblxyXG4gICAgICAgIGNvbnN0IHByZXZWYWx1ZSA9IHByb3AudmFsdWU7XHJcbiAgICAgICAgY29uc3QgY2hpbGRWYWx1ZSA9XHJcbiAgICAgICAgICBwcmV2VmFsdWUgPT09IG51bGxcclxuICAgICAgICAgICAgPyBwcm9wLnZhbHVlRnJvbShwYXJlbnRWYWx1ZSlcclxuICAgICAgICAgICAgOiBwcm9wLnZhbHVlRnJvbShwYXJlbnRWYWx1ZSwgcHJldlZhbHVlKTtcclxuICAgICAgICBpZiAocHJldlZhbHVlICE9PSBjaGlsZFZhbHVlKSB7XHJcbiAgICAgICAgICBwcm9wLnZhbHVlID0gY2hpbGRWYWx1ZTtcclxuICAgICAgICAgIGRpcnR5W2RpcnR5TGVuZ3RoXSA9IHByb3A7XHJcbiAgICAgICAgICBkaXJ0eUxlbmd0aCA9IChkaXJ0eUxlbmd0aCArIDEpIHwgMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGV4cGFuZCB3aXRoIHBhcmVudHNcclxuICByZXR1cm4gZGlydHk7XHJcbn1cclxuXHJcbi8vIFRPRE8gcmVmYWN0b3IgLyBtZXJnZSB3aXRoIHJlZnJlc2hTdGFja1xyXG5leHBvcnQgZnVuY3Rpb24gZmx1c2goZGlydHk6IGFueVtdKSB7XHJcbiAgdmFyIGxpc3RMZW5ndGg6IG51bWJlciA9IGRpcnR5Lmxlbmd0aDtcclxuXHJcbiAgd2hpbGUgKGxpc3RMZW5ndGgtLSkge1xyXG4gICAgY29uc3QgaXRlbSA9IGRpcnR5W2xpc3RMZW5ndGhdO1xyXG4gICAgY29uc3QgaXRlbVZhbHVlID0gaXRlbS52YWx1ZTtcclxuXHJcbiAgICBjb25zdCB7IG9ic2VydmVycyB9ID0gaXRlbTtcclxuICAgIGlmIChvYnNlcnZlcnMpIHtcclxuICAgICAgdmFyIGUgPSBvYnNlcnZlcnMubGVuZ3RoIHwgMDtcclxuICAgICAgd2hpbGUgKGUtLSkge1xyXG4gICAgICAgIGxldCBvYnNlcnZlciA9IG9ic2VydmVyc1tlXTtcclxuICAgICAgICBvYnNlcnZlci5uZXh0KGl0ZW1WYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IExpc3RJdGVtIH07XHJcblxyXG5jbGFzcyBMaXN0SXRlbTxUPiBleHRlbmRzIFZhbHVlPFQ+IHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmFsdWU6IFQsIHB1YmxpYyBpbmRleDogbnVtYmVyKSB7XHJcbiAgICBzdXBlcihudWxsLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUgPSAobmV3VmFsdWU6IFQgfCBGdW5jPFQsIHZvaWQgfCBUPiwgYXV0b1JlZnJlc2g6IGJvb2xlYW4gPSB0cnVlKSA9PiB7XHJcbiAgICBpZiAoIXVwZGF0ZVZhbHVlKHRoaXMsIG5ld1ZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGF1dG9SZWZyZXNoKSB7XHJcbiAgICAgIGNvbnN0IGRpcnR5ID0gZGlnZXN0KHRoaXMpO1xyXG4gICAgICBkaXJ0eS5wdXNoKHRoaXMpO1xyXG4gICAgICBmbHVzaChkaXJ0eSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVZhbHVlPFQ+KFxyXG4gIHRhcmdldDogeyB2YWx1ZT86IFQgfSxcclxuICBuZXdWYWx1ZTogVXBkYXRlcjxUPixcclxuICBwYXJ0aWFsPzogYm9vbGVhblxyXG4pOiBib29sZWFuIHtcclxuICAvLyBpZ25vcmUgdW5kZWZpbmVkXHJcbiAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgY29uc3QgdGFyZ2V0VmFsdWUgPSB0YXJnZXQudmFsdWU7XHJcbiAgaWYgKHRhcmdldFZhbHVlID09PSBuZXdWYWx1ZSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0gZWxzZSBpZiAoaXNGdW5jdGlvbihuZXdWYWx1ZSkpIHtcclxuICAgIGNvbnN0IHJldHZhbCA9IG5ld1ZhbHVlLmFwcGx5KG51bGwsIFt0YXJnZXRWYWx1ZV0pO1xyXG4gICAgLy8gd2hlbiByZXR1cm5lZCB2YWx1ZSBpcyB1bmRlZmluZWRcclxuICAgIGlmIChyZXR2YWwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAvLyBhc3N1bWUgcHJldlZhbHVlIGlzIGJlaW5nIG11dGF0ZWQgKGUuZyBhIG5ldyBpdGVtIGlzIHB1c2hlZCB0byBsaXN0KVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB1cGRhdGVWYWx1ZSh0YXJnZXQsIHJldHZhbCk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChcclxuICAgIHBhcnRpYWwgPT09IHRydWUgJiZcclxuICAgICEhdGFyZ2V0VmFsdWUgJiZcclxuICAgIHR5cGVvZiB0YXJnZXRWYWx1ZSA9PT0gJ29iamVjdCcgJiZcclxuICAgICEhbmV3VmFsdWUgJiZcclxuICAgIHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ29iamVjdCdcclxuICApIHtcclxuICAgIGxldCBiID0gZmFsc2U7XHJcbiAgICBjb25zdCBzdGFjazogYW55W10gPSBbW3RhcmdldFZhbHVlLCBuZXdWYWx1ZV1dO1xyXG4gICAgY29uc3QgbWVyZ2VkID0gbmV3IFNldDxhbnk+KCk7XHJcbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBbdGFyZ2V0VmFsdWUsIHNvdXJjZVZhbHVlXSA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICBpZiAoIW1lcmdlZC5hZGQodGFyZ2V0VmFsdWUpKVxyXG4gICAgICAgIC8vIHN0b3AgcmVjdXJzaW9uXHJcbiAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICBmb3IgKGxldCBwcm9wIGluIHNvdXJjZVZhbHVlKSB7XHJcbiAgICAgICAgY29uc3Qgc291cmNlUHJvcFZhbHVlID0gc291cmNlVmFsdWVbcHJvcF07XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0UHJvcFZhbHVlID0gdGFyZ2V0VmFsdWVbcHJvcF07XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgc291cmNlUHJvcFZhbHVlID09PSB0YXJnZXRQcm9wVmFsdWUgfHxcclxuICAgICAgICAgIHR5cGVvZiB0YXJnZXRQcm9wVmFsdWUgPT09ICdmdW5jdGlvbidcclxuICAgICAgICApXHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICB0YXJnZXRQcm9wVmFsdWUgJiZcclxuICAgICAgICAgIHR5cGVvZiB0YXJnZXRQcm9wVmFsdWUgPT09ICdvYmplY3QnICYmXHJcbiAgICAgICAgICBzb3VyY2VQcm9wVmFsdWUgJiZcclxuICAgICAgICAgIHR5cGVvZiBzb3VyY2VQcm9wVmFsdWUgPT09ICdvYmplY3QnXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBzdGFjay5wdXNoKFt0YXJnZXRQcm9wVmFsdWUsIHNvdXJjZVByb3BWYWx1ZV0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAodGFyZ2V0UHJvcFZhbHVlICE9PSBzb3VyY2VQcm9wVmFsdWUpIHtcclxuICAgICAgICAgICAgdGFyZ2V0VmFsdWVbcHJvcF0gPSBzb3VyY2VQcm9wVmFsdWU7XHJcbiAgICAgICAgICAgIGIgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGI7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRhcmdldC52YWx1ZSA9IG5ld1ZhbHVlIGFzIGFueTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNGdW5jdGlvbihmbjogYW55KTogZm4gaXMgKGE6IGFueSkgPT4gYW55IHtcclxuICByZXR1cm4gdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nO1xyXG59XHJcbiIsImltcG9ydCB7IElEcml2ZXIsIGRpc3Bvc2VNYW55IH0gZnJvbSBcImdsb3cuanNcIjtcclxuaW1wb3J0IHsgYXNUZW1wbGF0ZSwgZmxhdFRyZWUsIHJlbmRlciwgcmVuZGVyTWFueSB9IGZyb20gXCJnbG93LmpzL2xpYi90cGxcIjtcclxuaW1wb3J0IHsgVmlld0NvbnRleHQsIGNyZWF0ZVJvdXRlciwgUm91dGVyLCBSZXNvbHZlZCB9IGZyb20gXCIuLi9yb3V0ZXJcIjtcclxuaW1wb3J0IFwiLi9vdXRsZXQuc2Nzc1wiO1xyXG5pbXBvcnQgKiBhcyBSeCBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgKiBhcyBSbyBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgVXJsSGVscGVyLCBOYXZpZ2F0b3IgfSBmcm9tIFwiLi4vcm91dGVyL3VybC1oZWxwZXJcIjtcclxuXHJcbmludGVyZmFjZSBSb3V0ZXJPdXRsZXRQcm9wczxUVmlldz4ge1xyXG4gIHJvdXRlcjogUm91dGVyPFRWaWV3PjtcclxuICBsb2FkZXI/OiBhbnk7XHJcbiAgb25SZXNvbHZlZD86IChwYXRoczogc3RyaW5nW11bXSkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJvdXRlck91dGxldDxUVmlldz4oXHJcbiAgcHJvcHM6IFJvdXRlck91dGxldFByb3BzPFRWaWV3PixcclxuICBjaGlsZHJlbjogYW55W11cclxuKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHJlbmRlcihkcml2ZXI6IElEcml2ZXIpIHtcclxuICAgICAgY29uc3QgY2hpbGRSb3V0ZXMkID0gbmV3IFJ4LkJlaGF2aW9yU3ViamVjdDxzdHJpbmdbXT4oW10pO1xyXG4gICAgICBjb25zdCB7IHJvdXRlciwgb25SZXNvbHZlZCB9ID0gcHJvcHM7XHJcbiAgICAgIGNvbnN0IHN1YnNjID0gcm91dGVyLnN0YXJ0KGV4ZWN1dGVWaWV3KS5zdWJzY3JpYmUoe1xyXG4gICAgICAgIG5leHQoW3ZpZXdSZXN1bHRzLCByZW1haW5pbmddKSB7XHJcbiAgICAgICAgICBjaGlsZFJvdXRlcyQubmV4dChyZW1haW5pbmcpO1xyXG5cclxuICAgICAgICAgIGlmICh0eXBlb2Ygb25SZXNvbHZlZCAhPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZpZXdSZXN1bHRzKSAmJiB2aWV3UmVzdWx0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIG9uUmVzb2x2ZWQodmlld1Jlc3VsdHMubWFwKChlKSA9PiBlLnVybC5wYXRoKSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvblJlc29sdmVkKFtdKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBkaXNwb3NlKCkge1xyXG4gICAgICAgICAgc3Vic2MudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgZnVuY3Rpb24gZXhlY3V0ZVZpZXcocmVzb2x1dGlvbjogUmVzb2x2ZWQ8dW5rbm93bj4sIHVybDogVXJsSGVscGVyKSB7XHJcbiAgICAgICAgY29uc3QgeyB2aWV3LCBwYXJhbXMgfSA9IHJlc29sdXRpb247XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB7XHJcbiAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICBwYXJhbXMsXHJcbiAgICAgICAgICBjaGlsZFJvdXRlcihtYXApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVJvdXRlcihyb3V0ZXIubmF2aWdhdG9yLCBjaGlsZFJvdXRlcyQsIG1hcCwgdGhpcyk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgdGVtcGxhdGVzID0gZmxhdFRyZWUoWy4uLmNoaWxkcmVuLCB2aWV3XSwgKGl0ZW0pID0+XHJcbiAgICAgICAgICBhcHBseUNoaWxkKGl0ZW0sIGNvbnRleHQpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBzY29wZSA9IGRyaXZlci5jcmVhdGVTY29wZSgpO1xyXG4gICAgICAgIGNvbnN0IGJpbmRpbmdzID0gcmVuZGVyKFxyXG4gICAgICAgICAgc2NvcGUsXHJcbiAgICAgICAgICB3aXRoTG9hZGVyKHRlbXBsYXRlcywgcHJvcHMubG9hZGVyIHx8IFwibG9hZGluZy4uLlwiKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgICAgIGRpc3Bvc2VNYW55KGJpbmRpbmdzKTtcclxuICAgICAgICAgICAgc2NvcGUuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5Q2hpbGQoY2hpbGQsIGNvbnRleHQ6IFZpZXdDb250ZXh0KSB7XHJcbiAgcmV0dXJuIHR5cGVvZiBjaGlsZCA9PT0gXCJmdW5jdGlvblwiID8gY2hpbGQoY29udGV4dCkgOiBjaGlsZDtcclxufVxyXG5cclxuZnVuY3Rpb24gd2l0aExvYWRlcih0ZW1wbGF0ZXM6IGFueVtdLCBsb2FkZXI6IGFueSkge1xyXG4gIGNvbnN0IHByb21pc2VzID0gdGVtcGxhdGVzLmZpbHRlcihpc1Byb21pc2UpO1xyXG4gIGlmIChwcm9taXNlcy5sZW5ndGggPT0gMCkge1xyXG4gICAgcmV0dXJuIHRlbXBsYXRlcztcclxuICB9XHJcblxyXG4gIHJldHVybiBhc1RlbXBsYXRlKFJ4LmZvcmtKb2luKHByb21pc2VzKS5waXBlKFJvLnN0YXJ0V2l0aChsb2FkZXIpKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzUHJvbWlzZSh4KTogeCBpcyBQcm9taXNlPGFueT4ge1xyXG4gIHJldHVybiAhIXggJiYgdHlwZW9mIHgudGhlbiA9PSBcImZ1bmN0aW9uXCI7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgUnggZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0ICogYXMgUm8gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IGNvbXBpbGVQYXRoVGVtcGxhdGUsIFBhdGhUZW1wbGF0ZSB9IGZyb20gXCIuL3BhdGgtdGVtcGxhdGVcIjtcclxuaW1wb3J0IHsgVXJsSGVscGVyIH0gZnJvbSBcIi4vdXJsLWhlbHBlclwiO1xyXG5cclxudHlwZSBQYXRoID0gc3RyaW5nW107XHJcblxyXG5pbnRlcmZhY2UgUm91dGVQYXJhbXMge1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFJvdXRlU2VnbWVudCB7XHJcbiAgcGF0aDogUGF0aDtcclxuICBwYXJhbXM6IFJvdXRlUGFyYW1zO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlPFRWaWV3PiB7XHJcbiAgbWF0Y2gocGF0aDogUGF0aCk6IFJvdXRlU2VnbWVudDtcclxuICB2aWV3PzogVFZpZXc7XHJcbiAgcmVzb2x2ZT86IFZpZXdSZXNvbHZlcjxUVmlldz47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVEZXNjcmlwdG9yPFRWaWV3PiB7XHJcbiAgcGF0aDogUGF0aFRlbXBsYXRlO1xyXG4gIHZpZXc/OiBUVmlldztcclxuICByb3V0ZXM/OiBSb3V0ZUlucHV0PFRWaWV3PltdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlckNvbXBvbmVudDxUVmlldyA9IHVua25vd24+IHtcclxuICB2aWV3OiBUVmlldztcclxuICByb3V0ZXM/OiBSb3V0ZUlucHV0PFRWaWV3PltdO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ29tcG9uZW50Um91dGU8VFZpZXc+IHtcclxuICBwYXRoOiBQYXRoO1xyXG4gIGNvbXBvbmVudDogKCkgPT4gUm91dGVyQ29tcG9uZW50PFRWaWV3PjtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNSb3V0ZURlc2NyaXB0b3IodmFsdWU6IGFueSk6IHZhbHVlIGlzIFJvdXRlRGVzY3JpcHRvcjxhbnk+IHtcclxuICByZXR1cm4gdmFsdWUgJiYgXCJwYXRoXCIgaW4gdmFsdWU7XHJcbn1cclxuZnVuY3Rpb24gaXNSb3V0ZSh2YWx1ZTogYW55KTogdmFsdWUgaXMgUm91dGU8YW55PiB7XHJcbiAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZS5tYXRjaCA9PT0gXCJmdW5jdGlvblwiO1xyXG59XHJcbmZ1bmN0aW9uIGlzQ29tcG9uZW50Um91dGUodmFsdWU6IGFueSk6IHZhbHVlIGlzIENvbXBvbmVudFJvdXRlPGFueT4ge1xyXG4gIHJldHVybiBcImNvbXBvbmVudFwiIGluIHZhbHVlO1xyXG59XHJcbmV4cG9ydCB0eXBlIFJvdXRlSW5wdXQ8VFZpZXc+ID1cclxuICB8IFJvdXRlRGVzY3JpcHRvcjxUVmlldz5cclxuICB8IFJvdXRlPFRWaWV3PlxyXG4gIHwgQ29tcG9uZW50Um91dGU8VFZpZXc+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBWaWV3UmVzdWx0IHtcclxuICB1cmw6IFVybEhlbHBlcjtcclxuICByZXN1bHQ6IERpc3Bvc2FibGU7XHJcbn1cclxuXHJcbmludGVyZmFjZSBEaXNwb3NhYmxlIHtcclxuICBkaXNwb3NlKCk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFZpZXdSZXNvbHV0aW9uPFRWaWV3PiA9IFJlc29sdmVkPFRWaWV3PiB8IE5vdEZvdW5kO1xyXG5leHBvcnQgaW50ZXJmYWNlIFJlc29sdmVkPFRWaWV3PiB7XHJcbiAgYXBwbGllZFBhdGg6IHN0cmluZ1tdO1xyXG4gIHBhcmFtcz86IFJvdXRlUGFyYW1zO1xyXG4gIHZpZXc6IFRWaWV3IHwgbnVsbDtcclxuICByZXNvbHZlPzogVmlld1Jlc29sdmVyPFRWaWV3PjtcclxufVxyXG5cclxuaW50ZXJmYWNlIE5vdEZvdW5kIHtcclxuICBhcHBsaWVkUGF0aDogc3RyaW5nW107XHJcbn1cclxuXHJcbnR5cGUgVmlld1Jlc29sdmVyPFRWaWV3PiA9IChyb3V0ZTogc3RyaW5nW10pID0+IFByb21pc2U8Vmlld1Jlc29sdXRpb248VFZpZXc+PjtcclxudHlwZSBMaW5rZWRMaXN0PFQ+ID0ge1xyXG4gIGhlYWQ6IFQ7XHJcbiAgdGFpbD86IExpbmtlZExpc3Q8VD47XHJcbn07XHJcblxyXG5mdW5jdGlvbiBpc1ZpZXdSZXNvbHZlcih2YWx1ZTogYW55KTogdmFsdWUgaXMgVmlld1Jlc29sdmVyPGFueT4ge1xyXG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIjtcclxufVxyXG5cclxuZnVuY3Rpb24gcGF0aE1hdGNoZXIocGF0aFRlbXBsYXRlOiBQYXRoVGVtcGxhdGUpIHtcclxuICBjb25zdCBtYXRjaGVycyA9IGNvbXBpbGVQYXRoVGVtcGxhdGUocGF0aFRlbXBsYXRlKTtcclxuICByZXR1cm4gKHBhdGg6IFBhdGgpID0+IHtcclxuICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBwYXRoVGVtcGxhdGU7XHJcbiAgICBpZiAobGVuZ3RoID09PSAwICYmIHBhdGgubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBtYXRjaCA9IG1hdGNoZXJzW2ldKHBhdGhbaV0pO1xyXG4gICAgICBpZiAoIW1hdGNoKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH0gZWxzZSBpZiAobWF0Y2ggIT09IHRydWUpIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHBhcmFtcywgbWF0Y2gpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogc2VsZixcclxuICAgICAgcGF0aDogcGF0aC5zbGljZSgwLCBsZW5ndGgpLFxyXG4gICAgICBwYXJhbXMsXHJcbiAgICB9O1xyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlPFRWaWV3PihcclxuICBwYXRoOiBQYXRoVGVtcGxhdGUsXHJcbiAgdmlldzogVFZpZXcsXHJcbiAgcm91dGVzPzogUm91dGVJbnB1dDxUVmlldz5bXVxyXG4pOiBSb3V0ZTxUVmlldz4ge1xyXG4gIGNvbnN0IHNlbGYgPSB7XHJcbiAgICBtYXRjaDogcGF0aE1hdGNoZXIocGF0aCksXHJcbiAgICB2aWV3LFxyXG4gICAgcmVzb2x2ZTogY3JlYXRlVmlld1Jlc29sdmVyKHJvdXRlcyksXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHNlbGY7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHRyYXZlcnNlPFRWaWV3PihcclxuICByZW1haW5pbmdQYXRoOiBQYXRoLFxyXG4gIHJlc29sdmU6IFZpZXdSZXNvbHZlcjxUVmlldz5cclxuKTogUHJvbWlzZTxMaW5rZWRMaXN0PFJlc29sdmVkPFRWaWV3Pj4+IHtcclxuICBpZiAoIXJlc29sdmUpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzb2x2ZShyZW1haW5pbmdQYXRoKTtcclxuICBpZiAoXCJ2aWV3XCIgaW4gcmVzdWx0KSB7XHJcbiAgICBpZiAocmVzdWx0LmFwcGxpZWRQYXRoLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGhlYWQ6IHJlc3VsdCxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBoZWFkOiByZXN1bHQsXHJcbiAgICAgIHRhaWw6IGF3YWl0IHRyYXZlcnNlKFxyXG4gICAgICAgIHJlbWFpbmluZ1BhdGguc2xpY2UocmVzdWx0LmFwcGxpZWRQYXRoLmxlbmd0aCksXHJcbiAgICAgICAgcmVzdWx0LnJlc29sdmVcclxuICAgICAgKSxcclxuICAgIH07XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBWaWV3Q29udGV4dCB7XHJcbiAgdXJsOiBVcmxIZWxwZXI7XHJcbiAgcGFyYW1zOiBSb3V0ZVBhcmFtcztcclxuICBjaGlsZFJvdXRlcjxUVmlldz4oXHJcbiAgICBtYXA6IFZpZXdSZXNvbHZlcjxUVmlldz4gfCBSb3V0ZUlucHV0PFRWaWV3PltdXHJcbiAgKTogUm91dGVyPFRWaWV3PjtcclxufVxyXG5cclxudHlwZSBWaWV3RXhlY3V0b3I8VFZpZXc+ID0gKFxyXG4gIHJlc29sdXRpb246IFZpZXdSZXNvbHV0aW9uPFRWaWV3PixcclxuICB1cmw6IFVybEhlbHBlclxyXG4pID0+IERpc3Bvc2FibGU7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJyb3dzZXIge1xyXG4gIHJvdXRlczogUnguT2JzZXJ2YWJsZTxQYXRoPjtcclxuICBleGVjdXRlKHBhdGg6IHN0cmluZ1tdKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJyb3dzZXIodmlydHVhbFBhdGg6IFBhdGgpOiBCcm93c2VyIHtcclxuICByZXR1cm4ge1xyXG4gICAgcm91dGVzOiBSeC50aW1lcigwLCA1MCkucGlwZShcclxuICAgICAgUm8ubWFwKCgpID0+IGxvY2F0aW9uLnBhdGhuYW1lKSxcclxuICAgICAgUm8uZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcclxuICAgICAgUm8ubWFwKChwYXRobmFtZTogc3RyaW5nKSA9PiBwYXRobmFtZS5zcGxpdChcIi9cIikuZmlsdGVyKCh4KSA9PiAhIXgpKSxcclxuICAgICAgUm8uZmlsdGVyKChyb3V0ZSkgPT4gc3RhcnRzV2l0aChyb3V0ZSwgdmlydHVhbFBhdGgpKSxcclxuICAgICAgUm8ubWFwKChyb3V0ZSkgPT4gcm91dGUuc2xpY2UodmlydHVhbFBhdGgubGVuZ3RoKSlcclxuICAgICksXHJcbiAgICBleGVjdXRlKHBhdGg6IHN0cmluZ1tdKSB7XHJcbiAgICAgIHB1c2hQYXRoKHBhdGguam9pbihcIi9cIikpO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdGFydHNXaXRoKHJvdXRlOiBQYXRoLCBiYXNlOiBQYXRoKSB7XHJcbiAgaWYgKGJhc2UubGVuZ3RoID09PSAwKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgaWYgKGJhc2UubGVuZ3RoID4gcm91dGUubGVuZ3RoKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYmFzZS5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHBhdGhDb21wYXJlKGJhc2VbaV0sIHJvdXRlW2ldKSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlO1xyXG5cclxuICBmdW5jdGlvbiBwYXRoQ29tcGFyZShwcmV2OiBhbnksIG5leHQ6IGFueSkge1xyXG4gICAgaWYgKHByZXYgIT09IG5leHQpIHtcclxuICAgICAgaWYgKHR5cGVvZiBwcmV2ID09PSBcInN0cmluZ1wiKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICBpZiAocHJldi50b1N0cmluZygpICE9PSBuZXh0KSByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlcjxUVmlldz4ge1xyXG4gIHN0YXJ0KGV4ZWN1dG9yOiBWaWV3RXhlY3V0b3I8VFZpZXc+KTogUnguT2JzZXJ2YWJsZTxbVmlld1Jlc3VsdFtdLCBQYXRoXT47XHJcbiAgcGFyZW50Q29udGV4dDogUm91dGVyQ29udGV4dDtcclxuICBuYXZpZ2F0b3I6IE5hdmlnYXRvcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIE5hdmlnYXRvciB7XHJcbiAgZXhlY3V0ZShwYXRoOiBzdHJpbmdbXSk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBSb3V0ZXJDb250ZXh0IHtcclxuICB1cmw6IFVybEhlbHBlcjtcclxuICBuYXZpZ2F0b3I6IE5hdmlnYXRvcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJvdXRlcjxUVmlldz4oXHJcbiAgbmF2aWdhdG9yOiBOYXZpZ2F0b3IsXHJcbiAgcm91dGVzJDogUnguT2JzZXJ2YWJsZTxQYXRoPixcclxuICBtYXBwaW5nOiBWaWV3UmVzb2x2ZXI8VFZpZXc+IHwgUm91dGVJbnB1dDxUVmlldz5bXSxcclxuICBwYXJlbnRDb250ZXh0PzogUm91dGVyQ29udGV4dFxyXG4pIHtcclxuICBjb25zdCB2aWV3UmVzb2x2ZXIgPSBpc1ZpZXdSZXNvbHZlcihtYXBwaW5nKVxyXG4gICAgPyBtYXBwaW5nXHJcbiAgICA6IGNyZWF0ZVZpZXdSZXNvbHZlcihtYXBwaW5nKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIG5hdmlnYXRvcixcclxuICAgIHBhcmVudENvbnRleHQsXHJcbiAgICBzdGFydChleGVjdXRvcjogVmlld0V4ZWN1dG9yPFRWaWV3Pikge1xyXG4gICAgICByZXR1cm4gc3RhcnRSb3V0ZXIocm91dGVzJCwgdmlld1Jlc29sdmVyKS5waXBlKFxyXG4gICAgICAgIFJvLnNjYW4oY3JlYXRlU2Nhbm5lcihleGVjdXRvciwgcGFyZW50Q29udGV4dCksIFtbXSwgW11dKVxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICB0eXBlIFJvdXRlUmVzb2x1dGlvbiA9IFtcclxuICAgIExpbmtlZExpc3Q8UmVzb2x2ZWQ8VFZpZXc+PixcclxuICAgIExpbmtlZExpc3Q8UmVzb2x2ZWQ8VFZpZXc+PixcclxuICAgIFBhdGhcclxuICBdO1xyXG4gIGZ1bmN0aW9uIGNyZWF0ZVNjYW5uZXIoXHJcbiAgICBleGVjdXRvcjogVmlld0V4ZWN1dG9yPFRWaWV3PixcclxuICAgIHBhcmVudENvbnRleHQ6IFJvdXRlckNvbnRleHRcclxuICApIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiBzY2FuKFxyXG4gICAgICBbcHJldl06IFtWaWV3UmVzdWx0W10sIFBhdGhdLFxyXG4gICAgICBuZXh0OiBSb3V0ZVJlc29sdXRpb25cclxuICAgICk6IFtWaWV3UmVzdWx0W10sIFBhdGhdIHtcclxuICAgICAgY29uc3QgW3VuY2hhbmdlZCwgYWRkZWQsIHJlbWFpbmluZ10gPSBuZXh0O1xyXG4gICAgICBjb25zdCBvZmZzZXQgPSBsZW5ndGgodW5jaGFuZ2VkKTtcclxuICAgICAgY29uc3QgZW50cmllcyA9IHByZXYuc2xpY2UoMCwgb2Zmc2V0KTtcclxuICAgICAgZm9yIChsZXQgaSA9IG9mZnNldDsgaSA8IHByZXYubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBjdXJyID0gcHJldltpXTtcclxuICAgICAgICBpZiAoY3Vyci5yZXN1bHQpIHtcclxuICAgICAgICAgIGN1cnIucmVzdWx0LmRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbWFwKGFkZGVkLCBleGVjdXRlKTtcclxuXHJcbiAgICAgIHJldHVybiBbZW50cmllcywgcmVtYWluaW5nXTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIGV4ZWN1dGUocmVzOiBSZXNvbHZlZDxUVmlldz4sIGlkeDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50RW50cnkgPSBlbnRyaWVzW2lkeCArIG9mZnNldCAtIDFdO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IG5ldyBVcmxIZWxwZXIoXHJcbiAgICAgICAgICBuYXZpZ2F0b3IsXHJcbiAgICAgICAgICByZXMuYXBwbGllZFBhdGgsXHJcbiAgICAgICAgICAocGFyZW50RW50cnkgJiYgcGFyZW50RW50cnkudXJsKSB8fFxyXG4gICAgICAgICAgICAocGFyZW50Q29udGV4dCAmJiBwYXJlbnRDb250ZXh0LnVybClcclxuICAgICAgICApO1xyXG4gICAgICAgIGVudHJpZXNbaWR4ICsgb2Zmc2V0XSA9IHtcclxuICAgICAgICAgIHVybCxcclxuICAgICAgICAgIHJlc3VsdDogZXhlY3V0b3IocmVzLCB1cmwpLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzdGFydFJvdXRlcjxUVmlldz4oXHJcbiAgcm91dGVzJDogUnguT2JzZXJ2YWJsZTxQYXRoPixcclxuICByb290UmVzb2x2ZTogVmlld1Jlc29sdmVyPFRWaWV3PlxyXG4pIHtcclxuICBsZXQgcHJldjogTGlua2VkTGlzdDxSZXNvbHZlZDxUVmlldz4+ID0gbnVsbDtcclxuICByZXR1cm4gcm91dGVzJC5waXBlKFxyXG4gICAgUm8uY29uY2F0TWFwKGFzeW5jIChyb3V0ZSkgPT4ge1xyXG4gICAgICBjb25zdCB7IHVuY2hhbmdlZCwgcmVtYWluaW5nUm91dGUsIHJlc29sdmUgfSA9XHJcbiAgICAgICAgdW5jaGFuZ2VkUmVzb2x1dGlvbnM8VFZpZXc+KHJvdXRlLCBwcmV2KTtcclxuICAgICAgY29uc3QgbmV3UmVzb2x1dGlvbnMgPSBhd2FpdCB0cmF2ZXJzZShcclxuICAgICAgICByZW1haW5pbmdSb3V0ZSxcclxuICAgICAgICByZXNvbHZlIHx8IHJvb3RSZXNvbHZlXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBwcmV2ID0gY29uY2F0KHVuY2hhbmdlZCwgbmV3UmVzb2x1dGlvbnMpO1xyXG4gICAgICBjb25zdCBhcHBsaWVkTGVuZ3RoID0gcmVkdWNlKChwLCBuKSA9PiBwICsgbi5hcHBsaWVkUGF0aC5sZW5ndGgsIHByZXYsIDApO1xyXG5cclxuICAgICAgY29uc3QgcmVtYWluaW5nUGF0aCA9IHJvdXRlLnNsaWNlKGFwcGxpZWRMZW5ndGgpO1xyXG4gICAgICByZXR1cm4gW3VuY2hhbmdlZCwgbmV3UmVzb2x1dGlvbnMsIHJlbWFpbmluZ1BhdGhdO1xyXG4gICAgfSksXHJcbiAgICBSby5zaGFyZSgpXHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdW5jaGFuZ2VkUmVzb2x1dGlvbnM8VFZpZXc+KFxyXG4gIHJvdXRlOiBzdHJpbmdbXSxcclxuICBwcmV2bGlzdDogTGlua2VkTGlzdDxSZXNvbHZlZDxUVmlldz4+XHJcbik6IHtcclxuICByZW1haW5pbmdSb3V0ZTogUGF0aDtcclxuICB1bmNoYW5nZWQ/OiBMaW5rZWRMaXN0PFJlc29sdmVkPFRWaWV3Pj47XHJcbiAgcmVzb2x2ZT86IFZpZXdSZXNvbHZlcjxUVmlldz47XHJcbn0ge1xyXG4gIGlmICghcHJldmxpc3QpIHtcclxuICAgIHJldHVybiB7IHJlbWFpbmluZ1JvdXRlOiByb3V0ZSB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBoZWFkIH0gPSBwcmV2bGlzdDtcclxuICBpZiAoaXNWYWxpZFJlc29sdXRpb24oaGVhZCwgcm91dGUpKSB7XHJcbiAgICBjb25zdCB7IHVuY2hhbmdlZCwgcmVtYWluaW5nUm91dGUsIHJlc29sdmUgfSA9IHVuY2hhbmdlZFJlc29sdXRpb25zPFRWaWV3PihcclxuICAgICAgcm91dGUuc2xpY2UoaGVhZC5hcHBsaWVkUGF0aC5sZW5ndGgpLFxyXG4gICAgICBwcmV2bGlzdC50YWlsXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdW5jaGFuZ2VkOiBjb25zKGhlYWQsIHVuY2hhbmdlZCksXHJcbiAgICAgIHJlbWFpbmluZ1JvdXRlLFxyXG4gICAgICByZXNvbHZlOiByZXNvbHZlIHx8IGhlYWQucmVzb2x2ZSxcclxuICAgIH07XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlbWFpbmluZ1JvdXRlOiByb3V0ZSxcclxuICAgICAgcmVzb2x2ZTogaGVhZC5yZXNvbHZlLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzVmFsaWRSZXNvbHV0aW9uPFRWaWV3PihcclxuICByZXN1bHQ6IFZpZXdSZXNvbHV0aW9uPFRWaWV3PixcclxuICByZW1haW5pbmdQYXRoOiBzdHJpbmdbXVxyXG4pOiBib29sZWFuIHtcclxuICBpZiAoIXJlbWFpbmluZ1BhdGggfHwgcmVtYWluaW5nUGF0aC5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlmIChyZXN1bHQgJiYgXCJ2aWV3XCIgaW4gcmVzdWx0KSB7XHJcbiAgICBjb25zdCB7IGFwcGxpZWRQYXRoIH0gPSByZXN1bHQ7XHJcbiAgICBpZiAoYXBwbGllZFBhdGgubGVuZ3RoID09PSAwICYmIHJlbWFpbmluZ1BhdGgubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFwcGxpZWRQYXRoLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChhcHBsaWVkUGF0aFtpXSAhPT0gcmVtYWluaW5nUGF0aFtpXSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZpZXdSZXNvbHZlcjxUVmlldz4oXHJcbiAgcm91dGVzOiBSb3V0ZUlucHV0PFRWaWV3PltdXHJcbik6IFZpZXdSZXNvbHZlcjxUVmlldz4ge1xyXG4gIGlmIChpc0FycmF5RW1wdHkocm91dGVzKSkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb21waWxlZCA9IGNvbXBpbGUocm91dGVzKTtcclxuICBpZiAoaXNBcnJheUVtcHR5KGNvbXBpbGVkKSkge1xyXG4gICAgcmV0dXJuIChyZW1haW5pbmdQYXRoKSA9PiB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmU8Vmlld1Jlc29sdXRpb248VFZpZXc+Pih7XHJcbiAgICAgICAgYXBwbGllZFBhdGg6IHJlbWFpbmluZ1BhdGgsXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICB9XHJcbiAgcmV0dXJuIChyZW1haW5pbmdQYXRoOiBzdHJpbmdbXSkgPT4ge1xyXG4gICAgZm9yIChjb25zdCByb3V0ZSBvZiBjb21waWxlZCkge1xyXG4gICAgICBjb25zdCBzZWdtZW50ID0gcm91dGUubWF0Y2gocmVtYWluaW5nUGF0aCk7XHJcbiAgICAgIGlmIChzZWdtZW50KSB7XHJcbiAgICAgICAgY29uc3QgeyB2aWV3IH0gPSByb3V0ZTtcclxuICAgICAgICBjb25zdCBhcHBsaWVkUGF0aCA9IHNlZ21lbnQucGF0aDtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlPFZpZXdSZXNvbHV0aW9uPFRWaWV3Pj4oe1xyXG4gICAgICAgICAgYXBwbGllZFBhdGgsXHJcbiAgICAgICAgICB2aWV3LFxyXG4gICAgICAgICAgcGFyYW1zOiBzZWdtZW50LnBhcmFtcyxcclxuICAgICAgICAgIHJlc29sdmU6IHJvdXRlLnJlc29sdmUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IG5vdEZvdW5kOiBOb3RGb3VuZCA9IHtcclxuICAgICAgYXBwbGllZFBhdGg6IHJlbWFpbmluZ1BhdGgsXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShub3RGb3VuZCk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gY29tcGlsZShyb3V0ZXM6IFJvdXRlSW5wdXQ8VFZpZXc+W10pOiBSb3V0ZTxUVmlldz5bXSB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBSb3V0ZTxUVmlldz5bXSA9IFtdO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkocm91dGVzKSkge1xyXG4gICAgICBmb3IgKGNvbnN0IHJvdXRlIG9mIHJvdXRlcykge1xyXG4gICAgICAgIGlmIChpc1JvdXRlRGVzY3JpcHRvcihyb3V0ZSkpIHtcclxuICAgICAgICAgIGlmIChpc0NvbXBvbmVudFJvdXRlKHJvdXRlKSkge1xyXG4gICAgICAgICAgICByZXN1bHRzLnB1c2goZnJvbUNvbXBvbmVudFJvdXRlKHJvdXRlLnBhdGgsIHJvdXRlLmNvbXBvbmVudCkpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKGNyZWF0ZVJvdXRlKHJvdXRlLnBhdGgsIHJvdXRlLnZpZXcsIHJvdXRlLnJvdXRlcykpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoaXNSb3V0ZShyb3V0ZSkpIHtcclxuICAgICAgICAgIHJlc3VsdHMucHVzaChyb3V0ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJ1bnN1cHBvcnRlZCByb3V0ZVwiLCByb3V0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0cztcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQXJyYXlFbXB0eShhcnI6IGFueVtdKSB7XHJcbiAgcmV0dXJuICFBcnJheS5pc0FycmF5KGFycikgfHwgYXJyLmxlbmd0aCA9PT0gMDtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwPFQsIFU+KFxyXG4gIGxpc3Q6IExpbmtlZExpc3Q8VD4sXHJcbiAgcHJvamVjdDogKHQ6IFQsIGluZGV4PzogbnVtYmVyLCBzb3VyY2U/OiBMaW5rZWRMaXN0PFQ+KSA9PiBVXHJcbik6IExpbmtlZExpc3Q8VT4ge1xyXG4gIHJldHVybiBfbWFwKGxpc3QsIDApO1xyXG5cclxuICBmdW5jdGlvbiBfbWFwKGw6IExpbmtlZExpc3Q8VD4sIGluZGV4OiBudW1iZXIpIHtcclxuICAgIGlmICghbCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGhlYWQ6IHByb2plY3QobC5oZWFkLCBpbmRleCwgbGlzdCksXHJcbiAgICAgIHRhaWw6IF9tYXAobC50YWlsLCBpbmRleCArIDEpLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxhc3Q8VD4obGlzdDogTGlua2VkTGlzdDxUPik6IExpbmtlZExpc3Q8VD4ge1xyXG4gIGlmICghbGlzdCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIGlmIChsaXN0LnRhaWwpIHtcclxuICAgIHJldHVybiBsYXN0KGxpc3QudGFpbCk7XHJcbiAgfVxyXG4gIHJldHVybiBsaXN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb25zPFQ+KGhlYWQ6IFQsIHRhaWw6IExpbmtlZExpc3Q8VD4pOiBMaW5rZWRMaXN0PFQ+IHtcclxuICByZXR1cm4geyBoZWFkLCB0YWlsIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbmNhdDxUPih4OiBMaW5rZWRMaXN0PFQ+LCB5OiBMaW5rZWRMaXN0PFQ+KTogTGlua2VkTGlzdDxUPiB7XHJcbiAgaWYgKCF4KSB7XHJcbiAgICByZXR1cm4geTtcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIGhlYWQ6IHguaGVhZCxcclxuICAgIHRhaWw6IHgudGFpbCA/IGNvbmNhdCh4LnRhaWwsIHkpIDogeSxcclxuICB9O1xyXG59XHJcblxyXG50eXBlIFJlZHVjZUNhbGxCYWNrPFQsIFU+ID0gKHByZXY6IFUsIG5leHQ6IFQsIGlkeDogbnVtYmVyKSA9PiBVO1xyXG5mdW5jdGlvbiByZWR1Y2U8VCwgVT4oXHJcbiAgY2FsbGJhY2s6IFJlZHVjZUNhbGxCYWNrPFQsIFU+LFxyXG4gIGxpc3Q6IExpbmtlZExpc3Q8VD4sXHJcbiAgc2VlZDogVVxyXG4pOiBVIHtcclxuICBpZiAoIWxpc3QpIHtcclxuICAgIHJldHVybiBzZWVkO1xyXG4gIH1cclxuICBsZXQgcmVzdWx0ID0gc2VlZDtcclxuICBsZXQgbCA9IGxpc3Q7XHJcbiAgbGV0IGlkeCA9IDA7XHJcbiAgd2hpbGUgKGwpIHtcclxuICAgIHJlc3VsdCA9IGNhbGxiYWNrKHJlc3VsdCwgbC5oZWFkLCBpZHgrKyk7XHJcbiAgICBsID0gbC50YWlsO1xyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBsZW5ndGg8VD4oeDogTGlua2VkTGlzdDxUPik6IG51bWJlciB7XHJcbiAgaWYgKCF4KSB7XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcbiAgcmV0dXJuIDEgKyBsZW5ndGgoeC50YWlsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwZW5kPFQ+KGhlYWQ6IFQsIGxpc3Q6IExpbmtlZExpc3Q8VD4pOiBMaW5rZWRMaXN0PFQ+IHtcclxuICBpZiAoIWxpc3QpIHtcclxuICAgIHJldHVybiB7IGhlYWQgfTtcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIGhlYWQ6IGxpc3QuaGVhZCxcclxuICAgIHRhaWw6IGFwcGVuZChoZWFkLCBsaXN0LnRhaWwpLFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHppcDxTLCBULCBSPihcclxuICBsZWZ0OiBMaW5rZWRMaXN0PFM+LFxyXG4gIHJpZ2h0OiBMaW5rZWRMaXN0PFQ+LFxyXG4gIHByb2plY3Q6ICh4OiBTLCB5OiBUKSA9PiBSXHJcbik6IExpbmtlZExpc3Q8Uj4ge1xyXG4gIGlmICghbGVmdCB8fCAhcmlnaHQpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbnMoXHJcbiAgICBwcm9qZWN0KGxlZnQuaGVhZCwgcmlnaHQuaGVhZCksXHJcbiAgICB6aXAobGVmdC50YWlsLCByaWdodC50YWlsLCBwcm9qZWN0KVxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVtcHR5PFQ+KCkge1xyXG4gIHJldHVybiBudWxsIGFzIExpbmtlZExpc3Q8VD47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1lbW9pemU8VEYgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IGFueT4oZm46IFRGKSB7XHJcbiAgbGV0IHJlc3VsdCA9IG51bGw7XHJcbiAgbGV0IGludm9rZWQgPSBmYWxzZTtcclxuICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3M6IFBhcmFtZXRlcnM8VEY+KTogUmV0dXJuVHlwZTxURj4ge1xyXG4gICAgaWYgKGludm9rZWQpIHtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIGludm9rZWQgPSB0cnVlO1xyXG4gICAgcmV0dXJuIChyZXN1bHQgPSBmbigpKTtcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBmcm9tQ29tcG9uZW50Um91dGU8VFZpZXc+KFxyXG4gIHBhdGg6IFBhdGhUZW1wbGF0ZSxcclxuICBjb21wb25lbnQ6ICgpID0+IFJvdXRlckNvbXBvbmVudDxUVmlldz5cclxuKTogUm91dGU8VFZpZXcgfCBSb3V0ZXJDb21wb25lbnQ8VFZpZXc+PiB7XHJcbiAgY29uc3QgbWVtID0gbWVtb2l6ZSgoKSA9PiB7XHJcbiAgICBjb25zdCBjb21wID0gdHlwZW9mIGNvbXBvbmVudCA9PT0gXCJmdW5jdGlvblwiID8gY29tcG9uZW50KCkgOiBjb21wb25lbnQ7XHJcbiAgICBjb25zdCB2aWV3ID0gXCJ2aWV3XCIgaW4gY29tcCA/IGNvbXAudmlldyA6IGNvbXA7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB2aWV3LFxyXG4gICAgICByZXNvbHZlOiBjcmVhdGVWaWV3UmVzb2x2ZXIoY29tcC5yb3V0ZXMpLFxyXG4gICAgfTtcclxuICB9KTtcclxuICByZXR1cm4ge1xyXG4gICAgbWF0Y2g6IHBhdGhNYXRjaGVyKHBhdGgpLFxyXG4gICAgZ2V0IHZpZXcoKSB7XHJcbiAgICAgIHJldHVybiBtZW0oKS52aWV3O1xyXG4gICAgfSxcclxuICAgIGdldCByZXNvbHZlKCkge1xyXG4gICAgICByZXR1cm4gbWVtKCkucmVzb2x2ZTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNTYW1lUmVzb2x1dGlvbjxUVmlldz4oeDogUmVzb2x2ZWQ8VFZpZXc+LCB5OiBSZXNvbHZlZDxUVmlldz4pIHtcclxuICBpZiAoeC52aWV3ID09PSBudWxsIHx8IHkudmlldyA9PT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaWYgKHgudmlldyAhPT0geS52aWV3KSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAoeC5hcHBsaWVkUGF0aC5sZW5ndGggIT09IHkuYXBwbGllZFBhdGgubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHguYXBwbGllZFBhdGgubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmICh4LmFwcGxpZWRQYXRoW2ldICE9PSB5LmFwcGxpZWRQYXRoW2ldKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwdXNoUGF0aChwYXRobmFtZTogc3RyaW5nKSB7XHJcbiAgbGV0IHsgcGF0aG5hbWU6IG9sZCB9ID0gd2luZG93LmxvY2F0aW9uO1xyXG5cclxuICBpZiAob2xkICsgXCIvXCIgPT09IHBhdGhuYW1lKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlcGxhY2VTdGF0ZVwiLCBwYXRobmFtZSk7XHJcbiAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgbnVsbCwgcGF0aG5hbWUpO1xyXG4gIH0gZWxzZSBpZiAob2xkICE9PSBwYXRobmFtZSkge1xyXG4gICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIHBhdGhuYW1lKTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gY29uc29sZS5lcnJvcihcInNhbWUgYXMgXCIsIHBhdGhuYW1lKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIExpbmtMaXN0ZW5lcigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXR0YWNoVG8oZG9tOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYWRkQ2xpY2tMaXN0ZW5lcihkb20pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDbGlja0xpc3RlbmVyKHNlbGVjdG9yczogc3RyaW5nIHwgSFRNTEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IHRhcmdldCA9XHJcbiAgICAgICAgdHlwZW9mIHNlbGVjdG9ycyA9PT0gXCJzdHJpbmdcIlxyXG4gICAgICAgICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JzKVxyXG4gICAgICAgICAgICA6IHNlbGVjdG9ycztcclxuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcm91dGVyQ2xpY2spO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkaXNwb3NlKCkge1xyXG4gICAgICAgICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJvdXRlckNsaWNrKTtcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiByb3V0ZXJDbGljayhldmVudDogYW55KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCkge1xyXG4gICAgICAgICAgICBsZXQgYW5jaG9yOiBIVE1MQW5jaG9yRWxlbWVudCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiYVwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChhbmNob3IgJiYgYW5jaG9yLmNsYXNzTGlzdC5jb250YWlucyhcInJvdXRlci1saW5rXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaHJlZiA9IGFuY2hvci5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBocmVmICYmXHJcbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yW1wicGF0aG5hbWVcIl0gJiZcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5ob3N0ID09PSBhbmNob3JbXCJob3N0XCJdXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXRobmFtZSA9IGFuY2hvcltcInBhdGhuYW1lXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIHB1c2hQYXRoKHBhdGhuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyByb3V0ZXIuZXhlY3V0ZShwYXRobmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3ViamVjdC5uZXh0KHBhdGhuYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHB1c2hQYXRoKHBhdGhuYW1lOiBzdHJpbmcpIHtcclxuICAgIGxldCB7IHBhdGhuYW1lOiBvbGQgfSA9IHdpbmRvdy5sb2NhdGlvbjtcclxuXHJcbiAgICBpZiAob2xkICsgXCIvXCIgPT09IHBhdGhuYW1lKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXBsYWNlU3RhdGVcIiwgcGF0aG5hbWUpO1xyXG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBudWxsLCBwYXRobmFtZSk7XHJcbiAgICB9IGVsc2UgaWYgKG9sZCAhPT0gcGF0aG5hbWUpIHtcclxuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgcGF0aG5hbWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBjb25zb2xlLmVycm9yKFwic2FtZSBhcyBcIiwgcGF0aG5hbWUpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCB0eXBlIFNlZ21lbnRNYXRjaGVyID0gKHM6IHN0cmluZykgPT4gYm9vbGVhbiB8IHsgW286IHN0cmluZ106IGFueSB9O1xyXG5leHBvcnQgdHlwZSBTZWdtZW50ID0gUmVnRXhwIHwgc3RyaW5nIHwgU2VnbWVudE1hdGNoZXI7XHJcbmV4cG9ydCB0eXBlIFBhdGhUZW1wbGF0ZSA9IFNlZ21lbnRbXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlUGF0aFRlbXBsYXRlKHBhdGhUZW1wbGF0ZTogUGF0aFRlbXBsYXRlKSB7XHJcbiAgLy8gY29tcGlsZSBwYXRoIHRlbXBsYXRlXHJcbiAgdmFyIHNlZ21lbnRNYXRjaGVyczogU2VnbWVudE1hdGNoZXJbXSA9IFtdO1xyXG4gIGZvciAoY29uc3Qgc2VnbWVudCBvZiBwYXRoVGVtcGxhdGUpIHtcclxuICAgIGlmICh0eXBlb2Ygc2VnbWVudCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICBzZWdtZW50TWF0Y2hlcnMucHVzaChmcm9tU3RyaW5nKHNlZ21lbnQpKTtcclxuICAgIH0gZWxzZSBpZiAoc2VnbWVudCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xyXG4gICAgICBzZWdtZW50TWF0Y2hlcnMucHVzaChzZWdtZW50LnRlc3QpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2VnbWVudE1hdGNoZXJzLnB1c2goc2VnbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBzZWdtZW50TWF0Y2hlcnM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZyb21TdHJpbmcoc2VnbWVudDogc3RyaW5nKTogU2VnbWVudE1hdGNoZXIge1xyXG4gIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoXCI6XCIpKSB7XHJcbiAgICBjb25zdCBwcm9wTmFtZSA9IHNlZ21lbnQuc3Vic3RyaW5nKDEpO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHM6IHN0cmluZykge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIFtwcm9wTmFtZV06IHMsXHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oczogc3RyaW5nKSB7XHJcbiAgICAgIHJldHVybiBzID09IHNlZ21lbnQ7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRvciB7XHJcbiAgZXhlY3V0ZShwYXRoOiBzdHJpbmdbXSk7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVybEhlbHBlciB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgbmF2aWdhdG9yOiBOYXZpZ2F0b3IsXHJcbiAgICBwdWJsaWMgcGF0aDogc3RyaW5nW10sXHJcbiAgICBwdWJsaWMgcGFyZW50PzogVXJsSGVscGVyXHJcbiAgKSB7fVxyXG5cclxuICBzdHJpbmdpZnkoLi4ucGF0aDogc3RyaW5nW10pIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGZ1bGxQYXRoKHRoaXMpO1xyXG4gICAgcmVzdWx0LnB1c2guYXBwbHkocmVzdWx0LCBwYXRoKTtcclxuICAgIHJldHVybiBcIi9cIiArIHJlc3VsdC5qb2luKFwiL1wiKTtcclxuICB9XHJcblxyXG4gIHJvdXRlKC4uLnBhdGg6IHN0cmluZ1tdKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBmdWxsUGF0aCh0aGlzKTtcclxuICAgIHJlc3VsdC5wdXNoLmFwcGx5KHJlc3VsdCwgcGF0aCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGUgPSAoLi4ucGF0aDogc3RyaW5nW10pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlID0gdGhpcy5yb3V0ZSguLi5wYXRoKTtcclxuICAgIHRoaXMubmF2aWdhdG9yLmV4ZWN1dGUocm91dGUpO1xyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZ1bGxQYXRoKHVybDogVXJsSGVscGVyKSB7XHJcbiAgY29uc3Qgc3RhY2s6IFVybEhlbHBlcltdID0gW107XHJcbiAgd2hpbGUgKHVybCkge1xyXG4gICAgc3RhY2sucHVzaCh1cmwpO1xyXG4gICAgdXJsID0gdXJsLnBhcmVudDtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlc3VsdDogc3RyaW5nW10gPSBbXTtcclxuICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XHJcbiAgICBjb25zdCBjdXJyID0gc3RhY2sucG9wKCk7XHJcbiAgICByZXN1bHQucHVzaC5hcHBseShyZXN1bHQsIGN1cnIucGF0aCk7XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuIiwiaW1wb3J0IHRwbCBmcm9tIFwiZ2xvdy5qc1wiO1xyXG5pbXBvcnQgSWYgZnJvbSBcImdsb3cuanMvY29tcG9uZW50cy9pZlwiO1xyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJnbG93LmpzL2xpYi9mcmFnbWVudFwiO1xyXG5pbXBvcnQgVGltZVRhYmxlLCB7XHJcbiAgICBUaW1lVGFibGVEYXRhLFxyXG4gICAgdGltZVVuaXQsXHJcbn0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvdGltZS10YWJsZVwiO1xyXG5pbXBvcnQgZ3JvdXBCeSBmcm9tIFwiLi4vLi4vLi4vY29yZS9ncm91cC1ieVwiO1xyXG5pbXBvcnQge1xyXG4gICAgRW1wbG95ZWUsXHJcbiAgICBmZXRjaFN1cHBseSxcclxuICAgIGZ1bGxOYW1lLFxyXG4gICAgaXNJblJhbmdlLFxyXG4gICAgUG9zaXRpb24sXHJcbn0gZnJvbSBcIi4uL3NlcnZpY2VzL3BsYW5uaW5nXCI7XHJcblxyXG5pbnRlcmZhY2UgUGxhbm5pbmdQcm9wcyB7XHJcbiAgICBwb3NpdGlvbnM6IFByb21pc2U8UG9zaXRpb25bXT47XHJcbiAgICBlbXBsb3llZXM6IFByb21pc2U8RW1wbG95ZWVbXT47XHJcbn1cclxuXHJcbmludGVyZmFjZSBFbXBsb3llZUNlbGwge1xyXG4gICAgZGVsdGE6IG51bWJlcjtcclxuICAgIHBvc2l0aW9uOiBzdHJpbmc7XHJcbiAgICBzdXBwbHk6IG51bWJlcjtcclxuICAgIGhhc1NoaWZ0OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBQbGFubmluZ0J5QWdlbnRzKHByb3BzOiBQbGFubmluZ1Byb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgPGhlYWRlciBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGdhcDogMTJweDtcIj5cclxuICAgICAgICAgICAgICAgIFBsYW5uaW5nIEJ5IEFnZW50c1xyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICA8VGltZVRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQb3NpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgcm93cz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGdldFJvd3MoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBwcm9wcy5lbXBsb3llZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBwcm9wcy5wb3NpdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjZWxsQ29udGVudFRlbXBsYXRlPXtjZWxsVGVtcGxhdGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICk7XHJcblxyXG4gICAgZnVuY3Rpb24gY2VsbFRlbXBsYXRlKGNlbGw6IEVtcGxveWVlQ2VsbCkge1xyXG4gICAgICAgIGlmICghY2VsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0Y1wiIGNsYXNzX2Q9XCIhYz8uYXZhaWxhYmxlXCIgbmdJZj1cIml0ZW0uY2hpbGRyZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBuZ0lmPVwiIXJvdy50b2dnbGVkXCI+e2NlbGwuc3VwcGx5IHx8IG51bGx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiXCIgbmdJZj1cInJvdy50b2dnbGVkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRjXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc19kPVwiIWM/LmF2YWlsYWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NfYWJzZW50PVwiYz8uYWJzZW50XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc19vdmVyc3RheT1cIm1heFN0YW5kaW5nVGltZUVuYWJsZWQgJiYgYz8ub3ZlcnN0YXkgPT0gMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3Nfb3ZlcnN0YXlfcG9zaXRpb249XCJtYXhQb3NpdGlvblN0YW5kaW5nVGltZUVuYWJsZWQgJiYgYz8ub3ZlcnN0YXkgPT0gMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3Nfc3Vic3RpdHV0ZT1cImM/LnN1YnN0aXR1dGVNb2RlXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc190YXJnZXQ9XCJjPy5zdWJzdGl0dXRlTW9kZSA9PT0gMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3Nfbm9fc2hvdz1cImM/LnN0YXR1cyA9PSAnTm9TaG93J1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVfYmFja2dyb3VuZD1cImM/LmhpZ2hsaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmdJZj1cIiFpdGVtLmNoaWxkcmVuXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicG9zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmdJZj1cImM/LnBvc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0VG9vbHRpcD1cImhpZGRlblBsYW5JbmRpY2F0b3JFbmFibGVkICYmICEhZ2V0VG9vbHRpcChpdGVtLCBpKT8gZ2V0VG9vbHRpcChpdGVtLCBpKTogYz8udG9vbHRpcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgaGlkZGVuLXBsYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmdJZj1cImhpZGRlblBsYW5JbmRpY2F0b3JFbmFibGVkICYmICEhZ2V0VG9vbHRpcChpdGVtLCBpKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHlfb2ZmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJZiBjb25kaXRpb249eyEhY2VsbC5wb3NpdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y2VsbC5wb3NpdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJZiBjb25kaXRpb249e2NlbGwuZGVsdGEgPiAwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPXtbXCJkZWx0YVwiLCBjZWxsLmRlbHRhICYmIFwib3ZlcmZsb3dcIl19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjZWxsLmRlbHRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicmVtYXJrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdFRvb2x0aXA9XCJjPy5yZW1hcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmdJZj1cImM/LnJlbWFya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFJvd3MoZW1wbG95ZWVzOiBFbXBsb3llZVtdLCBwb3NpdGlvbnM6IFBvc2l0aW9uW10pIHtcclxuICAgIGNvbnN0IHN1cHBseSA9IGF3YWl0IGZldGNoU3VwcGx5KCk7XHJcblxyXG4gICAgY29uc3Qgcm93czogVGltZVRhYmxlRGF0YTxFbXBsb3llZUNlbGw+W10gPSBbXTtcclxuICAgIGNvbnN0IGdyb3VwcyA9IGdyb3VwQnkoXHJcbiAgICAgICAgc3VwcGx5LFxyXG4gICAgICAgIChlKSA9PiBlLmVtcGxveWVlSWQsXHJcbiAgICAgICAgKGssIHMpID0+ICh7XHJcbiAgICAgICAgICAgIGtleTogayxcclxuICAgICAgICAgICAgZW1wbG95ZWU6IGVtcGxveWVlcy5maW5kKChlKSA9PiBlLmlkID09IGspLFxyXG4gICAgICAgICAgICBpdGVtczogW3NdLFxyXG4gICAgICAgIH0pXHJcbiAgICApO1xyXG4gICAgZ3JvdXBzLnNvcnQoKHgsIHkpID0+XHJcbiAgICAgICAgZW1wbG95ZWVOYW1lKHguZW1wbG95ZWUpLmxvY2FsZUNvbXBhcmUoZW1wbG95ZWVOYW1lKHkuZW1wbG95ZWUpKVxyXG4gICAgKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIGdyb3Vwcykge1xyXG4gICAgICAgIGNvbnN0IGVtcGwgPSBncm91cC5lbXBsb3llZTtcclxuICAgICAgICBpZiAoZW1wbCkge1xyXG4gICAgICAgICAgICBjb25zdCBlbXBsb3llZVN1cHBseSA9IHN1cHBseS5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAoZSkgPT4gZS5lbXBsb3llZUlkID09PSBlbXBsLmlkICYmICEhZS5wb3NpdGlvbklkXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICByb3dzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaWRlbnRpZmllcjogZ3JvdXAua2V5LFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IGZ1bGxOYW1lKGVtcGwpLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVzKGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydCA9IGhvdXIgKiA2MCArIG1pbnV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbmQgPSBzdGFydCArIHRpbWVVbml0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdXBwbHkgPSBlbXBsb3llZVN1cHBseS5maWx0ZXIoKGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzSW5SYW5nZShlLnRpbWVMaW5lLCBzdGFydCwgZW5kKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHN1cHBseVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoZSkgPT4gZ2V0U2hvcnRoYW5kKHBvc2l0aW9ucywgZS5wb3NpdGlvbklkKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKFwiLFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBseTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFzU2hpZnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbXBsLnNoaWZ0cy5maWx0ZXIoKGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJblJhbmdlKGUudGltZUxpbmUsIHN0YXJ0LCBlbmQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLmxlbmd0aCA+IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSBhcyBFbXBsb3llZUNlbGw7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYmdDb2xvcihjZWxsOiBFbXBsb3llZUNlbGwpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjZWxsLmhhc1NoaWZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIiNGRkZGRkY5MFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIiM2NjY2NjY0OVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcm93cztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U2hvcnRoYW5kKHBvc2l0aW9uczogUG9zaXRpb25bXSwgcG9zaXRpb25JZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzdGFjayA9IHBvc2l0aW9ucy5zbGljZSgwKTtcclxuICAgIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBwID0gc3RhY2sucG9wKCk7XHJcbiAgICAgICAgaWYgKHAuaWQgPT0gcG9zaXRpb25JZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcC5zaG9ydGhhbmQ7XHJcbiAgICAgICAgfSBlbHNlIGlmICghIXAuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjIG9mIHAuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVtcGxveWVlTmFtZSh4OiBFbXBsb3llZSkge1xyXG4gICAgcmV0dXJuIGZ1bGxOYW1lKHgpIHx8IFwiXCI7XHJcbn1cclxuIiwiaW1wb3J0IHRwbCBmcm9tIFwiZ2xvdy5qc1wiO1xyXG5pbXBvcnQgSWYgZnJvbSBcImdsb3cuanMvY29tcG9uZW50cy9pZlwiO1xyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJnbG93LmpzL2xpYi9mcmFnbWVudFwiO1xyXG5pbXBvcnQgVGltZVRhYmxlLCB7XHJcbiAgICBUaW1lVGFibGVEYXRhLFxyXG4gICAgdGltZVVuaXQsXHJcbn0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvdGltZS10YWJsZVwiO1xyXG5pbXBvcnQge1xyXG4gICAgRGFpbHlEZW1hbmQsXHJcbiAgICBmZXRjaERlbWFuZHMsXHJcbiAgICBmZXRjaFN1cHBseSxcclxuICAgIGlzSW5SYW5nZSxcclxuICAgIFBvc2l0aW9uLFxyXG4gICAgUG9zaXRpb25TdXBwbHksXHJcbn0gZnJvbSBcIi4uL3NlcnZpY2VzL3BsYW5uaW5nXCI7XHJcblxyXG5pbnRlcmZhY2UgUGxhbm5pbmdQcm9wcyB7XHJcbiAgICBwb3NpdGlvbnM6IFByb21pc2U8UG9zaXRpb25bXT47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIFBsYW5uaW5nUGVyUG9zaXRpb24ocHJvcHM6IFBsYW5uaW5nUHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICA8aGVhZGVyIHN0eWxlPVwiZGlzcGxheTogZmxleDsgZ2FwOiAxMnB4O1wiPlxyXG4gICAgICAgICAgICAgICAgUGxhbm5pbmcgUGVyIFBvc2l0aW9uXHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgIDxUaW1lVGFibGVcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBvc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICByb3dzPXthd2FpdCBnZXRSb3dzKGF3YWl0IHByb3BzLnBvc2l0aW9ucyl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbENvbnRlbnRUZW1wbGF0ZT17KGNlbGwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjZWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkQ6IHtjZWxsLmRlbWFuZH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElmIGNvbmRpdGlvbj17Y2VsbC5zdXBwbHkgIT09IGNlbGwuZGVtYW5kfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyb20tdGltZS10YWJsZS1jZWxsX19kZWx0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NlbGwuc3VwcGx5IC0gY2VsbC5kZW1hbmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRSb3dzKHBvc2l0aW9uczogUG9zaXRpb25bXSkge1xyXG4gICAgY29uc3Qgc3VwcGx5ID0gYXdhaXQgZmV0Y2hTdXBwbHkoKTtcclxuICAgIGNvbnN0IGRlbWFuZHMgPSBhd2FpdCBmZXRjaERlbWFuZHMoKTtcclxuICAgIGNvbnN0IHJvd3M6IFRpbWVUYWJsZURhdGE8UGxhbkNlbGw+W10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc2l0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IHBvc2l0aW9uc1tpXTtcclxuICAgICAgICBjb25zdCByb3cgPSB0b1Jvdyhwb3MpO1xyXG4gICAgICAgIGlmIChyb3cpIHtcclxuICAgICAgICAgICAgcm93cy5wdXNoKHJvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByb3dzO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRvUm93KHBvczogUG9zaXRpb24pOiBUaW1lVGFibGVEYXRhPFBsYW5DZWxsPiB7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb25TdXBwbHkgPSBzdXBwbHkuZmlsdGVyKChlKSA9PiBlLnBvc2l0aW9uSWQgPT09IHBvcy5pZCk7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb25EZW1hbmQgPSBkZW1hbmRzLmZpbmQoKGUpID0+IGUucG9zaXRpb25JZCA9PT0gcG9zLmlkKTtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHBvcy5jaGlsZHJlbi5tYXAodG9Sb3cpLmZpbHRlcigoZSkgPT4gZSAhPSBudWxsKTtcclxuICAgICAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID09IDAgJiYgcG9zaXRpb25TdXBwbHkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZGVudGlmaWVyOiBwb3MuaWQsXHJcbiAgICAgICAgICAgIGxhYmVsOiBwb3MubmFtZSxcclxuICAgICAgICAgICAgY2hpbGRyZW4sXHJcbiAgICAgICAgICAgIHZhbHVlcyhob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydCA9IGhvdXIgKiA2MCArIG1pbnV0ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVuZCA9IHN0YXJ0ICsgdGltZVVuaXQ7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbDogUGxhbkNlbGwgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VwcGx5OiBjb3VudFN1cHBseUluUmFuZ2UocG9zaXRpb25TdXBwbHksIHN0YXJ0LCBlbmQpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbWFuZDogY291bnREZW1hbmRJblJhbmdlKHBvc2l0aW9uRGVtYW5kLCBzdGFydCwgZW5kKSxcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCEhY2VsbC5kZW1hbmQgfHwgISFjZWxsLnN1cHBseSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjZWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiZ0NvbG9yKGNlbGwpIHtcclxuICAgICAgICAgICAgICAgIGlmICghY2VsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBzdXBwbHkgfSA9IGNlbGw7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3VwcGx5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGByZ2JhKDI1NSwwLDAsJHswLjAzICogTWF0aC5hYnMoc3VwcGx5KX0pYDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY291bnRTdXBwbHlJblJhbmdlKFxyXG4gICAgcG9zaXRpb25TdXBwbHk6IFBvc2l0aW9uU3VwcGx5W10sXHJcbiAgICBzdGFydDogbnVtYmVyLFxyXG4gICAgZW5kOiBudW1iZXJcclxuKSB7XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG5cclxuICAgIGZvciAoY29uc3QgcGwgb2YgcG9zaXRpb25TdXBwbHkpIHtcclxuICAgICAgICBpZiAoIWlzSW5SYW5nZShwbC50aW1lTGluZSwgc3RhcnQsIGVuZCkpIGNvbnRpbnVlO1xyXG4gICAgICAgIGNvdW50Kys7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvdW50O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY291bnREZW1hbmRJblJhbmdlKFxyXG4gICAgZGVtYW5kOiBEYWlseURlbWFuZCxcclxuICAgIHN0YXJ0VGltZTogbnVtYmVyLFxyXG4gICAgZW5kVGltZTogbnVtYmVyXHJcbikge1xyXG4gICAgbGV0IHJlc3VsdCA9IDA7XHJcbiAgICBpZiAoZGVtYW5kKSB7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IHRpbWVUb0luZGV4KHN0YXJ0VGltZSk7XHJcbiAgICAgICAgY29uc3QgZW5kSW5kZXggPSB0aW1lVG9JbmRleChlbmRUaW1lKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRJbmRleDsgaSA8IGVuZEluZGV4OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgeCA9IGRlbWFuZC52YWx1ZXNbKGkgKiB0aW1lVW5pdCkgLyA1XTtcclxuICAgICAgICAgICAgaWYgKHggPiByZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiB0aW1lVG9JbmRleCh0OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHRvdGFsTWludXRlcyA9IHQ7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcih0b3RhbE1pbnV0ZXMgLyB0aW1lVW5pdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGxhbkNlbGwge1xyXG4gICAgc3VwcGx5OiBudW1iZXI7XHJcbiAgICBkZW1hbmQ6IG51bWJlcjtcclxufVxyXG4iLCJpbXBvcnQgdHBsIGZyb20gXCJnbG93LmpzXCI7XHJcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcImdsb3cuanMvbGliL2ZyYWdtZW50XCI7XHJcbmltcG9ydCBUaW1lVGFibGUsIHsgVGltZVRhYmxlRGF0YSB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3RpbWUtdGFibGVcIjtcclxuaW1wb3J0IHsgZmV0Y2hEZW1hbmRzLCBQb3NpdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9wbGFubmluZ1wiO1xyXG5cclxuaW50ZXJmYWNlIERlbWFuZENlbGwge1xyXG4gICAgZGVtYW5kOiBudW1iZXI7XHJcbiAgICBpbXBsaWNpdD86IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFBsYW5uaW5nUHJvcHMge1xyXG4gICAgcG9zaXRpb25zOiBQcm9taXNlPFBvc2l0aW9uW10+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBEZW1hbmRQbGFubmluZyhwcm9wczogUGxhbm5pbmdQcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxoZWFkZXIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBnYXA6IDEycHg7XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWRjLWJ1dHRvbiBtZGMtYnV0dG9uLS1yYWlzZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiLS1tZGMtdGhlbWUtcHJpbWFyeTogYmx1ZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgU2V0IGRlbWFuZFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtZGMtYnV0dG9uIG1kYy1idXR0b24tLXJhaXNlZCBtZGMtYnV0dG9uLS1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiLS1tZGMtdGhlbWUtcHJpbWFyeTogcmVkXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1kYy1idXR0b25fX3JpcHBsZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1hdGVyaWFsLWljb25zIG1kYy1idXR0b25fX2ljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9va21hcmtcclxuICAgICAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGMtYnV0dG9uX19sYWJlbFwiPlVwbG9hZCBmaWxlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgIDxUaW1lVGFibGVcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBvc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICByb3dzPXthd2FpdCBnZXRSb3dzKGF3YWl0IHByb3BzLnBvc2l0aW9ucyl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2VsbENvbnRlbnRUZW1wbGF0ZT17KGNlbGwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2VsbCAmJiBjZWxsLmRlbWFuZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJvbS1kYXRhdGFibGUtY2VsbF9fY29udGVudF9fZGVsdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdERlbHRhKGNlbGwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Um93cyhwb3NpdGlvbnM6IFBvc2l0aW9uW10pIHtcclxuICAgIGNvbnN0IGRlbWFuZHMgPSBhd2FpdCBmZXRjaERlbWFuZHMoKTtcclxuICAgIGNvbnN0IHJvd3M6IFRpbWVUYWJsZURhdGE8RGVtYW5kQ2VsbD5bXSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBwb3MgPSBwb3NpdGlvbnNbaV07XHJcbiAgICAgICAgcm93cy5wdXNoKHRvUm93KHBvcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByb3dzO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRvUm93KHBvczogUG9zaXRpb24pOiBUaW1lVGFibGVEYXRhPERlbWFuZENlbGw+IHtcclxuICAgICAgICBjb25zdCBkZW1hbmQgPSBkZW1hbmRzLmZpbmQoKGUpID0+IGUucG9zaXRpb25JZCA9PT0gcG9zLmlkKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZGVudGlmaWVyOiBwb3MuaWQsXHJcbiAgICAgICAgICAgIGxhYmVsOiBwb3MubmFtZSxcclxuICAgICAgICAgICAgY2hpbGRyZW46IHBvcy5jaGlsZHJlbi5tYXAodG9Sb3cpLFxyXG4gICAgICAgICAgICB2YWx1ZXMoaG91cjogbnVtYmVyLCBtaW51dGU6IG51bWJlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkZW1hbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IE1hdGguZmxvb3IoKGhvdXIgKiA2MCArIG1pbnV0ZSkgLyA1KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZGVtYW5kLnZhbHVlc1tpZHhdIHx8IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbWFuZDogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1wbGljaXQ6IHZhbHVlIC0gMSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJnQ29sb3IoY2VsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjZWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGRlbWFuZCwgaW1wbGljaXQgfSA9IGNlbGw7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGVtYW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGltcGxpY2l0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gZGVtYW5kIC0gaW1wbGljaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWx0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGByZ2JhKDI1NSwwLDAsJHswLjAzICogTWF0aC5hYnMoZGVsdGEpfSlgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicmdiYSgwLDI1NSwwLDAuMilcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyZ2JhKDAsMjAwLDIyMiwwLjEpXCI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGltcGxpY2l0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGByZ2JhKDI1NSwwLDAsJHswLjAzICogTWF0aC5hYnMoaW1wbGljaXQpfSlgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdERlbHRhKGNlbGw6IERlbWFuZENlbGwpIHtcclxuICAgIGlmICghY2VsbCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZGVtYW5kLCBpbXBsaWNpdCB9ID0gY2VsbDtcclxuICAgIGlmICghZGVtYW5kIHx8ICFpbXBsaWNpdCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbHRhID0gKGNlbGwuZGVtYW5kIHx8IDApIC0gKGNlbGwuaW1wbGljaXQgfHwgMCk7XHJcbiAgICByZXR1cm4gZGVsdGEgPyBgKCR7ZGVsdGF9KWAgOiBudWxsO1xyXG59XHJcbiIsImltcG9ydCB0cGwgZnJvbSBcImdsb3cuanNcIjtcclxuaW1wb3J0IHsgUm91dGVyT3V0bGV0IH0gZnJvbSBcIm12Yy5qcy9vdXRsZXRcIjtcclxuaW1wb3J0IHsgUm91dGVyQ29tcG9uZW50LCBWaWV3Q29udGV4dCB9IGZyb20gXCJtdmMuanMvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlclBhZ2UgfSBmcm9tIFwiLi5cIjtcclxuaW1wb3J0IFRhYkJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90YWItYmFyXCI7XHJcbmltcG9ydCBQbGFubmluZ0J5QWdlbnRzIGZyb20gXCIuL2J5LWFnZW50c1wiO1xyXG5pbXBvcnQgVHJhY2tzUGxhbm5pbmcgZnJvbSBcIi4vdHJhY2tzXCI7XHJcbmltcG9ydCBQbGFubmluZ0J5UG9zaXRpb24gZnJvbSBcIi4vYnktcG9zaXRpb25zXCI7XHJcbmltcG9ydCBEZW1hbmRQbGFubmluZyBmcm9tIFwiLi9kZW1hbmRzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIi4uLy4uLy4uL211dGFibC5qc1wiO1xyXG5pbXBvcnQgeyBmZXRjaEVtcGxveWVlcywgZmV0Y2hQb3NpdGlvbnMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9wbGFubmluZ1wiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zcGlubmVyXCI7XHJcblxyXG5mdW5jdGlvbiBuYXYoKSB7XHJcbiAgY29uc3QgZW1wbG95ZWVzID0gZmV0Y2hFbXBsb3llZXMoKTtcclxuICBjb25zdCBwb3NpdGlvbnMgPSBmZXRjaFBvc2l0aW9ucygpO1xyXG5cclxuICByZXR1cm4gW1xyXG4gICAge1xyXG4gICAgICBwYXRoOiBbXCJkZW1hbmRzXCJdLFxyXG4gICAgICBjb21wb25lbnQ6ICgpID0+IDxEZW1hbmRQbGFubmluZyBwb3NpdGlvbnM9e3Bvc2l0aW9uc30gLz4sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwYXRoOiBbXCJwZXItcG9zaXRpb25cIl0sXHJcbiAgICAgIGNvbXBvbmVudDogKCkgPT4gPFBsYW5uaW5nQnlQb3NpdGlvbiBwb3NpdGlvbnM9e3Bvc2l0aW9uc30gLz4sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwYXRoOiBbXCJ0cmFja3NcIl0sXHJcbiAgICAgIGNvbXBvbmVudDogKCkgPT4gPFRyYWNrc1BsYW5uaW5nIHBvc2l0aW9ucz17cG9zaXRpb25zfSAvPixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHBhdGg6IFtdLFxyXG4gICAgICBjb21wb25lbnQ6ICgpID0+IChcclxuICAgICAgICA8UGxhbm5pbmdCeUFnZW50cyBlbXBsb3llZXM9e2VtcGxveWVlc30gcG9zaXRpb25zPXtwb3NpdGlvbnN9IC8+XHJcbiAgICAgICksXHJcbiAgICB9LFxyXG4gIF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBZ2VudHNQbGFubmluZygpOiBSb3V0ZXJDb21wb25lbnQge1xyXG4gIHJldHVybiB7XHJcbiAgICB2aWV3KGNvbnRleHQ6IFZpZXdDb250ZXh0KSB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRSb3V0ZSA9IG5ldyBTdG9yZTxzdHJpbmdbXT4oW10pO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSb3V0ZXJQYWdlPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvdXRlci1wYWdlX19jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxoZWFkZXIgc3R5bGU9XCJtYXgtd2lkdGg6IDkwMHB4O1wiPlxyXG4gICAgICAgICAgICAgIDxUYWJCYXIgc2VsZWN0ZWQ9e2N1cnJlbnRSb3V0ZX0gLz5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgIDxSb3V0ZXJPdXRsZXRcclxuICAgICAgICAgICAgICBvblJlc29sdmVkPXtvblJlc29sdmVkfVxyXG4gICAgICAgICAgICAgIHJvdXRlcj17Y29udGV4dC5jaGlsZFJvdXRlcihuYXYoKSl9XHJcbiAgICAgICAgICAgICAgbG9hZGVyPXs8U3Bpbm5lciAvPn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUm91dGVyUGFnZT5cclxuICAgICAgKTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIG9uUmVzb2x2ZWQocGF0aHM6IHN0cmluZ1tdW10pIHtcclxuICAgICAgICBjb25zdCBmaXJzdCA9IHBhdGhzWzBdO1xyXG4gICAgICAgIGlmIChmaXJzdCkge1xyXG4gICAgICAgICAgY3VycmVudFJvdXRlLm5leHQoZmlyc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7IGZldGNoSnNvbiB9IGZyb20gXCIuLi8uLi8uLi9jb3JlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvc2l0aW9uU3VwcGx5IHtcclxuICAgIHJlYWRvbmx5IHBvc2l0aW9uSWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IGVtcGxveWVlSWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IHRpbWVMaW5lOiBUaW1lTGluZTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFRpbWVMaW5lIHtcclxuICAgIHN0YXJ0VGltZTogbnVtYmVyO1xyXG4gICAgZW5kVGltZTogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU2hpZnQge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgdGltZUxpbmU6IFRpbWVMaW5lO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNJblJhbmdlKHRsOiBUaW1lTGluZSwgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpIHtcclxuICAgIHJldHVybiB0bC5zdGFydFRpbWUgPCBlbmQgJiYgdGwuZW5kVGltZSA+IHN0YXJ0O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrIHtcclxuICAgIGdyb3VwaW5nVHJhY2tJZDogc3RyaW5nO1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIHRyYWNrSWQ6IHN0cmluZztcclxuICAgIGVtcGxveWVlOiBFbXBsb3llZTtcclxuICAgIHRpbWVMaW5lOiBUaW1lTGluZTtcclxuICAgIHRyYWNrR3VpZDogc3RyaW5nO1xyXG4gICAgcG9zaXRpb25JZDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvc2l0aW9uIHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBzaG9ydGhhbmQ6IHN0cmluZztcclxuICAgIGRlZmF1bHRDb2xvcjogc3RyaW5nO1xyXG4gICAgY2hpbGRyZW46IFBvc2l0aW9uW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGFpbHlEZW1hbmQge1xyXG4gICAgcG9zaXRpb25JZDogc3RyaW5nO1xyXG4gICAgdmFsdWVzOiBudW1iZXJbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFbXBsb3llZSB7XHJcbiAgICBzaGlmdHM6IFNoaWZ0W107XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZnVsbE5hbWUoZTogRW1wbG95ZWUpIHtcclxuICAgIGlmICghZSB8fCAhZS5maXJzdE5hbWUgfHwgIWUubGFzdE5hbWUpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZS5maXJzdE5hbWUgKyBcIiBcIiArIGUubGFzdE5hbWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFN1cHBseSgpOiBQcm9taXNlPFBvc2l0aW9uU3VwcGx5W10+IHtcclxuICAgIHJldHVybiBmZXRjaEpzb24oXCIvcGxhbm5pbmcvcG9zaXRpb24tc3VwcGx5XCIpLnRoZW4oKGUpID0+IGUuanNvbigpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoRGVtYW5kcygpOiBQcm9taXNlPERhaWx5RGVtYW5kW10+IHtcclxuICAgIHJldHVybiBmZXRjaEpzb24oXCIvcGxhbm5pbmcvZGVtYW5kc1wiKS50aGVuKChlKSA9PiBlLmpzb24oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEVtcGxveWVlcygpOiBQcm9taXNlPEVtcGxveWVlW10+IHtcclxuICAgIHJldHVybiBmZXRjaEpzb24oXCIvcGxhbm5pbmcvZW1wbG95ZWVzXCIpLnRoZW4oKGUpID0+IGUuanNvbigpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUG9zaXRpb25zKCk6IFByb21pc2U8UG9zaXRpb25bXT4ge1xyXG4gICAgcmV0dXJuIGZldGNoSnNvbihcIi9wbGFubmluZy9wb3NpdGlvbnNcIikudGhlbigoZSkgPT4gZS5qc29uKCkpO1xyXG59XHJcbiIsImltcG9ydCB0cGwgZnJvbSBcImdsb3cuanNcIjtcclxuaW1wb3J0IENzcyBmcm9tIFwiZ2xvdy5qcy9jb21wb25lbnRzL2Nzc1wiO1xyXG5pbXBvcnQgSWYgZnJvbSBcImdsb3cuanMvY29tcG9uZW50cy9pZlwiO1xyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJnbG93LmpzL2xpYi9mcmFnbWVudFwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJDb21wb25lbnQgfSBmcm9tIFwibXZjLmpzL3JvdXRlclwiO1xyXG5pbXBvcnQgVGltZVRhYmxlLCB7XHJcbiAgVGltZVRhYmxlRGF0YSxcclxuICB0aW1lVW5pdCxcclxufSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy90aW1lLXRhYmxlXCI7XHJcbmltcG9ydCB7IGZldGNoSnNvbiB9IGZyb20gXCIuLi8uLi8uLi9jb3JlXCI7XHJcbmltcG9ydCBncm91cEJ5LCB7IEdyb3VwIH0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvZ3JvdXAtYnlcIjtcclxuaW1wb3J0IHsgZnVsbE5hbWUsIFBvc2l0aW9uLCBUcmFjayB9IGZyb20gXCIuLi9zZXJ2aWNlcy9wbGFubmluZ1wiO1xyXG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcclxuXHJcbmludGVyZmFjZSBQbGFubmluZ1Byb3BzIHtcclxuICBwb3NpdGlvbnM6IFByb21pc2U8UG9zaXRpb25bXT47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRyYWNrc1BsYW5uaW5nKHByb3BzOiBQbGFubmluZ1Byb3BzKTogUm91dGVyQ29tcG9uZW50IHtcclxuICByZXR1cm4ge1xyXG4gICAgYXN5bmMgdmlldygpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICA8aGVhZGVyIHN0eWxlPVwiZGlzcGxheTogZmxleDsgZ2FwOiAxMnB4O1wiPlBsYW5uaW5nIFBlciBUcmFjazwvaGVhZGVyPlxyXG4gICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgIDxUaW1lVGFibGVcclxuICAgICAgICAgICAgICBsYWJlbD1cIkFnZW50XCJcclxuICAgICAgICAgICAgICByb3dzPXthd2FpdCBnZXRSb3dzKGF3YWl0IHByb3BzLnBvc2l0aW9ucyl9XHJcbiAgICAgICAgICAgICAgY2VsbENvbnRlbnRUZW1wbGF0ZT17dHJhY2tDZWxsVGVtcGxhdGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gdHJhY2tDZWxsVGVtcGxhdGUoXHJcbiAgICBjZWxsOiBUcmFja0NlbGwgfCB7fSxcclxuICAgIHJvdzogVGltZVRhYmxlRGF0YTxUcmFja0NlbGw+XHJcbiAgKSB7XHJcbiAgICBpZiAocm93LmNoaWxkcmVuKSB7XHJcbiAgICAgIHJldHVybiA8Q3NzIHZhbHVlPVwiZ3JvdXBpbmctdHJhY2tcIiAvPjtcclxuICAgIH1cclxuICAgIGlmICghY2VsbCB8fCAhKFwic2hvcnRoYW5kXCIgaW4gY2VsbCkpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xhc3NMaXN0ID0gW1xyXG4gICAgICBcInRjXCIsXHJcbiAgICAgIGNlbGwuc2hvcnRoYW5kICYmIFwiZFwiLFxyXG4gICAgICBjZWxsLmFic2VudCAmJiBcImFic2VudFwiLFxyXG4gICAgICBjZWxsLnN1YnN0aXR1dGVkICYmIFwic3Vic3RpdHV0ZWRcIixcclxuICAgIF07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3M9e2NsYXNzTGlzdH1cclxuICAgICAgICBtYXRUb29sdGlwPVwiYz8udG9vbHRpcFwiXHJcbiAgICAgICAgc3R5bGU9e1wiYmFja2dyb3VuZC1jb2xvcjogXCIgKyBjZWxsLmJnQ29sb3IgKyBcIjgwXCJ9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9zXCI+XHJcbiAgICAgICAgICA8c3Bhbj57Y2VsbC5zaG9ydGhhbmR9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZWx0YVwiIG5nSWY9XCJjLmRlbHRhXCIgY2xhc3Nfb3ZlcmZsb3c9XCJjLmRlbHRhID4gMFwiPlxyXG4gICAgICAgICAgICAwXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8SWYgY29uZGl0aW9uPXshIWNlbGwucmVtYXJrfT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZW1hcmtcIiBtYXRUb29sdGlwPVwiYy5yZW1hcmtcIj5cclxuICAgICAgICAgICAgICAhXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvSWY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFJvd3MoXHJcbiAgcG9zaXRpb25zOiBQb3NpdGlvbltdXHJcbik6IFByb21pc2U8VGltZVRhYmxlRGF0YTxUcmFja0NlbGwgfCB7fT5bXT4ge1xyXG4gIGNvbnN0IHRyYWNrczogVHJhY2tbXSA9IGF3YWl0IGZldGNoSnNvbihcIi4vcGxhbm5pbmcvdHJhY2tzXCIpLnRoZW4oKGUpID0+XHJcbiAgICBlLmpzb24oKVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHBvc2l0aW9uTWFwOiB7IFtpZDogc3RyaW5nXTogUG9zaXRpb24gfSA9IHt9O1xyXG4gIGZvciAoY29uc3QgcG9zIG9mIHBvc2l0aW9ucykge1xyXG4gICAgcG9zaXRpb25NYXBbcG9zLmlkXSA9IHBvcztcclxuICB9XHJcblxyXG4gIGNvbnN0IHJvd3M6IFRpbWVUYWJsZURhdGE8VHJhY2tDZWxsIHwge30+W10gPSBbXTtcclxuXHJcbiAgY29uc3QgdHJhY2tHcm91cHM6IEdyb3VwPFRyYWNrPltdID0gZ3JvdXBCeSh0cmFja3MsIChlKSA9PiBlLmdyb3VwaW5nVHJhY2tJZCk7XHJcbiAgdHJhY2tHcm91cHMuc29ydCgoeCwgeSkgPT4geC5rZXkubG9jYWxlQ29tcGFyZSh5LmtleSkpO1xyXG5cclxuICBmb3IgKGNvbnN0IHRyYWNrR3JvdXAgb2YgdHJhY2tHcm91cHMpIHtcclxuICAgIGNvbnN0IHJvdyA9IHRvUm93KHRyYWNrR3JvdXApO1xyXG4gICAgaWYgKHJvdykge1xyXG4gICAgICByb3dzLnB1c2gocm93KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiByb3dzO1xyXG5cclxuICBmdW5jdGlvbiB0b1Jvdyh0cmFja0dyb3VwOiBHcm91cDxUcmFjaz4pOiBUaW1lVGFibGVEYXRhPFRyYWNrQ2VsbCB8IHt9PiB7XHJcbiAgICBjb25zdCBjaGlsZHJlbjogVGltZVRhYmxlRGF0YTxUcmFja0NlbGw+W10gPSBbXTtcclxuXHJcbiAgICBjb25zdCBzdWJUcmFja3MgPSBncm91cEJ5KFxyXG4gICAgICB0cmFja0dyb3VwLml0ZW1zLFxyXG4gICAgICAoZSkgPT4gZnVsbE5hbWUoZS5lbXBsb3llZSkgfHwgZS50cmFja0lkXHJcbiAgICApO1xyXG5cclxuICAgIHN1YlRyYWNrcy5zb3J0KCh4LCB5KSA9PiB4LmtleS5sb2NhbGVDb21wYXJlKHkua2V5KSk7XHJcblxyXG4gICAgZm9yIChjb25zdCBzdWJUcmFjayBvZiBzdWJUcmFja3MpIHtcclxuICAgICAgY2hpbGRyZW4ucHVzaCh7XHJcbiAgICAgICAgaWRlbnRpZmllcjogc3ViVHJhY2sua2V5LFxyXG4gICAgICAgIGxhYmVsOiBzdWJUcmFjay5rZXksXHJcbiAgICAgICAgdmFsdWVzKGg6IG51bWJlciwgbTogbnVtYmVyKTogVHJhY2tDZWxsIHtcclxuICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gaCAqIDYwICsgbTtcclxuICAgICAgICAgIGNvbnN0IGVuZCA9IHN0YXJ0ICsgdGltZVVuaXQ7XHJcblxyXG4gICAgICAgICAgZm9yIChjb25zdCBzdWIgb2Ygc3ViVHJhY2suaXRlbXMpIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgIHN1Yi50aW1lTGluZS5zdGFydFRpbWUgPj0gZW5kIHx8XHJcbiAgICAgICAgICAgICAgc3ViLnRpbWVMaW5lLmVuZFRpbWUgPD0gc3RhcnRcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgcG9zID0gcG9zaXRpb25NYXBbc3ViLnBvc2l0aW9uSWRdO1xyXG4gICAgICAgICAgICBpZiAocG9zKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHNob3J0aGFuZDogcG9zLnNob3J0aGFuZCxcclxuICAgICAgICAgICAgICAgIGFic2VudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBiZ0NvbG9yOiBwb3MuZGVmYXVsdENvbG9yLFxyXG4gICAgICAgICAgICAgICAgc3Vic3RpdHV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlkZW50aWZpZXI6IHRyYWNrR3JvdXAua2V5LFxyXG4gICAgICBiZ0NvbG9yKCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9LFxyXG4gICAgICBjaGlsZHJlbixcclxuICAgICAgbGFiZWw6IHRyYWNrR3JvdXAua2V5LFxyXG4gICAgICB2YWx1ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBUcmFja0NlbGwge1xyXG4gIGJnQ29sb3I6IHN0cmluZztcclxuICBzdWJzdGl0dXRlZDogYm9vbGVhbjtcclxuICBzaG9ydGhhbmQ6IHN0cmluZztcclxuICBhYnNlbnQ6IGJvb2xlYW47XHJcbiAgcmVtYXJrPzogc3RyaW5nO1xyXG59XHJcblxyXG5mdW5jdGlvbiByYW5kb21Db2xvcigpIHtcclxuICBjb25zdCBoZXggPSBcIjAxMjM0NTY3ODlBQkNERUZcIjtcclxuICBsZXQgcmVzdWx0ID0gXCIjXCI7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcclxuICAgIHJlc3VsdCArPSByYW5kb21DaGFyKGhleCk7XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQgKyBcIjEwXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbUNoYXIoaGV4OiBzdHJpbmcpIHtcclxuICBjb25zdCBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaGV4Lmxlbmd0aCk7XHJcbiAgcmV0dXJuIGhleFtpXTtcclxufVxyXG4iLCJpbXBvcnQgdHBsIGZyb20gXCJnbG93LmpzXCI7XHJcbmltcG9ydCB7IFJvdXRlckNvbXBvbmVudCwgVmlld0NvbnRleHQgfSBmcm9tIFwibXZjLmpzL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJQYWdlIH0gZnJvbSBcIi4uXCI7XHJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2RhdGUtcGlja2VyXCI7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdGV4dC1maWVsZFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEVtcGxveWVlcygpOiBSb3V0ZXJDb21wb25lbnQge1xyXG4gIHJldHVybiB7XHJcbiAgICB2aWV3KGNvbnRleHQ6IFZpZXdDb250ZXh0KSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJvdXRlclBhZ2U+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm91dGVyLXBhZ2VfX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGhlYWRlcj5Vc2VyczwvaGVhZGVyPlxyXG4gICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgbGFiZWw9XCJUZXh0XCIgLz5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgPERhdGVQaWNrZXIgbGFiZWw9XCJFbmQgZGF0ZVwiIC8+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUm91dGVyUGFnZT5cclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyB0cGwgfSBmcm9tIFwiZ2xvdy5qc1wiO1xyXG5pbXBvcnQgeyBJQWN0aW9uQ29udGV4dCwgSUFjdGlvbiB9IGZyb20gXCJtdmMuanNcIjtcclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwiZ2xvdy5qcy9saWIvZnJhZ21lbnRcIjtcclxuaW1wb3J0IHsgUm91dGVyT3V0bGV0IH0gZnJvbSBcIm12Yy5qcy9vdXRsZXRcIjtcclxuaW1wb3J0IHsgTURDTGlzdCB9IGZyb20gXCJAbWF0ZXJpYWwvbGlzdFwiO1xyXG5pbXBvcnQgeyBNRENEcmF3ZXIgfSBmcm9tIFwiQG1hdGVyaWFsL2RyYXdlclwiO1xyXG5pbXBvcnQgeyBNRENUb3BBcHBCYXIgfSBmcm9tIFwiQG1hdGVyaWFsL3RvcC1hcHAtYmFyXCI7XHJcbmltcG9ydCB7IGlzRG9tTm9kZSB9IGZyb20gXCJnbG93LmpzL2xpYi9kb21cIjtcclxuaW1wb3J0IHsgTG9naW4gfSBmcm9tIFwiLi4vbG9naW5cIjtcclxuaW1wb3J0ICogYXMgUnggZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0ICogYXMgUm8gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IExpbmtMaXN0ZW5lciB9IGZyb20gXCJtdmMuanMvcm91dGVyL2xpbmtcIjtcclxuaW1wb3J0IHtcclxuICBjcmVhdGVCcm93c2VyLFxyXG4gIGNyZWF0ZVJvdXRlcixcclxuICBSb3V0ZUlucHV0LFxyXG4gIFZpZXdDb250ZXh0LFxyXG59IGZyb20gXCJtdmMuanMvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgQWdlbnRzUGxhbm5pbmcgfSBmcm9tIFwiLi9hZ2VudHMtcGxhbm5pbmdcIjtcclxuaW1wb3J0IHsgRW1wbG95ZWVzIH0gZnJvbSBcIi4vZW1wbG95ZWVzXCI7XHJcbmltcG9ydCB7IEludm9pY2VzIH0gZnJvbSBcIi4vaW52b2ljZXMvaW5kZXhcIjtcclxuaW1wb3J0IHsgVXJsSGVscGVyIH0gZnJvbSBcIi4uLy4uL212Yy5qcy9yb3V0ZXIvdXJsLWhlbHBlclwiO1xyXG5pbXBvcnQgeyBNYWluTWVudUNhcmQgfSBmcm9tIFwiLi9qZW5uYWgvbWVudS1jYXJkL21haW5cIjtcclxuaW1wb3J0IERlbW9Db21wb25lbnQgZnJvbSBcIi4vamVubmFoL2RlbW9cIjtcclxuXHJcbmZ1bmN0aW9uIFRvcEJhcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzcz1cIm1kYy10b3AtYXBwLWJhciBhcHAtYmFyXCIgaWQ9XCJhcHAtYmFyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtZGMtdG9wLWFwcC1iYXJfX3Jvd1wiPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibWRjLXRvcC1hcHAtYmFyX19zZWN0aW9uIG1kYy10b3AtYXBwLWJhcl9fc2VjdGlvbi0tYWxpZ24tc3RhcnRcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBtZGMtdG9wLWFwcC1iYXJfX25hdmlnYXRpb24taWNvbiBtZGMtaWNvbi1idXR0b25cIj5cclxuICAgICAgICAgICAgbWVudVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1kYy10b3AtYXBwLWJhcl9fdGl0bGVcIj5cclxuICAgICAgICAgICAgUmVhbC10aW1lIE9wZXJhdGlvbiBNYW5hZ2VtZW50XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibWRjLXRvcC1hcHAtYmFyX19zZWN0aW9uIG1kYy10b3AtYXBwLWJhcl9fc2VjdGlvbi0tYWxpZ24tZW5kXCI+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzPVwibWRjLWljb24tYnV0dG9uIG1hdGVyaWFsLWljb25zIG1kYy10b3AtYXBwLWJhcl9fYWN0aW9uLWl0ZW0gbWRjLXJpcHBsZS11cGdyYWRlZC0tdW5ib3VuZGVkIG1kYy1yaXBwbGUtdXBncmFkZWRcIlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiRG93bmxvYWRcIlxyXG4gICAgICAgICAgICBzdHlsZT1cIi0tbWRjLXJpcHBsZS1mZy1zaXplOjI4cHg7IC0tbWRjLXJpcHBsZS1mZy1zY2FsZToxLjcxNDE4OyAtLW1kYy1yaXBwbGUtbGVmdDoxMHB4OyAtLW1kYy1yaXBwbGUtdG9wOjEwcHg7XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgc2VhcmNoXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3M9XCJtZGMtaWNvbi1idXR0b24gbWF0ZXJpYWwtaWNvbnMgbWRjLXRvcC1hcHAtYmFyX19hY3Rpb24taXRlbSBtZGMtcmlwcGxlLXVwZ3JhZGVkLS11bmJvdW5kZWQgbWRjLXJpcHBsZS11cGdyYWRlZFwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJEb3dubG9hZFwiXHJcbiAgICAgICAgICAgIHN0eWxlPVwiLS1tZGMtcmlwcGxlLWZnLXNpemU6MjhweDsgLS1tZGMtcmlwcGxlLWZnLXNjYWxlOjEuNzE0MTg7IC0tbWRjLXJpcHBsZS1sZWZ0OjEwcHg7IC0tbWRjLXJpcHBsZS10b3A6MTBweDtcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBhZGRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQXNpZGVQcm9wcyB7XHJcbiAgb3BlbjogYm9vbGVhbjtcclxuICB1cmw6IFVybEhlbHBlcjtcclxufVxyXG5mdW5jdGlvbiBBc2lkZShwcm9wczogQXNpZGVQcm9wcykge1xyXG4gIGNvbnN0IHsgdXJsIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGFzaWRlXHJcbiAgICAgIGNsYXNzPXtbXHJcbiAgICAgICAgXCJtZGMtZHJhd2VyIG1kYy1kcmF3ZXItLW1vZGFsIG1kYy10b3AtYXBwLWJhci0tZml4ZWQtYWRqdXN0XCIsXHJcbiAgICAgICAgcHJvcHMub3BlbiA/IFwibWRjLWRyYXdlci0tb3BlblwiIDogbnVsbCxcclxuICAgICAgXX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1kYy1kcmF3ZXJfX2NvbnRlbnRcIj5cclxuICAgICAgICA8bmF2IGNsYXNzPVwibWRjLWxpc3RcIiB0YWJpbmRleD1cIjBcIj5cclxuICAgICAgICAgIDxociBjbGFzcz1cIm1kYy1saXN0LWRpdmlkZXJcIiAvPlxyXG4gICAgICAgICAgPE1haW5MaW5rXHJcbiAgICAgICAgICAgIHRleHQ9XCJFbXBsb3llZXNcIlxyXG4gICAgICAgICAgICB1cmw9e3VybC5zdHJpbmdpZnkoXCJlbXBsb3llZXNcIil9XHJcbiAgICAgICAgICAgIGljb249XCJncm91cFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwiZGFya2dyZWVuXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8TWFpbkxpbmtcclxuICAgICAgICAgICAgdGV4dD1cIkludm9pY2VzXCJcclxuICAgICAgICAgICAgdXJsPXt1cmwuc3RyaW5naWZ5KFwiaW52b2ljZXNcIil9XHJcbiAgICAgICAgICAgIGljb249XCJkb21haW5cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxNYWluTGlua1xyXG4gICAgICAgICAgICB0ZXh0PVwiQWdlbnRzIFBsYW5uaW5nXCJcclxuICAgICAgICAgICAgdXJsPXt1cmwuc3RyaW5naWZ5KFwiYWdlbnRzLXBsYW5uaW5nXCIpfVxyXG4gICAgICAgICAgICBpY29uPVwic2NoZWR1bGVcIlxyXG4gICAgICAgICAgICBjb2xvcj1cImJsYWNrXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8TWFpbkxpbmtcclxuICAgICAgICAgICAgdGV4dD1cIkFzc2lnbiBjYXJkIHRvIGFnZW50XCJcclxuICAgICAgICAgICAgdXJsPXt1cmwuc3RyaW5naWZ5KFwiY2FyZC1hc3NpZ25tZW50XCIpfVxyXG4gICAgICAgICAgICBpY29uPVwiY3JlZGl0X2NhcmRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxNYWluTGlua1xyXG4gICAgICAgICAgICB0ZXh0PVwiU2V0dGluZ3NcIlxyXG4gICAgICAgICAgICB1cmw9e3VybC5zdHJpbmdpZnkoXCJzZXR0aW5nc1wiKX1cclxuICAgICAgICAgICAgaWNvbj1cInNldHRpbmdzXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8TWFpbkxpbmtcclxuICAgICAgICAgICAgdGV4dD1cIkFkbWluaXN0cmF0aW9uXCJcclxuICAgICAgICAgICAgdXJsPXt1cmwuc3RyaW5naWZ5KFwic2VjdXJpdHlcIil9XHJcbiAgICAgICAgICAgIGljb249XCJzZWN1cml0eVwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aHIgY2xhc3M9XCJtZGMtbGlzdC1kaXZpZGVyXCIgLz5cclxuICAgICAgICAgIHtNRENMaXN0fVxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYXNpZGU+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJvdXRlclBhZ2UocHJvcHMsIGNoaWxkcmVuOiBhbnkpIHtcclxuICByZXR1cm4gPHNlY3Rpb24gY2xhc3M9XCJyb3V0ZXItcGFnZVwiPntjaGlsZHJlbn08L3NlY3Rpb24+O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZG1pblJvdXRlcygpIHtcclxuICByZXR1cm4gW1xyXG4gICAge1xyXG4gICAgICBwYXRoOiBbXCJhZ2VudHMtcGxhbm5pZ1wiXSxcclxuICAgICAgY29tcG9uZW50OiBBZ2VudHNQbGFubmluZyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHBhdGg6IFtcImVtcGxveWVlc1wiXSxcclxuICAgICAgY29tcG9uZW50OiBFbXBsb3llZXMsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwYXRoOiBbXCJpbnZvaWNlc1wiXSxcclxuICAgICAgY29tcG9uZW50OiBJbnZvaWNlcyxcclxuICAgIH0sXHJcbiAgXTtcclxufVxyXG5gYDtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gIGNvbnN0IGJyb3dzZXIgPSBjcmVhdGVCcm93c2VyKFtdKTtcclxuICBjb25zdCByb3V0ZXIgPSBjcmVhdGVSb3V0ZXIoYnJvd3NlciwgYnJvd3Nlci5yb3V0ZXMsIFtcclxuICAgIHsgcGF0aDogW1wiYWRtaW5cIl0sIGNvbXBvbmVudDogQWRtaW5Db21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogW1wiamVubmFoXCIsIFwiZGVtb1wiXSwgY29tcG9uZW50OiBEZW1vQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFtcIlwiXSwgY29tcG9uZW50OiBNYWluTWVudUNhcmQgfSxcclxuICBdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8TGlua0xpc3RlbmVyIC8+XHJcbiAgICAgIDxSb3V0ZXJPdXRsZXQgcm91dGVyPXtyb3V0ZXJ9IC8+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFkbWluQ29tcG9uZW50KCkge1xyXG4gIHJldHVybiB7XHJcbiAgICB2aWV3KGNvbnRleHQ6IFZpZXdDb250ZXh0KSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgPExpbmtMaXN0ZW5lciAvPlxyXG4gICAgICAgICAgPEFzaWRlIG9wZW49e2xvY2F0aW9uLnBhdGhuYW1lID09IFwiL2FkbWluXCJ9IHVybD17Y29udGV4dC51cmx9IC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRjLWRyYXdlci1zY3JpbVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1kYy1kcmF3ZXItYXBwLWNvbnRlbnRcIiBzdHlsZT1cImhlaWdodDogMTAwJTtcIj5cclxuICAgICAgICAgICAgPFRvcEJhciAvPlxyXG4gICAgICAgICAgICA8bWFpbiBjbGFzcz1cIm1haW4tY29udGVudCBtZGMtdG9wLWFwcC1iYXItLWZpeGVkLWFkanVzdCByb3V0ZXItb3V0bGV0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxSb3V0ZXJPdXRsZXQgcm91dGVyPXtjb250ZXh0LmNoaWxkUm91dGVyKGFkbWluUm91dGVzKCkpfSAvPlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxEcmF3ZXIgLz5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICApO1xyXG5cclxuICAgICAgZnVuY3Rpb24gRHJhd2VyKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBhdHRhY2hUbyhjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRyYXdlciA9IE1EQ0RyYXdlci5hdHRhY2hUbyhcclxuICAgICAgICAgICAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5tZGMtZHJhd2VyXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvcEFwcEJhciA9IE1EQ1RvcEFwcEJhci5hdHRhY2hUbyhcclxuICAgICAgICAgICAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5tZGMtdG9wLWFwcC1iYXJcIilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3QgbWFpbkNvbnRlbnRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50XCIpO1xyXG4gICAgICAgICAgICB0b3BBcHBCYXIuc2V0U2Nyb2xsVGFyZ2V0KG1haW5Db250ZW50RWwpO1xyXG4gICAgICAgICAgICB0b3BBcHBCYXIubGlzdGVuKFwiTURDVG9wQXBwQmFyOm5hdlwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgZHJhd2VyLm9wZW4gPSAhZHJhd2VyLm9wZW47XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJNRENEcmF3ZXI6Y2xvc2VkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBlbHQgPSBtYWluQ29udGVudEVsLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCwgYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICAgIGlmIChpc0RvbU5vZGUoZWx0KSkge1xyXG4gICAgICAgICAgICAgICAgZWx0LmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkNvbnRhaW5lckNsaWNrKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICBkaXNwb3NlKCkge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkNvbnRhaW5lckNsaWNrKTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBvbkNvbnRhaW5lckNsaWNrKGU6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICAgICAgICBjb25zdCB7IHRhcmdldCB9ID0gZTtcclxuICAgICAgICAgICAgICBpZiAoaXNEb21Ob2RlKHRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicm91dGVyLWxpbmtcIikpIHtcclxuICAgICAgICAgICAgICAgICAgZHJhd2VyLm9wZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dpbigpIHtcclxuICByZXR1cm4ge1xyXG4gICAgZXhlY3V0ZSgpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPExvZ2luIGNsaWNrPXsoKSA9PiB7fX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbm90Rm91bmQoY29udGV4dDogVmlld0NvbnRleHQpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzcz1cInJvdXRlci1wYWdlX19jb250ZW50XCI+XHJcbiAgICAgIDxtYWluIHN0eWxlPVwiY29sb3I6IHJlZDtcIj5OT1QgRk9VTkQge2NvbnRleHQudXJsLnBhdGguam9pbihcIi9cIil9PC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXV0aG9yaXplZChhY3Rpb246IElBY3Rpb248YW55Pikge1xyXG4gIHJldHVybiB7XHJcbiAgICBleGVjdXRlKGNvbnRleHQ6IElBY3Rpb25Db250ZXh0KSB7XHJcbiAgICAgIGNvbnN0IHN1YmplY3QgPSBuZXcgUnguU3ViamVjdCgpO1xyXG4gICAgICByZXR1cm4gc3ViamVjdC5waXBlKFxyXG4gICAgICAgIFJvLnN0YXJ0V2l0aChcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3V0ZXItcGFnZV9fY29udGVudFwiPlxyXG4gICAgICAgICAgICA8TG9naW4gY2xpY2s9e29uTG9naW59IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBmdW5jdGlvbiBvbkxvZ2luKCkge1xyXG4gICAgICAgIHN1YmplY3QubmV4dChhY3Rpb24uZXhlY3V0ZShjb250ZXh0KSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZXNvbHZlOiBhY3Rpb24ucmVzb2x2ZSxcclxuICB9O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQWN0aW9uIHtcclxuICB2aWV3KGNvbnRleHQ6IFZpZXdDb250ZXh0KTogYW55O1xyXG4gIHJvdXRlcz86IFJvdXRlSW5wdXQ8YW55PltdO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgTWFpbkxpbmtQcm9wcyB7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIGljb246IHN0cmluZztcclxuICBjb2xvcj86IHN0cmluZztcclxufVxyXG5mdW5jdGlvbiBNYWluTGluayhwcm9wczogTWFpbkxpbmtQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YSBjbGFzcz1cIm1kYy1saXN0LWl0ZW0gcm91dGVyLWxpbmtcIiBocmVmPXtwcm9wcy51cmx9IGFyaWEtY3VycmVudD1cInBhZ2VcIj5cclxuICAgICAgPGlcclxuICAgICAgICBjbGFzcz1cIm1hdGVyaWFsLWljb25zIG1kYy1saXN0LWl0ZW1fX2dyYXBoaWNcIlxyXG4gICAgICAgIHN0eWxlPXtwcm9wcy5jb2xvciAmJiBcImNvbG9yOiBcIiArIHByb3BzLmNvbG9yfVxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICB7cHJvcHMuaWNvbn1cclxuICAgICAgPC9pPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cIm1kYy1saXN0LWl0ZW1fX3RleHRcIj57cHJvcHMudGV4dH08L3NwYW4+XHJcbiAgICA8L2E+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5wdXQobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWUsXHJcbiAgICB2YWx1ZSxcclxuICAgIGJsdXIoZSkge30sXHJcbiAgfTtcclxufVxyXG5cclxuaW50ZXJmYWNlIENvbnRyb2xQcm9wcyB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcbn1cclxuZnVuY3Rpb24gQ29udHJvbChwcm9wczogQ29udHJvbFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxpbnB1dCBzdHlsZT1cImJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XCIgey4uLmlucHV0KHByb3BzLm5hbWUsIHByb3BzLnZhbHVlKX0+XHJcbiAgICAgIGJveFxyXG4gICAgPC9pbnB1dD5cclxuICApO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVG9nZ2xlQnV0dG9uUHJvcHMge31cclxuZnVuY3Rpb24gVG9nZ2xlQnV0dG9uKHByb3BzOiBUb2dnbGVCdXR0b25Qcm9wcykge1xyXG4gIHJldHVybiA8YSBjbGFzcz1cIm1kYy1idXR0b24gbWRjLWJ1dHRvbi0tb3V0bGluZVwiPnRvZ2dsZTwvYT47XHJcbn1cclxuIiwiaW1wb3J0IHsgcG9zdEpzb24sIGRlbGV0ZUpzb24sIHB1dEpzb24sIGZldGNoSnNvbiB9IGZyb20gXCIuLi8uLi9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlLCBTdGF0ZSB9IGZyb20gXCJtdXRhYmwuanNcIjtcclxuaW1wb3J0ICogYXMgUnggZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0ICogYXMgUm8gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVudGl0eTxUPiB7XHJcbiAgaWQ6IHN0cmluZztcclxuICB2YWx1ZXM6IFQ7XHJcbiAgdmVyc2lvbjogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWN0aXZlRW50aXR5PFQ+KHBhdGg6IHN0cmluZykge1xyXG4gIGNvbnN0IHVybCA9IHBhdGg7XHJcbiAgbGV0IGRlbGV0ZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3QgZW50aXR5ID0gKGF3YWl0IGZldGNoSnNvbih1cmwpXHJcbiAgICAudGhlbigoZSkgPT4gZS5qc29uKCkpXHJcbiAgICAuY2F0Y2goKF8pID0+IHt9KSkgYXMgRW50aXR5PFQ+O1xyXG5cclxuICB2YXIgc3RvcmUgPSBuZXcgU3RvcmU8VD4oZW50aXR5ICYmIGVudGl0eS52YWx1ZXMpO1xyXG4gIGxldCB2ZXJzaW9uID0gZW50aXR5ICYmIGVudGl0eS52ZXJzaW9uO1xyXG4gIHJldHVybiB7XHJcbiAgICBnZXQgdmFsdWVzKCk6IFN0YXRlPFQ+IHtcclxuICAgICAgcmV0dXJuIHN0b3JlLmFzUHJveHkoKTtcclxuICAgIH0sXHJcbiAgICByZXNldCh2YWx1ZXM6IFQpIHtcclxuICAgICAgc3RvcmUudXBkYXRlKHZhbHVlcyk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlOiAodmFsdWVzKSA9PlxyXG4gICAgICAhZGVsZXRlZFxyXG4gICAgICAgID8gcHV0SnNvbih1cmwsIHsgdmFsdWVzLCB2ZXJzaW9uIH0pLnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKVxyXG4gICAgICAgIDogUHJvbWlzZS5yZXNvbHZlKG51bGwpLCAvLyBwdXREaWZmKHVybCwgc3RvcmUudmFsdWUpLFxyXG4gICAgc2F2ZTogKCkgPT4gcG9zdEpzb24odXJsLCBzdG9yZS52YWx1ZSksXHJcbiAgICBkZWxldGU6ICgpID0+XHJcbiAgICAgIGRlbGV0ZUpzb24odXJsKS50aGVuKCgpID0+IHtcclxuICAgICAgICBkZWxldGVkID0gdHJ1ZTtcclxuICAgICAgfSksXHJcbiAgICBhdXRvVXBkYXRlKCkge1xyXG4gICAgICB2YXIgc3Vic2NyID0gbmV3IFJ4Lk9ic2VydmFibGUoc3RvcmUuc3Vic2NyaWJlKVxyXG4gICAgICAgIC5waXBlKFJvLnNraXAoMSksIFJvLmRlYm91bmNlVGltZSgxMDAwKSwgUm8uc3dpdGNoTWFwKHRoaXMudXBkYXRlKSlcclxuICAgICAgICAuc3Vic2NyaWJlKChlbnRpdHkpID0+IHtcclxuICAgICAgICAgIHZlcnNpb24gPSBlbnRpdHkudmVyc2lvbjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIG9uQmVmb3JlVW5sb2FkKGUpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZShzdG9yZS52YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsIG9uQmVmb3JlVW5sb2FkKTtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdW5zdWJzY3JpYmU6ICgpID0+IHtcclxuICAgICAgICAgIHN1YnNjci51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsIG9uQmVmb3JlVW5sb2FkKTtcclxuICAgICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZShzdG9yZS52YWx1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgdHBsIGZyb20gXCJnbG93LmpzXCI7XHJcbmltcG9ydCB7IFJvdXRlckNvbXBvbmVudCwgVmlld0NvbnRleHQgfSBmcm9tIFwibXZjLmpzL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJQYWdlIH0gZnJvbSBcIi4uXCI7XHJcbmltcG9ydCB7IFN0b3JlLCBhc0xpc3RTdG9yZSBhcyBhc0xpc3RTdG9yZSwgcHVzaEl0ZW0sIFN0YXRlIH0gZnJvbSBcIm11dGFibC5qc1wiO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NlbGVjdFwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RleHQtZmllbGRcIjtcclxuaW1wb3J0IHsgYWN0aXZlRW50aXR5LCBFbnRpdHkgfSBmcm9tIFwiLi9hY3RpdmUtZW50aXR5XCI7XHJcbmltcG9ydCB7IExpc3QgfSBmcm9tIFwiZ2xvdy5qcy9jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IGZldGNoSnNvbiB9IGZyb20gXCIuLi8uLi9jb3JlXCI7XHJcbmltcG9ydCB7IFVybEhlbHBlciB9IGZyb20gXCIuLi8uLi8uLi9tdmMuanMvcm91dGVyL3VybC1oZWxwZXJcIjtcclxuXHJcbmNvbnN0IHJpZGVyID0geyBsYWJlbDogXCJSaWRlciBJbnRlcm5hdGlvbmFsXCIsIHZhbHVlOiBcInJpZGVyXCIgfTtcclxuY29uc3QgYWxmYSA9IHsgbGFiZWw6IFwiQWxmYSBQcm8gSVRcIiwgdmFsdWU6IFwiYWxmYVwiIH07XHJcbmNvbnN0IHBhcnRlY2ggPSB7IGxhYmVsOiBcIlBhcnRlY2ggSVQgQlZcIiwgdmFsdWU6IFwicGFydGVjaFwiIH07XHJcbmNvbnN0IHIyZ3JvdXAgPSB7IGxhYmVsOiBcIlIyIEdyb3VwIEIuVi5cIiwgdmFsdWU6IFwicjJncm91cFwiIH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSW52b2ljZXMoKTogUm91dGVyQ29tcG9uZW50IHtcclxuICByZXR1cm4ge1xyXG4gICAgcm91dGVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiBbXCI6aWRcIl0sXHJcbiAgICAgICAgY29tcG9uZW50OiBJbnZvaWNlQ29tcG9uZW50LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIGFzeW5jIHZpZXcoY29udGV4dDogVmlld0NvbnRleHQpIHtcclxuICAgICAgY29uc3QgaW52b2ljZXM6IEVudGl0eTxJbnZvaWNlPltdID0gYXdhaXQgZmV0Y2hKc29uKFwiL2FwaS9pbnZvaWNlXCIpLnRoZW4oXHJcbiAgICAgICAgKGUpID0+IGUuanNvbigpXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJvdXRlclBhZ2U+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm91dGVyLXBhZ2VfX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGhlYWRlcj5JbnZvaWNlczwvaGVhZGVyPlxyXG4gICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICA8TGlzdCBzb3VyY2U9e2ludm9pY2VzfT57aW52b2ljZUxpc3RJdGVtKGNvbnRleHQudXJsKX08L0xpc3Q+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUm91dGVyUGFnZT5cclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gaW52b2ljZUxpc3RJdGVtKHVybDogVXJsSGVscGVyKSB7XHJcbiAgICByZXR1cm4gKGludm9pY2U6IEVudGl0eTxJbnZvaWNlPikgPT4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxhIGNsYXNzPVwicm91dGVyLWxpbmtcIiBocmVmPXt1cmwuc3RyaW5naWZ5KGludm9pY2UuaWQpfT5cclxuICAgICAgICAgIHtpbnZvaWNlLnZhbHVlcy5kZXNjcmlwdGlvbn1cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEludm9pY2VDb21wb25lbnQoKTogUm91dGVyQ29tcG9uZW50IHtcclxuICByZXR1cm4ge1xyXG4gICAgYXN5bmMgdmlldyhjb250ZXh0OiBWaWV3Q29udGV4dCkge1xyXG4gICAgICBjb25zdCB7IGlkIH0gPSBjb250ZXh0LnBhcmFtcztcclxuICAgICAgdmFyIGVudGl0eSA9IGF3YWl0IGFjdGl2ZUVudGl0eTxJbnZvaWNlPihcIi9hcGkvaW52b2ljZS9cIiArIGlkKTtcclxuXHJcbiAgICAgIGNvbnN0IGxpbmVzID0gYXNMaXN0U3RvcmU8SG91ckRlY2xhcmF0aW9uPihlbnRpdHkudmFsdWVzLmRlY2xhcmF0aW9ucyk7XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSb3V0ZXJQYWdlPlxyXG4gICAgICAgICAge2VudGl0eS5hdXRvVXBkYXRlKCl9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm91dGVyLXBhZ2VfX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICBGYWN0dXVyIDxzcGFuPntlbnRpdHkudmFsdWVzLmludm9pY2VOdW1iZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9e2AvYXBpL2ludm9pY2UvJHtpZH0vcGRmYH0+ZG93bmxvYWQ8L2E+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgIGxpbmVzLmFkZChcclxuICAgICAgICAgICAgICAgICAgICBwdXNoSXRlbSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICBob3VyczogbGluZXMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBpbnZvaWNlIGxpbmUgJHtsaW5lcy5sZW5ndGggKyAxfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIGFkZFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICBsaW5lcy5hZGQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicmVtb3ZlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJlZGljYXRlOiBsaW5lcy5sZW5ndGggLSAxLFxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHJlbW92ZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSW52b2ljZSBudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZW50aXR5LnZhbHVlcy5pbnZvaWNlTnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgPjwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZW50aXR5LnZhbHVlcy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgID48L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIk93bmVyXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2VudGl0eS52YWx1ZXMub3duZXJ9XHJcbiAgICAgICAgICAgICAgICA+PC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17W3IyZ3JvdXAsIHJpZGVyLCBhbGZhLCBwYXJ0ZWNoXX1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDb21wYW55XCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2VudGl0eS52YWx1ZXMuY29tcGFueUlkfVxyXG4gICAgICAgICAgICAgICAgPjwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZW50aXR5LnZhbHVlcy5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICBjaGFuZ2U9eyhldnQpID0+IGVudGl0eS52YWx1ZXMuZGF0ZS51cGRhdGUoZXZ0LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgIDxMaXN0IHNvdXJjZT17bGluZXN9PntpbnZvaWNlTGluZVZpZXd9PC9MaXN0PlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JvdXRlclBhZ2U+XHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGludm9pY2VMaW5lVmlldyhlOiBJbnZvaWNlTGluZSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8VGV4dEZpZWxkIGxhYmVsPVwiRGVzY3JpcHRpb25cIiB2YWx1ZT17ZS5kZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICA8VGV4dEZpZWxkIGxhYmVsPVwiSG91cnNcIiB2YWx1ZT17ZS5ob3Vyc30gcGFyc2U9e3BhcnNlSW50fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgSW52b2ljZUxpbmUge1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgaG91cnM6IHN0cmluZztcclxufVxyXG5pbnRlcmZhY2UgSW52b2ljZSB7XHJcbiAgaW52b2ljZU51bWJlcjogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgb3duZXI6IHN0cmluZztcclxuICBjb21wYW55SWQ6IHN0cmluZztcclxuICBkYXRlOiBzdHJpbmc7XHJcbiAgZGVjbGFyYXRpb25zOiBIb3VyRGVjbGFyYXRpb25bXTtcclxufVxyXG5cclxuaW50ZXJmYWNlIEhvdXJEZWNsYXJhdGlvbiB7XHJcbiAgaG91cnM6IG51bWJlcjtcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG59XHJcbiIsImltcG9ydCB0cGwgZnJvbSBcIi4uLy4uLy4uL2dsb3cuanNcIjtcclxuaW1wb3J0IHN2ZyBmcm9tIFwiLi9zY2FuLW1lIDIuc3ZnXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29tcG9uZW50KCkge1xyXG4gIHJldHVybiB7XHJcbiAgICB2aWV3KCkge1xyXG4gICAgICByZXR1cm4gPGltZyBzcmM9e3N2Z30+PC9pbWc+O1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7IHRwbCB9IGZyb20gXCJnbG93LmpzXCI7XHJcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcImdsb3cuanMvbGliL2ZyYWdtZW50XCI7XHJcbmltcG9ydCBDc3MgZnJvbSBcImdsb3cuanMvY29tcG9uZW50cy9jc3NcIjtcclxuaW1wb3J0IFwiLi9tZW51LWNhcmQuc2Nzc1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXJDb21wb25lbnQsIFZpZXdDb250ZXh0IH0gZnJvbSBcIm12Yy5qcy9yb3V0ZXJcIjtcclxuaW1wb3J0IHtcclxuICBhc0xpc3RTdG9yZSxcclxuICBwdXNoSXRlbSxcclxuICByZW1vdmVJdGVtLFxyXG4gIFN0YXRlLFxyXG4gIFN0b3JlLFxyXG4gIHVwZGF0ZUl0ZW0sXHJcbn0gZnJvbSBcIm11dGFibC5qc1wiO1xyXG5pbXBvcnQgeyBMaXN0IH0gZnJvbSBcImdsb3cuanMvY29tcG9uZW50cy9saXN0XCI7XHJcblxyXG5mdW5jdGlvbiBvcHRpb24odGl0bGU6IHN0cmluZyk6IFByb2R1Y3RPcHRpb24ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBcIm9wdGlvblwiLFxyXG4gICAgdGl0bGUsXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgZnJpZXQ6IFByb2R1Y3QgPSB7XHJcbiAgdGl0bGU6IFwiRnJpZXRcIixcclxuICBwcmljZTogMi41LFxyXG59O1xyXG5cclxuY29uc3QgaHVpc2ZyaWV0OiBQcm9kdWN0ID0ge1xyXG4gIHRpdGxlOiBcIkh1aXMgZnJpZXRcIixcclxuICBwcmljZTogMyxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNob2ljZSh0aXRsZTogc3RyaW5nLCBwcm9kdWN0czogUHJvZHVjdFtdKTogUHJvZHVjdENob2ljZSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFwiY2hvaWNlXCIsXHJcbiAgICB0aXRsZSxcclxuICAgIHByb2R1Y3RzLFxyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IGNvbGRkcmlua3MgPSBbXHJcbiAgeyB0aXRsZTogXCJDb2xhXCIsIHByaWNlOiAyLjUgfSxcclxuICB7IHRpdGxlOiBcIkZhbnRhXCIsIHByaWNlOiAyLjUgfSxcclxuICB7IHRpdGxlOiBcIlNwcml0ZVwiLCBwcmljZTogMi41IH0sXHJcbiAgeyB0aXRsZTogXCJCaXR0ZXIgTGVtb25cIiwgcHJpY2U6IDIuNSB9LFxyXG4gIHsgdGl0bGU6IFwiU3BhXCIsIHByaWNlOiAyLjUgfSxcclxuICB7IHRpdGxlOiBcIkdpbmdlciBBbGVcIiwgcHJpY2U6IDIuNSB9LFxyXG4gIHsgdGl0bGU6IFwiSWNlIFRlYVwiLCBwcmljZTogMi41IH0sXHJcbiAgeyB0aXRsZTogXCJSZWQgYnVsbFwiLCBwcmljZTogMyB9LFxyXG5dO1xyXG5jb25zdCBwcm9kdWN0cyA9IHtcclxuICBzdGFydGVyczogW1xyXG4gICAgeyB0aXRsZTogXCJIYXJpcmFcIiwgcHJpY2U6IDQuNSB9LFxyXG4gICAgeyB0aXRsZTogXCJCaXNhcmFcIiwgcHJpY2U6IDQuNSB9LFxyXG4gICAgeyB0aXRsZTogXCJMb2VtcGlhXCIsIHByaWNlOiAzLjUgfSxcclxuICAgIHsgdGl0bGU6IFwiVG9ydGlsbGFcIiwgcHJpY2U6IDUuMCB9LFxyXG4gICAgeyB0aXRsZTogXCJOYWNobydzXCIsIHByaWNlOiA3LjUgfSxcclxuICBdLFxyXG4gIHNhbmR3aWNoZXM6IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiS2lwIChvZiBoZXRlIGtpcClcIixcclxuICAgICAgcHJpY2U6IDYuNSxcclxuICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgIG9wdGlvbihcIkhlZXRcIiksXHJcbiAgICAgICAgY2hvaWNlKFwiRHJhbmtcIiwgZGlzY291bnQoY29sZGRyaW5rcywgMSkpLFxyXG4gICAgICAgIGNob2ljZShcIkZyaWV0XCIsIFtmcmlldCwgaHVpc2ZyaWV0XSksXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgeyB0aXRsZTogXCJLZWZ0YVwiLCBwcmljZTogNi41IH0sXHJcbiAgICB7IHRpdGxlOiBcIktpcCB0ZW5kZXJzICh2YW4gZGUgZ3JpbGwpXCIsIHByaWNlOiA3LjUgfSxcclxuICAgIHsgdGl0bGU6IFwiU2F1c2FnZSAvIE1lcnF1ZXpcIiwgcHJpY2U6IDcgfSxcclxuICAgIHsgdGl0bGU6IFwiR2FybmFsZW5cIiwgcHJpY2U6IDcuNSB9LFxyXG4gIF0sXHJcbiAgYnVyZ2VyczogW1xyXG4gICAgeyB0aXRsZTogXCJKZW5uYWggQnVyZ2VyXCIsIHByaWNlOiAxMC41LCBkZXNjcmlwdGlvbjogXCJibGFcIiB9LFxyXG4gICAgeyB0aXRsZTogXCJDaGVlc2UgQnVyZ2VyXCIsIHByaWNlOiA5IH0sXHJcbiAgICB7IHRpdGxlOiBcIktpcGZpbGV0IEJ1cmdlclwiLCBwcmljZTogOCB9LFxyXG4gICAgeyB0aXRsZTogXCJLaXBnZWhha3QgQnVyZ2VyXCIsIHByaWNlOiA4IH0sXHJcbiAgXSxcclxuICBzYWxhZHM6IFtcclxuICAgIHsgdGl0bGU6IFwiVG9uaWpuIFNhbGFkZVwiLCBwcmljZTogOCB9LFxyXG4gICAgeyB0aXRsZTogXCJDZWFzYXIgU2FsYWRlXCIsIHByaWNlOiA5IH0sXHJcbiAgICB7IHRpdGxlOiBcIlphbG0gU2FsYWRlXCIsIHByaWNlOiA5IH0sXHJcbiAgICB7IHRpdGxlOiBcIkdhcm5hbGVuIFNsYWRlXCIsIHByaWNlOiA5IH0sXHJcbiAgXSxcclxuICBjb2xkZHJpbmtzLFxyXG4gIHRhamluZXM6IFtcclxuICAgIHsgdGl0bGU6IFwiVGFqaW5lIGtpcFwiLCBwcmljZTogMTIuNSB9LFxyXG4gICAgeyB0aXRsZTogXCJUYWppbmUgVmxlZXNcIiwgcHJpY2U6IDE0LjUgfSxcclxuICAgIHsgdGl0bGU6IFwiVGFqaW5lIFBpbHBpbFwiLCBwcmljZTogMTQgfSxcclxuICAgIHsgdGl0bGU6IFwiVGFqaW5lIEtlZnRhXCIsIHByaWNlOiAxMSB9LFxyXG4gIF0sXHJcbiAgY291c2NvdXM6IFtcclxuICAgIHsgdGl0bGU6IFwiVmVnaWVcIiwgcHJpY2U6IDEwIH0sXHJcbiAgICB7IHRpdGxlOiBcIktpcFwiLCBwcmljZTogMTIgfSxcclxuICAgIHsgdGl0bGU6IFwiVmxlZXNcIiwgcHJpY2U6IDEzIH0sXHJcbiAgICB7IHRpdGxlOiBcIlJveWFhbFwiLCBwcmljZTogMTQuNSB9LFxyXG4gIF0sXHJcbiAgZGVzc2VydHM6IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiQ2hlZXNlIGNha2VcIixcclxuICAgICAgcHJpY2U6IDUuNSxcclxuICAgICAgZGVzY3JpcHRpb246IFwiSW5mb3JtZWVyIG5hYXIgb256ZSB2YXJpYXRpZXNcIixcclxuICAgIH0sXHJcbiAgICB7IHRpdGxlOiBcIlJlZHZlbHZldFwiLCBwcmljZTogNS41IH0sXHJcbiAgICB7IHRpdGxlOiBcIldvcnRlbHRhYXJ0XCIsIHByaWNlOiA1LjUgfSxcclxuICBdLFxyXG4gIGdyaWxsOiBbXHJcbiAgICB7IHRpdGxlOiBcIktpcCBGaWxldFwiLCBwcmljZTogMTMuNSB9LFxyXG4gICAgeyB0aXRsZTogXCJLYWxmcyBTcGllc1wiLCBwcmljZTogMTQgfSxcclxuICAgIHsgdGl0bGU6IFwiS2lwIFNhdGVcIiwgcHJpY2U6IDEzLjUgfSxcclxuICAgIHsgdGl0bGU6IFwiTWl4IEdyaWxsXCIsIHByaWNlOiAxNy41IH0sXHJcbiAgICB7IHRpdGxlOiBcIktlZnRhIFNjaG90ZWxcIiwgcHJpY2U6IDEzIH0sXHJcbiAgICB7IHRpdGxlOiBcIlphbG0gU2Nob3RlbFwiLCBwcmljZTogMTMgfSxcclxuICAgIHsgdGl0bGU6IFwiR2FybmFsZW4gU2Nob3RlbFwiLCBwcmljZTogMTQgfSxcclxuICAgIHsgdGl0bGU6IFwiU2F1c2FnZSAvIE1lcnF1ZXogU2Nob3RlbFwiLCBwcmljZTogMTQgfSxcclxuICBdLFxyXG4gIHBhc3RhOiBbXHJcbiAgICB7IHRpdGxlOiBcIktpcFwiLCBwcmljZTogMTIuNSB9LFxyXG4gICAgeyB0aXRsZTogXCJHYXJuYWxlbiBlbi9vZiB6YWxtXCIsIHByaWNlOiAxMy41IH0sXHJcbiAgICB7IHRpdGxlOiBcIkJvbG9nbmVzZVwiLCBwcmljZTogMTMuNSB9LFxyXG4gICAgeyB0aXRsZTogXCJBcmFiaWF0dGFcIiwgcHJpY2U6IDEwIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbnR5cGUgUHVzaE9yZGVyRXZlbnRIYW5kbGVyID0gKG86IFByb2R1Y3QsIG9wdGlvbnM/KSA9PiB2b2lkO1xyXG5pbnRlcmZhY2UgTWVudUNhbGxiYWNrcyB7XHJcbiAgb25TZWxlY3QocHJvZHVjdDogUHJvZHVjdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2R1Y3RWaWV3RmFjdG9yeShwcm9kdWN0OiBQcm9kdWN0LCBvblNlbGVjdDogUHVzaE9yZGVyRXZlbnRIYW5kbGVyKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHZpZXcoY29udGV4dDogVmlld0NvbnRleHQpIHtcclxuICAgICAgY29uc3Qgc2VsZWN0aW9uOiBPcmRlck9wdGlvbltdID0gW107XHJcbiAgICAgIGNvbnN0IHsgb3B0aW9ucyB9ID0gcHJvZHVjdDtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1kZXRhaWxcIj5cclxuICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgIHtwcm9kdWN0LnRpdGxlfVxyXG4gICAgICAgICAgICA8YSBocmVmPVwiL2plbm5haFwiIGNsYXNzPVwicm91dGVyLWxpbmsgY2xvc2UtYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgJnRpbWVzO1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LWRldGFpbF9fY29udGVudFwiPlxyXG4gICAgICAgICAgICB7b3B0aW9ucy5tYXAoKG8pID0+IG9wdGlvblZpZXcobywgc2VsZWN0aW9uKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gY2xpY2s9e2NvbXBvc2Uob25DbGljaywgY29udGV4dC51cmwucGFyZW50Lm5hdmlnYXRlKX0+XHJcbiAgICAgICAgICAgIHRvZXZvZWdlblxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICAgIGZ1bmN0aW9uIG9uQ2xpY2soKSB7XHJcbiAgICAgICAgb25TZWxlY3QocHJvZHVjdCwgWy4uLnNlbGVjdGlvbl0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIG9wdGlvblZpZXcobzogUHJvZHVjdEFkZGVuZHVtLCBzZWxlY3Rpb246IE9yZGVyT3B0aW9uW10pIHtcclxuICAgIGlmIChvLnR5cGUgPT0gXCJjaG9pY2VcIikge1xyXG4gICAgICBjb25zdCB7IHByb2R1Y3RzIH0gPSBvO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgIG5hbWU9e28udGl0bGV9XHJcbiAgICAgICAgICAgIGNoYW5nZT17KGUpID0+IHNlbGVjdGlvbi5wdXNoKHsgdGl0bGU6IGUudGFyZ2V0LnZhbHVlLCBwcmljZTogMSB9KX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlsgU2VsZWN0ZWVyIHtvLnRpdGxlfSBdPC9vcHRpb24+XHJcbiAgICAgICAgICAgIHtwcm9kdWN0cy5tYXAoKHApID0+IChcclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtwLnRpdGxlfT57cC50aXRsZX08L29wdGlvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGlkID0gXCJjaGVja2JveF9cIiArIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9e2lkfSAvPlxyXG4gICAgICAgICAgPGxhYmVsIGZvcj17aWR9PntvLnRpdGxlfTwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBkdW1teU9yZGVyOiBPcmRlciA9IHtcclxuICB0aXRsZTogXCJEdW1teSBvcmRlclwiLFxyXG4gIGNvdW50OiAzLFxyXG4gIG9wdGlvbnM6IFt7IHRpdGxlOiBcIkNvbGFcIiwgcHJpY2U6IDEgfV0sXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTWFpbk1lbnVDYXJkKCk6IFJvdXRlckNvbXBvbmVudCB7XHJcbiAgY29uc3Qgc3RvcmUgPSBuZXcgU3RvcmU8eyBvcmRlcnM6IE9yZGVyW10gfT4oe1xyXG4gICAgb3JkZXJzOiBbZHVtbXlPcmRlcl0sXHJcbiAgfSk7XHJcbiAgY29uc3Qgb3JkZXJTdG9yZSA9IGFzTGlzdFN0b3JlPE9yZGVyPihzdG9yZS5wcm9wZXJ0eShcIm9yZGVyc1wiKSk7XHJcbiAgY29uc3QgYWxsUHJvZHVjdHM6IFByb2R1Y3RbXSA9IFtdO1xyXG4gIGZvciAoY29uc3QgY2F0IGluIHByb2R1Y3RzKSB7XHJcbiAgICBhbGxQcm9kdWN0cy5wdXNoLmFwcGx5KGFsbFByb2R1Y3RzLCBwcm9kdWN0c1tjYXRdKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHB1c2hPcmRlcihwcm9kdWN0OiBQcm9kdWN0LCBvcHRpb25zOiBPcmRlck9wdGlvbltdKSB7XHJcbiAgICBjb25zdCB7IHRpdGxlIH0gPSBwcm9kdWN0O1xyXG5cclxuICAgIGNvbnN0IGluZGV4ID0gb3JkZXJTdG9yZS5wZWVrKChvcmRlcnMpID0+XHJcbiAgICAgIG9yZGVycy5maW5kSW5kZXgoXHJcbiAgICAgICAgKG8pID0+IG8udGl0bGUgPT09IHRpdGxlICYmIGVxdWFsT3JkZXJPcHRpb25zKG8ub3B0aW9ucywgb3B0aW9ucylcclxuICAgICAgKVxyXG4gICAgKTtcclxuICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgIG9yZGVyU3RvcmUuYWRkKHVwZGF0ZUl0ZW0oaW5kZXgsIChjKSA9PiBjLmNvdW50KyspKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9yZGVyU3RvcmUuYWRkKFxyXG4gICAgICAgIHB1c2hJdGVtPE9yZGVyPih7XHJcbiAgICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgICBjb3VudDogMSxcclxuICAgICAgICAgIG9wdGlvbnMsXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRlbGV0ZU9yZGVyKG9yZGVyOiBPcmRlciwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgaWYgKG9yZGVyLmNvdW50ID4gMSkgb3JkZXJTdG9yZS5hZGQodXBkYXRlSXRlbShpbmRleCwgKGMpID0+IGMuY291bnQtLSkpO1xyXG4gICAgZWxzZSBvcmRlclN0b3JlLmFkZChyZW1vdmVJdGVtKGluZGV4KSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcm91dGVzOiBhbGxQcm9kdWN0cy5tYXAoKHByKSA9PiAoe1xyXG4gICAgICBwYXRoOiBwcm9kdWN0UGF0aChwciksXHJcbiAgICAgIGNvbXBvbmVudDogcHJvZHVjdFZpZXdGYWN0b3J5KHByLCBwdXNoT3JkZXIpLFxyXG4gICAgfSkpLFxyXG4gICAgdmlldyhjb250ZXh0OiBWaWV3Q29udGV4dCkge1xyXG4gICAgICBjb25zdCBldmVudHM6IFByb2R1Y3RFdmVudHMgPSB7XHJcbiAgICAgICAgb25TZWxlY3QocHJvZHVjdDogUHJvZHVjdCkge1xyXG4gICAgICAgICAgaWYgKHByb2R1Y3Qub3B0aW9ucykge1xyXG4gICAgICAgICAgICBjb250ZXh0LnVybC5uYXZpZ2F0ZSguLi5wcm9kdWN0UGF0aChwcm9kdWN0KSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwdXNoT3JkZXIocHJvZHVjdCwgW10pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgIDxDc3MgdmFsdWU9XCJqZW5uYWhcIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRvcGJhclwiPlxyXG4gICAgICAgICAgICA8aDE+UmVzdGF1cmFudCAmIENhZmUgSmVubmFoPC9oMT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoYWxhbFwiPjEwMCUgSGFsYWw8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG9wYmFyLXdpZmlcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+cnNzX2ZlZWQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgSmVubmFoMjAyMSB8XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIHN0eWxlPVwiY29sb3I6ICMxMjhDN0VcIj5cclxuICAgICAgICAgICAgICAgIHdoYXRzYXBwXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICszMSA2IDg3MTIwMzQ4XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtY2FyZFwiPlxyXG4gICAgICAgICAgICA8U3RhcnRlcnMgey4uLmV2ZW50c30gLz5cclxuICAgICAgICAgICAgPFNhbmR3aWNoIHsuLi5ldmVudHN9IC8+XHJcbiAgICAgICAgICAgIDxCdXJnZXJzIHsuLi5ldmVudHN9IC8+XHJcbiAgICAgICAgICAgIDxTYWxhZCB7Li4uZXZlbnRzfSAvPlxyXG4gICAgICAgICAgICA8VHJhZGl0aW9uYWwgLz5cclxuICAgICAgICAgICAgPFBhc3RhIHsuLi5ldmVudHN9IC8+XHJcbiAgICAgICAgICAgIDxHcmlsbCB7Li4uZXZlbnRzfSAvPlxyXG4gICAgICAgICAgICA8VGFqaW5lIHsuLi5ldmVudHN9IC8+XHJcbiAgICAgICAgICAgIDxDb3VzY291cyB7Li4uZXZlbnRzfSAvPlxyXG4gICAgICAgICAgICA8RGVzc2VydHMgey4uLmV2ZW50c30gLz5cclxuICAgICAgICAgICAgPEhvdERyaW5rcyB7Li4uZXZlbnRzfSAvPlxyXG4gICAgICAgICAgICA8Q29sZERyaW5rcyB7Li4uZXZlbnRzfSAvPlxyXG4gICAgICAgICAgICB7LyogPGRpdiBzdHlsZT1cImZsZXg6IDE7IGRpc3BsYXk6IGlubGluZS1mbGV4XCI+XHJcbiAgICAgICAgICA8aW1nIHN0eWxlPVwid2lkdGg6IDEwMCU7IG1hcmdpbjogYXV0byAwIDAgMFwiIHNyYz17YnVyZ2VyU3JjfSAvPlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtY2FyZF9fb3JkZXJcIj5cclxuICAgICAgICAgICAgPExpc3Qgc291cmNlPXtvcmRlclN0b3JlfT5cclxuICAgICAgICAgICAgICB7KG9yZGVyOiBTdGF0ZTxPcmRlcj4sIHsgaW5kZXggfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1jYXJkX19vcmRlci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZW51LWNhcmRfX29yZGVyLWl0ZW1fX2NvdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7b3JkZXIuY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWVudS1jYXJkX19vcmRlci1pdGVtX190ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7b3JkZXIudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGljaz17KCkgPT4gZGVsZXRlT3JkZXIob3JkZXIsIGluZGV4KCkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtZW51LWNhcmRfX29yZGVyLWl0ZW1fX2J1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgJnRpbWVzO1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIHtvcmRlci5vcHRpb25zLnBlZWsoKG9wdGlvbnMpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1jYXJkX19vcmRlci1vcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb25zLm1hcCgoZW50cnkpID0+IGVudHJ5LnRpdGxlKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFkaG9jUHJvZHVjdChldmVudHM6IFByb2R1Y3RFdmVudHMpIHtcclxuICBjb25zdCBzdG9yZSA9IG5ldyBTdG9yZSh7XHJcbiAgICB0aXRsZTogXCJcIixcclxuICAgIHByaWNlOiAyLFxyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgdmFsdWU9e3N0b3JlLnByb3BlcnR5KFwidGl0bGVcIil9XHJcbiAgICAgICAgYmx1cj17b25UaXRsZUNoYW5nZX1cclxuICAgICAgICBjaGFuZ2U9e29uVGl0bGVDaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgIHZhbHVlPXtzdG9yZS5wcm9wZXJ0eShcInByaWNlXCIpfVxyXG4gICAgICAgIGJsdXI9e29uUHJpY2VDaGFuZ2V9XHJcbiAgICAgICAgY2hhbmdlPXtvblByaWNlQ2hhbmdlfVxyXG4gICAgICAvPlxyXG4gICAgICA8YnV0dG9uIGNsaWNrPXtvblN1Ym1pdH0+KzwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgZnVuY3Rpb24gb25UaXRsZUNoYW5nZShlKSB7XHJcbiAgICBzdG9yZS5wcm9wZXJ0eShcInRpdGxlXCIpLnVwZGF0ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvblByaWNlQ2hhbmdlKGUpIHtcclxuICAgIHN0b3JlLnByb3BlcnR5KFwicHJpY2VcIikudXBkYXRlKHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9uU3VibWl0KCkge1xyXG4gICAgc3RvcmUucGVlayhldmVudHMub25TZWxlY3QpO1xyXG4gICAgc3RvcmUudXBkYXRlKG51bGwpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gU2FsYWQoZXZlbnRzOiBQcm9kdWN0RXZlbnRzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICA8aDE+U2FsYWRlczwvaDE+XHJcbiAgICAgIDxQcm9kdWN0TGlzdCB7Li4uZXZlbnRzfSBwcm9kdWN0cz17cHJvZHVjdHMuc2FsYWRzfSAvPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBQcm9kdWN0TGlzdE9wdGlvbnMge1xyXG4gIHByb2R1Y3RzOiBQcm9kdWN0W107XHJcbn1cclxuXHJcbmludGVyZmFjZSBQcm9kdWN0RXZlbnRzIHtcclxuICBvblNlbGVjdChwcm9kdWN0OiBQcm9kdWN0KTogdm9pZDtcclxufVxyXG5cclxuZnVuY3Rpb24gUHJvZHVjdExpc3Qob3B0aW9uczogUHJvZHVjdExpc3RPcHRpb25zICYgUHJvZHVjdEV2ZW50cykge1xyXG4gIGNvbnN0IHsgcHJvZHVjdHMgfSA9IG9wdGlvbnM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8dWwgY2xhc3M9XCJtZGMtbGlzdFwiPlxyXG4gICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PlxyXG4gICAgICAgIHByb2R1Y3QuZGVzY3JpcHRpb24gPyAoXHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBjbGFzcz1cIm1kYy1saXN0LWl0ZW0gcm91dGVyLWxpbmsgbWRjLWxpc3QtLXR3by1saW5lXCJcclxuICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCJcclxuICAgICAgICAgICAgY2xpY2s9eygpID0+IG9wdGlvbnMub25TZWxlY3QocHJvZHVjdCl9XHJcbiAgICAgICAgICAgIC8vIGhyZWY9e1wiL2plbm5haC9cIiArIHByb2R1Y3RQYXRoKHByb2R1Y3QpLmpvaW4oXCIvXCIpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1kYy1saXN0LWl0ZW1fX3JpcHBsZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGMtbGlzdC1pdGVtX190ZXh0XCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGMtbGlzdC1pdGVtX19wcmltYXJ5LXRleHRcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9kdWN0LnRpdGxlfSB7cHJvZHVjdC5wcmljZX1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGMtbGlzdC1pdGVtX19zZWNvbmRhcnktdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAge3Byb2R1Y3QuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGNsYXNzPVwibWRjLWxpc3QtaXRlbSByb3V0ZXItbGlua1wiXHJcbiAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiXHJcbiAgICAgICAgICAgIGNsaWNrPXsoKSA9PiBvcHRpb25zLm9uU2VsZWN0KHByb2R1Y3QpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1kYy1saXN0LWl0ZW1fX3JpcHBsZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGMtbGlzdC1pdGVtX190ZXh0XCI+XHJcbiAgICAgICAgICAgICAge3Byb2R1Y3QudGl0bGV9IHtwcm9kdWN0LnByaWNlfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgKVxyXG4gICAgICApfVxyXG4gICAgPC91bD5cclxuICApO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUHJvZHVjdE9wdGlvbiB7XHJcbiAgdHlwZTogXCJvcHRpb25cIjtcclxuICB0aXRsZTogc3RyaW5nO1xyXG59XHJcbmludGVyZmFjZSBQcm9kdWN0Q2hvaWNlIHtcclxuICB0eXBlOiBcImNob2ljZVwiO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgcHJvZHVjdHM6IFByb2R1Y3RbXTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFByb2R1Y3Qge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgcHJpY2U6IG51bWJlcjtcclxuICBkZXNjcmlwdGlvbj86IHN0cmluZztcclxuICBvcHRpb25zPzogUHJvZHVjdEFkZGVuZHVtW107XHJcbn1cclxuXHJcbnR5cGUgUHJvZHVjdEFkZGVuZHVtID0gUHJvZHVjdE9wdGlvbiB8IFByb2R1Y3RDaG9pY2U7XHJcblxyXG5pbnRlcmZhY2UgT3JkZXJPcHRpb24ge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgcHJpY2U6IG51bWJlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gU3RhcnRlcnMoZXZlbnRzOiBQcm9kdWN0RXZlbnRzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICA8aDE+U3RhcnRlcnM8L2gxPlxyXG4gICAgICA8UHJvZHVjdExpc3QgcHJvZHVjdHM9e3Byb2R1Y3RzLnN0YXJ0ZXJzfSB7Li4uZXZlbnRzfSAvPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRyYWRpdGlvbmFsKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cImNhbGwtb3V0IGNhbGwtb3V0LXRyYWRpdGlvbmVlbFwiPlxyXG4gICAgICA8aDE+VHJhZGl0aW9uZWVsPC9oMT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDI+U3RhcnRlcnM8L2gyPlxyXG4gICAgICAgIDxkaXY+SGFyaXJhIG9mIEJpc2FyYTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDI+VGFqaW5lPC9oMj5cclxuICAgICAgICA8aT5nZXNlcnZlZXJkIG1ldCBtYXJva2thYW5zZSB0YXJ3ZSBicm9vZDwvaT4pXHJcbiAgICAgICAgPGRpdj5UYWppbmUgS2lwLCBLZWZ0YSBvZiBWbGVlcyAoPC9kaXY+XHJcbiAgICAgICAgPGgyPkNvdXNjb3VzPC9oMj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgQ291c2NvdXMgS2lwIG9mIFZsZWVzIG1ldCBtaXggdmFuIGdyb2VudGUgZW4gb3B0aWUgdm9vclxyXG4gICAgICAgICAgZ2VrYXJhbWVsaXNzZXJkZSByb3ppam5lblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBUYWFydGVuKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgPGgxIGNsYXNzPVwiVGFuZ2VyaW5lXCI+VGFhcnRlbjwvaDE+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHNwYW4+Q2hvY29sYWRldGFhcnQgNDwvc3Bhbj4sIDxzcGFuPldvcnRlbCB0YWFydCA1PC9zcGFuPix7XCIgXCJ9XHJcbiAgICAgICAgPHNwYW4+UmVkIHZlbHZldCA1PC9zcGFuPix7XCIgXCJ9XHJcbiAgICAgICAgPHNwYW4+Q2hlZXNlY2FrZSAob3Jlbywgc25pY2tlciwgY2l0cm9lbiwgc3Ryb29wd2FmZWwpIDUuNTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5mdW5jdGlvbiBTbW9vdGhpZXMoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICA8aDEgY2xhc3M9XCJidW5nZWVcIj5TbW9vdGhpZXM8L2gxPlxyXG4gICAgICA8ZGl2PkFwcGVsLWJhbmFhbiwgQWFyYmVpLCBBdm9jYWRvLWJhbmFhbiwgSnVzIEQnb3JhbmdlIDQ8L2Rpdj5cclxuICAgICAgPGRpdj5Bdm9jYWRvLCBBY2UsIEFuYW5hcy1tYW5nbyA1PC9kaXY+XHJcbiAgICAgIDxkaXY+TW9qaXRvIChhbGNvaG9sdnJpaiBjb2NrdGFpbCkgNDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEhvdERyaW5rcygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICAgIDxoMT5Ib3QgZHJpbmtzPC9oMT5cclxuICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2NvbnRlbnRcIj5QaWNrd2ljayB0aGVlIDIuNTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fY29udGVudFwiPlxyXG4gICAgICAgIE1hcm9ra2FhbnNlIG11bnQgdGhlZSAoPHNwYW4gY2xhc3M9XCJub3dyYXBcIj5nbGFzIDIuNTwvc3Bhbj4se1wiIFwifVxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibm93cmFwXCI+a2xlaW5lIHBvdCA0PC9zcGFuPix7XCIgXCJ9XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJub3dyYXBcIj5ncm90ZSBwb3QgNTwvc3Bhbj4pXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fY29udGVudFwiPldhcm1lIGNob2NvbGFkZW1lbGsgMzwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fY29udGVudFwiPkVzcHJlc3NvLCBDYXBwdWNjaW5vIDIuNTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fY29udGVudFwiPkNhZmZlIExhdHRlIE1hY2NoaWF0byAzLjU8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDb2xkRHJpbmtzKG9wdGlvbnM6IE1lbnVDYWxsYmFja3MpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICAgIDxoMT5Db2xkIGRyaW5rczwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19jb250ZW50IHByb2R1Y3RfX3RpbGVzXCI+XHJcbiAgICAgICAge3Byb2R1Y3RzLmNvbGRkcmlua3MubWFwKChwOiBQcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICA8YSBjbGljaz17KCkgPT4gb3B0aW9ucy5vblNlbGVjdChwKX0gY2xhc3M9XCJsaXN0LWl0ZW1cIj5cclxuICAgICAgICAgICAge3AudGl0bGV9XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgey8qIDxzcGFuPkNvbGEgKHplcm8sIGxpZ2h0KTwvc3Bhbj4sIDxzcGFuPkZhbnRhPC9zcGFuPiwgPHNwYW4+U3ByaXRlPC9zcGFuPlxyXG4gICAgICAgICwgPHNwYW4+Qml0dGVyIGxlbW9uPC9zcGFuPiwgPHNwYW4+U3BhIChyb29kLCBibGF1dyk8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+R2luZ2VyYWxlPC9zcGFuPiwgPHNwYW4+VG9uaWM8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+SWNlIFRlYSAoTGVtb24sIEdyZWVuLCBQZWFjaCk8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+RmVybmFuZGVzIChHZWVsLCBHcm9lbiwgQmxhdXcgb2Ygcm9vZCk8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+QXBwZWxzYXA8L3NwYW4+LCA8c3Bhbj5DaG9jb21lbDwvc3Bhbj4sIDxzcGFuPkZyaXN0aTwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj5IYXdhaTwvc3Bhbj4sIDxzcGFuPlBvbXM8L3NwYW4+IDIuNSAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gVGFqaW5lKGV2ZW50czogUHJvZHVjdEV2ZW50cykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgPGgxPlRhamluZTwvaDE+XHJcbiAgICAgIDxpPldvcmR0IGdlcmVzZXJ2ZWVyZCBtZXQgbWFyb2trYWFuc2UgYnJvb2QgKHdpdCBvZiBicnVpbik8L2k+XHJcbiAgICAgIDxQcm9kdWN0TGlzdCBwcm9kdWN0cz17cHJvZHVjdHMudGFqaW5lc30gey4uLmV2ZW50c30gLz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICAgIDxoMT5UYWppbmU8L2gxPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIFRhamluZSBLaXAgMTIuNSwgVmxlZXMgMTQuNSwgUGlscGlsIDE0LCBvZlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibm93cmFwXCI+S2VmdGEgMTM8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvdXNjb3VzKGV2ZW50czogUHJvZHVjdEV2ZW50cykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgPGgxPkNvdXNjb3VzPC9oMT5cclxuICAgICAgPFByb2R1Y3RMaXN0IHByb2R1Y3RzPXtwcm9kdWN0cy5jb3VzY291c30gey4uLmV2ZW50c30gLz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgPGgxPkNvdXNjb3VzPC9oMT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICBDb3VzY291cyBWZWdpZSAxMCwgPHNwYW4gY2xhc3M9XCJub3dyYXBcIj5LaXAgMTM8L3NwYW4+IG9mXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJub3dyYXBcIj5WbGVlcyAxNDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxociAvPlxyXG4gICAgICA8aT5NZXQga2V1emUgdWl0IHpvZXRlIHVpZW4gLyByb3ppam5lbiBlbiBraWtrZXJlcnd0ZW48L2k+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gRGVzc2VydHMoZXZlbnRzOiBQcm9kdWN0RXZlbnRzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICA8aDE+RGVzc2VydHM8L2gxPlxyXG4gICAgICA8UHJvZHVjdExpc3QgcHJvZHVjdHM9e3Byb2R1Y3RzLmRlc3NlcnRzfSB7Li4uZXZlbnRzfSAvPjtcclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBHcmlsbChldmVudHM6IFByb2R1Y3RFdmVudHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICAgIDxoMT5HcmlsbCAmIFNjaG90ZWxzPC9oMT5cclxuICAgICAgPGk+QWwgb256ZSBncmlsbCBnZXJlY2h0ZW4gd29yZGVuIGdlc2VydmVlcmQgbWV0IGZyaWV0IG9mIHJpanN0PC9pPlxyXG4gICAgICA8UHJvZHVjdExpc3QgcHJvZHVjdHM9e3Byb2R1Y3RzLmdyaWxsfSB7Li4uZXZlbnRzfSAvPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNhbmR3aWNoKGV2ZW50czogUHJvZHVjdEV2ZW50cykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgPGgxPlNhbmR3aWNoIChicm9vZGplcyk8L2gxPlxyXG4gICAgICA8aT5JbiBjb21iaW5hdGllIG1ldCBmcmlldCBlbiBlZW4gZHJhbmtqZSB2YW5hZiA5PC9pPlxyXG4gICAgICA8UHJvZHVjdExpc3QgcHJvZHVjdHM9e3Byb2R1Y3RzLnNhbmR3aWNoZXN9IHsuLi5ldmVudHN9IC8+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQnVyZ2VycyhldmVudHM6IFByb2R1Y3RFdmVudHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICAgIDxoMT5CdXJnZXJzICh2YW4gZGUgZ3JpbGwpPC9oMT5cclxuICAgICAgPGk+XHJcbiAgICAgICAgQWwgb256ZSBidXJnZXJzIHdvcmRlbiBnZXNlcnZlZXJkIGNoZWRkYXIga2FhcyB1aWVuIGVuIG1ldCBodWlzZnJpZXRqZXNcclxuICAgICAgPC9pPlxyXG4gICAgICA8UHJvZHVjdExpc3QgcHJvZHVjdHM9e3Byb2R1Y3RzLmJ1cmdlcnN9IHsuLi5ldmVudHN9IC8+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUGFzdGEoZXZlbnRzOiBQcm9kdWN0RXZlbnRzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICA8aDE+UGFzdGE8L2gxPlxyXG4gICAgICA8UHJvZHVjdExpc3QgcHJvZHVjdHM9e3Byb2R1Y3RzLnBhc3RhfSB7Li4uZXZlbnRzfSAvPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2R1Y3RQYXRoKHByb2R1Y3Q6IFByb2R1Y3QpIHtcclxuICByZXR1cm4gW3Byb2R1Y3QudGl0bGUucmVwbGFjZSgvKFxcc3xbXlxcd10pKy9naSwgXCItXCIpLnRvTG9jYWxlTG93ZXJDYXNlKCldO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgT3JkZXIge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgY291bnQ6IG51bWJlcjtcclxuICBvcHRpb25zOiBPcmRlck9wdGlvbltdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNjb3VudChwcm9kdWN0czogUHJvZHVjdFtdLCBkaXNjb3VudDogbnVtYmVyKSB7XHJcbiAgcmV0dXJuIHByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4ucHJvZHVjdCxcclxuICAgICAgcHJpY2U6IHByb2R1Y3QucHJpY2UgLSBkaXNjb3VudCxcclxuICAgIH07XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXBvc2UoLi4uZm5zOiBGdW5jdGlvbltdKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgIGZvciAoY29uc3QgZm4gb2YgZm5zKSB7XHJcbiAgICAgIGZuKCk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZXF1YWxPcmRlck9wdGlvbnMobzE6IE9yZGVyT3B0aW9uW10sIG8yOiBPcmRlck9wdGlvbltdKSB7XHJcbiAgaWYgKCFvMSB8fCAhbzIpIHJldHVybiBmYWxzZTtcclxuICBpZiAobzEubGVuZ3RoICE9IG8yLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICBmb3IgKGNvbnN0IGVudHJ5IG9mIG8xKSB7XHJcbiAgICBpZiAoIW8yLmZpbmQoKHgpID0+IHgudGl0bGUgPT0gZW50cnkudGl0bGUpKSByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGZvciAoY29uc3QgZW50cnkgb2YgbzIpIHtcclxuICAgIGlmICghbzEuZmluZCgoeCkgPT4geC50aXRsZSA9PSBlbnRyeS50aXRsZSkpIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuIiwiaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGF0ZUFkYXB0ZXI8RD4ge1xyXG4gICAgLyoqIFRoZSBsb2NhbGUgdG8gdXNlIGZvciBhbGwgZGF0ZXMuICovXHJcbiAgICBwcm90ZWN0ZWQgbG9jYWxlOiBhbnk7XHJcbiAgICBwcm90ZWN0ZWQgX2xvY2FsZUNoYW5nZXMgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICAgIC8qKiBBIHN0cmVhbSB0aGF0IGVtaXRzIHdoZW4gdGhlIGxvY2FsZSBjaGFuZ2VzLiAqL1xyXG4gICAgcmVhZG9ubHkgbG9jYWxlQ2hhbmdlczogT2JzZXJ2YWJsZTx2b2lkPiA9IHRoaXMuX2xvY2FsZUNoYW5nZXM7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSB5ZWFyIGNvbXBvbmVudCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cclxuICAgICAqIEBwYXJhbSBkYXRlIFRoZSBkYXRlIHRvIGV4dHJhY3QgdGhlIHllYXIgZnJvbS5cclxuICAgICAqIEByZXR1cm5zIFRoZSB5ZWFyIGNvbXBvbmVudC5cclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgZ2V0WWVhcihkYXRlOiBEKTogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgbW9udGggY29tcG9uZW50IG9mIHRoZSBnaXZlbiBkYXRlLlxyXG4gICAgICogQHBhcmFtIGRhdGUgVGhlIGRhdGUgdG8gZXh0cmFjdCB0aGUgbW9udGggZnJvbS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBtb250aCBjb21wb25lbnQgKDAtaW5kZXhlZCwgMCA9IEphbnVhcnkpLlxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBnZXRNb250aChkYXRlOiBEKTogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgZGF0ZSBvZiB0aGUgbW9udGggY29tcG9uZW50IG9mIHRoZSBnaXZlbiBkYXRlLlxyXG4gICAgICogQHBhcmFtIGRhdGUgVGhlIGRhdGUgdG8gZXh0cmFjdCB0aGUgZGF0ZSBvZiB0aGUgbW9udGggZnJvbS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBtb250aCBjb21wb25lbnQgKDEtaW5kZXhlZCwgMSA9IGZpcnN0IG9mIG1vbnRoKS5cclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgZ2V0RGF0ZShkYXRlOiBEKTogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgZGF5IG9mIHRoZSB3ZWVrIGNvbXBvbmVudCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cclxuICAgICAqIEBwYXJhbSBkYXRlIFRoZSBkYXRlIHRvIGV4dHJhY3QgdGhlIGRheSBvZiB0aGUgd2VlayBmcm9tLlxyXG4gICAgICogQHJldHVybnMgVGhlIG1vbnRoIGNvbXBvbmVudCAoMC1pbmRleGVkLCAwID0gU3VuZGF5KS5cclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgZ2V0RGF5T2ZXZWVrKGRhdGU6IEQpOiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGEgbGlzdCBvZiBuYW1lcyBmb3IgdGhlIG1vbnRocy5cclxuICAgICAqIEBwYXJhbSBzdHlsZSBUaGUgbmFtaW5nIHN0eWxlIChlLmcuIGxvbmcgPSAnSmFudWFyeScsIHNob3J0ID0gJ0phbicsIG5hcnJvdyA9ICdKJykuXHJcbiAgICAgKiBAcmV0dXJucyBBbiBvcmRlcmVkIGxpc3Qgb2YgYWxsIG1vbnRoIG5hbWVzLCBzdGFydGluZyB3aXRoIEphbnVhcnkuXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IGdldE1vbnRoTmFtZXMoc3R5bGU6IFwibG9uZ1wiIHwgXCJzaG9ydFwiIHwgXCJuYXJyb3dcIik6IHN0cmluZ1tdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBhIGxpc3Qgb2YgbmFtZXMgZm9yIHRoZSBkYXRlcyBvZiB0aGUgbW9udGguXHJcbiAgICAgKiBAcmV0dXJucyBBbiBvcmRlcmVkIGxpc3Qgb2YgYWxsIGRhdGUgb2YgdGhlIG1vbnRoIG5hbWVzLCBzdGFydGluZyB3aXRoICcxJy5cclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgZ2V0RGF0ZU5hbWVzKCk6IHN0cmluZ1tdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBhIGxpc3Qgb2YgbmFtZXMgZm9yIHRoZSBkYXlzIG9mIHRoZSB3ZWVrLlxyXG4gICAgICogQHBhcmFtIHN0eWxlIFRoZSBuYW1pbmcgc3R5bGUgKGUuZy4gbG9uZyA9ICdTdW5kYXknLCBzaG9ydCA9ICdTdW4nLCBuYXJyb3cgPSAnUycpLlxyXG4gICAgICogQHJldHVybnMgQW4gb3JkZXJlZCBsaXN0IG9mIGFsbCB3ZWVrZGF5IG5hbWVzLCBzdGFydGluZyB3aXRoIFN1bmRheS5cclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgZ2V0RGF5T2ZXZWVrTmFtZXMoc3R5bGU6IFwibG9uZ1wiIHwgXCJzaG9ydFwiIHwgXCJuYXJyb3dcIik6IHN0cmluZ1tdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgbmFtZSBmb3IgdGhlIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXHJcbiAgICAgKiBAcGFyYW0gZGF0ZSBUaGUgZGF0ZSB0byBnZXQgdGhlIHllYXIgbmFtZSBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgbmFtZSBvZiB0aGUgZ2l2ZW4geWVhciAoZS5nLiAnMjAxNycpLlxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBnZXRZZWFyTmFtZShkYXRlOiBEKTogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgICogQHJldHVybnMgVGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMC1pbmRleGVkLCAwID0gU3VuZGF5KS5cclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgZ2V0Rmlyc3REYXlPZldlZWsoKTogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgbnVtYmVyIG9mIGRheXMgaW4gdGhlIG1vbnRoIG9mIHRoZSBnaXZlbiBkYXRlLlxyXG4gICAgICogQHBhcmFtIGRhdGUgVGhlIGRhdGUgd2hvc2UgbW9udGggc2hvdWxkIGJlIGNoZWNrZWQuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIGRheXMgaW4gdGhlIG1vbnRoIG9mIHRoZSBnaXZlbiBkYXRlLlxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBnZXROdW1EYXlzSW5Nb250aChkYXRlOiBEKTogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xvbmVzIHRoZSBnaXZlbiBkYXRlLlxyXG4gICAgICogQHBhcmFtIGRhdGUgVGhlIGRhdGUgdG8gY2xvbmVcclxuICAgICAqIEByZXR1cm5zIEEgbmV3IGRhdGUgZXF1YWwgdG8gdGhlIGdpdmVuIGRhdGUuXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IGNsb25lKGRhdGU6IEQpOiBEO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIGRhdGUgd2l0aCB0aGUgZ2l2ZW4geWVhciwgbW9udGgsIGFuZCBkYXRlLiBEb2VzIG5vdCBhbGxvdyBvdmVyL3VuZGVyLWZsb3cgb2YgdGhlXHJcbiAgICAgKiBtb250aCBhbmQgZGF0ZS5cclxuICAgICAqIEBwYXJhbSB5ZWFyIFRoZSBmdWxsIHllYXIgb2YgdGhlIGRhdGUuIChlLmcuIDg5IG1lYW5zIHRoZSB5ZWFyIDg5LCBub3QgdGhlIHllYXIgMTk4OSkuXHJcbiAgICAgKiBAcGFyYW0gbW9udGggVGhlIG1vbnRoIG9mIHRoZSBkYXRlICgwLWluZGV4ZWQsIDAgPSBKYW51YXJ5KS4gTXVzdCBiZSBhbiBpbnRlZ2VyIDAgLSAxMS5cclxuICAgICAqIEBwYXJhbSBkYXRlIFRoZSBkYXRlIG9mIG1vbnRoIG9mIHRoZSBkYXRlLiBNdXN0IGJlIGFuIGludGVnZXIgMSAtIGxlbmd0aCBvZiB0aGUgZ2l2ZW4gbW9udGguXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgbmV3IGRhdGUsIG9yIG51bGwgaWYgaW52YWxpZC5cclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgY3JlYXRlRGF0ZSh5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIsIGRhdGU6IG51bWJlcik6IEQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRvZGF5J3MgZGF0ZS5cclxuICAgICAqIEByZXR1cm5zIFRvZGF5J3MgZGF0ZS5cclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgdG9kYXkoKTogRDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFBhcnNlcyBhIGRhdGUgZnJvbSBhIHVzZXItcHJvdmlkZWQgdmFsdWUuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIHBhcnNlLlxyXG4gICAgICogQHBhcmFtIHBhcnNlRm9ybWF0IFRoZSBleHBlY3RlZCBmb3JtYXQgb2YgdGhlIHZhbHVlIGJlaW5nIHBhcnNlZFxyXG4gICAgICogICAgICh0eXBlIGlzIGltcGxlbWVudGF0aW9uLWRlcGVuZGVudCkuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgcGFyc2VkIGRhdGUuXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IHBhcnNlKHZhbHVlOiBhbnksIHBhcnNlRm9ybWF0OiBhbnkpOiBEIHwgbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEZvcm1hdHMgYSBkYXRlIGFzIGEgc3RyaW5nIGFjY29yZGluZyB0byB0aGUgZ2l2ZW4gZm9ybWF0LlxyXG4gICAgICogQHBhcmFtIGRhdGUgVGhlIHZhbHVlIHRvIGZvcm1hdC5cclxuICAgICAqIEBwYXJhbSBkaXNwbGF5Rm9ybWF0IFRoZSBmb3JtYXQgdG8gdXNlIHRvIGRpc3BsYXkgdGhlIGRhdGUgYXMgYSBzdHJpbmcuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBmb3JtYXQoZGF0ZTogRCwgZGlzcGxheUZvcm1hdDogYW55KTogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyB0aGUgZ2l2ZW4gbnVtYmVyIG9mIHllYXJzIHRvIHRoZSBkYXRlLiBZZWFycyBhcmUgY291bnRlZCBhcyBpZiBmbGlwcGluZyAxMiBwYWdlcyBvbiB0aGVcclxuICAgICAqIGNhbGVuZGFyIGZvciBlYWNoIHllYXIgYW5kIHRoZW4gZmluZGluZyB0aGUgY2xvc2VzdCBkYXRlIGluIHRoZSBuZXcgbW9udGguIEZvciBleGFtcGxlIHdoZW5cclxuICAgICAqIGFkZGluZyAxIHllYXIgdG8gRmViIDI5LCAyMDE2LCB0aGUgcmVzdWx0aW5nIGRhdGUgd2lsbCBiZSBGZWIgMjgsIDIwMTcuXHJcbiAgICAgKiBAcGFyYW0gZGF0ZSBUaGUgZGF0ZSB0byBhZGQgeWVhcnMgdG8uXHJcbiAgICAgKiBAcGFyYW0geWVhcnMgVGhlIG51bWJlciBvZiB5ZWFycyB0byBhZGQgKG1heSBiZSBuZWdhdGl2ZSkuXHJcbiAgICAgKiBAcmV0dXJucyBBIG5ldyBkYXRlIGVxdWFsIHRvIHRoZSBnaXZlbiBvbmUgd2l0aCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiB5ZWFycyBhZGRlZC5cclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgYWRkQ2FsZW5kYXJZZWFycyhkYXRlOiBELCB5ZWFyczogbnVtYmVyKTogRDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgdGhlIGdpdmVuIG51bWJlciBvZiBtb250aHMgdG8gdGhlIGRhdGUuIE1vbnRocyBhcmUgY291bnRlZCBhcyBpZiBmbGlwcGluZyBhIHBhZ2Ugb24gdGhlXHJcbiAgICAgKiBjYWxlbmRhciBmb3IgZWFjaCBtb250aCBhbmQgdGhlbiBmaW5kaW5nIHRoZSBjbG9zZXN0IGRhdGUgaW4gdGhlIG5ldyBtb250aC4gRm9yIGV4YW1wbGUgd2hlblxyXG4gICAgICogYWRkaW5nIDEgbW9udGggdG8gSmFuIDMxLCAyMDE3LCB0aGUgcmVzdWx0aW5nIGRhdGUgd2lsbCBiZSBGZWIgMjgsIDIwMTcuXHJcbiAgICAgKiBAcGFyYW0gZGF0ZSBUaGUgZGF0ZSB0byBhZGQgbW9udGhzIHRvLlxyXG4gICAgICogQHBhcmFtIG1vbnRocyBUaGUgbnVtYmVyIG9mIG1vbnRocyB0byBhZGQgKG1heSBiZSBuZWdhdGl2ZSkuXHJcbiAgICAgKiBAcmV0dXJucyBBIG5ldyBkYXRlIGVxdWFsIHRvIHRoZSBnaXZlbiBvbmUgd2l0aCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtb250aHMgYWRkZWQuXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IGFkZENhbGVuZGFyTW9udGhzKGRhdGU6IEQsIG1vbnRoczogbnVtYmVyKTogRDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgdGhlIGdpdmVuIG51bWJlciBvZiBkYXlzIHRvIHRoZSBkYXRlLiBEYXlzIGFyZSBjb3VudGVkIGFzIGlmIG1vdmluZyBvbmUgY2VsbCBvbiB0aGVcclxuICAgICAqIGNhbGVuZGFyIGZvciBlYWNoIGRheS5cclxuICAgICAqIEBwYXJhbSBkYXRlIFRoZSBkYXRlIHRvIGFkZCBkYXlzIHRvLlxyXG4gICAgICogQHBhcmFtIGRheXMgVGhlIG51bWJlciBvZiBkYXlzIHRvIGFkZCAobWF5IGJlIG5lZ2F0aXZlKS5cclxuICAgICAqIEByZXR1cm5zIEEgbmV3IGRhdGUgZXF1YWwgdG8gdGhlIGdpdmVuIG9uZSB3aXRoIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgYWRkZWQuXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IGFkZENhbGVuZGFyRGF5cyhkYXRlOiBELCBkYXlzOiBudW1iZXIpOiBEO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgUkZDIDMzMzkgY29tcGF0aWJsZSBzdHJpbmcgKGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzMzM5KSBmb3IgdGhlIGdpdmVuIGRhdGUuXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGdlbmVyYXRlIGRhdGUgc3RyaW5ncyB0aGF0IGFyZSBjb21wYXRpYmxlIHdpdGggbmF0aXZlIEhUTUwgYXR0cmlidXRlc1xyXG4gICAgICogc3VjaCBhcyB0aGUgYG1pbmAgb3IgYG1heGAgYXR0cmlidXRlIG9mIGFuIGA8aW5wdXQ+YC5cclxuICAgICAqIEBwYXJhbSBkYXRlIFRoZSBkYXRlIHRvIGdldCB0aGUgSVNPIGRhdGUgc3RyaW5nIGZvci5cclxuICAgICAqIEByZXR1cm5zIFRoZSBJU08gZGF0ZSBzdHJpbmcgZGF0ZSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IHRvSXNvODYwMShkYXRlOiBEKTogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIG9iamVjdCBpcyBjb25zaWRlcmVkIGEgZGF0ZSBpbnN0YW5jZSBieSB0aGlzIERhdGVBZGFwdGVyLlxyXG4gICAgICogQHBhcmFtIG9iaiBUaGUgb2JqZWN0IHRvIGNoZWNrXHJcbiAgICAgKiBAcmV0dXJucyBXaGV0aGVyIHRoZSBvYmplY3QgaXMgYSBkYXRlIGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBpc0RhdGVJbnN0YW5jZShvYmo6IGFueSk6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gZGF0ZSBpcyB2YWxpZC5cclxuICAgICAqIEBwYXJhbSBkYXRlIFRoZSBkYXRlIHRvIGNoZWNrLlxyXG4gICAgICogQHJldHVybnMgV2hldGhlciB0aGUgZGF0ZSBpcyB2YWxpZC5cclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgaXNWYWxpZChkYXRlOiBEKTogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgZGF0ZSBpbnN0YW5jZSB0aGF0IGlzIG5vdCB2YWxpZC5cclxuICAgICAqIEByZXR1cm5zIEFuIGludmFsaWQgZGF0ZS5cclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgaW52YWxpZCgpOiBEO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2l2ZW4gYSBwb3RlbnRpYWwgZGF0ZSBvYmplY3QsIHJldHVybnMgdGhhdCBzYW1lIGRhdGUgb2JqZWN0IGlmIGl0IGlzXHJcbiAgICAgKiBhIHZhbGlkIGRhdGUsIG9yIGBudWxsYCBpZiBpdCdzIG5vdCBhIHZhbGlkIGRhdGUuXHJcbiAgICAgKiBAcGFyYW0gb2JqIFRoZSBvYmplY3QgdG8gY2hlY2suXHJcbiAgICAgKiBAcmV0dXJucyBBIGRhdGUgb3IgYG51bGxgLlxyXG4gICAgICovXHJcbiAgICBnZXRWYWxpZERhdGVPck51bGwob2JqOiB1bmtub3duKTogRCB8IG51bGwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzRGF0ZUluc3RhbmNlKG9iaikgJiYgdGhpcy5pc1ZhbGlkKG9iaiBhcyBEKVxyXG4gICAgICAgICAgICA/IChvYmogYXMgRClcclxuICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXR0ZW1wdHMgdG8gZGVzZXJpYWxpemUgYSB2YWx1ZSB0byBhIHZhbGlkIGRhdGUgb2JqZWN0LiBUaGlzIGlzIGRpZmZlcmVudCBmcm9tIHBhcnNpbmcgaW4gdGhhdFxyXG4gICAgICogZGVzZXJpYWxpemUgc2hvdWxkIG9ubHkgYWNjZXB0IG5vbi1hbWJpZ3VvdXMsIGxvY2FsZS1pbmRlcGVuZGVudCBmb3JtYXRzIChlLmcuIGEgSVNPIDg2MDFcclxuICAgICAqIHN0cmluZykuIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIGRvZXMgbm90IGFsbG93IGFueSBkZXNlcmlhbGl6YXRpb24sIGl0IHNpbXBseSBjaGVja3MgdGhhdFxyXG4gICAgICogdGhlIGdpdmVuIHZhbHVlIGlzIGFscmVhZHkgYSB2YWxpZCBkYXRlIG9iamVjdCBvciBudWxsLiBUaGUgYDxtYXQtZGF0ZXBpY2tlcj5gIHdpbGwgY2FsbCB0aGlzXHJcbiAgICAgKiBtZXRob2Qgb24gYWxsIG9mIGl0cyBgQElucHV0KClgIHByb3BlcnRpZXMgdGhhdCBhY2NlcHQgZGF0ZXMuIEl0IGlzIHRoZXJlZm9yZSBwb3NzaWJsZSB0b1xyXG4gICAgICogc3VwcG9ydCBwYXNzaW5nIHZhbHVlcyBmcm9tIHlvdXIgYmFja2VuZCBkaXJlY3RseSB0byB0aGVzZSBwcm9wZXJ0aWVzIGJ5IG92ZXJyaWRpbmcgdGhpcyBtZXRob2RcclxuICAgICAqIHRvIGFsc28gZGVzZXJpYWxpemUgdGhlIGZvcm1hdCB1c2VkIGJ5IHlvdXIgYmFja2VuZC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgZGVzZXJpYWxpemVkIGludG8gYSBkYXRlIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBkZXNlcmlhbGl6ZWQgZGF0ZSBvYmplY3QsIGVpdGhlciBhIHZhbGlkIGRhdGUsIG51bGwgaWYgdGhlIHZhbHVlIGNhbiBiZVxyXG4gICAgICogICAgIGRlc2VyaWFsaXplZCBpbnRvIGEgbnVsbCBkYXRlIChlLmcuIHRoZSBlbXB0eSBzdHJpbmcpLCBvciBhbiBpbnZhbGlkIGRhdGUuXHJcbiAgICAgKi9cclxuICAgIGRlc2VyaWFsaXplKHZhbHVlOiBhbnkpOiBEIHwgbnVsbCB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB2YWx1ZSA9PSBudWxsIHx8XHJcbiAgICAgICAgICAgICh0aGlzLmlzRGF0ZUluc3RhbmNlKHZhbHVlKSAmJiB0aGlzLmlzVmFsaWQodmFsdWUpKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmludmFsaWQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGxvY2FsZSB1c2VkIGZvciBhbGwgZGF0ZXMuXHJcbiAgICAgKiBAcGFyYW0gbG9jYWxlIFRoZSBuZXcgbG9jYWxlLlxyXG4gICAgICovXHJcbiAgICBzZXRMb2NhbGUobG9jYWxlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcclxuICAgICAgICB0aGlzLl9sb2NhbGVDaGFuZ2VzLm5leHQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbXBhcmVzIHR3byBkYXRlcy5cclxuICAgICAqIEBwYXJhbSBmaXJzdCBUaGUgZmlyc3QgZGF0ZSB0byBjb21wYXJlLlxyXG4gICAgICogQHBhcmFtIHNlY29uZCBUaGUgc2Vjb25kIGRhdGUgdG8gY29tcGFyZS5cclxuICAgICAqIEByZXR1cm5zIDAgaWYgdGhlIGRhdGVzIGFyZSBlcXVhbCwgYSBudW1iZXIgbGVzcyB0aGFuIDAgaWYgdGhlIGZpcnN0IGRhdGUgaXMgZWFybGllcixcclxuICAgICAqICAgICBhIG51bWJlciBncmVhdGVyIHRoYW4gMCBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBsYXRlci5cclxuICAgICAqL1xyXG4gICAgY29tcGFyZURhdGUoZmlyc3Q6IEQsIHNlY29uZDogRCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgdGhpcy5nZXRZZWFyKGZpcnN0KSAtIHRoaXMuZ2V0WWVhcihzZWNvbmQpIHx8XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0TW9udGgoZmlyc3QpIC0gdGhpcy5nZXRNb250aChzZWNvbmQpIHx8XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0RGF0ZShmaXJzdCkgLSB0aGlzLmdldERhdGUoc2Vjb25kKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgaWYgdHdvIGRhdGVzIGFyZSBlcXVhbC5cclxuICAgICAqIEBwYXJhbSBmaXJzdCBUaGUgZmlyc3QgZGF0ZSB0byBjaGVjay5cclxuICAgICAqIEBwYXJhbSBzZWNvbmQgVGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrLlxyXG4gICAgICogQHJldHVybnMgV2hldGhlciB0aGUgdHdvIGRhdGVzIGFyZSBlcXVhbC5cclxuICAgICAqICAgICBOdWxsIGRhdGVzIGFyZSBjb25zaWRlcmVkIGVxdWFsIHRvIG90aGVyIG51bGwgZGF0ZXMuXHJcbiAgICAgKi9cclxuICAgIHNhbWVEYXRlKGZpcnN0OiBEIHwgbnVsbCwgc2Vjb25kOiBEIHwgbnVsbCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChmaXJzdCAmJiBzZWNvbmQpIHtcclxuICAgICAgICAgICAgbGV0IGZpcnN0VmFsaWQgPSB0aGlzLmlzVmFsaWQoZmlyc3QpO1xyXG4gICAgICAgICAgICBsZXQgc2Vjb25kVmFsaWQgPSB0aGlzLmlzVmFsaWQoc2Vjb25kKTtcclxuICAgICAgICAgICAgaWYgKGZpcnN0VmFsaWQgJiYgc2Vjb25kVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5jb21wYXJlRGF0ZShmaXJzdCwgc2Vjb25kKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmlyc3RWYWxpZCA9PSBzZWNvbmRWYWxpZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZpcnN0ID09IHNlY29uZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENsYW1wIHRoZSBnaXZlbiBkYXRlIGJldHdlZW4gbWluIGFuZCBtYXggZGF0ZXMuXHJcbiAgICAgKiBAcGFyYW0gZGF0ZSBUaGUgZGF0ZSB0byBjbGFtcC5cclxuICAgICAqIEBwYXJhbSBtaW4gVGhlIG1pbmltdW0gdmFsdWUgdG8gYWxsb3cuIElmIG51bGwgb3Igb21pdHRlZCBubyBtaW4gaXMgZW5mb3JjZWQuXHJcbiAgICAgKiBAcGFyYW0gbWF4IFRoZSBtYXhpbXVtIHZhbHVlIHRvIGFsbG93LiBJZiBudWxsIG9yIG9taXR0ZWQgbm8gbWF4IGlzIGVuZm9yY2VkLlxyXG4gICAgICogQHJldHVybnMgYG1pbmAgaWYgYGRhdGVgIGlzIGxlc3MgdGhhbiBgbWluYCwgYG1heGAgaWYgZGF0ZSBpcyBncmVhdGVyIHRoYW4gYG1heGAsXHJcbiAgICAgKiAgICAgb3RoZXJ3aXNlIGBkYXRlYC5cclxuICAgICAqL1xyXG4gICAgY2xhbXBEYXRlKGRhdGU6IEQsIG1pbj86IEQgfCBudWxsLCBtYXg/OiBEIHwgbnVsbCk6IEQge1xyXG4gICAgICAgIGlmIChtaW4gJiYgdGhpcy5jb21wYXJlRGF0ZShkYXRlLCBtaW4pIDwgMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbWluO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWF4ICYmIHRoaXMuY29tcGFyZURhdGUoZGF0ZSwgbWF4KSA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1heDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGU7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTURDTWVudVN1cmZhY2UgfSBmcm9tIFwiQG1hdGVyaWFsL21lbnUtc3VyZmFjZVwiO1xyXG5pbXBvcnQgdHBsIGZyb20gXCJnbG93LmpzXCI7XHJcbmltcG9ydCB7IERhdGVBZGFwdGVyIH0gZnJvbSBcIi4uL2NvcmUvZGF0ZS10aW1lL2RhdGUtYWRhcHRlclwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCIuLi90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xyXG5cclxuaW50ZXJmYWNlIERhdGVQaWNrZXJQcm9wcyB7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhdGVQaWNrZXIocHJvcHM6IERhdGVQaWNrZXJQcm9wcykge1xyXG4gICAgY29uc3QgeyBsYWJlbCA9IG51bGwgfSA9IHByb3BzIHx8IHt9O1xyXG4gICAgbGV0IHN1cmZhY2VWaWV3ID0gbmV3IENoaWxkVmlldyhNRENNZW51U3VyZmFjZS5hdHRhY2hUbyk7XHJcblxyXG4gICAgLy8gY29uc3QgZWx0ID0gY3JlYXRlQ3VzdG9tRWxlbWVudChNYXRDYWxlbmRhciwgeyBpbmplY3RvcjogbnVsbCB9KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGVsdCk7XHJcblxyXG4gICAgZmV0Y2goXCJodHRwczovL3d3dy5zZXBheS5ubC9teXNlcGF5L1RyYW5zYWN0aW9ucy5hc3B4XCIsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIGFjY2VwdDpcclxuICAgICAgICAgICAgICAgIFwidGV4dC9odG1sLGFwcGxpY2F0aW9uL3hodG1sK3htbCxhcHBsaWNhdGlvbi94bWw7cT0wLjksaW1hZ2UvYXZpZixpbWFnZS93ZWJwLGltYWdlL2FwbmcsKi8qO3E9MC44LGFwcGxpY2F0aW9uL3NpZ25lZC1leGNoYW5nZTt2PWIzO3E9MC45XCIsXHJcbiAgICAgICAgICAgIFwiYWNjZXB0LWxhbmd1YWdlXCI6IFwiZW4sZW4tVVM7cT0wLjksbmw7cT0wLjgsYXI7cT0wLjdcIixcclxuICAgICAgICAgICAgXCJjYWNoZS1jb250cm9sXCI6IFwibWF4LWFnZT0wXCIsXHJcbiAgICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXHJcbiAgICAgICAgICAgIFwic2VjLWNoLXVhXCI6XHJcbiAgICAgICAgICAgICAgICAnXCIgTm90IEE7QnJhbmRcIjt2PVwiOTlcIiwgXCJDaHJvbWl1bVwiO3Y9XCI5MFwiLCBcIkdvb2dsZSBDaHJvbWVcIjt2PVwiOTBcIicsXHJcbiAgICAgICAgICAgIFwic2VjLWNoLXVhLW1vYmlsZVwiOiBcIj8wXCIsXHJcbiAgICAgICAgICAgIFwic2VjLWZldGNoLWRlc3RcIjogXCJkb2N1bWVudFwiLFxyXG4gICAgICAgICAgICBcInNlYy1mZXRjaC1tb2RlXCI6IFwibmF2aWdhdGVcIixcclxuICAgICAgICAgICAgXCJzZWMtZmV0Y2gtc2l0ZVwiOiBcInNhbWUtb3JpZ2luXCIsXHJcbiAgICAgICAgICAgIFwic2VjLWZldGNoLXVzZXJcIjogXCI/MVwiLFxyXG4gICAgICAgICAgICBcInVwZ3JhZGUtaW5zZWN1cmUtcmVxdWVzdHNcIjogXCIxXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWZlcnJlcjogXCJodHRwczovL3d3dy5zZXBheS5ubC9teXNlcGF5L1RyYW5zYWN0aW9ucy5hc3B4XCIsXHJcbiAgICAgICAgcmVmZXJyZXJQb2xpY3k6IFwic3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpblwiLFxyXG4gICAgICAgIGJvZHk6XHJcbiAgICAgICAgICAgIFwidmlld3N0YXRla2V5PTc3MjQwMTY0LWY4MzUtNDdmOS05OWE2LWRhZjJjM2EzMDE4YiZjdGwwMCUyNGhpZFBhZ2VJRD1mNTUyODdmMS04ODBhLTRkNTAtOWQ4Ny1lZmJhZWE1YWQyNDkmY3RsMDAlMjRDb250ZW50UGxhY2VIb2xkZXIxJTI0dGJEYXRlRnJvbT0yMS0wNC0yMDIxKzAwJTNBMDAmY3RsMDAlMjRDb250ZW50UGxhY2VIb2xkZXIxJTI0dGJEYXRlVG89MDEtMDUtMjAyMSswMCUzQTAwJmN0bDAwJTI0Q29udGVudFBsYWNlSG9sZGVyMSUyNHRiQW1vdW50TWluPSZjdGwwMCUyNENvbnRlbnRQbGFjZUhvbGRlcjElMjR0YkFtb3VudE1heD0mY3RsMDAlMjRDb250ZW50UGxhY2VIb2xkZXIxJTI0bHN0RG93bmxvYWRUeXBlPUNTViZjdGwwMCUyNENvbnRlbnRQbGFjZUhvbGRlcjElMjRidG5Eb3dubG9hZD1Eb3dubG9hZCZfX0VWRU5UVEFSR0VUPSZfX0VWRU5UQVJHVU1FTlQ9Jl9fVklFV1NUQVRFPSZfX1NDUk9MTFBPU0lUSU9OWD0wJl9fU0NST0xMUE9TSVRJT05ZPTAmX19FVkVOVFZBTElEQVRJT049JTJGd0VkQUJtdlZYRDFvWUVMZXZlTXIwdkhDbVlQMUJjUjRJUUtVJTJGTiUyRm1KYW42QVQ0RnhvZWx2Tms4VjEyR0VleiUyQmtadkY4OFNJa2YzMWFiZEQyazd2ZHMwSjhtNDgyaU1haXR6NiUyQnYxZDBFSVpnMFJoaW0xVEFha2ZLb3pxMVNYSVF3MzR3S0hRcDlUVUlTJTJGd09tTkk1ejV0SlpSSkdQYTUlMkZZMWhBa0VyYlJPcm9GTVZaZk1UUzVsWjhwdnZtJTJGNFpoVWRwM2dpJTJGMk9BVnM4ekRBMnc0QzlBTTl3N0cwT1gxY1BSU2lhaFpxTkJsR0lubTlLMHRZUVg2RTFKM2FwYU9Yb0JVRFB5UiUyRnlwOUsxUDRyRGltbUo1cGdjZlYzU1Z3Q3phZTBtNEE1SDJsaDNBOGtRd3IwS1p4MGRMUmhUY1RDMUYlMkZMcUFhc3ZGQWtNTzAyQUkxSHdKUjk4JTJGT0l4Tnh1OWY3aHR0aGZOS2F6M3BpQlRWa3l5RVNoUFhVdVdmcEh5cUo3cURJUTlabW5TYlpHTTNKMVJaNXpEUmo1b0xqZ2F2cnd5OWhBZE8zMU9qSCUyRjh2WEhYUkNTd1NsQzlWbExjMUJva0VTRjFlTDREJTJCUGE4Z0RTTzAyUHd4a3JRJTJCamJ1SmdYYnRRTzBNSG1LSkFucE1JRnpwRTl2b1gyJTJGRmRneEdYUk1HZGswQXlNbzVMN1I5cG5jb1dwdzBhNndFcXc1R3olMkJ6WW1hRXl5SUZWcGNINFNVWmd5MlBmMUNNMFh1RFVFMkUlM0RcIixcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIG1vZGU6IFwiY29yc1wiLFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFRleHRGaWVsZCBsYWJlbD17bGFiZWx9IGV2ZW50cz17eyBtb3VzZXVwOiB0b2dnbGVPcGVuIH19IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGMtbWVudS1zdXJmYWNlLS1hbmNob3JcIiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZTtcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGMtbWVudS1zdXJmYWNlXCIgc3R5bGU9XCJwYWRkaW5nOiAyMHB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3N1cmZhY2VWaWV3fVxyXG4gICAgICAgICAgICAgICAgICAgIHN1cmZhY2VcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlT3BlbihlKSB7XHJcbiAgICAgICAgc3VyZmFjZVZpZXcuY2FsbCgoZWx0KSA9PiBlbHQuaXNPcGVuICYmIGVsdC5vcGVuKCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDaGlsZFZpZXc8VD4ge1xyXG4gICAgcHVibGljIGVsZW1lbnQ/OiBUO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZm46IChkb20pID0+IFQpIHt9XHJcblxyXG4gICAgY2FsbChmbjogKGVsdDogVCkgPT4gYW55KSB7XHJcbiAgICAgICAgY29uc3QgeyBlbGVtZW50IH0gPSB0aGlzO1xyXG4gICAgICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGZuKGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2hUbyhkb20pIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmZuKGRvbSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBJbnZhcmlhbnREYXRlIHtcclxuICAgIHllYXI6IG51bWJlcjtcclxuICAgIG1vbnRoOiBudW1iZXI7XHJcbiAgICBkYXRlOiBudW1iZXI7XHJcbn1cclxuY2xhc3MgSW52YXJpYW50RGF0ZUFkYXB0ZXIgZXh0ZW5kcyBEYXRlQWRhcHRlcjxJbnZhcmlhbnREYXRlPiB7XHJcbiAgICBnZXRZZWFyKGRhdGU6IEludmFyaWFudERhdGUpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBkYXRlLnllYXI7XHJcbiAgICB9XHJcbiAgICBnZXRNb250aChkYXRlOiBJbnZhcmlhbnREYXRlKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gZGF0ZS5tb250aDtcclxuICAgIH1cclxuICAgIGdldERhdGUoZGF0ZTogSW52YXJpYW50RGF0ZSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGUuZGF0ZTtcclxuICAgIH1cclxuICAgIGdldERheU9mV2VlayhkYXRlOiBJbnZhcmlhbnREYXRlKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRhdGUpLmdldERheSgpO1xyXG4gICAgfVxyXG4gICAgZ2V0TW9udGhOYW1lcyhzdHlsZTogXCJsb25nXCIgfCBcInNob3J0XCIgfCBcIm5hcnJvd1wiKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIFwiSmFuXCIsXHJcbiAgICAgICAgICAgIFwiRmViXCIsXHJcbiAgICAgICAgICAgIFwiTWFyXCIsXHJcbiAgICAgICAgICAgIFwiQXByXCIsXHJcbiAgICAgICAgICAgIFwiTWVpXCIsXHJcbiAgICAgICAgICAgIFwiSnVuXCIsXHJcbiAgICAgICAgICAgIFwiSnVsXCIsXHJcbiAgICAgICAgICAgIFwiQXVnXCIsXHJcbiAgICAgICAgICAgIFwiU2VwXCIsXHJcbiAgICAgICAgICAgIFwiT2N0XCIsXHJcbiAgICAgICAgICAgIFwiTm92XCIsXHJcbiAgICAgICAgICAgIFwiRGVjXCIsXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuICAgIGdldERhdGVOYW1lcygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIFtcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRoclwiLCBcIkZyaVwiLCBcIlNhdFwiLCBcIlN1blwiXTtcclxuICAgIH1cclxuICAgIGdldERheU9mV2Vla05hbWVzKHN0eWxlOiBcImxvbmdcIiB8IFwic2hvcnRcIiB8IFwibmFycm93XCIpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIFtcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRoclwiLCBcIkZyaVwiLCBcIlNhdFwiLCBcIlN1blwiXTtcclxuICAgIH1cclxuICAgIGdldFllYXJOYW1lKGRhdGU6IEludmFyaWFudERhdGUpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBkYXRlLnllYXIudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIGdldEZpcnN0RGF5T2ZXZWVrKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICBnZXROdW1EYXlzSW5Nb250aChkYXRlOiBJbnZhcmlhbnREYXRlKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gMzA7XHJcbiAgICB9XHJcbiAgICBjbG9uZShkYXRlOiBJbnZhcmlhbnREYXRlKTogSW52YXJpYW50RGF0ZSB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uZGF0ZSB9O1xyXG4gICAgfVxyXG4gICAgY3JlYXRlRGF0ZSh5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIsIGRhdGU6IG51bWJlcik6IEludmFyaWFudERhdGUge1xyXG4gICAgICAgIHJldHVybiB7IHllYXIsIG1vbnRoLCBkYXRlIH07XHJcbiAgICB9XHJcbiAgICB0b2RheSgpOiBJbnZhcmlhbnREYXRlIHtcclxuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeWVhcjogZC5nZXRGdWxsWWVhcigpLFxyXG4gICAgICAgICAgICBtb250aDogZC5nZXRNb250aCgpLFxyXG4gICAgICAgICAgICBkYXRlOiBkLmdldERhdGUoKSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcGFyc2UodmFsdWU6IGFueSwgcGFyc2VGb3JtYXQ6IGFueSk6IEludmFyaWFudERhdGUge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG4gICAgZm9ybWF0KGRhdGU6IEludmFyaWFudERhdGUsIGRpc3BsYXlGb3JtYXQ6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbiAgICBhZGRDYWxlbmRhclllYXJzKGRhdGU6IEludmFyaWFudERhdGUsIHllYXJzOiBudW1iZXIpOiBJbnZhcmlhbnREYXRlIHtcclxuICAgICAgICByZXR1cm4geyAuLi5kYXRlLCB5ZWFyOiBkYXRlLnllYXIgKyB5ZWFycyB9O1xyXG4gICAgfVxyXG4gICAgYWRkQ2FsZW5kYXJNb250aHMoZGF0ZTogSW52YXJpYW50RGF0ZSwgbW9udGhzOiBudW1iZXIpOiBJbnZhcmlhbnREYXRlIHtcclxuICAgICAgICByZXR1cm4geyAuLi5kYXRlLCBtb250aDogZGF0ZS5tb250aCArIG1vbnRocyB9O1xyXG4gICAgfVxyXG4gICAgYWRkQ2FsZW5kYXJEYXlzKGRhdGU6IEludmFyaWFudERhdGUsIGRheXM6IG51bWJlcik6IEludmFyaWFudERhdGUge1xyXG4gICAgICAgIHJldHVybiB7IC4uLmRhdGUsIGRhdGU6IGRhdGUuZGF0ZSArIGRheXMgfTtcclxuICAgIH1cclxuICAgIHRvSXNvODYwMShkYXRlOiBJbnZhcmlhbnREYXRlKTogc3RyaW5nIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuICAgIGlzRGF0ZUluc3RhbmNlKG9iajogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIG9iaiAmJiBcInllYXJcIiBpbiBvYmogJiYgXCJtb250aFwiIGluIG9iaiAmJiBcImRhdGVcIiBpbiBvYmo7XHJcbiAgICB9XHJcbiAgICBpc1ZhbGlkKGRhdGU6IEludmFyaWFudERhdGUpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gISFkYXRlO1xyXG4gICAgfVxyXG4gICAgaW52YWxpZCgpOiBJbnZhcmlhbnREYXRlIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdHBsIGZyb20gXCJnbG93LmpzXCI7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSBcIi4uLy4uLy4uL211dGFibC5qc1wiO1xyXG5pbXBvcnQgeyBNRENTZWxlY3QgfSBmcm9tIFwiQG1hdGVyaWFsL3NlbGVjdFwiO1xyXG5pbXBvcnQgeyBNRENSaXBwbGUgfSBmcm9tIFwiQG1hdGVyaWFsL3JpcHBsZVwiO1xyXG5pbXBvcnQgeyBBdHRyIH0gZnJvbSBcIi4uLy4uLy4uL2dsb3cuanMvY29tcG9uZW50cy9jc3NcIjtcclxuXHJcbnR5cGUgU2VsZWN0UHJvcHM8VD4gPSB7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgdmFsdWU6IFN0YXRlPFQ+O1xyXG4gICAgb3B0aW9uczogU2VsZWN0T3B0aW9uPFQ+W107XHJcbn07XHJcblxyXG50eXBlIFNlbGVjdE9wdGlvbjxUPiA9IHtcclxuICAgIHZhbHVlOiBUO1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlbGVjdDxUPihwcm9wczogU2VsZWN0UHJvcHM8VD4pIHtcclxuICAgIGNvbnN0IGlkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZGMtc2VsZWN0IG1kYy1yaXBwbGUtdXBncmFkZWRcIiBzdHlsZT1cImRpc3BsYXk6IGJsb2NrO1wiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cIm1kYy1zZWxlY3RfX2Ryb3Bkb3duLWljb25cIj48L2k+XHJcbiAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIGNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm1kYy1zZWxlY3RfX25hdGl2ZS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLm9wdGlvbnMubWFwKChlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17ZS52YWx1ZX0+e2UubGFiZWx9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDxBdHRyIG5hbWU9XCJ2YWx1ZVwiIHZhbHVlPXtwcm9wcy52YWx1ZX0gLz5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgZm9yPXtpZH1cclxuICAgICAgICAgICAgICAgIGNsYXNzPVwibWRjLWZsb2F0aW5nLWxhYmVsIG1kYy1mbG9hdGluZy1sYWJlbC0tZmxvYXQtYWJvdmVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMubGFiZWx9XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGMtbGluZS1yaXBwbGVcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj4sXHJcbiAgICAgICAgTURDUmlwcGxlLFxyXG4gICAgICAgIDxwXHJcbiAgICAgICAgICAgIGNsYXNzPVwibWRjLXRleHQtZmllbGQtaGVscGVyLXRleHQgbWRjLXRleHQtZmllbGQtaGVscGVyLXRleHQtLXBlcnNpc3RlbnQgbWRjLXRleHQtZmllbGQtaGVscGVyLXRleHQtLXZhbGlkYXRpb24tbXNnXCJcclxuICAgICAgICAgICAgaWQ9e2lkICsgXCJfaGVscGVyX3RleHRcIn1cclxuICAgICAgICA+PC9wPixcclxuICAgIF07XHJcblxyXG4gICAgZnVuY3Rpb24gb25DaGFuZ2UoZXZ0KSB7XHJcbiAgICAgICAgcHJvcHMudmFsdWUudXBkYXRlKGV2dC50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB0cGwgZnJvbSBcImdsb3cuanNcIjtcclxuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTcGlubmVyKCkge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3M9XCJsb2FkZXItc3Bpbm5lclwiPjwvZGl2PjtcclxufVxyXG4iLCJpbXBvcnQgdHBsIGZyb20gXCJnbG93LmpzXCI7XHJcbmltcG9ydCAqIGFzIFJ4IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEV4cHJlc3Npb24gfSBmcm9tIFwiLi4vLi4vbXV0YWJsLmpzL2xpYi9vYnNlcnZhYmxlXCI7XHJcblxyXG5pbnRlcmZhY2UgVGFiQmFyUHJvcHMge1xyXG4gICAgc2VsZWN0ZWQ6IEV4cHJlc3Npb248c3RyaW5nW10+O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhYkJhcihwcm9wczogVGFiQmFyUHJvcHMpIHtcclxuICAgIGNvbnN0IHsgc2VsZWN0ZWQgfSA9IHByb3BzIHx8IHt9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWRjLXRhYi1iYXJcIiByb2xlPVwidGFibGlzdFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRjLXRhYi1zY3JvbGxlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWRjLXRhYi1zY3JvbGxlcl9fc2Nyb2xsLWFyZWEgbWRjLXRhYi1zY3JvbGxlcl9fc2Nyb2xsLWFyZWEtLXNjcm9sbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAwcHg7XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWRjLXRhYi1zY3JvbGxlcl9fc2Nyb2xsLWNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cInBhZGRpbmc6IDEwcHg7XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUGxhbm5pbmcgQnkgRW1wbG95ZWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsPVwiL2FnZW50cy1wbGFubmlnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17c2VsZWN0ZWQubGlmdCgocykgPT4gcy5sZW5ndGggPT09IDApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlRyYWNrIFBsYW5uaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD1cIi9hZ2VudHMtcGxhbm5pZy90cmFja3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtzZWxlY3RlZC5saWZ0KChzKSA9PiBzWzBdID09PSBcInRyYWNrc1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJQbGFubmluZyBCeSBQb3NpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9XCIvYWdlbnRzLXBsYW5uaWcvcGVyLXBvc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17c2VsZWN0ZWQubGlmdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocykgPT4gc1swXSA9PT0gXCJwZXItcG9zaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJEZW1hbmQgUGVyIFBvc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD1cIi9hZ2VudHMtcGxhbm5pZy9kZW1hbmRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17c2VsZWN0ZWQubGlmdCgocykgPT4gc1swXSA9PT0gXCJkZW1hbmRzXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFRhYlByb3BzIHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBhY3RpdmU/OiBFeHByZXNzaW9uPGJvb2xlYW4+O1xyXG4gICAgdXJsPzogc3RyaW5nO1xyXG59XHJcbmZ1bmN0aW9uIFRhYihwcm9wczogVGFiUHJvcHMpIHtcclxuICAgIHZhciByYW5kb20gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGFcclxuICAgICAgICAgICAgcm9sZT1cInRhYlwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwicm91dGVyLWxpbmsgbWRjLXRhYlwiXHJcbiAgICAgICAgICAgIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgICAgICAgICBpZD17XCJ0YWJfXCIgKyByYW5kb219XHJcbiAgICAgICAgICAgIGhyZWY9e3Byb3BzLnVybH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWRjLXRhYl9fY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGMtdGFiX190ZXh0LWxhYmVsXCI+e3Byb3BzLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgY2xhc3M9e1tcclxuICAgICAgICAgICAgICAgICAgICBcIm1kYy10YWItaW5kaWNhdG9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuYWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gcHJvcHMuYWN0aXZlLmxpZnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChiKSA9PiBiICYmIFwibWRjLXRhYi1pbmRpY2F0b3ItLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1kYy10YWItaW5kaWNhdG9yX19jb250ZW50IG1kYy10YWItaW5kaWNhdG9yX19jb250ZW50LS11bmRlcmxpbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZGMtdGFiX19yaXBwbGUgbWRjLXJpcHBsZS11cGdyYWRlZFwiPjwvc3Bhbj5cclxuICAgICAgICA8L2E+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCB0cGwgZnJvbSBcImdsb3cuanNcIjtcclxuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XHJcbmltcG9ydCB7IE1EQ1RleHRGaWVsZCB9IGZyb20gXCJAbWF0ZXJpYWwvdGV4dGZpZWxkXCI7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSBcIi4uLy4uLy4uL211dGFibC5qc1wiO1xyXG5cclxuaW50ZXJmYWNlIFRyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyQ2FsbGJhY2s8Tz4ge1xyXG4gIChjb250cm9sbGVyOiBUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0Q29udHJvbGxlcjxPPik6IHZvaWQgfCBQcm9taXNlTGlrZTx2b2lkPjtcclxufVxyXG5cclxuaW50ZXJmYWNlIEtleWJvYXJkRXZlbnRIYW5kbGVyIHtcclxuICAoZXY6IEtleWJvYXJkRXZlbnQpOiB2b2lkO1xyXG59XHJcbmludGVyZmFjZSBNb3VzZUV2ZW50SGFuZGxlciB7XHJcbiAgKGV2OiBNb3VzZUV2ZW50KTogdm9pZDtcclxufVxyXG5cclxuaW50ZXJmYWNlIElucHV0RXZlbnRzIHtcclxuICBrZXl1cDogS2V5Ym9hcmRFdmVudEhhbmRsZXI7XHJcbiAgbW91c2V1cDogTW91c2VFdmVudEhhbmRsZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBUZXh0RmllbGRQcm9wcyB7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICB2YWx1ZT86IHN0cmluZyB8IFN0YXRlPHVua25vd24+O1xyXG4gIHJlYWRvbmx5PzogYm9vbGVhbjtcclxuICBhdXRvZm9jdXM/OiBib29sZWFuO1xyXG4gIHR5cGU/OiBcImRhdGVcIiB8IFwicGFzc3dvcmRcIjtcclxuICBldmVudHM/OiBQYXJ0aWFsPElucHV0RXZlbnRzPjtcclxuICBpY29uPzogc3RyaW5nO1xyXG4gIHBhcnNlPyh2YWx1ZTogdW5rbm93bik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRleHRGaWVsZChwcm9wczogVGV4dEZpZWxkUHJvcHMpIHtcclxuICBjb25zdCB7IHZhbHVlLCBwYXJzZSB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxsYWJlbFxyXG4gICAgICBjbGFzcz1cIm1kYy10ZXh0LWZpZWxkIG1kYy10ZXh0LWZpZWxkLS1mdWxsd2lkdGggbWRjLXRleHQtZmllbGQtLWZpbGxlZCBtZGMtdGV4dC1maWVsZC0td2l0aC10cmFpbGluZy1pY29uXCJcclxuICAgICAgey4uLnByb3BzLmV2ZW50c31cclxuICAgID5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJtZGMtdGV4dC1maWVsZF9fcmlwcGxlXCI+PC9zcGFuPlxyXG5cclxuICAgICAgPHNwYW4gaWQ9XCJsYWJlbFwiIGNsYXNzPVwibWRjLWZsb2F0aW5nLWxhYmVsXCI+XHJcbiAgICAgICAge3Byb3BzLmxhYmVsfVxyXG4gICAgICA8L3NwYW4+XHJcblxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJsYWJlbFwiXHJcbiAgICAgICAgY2xhc3M9XCJtZGMtdGV4dC1maWVsZF9faW5wdXRcIlxyXG4gICAgICAgIHR5cGU9e3Byb3BzLnR5cGUgfHwgXCJ0ZXh0XCJ9XHJcbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgIGtleXVwPXtkZWZhdWx0VXBkYXRlfVxyXG4gICAgICAgIGNoYW5nZT17ZGVmYXVsdFVwZGF0ZX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIHtwcm9wcy5pY29uICYmIChcclxuICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zIG1kYy10ZXh0LWZpZWxkX19pY29uIG1kYy10ZXh0LWZpZWxkX19pY29uLS10cmFpbGluZ1wiPlxyXG4gICAgICAgICAgZXZlbnRcclxuICAgICAgICA8L2k+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8c3BhbiBjbGFzcz1cIm1kYy1saW5lLXJpcHBsZVwiPjwvc3Bhbj5cclxuICAgICAge01EQ1RleHRGaWVsZH1cclxuICAgIDwvbGFiZWw+XHJcbiAgKTtcclxuXHJcbiAgZnVuY3Rpb24gZGVmYXVsdFVwZGF0ZShlKSB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIFwidXBkYXRlXCIgaW4gdmFsdWUpIHtcclxuICAgICAgdmFsdWUudXBkYXRlKFxyXG4gICAgICAgIHR5cGVvZiBwYXJzZSA9PT0gXCJmdW5jdGlvblwiID8gcGFyc2UoZS50YXJnZXQudmFsdWUpIDogZS50YXJnZXQudmFsdWVcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBJbnB1dChwcm9wczogSW5wdXRQcm9wcykge1xyXG4vLyAgICAgY29uc3QgeyBsYWJlbCwgcmVhZG9ubHksIHZhbHVlLCBhdXRvZm9jdXMsIHR5cGUsIC4uLmNzcyB9ID0gcHJvcHMgfHwge1xyXG4vLyAgICAgICAgIHJlYWRvbmx5OiBmYWxzZSxcclxuLy8gICAgICAgICBsYWJlbDogXCJcIixcclxuLy8gICAgICAgICBjc3M6IFwiXCIsXHJcbi8vICAgICAgICAgYXV0b2ZvY3VzOiBmYWxzZSxcclxuLy8gICAgICAgICB2YWx1ZTogbnVsbCxcclxuLy8gICAgICAgICB0eXBlOiBcInRleHRcIixcclxuLy8gICAgIH07XHJcbi8vICAgICBjb25zdCBpZCA9IFwiX19cIiArIE1hdGgucmFuZG9tKCk7XHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDxGcmFnbWVudD5cclxuLy8gICAgICAgICAgICAgPGRpdlxyXG4vLyAgICAgICAgICAgICAgICAgY2xhc3M9e1tcIm1kYy10ZXh0LWZpZWxkXCIsIFwidGV4dC1maWVsZFwiLCBcIm1kYy1yaXBwbGUtdXBncmFkZWRcIl19XHJcbi8vICAgICAgICAgICAgICAgICB7Li4uY3NzfVxyXG4vLyAgICAgICAgICAgICA+XHJcbi8vICAgICAgICAgICAgICAgICA8aW5wdXRcclxuLy8gICAgICAgICAgICAgICAgICAgICB0eXBlPXtwcm9wcy50eXBlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGF1dG9mb2N1cz17YXV0b2ZvY3VzfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5PXtyZWFkb25seX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBpZD17aWR9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtZGMtdGV4dC1maWVsZF9faW5wdXRcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBrZXl1cD17dXBkYXRlfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNoYW5nZT17dXBkYXRlfVxyXG4vLyAgICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cIm1kYy1mbG9hdGluZy1sYWJlbFwiIGZvcj17aWR9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuLy8gICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbi8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRjLWxpbmUtcmlwcGxlXCIgLz5cclxuLy8gICAgICAgICAgICAgICAgIHtNRENSaXBwbGV9XHJcbi8vICAgICAgICAgICAgICAgICB7TURDVGV4dEZpZWxkfVxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgPHBcclxuLy8gICAgICAgICAgICAgICAgIGNsYXNzPVwibWRjLXRleHQtZmllbGQtaGVscGVyLXRleHQgbWRjLXRleHQtZmllbGQtaGVscGVyLXRleHQtLXBlcnNpc3RlbnQgbWRjLXRleHQtZmllbGQtaGVscGVyLXRleHQtLXZhbGlkYXRpb24tbXNnXCJcclxuLy8gICAgICAgICAgICAgICAgIGlkPXtpZCArIFwiX2hlbHBlcl90ZXh0XCJ9XHJcbi8vICAgICAgICAgICAgID48L3A+XHJcbi8vICAgICAgICAgPC9GcmFnbWVudD5cclxuLy8gICAgICk7XHJcblxyXG4vLyAgICAgZnVuY3Rpb24gdXBkYXRlKGUpIHtcclxuLy8gICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUudXBkYXRlKSB7XHJcbi8vICAgICAgICAgICAgIHZhbHVlLnVwZGF0ZShlLnRhcmdldC52YWx1ZSk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcbiIsImltcG9ydCB0cGwgZnJvbSBcImdsb3cuanNcIjtcclxuaW1wb3J0IHsgTGlzdCB9IGZyb20gXCJnbG93LmpzL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IElmIGZyb20gXCJnbG93LmpzL2NvbXBvbmVudHMvaWZcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiLi4vLi4vLi4vbXV0YWJsLmpzXCI7XHJcbmltcG9ydCB7IEV4cHJlc3Npb24gfSBmcm9tIFwiLi4vLi4vLi4vbXV0YWJsLmpzL2xpYi9vYnNlcnZhYmxlLmpzXCI7XHJcbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRpbWVVbml0ID0gMTU7XHJcblxyXG5leHBvcnQgY29uc3QgaG91ckNvbHVtbnM6IG51bWJlcltdID0gbmV3IEFycmF5KDI0KTtcclxuZm9yIChsZXQgaCA9IDA7IGggPCBob3VyQ29sdW1ucy5sZW5ndGg7IGgrKykge1xyXG4gICAgaG91ckNvbHVtbnNbaF0gPSBoO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWludXRlQ29sdW1ucyA9IGdldE1pbnV0ZUNlbGxzKHRpbWVVbml0KTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGltZVRhYmxlRGF0YTxUPiB7XHJcbiAgICBpZGVudGlmaWVyOiBzdHJpbmc7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgY2hpbGRyZW4/OiBUaW1lVGFibGVEYXRhPFQ+W107XHJcbiAgICB2YWx1ZXMoaG91cjogbnVtYmVyLCBtaW51dGU6IG51bWJlcik6IFQ7XHJcbiAgICBiZ0NvbG9yPyh2YWx1ZTogVCk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBUaW1lVGFibGVQcm9wczxUPiB7XHJcbiAgICBjZWxsQ29udGVudFRlbXBsYXRlKGNlbGw6IFQsIHJvdzogVGltZVRhYmxlRGF0YTxUPik6IGFueTtcclxuICAgIHJvd3M6IFRpbWVUYWJsZURhdGE8VD5bXTtcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBUaW1lVGFibGVSb3c8VD4ge1xyXG4gICAgZGF0YTogVGltZVRhYmxlRGF0YTxUPjtcclxuICAgIGRlcHRoOiBudW1iZXI7XHJcbiAgICBpc0xlYWY6IGJvb2xlYW47XHJcbiAgICB2aXNpYmxlOiBFeHByZXNzaW9uPGJvb2xlYW4+O1xyXG4gICAgcGFyZW50PzogVGltZVRhYmxlUm93PFQ+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaW1lVGFibGU8VD4ocHJvcHM6IFRpbWVUYWJsZVByb3BzPFQ+KSB7XHJcbiAgICBjb25zdCB7IGNlbGxDb250ZW50VGVtcGxhdGUgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgY29sbGFwc2VkID0gbmV3IFN0b3JlPFRpbWVUYWJsZVJvdzxUPltdPihbXSk7XHJcbiAgICBjb25zdCByb3dzID0gZmxhdHRlbihwcm9wcy5yb3dzLCBjb2xsYXBzZWQpO1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gbmV3IFN0b3JlPFRpbWVTZWxlY3Rpb24+KG51bGwpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm9tLXRpbWUtdGFibGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzPVwicm9tLXRpbWUtdGFibGVfX2xvYWRlclwiIElmPVwiaXNMb2FkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm9tLXRpbWUtdGFibGVfX2xvYWRlcl9fY29udGVudFwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIElmPVwidGltZVVuaXQkIHwgYXN5bmMgYXMgdGltZVVuaXRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJyb20tdGltZS10YWJsZVwiXHJcbiAgICAgICAgICAgICAgICBjbGljaz17dGltZVRhYmxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICBuZ0NsYXNzPVwieydyb20tdGltZS10YWJsZS0tbG9hZGluZyc6IGlzTG9hZGluZ31cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm9tLXRpbWUtdGFibGUtY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvbS10aW1lLXRhYmxlLXBvc2l0aW9uX19oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyb20tdGltZS10YWJsZS1wb3NpdGlvbl9fY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmxhYmVsfSAoe3Jvd3MubGVuZ3RofSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGltZVVuaXRzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3Qgc291cmNlPXtyb3dzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyhyb3c6IFRpbWVUYWJsZVJvdzxUPikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElmIGNvbmRpdGlvbj17cm93LnZpc2libGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJZiBjb25kaXRpb249e3Jvdy5kZXB0aCA9PT0gMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb20tdGltZS10YWJsZS1yb3ctLXNlcGFyYXRvclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJvbS10aW1lLXRhYmxlLXBvc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVfZGlzcGxheT1cInJvdy52aXNpYmxlID8gbnVsbCA6ICdub25lJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaWRlbnRpZmllcj17cm93LmRhdGEuaWRlbnRpZmllcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJvbS10aW1lLXRhYmxlLXBvc2l0aW9uX19jb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1hcmdpbi1sZWZ0OiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCtyb3cuZGVwdGggKiAxOCArIDI0KSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJZiBjb25kaXRpb249eyFyb3cuaXNMZWFmfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJtYXJnaW46IGF1dG8gYXV0byBhdXRvIC0yNHB4O1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29sbGFwc2VkLmxpZnQoKGwpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsLmluY2x1ZGVzKHJvdylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwia2V5Ym9hcmRfYXJyb3dfcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJrZXlib2FyZF9hcnJvd19kb3duXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5kYXRhLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm9tLXRpbWUtdGFibGUtcm93LS1zZXBhcmF0b3JcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPExpc3Qgc291cmNlPXtob3VyQ29sdW1uc30+XHJcbiAgICAgICAgICAgICAgICAgICAgeyhob3VyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb20tdGltZS10YWJsZS1jb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb20tdGltZS10YWJsZS1jb2x1bW5fX2hvdXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJlcGVuZFplcm9zKGhvdXIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm9tLXRpbWUtdGFibGUtY29sdW1uX19taW51dGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3Qgc291cmNlPXttaW51dGVDb2x1bW5zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhtaW4pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvbS10aW1lLXRhYmxlLWNvbHVtbl9fbWludXRlc19fY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWluID8gcHJlcGVuZFplcm9zKG1pbikgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdCBzb3VyY2U9e3Jvd3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocm93KSA9PiA8Um93IGhvdXI9e2hvdXJ9IHJvdz17cm93fSAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb20tdGltZS10YWJsZS1yb3ctLXNlcGFyYXRvclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICAgICAgey8qIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRpbWVUYWJsZUNsaWNrKGV2dDogTW91c2VFdmVudCkge1xyXG4gICAgICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBldnQ7XHJcbiAgICAgICAgaWYgKGlzVGFnKHRhcmdldCkpIHtcclxuICAgICAgICAgICAgY29uc3QgY2VsbDogSFRNTEVsZW1lbnQgPSB0YXJnZXQuY2xvc2VzdChcIi5yb20tdGltZS10YWJsZS1jZWxsXCIpO1xyXG4gICAgICAgICAgICBpZiAoY2VsbCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBob3VyLCBpZGVudGlmaWVyIH0gPSBjZWxsLnBhcmVudEVsZW1lbnQuZGF0YXNldDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgbWludXRlIH0gPSBjZWxsLmRhdGFzZXQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtaW51dGVPZmZzZXQgPSAraG91ciAqIDYwICsgK21pbnV0ZTtcclxuICAgICAgICAgICAgICAgIHNlbGVjdENlbGwoaWRlbnRpZmllciwgbWludXRlT2Zmc2V0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCByb3dIZWFkZXI6IEhUTUxFbGVtZW50ID0gdGFyZ2V0LmNsb3Nlc3QoXHJcbiAgICAgICAgICAgICAgICBcIi5yb20tdGltZS10YWJsZS1wb3NpdGlvblwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmIChyb3dIZWFkZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgaWRlbnRpZmllciB9ID0gcm93SGVhZGVyLmRhdGFzZXQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3cgPSByb3dzLmZpbmQoKG4pID0+IG4uZGF0YS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKTtcclxuICAgICAgICAgICAgICAgIGlmIChyb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZWQudXBkYXRlKChsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IGwuaW5kZXhPZihyb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWR4ID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsLnB1c2gocm93KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFjazogVGltZVRhYmxlRGF0YTxUPltdID0gW3Jvdy5kYXRhXTtcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnIgPSBzdGFjay5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgeyBjaGlsZHJlbklkZW50aWZpZXJzIH0gPSBjdXJyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAoY2hpbGRyZW5JZGVudGlmaWVycykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc3QgY2hpbGRWaXNpYmxlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjdXJyLnZpc2libGUgJiYgY3Vyci5tb2RlICE9PSBcImNvbGxhcHNlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgZm9yIChjb25zdCBjaGlsZElkZW50aWZpZXIgb2YgY2hpbGRyZW5JZGVudGlmaWVycykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IGNoaWxkID0gZmluZFJvdyhkYXRhUm93cywgY2hpbGRJZGVudGlmaWVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjaGlsZC52aXNpYmxlID0gY2hpbGRWaXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHN0YWNrLnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdzogSFRNTEVsZW1lbnQgPSB0YXJnZXQuY2xvc2VzdChcIi5yb20tdGltZS10YWJsZS1yb3dcIik7XHJcbiAgICAgICAgICAgIGlmIChyb3cpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgaG91ciwgaWRlbnRpZmllciB9ID0gcm93LmRhdGFzZXQ7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBvZmZzZXRYIH0gPSBldnQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW5JbmRleCA9XHJcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcigoK2hvdXIgKiA2MCkgLyB0aW1lVW5pdCkgK1xyXG4gICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3Iob2Zmc2V0WCAvIDQwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtaW51dGVPZmZzZXQgPSBjb2x1bW5JbmRleCAqIHRpbWVVbml0O1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0Q2VsbChpZGVudGlmaWVyLCBtaW51dGVPZmZzZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBpc1RhZyh0YXJnZXQ6IGFueSk6IHRhcmdldCBpcyBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgICAgIGlmICghdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHsgY2xhc3NMaXN0IH0gPSBlbGVtZW50O1xyXG4gICAgICAgICAgICByZXR1cm4gY2xhc3NMaXN0ICYmICEhY2xhc3NMaXN0LmNvbnRhaW5zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2VsZWN0Q2VsbChyb3dJZGVudGlmaWVyOiBzdHJpbmcsIG1pbnV0ZU9mZnNldDogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbDogVGltZVNlbGVjdGlvbiA9IHNlbGVjdGlvbi5wZWVrKChlKSA9PiBlKTtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0U2VsZWN0aW9uOiBUaW1lU2VsZWN0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgcm93SWRlbnRpZmllcixcclxuICAgICAgICAgICAgICAgIGZyb21UaW1lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWludXRlT2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRvVGltZToge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbnV0ZU9mZnNldDogbWludXRlT2Zmc2V0ICsgdGltZVVuaXQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYgKCFzZWwgfHwgc2VsLnJvd0lkZW50aWZpZXIgIT09IHJvd0lkZW50aWZpZXIpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbi51cGRhdGUodGFyZ2V0U2VsZWN0aW9uKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZnJvbVRpbWUsIHRvVGltZSB9ID0gc2VsO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBpc1RpbWVSYW5nZU92ZXJsYXBwaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW51dGVPZmZzZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZU9mZnNldCArIHRpbWVVbml0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tVGltZS5taW51dGVPZmZzZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvVGltZS5taW51dGVPZmZzZXRcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb24udXBkYXRlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb24udXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93SWRlbnRpZmllcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbVRpbWU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZU9mZnNldDogTWF0aC5taW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgK2Zyb21UaW1lLm1pbnV0ZU9mZnNldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW51dGVPZmZzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvVGltZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlT2Zmc2V0OiBNYXRoLm1heChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArdG9UaW1lLm1pbnV0ZU9mZnNldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW51dGVPZmZzZXQgKyB0aW1lVW5pdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbnRlcmZhY2UgUm93UHJvcHMge1xyXG4gICAgICAgIHJvdzogVGltZVRhYmxlUm93PFQ+O1xyXG4gICAgICAgIGhvdXI6IG51bWJlcjtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIFJvdyhwcm9wczogUm93UHJvcHMpIHtcclxuICAgICAgICBjb25zdCB7IHJvdywgaG91ciB9ID0gcHJvcHM7XHJcbiAgICAgICAgY29uc3QgaHYgPSBoYXNWYWx1ZXMocm93LCBob3VyKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8SWYgY29uZGl0aW9uPXtyb3cudmlzaWJsZX0+XHJcbiAgICAgICAgICAgICAgICA8SWYgY29uZGl0aW9uPXtyb3cuZGVwdGggPT09IDB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb20tdGltZS10YWJsZS1yb3ctLXNlcGFyYXRvclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9JZj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWhvdXI9e2hvdXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1pZGVudGlmaWVyPXtyb3cuZGF0YS5pZGVudGlmaWVyfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt2aXNpYmxlLmxpZnQoKGIpID0+IGIgJiYgXCJkaXNwbGF5OiBub25lXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPXtbXCJyb20tdGltZS10YWJsZS1yb3dcIl19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPElmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbj17aXNDb2x1bW5TZWxlY3RlZChyb3cuZGF0YSwgaG91cikubGlmdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjcykgPT4gY3MgfHwgaHZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0IHNvdXJjZT17bWludXRlQ29sdW1uc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KG1pbnV0ZSkgPT4gPENlbGwgey4uLnByb3BzfSBtaW51dGU9e21pbnV0ZX0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICA8L0lmPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvSWY+XHJcbiAgICAgICAgICAgIC8vICAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICAgICAgIC8vICAgICBJZj1cIlxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHJvdy52aXNpYmxlICYmXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgKChpc0NvbHVtblNlbGVjdGVkXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHwgYXBwbHk6IHNlbGVjdGlvbjpyb3cuaWRlbnRpZmllcjpob3VyKSB8fFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAoaGFzVmFsdWVzIHwgYXBwbHk6IHJvd1tob3VyXTptaW51dGVDb2x1bW5zKSlcclxuICAgICAgICAgICAgLy8gICAgIFwiXHJcbiAgICAgICAgICAgIC8vID5cclxuICAgICAgICAgICAgLy8gPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0NvbHVtblNlbGVjdGVkKHJvdzogVGltZVRhYmxlRGF0YTxUPiwgaG91cjogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgZXhwciA9IHNlbGVjdGlvbi5saWZ0KChzZWwpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzZWwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocm93LmlkZW50aWZpZXIgIT09IHNlbC5yb3dJZGVudGlmaWVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHsgZnJvbVRpbWUsIHRvVGltZSB9ID0gc2VsO1xyXG4gICAgICAgICAgICBjb25zdCB0aW1lT2Zmc2V0ID0gaG91ciAqIDYwO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGlzVGltZVJhbmdlT3ZlcmxhcHBpbmcoXHJcbiAgICAgICAgICAgICAgICB0aW1lT2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgdGltZU9mZnNldCArIDYwLFxyXG4gICAgICAgICAgICAgICAgZnJvbVRpbWUubWludXRlT2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgdG9UaW1lLm1pbnV0ZU9mZnNldFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZXhwcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0NlbGxTZWxlY3RlZChcclxuICAgICAgICByb3c6IFRpbWVUYWJsZVJvdzxUPixcclxuICAgICAgICBob3VyOiBudW1iZXIsXHJcbiAgICAgICAgbWludXRlOiBudW1iZXIsXHJcbiAgICAgICAgc2VsOiBUaW1lU2VsZWN0aW9uXHJcbiAgICApIHtcclxuICAgICAgICBpZiAoIXNlbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHJvdy5kYXRhLmlkZW50aWZpZXIgPT0gc2VsLnJvd0lkZW50aWZpZXIgJiZcclxuICAgICAgICAgICAgaXNUaW1lSW5TZWxlY3Rpb24oeyBtaW51dGVPZmZzZXQ6IGhvdXIgKiA2MCArIG1pbnV0ZSB9LCBzZWwpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYXNWYWx1ZXMocm93OiBUaW1lVGFibGVSb3c8VD4sIGhvdXI6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgbSBvZiBtaW51dGVDb2x1bW5zKSB7XHJcbiAgICAgICAgICAgIGlmIChyb3cuZGF0YS52YWx1ZXMoaG91ciwgbSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpbnRlcmZhY2UgQ2VsbFByb3BzIHtcclxuICAgICAgICByb3c6IFRpbWVUYWJsZVJvdzxUPjtcclxuICAgICAgICBob3VyOiBudW1iZXI7XHJcbiAgICAgICAgbWludXRlOiBudW1iZXI7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBDZWxsKHByb3BzOiBDZWxsUHJvcHMpIHtcclxuICAgICAgICBjb25zdCB7IHJvdywgaG91ciwgbWludXRlIH0gPSBwcm9wcztcclxuICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gc2VsZWN0aW9uLmxpZnQoKHNlbCkgPT5cclxuICAgICAgICAgICAgaXNDZWxsU2VsZWN0ZWQocm93LCBob3VyLCBtaW51dGUsIHNlbClcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGNlbGwgPSByb3cuZGF0YS52YWx1ZXMoaG91ciwgbWludXRlKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzcz17W1xyXG4gICAgICAgICAgICAgICAgICAgIFwicm9tLXRpbWUtdGFibGUtY2VsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQubGlmdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGIpID0+IGIgJiYgXCJyb20tdGltZS10YWJsZS1jZWxsLS1zZWxlY3RlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17aXNTZWxlY3RlZC5saWZ0KChiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmdDb2xvciA9IHJvdy5kYXRhLmJnQ29sb3IgJiYgcm93LmRhdGEuYmdDb2xvcihjZWxsKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWJnQ29sb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImNvbG9yOiB3aGl0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJiYWNrZ3JvdW5kLWNvbG9yOiBcIiArIGJnQ29sb3I7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIGRhdGEtbWludXRlPXttaW51dGV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicm9tLXRpbWUtdGFibGUtY2VsbF9fY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjZWxsQ29udGVudFRlbXBsYXRlKGNlbGwsIHJvdy5kYXRhKX1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TWludXRlQ2VsbHMocHR1OiBudW1iZXIpOiBudW1iZXJbXSB7XHJcbiAgICBjb25zdCByZXN1bHQ6IG51bWJlcltdID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDYwOyBpICs9IHB0dSkge1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKGkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJlcGVuZFplcm9zKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gKFwiMDBcIiArIHZhbHVlKS5zbGljZSgtMik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRpbWVVbml0cygpIHtcclxuICAgIHJldHVybiA8c3Bhbj48L3NwYW4+O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVGltZSB7XHJcbiAgICBtaW51dGVPZmZzZXQ6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFRpbWVTZWxlY3Rpb24ge1xyXG4gICAgcm93SWRlbnRpZmllcjogc3RyaW5nO1xyXG4gICAgZnJvbVRpbWU6IFRpbWU7XHJcbiAgICB0b1RpbWU6IFRpbWU7XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIGlzQ29sdW1uU2VsZWN0ZWQoXHJcbi8vICAgICBzZWxlY3Rpb246IFRpbWVTZWxlY3Rpb24sXHJcbi8vICAgICByb3dJZGVudGlmaWVyOiBzdHJpbmcsXHJcbi8vICAgICBob3VyOiBudW1iZXJcclxuLy8gKSB7XHJcbi8vICAgICBpZiAoIXNlbGVjdGlvbikge1xyXG4vLyAgICAgICAgIHJldHVybiBmYWxzZTtcclxuLy8gICAgIH1cclxuLy8gICAgIGlmIChyb3dJZGVudGlmaWVyICE9PSBzZWxlY3Rpb24ucm93SWRlbnRpZmllcikge1xyXG4vLyAgICAgICAgIHJldHVybiBmYWxzZTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBjb25zdCB7IGZyb21UaW1lLCB0b1RpbWUgfSA9IHNlbGVjdGlvbjtcclxuLy8gICAgIGNvbnN0IHRpbWVPZmZzZXQgPSBob3VyICogNjA7XHJcblxyXG4vLyAgICAgcmV0dXJuIGlzVGltZVJhbmdlT3ZlcmxhcHBpbmcoXHJcbi8vICAgICAgICAgdGltZU9mZnNldCxcclxuLy8gICAgICAgICB0aW1lT2Zmc2V0ICsgNjAsXHJcbi8vICAgICAgICAgZnJvbVRpbWUubWludXRlT2Zmc2V0LFxyXG4vLyAgICAgICAgIHRvVGltZS5taW51dGVPZmZzZXRcclxuLy8gICAgICk7XHJcbi8vIH07XHJcblxyXG5mdW5jdGlvbiBpc1RpbWVSYW5nZU92ZXJsYXBwaW5nKFxyXG4gICAgeDE6IG51bWJlcixcclxuICAgIHkxOiBudW1iZXIsXHJcbiAgICB4MjogbnVtYmVyLFxyXG4gICAgeTI6IG51bWJlclxyXG4pIHtcclxuICAgIHJldHVybiBNYXRoLm1heCh4MSwgeDIpIDwgTWF0aC5taW4oeTEsIHkyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNUaW1lSW5TZWxlY3Rpb24odDE6IFRpbWUsIHMxOiBUaW1lU2VsZWN0aW9uKSB7XHJcbiAgICBjb25zdCB7IG1pbnV0ZU9mZnNldCB9ID0gdDE7XHJcbiAgICBpZiAobWludXRlT2Zmc2V0IDwgczEuZnJvbVRpbWUubWludXRlT2Zmc2V0KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKG1pbnV0ZU9mZnNldCA+PSBzMS50b1RpbWUubWludXRlT2Zmc2V0KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZsYXR0ZW48VD4oXHJcbiAgICByb3dzOiBUaW1lVGFibGVEYXRhPFQ+W10sXHJcbiAgICBjb2xsYXBzZWQ6IFN0b3JlPFRpbWVUYWJsZVJvdzxUPltdPlxyXG4pIHtcclxuICAgIGNvbnN0IHN0YWNrOiBbbnVtYmVyLCBUaW1lVGFibGVEYXRhPFQ+LCBUaW1lVGFibGVSb3c8VD4/XVtdID0gcmV2ZXJzZShcclxuICAgICAgICByb3dzXHJcbiAgICApLm1hcCgocikgPT4gWzAsIHIsIG51bGxdKTtcclxuICAgIGNvbnN0IHJlc3VsdDogVGltZVRhYmxlUm93PFQ+W10gPSBbXTtcclxuXHJcbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IFtkZXB0aCwgY3VyciwgcGFyZW50XSA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IGN1cnI7XHJcbiAgICAgICAgY29uc3Qgcm93OiBUaW1lVGFibGVSb3c8VD4gPSB7XHJcbiAgICAgICAgICAgIGRlcHRoLFxyXG4gICAgICAgICAgICBpc0xlYWY6ICFjaGlsZHJlbiB8fCBjaGlsZHJlbi5sZW5ndGggPT0gMCxcclxuICAgICAgICAgICAgZGF0YTogY3VycixcclxuICAgICAgICAgICAgcGFyZW50LFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBjb2xsYXBzZWQubGlmdCgoY29sKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcCA9IHBhcmVudDtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbC5pbmNsdWRlcyhwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHAgPSBwLnBhcmVudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKHJvdyk7XHJcbiAgICAgICAgaWYgKGNoaWxkcmVuKVxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHJldmVyc2UoY2hpbGRyZW4pKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKFtkZXB0aCArIDEsIGNoaWxkLCByb3ddKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJldmVyc2U8VD4oYXJyOiBUW10pOiBUW10ge1xyXG4gICAgY29uc3QgcmVzdWx0OiBUW10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgcmVzdWx0LnB1c2goYXJyW2ldKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbiIsImV4cG9ydCB0eXBlIEdyb3VwPFQ+ID0geyBrZXk6IHN0cmluZzsgaXRlbXM6IFRbXSB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ3JvdXBCeTxULCBVIGV4dGVuZHMgR3JvdXA8VD4+KFxyXG4gICAgYXJyOiBUW10sXHJcbiAgICBzZWxlY3RvcjogKGl0ZW06IFQpID0+IHN0cmluZyxcclxuICAgIGNvbnN0cnVjdDogKGs6IHN0cmluZywgdDogVCkgPT4gVVxyXG4pOiBVW107XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdyb3VwQnk8VD4oXHJcbiAgICBhcnI6IFRbXSxcclxuICAgIHNlbGVjdG9yOiAoaXRlbTogVCkgPT4gc3RyaW5nXHJcbik6IEdyb3VwPFQ+W107XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdyb3VwQnk8VCwgVSBleHRlbmRzIEdyb3VwPFQ+PihcclxuICAgIGFycjogVFtdLFxyXG4gICAgc2VsZWN0b3I6IChpdGVtOiBUKSA9PiBzdHJpbmcsXHJcbiAgICBjb25zdHJ1Y3Q/OiAoazogc3RyaW5nLCB0OiBUKSA9PiBVXHJcbikge1xyXG4gICAgY29uc3QgZ3JvdXBzOiBhbnlbXSA9IFtdO1xyXG5cclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBhcnIpIHtcclxuICAgICAgICBjb25zdCBrZXkgPSBzZWxlY3RvcihpdGVtKTtcclxuICAgICAgICBjb25zdCBncm91cCA9IGZpbmRHcm91cChrZXkpO1xyXG4gICAgICAgIGlmIChncm91cCkge1xyXG4gICAgICAgICAgICBncm91cC5pdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY29uc3RydWN0KSB7XHJcbiAgICAgICAgICAgIGdyb3Vwcy5wdXNoKGNvbnN0cnVjdChrZXksIGl0ZW0pKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBncm91cHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBrZXksXHJcbiAgICAgICAgICAgICAgICBpdGVtczogW2l0ZW1dLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGdyb3VwcztcclxuXHJcbiAgICBmdW5jdGlvbiBmaW5kR3JvdXAoa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIGdyb3Vwcykge1xyXG4gICAgICAgICAgICBpZiAoZ3JvdXAua2V5ID09IGtleSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdyb3VwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcbiIsImNvbnN0IGRlZmF1bHRSZXF1ZXN0SW5pdDogUmVxdWVzdEluaXQgPSB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKlwiLFxyXG4gICAgICAgIFwiYWNjZXB0LWxhbmd1YWdlXCI6IFwibmwsZW47cT0wLjksZW4tVVM7cT0wLjgsYXI7cT0wLjdcIixcclxuICAgICAgICBcImNhY2hlLWNvbnRyb2xcIjogXCJuby1jYWNoZVwiLFxyXG4gICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04XCIsXHJcbiAgICAgICAgcHJhZ21hOiBcIm5vLWNhY2hlXCIsXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgbW9kZTogXCJjb3JzXCIsXHJcbiAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoSnNvbih1cmw6IHN0cmluZywgaW5pdDogUmVxdWVzdEluaXQgPSB7fSkge1xyXG4gICAgcmV0dXJuIGZldGNoKHVybCwgeyAuLi5kZWZhdWx0UmVxdWVzdEluaXQsIC4uLmluaXQgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwdXRKc29uKHVybDogc3RyaW5nLCBkYXRhLCBpbml0OiBSZXF1ZXN0SW5pdCA9IHt9KSB7XHJcbiAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgcmV0dXJuIGZldGNoKHVybCwgeyAuLi5kZWZhdWx0UmVxdWVzdEluaXQsIC4uLmluaXQsIG1ldGhvZDogXCJQVVRcIiwgYm9keSB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvc3RKc29uKHVybDogc3RyaW5nLCBkYXRhLCBpbml0OiBSZXF1ZXN0SW5pdCA9IHt9KSB7XHJcbiAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgcmV0dXJuIGZldGNoKHVybCwgeyAuLi5kZWZhdWx0UmVxdWVzdEluaXQsIC4uLmluaXQsIG1ldGhvZDogXCJQT1NUXCIsIGJvZHkgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVKc29uKHVybDogc3RyaW5nLCBpbml0OiBSZXF1ZXN0SW5pdCA9IHt9KSB7XHJcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7IC4uLmRlZmF1bHRSZXF1ZXN0SW5pdCwgLi4uaW5pdCwgbWV0aG9kOiBcIkRFTEVURVwiIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IHJlbmRlciwgRG9tRHJpdmVyIH0gZnJvbSBcImdsb3cuanNcIjtcclxuaW1wb3J0IEFwcCBmcm9tIFwiLi9hcHBcIjtcclxuXHJcbnJlbmRlcihuZXcgRG9tRHJpdmVyKFwiI2FwcFwiKSwgQXBwKCkpO1xyXG4iLCJpbXBvcnQgdHBsIGZyb20gXCJnbG93LmpzXCI7XHJcbmltcG9ydCB7IE1EQ1RleHRGaWVsZCB9IGZyb20gXCJAbWF0ZXJpYWwvdGV4dGZpZWxkXCI7XHJcblxyXG5pbnRlcmZhY2UgTG9naW5Qcm9wcyB7XHJcbiAgICBjbGljaygpOiBhbnk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIExvZ2luKHByb3BzOiBMb2dpblByb3BzKSB7XHJcbiAgICBjb25zdCB7IGNsaWNrIH0gPSBwcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWNhcmQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibG9naW4tY2FyZCBtZGMtZWxldmF0aW9uLS16M1wiPlxyXG4gICAgICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbjogMTZweCAwO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCJVc2VyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luOiAxNnB4IDA7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBsYWJlbD1cIlBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1jYXJkLXRvb2xiYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSB0YWJpbmRleD1cIi0xXCIgaHJlZj1cIi4vZm9yZ290XCIgY2xhc3M9XCJmb3Jnb3QtcGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIGZvcmdvdCBwYXNzd29yZCAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljaz17Y2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWRjLWJ1dHRvbi0tcmFpc2VkIG1kYy1yaXBwbGUtdXBncmFkZWQgbWRjLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1kYy1idXR0b25fX2xhYmVsXCI+TG9naW48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuaW50ZXJmYWNlIElucHV0UHJvcHMge1xyXG4gICAgbGFiZWw/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIElucHV0KHByb3BzOiBJbnB1dFByb3BzKSB7XHJcbiAgICBjb25zdCB7IGxhYmVsID0gXCJVbm5hbWVkXCIgfSA9IHByb3BzIHx8IHt9O1xyXG4gICAgY29uc3QgaWQgPSBcIl9cIiArIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWRjLXRleHQtZmllbGRcIiBzdHlsZT1cIndpZHRoOiAxMDAlO1wiPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJtZGMtdGV4dC1maWVsZF9faW5wdXRcIiBpZD17aWR9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGMtbGluZS1yaXBwbGVcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj17aWR9IGNsYXNzPVwibWRjLWZsb2F0aW5nLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIHtNRENUZXh0RmllbGR9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5ranNfYXBwXzAwMVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtqc19hcHBfMDAxXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19tYXRlcmlhbF9kcmF3ZXJfY29tcG9uZW50X2pzLW5vZGVfbW9kdWxlc19tYXRlcmlhbF9tZW51LXN1cmZhY2VfY29tcG9uZW4tOWRhMDg2XCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=