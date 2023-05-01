import 'xania';
import { state } from 'xania';
import { DemoContainer } from './DemoContainer';

export async function PokemonApp() {
	const pokemons = await fetchPokemons();

	const id = state(pokemons[0].name);
	const pokemon = id.map(fetchPokemon);

	return (
		<DemoContainer>
			<div>
				<b>{pokemon.prop('name')}</b>
			</div>
			<div>weight: {pokemon.prop('weight')}</div>
			<div class="box">
				{pokemons.map((p) => (
					<a click={id.update(() => p.name)}>{p.name}</a>
				))}
			</div>
		</DemoContainer>
	);
}

function fetchPokemons() {
	return fetch('https://pokeapi.co/api/v2/pokemon/')
		.then((e) => e.json())
		.then((data) => data.results) as Promise<Pokemon[]>;
}
type Pokemon = { name: string; weight: number; abilities: { ability: { name: string } }[] };
function fetchPokemon(id) {
	console.log(id);
	return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((r) => r.json()) as Promise<Pokemon>;
}
