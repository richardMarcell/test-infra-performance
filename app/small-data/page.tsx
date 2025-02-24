import Link from "next/link";
import { getData } from "./_repo/get-data";

export default async function SmallDataPage() {
  const data = await getData();

  return (
    <div className="p-4">
      <h1 className="text-center font-bold text-2xl mb-4">20 Data Page</h1>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <div className="flex gap-2 py-4 justify-center">
          <Link
            className="p-2 w-[300px] border bg-blue-500 text-white font-bold rounded-lg text-center"
            href={"/"}
          >
            Back
          </Link>
          <Link
            className="p-2 w-[300px] border bg-blue-500 text-white font-bold rounded-lg text-center"
            href={"/large-data"}
          >
            500 Data
          </Link>
        </div>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Address</th>
              <th className="py-3 px-6 text-left">Age</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {data.map((item, index) => (
              <tr
                key={item.id}
                className={`border-b ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="py-3 px-6">{item.id}</td>
                <td className="py-3 px-6">{item.name}</td>
                <td className="py-3 px-6">{item.email}</td>
                <td className="py-3 px-6">{item.address}</td>
                <td className="py-3 px-6">{item.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
