import "../globals.css";


export default function Navbar ()
{
    
    return(
       
        <div id="navbar">
        <h3 className="logo">amazon.in</h3>
       <div id="subnav">
            <a className="ab" href="#">HOME</a>
            <a className="ab"href="#">MY CART</a>
            <a className="ab"href="#">CONTACT US</a>
            <a className="ab"href="#">RETURN </a>
            <input placeholder="Search amazon.in" />
            <button>Search...</button>
        </div>
    </div>
    )
}