"use strict";

const app = require("../../");
const request = require("supertest");
const storage = require("../../lib/storage.js")

Feature("TODO", () => {
  Scenario("Add an item", () => {
    after(storage.reset);

    When("Posting an item", (done) => {
      const item = {"item": "Write a blog post about testing"};
      request(app)
        .post("/api/todo")
        .send(item)
        .expect(200)
        .expect({id: 1}, done);
    });
  });

  Scenario("Fetch all TODOs", () => {
    after(storage.reset);

    let response;
    Given("There is a bunch of TODOs", () => {
      storage.create({"item": "item one"});
      storage.create({"item": "item two"});
      storage.create({"item": "item three"});
    });

    When("Fetching all TODOs", (done) => {
      request(app)
        .get("/api/todo")
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          response = res.body;
          done();
        });
    });

    Then("Response should contain all three TODOs", () => {
      const expectedResponse = {
          "1": {
            id: 1,
            item: "item one"
          },
          "2": {
            id: 2,
            item: "item two"
          },
          "3": {
            id: 3,
            item: "item three"
          }
        };
      response.should.eql(expectedResponse);  
    });
  });
});
