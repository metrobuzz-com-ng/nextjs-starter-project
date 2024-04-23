import { routeCreator } from "@/utils";

const urls = {
  health: {
    entry: () => routeCreator("health"),
    check: () => routeCreator("check"),
  },
};

export default urls;
