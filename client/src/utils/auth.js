import API from "./API";

export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
}

export const signout = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    next();
    return (
      API.signOut()
      .then((res) => {
        console.log("sign out", res.data)
      })
      .catch((err) => {
        console.log(err.response.data.error);
      })
    );
  }
}