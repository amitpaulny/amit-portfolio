document.addEventListener("DOMContentLoaded", () => {

    // PAGE TRANSITION EFFECT

    document.body.classList.add("loaded");

    // SMOOTH LINK TRANSITION

    const links = document.querySelectorAll("a");

    links.forEach(link => {

        if (
            link.hostname === window.location.hostname &&
            !link.href.includes("#")
        ) {

            link.addEventListener("click", function (e) {

                e.preventDefault();

                const destination = this.href;

                document.body.style.opacity = 0;

                document.body.style.transform = "translateY(20px)";

                setTimeout(() => {
                    window.location.href = destination;
                }, 300);
            });
        }
    });

});