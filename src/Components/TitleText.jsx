import datas from '../Data/data.json';

function TitleText() {
    return (
        <div className="titleText">
            <h2 className="titleTextTitle">
                Our approach for creating a winning brand
            </h2>
            <div className="titleTextContent">
                {datas.map((data, index) => {
                    return (
                        <div key={index} className='titleTextContentItem'>
                            <div className='titleTextContentItemTop'>
                                <p className='titleTextContentItemNumber'>
                                    {data.number}
                                </p>
                                <h3 className='titleTextContentItemTitle'>
                                    {data.title}
                                </h3>
                            </div>
                            <p className='titleTextContentItemText'>
                                {data.text}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TitleText