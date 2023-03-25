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
	{ text: 'Getting Started', slug: 'getting-started', key: 'getting-started' },

	{
		text: 'Core concepts',
		header: true,
		type: 'learn',
		key: 'core-concepts',
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
		text: 'Coming soon',
		header: true,
		type: 'learn',
		key: 'coming-soon',
	},
	{ text: 'Control flow', slug: 'concepts/control-flow', key: 'control-flow' },
] as const;
