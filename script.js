function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function showSubsection(subsectionId) {
    const subsections = document.querySelectorAll('.subsection');
    subsections.forEach(subsection => {
        subsection.style.display = 'none';
    });
    document.getElementById(subsectionId).style.display = 'block';
}
