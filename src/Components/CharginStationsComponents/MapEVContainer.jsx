import React, { useEffect, useState, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.heat';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'leaflet.markercluster';
import esarj from '/esarj.png';
import trugo from '/trugo.png';
import voltrun from '/voltrun.png';
import tesla from '/tesla.png';

function MapEVContainer() {
    const [stations, setStations] = useState([]);
    const mapRef = useRef(null);

    useEffect(() => {
        fetch("/combined_data.json")
            .then((response) => response.json())
            .then((data) => setStations(data))
            .catch((error) => console.error("JSON yüklenirken hata oluştu:", error));
    }, []);

    useEffect(() => {
        if (stations.length > 0 && !mapRef.current) {
            const map = L.map('map').setView([39.0, 35.0], 6);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(map);

            const heatMapLayer = L.heatLayer(
                stations.map(station => [station.geometry_latitude, station.geometry_longitude, 1]),
                { radius: 25 }
            ).addTo(map);

            const markerClusterGroup = L.markerClusterGroup();

            const esarjIcon = L.icon({
                iconUrl: esarj,
                iconSize: [40, 32], 
                iconAnchor: [16, 32], 
            });

            const trugoIcon = L.icon({
                iconUrl: trugo,
                iconSize: [40, 32],
                iconAnchor: [16, 32],
            });

            const voltrunIcon = L.icon({
                iconUrl: voltrun,
                iconSize: [40, 20],
                iconAnchor: [16, 32],
            });

            const teslaIcon = L.icon({
                iconUrl: tesla,
                iconSize: [40, 20],
                iconAnchor: [16, 32],
            });

            stations.forEach(station => {
                let icon;
                switch (station.providerCode) {
                    case 'ESARJ':
                        icon = esarjIcon;
                        break;
                    case 'Trugo':
                        icon = trugoIcon;
                        break;
                    case 'Voltrun':
                        icon = voltrunIcon;
                        break;
                    case 'Tesla':
                        icon = teslaIcon;
                        break;
                    default:
                        icon = esarjIcon; 
                }

                const marker = L.marker([station.geometry_latitude, station.geometry_longitude], { icon });
                marker.bindPopup(`
                    <strong>${station.properties_locationName}</strong> <br />
                    Tür: ${station.properties_type} <br />
                    Sağlayıcı Kodu: ${station.providerCode} <br />
                    <button onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${station.geometry_latitude},${station.geometry_longitude}', '_blank')" class="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                        Adres Tarifi Al
                    </button>
                `);
                markerClusterGroup.addLayer(marker);
            });

            map.addLayer(markerClusterGroup);

            mapRef.current = map;
        }

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, [stations]);

    return (
        <div
            id="map"
            className="mt-10 flex h-100 w-100 md:h-100 md:w-150 lg:h-150 lg:w-225 xl:h-150 xl:w-250 flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl gap-8 items-center justify-center p-4"
        >

        </div>
    );
}

export default MapEVContainer;