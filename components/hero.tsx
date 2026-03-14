import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center">

      <Image
        src="/hero-energy.jpg"
        alt="Energy infrastructure"
        fill
        className="object-cover"
      />

      <div className="relative z-10 max-w-6xl mx-auto text-white px-6">

        <h1 className="text-6xl font-bold leading-tight">
          Powering Energy,
          Investments & Development
        </h1>

        <p className="mt-6 text-xl max-w-xl">
          Shayasi Global Resources delivers strategic investments
          in Oil & Gas, Real Estate and Agriculture across Nigeria.
        </p>

      </div>

    </section>
  )
}