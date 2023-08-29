import BookShow from "./BookShow"

function BookList({kitaplar , onDelete}){
    const renderedBooks = kitaplar.map((kitap)=>{
        return <BookShow onDelete={onDelete} key={kitap.id} kitap={kitap}/>
    })
    return(
        <div className="book-list">
            {renderedBooks}
        </div>
    )
}
export default BookList