import fs from 'fs/promises'
import path from 'path'

export const dynamic = 'force-dynamic'

export default async function Sobre() {
  const p = path.join(process.cwd(), 'data', 'content.json')
  const raw = await fs.readFile(p, 'utf-8')
  const c = JSON.parse(raw)

  return (
    <section>
      <h2 className="text-2xl font-bold">Sobre Nós</h2>
      <p className="mt-4 text-lg whitespace-pre-line">{c.sobre?.text}</p>   
    </section>
  )
}
