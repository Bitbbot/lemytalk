import { SERVER_URL } from "../env";

export default () => {
    window.open(`${SERVER_URL}/auth/google`, "_self");
};
