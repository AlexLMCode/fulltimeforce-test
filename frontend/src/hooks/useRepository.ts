import React, { useState } from 'react'

interface Commit{
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
    createdAt:string;
    totalCommits:number;
    repositoryName:string;
    owner:string;
    description:string;
}

export const useRepository = () => {
  const [repositoryInfo, setRepositoryInfo] = useState<RepositoryInfo | null>(null);
  const [commits, setCommits] = useState<Commit[] | null>(null);

  //fetch and set states

  return[repositoryInfo, commits]
}
