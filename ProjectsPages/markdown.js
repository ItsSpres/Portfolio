document.addEventListener("DOMContentLoaded", function() {
    // Markdown content
    var markdownContent = `
        **Project Description:** This is a brief description of the project.

        *Features:* 
        - Feature 1
        - Feature 2
        - Feature 3

        ![Project Image](project_image.jpg)
    `;

    // Convert Markdown to HTML
    var converter = new showdown.Converter();
    var htmlContent = converter.makeHtml(markdownContent);

    // Render HTML content
    var markdownContainer = document.getElementById('markdown-content');
    markdownContainer.innerHTML = htmlContent;
});
