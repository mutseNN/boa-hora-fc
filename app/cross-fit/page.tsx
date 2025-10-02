import fs from 'fs/promises'
import path from 'path'
import Image from 'next/image'

export const dynamic = 'force-dynamic'

export default async function CrossFit() {
  const p = path.join(process.cwd(), 'data', 'content.json')
  const raw = await fs.readFile(p, 'utf-8')
  const c = JSON.parse(raw)

  return (
    <section>
      <h2 className="text-2xl font-bold">Cross-fit</h2>
      <p className="mt-4 text-lg whitespace-pre-line">{c.crossfit?.text}</p>
      <div className="flex justify-center">
        {c.crossfit?.image && (
          <Image src={c.crossfit.image} alt="Cross-fit" width={800} height={550} className="rounded" />
        )}
      </div>
    </section>
  )
}
