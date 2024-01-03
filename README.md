## Contentful CMS

- Contentful CMS is a website where I publish the source codes of the projects I created during my learning process in React. 
- Data comes from the Contentful website and the Contentful API is used in the project.
- When the project is deployed, a web hook is used to rebuild the deployed site, aiming to keep the content up to date.
- This project has been a valuable contribution to my learning journey with React.

### Technologies Used

- HTML (JSX)
- CSS
- React (Vite)
- Contentful API

### Installation

1. Clone the repository:
   `git clone https://github.com/akabaytar/contentful-cms.git`
2. Navigate to the project directory:
   `cd contentful-cms`
3. Install dependencies:
   `npm install`
4. Create an account on [Contentful's website](https://www.contentful.com/) to obtain your API key.
5. Create a `.env` file.
6. Create two variables, `VITE_SPACE_ID` and `VITE_API_KEY`.
7. Copy your Space ID to the `VITE_SPACE_ID` and your Access Token (API key) to the `VITE_API_KEY` variable.
8. Run the project locally:
   `npm run dev`
9. Visit localhost:
   `http://localhost:5173/`

### Screenshot

![Screenshot](/public/screenshot.png)

### License

This project is licensed under the MIT License.

### Contact

For any inquiries or feedback, feel free to contact me at [here](mailto:contact@burakbilgili.co.uk).
