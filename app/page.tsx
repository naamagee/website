import Image from 'next/image'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      <header className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-4">
        </div>
      </header>

      <main className="max-w-4xl mx-auto mt-20 text-center">
        <div className="relative inline-block">
          <Image
            src="/colon3logo_1.png"
            alt="Agency Logo"
            width={120}
            height={120}
            className="rounded-full"
          />
          <div className="absolute -right-4 -bottom-2 bg-white px-3 py-1 rounded-full shadow-lg -rotate-12">
            Colon 3
          </div>
        </div>

        <h1 className="mt-10 text-5xl font-bold leading-tight">
          Small, bootstrapped, explorative products we find joy in.
        </h1>


        <div className="bg-white p-2 rounded-full shadow-lg -rotate-3 mt-8">
          Latest Projects
        </div>

        <div className="mt-20 flex justify-between items-center opacity-50 px-8">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Fashion-Tech Job Board
          </h4>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            SCRT SANTA
          </h4>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Ratter: Scan Rats in NYC
          </h4>

        </div>

        <section className="mt-32 text-center">
          <Image src="/placeholder.svg" alt="Handshake" width={80} height={80} className="mx-auto mb-8" />
          <h2 className="text-4xl font-bold mb-6">
            Let's bring your ideas to life
          </h2>
          <p className="text-xl text-gray-600 mb-10">Tell us about your next project</p>
          <div className="flex justify-center space-x-4">
            Reach us at <a href="mailto:team@colon3.io" >team@colon3.io</a>
          </div>
        </section>
      </main>

      <footer className="mt-32 py-6 text-center text-gray-600">
        <p>© 2024 Colon 3. All rights reserved.</p>
      </footer>
    </div>
  )
}
