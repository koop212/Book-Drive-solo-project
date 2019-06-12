let app = require('../server');
let testServer = require('supertest');

describe('Test the root path', () => {
    test('It should respond 200 to the LOGOUT route', async () => {
        const response = await testServer(app).post('/api/user/logout');
        expect(response.statusCode).toBe(200)
    });

    test('It should protect the /user route', async () => {
        const response = await testServer(app).get('/api/user');
        expect(response.statusCode).toBe(403)
    });

    test('It should return user info when logged in', async () => {
        //Agent allows us to remember cookies, context, etc for all requested users
        let agent = testServer.agent(app);

        const response = await agent        
                                .post('/api/user/login')
                                .send({ username: 'koop', password: 'qwerty'});
        expect(response.statusCode).toBe(200);

        const userResponse = await agent.get('/api/user');
        expect(userResponse.statusCode).toBe(200);
        console.log(userResponse)
    });

    test('It should return vehicle info', async () => {
        const response = await testServer(app).get('/api/vehicle');
        expect(response.statusCode).toBe(200);
    });

    test('It should register user', async () => {
        const response = await testServer(app)
            .post('/api/user/register')
            .send({username: 'newName', password: 'qwerty', first_name: 'Bobby', last_name: 'Vu', email: 'koop@gmail.com'})
        expect(response.statusCode).toBe(201);
    });

})