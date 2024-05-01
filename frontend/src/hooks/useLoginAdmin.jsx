import { useEffect, useState } from "react";
import { getUsername } from "../services/auth.service";

export const useLoginAdmin = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const username = getUsername(token);

    if (username == "admin") {
      setUsername(username);
    } else {
      window.location.href = "/login";
    }
  }, []);

  return username;
};
