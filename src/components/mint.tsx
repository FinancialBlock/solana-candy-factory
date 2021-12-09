import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import React from 'react';
import Link from 'next/link'
import { useWallet } from "@solana/wallet-adapter-react";
import useCandyMachine from '../hooks/use-candy-machine';
import { useState } from "react";
import { Toaster } from 'react-hot-toast';
import useWalletBalance from "../hooks/use-wallet-balance";

const Mint: React.FC = () => {
    const [balance] = useWalletBalance()
    const [isActive, setIsActive] = useState(false);
    const wallet = useWallet();

    const { isSoldOut, mintStartDate, isMinting, onMint, onMintMultiple, nftsData } = useCandyMachine()
    return <div className="flex flex-col md:flex-row justify-center space-x-1.5" style={{backgroundColor: "#4339ae", height: 100, marginTop: 15, borderRadius: 20, alignItems: "center"}}>
        <div className="text-white space-x-2 text-lg font-bold flex items-center" style={{justifyContent: "center", alignItems: "center"}}>
            <p className=" font-bold text-lg cursor-default" style={{fontSize: 30, borderColor: "white", padding: 10, }} >{(balance || 0).toLocaleString()} SOL</p>
            <p className="font-bold text-lg cursor-default" style={{fontSize: 30, borderLeftWidth: 3, borderColor: "white", marginRight: 5,padding: 10, width: 250}}>Available:{nftsData.itemsRemaining}</p>
            <p className="font-bold text-lg cursor-default" style={{fontSize: 30, borderLeftWidth: 3, borderColor: "white",marginRight: 5, padding: 10, width: 250}}>Minted:{nftsData.itemsRedeemed}</p>
            <p className="font-bold text-lg cursor-default" style={{fontSize: 30, borderLeftWidth: 3, borderColor: "white", padding: 10,width: 250}}>Total: {nftsData.itemsAvailable}</p>
            <p className="font-bold text-lg cursor-default" style={{fontSize: 30, borderLeftWidth: 3, borderColor: "white", padding: 10,width: 250}}>Floor: 0.5 Sol</p>
        </div>
    </div>;
}

export default Mint;