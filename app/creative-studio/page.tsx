const assets = [
  { id: 1, name: "Name 1", type: "Type 1", size: "Size 1", date: "Jan 1, 2026" },
  { id: 2, name: "Name 2", type: "Type 2", size: "Size 2", date: "Jan 1, 2026" },
  { id: 3, name: "Name 3", type: "Type 3", size: "Size 3", date: "Jan 1, 2026" },
];

export default function CreativeStudio() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Creative Studio</h1>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-200 text-gray-500 text-sm">
            <th className="py-2 pr-4">Name</th>
            <th className="py-2 pr-4">Type</th>
            <th className="py-2 pr-4">Size</th>
            <th className="py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((a) => (
            <tr key={a.id} className="border-b border-gray-100 text-sm">
              <td className="py-3 pr-4">{a.name}</td>
              <td className="py-3 pr-4">{a.type}</td>
              <td className="py-3 pr-4">{a.size}</td>
              <td className="py-3">{a.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}