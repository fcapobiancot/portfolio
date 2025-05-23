(function () {
    const likeState = {};
    const cards = document.querySelectorAll('.blog-card');

    cards.forEach((card, idx) => {
        const likeCount = card.querySelector('.blog-card__like-count');
        likeCount.textContent = 10;
        likeState[idx] = false;

        const preview = card.querySelector('.blog-card__preview');
        const fullText = preview.getAttribute('data-fulltext');
        preview.textContent = fullText;

        const likeBtn = card.querySelector('.blog-card__like-btn');
        likeBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            likeState[idx] = !likeState[idx];
            likeBtn.classList.toggle('blog-card__like-btn--active', likeState[idx]);
            const icon = likeBtn.querySelector('.fa');
            if (likeState[idx]) {
                likeCount.textContent = parseInt(likeCount.textContent) + 1;
                icon.classList.remove('fa-heart-o');
                icon.classList.add('fa-heart');
            } else {
                likeCount.textContent = parseInt(likeCount.textContent) - 1;
                icon.classList.remove('fa-heart');
                icon.classList.add('fa-heart-o');
            }
        });

        likeBtn.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                likeBtn.click();
            }
        });

        card.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                if (document.activeElement === card) {
                    e.preventDefault();
                    const url = card.getAttribute('data-url');
                    if (url) window.open(url, '_blank');
                }
            }
        });
    });
})();
