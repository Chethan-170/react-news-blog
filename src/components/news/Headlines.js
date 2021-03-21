import { containerStyle } from '../style';
import { connect } from 'react-redux';

const HeadLines = (props)=>{
    console.log("headlines",props);
    return(
        <div className="" style={containerStyle}>
            <h2>Headlines here goes..</h2>
        </div>
    )
}
function mapStateToProps(state){
    const { headLines } = state;
    return { headlines : headLines }
}
export default connect(mapStateToProps)(HeadLines);