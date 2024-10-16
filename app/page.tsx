'use client'
import Image from 'next/image'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans max-h-screen relative">
      <div className="flex h-screen">
        <div className="rect14">
          <div className="flex items-center justify-center relative -mr-[100%] h-[50%]">
            <Image
              src="/colon3logo_1.png"
              alt="Agency Logo"
              width={120}
              height={120}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="rect2">
          <section className="flex flex-col text-center text-white gap-20 justify-end -ml-[100%] h-[90%]">
            <div className="flex gap-2 flex-col">
              <h4 className="scroll-m-20 text-xl font-light tracking-tight ">
              <a className="bg-gradient-to-r from-transparent to-teal-500 px-3 py-1 rounded-2xl mix-blend-overlay" href="https://jobs.threadsoftech.com" rel="noopener" target="_blank">THREADS OF TECH JOB BOARD</a>
              </h4>
              <h4 className="scroll-m-20 text-xl font-light tracking-tight ">
              <a className="bg-gradient-to-r from-transparent to-teal-500 px-3 py-1 rounded-2xl mix-blend-overlay" href="https://apps.apple.com/us/app/ratter/id6736864015" target="_blank">RATTER</a>
              </h4>
              <h4 className="scroll-m-20 text-xl font-light tracking-tight ">
              <span className="bg-gradient-to-r from-transparent to-red-500 px-3 py-1 rounded-2xl mix-blend-overlay">SCRT SANTA</span>
              </h4>
              <h4 className="scroll-m-20 text-xl font-light tracking-tight">
                <span className="bg-gradient-to-r from-transparent to-red-500 px-3 py-1 rounded-2xl mix-blend-overlay">MYKEN</span>
              </h4>
            </div>

            <footer className="text-white uppercase">
              <a href="mailto:heycolon3@gmail.com">heycolon3@gmail.com</a>
            </footer>
          </section>

        </div>
      </div>

      <style jsx>{`
  .rect14 {
    width: 50%;
    background: conic-gradient(from 90deg at 50% 50%, #EFD5BD 0deg, #75839F 360deg);
  }
  .rect2 {
    width: 50%;
    background: conic-gradient(from 270deg at 50% 50%, #75839F 0deg, #EFD5BD 360deg);

  }
`}</style>
    </div>
  )
}