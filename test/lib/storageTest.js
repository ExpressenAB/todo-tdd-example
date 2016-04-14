"use strict";

const storage = require("../../lib/storage");

describe("storage", () => {
  describe("create", () => {
    afterEach(storage.reset);

    it("return the id of the created item", () => {
      const id = storage.create({"item": "testdata"});
      id.should.equal(1);
    });

    it("should auto increment ids when creating multiple items", () => {
      const idOne = storage.create({"item": "item1"});
      const idTwo = storage.create({"item": "item2"});

      idOne.should.equal(1);
      idTwo.should.equal(2);
    });

  });
});
