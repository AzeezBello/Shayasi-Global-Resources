export const metadata = {
  title: "Services | Shayasi Global Resources",
  description:
    "Explore the services of Shayasi Global Resources including Oil & Gas, Investments, and Real Estate development.",
};

export default function ServicesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold">
        Our Services
      </h1>

      <p className="mt-6 text-gray-600 max-w-2xl">
        Shayasi Global Resources operates across multiple sectors
        that contribute to economic development and long-term
        investment growth.
      </p>

      <section className="grid md:grid-cols-3 gap-10 mt-16">

        <div className="border rounded-xl p-8">
          <h3 className="text-xl font-bold">
            Oil & Gas
          </h3>

          <p className="mt-4 text-gray-600">
            Strategic partnerships, energy investments and
            supply chain services within Nigeria’s oil and gas sector.
          </p>
        </div>

        <div className="border rounded-xl p-8">
          <h3 className="text-xl font-bold">
            Investments
          </h3>

          <p className="mt-4 text-gray-600">
            Identification and development of strategic
            investment opportunities across multiple sectors.
          </p>
        </div>

        <div className="border rounded-xl p-8">
          <h3 className="text-xl font-bold">
            Real Estate
          </h3>

          <p className="mt-4 text-gray-600">
            Property development, land acquisition,
            and real estate investment projects.
          </p>
        </div>

      </section>

    </main>
  );
}