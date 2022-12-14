import request from 'supertest'
import app from '../../app'
import mongoose from 'mongoose'
import { connectDB, dropCollections, dropDB } from '../utils/mockDb'
require('dotenv').config()

beforeAll(async () => {
  await connectDB()
})
afterAll(async () => {
  await dropDB()
})
beforeEach(async () => {
  await dropCollections()
})

describe('test user controller', () => {
  test('test route /users with token of normal user', async () => {
    const response = await request(app)
      .get('/users')
      .set(
        'Authorization',
        'Bearer ' +
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmQ5MjAxYWFlMmZlMmYwZjdkNDM5N2MiLCJmaXJzdE5hbWUiOiJCaW5oIiwibGFzdE5hbWUiOiJOZ28iLCJlbWFpbCI6InJhbmRvbTEyMzQ1QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJDdhck9ka21OckhpUWEuMkJlRDB1VC5mLnFvc2Y2dHZ0Nk81VUEzMVZhZ2RVNXpkVHB4N2c2Iiwicm9sZSI6ImN1c3RvbWVyIiwiYXZhdGFyIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2ltYWdlcy82MmQ5MjAxYWFlMmZlMmYwZjdkNDM5N2EiLCJwaG9uZSI6IjA0NjkzOTc4NjgiLCJfX3YiOjAsImlhdCI6MTY1ODM5ODk3MCwiZXhwIjoxNjU4NDg1MzcwfQ.YzSQNLRpGAh4adhbQIm0647QdoHmF3GRdGXCPzEQNpY'
      )
    expect(response.status).toBe(401)
  })
  test('this should create a new user and delete user', async () => {
    const response = await request(app)
      .post('/users')
      .set('Content-Type', 'multipart/form-data')
      .field('firstName', 'Binh')
      .field('lastName', 'Ngo')
      .field('email', 'binhngo1005@gmail.com')
      .field('password', 'testing')
      .field('phone', '0460399494')
      .attach('avatar', 'src/test/fixtures/test-avatar.jpg')
    expect(response.status).toBe(201)
    const userId = response.body._id
    const delResponse = await request(app).delete(`/users/${userId}`)
    expect(delResponse.status).toBe(204)
  })
  test('this should get a single user and update', async () => {
    const response = await request(app)
      .post('/users')
      .set('Content-Type', 'multipart/form-data')
      .field('firstName', 'Binh')
      .field('lastName', 'Ngo')
      .field('email', 'binhngo1005123@gmail.com')
      .field('password', 'testing')
      .field('phone', '0460399494')
      .attach('avatar', 'src/test/fixtures/test-avatar.jpg')
    const userId = response.body._id
    const getRes = await request(app).get(`/users/${userId}`)
    expect(getRes.status).toBe(200)
    expect(getRes.body.email).toBe('binhngo1005123@gmail.com')
    const putRes = await request(app)
      .put(`/users/${userId}`)
      .set('Content-Type', 'application/json')
      .send({ firstName: 'John', lastName: 'Will' })
    expect(putRes.body.firstName).toBe('John')
  })
})
