import { PokemonCard } from "../../components/PokemonCard";
import { useQueryPokemonPage } from "../../hooks/useQuery.PokemonPage";
import { Container } from "./style";

export function Home() {
	const { data } = useQueryPokemonPage();

	console.log(data);

	return (
		<Container>
			<h1>{"Bem-vindo(a) à Pokedex do Reprograma Jucás"}</h1>

			<div className="gridCards">
				{data?.map((pokemon) => {
					return <PokemonCard pokemon={pokemon} />;
				})}
			</div>
		</Container>
	);
}
