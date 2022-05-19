const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

class Index extends React.Component {
  render() {
    // Object Destructuring
    const { fruits } = this.props
    return (
      <DefaultLayout title="Index">
        <div>
          <nav>
            <a href="/fruits/new">Create a New Fruit</a>
          </nav>
          <h1>Fruits Index Page</h1>
          <ul>
            {
              fruits.map(fruit => {
                return (
                  <li key={fruit._id}>
                    <p>The <a href={`/fruits/${fruit._id}`}>{fruit.name}'s</a> color is {fruit.color}.</p>
                    <p>{fruit.readyToEat ? 'READY' : 'NOT READY'}</p>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = Index