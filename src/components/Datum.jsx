function Datum(){
    const date = new Date();
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    return(
        <p>{formattedDate}</p>
    )
}
export default Datum
