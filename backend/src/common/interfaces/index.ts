export namespace Interfaces {
  interface CommitAuthor {
    name: string;
    email: string;
    date: string;
  }

  interface CommitCommitter extends CommitAuthor {}

  interface CommitTree {
    sha: string;
    url: string;
  }

  interface CommitVerification {
    verified: boolean;
    reasong: string;
    signature: string | null;
    payload: any | null;
  }

  interface Commit {
    author: CommitAuthor;
    committer: CommitCommitter;
    message: string;
    tree: CommitTree;
    url: string;
    comment_count: number;
    verification: CommitVerification;
  }

  interface GithubUser {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  }

  interface ParentCommit {
    sha: string;
    url: string;
    html_url: string;
  }

  export interface FullCommitStructure {
    sha: string;
    node_id: string;
    commit: Commit;
    url: string;
    html_url: string;
    comments_url: string;
    author: GithubUser;
    committer: GithubUser;
    parents: ParentCommit[];
  }

  interface CustomCommitUser {
    username: string;
    userImageUrl: string;
  }

  export interface CustomCommit {
    date: string;
    commitHash: string;
    commitTitle: string;
    commitUser: CustomCommitUser;
    filesCommited: number;
  }

  export interface RepositoryInfo {
    createdAt: string;
    totalCommits: number;
    repositoryName: string;
    owner: string;
    description: string;
}
}
