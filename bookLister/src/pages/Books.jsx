import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Books() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const formTitle = document.getElementById("title");
  const formAuthor = document.getElementById("author");

  const [data, setData] = useState([]);

  const [form, setForm] = useState({
    title: "",
    author: ""
  });

  const addBook = () => {
    if (form.title == "" || form.author == "") {
      alert("Be sure you fill the all fields.");
      return;
    }

    data.push({...form});

    localStorage.setItem("data", JSON.stringify(data));

    setForm({title: "", author: ""});
  };

  const deleteBook = (index) => {
    // const xData = data.findIndex((xBook) => xBook.author == book.author);

    data.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(data));
    setData([...data]);
  };

  const editBook = (index) => {
    setTitle(data[index].title);
    setAuthor(data[index].author);

    formTitle.value = title;
    formAuthor.value = author;
  };

  useEffect(() => {
    const localData = localStorage.getItem("data") ?? [];
    setData(Array.isArray(localData) ? [] : JSON.parse(localData));
  }, []);

  return (
    <>
      <Navbar />

      <form className="max-w-sm mx-auto my-10">
        <div className="mb-5">
          <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 ">Title</label>

          <input onChange={(e) => setForm({...form, title: e.target.value})} value={form.title} type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="title" required />
        </div>

        <div className="mb-5">
          <label htmlFor="author" className="block mb-2 text-sm font-medium text-gray-900 ">Author</label>

          <input onChange={(e) => setForm({...form, author: e.target.value})} value={form.author} type="text" id="author" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="author" required />
        </div>
        
        <div className="overflow-hidden sm:rounded-md max-w-sm mx-auto mt-6">
          <button onClick={addBook} className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button">Submit</button>
        </div>
      </form>

      <ul className="bg-white shadow overflow-hidden sm:rounded-md max-w-sm mx-auto mt-9">
        {data.map((book, index) => (
          <li key={index} className="border-t border-gray-200">
            <div className="px-4 py-5 sm:px-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg leading-6 font-medium text-gray-900">{book.title}</h3>

                <p className="mt-1 max-w-2xl text-sm text-gray-500">Description for Item {index + 1}</p>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-500">Author: <span className="text-green-600">{book.author}</span></p>

                <a onClick={() => editBook(index)} className="cursor-pointer font-medium text-indigo-600 hover:text-indigo-500">Edit</a>

                <a onClick={() => deleteBook(index)} className="cursor-pointer font-medium text-red-600 hover:text-red-500">Delete</a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Books;