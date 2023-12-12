import { useState,useEffect } from "react"
import { Box,Typography } from "@mui/material"
import Videos from "./Videos"
import { fetchFromAPI } from "../utils/fetchFromAPI"
import { useParams } from "react-router-dom"

export default function SearchFeed() {

  const [videos, setVideos] = useState([])
  const {searchTerm} = useParams()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items)
    })

  },[searchTerm])

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight={"bold"} mb={2} sx={{ color: "#fff" }}>
          Search Result For:<span style={{ color: "#f31503" }}> {searchTerm}</span> Videos
        </Typography>



        <Videos videos={videos}/>
      </Box>

  )
}
