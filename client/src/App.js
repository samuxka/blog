import './App.css';

function App() {
  return (
    <main>
      <header>
        <a href="#" className="logo">MyBlog</a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>

        <div className="post">
          <div className="image">
            <img src="https://techcrunch.com/wp-content/uploads/2022/12/lawnmower-Large.jpeg?w=1390&crop=1"></img>
          </div>
          <div className="texts">
            <h2>EcoFlow teases full-house battery backup coming later this year</h2>
            <p className="info">
              <a className="author">Samuel Oliveira</a>
              <time>2024-02-08 18:06</time>
            </p>
            <p className="summary">Today at its special launch event, home backup power giant EcoFlow launched a flurry of new products, including a “Whole-Home Backup Power Solution.</p>
          </div>
        </div>
    </main>
  );
}

export default App;
