const concat = (str1, str2) => `${str1} - ${str2}`

const check_long_str = string => {
    if (string.length > 10) {
        return true
    }
    else {
        return false
    }
}

if (check_long_str(concat('Happy', 'Hacking'))) {
    console.log('LONG STRING')
} else {
    console.log('SHORT STRING')
}