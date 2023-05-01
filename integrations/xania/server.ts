// import * as xn from 'xania';

export default {
	check(Component: unknown) {
		return Component instanceof Function;
	},
	renderToStaticMarkup(Component: unknown, ...args: unknown[]) {
		console.log('renderToStaticMarkup #', args.length);
		return { html: '<div>fasdfasdfasd</div><script>console.log(this)</script>' };
	},
};
