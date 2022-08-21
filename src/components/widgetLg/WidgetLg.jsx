import React from 'react'
import styles from './widgetLg.module.css'

const WidgetLg = () => {

  const Button = ({type}) =>{
    return <button children={`${styles.widgetLgButton}  styles.${type}`}>{type}</button>
  };

  return (
    <div className={styles.widgetLg}>
        <h3 className={styles.widgetLgTitle}>Latest transactions</h3>
        <table className={styles.widgetLgTable}>
          <tr className={styles.widgetLgTr}>
            <th className={styles.widgetLgTh}>Customer</th>
            <th className={styles.widgetLgTh}>Date</th>
            <th className={styles.widgetLgTh}>Amount</th>
            <th className={styles.widgetLgTh}>Status</th>
          </tr>
          <tr className={styles.widgetLgTr}>
            <td className={styles.widgetLgUser}>
              <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""  className={styles.widgetLgImg}/>
              <span className={styles.widgetLgName}>Susan Curol</span>
            </td>
            <td className={styles.widgetLgDate}>2 Jun 2022</td>
            <td className={styles.widgetLgAmount}>$122.00</td>
            <td className={styles.widgetLgStatus}><button className={`${styles.widgetLgButton} ${styles.Approved}`}>Approved</button></td>
          </tr>
          <tr className={styles.widgetLgTr}>
            <td className={styles.widgetLgUser}>
              <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""  className={styles.widgetLgImg}/>
              <span className={styles.widgetLgName}>Susan Curol</span>
            </td>
            <td className={styles.widgetLgDate}>2 Jun 2022</td>
            <td className={styles.widgetLgAmount}>$122.00</td>
            <td className={styles.widgetLgStatus}><button className={`${styles.widgetLgButton} ${styles.Declined}`}>Declined</button></td>
          </tr>
          <tr className={styles.widgetLgTr}>
            <td className={styles.widgetLgUser}>
              <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""  className={styles.widgetLgImg}/>
              <span className={styles.widgetLgName}>Susan Curol</span>
            </td>
            <td className={styles.widgetLgDate}>2 Jun 2022</td>
            <td className={styles.widgetLgAmount}>$122.00</td>
            <td className={styles.widgetLgStatus}><button className={`${styles.widgetLgButton} ${styles.Pending}`}>Pending</button></td>
          </tr>
          <tr className={styles.widgetLgTr}>
            <td className={styles.widgetLgUser}>
              <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""  className={styles.widgetLgImg}/>
              <span className={styles.widgetLgName}>Susan Curol</span>
            </td>
            <td className={styles.widgetLgDate}>2 Jun 2022</td>
            <td className={styles.widgetLgAmount}>$122.00</td>
            <td className={styles.widgetLgStatus}><button className={`${styles.widgetLgButton} ${styles.Approved}`}>Approved</button></td>
          </tr>
        </table>
    </div>
  )
}

export default WidgetLg