import "./Figure.css";


const Figure = ({data}) => {
    
    const today = new Date(data.date);
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    const formattedDate = `${day < 10  ? "0" + day : day}/${month < 10  ? "0" + month : month}/${year}`;
    
    

    

    return (
        <figure className="imagen">
            <img className="foto"  src={data.url} alt={data.title} />
            <div className="window">
                <div className="title-bar">
                    <h2 className="title">{data.title}</h2>
                </div>
                <div className="details-bar">
                    <span>{formattedDate}</span>
                    <span>{data.copyright ? data.copyright : "Unknown"}</span>
                </div>
                <div className="window-pane">{data.explanation}</div>
            </div>
        </figure>
    )
}

export default Figure;
