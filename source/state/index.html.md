---
title: State

language_tabs: # must be one of https://git.io/vQNgJ
  - typescript

toc_footers:
  - <a href='https://github.com/xania/state'>Github</a>

includes:
  - errors

search: true

code_clipboard: true

meta:
  - name: description
    content: State and View libraries by Xania
---

# Getting started

```npm
 npm install @xania/state
```

To get you started you only need to install the _@xania/state_ package

# Introduction

```typescript
import { State } from "@xania/state";

const count = new State(1);
const subscription = count.subcribe({
  next(value: number) {
    console.log(value);
  },
});

subscription.unsubscribe();
```

### benchmark result:

![benchmark results](./images/benchmark-results.png)

Reactivity in _@xania/state_ is in first place about setting up the logic of how the data flows, independent from weither the actual data is available or not. Secondly, when data is available or is changed then the states should be synchronised according to this logic.

We also allow observers to subscribe to the individual state values. These observer are immediately notified on subscription (when state current value is not `undefined`) and on changes of the state values. So when observers are being called we can be sure the state is changed.

- monadic state (map, bind)
- topological sorting
- asynchronuous data (in progress)
- scheduling (in progress)
- batching (in progress)

# State operators

prop, map, bind

## Property operator

```typescript
import { State } from "@xania/state";

const person = new State({ firstName: "ibrahim" });
const firstName = person.prop("firstName");
```

## Map operator

```typescript
import { State } from "@xania/state";

const count = new State(1);
const isEvent = count.map((x) => x % 2 === 0);
```

map a state to a derived state.

## Bind operator

```typescript
import { State } from "@xania/state";

const count = new State(1);
const even = new State("even");
const odd = new State("odd");

const choice = count.bind((x) => (x % 2 === 0 ? even : odd));
```

<!-- <aside class="notice">
</aside> -->

<!-- <aside class="success">
Remember — a happy kitten is an authenticated kitten!
</aside> -->

# State mutations

```typescript
function App() {
  const selection = new State(1);

  const employee = await selection.map(fetchEmployee);
  // derived state allowes for mutations
  employee.prop("firstName").set("Ibrahim");
}
```

All types of state values allow for setting values. Not all these mutation on state `s` are guaranteed to be in sync with others states that `s` derives from. The quarantee that _@xania/state_ provides is that when at the root state value is updated then the dependents are correctly and in most efficient and performant manner are synchronised.

In some cases this behavior is desirable. It is in this cases the responsibility of the user to propate the updates back to the root state.

# Special case of undefined

```typescript
import { State } from "@xania/state";

const count = new State(1);
count.subcribe({
  next(value: number) {
    console.log(value);
  },
});
// prints: 1

count.set(undefined);
// count value is still 1
```

A new `State` object when no value is provided then `State` as not initialized in which case the observers will not be notified untill non `undefined` value is provided. Also updates with `undefined` value are not process and the previous value is untouched.
This also applies for derived state, e.g. when a state value is mapped to undefined.

# Promises

```typescript
import { State } from "@xania/state";

async function App() {
  const id = new State(1);
  const pokemon = await count.map(fetchPokemon);
}
```

map and bind operators automatically unwrap promises

# Motivation

## fine-grained state

# RxJS interop

# Diamond problem
