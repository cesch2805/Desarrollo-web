const formatDate = date =>{
    const Stringdate = date.split(" ")
    const dateObj = new Date(Stringdate[0], Stringdate[1], Stringdate[2])
    return dateObj
}

const DateToString = birthdays =>{
    birthdays.forEach((birthday) =>{
        birthday.birthday = birthday.birthday.toDateString()
    })
}

module.exports = {
    formatDate,
    DateToString
}