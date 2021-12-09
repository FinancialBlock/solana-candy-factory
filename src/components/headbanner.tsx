import React from 'react';
import Link from 'next/link'

const Headbanner: React.FC = () => {
    return <div className="flex flex-row space-x-12 flex-col items-center flex-1  justify-center" style={{flexDirection: "row", height: 400, width:"100%",  alignItems: 'center'}}>

        <img
             className="rounded-md  items-center flex-col center"
             src={`/nftcandymachine.png`}


        />

       {/* <img style={{backgroundColor: "blue",width:'100%', height:300, objectFit: "cover"}}
             className="rounded-md shadow-lg"
             src={`/purple.png`}

        />*/}


    </div>
        ;
}

export default Headbanner;



/*
import React from 'react';
import Link from 'next/link'

const Headbanner: React.FC = () => {
    return <div className="flex flex-row space-x-12 items-center flex-1 mt-2" style={{flexDirection: "row",  overflow: 'scroll', scrollbarColor: "#00000000"}}>

        <img style={{backgroundColor: "blue",width:'100%', height:300, objectFit: "cover"}}
             className="rounded-md shadow-lg"
             src={`/purple.png`}

        />

        <img style={{backgroundColor: "white",width:'100%', height:300, objectFit: "cover",alignItems: "center"}}
             className="rounded-md shadow-lg"
             src={`/nftcandymachine.png`}

        />
    </div>
        ;
}

export default Headbanner;*/
