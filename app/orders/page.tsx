const orders = [
  { id: "#111", customer: "Customer 1", date: "Jan 1, 2026", status: "Pending", total: "$" },
  { id: "#222", customer: "Customer 2", date: "Jan 1, 2026", status: "Pending", total: "$" },
  { id: "#333", customer: "Customer 3", date: "Jan 1, 2026", status: "Pending", total: "$" },
  { id: "#444", customer: "Customer 4", date: "Jan 1, 2026", status: "Pending", total: "$" },
];

export default function Orders() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Orders</h1>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-200 text-gray-500 text-sm">
            <th className="py-2 pr-4">Order</th>
            <th className="py-2 pr-4">Customer</th>
            <th className="py-2 pr-4">Date</th>
            <th className="py-2 pr-4">Status</th>
            <th className="py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id} className="border-b border-gray-100 text-sm">
              <td className="py-3 pr-4">{o.id}</td>
              <td className="py-3 pr-4">{o.customer}</td>
              <td className="py-3 pr-4">{o.date}</td>
              <td className="py-3 pr-4">{o.status}</td>
              <td className="py-3">{o.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}