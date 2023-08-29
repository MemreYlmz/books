import { useState } from "react"
import BookCreate from "./components/BookCreate"
import BookList from "./components/BookList"


function App(){
    const[books,setBooks]=useState([])
    //verileri dosyayı kayedet
    //const books = [{id:1,title:"Harry Potter"},{id:2,title:"Lords of The Rings" }]
    const createBook = (title)=> {
        const updateBook = [...books,{id:Math.round(Math.random()*9999) , title}]
        setBooks(updateBook)
    }

    const deleteBookById = (id)=>{
        const updateBooks = books.filter((book)=>{
            return book.id !== id
        })
        setBooks(updateBooks)
    }

    return(
        <div className="app">
            <BookList kitaplar={books} onDelete={deleteBookById}/>
            <BookCreate onCreate={createBook}/>
        </div>
    )
}
export default App 