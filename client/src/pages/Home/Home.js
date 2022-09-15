import Window from "../../components/Window/Window";
import s from "./Home.module.css";

const Home = () => {
    return (
        <div>
            <div className={s.windows}>
                <Window order={1} />
                <Window order={2} />
            </div>
        </div>
    );
};
export default Home;
