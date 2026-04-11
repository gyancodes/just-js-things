const http = require('http');

// Create a simple HTTP server
const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);
    
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('X-Powered-By', 'Node.js');
    
    if (req.url === '/' || req.url === '/home') {
        res.statusCode = 200;
        res.end(`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>Home Page</title>
                </head>
                <body>
                    <h1>Welcome to the Home Page!</h1>
                    <p>Server is running on Node.js</p>
                    <nav>
                        <a href="/about">About</a> | 
                        <a href="/api/data">API Data</a> | 
                        <a href="/404">Test 404</a>
                    </nav>
                </body>
            </html>
        `);
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.end(`
            <!DOCTYPE html>
            <html>
                <head><title>About</title></head>
                <body>
                    <h1>About This Server</h1>
                    <p>This is a simple vanilla Node.js HTTP server.</p>
                    <a href="/">Go Home</a>
                </body>
            </html>
        `);
    } else if (req.url === '/api/data') {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.end(JSON.stringify({
            message: 'Hello from the API!',
            timestamp: new Date().toISOString(),
            data: [1, 2, 3, 4, 5]
        }));
    } else {
        res.statusCode = 404;
        res.end(`
            <!DOCTYPE html>
            <html>
                <head><title>404 Not Found</title></head>
                <body>
                    <h1>404 - Page Not Found</h1>
                    <p>The requested URL ${req.url} was not found on this server.</p>
                    <a href="/">Go Home</a>
                </body>
            </html>
        `);
    }
});

const PORT = 3000;
const HOST = 'localhost';

server.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
    console.log('Press Ctrl+C to stop the server');
});

process.on('SIGINT', () => {
    console.log('\nShutting down server...');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});