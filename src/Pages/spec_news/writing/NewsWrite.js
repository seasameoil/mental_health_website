import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { upload } from "@testing-library/user-event/dist/upload";
export const dbService = getFirestore();

export default function NewsWrite() {
    const [form, setForm] = useState({
        title: "",
        content: "",
        type: ""
      });

    function handleChange(event) {
        const { name, value } = event.target;
        setForm(prevState => ({
          ...prevState,
          [name]: value
        }));
      }
      //console.log(form)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(dbService, "notification"), {
                title: form.title,       
                content: form.content,  
                type: form.type,       
                uploadTime: Date.now(),
            });
            console.log(docRef)
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div>
            <div>
                제목
                <input name="title" value={form.title} onChange={handleChange}></input>
            </div>
            <div>
                내용
                <input name="content" value={form.content} onChange={handleChange}></input>
            </div>
            <div>
                분류
                <input name="type" value={form.type} onChange={handleChange}></input>
            </div>
            <div>
                <button onClick={handleSubmit}>등록</button>
            </div>
        </div>
    )
}