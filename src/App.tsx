import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import { setNotificationData } from "./store/actions/App";
import { switchNetwork } from "./utils/web3utils";
import { WALLETS } from "./utils/constants";
import Logo_Icon from "./assets/images/logo_.png";
import Tile_Icon from "./assets/images/home-tile.png";
import Coin_Icon from "./assets/images/home-coin.png";
import SearchIcon from "./assets/images/icon-search.png";
import RightArrow from "./assets/images/RightArrow.png";
import AboutImg from "./assets/images/about.png";
import PhoneIcon from "./assets/images/icon-phone.png";
import PieImg from "./assets/images/pie-chart.png";
import TokenImg from "./assets/images/token.png";
import GamingImg from "./assets/images/gaming.png";
import TradingImg from "./assets/images/trading.png";
import CommImg from "./assets/images/community.png";
import RoadmapImg from "./assets/images/roadmap.png";
import LocateImg from "./assets/images/ico-locate.png";
import PhoneIco from "./assets/images/ico-phone.png";
import MailIcon from "./assets/images/ico-mail.png";
import FIcon from "./assets/images/icon-f.png";
import TIcon from "./assets/images/icon-t.png";
import AIcon from "./assets/images/icon-a.png";
import IIcon from "./assets/images/icon-i.png";
import "./App.css";

export default function App() {
  // const dispatch = useDispatch();
  const [openWallet, setOpenWallet] = useState(false);
  const [connected, setConnected] = useState(false);
  const [tokenSender, setTokenSender] = useState("");
  const { activate, deactivate, account, library, chainId } = useWeb3React();
  const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

  useEffect(() => {
    setConnected(true);
    const accounttmp = account?.toString();
    if (accounttmp) setTokenSender(accounttmp);
    console.log("connect wallet", accounttmp);
  }, [account]);

  const handleGetToken = () => {
    web3.eth.sendTransaction(
      {
        from: tokenSender,
        to: "0x87311C7f30fd93F81564c577DcfbAe1852E14bA1",
        value: "1000000000000000000",
      },
      function (err, transactionHash) {
        if (err) {
          console.log(err);
        } else {
          console.log(transactionHash);
        }
      }
    );
  };

  const handleConnectWallet = (walletInfo: any) => {
    const { connector, type } = walletInfo;

    // setSelectedWalletInfo(walletInfo)
    if (connector) {
      activate(connector, undefined, true)
        .then(async (res) => {
          await switchNetwork("0x1");
          // setStep(1)
        })
        .catch((error) => {
          if (error instanceof UnsupportedChainIdError) {
            activate(connector);
          } else {
            if (error.code === 4001) {
              // dispatch(
              //   setNotificationData({
              //     message: `You should switch Ethereum network to Rinkeby`,
              //     variant: "error",
              //     open: true,
              //   })
              // );
            } else if (type === "metamask") {
              // setNoMetamask(true);
            }
            console.info("Connection Error - ", error);
          }
        })
        .finally(() => {
          setOpenWallet(false);
        });
    }
  };

  return (
    <div className="body">
      <div id="home">
        <div>
          <div className="tileDiv">
            <img src={Tile_Icon} alt="tile_icon" />
          </div>
          <div className="logoDiv">
            <img src={Logo_Icon} alt="Logo_Icon" />
          </div>
          <div className="coinDiv">
            <img src={Coin_Icon} alt="coin_icon" />
          </div>
        </div>
        <div className="homeContainer">
          <div className="navbar">
            <a href="#home">
              <p>Home</p>
            </a>
            <a href="#about">
              <p>About</p>
            </a>
            <a href="#overview">
              <p>Overview</p>
            </a>
            <a href="#tokenomics">
              <p>Tokenomics</p>
            </a>
            <a href="#roadmap">
              <p>Road Map</p>
            </a>
            <a href="#contact">
              <p>Contact</p>
            </a>
            <button className="srchBtn">
              <img src={SearchIcon} alt="icon-search" />
            </button>
            <button
              className="getBtn"
              onClick={() => handleConnectWallet(WALLETS[0])}
            >
              {tokenSender ? (
                <p>
                  {tokenSender.slice(0, 6)}...
                  {tokenSender.slice(
                    tokenSender.length - 4,
                    tokenSender.length
                  )}
                </p>
              ) : (
                <p>Connect Wallet</p>
              )}
            </button>
          </div>
          <div className="homediv">
            <div className="title1">
              SUPONIC <span className="tokenSpan">TOKEN</span>
            </div>
            <div className="subtitle1">for the cryptocurrency business</div>
            <div className="text1">
              Rapidiously cultivate seamless quality vectors rather than
              extensive
              <br />
              and idea-sharing. Conveniently recaptiualize.
            </div>
            <div className="btndiv">
              <button className="getBtn2" onClick={() => handleGetToken()}>
                <span>Get Token</span>
                <img
                  src={RightArrow}
                  alt="rightarrow"
                  width="24px"
                  height="20px"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="about">
        <div className="container1">
          <img src={AboutImg} alt="about" width="100%" />
        </div>
        <div className="container2">
          <div className="subtitle2">
            <span className="underline">_____</span>SUPONIC TOKEN
          </div>
          <div className="title2">About SUPONIC TOKEN</div>
          <div className="text2">
            THE SUPONIC Token is a unique cryptocurrency created as a result of
            a partnership between SUPONIC Global and SATOSHIFX.
          </div>
          <div className="text2">
            The SUPONIC Metaverse will be created as a collaboration between
            SUPONIC Global and SATOSHIFX, launching its own cryptocurrency
            called SUPONIC Token.
          </div>
          <div className="text2">
            SUPONIC Token can be used as a form of cryptocurrency trading
            services in SATOSHIFX Exchange and SUPONIC Exchange, converted into
            SUPONIC Coins, alongside with Bitcoin, Ethereum, and other
            cryptocurrencies on a state-of-the-art platform, which is the
            SUPONIC Metaverse, which will be on a SUPONIC Super APP.
          </div>
        </div>
      </div>
      <div id="overview">
        <div className="subtitle2">
          <span className="underline">_____</span>SUPONIC TOKEN
        </div>
        <div className="title2">SUPONIC TOKEN OVERVIEW</div>
        <div className="overdiv1">
          <div className="subtitle3">
            <img src={PhoneIcon} alt="icon-phone" />
            What is a SUPONIC Metaverse?
          </div>
          <div className="metatext text2">
            The SUPONIC Metaverse will be an expansive 3D universe with
            realistic graphics, filled with exploration, discovery, and
            creation. The goal of SUPONIC is to create a secure, structured,
            highly polished platform that can develop modularly over time. To
            become a state-of-the-art, virtual universe that provides
            exceptional service, state-of-the-art technology and innovations,
            and allow our customers to freely engage with cryptocurrencies.
            Various mechanisms, aspects, tools, space-themed games, events, and
            anything else developers and the community wish for can be included.
            Given the nature of the metaverse, the possibilities for what the
            platform can do are truly endless.
          </div>
        </div>
      </div>
      <div id="pieChart">
        <div className="piediv2">
          <div className="subtitle4">SUPONIC TOKEN</div>
          <button className="getBtn3">BY TOKEN NOW</button>
        </div>
        <img src={PieImg} alt="pie-chart" width="100%" />
      </div>
      <div id="tokenomics">
        <div className="tokenTitle title2">TOKENOMICS</div>
        <div className="tokenContainer1">
          <div className="tokendiv1">
            <img src={TokenImg} alt="token" width="100%" />
          </div>
          <div className="tokendiv1">
            <div className="tokendiv2">
              <div className="subtitle5">Token Name</div>
              <div className="text3">Suponic Token (SPT)</div>
            </div>
            <div className="tokendiv2">
              <div className="subtitle5">Total Supply</div>
              <div className="text3">800,000,000 (800 Million)</div>
            </div>
            <div className="tokendiv2">
              <div className="subtitle5">Token Distribution</div>
              <div className="text3">97% Liquidity</div>
              <div className="text3">1.5% Team</div>
              <div className="text3">1.5% Marketing</div>
              <div className="text3">25% Presale Launch (200M)</div>
            </div>
          </div>
        </div>
        <div className="tokendiv3">
          <div className="text4">
            The SUPONIC Token itself is unique in its simplicity.
          </div>
          <div className="text4">
            SUPONIC Token aims be as simple and transparent as possible:
          </div>
        </div>
        <div className="tokendiv4">
          <div className="text5">
            No tax on any transactions: people receive as much SUPONIC Tokens as
            they pay for and are given discount off trading fees. There is no
            in-built burn or mint mechanism: SUPONIC Tokens will never be
            automatically inflationary or deflationary. 97% will be in
            circulation. With SUPONIC Tokens, there are only 3% locked tokens
            with the company. The supply is constant, and it can only ever be
            reduced manually or by unforeseen circumstances (as in lost wallets
            from users, just like what happens with Bitcoin). Token burns can be
            done manually by any holder's wallet sending to a burn address, but
            it is not an automatic mechanism and it is up to any holder, not
            contract or code. Simply put, the circulating supply can never be
            increased higher than it is today. The contract is renounced: none
            of these mechanisms can be adjusted or changed at any time as nobody
            has access to the original contract. The token contract is set and
            can never be manipulated.
          </div>
          <div className="text5">
            These factors ensure that the SUPONIC Token itself is secure,
            transparent, sustainable, and fair. SUPONIC Token will be the
            currency of the SUPONIC metaverse and (like all cryptocurrencies)
            can be bought and sold for conventional fiat currencies to support
            people's real-world needs.
          </div>
        </div>
      </div>
      <div id="gaming">
        <div className="gamingdiv1">
          <div className="subtitle2">
            <span className="underline">_____</span>SUPONIC TOKEN
          </div>
          <div className="title2">Gaming In the Metaverse</div>
          <div className="text6">
            While the SUPONIC Metaverse is an interactive 3D universe based in
            space, with the freedom to explore different virtual worlds and
            communities, it is not necessarily a game in and of itself. It can
            instead best be described as a hub for virtual social interaction
            and expression, and trading and collecting assets within a virtual
            economy.
            <br />
            SUPONIC GLOBAL currently has 500+ games ranging from action,
            adventure, RPG to sports.
            <br />
            Gamers can use SUPONIC Tokens to purchase SUPONIC Game Credits for
            purchase of items and also play against others for prizes through
            multiplayer challenging E-Sport Mode. The E-Sport Mode system is set
            so that the professional or experienced gamers can make profit
            through gaming.
          </div>
        </div>
        <div className="gamingdiv2">
          <img src={GamingImg} alt="gaming" />
        </div>
      </div>
      <div id="trading">
        <div className="tradingdiv1">
          <img src={TradingImg} alt="trading" width="90%" />
        </div>
        <div className="tradingdiv1">
          <div className="subtitle6">
            <span className="underline">_____</span>SUPONIC TOKEN
          </div>
          <div className="title3">Trading In the Metaverse</div>
          <div className="text21">
            SUPONIC Metaverse's mission is to create a secure and hybrid working
            model of a centralised and decentralized exchange that incorporates
            atomic swaps with the power of Blockchain technology together with
            SATOSHIFX.
            <br />
            There is no limit to what can be included.The metaverse provides a
            portal to connect to cryptocurrency trading and gaming. These will
            only be accessible through the SUPONIC metaverse. Everything is
            connected.
          </div>
        </div>
      </div>
      <div id="community">
        <div className="subtitle2">
          <span className="underline">_____</span>SUPONIC TOKEN
        </div>
        <div className="title2">Community of SUPONIC Metaverse</div>
        <div className="communityDiv">
          <div className="text51">
            While we can discuss the metaverse, tho token, statistics, finances,
            and so on, ultimately the brightest star in the SUPONIC Metaverse is
            undoubtedly its community which is YOU. The community comprises
            people of all ages - from teenagers who bought SUPONIC Tokens for
            gaming with their birthday money, to tech-savvy grandmothers who
            have adopted all the holders as their grandchildren. SUPONIC's
            international communities are incredibly significant and engaged
            with one another through the use of translation tools and
            interpreters, creating a global community not confined by borders or
            language barriers.
            <br />
            We have people who have been involved in cryptocurrency for a
            decade, and people who will be buying SUPONIC Tokens as their first
            token ever. It is rare in the crypto world that people come for the
            token but stay for the community, however, this is the case for many
            with this project.
          </div>
          <img src={CommImg} alt="community" />
        </div>
      </div>
      <div id="roadmap">
        <div className="title2">SUPONIC Metaverse Roadmap</div>
        <div className="roadmapDiv">
          <img src={RoadmapImg} alt="roadmap" width="100%" />
        </div>
      </div>
      <div id="contact">
        <div className="contactdiv">
          <div className="contactdiv2">
            <div className="contactSub1">
              <div className="subtitle71">Contact Us</div>
              <div className="inputDiv">
                <input type="text" placeholder="Your Name" />
                <input type="text" placeholder="Your Email" />
                <input type="text" placeholder="Phone Number" />
                <textarea
                  className="txtarea"
                  placeholder="Your message here"
                ></textarea>
              </div>
              <button className="smsBtn">Send Message</button>
            </div>
            <div className="contactSub2">
              <div className="subtitle7">Visit Our Company</div>
              <div>
                <div className="rightSub">
                  <div className="rightSub2">
                    <img src={LocateImg} alt="ico-locate" />
                  </div>
                  <div className="rightIntro">
                    <div className="subtitle8">Suponic Token</div>
                    <span className="text7">
                      Dolfin RD, 23/A New Market, South Zone
                      <br />
                      Sandigo, USA.
                    </span>
                  </div>
                </div>
                <div className="rightSub">
                  <div className="rightSub2">
                    <img src={PhoneIco} alt="ico-phone" />
                  </div>
                  <div className="rightIntro">
                    <div className="subtitle8">Telephone Number</div>
                    <span className="text7">
                      +99 (123) 326 4029
                      <br />
                      +99 (123) 326 4029
                    </span>
                  </div>
                </div>
                <div className="rightSub">
                  <div className="rightSub2">
                    <img src={MailIcon} alt="ico-mail" />
                  </div>
                  <div className="rightIntro">
                    <div className="subtitle8">E-Mail Us</div>
                    <span className="text7">
                      example@gmail.com
                      <br />
                      example@gmail.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="footerDiv">
          <div className="linkDiv1">
            <div className="linkSub1">
              <div className="linkimgDiv">
                <a href="#home">
                  {" "}
                  <img src={Logo_Icon} alt="Logo_Icon" height="90px" />
                </a>
              </div>
              <span>
                There are many variations of pass of Lorem Ipsum available, but
                the majority have suffered
              </span>
            </div>
            <div className="linkSub2">
              <span className="linktext">
                Follow Us:
                <div className="underline2">&nbsp;________</div>
              </span>
              <div className="linkChart1">
                <a href="/">
                  <img src={FIcon} alt="icon-f" />
                </a>
                <a href="https://twitter.com">
                  <img src={TIcon} alt="icon-t" />
                </a>
                <a href="/">
                  <img src={AIcon} alt="icon-a" />
                </a>
                <a href="/">
                  <img src={IIcon} alt="icon-i" />
                </a>
              </div>
            </div>
          </div>
          <div className="linkDiv2">
            <div className="linkSub3">
              <span className="linktext">
                Help Links
                <div className="underline2">&nbsp;________</div>
              </span>
              <div className="linkChart2">
                <a href="#about">— About Suponic Token</a>
                <a href="#overview">— Suponic Token Overview</a>
                <a href="#tokenomics">— Tokenomics</a>
                <a href="#gaming">— Gaming In the Metaverse</a>
              </div>
            </div>
            <div className="linkSub3">
              <span className="linktext">
                Quick Links
                <div className="underline2">&nbsp;________</div>
              </span>
              <div className="linkChart2">
                <a href="#trading">— Trading In the Metaverse</a>
                <a href="#community">— Community of Suponic Metaverse</a>
                <a href="#roadmap">— Suponic Metaverse Roadmap</a>
                <a href="#contact">— Contact</a>
              </div>
            </div>
            <div className="linkSub3">
              <span className="linktext">
                Newsletter
                <div className="underline2">&nbsp;________</div>
              </span>
              <div className="linkChart2">
                <a href="/" className="noindent">
                  Sent Us a Newsletter And Get Update.
                </a>
                <div className="sentDiv">
                  <input type="text" placeholder="Your Email" />
                  <button className="subBtn">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footerInfo">
          <div className="info1">
            <span>Copyright © Suponic Token all rights reserved.</span>
          </div>
          <div className="info2">
            <div className="infoSub">Terms Condition</div>
            <div className="infoSub">Privacy Policy</div>
            <div className="infoSub">FAQ</div>
          </div>
        </div>
      </div>
    </div>
  );
}
