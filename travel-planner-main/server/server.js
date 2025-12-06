// Start trip reminder scheduler


// Dependencies
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const { authMiddleware } = require("./utils/auth");
require("dotenv").config();

// Schema & DB
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

// Constants
const PORT = process.env.PORT || 3001;
const app = express();

// Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* -------------------------
   START APOLLO + SERVER
-------------------------- */
const startApolloServer = async () => {
  await server.start();

  // Attach Apollo middleware
  server.applyMiddleware({ app });

  /* -----------------------------------------------
     STATIC FILES + WILDCARD SHOULD ONLY RUN IN PROD
  ------------------------------------------------- */
  if (process.env.NODE_ENV === "production") {
    // Serve React build
    app.use(express.static(path.join(__dirname, "../client/build")));

    // Wildcard route *ONLY* in production
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });
  }

  // Start server when MongoDB is ready
  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`🚀 API server running on port ${PORT}`);
      console.log(`🚀 GraphQL endpoint: http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};

// Start the whole backend
startApolloServer();
