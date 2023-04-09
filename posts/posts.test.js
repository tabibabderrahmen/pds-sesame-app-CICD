const request = require("supertest");

const app = require("./index");

describe("Creating and fetching a post", () => {
  let postId;

  it("creates a new post", async () => {
    const response = await request(app)
      .post("/posts/create")
      .send({ title: "Test post for pds" })
      .expect(201);

    expect(response.body.title).toEqual("Test post for pds");
    expect(response.body.id).toBeDefined();
    postId = response.body.id;
  });
  test("GET /posts returns a post with title 'Test post for pds'", async () => {
    const response = await request(app)
      .get("/posts")
      .expect(200);
  
    const posts = response.body;
    const postIds = Object.keys(posts);
    const postTitles = postIds.map(id => posts[id].title);
  
    expect(postTitles).toContain("Test post for pds");
  });
  
  
});
