export default function ItemDetails({details}) {
    let content = [];

    for (let key in details) {
        content.push(
            <div key={key} className="product-chart-row--div">
                <p className="product-chart-info--p">{key}</p>
                <p className="product-chart-info-response--p">{details[key]}</p>
            </div>
        )
    }
    return (
        <div className="product-chart--container">
            {content}
        </div>
    )
}
