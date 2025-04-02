import { useRef } from 'react';
import cn from 'classnames';
import styles from './App.module.scss';
import overlay1 from './assets/overlay-1.jpg';
import floor1 from './assets/1floor.png';
import floor2 from './assets/2floor.png';
import floor3 from './assets/3floor.png';
import floor4 from './assets/4floor.png';
import { useImagesAnimation } from './useImagesAnimation';

function App() {
  const floorImg1Ref = useRef<HTMLImageElement>(null);
  const floorImg2Ref = useRef<HTMLImageElement>(null);
  const floorImg3Ref = useRef<HTMLImageElement>(null);
  const floorImg4Ref = useRef<HTMLImageElement>(null);

  const floorInfo1Ref = useRef<HTMLDivElement>(null);
  const floorInfo2Ref = useRef<HTMLDivElement>(null);
  const floorInfo3Ref = useRef<HTMLDivElement>(null);
  const floorInfo4Ref = useRef<HTMLDivElement>(null);

  const floorsSectionRef = useRef<HTMLDivElement>(null);

  useImagesAnimation(floorsSectionRef, [
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
    <div>
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
      </section>
      <section className={styles.sceneSection}>
        <div className={styles.sceneTrack}>
          <div className={styles.scene}>
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
        <div>
          <img src={overlay1} className={styles.contentMock} />
        </div>
      </section>
      <section className={styles.floorsSection} ref={floorsSectionRef}>
        <div className={styles.floorInfoItem} ref={floorInfo1Ref}>
          <div className={styles.floorTitle}>
            You can buy intelligence on tap
          </div>
          <div className={styles.floorDescription}>
            Our research predicts that within the next 2-3 years, AI will break this paradigm and give way to 24/7 agentic workflows.
          </div>
          <button
            type="button"
            className={cn(styles.button, styles.floorCTA)}
          >
            Jump to section
          </button>
          <div className={styles.floorNumber}>01</div>
        </div>
        <div className={styles.floorInfoItem} ref={floorInfo2Ref}>
          <div className={styles.floorTitle}>
            Agents join the workforce
          </div>
          <div className={styles.floorDescription}>
            The human-agent ratio will become a key business indicator, varying by industry, role, and task.
          </div>
          <button
            type="button"
            className={cn(styles.button, styles.floorCTA)}
          >
            Jump to section
          </button>
          <div className={styles.floorNumber}>02</div>
        </div>
        <div className={styles.floorInfoItem} ref={floorInfo3Ref}>
          <div className={styles.floorTitle}>
            The org chart goes obsolete
          </div>
          <div className={styles.floorDescription}>
            AI and autonomous agents will require management just like human employees, driving the need for new roles and oversight systems.
          </div>
          <button
            type="button"
            className={cn(styles.button, styles.floorCTA)}
          >
            Jump to section
          </button>
          <div className={styles.floorNumber}>02</div>
        </div>
        <div className={styles.floorInfoItem} ref={floorInfo4Ref}>
          <div className={styles.floorTitle}>
            The Path Forward
          </div>
          <div className={styles.floorDescription}>
            The pain in reinvention lies in the challenge of imagining the unimaginable.
          </div>
          <button
            type="button"
            className={cn(styles.button, styles.floorCTA)}
          >
            Jump to section
          </button>
          <div className={styles.floorNumber}>02</div>
        </div>
      </section>
    </div>
  );
}

export default App;
