import { Box, Typography, Container, Grid, Paper, Button } from "@mui/material";
import Slider from "react-slick";
import Footer from "../../app/layout/Footer";

export default function HomePage() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const testimonialSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 testimonials at a time
        slidesToScroll: 1, // Scroll 1 testimonial at a time
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    

    return (
        <>
            <Slider {...settings}>
                <div>
                    <img src="/images/hero1.jpg" style={{ display: 'block', width: '100%', maxHeight: 500 }} alt="Hero 1" />
                </div>
                <div>
                    <img src="/images/hero2.jpg" style={{ display: 'block', width: '100%', maxHeight: 500 }} alt="Hero 2" />
                </div>
                <div>
                    <img src="/images/hero3.jpg" style={{ display: 'block', width: '100%', maxHeight: 500 }} alt="Hero 3" />
                </div>
            </Slider>

            <Box display='flex' justifyContent='center' sx={{ p: 4 }}>
                <Typography variant='h1'>
                    Welcome to the Shop!
                </Typography>
            </Box>

            <Container sx={{ my: 4, mb: 15 }}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <img src="/images/aboutus.jpg" alt="Our Mission" style={{ width: '100%', borderRadius: '50px 0 50px 0' }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom sx={{color: 'darkred'}}>
                            Our Mission
                        </Typography>
                        <Typography variant="body1">
                            At our shop, our mission is to provide high-quality ski gear and apparel to enthusiasts of all levels. We believe in the power of great equipment to enhance the skiing experience, ensuring safety, comfort, and style on the slopes. Our dedicated team is here to help you find the perfect gear to match your needs and preferences.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>

    

            <Container sx={{ my: 4, mb:10 }}>
                <Typography variant="h4" gutterBottom>
                    Our Product Categories
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
                            <img src="/images/products/sb-core1.png" alt="Skis" style={{ width: '100%', maxHeight: 300 }} />
                            <Typography variant="h6" gutterBottom>
                                Skis
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Discover our range of high-performance skis for all levels.
                            </Typography>
                            <Button variant="contained" color="primary" href="/catalog?types=skis">
                                Shop Skis
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
                            <img src="/images/products/boot-core2.png" alt="Boots" style={{ width: '100%', maxHeight: 300 }} />
                            <Typography variant="h6" gutterBottom>
                                Boots
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Explore our selection of comfortable and durable ski boots.
                            </Typography>
                            <Button variant="contained" color="primary" href="/catalog?types=boots">
                                Shop Boots
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
                            <img src="/images/products/hat-react1.png" alt="Hats" style={{ width: '100%', maxHeight: 300 }} />
                            <Typography variant="h6" gutterBottom>
                                Hats
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Keep warm with our stylish and functional ski hats.
                            </Typography>
                            <Button variant="contained" color="primary" href="/catalog?types=hats">
                                Shop Hats
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

            <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: 12 }}>
            <Container>
            <Typography variant="h4" gutterBottom>
                What Our Customers Say
            </Typography>
            <Slider {...testimonialSettings}>
                <div>
                    <Paper elevation={4} sx={{ p: 5, backgroundColor: 'white', color: 'black', textAlign: 'center', m:2 }}>
                        <Typography variant="h6" gutterBottom>
                            John Doe
                        </Typography>
                        <Typography variant="body1">
                            "Amazing products! Great quality and fantastic customer service."
                        </Typography>
                    </Paper>
                </div>
                <div>
                    <Paper elevation={3} sx={{ p: 4.5, backgroundColor: 'white', color: 'black', textAlign: 'center', m:2 }}>
                        <Typography variant="h6" gutterBottom>
                            Jane Smith
                        </Typography>
                        <Typography variant="body1">
                            "I love shopping here. The products are top-notch and always arrive on time."
                        </Typography>
                    </Paper>
                </div>
                <div>

                <Paper elevation={3} sx={{ p: 5, backgroundColor: 'white', color: 'black', textAlign: 'center', m:2}}>
                    <Typography variant="h6" gutterBottom>
                        Bob Johnson
                    </Typography>
                    <Typography variant="body1">
                        "Great prices and an excellent selection of ski gear."
                    </Typography>
                </Paper>
            </div>
            <div>
                <Paper elevation={3} sx={{ p: 5, backgroundColor: 'white', color: 'black', textAlign: 'center', m:2 }}>
                    <Typography variant="h6" gutterBottom>
                        Alice Brown
                    </Typography>
                    <Typography variant="body1">
                        "Fantastic experience from start to finish. Highly recommend this shop!"
                    </Typography>
                </Paper>
            </div>
            <div>
                <Paper elevation={3} sx={{ p: 5, backgroundColor: 'white', color: 'black', textAlign: 'center',m:2 }}>
                    <Typography variant="h6" gutterBottom>
                        Chris Green
                    </Typography>
                    <Typography variant="body1">
                        "Quality products and fast shipping. I'll definitely be back!"
                    </Typography>
                </Paper>
            </div>
        </Slider>
    </Container>
</Box>
            <Container sx={{ my: 4 }}>
                <Paper elevation={3} sx={{ p: 10, textAlign: 'center' }}>
                    <Typography variant="h4" gutterBottom sx={{color:'darkred'}}>
                        Get in Touch
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{mb:3}}>
                        We'd love to hear from you! Whether you have a question about our products or need assistance with an order, we're here to help.
                    </Typography>
                    <Button variant="contained" color="primary" href="/contact">
                        Contact Us
                    </Button>
                </Paper>
            </Container>

            <Footer />
        </>
    );
}
