import { SERVER_URL } from "../env";

export default async () => {
    return await fetch(`${SERVER_URL}/api/user/`, {
        method: "GET",
        credentials: "include",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
        },
    })
        .then((response) => {
            // console.log(response.json());
            // console.log("gg");
            response.json().then((e) => {
                console.log(e);
            });
        })
        .catch((err) => {
            console.log(err);
        });
};
