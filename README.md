# Netflix-gpt

- Create react app
- configure tailwind css
- Routing of App
- Login Form
- Sign up Form
- Form Validation
- useRef Hook
- firebase integration
- SignUp and SignIn Logic from firebase (API)
- use redux to store user data (npm i -D @reduxjs/toolkit) && (npm i react-redux)
- whenever there is state change use authChange API
- BugFix : if the user is not logged in Redirect / browse to Login Page and vice-versa
- Unsubcribed to the onAUthStateChanged callback
- Add hardcoded value to constants file
- Resgiter TMDB API && Create an app & get access token
- GET data from TMBD now playing movies list API
- custom hook for Now Playing Movies
- Update store with movies data
- Planning for Main container && Secondary Container
- Fetch Data for Trailer Video
- custor hook for Trailer Video
- Update store with Trailer Video
- Embedded the Youtube video and make it autoplay and mute
- Tailwind css for videobackground
- Seconadry container
- - MovieList and MovieCard
- For MovieList get title and movies as props from secondary container
- For MovieCard Get poster_path as prop 
- In MovieList use Movie list to iterate all over the movies obejct 

# Features

- Login Page
  - Sign In / Sign Up
  - redirect to browse page
- Browser(After Authentication)
  - Header
  - Main Movie
    - Tailer in Backgroud
    - Title & Discription
    - MovieSuggestions
    - MovieList
- Netflix-Gpt
  - search bar
  - Movie suggestions
