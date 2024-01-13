import { memo } from "react";


const Input = ({type="text", defaultvalue, input_text, container_style, input_style, container_class, input_class}) => {
    return(
        <div className="container input_container">
            <input type={type} />
        </div>
    )
};

export default memo(Input);