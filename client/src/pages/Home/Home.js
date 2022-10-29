import Window1 from "../../components/Window1/Window1";
import Window2 from "../../components/Window2/Window2";
import Window3 from "../../components/Window3/Window3";
import Buttons from "../../components/Buttons/Buttons";
import s from "./Home.module.scss";
import MobileButtons from "../../components/Buttons/MobileButtons/MobileButtons";
import { observer } from "mobx-react-lite";

const Home = observer(() => {
    return (
        <div className={s.wrapper}>
            <div className={s.windows}>
                <div className={s.mobile_wrapper}>
                    <div className={s.windows_wrapper}>
                        <Window1 />
                        <Window2 />
                        <MobileButtons />
                    </div>
                </div>
                <Window3 />
            </div>
            <div className={s.buttons_desktop}>
                <Buttons />
            </div>
        </div>
    );
});
export default Home;
