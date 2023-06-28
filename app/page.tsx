import { fetchBirds } from "@/utils";
import { HomeProps } from "@/types";
import { fuels, yearsOfProduction } from "@/constants";
import { BirdCard, ShowMore, SearchBar, CustomFilter, Hero } from "@/components";

export default async function Home({ searchParams }: HomeProps) {
  const allBirds = await fetchBirds({
    name: searchParams.name || ""
  });

  const isDataEmpty = !Array.isArray(allBirds) || allBirds.length < 1 || !allBirds;

  return (
    <main className='overflow-hidden'>
      {/* <Hero /> */}

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Birds of the world </h1>
          <p>Search by bird name... </p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allBirds?.map((bird) => (
                <BirdCard bird={bird} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allBirds.length}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allBirds?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}