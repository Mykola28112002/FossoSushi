
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapboxGl from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoibXlrb2xhMjAwMiIsImEiOiJjbHVva3J5YXQxdWw2MmtuMmtnNTJzcm5uIn0.-FTP03mPJQp7cpb4N78gJQ'
});

const MapComponent = () => {
    // Географічні координати адреси Edmonton AB, 8861 63 Ave
    const coordinates = [-113.4962, 53.4906];
    return (
        <Map
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
                height: '350px',
                width: '100%'
            }}
            center={coordinates} // Центруємо карту на заданих координатах
        >
        </Map>
    );
};

export default MapComponent;
