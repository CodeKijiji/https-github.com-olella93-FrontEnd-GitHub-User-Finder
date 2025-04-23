GitHub User Finder

![App Screenshot](https://i.imgur.com/5bxw1aU.png) 

A React application that allows users to search for GitHub profiles and view their repositories.

Features

Search for any GitHub user by username
View user profile information (avatar, bio, followers, etc.)
See a list of the user's public repositories
Responsive design works on all devices
Loading states and error handling
Live Demo

Check out the deployed version:
[GitHub User Finder Live Demo](https://git-hub-user-finder-tau.vercel.app)

Technologies Used

React (with Hooks)
GitHub API
CSS Modules
Vercel (for deployment)

Installation
To run this project locally:
1. Clone the repository:
   git clone https://github.com/olella93/github-user-finder.git

2. Navigate to the project directory:
 cd github-user-finder

3. Install dependencies:
   npm install

 4.Start the development server:
  npm start

5. Open http://localhost:3000 in your browser.

Project Structure
src/
├── components/
│   ├── SearchUser.jsx    # Search input component
│   ├── UserCard.jsx      # User profile display
│   ├── RepoList.jsx      # Repository list display
│   ├── Loader.jsx        # Loading animation
│   └── Error.jsx         # Error message display
├── App.js                # Main application component
├── index.js              # React entry point
└── styles/
    ├── App.css           # Main styles
    └── index.css         # Base styles

Contributors

1. Richard Olella
2. Tjay Earl
3. Andrew Bariu
4. Wachira Elvis

License
This project is open source and available under the MIT License.

Future Improvements

- Add pagination for repositories
- Include more GitHub user statistics
- Implement dark/light mode toggle
- Add sorting/filtering options for repositories

Feedback
If you have any suggestions or find any issues, please open an issue on our GitHub repository.
