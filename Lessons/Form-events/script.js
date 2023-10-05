console.log('it works!')
const form = document.getElementById('form')

const handleSubmit = function(event) {

    // stops the reload!
    event.preventDefault()
  
    console.log('submitted')
  }


const handleChange = function(event) {
    // grab the name of the event's target for use in our string
    console.log(`${event.target.name} has been changed!`)
  }
  
  // using .forEach on the NodeList made by our querySelector to add the listener
  // to all inputs inside the form
  document.querySelectorAll('#form input').forEach(input =>
    input.addEventListener('change', handleChange))
    
    form.addEventListener('submit', handleSubmit)