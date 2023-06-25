import React, {useState} from "react";
import axios from "axios";
import styled from "styled-components";
import { Formik, Field, Form } from "formik";
// // Assets
// import ContactImg1 from "../../assets/img/demo-1.png";
// import ContactImg2 from "../../assets/img/demo-2.png";
// import ContactImg3 from "../../assets/img/demo-3.png";

const initialValues = {
  uri: "",
  options: {
    margin: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      unit: "Px"
    },
    printBackground: false,
    displayHeaderFooter: false,
    orientation: "Portrait",
    format: "A4",
  }
}

export default function Demo() {

  const baseURL = "https://swiftconvert.dev/api/convert";
  // const corsProxy = CorsAnywhere.create();

  const [data, setData] = useState({})
  console.log("🚀 ~ file: Demo.jsx:32 ~ Demo ~ data:", data)

  const onSubmit = async (values) => {
    console.log("🚀 ~ file: Demo.jsx:37 ~ onSubmit ~ values:", values)
    try {
      const res = await axios.post(baseURL, values);
      setData(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Wrapper id="contact">
      <div className="WhiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold" style={{marginBottom:"12px"}}>Demo</h1>
            <p className="font20">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <Formik
            initialValues={initialValues}
            onSubmit={(values)=>onSubmit(values)}
          >
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-md-12 col-lg-12">
          <Form className="demo_form">
              <FormTable>
                
                <div className="row" style={{ paddingBottom: "30px", justifyContent:"space-evenly" }}>
                  <div className="col-md-7 col-lg-7">
                    <h1 style={{marginBottom:"30px"}}>Enter a source URL</h1>

                    <h4 style={{marginBottom:"15px"}}>Margin</h4>
                    <div className="row">
                        <div className="col-lg-2" style={{marginBottom:"10px"}}>
                          <label className="font15">left</label>
                          <Field name="options.margin.left" className="font18 input-rad" style={{backgroundColor:"#efefef"}}/>
                        </div>
                        <div className="col-lg-2">
                          <label className="font15">right</label>
                          <Field name="options.margin.right" className="font18 input-rad" style={{backgroundColor:"#efefef"}} />
                        </div>
                        <div className="col-lg-2">
                          <label className="font15">top</label>
                          <Field name="options.margin.top" className="font18 input-rad" style={{backgroundColor:"#efefef"}}/>
                        </div>
                        <div className="col-lg-2"> 
                          <label className="font15">bottom</label>
                          <Field name="options.margin.bottom" className="font18 input-rad" style={{backgroundColor:"#efefef"}}/>
                        </div>
                      </div>

                      <h4 style={{marginBottom:"10px"}}>URL</h4>
                    <Field type="text" placeholder="https://www.paperplane.app/examples/invoice" name="uri" className="font20 input-rad" style={{backgroundColor:"#efefef", height:"40px"}} />
                    
                  </div>

                
                <div className="vl"></div>

                  <div className="col-md-4 col-lg-4">

                  <h1 style={{marginBottom:"30px"}}>Select page settings</h1>

                  <div className="row" style={{paddingLeft:"1rem", paddingRight:"1rem" ,marginBottom:"20px"}}>
                      <div>
                          <p style={{marginBottom:"5px"}}>PAGE SIZE</p>
                            <Field as="select" name="options.format" style={{width:"230%"}}>
                              <option value="Letter">Letter</option>
                              <option value="Legal">Legal</option>
                              <option value="Tabloid">Tabloid</option>
                              <option value="Ledger">Ledger</option>
                              <option value="A0">A0</option>
                              <option value="A1">A1</option>
                              <option value="A2">A2</option>
                              <option value="A3">A3</option>
                              <option value="A4">A4</option>
                              <option value="A5">A5</option>
                              <option value="A6">A6</option>
                            </Field>
                        </div>
                  </div>
                  <div className="row" style={{justifyContent:"space-between", paddingLeft:"1rem",paddingRight:"1rem",marginBottom:"20px"}}>
                        <div>
                          <p style={{marginBottom:"5px"}}>PAGE ORIENTATION</p>
                            <Field as="select" name="options.orientation" style={{width:"163%"}}>
                              <option value="Portrait">Portrait</option>
                              <option value="Landscape">Landscape</option>
                            </Field>
                        </div>
                  </div>

                      <div className="row">
                        <div style={{marginBottom:"10px",paddingLeft:"1rem"}}>
                          <p>Print Background</p>
                          <label className="switch">
                          <Field type="checkbox" name="options.printBackground"/>
                            <span class="slider round"></span>
                          </label>
                        </div>
                        <div style={{paddingLeft:"2rem"}}>
                          <p>Header Footer</p>
                          <label className="switch">
                          <Field type="checkbox" name="options.displayHeaderFooter"/>
                            <span class="slider round"></span>
                          </label>
                        </div>
                      </div>
                      
                  </div>
                </div>
              </FormTable>
              <SumbitWrapper className="flex" style={{justifyContent:"center"}}>
                <ButtonInput type="submit" value="Submit" className="pointer animate radius8" style={{ maxWidth: "220px" }} />
              </SumbitWrapper>
          </Form>
            </div>
            {/* <div className="col-md-4 col-lg-4 flex">
              <div style={{ width: "50%" }} className="flexNullCenter flexColumn">
                <ContactImgBox>
                  <img src={ContactImg1} alt="office" className="radius6" />
                </ContactImgBox>
                <ContactImgBox>
                  <img src={ContactImg2} alt="office" className="radius6" />
                </ContactImgBox>
              </div>
              <div style={{ width: "50%" }}>
                <div style={{ marginTop: "100px" }}>
                  <img src={ContactImg3} alt="office" className="radius6" />
                </div>
              </div>
            </div> */}
          </div>
        </Formik>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const FormTable = styled.form`
  padding: 10px 0 10px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border: 1px solid #c5c0c0;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  font-size: 1rem;
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
// const ContactImgBox = styled.div`
//   max-width: 180px; 
//   align-self: flex-end; 
//   margin: 10px 30px 10px 0;
// `;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;









