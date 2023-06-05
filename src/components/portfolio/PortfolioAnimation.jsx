import React, { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import Modal from "react-modal";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import Social from "../Social";
import draftToHtml from "draftjs-to-html";
import axios from "axios";
import { format } from 'date-fns';

const Portfolio = () => {
  const [isOpen, setOpen] = useState(false);
  const [modalData, setModalData] = useState(false);
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(process.env.REACT_APP_BASE_URL_API + "v1/public/portfolios?sort_by=created_at.desc");
    setPortfolios(res.data.data);
  };

  function convertJSONToHtml(json) {
    return draftToHtml(JSON.parse(json));
  }

  function toggleModal(portfolio) {
    if (!isOpen) {
      console.log(portfolio);
      setModalData(portfolio);
    }
    setOpen(!isOpen);
  }

  function getResources(filename) {
    return process.env.REACT_APP_BASE_URL_API + "v1/public/resources/images/" + filename;
  }

  return (
    <SimpleReactLightbox>
      <div className="portfolio_list">
        <ul className="gallery_zoom">
          <Modal
            isOpen={isOpen}
            onRequestClose={() => { toggleModal(""); }}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="beny_tm_modalbox_news">
              <button className="close-modal" onClick={() => { toggleModal(""); }}>
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
                    {(() => {
                      if (modalData.created_at != null) {
                        return (
                          <span>
                            {format(new Date(modalData.created_at.replace(/-/g, "/")), 'MMM dd, yyyy')} <a href="#">{modalData.category}</a>
                          </span>
                        )
                      }
                      return null;
                    })()}

                    <h3 className="title">
                      {modalData.title}
                    </h3>
                  </div>
                  {/* End details */}

                  <div className="main_content">
                    {(() => {
                      if (modalData.content != null) {
                        return (
                          <div className="descriptions">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: convertJSONToHtml(modalData.content)
                              }}
                            />
                            {/* <p>
                              Source : <a href={modalData.source} target="_blank">{modalData.source}</a>
                            </p> */}
                          </div>
                        )
                      }

                      return null;
                    })()}
                    {/* End description */}
                    {/* <div className="news_share ">
                      <span>Share:</span>
                      <Social />
                    </div> */}
                    {/* End news share */}
                  </div>
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>

          {portfolios.map(portfolio => {
            return (
              <div key={portfolio.id}>
                <li
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <div
                    className="list_inner video"
                    onClick={() => { toggleModal(portfolio); }}
                  >
                    <a className="title">
                      <h3>{portfolio.title}</h3>
                      <span>{portfolio.subtitle}</span>
                    </a>
                    <img crossOrigin="anonymous"
                      src={getResources(portfolio.image_thumbnail)}
                      alt="Portfolio Doni Putra"
                    />
                  </div>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </SimpleReactLightbox>
  );
};

export default Portfolio;