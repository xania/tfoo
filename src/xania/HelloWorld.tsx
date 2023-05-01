import 'xania';
import { DemoContainer } from './DemoContainer';

export function HelloWorld(props: { name }) {
	console.log(props);
	const { name } = props;
	return (
		<DemoContainer>
			<button click={() => window.alert(`hello ${name}!`)}>Say hello</button>
		</DemoContainer>
	);
}
