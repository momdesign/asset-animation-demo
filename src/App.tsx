import styles from './App.module.scss';
import overlay1 from './assets/overlay-1.jpg';
import floor1 from './assets/1floor.png';
import floor2 from './assets/2floor.png';
import floor3 from './assets/3floor.png';
import floor4 from './assets/4floor.png';

function App() {
  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.note}>2025 Work Trend Index Report</div>
        <h2 className={styles.title}>
          <span className={styles.bold}>2025:</span><br />
          The Year the Frontier Firm is Born
        </h2>
        <button type="button" className={styles.button}>
          Download the report
        </button>
      </section>
      <section>
        <div className={styles.sceneWrapper}>
          <div className={styles.scene}>
            <img src={floor1} className={styles.floor} />
            <img src={floor2} className={styles.floor} />
            <img src={floor3} className={styles.floor} />
            <img src={floor4} className={styles.floor} />
          </div>
        </div>
        <div>
          <img src={overlay1} className={styles.contentMock} />
        </div>
      </section>
    </div>
  );
}

export default App;
