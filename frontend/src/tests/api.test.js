/**
 * @jest-environment node
 */
import { apiGET, apiPOST, describe, it } from "./utils";
import { mockAPI } from "../api/mockAPI";
import { databaseSeeder } from "./setup";
import { sessionsTests } from "./session-tests";
import { positionsTests } from "./position-tests";
import { templatesTests } from "./template-tests";
import { instructorsTests } from "./instructor-tests";
import { assignmentsTests } from "./assignment-tests";
import { wageChunksTests } from "./wage-chunk-tests";
import { offersTests } from "./offer-tests";
import { reportingTagsTests } from "./reporting-tag-tests";
import { applicationsTests } from "./application-tests";
import { unknownRouteTests } from "./unknown-route-tests";

// Run the actual tests for both the API and the Mock API
describe("API tests", () => {
    const api = { apiGET, apiPOST };

    it("Seed the database", async () => {
        await databaseSeeder.seed(api);
        await databaseSeeder.verifySeed(api);
    }, 30000);

    describe("`/sessions` tests", () => {
        sessionsTests(api);
    });

    describe.skip("template tests", () => {
        templatesTests(api);
    });
    // XXX position_template was renamed contract_template. The backend needs to be fixed,
    // but it is being rewritten, so skip the test for now
    describe.skip("`/positions` tests", () => {
        positionsTests({ apiGET, apiPOST });
    });
    describe.skip("`/instructors` tests", () => {
        instructorsTests({ apiGET, apiPOST });
    });
    describe.skip("`/assignments` tests", () => {
        assignmentsTests({ apiGET, apiPOST });
    });
    describe.skip("wage_chunk tests", () => {
        wageChunksTests({ apiGET, apiPOST });
    });
    describe.skip("offers tests", () => {
        offersTests({ apiGET, apiPOST });
    });
    describe.skip("reporting_tag tests", () => {
        reportingTagsTests({ apiGET, apiPOST });
    });
    describe.skip("`/applications` tests", () => {
        applicationsTests({ apiGET, apiPOST });
    });
    describe.skip("unknown api route tests", () => {
        unknownRouteTests({ apiGET, apiPOST });
    });
});

describe("Mock API tests", () => {
    it("Seed the database", async () => {
        await databaseSeeder.seed(mockAPI);
        await databaseSeeder.verifySeed(mockAPI);
    });
    describe("`/sessions` tests", () => {
        sessionsTests(mockAPI);
    });
    describe("template tests", () => {
        templatesTests(mockAPI);
    });
    describe("`/positions` tests", () => {
        positionsTests(mockAPI);
    });
    describe.skip("`/instructors` tests", () => {
        instructorsTests(mockAPI);
    });
    describe("`/applications` tests", () => {
        applicationsTests(mockAPI);
    });
});
