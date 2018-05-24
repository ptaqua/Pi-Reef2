const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

function TestATO () {
  nightmare
    .goto('http://localhost:8080/')
    .viewport(1100, 650)
    .wait(500)
    .type('input#reef-pi-user', 'reef-pi')
    .wait(500)
    .type('input#reef-pi-pass', 'reef-pi')
    .wait(500)
    .click('input#btnSaveCreds')
    .wait(500)

    .click('li#react-tabs-10')
    .wait(1500)
    .click('input#ato_enable')
    .wait(500)
    .click('input#ato_control')
    .wait(500)
    .insert('input#check_interval')
    .wait(500)
    .type('input#check_interval', '60')
    .wait(500)
    .insert('input#sensor_pin')
    .wait(500)
    .type('input#sensor_pin', '12')
    .wait(500)
    .click('span#ato-pump-Light')
    .wait(1000)
    .click('input#updateATO')

    .wait(2000)
    .evaluate(function () { return 'ato' })
    .end()
      .then(function (result) {
        console.log(result)
      })
      .catch(function (error) {
        console.error('Error:', error)
      })
}

TestATO()
