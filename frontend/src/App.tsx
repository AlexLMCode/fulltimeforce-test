import Card from "./components/Card"

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div >
      <Card commitHash="60fffa54" commitTitle="Add the social media plugin on iOS app" commitUser={
        { userImageUrl: "https://avatars.githubusercontent.com/u/55332181?v=4", username: "AlexLm" }
      } date="7/23/23" filesCommited={3} />
      </div>
    </>
  )
}

export default App
