import { SERVER_URL } from "../env";

export default () => {
    window.open(`${SERVER_URL}/auth/logout`, "_self");
};
