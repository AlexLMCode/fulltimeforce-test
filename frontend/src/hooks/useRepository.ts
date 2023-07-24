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

interface RepositoryInfo {
    createdAt: string;
    totalCommits: number;
    repositoryName: string;
    owner: string;
    description: string;
}

export const useRepository = () => {
    const [repositoryInfo, setRepositoryInfo] = useState<RepositoryInfo | null>(null);
    const [commits, setCommits] = useState<Commit[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null)

    async function getRepoInfo() {
        try {
            setLoading(true);
            const repoInfo = await getRepositoryData<RepositoryInfo>();
            setRepositoryInfo(repoInfo);

            const repoCommits = await getRepositoryCommits<Commit>();
            setCommits(repoCommits);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {

        getRepoInfo()
    }, [])


    return {repositoryInfo, commits, loading, error}
}

function getRepositoryData<RepositoryInfo>() {

    return fetch("").then(response => response.json()).then((data)=> data as RepositoryInfo)
}


function getRepositoryCommits<Commit>() {
    return fetch("").then(response=>response.json()).then((data)=> data as Commit[])
}
