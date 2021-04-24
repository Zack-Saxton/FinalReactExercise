import './MCUShows.css'


const MCUShows = ({dates, randomAvenger, nextAvenger}) => {
    return(
<div className='MCUShows'>
    <h1 style={{fontFamily:'Georgia', textDecoration:'underline'}}>
        Disney+
    </h1>
        <h2>
            MCU Show Release Date

        </h2>
            <p>WandaVision {dates.wandaVision}</p>
            <p>The Falcon and Winter Soldier {dates.falconWinter}</p>
            <p>Loki {dates.loki}</p>
            <p>Hawkeye {dates.hawkeye}</p>
            <button onClick={randomAvenger}>Random Avenger</button>
            <button onClick={nextAvenger}>Next Avenger</button>
</div>
    );
}

export default MCUShows;