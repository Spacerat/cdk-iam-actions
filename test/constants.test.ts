import { actions, conditions } from "../lib";

test("constants have correct values", () => {
  // Note that it's not actually necessary to run this test, since TSC will check it at compile time!
  actions.S3.CREATE_BUCKET == "s3:CreateBucket";
  conditions.S3.LOCATION_CONSTRAINT == "s3:LocationConstraint";
});
