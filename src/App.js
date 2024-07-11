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
];
export default function App() {
  const postData = posts;
  return (
    <div>
      <Postlist data={postData} />
    </div>
  );
}
function Postlist({ data }) {
  return (
    <div>
      {data.map((datas) => (
        <Post key={datas.id} datas={datas} />
      ))}
    </div>
  );
}
function Post({ datas }) {
  return (
    <div>
      <div className="flex">
        <img
          className="rounded-full h-12 w-12"
          src={datas.Image}
          alt={datas.name}
        />
        <div className="ml-2">
          <tittle>{datas.name}</tittle>
        </div>
      </div>

      <div className="flex flex-col ml-14 absolute top-5">
        <div>
          <h2>{datas.content}</h2>
        </div>
        <div>
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
  );
}
