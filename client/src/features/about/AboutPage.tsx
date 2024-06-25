import { Container, Typography, Paper, Box, Grid, Avatar } from '@mui/material';

const AboutPage = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom sx={{textAlign: 'center', color:'darkred'}}>
                    About Us
                </Typography>
                <Typography variant="body1" paragraph>
                    Welcome to Ski-Shop, your number one source for all things skiing. We're dedicated to giving you the very best of ski equipment, with a focus on quality, customer service, and uniqueness.
                </Typography>
                <Typography variant="body1" paragraph>
                    Founded in 2024 by John Doe, Ski-Shop has come a long way from its beginnings in a home office. When John first started out, his passion for helping other skiers be more eco-friendly, providing the best equipment for his fellow skiers drove him to do intense research, and gave him the impetus to turn hard work and inspiration into a booming online store. We now serve customers all over the world and are thrilled to be a part of the eco-friendly, fair trade wing of the ski industry.
                </Typography>
                <Typography variant="body1" paragraph>
                    We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
                </Typography>
                <Typography variant="body1" paragraph>
                    Sincerely,
                </Typography>
                <Typography variant="body1" paragraph>
                    John Doe, Founder
                </Typography>
            </Paper>
            <Box mt={4}>
                <Typography variant="h5" gutterBottom sx={{color: 'darkred'}}>
                    Our Team
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
                            <Avatar alt="John Doe" src="/images/avatar1.jpg" sx={{ width: 100, height: 100, mx: 'auto' }} />
                            <Typography variant="h6" gutterBottom>
                                John Doe
                            </Typography>
                            <Typography variant="body1" sx={{color: 'red'}}>
                                Founder & CEO
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
                            <Avatar alt="Jane Smith" src="/images/avatar3.jpg" sx={{ width: 100, height: 100, mx: 'auto' }} />
                            <Typography variant="h6" gutterBottom>
                                Jane Smith
                            </Typography>
                            <Typography variant="body1" sx={{color: 'red'}}>
                                Chief Marketing Officer
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
                            <Avatar alt="Bob Johnson" src="/images/avatar2.jpg" sx={{ width: 100, height: 100, mx: 'auto' }} />
                            <Typography variant="h6" gutterBottom>
                                Bob Johnson
                            </Typography>
                            <Typography variant="body1" sx={{color: 'red'}}>
                                Head of Sales
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default AboutPage;
