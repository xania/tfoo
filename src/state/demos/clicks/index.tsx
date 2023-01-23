import { State } from "@xania/state";
import { EventContext, jsx } from "@xania/view";
import { Output } from "../../../components";

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
