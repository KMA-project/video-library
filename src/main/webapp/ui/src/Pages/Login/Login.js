import React, { Component, Fragment } from "react";
import "./Login.css";
import { Redirect } from "react-router-dom";
import callAPI from "../../axios";
import { connect } from "react-redux";
import { loginAccountRequest } from "./actions/LoginActions"; 
import { store } from "../../index";
// import rootReducer from "../../Store/Reducers/Index";
// import Footer_Image from "../../assets/img/footer.png";
// import FormLogin_Image from "../../assets/img/formLogin.png";
// import EndFormLogin_Image from "../../assets/img/endFormLogin.png";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        accountName: "",
        password: "",
      },
      err: "",
      isRedirect: false
    };
  }


  loginForm = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  // componentDidMount = () => {
  //   this.props.loginAccountRequest({accountName: "Duong", password: "12"});
  // }

  onFormSubmit = async (e) => {
      try{
        e.preventDefault();
        const { accountName, password } = this.state;
        this.props.loginAccountRequest({accountName, password});
        this.setState({
            isRedirect: true
        })
      }
       catch (err) {
        this.setState({
            err: "Bạn đã nhập sai tên hoặc mật khẩu!"
        })
       }
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const token = sessionStorage.getItem("token_id"); 
    const { isLoading } = this.props.stateOfLoginReducer;
    if(isLoading) return <div className="loading-login-page">...Loading</div>
    if(token) return <Redirect from={from} to={"/library"} />;
    return (
      <Fragment>
        <header className="header-main">
          <div id="header">
            <div className="school_name">
              <span id="PageHeader1_lblWebtitle">HỌC VIỆN KỸ THUẬT MẬT MÃ</span>
            </div>

            <span id="navbar">
              <a href="../index/index.html">Trang chủ</a> |
              <a
                id="PageHeader1_SignOut_ibnLogout"
                href="javascript:__doPostBack('PageHeader1$SignOut$ibnLogout','')"
              >
                Thoát{" "}
              </a>
              |
              <a
                href="http://qldt.actvn.edu.vn/CMCSoft.IU.Web.info/support/default.aspx"
                target="_blank"
              >
                Hỏi đáp
              </a>{" "}
              |
              <a
                href="http://qldt.actvn.edu.vn/CMCSoft.IU.Web.Info/WebHelp/NewProject1.htm"
                target="_blank"
              >
                Trợ giúp
              </a>
              <select
                name="PageHeader1$drpNgonNgu"
                onchange=""
                id="PageHeader1_drpNgonNgu"
                style={{ width: "50px", zIndex: "0" }}
              >
                <option
                  selected="selected"
                  value="E43296C6F24C4410A894F46D57D2D3AB"
                >
                  VN
                </option>
              </select>
            </span>

            <div id="box_user">
              <div id="PageHeader1_Panel1">
                <p>
                  <span
                    id="PageHeader1_lblUserFullName"
                    style={{ fontSize: "10px", fontWeight: "bold" }}
                  >
                    Khách
                  </span>
                </p>
              </div>
            </div>
          </div>
        </header>

        <table id="tblMain" height="70%" width="100%" align="center" border={0}>
          <tr>
            <td vAlign="middle" align="center">
              <div style={{ width: "auto", align: "center" }}>
                <div id="pnlLogin" style={{ height: "200px", width: "70%" }}>
                  <table id="boxlogin-t">
                    <tr>
                      <td></td>
                    </tr>
                  </table>

                  <table
                    className="tableborderLogin"
                    style={{ marginTop: "-8px", marginRight: "1px" }}
                    height={100}
                    cellSpacing={0}
                    cellPadding={0}
                    width={487}
                    border={0}
                  >
                    <tr>
                      <td vAlign="middle" align="center">
                        <table
                          id="Table2"
                          cellSpacing={1}
                          cellPadding={0}
                          border={0}
                        >
                          <tr>
                            <td>
                              <form onSubmit={this.onFormSubmit} style={{fontFamily: "Ta"}}>
                                <div className="form-control" style={{display: "flex", justifyContent: "space-between"}}>
                                    <div style={{width: "30%"}}>
                                    <label style={{fontWeight: "bold", color: "dimgray"}}>Tài Khoản:</label>
                                    </div>
                                    <div style={{width: "70%"}}>
                                        <input
                                        name="accountName"
                                        type="text"
                                        id="txtPassword"
                                        onChange={this.loginForm}
                                        />
                                    </div>
                                </div>
                                <div className="form-control" style={{display: "flex"}}>
                                    <div style={{width: "30%"}}>
                                        <label style={{fontWeight: "bold", color: "dimgray"}}>Mật Khẩu:</label>
                                    </div>
                                    <div style={{width: "70%"}}>
                                        <input
                                        name="password"
                                        type="password"
                                        id="txtPassword"
                                        onChange={this.loginForm}
                                        />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <button type="submit">Đăng nhập</button>
                                    <button type="button" style={{marginLeft: "1rem"}}>Về trang chủ</button>
                                    <span style={{color: "red", display: "block", fontSize: "14px"}}>{this.state.err}</span>
                                </div>
                              </form>
                            </td>
                          </tr>

                          <tr>
                            <td
                              className="labelheader"
                              colSpan="2"
                              align="center"
                            >
                              <span
                                id="lblErrorInfo"
                                style={{ color: "red" }}
                              ></span>
                            </td>
                          </tr>

                          <tr>
                            <td
                              className="labelheader"
                              colSpan="2"
                              align="center"
                            >
                              <a href="LostPassword.aspx" id="forgotPassword">
                                [ Quên mật khẩu ]
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                  <table
                    id="boxlogin-b"
                    style={{ marginTop: "0px !important" }}
                  >
                    <tr>
                      <td></td>
                    </tr>
                  </table>
                </div>
              </div>
              <div style={{ width: "488px" }} align="center"></div>
              <input name="hidUserId" type="hidden" id="hidUserId" />
              <input
                name="hidUserFullName"
                type="hidden"
                id="hidUserFullName"
              />
              <input
                name="hidTrainingSystemId"
                type="hidden"
                id="hidTrainingSystemId"
              />
            </td>
          </tr>
        </table>

        <div className="clear"></div>
        {/*
                        <script language="javascript">
                function addfav()
                   {
                   if (document.all)
                      {
                      window.external.AddFavorite
                      ("http://www.webdevelopersnotes.com","WebDevelopersNotes")
                      }
                   }
                
                </script>
            */}
        <footer className="footer">
          <div id="footer_1">
            <h4 id="hotline">
              Ðường dây nóng
              <br />
              <span id="PageFooter1_lblHotline"></span>
            </h4>
            <h4 className="footer_content">
              <a
                id="PageFooter1_GoHome_ibnGoHome"
                href="/CMCSoft.IU.Web.Info/Home.aspx"
              >
                Trang chủ
              </a>
              |
              <a
                id="PageFooter1_SignOut_ibnLogout"
                href="javascript:__doPostBack('PageFooter1$SignOut$ibnLogout','')"
              >
                Thoát
              </a>
              |{" "}
              <a
                href="http://qldt.actvn.edu.vn/CMCSoft.IU.Web.Info/support/default.aspx"
                target="_blank"
              >
                Hỏi đáp
              </a>
              |{" "}
              <a
                href="http://qldt.actvn.edu.vn/CMCSoft.IU.Web.Info/WebHelp/NewProject1.htm"
                target="_blank"
              >
                Trợ giúp
              </a>
            </h4>
          </div>
          <div id="footer_2"></div>
        </footer>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stateOfLoginReducer: state.loginReducer
  }
} 

const mapDispatchToProps = (dispatch) => {
    return {
      loginAccountRequest: (payload) => dispatch(loginAccountRequest(payload))
      
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
