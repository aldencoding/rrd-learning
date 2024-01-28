import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="text-5xl text-center font-bold">KESALAHAN 404</h1>
      <h4 className="text-2xl text-center font-bold">
        Halaman Tidak Ditemukan!
      </h4>
      <Link
        to={"/"}
        className="my-3 text-lg text-center font-bold underline text-blue-600"
      >
        Kembali Ke Beranda
      </Link>
    </div>
  );
}
