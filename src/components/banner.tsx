import React from 'react';
import Link from 'next/link'

const Banner: React.FC = () => {
    return <div className="flex flex-row space-x-12 items-center flex-1 mt-2" style={{flexDirection: "row",  overflow: 'scroll'}}>
            <img style={{height: 300}}
                 className="rounded-md shadow-lg"
                 src={`/boy.gif`}
                 width={300}
            />
            <img style={{height: 300}}
                 className="rounded-md shadow-lg"
                 src={`/girl.gif`}
                 width={300}
            />
            <img style={{height: 300}}
                 className="rounded-md shadow-lg"
                 src={`/soltoon.gif`}
                 width={300}
            />
            <img style={{height: 300}}
                 className="rounded-md shadow-lg"
                 src={`/unnamed.gif`}
                 width={300}
            />
            <img style={{height: 300}}
                 className="rounded-md shadow-lg"
                 src={`/toon.gif`}
                 height={200}
                 width={300}
            />
        </div>
    ;
}

export default Banner;