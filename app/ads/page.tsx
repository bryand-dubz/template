const ads = [
  { id: 1, name: "Ad 1", platform: "Platform 1", price: "$", status: "Inactive", clicks: 0 },
  { id: 2, name: "Ad 2", platform: "Platform 2", price: "$", status: "Inactive", clicks: 0 },
  { id: 3, name: "Ad 3", platform: "Platform 3", price: "$", status: "Inactive", clicks: 0 },
];

export default function Ads() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Ads</h1>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-200 text-gray-500 text-sm">
            <th className="py-2 pr-4">Name</th>
            <th className="py-2 pr-4">Platform</th>
            <th className="py-2 pr-4">Price</th>
            <th className="py-2 pr-4">Status</th>
            <th className="py-2">Clicks</th>
          </tr>
        </thead>
        <tbody>
          {ads.map((a) => (
            <tr key={a.id} className="border-b border-gray-100 text-sm">
              <td className="py-3 pr-4">{a.name}</td>
              <td className="py-3 pr-4">{a.platform}</td>
              <td className="py-3 pr-4">{a.price}</td>
              <td className="py-3 pr-4">{a.status}</td>
              <td className="py-3">{a.clicks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}