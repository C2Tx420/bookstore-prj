Bookstore challenge!

GIT:
1. Create a New Branch in Git: `git branch [new_branch] or git checkout -b [new_branch]`
2. Switch Branches in Git: `git checkout [branch_name]`
3. Push Changes to a Remote Repository: 
    `git add`
    `git commit -m [commit name]`
    `git push`
4. Script to Move Files to a New Branch:
    #!/bin/bash
    new_branch="$1"
    shift
    if git show-branch -a --list | grep -q "$new_branch"; then
    echo "Branch '$new_branch' already exists."
    else
    git checkout -b "$new_branch"
    fi
    for file in "$@"; do
    if [ -f "$file" ]; then
        # Stage for commit
        git mv "$file" "$new_branch/$file"
        echo "Moved '$file' to '$new_branch/$file'"
    else
        echo "File '$file' does not exist."
    fi
5. Script to Clone and Checkout a Branch:
    #!/bin/bash
    repo_url="$1"
    branch="$2"
    if [ -z "$repo_url" ]; then
    echo "Error: Repository URL is not provided."
    echo "Usage: clone_and_checkout.sh <repository url> <branch>"
    exit 1
    fi
    if [ -z "$branch" ]; then
    echo "Error: Branch name is not provided."
    echo "Usage: clone_and_checkout.sh <repository url> <branch>"
    exit 1
    fi
    git clone -b "$branch" "$repo_url"
    if [ $? -eq 0 ]; then
    echo "Successfully cloned repository and checked out branch '$branch'."
    fi
6. Script to Compare Branches:
    #!/bin/bash

    branch1="$1"
    branch2="$2"
    if [ -z "$branch1" ] || [ -z "$branch2" ]; then
    echo "Error: Please provide two branch names."
    echo "Usage: compare_branches.sh <branch1> <branch2>"
    exit 1
    fi
    git diff --name-status "$branch1" "$branch2"
    if [ $? -eq 0 ]; then
    echo "No differences found between $branch1 and $branch2."
    fi
7. Script to List Commits by a User:
    #!/bin/bash
    username="$1"
    if [ -z "$username" ]; then
    echo "Error: Please provide a username."
    echo "Usage: list_user_commits.sh <username>"
    exit 1
    fi
    git log --author="$username" --pretty=format:"%H %an %ad %s"
8. Resolve Merge Conflicts:
    `git merge [branch_name]`
    `check and solve conflict in code editor`
    `git merge --continue`
9. Script Using a Basic Variable:
    #!/bin/bash
    name=$1
    if [ -z "$name" ]; then
    echo "Error: Please provide a name."
    echo "Usage: test.sh <name>"
    exit 1
    fi
    echo "variable is $name"