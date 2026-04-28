export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="text-sm text-gray-500">Orders</p>
          <p className="text-2xl font-bold">0</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="text-sm text-gray-500">Products</p>
          <p className="text-2xl font-bold">0</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="text-sm text-gray-500">Suppliers</p>
          <p className="text-2xl font-bold">0</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="text-sm text-gray-500">Active Listings</p>
          <p className="text-2xl font-bold">0</p>
        </div>
      </div>
    </div>
  )
}