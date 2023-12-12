import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import NavBar from "./components/NavBar";
import Feed from "./components/Feed";
import VideoDetails from "./components/VideoDetails";
import ChannelDetails from "./components/channelDetails";
import SearchFeed from "./components/SearchFeed";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#1a1a1a",color: "#fff" }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Feed />} exact />
          <Route path="/video/:id" element={<VideoDetails/>} />
          <Route path="/channel/:id" element={<ChannelDetails/>} />
          <Route path="/search/:searchTerm" element={<SearchFeed/>} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
