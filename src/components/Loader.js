import { Fragment } from "react"

export const Loader = ()=>{
    return (
        <Fragment>
            <div className="d-flex justify-content-center mt-5">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            <span className="d-flex justify-content-center mt-3" style={{}}>please wait loading...</span>
        </Fragment>
    )
}