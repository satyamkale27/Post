const posts = [
  {
    id: 134679,
    Image: "resources/profile_Image.jpg",
    name: "satyam",
    content: "The most beautiful sunset I've ever seen.",
    hashtag: "#nature #beauty",
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
      <div>
        <img
          className="rounded-full h-12 w-12"
          src={datas.Image}
          alt={datas.name}
        />
      </div>
      <div>
        <tittle>{datas.name}</tittle>
      </div>
      <div>
        <h2>{datas.content}</h2>
      </div>
      <div>
        <h3 className="text-blue-600">{datas.hashtag}</h3>
      </div>
    </div>
  );
}
