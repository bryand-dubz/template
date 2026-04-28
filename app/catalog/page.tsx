const products = [
  { id: 1, name: "Product 1", category: "Type 1", price: "$", stock: 0 },
  { id: 2, name: "Product 2", category: "Type 2", price: "$", stock: 0 },
  { id: 3, name: "Product 3", category: "Type 3", price: "$", stock: 0 },
  { id: 4, name: "Product 4", category: "Type 4", price: "$", stock: 0 },
];

export default function Catalog() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Catalog</h1>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-200 text-gray-500 text-sm">
            <th className="py-2 pr-4">Product</th>
            <th className="py-2 pr-4">Type</th>
            <th className="py-2 pr-4">Price</th>
            <th className="py-2">Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="border-b border-gray-100 text-sm">
              <td className="py-3 pr-4">{p.name}</td>
              <td className="py-3 pr-4">{p.category}</td>
              <td className="py-3 pr-4">{p.price}</td>
              <td className="py-3">{p.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}