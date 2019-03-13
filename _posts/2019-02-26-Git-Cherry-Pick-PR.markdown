---
layout: post
title:  "Git - Pull Request a Cherry Pick to a different branch in same repository"
date:   2019-02-18 12:10:42 +0530
categories: Github
excerpt : Git makes life of developer super productive. If we have to maintain two branches and sometimes we need the same code from one branch to be put in another branch, cherry-pick is your goto command.
---

We use github extensively at work. Recently I encountered a scenario that taught me how robust github is and so, this post.

Our github settings are such that, we always need to create a Pull Request to be able to merge a commit. The obvious reason being, so that we are forced to get our commits reviewed. Our git workflow looks something like this

1. `git pull origin master` gets me the latest code from master (checked out master branch : because we do all dev work on master)
2. `git checkout -b feature/blogpost` creates a branch extending the master branch
3. `git add filname.js` adds the file to be committed
4. `git commit -m "blog posts ftw` committing the changes
5. `git pull --rebase origin master` Rebase with master before we commit
6. `git push origin feature/blogpost` helps push the commits to the github repository which we than create a pull request

After all the testing is done and during the time of release to customers, we create a new branch out of master branch, let's call it `Feature2019`.

Sometimes, there can be a situation where we may need to fix a critical defect post our branch cut. This means that we need to merge our code fixes to both the `master` and `Feature2019` branch. To be able to merge our fixes to both the branches, we use the below workflow

First, we fix the issue in our master branch, because that is where all the latest code should reside. We also then need to move our code changes in the `Feature2019` branch. The best and obvious choice is using the git's `cherry-pick` command. However, due to the compulsion of always creating a pull-request, we need to take care certain steps.

1. `git branch -r` this will help find if you are able to fetch the newly created branch
2. `git fetch` so that you have latest branch details on your local
3. `git checkout Feature2019` checkout the branch that you want to cherr-pick your changes to
4. `git pull` to make sure you have latest code
5. `git checkout -b cp-issue` where cp-issue is the branch created from Feature2019. This is an important step. You need to be checked in to the Feature2019 branch before you branch out to a new branch.
6. `git cherry-pick 6b4g55s6f45s6d5f4g56` we cherry-pick the commit id which we want to merge to the new branch.
7. `git push origin cp-issue` This will push the commit to github

Now, go to your repository link on github and open a pull request. You will have to specifiy Feature2019 as the branch that you want your new commits to merge to.

Branching out from the branch that you want to merge to was the most important step I had to spend time figuring out. The best part is that, cherr-picking saves you a lot of time.

___
<br />

#### git branch -r 
This tracks all the remote branches in your repository.

#### What is `git pull` and `git fetch`?
Found this [SO article which clearly explains both the git commands](https://stackoverflow.com/questions/292357/what-is-the-difference-between-git-pull-and-git-fetch)

> `git pull` does a `git fetch` followed by a `git merge`.
A `git pull` is what you would do to bring a local branch up-to date with its remote version, while also updating your other remote tracking branches.

> You can do a `git fetch` at any time to update your remote-tracking branches under `refs/remotes/<remote>/`.

#### git cherry-pick
The idea of cherry-pick is to choose a commit from one branch and apply to other branch. A common use case of cherry-pick is to forward or back-port a commit from a development branch to say a release branch. In our case, it was to bring a commit from `master` branch to `Feature2019` branch.


#### git checkout -b &lt;branchName&gt;
The command is actually short for *Create a branch* and *checkout that branch*. In short
1. git branch &lt;branchName&gt;
2. git checkout &lt;branchName&gt;