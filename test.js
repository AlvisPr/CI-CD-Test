const request = require('supertest')
const app = require('./index')

beforeAll((done) => {
  server = app.listen(3000, done);
});

afterAll((done) => {
  server.close(done);
})
describe('GET /', () => {
  it('responds with Hello World!', async () => {
    const response = await request(app).get('/')
    expect(response.status).toBe(200)
    expect(response.text).toBe('Hello World!')
  })
})  

describe('GET /api/products', () => {
  it('responds with Products', async () => {
    const response = await request(app).get('/api/products')
    expect(response.status).toBe(200)
    expect(response.text).toBe('Products')
  })
})