import waveWhite from '../Assets/Images/Waves/wave-white.svg';

function SliderItem({ data }) {

    return (
        <div className="sliderItem">
            <div className="sliderItemTitleContent">
                <h2 className="sliderItemTitleContentTitle">
                    {data.title}
                </h2>
            </div>
            <img src={waveWhite} alt="wave-white" className='sliderItemWave' />
            <div className='sliderItemImgContent'>
                <img src={data.image} alt={data.alt} className='sliderItemImgContentImg' />
                <div className='sliderItemImgContentInfo'>
                    <h4 className='sliderItemImgContentTitle'>
                        {data.name}
                    </h4>
                    <p className='sliderItemImgContentText'>
                        {data.date}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SliderItem