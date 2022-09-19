import Window1 from "../../components/Window1/Window1";
import Window2 from "../../components/Window2/Window2";
import s from "./Home.module.css";

const Home = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.windows}>
                <Window1 />
                <Window2 />
            </div>
        </div>
    );
};
export default Home;
