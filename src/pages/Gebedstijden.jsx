import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Gebedkaart from "../Gebedkaart";
import "../css/Gebedstijden.css";


function Gebedstijden() {
    const getGebedstijden = async () => {
        const landData = await axios.get('https://api.api-ninjas.com/v1/city?name=' + city, { headers: {'X-Api-Key': 'xU9bNNahAcB2B27r0/kTAg==LKo0jn7Ujl8pnjnU'} });
        const gebedstijdenData = await axios.get('https://api.aladhan.com/v1/timingsByCity?city=' + city + '&country=' + landData.data[0].country + '&method=8');
        console.log(landData.data[0].country + ' - ' + city);
        setGebedstijden(gebedstijdenData.data.data.timings);
        console.log(gebedstijdenData.data.data.timings);
    };

    const [city, setCity] = useState('Rotterdam');

    const [gebedstijden, setGebedstijden] = useState({
        Fajr: '04:30',
        Sunrise: '10:40',
        Dhuhr: '12:00',
        Asr: '16:30',
        Maghrib: '20:00',
        Isha: '22:30',
    });

    const handelCity = (event) => {
        setCity(event.target.value);
    };

    useEffect(() => {
        getGebedstijden();
    }, []);


    return (
        <section className="Gebedstijden">
            <div className="ContentContainer">
                <div className="HeaderContainer GHC">
                    <div className="InputsContainer">
                        <div className="BackContainer">
                            <Link to={"/"}>Terug</Link>
                        </div>
                        <div className="InputContainer">
                            <input onChange={handelCity} type="text" placeholder="naam van je stad"></input>
                        </div>
                        <div className="SearchContainer">
                            <input onClick={getGebedstijden} type="submit" value="Zoeken"></input>
                        </div>
                    </div>
                </div>
                <div className="FooterContainer GFC">
                    <div className="GebedstijdenContainer">
                        <div className="GebedstijdenItems">
                            <Gebedkaart title="Fajr" time={gebedstijden.Fajr} image={"./fajr.jpg"}/>
                            <Gebedkaart title="Dhuhr" time={gebedstijden.Dhuhr} image={"./dhuhr.jpg"}/>
                            <Gebedkaart title="Asr" time={gebedstijden.Asr} image={"./asr.jpg"}/>
                            <Gebedkaart title="Maghrib" time={gebedstijden.Maghrib} image={"./maghrib.jpg"}/>
                            <Gebedkaart title="Isha" time={gebedstijden.Isha} image={"./isha.jpg"}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gebedstijden;