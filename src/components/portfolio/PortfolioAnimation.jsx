import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Modal from "react-modal";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import Social from "../Social";

const Portfolio = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpenJHIA, setOpenJHIA] = useState(false);
  const [isOpenJIMOMO, setOpenJIMOMO] = useState(false);
  const [isOpenCRAFTING, setOpenCRAFTING] = useState(false);
  const [isOpenVOGUE, setOpenVOGUE] = useState(false);
  const [isOpenENSEMBLE, setOpenENSEMBLE] = useState(false);

  function toggleModalJHIA() {
    setOpenJHIA(!isOpenJHIA);
  }

  function toggleModalJIMOMO() {
    setOpenJIMOMO(!isOpenJIMOMO);
  }

  function toggleModalCRAFTING() {
    setOpenCRAFTING(!isOpenCRAFTING);
  }

  function toggleModalVOGUE() {
    setOpenVOGUE(!isOpenVOGUE);
  }

  function toggleModalENSEMBLE() {
    setOpenENSEMBLE(!isOpenENSEMBLE);
  }

  return (
    <SimpleReactLightbox>
      <div className="portfolio_list">
        <ul className="gallery_zoom">
          {/* Start Art With Me */}
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="1gyTUHP6ne8"
            onClose={() => setOpen(false)}
          />

          <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner video">
              <a
                href="https://www.youtube.com/watch?v=1gyTUHP6ne8"
                target="_blank"
                rel="noopener noreferrer"
                className="title"
              >
                <h3>Art With Me </h3>
                <span>NFT Marketplace Site</span>
              </a>
              <img
                src="img/portfolio/porto1.jpg"
                alt="Youtube Shoot"
                onClick={() => setOpen(true)}
              />
            </div>
          </li>
          {/* End Art With Me */}

          {/* Start JHIA */}
          <Modal
            isOpen={isOpenJHIA}
            onRequestClose={toggleModalJHIA}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="beny_tm_modalbox_news">
              <button className="close-modal" onClick={toggleModalJHIA}>
                <img src="/img/svg/cancel.svg" alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="image">
                    <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                    <div
                      className="main"
                      style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL + "img/news/1.jpg"
                          })`,
                      }}
                    ></div>
                  </div>
                  {/* End image */}

                  <div className="details">
                    <span>
                      December 29, 2022 <a href="#">Blockchain Technology</a>
                    </span>
                    <h3 className="title" onClick={toggleModalJHIA}>
                      JHIA : Online Course Site
                    </h3>
                  </div>
                  {/* End details */}

                  <div className="main_content">
                    <div className="descriptions">
                      <p className="bigger">
                        Despite partial crypto bans, the Chinese government has included blockchain technology in official state development policy.
                      </p>
                      <p>
                        On Dec 29, the state-owned China Academy for Information and Communications Technology,
                        or CAICT, published a document titled “2022 Blockchain Whitepaper.” According to the paper,
                        more than 1,400 blockchain firms are currently based in mainland China. Together with the U.S.,
                        the two countries represent a 52% market share in terms of global blockchain enterprises.
                      </p>
                      <p>
                        The CAICT also disclosed that around 48 post-secondary institutions across China have introduced
                        “blockchain engineering” related degrees and certifications. In the report, the institution detailed
                        four types of blockchain technologies with high application potential.
                      </p>
                      <p>
                        First, “settlement chains” would allow transparent publication of telecom fees for firms such as China
                        Mobile and China Unicom. Second, the Zhejiang Cold Chains would enable consumers to verify the source of
                        their food by scanning the productsclosing’ QR codes. Third, the Trusple cross-border payments platform
                        can help buyers and sellers obtain due diligence info on their counterparties.
                      </p>
                      <p>
                        Finally, blockchain monitoring platforms can help financial regulators spot order irregularities between
                        different exchanges. Major Chinese tech giants such as Tencent, Ant Financial, Huawei and Alibaba have
                        all created “blockchain alliances” in the past years for their respective operations.
                      </p>
                      <div className="quotebox">
                        <p>
                          China currently allows ownership of cryptocurrencies and nonfungible tokens, or NFTs, with their legality
                          protected in courts of law. However, the country has banned the issuance of initial coin offerings along
                          with digital exchanges and cryptocurrency mining.
                        </p>
                      </div>
                      <p>
                        Despite setbacks, the government of China has included blockchain developments on its official national agenda.
                        In October, the State Council of the People's Republic of China stated that it would prioritize “cloud computing,
                        blockchain, and AI” as means of improving data management and government services. On Dec. 28, Chinese officials
                        announced that a national exchange for the trading of NFTs and digital asset copyrights would launch on Jan. 1.
                      </p>
                      <p>
                        Source : <a href="https://cointelegraph.com/news/over-1-400-chinese-firms-operating-in-blockchain-industry-national-whitepaper-shows" target="_blank">https://cointelegraph.com/news/over-1-400-chinese-firms-operating-in-blockchain-industry-national-whitepaper-shows</a>
                      </p>
                    </div>
                    {/* End description */}
                    <div className="news_share ">
                      <span>Share:</span>
                      <Social />
                    </div>
                    {/* End news share */}
                  </div>
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>

          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div
              className="list_inner video"
              onClick={toggleModalJHIA}>
              <a
                className="title"
              >
                <h3>JHIA Academy</h3>
                <span>Online Sewing Course Site</span>
              </a>
              <img
                src="img/portfolio/porto2.jpg"
                alt="Vimeo Shoot"
              />
            </div>
          </li>
          {/* End JHIA */}

          {/* Start JIMOMO */}
          <Modal
            isOpen={isOpenJIMOMO}
            onRequestClose={toggleModalJIMOMO}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="beny_tm_modalbox_news">
              <button className="close-modal" onClick={toggleModalJIMOMO}>
                <img src="/img/svg/cancel.svg" alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="image">
                    <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                    <div
                      className="main"
                      style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL + "img/news/1.jpg"
                          })`,
                      }}
                    ></div>
                  </div>
                  {/* End image */}

                  <div className="details">
                    <span>
                      December 29, 2022 <a href="#">Blockchain Technology</a>
                    </span>
                    <h3 className="title" onClick={toggleModalJIMOMO}>
                      JIMOMO : Online Portal Site
                    </h3>
                  </div>
                  {/* End details */}

                  <div className="main_content">
                    <div className="descriptions">
                      <p className="bigger">
                        Despite partial crypto bans, the Chinese government has included blockchain technology in official state development policy.
                      </p>
                      <p>
                        On Dec 29, the state-owned China Academy for Information and Communications Technology,
                        or CAICT, published a document titled “2022 Blockchain Whitepaper.” According to the paper,
                        more than 1,400 blockchain firms are currently based in mainland China. Together with the U.S.,
                        the two countries represent a 52% market share in terms of global blockchain enterprises.
                      </p>
                      <p>
                        The CAICT also disclosed that around 48 post-secondary institutions across China have introduced
                        “blockchain engineering” related degrees and certifications. In the report, the institution detailed
                        four types of blockchain technologies with high application potential.
                      </p>
                      <p>
                        First, “settlement chains” would allow transparent publication of telecom fees for firms such as China
                        Mobile and China Unicom. Second, the Zhejiang Cold Chains would enable consumers to verify the source of
                        their food by scanning the productsclosing’ QR codes. Third, the Trusple cross-border payments platform
                        can help buyers and sellers obtain due diligence info on their counterparties.
                      </p>
                      <p>
                        Finally, blockchain monitoring platforms can help financial regulators spot order irregularities between
                        different exchanges. Major Chinese tech giants such as Tencent, Ant Financial, Huawei and Alibaba have
                        all created “blockchain alliances” in the past years for their respective operations.
                      </p>
                      <div className="quotebox">
                        <p>
                          China currently allows ownership of cryptocurrencies and nonfungible tokens, or NFTs, with their legality
                          protected in courts of law. However, the country has banned the issuance of initial coin offerings along
                          with digital exchanges and cryptocurrency mining.
                        </p>
                      </div>
                      <p>
                        Despite setbacks, the government of China has included blockchain developments on its official national agenda.
                        In October, the State Council of the People's Republic of China stated that it would prioritize “cloud computing,
                        blockchain, and AI” as means of improving data management and government services. On Dec. 28, Chinese officials
                        announced that a national exchange for the trading of NFTs and digital asset copyrights would launch on Jan. 1.
                      </p>
                      <p>
                        Source : <a href="https://cointelegraph.com/news/over-1-400-chinese-firms-operating-in-blockchain-industry-national-whitepaper-shows" target="_blank">https://cointelegraph.com/news/over-1-400-chinese-firms-operating-in-blockchain-industry-national-whitepaper-shows</a>
                      </p>
                    </div>
                    {/* End description */}
                    <div className="news_share ">
                      <span>Share:</span>
                      <Social />
                    </div>
                    {/* End news share */}
                  </div>
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>

          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div
              className="list_inner"
              onClick={toggleModalJIMOMO}>
              <a
                className="title"
              >
                <h3>Jimomo</h3>
                <span>E-Commerce Portal Site</span>
              </a>

              <img src="img/portfolio/porto3.jpg" alt="Dribbble Shoot" />
            </div>
          </li>
          {/* End JIMOMO */}

          {/* Start CRAFTING */}
          <Modal
            isOpen={isOpenCRAFTING}
            onRequestClose={toggleModalCRAFTING}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="beny_tm_modalbox_news">
              <button className="close-modal" onClick={toggleModalCRAFTING}>
                <img src="/img/svg/cancel.svg" alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="image">
                    <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                    <div
                      className="main"
                      style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL + "img/news/1.jpg"
                          })`,
                      }}
                    ></div>
                  </div>
                  {/* End image */}

                  <div className="details">
                    <span>
                      December 29, 2022 <a href="#">Blockchain Technology</a>
                    </span>
                    <h3 className="title" onClick={toggleModalCRAFTING}>
                      CRAFTING : Handicraft Online Site
                    </h3>
                  </div>
                  {/* End details */}

                  <div className="main_content">
                    <div className="descriptions">
                      <p className="bigger">
                        Despite partial crypto bans, the Chinese government has included blockchain technology in official state development policy.
                      </p>
                      <p>
                        On Dec 29, the state-owned China Academy for Information and Communications Technology,
                        or CAICT, published a document titled “2022 Blockchain Whitepaper.” According to the paper,
                        more than 1,400 blockchain firms are currently based in mainland China. Together with the U.S.,
                        the two countries represent a 52% market share in terms of global blockchain enterprises.
                      </p>
                      <p>
                        The CAICT also disclosed that around 48 post-secondary institutions across China have introduced
                        “blockchain engineering” related degrees and certifications. In the report, the institution detailed
                        four types of blockchain technologies with high application potential.
                      </p>
                      <p>
                        First, “settlement chains” would allow transparent publication of telecom fees for firms such as China
                        Mobile and China Unicom. Second, the Zhejiang Cold Chains would enable consumers to verify the source of
                        their food by scanning the productsclosing’ QR codes. Third, the Trusple cross-border payments platform
                        can help buyers and sellers obtain due diligence info on their counterparties.
                      </p>
                      <p>
                        Finally, blockchain monitoring platforms can help financial regulators spot order irregularities between
                        different exchanges. Major Chinese tech giants such as Tencent, Ant Financial, Huawei and Alibaba have
                        all created “blockchain alliances” in the past years for their respective operations.
                      </p>
                      <div className="quotebox">
                        <p>
                          China currently allows ownership of cryptocurrencies and nonfungible tokens, or NFTs, with their legality
                          protected in courts of law. However, the country has banned the issuance of initial coin offerings along
                          with digital exchanges and cryptocurrency mining.
                        </p>
                      </div>
                      <p>
                        Despite setbacks, the government of China has included blockchain developments on its official national agenda.
                        In October, the State Council of the People's Republic of China stated that it would prioritize “cloud computing,
                        blockchain, and AI” as means of improving data management and government services. On Dec. 28, Chinese officials
                        announced that a national exchange for the trading of NFTs and digital asset copyrights would launch on Jan. 1.
                      </p>
                      <p>
                        Source : <a href="https://cointelegraph.com/news/over-1-400-chinese-firms-operating-in-blockchain-industry-national-whitepaper-shows" target="_blank">https://cointelegraph.com/news/over-1-400-chinese-firms-operating-in-blockchain-industry-national-whitepaper-shows</a>
                      </p>
                    </div>
                    {/* End description */}
                    <div className="news_share ">
                      <span>Share:</span>
                      <Social />
                    </div>
                    {/* End news share */}
                  </div>
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>

          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <div
              className="list_inner"
              onClick={toggleModalCRAFTING}>
              <a
                className="title"
              >
                <h3>Crafting</h3>
                <span>Japan Craft Online Course</span>
              </a>

              <img src="img/portfolio/porto4.jpg" alt="Dribbble Shoot" />
            </div>
          </li>
          {/* End CRAFTING */}

          {/* Start VOGUE */}
          <Modal
            isOpen={isOpenVOGUE}
            onRequestClose={toggleModalVOGUE}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="beny_tm_modalbox_news">
              <button className="close-modal" onClick={toggleModalVOGUE}>
                <img src="/img/svg/cancel.svg" alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="image">
                    <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                    <div
                      className="main"
                      style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL + "img/news/1.jpg"
                          })`,
                      }}
                    ></div>
                  </div>
                  {/* End image */}

                  <div className="details">
                    <span>
                      December 29, 2022 <a href="#">Blockchain Technology</a>
                    </span>
                    <h3 className="title" onClick={toggleModalVOGUE}>
                      VOGUE : Handicraft Company Site
                    </h3>
                  </div>
                  {/* End details */}

                  <div className="main_content">
                    <div className="descriptions">
                      <p className="bigger">
                        Despite partial crypto bans, the Chinese government has included blockchain technology in official state development policy.
                      </p>
                      <p>
                        On Dec 29, the state-owned China Academy for Information and Communications Technology,
                        or CAICT, published a document titled “2022 Blockchain Whitepaper.” According to the paper,
                        more than 1,400 blockchain firms are currently based in mainland China. Together with the U.S.,
                        the two countries represent a 52% market share in terms of global blockchain enterprises.
                      </p>
                      <p>
                        The CAICT also disclosed that around 48 post-secondary institutions across China have introduced
                        “blockchain engineering” related degrees and certifications. In the report, the institution detailed
                        four types of blockchain technologies with high application potential.
                      </p>
                      <p>
                        First, “settlement chains” would allow transparent publication of telecom fees for firms such as China
                        Mobile and China Unicom. Second, the Zhejiang Cold Chains would enable consumers to verify the source of
                        their food by scanning the productsclosing’ QR codes. Third, the Trusple cross-border payments platform
                        can help buyers and sellers obtain due diligence info on their counterparties.
                      </p>
                      <p>
                        Finally, blockchain monitoring platforms can help financial regulators spot order irregularities between
                        different exchanges. Major Chinese tech giants such as Tencent, Ant Financial, Huawei and Alibaba have
                        all created “blockchain alliances” in the past years for their respective operations.
                      </p>
                      <div className="quotebox">
                        <p>
                          China currently allows ownership of cryptocurrencies and nonfungible tokens, or NFTs, with their legality
                          protected in courts of law. However, the country has banned the issuance of initial coin offerings along
                          with digital exchanges and cryptocurrency mining.
                        </p>
                      </div>
                      <p>
                        Despite setbacks, the government of China has included blockchain developments on its official national agenda.
                        In October, the State Council of the People's Republic of China stated that it would prioritize “cloud computing,
                        blockchain, and AI” as means of improving data management and government services. On Dec. 28, Chinese officials
                        announced that a national exchange for the trading of NFTs and digital asset copyrights would launch on Jan. 1.
                      </p>
                      <p>
                        Source : <a href="https://cointelegraph.com/news/over-1-400-chinese-firms-operating-in-blockchain-industry-national-whitepaper-shows" target="_blank">https://cointelegraph.com/news/over-1-400-chinese-firms-operating-in-blockchain-industry-national-whitepaper-shows</a>
                      </p>
                    </div>
                    {/* End description */}
                    <div className="news_share ">
                      <span>Share:</span>
                      <Social />
                    </div>
                    {/* End news share */}
                  </div>
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>

          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <div
              className="list_inner"
              onClick={toggleModalVOGUE}>
              <a
                className="title"
              >
                <h3>Nihonvogue</h3>
                <span>Japan Craft Holdings Company Site</span>
              </a>

              <img src="img/portfolio/porto5.jpg" alt="Dribbble Shoot" />
            </div>
          </li>
          {/* End VOGUE */}

          {/* Start ENSEMBLE */}
          <Modal
            isOpen={isOpenENSEMBLE}
            onRequestClose={toggleModalENSEMBLE}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="beny_tm_modalbox_news">
              <button className="close-modal" onClick={toggleModalENSEMBLE}>
                <img src="/img/svg/cancel.svg" alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="image">
                    <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                    <div
                      className="main"
                      style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL + "img/news/1.jpg"
                          })`,
                      }}
                    ></div>
                  </div>
                  {/* End image */}

                  <div className="details">
                    <span>
                      December 29, 2022 <a href="#">Blockchain Technology</a>
                    </span>
                    <h3 className="title" onClick={toggleModalENSEMBLE}>
                      ENSEMBLE : French Online Course
                    </h3>
                  </div>
                  {/* End details */}

                  <div className="main_content">
                    <div className="descriptions">
                      <p className="bigger">
                        Despite partial crypto bans, the Chinese government has included blockchain technology in official state development policy.
                      </p>
                      <p>
                        On Dec 29, the state-owned China Academy for Information and Communications Technology,
                        or CAICT, published a document titled “2022 Blockchain Whitepaper.” According to the paper,
                        more than 1,400 blockchain firms are currently based in mainland China. Together with the U.S.,
                        the two countries represent a 52% market share in terms of global blockchain enterprises.
                      </p>
                      <p>
                        The CAICT also disclosed that around 48 post-secondary institutions across China have introduced
                        “blockchain engineering” related degrees and certifications. In the report, the institution detailed
                        four types of blockchain technologies with high application potential.
                      </p>
                      <p>
                        First, “settlement chains” would allow transparent publication of telecom fees for firms such as China
                        Mobile and China Unicom. Second, the Zhejiang Cold Chains would enable consumers to verify the source of
                        their food by scanning the productsclosing’ QR codes. Third, the Trusple cross-border payments platform
                        can help buyers and sellers obtain due diligence info on their counterparties.
                      </p>
                      <p>
                        Finally, blockchain monitoring platforms can help financial regulators spot order irregularities between
                        different exchanges. Major Chinese tech giants such as Tencent, Ant Financial, Huawei and Alibaba have
                        all created “blockchain alliances” in the past years for their respective operations.
                      </p>
                      <div className="quotebox">
                        <p>
                          China currently allows ownership of cryptocurrencies and nonfungible tokens, or NFTs, with their legality
                          protected in courts of law. However, the country has banned the issuance of initial coin offerings along
                          with digital exchanges and cryptocurrency mining.
                        </p>
                      </div>
                      <p>
                        Despite setbacks, the government of China has included blockchain developments on its official national agenda.
                        In October, the State Council of the People's Republic of China stated that it would prioritize “cloud computing,
                        blockchain, and AI” as means of improving data management and government services. On Dec. 28, Chinese officials
                        announced that a national exchange for the trading of NFTs and digital asset copyrights would launch on Jan. 1.
                      </p>
                      <p>
                        Source : <a href="https://cointelegraph.com/news/over-1-400-chinese-firms-operating-in-blockchain-industry-national-whitepaper-shows" target="_blank">https://cointelegraph.com/news/over-1-400-chinese-firms-operating-in-blockchain-industry-national-whitepaper-shows</a>
                      </p>
                    </div>
                    {/* End description */}
                    <div className="news_share ">
                      <span>Share:</span>
                      <Social />
                    </div>
                    {/* End news share */}
                  </div>
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>

          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="500"
          >
            <div
              className="list_inner"
              onClick={toggleModalENSEMBLE}>
              <a
                className="title"
              >
                <h3>Ensemble en Français</h3>
                <span>French Online Course Site</span>
              </a>

              <img src="img/portfolio/porto6.jpg" alt="Facebook Shoot" />
            </div>
          </li>
          {/* End ENSEMBLE */}

          <SRLWrapper>
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="list_inner">
                <a
                  className="title"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://dribbble.com/shots/16530034-Tokyo-Personal-Portfolio-React-Template-RTL"
                >
                  <h3>Machine Learning & Deep Learning</h3>
                  <span>Indonesian Theory Book</span>
                </a>

                <a href="img/portfolio/porto7.jpg">
                  <img src="img/portfolio/porto7.jpg" alt="Dribbble Shoot" />
                </a>
              </div>
            </li>

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="list_inner">
                <a
                  className="title"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://dribbble.com/shots/16530034-Tokyo-Personal-Portfolio-React-Template-RTL"
                >
                  <h3>Inose C-19</h3>
                  <span>COVID-19 Skrinning Tools</span>
                </a>

                <a href="img/portfolio/porto8.jpg">
                  <img src="img/portfolio/porto8.jpg" alt="Dribbble Shoot" />
                </a>
              </div>
            </li>
            {/* End image popup */}
          </SRLWrapper>
        </ul>
      </div>
    </SimpleReactLightbox>
  );
};

export default Portfolio;
