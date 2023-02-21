import React, { useEffect, useState, useContext } from "react";
import Header from "../component/header/Header";
import "./Assets.css";
import asset from "../assets/asset-bg.png";
// import assetProfile from "../assets/asset-profile.png"
import { Link } from "react-router-dom";
import { Alchemy, Network } from "alchemy-sdk";
import { ThreeDots } from "react-loader-spinner";
import { getContractInstance } from "../data's/helper";
import { Context } from "../Context";
import ProductHeader from "../component/productHeader/ProductHeader";
import Footer from "../component/Footer/Footer"
import { useLocation, useNavigationType } from "react-router-dom";
import { items } from "../data's/utility";

function Assets() {
  var itemsAll = ["Chrome_Heart","Flora_Flamboyance","Puffy_Crossroads","Oyster_Spell","Vibrance_Splash","Rufflanza","Star_Cloak","Celestial_Dream","Pop_Kiss","Dazzling_Devil","Comic_Boom","Human_Masquerade"]

  // const assetProfile = "https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/XRC_Homepage/homepage_contents/xrcnew.webp"

  const [assets, setAssets] = useState([]);
  const location = useLocation();
  const navType = useNavigationType();
  // setAssets("hello")
  // console.log(assets)
  const {walletAddress} = useContext(Context);
  const [pending, setPending] = useState(false);
  // const [user, setuser] = useState(false);
  // const [state, setstate] = useState(
  //   "0x065366ec359a64dbf3f02cad7987122053fedcb0"
  // );
  // const walletAddress = state
  let itemSold = {}
  const fun = async () => {
    let supply = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
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
      .getNftsForOwner(walletAddress, {
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
    if (navType !== "POP") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    fun()
  }, [location]);
  console.log(itemSold);

  return (
    <div className="asset-page">
      <ProductHeader />

      {/* <div>
        <div className="d-flex">
          <img src={assetProfile} alt="asset profile icon" className="asset-profile-icon header-logo" />
          <div className="asset-profile-icon asset-profile-text header-logo" style={{ fontFamily: "Clash Display Bold", color: "#fff" }}>{walletAddress.substring(
            0,
            8
          )}...{walletAddress.substring(38)}</div>
        </div>
        <img src={asset} alt="asset" className="asset-bg" />
      </div> */}


      <div className="asset-container products-container">
        <div></div>
        {/* <h1
          className="text-center pt-5 pb-5 asset-header-title"
          style={{ fontFamily: "Clash Display Medium", color: "white", textDecoration: "underline #C44DD6" }}
        >
          My Assets
        </h1> */}

        <h2 className='text-center mb-5 pb-1' style={{fontFamily: "Clash Display Medium", color: "#fff", margin: "auto"}}>MY ASSETS</h2>

        <div>
          <div className="row p-4">
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
                    to={`/assets/${i.rawMetadata.name.replace(" ", "_")}`}
                  >
                    <div className="asset-card pb-5 mb-5">
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
              : !pending && walletAddress ? <h1 style={{ color: "white", textAlign: "center" }}>No NFT's <Link to="/products" className="text-underling text-white" ><u>"Start Collecting"</u></Link></h1> : <h1 style={{ color: "white", textAlign: "center" }}>Connect Your Wallet</h1>}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Assets;


