import React, {useState} from "react";


const Join = () => {
    const [inputs, setInputs] = useState({
        id: "",
        name: "",
        phone: "",
        email: ""
    });

    const {id, name, phone, email} = inputs;
    
    const onChange = (e) => {
        let id = e.target.id;  
        let value = e.target.value;
        setInputs({...inputs, [id]: value});
        console.log(value);
    }

    return (
        <div>
            <div>
                <label>아이디:</label>
                <input type="text" id="id" value={id} onChange={onChange} /> <br />
            </div>
            <div>
                <label>이름: </label>
                <input type="text" id="name" value={name} onChange={onChange} /> <br />
            </div>
            <div>
                <label>연락처: </label>
                <input type="tel" id="phone" value={phone} onChange={onChange} /> <br />
            </div>
            <div>
                <label>이메일: </label>
                <input type="email" id="email" value={email} onChange={onChange} /> <br />
            </div>
        </div>
    );
}

export default Join;
