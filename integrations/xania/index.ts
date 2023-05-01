import type { AstroIntegration } from 'astro';
// import * as xn from 'xania';

function getRenderer() {
	return {
		name: 'xania',
		clientEntrypoint: './integrations/xania/client.ts',
		serverEntrypoint: './integrations/xania/server.ts',
		jsxImportSource: 'xania',
		jsxTransformOptions: async () => {
			// @ts-expect-error types not found
			const babelPluginTransformReactJsxModule = await import('@babel/plugin-transform-react-jsx');
			const jsx =
				babelPluginTransformReactJsxModule?.default?.default ??
				babelPluginTransformReactJsxModule?.default;
			return {
				plugins: [
					jsx(
						{},
						{
							runtime: 'automatic',
							importSource: 'xania',
						}
					),
				],
			};
		},
	};
}

function getViteConfiguration() {
	return {
		optimizeDeps: {
			include: ['xania', 'xania/jsx-runtime', 'xania/jsx-dev-runtime'],
		},
		resolve: {
			dedupe: ['xania'],
		},
		ssr: {
			// external: ['react-dom/server.js', 'react-dom/client.js'],
			noExternal: [
				// These are all needed to get mui to work.
				'@mui/material',
				'@mui/base',
				'@babel/runtime',
			],
		},
	};
}

export default function (): AstroIntegration {
	return {
		name: '@astrojs/xania',
		hooks: {
			'astro:config:setup': ({ addRenderer, updateConfig }) => {
				addRenderer(getRenderer());
				updateConfig({ vite: getViteConfiguration() });
			},
		},
	};
}
