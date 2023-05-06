import { Link, NavLink, useSearchParams } from "react-router-dom"

export default function Home() {

    const MMMUTSTU = [
        { name: "Vaibhav", type: "Mistri", id: 1 },
        { name: "Anurag", type: "Mistri", id: 2 },
        { name: "Ayush", type: "MuthalBaaz", id: 3 },
        { name: "Aditya", type: "Topper", id: 4 },
        { name: "Shivang", type: "Mistri", id: 5 },
        { name: "Akash", type: "Mistri", id: 6 },
        { name: "Yash", type: "Mistri", id: 7 },
        { name: "Pritesh", type: "Mistri", id: 8 },
        { name: "MKT", type: "Mistri", id: 9 }
    ]


    
    const [params, Setparams] = useSearchParams();
    const TypeFilter = params.get("type");

    const stufilter = TypeFilter ? MMMUTSTU.filter(char => char.type.toLowerCase() === TypeFilter) : MMMUTSTU
    
     
    
    
    
    
    
    
    
    const stu = stufilter.map((data) => (
        <div className="StudentContainer" key={data.id}>
            <p>Name: {data.name}  Type:{data.type}</p>
        </div>
    ))

    function LogOut(){
        localStorage.clear();
    }

    return (
        <>
        <nav>
            <button onClick={()=> Setparams({type: "mistri"}) } className={`colorme ${TypeFilter==='mistri' ? 'Selected' : ""}`}>Mistri</button>
            <button onClick={()=> Setparams({type: "topper"})} className={`colorme ${TypeFilter==='topper' ? 'Selected' : ""}`}>Topper</button>
            <button onClick={()=> Setparams({type: "muthalbaaz"})} className={`colorme ${TypeFilter==='muthalbaaz' ? 'Selected' : ""}`}>MuthalBaaz</button>
            {
                TypeFilter ? (
                    <button onClick={()=> Setparams({})}>Show All</button>
                ) : null
            }
        </nav>
            <h1>Home</h1>
            <div className="HomeContainer">
                {stu}
            </div>

            <div className="LockMe" onClick={LogOut}>
                <NavLink to="/login">Log Out</NavLink>
            </div>
        </>
    )
}