import { SERVER_URL } from "../env";

export default () => {
    window.open(`${SERVER_URL}/api/auth/google`, "_self");
};
