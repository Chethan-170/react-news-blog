import { Link } from 'react-router-dom';
export default function show404(props){
    console.log(props);
    return (
        <div className="text-center">
            <h1>404 Error..!</h1>
            <p>Not to worry. Head back to <Link to="/">Homepage</Link></p>
        </div>
    )
}