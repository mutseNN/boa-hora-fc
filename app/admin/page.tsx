'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminDashboard() {
  const router = useRouter()
  const [content, setContent] = useState<any>(null)
  const [msg, setMsg] = useState<string | null>(null)
  const [reservas, setReservas] = useState<any[]>([])

  // Carregar conteúdo
  useEffect(() => {
    fetch('/api/content')
      .then(r => {
        if (r.status === 401) router.push('/admin/login')
        return r.json()
      })
      .then(setContent)
  }, [router])

  // Carregar reservas
  useEffect(() => {
    fetch('/api/reservas')
      .then(r => r.json())
      .then(setReservas)
  }, [])

  async function save() {
    const res = await fetch('/api/content', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(content)
    })
    setMsg(res.ok ? 'Guardado com sucesso!' : 'Erro ao guardar')
  }

  if (!content) return <p className="mt-10 text-center">A carregar...</p>

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Back Office</h2>

      {/* Secção de edição de conteúdo */}
      <div className="space-y-6">
        {Object.keys(content).map((key) => (
          <div key={key} className="border p-4 rounded bg-gray-50">
            <h3 className="font-semibold capitalize">{key}</h3>
            <textarea
              className="w-full border rounded p-2 mt-2"
              value={content[key]?.text || ''}
              onChange={e =>
                setContent({
                  ...content,
                  [key]: { ...content[key], text: e.target.value }
                })
              }
            />
            <input
              className="w-full border rounded p-2 mt-2"
              placeholder="URL da imagem (opcional)"
              value={content[key]?.image || ''}
              onChange={e =>
                setContent({
                  ...content,
                  [key]: { ...content[key], image: e.target.value }
                })
              }
            />
          </div>
        ))}

        <button
          onClick={save}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Guardar
        </button>
        {msg && <p className="mt-2">{msg}</p>}
      </div>

      {/* Secção de reservas de futsal */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Reservas de Campo de Futsal</h3>
        {reservas.length === 0 ? (
          <p>Não existem reservas registadas.</p>
        ) : (
          <ul className="space-y-2">
            {reservas.map((r) => (
              <li key={r.id} className="border p-3 rounded bg-white">
                <p><strong>Nome:</strong> {r.nome}</p>
                <p><strong>Data:</strong> {r.data}</p>
                <p><strong>Duração:</strong> {r.duracao}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Logout */}
      <form action="/api/logout" method="post" className="mt-6">
        <button className="px-3 py-1 bg-red-600 text-white rounded">Logout</button>
      </form>
    </div>
  )
}
