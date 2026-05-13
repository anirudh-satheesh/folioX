/**
 * htmlSerializer.js
 * 
 * Responsible for taking the profile data and the active template
 * and producing a standalone, clean HTML string suitable for 
 * headless PDF generation or static site exports.
 */

export const serializeToHTML = (profileData, templateComponent, themeVars) => {
    // TODO: Final implementation will use profileData and templateComponent to render actual markup
    // 1. Generate CSS from themeVars
    const cssVars = Object.entries(themeVars || {})
        .map(([key, value]) => `${key}: ${value};`)
        .join('\n');

    const styles = `
        :root {
            ${cssVars}
        }
        @page {
            size: A4;
            margin: 0;
        }
        body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
        }
    `;

    // 2. Wrap the template in a static shell
    // Note: In the future, we might use renderToStaticMarkup from react-dom/server
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <style>${styles}</style>
        </head>
        <body>
            <div id="export-root">
                <!-- Template Markup goes here -->
            </div>
        </body>
        </html>
    `;
};
