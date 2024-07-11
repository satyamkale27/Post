const posts = [
  {
    id: 134679,
    Image: "resources/profile_Image.jpg",
    tittle: "sunset Views",
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
        <img src={datas.Image} alt={datas.tittle} />
      </div>
      <div>
        <tittle>{datas.tittle}</tittle>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
