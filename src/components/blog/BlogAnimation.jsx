import React, { useState } from "react";
import Modal from "react-modal";
import Social from "../Social";

Modal.setAppElement("#root");

const BlogAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }

  return (
    <>
      <div className="news_list">
        <ul>
          <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner">
              <div className="image" onClick={toggleModalOne}>
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
                <h3 className="title" onClick={toggleModalOne}>
                  National Whitepaper Shows
                </h3>
              </div>
              {/* End details */}

              {/* Start Modal */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="custom-modal"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div className="beny_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalOne}>
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
                        <h3 className="title" onClick={toggleModalOne}>
                          National Whitepaper Shows
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
              {/* End modal */}
            </div>
          </li>
          {/* End single blog */}

          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="150"
          >
            <div className="list_inner">
              <div className="image" onClick={toggleModalTwo}>
                <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + "img/news/2.jpg"
                      })`,
                  }}
                ></div>
              </div>
              {/* End image */}

              <div className="details">
                <span>
                  December 22, 2022 <a href="#">Medical Tech</a>
                </span>
                <h3 className="title" onClick={toggleModalTwo}>
                  AI for Alzheimer's disease
                </h3>
              </div>
              {/* End details */}

              <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel="My dialog"
                className="custom-modal"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div className="beny_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalTwo}>
                    <img src="/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close modal */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL + "img/news/2.jpg"
                              })`,
                          }}
                        ></div>
                      </div>
                      {/* End image */}

                      <div className="details">
                        <span>
                          December 22, 2022 <a href="#">Medical Tech</a>
                        </span>
                        <h3 className="title">Can the AI driving ChatGPT help to detect early signs of Alzheimer's disease?</h3>
                      </div>
                      {/* End details */}
                      <div className="main_content">
                        <div className="descriptions">
                          <p className="bigger">
                            The artificial intelligence algorithms behind the chatbot program ChatGPT -- which has drawn attention
                            for its ability to generate humanlike written responses to some of the most creative queries -- might
                            one day be able to help doctors detect Alzheimer's Disease in its early stages. Research from Drexel
                            University's School of Biomedical Engineering, Science and Health Systems recently demonstrated that
                            OpenAI's GPT-3 program can identify clues from spontaneous speech that are 80% accurate in predicting
                            the early stages of dementia.
                          </p>
                          <p>
                            Reported in the journal PLOS Digital Health, the Drexel study is the latest in a series of efforts to
                            show the effectiveness of natural language processing programs for early prediction of Alzheimer's --
                            leveraging current research suggesting that language impairment can be an early indicator of neurodegenerative disorders.
                          </p>
                          <b>Finding an Early Sign</b>
                          <p>
                            The current practice for diagnosing Alzheimer's Disease typically involves a medical history review and lengthy set of
                            physical and neurological evaluations and tests. While there is still no cure for the disease, spotting it early can give
                            patients more options for therapeutics and support. Because language impairment is a symptom in 60-80% of dementia patients,
                            researchers have been focusing on programs that can pick up on subtle clues -- such as hesitation, making grammar and pronunciation
                            mistakes and forgetting the meaning of words -- as a quick test that could indicate whether or not a patient should undergo a full examination.
                          </p>
                          <p>
                            "We know from ongoing research that the cognitive effects of Alzheimer's Disease can manifest themselves in language production," said Hualou Liang,
                            PhD, a professor in Drexel's School of Biomedical Engineering, Science and Health Systems and a coauthor of the research. "The most commonly used
                            tests for early detection of Alzheimer's look at acoustic features, such as pausing, articulation and vocal quality, in addition to tests of cognition.
                            But we believe the improvement of natural language processing programs provide another path to support early identification of Alzheimer's."
                          </p>
                          <b>A Program that Listens and Learns</b>
                          <p>
                            GPT-3, officially the third generation of OpenAI's General Pretrained Transformer (GPT), uses a deep learning algorithm -- trained by processing vast
                            swaths of information from the internet, with a particular focus on how words are used, and how language is constructed. This training allows it to produce
                            a human-like response to any task that involves language, from responses to simple questions, to writing poems or essays. <br />
                            GPT-3 is particularly good at "zero-data learning" -- meaning it can respond to questions that would normally require external
                            knowledge that has not been provided. For example, asking the program to write "Cliff's Notes" of a text, would normally require an
                            explanation that this means a summary. But GPT-3 has gone through enough training to understand the reference and adapt itself to
                            produce the expected response.<br />
                            "GPT3's systemic approach to language analysis and production makes it a promising candidate for identifying the subtle speech characteristics that may predict
                            the onset of dementia," said Felix Agbavor, a doctoral researcher in the School and the lead author of the paper. "Training GPT-3 with a massive dataset of
                            interviews -- some of which are with Alzheimer's patients -- would provide it with the information it needs to extract speech patterns that could then be
                            applied to identify markers in future patients."
                          </p>
                          <b>Seeking Speech Signals</b>
                          <p>
                            The researchers tested their theory by training the program with a set of transcripts from a portion of a dataset of speech recordings compiled with the support of the National Institutes of Health specifically for the purpose of testing natural language processing programs' ability to predict dementia. The program captured meaningful characteristics of the word-use, sentence structure and meaning from the text to produce what researchers call an "embedding" -- a characteristic profile of Alzheimer's speech.<br />
                            They then used the embedding to re-train the program -- turning it into an Alzheimer's screening machine. To test it they asked the program to review dozens of transcripts from the dataset and decide whether or not each one was produced by someone who was developing Alzheimer's.<br />
                            Running two of the top natural language processing programs through the same paces, the group found that GPT-3 performed better than both, in terms of accurately identifying Alzheimer's examples, identifying non-Alzheimer's examples and with fewer missed cases than both programs.<br />
                            A second test used GPT-3's textual analysis to predict the score of various patients from the dataset on a common test for predicting the severity of dementia, called the Mini-Mental State Exam (MMSE).<br />
                            The team then compared GPT-3's prediction accuracy to that of an analysis using only the acoustic features of the recordings, such as pauses, voice strength and slurring, to predict the MMSE score. GPT-3 proved to be almost 20% more accurate in predicting patients' MMSE scores.<br />
                            "Our results demonstrate that the text embedding, generated by GPT-3, can be reliably used to not only detect individuals with Alzheimer's Disease from healthy controls, but also infer the subject's cognitive testing score, both solely based on speech data," they wrote. "We further show that text embedding outperforms the conventional acoustic feature-based approach and even performs competitively with fine-tuned models. These results, all together, suggest that GPT-3 based text embedding is a promising approach for AD assessment and has the potential to improve early diagnosis of dementia."<br />
                          </p>
                          <b>Continuing the Search</b>
                          <p>
                            To build on these promising results, the researchers are planning to develop a web application that could be used at home or in a doctor's office as a pre-screening tool. <br />
                            "Our proof-of-concept shows that this could be a simple, accessible and adequately sensitive tool for community-based testing," Liang said. "This could be very useful for early screening and risk assessment before a clinical diagnosis."
                          </p>
                          <p>
                            Source : <a href="https://www.sciencedaily.com/releases/2022/12/221222162415.htm" target="_blank">https://www.sciencedaily.com/releases/2022/12/221222162415.htm</a>
                          </p>
                        </div>
                        {/* End description */}
                        <div className="news_share">
                          <span>Share:</span>
                          <Social />
                        </div>
                        {/* End news share */}
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
              {/* End modal */}
            </div>
            {/* End list inner */}
          </li>
          {/* End single blog */}

          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <div className="list_inner">
              <div className="image" onClick={toggleModalThree}>
                <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + "img/news/3.jpg"
                      })`,
                  }}
                ></div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <span>
                  June 23, 2021 <a href="#">Business</a>
                </span>
                <h3 className="title" onClick={toggleModalThree}>
                  CEO Secrets: Hopin founder shares his business advice
                </h3>
              </div>
              {/* End details */}

              {/* Start Modal */}
              <Modal
                isOpen={isOpen3}
                onRequestClose={toggleModalThree}
                contentLabel="My dialog"
                className="custom-modal"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div className="beny_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalThree}>
                    <img src="/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE MODAL */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL + "img/news/3.jpg"
                              })`,
                          }}
                        ></div>
                      </div>
                      {/* END IMAGE */}
                      <div className="details">
                        <span>
                          June 23, 2021 <a href="#">Business</a>
                        </span>
                        <h3 className="title">CEO Secrets: Hopin founder shares his business advice</h3>
                      </div>
                      {/* End details */}
                      <div className="main_content">
                        <div className="descriptions">
                          <p className="bigger">
                            Johnny Boufarhat, founder and CEO of digital conferencing platform Hopin shares his business advice for the CEO Secrets series.
                          </p>
                          <iframe width="400" height="500" frameborder="0" src="https://www.bbc.com/news/av-embeds/57553552"></iframe>
                        </div>
                        {/* END DESCRIPTION */}
                        <div className="news_share">
                          <span>Share:</span>
                          <Social />
                          {/* END SOCIAL SHARE */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
            {/* END LIST INNER */}
          </li>
          {/* End single blog */}
        </ul>
      </div>
    </>
  );
};

export default BlogAnimation;
