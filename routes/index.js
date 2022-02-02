const { homeRoutes } = require("./home");
const { authRoutes } = require("./auth");
const { postsRoutes } = require("./posts");
const { commentsRoutes } = require("./comments");
const { usersRoutes } = require("./users");
const {uniqueRoutes} = require("./isunique");

const initRoutes = (app) => {
  app.use("/", homeRoutes);
  app.use("/auth", authRoutes);
  app.use("/posts", postsRoutes);
  app.use("/comments", commentsRoutes);
  app.use("/users", usersRoutes);
  app.use("/unique", uniqueRoutes)
};

module.exports.initRoutes = initRoutes;
