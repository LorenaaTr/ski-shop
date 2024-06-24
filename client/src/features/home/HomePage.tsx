import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import Footer from "../../app/layout/Footer";

export default function HomePage(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return(
        <>
        <Slider {...settings}>
            <div>
                <img src="/images/hero1.jpg" style={{display: 'block', width:'100%', maxHeight: 500}}/>
            </div>
            <div>
                <img src="/images/hero2.jpg" style={{display: 'block', width:'100%', maxHeight: 500}}/>
            </div>
            <div>
                <img src="/images/hero3.jpg" style={{display: 'block', width:'100%', maxHeight: 500}}/>
            </div>
        </Slider>

        <Box display='flex' justifyContent='center' sx={{p:4}}>
            <Typography variant='h1'>
                Welcome to the Shop!
            </Typography>
        </Box>
        <Footer/>
        </>
    )
}