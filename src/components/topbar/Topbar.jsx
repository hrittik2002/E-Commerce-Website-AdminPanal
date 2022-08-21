import React from 'react'
import styles from './topbar.module.css'
import { NotificationsNoneRounded , LanguageRounded , SettingsRounded } from '@mui/icons-material';
const Topbar = () => {
  return (
    <div className={styles.topbar}>
        <div className={styles.topbarWrapper}>
            <div className={styles.topLeft}>
                <span className={styles.logo}>HGadmin</span>
            </div>
            <div className={styles.topRight}>
                <div className={styles.topbarIconContainer}>
                  <NotificationsNoneRounded />
                  <sapn className={styles.topIconBadge}>2</sapn>
                </div>
                <div className={styles.topbarIconContainer}>
                  <LanguageRounded />
                  <sapn className={styles.topIconBadge}>2</sapn>
                </div>
                <div className={styles.topbarIconContainer}>
                  <SettingsRounded />
                </div>
                <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className={styles.topAvatar} />
            </div>
        </div>

    </div>
    
  )
}

export default Topbar