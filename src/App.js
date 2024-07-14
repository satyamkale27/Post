import { useState } from "react";
const posts = [
  {
    id: 134679,
    Image: "resources/profile_Image.jpg",
    name: "satyam",
    content: "The most beautiful sunset I've ever seen.",
    hashtag: "#nature #beauty",
    insertimg:
      "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 134679,
    Image: "resources/profile_Image.jpg",
    name: "satyam",
    content: "The most beautiful sunset I've ever seen.",
    hashtag: "#nature #beauty",
    insertimg:
      "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
function Button({ children, onClick }) {
  return (
    <button
      className="bg-yellow-500 text-gray-800 py-3 px-4 border-0 rounded-md font-bold cursor-pointer transition duration-300 hover:bg-yellow-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default function App() {
  const [showCreatePost, setshowCreatePost] = useState(false);
  const [postData, setpostData] = useState(posts);

  function handelshowCreatePost() {
    setshowCreatePost((show) => !show);
  }

  function handelCreatePost(newPost) {
    setpostData((postData) => [...postData, newPost]);
    setshowCreatePost(false);
  }

  return (
    <div>
      <Postlist data={postData} />

      <div className="flex  justify-center">
        <Createpost
          handelshowCreatePost={handelshowCreatePost}
          showCreatePost={showCreatePost}
        />
      </div>
      <div className="flex justify-center mt-3 h-60">
        {showCreatePost && <Postdata onNewPost={handelCreatePost} />}
      </div>
      <Editpost />
    </div>
  );
}
function Postlist({ data }) {
  return (
    <div className="">
      {data.map((datas) => (
        <Post key={datas.id} datas={datas} />
      ))}
    </div>
  );
}
function Post({ datas }) {
  return (
    <div className="h-full w-custom border-4 border-solid  ml-96 mb-2 bg-peach ">
      <div className="flex justify-end m-1">
        <div className="mr-1">
          <Button>Edit</Button>
        </div>
        <div className="">
          <Button>Delete</Button>
        </div>
      </div>

      <div className="relative mb-72  flex flex-col items-center ">
        <div className="flex relative right-52 ">
          <img
            className="rounded-full h-12 w-12"
            src={datas.Image}
            alt={datas.name}
          />
          <div className="ml-2">
            <tittle>{datas.name}</tittle>
          </div>
        </div>

        <div className="flex flex-col ml-12 absolute top-5">
          <div>
            <h2>{datas.content}</h2>
          </div>
          <div className="relative bottom-1">
            <h3 className="text-blue-600 ">{datas.hashtag}</h3>
          </div>

          <div>
            <img
              className="h-64 w-imgwdt rounded-md"
              src={datas.insertimg}
              alt={datas.content}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Createpost({ handelshowCreatePost, showCreatePost }) {
  return (
    <div>
      <Button onClick={handelshowCreatePost}>
        {showCreatePost ? "close" : "create post"}
      </Button>
    </div>
  );
}
function Postdata({ onNewPost }) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [hashtag, setHashtag] = useState("");
  const [insertimg, setinsertimg] = useState("");

  function handelsubmitpost(e) {
    e.preventDefault();
    const id = crypto.randomUUID();
    if (!name || !content || !hashtag || !insertimg) return;
    const newPost = {
      id,
      Image: "resources/profile_Image.jpg",
      name,
      content,
      hashtag,
      insertimg,
    };
    onNewPost(newPost);
    setContent("");
    setHashtag("");
    setName("");
    setinsertimg("");
  }

  return (
    <div className="w-1/4 border-4 bg-peach">
      <form className="p-6 grid grid-cols-2 mb-6 gap-1 ">
        <label className="font-bold">name</label>
        <input
          className="border-2 border-blue-600 w-10/12"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="font-bold">content</label>
        <input
          className="border-2 border-blue-600 w-10/12"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <label className="font-bold">Hashtag</label>
        <input
          className="border-2 border-blue-600 w-10/12"
          type="text"
          value={hashtag}
          onChange={(e) => setHashtag(e.target.value)}
        />
        <label className="font-bold">Image</label>
        <input
          className="border-2 border-blue-600 w-10/12"
          type="text"
          value={insertimg}
          onChange={(e) => setinsertimg(e.target.value)}
        />
        <div className="mt-4 ml-24">
          <Button onClick={handelsubmitpost}>Create</Button>
        </div>
      </form>
    </div>
  );
}
function Editpost() {
  return (
    <div className="w-1/4 border-4 bg-peach absolute top-1/2 right-2">
      <form className="p-6 grid grid-cols-2 mb-6 gap-1 ">
        <label className="font-bold">content</label>
        <input className="border-2 border-blue-600 w-40" type="text" />
        <div className="mt-4 ml-24">
          <Button>Edit</Button>
        </div>
      </form>
    </div>
  );
}
