import Head from 'next/head'


import { useState } from "react";
import { Toaster } from 'react-hot-toast';
import { useWallet } from "@solana/wallet-adapter-react";
import useCandyMachine from '../hooks/use-candy-machine';
import Header from '../components/header';
import Footer from '../components/footer';
import useWalletBalance from '../hooks/use-wallet-balance';
import { shortenAddress } from '../utils/candy-machine';
import Countdown from 'react-countdown';
import Body from "../components/body";
import design from "./design";
import Banner from "../components/banner";
import Mint from "../components/mint";
import BodyTwo from "../components/body2";
import Headbanner from "../components/headbanner";



import { RecaptchaButton } from '../components/recaptcha-button';
import {react} from "@babel/types";

const Home = () => {
  const [balance] = useWalletBalance()
  const [isActive, setIsActive] = useState(false);
  const wallet = useWallet();

  const { isSoldOut, mintStartDate, isMinting, onMint, onMintMultiple, nftsData } = useCandyMachine()



  return (

    <main className="p-5" >
      <Toaster />
      <Head>
       {/* <title>SolCollection NFT Vending Machine</title>*/}
        <meta name="description" content="SolCollection NFT Vending Machine built on the Solana Network." />
        <link rel="icon" href="/vending-machine.png" />
      </Head>
      <Header />
        <Headbanner/>


        <div className="flex flex-col items-center flex-1" >





        {/*    {wallet.connected &&
            <p className="text-gray-800 font-bold text-lg cursor-default" style={{fontSize: 30}} >Address: {shortenAddress(wallet.publicKey?.toBase58() || "")}</p>
            }
*/}




      {/*  {!wallet.connected && <span
            className=" font-bold text-2xl cursor-default" style={{color: "#6050dc"}}>
          NOT CONNECTED, PLEASE CLICK SELECT WALLET...
        </span>}*/}






     {/*   <span className="text-gray-800 font-bold text-2xl cursor-default mt-2" style={{fontSize: 40, marginTop: 10, color:"#4339ae"}}>
                 SolToons NFT Vending Machine
            </span>*/}

             {/* <div className="flex flex-col justify-start items-start text-white ">

                 <p className="flex flex-col text-black " style={{flex:1, justifyContent: "center", alignItems: "center", padding: 30}}>
                            Welcome to the SolToons NFT Vending machine allowing you to mint a random collectable. NFT Vending is a new way to generate proof of ownership with low fees stored on the Solana blockchain.
                            In this vending machine we are generating 10,000 unique collectible SolToons. SolToons are unique "Non-Fungible Tooons" inspired by
                            other successful NFT projects that create collectible assets. We look to empower the SolToon community and expand into new projects.
                            Mint your own very own SolToon today!

                  </p>
              </div>*/}
      <div className="flex flex-col items-center flex-1" >
        <BodyTwo/>
      </div>
        <Banner/>
            {wallet.connected &&
            <>
                <Body/>

                {/* <div className="text-white  text-lg font-bold flex " style={{backgroundColor: "#6050dc", width: "100%", height: 100, alignContent: "center", flexDirection: "row",justifyContent: "center", alignItems: "center"}}>

                    <p className=" font-bold text-lg cursor-default" style={{fontSize: 30, borderColor: "white", padding: 10, width: 250}} >Balance: {(balance || 0).toLocaleString()} SOL</p>
                    <p className="font-bold text-lg cursor-default" style={{fontSize: 30, borderLeftWidth: 3, borderColor: "white", marginRight: 5,padding: 10, width: 250}}>Available:{nftsData.itemsRemaining}</p>
                    <p className="font-bold text-lg cursor-default" style={{fontSize: 30, borderLeftWidth: 3, borderColor: "white",marginRight: 5, padding: 10, width: 250}}>Minted:{nftsData.itemsRedeemed}</p>
                      <p className="font-bold text-lg cursor-default" style={{fontSize: 30, borderLeftWidth: 3, borderColor: "white", padding: 10,width: 250}}>Total: {nftsData.itemsAvailable}</p>
                      <p className="font-bold text-lg cursor-default" style={{fontSize: 30, borderLeftWidth: 3, borderColor: "white", padding: 10,width: 250}}>Floor: 0.5 Sol</p>

          </div>*/}
            </>
            } </div>
        <Mint/>

        <div className="flex flex-col items-center flex-1" >




        {wallet.connected &&
          <p className="text-gray-800 font-bold text-lg cursor-default" style={{fontSize: 30, marginTop:20}} >Wallet Address: {shortenAddress(wallet.publicKey?.toBase58() || "9")}</p>
        }

        {wallet.connected &&
          <>


         {/* <div className="text-white  text-lg font-bold flex " style={{backgroundColor: "#6050dc", width: "100%", height: 100, alignContent: "center", flexDirection: "row",justifyContent: "center", alignItems: "center"}}>

                    <p className=" font-bold text-lg cursor-default" style={{fontSize: 30, borderColor: "white", padding: 10, width: 250}} >Balance: {(balance || 0).toLocaleString()} SOL</p>
                    <p className="font-bold text-lg cursor-default" style={{fontSize: 30, borderLeftWidth: 3, borderColor: "white", marginRight: 5,padding: 10, width: 250}}>Available:{nftsData.itemsRemaining}</p>
                    <p className="font-bold text-lg cursor-default" style={{fontSize: 30, borderLeftWidth: 3, borderColor: "white",marginRight: 5, padding: 10, width: 250}}>Minted:{nftsData.itemsRedeemed}</p>
                      <p className="font-bold text-lg cursor-default" style={{fontSize: 30, borderLeftWidth: 3, borderColor: "white", padding: 10,width: 250}}>Total: {nftsData.itemsAvailable}</p>
                      <p className="font-bold text-lg cursor-default" style={{fontSize: 30, borderLeftWidth: 3, borderColor: "white", padding: 10,width: 250}}>Floor: 0.5 Sol</p>

          </div>*/}
          </>
        }

        <div className="flex flex-col justify-start items-start text-white " style={{ borderWidth: 10, padding: 10, borderColor: "purple"}}>

          {wallet.connected &&
            <button style={{fontSize: 30, borderWidth:  3, width: 500, height: 80, borderColor: "#6050dc", borderRadius: 10, backgroundColor: "#6050dc", marginBottom: 20, marginTop: 20}}
              disabled={isSoldOut || isMinting || !isActive}
              onClick={onMint}
            >
              {isSoldOut ? (
                "SOLD OUT"
              ) : isActive ?
                <span>MINT {isMinting && 'LOADING...'}</span> :
                <Countdown
                  date={mintStartDate}
                  onMount={({ completed }) => completed && setIsActive(true)}
                  onComplete={() => setIsActive(true)}
                  renderer={renderCounter}
                />
              }
            </button>
          }

          {wallet.connected &&
            <button style={{fontSize: 30, borderWidth:  3, width: 500, height: 80,  borderColor: "#6050dc", borderRadius: 10, backgroundColor: "#6050dc", marginBottom: 20}}
              disabled={isSoldOut || isMinting || !isActive}
              onClick={() => onMintMultiple(5)}
            >
              {isSoldOut ? (
                "SOLD OUT"
              ) : isActive ?
                <span>MINT 5 {isMinting && 'LOADING...'}</span> :
                <Countdown
                  date={mintStartDate}
                  onMount={({ completed }) => completed && setIsActive(true)}
                  onComplete={() => setIsActive(true)}
                  renderer={renderCounter}
                />
              }
            </button>
          }

        </div>


        <Footer />
        </div>
        <Header/>

    </main>
  );
};

const renderCounter = ({ days, hours, minutes, seconds }: any) => {
  return (
    <span className="text-gray-800 font-bold text-2xl cursor-default">
      Live in {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
    </span>
  );
};

export default Home;





