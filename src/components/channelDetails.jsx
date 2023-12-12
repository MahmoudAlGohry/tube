import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { fetchFromAPI } from "../utils/fetchFromAPI";

export default function ChannelDetails() {
  const { id } = useParams();
  const [ChannelDetails, setChannelDetails] = useState(null);
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    //fetch channel details
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetails(data?.items[0]);
    });
    // fetch videos
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => {
      setvideos(data?.items);
    });
  }, [id]);

  return <Box minHeight="95vh">
    <Box>
      <div style={{
        background: 'linear-gradient(90deg, rgba(170,4,4,1) 0%, rgba(9,9,121,1) 35%, rgba(0,204,54,1) 100%)',
        zIndex: 10,
        height: '300px'
      }} />
      <ChannelCard channelDetail={ChannelDetails} marginTop="-93px" />
    </Box>
    <Box p={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center" ml={{md: '20px'}}>
      <Box sx={{ mr: { sm: '100px' } }} />
      <Videos videos={videos} />
    </Box>
  </Box>;
}
