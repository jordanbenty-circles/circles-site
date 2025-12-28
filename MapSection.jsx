import React from 'react';
import styles from './MapSection.module.css';

const MapSection = () => {
  return (
    <div className={styles.mapSection}>
      {/* Dark map background (LA area tiles) */}
      <div className={styles.mapBackground}></div>

      {/* Vignette overlay for polish */}
      <div className={styles.mapOverlay}></div>

      {/* Wispy street grid lines */}
      <div className={styles.streetGrid}></div>
      <div className={styles.streetDiagonal}></div>
      <div className={styles.streetHighway}></div>
      <div className={styles.streetHighway2}></div>

      {/* Subtle neighborhood labels */}
      <div className={styles.neighborhoodLabels}>
        <span className={`${styles.neighborhood} ${styles.silverLake}`}>Silver Lake</span>
        <span className={`${styles.neighborhood} ${styles.echoPark}`}>Echo Park</span>
        <span className={`${styles.neighborhood} ${styles.dtla}`}>DTLA</span>
        <span className={`${styles.neighborhood} ${styles.losFeliz}`}>Los Feliz</span>
        <span className={`${styles.neighborhood} ${styles.koreatown}`}>Koreatown</span>
        <span className={`${styles.neighborhood} ${styles.hollywood}`}>Hollywood</span>
        <span className={`${styles.neighborhood} ${styles.weho}`}>WeHo</span>
      </div>

      {/* Current location indicator */}
      <div className={styles.currentLocation}>
        <div className={styles.currentRing}></div>
        <div className={styles.currentDot}></div>
        <span className={styles.currentLabel}>You</span>
      </div>

      {/* Floating pins */}
      <div className={`${styles.mapPin} ${styles.pin1}`}>
        <div className={styles.pinBubble}>
          <div className={`${styles.pinEmoji} ${styles.coral}`}>☕</div>
          <div className={styles.pinInfo}>
            <div className={styles.pinTitle}>Coffee & Coworking</div>
            <div className={styles.pinMeta}>
              <span className={styles.pinLocation}>Silver Lake</span>
              <span className={styles.pinDistance}>1.2 mi</span>
            </div>
          </div>
          <div className={styles.pinAvatars}>
            <div className={`${styles.miniAvatar} ${styles.coral}`}>J</div>
            <div className={`${styles.miniAvatar} ${styles.purple}`}>M</div>
            <div className={`${styles.miniAvatar} ${styles.teal}`}>K</div>
          </div>
        </div>
        <div className={styles.pinStem}></div>
        <div className={styles.pinDot}></div>
      </div>

      <div className={`${styles.mapPin} ${styles.pin2}`}>
        <div className={styles.pinBubble}>
          <div className={`${styles.pinEmoji} ${styles.purple}`}>🎮</div>
          <div className={styles.pinInfo}>
            <div className={styles.pinTitle}>Board Game Night</div>
            <div className={styles.pinMeta}>
              <span className={styles.pinLocation}>Echo Park</span>
              <span className={styles.pinDistance}>0.4 mi</span>
            </div>
          </div>
          <div className={styles.pinAvatars}>
            <div className={`${styles.miniAvatar} ${styles.yellow}`}>A</div>
            <div className={`${styles.miniAvatar} ${styles.pink}`}>S</div>
            <div className={`${styles.miniAvatar} ${styles.gray}`}>+3</div>
          </div>
        </div>
        <div className={styles.pinStem}></div>
        <div className={styles.pinDot}></div>
      </div>

      <div className={`${styles.mapPin} ${styles.pin3}`}>
        <div className={styles.pinBubble}>
          <div className={`${styles.pinEmoji} ${styles.teal}`}>🏀</div>
          <div className={styles.pinInfo}>
            <div className={styles.pinTitle}>Pickup Basketball</div>
            <div className={styles.pinMeta}>
              <span className={styles.pinLocation}>Koreatown</span>
              <span className={styles.pinDistance}>1.8 mi</span>
            </div>
          </div>
          <div className={styles.pinAvatars}>
            <div className={`${styles.miniAvatar} ${styles.teal}`}>D</div>
            <div className={`${styles.miniAvatar} ${styles.coral}`}>R</div>
          </div>
        </div>
        <div className={styles.pinStem}></div>
        <div className={styles.pinDot}></div>
      </div>

      <div className={`${styles.mapPin} ${styles.pin4}`}>
        <div className={styles.pinBubble}>
          <div className={`${styles.pinEmoji} ${styles.yellow}`}>👶</div>
          <div className={styles.pinInfo}>
            <div className={styles.pinTitle}>Stroller Walk</div>
            <div className={styles.pinMeta}>
              <span className={styles.pinLocation}>Los Feliz</span>
              <span className={styles.pinDistance}>1.5 mi</span>
            </div>
          </div>
          <div className={styles.pinAvatars}>
            <div className={`${styles.miniAvatar} ${styles.yellow}`}>E</div>
            <div className={`${styles.miniAvatar} ${styles.purple}`}>L</div>
            <div className={`${styles.miniAvatar} ${styles.coral}`}>T</div>
            <div className={`${styles.miniAvatar} ${styles.gray}`}>+2</div>
          </div>
        </div>
        <div className={styles.pinStem}></div>
        <div className={styles.pinDot}></div>
      </div>

      <div className={`${styles.mapPin} ${styles.pin5}`}>
        <div className={styles.pinBubble}>
          <div className={`${styles.pinEmoji} ${styles.pink}`}>🎬</div>
          <div className={styles.pinInfo}>
            <div className={styles.pinTitle}>Movie @ Alamo</div>
            <div className={styles.pinMeta}>
              <span className={styles.pinLocation}>DTLA</span>
              <span className={styles.pinDistance}>2.3 mi</span>
            </div>
          </div>
          <div className={styles.pinAvatars}>
            <div className={`${styles.miniAvatar} ${styles.pink}`}>N</div>
            <div className={`${styles.miniAvatar} ${styles.teal}`}>C</div>
          </div>
        </div>
        <div className={styles.pinStem}></div>
        <div className={styles.pinDot}></div>
      </div>
    </div>
  );
};

export default MapSection;
