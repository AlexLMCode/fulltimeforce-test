interface PaginateProps  {
    commitsPerPage:number;
    totalCommits:number;
    paginate: (number:number)=>void
}

export const Paginate = ({ commitsPerPage, totalCommits, paginate }:PaginateProps) => {
    const commitsNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCommits / commitsPerPage); i++) {
        commitsNumbers.push(i);
    };

    return (
        <div id="pagination-container">
            <ul id="pagination">
                {
                    commitsNumbers.map((number) => (
                        <li key={number} className="page-number" onClick={()=>paginate(number)}>
                            {number}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
