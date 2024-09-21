# GitHub Activity CLI

## Description

GitHub Activity CLI is a command-line tool that fetches and displays the recent activities of a specified GitHub user. It uses the GitHub API to retrieve events and formats them for easy reading.

## Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd github-activity
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

To use the CLI, run the following command:

```sh
./index.js <GitHub-username>
```
Replace <GitHub-username> with the GitHub username you want to fetch activities for.

Example
```sh
./index.js octocat
```
Features
Fetches recent activities of a specified GitHub user.
Displays different types of events such as Push, Issues, Fork, Watch, and Create.