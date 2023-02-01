import React, { useState, useEffect,useContext } from "react";
import "./utility.css";
import { useParams } from "react-router-dom";
import CryptoConvert from "crypto-convert";
import { ethers } from 'ethers'
import $ from "jquery";
import { items } from "../../data's/utility";
import { Alchemy, Network } from "alchemy-sdk";
import { getContractInstance, getGasFees } from "../../data's/helper";
import { Formik } from 'formik';
import {saveAs} from 'file-saver';
import { Context } from "../../Context";
import ProductHeader from "../productHeader/ProductHeader";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

function Utility() {
  
  let { name } = useParams();
  const [claimed,setClaimed] = useState(false)
  const item = items[name];
  console.log(items);
  const {walletAddress} = useContext(Context)
  console.log(item['start']/10,walletAddress,item['phase'])
    axios.post("http://localhost:5000/contract/isItemClaimed",
    {
      address:walletAddress,
      itemId:item['start']/10,
      contractId:item['phase']
    }).then(res=>{
      setClaimed(res.data.claimed)
      console.log(res.data.claimed)
    }).catch(e=>{
      console.log(e)
    })
  console.log(walletAddress)
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
  const claimDCL = () => {
    
    console.log(item['start']/10,walletAddress,item['phase'])
    axios.post("http://localhost:5000/contract/issueTokens",{
      address:[walletAddress],
      itemIds:[item['start']/10],
      contractId:item['phase']
    }).then(res=>{
      toast.success(res.data.message);
    }).catch(e=>{
      console.log(e)
      toast.error(e.response.data.message);
    })
  }
  const fun=async()=>{
    var temp = {
      "Chrome Heart": 0,
      "Puffy Crossroads": 0,
      "Oyster Spell": 0,
      "Vibrance Splash": 0,
      "Flora Flamboyance": 0,
      "Rufflanza": 0,
      "Star Cloak": 0,
      "Celestial Dream": 0,
      "Dazzling Devil": 0,
      "Pop Kiss": 0,
      "Comic Boom": 0,
      "Human Masquerade": 0,
    };
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
  }

  useEffect( () => {
    fun()
    }, []);
  console.log(nftCost);

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
    <>
    <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          style={{zIndex:100000}}
          />
          {/* Same as */}
      <ToastContainer />
    <ProductHeader />
    <div className="utility-page mt-4">
      {/* <iframe src="https://metadrip.xrcouture.com" width="100%" height="500"/> */}
      <div className="row mt-4">
        <div className="col-md-7 col-sm-12 overflow-hidden d-flex d-flex flex-column">
          <video
            src={item.video}
            className="utility-page-video align-self-center"
            muted
            autoPlay
            loop
          />
        </div>
        <div className="col-md-5 col-sm-12">
          <div className="asset-details-header">
            <h1
              className="title-asset text-left"
              style={{ fontFamily: "Clash Display Bold" }}
            >
              {" "}
              {item.name}
            </h1>
            <div className="details-container">
              <div>
                <p>Created by</p>
               <b><h3>{item.designed_by}</h3></b> 
              </div>
              <p className="w-50">{item.description}</p>
            </div>
            <div className="tab-accordion">
              <div>
                <ul className="nav nav-tabs faq-cat-tabs">
                  <li className="active">
                    <a
                      href="#faq-cat-1"
                      data-toggle="tab"
                      style={{ fontFamily: "Clash Dispaly Medium", fontWeight:'bolder'}}
                    >
                      Utilities
                    </a>
                  </li>
                  <li>
                    <a
                      href="#faq-cat-2"
                      data-toggle="tab"
                      style={{ fontFamily: "Clash Dispaly Medium", fontWeight:'bolder' }}
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
                              {claimed ? <p className="text-success">Claimed</p> : <button onClick={claimDCL}>Claim</button> }
                            </div>
                            <div className="button-group-1">
                              <h5 style={{ color: "#978097" }}>Sandbox</h5>
                              {item['metaverse_wearables']['sandbox'].status?  <button>Claim</button>: <p className="text-danger">Coming Soon...</p>}
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
                              {item['get_3d_assets']['glb_file'].status?  <button>Download</button>: <p className="text-danger">Coming Soon...</p>}
                            </div>
                            <div className="button-group-1">
                              <h5 style={{ color: "#978097" }}>
                                Metahuman
                              </h5>
                              {item['get_3d_assets']['metahuman'].status ?  <button>Download</button>: <p className="text-danger">Coming Soon...</p>}
                            </div>
                            <div className="button-group-1">
                              <h5 style={{ color: "#978097" }}>
                                CloneX
                              </h5>
                              {item['get_3d_assets']['cloneX'].status ?  <button>Download</button>: <p className="text-danger">Coming Soon...</p>}
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
                                {item['metaverse_showcase']['oncyber'].status ?  <p className="text-success">Available</p>: <p className="text-danger">Coming Soon...</p>}
                              </div>
                              <div className="button-group-1">
                                <h5 style={{ color: "#978097" }}>
                                  Spatial
                                </h5>
                                {item['metaverse_showcase']['spatial'].status ?  <button>Download</button>: <p className="text-danger">Coming Soon...</p>}
                              </div>
                              <div className="button-group-1">
                                <h5 style={{ color: "#978097" }}>
                                  AR
                                </h5>
                                {item['metaverse_showcase']['ar'].status ?  <button>Download</button>: <p className="text-danger">Coming Soon...</p>}
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
                                {item['snapchat_ar'].status ?  <button>Download</button>: <p className="text-danger">Coming Soon...</p>}
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
                                {item['earn_passive'].status ?  <button>Download</button>: <p className="text-danger">Coming Soon...</p>}
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
    </>

  );
}

export default Utility;
