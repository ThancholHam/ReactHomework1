
function App() {

    

    return (

        <div style={{
            border: '1px solid',
            borderRadius:'10px',
            display: 'flex',
            justifycontent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
            

        }}>

            <div>
                <img src="https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.
           1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"></img>
            </div>

            <div style={{
                 display: 'flex',
                 justifycontent: 'center',
                 flexDirection: 'column',
                 alignItems: 'center',
                 backgroundColor: 'white',
                 
            }}>
                <div style = {{fontWeight : 'bold'}}>Julienne Moore</div>
            
                <div style = {{color : '#9ea2ae'}}>julianne.moore@company.com</div>
            </div>


            <div>
                <div  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textAlign:'center',
                    gap : '15px',
                    backgroundColor: 'white',

                }}>
                    
                        
                
                    <div>
                    <p style ={{fontWeight:'bold'}}>25</p>
                    <p style = {{color : '#9ea2ae'}}>Posts</p>
                    </div>

                    <div>
                    <p style ={{fontWeight:'bold'}}>350</p>
                    <p style = {{color : '#9ea2ae'}}>Following</p>
                    </div>

                    <div>
                    <p style ={{fontWeight:'bold'}}>1.5K</p>
                    <p style = {{color : '#9ea2ae'}}>Followers</p>
                    </div>
                    
                </div>

            </div>


        </div>

    )
}

ReactDOM.createRoot(document.querySelector('#root'))
    .render(<App />)