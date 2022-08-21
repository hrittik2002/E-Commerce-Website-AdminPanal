import Chart from "../../components/chart/Chart"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import styles from "./home.module.css"
import {userData} from "../../dummyData"
import WidgetLg from "../../components/widgetLg/WidgetLg"
import WidgetSm from "../../components/widgetSm/WidgetSm"

const Home = () => {
  return (
    <div className={styles.home}>
    
        <FeaturedInfo/>
        <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        <div className={styles.homeWidgets}>
          <WidgetSm/>
          <WidgetLg/>
          
        </div>
    </div>
  )
}

export default Home