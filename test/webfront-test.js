"use strict";

var request = require("supertest");
var app = require("../");

describe("Webfront", function () {

  it("should serve 'hello world'", function (done) {
    request(app)
      .get("/")
      .expect(200)
      .expect(/Hello World/, done);
  });
});
