import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="flex flex-col h-full p-4 items-start bg-slate-900 text-white">
      <div className="text-2xl mb-10">POLA</div>
      <Link to="/">Home</Link>
      <Link to="/add">Add Book</Link>
    </div>
  );
}
