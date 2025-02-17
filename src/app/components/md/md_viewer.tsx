'use client';

import React from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import { Typography, Box, Paper, Stack } from '@mui/material';

const MarkdownViwer = ({ id, title, content }: { id: string; title: string; content: string }) => {
    // const markdownComponents: Components = {
    //   h1: ({ ...props }) => <Typography variant="h4" gutterBottom {...props} />,
    //   h2: ({ ...props }) => <Typography variant="h5" gutterBottom {...props} />,
    //   p: ({ ...props }) => <Typography variant="body1" paragraph {...props} />,
    //   li: ({ ...props }) => <Typography component="li" variant="body1" sx={{ marginLeft: 2 }} {...props} />,
    // };

    const markdownComponents: Components = {
        h1: ({ ...props }) => (
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }} {...props} />
        ),
        h2: ({ ...props }) => (
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#444' }} {...props} />
        ),
        p: ({ ...props }) => (
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.75, color: '#555' }} {...props} />
        ),
        li: ({ ...props }) => (
            <Typography
                component="li"
                variant="body1"
                sx={{ marginLeft: 3, lineHeight: 1.75, color: '#666' }}
                {...props}
            />
        ),
    };
    //test
    return (
        <Paper
            elevation={3}
            sx={{
                padding: 3,
                maxWidth: '800px',
                margin: 'auto',
                mt: 4,
                borderRadius: '10px',
                backgroundColor: '#fff',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                    boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.12)',
                },
            }}
        >
            {/* 제목 + 문서 ID 섹션 */}
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2, pb: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#888' }}>
                    #{id}
                </Typography>
            </Stack>

            {/* 내용 섹션 */}
            <Box
                sx={{
                    maxHeight: '900px',
                    maxWidth: '100%',
                    overflowY: 'auto',
                    wordBreak: 'break-word',
                    paddingRight: 1,
                }}
            >
                <ReactMarkdown components={markdownComponents}>{content}</ReactMarkdown>
            </Box>
        </Paper>
    );
};

export default MarkdownViwer;
