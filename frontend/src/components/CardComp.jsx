import { useState, useEffect } from "react";
import { Container, Card, Image } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log('2');
        // Fetch posts from the API
        const response = await fetch("http://localhost:3000/posts"); // Replace with your actual API endpoint
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    console.log('1');
    fetchPosts();
  }, []);
  console.log('Image URL:', posts);
  return (
    <Container className="d-flex flex-column align-items-center">
      {posts.map((post) => (
        
        <Card key={post.id} style={{ maxWidth: "42rem", marginBottom: "20px" }}>
          <Card.Body>
            <div className="d-flex mb-3">
              <a href="#!">
                <Image
                  src={post.profilePic}  // Display user's profile picture
                  className="border rounded-circle me-2"
                  alt="Avatar"
                  style={{ height: "40px" }}
                />
              </a>
              <div>
                <a href="#!" className="text-dark mb-0">
                  <strong>{post.user_id}</strong>
                </a>
                <a
                  href="#!"
                  className="text-muted d-block"
                  style={{ marginTop: "-6px" }}
                >
                  <small>{new Date(post.timestamp).toLocaleString()}</small> {/* Display post timestamp */}
                </a>
              </div>
            </div>
            <div>
              <p>{post.content}</p> {/* Display post content */}
            </div>
          </Card.Body>
          {post.image_url && ( 
            <>
              
            <div className="bg-image hover-overlay ripple rounded-0">
              <Card.Img
                src={`//localhost:3000/uploads/${post.image_url}`} // Display the post image
                className="w-100"
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                ></div>
              </a>
            </div>
            </>
          )}
          <Card.Body>
            <div className="d-flex justify-content-between mb-3">
              <div>
                <a href="#!">
                  <FaHeart className="me-1" color="danger" />
                  <span>{post.likes}</span> {/* Display number of likes */}
                </a>
              </div>
            </div>
          </Card.Body>
        </Card>
         
      ))}
    </Container>
     
  );
 
}
