import { useState, useEffect } from 'react'

interface Commit {
    date: string;
    commitHash: string;
    commitTitle: string;
    commitUser: {
        username: string;
        userImageUrl: string;
    };
    filesCommited: number
}

interface CommitResponse {
    data: Commit[];
    count: number
}

interface RepositoryInfo {
    createdAt: string;
    totalCommits: number;
    repositoryName: string;
    owner: string;
    description: string;
}

export const useRepository = () => {
    const [repositoryInfo, setRepositoryInfo] = useState<RepositoryInfo | null>(null);
    const [commits, setCommits] = useState<CommitResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null)
    const [currPage, setCurrPage] = useState(1);
    const [commitsPerPage, setCommitsPerPage] = useState(10);
    const indexOfLastCommit = currPage * commitsPerPage;
    const indexOfFirstCommit = indexOfLastCommit - commitsPerPage;
    const currentCommits = commits?.data.slice(indexOfFirstCommit, indexOfLastCommit);

    const paginate = (number: number) => {
        setCurrPage(number)
    }

    async function getRepoInfo(page:number) {
        try {
            setLoading(true);
            const repoInfo = await getRepositoryData<RepositoryInfo>();
            console.log("repoinfo", repoInfo)
            setRepositoryInfo(repoInfo);

            const repoCommits = await getRepositoryCommits<CommitResponse>(page);
            console.log("repocommits", repoCommits)

            setCommits(repoCommits);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getRepoInfo(currPage)
    }, [currPage])


    return { repositoryInfo, commits, loading, error, paginate, commitsPerPage,currentCommits }
}

function getRepositoryData<RepositoryInfo>() {

    return fetch("http://localhost:3000/repos/info").then(response => response.json()).then((data) => data as RepositoryInfo)
}


function getRepositoryCommits<CommitResponse>(page:number) {
    return fetch(`http://localhost:3000/commits?perPage=100`).then(response => response.json()).then((data) => data as CommitResponse)
}
