import React, { useEffect, useState,useContext } from "react";
import Header from "../component/header/Header";
import "./Assets.css";
import asset from "../assets/asset-bg.png";
import { Link } from "react-router-dom";
import { Alchemy, Network } from "alchemy-sdk";
import { ThreeDots } from "react-loader-spinner";
import { getContractInstance } from "../data's/helper";
import { Context } from "../Context";
import ProductHeader from "../component/productHeader/ProductHeader";

function Assets() {
  const [assets, setAssets] = useState([]);
  // setAssets("hello")
  // console.log(assets)
  const {walletAddress} = useContext(Context);
  const [pending, setPending] = useState(false);
  const [user, setuser] = useState(false);
  const [state, setstate] = useState(
    "0x065366ec359a64dbf3f02cad7987122053fedcb0"
  );
  let itemSold = {}
  const fun=async()=>{
    let supply = {
      0:0,
      1:0,
      2:0,
      3:0,
      4:0,
      5:0,
    }
    
    console.log(supply);
    var a = [];
    setPending(true);
    const config = {
      apiKey: "g7dUSvAcvJnj2Qf0HOIHlxindWYB88gu",
      network: Network.MATIC_MAINNET,
    };
    const collectionAddress = [
      "0xEDe30DF507576e461cc2cB3AdA75bf9B22dc778d", //phase 1
      "0x99D6C0d1A656a1ee1F345AE6482D0aFD76daF8a5", //phase 2
    ];
    const alchemy = new Alchemy(config);
    alchemy.nft
      .getNftsForOwner(state, {
        contractAddresses: collectionAddress,
        omitMetadata: false,
      })
      .then((res) => {
        a = res["ownedNfts"];
        setAssets(a);
        console.log(a)
      })
      .catch((e) => {
        // alert(e);
      });
      // alchemy.nft.getNftsForContract(collectionAddress[0]).then(res=>console.log(res))
    setTimeout(() => {
      setPending(false);
    }, 1000);
  }

  useEffect(() => {
    fun()
    // const contract = await getContractInstance(1);
    // const name = await contract.totalBalance();
    // let totalSupply = await contract.totalSupply()
    // totalSupply = Number(totalSupply._hex)
    // for(let i = 0; i < totalSupply; i++){
    //   let t = await contract.tokenByIndex(i)
    //   if(Number.isInteger(t/10)){
    //     t = t/10-1
    //     supply[t] = supply[t] + 1
    //   }
    //   else{
    //     t = Math.floor(t/10)
    //     supply[t] = supply[t] + 1
    //   }
    // }
    // itemSold = supply
    // console.log(supply)
  }, []);
  console.log(itemSold);

  return (
    <div className="asset-page">
      <ProductHeader />
      <img src={asset} alt="asset" className="asset-bg" />
      <div className="asset-container">
        <div></div>
        <h1
          className="text-center m-4"
          style={{ fontFamily: "Clash Display Medium", color: "white" }}
        >
          Assets
        </h1>
        <div>
          <div className="row m-4" style={{ marginLeft: "5%" }}>
            {pending && (
              <div className="loading">
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
            )}
            {!pending && assets.length > 0
              ? assets.map((i) => (
                  <div className="col-md-4 d-flex justify-content-center">
                    <Link
                      to={`/utility/${i.rawMetadata.name.replace(" ", "_")}`}
                    >
                      <div className="asset-card pb-4">
                        <img src={i.rawMetadata.image} className="asset-img" />
                        <p
                          style={{
                            color: "white",
                            fontFamily: "Clash Display Medium",
                          }}
                          className="mt-2 asset-title"
                        >
                          {i.rawMetadata.name}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))
              : !pending && walletAddress ? <h1 style={{color:"white",textAlign:"center"}}>No NFT's "Start Collecting"</h1> : <h1 style={{color:"white",textAlign:"center"}}>Connect Your Wallet</h1>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assets;
