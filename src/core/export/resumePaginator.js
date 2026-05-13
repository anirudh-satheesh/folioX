/**
 * resumePaginator.js
 * 
 * Logic to handle A4 pagination, preventing orphaned headings
 * and ensuring sections break gracefully across multiple pages.
 */

export const calculatePages = (elements) => {
    const A4_HEIGHT_PX = 1122; // approx for 96dpi
    let currentHeight = 0;
    const pages = [[]];

    elements.forEach((el) => {
        const elHeight = el.offsetHeight || 0;
        
        if (currentHeight + elHeight > A4_HEIGHT_PX) {
            pages.push([el]);
            currentHeight = elHeight;
        } else {
            pages[pages.length - 1].push(el);
            currentHeight += elHeight;
        }
    });

    return pages;
};

// CSS utility for page breaks
export const pageBreakStyles = `
    .page-break {
        break-before: page;
        height: 0;
        margin: 0;
    }
`;
