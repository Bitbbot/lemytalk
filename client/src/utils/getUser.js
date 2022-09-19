export default async () => {
    return await fetch("http://localhost:5000/auth/login/success", {
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
            // console.log("efe");
            // setIsAuth(true);
            // console.log(resObject["user"]["id"]);
            return true;
        })
        .catch((err) => {
            console.log(err);
        });
};
