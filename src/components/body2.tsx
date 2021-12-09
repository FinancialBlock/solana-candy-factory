import React from 'react';
import Link from 'next/link'

const BodyTwo: React.FC = () => {
    return <div className="  justify-end items-start " >

        <h1 className="text-blue-400 font-extrabold justify-end items-start " style={{alignItems: "start", textAlign: "start", fontSize:25, marginTop: 20, color: "#4339ae"}}> SolToon Candy Machine</h1>

        <div className=" text-blue-400 space-x-2 flex items-center">

            <p className="flex flex-col text-black " style={{textAlign: "start",flex:1, justifyContent: "center", alignItems: "center", padding: 30, width: 900, }}>
                Welcome to the SolToons NFT Vending machine allowing you to mint a random collectable. NFT Vending is a new way to generate proof of ownership with low fees stored on the Solana blockchain.
                In this vending machine we are generating 10,000 unique collectible SolToons. SolToons are unique "Non-Fungible Toons" inspired by
                other successful NFT projects that create collectible assets. We look to empower the SolToon community and expand into new projects.
                Mint your own very own SolToon today!

            </p>
        </div>
    </div>;
}

export default BodyTwo;