import { SERVER_URL } from "../env";

export default async () => {
    return await fetch(`${SERVER_URL}/api/auth/login/success`, {
        method: "GET",
        credentials: "include",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
        },
    })
        .then((response) => {
            if (response.status === 200) return response.json();
            throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
            return true;
        })
        .catch((err) => {
            console.log(err);
        });
};
