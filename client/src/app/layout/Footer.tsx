// Footer.tsx
import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box
            mt={4}
            py={2}
            bgcolor="primary.main"
            color="white"
            textAlign="center"
            position="fixed"
            bottom={0}
            left={0}
            width="100%"
            zIndex={1000} 
        >
            <Typography variant="body2">
                &copy; {new Date().getFullYear()} Ski-Shop. All rights reserved.
            </Typography>
            <Typography variant="body2" mt={1}>
                Contact us at{' '}
                <Link href="ski.shop@email.com" color="inherit">
                    ski.shop@email.com
                </Link>{' '}
                | Phone: <Link href="tel:+1234567890" color="inherit">+1 (234) 567-890</Link>
            </Typography>
            <Typography variant="body2" mt={1}>
                Follow us on{' '}
                <Link href="https://facebook.com/your-ski-shop" target="_blank" rel="noopener noreferrer" color="inherit">
                    Facebook
                </Link>{' '}
                and{' '}
                <Link href="https://instagram.com/your-ski-shop" target="_blank" rel="noopener noreferrer" color="inherit">
                    Instagram
                </Link>
            </Typography>
        </Box>
    );
};

export default Footer;
