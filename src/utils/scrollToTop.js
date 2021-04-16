export default function scrollToTop() {
    const timelineComponent = document.getElementById('timeline');
    timelineComponent.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}
