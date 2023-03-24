import '@xania/view';
import { DemoContainer } from './DemoContainer';

export async function PokemonProfile(props: { id }) {
	const pokemon = await fetchPokemon(props.id);
	const abilities = pokemon.abilities.map((a) => a.ability);

	return (
		<DemoContainer>
			<div>
				<b>{pokemon.name}</b>
			</div>
			<div>
				{abilities.map((a) => (
					<li>{a.name}</li>
				))}
			</div>
		</DemoContainer>
	);
}

type Pokemon = { name: string; abilities: { ability: { name: string } }[] };
function fetchPokemon(id) {
	return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((r) => r.json()) as Promise<Pokemon>;
}
