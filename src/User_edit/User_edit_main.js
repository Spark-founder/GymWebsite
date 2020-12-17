import React,{useState} from 'react'
import './Use_edit_main.css'
import Edit from '../ServerSide/Edit'
import UseWindowSize from '../useWindowsize'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Member from './Member/Member'
import News_edit from '../ServerSide/News_edit';
function User_edit_main() {
    const [option, setOption]=useState('Members_C')
    const OPTIONS=[['Members','Members_C'],['Edit','Edit_C'],['News','News_c']]
    const foo =(o)=>{
        if (o==='Members_C'){
            return <Member/>
        }
        else if (o==='Edit_C'){
            return <Edit/>
        }
        else if (o==='News_c'){
            return <News_edit/>
        }
        
    }
    var size = UseWindowSize().height;
    var size_px = size-55 + 'px'
    return (
        <div>
            <nav className="navbar navbar-default navbar_css_edit">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/"><img className="img-responsive edit_css_logo" src="./Resources/CROSSFIT_LAND_LOGO-2-removebg.png" alt="#"></img></a>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="active"><a href="/">Home</a></li>
                    </ul>
                </div>
            </nav>
            <div className='main_css'>
                <div className="Option_css navbar_css_edit" style={{ height: size_px }}>
                    {OPTIONS.map((v)=>
                        <div className="Option_css_option" onClick={()=>setOption(v[1])}>
                        {option===v[1]?
                            <div className="option_active">
                            <h4 style={{'margin':'auto'}}>{v[0]}</h4>
                                <ArrowForwardIosIcon style={{'fontSize':50},{'margin':  'auto 0 auto 0'}}/>
                            </div>
                            :<h4 style={{'margin':'auto'}}>{v[0]}</h4>}
                    </div>
                    )}
                </div>
                <div className="Main_css" style={{'height': size_px}}>
                    {foo(option)}
                </div>
            </div>
        </div>
    )
}

export default User_edit_main
