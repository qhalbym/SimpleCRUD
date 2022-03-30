import { useEffect, useState } from "react";
import axios from "axios";

export default function HomePage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4002/books")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(books);
  return (
    <div className="flex flex-col">
      <div className="text-4xl mb-10">Book List</div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((e) => {
            return (
              <tr key={e.id}>
                <td>{e.name}</td>
                <td>{e.description}</td>
                <td>
                  <button
                    className="border rounded-xl bg-slate-900 text-white px-3 py-1 mt-2"
                    title="Submit"
                    onClick={edit}
                  >
                    Submit
                  </button>
                  <button
                    className="border rounded-xl bg-slate-900 text-white px-3 py-1 mt-2"
                    title="Submit"
                    onClick={removeBook}
                  >
                    Submit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
