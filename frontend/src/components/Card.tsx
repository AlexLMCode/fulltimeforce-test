interface CardProps {
  date: string;
  commitHash: string;
  commitTitle: string;
  commitUser: {
    username: string;
    userImageUrl: string;
  };
  filesCommited: number
}
import filesimg from '../assets/document-icon.svg'

const colors = ['purple', 'coral', 'black', 'orange', 'darkgreen']

const Card = ({ date, commitHash, commitTitle, commitUser, filesCommited }: CardProps) => {
  return (
    <article className="p-4  rounded-lg max-w-sm" style={{backgroundColor:`${colors[Math.floor(Math.random() * 5)]}`}}>
      <div className='flex  max-w-sm flex-col gap-3'>

        <div id="commit-date-hash-container" className="flex justify-between w-full">
          <div id="commit-date">
            <p className="text-white font-medium">{date}</p>
          </div>
          <div id="commit-hash">
            <p className="text-white font-medium">{commitHash}</p>
          </div>
        </div>
        <div id="commit-title-files-container" className="flex flex-col overflow-hidden">
          <div id="commit-title" className="text-white  mb-1 font-medium">
            <p>{commitTitle}</p>
          </div>
          <div id="commit-files-commited" className="flex items-center">
            <img src={filesimg} alt="images-file-logo" className='mr-3' />
            <p className="text-gray-400 font-medium">{filesCommited} files commited</p>
          </div>
        </div>
        <div id="commit-image-user-container" className="flex items-center" >
          <img src={commitUser.userImageUrl} alt="userImage" className="w-8 h-8 rounded-full mr-2" />

          <div id="commit-username">
            <p className='text-gray-300'>{commitUser.username}</p>
          </div>
        </div>
      </div>

    </article>
  )
}

export default Card