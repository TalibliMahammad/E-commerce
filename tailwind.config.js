export const theme = {
    extend: {
        spacing: {
            '128': '32rem',
            '144': '36rem',
        },
        width: {
            'custom': '1000px',
        },
        height: {
            'custom': '50vh',
        },
         keyframes: {
            shake: {
                '0%, 100%': { transform: 'translateX(0)' },
                '20%, 60%': { transform: 'translateX(-5px)' },
                '40%, 80%': { transform: 'translateX(5px)' },
            },
        },
        animation: {
            shake: 'shake 0.5s ease-in-out',
        },
    },
};
export const plugins = [];

