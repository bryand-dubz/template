const suppliers = [
  { id: 1, name: "Supplier 1", contact: "johnsmith@email.com", location: "Place 1", status: "Active" },
  { id: 2, name: "Supplier 2", contact: "janedoe@email.com", location: "Place 2", status: "Active" },
  { id: 3, name: "Supplier 3", contact: "janesmith@email.com", location: "Place 3", status: "Active" },
];

export default function Suppliers() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Suppliers</h1>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-200 text-gray-500 text-sm">
            <th className="py-2 pr-4">Name</th>
            <th className="py-2 pr-4">Contact</th>
            <th className="py-2 pr-4">Location</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((s) => (
            <tr key={s.id} className="border-b border-gray-100 text-sm">
              <td className="py-3 pr-4">{s.name}</td>
              <td className="py-3 pr-4">{s.contact}</td>
              <td className="py-3 pr-4">{s.location}</td>
              <td className="py-3">{s.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}