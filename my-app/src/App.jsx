import { Hero, Services, SpecialOffer, Footer, PopularProducts, SuperQuality, Subscribe, CustomerComponents } from "./sections"
import Nav from "./components/Nav"


const App = () => {

  return (
    <>
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <SuperQuality />
      </section>
      <section className="sm:px-16 px-8 py-10">
        <Services />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue sm:px-16 px-8 sm:py24 py-12">
        <CustomerComponents />
      </section>
      <section className="bg-slate-600 sm:px:16 px-8 sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black sm:px-16 px-8 sm:pt-24 pt-12 pb-8">
        <Footer />
      </section>
    </main>
    </>
  )
}

export default App;
