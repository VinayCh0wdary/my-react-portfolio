import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        <p>
                        I am a SAP Developer.
                        </p>
                        <p>
                        Specialized in developing applications and solutions using the SAP technology stack.
                        </p>
                        <p>
                        Have good knowledge of Front-End Development JavaScript | SAPUI5 | HTML, CSS for creating visual appeling UI and also responsive for SAP applications. Back-End Development ABAP | CDS Views Other Tech Stacks as BTP | CAPM | Jira | Github | SQl and development tools as BAS | Vs code | SAP GUI | SAP Eclipse, or ABAP Development Tools (ADT).
                        </p>
                        <p>
                        Strong engineering professional background in Computer Science and Technology from Dayananda Sagar University, Bengaluru.
                        </p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">
                  Here are some of my expertise
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <h3>
                      SAP UI5 Development
                      <br />
                      <br />
                    </h3>
                    <p>I have developed multiple projects usin Ui5 fiori elements and have hands-on.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>
                     ABAP Development
                      <br />
                      <br />
                    </h3>
                    <p>I have a good hands-on ABAP CDS | ABAP OO | ABAP workbench | ABAP Tables. </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>
                      ODATA 
                      <br />
                      <br />
                    </h3>
                    <p>I have a good hands-on ODATA Service, used for querying and updating data.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>
                      SAP BTP
                      <br />
                    </h3>
                    <p>I have a good hands-on BTP especially on CAPM | firoi launchpad | mobile cards.<br/></p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>
                      Solidity Programming
                      <br />
                    </h3>
                    <p>I have good hands-on Database Queries, DDL, DML & DCL MySQL Commands.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Development Tools</h3>
                    <p>I have a good hands-on tools such as ADT/Eclipse | VSCode | BAS.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        
        
      </div>
    )
  }
}
