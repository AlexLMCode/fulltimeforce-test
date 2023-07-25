import Card from "./components/Card";
import { LoadingIndicator } from "./components/LoadingIndicator";
import { useRepository } from "./hooks/useRepository";

function App() {
  const {commits, error, loading, repositoryInfo} = useRepository();


  if (error != null && commits && repositoryInfo) {
    return <>
      <h1>Error when getting the repositoryInfo</h1>
    </>
  }

  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
      {
        loading ? (<LoadingIndicator />) : (<main className="w-full p-8 md:p-16">
          <section>
            <h1 className="font-bold text-4xl">fulltimeforce-test</h1>
          </section>

          <div className="flex gap-8 mt-8 ">
            <section>
              <p className="font-medium">Created at:</p>
              <span>{repositoryInfo?.createdAt}</span>
            </section>

            <section>
              <p className="font-medium">Owner:</p>
              <p>{repositoryInfo?.owner}</p>
            </section>
          </div>

          <section className="mt-8">
            <p className="font-medium">Description: </p>
            <span>{repositoryInfo?.description}</span>
          </section>
          <section className="mt-8">

            <p className="font-medium">Commits (total {repositoryInfo?.totalCommits}): </p>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {
              commits?.data.map((commit)=>(
                <Card commitHash={commit.commitHash.slice(0,7)} commitTitle={commit.commitTitle} commitUser={
                  { userImageUrl: "https://avatars.githubusercontent.com/u/55332181?v=4", username: commit.commitUser.username }
                } date={commit.date} filesCommited={commit.filesCommited} key={commit.commitHash}/>
              ))
            }
          </section>

        </main>)
      }

    </div>

  )
}

export default App
