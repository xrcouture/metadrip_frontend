import React, { useState, useEffect } from "react";
import "./utility.css";
import { useParams } from "react-router-dom";
import CryptoConvert from "crypto-convert";
import { ethers } from 'ethers'
import $ from "jquery";
import { Link } from "react-router-dom";
import { items } from "../../data's/utility";
import { RxTwitterLogo, RxDiscordLogo, RxLinkBreak2 } from "react-icons/rx";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { Alchemy, Network } from "alchemy-sdk";
import { getContractInstance, getGasFees } from "../../data's/helper";
import { Formik } from 'formik';
import {saveAs} from 'file-saver';

import ProductHeader from "../productHeader/ProductHeader";
import Footer from "../Footer/Footer";


function Utility() {
  $(".panel-title").on('click',function(){
      $(this).find('i').toggleClass('glyphicon-chevron-down  glyphicon-chevron-up');
  })
  const config = {
    apiKey: "g7dUSvAcvJnj2Qf0HOIHlxindWYB88gu",
    network: Network.MATIC_MAINNET,
  };
  const [nft, setNfts] = useState([]);
  const [nftCost, setNftCost] = useState(0);

  const alchemy = new Alchemy(config);

  const collectionAddress = [
    "0xEDe30DF507576e461cc2cB3AdA75bf9B22dc778d", //phase 1
    "0x99D6C0d1A656a1ee1F345AE6482D0aFD76daF8a5", //phase 2
  ];

  useEffect(async () => {
    var temp = {
      "Chrome Heart": 0,
      "Puffy Crossroads": 0,
      "Oyster Spell": 0,
      "Vibrance Splash": 0,
      "Flora Flamboyance": 0,
      Rufflanza: 0,
      "Star Cloak": 0,
      "Celestial Dream": 0,
      "Dazzling Devil": 0,
      "Pop Kiss": 0,
      "Comic Boom": 0,
      "Human Masquerade": 0,
    };
    // const convert = new CryptoConvert({
    //   cryptoInterval: 2000, //Crypto prices update interval in ms (default 5 seconds on Node.js & 15 seconds on Browsers)
    //   fiatInterval: 60 * 1e3 * 60, //Fiat prices update interval (default every 1 hour)
    //   calculateAverage: true, //Calculate the average crypto price from exchanges
    //   binance: true, //Use binance rates
    //   bitfinex: true, //Use bitfinex rates
    //   coinbase: true, //Use coinbase rates
    //   kraken: true, //Use kraken rates
    //   // onUpdate: (tickers, isFiatUpdate?)=> any, //Callback on every crypto update
    //   HTTPAgent: null, //HTTP Agent for server-side proxies (Node.js only)
    // });

    // setInterval(() => {
    //   console.log(convert.MATIC.USD(1).toFixed(2));
    // },2000);
    alchemy.nft.getNftsForContract(collectionAddress[1]).then((res) => {
      res.nfts.map((i) => {
        let t = i.description.split(":")[0];
        temp[i.title]++;
      });
    });
    setNfts(temp);
    const contract = await getContractInstance(2);
    console.log(contract)
    let totalSupply = await contract.publicCost();
    console.log(totalSupply);
    setNftCost(Number(totalSupply._hex) * Math.pow(10, -18));
    const {maxFeePerGas, maxPriorityFeePerGas} = await getGasFees()
    console.log(maxFeePerGas, maxPriorityFeePerGas);
    const tx = await contract.tokenMint(1,{
        maxFeePerGas,
        maxPriorityFeePerGas,
        value:ethers.utils.parseUnits(totalSupply.toString(), "gwei"),
      })
    // const tx = await contract.setSeedSaleOn()
      await tx.wait();
      console.log(tx);
      
    }, []);
  console.log(nftCost);
  let { name } = useParams();
  const item = items[name];
  console.log(items);
  setTimeout(() => {
    console.log(name, nft[name.replace("_", " ")] + 1, nft);
    console.log(`available wearables ${10 - nft[name.replace("_", " ")]}/10`);
  }, 1000);
  $(document).on(function () {
    $(".collapse").on("show.bs.collapse", function () {
      var id = $(this).attr("id");
      $('a[href="#' + id + '"]')
        .closest(".panel-heading")
        .addClass("active-faq");
      $('a[href="#' + id + '"] .panel-title span').html(
        '<i class="glyphicon glyphicon-minus"></i>'
      );
    });
    $(".collapse").on("hide.bs.collapse", function () {
      var id = $(this).attr("id");
      $('a[href="#' + id + '"]')
        .closest(".panel-heading")
        .removeClass("active-faq");
      $('a[href="#' + id + '"] .panel-title span').html(
        '<i class="glyphicon glyphicon-plus"></i>'
      );
    });
  });
  console.log(item['metaverse_wearables']['sandbox'].status)


  return (
    <div className="products-container" style={{background: "#000"}}>
    <ProductHeader />
    <div className="utility-page mb-5">
      {/* <iframe src="https://metadrip.xrcouture.com" width="100%" height="500"/> */}
      <div className="row mt-4 align-items-start product-video-and-content">
        <div className="col-xs-12 col-sm-7 col-md-6 col-lg-6 col-xl-5 overflow-hidden d-flex justify-content-center d-flex flex-column">
          <video
            src={item.video}
            className="utility-page-video align-self-center"
            muted
            autoPlay
            loop
          />
          {/* <div className="utility-social-container w-100">
            <p>Share</p>
            <div className="d-flex justify-content-around w-100">
              <a
                href="https://discord.gg/zHJ3UA5CeR"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <RxDiscordLogo
                  color="#EDE9E9"
                  size={50}
                  className="icon-footer"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/xrcouture/"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <BsInstagram
                  color="#EDE9E9"
                  size={50}
                  className="icon-footer"
                />
              </a>
              <a
                href="https://twitter.com/XRCouture"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <RxTwitterLogo
                  color="#EDE9E9"
                  size={50}
                  className="icon-footer"
                />
              </a>
              <a
                href="https://twitter.com/XRCouture"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <RxLinkBreak2
                  color="#EDE9E9"
                  size={50}
                  className="icon-footer"
                />
              </a>
            </div>
          </div> */}
        </div>
        <div className="col-xs-12 col-sm-5 col-md-6 col-lg-6 col-xl-7 product-content">
          <div className="asset-details-header">

            <h1
              className="title-asset text-left"
              style={{ fontFamily: "Clash Display Bold" }}
            >
              {" "}
              {item.name}
            </h1>

            <div className="details-container mb-4 mt-5 align-items-start">
            <div className="product-creator d-flex align-items-center">
              <div className="product-creator-img"></div>
              <div className="product-creator-info">
                <div className="product-creator-info-title product-content-subtitle" style={{fontFamily: "Clash Display Light"}}>Created by</div>
                <div className="product-creator-info-name" style={{fontFamily: "Clash Display Bold"}}>{item.designed_by}</div>
              </div>
            </div>
              <p className="w-50 product-content-subtitle" style={{fontFamily: "Clash Display Light"}}>{item.description}</p>
            </div>

            <div className="tab-accordion">
              <div>
                <ul className="nav nav-tabs faq-cat-tabs">
                  <li className="active">
                    <a
                      href="#faq-cat-1"
                      data-toggle="tab"
                      style={{ fontFamily: "Clash Display Medium" }}
                    >
                      Utilities
                    </a>
                  </li>
                  <li>
                    <a
                      href="#faq-cat-2"
                      data-toggle="tab"
                      style={{ fontFamily: "Clash Display Medium" }}
                    >
                      Blockchain Info{" "}
                    </a>
                  </li>
                </ul>
                <div className="tab-content faq-cat-content">
                  <div className="tab-pane active in fade" id="faq-cat-1">
                    <div className="panel-group" id="accordion-cat-1">
                      <div className="panel panel-default panel-faq">
                        <div className="panel-heading">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion-cat-1"
                            href="#faq-cat-1-sub-1"
                          >
                            <h4
                              className="panel-title"
                              style={{ fontFamily: "Clash Display SemiBold" }}
                            >
                              Metaverse Wearables
                              <span className="pull-right">
                                <i className="glyphicon glyphicon-chevron-down" />
                              </span>
                            </h4>
                          </a>
                        </div>
                        <div
                          id="faq-cat-1-sub-1"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                            <div className="button-group-1">
                              <h5 style={{ color: "#978097" }}>Decentraland</h5>
                              <button>Claim</button>
                            </div>
                            <div className="button-group-1">
                              <h5 style={{ color: "#978097" }}>Sandbox</h5>
                              {item['metaverse_wearables']['sandbox'].status? <a href="" target="_blank" download="MyFile"> <button>Claim</button></a>: <p className="text-danger">Coming Soon...</p>}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default panel-faq">
                        <div className="panel-heading">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion-cat-1"
                            href="#faq-cat-1-sub-2"
                          >
                            <h5 className="panel-title">
                              Download 3D files, PFP &Artwork			
                              <span className="pull-right">
                                <i className="glyphicon glyphicon-chevron-down" />
                              </span>
                            </h5>
                          </a>
                        </div>
                        <div
                          id="faq-cat-1-sub-2"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                            <div className="button-group-1">
                              <h5 style={{ color: "#978097" }}>
                                PFP File
                              </h5>
                              {item['get_3d_assets']['pfp'].status?  <button onClick={()=>saveAs("https://drive.google.com/file/d/1jKnJ7gnUSxBkfDxslGlEaEYgF-XT_p0P/view?usp=sharing")}>Download</button>: <p className="text-danger">Coming Soon...</p>}
                            </div>
                            <div className="button-group-1">
                              <h5 style={{ color: "#978097" }}>GLB File</h5>
                              {item['get_3d_assets']['glb_file'].status? <a href="" target="_blank" download="MyFile"> <button>Download</button></a>: <p className="text-danger">Coming Soon...</p>}
                            </div>
                            <div className="button-group-1">
                              <h5 style={{ color: "#978097" }}>
                                Metahuman
                              </h5>
                              {item['get_3d_assets']['metahuman'].status ?<a href="" target="_blank" download="MyFile">  <button>Download</button></a>: <p className="text-danger">Coming Soon...</p>}
                            </div>
                            <div className="button-group-1">
                              <h5 style={{ color: "#978097" }}>
                                CloneX
                              </h5>
                              {item['get_3d_assets']['cloneX'].status ?<a href="" target="_blank" download="MyFile">  <button>Download</button></a>: <p className="text-danger">Coming Soon...</p>}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default panel-faq">
                        <div className="panel-heading">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion-cat-1"
                            href="#faq-cat-1-sub-3"
                          >
                            <h4 className="panel-title">
                              Metaverse Showcase		
                              <span className="pull-right">
                                <i className="glyphicon glyphicon-chevron-down" />
                              </span>
                            </h4>
                          </a>
                        </div>
                        <div
                          id="faq-cat-1-sub-3"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                              <div className="button-group-1">
                                <h5 style={{ color: "#978097" }}>
                                  OnCyber
                                </h5>
                                {item['metaverse_showcase']['oncyber'].status ?<a href="" target="_blank" download="MyFile">  <button>Download</button></a>: <p className="text-danger">Coming Soon...</p>}
                              </div>
                              <div className="button-group-1">
                                <h5 style={{ color: "#978097" }}>
                                  Spatial
                                </h5>
                                {item['metaverse_showcase']['spatial'].status ?<a href="" target="_blank" download="MyFile">  <button>Download</button></a>: <p className="text-danger">Coming Soon...</p>}
                              </div>
                              <div className="button-group-1">
                                <h5 style={{ color: "#978097" }}>
                                  AR
                                </h5>
                                {item['metaverse_showcase']['ar'].status ?<a href="" target="_blank" download="MyFile">  <button>Download</button></a>: <p className="text-danger">Coming Soon...</p>}
                              </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default panel-faq">
                        <div className="panel-heading">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion-cat-1"
                            href="#faq-cat-1-sub-4"
                          >
                            <h4 className="panel-title">
                              Snapchat AR
                              <span className="pull-right">
                                <i className="glyphicon glyphicon-chevron-down" />
                              </span>
                            </h4>
                          </a>
                        </div>
                        <div
                          id="faq-cat-1-sub-4"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                          <div className="button-group-1">
                                <h5 style={{ color: "#978097" }}>
                                  AR
                                </h5>
                                {item['snapchat_ar'].status ?<a href="" target="_blank" download="MyFile">  <button>Download</button></a>: <p className="text-danger">Coming Soon...</p>}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default panel-faq">
                        <div className="panel-heading">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion-cat-1"
                            href="#faq-cat-1-sub-6"
                          >
                            <h4 className="panel-title">
                              Claim Virtual Fittings
                              <span className="pull-right">
                                <i className="glyphicon glyphicon-chevron-down" />
                              </span>
                            </h4>
                          </a>
                        </div>
                        <div
                          id="faq-cat-1-sub-6"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                          <div className="form-virtual-fitting">
                          <Formik
                              initialValues={{ 
                                email: '', 
                                files: null,
                                comments:""
                              }}
                              validate={values => {
                                const errors = {};
                                if (!values.email) {
                                  errors.email = 'Required';
                                } else if (
                                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                  errors.email = 'Invalid email address';
                                }
                                return errors;
                              }}
                              onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                  alert(JSON.stringify(values, null, 2));
                                  setSubmitting(false);
                                }, 400);
                              }}
                            >
                              {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                /* and other goodies */
                              }) => (
                                <form onSubmit={handleSubmit}>
                                  <div className="row">
                                  <div class="mb-3 col-md-6">
                                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                    <input 
                                    type="email" 
                                    class="form-control" 
                                    id="exampleFormControlInput1" 
                                    placeholder="Enter your email address" 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    />
                                  </div>
                                  {errors.email && touched.email && errors.email}


                                  <div class="mb-3 col-md-6">
                                    <label for="formFileMultiple" class="form-label">Select files</label>
                                    <input class="form-control" type="file" id="formFileMultiple" multiple />
                                  </div>

                                  {errors.email && touched.email && errors.email}
                                  <div class="">
                                    <label for="floatingTextarea">Comments</label>
                                    <textarea 
                                    class="form-control" 
                                    placeholder="Leave a comment here" 
                                    id="floatingTextarea2" 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.comments}
                                    style={{height: "100px"}}
                                    ></textarea>
                                  </div>
                                  {/* <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    className="form-control-plaintext"
                                  /> */}

                                  </div>
                                  <button type="submit" disabled={isSubmitting} class="btn btn-secondary mt-4">Secondary</button>
                                </form>
                              )}
                            </Formik>
                          </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default panel-faq">
                        <div className="panel-heading">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion-cat-1"
                            href="#faq-cat-1-sub-5"
                          >
                            <h4 className="panel-title">
                              Other Utilities
                              <span className="pull-right">
                                <i className="glyphicon glyphicon-chevron-down" />
                              </span>
                            </h4>
                          </a>
                        </div>
                        <div
                          id="faq-cat-1-sub-5"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                          <div className="button-group-1">
                                <h5 style={{ color: "#978097" }}>
                                  Earn Passive Income
                                </h5>
                                {item['earn_passive'].status ?<a href="" target="_blank" download="MyFile">  <button>Download</button></a>: <p className="text-danger">Coming Soon...</p>}
                            </div>
                          </div>
                        </div>
                      </div>
 
                    </div>
                  </div>
                  <div className="tab-pane fade" id="faq-cat-2">
                    <div
                      className="panel-group"
                      id="accordion-cat-2 color-white"
                    >
                      <ul>
                        <li>
                          <h5 style={{ color: "#978097" }}>
                            Blockchain : Polygon
                          </h5>
                        </li>
                        <li>
                          <h5 style={{ color: "#978097" }}>
                            Contract Address:{" "}
                            {item.phase == 1
                              ? collectionAddress[0]
                              : collectionAddress[1]}
                          </h5>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default Utility;
