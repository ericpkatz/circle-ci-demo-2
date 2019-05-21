const db = require('./db');
const expect = require('chai').expect;
describe('my app', ()=> {
  beforeEach(()=> db.syncAndSeed());
  it('can test', ()=> {
    expect(true).to.equal(true);
  });
  it('moe is there', ()=> {
    return db.User.findOne({ name: 'moe'})
      .then( moe => expect(moe.name).to.equal('moe'));
  });
});
