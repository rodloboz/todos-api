'use strict';

process.env.NODE_ENV = 'test';

const Todo = require('../api/models/todoModel');

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should(); // eslint-disable-line no-unused-vars


chai.use(chaiHttp);
describe('Todos', () => {
  beforeEach((done) => {
    Todo.deleteMany((_err) => {
      done();
    });
  });

  describe('GET /todos', () => {
    it('it should GET all the todos', (done) => {
      chai.request(server)
        .get('/todos')
        .end((_err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });

  describe('POST /todos', () => {
    it('it should not POST a todo without title field', (done) => {
      const todo = {
        completed: true,
      };
      chai.request(server)
        .post('/todos')
        .send(todo)
        .end((_err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors.should.have.property('title');
          res.body.errors.title.should.have.property('kind').eql('required');
          done();
        });
    });

    it('it should POST a todo ', (done) => {
      const todo = { title: 'abc123' };
      chai.request(server)
        .post('/todos')
        .send(todo)
        .end((_err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('title').eql('abc123');
          res.body.should.have.property('completed').eql(false);
          res.body.should.have.property('createdAt');
          done();
        });
    });
  });

  describe('GET /todos/:id', () => {
    it('it should GET a todo by the given id', (done) => {
      let todo = new Todo({ title: 'title' });
      todo.save((_err, todo) => {
        chai.request(server)
          .get('/todos/' + todo.id)
          .send(todo)
          .end((_err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('title');
            res.body.should.have.property('completed');
            res.body.should.have.property('createdAt');
            res.body.should.have.property('_id').eql(todo.id);
            done();
          });
      });

    });
  });

  describe('PATCH /todos/:id', () => {
    it('it should UPDATE a todo given the id', (done) => {
      const todo = new Todo({ title: 'title' });
      todo.save((_err, todo) => {
        chai.request(server)
          .patch('/todos/' + todo.id)
          .send({ title: 'abc123', completed: true })
          .end((_err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('title').eql('abc123');
            res.body.should.have.property('completed').eql(true);
            done();
          });
      });
    });
  });

  describe('DELETE /todos/:id', () => {
    it('it should DELETE a todo given the id', (done) => {
      const todo = new Todo({ title: 'title'});
      todo.save((_err, todo) => {
        chai.request(server)
          .delete('/todos/' + todo.id)
          .end((_err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('ok').eql(1);
            res.body.should.have.property('n').eql(1);
            done();
          });
      });
    });
  });

  describe('DELETE /todos', () => {
    it('it should DELETE a todo given the id', (done) => {
      Todo.insertMany([{ title: 'title '}, { title: 'title' }]);
      chai.request(server)
        .delete('/todos')
        .end((_err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('ok').eql(1);
          res.body.should.have.property('n').eql(2);
          res.body.should.have.property('deletedCount').eql(2);
          done();
        });
    });
  });
});
