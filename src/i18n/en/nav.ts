/**
 * This configures the navigation sidebar.
 * All other languages follow this ordering/structure and will fall back to
 * English for any entries they haven’t translated.
 *
 * - All entries MUST include `text` and `key`
 * - Heading entries MUST include `header: true` and `type`
 * - Link entries MUST include `slug` (which excludes the language code)
 */
export default [
	{ text: 'Start Here', header: true, type: 'learn', key: 'startHere' },
	{ text: 'Introduction', slug: 'introduction', key: 'introduction' },
	{ text: 'Getting Started', slug: 'getting-started', key: 'getting-started' },

	{
		text: 'Case study',
		header: true,
		type: 'learn',
		key: 'case-study',
	},
	{ text: 'Pokemon', slug: 'concepts/pokemon-intro', key: 'pokemon-intro' },
	{
		text: 'Events',
		slug: 'concepts/events',
		key: 'events',
	},
	{ text: 'State values', slug: 'concepts/state', key: 'state' },
	{ text: 'Derived state', slug: 'concepts/derived-state', key: 'derived-state' },
	{ text: 'Async / Await', slug: 'concepts/async-await', key: 'async-await' },
	{ text: 'The App', slug: 'concepts/pokemon-app', key: 'pokemon-app' },

	{
		text: 'Components',
		header: true,
		type: 'api',
		key: 'components',
	},
	{ text: 'JSX', slug: 'components/jsx', key: 'jsx' },
	{ text: 'Without JSX', slug: 'components/no-jsx', key: 'no-jsx' },
	{ text: 'State', slug: 'components/state', key: 'state' },
	{ text: 'Async components', slug: 'components/async-components', key: 'async-components' },
	{ text: 'If expression', slug: 'components/if-expression', key: 'if-expression' },
	{ text: 'List', slug: 'components/list', key: 'list' },
	{ text: 'Async state', slug: 'components/state', key: 'async-state' },
	{ text: 'Commands', slug: 'components/commands', key: 'commands' },
	{ text: 'Subscriptions', slug: 'components/subscriptions', key: 'subscriptions' },
	{ text: 'Headless components', slug: 'components/headless', key: 'headless' },

	{
		text: 'Integrations',
		header: true,
		type: 'learn',
		key: 'advanced-concepts',
	},
	{ text: 'React', slug: 'integrations/react', key: 'react' },
	{ text: 'Tailwind css', slug: 'integrations/tailwindcss', key: 'tailwindcss' },
	{ text: 'Animations', slug: 'integrations/animations', key: 'animations' },

	{
		text: 'Router',
		header: true,
		type: 'api',
		key: 'reactivity',
	},
	{ text: 'WebApp', slug: 'router/webapp', key: 'web-app' },
	{ text: 'Route', slug: 'router/route', key: 'Route' },
	{ text: 'Link', slug: 'router/link', key: 'link' },
	{ text: 'Nested router', slug: 'router/nested-router', key: 'nested-router' },

	{
		text: 'Architecture',
		header: true,
		type: 'learn',
		key: 'advanced-concepts',
	},
	{ text: 'Overview', slug: 'architecture/overview', key: 'overview' },
	{ text: 'Reactivity', slug: 'architecture/reactivity', key: 'control-flow' },
	{ text: 'Performance', slug: 'architecture/performance', key: 'performance' },
	{ text: 'Composability API', slug: 'architecture/composability-api', key: 'composability-api' },
] as const;
