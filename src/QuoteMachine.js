import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

const QuoteMachine = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [bgColor, setBgColor] = useState('rgba(255, 255, 255, 0.35)');

    const quotes = [
        { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
        { quote: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
        { quote: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
        { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { quote: "If you are not willing to risk the usual, you will have to settle for the ordinary.", author: "Jim Rohn" },
        { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
        { quote: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
    ];

    const getRandomRGBA = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgba(${r}, ${g}, ${b}, 0.35)`;
    };

    const fetchQuote = () => {
        let randomIndex;
        let newQuote;

        do {
            randomIndex = Math.floor(Math.random() * quotes.length);
            newQuote = quotes[randomIndex].quote;
        } while (newQuote === quote);

        setQuote(newQuote);
        setAuthor(quotes[randomIndex].author);
        setBgColor(getRandomRGBA());
    };

    useState(() => {
        fetchQuote();
    }, []);

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: bgColor,
                transition: 'background-color 0.5s ease',
            }}
        >
            <Box
                id="quote-box"
                sx={{
                    width: 400,
                    padding: 4,
                    border: '1px solid #ccc',
                    borderRadius: 2,
                    textAlign: 'center',
                    backgroundColor: '#fff',
                    transition: 'background-color 0.5s ease',
                }}
            >
                <Typography id="text" variant="h6" sx={{ marginBottom: 2 }}>
                    "{quote}"
                </Typography>
                <Typography id="author" variant="subtitle1" sx={{ marginBottom: 2 }}>
                    - {author}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
                    <Button
                        id="new-quote"
                        variant="contained"
                        onClick={fetchQuote}
                        sx={{ marginRight: 1 }}
                    >
                        New Quote
                    </Button>
                    <a
                        id="tweet-quote"
                        href={`https://twitter.com/intent/tweet?text="${quote}" - ${author}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button variant="outlined">Tweet This</Button>
                    </a>
                </Box>
            </Box>
        </Box>
    );
};

export default QuoteMachine;
