import { Link } from "react-router-dom";
import { PokemonCard } from "../../components/PokemonCard";
import { useQueryPokemonPage } from "../../hooks/useQuery.PokemonPage";
import { Container } from "./style";

export function Home() {
	const { data, isLoading, error, nextPage, prevPage, page, totalPages } =
		useQueryPokemonPage();

	console.log(data);
	if (error) console.error(error);
	return (
		<Container>
			<h1>{"Bem-vindo(a) à Pokedex do Reprograma Jucás"}</h1>

			{isLoading && <span className="feedbackLoading">Now Loading</span>}
			{!isLoading && error && <span className="feedbackLoading">Error</span>}

			<div className="gridCards">
				{data?.map((pokemon) => {
					return (
						<Link to={`/details/${pokemon.name}`} key={pokemon.id}>
							<PokemonCard pokemon={pokemon} />
						</Link>
					);
				})}
			</div>
			<div className="paginationComponent">
				<button onClick={prevPage}>&lt; Anterior</button>
				<button onClick={nextPage}>&gt; Próximo</button>
				<span>
					{String(page).padStart(2, "0")}/{String(totalPages).padStart(2, "0")}
				</span>
			</div>
		</Container>
	);
}
