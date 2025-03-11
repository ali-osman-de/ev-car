import React from 'react'
import esarj from '/esarj.png';
import trugo from '/trugo.png';
import voltrun from '/voltrun.png';
import tesla from '/tesla.png';

function EVsChargerSuppliers() {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2">
            <div className="flex flex-col gap-3 pb-3">
                <div
                    className="bg-center bg-no-repeat rounded-xl mx-auto my-auto"
                    style={{
                        backgroundImage: `url(${esarj})`,
                        width: '100px',
                        height: '100px',
                        backgroundSize: 'contain',
                    }}
                ></div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
                <div
                    className="bg-center bg-no-repeat rounded-xl mx-auto my-auto"
                    style={{
                        backgroundImage: `url(${trugo})`,
                        width: '100px',
                        height: '100px',
                        backgroundSize: 'contain',
                    }}
                ></div>

            </div>
            <div className="flex flex-col gap-3 pb-3">
                <div
                    className="bg-center bg-no-repeat rounded-xl mx-auto my-auto"
                    style={{
                        backgroundImage: `url(${voltrun})`,
                        width: '100px',
                        height: '100px',
                        backgroundSize: 'contain',
                    }}
                ></div>

            </div>
            <div className="flex flex-col gap-3 pb-3">
                <div
                    className="bg-center bg-no-repeat rounded-xl mx-auto my-auto"
                    style={{
                        backgroundImage: `url(${tesla})`,
                        width: '100px',
                        height: '100px',
                        backgroundSize: 'contain',
                    }}
                ></div>

            </div>
        </div>
    )
}

export default EVsChargerSuppliers