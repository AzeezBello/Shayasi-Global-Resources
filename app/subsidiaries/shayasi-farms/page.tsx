export const metadata = {
  title: "Shayasi Farms | Agricultural Subsidiary",
  description:
    "Shayasi Farms Limited is the agricultural subsidiary of Shayasi Global Resources focused on crop farming and livestock production.",
};

export default function ShayasiFarmsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold">
        Shayasi Farms
      </h1>

      <p className="mt-6 text-gray-600">
        Shayasi Farms Limited is the agricultural subsidiary of
        Shayasi Global Resources, focused on modern agribusiness
        and sustainable food production.
      </p>

      <h2 className="text-2xl font-bold mt-16">
        Our Agricultural Focus
      </h2>

      <ul className="mt-4 text-gray-600 space-y-2">
        <li>Crop Farming</li>
        <li>Livestock Production</li>
        <li>Agricultural Commodity Trading</li>
      </ul>

      <h2 className="text-2xl font-bold mt-16">
        Our Commitment
      </h2>

      <p className="mt-4 text-gray-600">
        Shayasi Farms is committed to sustainable farming practices,
        improved agricultural productivity, and supporting Nigeria’s
        food security.
      </p>

    </main>
  );
}