import FrontendStack from "./FrontendStack";
import AuthStack from "./AuthStack";
import ApiStack from "./ApiStack";
import StorageStack from "./StorageStack";

export default function main(app) {
  const storageStack = new StorageStack(app, "storage");

  const apiStack = new ApiStack(app, "api", {
    table: storageStack.table,
  });

  const authStack = new AuthStack(app, "auth", {
    api: apiStack.api,
    bucket: storageStack.bucket,
  });

  new FrontendStack(app, "frontend", {
    api: apiStack.api,
    auth: authStack.auth,
    bucket: storageStack.bucket,
  });
}