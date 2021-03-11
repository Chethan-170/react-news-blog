import { Fragment } from "react"
const container = {
    display : 'flex',
    flexDirection : "column",
    alignItems : "center",
    justifyContent : "center",
    height : "100%"
}
export const Loader = ()=>{
    return (
        <Fragment>
            <div style={container}>
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <span className="mt-3">please wait loading...</span>
            </div>
        </Fragment>
    )
}