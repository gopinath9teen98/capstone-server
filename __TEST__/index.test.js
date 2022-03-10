const { TestWatcher } = require('jest')
const request = require('supertest')

const app = require('../app.js')

describe("POST /register", ()=>{
    test("OK, Registration is successfull", async ()=>{
        const res = await request(app)
                          .post('/register')
                          .send({
                            "name":"akshu",
                            "email":"akshjuu@gmail.com",
                            "password":"akshu@gmail.com",
                            "role":"user"
                          })
                    console.log(res);
                    expect(res.statusCode)
    },10000)
})

describe("POST /login",()=>{
   test("OK, Login is Successfull", async ()=>{
       const res = await request(app)
                        .post('/login')
                        .send({
                            "email":"akshjuu@gmail.com",
                            "password":"akshu@gmail.com"
                        })
                   console.log(res);
                   expect(res.statusCode).toEqual(200)

   },10000)
})

describe("GET /details",()=>{
    var token= null;
    beforeEach((done)=>{
        request(app)
          .post('/login')
          .send({
            "email":"akshjuu@gmail.com",
            "password":"akshu@gmail.com"
          })
          .end((err,res)=>{
            //   token = res._body.token
              console.log(res);
              done()
          })
    },10000)

    test("OK, Products getting done", async ()=>{
        const res = await request(app)
                          .get('/details')
                          .set("Authorization" , 'Bearer ' + token)
                    console.log(res);
                    expect(res.statusCode)
    },20000)
}) 