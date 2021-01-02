import { useState, useEffect } from "react";
import axios from "axios";

import Loading from "../components/Loading";
import SearchBar from "../components/SearchBar";

import Repository from "../components/Repository";

const mockData = [
  {
  id: 311452414,
  node_id: "MDEwOlJlcG9zaXRvcnkzMTE0NTI0MTQ=",
  name: "ar-exercises",
  full_name: "Deteri0n/ar-exercises",
  private: false,
  owner: {
  login: "Deteri0n",
  id: 64661950,
  node_id: "MDQ6VXNlcjY0NjYxOTUw",
  avatar_url: "https://avatars1.githubusercontent.com/u/64661950?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Deteri0n",
  html_url: "https://github.com/Deteri0n",
  followers_url: "https://api.github.com/users/Deteri0n/followers",
  following_url: "https://api.github.com/users/Deteri0n/following{/other_user}",
  gists_url: "https://api.github.com/users/Deteri0n/gists{/gist_id}",
  starred_url: "https://api.github.com/users/Deteri0n/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Deteri0n/subscriptions",
  organizations_url: "https://api.github.com/users/Deteri0n/orgs",
  repos_url: "https://api.github.com/users/Deteri0n/repos",
  events_url: "https://api.github.com/users/Deteri0n/events{/privacy}",
  received_events_url: "https://api.github.com/users/Deteri0n/received_events",
  type: "User",
  site_admin: false
  },
  html_url: "https://github.com/Deteri0n/ar-exercises",
  description: "ActiveRecord stretch exercises",
  fork: true,
  url: "https://api.github.com/repos/Deteri0n/ar-exercises",
  forks_url: "https://api.github.com/repos/Deteri0n/ar-exercises/forks",
  keys_url: "https://api.github.com/repos/Deteri0n/ar-exercises/keys{/key_id}",
  collaborators_url: "https://api.github.com/repos/Deteri0n/ar-exercises/collaborators{/collaborator}",
  teams_url: "https://api.github.com/repos/Deteri0n/ar-exercises/teams",
  hooks_url: "https://api.github.com/repos/Deteri0n/ar-exercises/hooks",
  issue_events_url: "https://api.github.com/repos/Deteri0n/ar-exercises/issues/events{/number}",
  events_url: "https://api.github.com/repos/Deteri0n/ar-exercises/events",
  assignees_url: "https://api.github.com/repos/Deteri0n/ar-exercises/assignees{/user}",
  branches_url: "https://api.github.com/repos/Deteri0n/ar-exercises/branches{/branch}",
  tags_url: "https://api.github.com/repos/Deteri0n/ar-exercises/tags",
  blobs_url: "https://api.github.com/repos/Deteri0n/ar-exercises/git/blobs{/sha}",
  git_tags_url: "https://api.github.com/repos/Deteri0n/ar-exercises/git/tags{/sha}",
  git_refs_url: "https://api.github.com/repos/Deteri0n/ar-exercises/git/refs{/sha}",
  trees_url: "https://api.github.com/repos/Deteri0n/ar-exercises/git/trees{/sha}",
  statuses_url: "https://api.github.com/repos/Deteri0n/ar-exercises/statuses/{sha}",
  languages_url: "https://api.github.com/repos/Deteri0n/ar-exercises/languages",
  stargazers_url: "https://api.github.com/repos/Deteri0n/ar-exercises/stargazers",
  contributors_url: "https://api.github.com/repos/Deteri0n/ar-exercises/contributors",
  subscribers_url: "https://api.github.com/repos/Deteri0n/ar-exercises/subscribers",
  subscription_url: "https://api.github.com/repos/Deteri0n/ar-exercises/subscription",
  commits_url: "https://api.github.com/repos/Deteri0n/ar-exercises/commits{/sha}",
  git_commits_url: "https://api.github.com/repos/Deteri0n/ar-exercises/git/commits{/sha}",
  comments_url: "https://api.github.com/repos/Deteri0n/ar-exercises/comments{/number}",
  issue_comment_url: "https://api.github.com/repos/Deteri0n/ar-exercises/issues/comments{/number}",
  contents_url: "https://api.github.com/repos/Deteri0n/ar-exercises/contents/{+path}",
  compare_url: "https://api.github.com/repos/Deteri0n/ar-exercises/compare/{base}...{head}",
  merges_url: "https://api.github.com/repos/Deteri0n/ar-exercises/merges",
  archive_url: "https://api.github.com/repos/Deteri0n/ar-exercises/{archive_format}{/ref}",
  downloads_url: "https://api.github.com/repos/Deteri0n/ar-exercises/downloads",
  issues_url: "https://api.github.com/repos/Deteri0n/ar-exercises/issues{/number}",
  pulls_url: "https://api.github.com/repos/Deteri0n/ar-exercises/pulls{/number}",
  milestones_url: "https://api.github.com/repos/Deteri0n/ar-exercises/milestones{/number}",
  notifications_url: "https://api.github.com/repos/Deteri0n/ar-exercises/notifications{?since,all,participating}",
  labels_url: "https://api.github.com/repos/Deteri0n/ar-exercises/labels{/name}",
  releases_url: "https://api.github.com/repos/Deteri0n/ar-exercises/releases{/id}",
  deployments_url: "https://api.github.com/repos/Deteri0n/ar-exercises/deployments",
  created_at: "2020-11-09T20:08:05Z",
  updated_at: "2020-11-10T00:19:04Z",
  pushed_at: "2020-11-10T00:19:00Z",
  git_url: "git://github.com/Deteri0n/ar-exercises.git",
  ssh_url: "git@github.com:Deteri0n/ar-exercises.git",
  clone_url: "https://github.com/Deteri0n/ar-exercises.git",
  svn_url: "https://github.com/Deteri0n/ar-exercises",
  homepage: null,
  size: 28,
  stargazers_count: 0,
  watchers_count: 0,
  language: "Ruby",
  has_issues: false,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: "master"
  },
  {
  id: 311702894,
  node_id: "MDEwOlJlcG9zaXRvcnkzMTE3MDI4OTQ=",
  name: "blog",
  full_name: "Deteri0n/blog",
  private: false,
  owner: {
  login: "Deteri0n",
  id: 64661950,
  node_id: "MDQ6VXNlcjY0NjYxOTUw",
  avatar_url: "https://avatars1.githubusercontent.com/u/64661950?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Deteri0n",
  html_url: "https://github.com/Deteri0n",
  followers_url: "https://api.github.com/users/Deteri0n/followers",
  following_url: "https://api.github.com/users/Deteri0n/following{/other_user}",
  gists_url: "https://api.github.com/users/Deteri0n/gists{/gist_id}",
  starred_url: "https://api.github.com/users/Deteri0n/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Deteri0n/subscriptions",
  organizations_url: "https://api.github.com/users/Deteri0n/orgs",
  repos_url: "https://api.github.com/users/Deteri0n/repos",
  events_url: "https://api.github.com/users/Deteri0n/events{/privacy}",
  received_events_url: "https://api.github.com/users/Deteri0n/received_events",
  type: "User",
  site_admin: false
  },
  html_url: "https://github.com/Deteri0n/blog",
  description: "Getting Started with Rails on an older version of ruby & rails to train on version management ",
  fork: false,
  url: "https://api.github.com/repos/Deteri0n/blog",
  forks_url: "https://api.github.com/repos/Deteri0n/blog/forks",
  keys_url: "https://api.github.com/repos/Deteri0n/blog/keys{/key_id}",
  collaborators_url: "https://api.github.com/repos/Deteri0n/blog/collaborators{/collaborator}",
  teams_url: "https://api.github.com/repos/Deteri0n/blog/teams",
  hooks_url: "https://api.github.com/repos/Deteri0n/blog/hooks",
  issue_events_url: "https://api.github.com/repos/Deteri0n/blog/issues/events{/number}",
  events_url: "https://api.github.com/repos/Deteri0n/blog/events",
  assignees_url: "https://api.github.com/repos/Deteri0n/blog/assignees{/user}",
  branches_url: "https://api.github.com/repos/Deteri0n/blog/branches{/branch}",
  tags_url: "https://api.github.com/repos/Deteri0n/blog/tags",
  blobs_url: "https://api.github.com/repos/Deteri0n/blog/git/blobs{/sha}",
  git_tags_url: "https://api.github.com/repos/Deteri0n/blog/git/tags{/sha}",
  git_refs_url: "https://api.github.com/repos/Deteri0n/blog/git/refs{/sha}",
  trees_url: "https://api.github.com/repos/Deteri0n/blog/git/trees{/sha}",
  statuses_url: "https://api.github.com/repos/Deteri0n/blog/statuses/{sha}",
  languages_url: "https://api.github.com/repos/Deteri0n/blog/languages",
  stargazers_url: "https://api.github.com/repos/Deteri0n/blog/stargazers",
  contributors_url: "https://api.github.com/repos/Deteri0n/blog/contributors",
  subscribers_url: "https://api.github.com/repos/Deteri0n/blog/subscribers",
  subscription_url: "https://api.github.com/repos/Deteri0n/blog/subscription",
  commits_url: "https://api.github.com/repos/Deteri0n/blog/commits{/sha}",
  git_commits_url: "https://api.github.com/repos/Deteri0n/blog/git/commits{/sha}",
  comments_url: "https://api.github.com/repos/Deteri0n/blog/comments{/number}",
  issue_comment_url: "https://api.github.com/repos/Deteri0n/blog/issues/comments{/number}",
  contents_url: "https://api.github.com/repos/Deteri0n/blog/contents/{+path}",
  compare_url: "https://api.github.com/repos/Deteri0n/blog/compare/{base}...{head}",
  merges_url: "https://api.github.com/repos/Deteri0n/blog/merges",
  archive_url: "https://api.github.com/repos/Deteri0n/blog/{archive_format}{/ref}",
  downloads_url: "https://api.github.com/repos/Deteri0n/blog/downloads",
  issues_url: "https://api.github.com/repos/Deteri0n/blog/issues{/number}",
  pulls_url: "https://api.github.com/repos/Deteri0n/blog/pulls{/number}",
  milestones_url: "https://api.github.com/repos/Deteri0n/blog/milestones{/number}",
  notifications_url: "https://api.github.com/repos/Deteri0n/blog/notifications{?since,all,participating}",
  labels_url: "https://api.github.com/repos/Deteri0n/blog/labels{/name}",
  releases_url: "https://api.github.com/repos/Deteri0n/blog/releases{/id}",
  deployments_url: "https://api.github.com/repos/Deteri0n/blog/deployments",
  created_at: "2020-11-10T15:34:03Z",
  updated_at: "2020-11-10T19:06:39Z",
  pushed_at: "2020-11-10T19:06:35Z",
  git_url: "git://github.com/Deteri0n/blog.git",
  ssh_url: "git@github.com:Deteri0n/blog.git",
  clone_url: "https://github.com/Deteri0n/blog.git",
  svn_url: "https://github.com/Deteri0n/blog",
  homepage: null,
  size: 578,
  stargazers_count: 0,
  watchers_count: 0,
  language: "Ruby",
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: "master"
  },
  {
  id: 303461255,
  node_id: "MDEwOlJlcG9zaXRvcnkzMDM0NjEyNTU=",
  name: "BootcampX",
  full_name: "Deteri0n/BootcampX",
  private: false,
  owner: {
  login: "Deteri0n",
  id: 64661950,
  node_id: "MDQ6VXNlcjY0NjYxOTUw",
  avatar_url: "https://avatars1.githubusercontent.com/u/64661950?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Deteri0n",
  html_url: "https://github.com/Deteri0n",
  followers_url: "https://api.github.com/users/Deteri0n/followers",
  following_url: "https://api.github.com/users/Deteri0n/following{/other_user}",
  gists_url: "https://api.github.com/users/Deteri0n/gists{/gist_id}",
  starred_url: "https://api.github.com/users/Deteri0n/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Deteri0n/subscriptions",
  organizations_url: "https://api.github.com/users/Deteri0n/orgs",
  repos_url: "https://api.github.com/users/Deteri0n/repos",
  events_url: "https://api.github.com/users/Deteri0n/events{/privacy}",
  received_events_url: "https://api.github.com/users/Deteri0n/received_events",
  type: "User",
  site_admin: false
  },
  html_url: "https://github.com/Deteri0n/BootcampX",
  description: "Practicing SQL in a small Database of fake students",
  fork: false,
  url: "https://api.github.com/repos/Deteri0n/BootcampX",
  forks_url: "https://api.github.com/repos/Deteri0n/BootcampX/forks",
  keys_url: "https://api.github.com/repos/Deteri0n/BootcampX/keys{/key_id}",
  collaborators_url: "https://api.github.com/repos/Deteri0n/BootcampX/collaborators{/collaborator}",
  teams_url: "https://api.github.com/repos/Deteri0n/BootcampX/teams",
  hooks_url: "https://api.github.com/repos/Deteri0n/BootcampX/hooks",
  issue_events_url: "https://api.github.com/repos/Deteri0n/BootcampX/issues/events{/number}",
  events_url: "https://api.github.com/repos/Deteri0n/BootcampX/events",
  assignees_url: "https://api.github.com/repos/Deteri0n/BootcampX/assignees{/user}",
  branches_url: "https://api.github.com/repos/Deteri0n/BootcampX/branches{/branch}",
  tags_url: "https://api.github.com/repos/Deteri0n/BootcampX/tags",
  blobs_url: "https://api.github.com/repos/Deteri0n/BootcampX/git/blobs{/sha}",
  git_tags_url: "https://api.github.com/repos/Deteri0n/BootcampX/git/tags{/sha}",
  git_refs_url: "https://api.github.com/repos/Deteri0n/BootcampX/git/refs{/sha}",
  trees_url: "https://api.github.com/repos/Deteri0n/BootcampX/git/trees{/sha}",
  statuses_url: "https://api.github.com/repos/Deteri0n/BootcampX/statuses/{sha}",
  languages_url: "https://api.github.com/repos/Deteri0n/BootcampX/languages",
  stargazers_url: "https://api.github.com/repos/Deteri0n/BootcampX/stargazers",
  contributors_url: "https://api.github.com/repos/Deteri0n/BootcampX/contributors",
  subscribers_url: "https://api.github.com/repos/Deteri0n/BootcampX/subscribers",
  subscription_url: "https://api.github.com/repos/Deteri0n/BootcampX/subscription",
  commits_url: "https://api.github.com/repos/Deteri0n/BootcampX/commits{/sha}",
  git_commits_url: "https://api.github.com/repos/Deteri0n/BootcampX/git/commits{/sha}",
  comments_url: "https://api.github.com/repos/Deteri0n/BootcampX/comments{/number}",
  issue_comment_url: "https://api.github.com/repos/Deteri0n/BootcampX/issues/comments{/number}",
  contents_url: "https://api.github.com/repos/Deteri0n/BootcampX/contents/{+path}",
  compare_url: "https://api.github.com/repos/Deteri0n/BootcampX/compare/{base}...{head}",
  merges_url: "https://api.github.com/repos/Deteri0n/BootcampX/merges",
  archive_url: "https://api.github.com/repos/Deteri0n/BootcampX/{archive_format}{/ref}",
  downloads_url: "https://api.github.com/repos/Deteri0n/BootcampX/downloads",
  issues_url: "https://api.github.com/repos/Deteri0n/BootcampX/issues{/number}",
  pulls_url: "https://api.github.com/repos/Deteri0n/BootcampX/pulls{/number}",
  milestones_url: "https://api.github.com/repos/Deteri0n/BootcampX/milestones{/number}",
  notifications_url: "https://api.github.com/repos/Deteri0n/BootcampX/notifications{?since,all,participating}",
  labels_url: "https://api.github.com/repos/Deteri0n/BootcampX/labels{/name}",
  releases_url: "https://api.github.com/repos/Deteri0n/BootcampX/releases{/id}",
  deployments_url: "https://api.github.com/repos/Deteri0n/BootcampX/deployments",
  created_at: "2020-10-12T17:14:16Z",
  updated_at: "2020-10-14T22:42:50Z",
  pushed_at: "2020-10-14T22:42:47Z",
  git_url: "git://github.com/Deteri0n/BootcampX.git",
  ssh_url: "git@github.com:Deteri0n/BootcampX.git",
  clone_url: "https://github.com/Deteri0n/BootcampX.git",
  svn_url: "https://github.com/Deteri0n/BootcampX",
  homepage: null,
  size: 880,
  stargazers_count: 0,
  watchers_count: 0,
  language: "JavaScript",
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: "master"
  },
  {
  id: 324972433,
  node_id: "MDEwOlJlcG9zaXRvcnkzMjQ5NzI0MzM=",
  name: "Deteri0n",
  full_name: "Deteri0n/Deteri0n",
  private: false,
  owner: {
  login: "Deteri0n",
  id: 64661950,
  node_id: "MDQ6VXNlcjY0NjYxOTUw",
  avatar_url: "https://avatars1.githubusercontent.com/u/64661950?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Deteri0n",
  html_url: "https://github.com/Deteri0n",
  followers_url: "https://api.github.com/users/Deteri0n/followers",
  following_url: "https://api.github.com/users/Deteri0n/following{/other_user}",
  gists_url: "https://api.github.com/users/Deteri0n/gists{/gist_id}",
  starred_url: "https://api.github.com/users/Deteri0n/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Deteri0n/subscriptions",
  organizations_url: "https://api.github.com/users/Deteri0n/orgs",
  repos_url: "https://api.github.com/users/Deteri0n/repos",
  events_url: "https://api.github.com/users/Deteri0n/events{/privacy}",
  received_events_url: "https://api.github.com/users/Deteri0n/received_events",
  type: "User",
  site_admin: false
  },
  html_url: "https://github.com/Deteri0n/Deteri0n",
  description: "Profil Overview",
  fork: false,
  url: "https://api.github.com/repos/Deteri0n/Deteri0n",
  forks_url: "https://api.github.com/repos/Deteri0n/Deteri0n/forks",
  keys_url: "https://api.github.com/repos/Deteri0n/Deteri0n/keys{/key_id}",
  collaborators_url: "https://api.github.com/repos/Deteri0n/Deteri0n/collaborators{/collaborator}",
  teams_url: "https://api.github.com/repos/Deteri0n/Deteri0n/teams",
  hooks_url: "https://api.github.com/repos/Deteri0n/Deteri0n/hooks",
  issue_events_url: "https://api.github.com/repos/Deteri0n/Deteri0n/issues/events{/number}",
  events_url: "https://api.github.com/repos/Deteri0n/Deteri0n/events",
  assignees_url: "https://api.github.com/repos/Deteri0n/Deteri0n/assignees{/user}",
  branches_url: "https://api.github.com/repos/Deteri0n/Deteri0n/branches{/branch}",
  tags_url: "https://api.github.com/repos/Deteri0n/Deteri0n/tags",
  blobs_url: "https://api.github.com/repos/Deteri0n/Deteri0n/git/blobs{/sha}",
  git_tags_url: "https://api.github.com/repos/Deteri0n/Deteri0n/git/tags{/sha}",
  git_refs_url: "https://api.github.com/repos/Deteri0n/Deteri0n/git/refs{/sha}",
  trees_url: "https://api.github.com/repos/Deteri0n/Deteri0n/git/trees{/sha}",
  statuses_url: "https://api.github.com/repos/Deteri0n/Deteri0n/statuses/{sha}",
  languages_url: "https://api.github.com/repos/Deteri0n/Deteri0n/languages",
  stargazers_url: "https://api.github.com/repos/Deteri0n/Deteri0n/stargazers",
  contributors_url: "https://api.github.com/repos/Deteri0n/Deteri0n/contributors",
  subscribers_url: "https://api.github.com/repos/Deteri0n/Deteri0n/subscribers",
  subscription_url: "https://api.github.com/repos/Deteri0n/Deteri0n/subscription",
  commits_url: "https://api.github.com/repos/Deteri0n/Deteri0n/commits{/sha}",
  git_commits_url: "https://api.github.com/repos/Deteri0n/Deteri0n/git/commits{/sha}",
  comments_url: "https://api.github.com/repos/Deteri0n/Deteri0n/comments{/number}",
  issue_comment_url: "https://api.github.com/repos/Deteri0n/Deteri0n/issues/comments{/number}",
  contents_url: "https://api.github.com/repos/Deteri0n/Deteri0n/contents/{+path}",
  compare_url: "https://api.github.com/repos/Deteri0n/Deteri0n/compare/{base}...{head}",
  merges_url: "https://api.github.com/repos/Deteri0n/Deteri0n/merges",
  archive_url: "https://api.github.com/repos/Deteri0n/Deteri0n/{archive_format}{/ref}",
  downloads_url: "https://api.github.com/repos/Deteri0n/Deteri0n/downloads",
  issues_url: "https://api.github.com/repos/Deteri0n/Deteri0n/issues{/number}",
  pulls_url: "https://api.github.com/repos/Deteri0n/Deteri0n/pulls{/number}",
  milestones_url: "https://api.github.com/repos/Deteri0n/Deteri0n/milestones{/number}",
  notifications_url: "https://api.github.com/repos/Deteri0n/Deteri0n/notifications{?since,all,participating}",
  labels_url: "https://api.github.com/repos/Deteri0n/Deteri0n/labels{/name}",
  releases_url: "https://api.github.com/repos/Deteri0n/Deteri0n/releases{/id}",
  deployments_url: "https://api.github.com/repos/Deteri0n/Deteri0n/deployments",
  created_at: "2020-12-28T09:48:13Z",
  updated_at: "2020-12-30T22:25:36Z",
  pushed_at: "2020-12-30T22:25:34Z",
  git_url: "git://github.com/Deteri0n/Deteri0n.git",
  ssh_url: "git@github.com:Deteri0n/Deteri0n.git",
  clone_url: "https://github.com/Deteri0n/Deteri0n.git",
  svn_url: "https://github.com/Deteri0n/Deteri0n",
  homepage: null,
  size: 8,
  stargazers_count: 0,
  watchers_count: 0,
  language: null,
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: "main"
  }]

const Projects = (props) => {
  
  const [repos, setRepos] = useState([]);
  const [shownRepos, setShownRepos] = useState(repos);
  const [loading, setLoading] = useState(true);

  const orderRepos = (repos) => {
    return repos
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
  }

  useEffect(() => {
    
    axios.get("https://api.github.com/users/Deteri0n/repos")
      .then(res => {
        const orderedRepos = orderRepos(res.data);
        setRepos(orderedRepos);
        setShownRepos(orderedRepos)
        setLoading(false); 
      })
      .catch(err => console.log(err))
  }, []);

  
  const searchRepos = (term) => {
    
    if (term === "") {
      setShownRepos(repos);
    } else {
      const filteredRepos = repos.filter(repo => repo.name.toLowerCase().includes(term.toLowerCase()))
      setShownRepos(filteredRepos);
    }
  }

  return (
    <section className="min-h-screen pt-16 bg-ysosw dark:bg-ysosb shadow text-black dark:text-white">
      <div className="h-full mx-auto py-8 px-8">
        <SearchBar onSearch={searchRepos}/>
        {loading ? <Loading /> :
          <div className="flex items-center justify-between">
            <div className="w-full flex-wrap flex items-center">
              {/* {shownRepos.map((repo, index) => (<Repository key={index} data={repo}/>))} */}
              {mockData.map((repo, index) => (<Repository key={index} data={repo}/>))}
            </div>
          </div>
        }
      </div>
    </section>
  )
};

export default Projects;


