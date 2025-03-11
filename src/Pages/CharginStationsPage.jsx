import React from 'react';
import Header from '../Components/Header';
import MapEVContainer from '../Components/MapEVContainer';
import EVsChargerSuppliers from '../Components/EVsChargerSuppliers';
import TurkeyEvAbout from '../Components/TurkeyEvAbout';


function CharginStationsPage() {
    return (
        <>
            <Header />
            <div className="px-40 flex flex-1 justify-center py-5 ">
                <div>
                    <MapEVContainer />
                    <h2 className="sm:text-lg md:text-xl lg:text-2xl font-base text-light text-center leading-tight px-4 pb-3 pt-10">
                        Map Includes EVs Charger Providers
                    </h2>
                    <EVsChargerSuppliers />
                    <h2 className="sm:text-lg md:text-xl lg:text-3xl font-base text-light text-center leading-tight px-4 pb-3 pt-10">
                        All Statistics
                    </h2>
                    <TurkeyEvAbout />
                </div>
            </div>
        </>
    );
}

export default CharginStationsPage;