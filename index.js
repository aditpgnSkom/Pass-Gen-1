let passLength = document.getElementById("passLength")
let pass = document.getElementById("pass")
let saveBtn = document.getElementById("saveBtn");

function generatePass(len)  {
  const lowerAlphabet = "qwertyuiopasdfghjklzxcvbnm"
  const upperAlphabet = "QWERTYUIOPASDFGHJKLZXCVBNM"
  const numeric = "0123456789"
  const symbol = "@#&*"

  const data = lowerAlphabet + upperAlphabet + numeric + symbol;
  let generator = ''
  for (let index = 0; index < len; index++) {
    generator += data[~~(Math.random() * data.length)]
  }
  return generator
}

const getPass = () => {
  const newPass = generatePass(passLength.value)
  pass.value = newPass
}

const savePass = () => {
  document.title = pass.value
  saveBtn.setAttribute('href', 'data:text/plain;charset=utf-8,', +encodeURIComponent)
}