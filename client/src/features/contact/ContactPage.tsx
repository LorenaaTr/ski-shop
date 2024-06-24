import { useState, ChangeEvent, FormEvent } from 'react';
import { TextField, Button, Grid, Typography, Paper } from '@mui/material';
import Footer from '../../app/layout/Footer';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you can add the logic to handle form submission
        console.log(formData); // For demonstration purposes
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
            <>
            <Grid container justifyContent="center" mt={4}>
                    <Grid item xs={12} sm={8} md={6}>
                        <Paper elevation={6} sx={{ p: 4, borderRadius: 2 }}>
                            <Typography variant="h5" align="center" mb={2}>
                                Contact Us
                            </Typography>
                            <form onSubmit={handleSubmit} noValidate autoComplete="off">
                                <TextField
                                    fullWidth
                                    label="Your Name"
                                    variant="outlined"
                                    margin="normal"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <TextField
                                    fullWidth
                                    label="Your Email"
                                    variant="outlined"
                                    margin="normal"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <TextField
                                    fullWidth
                                    label="Message"
                                    variant="outlined"
                                    margin="normal"
                                    name="message"
                                    multiline
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    sx={{ mt: 2 }}
                                >
                                    Submit
                                </Button>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
                <Footer/>
            </>
    );
};

export default ContactPage;
