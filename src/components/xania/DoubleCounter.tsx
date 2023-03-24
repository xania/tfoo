import '@xania/view';
import { state } from '@xania/view';
import { DemoContainer } from './DemoContainer';

export function DoubleCounter(props: { name }) {
	const count = state(1);
	const double = count.map((x) => x * 2);
	return (
		<DemoContainer>
			<button click={count.update((x) => x + 1)}>Double: {double}</button>
		</DemoContainer>
	);
}
