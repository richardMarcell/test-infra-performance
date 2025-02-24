import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <h1 className="font-bold text-xl">Button Navigation</h1>
      <div className="flex gap-2">
        <Link
          className="p-2 w-[300px] border bg-blue-500 text-white font-bold rounded-lg text-center"
          href={"/small-data"}
        >
          20 Data
        </Link>
        <Link
          className="p-2 w-[300px] border bg-blue-500 text-white font-bold rounded-lg text-center"
          href={"/large-data"}
        >
          500 Data
        </Link>
      </div>
    </div>
  );
}
