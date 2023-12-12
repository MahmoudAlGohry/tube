import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
export default function SearchBar() {
  const [searchTerm, setsearchTerm] = useState('')
  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setsearchTerm("");
    }
  }
  return (
    <Paper component={"form"} sx={{ borderRadius: 20, border: "1px solid #e3e3e3", pl: 2, boxShadow: "none", mr: { sm: 5 } }} onSubmit={handelSubmit}>
        
        <input type="text" placeholder="Search..." className="search-bar" value={searchTerm} onChange={(e) => {e.preventDefault(); setsearchTerm(e.target.value)}}/>
        <IconButton type="submit" sx={{ p: "10px", color: "red" }} aria-label="search">
            <SearchIcon />
        </IconButton>



    </Paper>
  );
}
