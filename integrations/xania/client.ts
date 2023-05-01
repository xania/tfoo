import { render } from 'xania';

export default (element: HTMLElement) => {
	return function (Component: (...args: unknown[]) => unknown, props: unknown) {
		render(Component(props), element);
	};
};
