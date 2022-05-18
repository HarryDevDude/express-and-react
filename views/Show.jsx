const React = require('react')

class Show extends React.Component {
    render() {
        console.log(this.props.fruit)
        const fruit = this.props.fruit
        return (
            <div>
                <h1>SHOW PAGE</h1>
                <p>The {fruit.name}'s color is {fruit.color}</p>
                <p>
                  {fruit.readyToEat ? "it's ready to eat" : "It's not ready to eat... Can't touch this"}
                  </p>
                  <button><a href={'/fruits'}>Back</a></button>
            </div>
        )
    }
}

module.exports = Show