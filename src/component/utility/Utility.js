import React, { useState, useEffect,useContext } from "react";
import "./utility.css";
import { useParams } from "react-router-dom";
import $ from "jquery";
import { items } from "../../data's/utility";
import { Alchemy, Network } from "alchemy-sdk";
import { Formik } from 'formik';
import {saveAs} from 'file-saver';
import { useLocation, useNavigationType } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Context } from "../../Context";
import ProductHeader from "../productHeader/ProductHeader";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import how from '../../assets/how.mp4'
import Modal from 'react-bootstrap/Modal';
import Terms from "./Terms";

function Utility() {
  const location = useLocation();
  const [agreed, setAgreed] = useState(true)
  const [wear, setWear] = useState(false);
  const [terms, setTerms] = useState(false);
  const navType = useNavigationType();
  let { name } = useParams();
  const [claimed,setClaimed] = useState(false)
  const [virtual,setVirtual] = useState(false)
  const item = items[name];
  const [img, setImg] = useState()




  const {walletAddress} = useContext(Context)
  const contractIsClaimed = () =>{
    axios.post("https://api.metadrip.xrcouture.com/contract/isItemClaimed",
    {
      address:walletAddress,
      itemId:item['start']/10,
      contractId:item['phase']
    },                                {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
      },
  }).then(res=>{
      setClaimed(res.data.claimed)
    }).catch(e=>{
      console.log(e)
      toast.error("Something went wrong...!")
    })
  }
  
    const isItemClaimed = () =>{
      axios.post("https://api.metadrip.xrcouture.com/utility/isItemClaimed",
      {
        address:walletAddress,
        itemId:item['start']/10,
        contractId:item['phase']
      },                                {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
    }).then(res=>{
        setVirtual(res.data.claimed)
      }).catch(e=>{
        console.log(e)
        toast.error("Something went wrong...!")
      })
      console.log(walletAddress)
    }

  $("#accordian-header").on('click',function() {
      const i = document.getElementById("accordian-header").childNodes[0]
      console.log(i)
      $('#icon').toggleClass('glyphicon-chevron-up glyphicon-chevron-right');

  })

  const [nft, setNfts] = useState([]);
  const [nftCost, setNftCost] = useState(0);

  const claimDCL = () => {
    // console.log(item['start']/10,walletAddress,item['phase'])
    axios.post("https://api.metadrip.xrcouture.com/contract/issueTokens",{
      address:[walletAddress],
      itemIds:[item['start']/10],
      contractId:item['phase']
    },                                {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
      },
  }).then(res=>{
      toast.success("Successfully Claimed, Check your decentranland backpack");
      setClaimed(true)
      console.log(res)
    }).catch(e=>{
      // console.log(e)
      toast.error(e.response.data.message);
    })
  }
  const collectionAddress = [
    "0xEDe30DF507576e461cc2cB3AdA75bf9B22dc778d", //phase 1
    "0x99D6C0d1A656a1ee1F345AE6482D0aFD76daF8a5", //phase 2
  ];
  const fun=async()=>{
    const config = {
      apiKey: "g7dUSvAcvJnj2Qf0HOIHlxindWYB88gu",
      network: Network.MATIC_MAINNET,
    };
    isItemClaimed()
    contractIsClaimed()
    const alchemy = new Alchemy(config);

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
    alchemy.nft.getNftsForOwner(walletAddress,{contractAddresses:[collectionAddress[item['phase']-1]]}).then(res=>{
      console.log(res)
      if(res.ownedNfts.length>0){
        if(!res.ownedNfts.includes(walletAddress)){
          console.warn(res.owners.includes(walletAddress));
          // redirect('/')
          window.location.href = "/"
          // <Navigate to="/assets" />
        }else{
        //   redirect('/')
        window.location.href = "/"
        // Navigate('/assets')
        // <Navigate to="/assets" />
        }
      }else{
        // redirect('/')
        window.location.href = "/"
        // Navigate('/assets')
        // <Navigate to="/assets" />
      }
     
    })
    alchemy.nft.getNftsForContract(collectionAddress[1]).then((res) => {
      res.nfts.map((i) => {
        let t = i.description.split(":")[0];
        temp[i.title]++;
      });
    });
    alchemy.nft 
    .getNftsForOwner(walletAddress, {
      contractAddresses: collectionAddress,
      omitMetadata: false,
    })
    .then((res) => {
      let a = res["ownedNfts"];
      console.log(a)
    })
    .catch((e) => {
      // alert(e);
    });
    setNfts(temp);
  }

  useEffect( () => {
    if (navType !== "POP") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    fun()
    }, [location]);



  $(document).on(function () {
    $(".collapse").on("show.bs.collapse", function () {
      console.log("opened")
      var id = $(this).attr("id");
      $('a[href="#' + id + '"]')
        .closest(".panel-heading")
        .addClass("active-faq");
      $('a[href="#' + id + '"] .panel-title span').html(
        '<i class="glyphicon glyphicon-chevron-up"></i>'
      );
    });
    $(".collapse").on("hide.bs.collapse", function () {
      console.log("closed")
      var id = $(this).attr("id");
      $('a[href="#' + id + '"]')
        .closest(".panel-heading")
        .removeClass("active-faq");
      $('a[href="#' + id + '"] .panel-title span').html(
        '<i class="glyphicon glyphicon-chevron-up"></i>'
      );
    });
  });
  // console.log(item['metaverse_wearables']['sandbox'].status)


  return (
    <div className="products-container" style={{background: "#000"}}>
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
    {/* <ToastContainer /> */}
    <ProductHeader />
    <div className="utility-page mb-5">
      {/* <iframe src="https://metadrip.xrcouture.com" width="100%" height="500"/> */}
      <div className="row mt-4 align-items-start product-video-and-content">
        <div className="col-xs-12 col-sm-7 col-md-6 col-lg-6 col-xl-5 overflow-hidden d-flex justify-content-center d-flex flex-column">
            <video
              src={item.video}
              autoPlay
              loop
              muted
              className="utility-page-video align-self-center"
            />
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
                            className="collapsed"
                          >
                            <h4
                              className="panel-title"
                              style={{ fontFamily: "Clash Display SemiBold" }}
                            >
                              Cross-Platform Usage
                              <span className="pull-right">
                                <i className="glyphicon glyphicon-chevron-up" />
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
                              <h5 style={{ color: "#978097" ,fontFamily:"Clash Display Medium" }}>Decentraland</h5>
                              {claimed ? <p className="text-success"style={{fontFamily:"Clash Display Medium"}} >Successfully Claimed, Check your decentraland backpack</p> : <button onClick={claimDCL}>Claim</button> }
                            </div>
                            <div className="button-group-1">
                              <h5 style={{ color: "#978097" ,fontFamily:"Clash Display Medium" }}>Sandbox</h5>
                              {item['metaverse_wearables']['sandbox'].status?  <button style={{fontFamily:"Clash Display Medium"}}>Claim</button>: <p className="text-secondary" style={{fontFamily:"Clash Display Medium"}}>Coming Soon...</p>}
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
                            className="collapsed"
                          >
                            <h4 className="panel-title">
                            AR Try-on
                              <span className="pull-right">
                                <i className="glyphicon glyphicon-chevron-up" />
                              </span>
                            </h4>
                          </a>
                        </div>
                        <div
                          id="faq-cat-1-sub-4"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                            {
                              item['snapchat_ar'].status ?
                              <>
                              <video src={item['snapchat_ar'].video} muted autoPlay loop className="snapvideo"></video>
                              <img src={item['snapchat_ar'].qr} className="snapimg"></img>
                              </> : 
                              <div className="button-group-1">
                                <h5 style={{ color: "#978097" ,fontFamily:"Clash Display Medium" }}>
                                  Snapchat AR
                                </h5>
                                {item['snapchat_ar'].status ?  <button>Download</button>: <p className="text-secondary" style={{fontFamily:"Clash Display Medium"}}>Coming Soon...</p>}
                            </div>
                            }
                          
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default panel-faq">
                        <div className="panel-heading">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion-cat-1"
                            href="#faq-cat-1-sub-6"
                            className="collapsed"
                          >
                            <h4 className="panel-title">
                              Virtual Fitting
                              <span className="pull-right">
                                <i className="glyphicon glyphicon-chevron-up" />
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

                          {/* <Button variant="primary" >
                            Custom Width Modal
                          </Button> */}
                          <p onClick={() => setWear(true)} className="modal-button mt-4"  style={{ color: "#8633DA" ,fontFamily:"Clash Display Medium" }}>How to use Virtual Fitting?</p>

                          {!virtual?<Formik
                              initialValues={{ 
                                email: '', 
                                file: null,
                                comments:"",
                                files:null
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
                              onSubmit={async(values, { setSubmitting,resetForm }) => {
                                const data = {
                                    'comments':values.comments,
                                    'email':values.email,
                                    'file':values.file,
                                    'files':values.files,
                                    'itemId': item['start']/10,
                                    'contractId':item['phase'],
                                    'address':walletAddress
                                }
                                await axios.post("https://api.metadrip.xrcouture.com/utility/upload",data,{  
                              headers:{
                                'Access-Control-Allow-Origin': '*',
                                  'Content-Type': "multipart/form-data"
                              }}).then(res=>console.log(
                                toast.success("Form submitted successfully")
                              )).catch((err)=>{
                                toast.error("Oops, Something went wrong. Try again!")
                              })  
                                setTimeout(() => {
                                  resetForm()
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
                                setFieldValue,
                                resetForm
                                /* and other goodies */
                              }) => (
                                <form onSubmit={handleSubmit}>
                                  <div className="row">
                                  <div class="mb-3 col-md-6">
                                    <label for="exampleFormControlInput1" class="form-label"  style={{ color: "#978097" ,fontFamily:"Clash Display Medium" }}>Email address</label>
                                    <input 
                                    type="email" 
                                    class="form-control" 
                                    id="exampleFormControlInput1" 
                                    placeholder="Enter your email address" 
                                    onChange={handleChange}
                                    name="email"
                                    onBlur={handleBlur}
                                    value={values.email}
                                    />
                                    <p className="text-danger" style={{fontFamily:"Clash Display Medium"}}>{errors.email && touched.email && errors.email}</p>
                                  </div>


                                  <div class="mb-3 col-md-6">
                                    <label for="formFileMultiple" class="form-label"  style={{ color: "#978097" ,fontFamily:"Clash Display Medium" }}>Select files</label>
                                    <input 
                                    class="form-control" 
                                    type="file" 
                                    name="file" 
                                    id="formFileMultiple" 
                                    multiple 
                                    required
                                    accept="image/x-png,image/gif,image/jpeg"
                                    onChange={(event) => {
                                      if(event.currentTarget.files.length>10){
                                        alert(`You can upload a maximum of 10 files and you are trying to upload ${event.currentTarget.files.length} files`)
                                        $("#formFileMultiple").val(null)
                                      }else{
                                        setFieldValue("files", event.currentTarget.files)}}
                                      }
                                    />
                                    {/* <FaCloudUploadAlt /> Choose File */}
                                    <p className="text-danger" style={{fontFamily:"Clash Display Medium"}}>{errors.files && touched.files && errors.files}</p>
                                  </div>

                                  <div class="">
                                    <label for="floatingTextarea"  style={{ color: "#978097" ,fontFamily:"Clash Display Medium" }}>Comments</label>
                                    <textarea 
                                    class="form-control" 
                                    placeholder="Leave a comment here" 
                                    id="floatingTextarea2" 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.comments}
                                    style={{height: "100px"}}
                                    name="comments"
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
                                  <button type="submit" style={{background:"#8633DA"}} disabled={isSubmitting} class="btn btn-secondary mt-4">Submit</button>
                                </form>
                              )}
                            </Formik> : <p className="text-success" style={{fontFamily:"Clash Display Medium"}}>Virtual Fitting for this NFT has already being claimed, contact us if you have any queries.</p>}
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
                            className="collapsed"
                          >
                            <h4 className="panel-title">
                              Metaverse Showcase		
                              <span className="pull-right">
                                <i className="glyphicon glyphicon-chevron-up" />
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
                                <h5 style={{ color: "#978097" ,fontFamily:"Clash Display Medium" }}>
                                  OnCyber
                                </h5>
                                {item['metaverse_showcase']['oncyber'].status ?  <p className="text-success" style={{fontFamily:"Clash Display Medium"}}>Available</p>: <p className="text-secondary" style={{fontFamily:"Clash Display Medium"}}>Coming Soon...</p>}
                              </div>
                              <div className="button-group-1">
                                <h5 style={{ color: "#978097" ,fontFamily:"Clash Display Medium" }}>
                                  Spatial
                                </h5>
                                {item['metaverse_showcase']['spatial'].status ?  <p className="text-success" style={{fontFamily:"Clash Display Medium"}}>Available</p>: <p className="text-secondary" style={{fontFamily:"Clash Display Medium"}}>Coming Soon...</p>}
                              </div>
                              <div className="button-group-1">
                                <h5 style={{ color: "#978097" ,fontFamily:"Clash Display Medium" }}>
                                  AR
                                </h5>
                                {item['metaverse_showcase']['ar'].status ?  <img src={item['metaverse_showcase']['ar'].link} alt="QR" className="qr-img" />: <p className="text-secondary" style={{fontFamily:"Clash Display Medium"}}>Coming Soon...</p>}
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
                            className="collapsed"
                          >
                            <h5 className="panel-title">
                              3D Assets
                              <span className="pull-right">
                                <i className="glyphicon glyphicon-chevron-up" />
                              </span>
                            </h5>
                          </a>
                        </div>
                        <div
                          id="faq-cat-1-sub-2"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                            <div className="button-group-1" >
                              <h5 style={{ color: "#978097" ,fontFamily:"Clash Display Medium" }} > 
                              PFPs & Artwork
                              </h5>
                              {item['get_3d_assets']['pfp'].status?  <button onClick={()=>saveAs(item['get_3d_assets']['pfp'].link)} data-bs-toggle="tooltip" data-bs-placement="top"  title="Agree Terms & Conditions to download" disabled={agreed}>Download</button>: <p className="text-secondary" style={{fontFamily:"Clash Display Medium"}}>Coming Soon...</p>}
                            </div>
                            <div className="button-group-1">
                              <h5 style={{ color: "#978097" ,fontFamily:"Clash Display Medium" }}>Universal File (.glb)</h5>
                              {item['get_3d_assets']['glb_file'].status?  <button onClick={()=>saveAs(item['get_3d_assets']['glb_file'].link)} className={agreed? "btn-disabled":""} disabled={agreed}>Download</button>: <p className="text-secondary" style={{fontFamily:"Clash Display Medium"}}>Coming Soon...</p>}
                            </div>
                            <div className="button-group-1">
                              <h5 style={{ color: "#978097" ,fontFamily:"Clash Display Medium" }}>
                              CloneX Avatar
                              </h5>
                              {item['get_3d_assets']['metahuman'].status ?  <button>Download</button>: <p className="text-secondary" style={{fontFamily:"Clash Display Medium"}}>Coming Soon...</p>}
                            </div>
                            <div className="button-group-1">
                              <h5 style={{ color: "#978097" ,fontFamily:"Clash Display Medium" }}>
                              MetaHuman
                              </h5>
                              {item['get_3d_assets']['cloneX'].status ?  <button>Download</button>: <p className="text-secondary" style={{fontFamily:"Clash Display Medium"}}>Coming Soon...</p>}
                            </div>
                            <div class="form-check mt-4">
                            <input class="form-check-input" type="checkbox" value={agreed} onChange={()=>setAgreed(!agreed)} id="flexCheckDefault" />
                              <label class="form-check-label ml-2" for="flexCheckDefault" style={{color:"#777777"}} >
                              I agree with the <span onClick={() => setTerms(true)} className="modal-button"  style={{ color: "#8633DA" ,fontFamily:"Clash Display Medium" }}>Terms and Conditions</span>
                              </label>
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
                            className="collapsed"
                          >
                            <h4 className="panel-title">
                              Earn Passive Income
                              <span className="pull-right">
                                <i className="glyphicon glyphicon-chevron-up" />
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
                                <h5 style={{ color: "#978097" ,fontFamily:"Clash Display Medium" }}>
                                 Passive Income
                                </h5>
                                {item['earn_passive'].status ?  <button>Download</button>: <p className="text-secondary" style={{fontFamily:"Clash Display Medium"}}>Coming Soon...</p>}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default panel-faq">
                        <div className="panel-heading">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion-cat-1"
                            href="#faq-cat-1-sub-7"
                            className="collapsed"
                          >
                            <h4 className="panel-title">
                              More Utilities
                              <span className="pull-right">
                                <i className="glyphicon glyphicon-chevron-up" />
                              </span>
                            </h4>
                          </a>
                        </div>
                        <div
                          id="faq-cat-1-sub-7"
                          className="panel-collapse collapse"
                        >
                          <div className="panel-body">
                          <p className="text-white text-justify" style={{fontFamily:"Clash Display Light"}}>
                          Meta Drip is our most ambitious utility rewarding project and our aim is to provide utilities as long as we exist. Stay tuned and HODL!
                          </p>
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
                          <div className="d-flex">
                            <p className="text-secondary">Blockchain</p> <span className="text-white">: Polygon</span>
                          </div>
                        </li>
                        {/* <li>
                        <div className="d-flex">
                            <p className="text-secondary">Contract Address:{" "}</p> <span className="text-white">: {item.phase == 1
                              ? collectionAddress[0]
                              : collectionAddress[1]}</span>
                          </div>
                        </li> */}
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
    <Modal
        show={wear}
        animation={false}
        centered={true}
        onHide={() => setWear(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        style={{zIndex:1000000,opacity:1}}
        size="xl"
        scrollable={true}
      >
        <Modal.Header>
          <Modal.Title id="example-custom-modal-styling-title">
            <h3 style={{fontFamily:"Clash Display Bold",color:"white"}}>VIRTUAL FITTING</h3>
          </Modal.Title>
          <button type="button" class="btn-close btn-close-white" aria-label="Close" onClick={()=>setWear(!wear)}></button>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-7">

            
          {/* <h4 className="text-left text-justify" style={{fontFamily:"Clash Display Medium", color:"#fff"}}>
          How to wear Digital Fashion
          </h4> */}
          <h5 className="text-left text-justify" style={{fontFamily:"Clash Display Light",color:"#fff"}}>
          Get a bespoke  <b>‘virtual-fitting’</b> on a photograph to flaunt on your socials, digitally tailored by our elite 3d designers.
          <br />
          </h5>

          <h4 className="text-left text-justify" style={{fontFamily:"Clash Display Medium",color:"#fff"}}>Photo & Fitting Guide</h4>

          <h5 className="text-left text-justify" style={{fontFamily:"Clash Display Light",color:"#fff"}}>
          The first step is to choose a good <b>high-quality picture</b> on which you would like to wear the digital item(s). For a flawless Digital fashion image, we want you to follow some <b>best practices.</b> Just keep the following things in mind :
          <br/>
          For a flawless Digital fashion image, we want you to follow some best practices. Just keep the following things in mind for a perfect Digital fashion photoshoot: 

          <br/><br /> <br/>
          1. A good lightning with no shadows falling on you.<br/>
          2. A photo with minimal/tight fitted clothing such as a swimsuit or sports wear.<br/>
          3. The clothing you wear must be smaller to the digital items you wish to wear.<br/>
          4. Your body and face must be in sharp focus.<br/>
          5. Hair tied up/ not covering your body.<br/>
          6. Avoid any hindrance from any object or accessory covering your body.<br/>
          </h5>
          </div>
          <div className="col-md-5">
            <video src={how} className="w-100" alt="how to wear" muted loop autoPlay />
          </div>
          </div>
          <br/>
          <br/>
        </Modal.Body>
      </Modal>
      <Modal
        show={terms}
        animation={false}
        centered={true}
        onHide={() => setTerms(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        style={{zIndex:1000000,opacity:1}}
        size="xl"
        scrollable={true}
      >
        <Modal.Header>
          <Modal.Title id="example-custom-modal-styling-title">
          <h3 style={{fontFamily:"Clash Display Bold",color:"white"}} className="text-center mt-4">USER LICENSE AGREEMENT</h3>
          <h5 style={{fontFamily:"Clash Display Light",color:"white"}}>TERMS OF USE</h5>
          </Modal.Title>
            <button type="button" class="btn-close btn-close-white" aria-label="Close" onClick={()=>setTerms(!terms)}></button>
        </Modal.Header>
        <Modal.Body>
            <Terms />
        </Modal.Body>
      </Modal>
    <Footer />
    </div>
  );
}

export default Utility;
