import * as dotenv from "dotenv";
import createTestCafe from "testcafe";

dotenv.config();

const filter: FilterFunction = async (testName: any, fixtureName: any) =>
  testName.match(process.env.FILTER) || fixtureName.match(process.env.FILTER);

(async function main (){
  const testcafe = await createTestCafe("localhost", 1337, 1338);

  try {
    const runner = testcafe.createRunner();

    const failedCount = await runner
      .src(["tests/**/*.ts"])
      .browsers([`${process.env.BROWSER ?? "chrome"}${(process.env.HEADLESS == "true") ? " --headless": ""}`])
      .filter(filter)
      .run();

    console.log("Tests failed: " + failedCount);
  } catch(error) {
    console.log(error);
  } finally {
    await testcafe.close();
  }
})();
