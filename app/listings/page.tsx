const listings = [
  { id: 1, title: "Listing 1", platform: "Platform 1", price: "$", status: "Unlisted" },
  { id: 2, title: "Listing 2", platform: "Platform 2", price: "$", status: "Unlisted" },
  { id: 3, title: "Listing 3", platform: "Platform 3", price: "$", status: "Unlisted" },
];

export default function Listings() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Listings</h1>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-200 text-gray-500 text-sm">
            <th className="py-2 pr-4">Title</th>
            <th className="py-2 pr-4">Platform</th>
            <th className="py-2 pr-4">Price</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {listings.map((l) => (
            <tr key={l.id} className="border-b border-gray-100 text-sm">
              <td className="py-3 pr-4">{l.title}</td>
              <td className="py-3 pr-4">{l.platform}</td>
              <td className="py-3 pr-4">{l.price}</td>
              <td className="py-3">{l.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}