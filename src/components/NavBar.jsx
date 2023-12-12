import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
function NavBar() {
  return <Stack zIndex={99999} direction={"row"} alignItems={"center"} p={2} sx={{ position: "sticky", background: "#1a1a1a", top: 0, justifyContent: "space-between" }}>

    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>

    <SearchBar/>
  </Stack>;
}

export default NavBar;
