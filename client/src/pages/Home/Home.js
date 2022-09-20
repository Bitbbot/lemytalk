import Window1 from "../../components/Window1/Window1";
import Window2 from "../../components/Window2/Window2";
import Window3 from "../../components/Window3/Window3";
import Buttons from "../../components/Buttons/Buttons";
import s from "./Home.module.css";

const Home = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.windows}>
                <Window1 />
                <Window2 />
                <Window3 />
            </div>
            <Buttons />
        </div>
    );
};
export default Home;
