#!/usr/bin/env bash

# Bash Snippet! SHOW ME ONLY DIRECTORIES (one level deep)

# Like anything in Linux, there are several ways to accomplish the same task.
# Listing only the directories is no different:

ls -d */
ls -l | grep '^d'
find . -maxdepth 1 -type d
echo */
tree -d -L 1
echo */ | tr ' ' '\12' | sort # My personal fave

