export const metadata = {
  title: "Shayasi Global Resources | Oil & Gas, Investments, Real Estate",
  description:
    "Shayasi Global Resources is a Nigerian company specializing in Oil & Gas, investments, real estate and agricultural development.",
};

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">

      <section className="text-center py-20">
        <h1 className="text-5xl font-bold">
          Powering Energy, Investments & Development
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Shayasi Global Resources is a diversified Nigerian company focused on
          oil & gas, strategic investments, real estate development, and
          agribusiness through its subsidiary Shayasi Farms.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-10 py-16">

        <div className="p-8 border rounded-xl">
          <h3 className="text-xl font-bold">Oil & Gas</h3>
          <p className="mt-4 text-gray-600">
            Participation in the oil and gas value chain through strategic
            partnerships, supply services, and energy investments.
          </p>
        </div>

        <div className="p-8 border rounded-xl">
          <h3 className="text-xl font-bold">Investments</h3>
          <p className="mt-4 text-gray-600">
            Strategic investments in infrastructure, agriculture,
            and emerging sectors with long-term growth potential.
          </p>
        </div>

        <div className="p-8 border rounded-xl">
          <h3 className="text-xl font-bold">Real Estate</h3>
          <p className="mt-4 text-gray-600">
            Development and investment in residential and commercial
            real estate projects across Nigeria.
          </p>
        </div>

      </section>

      <section className="py-20">

        <h2 className="text-3xl font-bold">
          Our Agricultural Subsidiary
        </h2>

        <p className="mt-6 text-gray-600 max-w-2xl">
          Shayasi Farms Limited operates as the agricultural arm of
          Shayasi Global Resources, focusing on crop farming,
          livestock production, and agricultural trading.
        </p>

      </section>

      <section className="py-20">

        <h2 className="text-3xl font-bold">
          Head Office
        </h2>

        <p className="mt-4 text-gray-600">
          AYINKE HOUSE <br/>
          120 Mushin Road <br/>
          Isolo, Lagos Nigeria
        </p>

      </section>

    </main>
  );
}