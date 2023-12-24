import Product from "@/app/components/Product";
import Hero from "./components/Hero";

export default async function Home() {
  const res = await fetch('https://fakestoreapi.com/products')
  const products = await res.json()

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0 mt-2">
      <Hero />
      <section className="flex flex-col space-y-12">
        <h1 className="text-5xl font-bold text-center text-slate-900">Shokh Shop Products</h1>
        <div className="text-slate-900 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3">
          {
            products.map(product => (
              <Product key={product.id} product={product} />
            ))
          }
        </div>
      </section>
    </main>
  )
}

