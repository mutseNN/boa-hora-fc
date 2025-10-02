import fs from 'fs/promises'
import path from 'path'
import Image from 'next/image'

export const dynamic = 'force-dynamic'

export default async function Padel() {
  const p = path.join(process.cwd(), 'data', 'content.json')
  const raw = await fs.readFile(p, 'utf-8')
  const c = JSON.parse(raw)

  return (
    <section>
      <h2 className="text-2xl font-bold">Padel</h2>
      <p className="mt-4 text-lg whitespace-pre-line">{c.padel?.text}</p>
      <div className="flex justify-center">
        {c.padel?.image && (
          <Image src={c.padel.image} alt="Padel" width={600} height={500} className="rounded" />
        )}
      </div>
    </section>
  )
}

