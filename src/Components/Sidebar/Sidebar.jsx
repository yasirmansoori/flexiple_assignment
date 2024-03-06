const Sidebar = () => {
  const tableOfContents = [
    {
      id: 1,
      title: "Introduction to Data Structures",
      link: "##Link1",
    },
    {
      id: 2,
      title: "How to start learning Data Structures with Javascript?",
      link: "##Link2",
    },
    {
      id: 3,
      title: "Learn about Complexities",
      link: "##Link3",
    },
    {
      id: 4,
      title: "Learn Data Structures with JavaScript",
      link: "##Link4",
    },
    {
      id: 5,
      title: "Array in javascript",
      link: "##Link5",
    },
    {
      id: 6,
      title: "String in javascript",
      link: "##Link6",
    },
    {
      id: 7,
      title: "Linked List in javascript",
      link: "##Link7",
    },
    {
      id: 8,
      title: "Stack in javascript",
      link: "##Link8",
    },
    {
      id: 9,
      title: "Queue in javascript",
      link: "##Link9",
    },
  ];
  const RecentPosts = [
    {
      id: 1,
      title:
        "Learn Redux and its usage with React by building Books finder app",
      date: "January 15, 2024",
    },
    {
      id: 2,
      title: "Provider Pattern with React Context API",
      date: "January 14, 2024",
    },
    {
      id: 3,
      title: "Six methods to achieve conditional rendering in React",
      date: "January 13, 2024",
    },
  ];
  return (
    <div className="col-md-4">
      <div className="position-sticky" style={{ top: "2rem" }}>
        <div
          className="p-4 mb-3 rounded"
          style={{ backgroundColor: "#1A1A1A" }}
        >
          <h4 className="fst-italic">Table of contents</h4>
          {tableOfContents.map((item, index) => (
            <a
              href={item.link}
              className="d-block text-decoration-none"
              key={index}
            >
              {item.title}
            </a>
          ))}
        </div>
        <div className="container p-3" style={{ backgroundColor: "#1A1A1A" }}>
          <h4 className="fst-italic">Recent posts</h4>
          <hr />
          {RecentPosts.map((post) => (
            <div className="mb-2" key={post.id}>
              <h6>
                <a href="#" className="text-decoration-none">
                  {post.title}
                </a>
              </h6>
              <em>{post.date}</em>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
