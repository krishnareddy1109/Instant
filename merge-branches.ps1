# Check if we're on the 'naveen' branch
$current_branch = git rev-parse --abbrev-ref HEAD
if ($current_branch -ne "naveen") {
    Write-Host "Error: You are not on the 'naveen' branch. Please switch to 'naveen' first."
    exit 1
}

# Fetch latest changes
git fetch origin

# Switch to 'master' branch
Write-Host "Switching to master branch..."
git checkout master

# Pull the latest changes from master
Write-Host "Pulling latest changes from master..."
git pull origin master

# Merge 'naveen' into 'master'
Write-Host "Merging 'naveen' into 'master'..."
git merge naveen

# Push changes to 'master' branch
Write-Host "Pushing changes to master branch..."
git push origin master

Write-Host "Merge complete! Your changes from 'naveen' have been pushed to 'master'."
