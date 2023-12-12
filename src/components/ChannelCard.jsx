import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from "react-router-dom";

export default function ChannelCard({channelDetail,marginTop}) {
  
  return (
    <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '358px', md: '358px' },
      height: '326px',
      margin: 'auto',
      marginTop,
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' ,alignItems: 'center'}}>
        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || 'cannot load image'}
          alt={channelDetail?.snippet?.title}
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
        />
        <Typography variant="h6">
          {channelDetail?.snippet?.title}{' '}
          <CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
        </Typography >
        {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' ,display: 'flex', alignItems: 'center' ,justifyContent: 'center',gap: '15px'}} overline component={'span'} onClick={() => {window.location.href = `/channel/${channelDetail?.id?.channelId}`}}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers 
            &nbsp;{parseInt(channelDetail?.statistics?.viewCount).toLocaleString('en-US')} Views
            
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
  )
}
