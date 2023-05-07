const $ = document

const emailOptionBtn = $.querySelector('.email-option')
const phoneOptionBtn = $.querySelector('.phone-option')
const welcomePage = $.querySelector('.sign-in-options')

// email registeration variables

const emailRegPage = $.querySelector('.email-reg-page')
const emailInput = $.querySelector('.email-input')
const emailSubmitBtn = $.querySelector('.email-submit-btn')
const mainPageBtn = $.querySelectorAll('.main-page-btn')
const emailRegSecondPage = $.querySelector('.email-reg-page-two')
const emailFirstPageBtn = $.querySelector('.email-first-page-btn')
const submitEmaileCode = $.querySelector('.submit-emaile-code')
const eamilValidateCodeInputs = $.querySelectorAll('.valide-email-code-input')

// phone registeration variables

const phoneSignInPage = $.querySelector('.phone-sign-in-page')
const phoneNumberInput = $.querySelector('.phone-number-input')
const submitPhoneNumber = $.querySelector('.submit-phone-number')
const phoneSignInPageTwo  = $.querySelector('.phone-sign-in-page-two')
const phoneFirstPageBtn  = $.querySelector('.phone-first-page-btn')
const submitPhoneCode  = $.querySelector('.submit-phone-code')
const phoneValidationCodeInputs = $.querySelectorAll('.phone-validate-code')

// last sign up page confirmation 

const lastPage = $.querySelector('.last-page')
const usernameInput = $.querySelector('.username-input')
const passwordTwo = $.querySelector('#password-two')
const eyeBtn = $.querySelector('.eye-btn')
const eyeBtnTwo = $.querySelector('.eye-btn-two')
const passwordThree = $.querySelector('#password-three')
const finishRegisteration = $.querySelector('.finish-registeration')

let passwordCheck = false
let repeatPasswordCheck = false

// pagination variables 

const pagintation = $.querySelectorAll('.pagintation')
const pagintationBtns = $.querySelectorAll('.pagintation-btn')

const hidePages = () => {
    welcomePage.classList.add('hidden')
    emailRegPage.classList.add('hidden')
    emailRegSecondPage.classList.add('hidden')
    phoneSignInPage.classList.add('hidden')
    phoneSignInPageTwo.classList.add('hidden')
    lastPage.classList.add('hidden')
}

const displayPage = (page) => {
    if (page.className.includes('sign-in-options')){
        hidePages()
        pagintation.forEach( (item) => {
            item.classList.add('hidden')
        })
        page.classList.remove('hidden')
    } else {
        hidePages()
        pagintation.forEach( (item) => {
            item.classList.remove('hidden')
        })
        page.classList.remove('hidden')
    }
}

const activePageBtn = (button) => {
    pagintationBtns.forEach((btn) => {
        btn.classList.remove('bg-blue-300')
        btn.classList.remove('ring-2')
        btn.classList.remove('text-slate-50')
        btn.classList.add('bg-slate-50')
    })
    button.classList.remove('bg-slate-50')
    button.classList.add('bg-blue-300')
    button.classList.add('ring-2')
    button.classList.add('text-slate-50')
}

const inputsUxDevelopment = (input) => {
    input.addEventListener('keyup' , (e) => {
        if (!isNaN(input.value) && +input.value != 0){
            e.target.nextElementSibling.focus()
            e.target.nextElementSibling.select()
        }  else if (e.keyCode === 8){
            e.target.previousElementSibling.focus()
            e.target.previousElementSibling.select()
        }
    })
}

const securityBtnFn = (status , e , input) => {
    if (status){
        //show password
        e.target.classList.remove('fa-sharp')
        e.target.classList.remove('fa-regular')
        e.target.classList.remove('fa-eye-slash')
        e.target.classList.add('fa-regular')
        e.target.classList.add('fa-eye')
        input.type = 'text'
    } else {
        //hide password
        e.target.classList.remove('fa-regular')
        e.target.classList.remove('fa-eye')
        e.target.classList.add('fa-sharp')
        e.target.classList.add('fa-regular')
        e.target.classList.add('fa-eye-slash')
        input.type = 'password'
    }
}

mainPageBtn.forEach((btn) => {
    btn.addEventListener('click' , () => {
        displayPage(welcomePage)
    })
})

emailOptionBtn.addEventListener('click' , (e) => {
    e.preventDefault()
    displayPage(emailRegPage)
    activePageBtn(pagintationBtns[0])
    emailInput.focus()
    emailInput.select()
})

emailFirstPageBtn.addEventListener('click' , () => {
    displayPage(emailRegPage)
    activePageBtn(pagintationBtns[0])
    emailInput.focus()
    emailInput.select()
})

phoneOptionBtn.addEventListener('click' , (e) => {
    e.preventDefault()
    displayPage(phoneSignInPage)
    activePageBtn(pagintationBtns[0])
    phoneNumberInput.focus()
    phoneNumberInput.select()
})

phoneFirstPageBtn.addEventListener('click' , () => {
    displayPage(phoneSignInPage)
    activePageBtn(pagintationBtns[0])
    phoneNumberInput.focus()
    phoneNumberInput.select()
})

emailSubmitBtn.addEventListener('click' , (e) => {
    e.preventDefault()
    displayPage(emailRegSecondPage)
    eamilValidateCodeInputs[0].focus()
    eamilValidateCodeInputs[0].select()
    activePageBtn(pagintationBtns[1])
})

submitPhoneNumber.addEventListener('click' , (e) => {
    e.preventDefault()
    displayPage(phoneSignInPageTwo)
    activePageBtn(pagintationBtns[1])
    phoneValidationCodeInputs[0].focus()
    phoneValidationCodeInputs[0].select()
})

submitEmaileCode.addEventListener('click' , (e) => {
    e.preventDefault()
    displayPage(lastPage)
    activePageBtn(pagintationBtns[2])
    usernameInput.focus()
    usernameInput.select()
})

submitPhoneCode.addEventListener('click' , (e) => {
    e.preventDefault()
    displayPage(lastPage)
    activePageBtn(pagintationBtns[2])
    usernameInput.focus()
    usernameInput.select()
})

eamilValidateCodeInputs.forEach((input) => {
    inputsUxDevelopment(input)
})

phoneValidationCodeInputs.forEach((input) => {
    inputsUxDevelopment(input)
})

eyeBtn.addEventListener('click' , (e) => {
    passwordCheck = !passwordCheck
    securityBtnFn(passwordCheck , e , passwordTwo)
})

eyeBtnTwo.addEventListener('click' , (e) => {
    repeatPasswordCheck = !repeatPasswordCheck
    securityBtnFn(repeatPasswordCheck , e , passwordThree)
})
