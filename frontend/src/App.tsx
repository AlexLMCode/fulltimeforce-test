import Card from "./components/Card"

function App() {

  return (

    <main className="w-full p-8 md:p-16">
      <section>
        <h1 className="font-bold text-4xl">fulltimeforce-test</h1>
      </section>

      <div className="flex gap-8 mt-8 ">
        <section>
          <p className="font-medium">Created at:</p>
          <span>19 julio del 2023</span>
        </section>



        <section>
          <p className="font-medium">Owner:</p>
          <p>Alexlmcode</p>
        </section>
      </div>

      <section className="mt-8">
        <p className="font-medium">Description: </p>
        <span>Project description</span>
      </section>
      <section className="mt-8">

        <p className="font-medium">Commits (total 20): </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
      {/* Commit list (Cards) */}

        <Card commitHash="60fffa54" commitTitle="Add the social media plugin on iOS app" commitUser={
          { userImageUrl: "https://avatars.githubusercontent.com/u/55332181?v=4", username: "AlexLm" }
        } date="7/23/23" filesCommited={3} />
        <Card commitHash="60fffa54" commitTitle="Add the social media plugin on iOS app" commitUser={
          { userImageUrl: "https://avatars.githubusercontent.com/u/55332181?v=4", username: "AlexLm" }
        } date="7/23/23" filesCommited={3} />
        <Card commitHash="60fffa54" commitTitle="Add the social media plugin on iOS app" commitUser={
          { userImageUrl: "https://avatars.githubusercontent.com/u/55332181?v=4", username: "AlexLm" }
        } date="7/23/23" filesCommited={3} />
        <Card commitHash="60fffa54" commitTitle="Add the social media plugin on iOS app" commitUser={
          { userImageUrl: "https://avatars.githubusercontent.com/u/55332181?v=4", username: "AlexLm" }
        } date="7/23/23" filesCommited={3} />
        <Card commitHash="60fffa54" commitTitle="Add the social media plugin on iOS app" commitUser={
          { userImageUrl: "https://avatars.githubusercontent.com/u/55332181?v=4", username: "AlexLm" }
        } date="7/23/23" filesCommited={3} />
        <Card commitHash="60fffa54" commitTitle="Add the social media plugin on iOS app" commitUser={
          { userImageUrl: "https://avatars.githubusercontent.com/u/55332181?v=4", username: "AlexLm" }
        } date="7/23/23" filesCommited={3} />
        <Card commitHash="60fffa54" commitTitle="Add the social media plugin on iOS app" commitUser={
          { userImageUrl: "https://avatars.githubusercontent.com/u/55332181?v=4", username: "AlexLm" }
        } date="7/23/23" filesCommited={3} />
      </section>
    </main>
  )
}

export default App
