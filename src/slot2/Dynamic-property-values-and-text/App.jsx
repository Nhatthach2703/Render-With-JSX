
const enable = false
const text = "My Button"
const size = 50
const placeholder = "Please enter text here"
const App =()=>{
    return(
        <section>
            <button disabled={!enable} >{text}</button>
            <input placeholder={placeholder} size={50}></input>
        </section>
    )
}
export default App