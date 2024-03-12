declare namespace JSX {
    interface IntrinsicElements {
        'swiper-container': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
            navigation
            speed: string;
            loop: string;
            // Add more properties
        };
        'swiper-slide': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
            // Add more properties
        };
    }
}