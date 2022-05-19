const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

module.exports = class New extends React.Component{
  render() {
    return(
    <>
    <DefaultLayout title="New Page">
      <h1>Creat Fruite Page</h1>
      <form action="/fruits" method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text"  id='name' name='name'/>
          <label htmlFor="color">Color:</label>
          <input type="text"  id='color' name='color'/>
          <label htmlFor="readyToEat">Ready to eat:</label>
          <input type="checkbox" name="readyToEat" id="readyToEat" />
          <input type="submit"  value="create fruit"/>
      </form>
      </DefaultLayout>
    </>
  )}
}

// <> is a react fragment, it's ment to style something with out any default style and atributes