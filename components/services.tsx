import { Card } from "@/components/ui/card"

export default function ServicesGrid() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

      <Card className="p-8">
        <h3 className="text-xl font-bold">Oil & Gas</h3>
        <p className="mt-4 text-gray-600">
          Energy investment, petroleum trading and
          infrastructure partnerships.
        </p>
      </Card>

      <Card className="p-8">
        <h3 className="text-xl font-bold">Investments</h3>
        <p className="mt-4 text-gray-600">
          Strategic investments across infrastructure,
          agriculture and emerging sectors.
        </p>
      </Card>

      <Card className="p-8">
        <h3 className="text-xl font-bold">Real Estate</h3>
        <p className="mt-4 text-gray-600">
          Property development and real estate
          investment opportunities.
        </p>
      </Card>

    </section>
  )
}