import 'xania';

import classes from './DemoContainer.module.scss';

export function DemoContainer(props: { children: JSX.Children }) {
	return <div class={classes['demo-container']}>{props.children}</div>;
}
