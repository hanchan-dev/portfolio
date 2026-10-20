import {flags} from "./languages.js"

// File PDF ada di public/cv/{code}-cv-handika-chandra-pratama.pdf.
// Setelah menambahkan file baru, ubah `available` menjadi true.
const fileName = (code) => `${code}-cv-handika-chandra-pratama.pdf`

export const cvOptions = [
    {code: "en", label: "English", flag: flags.eng, available: true},
    {code: "id", label: "Bahasa Indonesia", flag: flags.idn, available: true},
    {code: "jp", label: "日本語 (Japanese)", flag: flags.jpn, available: true},
].map((cv) => ({
    ...cv,
    fileName: fileName(cv.code),
    href: `${import.meta.env.BASE_URL}cv/${fileName(cv.code)}`,
}))
