/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_Strong_Cyan: "hsl(171, 66%, 44%)",
                c_Light_Blue: "hsl(233, 100%, 69%)",
                c_Dark_Grayish_Blue: "hsl(210, 10%, 33%)",
                c_Grayish_Blue: "hsl(201, 11%, 66%)",
            },
            fontFamily: {
                body:["Bai Jamjuree", "sans-serif"]
            }
        },
    },
    plugins: [],
}

