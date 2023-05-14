

interface props{
    day: Date,

    
}


const DayComponent = ({day}:props) => {
   
    return (
        <div style={{
            display: "flex", 
            flexDirection: "column",
           
        }}>
            <span style={{
            textAlign: "center", 
            backgroundColor: "lightblue",  
            borderRadius: "5px",

            }}>
            {day.getFullYear() != 1899 ? day.getDate(): ""}</span>
            
        </div>
      
      
        
    );
};

export default DayComponent;