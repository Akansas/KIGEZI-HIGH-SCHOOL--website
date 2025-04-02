function toggleTabs(el) {
    const activeTab = document.querySelector(".active");
    const visibleContent = document.querySelector(".content-visible");
    const targetContent = document.getElementById(el.href.split("#")[1]);

    if (activeTab) activeTab.classList.remove("active");
    if (visibleContent) visibleContent.classList.remove("content-visible");

    el.classList.add("active");
    if (targetContent) targetContent.classList.add("content-visible");
}

document.addEventListener("click", (e) => {
    if (e.target.matches(".tab-item a")) {
        e.preventDefault();
        toggleTabs(e.target);
    }
});