import { JsxElement, jsxFactory, TemplateNodeType } from "@xania/view";
import classes from "../layout.module.scss";
import { Bash, Img, Javascript, Output } from "../components";
import { Outline } from "../outline";
import { Search } from "../search";
import benchmarkImg from "./assets/benchmark-results.png";
import { Diamond } from "./demos/diamond";
import logoUrl from "./assets/logo.webp";
import * as Rx from "rxjs";
import { from, fromAsyncIterable } from "@xania/state";
import { ClickEvents } from "./demos/clicks";

const jsx = jsxFactory({ classes });

export function App() {
  const main = <Main />;
  return (
    <div class="app">
      <div class="app__aside">
        <div class="logo" style={`background-image: url(${logoUrl})`} />
        <h1>Super Docu</h1>
        <Search />
        <Outline>{main}</Outline>
        <footer>
          <a class="github" href="https://github.com/xania/state">
            <span>Github</span>
          </a>
        </footer>
      </div>
      {main}
    </div>
  );
}

function Main() {
  return (
    <div class="app__main">
      <div class="section">
        <div class="section__content">
          <h1 id={"getting-started"}>Getting started</h1>
        </div>
        <div class="section__code"></div>
      </div>
      <div class="section">
        <div class="section__content">
          <p>
            To get you started you only need to install the{" "}
            <code>@xania/state</code> package
          </p>
        </div>
        <div class="section__code">
          <Bash>npm install @xania/view</Bash>
        </div>
      </div>
      <div class="section">
        <div class="section__content">
          <h1 id={"introduction"}>Introduction</h1>
          <p>
            <code>@xania/state</code> makes working with app state easier. It
            implements eager (as opposite to lazy) and always shared Observable
            patterns. This property makes <code>@xania/state</code> better
            suited for app data but, by design, less applicable for events. On
            the other hand, <code>RxJS</code> better suited for events and less
            so for stateful data. <code>@xania/state</code> also provides
            Interopability with RxJS so transformations from events to state
            data and back to events are well supported.
          </p>
          <p>
            Reactivity in <code>@xania/state</code> is implemented using an
            internal graph connecting state and derived states. Observers can
            subscribe to all state values of the graph.
          </p>
        </div>
        <div class="section__code">
          <Javascript lines={[5, 11]}>
            {`
// 1. import
import { State } from "@xania/state";

// 2. create
const count = new State(1);

// 3. subscribe
const subscription = count.subcribe({
  next(value: number) {
    // 4. react on distinct values 
    console.log(value);
  },
});

// 5. unsubscribe
subscription.unsubscribe();        
            `}
          </Javascript>
        </div>
      </div>
      <div class="section">
        <div class="section__content">
          <h1 id={"core-features"}>Core features</h1>
          <ul>
            <li>monadic state (map, bind)</li>
            <li>topological sorting</li>
            <li>asynchronuous data</li>
            <li>scheduling</li>
            <li>batching</li>
            <li>
              <code>RxJS</code> Interopability
            </li>
          </ul>
        </div>
        <div class="section__code"></div>
      </div>
      <div class="section">
        <div class="section__content">
          <h1 id={"fine-grained-state"}>Fine-grained state</h1>
          <h2>Benchmark results</h2>
          <p>
            <Img height={200} src={benchmarkImg} />
          </p>
        </div>
        <div class="section__code"></div>
      </div>
      <div class="section">
        <div class="section__content">
          <h1 id={"state"}>State</h1>
        </div>
        <div class="section__code"></div>
      </div>
      <div class="section">
        <div class="section__content">
          <h2 id={"create-state"}>Create new state object</h2>
        </div>
        <div class="section__code">
          <Javascript lines={[4]}>
            {`
import { State } from "@xania/state";

function App() {
  const count = new State<number>();
}`}
          </Javascript>
        </div>
      </div>
      <div class="section">
        <div class="section__content">
          <h2 id={"combine-latest"}>Combine latest</h2>
        </div>
        <div class="section__code">
          <Javascript lines={[6]}>
            {`
import { State, combineLatest } from "@xania/state";

function App() {
  const x = new State<number>(1);
  const y = new State<number>(2);
  const sum = combineLatest([x, y]).map(([x, y]) => x + y)
}
            `}
          </Javascript>
        </div>
      </div>
      <div class="section">
        <div class="section__content">
          <h1 id={"state-operators"}>State operators</h1>
          <p>prop, map, bind</p>
        </div>
        <div class="section__code"></div>
      </div>
      <div class="section">
        <div class="section__content">
          <h2 id={"property-oprator"}>Property operator</h2>
          <p>prop, map, bind</p>
        </div>
        <div class="section__code"></div>
      </div>
      <div class="section">
        <div class="section__content">
          <h2 id={"create-state"}>Map operator</h2>
          <p>prop, map, bind</p>
        </div>
        <div class="section__code"></div>
      </div>
      <div class="section">
        <div class="section__content">
          <h1 id={"state-mutations"}>State mutations</h1>
          <p>
            All types of state values allow for update.{" "}
            <code>@xania/state</code> guarantees that when a state value is
            updated then the dependents are synchronised in most efficient and
            performant manner. But it does not guarantee that all these mutation
            on state s will be synchronised with dependencies of s. In case s is
            derived from a property of a parent state then synchronisation is
            obvious, but when mapped by a function then after update of s we
            rely on events handling by user to propagate the value back to it's
            parent/dependencies. There are cases where this behavior is
            desirable for example when data in s first need to be verified
            manually send to backend and only after succesful save we propagate
            the values to the dependencies.
          </p>
        </div>
        <div class="section__code"></div>
      </div>
      <div class="section">
        <div class="section__content">
          <h2 id={"special-case-of-undefined"}>Special case of undefined</h2>
          <p>
            A new State object when no value is provided then State as not
            initialized in which case the observers will not be notified untill
            non undefined value is provided. Also updates with undefined value
            are not processed and the previous value is untouched. This also
            applies for derived state, e.g. when a state value is mapped to
            undefined.
          </p>
        </div>
        <div class="section__code"></div>
      </div>
      <div class="section">
        <div class="section__content">
          <h1 id={"rxjs-interop"}>
            <code>RxJS</code> Interopability
          </h1>
          <p>
            State can be constructed from different types of <i>external</i>{" "}
            sources. We eagerly subscribe once to the external sources and share
            the same data to all it's listeners. As a consequence of this the
            late listeners are not guaranteed to receive all the emitted data.
          </p>
        </div>
        <div class="section__code"></div>
      </div>
      <div class="section">
        <div class="section__content">
          <h2 id={"create-state"}>from Observable</h2>
          <p>
            <Output>{from(Rx.timer(0, 1000))}</Output>
          </p>
        </div>
        <div class="section__code">
          <Javascript lines={[4]}>
            {`
import { from } from "@xania/state";
import { timer } from "rxjs";

const state = from(timer(0, 1000));
            `}
          </Javascript>
        </div>
      </div>
      <div class="section">
        <div class="section__content">
          <h2 id={"create-state"}>from Promise</h2>
          <p>
            <Output>{from(Promise.resolve(1))}</Output>
          </p>
        </div>
        <div class="section__code">
          <Javascript lines={[3]}>
            {`
import { from } from "@xania/state";

const state = from(Promise.resolve(1));
            `}
          </Javascript>
        </div>
      </div>
      <div class="section">
        <div class="section__content">
          <h2 id={"from-async-iterator"}>from AsyncIterable</h2>
          <p>
            <Output>{fromAsyncIterable(asyncGenerator())};</Output>
          </p>
        </div>
        <div class="section__code">
          <Javascript lines={[3]}>
            {`
import { from } from "@xania/state";

fromAsyncIterable(asyncGenerator());

async function* asyncGenerator() {
  let i = 0;
  while (true) {
    yield i++;
    await delay(1000);
  }
}
`}
          </Javascript>
        </div>
      </div>
      <div class="section">
        <div class="section__content">
          <h2 id={"from-event"}>from Event</h2>
          <p>
            We belief that accessing the DOM directly from the <i>user code</i>{" "}
            is not the best approach. It should be ideally a feature of the view
            library to bind events to state objects. The view library by xania
            e.g. supports binding of events to observers, which is the case for{" "}
            <code>State</code> object. Here is an declarative example built on
            xania JSX view library.
          </p>
          <p>
            <ClickEvents />
          </p>
          <p>
            If we however need to bind to events we can use RxJS's fromEvent as
            an intermediate step:
          </p>
          <Javascript lines={[8]}>{`from(fromEvent(elt,"click"))`}</Javascript>
        </div>
        <div class="section__code">
          <Javascript lines={[8]}>
            {`
import { State } from "@xania/state";
import { jsx } from "@xania/view";

export function ClickEvents() {
  const clicks = new State<EventContext<unknown, MouseEvent>>();
  return (
    <div>
      <button click={clicks}>Click me</button>

      <div>
        <span>Click x coordinate:</span>
        <Output>{clicks.map((e) => e.event.clientX)} &nbsp;</Output>
      </div>
    </div>
  );
}
            `}
          </Javascript>
        </div>
      </div>
      <div class="section">
        <div class="section__content">
          <h1 id={"diamond-problem"}>Diamond problem</h1>
          <Diamond />
        </div>
        <div class="section__code"></div>
      </div>
      <div class="section section--fill">
        <div class="section__content"></div>
        <div class="section__code"></div>
      </div>
    </div>
  );
}

function outline(template: JSX.Element) {
  const result = [];
  if (template instanceof JsxElement) {
    const stack = [template.templateNode];

    while (stack.length) {
      const curr = stack.pop()!;
      if (curr.name === "h1") {
        const id = curr.attrs["id"];
        if (id) {
          result.push(
            <div>
              <a
                class={[
                  "app__outline__link",
                  result.length === 0 ? "app__outline__link--selected" : null,
                ]}
                href={"#" + id}
              >
                {curr.childNodes}
              </a>
            </div>
          );
        }
      }

      let length = curr.childNodes.length;
      while (length--) {
        const child = curr.childNodes[length];
        if (child.type === TemplateNodeType.Tag) stack.push(child);
      }
    }
  }

  return result;
}

async function* asyncGenerator() {
  let i = 0;
  while (true) {
    yield i++;
    await delay(1000);
  }

  function delay(ts: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ts);
    });
  }
}
