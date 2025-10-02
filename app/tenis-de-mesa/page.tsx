import fs from 'fs/promises'
import path from 'path'
import Image from 'next/image'

export const dynamic = 'force-dynamic'

export default async function TenisDeMesa() {
  const p = path.join(process.cwd(), 'data', 'content.json')
  const raw = await fs.readFile(p, 'utf-8')
  const c = JSON.parse(raw)

  return (
    <section>
      <h2 className="text-2xl font-bold">Ténis de Mesa</h2>
      <p className="mt-4 text-lg whitespace-pre-line">{c.tenis?.text}</p>
      <div className="flex justify-center">
        {c.tenis?.image && (
          <Image src={c.tenis.image} alt="Ténis de Mesa" width={600} height={400} className="rounded" />
        )}
      </div>
    </section>
  )
}