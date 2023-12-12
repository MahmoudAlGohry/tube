import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


export default function VideoCard({video}) {
    const {id:{videoId},snippet:{title,channelTitle,thumbnails:{high:{url}}}}=video
    console.log(video)
  return (
    <Card sx={{ width:357, borderRadius:0 ,boxShadow:'none'}}>

      <Link to={videoId ? `/video/${videoId}` : 'Cannot find video'} >
        <CardMedia
          image={url}
          alt={title}
          sx={{ width:358 , height: 180 , objectFit: 'cover',objectPosition:'center' }}
        />

      </Link>
      
      <CardContent sx={{ backgroundColor: ' #333333', height: '106px' }}>
        <Link to={videoId ? `/video/${videoId}` : 'Cannot find video'}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF" >
            {title.slice(0, 30) || 'Cannot find title'}
          </Typography>
        </Link>


        <Link to={videoId ? `/channel/${channelTitle}` : 'Cannot find channel'}>
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {channelTitle.slice(0, 30) || 'Cannot find channel title'}
            <CheckCircleIcon sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>


      </CardContent>
    </Card>
  )
}
