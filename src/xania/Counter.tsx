import { state } from '@xania/view';
import { DemoContainer } from './DemoContainer';

export function Counter() {
	// 1 state
	const count = state(1);
	// 2 update
	const increment = count.update((x) => x + 1);
	// 3 view
	return (
		<DemoContainer>
			<button click={increment}>Count: {count}</button>
		</DemoContainer>
	);
}
