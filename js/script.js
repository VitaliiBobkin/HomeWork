function showUser() {
    // 1.(string)-user can change it
    let userName = `Denzel`

    // 2.(number) use let, it can be changed by user
    let age = 25;

    // 3.  (boolean) true or false, it can be changed
    let isVerified = true;

    // 4. (Date or string) - it can be changed, but string is more convenient (ISO)
    const registrationDate = new Date("2025-12-17T03:24:00");

    // 5. (bigInt) - a lot of numbers need more than 32 bit
    const cardNumber = 12345678123456781234n;

    // 6. (null or string) it can be empty or have a value, and values can be changed
    let promoCode = null;

    // 7.(undefined) - it can be empty or have value and initialized later
    let backupName;

    // 8. (number) - bonuses can be more or less, and values can be changed
    let bonusPoints = 1500;

    console.log(`User Info:
        1. Name : ${userName}
        2. Age : ${age}
        3. Verified : ${isVerified}
        4. Registration Date : ${registrationDate.toISOString()}
        5. Card Number : ${cardNumber}
        6. Promo Code : ${promoCode}
        7. Backup Name : ${backupName}
        8. Bonus Points: ${bonusPoints}`
    );
}

showUser();
