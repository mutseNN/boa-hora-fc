import fs from 'fs/promises'
import path from 'path'
import Image from 'next/image'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const p = path.join(process.cwd(), 'data', 'content.json')
  const raw = await fs.readFile(p, 'utf-8')
  const content = JSON.parse(raw)

  return (
    <section>
      <h2 className="text-3xl font-bold">Página Principal</h2>

      <p className="mt-4 text-lg whitespace-pre-line">{content.home?.text}</p>

      <div className="flex justify-center">
        {content.home?.image ? (
          <Image src={content.home.image} alt="Home" width={600} height={600} className="rounded" />
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded">
            
          </div>
        )}
      </div>
    </section>
  )
}