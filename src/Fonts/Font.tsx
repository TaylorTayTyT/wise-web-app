interface FontInput {
    color?: string
    fontFamily: "Inter-Bold" | "Inter-Light"
    text: string
}

const Font = ({ color = 'unset', fontFamily, text }: FontInput) => (
    <p style={{
        color, fontFamily
    }}> {text} </p>
)

export default Font
