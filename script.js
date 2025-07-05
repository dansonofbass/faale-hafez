document.addEventListener('DOMContentLoaded', () => {
    const getFalButton = document.getElementById('getFalButton');
    const getFalAgainButton = document.getElementById('getFalAgainButton');
    const falImage = document.getElementById('falImage');
    const falTitle = document.getElementById('falTitle');
    const mainHeading = document.getElementById('mainHeading');
    const body = document.body;
    const bgOverlay1 = document.getElementById('bgOverlay1');
    const bgOverlay2 = document.getElementById('bgOverlay2');
    const introAnimated = document.getElementById('introAnimated');

    // پس‌زمینه اولیه
    function setBg1() {
        body.style.backgroundImage = "url('src/1.webp')";
        body.classList.remove('bg-2');
    }
    function setBg2() {
        body.style.backgroundImage = "url('src/2.webp')";
        body.classList.add('bg-2');
    }

    // حالت اولیه
    function resetFal() {
        if (mainHeading) mainHeading.classList.remove('hidden');
        falTitle.textContent = 'با خلوص , نیت کنید';
        falImage.style.display = 'none';
        falImage.classList.remove('visible');
        falImage.src = '';
        getFalButton.style.display = 'inline-block';
        getFalAgainButton.style.display = 'none';
        setBg1();
        if (introAnimated) introAnimated.style.display = 'block';
    }

    // تابع برای گرفتن عدد تصادفی بین 1 تا 150
    function getRandomFalNumber() {
        return Math.floor(Math.random() * 150) + 1;
    }

    // تابع برای نمایش فال
    function showFal() {
        if (mainHeading) mainHeading.classList.add('hidden');
        const falNumber = getRandomFalNumber();
        const falUrl = `https://www.beytoote.com/images/Hafez/${falNumber}.gif`;
        falImage.classList.remove('visible');
        falImage.style.display = 'block';
        falImage.src = '';
        // متن عنوان
        falTitle.textContent = 'حضرت حافظ فرموده‌اند:';
        // دکمه‌ها
        getFalButton.style.display = 'none';
        getFalAgainButton.style.display = 'inline-block';
        // تغییر پس‌زمینه به صورت smooth به 2.webp
        setTimeout(() => {
            setBg2();
        }, 100);
        if (introAnimated) introAnimated.style.display = 'none';
        // بارگذاری عکس فال با fade-in
        const img = new window.Image();
        img.onload = function() {
            falImage.src = falUrl;
            setTimeout(() => {
                falImage.classList.add('visible');
            }, 50);
        };
        img.onerror = function() {
            falImage.alt = 'خطا در بارگذاری تصویر فال.';
            falImage.classList.add('visible');
        };
        img.src = falUrl;
    }

    getFalButton.addEventListener('click', showFal);
    getFalAgainButton.addEventListener('click', resetFal);

    // حالت اولیه هنگام بارگذاری صفحه
    resetFal();
});
