import React, { useEffect, useState } from "react";
import Header from "../component/header/Header";
import "./Assets.css";
import asset from "../assets/asset-bg.png";
import { Link } from "react-router-dom";
import { Alchemy, Network } from "alchemy-sdk";
import { ThreeDots } from  'react-loader-spinner'


function Assets() {
  const [assets, setAssets] = useState([]);
  // setAssets("hello")
  // console.log(assets)
  const [pending,setPending] = useState(false)
  const [user,setuser] = useState(false)
  const [state, setstate] = useState(
    "0x065366ec359a64dbf3f02cad7987122053fedcb0"
  );

  useEffect(() => {
    var a = []
    setPending(true)
    const config = {
      apiKey: "g7dUSvAcvJnj2Qf0HOIHlxindWYB88gu",
      network: Network.MATIC_MAINNET,
    };
    const collectionAddress = [
      "0xEDe30DF507576e461cc2cB3AdA75bf9B22dc778d", //phase 1
      "0x99D6C0d1A656a1ee1F345AE6482D0aFD76daF8a5", //phase 2
    ];  
    const alchemy = new Alchemy(config);
      alchemy.nft.getNftsForOwner(state, {
        contractAddresses: collectionAddress,
        omitMetadata: false,
      }).then(res=>{
        a = res["ownedNfts"]
        setAssets(a)
      }).catch(e=>{
        alert(e)
      });
    console.log(assets)
    setTimeout(()=>{
      setPending(false)
    },1000)
  },[]);

  return (
    <div className="asset-page">
      <Header />
      <img src={asset} alt="asset" className="asset-bg" />
      <div className="asset-container">
        <div>
        </div>
        <h1
          className="text-center m-4"
          style={{ fontFamily: "Clash Display Medium", color: "white" }}
        >
          Assets
        </h1>
        <div>
          <div className="row m-4" style={{marginLeft:"5%"}}>
            {
              pending && <div className="loading">
              <ThreeDots 
                  height="80" 
                  width="80" 
                  radius="9"
                  color="#D19CFB" 
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                  />
          </div>
            }
            {!pending && assets.length>0 ? assets.map((i)=>(
              <div className="col-md-4 d-flex justify-content-center">
                <Link to={`/utility/${i.rawMetadata.name.replace(" ","_")}`}>
                <div className="asset-card pb-4">
                  <img src={i.rawMetadata.image} className="asset-img" />
                  <p style={{ color: "white",fontFamily:"Clash Display Medium" }} className="mt-2 asset-title">{i.rawMetadata.name}</p>
                </div>
                </Link>
            </div>  
            )):(!pending && <h1>No NFT's "Start Collecting"</h1>)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assets;
