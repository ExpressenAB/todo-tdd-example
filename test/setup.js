"use strict";

// Make sure dates are displayed in the correct timezone
process.env.TZ = "Europe/Stockholm";

// Tests should always run in test environment to prevent accidental deletion of
// real elasticsearch indices etc.
// This file is required with ./test/mocha.opts
process.env.NODE_ENV = "test";

var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.config.truncateThreshold = 0;
chai.config.includeStack = true;

chai.should();
chai.use(chaiAsPromised);
