import { useRef } from 'react';
import styles from './App.module.scss';
import floor1 from './assets/1floor.png';
import floor2 from './assets/2floor.png';
import floor3 from './assets/3floor.png';
import floor4 from './assets/4floor.png';
import fullImg from './assets/full.png';
import pattern from './assets/pattern.png';
import { useImagesAnimation } from './useImagesAnimation';
import linkedin from './assets/linkedin.svg';
import x from './assets/x.svg';
import facebook from './assets/facebook.svg';
import link from './assets/link.svg';

function App() {
  const floorImg1Ref = useRef<HTMLImageElement>(null);
  const floorImg2Ref = useRef<HTMLImageElement>(null);
  const floorImg3Ref = useRef<HTMLImageElement>(null);
  const floorImg4Ref = useRef<HTMLImageElement>(null);

  const floorInfo1Ref = useRef<HTMLDivElement>(null);
  const floorInfo2Ref = useRef<HTMLDivElement>(null);
  const floorInfo3Ref = useRef<HTMLDivElement>(null);
  const floorInfo4Ref = useRef<HTMLDivElement>(null);

  const fullImgRef = useRef<HTMLImageElement>(null);
  const floorsSectionRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useImagesAnimation(floorsSectionRef, overlayRef, fullImgRef, [
    {
      imageRef: floorImg1Ref,
      infoRef: floorInfo1Ref,
    },
    {
      imageRef: floorImg2Ref,
      infoRef: floorInfo2Ref,
    },
    {
      imageRef: floorImg3Ref,
      infoRef: floorInfo3Ref,
    },
    {
      imageRef: floorImg4Ref,
      infoRef: floorInfo4Ref,
    },
  ]);

  return (
    <div
      className={styles.app}
      style={{
        backgroundImage: `url(${pattern})`,
      }}
    >
      <section className={styles.hero}>
        <div className={styles.note}>
          2025 Work Trend Index Report
        </div>
        <h2 className={styles.title}>
          <span className={styles.titleHighlight}>2025:</span><br />
          The <span className={styles.kerningY}>Y</span>ear the Frontier Firm is Born
        </h2>
        <a href="/" className={styles.buttonLink}>
          Download Report
          <span className={styles.buttonIcon}>↓</span>
        </a>
        <div className={styles.shareWrapper}>
          <div className={styles.shareLabel}>Share</div>
          <img src={linkedin} />
          <img src={x} />
          <img src={facebook} />
          <img src={link} />
        </div>
      </section>
      <section className={styles.sceneSection}>
        <div className={styles.sceneTrack}>
          <div className={styles.scene}>
            <div className={styles.fullImgWrapper} ref={fullImgRef}>
              <img src={fullImg} className={styles.fullImg} />
            </div>
            <div className={styles.floor1} ref={floorImg4Ref}>
              <img className={styles.floorImg} src={floor1} />
            </div>
            <div className={styles.floor2} ref={floorImg3Ref}>
              <img className={styles.floorImg} src={floor2} />
            </div>
            <div className={styles.floor3} ref={floorImg2Ref}>
              <img className={styles.floorImg} src={floor3} />
            </div>
            <div className={styles.floor4} ref={floorImg1Ref}>
              <img className={styles.floorImg} src={floor4} />
            </div>
          </div>
        </div>
        <div className={styles.overlayContentWrapper} ref={overlayRef}>
          <h3 className={styles.overlayTitle}>
            “AI-powered companies are gaining an edge—and redefining the rules of business.”
          </h3>
          <div className={styles.overlayText}>
            <p className={styles.overlayTextItem}>Organizations of every size and across industries are using Copilot and agents to make big gains from their AI investments, bending the curve on innovation, reshaping business process, reinventing customer engagement, and enhancing employee productivity. Their stories offer a blueprint for every leader and organization looking to apply the transformative capabilities of AI.</p>
            <p className={styles.overlayTextItem}>That’s why Amgen, one of the world’s leading biotechnology companies, created Catalyst Copilot, an agent that gives research and development staff instant access to a trove of insights—from curated knowledge and training videos to product databases, all organized by therapeutic area. “We’re creating an ecosystem where we’re learning together in real time,” says Bryan Yee, Executive Director of R&D Knowledge and Learning.</p>
            <p className={styles.overlayTextItem}>Through natural-language conversations with Catalyst Copilot, staff across R&D can surface relevant knowledge and identify the right colleague for potential collaboration. No more digging through disparate data sources or wondering if a crucial piece of information is beyond reach.</p>
            <p className={styles.overlayTextItem}>What are some of the potential regulatory pathways that could be considered for a new medicine? Catalyst Copilot knows. Catalyst Copilot is just one piece of Amgen’s overall strategy with Copilot and agents. It has rolled out more than 20,000 licenses across the company, with a focus on agents that help provide instant answers and support processes across the company. Even in the age of AI, the key to breakthrough science remains remarkably human: asking the right questions and pushing the boundaries of what’s possible.</p>
          </div>
        </div>
      </section>
      <section className={styles.floorsSection} ref={floorsSectionRef}>
        <div className={styles.floorInfoItem} ref={floorInfo1Ref}>
          <div className={styles.floorInfoContent}>
            <div className={styles.floorTitle}>
              You can buy intelligence on tap
            </div>
            <div className={styles.floorDescription}>
              Our research predicts that within the next 2-3 years, AI will break this paradigm and give way to 24/7 agentic workflows.
            </div>
            <a
              href="/"
              className={styles.floorCTA}
            >
              Jump to section
            </a>
          </div>
          <div className={styles.floorNumber}>01</div>
        </div>
        <div className={styles.floorInfoItem} ref={floorInfo2Ref}>
          <div className={styles.floorInfoContent}>
            <h4 className={styles.floorTitle}>
              Agents join the workforce
            </h4>
            <div className={styles.floorDescription}>
              The human-agent ratio will become a key business indicator, varying by industry, role, and task.
            </div>
            <a
              href="/"
              className={styles.floorCTA}
            >
              Jump to section
            </a>
          </div>
          <div className={styles.floorNumber}>02</div>
        </div>
        <div className={styles.floorInfoItem} ref={floorInfo3Ref}>
          <div className={styles.floorInfoContent}>
            <h4 className={styles.floorTitle}>
              The org chart goes obsolete
            </h4>
            <div className={styles.floorDescription}>
              AI and autonomous agents will require management just like human employees, driving the need for new roles and oversight systems.
            </div>
            <a
              href="/"
              className={styles.floorCTA}
            >
              Jump to section
            </a>
          </div>
          <div className={styles.floorNumber}>03</div>
        </div>
        <div className={styles.floorInfoItem} ref={floorInfo4Ref}>
          <div className={styles.floorInfoContent}>
            <h4 className={styles.floorTitle}>
              The Path Forward
            </h4>
            <div className={styles.floorDescription}>
              The pain in reinvention lies in the challenge of imagining the unimaginable.
            </div>
            <a
              href="/"
              className={styles.floorCTA}
            >
              Jump to section
            </a>
          </div>
          <div className={styles.floorNumber}>04</div>
        </div>
      </section>
    </div>
  );
}

export default App;
