import toolkitImage from "../../assets/images/toolkit.png";
import policyImage from "../../assets/images/policy.png";
import podiumImage from "../../assets/images/podium.jpeg";

export default function ResearchExperienceProject() {
  return (
    <section className="section project-detail case-study-page" id="project-research-experience">
      <div className="case-study-container">
        <div className="project-detail__heading reveal-on-scroll">
          <span className="project-detail__eyebrow">2022–2024</span>
          <h2>Researching Asian American girls and gender expansive youth in leadership</h2>
          <p>
            As part of the AANHPI Youth Research Council, I co-led the first national study examining how culture
            and identity shape the leadership journeys of Asian American, Native Hawaiian, and Pacific Islander
            girls and gender-expansive youth. In collaboration with Girls Leadership and Evaluation Studio, we
            gathered and analyzed data from 2022 to 2024 to highlight the diverse definitions of leadership across
            AANHPI communities, as well as the unique supports and barriers youth face. The project aimed to equip
            educators, schools, and community organizations with insights to build more inclusive leadership
            pathways and amplify voices that have long been overlooked.
          </p>
        </div>

        <div className="project-detail__highlights">
          <article className="project-detail__highlight reveal-on-scroll">
            <div className="project-detail__media">
              <img
                src={toolkitImage}
                alt="Social media toolkit supporting qualitative research recruitment"
              />
            </div>
            <div className="project-detail__body">
              <h3>Qualitative Research & Recruitment Toolkit</h3>
              <p>
                During interviews with participants recruited through a digital outreach campaign, I identified key
                words and recurring themes that revealed why AANHPI girls and other underrepresented groups face
                barriers in leadership spaces. I synthesized these insights into actionable findings incorporated
                into a published research report and policy brief presented at our launch.
              </p>
              <p>
                To support recruitment, I created a social media toolkit for Facebook, Instagram, and Twitter to
                help partners and institutions share our interview and photovoice opportunity. Here is a social
                media toolkit I made for our partners and other institutions to help send out our interview and
                photovoice opportunity.
              </p>
            </div>
          </article>

          <article className="project-detail__highlight reveal-on-scroll">
            <div className="project-detail__media">
              <img src={policyImage} alt="Policy brief featuring recommendations for AANHPI youth" />
            </div>
            <div className="project-detail__body">
              <h3>Policy Brief Development</h3>
              <p>
                I spearheaded the development of our final policy brief, launched in May 2024, which distilled the
                research findings into actionable recommendations for educators and policymakers. The brief outlines
                steps to ensure AANHPI girls and gender-expansive youth feel represented and supported in their
                leadership journeys, ranging from disaggregating AANHPI data to expanding ethnic studies curricula
                and increasing AANHPI-centered spaces.
              </p>
            </div>
          </article>

          <article className="project-detail__highlight reveal-on-scroll">
            <div className="project-detail__media">
              <img src={podiumImage} alt="Speaking at the Power of Voice Benefit" />
            </div>
            <div className="project-detail__body">
              <h3>Community Engagement & Launch</h3>
              <p>
                Throughout the project, I led frequent community engagement and partner meetings to keep
                stakeholders updated on our research progress, gather feedback, and encourage greater
                participation. By synthesizing insights from participant interviews, I identified recurring themes
                about why AANHPI girls and other underrepresented groups face barriers in leadership spaces.
              </p>
              <p>
                This sustained collaboration and dialogue culminated in the research launch, where I had the
                opportunity to speak briefly at the Power of Voice Benefit, sharing our findings with stakeholders,
                community members, and partners.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

