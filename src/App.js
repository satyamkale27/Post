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
function Button({ children }) {
  return (
    <button className="bg-yellow-500 text-gray-800 py-3 px-4 border-0 rounded-md font-bold cursor-pointer ">
      {children}
    </button>
  );
}

export default function App() {
  const postData = posts;
  return (
    <div>
      <Postlist data={postData} />
      <Createpost />
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
    <div className="h-full w-custom border-2 border-solid ml-96 mb-2">
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
              className="h-64 w-auto rounded-md"
              src={datas.insertimg}
              alt={datas.content}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Createpost() {
  return <Button className="">create post</Button>;
}
