const http = require('http');
const { URL } = require('url');

let users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
];

const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const path = parsedUrl.pathname;
    const method = req.method;
    
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    
    if (method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }
    
    // GET /api/users
    if (path === '/api/users' && method === 'GET') {
        res.writeHead(200);
        res.end(JSON.stringify(users));
    }
    
    // GET /api/users/:id
    else if (path.startsWith('/api/users/') && method === 'GET') {
        const id = parseInt(path.split('/')[3]);
        const user = users.find(u => u.id === id);
        
        if (user) {
            res.writeHead(200);
            res.end(JSON.stringify(user));
        } else {
            res.writeHead(404);
            res.end(JSON.stringify({ error: 'User not found' }));
        }
    }
    
    // POST /api/users
    else if (path === '/api/users' && method === 'POST') {
        let body = '';
        
        req.on('data', chunk => {
            body += chunk.toString();
        });
        
        req.on('end', () => {
            try {
                const newUser = JSON.parse(body);
                newUser.id = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
                users.push(newUser);
                
                res.writeHead(201);
                res.end(JSON.stringify(newUser));
            } catch (error) {
                res.writeHead(400);
                res.end(JSON.stringify({ error: 'Invalid JSON' }));
            }
        });
    }
    
    // PUT /api/users/:id
    else if (path.startsWith('/api/users/') && method === 'PUT') {
        const id = parseInt(path.split('/')[3]);
        let body = '';
        
        req.on('data', chunk => {
            body += chunk.toString();
        });
        
        req.on('end', () => {
            try {
                const updatedUser = JSON.parse(body);
                const index = users.findIndex(u => u.id === id);
                
                if (index !== -1) {
                    users[index] = { ...users[index], ...updatedUser };
                    res.writeHead(200);
                    res.end(JSON.stringify(users[index]));
                } else {
                    res.writeHead(404);
                    res.end(JSON.stringify({ error: 'User not found' }));
                }
            } catch (error) {
                res.writeHead(400);
                res.end(JSON.stringify({ error: 'Invalid JSON' }));
            }
        });
    }
    
    // DELETE /api/users/:id
    else if (path.startsWith('/api/users/') && method === 'DELETE') {
        const id = parseInt(path.split('/')[3]);
        const index = users.findIndex(u => u.id === id);
        
        if (index !== -1) {
            users.splice(index, 1);
            res.writeHead(200);
            res.end(JSON.stringify({ message: 'User deleted' }));
        } else {
            res.writeHead(404);
            res.end(JSON.stringify({ error: 'User not found' }));
        }
    }
    
    else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Route not found' }));
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`REST API Server running on port ${PORT}`);
    console.log('Endpoints:');
    console.log('  GET    /api/users');
    console.log('  GET    /api/users/:id');
    console.log('  POST   /api/users');
    console.log('  PUT    /api/users/:id');
    console.log('  DELETE /api/users/:id');
});