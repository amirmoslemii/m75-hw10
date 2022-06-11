new Promise(function (resolve, reject) {
    setTimeout(() => {
        throw new Error("Whoops!")
    }, 1000);
}).catch(alert);

// به دو دلیل اجرا نمیشه دلیل اول این که بعد دستور تروت دیگه بعدی ها اجرا نمیشن دلیل دوم ریجکت برای کچ صدا نشده 