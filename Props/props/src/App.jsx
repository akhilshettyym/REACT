import Card from "./components/card"

function App() {
  return (
    <div className='parent'>
      <Card song="Is There Someone Else" artist="The Weeknd" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdJShOV9W_kg61SSCqSXhCDN2acAIBZ_BuSw&s" />
      <Card song="Superhero" artist="Metro Boomin" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdro3V7S9cJwAIAAJcMo2IUfQuRIXUmEB_3w&s" />
      <Card song="After Hours" artist="The Weeknd" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQgiX0FcuWwZzn85SlbrtQnwnMgAdgWfm7A&s" />
    </div>
  )
}

export default App