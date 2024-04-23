import { HttpMethods } from "@/types";

const routeCreator = (path: string, method: HttpMethods = "get") => ({
  path,
  method,
});

export default routeCreator;
